// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.19.4
// source: ots/ticket_cancel.proto

package ots

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type TicketCancelRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique ticket id from the operator’s system.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Enum describing the reason for cancelling.
	CancelReason CancelReason `protobuf:"varint,2,opt,name=cancel_reason,json=cancelReason,proto3,enum=ots.enums.CancelReason" json:"cancel_reason,omitempty"`
	// Verbose description of the reason for cancelling the ticket.
	CancelReasonDetail string `protobuf:"bytes,3,opt,name=cancel_reason_detail,json=cancelReasonDetail,proto3" json:"cancel_reason_detail,omitempty"`
	// Timestamp of the ticket cancellation in UTC.
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
	// Cancel percent multiplied by 10 000 and rounded to a long value. Only applicable if cancelling the whole ticket.
	CancelPercent uint32 `protobuf:"varint,5,opt,name=cancel_percent,json=cancelPercent,proto3" json:"cancel_percent,omitempty"`
	// Information about the partial bet cancelation. Mutually exclusive with cancel_percent.
	CancelBetInfo []*CancelBetInfo `protobuf:"bytes,6,rep,name=cancel_bet_info,json=cancelBetInfo,proto3" json:"cancel_bet_info,omitempty"`
}

func (x *TicketCancelRequest) Reset() {
	*x = TicketCancelRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_ticket_cancel_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TicketCancelRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TicketCancelRequest) ProtoMessage() {}

func (x *TicketCancelRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ots_ticket_cancel_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TicketCancelRequest.ProtoReflect.Descriptor instead.
func (*TicketCancelRequest) Descriptor() ([]byte, []int) {
	return file_ots_ticket_cancel_proto_rawDescGZIP(), []int{0}
}

func (x *TicketCancelRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *TicketCancelRequest) GetCancelReason() CancelReason {
	if x != nil {
		return x.CancelReason
	}
	return CancelReason_CANCEL_REASON_UNSPECIFIED
}

func (x *TicketCancelRequest) GetCancelReasonDetail() string {
	if x != nil {
		return x.CancelReasonDetail
	}
	return ""
}

func (x *TicketCancelRequest) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

func (x *TicketCancelRequest) GetCancelPercent() uint32 {
	if x != nil {
		return x.CancelPercent
	}
	return 0
}

func (x *TicketCancelRequest) GetCancelBetInfo() []*CancelBetInfo {
	if x != nil {
		return x.CancelBetInfo
	}
	return nil
}

type CancelBetInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique bet id from the operator’s system.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Cancel percent multiplied by 10 000 and rounded to a long value. Only applicable if cancelling the whole ticket.
	CancelPercent uint32 `protobuf:"varint,2,opt,name=cancel_percent,json=cancelPercent,proto3" json:"cancel_percent,omitempty"`
}

func (x *CancelBetInfo) Reset() {
	*x = CancelBetInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_ticket_cancel_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CancelBetInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CancelBetInfo) ProtoMessage() {}

func (x *CancelBetInfo) ProtoReflect() protoreflect.Message {
	mi := &file_ots_ticket_cancel_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CancelBetInfo.ProtoReflect.Descriptor instead.
func (*CancelBetInfo) Descriptor() ([]byte, []int) {
	return file_ots_ticket_cancel_proto_rawDescGZIP(), []int{1}
}

func (x *CancelBetInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *CancelBetInfo) GetCancelPercent() uint32 {
	if x != nil {
		return x.CancelPercent
	}
	return 0
}

type TicketCancelResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Acceptance status - REJECTED or ACCEPTED.
	Status AcceptanceStatus `protobuf:"varint,1,opt,name=status,proto3,enum=ots.enums.AcceptanceStatus" json:"status,omitempty"`
	// Enum describing cancel rejection reason.
	CancelRejectionReason CancelRejectionReason `protobuf:"varint,2,opt,name=cancel_rejection_reason,json=cancelRejectionReason,proto3,enum=ots.enums.CancelRejectionReason" json:"cancel_rejection_reason,omitempty"`
	// Verbose description of ticket cancel rejection reason.
	CancelRejectionMessage string `protobuf:"bytes,3,opt,name=cancel_rejection_message,json=cancelRejectionMessage,proto3" json:"cancel_rejection_message,omitempty"`
}

func (x *TicketCancelResponse) Reset() {
	*x = TicketCancelResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_ticket_cancel_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TicketCancelResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TicketCancelResponse) ProtoMessage() {}

