// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package ots

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// OtsClient is the client API for Ots service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type OtsClient interface {
	Ticket(ctx context.Context, opts ...grpc.CallOption) (Ots_TicketClient, error)
	ResolveForeignMatchesInTicket(ctx context.Context, in *ResolveForeignEventsInTicketRequest, opts ...grpc.CallOption) (*ResolveForeignEventsInTicketResponse, error)
	CancelTicket(ctx context.Context, in *TicketCancelRequest, opts ...grpc.CallOption) (*TicketCancelResponse, error)
	PlayerRiskScore(ctx context.Context, in *PlayerRiskScoreRequest, opts ...grpc.CallOption) (*PlayerRiskScoreResponse, error)
	TicketAck(ctx context.Context, in *TicketAckRequest, opts ...grpc.CallOption) (*TicketAckResponse, error)
	TicketResult(ctx context.Context, opts ...grpc.CallOption) (Ots_TicketResultClient, error)
	// Deprecated: Do not use.
	TicketMaxStake(ctx context.Context, in *TicketMaxStakeRequest, opts ...grpc.CallOption) (*TicketMaxStakeResponse, error)
	Bettors(ctx context.Context, in *BettorsRequest, opts ...grpc.CallOption) (Ots_BettorsClient, error)
	BettorUpsert(ctx context.Context, in *BettorUpsertRequest, opts ...grpc.CallOption) (*BettorUpsertResponse, error)
	AvailableBettorLabels(ctx context.Context, in *AvailableBettorLabelsRequest, opts ...grpc.CallOption) (*AvailableBettorLabelsResponse, error)
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

func (c *otsClient) TicketAck(ctx context.Context, in *TicketAckRequest, opts ...grpc.CallOption) (*TicketAckResponse, error) {
	out := new(TicketAckResponse)
	err := c.cc.Invoke(ctx, "/ots.ots/TicketAck", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *otsClient) TicketResult(ctx context.Context, opts ...grpc.CallOption) (Ots_TicketResultClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Ots_serviceDesc.Streams[1], "/ots.ots/TicketResult", opts...)
	if err != nil {
		return nil, err
	}
	x := &otsTicketResultClient{stream}
	return x, nil
}

type Ots_TicketResultClient interface {
	Send(*TicketResultRequest) error
	Recv() (*TicketResultResponse, error)
	grpc.ClientStream
}

type otsTicketResultClient struct {
	grpc.ClientStream
}

