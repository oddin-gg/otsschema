package main

import (
	"fmt"
	"maps"
	"strings"
)

type mode uint

const (
	// ModeTicketStream = ticket stream mode (the original mode of this tool).
	ModeTicketStream mode = iota
	// ModeRiskApi = RiskAPI mode (listening to the changes propagated through bettors server stream).
	ModeRiskApi
)

const (
	// modeTicketStreamAsText is a parsable text value of ModeTicketStream.
	modeTicketStreamAsText = "ticket stream mode"
	// modeRiskApiAsText is a parsable text value of ModeRiskApi.
	modeRiskApiAsText = "risk api mode"
)

var toText = map[mode]string{
	ModeTicketStream: modeRiskApiAsText,
	ModeRiskApi:      modeRiskApiAsText,
}

var fromText = map[string]mode{
	modeTicketStreamAsText: ModeTicketStream,
	modeRiskApiAsText:      ModeRiskApi,
}

// String satisfies Stringer interface, so it is easy to print a mode.
func (m *mode) String() string {
	text, found := toText[*m]
	if !found {
		return "<? unknown mode ?>"
	}

	return text
}

// UnmarshalText satisfies encoding.TextUnmarshaler interface, so it is easy to parse a mode from text representation.
func (m *mode) UnmarshalText(binary []byte) error {
	text := string(binary)
	variant, found := fromText[text]
	if !found {
		return fmt.Errorf("unknown mode %q (domain = {%s})", text, strings.Join(allValidVariants(), ", "))
	}

	*m = variant
	return nil
}

func allValidVariants() []string {
	result := make([]string, 0, len(fromText))
	for variant := range maps.Keys(fromText) {
		result = append(result, `"`+variant+`"`)
	}

	return result
}
