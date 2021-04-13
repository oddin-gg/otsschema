// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.6
// source: ots/enum/enums.proto

package ots

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type AcceptanceStatus int32

const (
	// Not a valid value. Used for blocking 0 as invalid state.
	AcceptanceStatus_ACCEPTANCE_STATUS_UNSPECIFIED AcceptanceStatus = 0
	AcceptanceStatus_ACCEPTANCE_STATUS_REJECTED    AcceptanceStatus = 1
	AcceptanceStatus_ACCEPTANCE_STATUS_ACCEPTED    AcceptanceStatus = 2
	AcceptanceStatus_ACCEPTANCE_STATUS_PENDING     AcceptanceStatus = 3
)

// Enum value maps for AcceptanceStatus.
var (
	AcceptanceStatus_name = map[int32]string{
		0: "ACCEPTANCE_STATUS_UNSPECIFIED",
		1: "ACCEPTANCE_STATUS_REJECTED",
		2: "ACCEPTANCE_STATUS_ACCEPTED",
		3: "ACCEPTANCE_STATUS_PENDING",
	}
	AcceptanceStatus_value = map[string]int32{
		"ACCEPTANCE_STATUS_UNSPECIFIED": 0,
		"ACCEPTANCE_STATUS_REJECTED":    1,
		"ACCEPTANCE_STATUS_ACCEPTED":    2,
		"ACCEPTANCE_STATUS_PENDING":     3,
	}
)

func (x AcceptanceStatus) Enum() *AcceptanceStatus {
	p := new(AcceptanceStatus)
	*p = x
	return p
}

func (x AcceptanceStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (AcceptanceStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[0].Descriptor()
}

func (AcceptanceStatus) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[0]
}

func (x AcceptanceStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use AcceptanceStatus.Descriptor instead.
func (AcceptanceStatus) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{0}
}

type CancelStatus int32

const (
	// Not a valid value. Used for blocking 0 as invalid state.
	CancelStatus_CANCEL_STATUS_UNSPECIFIED  CancelStatus = 0
	CancelStatus_CANCEL_STATUS_NOT_CANCELED CancelStatus = 1
	CancelStatus_CANCEL_STATUS_CANCELED     CancelStatus = 2
)

// Enum value maps for CancelStatus.
var (
	CancelStatus_name = map[int32]string{
		0: "CANCEL_STATUS_UNSPECIFIED",
		1: "CANCEL_STATUS_NOT_CANCELED",
		2: "CANCEL_STATUS_CANCELED",
	}
	CancelStatus_value = map[string]int32{
		"CANCEL_STATUS_UNSPECIFIED":  0,
		"CANCEL_STATUS_NOT_CANCELED": 1,
		"CANCEL_STATUS_CANCELED":     2,
	}
)

func (x CancelStatus) Enum() *CancelStatus {
	p := new(CancelStatus)
	*p = x
	return p
}

func (x CancelStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CancelStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[1].Descriptor()
}

func (CancelStatus) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[1]
}

func (x CancelStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CancelStatus.Descriptor instead.
func (CancelStatus) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{1}
}

type CancelReason int32

const (
	// Not a valid reason. Used for blocking 0 as invalid state.
	CancelReason_CANCEL_REASON_UNSPECIFIED CancelReason = 0
	// Please use this code if a ticket response was not received within a given time.
	CancelReason_CANCEL_REASON_TICKET_TIMEOUT CancelReason = 1
	// Should be used in case the ticket information was wrong and the client will send the corrected ticket in future.
	CancelReason_CANCEL_REASON_WRONG_TICKET CancelReason = 2
	// Clients should use this if they discover a technical issue,
	// correct it and now need to cancel tickets affected by technical issues.
	CancelReason_CANCEL_REASON_TECHNICAL_ISSUE CancelReason = 3
	// Should be used in case none of the above codes works.
	CancelReason_CANCEL_REASON_UNEXPECTED_ISSUE CancelReason = 4
	// Regulator requested to cancel the ticket.
	CancelReason_CANCEL_REASON_REGULATOR CancelReason = 5
)