func (x *TicketCancelResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ots_ticket_cancel_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TicketCancelResponse.ProtoReflect.Descriptor instead.
func (*TicketCancelResponse) Descriptor() ([]byte, []int) {
	return file_ots_ticket_cancel_proto_rawDescGZIP(), []int{2}
}

func (x *TicketCancelResponse) GetStatus() AcceptanceStatus {
	if x != nil {
		return x.Status
	}
	return AcceptanceStatus_ACCEPTANCE_STATUS_UNSPECIFIED
}

func (x *TicketCancelResponse) GetCancelRejectionReason() CancelRejectionReason {
	if x != nil {
		return x.CancelRejectionReason
	}
	return CancelRejectionReason_CANCEL_REJECT_REASON_UNSPECIFIED
}

func (x *TicketCancelResponse) GetCancelRejectionMessage() string {
	if x != nil {
		return x.CancelRejectionMessage
	}
	return ""
}

var File_ots_ticket_cancel_proto protoreflect.FileDescriptor

var file_ots_ticket_cancel_proto_rawDesc = []byte{
	0x0a, 0x17, 0x6f, 0x74, 0x73, 0x2f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x63, 0x61, 0x6e,
	0x63, 0x65, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x6f, 0x74, 0x73, 0x1a, 0x1f,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x14, 0x6f, 0x74, 0x73, 0x2f, 0x65, 0x6e, 0x75, 0x6d, 0x2f, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xb2, 0x02, 0x0a, 0x13, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74,
	0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x3c, 0x0a,
	0x0d, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x5f, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x17, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x65, 0x6e, 0x75, 0x6d, 0x73,
	0x2e, 0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x52, 0x0c, 0x63,
	0x61, 0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x30, 0x0a, 0x14, 0x63,
	0x61, 0x6e, 0x63, 0x65, 0x6c, 0x5f, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x5f, 0x64, 0x65, 0x74,
	0x61, 0x69, 0x6c, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x12, 0x63, 0x61, 0x6e, 0x63, 0x65,
	0x6c, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x38, 0x0a,
	0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x61, 0x6e, 0x63, 0x65,
	0x6c, 0x5f, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52,
	0x0d, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x50, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x12, 0x3a,
	0x0a, 0x0f, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x5f, 0x62, 0x65, 0x74, 0x5f, 0x69, 0x6e, 0x66,
	0x6f, 0x18, 0x06, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x43, 0x61,
	0x6e, 0x63, 0x65, 0x6c, 0x42, 0x65, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0d, 0x63, 0x61, 0x6e,
	0x63, 0x65, 0x6c, 0x42, 0x65, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x22, 0x46, 0x0a, 0x0d, 0x43, 0x61,
	0x6e, 0x63, 0x65, 0x6c, 0x42, 0x65, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x25, 0x0a, 0x0e, 0x63,
	0x61, 0x6e, 0x63, 0x65, 0x6c, 0x5f, 0x70, 0x65, 0x72, 0x63, 0x65, 0x6e, 0x74, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x0d, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x50, 0x65, 0x72, 0x63, 0x65,
	0x6e, 0x74, 0x22, 0xdf, 0x01, 0x0a, 0x14, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x43, 0x61, 0x6e,
	0x63, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x6f, 0x74,
	0x73, 0x2e, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x61, 0x6e,
	0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x58, 0x0a, 0x17, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x5f, 0x72, 0x65, 0x6a, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x0e, 0x32, 0x20, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2e, 0x43, 0x61,
	0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x61,
	0x73, 0x6f, 0x6e, 0x52, 0x15, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x6a, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x12, 0x38, 0x0a, 0x18, 0x63, 0x61,
	0x6e, 0x63, 0x65, 0x6c, 0x5f, 0x72, 0x65, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x16, 0x63, 0x61,
	0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x42, 0x1d, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x6f, 0x64, 0x64, 0x69,
	0x6e, 0x2e, 0x6f, 0x74, 0x73, 0x5a, 0x0c, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e, 0x67, 0x67, 0x2f,
	0x6f, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ots_ticket_cancel_proto_rawDescOnce sync.Once
	file_ots_ticket_cancel_proto_rawDescData = file_ots_ticket_cancel_proto_rawDesc
)

func file_ots_ticket_cancel_proto_rawDescGZIP() []byte {
	file_ots_ticket_cancel_proto_rawDescOnce.Do(func() {
		file_ots_ticket_cancel_proto_rawDescData = protoimpl.X.CompressGZIP(file_ots_ticket_cancel_proto_rawDescData)
	})
	return file_ots_ticket_cancel_proto_rawDescData
}

var file_ots_ticket_cancel_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ots_ticket_cancel_proto_goTypes = []interface{}{
	(*TicketCancelRequest)(nil),   // 0: ots.TicketCancelRequest
	(*CancelBetInfo)(nil),         // 1: ots.CancelBetInfo
	(*TicketCancelResponse)(nil),  // 2: ots.TicketCancelResponse
	(CancelReason)(0),             // 3: ots.enums.CancelReason
	(*timestamppb.Timestamp)(nil), // 4: google.protobuf.Timestamp
	(AcceptanceStatus)(0),         // 5: ots.enums.AcceptanceStatus
	(CancelRejectionReason)(0),    // 6: ots.enums.CancelRejectionReason
}
var file_ots_ticket_cancel_proto_depIdxs = []int32{
	3, // 0: ots.TicketCancelRequest.cancel_reason:type_name -> ots.enums.CancelReason
	4, // 1: ots.TicketCancelRequest.timestamp:type_name -> google.protobuf.Timestamp
	1, // 2: ots.TicketCancelRequest.cancel_bet_info:type_name -> ots.CancelBetInfo
	5, // 3: ots.TicketCancelResponse.status:type_name -> ots.enums.AcceptanceStatus
	6, // 4: ots.TicketCancelResponse.cancel_rejection_reason:type_name -> ots.enums.CancelRejectionReason
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_ots_ticket_cancel_proto_init() }
func file_ots_ticket_cancel_proto_init() {
	if File_ots_ticket_cancel_proto != nil {
		return
	}
	file_ots_enum_enums_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ots_ticket_cancel_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TicketCancelRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ots_ticket_cancel_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CancelBetInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ots_ticket_cancel_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TicketCancelResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ots_ticket_cancel_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ots_ticket_cancel_proto_goTypes,
		DependencyIndexes: file_ots_ticket_cancel_proto_depIdxs,
		MessageInfos:      file_ots_ticket_cancel_proto_msgTypes,
	}.Build()
	File_ots_ticket_cancel_proto = out.File
	file_ots_ticket_cancel_proto_rawDesc = nil
	file_ots_ticket_cancel_proto_goTypes = nil
	file_ots_ticket_cancel_proto_depIdxs = nil
}
