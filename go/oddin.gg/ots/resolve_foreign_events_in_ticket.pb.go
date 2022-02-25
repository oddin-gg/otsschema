// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.4
// source: ots/resolve_foreign_events_in_ticket.proto

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

type ResolveForeignEventsInTicketRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique ticket id from the operator’s system.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Stake not handled by Oddin in the same currency as the previous ticket
	// multiplied by 10 000 and rounded to a long value.
	ForeignStake uint64 `protobuf:"varint,3,opt,name=foreign_stake,json=foreignStake,proto3" json:"foreign_stake,omitempty"`
	// Timestamp of non Oddin settlement.
	Timestamp *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=timestamp,proto3" json:"timestamp,omitempty"`
}

func (x *ResolveForeignEventsInTicketRequest) Reset() {
	*x = ResolveForeignEventsInTicketRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_resolve_foreign_events_in_ticket_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResolveForeignEventsInTicketRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResolveForeignEventsInTicketRequest) ProtoMessage() {}

func (x *ResolveForeignEventsInTicketRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ots_resolve_foreign_events_in_ticket_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResolveForeignEventsInTicketRequest.ProtoReflect.Descriptor instead.
func (*ResolveForeignEventsInTicketRequest) Descriptor() ([]byte, []int) {
	return file_ots_resolve_foreign_events_in_ticket_proto_rawDescGZIP(), []int{0}
}

func (x *ResolveForeignEventsInTicketRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *ResolveForeignEventsInTicketRequest) GetForeignStake() uint64 {
	if x != nil {
		return x.ForeignStake
	}
	return 0
}

func (x *ResolveForeignEventsInTicketRequest) GetTimestamp() *timestamppb.Timestamp {
	if x != nil {
		return x.Timestamp
	}
	return nil
}

type ResolveForeignEventsInTicketResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Acceptance status - REJECTED or ACCEPTED
	Status AcceptanceStatus `protobuf:"varint,1,opt,name=status,proto3,enum=ots.enums.AcceptanceStatus" json:"status,omitempty"`
	// Information about rejection/acception reason.
	Reason *Reason `protobuf:"bytes,2,opt,name=reason,proto3" json:"reason,omitempty"`
}

func (x *ResolveForeignEventsInTicketResponse) Reset() {
	*x = ResolveForeignEventsInTicketResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_resolve_foreign_events_in_ticket_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ResolveForeignEventsInTicketResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ResolveForeignEventsInTicketResponse) ProtoMessage() {}

func (x *ResolveForeignEventsInTicketResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ots_resolve_foreign_events_in_ticket_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ResolveForeignEventsInTicketResponse.ProtoReflect.Descriptor instead.
func (*ResolveForeignEventsInTicketResponse) Descriptor() ([]byte, []int) {
	return file_ots_resolve_foreign_events_in_ticket_proto_rawDescGZIP(), []int{1}
}

func (x *ResolveForeignEventsInTicketResponse) GetStatus() AcceptanceStatus {
	if x != nil {
		return x.Status
	}
	return AcceptanceStatus_ACCEPTANCE_STATUS_UNSPECIFIED
}

func (x *ResolveForeignEventsInTicketResponse) GetReason() *Reason {
	if x != nil {
		return x.Reason
	}
	return nil
}

var File_ots_resolve_foreign_events_in_ticket_proto protoreflect.FileDescriptor

var file_ots_resolve_foreign_events_in_ticket_proto_rawDesc = []byte{
	0x0a, 0x2a, 0x6f, 0x74, 0x73, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x5f, 0x66, 0x6f,
	0x72, 0x65, 0x69, 0x67, 0x6e, 0x5f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x69, 0x6e, 0x5f,
	0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x6f, 0x74,
	0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62,
	0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x14, 0x6f, 0x74, 0x73, 0x2f, 0x65, 0x6e, 0x75, 0x6d, 0x2f, 0x65, 0x6e, 0x75,
	0x6d, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x6f, 0x74, 0x73, 0x2f, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x94, 0x01, 0x0a, 0x23,
	0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x46, 0x6f, 0x72, 0x65, 0x69, 0x67, 0x6e, 0x45, 0x76,
	0x65, 0x6e, 0x74, 0x73, 0x49, 0x6e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x66, 0x6f, 0x72, 0x65, 0x69, 0x67, 0x6e, 0x5f, 0x73,
	0x74, 0x61, 0x6b, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0c, 0x66, 0x6f, 0x72, 0x65,
	0x69, 0x67, 0x6e, 0x53, 0x74, 0x61, 0x6b, 0x65, 0x12, 0x38, 0x0a, 0x09, 0x74, 0x69, 0x6d, 0x65,
	0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x22, 0x80, 0x01, 0x0a, 0x24, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x46, 0x6f,
	0x72, 0x65, 0x69, 0x67, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x49, 0x6e, 0x54, 0x69, 0x63,
	0x6b, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x33, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1b, 0x2e, 0x6f, 0x74,
	0x73, 0x2e, 0x65, 0x6e, 0x75, 0x6d, 0x73, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x70, 0x74, 0x61, 0x6e,
	0x63, 0x65, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x23, 0x0a, 0x06, 0x72, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x0b, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x52, 0x65, 0x61, 0x73, 0x6f, 0x6e, 0x52, 0x06, 0x72,
	0x65, 0x61, 0x73, 0x6f, 0x6e, 0x42, 0x1d, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x6f, 0x64, 0x64,
	0x69, 0x6e, 0x2e, 0x6f, 0x74, 0x73, 0x5a, 0x0c, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e, 0x67, 0x67,
	0x2f, 0x6f, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ots_resolve_foreign_events_in_ticket_proto_rawDescOnce sync.Once
	file_ots_resolve_foreign_events_in_ticket_proto_rawDescData = file_ots_resolve_foreign_events_in_ticket_proto_rawDesc
)

func file_ots_resolve_foreign_events_in_ticket_proto_rawDescGZIP() []byte {
	file_ots_resolve_foreign_events_in_ticket_proto_rawDescOnce.Do(func() {
		file_ots_resolve_foreign_events_in_ticket_proto_rawDescData = protoimpl.X.CompressGZIP(file_ots_resolve_foreign_events_in_ticket_proto_rawDescData)
	})
	return file_ots_resolve_foreign_events_in_ticket_proto_rawDescData
}

var file_ots_resolve_foreign_events_in_ticket_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_ots_resolve_foreign_events_in_ticket_proto_goTypes = []interface{}{
	(*ResolveForeignEventsInTicketRequest)(nil),  // 0: ots.ResolveForeignEventsInTicketRequest
	(*ResolveForeignEventsInTicketResponse)(nil), // 1: ots.ResolveForeignEventsInTicketResponse
	(*timestamppb.Timestamp)(nil),                // 2: google.protobuf.Timestamp
	(AcceptanceStatus)(0),                        // 3: ots.enums.AcceptanceStatus
	(*Reason)(nil),                               // 4: ots.Reason
}
var file_ots_resolve_foreign_events_in_ticket_proto_depIdxs = []int32{
	2, // 0: ots.ResolveForeignEventsInTicketRequest.timestamp:type_name -> google.protobuf.Timestamp
	3, // 1: ots.ResolveForeignEventsInTicketResponse.status:type_name -> ots.enums.AcceptanceStatus
	4, // 2: ots.ResolveForeignEventsInTicketResponse.reason:type_name -> ots.Reason
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_ots_resolve_foreign_events_in_ticket_proto_init() }
func file_ots_resolve_foreign_events_in_ticket_proto_init() {
	if File_ots_resolve_foreign_events_in_ticket_proto != nil {
		return
	}
	file_ots_enum_enums_proto_init()
	file_ots_commons_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ots_resolve_foreign_events_in_ticket_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResolveForeignEventsInTicketRequest); i {
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
		file_ots_resolve_foreign_events_in_ticket_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ResolveForeignEventsInTicketResponse); i {
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
			RawDescriptor: file_ots_resolve_foreign_events_in_ticket_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ots_resolve_foreign_events_in_ticket_proto_goTypes,
		DependencyIndexes: file_ots_resolve_foreign_events_in_ticket_proto_depIdxs,
		MessageInfos:      file_ots_resolve_foreign_events_in_ticket_proto_msgTypes,
	}.Build()
	File_ots_resolve_foreign_events_in_ticket_proto = out.File
	file_ots_resolve_foreign_events_in_ticket_proto_rawDesc = nil
	file_ots_resolve_foreign_events_in_ticket_proto_goTypes = nil
	file_ots_resolve_foreign_events_in_ticket_proto_depIdxs = nil
}