// Enum value maps for CancelReason.
var (
	CancelReason_name = map[int32]string{
		0: "CANCEL_REASON_UNSPECIFIED",
		1: "CANCEL_REASON_TICKET_TIMEOUT",
		2: "CANCEL_REASON_WRONG_TICKET",
		3: "CANCEL_REASON_TECHNICAL_ISSUE",
		4: "CANCEL_REASON_UNEXPECTED_ISSUE",
		5: "CANCEL_REASON_REGULATOR",
	}
	CancelReason_value = map[string]int32{
		"CANCEL_REASON_UNSPECIFIED":      0,
		"CANCEL_REASON_TICKET_TIMEOUT":   1,
		"CANCEL_REASON_WRONG_TICKET":     2,
		"CANCEL_REASON_TECHNICAL_ISSUE":  3,
		"CANCEL_REASON_UNEXPECTED_ISSUE": 4,
		"CANCEL_REASON_REGULATOR":        5,
	}
)

func (x CancelReason) Enum() *CancelReason {
	p := new(CancelReason)
	*p = x
	return p
}

func (x CancelReason) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CancelReason) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[2].Descriptor()
}

func (CancelReason) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[2]
}

func (x CancelReason) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CancelReason.Descriptor instead.
func (CancelReason) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{2}
}

type CancelRejectionReason int32

const (
	// Not a valid reason. Used for blocking 0 as invalid state.
	CancelRejectionReason_CANCEL_REJECT_REASON_UNSPECIFIED CancelRejectionReason = 0
	// Ticket was not found in OTS system.
	CancelRejectionReason_CANCEL_REJECT_REASON_TICKET_NOT_FOUND CancelRejectionReason = 1
	// Time for receiving ticket cancellation has passed.
	CancelRejectionReason_CANCEL_REJECT_REASON_TIME_EXPIRED CancelRejectionReason = 2
	// Ticket is already settled and cannot be canceled.
	CancelRejectionReason_CANCEL_REJECT_REASON_ALREADY_SETTLED CancelRejectionReason = 3
	// Reason is not specified. More info should be contained in the message field.
	CancelRejectionReason_CANCEL_REJECT_REASON_OTHER CancelRejectionReason = 4
)

// Enum value maps for CancelRejectionReason.
var (
	CancelRejectionReason_name = map[int32]string{
		0: "CANCEL_REJECT_REASON_UNSPECIFIED",
		1: "CANCEL_REJECT_REASON_TICKET_NOT_FOUND",
		2: "CANCEL_REJECT_REASON_TIME_EXPIRED",
		3: "CANCEL_REJECT_REASON_ALREADY_SETTLED",
		4: "CANCEL_REJECT_REASON_OTHER",
	}
	CancelRejectionReason_value = map[string]int32{
		"CANCEL_REJECT_REASON_UNSPECIFIED":      0,
		"CANCEL_REJECT_REASON_TICKET_NOT_FOUND": 1,
		"CANCEL_REJECT_REASON_TIME_EXPIRED":     2,
		"CANCEL_REJECT_REASON_ALREADY_SETTLED":  3,
		"CANCEL_REJECT_REASON_OTHER":            4,
	}
)

func (x CancelRejectionReason) Enum() *CancelRejectionReason {
	p := new(CancelRejectionReason)
	*p = x
	return p
}

func (x CancelRejectionReason) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (CancelRejectionReason) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[3].Descriptor()
}

func (CancelRejectionReason) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[3]
}

func (x CancelRejectionReason) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use CancelRejectionReason.Descriptor instead.
func (CancelRejectionReason) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{3}
}

type BetStakeType int32

const (
	// Not a valid type. Used for blocking 0 as invalid state.
	BetStakeType_BET_STAKE_TYPE_UNSPECIFIED BetStakeType = 0
	BetStakeType_BET_STAKE_TYPE_SUM         BetStakeType = 1
	BetStakeType_BET_STAKE_TYPE_UNIT        BetStakeType = 2
)

// Enum value maps for BetStakeType.
var (
	BetStakeType_name = map[int32]string{
		0: "BET_STAKE_TYPE_UNSPECIFIED",
		1: "BET_STAKE_TYPE_SUM",
		2: "BET_STAKE_TYPE_UNIT",
	}
	BetStakeType_value = map[string]int32{
		"BET_STAKE_TYPE_UNSPECIFIED": 0,
		"BET_STAKE_TYPE_SUM":         1,
		"BET_STAKE_TYPE_UNIT":        2,
	}
)

