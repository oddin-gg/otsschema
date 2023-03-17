// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.12
// source: ots/player_risk_score.proto

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

// PlayerRiskScoreRequest is used for PlayerRiskScore RPC call.
// You can use this method to get more insight on individual player risk score.
type PlayerRiskScoreRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Unique player id from the operator’s system.
	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *PlayerRiskScoreRequest) Reset() {
	*x = PlayerRiskScoreRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_player_risk_score_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerRiskScoreRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerRiskScoreRequest) ProtoMessage() {}

func (x *PlayerRiskScoreRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ots_player_risk_score_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerRiskScoreRequest.ProtoReflect.Descriptor instead.
func (*PlayerRiskScoreRequest) Descriptor() ([]byte, []int) {
	return file_ots_player_risk_score_proto_rawDescGZIP(), []int{0}
}

func (x *PlayerRiskScoreRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type PlayerRiskScoreResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Deprecated: Do not use.
	Score         float32 `protobuf:"fixed32,1,opt,name=score,proto3" json:"score,omitempty"`
	Bos           float32 `protobuf:"fixed32,2,opt,name=bos,proto3" json:"bos,omitempty"`
	Oaf           float32 `protobuf:"fixed32,3,opt,name=oaf,proto3" json:"oaf,omitempty"`
	LiveDelay     uint32  `protobuf:"varint,4,opt,name=live_delay,json=liveDelay,proto3" json:"live_delay,omitempty"`
	PrematchDelay uint32  `protobuf:"varint,5,opt,name=prematch_delay,json=prematchDelay,proto3" json:"prematch_delay,omitempty"`
}

func (x *PlayerRiskScoreResponse) Reset() {
	*x = PlayerRiskScoreResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_player_risk_score_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerRiskScoreResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerRiskScoreResponse) ProtoMessage() {}

func (x *PlayerRiskScoreResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ots_player_risk_score_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerRiskScoreResponse.ProtoReflect.Descriptor instead.
func (*PlayerRiskScoreResponse) Descriptor() ([]byte, []int) {
	return file_ots_player_risk_score_proto_rawDescGZIP(), []int{1}
}

// Deprecated: Do not use.
func (x *PlayerRiskScoreResponse) GetScore() float32 {
	if x != nil {
		return x.Score
	}
	return 0
}

func (x *PlayerRiskScoreResponse) GetBos() float32 {
	if x != nil {
		return x.Bos
	}
	return 0
}

func (x *PlayerRiskScoreResponse) GetOaf() float32 {
	if x != nil {
		return x.Oaf
	}
	return 0
}

func (x *PlayerRiskScoreResponse) GetLiveDelay() uint32 {
	if x != nil {
		return x.LiveDelay
	}
	return 0
}

func (x *PlayerRiskScoreResponse) GetPrematchDelay() uint32 {
	if x != nil {
		return x.PrematchDelay
	}
	return 0
}

var File_ots_player_risk_score_proto protoreflect.FileDescriptor

var file_ots_player_risk_score_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x6f, 0x74, 0x73, 0x2f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x72, 0x69, 0x73,
	0x6b, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x6f,
	0x74, 0x73, 0x22, 0x28, 0x0a, 0x16, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b,
	0x53, 0x63, 0x6f, 0x72, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x9d, 0x01, 0x0a,
	0x17, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b, 0x53, 0x63, 0x6f, 0x72, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x18, 0x0a, 0x05, 0x73, 0x63, 0x6f, 0x72,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x42, 0x02, 0x18, 0x01, 0x52, 0x05, 0x73, 0x63, 0x6f,
	0x72, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x62, 0x6f, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x02, 0x52,
	0x03, 0x62, 0x6f, 0x73, 0x12, 0x10, 0x0a, 0x03, 0x6f, 0x61, 0x66, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x02, 0x52, 0x03, 0x6f, 0x61, 0x66, 0x12, 0x1d, 0x0a, 0x0a, 0x6c, 0x69, 0x76, 0x65, 0x5f, 0x64,
	0x65, 0x6c, 0x61, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09, 0x6c, 0x69, 0x76, 0x65,
	0x44, 0x65, 0x6c, 0x61, 0x79, 0x12, 0x25, 0x0a, 0x0e, 0x70, 0x72, 0x65, 0x6d, 0x61, 0x74, 0x63,
	0x68, 0x5f, 0x64, 0x65, 0x6c, 0x61, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0d, 0x70,
	0x72, 0x65, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x44, 0x65, 0x6c, 0x61, 0x79, 0x42, 0x1d, 0x0a, 0x0d,
	0x63, 0x6f, 0x6d, 0x2e, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e, 0x6f, 0x74, 0x73, 0x5a, 0x0c, 0x6f,
	0x64, 0x64, 0x69, 0x6e, 0x2e, 0x67, 0x67, 0x2f, 0x6f, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_ots_player_risk_score_proto_rawDescOnce sync.Once
	file_ots_player_risk_score_proto_rawDescData = file_ots_player_risk_score_proto_rawDesc
)

func file_ots_player_risk_score_proto_rawDescGZIP() []byte {
	file_ots_player_risk_score_proto_rawDescOnce.Do(func() {
		file_ots_player_risk_score_proto_rawDescData = protoimpl.X.CompressGZIP(file_ots_player_risk_score_proto_rawDescData)
	})
	return file_ots_player_risk_score_proto_rawDescData
}

var file_ots_player_risk_score_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_ots_player_risk_score_proto_goTypes = []interface{}{
	(*PlayerRiskScoreRequest)(nil),  // 0: ots.PlayerRiskScoreRequest
	(*PlayerRiskScoreResponse)(nil), // 1: ots.PlayerRiskScoreResponse
}
var file_ots_player_risk_score_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ots_player_risk_score_proto_init() }
func file_ots_player_risk_score_proto_init() {
	if File_ots_player_risk_score_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ots_player_risk_score_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerRiskScoreRequest); i {
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
		file_ots_player_risk_score_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerRiskScoreResponse); i {
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
			RawDescriptor: file_ots_player_risk_score_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_ots_player_risk_score_proto_goTypes,
		DependencyIndexes: file_ots_player_risk_score_proto_depIdxs,
		MessageInfos:      file_ots_player_risk_score_proto_msgTypes,
	}.Build()
	File_ots_player_risk_score_proto = out.File
	file_ots_player_risk_score_proto_rawDesc = nil
	file_ots_player_risk_score_proto_goTypes = nil
	file_ots_player_risk_score_proto_depIdxs = nil
}
