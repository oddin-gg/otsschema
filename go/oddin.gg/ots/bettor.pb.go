// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.20.3
// source: ots/bettor.proto

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

type BettorsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// if recover_since is null, no updates will be recovered. If it is defined we will start to send to consumer
	// all BettorRiskCoefficients since given timestamp value
	RecoverSince *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=recover_since,json=recoverSince,proto3,oneof" json:"recover_since,omitempty"`
}

func (x *BettorsRequest) Reset() {
	*x = BettorsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_bettor_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BettorsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BettorsRequest) ProtoMessage() {}

func (x *BettorsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ots_bettor_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BettorsRequest.ProtoReflect.Descriptor instead.
func (*BettorsRequest) Descriptor() ([]byte, []int) {
	return file_ots_bettor_proto_rawDescGZIP(), []int{0}
}

func (x *BettorsRequest) GetRecoverSince() *timestamppb.Timestamp {
	if x != nil {
		return x.RecoverSince
	}
	return nil
}

type BettorsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Data:
	//	*BettorsResponse_Bettor
	//	*BettorsResponse_Keepalive
	Data isBettorsResponse_Data `protobuf_oneof:"data"`
}

func (x *BettorsResponse) Reset() {
	*x = BettorsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_bettor_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BettorsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BettorsResponse) ProtoMessage() {}

func (x *BettorsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ots_bettor_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BettorsResponse.ProtoReflect.Descriptor instead.
func (*BettorsResponse) Descriptor() ([]byte, []int) {
	return file_ots_bettor_proto_rawDescGZIP(), []int{1}
}

func (m *BettorsResponse) GetData() isBettorsResponse_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (x *BettorsResponse) GetBettor() *Bettor {
	if x, ok := x.GetData().(*BettorsResponse_Bettor); ok {
		return x.Bettor
	}
	return nil
}

func (x *BettorsResponse) GetKeepalive() *StreamKeepalive {
	if x, ok := x.GetData().(*BettorsResponse_Keepalive); ok {
		return x.Keepalive
	}
	return nil
}

type isBettorsResponse_Data interface {
	isBettorsResponse_Data()
}

type BettorsResponse_Bettor struct {
	Bettor *Bettor `protobuf:"bytes,1,opt,name=bettor,proto3,oneof"`
}

type BettorsResponse_Keepalive struct {
	Keepalive *StreamKeepalive `protobuf:"bytes,2,opt,name=keepalive,proto3,oneof"`
}

func (*BettorsResponse_Bettor) isBettorsResponse_Data() {}

func (*BettorsResponse_Keepalive) isBettorsResponse_Data() {}

type Bettor struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique bettor id from Oddin.gg system.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	// Unique bettor id from operator’s system.
	ExtId         string                 `protobuf:"bytes,2,opt,name=ext_id,json=extId,proto3" json:"ext_id,omitempty"`
	ModifiedAt    *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=modified_at,json=modifiedAt,proto3" json:"modified_at,omitempty"`
	Bos           float32                `protobuf:"fixed32,4,opt,name=bos,proto3" json:"bos,omitempty"`
	OverAskFactor float32                `protobuf:"fixed32,5,opt,name=over_ask_factor,json=overAskFactor,proto3" json:"over_ask_factor,omitempty"`
	OddinsLabels  []string               `protobuf:"bytes,6,rep,name=oddins_labels,json=oddinsLabels,proto3" json:"oddins_labels,omitempty"`
	ClientsLabels []string               `protobuf:"bytes,7,rep,name=clients_labels,json=clientsLabels,proto3" json:"clients_labels,omitempty"`
}

func (x *Bettor) Reset() {
	*x = Bettor{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_bettor_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Bettor) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Bettor) ProtoMessage() {}

func (x *Bettor) ProtoReflect() protoreflect.Message {
	mi := &file_ots_bettor_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Bettor.ProtoReflect.Descriptor instead.
func (*Bettor) Descriptor() ([]byte, []int) {
	return file_ots_bettor_proto_rawDescGZIP(), []int{2}
}

func (x *Bettor) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Bettor) GetExtId() string {
	if x != nil {
		return x.ExtId
	}
	return ""
}

func (x *Bettor) GetModifiedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.ModifiedAt
	}
	return nil
}

func (x *Bettor) GetBos() float32 {
	if x != nil {
		return x.Bos
	}
	return 0
}

func (x *Bettor) GetOverAskFactor() float32 {
	if x != nil {
		return x.OverAskFactor
	}
	return 0
}

func (x *Bettor) GetOddinsLabels() []string {
	if x != nil {
		return x.OddinsLabels
	}
	return nil
}

func (x *Bettor) GetClientsLabels() []string {
	if x != nil {
		return x.ClientsLabels
	}
	return nil
}

var File_ots_bettor_proto protoreflect.FileDescriptor