func (x BetStakeType) Enum() *BetStakeType {
	p := new(BetStakeType)
	*p = x
	return p
}

func (x BetStakeType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BetStakeType) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[4].Descriptor()
}

func (BetStakeType) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[4]
}

func (x BetStakeType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BetStakeType.Descriptor instead.
func (BetStakeType) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{4}
}

type AcceptOddsChange int32

const (
	// Not a valid value. Used for blocking 0 as invalid state.
	AcceptOddsChange_ACCEPT_ODDS_CHANGE_UNSPECIFIED AcceptOddsChange = 0
	AcceptOddsChange_ACCEPT_ODDS_CHANGE_NONE        AcceptOddsChange = 1
	AcceptOddsChange_ACCEPT_ODDS_CHANGE_ANY         AcceptOddsChange = 2
	AcceptOddsChange_ACCEPT_ODDS_CHANGE_HIGHER      AcceptOddsChange = 3
)

// Enum value maps for AcceptOddsChange.
var (
	AcceptOddsChange_name = map[int32]string{
		0: "ACCEPT_ODDS_CHANGE_UNSPECIFIED",
		1: "ACCEPT_ODDS_CHANGE_NONE",
		2: "ACCEPT_ODDS_CHANGE_ANY",
		3: "ACCEPT_ODDS_CHANGE_HIGHER",
	}
	AcceptOddsChange_value = map[string]int32{
		"ACCEPT_ODDS_CHANGE_UNSPECIFIED": 0,
		"ACCEPT_ODDS_CHANGE_NONE":        1,
		"ACCEPT_ODDS_CHANGE_ANY":         2,
		"ACCEPT_ODDS_CHANGE_HIGHER":      3,
	}
)

func (x AcceptOddsChange) Enum() *AcceptOddsChange {
	p := new(AcceptOddsChange)
	*p = x
	return p
}

func (x AcceptOddsChange) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (AcceptOddsChange) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[5].Descriptor()
}

func (AcceptOddsChange) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[5]
}

func (x AcceptOddsChange) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use AcceptOddsChange.Descriptor instead.
func (AcceptOddsChange) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{5}
}

type TicketChannel int32

const (
	// Not a valid value. Used for blocking 0 as invalid state.
	TicketChannel_TICKET_CHANNEL_UNSPECIFIED TicketChannel = 0
	TicketChannel_TICKET_CHANNEL_INTERNET    TicketChannel = 1
	TicketChannel_TICKET_CHANNEL_RETAIL      TicketChannel = 2
	TicketChannel_TICKET_CHANNEL_TERMINAL    TicketChannel = 3
	TicketChannel_TICKET_CHANNEL_MOBILE      TicketChannel = 4
	TicketChannel_TICKET_CHANNEL_PHONE       TicketChannel = 5
	TicketChannel_TICKET_CHANNEL_SMS         TicketChannel = 6
	TicketChannel_TICKET_CHANNEL_CALL_CENTRE TicketChannel = 7
	TicketChannel_TICKET_CHANNEL_TV_APP      TicketChannel = 8
	TicketChannel_TICKET_CHANNEL_AGENT       TicketChannel = 9
)

// Enum value maps for TicketChannel.
var (
	TicketChannel_name = map[int32]string{
		0: "TICKET_CHANNEL_UNSPECIFIED",
		1: "TICKET_CHANNEL_INTERNET",
		2: "TICKET_CHANNEL_RETAIL",
		3: "TICKET_CHANNEL_TERMINAL",
		4: "TICKET_CHANNEL_MOBILE",
		5: "TICKET_CHANNEL_PHONE",
		6: "TICKET_CHANNEL_SMS",
		7: "TICKET_CHANNEL_CALL_CENTRE",
		8: "TICKET_CHANNEL_TV_APP",
		9: "TICKET_CHANNEL_AGENT",
	}
	TicketChannel_value = map[string]int32{
		"TICKET_CHANNEL_UNSPECIFIED": 0,
		"TICKET_CHANNEL_INTERNET":    1,
		"TICKET_CHANNEL_RETAIL":      2,
		"TICKET_CHANNEL_TERMINAL":    3,
		"TICKET_CHANNEL_MOBILE":      4,
		"TICKET_CHANNEL_PHONE":       5,
		"TICKET_CHANNEL_SMS":         6,
		"TICKET_CHANNEL_CALL_CENTRE": 7,
		"TICKET_CHANNEL_TV_APP":      8,
		"TICKET_CHANNEL_AGENT":       9,
	}
)