func (x *otsTicketResultClient) Send(m *TicketResultRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *otsTicketResultClient) Recv() (*TicketResultResponse, error) {
	m := new(TicketResultResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// Deprecated: Do not use.
func (c *otsClient) TicketMaxStake(ctx context.Context, in *TicketMaxStakeRequest, opts ...grpc.CallOption) (*TicketMaxStakeResponse, error) {
	out := new(TicketMaxStakeResponse)
	err := c.cc.Invoke(ctx, "/ots.ots/TicketMaxStake", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *otsClient) Bettors(ctx context.Context, in *BettorsRequest, opts ...grpc.CallOption) (Ots_BettorsClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Ots_serviceDesc.Streams[2], "/ots.ots/Bettors", opts...)
	if err != nil {
		return nil, err
	}
	x := &otsBettorsClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Ots_BettorsClient interface {
	Recv() (*BettorsResponse, error)
	grpc.ClientStream
}

type otsBettorsClient struct {
	grpc.ClientStream
}

func (x *otsBettorsClient) Recv() (*BettorsResponse, error) {
	m := new(BettorsResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *otsClient) BettorUpsert(ctx context.Context, in *BettorUpsertRequest, opts ...grpc.CallOption) (*BettorUpsertResponse, error) {
	out := new(BettorUpsertResponse)
	err := c.cc.Invoke(ctx, "/ots.ots/BettorUpsert", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *otsClient) AvailableBettorLabels(ctx context.Context, in *AvailableBettorLabelsRequest, opts ...grpc.CallOption) (*AvailableBettorLabelsResponse, error) {
	out := new(AvailableBettorLabelsResponse)
	err := c.cc.Invoke(ctx, "/ots.ots/AvailableBettorLabels", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OtsServer is the server API for Ots service.
// All implementations must embed UnimplementedOtsServer
// for forward compatibility
type OtsServer interface {
	Ticket(Ots_TicketServer) error
	ResolveForeignMatchesInTicket(context.Context, *ResolveForeignEventsInTicketRequest) (*ResolveForeignEventsInTicketResponse, error)
	CancelTicket(context.Context, *TicketCancelRequest) (*TicketCancelResponse, error)
	PlayerRiskScore(context.Context, *PlayerRiskScoreRequest) (*PlayerRiskScoreResponse, error)
	TicketAck(context.Context, *TicketAckRequest) (*TicketAckResponse, error)
	TicketResult(Ots_TicketResultServer) error
	// Deprecated: Do not use.
	TicketMaxStake(context.Context, *TicketMaxStakeRequest) (*TicketMaxStakeResponse, error)
	Bettors(*BettorsRequest, Ots_BettorsServer) error
	BettorUpsert(context.Context, *BettorUpsertRequest) (*BettorUpsertResponse, error)
	AvailableBettorLabels(context.Context, *AvailableBettorLabelsRequest) (*AvailableBettorLabelsResponse, error)
	mustEmbedUnimplementedOtsServer()
}

// UnimplementedOtsServer must be embedded to have forward compatible implementations.
type UnimplementedOtsServer struct {
}

func (UnimplementedOtsServer) Ticket(Ots_TicketServer) error {
	return status.Errorf(codes.Unimplemented, "method Ticket not implemented")
}
func (UnimplementedOtsServer) ResolveForeignMatchesInTicket(context.Context, *ResolveForeignEventsInTicketRequest) (*ResolveForeignEventsInTicketResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResolveForeignMatchesInTicket not implemented")
}
func (UnimplementedOtsServer) CancelTicket(context.Context, *TicketCancelRequest) (*TicketCancelResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CancelTicket not implemented")
}
func (UnimplementedOtsServer) PlayerRiskScore(context.Context, *PlayerRiskScoreRequest) (*PlayerRiskScoreResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PlayerRiskScore not implemented")
}
func (UnimplementedOtsServer) TicketAck(context.Context, *TicketAckRequest) (*TicketAckResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TicketAck not implemented")
}
func (UnimplementedOtsServer) TicketResult(Ots_TicketResultServer) error {
	return status.Errorf(codes.Unimplemented, "method TicketResult not implemented")
}
func (UnimplementedOtsServer) TicketMaxStake(context.Context, *TicketMaxStakeRequest) (*TicketMaxStakeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method TicketMaxStake not implemented")
}
func (UnimplementedOtsServer) Bettors(*BettorsRequest, Ots_BettorsServer) error {
	return status.Errorf(codes.Unimplemented, "method Bettors not implemented")
}
func (UnimplementedOtsServer) BettorUpsert(context.Context, *BettorUpsertRequest) (*BettorUpsertResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BettorUpsert not implemented")
}
func (UnimplementedOtsServer) AvailableBettorLabels(context.Context, *AvailableBettorLabelsRequest) (*AvailableBettorLabelsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AvailableBettorLabels not implemented")
}
func (UnimplementedOtsServer) mustEmbedUnimplementedOtsServer() {}

// UnsafeOtsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to OtsServer will
// result in compilation errors.
type UnsafeOtsServer interface {
	mustEmbedUnimplementedOtsServer()
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

func _Ots_TicketResult_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(OtsServer).TicketResult(&otsTicketResultServer{stream})
}

type Ots_TicketResultServer interface {
	Send(*TicketResultResponse) error
	Recv() (*TicketResultRequest, error)
	grpc.ServerStream
}

type otsTicketResultServer struct {
	grpc.ServerStream
}

func (x *otsTicketResultServer) Send(m *TicketResultResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *otsTicketResultServer) Recv() (*TicketResultRequest, error) {
	m := new(TicketResultRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _Ots_TicketMaxStake_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TicketMaxStakeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OtsServer).TicketMaxStake(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ots.ots/TicketMaxStake",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OtsServer).TicketMaxStake(ctx, req.(*TicketMaxStakeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Ots_Bettors_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(BettorsRequest)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(OtsServer).Bettors(m, &otsBettorsServer{stream})
}

type Ots_BettorsServer interface {
	Send(*BettorsResponse) error
	grpc.ServerStream
}

type otsBettorsServer struct {
	grpc.ServerStream
}

func (x *otsBettorsServer) Send(m *BettorsResponse) error {
	return x.ServerStream.SendMsg(m)
}

func _Ots_BettorUpsert_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BettorUpsertRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OtsServer).BettorUpsert(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ots.ots/BettorUpsert",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OtsServer).BettorUpsert(ctx, req.(*BettorUpsertRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Ots_AvailableBettorLabels_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AvailableBettorLabelsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OtsServer).AvailableBettorLabels(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ots.ots/AvailableBettorLabels",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OtsServer).AvailableBettorLabels(ctx, req.(*AvailableBettorLabelsRequest))
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
		{
			MethodName: "TicketMaxStake",
			Handler:    _Ots_TicketMaxStake_Handler,
		},
		{
			MethodName: "BettorUpsert",
			Handler:    _Ots_BettorUpsert_Handler,
		},
		{
			MethodName: "AvailableBettorLabels",
			Handler:    _Ots_AvailableBettorLabels_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Ticket",
			Handler:       _Ots_Ticket_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "TicketResult",
			Handler:       _Ots_TicketResult_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
		{
			StreamName:    "Bettors",
			Handler:       _Ots_Bettors_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "ots/service.proto",
}
