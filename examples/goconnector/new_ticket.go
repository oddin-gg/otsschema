package main

import (
	"github.com/google/uuid"
	"github.com/oddin-gg/otsschema/go/oddin.gg/ots"
	"google.golang.org/protobuf/types/known/timestamppb"
	"google.golang.org/protobuf/types/known/wrapperspb"
)

const (
	defaultCurrencyCode = "EUR"
	defaultLanguageCode = "en"
	defaultCustomerId   = "cust-id-12"
)

type regularSelectionInput struct {
	extID string
	odds  uint64
}

type obbSelectionInput struct {
	obbSessionID string
	extIDs       []string
	odds         uint64
}

type TicketOption func(*ots.Ticket)

// WithStake set custom value of stake on the generated ticket.
// It is an example of option that does additional setup of the ticket before it gets send to OTS.
func WithStake(stake uint64) TicketOption {
	return func(ticket *ots.Ticket) {
		switch {
		case stake == 0:
			panic("stake cannot be 0")

		case ticket == nil:
			panic("option got nil ticket")

		case len(ticket.GetBets()) == 0:
			panic("option got ticket with nil bet")

		case len(ticket.GetBets()) > 1:
			panic("option got ticket with multiple bets")
		}

		ticket.Bets[0].Stake = &ots.BetStake{
			Value: stake,
			Type:  ots.BetStakeType_BET_STAKE_TYPE_SUM,
		}
	}
}

// WithStakeMultiplier set custom value of stake multiplier on the generated ticket.
func WithStakeMultiplier(stakeMultiplier uint64) TicketOption {
	return func(ticket *ots.Ticket) {
		switch {
		case stakeMultiplier == 0:
			panic("stake cannot be 0")

		case ticket == nil:
			panic("option got nil ticket")

		case len(ticket.GetBets()) == 0:
			panic("option got ticket with nil bet")

		case len(ticket.GetBets()) > 1:
			panic("option got ticket with multiple bets")
		}

		ticket.StakeMultiplier = wrapperspb.UInt64(stakeMultiplier)
	}
}

// WithCurrency set custom value of currency on the generated ticket.
func WithCurrency(code string) TicketOption {
	return func(ticket *ots.Ticket) {
		if ticket == nil {
			panic("option got nil ticket")
		}

		ticket.Currency = code
	}
}

// WithUniqueCustomerID use randomly generated UUID as a customer ID.
func WithUniqueCustomerID() TicketOption {
	return func(ticket *ots.Ticket) {
		switch {
		case ticket == nil:
			panic("option got nil ticket")

		case ticket.Customer == nil:
			panic("option got ticket with nil customer")
		}

		ticket.Customer.Id = uuid.NewString()
	}
}

// NewRegularSingleTicket create a ticket with a single regular selection.
func NewRegularSingleTicket(
	selection *regularSelectionInput,
	options ...TicketOption,
) *ots.Ticket {
	return NewTicket([]*regularSelectionInput{selection}, nil, options...)
}

// NewObbSingleTicket create a ticket with a single obb selection (and at least two obb sub-selections).
func NewObbSingleTicket(
	selection *obbSelectionInput,
	options ...TicketOption,
) *ots.Ticket {
	return NewTicket(nil, []*obbSelectionInput{selection}, options...)
}

// NewTicket create a ticket with any combination of regular selections and obb selections.
func NewTicket(
	regularSelections []*regularSelectionInput,
	obbSelections []*obbSelectionInput,
	options ...TicketOption,
) *ots.Ticket {
	selectionIDs := make([]*ots.BetSelection, 0, len(regularSelections)+len(obbSelections))
	selections := make(map[string]*ots.TicketSelection)
	for _, s := range regularSelections {
		selectionIDs = append(selectionIDs, &ots.BetSelection{Id: s.extID})
		selections[s.extID] = newRegularSelection(s.extID, s.odds)
	}
	for _, s := range obbSelections {
		selectionExtID := obbSelectionExtID(s.obbSessionID)
		selectionIDs = append(selectionIDs, &ots.BetSelection{Id: selectionExtID})
		selections[selectionExtID] = newObbSelection(s.obbSessionID, s.extIDs, s.odds)
	}

	result := &ots.Ticket{
		Id:               uuid.NewString(),
		AcceptOddsChange: ots.AcceptOddsChange_ACCEPT_ODDS_CHANGE_ANY,
		Channel:          ots.TicketChannel_TICKET_CHANNEL_INTERNET,
		Currency:         defaultCurrencyCode,
		Customer: &ots.TicketCustomer{
			Id:       defaultCustomerId,
			Language: defaultLanguageCode,
		},
		StakeMultiplier:   wrapperspb.UInt64(10000),
		Timestamp:         timestamppb.Now(),
		TotalCombinations: 1,
		Bets: []*ots.Bet{
			&ots.Bet{
				Id:    wrapperspb.String(uuid.NewString()),
				Bonus: nil,
				Stake: &ots.BetStake{
					Value: 225000,
					Type:  ots.BetStakeType_BET_STAKE_TYPE_SUM,
				},
				ReofferId:  nil,
				TotalWins:  nil,
				Systems:    []uint32{uint32(len(selectionIDs))},
				Selections: selectionIDs,
			},
		},
		Selections: selections,
	}

	for _, option := range options {
		option(result)
	}

	return result
}

func newRegularSelection(
	selectionExtID string,
	odds uint64,
) *ots.TicketSelection {
	return &ots.TicketSelection{
		Id:             selectionExtID,
		Odds:           odds,
		Foreign:        nil,
		ObbSessionInfo: nil,
	}
}

func newObbSelection(
	obbSessionID string,
	selectionExtIDs []string,
	odds uint64,
) *ots.TicketSelection {
	return &ots.TicketSelection{
		Id:      obbSelectionExtID(obbSessionID),
		Odds:    odds,
		Foreign: nil,
		ObbSessionInfo: &ots.OBBSessionInfo{
			SessionId:     obbSessionID,
			SubSelections: selectionExtIDs,
		},
	}
}

func obbSelectionExtID(obbSessionID string) string {
	return "od:obb_session:" + obbSessionID
}