func (x TicketChannel) Enum() *TicketChannel {
	p := new(TicketChannel)
	*p = x
	return p
}

func (x TicketChannel) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TicketChannel) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[6].Descriptor()
}

func (TicketChannel) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[6]
}

func (x TicketChannel) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TicketChannel.Descriptor instead.
func (TicketChannel) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{6}
}

type BetBonusType int32

const (
	// Not a valid type. Used for blocking 0 as invalid state.
	BetBonusType_BET_BONUS_TYPE_UNSPECIFIED BetBonusType = 0
	BetBonusType_BET_BONUS_TYPE_TOTAL       BetBonusType = 1
)

// Enum value maps for BetBonusType.
var (
	BetBonusType_name = map[int32]string{
		0: "BET_BONUS_TYPE_UNSPECIFIED",
		1: "BET_BONUS_TYPE_TOTAL",
	}
	BetBonusType_value = map[string]int32{
		"BET_BONUS_TYPE_UNSPECIFIED": 0,
		"BET_BONUS_TYPE_TOTAL":       1,
	}
)

func (x BetBonusType) Enum() *BetBonusType {
	p := new(BetBonusType)
	*p = x
	return p
}

func (x BetBonusType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BetBonusType) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[7].Descriptor()
}

func (BetBonusType) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[7]
}

func (x BetBonusType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BetBonusType.Descriptor instead.
func (BetBonusType) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{7}
}

type BetBonusMode int32

const (
	// Not a valid mode. Used for blocking 0 as invalid state.
	BetBonusMode_BET_BONUS_MODE_UNSPECIFIED BetBonusMode = 0
	BetBonusMode_BET_BONUS_MODE_ALL         BetBonusMode = 1
)

// Enum value maps for BetBonusMode.
var (
	BetBonusMode_name = map[int32]string{
		0: "BET_BONUS_MODE_UNSPECIFIED",
		1: "BET_BONUS_MODE_ALL",
	}
	BetBonusMode_value = map[string]int32{
		"BET_BONUS_MODE_UNSPECIFIED": 0,
		"BET_BONUS_MODE_ALL":         1,
	}
)

func (x BetBonusMode) Enum() *BetBonusMode {
	p := new(BetBonusMode)
	*p = x
	return p
}

func (x BetBonusMode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BetBonusMode) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[8].Descriptor()
}

func (BetBonusMode) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[8]
}

func (x BetBonusMode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BetBonusMode.Descriptor instead.
func (BetBonusMode) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{8}
}

type ReasonCode int32

const (
	// Not a valid value. Used for blocking 0 as invalid state.
	ReasonCode_REASON_CODE_UNSPECIFIED      ReasonCode = 0
	ReasonCode_REASON_CODE_INVALID_ARGUMENT ReasonCode = 1
	ReasonCode_REASON_CODE_ALREADY_EXISTS   ReasonCode = 2
	ReasonCode_REASON_CODE_NOT_FOUND        ReasonCode = 3
	ReasonCode_REASON_CODE_UNAVAILABLE      ReasonCode = 4
	ReasonCode_REASON_CODE_INTERNAL         ReasonCode = 5
)

// Enum value maps for ReasonCode.
var (
	ReasonCode_name = map[int32]string{
		0: "REASON_CODE_UNSPECIFIED",
		1: "REASON_CODE_INVALID_ARGUMENT",
		2: "REASON_CODE_ALREADY_EXISTS",
		3: "REASON_CODE_NOT_FOUND",
		4: "REASON_CODE_UNAVAILABLE",
		5: "REASON_CODE_INTERNAL",
	}
	ReasonCode_value = map[string]int32{
		"REASON_CODE_UNSPECIFIED":      0,
		"REASON_CODE_INVALID_ARGUMENT": 1,
		"REASON_CODE_ALREADY_EXISTS":   2,
		"REASON_CODE_NOT_FOUND":        3,
		"REASON_CODE_UNAVAILABLE":      4,
		"REASON_CODE_INTERNAL":         5,
	}
)

func (x ReasonCode) Enum() *ReasonCode {
	p := new(ReasonCode)
	*p = x
	return p
}

