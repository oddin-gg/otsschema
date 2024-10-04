package main

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"time"

	"github.com/google/uuid"
	"github.com/kelseyhightower/envconfig"
	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
)

type config struct {
	// URL of service, e.g. "api-ots.integration.oddin.gg:443"
	URL string `envconfig:"URL" required:"true"`

	// OTS token of the given token.
	Token string `envconfig:"TOKEN" required:"true"`

	// ConnectionTime is the time interval during which is kept connection to the OTS stream. After that time
	// is connection closed and application is shut down.
	ConnectionTime time.Duration `envconfig:"CONNECTION_TIME" default:"60s"`

	// SendTicket - Reset this flag to disable sending the brand-new generated ticket into the ticket stream.
	// Mind that this can work only in "ticket stream mode".
	SendTicket bool `envconfig:"SEND_TICKET" default:"true"`

	// QuitOnSentTicketStatus - Set this flag to shut down the application after receiving of state response for
	// the generated ticket (it can be used only with SendTicket set to true).
	QuitOnSentTicketStatus bool `envconfig:"QUIT_ON_SENT_TICKET_STATUS" default:"false"`

	// Mode - Define the mode in which this tool runs. Check constants of type `mode` for valid values.
	Mode mode `envconfig:"MODE" default:"ticket stream mode"`
}

// generateTicket should return nil if no new ticket should be generated, otherwise the new ticket should be prepared
// and returned by this function. It is implemented on for connectToTicketStream feature.
func generateTicket(cfg config) *ots.Ticket {
	switch {
	case cfg.Mode != ModeTicketStream,
		!cfg.SendTicket:
		return nil
	}

	obbSelection := obbSelectionInput{
		obbSessionID: uuid.NewString(),
		extIDs: []string{
			"od:match:251368/1/1?variant=way:two&way=two",
			"od:match:251368/6/1?variant=way:three&map=1&way=three",
		},
		odds: 350000,
	}

	return NewObbSingleTicket(
		&obbSelection,
		WithStake(10000),
		WithCurrency(defaultCurrencyCode),
	)
}

func main() {
	var cfg config
	if err := envconfig.Process("", &cfg); err != nil {
		panic(err)
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
		cfg.URL,
		grpc.WithBlock(),
		grpc.WithTransportCredentials(credentials.NewTLS(&tlsCfg)),
	)
	if err != nil {
		panic(err)
	}

	ctx := metadata.NewOutgoingContext(context.Background(), metadata.New(map[string]string{
		"token": cfg.Token,
	}))

	client := ots.NewOtsClient(conn)

	switch cfg.Mode {
	case ModeTicketStream:
		connectToTicketStream(ctx, cfg, client)
	case ModeRiskApi:
		connectToRiskApiStream(ctx, cfg, client)
	}
}

func toJson(msg proto.Message) string {
	opt := protojson.MarshalOptions{Multiline: true, EmitUnpopulated: true}
	return opt.Format(msg)
}
