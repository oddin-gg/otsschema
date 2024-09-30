package main

import (
	"context"
	"fmt"
	"io"
	"time"

	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func connectToTicketStream(ctx context.Context, cfg config, client ots.OtsClient) {
	closeCh := make(chan struct{}, 1)
	aliveTicker := time.NewTicker(10 * time.Second)

	stream, err := client.Ticket(ctx)
	if err != nil {
		panic(err)
	}

	fmt.Println("Ticket stream CONNECTED")
	closeExampleTicker := time.NewTimer(cfg.ConnectionTime)

	// Optional sending of the ticket (see generateTicket() function defined on top of the main.go file).
	var newTicketDelay <-chan time.Time
	generatedTicket := generateTicket(cfg)
	if generatedTicket != nil {
		newTicketDelay = time.After(time.Second * 1)
	}

	go func() {
		for {
			// receive data from stream
			req, err := stream.Recv()
			switch {
			case err == io.EOF:
				fmt.Println("Ticket stream closed")
				closeCh <- struct{}{}
				return

			case err != nil:
				panic(err)

			case req.GetKeepalive() != nil:
				fmt.Println("Keepalive received")
				continue

			case req.GetState() != nil:
				fmt.Println("###################################################################")
				fmt.Printf("Incoming ticket state: %s\n", toJson(req))
				fmt.Println("###################################################################")

				if cfg.QuitOnSentTicketStatus && cfg.SendTicket && req.GetState().GetId() == generatedTicket.GetId() {
					closeExampleTicker.Reset(1 * time.Nanosecond)
				}

			case req.GetData() != nil: // to handle oll other requests
				fmt.Println("###################################################################")
				fmt.Println("Incoming ticket data: \n", toJson(req))
				fmt.Println("###################################################################")
			}
		}
	}()

	for {
		select {

		case <-closeExampleTicker.C:
			fmt.Println("Closing ticket stream example")
			closeCh <- struct{}{}

		case <-newTicketDelay:
			fmt.Println("###################################################################")
			fmt.Println("Sending generated ticket...")
			if err := stream.Send(&ots.TicketRequest{
				Data: &ots.TicketRequest_Ticket{
					Ticket: generatedTicket,
				},
			}); err != nil {
				panic(err)
			}
			fmt.Printf(
				"Sent generated ticket: %s\n",
				toJson(generatedTicket),
			)
			fmt.Println("###################################################################")

		case <-closeCh:
			if err := stream.CloseSend(); err != nil {
				panic(err)
			}
			fmt.Println("Ticket stream closed")
			return

		case <-aliveTicker.C:
			if err := stream.Send(&ots.TicketRequest{
				Data: &ots.TicketRequest_Keepalive{
					Keepalive: &ots.StreamKeepalive{
						Timestamp: timestamppb.Now(),
					},
				},
			}); err != nil {
				panic(err)
			}
			fmt.Println("Keepalive sent")
		}
	}
}
