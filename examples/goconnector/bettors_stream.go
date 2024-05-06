package main

import (
	"context"
	"fmt"
	"io"
	"time"

	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func connectToRiskApiStream(ctx context.Context, client ots.OtsClient) {
	closeCh := make(chan struct{}, 1)

	recoverSince := time.Now().Add(-2 * 24 * time.Hour) // recovers last two days bettors updates
	//recoverSince := time.Unix(0, 0) // recovers all bettors updates

	stream, err := client.Bettors(ctx, &ots.BettorsRequest{RecoverSince: timestamppb.New(recoverSince)})
	if err != nil {
		panic(err)
	}

	fmt.Println("Risk API (Bettors) - CONNECTED")

	go func() {
		var i uint
		for {
			// receive data from stream
			req, err := stream.Recv()
			switch {
			case err == io.EOF:
				fmt.Println("Bettors stream closed")
				closeCh <- struct{}{}
				return

			case err != nil:
				panic(err)

			case req.GetKeepalive() != nil:
				fmt.Println("Keepalive received")
				continue

			case req.GetBettor() != nil:
				i++
				fmt.Println("#####################################################################################")
				fmt.Printf("Incoming bettor data [%d]: \n%s \n", i, toJson(req))
				fmt.Println("#####################################################################################")

			case req.GetData() != nil:
				fmt.Println("#####################################################################################")
				fmt.Println("Incoming data: \n", toJson(req))
				fmt.Println("#####################################################################################")
			}
		}
	}()

	closeExampleTicker := time.NewTimer(time.Hour * 60)

	for {
		select {

		case <-closeExampleTicker.C:
			fmt.Println("Closing bettors example")
			closeCh <- struct{}{}

		case <-closeCh:
			if err := stream.CloseSend(); err != nil {
				panic(err)
			}
			fmt.Println("Bettors stream closed")
			return
		}
	}
}
