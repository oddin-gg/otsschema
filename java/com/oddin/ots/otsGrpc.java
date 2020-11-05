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
  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.TicketRequestOuterClass.TicketRequest,
      com.oddin.ots.TicketResponseOuterClass.TicketResponse> getTicketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Ticket",
      requestType = com.oddin.ots.TicketRequestOuterClass.TicketRequest.class,
      responseType = com.oddin.ots.TicketResponseOuterClass.TicketResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.TicketRequestOuterClass.TicketRequest,
      com.oddin.ots.TicketResponseOuterClass.TicketResponse> getTicketMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.TicketRequestOuterClass.TicketRequest, com.oddin.ots.TicketResponseOuterClass.TicketResponse> getTicketMethod;
    if ((getTicketMethod = otsGrpc.getTicketMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getTicketMethod = otsGrpc.getTicketMethod) == null) {
          otsGrpc.getTicketMethod = getTicketMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.TicketRequestOuterClass.TicketRequest, com.oddin.ots.TicketResponseOuterClass.TicketResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Ticket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketRequestOuterClass.TicketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketResponseOuterClass.TicketResponse.getDefaultInstance()))
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

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest,
      com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> getTicketMaxStakeMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TicketMaxStake",
      requestType = com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest.class,
      responseType = com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest,
      com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> getTicketMaxStakeMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest, com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> getTicketMaxStakeMethod;
    if ((getTicketMaxStakeMethod = otsGrpc.getTicketMaxStakeMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getTicketMaxStakeMethod = otsGrpc.getTicketMaxStakeMethod) == null) {
          otsGrpc.getTicketMaxStakeMethod = getTicketMaxStakeMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest, com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TicketMaxStake"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("TicketMaxStake"))
              .build();
        }
      }
    }
    return getTicketMaxStakeMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest,
      com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> getPlayerRiskScoreMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "PlayerRiskScore",
      requestType = com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest.class,
      responseType = com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest,
      com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> getPlayerRiskScoreMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest, com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> getPlayerRiskScoreMethod;
    if ((getPlayerRiskScoreMethod = otsGrpc.getPlayerRiskScoreMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getPlayerRiskScoreMethod = otsGrpc.getPlayerRiskScoreMethod) == null) {
          otsGrpc.getPlayerRiskScoreMethod = getPlayerRiskScoreMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest, com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "PlayerRiskScore"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("PlayerRiskScore"))
              .build();
        }
      }
    }
    return getPlayerRiskScoreMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.TicketAck.TicketAckRequest,
      com.google.protobuf.Empty> getTicketAckMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TicketAck",
      requestType = com.oddin.ots.TicketAck.TicketAckRequest.class,
      responseType = com.google.protobuf.Empty.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.oddin.ots.TicketAck.TicketAckRequest,
      com.google.protobuf.Empty> getTicketAckMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.TicketAck.TicketAckRequest, com.google.protobuf.Empty> getTicketAckMethod;
    if ((getTicketAckMethod = otsGrpc.getTicketAckMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getTicketAckMethod = otsGrpc.getTicketAckMethod) == null) {
          otsGrpc.getTicketAckMethod = getTicketAckMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.TicketAck.TicketAckRequest, com.google.protobuf.Empty>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TicketAck"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketAck.TicketAckRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.google.protobuf.Empty.getDefaultInstance()))
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
    public void ticket(com.oddin.ots.TicketRequestOuterClass.TicketRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketResponseOuterClass.TicketResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getTicketMethod(), responseObserver);
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
    public void ticketMaxStake(com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getTicketMaxStakeMethod(), responseObserver);
    }

    /**
     */
    public void playerRiskScore(com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getPlayerRiskScoreMethod(), responseObserver);
    }

    /**
     */
    public void ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
      asyncUnimplementedUnaryCall(getTicketAckMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getTicketMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.TicketRequestOuterClass.TicketRequest,
                com.oddin.ots.TicketResponseOuterClass.TicketResponse>(
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
            getTicketMaxStakeMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest,
                com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse>(
                  this, METHODID_TICKET_MAX_STAKE)))
          .addMethod(
            getPlayerRiskScoreMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest,
                com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse>(
                  this, METHODID_PLAYER_RISK_SCORE)))
          .addMethod(
            getTicketAckMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.oddin.ots.TicketAck.TicketAckRequest,
                com.google.protobuf.Empty>(
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
    public void ticket(com.oddin.ots.TicketRequestOuterClass.TicketRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketResponseOuterClass.TicketResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getTicketMethod(), getCallOptions()), request, responseObserver);
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
    public void ticketMaxStake(com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getTicketMaxStakeMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void playerRiskScore(com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getPlayerRiskScoreMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request,
        io.grpc.stub.StreamObserver<com.google.protobuf.Empty> responseObserver) {
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
    public com.oddin.ots.TicketResponseOuterClass.TicketResponse ticket(com.oddin.ots.TicketRequestOuterClass.TicketRequest request) {
      return blockingUnaryCall(
          getChannel(), getTicketMethod(), getCallOptions(), request);
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
    public com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse ticketMaxStake(com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request) {
      return blockingUnaryCall(
          getChannel(), getTicketMaxStakeMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse playerRiskScore(com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request) {
      return blockingUnaryCall(
          getChannel(), getPlayerRiskScoreMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.google.protobuf.Empty ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request) {
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
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.TicketResponseOuterClass.TicketResponse> ticket(
        com.oddin.ots.TicketRequestOuterClass.TicketRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getTicketMethod(), getCallOptions()), request);
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
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> ticketMaxStake(
        com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getTicketMaxStakeMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> playerRiskScore(
        com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getPlayerRiskScoreMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.google.protobuf.Empty> ticketAck(
        com.oddin.ots.TicketAck.TicketAckRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getTicketAckMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_TICKET = 0;
  private static final int METHODID_RESOLVE_FOREIGN_MATCHES_IN_TICKET = 1;
  private static final int METHODID_CANCEL_TICKET = 2;
  private static final int METHODID_TICKET_MAX_STAKE = 3;
  private static final int METHODID_PLAYER_RISK_SCORE = 4;
  private static final int METHODID_TICKET_ACK = 5;

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
        case METHODID_TICKET:
          serviceImpl.ticket((com.oddin.ots.TicketRequestOuterClass.TicketRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketResponseOuterClass.TicketResponse>) responseObserver);
          break;
        case METHODID_RESOLVE_FOREIGN_MATCHES_IN_TICKET:
          serviceImpl.resolveForeignMatchesInTicket((com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse>) responseObserver);
          break;
        case METHODID_CANCEL_TICKET:
          serviceImpl.cancelTicket((com.oddin.ots.TicketCancel.TicketCancelRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketCancel.TicketCancelResponse>) responseObserver);
          break;
        case METHODID_TICKET_MAX_STAKE:
          serviceImpl.ticketMaxStake((com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse>) responseObserver);
          break;
        case METHODID_PLAYER_RISK_SCORE:
          serviceImpl.playerRiskScore((com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse>) responseObserver);
          break;
        case METHODID_TICKET_ACK:
          serviceImpl.ticketAck((com.oddin.ots.TicketAck.TicketAckRequest) request,
              (io.grpc.stub.StreamObserver<com.google.protobuf.Empty>) responseObserver);
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
              .addMethod(getTicketMaxStakeMethod())
              .addMethod(getPlayerRiskScoreMethod())
              .addMethod(getTicketAckMethod())
              .build();
        }
      }
    }
    return result;
  }
}
