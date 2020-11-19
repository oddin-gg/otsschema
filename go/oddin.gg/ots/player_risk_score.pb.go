// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: ots/player_risk_score.proto

package ots

import (
	proto "github.com/golang/protobuf/proto"
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

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type PlayerRiskScoreRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

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

	RiskScores []*PlayerRiskScore `protobuf:"bytes,1,rep,name=risk_scores,json=riskScores,proto3" json:"risk_scores,omitempty"`
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

func (x *PlayerRiskScoreResponse) GetRiskScores() []*PlayerRiskScore {
	if x != nil {
		return x.RiskScores
	}
	return nil
}

type PlayerRiskScore struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SportId  string `protobuf:"bytes,1,opt,name=sport_id,json=sportId,proto3" json:"sport_id,omitempty"`
	Prematch uint32 `protobuf:"varint,2,opt,name=prematch,proto3" json:"prematch,omitempty"`
	Live     uint32 `protobuf:"varint,3,opt,name=live,proto3" json:"live,omitempty"`
}

func (x *PlayerRiskScore) Reset() {
	*x = PlayerRiskScore{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ots_player_risk_score_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlayerRiskScore) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlayerRiskScore) ProtoMessage() {}

func (x *PlayerRiskScore) ProtoReflect() protoreflect.Message {
	mi := &file_ots_player_risk_score_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlayerRiskScore.ProtoReflect.Descriptor instead.
func (*PlayerRiskScore) Descriptor() ([]byte, []int) {
	return file_ots_player_risk_score_proto_rawDescGZIP(), []int{2}
}

func (x *PlayerRiskScore) GetSportId() string {
	if x != nil {
		return x.SportId
	}
	return ""
}

func (x *PlayerRiskScore) GetPrematch() uint32 {
	if x != nil {
		return x.Prematch
	}
	return 0
}

func (x *PlayerRiskScore) GetLive() uint32 {
	if x != nil {
		return x.Live
	}
	return 0
}

var File_ots_player_risk_score_proto protoreflect.FileDescriptor

var file_ots_player_risk_score_proto_rawDesc = []byte{
	0x0a, 0x1b, 0x6f, 0x74, 0x73, 0x2f, 0x70, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x5f, 0x72, 0x69, 0x73,
	0x6b, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x6f,
	0x74, 0x73, 0x22, 0x28, 0x0a, 0x16, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b,
	0x53, 0x63, 0x6f, 0x72, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x50, 0x0a, 0x17,
	0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x0b, 0x72, 0x69, 0x73, 0x6b, 0x5f,
	0x73, 0x63, 0x6f, 0x72, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6f,
	0x74, 0x73, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b, 0x53, 0x63, 0x6f,
	0x72, 0x65, 0x52, 0x0a, 0x72, 0x69, 0x73, 0x6b, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x73, 0x22, 0x5c,
	0x0a, 0x0f, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b, 0x53, 0x63, 0x6f, 0x72,
	0x65, 0x12, 0x19, 0x0a, 0x08, 0x73, 0x70, 0x6f, 0x72, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x73, 0x70, 0x6f, 0x72, 0x74, 0x49, 0x64, 0x12, 0x1a, 0x0a, 0x08,
	0x70, 0x72, 0x65, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x08,
	0x70, 0x72, 0x65, 0x6d, 0x61, 0x74, 0x63, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x69, 0x76, 0x65,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x04, 0x6c, 0x69, 0x76, 0x65, 0x42, 0x1d, 0x0a, 0x0d,
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

var file_ots_player_risk_score_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ots_player_risk_score_proto_goTypes = []interface{}{
	(*PlayerRiskScoreRequest)(nil),  // 0: ots.PlayerRiskScoreRequest
	(*PlayerRiskScoreResponse)(nil), // 1: ots.PlayerRiskScoreResponse
	(*PlayerRiskScore)(nil),         // 2: ots.PlayerRiskScore
}
var file_ots_player_risk_score_proto_depIdxs = []int32{
	2, // 0: ots.PlayerRiskScoreResponse.risk_scores:type_name -> ots.PlayerRiskScore
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
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
		file_ots_player_risk_score_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlayerRiskScore); i {
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
			NumMessages:   3,
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
