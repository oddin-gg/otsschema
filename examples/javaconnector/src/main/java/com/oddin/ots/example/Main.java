package com.oddin.ots.example;


import com.oddin.ots.TicketOuterClass;
import com.oddin.ots.otsGrpc;
import io.grpc.ChannelCredentials;
import io.grpc.Grpc;
import io.grpc.ManagedChannel;
import io.grpc.TlsChannelCredentials;
import io.grpc.stub.StreamObserver;

public class Main {

    public static void main(String[] args) throws Exception {

        String url = System.getenv("ODDIN_GG_OTS_CLIENT_URL");
        if (url == null || url.isEmpty()) {
            throw new Exception("missing 'ODDIN_GG_OTS_CLIENT_URL' env variable");
        }

        String accessToken = System.getenv("ODDIN_GG_OTS_CLIENT_TOKEN");
        if (accessToken == null || accessToken.isEmpty()) {
            throw new Exception("missing 'ODDIN_GG_OTS_CLIENT_TOKEN' env variable");
        }

        ChannelCredentials credentials = TlsChannelCredentials
                .newBuilder()
                .build();

        ManagedChannel channel = Grpc.newChannelBuilder(url, credentials)
                .intercept(new AuthenticationInterceptor(accessToken))
                .build();

        otsGrpc.otsStub stub = otsGrpc.newStub(channel);

        StreamObserver<TicketOuterClass.TicketResponse> ticketResponseStreamObserver = new StreamObserver<>() {

            @Override
            public void onNext(TicketOuterClass.TicketResponse value) {
                System.out.println("RECEIVED from server: " + value.toString());
            }

            @Override
            public void onError(Throwable t) {
                System.out.println("STREAM ERROR: " + t.toString());
            }

            @Override
            public void onCompleted() {
                System.out.println("STREAM COMPLETED");
            }
        };

        StreamObserver<TicketOuterClass.TicketRequest> requestObserver = stub.ticket(ticketResponseStreamObserver);

        while (true) {
            TicketOuterClass.TicketRequest request = TicketOuterClass.TicketRequest
                    .newBuilder()
                    .setKeepalive(TicketOuterClass.TicketRequest.newBuilder().getKeepaliveBuilder())
                    .build();

            requestObserver.onNext(request);
            // System.out.println("keep alive sent: " + request);

            Thread.sleep(500);
        }
    }
}


