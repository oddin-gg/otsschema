package com.oddin.ots;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.33.1)",
    comments = "Source: ots/service.proto")
public final class otsGrpc {

  private otsGrpc() {}

  public static final String SERVICE_NAME = "ots.ots";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.Ticket.TicketRequest,
      com.oddin.ots.Ticket.TicketResponse> getTicketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Ticket",
      requestType = com.oddin.ots.Ticket.TicketRequest.class,
      responseType = com.oddin.ots.Ticket.TicketResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<com.oddin.ots.Ticket.TicketRequest,
      com.oddin.ots.Ticket.TicketResponse> getTicketMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.Ticket.TicketRequest, com.oddin.ots.Ticket.TicketResponse> getTicketMethod;
    if ((getTicketMethod = otsGrpc.getTicketMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getTicketMethod = otsGrpc.getTicketMethod) == null) {
          otsGrpc.getTicketMethod = getTicketMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.Ticket.TicketRequest, com.oddin.ots.Ticket.TicketResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Ticket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.Ticket.TicketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.Ticket.TicketResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("Ticket"))
              .build();
        }
      }
    }
    return getTicketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest,
      com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> getResolveForeignMatchesInTicketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ResolveForeignMatchesInTicket",
      requestType = com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest.class,
      responseType = com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest,
      com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> getResolveForeignMatchesInTicketMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest, com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> getResolveForeignMatchesInTicketMethod;
    if ((getResolveForeignMatchesInTicketMethod = otsGrpc.getResolveForeignMatchesInTicketMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getResolveForeignMatchesInTicketMethod = otsGrpc.getResolveForeignMatchesInTicketMethod) == null) {
          otsGrpc.getResolveForeignMatchesInTicketMethod = getResolveForeignMatchesInTicketMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest, com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "ResolveForeignMatchesInTicket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("ResolveForeignMatchesInTicket"))
              .build();
        }
      }
    }
    return getResolveForeignMatchesInTicketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.TicketCancel.TicketCancelRequest,
      com.oddin.ots.TicketCancel.TicketCancelResponse> getCancelTicketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "CancelTicket",
      requestType = com.oddin.ots.TicketCancel.TicketCancelRequest.class,
      responseType = com.oddin.ots.TicketCancel.TicketCancelResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.TicketCancel.TicketCancelRequest,
      com.oddin.ots.TicketCancel.TicketCancelResponse> getCancelTicketMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.TicketCancel.TicketCancelRequest, com.oddin.ots.TicketCancel.TicketCancelResponse> getCancelTicketMethod;
    if ((getCancelTicketMethod = otsGrpc.getCancelTicketMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getCancelTicketMethod = otsGrpc.getCancelTicketMethod) == null) {
          otsGrpc.getCancelTicketMethod = getCancelTicketMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.TicketCancel.TicketCancelRequest, com.oddin.ots.TicketCancel.TicketCancelResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "CancelTicket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketCancel.TicketCancelRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketCancel.TicketCancelResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("CancelTicket"))
              .build();
        }
      }
    }
    return getCancelTicketMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest,
      com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse> getPlayerRiskScoreMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PlayerRiskScore",
      requestType = com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest.class,
      responseType = com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest,
      com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse> getPlayerRiskScoreMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest, com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse> getPlayerRiskScoreMethod;
    if ((getPlayerRiskScoreMethod = otsGrpc.getPlayerRiskScoreMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getPlayerRiskScoreMethod = otsGrpc.getPlayerRiskScoreMethod) == null) {
          otsGrpc.getPlayerRiskScoreMethod = getPlayerRiskScoreMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest, com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PlayerRiskScore"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("PlayerRiskScore"))
              .build();
        }
      }
    }
    return getPlayerRiskScoreMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.TicketAck.TicketAckRequest,
      com.oddin.ots.TicketAck.TicketAckResponse> getTicketAckMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TicketAck",
      requestType = com.oddin.ots.TicketAck.TicketAckRequest.class,
      responseType = com.oddin.ots.TicketAck.TicketAckResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.TicketAck.TicketAckRequest,
      com.oddin.ots.TicketAck.TicketAckResponse> getTicketAckMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.TicketAck.TicketAckRequest, com.oddin.ots.TicketAck.TicketAckResponse> getTicketAckMethod;
    if ((getTicketAckMethod = otsGrpc.getTicketAckMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getTicketAckMethod = otsGrpc.getTicketAckMethod) == null) {
          otsGrpc.getTicketAckMethod = getTicketAckMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.TicketAck.TicketAckRequest, com.oddin.ots.TicketAck.TicketAckResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TicketAck"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketAck.TicketAckRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketAck.TicketAckResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("TicketAck"))
              .build();
        }
      }
    }
    return getTicketAckMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static otsStub newStub(io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<otsStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<otsStub>() {
        @java.lang.Override
        public otsStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new otsStub(channel, callOptions);
        }
      };
    return otsStub.newStub(factory, channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static otsBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<otsBlockingStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<otsBlockingStub>() {
        @java.lang.Override
        public otsBlockingStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new otsBlockingStub(channel, callOptions);
        }
      };
    return otsBlockingStub.newStub(factory, channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static otsFutureStub newFutureStub(
      io.grpc.Channel channel) {
    io.grpc.stub.AbstractStub.StubFactory<otsFutureStub> factory =
      new io.grpc.stub.AbstractStub.StubFactory<otsFutureStub>() {
        @java.lang.Override
        public otsFutureStub newStub(io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
          return new otsFutureStub(channel, callOptions);
        }
      };
    return otsFutureStub.newStub(factory, channel);
  }

  /**
   */
  public static abstract class otsImplBase implements io.grpc.BindableService {

    /**
     */
    public io.grpc.stub.StreamObserver<com.oddin.ots.Ticket.TicketRequest> ticket(
        io.grpc.stub.StreamObserver<com.oddin.ots.Ticket.TicketResponse> responseObserver) {
      return asyncUnimplementedStreamingCall(getTicketMethod(), responseObserver);
    }

    /**
     */
    public void resolveForeignMatchesInTicket(com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getResolveForeignMatchesInTicketMethod(), responseObserver);
    }

    /**
     */
    public void cancelTicket(com.oddin.ots.TicketCancel.TicketCancelRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketCancel.TicketCancelResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getCancelTicketMethod(), responseObserver);
    }

    /**
     */
    public void playerRiskScore(com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getPlayerRiskScoreMethod(), responseObserver);
    }

    /**
     */
    public void ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketAck.TicketAckResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getTicketAckMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getTicketMethod(),
            asyncBidiStreamingCall(
              new MethodHandlers<
                com.oddin.ots.Ticket.TicketRequest,
                com.oddin.ots.Ticket.TicketResponse>(
                  this, METHODID_TICKET)))
          .addMethod(
            getResolveForeignMatchesInTicketMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest,
                com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse>(
                  this, METHODID_RESOLVE_FOREIGN_MATCHES_IN_TICKET)))
          .addMethod(
            getCancelTicketMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.TicketCancel.TicketCancelRequest,
                com.oddin.ots.TicketCancel.TicketCancelResponse>(
                  this, METHODID_CANCEL_TICKET)))
          .addMethod(
            getPlayerRiskScoreMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest,
                com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse>(
                  this, METHODID_PLAYER_RISK_SCORE)))
          .addMethod(
            getTicketAckMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.TicketAck.TicketAckRequest,
                com.oddin.ots.TicketAck.TicketAckResponse>(
                  this, METHODID_TICKET_ACK)))
          .build();
    }
  }

  /**
   */
  public static final class otsStub extends io.grpc.stub.AbstractAsyncStub<otsStub> {
    private otsStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected otsStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new otsStub(channel, callOptions);
    }

    /**
     */
    public io.grpc.stub.StreamObserver<com.oddin.ots.Ticket.TicketRequest> ticket(
        io.grpc.stub.StreamObserver<com.oddin.ots.Ticket.TicketResponse> responseObserver) {
      return asyncBidiStreamingCall(
          getChannel().newCall(getTicketMethod(), getCallOptions()), responseObserver);
    }

    /**
     */
    public void resolveForeignMatchesInTicket(com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getResolveForeignMatchesInTicketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void cancelTicket(com.oddin.ots.TicketCancel.TicketCancelRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketCancel.TicketCancelResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCancelTicketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void playerRiskScore(com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getPlayerRiskScoreMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketAck.TicketAckResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getTicketAckMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class otsBlockingStub extends io.grpc.stub.AbstractBlockingStub<otsBlockingStub> {
    private otsBlockingStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected otsBlockingStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new otsBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse resolveForeignMatchesInTicket(com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest request) {
      return blockingUnaryCall(
          getChannel(), getResolveForeignMatchesInTicketMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.oddin.ots.TicketCancel.TicketCancelResponse cancelTicket(com.oddin.ots.TicketCancel.TicketCancelRequest request) {
      return blockingUnaryCall(
          getChannel(), getCancelTicketMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse playerRiskScore(com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getPlayerRiskScoreMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.oddin.ots.TicketAck.TicketAckResponse ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request) {
      return blockingUnaryCall(
          getChannel(), getTicketAckMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class otsFutureStub extends io.grpc.stub.AbstractFutureStub<otsFutureStub> {
    private otsFutureStub(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected otsFutureStub build(
        io.grpc.Channel channel, io.grpc.CallOptions callOptions) {
      return new otsFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> resolveForeignMatchesInTicket(
        com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getResolveForeignMatchesInTicketMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.TicketCancel.TicketCancelResponse> cancelTicket(
        com.oddin.ots.TicketCancel.TicketCancelRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getCancelTicketMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse> playerRiskScore(
        com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getPlayerRiskScoreMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.TicketAck.TicketAckResponse> ticketAck(
        com.oddin.ots.TicketAck.TicketAckRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getTicketAckMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_RESOLVE_FOREIGN_MATCHES_IN_TICKET = 0;
  private static final int METHODID_CANCEL_TICKET = 1;
  private static final int METHODID_PLAYER_RISK_SCORE = 2;
  private static final int METHODID_TICKET_ACK = 3;
  private static final int METHODID_TICKET = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final otsImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(otsImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_RESOLVE_FOREIGN_MATCHES_IN_TICKET:
          serviceImpl.resolveForeignMatchesInTicket((com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse>) responseObserver);
          break;
        case METHODID_CANCEL_TICKET:
          serviceImpl.cancelTicket((com.oddin.ots.TicketCancel.TicketCancelRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketCancel.TicketCancelResponse>) responseObserver);
          break;
        case METHODID_PLAYER_RISK_SCORE:
          serviceImpl.playerRiskScore((com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScoreOuterClass.PlayerRiskScoreResponse>) responseObserver);
          break;
        case METHODID_TICKET_ACK:
          serviceImpl.ticketAck((com.oddin.ots.TicketAck.TicketAckRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketAck.TicketAckResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_TICKET:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.ticket(
              (io.grpc.stub.StreamObserver<com.oddin.ots.Ticket.TicketResponse>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class otsBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    otsBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.oddin.ots.Service.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("ots");
    }
  }

  private static final class otsFileDescriptorSupplier
      extends otsBaseDescriptorSupplier {
    otsFileDescriptorSupplier() {}
  }

  private static final class otsMethodDescriptorSupplier
      extends otsBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    otsMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (otsGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new otsFileDescriptorSupplier())
              .addMethod(getTicketMethod())
              .addMethod(getResolveForeignMatchesInTicketMethod())
              .addMethod(getCancelTicketMethod())
              .addMethod(getPlayerRiskScoreMethod())
              .addMethod(getTicketAckMethod())
              .build();
        }
      }
    }
    return result;
  }
}
