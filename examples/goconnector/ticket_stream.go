package main

import (
	"context"
	"fmt"
	"io"
	"time"

	"github.com/google/uuid"
	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"google.golang.org/protobuf/types/known/timestamppb"
	"google.golang.org/protobuf/types/known/wrapperspb"
)

func connectToTicketStream(ctx context.Context, client ots.OtsClient) {
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
				fmt.Println("#####################################################################################")
				fmt.Println("Incoming ticket state: \n", toJson(req))
				fmt.Println("#####################################################################################")
			}
		}
	}()

	//go sendExampleTicketRequest(stream) // uncomment to send ticket request

	closeExampleTicker := time.NewTimer(time.Hour * 60)

	for {
		select {

		case <-closeExampleTicker.C:
			fmt.Println("Closing ticket stream example")
			closeCh <- struct{}{}

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

func sendExampleTicketRequest(stream ots.Ots_TicketClient) {
	ticketID := uuid.New()
	selectionID := "<change-it>" // e.g.: "od:match:1075836/1?variant=way:two&1-variant=way:two&way=two/2"
	odds := uint64(100000)       // change it according current odds of particular market
	stake := uint64(1000)

	ticket := ots.Ticket{
		Id:        ticketID.String(),
		Timestamp: timestamppb.Now(),
		Bets: []*ots.Bet{
			{
				Id:    nil,
				Bonus: nil,
				Stake: &ots.BetStake{
					Value: stake,
					Type:  ots.BetStakeType_BET_STAKE_TYPE_SUM,
				},
				Systems: []uint32{1},
				Selections: []*ots.BetSelection{
					{Id: selectionID},
				},
			},
		},
		AcceptOddsChange:  ots.AcceptOddsChange_ACCEPT_ODDS_CHANGE_ANY,
		TotalCombinations: 1,
		Customer: &ots.TicketCustomer{
			Id:       "<change-it>",
			Language: "en",
		},
		ReofferId: nil,
		Selections: map[string]*ots.TicketSelection{
			selectionID: {
				Id:      selectionID,
				Odds:    odds,
				Foreign: wrapperspb.Bool(false),
			},
		},
		LocationId:                nil,
		Currency:                  "EUR",
		Channel:                   ots.TicketChannel_TICKET_CHANNEL_INTERNET,
		LastForeignEventStartTime: nil,
		LastForeignEventEndTime:   nil,
		StakeMultiplier:           nil,
	}

	msg := ots.TicketRequest{Data: &ots.TicketRequest_Ticket{Ticket: &ticket}}
	err := stream.Send(&msg)
	if err != nil {
		panic(err)
	}
}
