package main

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
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

	runTicketStream := true
	runTicketStreamStr := strings.Trim(os.Getenv("RUN_TICKET_STREAM"), " ")
	if runTicketStreamStr != "" {
		v, err := strconv.ParseBool(runTicketStreamStr)
		if err != nil {
			panic(err)
		}
		runTicketStream = v
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

	client := ots.NewOtsClient(conn)

	if runTicketStream {
		connectToTicketStream(ctx, client)
	} else {
		connectToRiskApiStream(ctx, client)

	}
}

func toJson(msg proto.Message) string {
	opt := protojson.MarshalOptions{Multiline: true, EmitUnpopulated: true}
	return opt.Format(msg)
}
