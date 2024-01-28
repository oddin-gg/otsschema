package com.oddin.ots;

import static io.grpc.MethodDescriptor.generateFullMethodName;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.54.1)",
    comments = "Source: ots/service.proto")
@io.grpc.stub.annotations.GrpcGenerated
public final class otsGrpc {

  private otsGrpc() {}

  public static final String SERVICE_NAME = "ots.ots";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.TicketOuterClass.TicketRequest,
      com.oddin.ots.TicketOuterClass.TicketResponse> getTicketMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "Ticket",
      requestType = com.oddin.ots.TicketOuterClass.TicketRequest.class,
      responseType = com.oddin.ots.TicketOuterClass.TicketResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<com.oddin.ots.TicketOuterClass.TicketRequest,
      com.oddin.ots.TicketOuterClass.TicketResponse> getTicketMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.TicketOuterClass.TicketRequest, com.oddin.ots.TicketOuterClass.TicketResponse> getTicketMethod;
    if ((getTicketMethod = otsGrpc.getTicketMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getTicketMethod = otsGrpc.getTicketMethod) == null) {
          otsGrpc.getTicketMethod = getTicketMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.TicketOuterClass.TicketRequest, com.oddin.ots.TicketOuterClass.TicketResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "Ticket"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketOuterClass.TicketRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketOuterClass.TicketResponse.getDefaultInstance()))
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

  private static volatile io.grpc.MethodDescriptor<com.oddin.ots.TicketResultOuterClass.TicketResultRequest,
      com.oddin.ots.TicketResultOuterClass.TicketResultResponse> getTicketResultMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "TicketResult",
      requestType = com.oddin.ots.TicketResultOuterClass.TicketResultRequest.class,
      responseType = com.oddin.ots.TicketResultOuterClass.TicketResultResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
  public static io.grpc.MethodDescriptor<com.oddin.ots.TicketResultOuterClass.TicketResultRequest,
      com.oddin.ots.TicketResultOuterClass.TicketResultResponse> getTicketResultMethod() {
    io.grpc.MethodDescriptor<com.oddin.ots.TicketResultOuterClass.TicketResultRequest, com.oddin.ots.TicketResultOuterClass.TicketResultResponse> getTicketResultMethod;
    if ((getTicketResultMethod = otsGrpc.getTicketResultMethod) == null) {
      synchronized (otsGrpc.class) {
        if ((getTicketResultMethod = otsGrpc.getTicketResultMethod) == null) {
          otsGrpc.getTicketResultMethod = getTicketResultMethod =
              io.grpc.MethodDescriptor.<com.oddin.ots.TicketResultOuterClass.TicketResultRequest, com.oddin.ots.TicketResultOuterClass.TicketResultResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.BIDI_STREAMING)
              .setFullMethodName(generateFullMethodName(SERVICE_NAME, "TicketResult"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketResultOuterClass.TicketResultRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.oddin.ots.TicketResultOuterClass.TicketResultResponse.getDefaultInstance()))
              .setSchemaDescriptor(new otsMethodDescriptorSupplier("TicketResult"))
              .build();
        }
      }
    }
    return getTicketResultMethod;
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
  public interface AsyncService {

    /**
     */
    default io.grpc.stub.StreamObserver<com.oddin.ots.TicketOuterClass.TicketRequest> ticket(
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketOuterClass.TicketResponse> responseObserver) {
      return io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall(getTicketMethod(), responseObserver);
    }

    /**
     */
    default void resolveForeignMatchesInTicket(com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getResolveForeignMatchesInTicketMethod(), responseObserver);
    }

    /**
     */
    default void cancelTicket(com.oddin.ots.TicketCancel.TicketCancelRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketCancel.TicketCancelResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getCancelTicketMethod(), responseObserver);
    }

    /**
     */
    default void playerRiskScore(com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getPlayerRiskScoreMethod(), responseObserver);
    }

    /**
     */
    default void ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketAck.TicketAckResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTicketAckMethod(), responseObserver);
    }

    /**
     */
    default io.grpc.stub.StreamObserver<com.oddin.ots.TicketResultOuterClass.TicketResultRequest> ticketResult(
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketResultOuterClass.TicketResultResponse> responseObserver) {
      return io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall(getTicketResultMethod(), responseObserver);
    }

    /**
     */
    @java.lang.Deprecated
    default void ticketMaxStake(com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> responseObserver) {
      io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall(getTicketMaxStakeMethod(), responseObserver);
    }
  }

  /**
   * Base class for the server implementation of the service ots.
   */
  public static abstract class otsImplBase
      implements io.grpc.BindableService, AsyncService {

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return otsGrpc.bindService(this);
    }
  }

  /**
   * A stub to allow clients to do asynchronous rpc calls to service ots.
   */
  public static final class otsStub
      extends io.grpc.stub.AbstractAsyncStub<otsStub> {
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
    public io.grpc.stub.StreamObserver<com.oddin.ots.TicketOuterClass.TicketRequest> ticket(
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketOuterClass.TicketResponse> responseObserver) {
      return io.grpc.stub.ClientCalls.asyncBidiStreamingCall(
          getChannel().newCall(getTicketMethod(), getCallOptions()), responseObserver);
    }

    /**
     */
    public void resolveForeignMatchesInTicket(com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getResolveForeignMatchesInTicketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void cancelTicket(com.oddin.ots.TicketCancel.TicketCancelRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketCancel.TicketCancelResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getCancelTicketMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void playerRiskScore(com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getPlayerRiskScoreMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketAck.TicketAckResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTicketAckMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public io.grpc.stub.StreamObserver<com.oddin.ots.TicketResultOuterClass.TicketResultRequest> ticketResult(
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketResultOuterClass.TicketResultResponse> responseObserver) {
      return io.grpc.stub.ClientCalls.asyncBidiStreamingCall(
          getChannel().newCall(getTicketResultMethod(), getCallOptions()), responseObserver);
    }

    /**
     */
    @java.lang.Deprecated
    public void ticketMaxStake(com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request,
        io.grpc.stub.StreamObserver<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> responseObserver) {
      io.grpc.stub.ClientCalls.asyncUnaryCall(
          getChannel().newCall(getTicketMaxStakeMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   * A stub to allow clients to do synchronous rpc calls to service ots.
   */
  public static final class otsBlockingStub
      extends io.grpc.stub.AbstractBlockingStub<otsBlockingStub> {
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
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getResolveForeignMatchesInTicketMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.oddin.ots.TicketCancel.TicketCancelResponse cancelTicket(com.oddin.ots.TicketCancel.TicketCancelRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getCancelTicketMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse playerRiskScore(com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getPlayerRiskScoreMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.oddin.ots.TicketAck.TicketAckResponse ticketAck(com.oddin.ots.TicketAck.TicketAckRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTicketAckMethod(), getCallOptions(), request);
    }

    /**
     */
    @java.lang.Deprecated
    public com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse ticketMaxStake(com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request) {
      return io.grpc.stub.ClientCalls.blockingUnaryCall(
          getChannel(), getTicketMaxStakeMethod(), getCallOptions(), request);
    }
  }

  /**
   * A stub to allow clients to do ListenableFuture-style rpc calls to service ots.
   */
  public static final class otsFutureStub
      extends io.grpc.stub.AbstractFutureStub<otsFutureStub> {
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
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getResolveForeignMatchesInTicketMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.TicketCancel.TicketCancelResponse> cancelTicket(
        com.oddin.ots.TicketCancel.TicketCancelRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getCancelTicketMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse> playerRiskScore(
        com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getPlayerRiskScoreMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.TicketAck.TicketAckResponse> ticketAck(
        com.oddin.ots.TicketAck.TicketAckRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTicketAckMethod(), getCallOptions()), request);
    }

    /**
     */
    @java.lang.Deprecated
    public com.google.common.util.concurrent.ListenableFuture<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse> ticketMaxStake(
        com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest request) {
      return io.grpc.stub.ClientCalls.futureUnaryCall(
          getChannel().newCall(getTicketMaxStakeMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_RESOLVE_FOREIGN_MATCHES_IN_TICKET = 0;
  private static final int METHODID_CANCEL_TICKET = 1;
  private static final int METHODID_PLAYER_RISK_SCORE = 2;
  private static final int METHODID_TICKET_ACK = 3;
  private static final int METHODID_TICKET_MAX_STAKE = 4;
  private static final int METHODID_TICKET = 5;
  private static final int METHODID_TICKET_RESULT = 6;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AsyncService serviceImpl;
    private final int methodId;

    MethodHandlers(AsyncService serviceImpl, int methodId) {
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
          serviceImpl.playerRiskScore((com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse>) responseObserver);
          break;
        case METHODID_TICKET_ACK:
          serviceImpl.ticketAck((com.oddin.ots.TicketAck.TicketAckRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketAck.TicketAckResponse>) responseObserver);
          break;
        case METHODID_TICKET_MAX_STAKE:
          serviceImpl.ticketMaxStake((com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest) request,
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse>) responseObserver);
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
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketOuterClass.TicketResponse>) responseObserver);
        case METHODID_TICKET_RESULT:
          return (io.grpc.stub.StreamObserver<Req>) serviceImpl.ticketResult(
              (io.grpc.stub.StreamObserver<com.oddin.ots.TicketResultOuterClass.TicketResultResponse>) responseObserver);
        default:
          throw new AssertionError();
      }
    }
  }

  public static final io.grpc.ServerServiceDefinition bindService(AsyncService service) {
    return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
        .addMethod(
          getTicketMethod(),
          io.grpc.stub.ServerCalls.asyncBidiStreamingCall(
            new MethodHandlers<
              com.oddin.ots.TicketOuterClass.TicketRequest,
              com.oddin.ots.TicketOuterClass.TicketResponse>(
                service, METHODID_TICKET)))
        .addMethod(
          getResolveForeignMatchesInTicketMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketRequest,
              com.oddin.ots.ResolveForeignEventsInTicket.ResolveForeignEventsInTicketResponse>(
                service, METHODID_RESOLVE_FOREIGN_MATCHES_IN_TICKET)))
        .addMethod(
          getCancelTicketMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.oddin.ots.TicketCancel.TicketCancelRequest,
              com.oddin.ots.TicketCancel.TicketCancelResponse>(
                service, METHODID_CANCEL_TICKET)))
        .addMethod(
          getPlayerRiskScoreMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.oddin.ots.PlayerRiskScore.PlayerRiskScoreRequest,
              com.oddin.ots.PlayerRiskScore.PlayerRiskScoreResponse>(
                service, METHODID_PLAYER_RISK_SCORE)))
        .addMethod(
          getTicketAckMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.oddin.ots.TicketAck.TicketAckRequest,
              com.oddin.ots.TicketAck.TicketAckResponse>(
                service, METHODID_TICKET_ACK)))
        .addMethod(
          getTicketResultMethod(),
          io.grpc.stub.ServerCalls.asyncBidiStreamingCall(
            new MethodHandlers<
              com.oddin.ots.TicketResultOuterClass.TicketResultRequest,
              com.oddin.ots.TicketResultOuterClass.TicketResultResponse>(
                service, METHODID_TICKET_RESULT)))
        .addMethod(
          getTicketMaxStakeMethod(),
          io.grpc.stub.ServerCalls.asyncUnaryCall(
            new MethodHandlers<
              com.oddin.ots.TicketMaxStake.TicketMaxStakeRequest,
              com.oddin.ots.TicketMaxStake.TicketMaxStakeResponse>(
                service, METHODID_TICKET_MAX_STAKE)))
        .build();
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
              .addMethod(getTicketResultMethod())
              .addMethod(getTicketMaxStakeMethod())
              .build();
        }
      }
    }
    return result;
  }
}