func (x ReasonCode) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ReasonCode) Descriptor() protoreflect.EnumDescriptor {
	return file_ots_enum_enums_proto_enumTypes[9].Descriptor()
}

func (ReasonCode) Type() protoreflect.EnumType {
	return &file_ots_enum_enums_proto_enumTypes[9]
}

func (x ReasonCode) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ReasonCode.Descriptor instead.
func (ReasonCode) EnumDescriptor() ([]byte, []int) {
	return file_ots_enum_enums_proto_rawDescGZIP(), []int{9}
}

var File_ots_enum_enums_proto protoreflect.FileDescriptor

var file_ots_enum_enums_proto_rawDesc = []byte{
	0x0a, 0x14, 0x6f, 0x74, 0x73, 0x2f, 0x65, 0x6e, 0x75, 0x6d, 0x2f, 0x65, 0x6e, 0x75, 0x6d, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x09, 0x6f, 0x74, 0x73, 0x2e, 0x65, 0x6e, 0x75, 0x6d,
	0x73, 0x2a, 0x94, 0x01, 0x0a, 0x10, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x61, 0x6e, 0x63, 0x65,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x21, 0x0a, 0x1d, 0x41, 0x43, 0x43, 0x45, 0x50, 0x54,
	0x41, 0x4e, 0x43, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1e, 0x0a, 0x1a, 0x41, 0x43, 0x43,
	0x45, 0x50, 0x54, 0x41, 0x4e, 0x43, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x52,
	0x45, 0x4a, 0x45, 0x43, 0x54, 0x45, 0x44, 0x10, 0x01, 0x12, 0x1e, 0x0a, 0x1a, 0x41, 0x43, 0x43,
	0x45, 0x50, 0x54, 0x41, 0x4e, 0x43, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x41,
	0x43, 0x43, 0x45, 0x50, 0x54, 0x45, 0x44, 0x10, 0x02, 0x12, 0x1d, 0x0a, 0x19, 0x41, 0x43, 0x43,
	0x45, 0x50, 0x54, 0x41, 0x4e, 0x43, 0x45, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x50,
	0x45, 0x4e, 0x44, 0x49, 0x4e, 0x47, 0x10, 0x03, 0x2a, 0x69, 0x0a, 0x0c, 0x43, 0x61, 0x6e, 0x63,
	0x65, 0x6c, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d, 0x0a, 0x19, 0x43, 0x41, 0x4e, 0x43,
	0x45, 0x4c, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43,
	0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1e, 0x0a, 0x1a, 0x43, 0x41, 0x4e, 0x43, 0x45,
	0x4c, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x4e, 0x4f, 0x54, 0x5f, 0x43, 0x41, 0x4e,
	0x43, 0x45, 0x4c, 0x45, 0x44, 0x10, 0x01, 0x12, 0x1a, 0x0a, 0x16, 0x43, 0x41, 0x4e, 0x43, 0x45,
	0x4c, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x45,
	0x44, 0x10, 0x02, 0x2a, 0xd3, 0x01, 0x0a, 0x0c, 0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65,
	0x61, 0x73, 0x6f, 0x6e, 0x12, 0x1d, 0x0a, 0x19, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f, 0x52,
	0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45,
	0x44, 0x10, 0x00, 0x12, 0x20, 0x0a, 0x1c, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f, 0x52, 0x45,
	0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x54, 0x49, 0x43, 0x4b, 0x45, 0x54, 0x5f, 0x54, 0x49, 0x4d, 0x45,
	0x4f, 0x55, 0x54, 0x10, 0x01, 0x12, 0x1e, 0x0a, 0x1a, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f,
	0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x57, 0x52, 0x4f, 0x4e, 0x47, 0x5f, 0x54, 0x49, 0x43,
	0x4b, 0x45, 0x54, 0x10, 0x02, 0x12, 0x21, 0x0a, 0x1d, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f,
	0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x54, 0x45, 0x43, 0x48, 0x4e, 0x49, 0x43, 0x41, 0x4c,
	0x5f, 0x49, 0x53, 0x53, 0x55, 0x45, 0x10, 0x03, 0x12, 0x22, 0x0a, 0x1e, 0x43, 0x41, 0x4e, 0x43,
	0x45, 0x4c, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x55, 0x4e, 0x45, 0x58, 0x50, 0x45,
	0x43, 0x54, 0x45, 0x44, 0x5f, 0x49, 0x53, 0x53, 0x55, 0x45, 0x10, 0x04, 0x12, 0x1b, 0x0a, 0x17,
	0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x52, 0x45,
	0x47, 0x55, 0x4c, 0x41, 0x54, 0x4f, 0x52, 0x10, 0x05, 0x2a, 0xd9, 0x01, 0x0a, 0x15, 0x43, 0x61,
	0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x61,
	0x73, 0x6f, 0x6e, 0x12, 0x24, 0x0a, 0x20, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f, 0x52, 0x45,
	0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x29, 0x0a, 0x25, 0x43, 0x41, 0x4e,
	0x43, 0x45, 0x4c, 0x5f, 0x52, 0x45, 0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f,
	0x4e, 0x5f, 0x54, 0x49, 0x43, 0x4b, 0x45, 0x54, 0x5f, 0x4e, 0x4f, 0x54, 0x5f, 0x46, 0x4f, 0x55,
	0x4e, 0x44, 0x10, 0x01, 0x12, 0x25, 0x0a, 0x21, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f, 0x52,
	0x45, 0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x54, 0x49, 0x4d,
	0x45, 0x5f, 0x45, 0x58, 0x50, 0x49, 0x52, 0x45, 0x44, 0x10, 0x02, 0x12, 0x28, 0x0a, 0x24, 0x43,
	0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f, 0x52, 0x45, 0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x45, 0x41,
	0x53, 0x4f, 0x4e, 0x5f, 0x41, 0x4c, 0x52, 0x45, 0x41, 0x44, 0x59, 0x5f, 0x53, 0x45, 0x54, 0x54,
	0x4c, 0x45, 0x44, 0x10, 0x03, 0x12, 0x1e, 0x0a, 0x1a, 0x43, 0x41, 0x4e, 0x43, 0x45, 0x4c, 0x5f,
	0x52, 0x45, 0x4a, 0x45, 0x43, 0x54, 0x5f, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x4f, 0x54,
	0x48, 0x45, 0x52, 0x10, 0x04, 0x2a, 0x5f, 0x0a, 0x0c, 0x42, 0x65, 0x74, 0x53, 0x74, 0x61, 0x6b,
	0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1e, 0x0a, 0x1a, 0x42, 0x45, 0x54, 0x5f, 0x53, 0x54, 0x41,
	0x4b, 0x45, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46,
	0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x16, 0x0a, 0x12, 0x42, 0x45, 0x54, 0x5f, 0x53, 0x54, 0x41,
	0x4b, 0x45, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x53, 0x55, 0x4d, 0x10, 0x01, 0x12, 0x17, 0x0a,
	0x13, 0x42, 0x45, 0x54, 0x5f, 0x53, 0x54, 0x41, 0x4b, 0x45, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f,
	0x55, 0x4e, 0x49, 0x54, 0x10, 0x02, 0x2a, 0x8e, 0x01, 0x0a, 0x10, 0x41, 0x63, 0x63, 0x65, 0x70,
	0x74, 0x4f, 0x64, 0x64, 0x73, 0x43, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x12, 0x22, 0x0a, 0x1e, 0x41,
	0x43, 0x43, 0x45, 0x50, 0x54, 0x5f, 0x4f, 0x44, 0x44, 0x53, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x47,
	0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12,
	0x1b, 0x0a, 0x17, 0x41, 0x43, 0x43, 0x45, 0x50, 0x54, 0x5f, 0x4f, 0x44, 0x44, 0x53, 0x5f, 0x43,
	0x48, 0x41, 0x4e, 0x47, 0x45, 0x5f, 0x4e, 0x4f, 0x4e, 0x45, 0x10, 0x01, 0x12, 0x1a, 0x0a, 0x16,
	0x41, 0x43, 0x43, 0x45, 0x50, 0x54, 0x5f, 0x4f, 0x44, 0x44, 0x53, 0x5f, 0x43, 0x48, 0x41, 0x4e,
	0x47, 0x45, 0x5f, 0x41, 0x4e, 0x59, 0x10, 0x02, 0x12, 0x1d, 0x0a, 0x19, 0x41, 0x43, 0x43, 0x45,
	0x50, 0x54, 0x5f, 0x4f, 0x44, 0x44, 0x53, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x47, 0x45, 0x5f, 0x48,
	0x49, 0x47, 0x48, 0x45, 0x52, 0x10, 0x03, 0x2a, 0xa6, 0x02, 0x0a, 0x0d, 0x54, 0x69, 0x63, 0x6b,
	0x65, 0x74, 0x43, 0x68, 0x61, 0x6e, 0x6e, 0x65, 0x6c, 0x12, 0x1e, 0x0a, 0x1a, 0x54, 0x49, 0x43,
	0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x55, 0x4e, 0x53, 0x50,
	0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x1b, 0x0a, 0x17, 0x54, 0x49, 0x43,
	0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x49, 0x4e, 0x54, 0x45,
	0x52, 0x4e, 0x45, 0x54, 0x10, 0x01, 0x12, 0x19, 0x0a, 0x15, 0x54, 0x49, 0x43, 0x4b, 0x45, 0x54,
	0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x52, 0x45, 0x54, 0x41, 0x49, 0x4c, 0x10,
	0x02, 0x12, 0x1b, 0x0a, 0x17, 0x54, 0x49, 0x43, 0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48, 0x41, 0x4e,
	0x4e, 0x45, 0x4c, 0x5f, 0x54, 0x45, 0x52, 0x4d, 0x49, 0x4e, 0x41, 0x4c, 0x10, 0x03, 0x12, 0x19,
	0x0a, 0x15, 0x54, 0x49, 0x43, 0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c,
	0x5f, 0x4d, 0x4f, 0x42, 0x49, 0x4c, 0x45, 0x10, 0x04, 0x12, 0x18, 0x0a, 0x14, 0x54, 0x49, 0x43,
	0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x50, 0x48, 0x4f, 0x4e,
	0x45, 0x10, 0x05, 0x12, 0x16, 0x0a, 0x12, 0x54, 0x49, 0x43, 0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48,
	0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x53, 0x4d, 0x53, 0x10, 0x06, 0x12, 0x1e, 0x0a, 0x1a, 0x54,
	0x49, 0x43, 0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x43, 0x41,
	0x4c, 0x4c, 0x5f, 0x43, 0x45, 0x4e, 0x54, 0x52, 0x45, 0x10, 0x07, 0x12, 0x19, 0x0a, 0x15, 0x54,
	0x49, 0x43, 0x4b, 0x45, 0x54, 0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x54, 0x56,
	0x5f, 0x41, 0x50, 0x50, 0x10, 0x08, 0x12, 0x18, 0x0a, 0x14, 0x54, 0x49, 0x43, 0x4b, 0x45, 0x54,
	0x5f, 0x43, 0x48, 0x41, 0x4e, 0x4e, 0x45, 0x4c, 0x5f, 0x41, 0x47, 0x45, 0x4e, 0x54, 0x10, 0x09,
	0x2a, 0x48, 0x0a, 0x0c, 0x42, 0x65, 0x74, 0x42, 0x6f, 0x6e, 0x75, 0x73, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x1e, 0x0a, 0x1a, 0x42, 0x45, 0x54, 0x5f, 0x42, 0x4f, 0x4e, 0x55, 0x53, 0x5f, 0x54, 0x59,
	0x50, 0x45, 0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00,
	0x12, 0x18, 0x0a, 0x14, 0x42, 0x45, 0x54, 0x5f, 0x42, 0x4f, 0x4e, 0x55, 0x53, 0x5f, 0x54, 0x59,
	0x50, 0x45, 0x5f, 0x54, 0x4f, 0x54, 0x41, 0x4c, 0x10, 0x01, 0x2a, 0x46, 0x0a, 0x0c, 0x42, 0x65,
	0x74, 0x42, 0x6f, 0x6e, 0x75, 0x73, 0x4d, 0x6f, 0x64, 0x65, 0x12, 0x1e, 0x0a, 0x1a, 0x42, 0x45,
	0x54, 0x5f, 0x42, 0x4f, 0x4e, 0x55, 0x53, 0x5f, 0x4d, 0x4f, 0x44, 0x45, 0x5f, 0x55, 0x4e, 0x53,
	0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x16, 0x0a, 0x12, 0x42, 0x45,
	0x54, 0x5f, 0x42, 0x4f, 0x4e, 0x55, 0x53, 0x5f, 0x4d, 0x4f, 0x44, 0x45, 0x5f, 0x41, 0x4c, 0x4c,
	0x10, 0x01, 0x2a, 0xbd, 0x01, 0x0a, 0x0a, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x43, 0x6f, 0x64,
	0x65, 0x12, 0x1b, 0x0a, 0x17, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x43, 0x4f, 0x44, 0x45,
	0x5f, 0x55, 0x4e, 0x53, 0x50, 0x45, 0x43, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x00, 0x12, 0x20,
	0x0a, 0x1c, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x49, 0x4e,
	0x56, 0x41, 0x4c, 0x49, 0x44, 0x5f, 0x41, 0x52, 0x47, 0x55, 0x4d, 0x45, 0x4e, 0x54, 0x10, 0x01,
	0x12, 0x1e, 0x0a, 0x1a, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f,
	0x41, 0x4c, 0x52, 0x45, 0x41, 0x44, 0x59, 0x5f, 0x45, 0x58, 0x49, 0x53, 0x54, 0x53, 0x10, 0x02,
	0x12, 0x19, 0x0a, 0x15, 0x52, 0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f,
	0x4e, 0x4f, 0x54, 0x5f, 0x46, 0x4f, 0x55, 0x4e, 0x44, 0x10, 0x03, 0x12, 0x1b, 0x0a, 0x17, 0x52,
	0x45, 0x41, 0x53, 0x4f, 0x4e, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x55, 0x4e, 0x41, 0x56, 0x41,
	0x49, 0x4c, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x04, 0x12, 0x18, 0x0a, 0x14, 0x52, 0x45, 0x41, 0x53,
	0x4f, 0x4e, 0x5f, 0x43, 0x4f, 0x44, 0x45, 0x5f, 0x49, 0x4e, 0x54, 0x45, 0x52, 0x4e, 0x41, 0x4c,
	0x10, 0x05, 0x42, 0x1d, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e,
	0x6f, 0x74, 0x73, 0x5a, 0x0c, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e, 0x67, 0x67, 0x2f, 0x6f, 0x74,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ots_enum_enums_proto_rawDescOnce sync.Once
	file_ots_enum_enums_proto_rawDescData = file_ots_enum_enums_proto_rawDesc
)

