package main

import "time"

type Config struct {
	// URL of service, e.g. "api-ots.integration.oddin.gg:443"
	URL string `mapstructure:"url"`

	// OTS token of the given token.
	Token string `mapstructure:"token"`

	// ConnectionTime is the time interval during which is kept connection to the OTS stream. After that time
	// is connection closed and application is shut down.
	ConnectionTime time.Duration `mapstructure:"connection_time"`

	// SendTicket - Reset this flag to disable sending the brand-new generated ticket into the ticket stream.
	// Mind that this can work only in "ticket stream mode".
	SendTicket bool `mapstructure:"send_ticket"`

	// QuitOnSentTicketStatus - Set this flag to shut down the application after receiving of state response for
	// the generated ticket (it can be used only with SendTicket set to true).
	QuitOnSentTicketStatus bool `mapstructure:"quit_on_sent_ticket_status"`

	// Mode - Define the mode in which this tool runs. Check constants of type `mode` for valid values.
	Mode mode `mapstructure:"mode"`
}
