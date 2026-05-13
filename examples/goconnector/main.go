package main

import (
	"context"
	"crypto/tls"
	"crypto/x509"
	"fmt"
	"time"

	"github.com/go-viper/mapstructure/v2"
	"github.com/google/uuid"
	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
)

// generateTicket should return nil if no new ticket should be generated, otherwise the new ticket should be prepared
// and returned by this function. It is implemented on for connectToTicketStream feature.
func generateTicket(cfg Config) *ots.Ticket {
	switch {
	case cfg.Mode != ModeTicketStream,
		!cfg.SendTicket:
		return nil
	}

	regularSelections := []*regularSelectionInput{
		{
			extID: "od:match:193117/1/1?variant=way:two&way=two",
			odds:  18200,
		},
	}

	obbSelection := []*obbSelectionInput{
		{
			obbSessionID: uuid.NewString(),
			extIDs: []string{
				"od:match:251368/1/1?variant=way:two&way=two",
				"od:match:251368/6/1?variant=way:three&map=1&way=three",
			},
			odds: 350000,
		},
	}

	return NewTicket(
		regularSelections,
		obbSelection,
		WithStake(10000),
		WithCurrency(defaultCurrencyCode),
		WithBettorID("ext_bettor_id_1"),
	)
}

func main() {
	configPath := pflag.StringP("config", "c", "config.yaml", "path to YAML config file")
	pflag.Parse()

	cfg, err := loadConfig(*configPath)
	if err != nil {
		panic(err)
	}

	var tlsCfg tls.Config
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

func loadConfig(path string) (Config, error) {
	v := viper.New()
	v.SetConfigFile(path)
	v.SetConfigType("yaml")

	v.SetDefault("connection_time", "60s")
	v.SetDefault("send_ticket", true)
	v.SetDefault("quit_on_sent_ticket_status", false)
	v.SetDefault("mode", modeTicketStreamAsText)

	if err := v.ReadInConfig(); err != nil {
		return Config{}, fmt.Errorf("read config %q: %w", path, err)
	}

	var cfg Config
	if err := v.Unmarshal(&cfg, viper.DecodeHook(mapstructure.ComposeDecodeHookFunc(
		mapstructure.StringToTimeDurationHookFunc(),
		mapstructure.TextUnmarshallerHookFunc(),
	))); err != nil {
		return Config{}, fmt.Errorf("parse config: %w", err)
	}

	if cfg.URL == "" || cfg.Token == "" {
		return Config{}, fmt.Errorf("config %q: url and token are required", path)
	}

	return cfg, nil
}

func toJson(msg proto.Message) string {
	opt := protojson.MarshalOptions{Multiline: true, EmitUnpopulated: true}
	return opt.Format(msg)
}
