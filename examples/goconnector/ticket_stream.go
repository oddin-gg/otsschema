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

			case req.GetData() != nil:
				fmt.Println("#####################################################################################")
				fmt.Println("Incoming ticket data: \n", toJson(req))
				fmt.Println("#####################################################################################")

			case req.GetState() != nil:
				state := req.GetState().TicketStatus.String()
				fmt.Println("#####################################################################################")
				fmt.Printf("Incoming ticket state (state=%s): %s\n", state, toJson(req))
				fmt.Println("#####################################################################################")
			}
		}
	}()

	closeExampleTicker := time.NewTimer(cfg.ConnectionTime)

	// Optional sending of the ticket (see generateTicket() function defined on top of the main.go file).
	var newTicketDelay <-chan time.Time
	generatedTicket := generateTicket(cfg)
	if generatedTicket != nil {
		newTicketDelay = time.After(time.Second * 1)
	}

	for {
		select {

		case <-closeExampleTicker.C:
			fmt.Println("Closing ticket stream example")
			closeCh <- struct{}{}

		case <-newTicketDelay:
			fmt.Println("#####################################################################################")
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
			fmt.Println("#####################################################################################")

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
