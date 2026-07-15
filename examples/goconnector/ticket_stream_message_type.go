package main

import (
	"fmt"
	"maps"
	"strings"
)

type ticketStreamMessageType uint

const (
	TicketStreamMessageTypeAcceptTicket ticketStreamMessageType = iota + 1
	TicketStreamMessageTypeMaxStake
)

const (
	TicketStreamMessageTypeTextAcceptTicket = "ACCEPT_TICKET"
	TicketStreamMessageTypeTextMaxStake     = "MAX_STAKE"
)

var ticketStreamMessageTypeToText = map[ticketStreamMessageType]string{
	TicketStreamMessageTypeAcceptTicket: TicketStreamMessageTypeTextAcceptTicket,
	TicketStreamMessageTypeMaxStake:     TicketStreamMessageTypeTextMaxStake,
}

var ticketStreamMessageTypeFromText = map[string]ticketStreamMessageType{
	TicketStreamMessageTypeTextAcceptTicket: TicketStreamMessageTypeAcceptTicket,
	TicketStreamMessageTypeTextMaxStake:     TicketStreamMessageTypeMaxStake,
}

// String satisfies Stringer interface, so it is easy to print a mode.
func (m *ticketStreamMessageType) String() string {
	text, found := ticketStreamMessageTypeToText[*m]
	if !found {
		return "<? unknown mode ?>"
	}

	return text
}

// UnmarshalText satisfies encoding.TextUnmarshaler interface, so it is easy to parse a mode from text representation.
func (m *ticketStreamMessageType) UnmarshalText(binary []byte) error {
	text := string(binary)
	variant, found := ticketStreamMessageTypeFromText[text]
	if !found {
		return fmt.Errorf("unknown ticketStreamMessageType %q (domain = {%s})", text, strings.Join(m.allValidVariants(), ", "))
	}

	*m = variant
	return nil
}

func (m *ticketStreamMessageType) allValidVariants() []string {
	result := make([]string, 0, len(ticketStreamMessageTypeFromText))
	for variant := range maps.Keys(ticketStreamMessageTypeFromText) {
		result = append(result, `"`+variant+`"`)
	}

	return result
}
