// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.14.0
// source: ots/service.proto

package ots

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
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

var File_ots_service_proto protoreflect.FileDescriptor

var file_ots_service_proto_rawDesc = []byte{
	0x0a, 0x11, 0x6f, 0x74, 0x73, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x03, 0x6f, 0x74, 0x73, 0x1a, 0x18, 0x6f, 0x74, 0x73, 0x2f, 0x74, 0x69,
	0x63, 0x6b, 0x65, 0x74, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x1a, 0x19, 0x6f, 0x74, 0x73, 0x2f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x72,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x17, 0x6f,
	0x74, 0x73, 0x2f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x63, 0x61, 0x6e, 0x63, 0x65, 0x6c,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x6f, 0x74, 0x73, 0x2f, 0x70, 0x6c, 0x61, 0x79,
	0x65, 0x72, 0x5f, 0x72, 0x69, 0x73, 0x6b, 0x5f, 0x73, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x2a, 0x6f, 0x74, 0x73, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65,
	0x5f, 0x66, 0x6f, 0x72, 0x65, 0x69, 0x67, 0x6e, 0x5f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x5f,
	0x69, 0x6e, 0x5f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x14, 0x6f, 0x74, 0x73, 0x2f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x61, 0x63, 0x6b, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x65, 0x6d, 0x70, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x32, 0x81, 0x03, 0x0a, 0x03, 0x6f, 0x74, 0x73, 0x12, 0x35, 0x0a, 0x06, 0x54, 0x69,
	0x63, 0x6b, 0x65, 0x74, 0x12, 0x12, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x13, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x54,
	0x69, 0x63, 0x6b, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x28, 0x01, 0x30,
	0x01, 0x12, 0x74, 0x0a, 0x1d, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x46, 0x6f, 0x72, 0x65,
	0x69, 0x67, 0x6e, 0x4d, 0x61, 0x74, 0x63, 0x68, 0x65, 0x73, 0x49, 0x6e, 0x54, 0x69, 0x63, 0x6b,
	0x65, 0x74, 0x12, 0x28, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65,
	0x46, 0x6f, 0x72, 0x65, 0x69, 0x67, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x49, 0x6e, 0x54,
	0x69, 0x63, 0x6b, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x6f,
	0x74, 0x73, 0x2e, 0x52, 0x65, 0x73, 0x6f, 0x6c, 0x76, 0x65, 0x46, 0x6f, 0x72, 0x65, 0x69, 0x67,
	0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x49, 0x6e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x43, 0x0a, 0x0c, 0x43, 0x61, 0x6e, 0x63, 0x65,
	0x6c, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x18, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x54, 0x69,
	0x63, 0x6b, 0x65, 0x74, 0x43, 0x61, 0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x19, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x43, 0x61,
	0x6e, 0x63, 0x65, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x4c, 0x0a, 0x0f,
	0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b, 0x53, 0x63, 0x6f, 0x72, 0x65, 0x12,
	0x1b, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b,
	0x53, 0x63, 0x6f, 0x72, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x6f,
	0x74, 0x73, 0x2e, 0x50, 0x6c, 0x61, 0x79, 0x65, 0x72, 0x52, 0x69, 0x73, 0x6b, 0x53, 0x63, 0x6f,
	0x72, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3a, 0x0a, 0x09, 0x54, 0x69,
	0x63, 0x6b, 0x65, 0x74, 0x41, 0x63, 0x6b, 0x12, 0x15, 0x2e, 0x6f, 0x74, 0x73, 0x2e, 0x54, 0x69,
	0x63, 0x6b, 0x65, 0x74, 0x41, 0x63, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x42, 0x1d, 0x0a, 0x0d, 0x63, 0x6f, 0x6d, 0x2e, 0x6f, 0x64,
	0x64, 0x69, 0x6e, 0x2e, 0x6f, 0x74, 0x73, 0x5a, 0x0c, 0x6f, 0x64, 0x64, 0x69, 0x6e, 0x2e, 0x67,
	0x67, 0x2f, 0x6f, 0x74, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_ots_service_proto_goTypes = []interface{}{
	(*TicketRequest)(nil),                        // 0: ots.TicketRequest
	(*ResolveForeignEventsInTicketRequest)(nil),  // 1: ots.ResolveForeignEventsInTicketRequest
	(*TicketCancelRequest)(nil),                  // 2: ots.TicketCancelRequest
	(*PlayerRiskScoreRequest)(nil),               // 3: ots.PlayerRiskScoreRequest
	(*TicketAckRequest)(nil),                     // 4: ots.TicketAckRequest
	(*TicketResponse)(nil),                       // 5: ots.TicketResponse
	(*ResolveForeignEventsInTicketResponse)(nil), // 6: ots.ResolveForeignEventsInTicketResponse
	(*TicketCancelResponse)(nil),                 // 7: ots.TicketCancelResponse
	(*PlayerRiskScoreResponse)(nil),              // 8: ots.PlayerRiskScoreResponse
	(*emptypb.Empty)(nil),                        // 9: google.protobuf.Empty
}
var file_ots_service_proto_depIdxs = []int32{
	0, // 0: ots.ots.Ticket:input_type -> ots.TicketRequest
	1, // 1: ots.ots.ResolveForeignMatchesInTicket:input_type -> ots.ResolveForeignEventsInTicketRequest
	2, // 2: ots.ots.CancelTicket:input_type -> ots.TicketCancelRequest
	3, // 3: ots.ots.PlayerRiskScore:input_type -> ots.PlayerRiskScoreRequest
	4, // 4: ots.ots.TicketAck:input_type -> ots.TicketAckRequest
	5, // 5: ots.ots.Ticket:output_type -> ots.TicketResponse
	6, // 6: ots.ots.ResolveForeignMatchesInTicket:output_type -> ots.ResolveForeignEventsInTicketResponse
	7, // 7: ots.ots.CancelTicket:output_type -> ots.TicketCancelResponse
	8, // 8: ots.ots.PlayerRiskScore:output_type -> ots.PlayerRiskScoreResponse
	9, // 9: ots.ots.TicketAck:output_type -> google.protobuf.Empty
	5, // [5:10] is the sub-list for method output_type
	0, // [0:5] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_ots_service_proto_init() }
func file_ots_service_proto_init() {
	if File_ots_service_proto != nil {
		return
	}
	file_ots_ticket_request_proto_init()
	file_ots_ticket_response_proto_init()
	file_ots_ticket_cancel_proto_init()
	file_ots_player_risk_score_proto_init()
	file_ots_resolve_foreign_events_in_ticket_proto_init()
	file_ots_ticket_ack_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ots_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_ots_service_proto_goTypes,
		DependencyIndexes: file_ots_service_proto_depIdxs,
	}.Build()
	File_ots_service_proto = out.File
	file_ots_service_proto_rawDesc = nil
	file_ots_service_proto_goTypes = nil
	file_ots_service_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// OtsClient is the client API for Ots service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type OtsClient interface {
	Ticket(ctx context.Context, opts ...grpc.CallOption) (Ots_TicketClient, error)
	ResolveForeignMatchesInTicket(ctx context.Context, in *ResolveForeignEventsInTicketRequest, opts ...grpc.CallOption) (*ResolveForeignEventsInTicketResponse, error)
	CancelTicket(ctx context.Context, in *TicketCancelRequest, opts ...grpc.CallOption) (*TicketCancelResponse, error)
	PlayerRiskScore(ctx context.Context, in *PlayerRiskScoreRequest, opts ...grpc.CallOption) (*PlayerRiskScoreResponse, error)
	TicketAck(ctx context.Context, in *TicketAckRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type otsClient struct {
	cc grpc.ClientConnInterface
}

func NewOtsClient(cc grpc.ClientConnInterface) OtsClient {
	return &otsClient{cc}
}

func (c *otsClient) Ticket(ctx context.Context, opts ...grpc.CallOption) (Ots_TicketClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Ots_serviceDesc.Streams[0], "/ots.ots/Ticket", opts...)
	if err != nil {
		return nil, err
	}
	x := &otsTicketClient{stream}
	return x, nil
}

type Ots_TicketClient interface {
	Send(*TicketRequest) error
	Recv() (*TicketResponse, error)
	grpc.ClientStream
}

type otsTicketClient struct {
	grpc.ClientStream
}

func (x *otsTicketClient) Send(m *TicketRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *otsTicketClient) Recv() (*TicketResponse, error) {
	m := new(TicketResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *otsClient) ResolveForeignMatchesInTicket(ctx context.Context, in *ResolveForeignEventsInTicketRequest, opts ...grpc.CallOption) (*ResolveForeignEventsInTicketResponse, error) {
	out := new(ResolveForeignEventsInTicketResponse)
	err := c.cc.Invoke(ctx, "/ots.ots/ResolveForeignMatchesInTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *otsClient) CancelTicket(ctx context.Context, in *TicketCancelRequest, opts ...grpc.CallOption) (*TicketCancelResponse, error) {
	out := new(TicketCancelResponse)
	err := c.cc.Invoke(ctx, "/ots.ots/CancelTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *otsClient) PlayerRiskScore(ctx context.Context, in *PlayerRiskScoreRequest, opts ...grpc.CallOption) (*PlayerRiskScoreResponse, error) {
	out := new(PlayerRiskScoreResponse)
	err := c.cc.Invoke(ctx, "/ots.ots/PlayerRiskScore", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *otsClient) TicketAck(ctx context.Context, in *TicketAckRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, "/ots.ots/TicketAck", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OtsServer is the server API for Ots service.
type OtsServer interface {
	Ticket(Ots_TicketServer) error
	ResolveForeignMatchesInTicket(context.Context, *ResolveForeignEventsInTicketRequest) (*ResolveForeignEventsInTicketResponse, error)
	CancelTicket(context.Context, *TicketCancelRequest) (*TicketCancelResponse, error)
	PlayerRiskScore(context.Context, *PlayerRiskScoreRequest) (*PlayerRiskScoreResponse, error)
	TicketAck(context.Context, *TicketAckRequest) (*emptypb.Empty, error)
}

// UnimplementedOtsServer can be embedded to have forward compatible implementations.
type UnimplementedOtsServer struct {
}

func (*UnimplementedOtsServer) Ticket(Ots_TicketServer) error {
	return status.Errorf(codes.Unimplemented, "method Ticket not implemented")
}
func (*UnimplementedOtsServer) ResolveForeignMatchesInTicket(context.Context, *ResolveForeignEventsInTicketRequest) (*ResolveForeignEventsInTicketResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResolveForeignMatchesInTicket not implemented")
}
func (*UnimplementedOtsServer) CancelTicket(context.Context, *TicketCancelRequest) (*TicketCancelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CancelTicket not implemented")
}
func (*UnimplementedOtsServer) PlayerRiskScore(context.Context, *PlayerRiskScoreRequest) (*PlayerRiskScoreResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PlayerRiskScore not implemented")
}
func (*UnimplementedOtsServer) TicketAck(context.Context, *TicketAckRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TicketAck not implemented")
}

func RegisterOtsServer(s *grpc.Server, srv OtsServer) {
	s.RegisterService(&_Ots_serviceDesc, srv)
}

func _Ots_Ticket_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(OtsServer).Ticket(&otsTicketServer{stream})
}

type Ots_TicketServer interface {
	Send(*TicketResponse) error
	Recv() (*TicketRequest, error)
	grpc.ServerStream
}

type otsTicketServer struct {
	grpc.ServerStream
}

func (x *otsTicketServer) Send(m *TicketResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *otsTicketServer) Recv() (*TicketRequest, error) {
	m := new(TicketRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Ots_ResolveForeignMatchesInTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResolveForeignEventsInTicketRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OtsServer).ResolveForeignMatchesInTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ots.ots/ResolveForeignMatchesInTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OtsServer).ResolveForeignMatchesInTicket(ctx, req.(*ResolveForeignEventsInTicketRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Ots_CancelTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TicketCancelRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OtsServer).CancelTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ots.ots/CancelTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OtsServer).CancelTicket(ctx, req.(*TicketCancelRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Ots_PlayerRiskScore_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PlayerRiskScoreRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OtsServer).PlayerRiskScore(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ots.ots/PlayerRiskScore",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OtsServer).PlayerRiskScore(ctx, req.(*PlayerRiskScoreRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Ots_TicketAck_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TicketAckRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OtsServer).TicketAck(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ots.ots/TicketAck",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OtsServer).TicketAck(ctx, req.(*TicketAckRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Ots_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ots.ots",
	HandlerType: (*OtsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ResolveForeignMatchesInTicket",
			Handler:    _Ots_ResolveForeignMatchesInTicket_Handler,
		},
		{
			MethodName: "CancelTicket",
			Handler:    _Ots_CancelTicket_Handler,
		},
		{
			MethodName: "PlayerRiskScore",
			Handler:    _Ots_PlayerRiskScore_Handler,
		},
		{
			MethodName: "TicketAck",
			Handler:    _Ots_TicketAck_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Ticket",
			Handler:       _Ots_Ticket_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "ots/service.proto",
}