func file_ots_enum_enums_proto_rawDescGZIP() []byte {
	file_ots_enum_enums_proto_rawDescOnce.Do(func() {
		file_ots_enum_enums_proto_rawDescData = protoimpl.X.CompressGZIP(file_ots_enum_enums_proto_rawDescData)
	})
	return file_ots_enum_enums_proto_rawDescData
}

var file_ots_enum_enums_proto_enumTypes = make([]protoimpl.EnumInfo, 10)
var file_ots_enum_enums_proto_goTypes = []interface{}{
	(AcceptanceStatus)(0),      // 0: ots.enums.AcceptanceStatus
	(CancelStatus)(0),          // 1: ots.enums.CancelStatus
	(CancelReason)(0),          // 2: ots.enums.CancelReason
	(CancelRejectionReason)(0), // 3: ots.enums.CancelRejectionReason
	(BetStakeType)(0),          // 4: ots.enums.BetStakeType
	(AcceptOddsChange)(0),      // 5: ots.enums.AcceptOddsChange
	(TicketChannel)(0),         // 6: ots.enums.TicketChannel
	(BetBonusType)(0),          // 7: ots.enums.BetBonusType
	(BetBonusMode)(0),          // 8: ots.enums.BetBonusMode
	(ReasonCode)(0),            // 9: ots.enums.ReasonCode
}
var file_ots_enum_enums_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ots_enum_enums_proto_init() }
func file_ots_enum_enums_proto_init() {
	if File_ots_enum_enums_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ots_enum_enums_proto_rawDesc,
			NumEnums:      10,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ots_enum_enums_proto_goTypes,
		DependencyIndexes: file_ots_enum_enums_proto_depIdxs,
		EnumInfos:         file_ots_enum_enums_proto_enumTypes,
	}.Build()
	File_ots_enum_enums_proto = out.File
	file_ots_enum_enums_proto_rawDesc = nil
	file_ots_enum_enums_proto_goTypes = nil
	file_ots_enum_enums_proto_depIdxs = nil
}
