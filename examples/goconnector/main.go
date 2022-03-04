package main

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func main() {
	url := strings.Trim(os.Getenv("URL"), " ")
	if url == "" {
		panic("missing 'URL' env variable")
	}

	accessToken := strings.Trim(os.Getenv("TOKEN"), " ")
	if accessToken == "" {
		panic("missing 'TOKEN' env variable")
	}

	var tlsCfg tls.Config
	var err error
	tlsCfg.RootCAs, err = x509.SystemCertPool()
	if err != nil {
		tlsCfg.RootCAs = x509.NewCertPool()
	}

	connCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	conn, err := grpc.DialContext(
		connCtx,
		url,
		grpc.WithBlock(),
		grpc.WithTransportCredentials(credentials.NewTLS(&tlsCfg)),
	)
	if err != nil {
		panic(err)
	}

	ctx := metadata.NewOutgoingContext(context.Background(), metadata.New(map[string]string{
		"token": accessToken,
	}))

	closeCh := make(chan bool, 1)
	aliveTicker := time.NewTicker(10 * time.Second)

	client := ots.NewOtsClient(conn)

	stream, err := client.Ticket(ctx)
	if err != nil {
		panic(err)
	}

	fmt.Println("CONNECTED")

	go func() {
		for {
			// receive data from stream
			req, err := stream.Recv()
			switch {
			case err == io.EOF:
				fmt.Println("stream closed")
				closeCh <- true
				return

			case err != nil:
				panic(err)

			case req.GetKeepalive() != nil:
				fmt.Println("keepalive Received")
				continue

			case req.GetState() != nil:
				fmt.Println("incoming Ticket state")

			}
		}
	}()

	closeExampleTicker := time.NewTimer(time.Second * 60)

	for {
		select {

		case <-closeExampleTicker.C:
			fmt.Println("closing example")
			closeCh <- true

		case <-closeCh:
			if err := stream.CloseSend(); err != nil {
				panic(err)
			}
			fmt.Println("stream closed")
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
			fmt.Println("keepalive Sent")
		}
	}
}