var file_ots_bettor_proto_rawDesc = []byte{
	0x0a, 0x10, 0x6f, 0x74, 0x73, 0x2f, 0x62, 0x65, 0x74, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x03, 0x6f, 0x74, 0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x11, 0x6f, 0x74, 0x73, 0x2f, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x68, 0x0a, 0x0e, 0x42,
	0x65, 0x74, 0x74, 0x6f, 0x72, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x44, 0x0a,
	0x0d, 0x72, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x5f, 0x73, 0x69, 0x6e, 0x63, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x48, 0x00, 0x52, 0x0c, 0x72, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x53, 0x69, 0x6e, 0x63, 0x65,
	0x88, 0x01, 0x01, 0x42, 0x10, 0x0a, 0x0e, 0x5f, 0x72, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x5f,
	0x73, 0x69, 0x6e, 0x63, 0x65, 0x22, 0x76, 0x0a, 0x0f, 0x42, 0x65, 0x74, 0x74, 0x6f, 0x72, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x25, 0x0a, 0x06, 0x62, 0x65, 0x74, 0x74,
	0x6f, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x42,
	0x65, 0x74, 0x74, 0x6f, 0x72, 0x48, 0x00, 0x52, 0x06, 0x62, 0x65, 0x74, 0x74, 0x6f, 0x72, 0x12,
	0x34, 0x0a, 0x09, 0x6b, 0x65, 0x65, 0x70, 0x61, 0x6c, 0x69, 0x76, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x53, 0x74, 0x72, 0x65, 0x61, 0x6d, 0x4b,
	0x65, 0x65, 0x70, 0x61, 0x6c, 0x69, 0x76, 0x65, 0x48, 0x00, 0x52, 0x09, 0x6b, 0x65, 0x65, 0x70,
	0x61, 0x6c, 0x69, 0x76, 0x65, 0x42, 0x06, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0xf2, 0x01,
	0x0a, 0x06, 0x42, 0x65, 0x74, 0x74, 0x6f, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x15, 0x0a, 0x06, 0x65, 0x78, 0x74, 0x5f,
	0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x65, 0x78, 0x74, 0x49, 0x64, 0x12,
	0x3b, 0x0a, 0x0b, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x52, 0x0a, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x65, 0x64, 0x41, 0x74, 0x12, 0x10, 0x0a, 0x03,
	0x62, 0x6f, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x52, 0x03, 0x62, 0x6f, 0x73, 0x12, 0x26,
	0x0a, 0x0f, 0x6f, 0x76, 0x65, 0x72, 0x5f, 0x61, 0x73, 0x6b, 0x5f, 0x66, 0x61, 0x63, 0x74, 0x6f,
	0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x02, 0x52, 0x0d, 0x6f, 0x76, 0x65, 0x72, 0x41, 0x73, 0x6b,
	0x46, 0x61, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x23, 0x0a, 0x0d, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x73,
	0x5f, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x6f,
	0x64, 0x64, 0x69, 0x6e, 0x73, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x12, 0x25, 0x0a, 0x0e, 0x63,
	0x6c, 0x69, 0x65, 0x6e, 0x74, 0x73, 0x5f, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x07, 0x20,
	0x03, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x73, 0x4c, 0x61, 0x62, 0x65,
	0x6c, 0x73, 0x42, 0x1d, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e,
	0x6f, 0x74, 0x73, 0x5a, 0x0c, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e, 0x67, 0x67, 0x2f, 0x6f, 0x74,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ots_bettor_proto_rawDescOnce sync.Once
	file_ots_bettor_proto_rawDescData = file_ots_bettor_proto_rawDesc
)

func file_ots_bettor_proto_rawDescGZIP() []byte {
	file_ots_bettor_proto_rawDescOnce.Do(func() {
		file_ots_bettor_proto_rawDescData = protoimpl.X.CompressGZIP(file_ots_bettor_proto_rawDescData)
	})
	return file_ots_bettor_proto_rawDescData
}

var file_ots_bettor_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ots_bettor_proto_goTypes = []interface{}{
	(*BettorsRequest)(nil),        // 0: ots.BettorsRequest
	(*BettorsResponse)(nil),       // 1: ots.BettorsResponse
	(*Bettor)(nil),                // 2: ots.Bettor
	(*timestamppb.Timestamp)(nil), // 3: google.protobuf.Timestamp
	(*StreamKeepalive)(nil),       // 4: ots.StreamKeepalive
}
var file_ots_bettor_proto_depIdxs = []int32{
	3, // 0: ots.BettorsRequest.recover_since:type_name -> google.protobuf.Timestamp
	2, // 1: ots.BettorsResponse.bettor:type_name -> ots.Bettor
	4, // 2: ots.BettorsResponse.keepalive:type_name -> ots.StreamKeepalive
	3, // 3: ots.Bettor.modified_at:type_name -> google.protobuf.Timestamp
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_ots_bettor_proto_init() }
func file_ots_bettor_proto_init() {
	if File_ots_bettor_proto != nil {
		return
	}
	file_ots_commons_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_ots_bettor_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BettorsRequest); i {
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
		file_ots_bettor_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BettorsResponse); i {
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
		file_ots_bettor_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Bettor); i {
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
	file_ots_bettor_proto_msgTypes[0].OneofWrappers = []interface{}{}
	file_ots_bettor_proto_msgTypes[1].OneofWrappers = []interface{}{
		(*BettorsResponse_Bettor)(nil),
		(*BettorsResponse_Keepalive)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ots_bettor_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ots_bettor_proto_goTypes,
		DependencyIndexes: file_ots_bettor_proto_depIdxs,
		MessageInfos:      file_ots_bettor_proto_msgTypes,
	}.Build()
	File_ots_bettor_proto = out.File
	file_ots_bettor_proto_rawDesc = nil
	file_ots_bettor_proto_goTypes = nil
	file_ots_bettor_proto_depIdxs = nil
}
