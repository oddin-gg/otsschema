package com.oddin.ots.example;


import com.google.protobuf.StringValue;
import com.google.protobuf.Timestamp;
import com.google.protobuf.UInt64Value;
import com.oddin.ots.Enums;
import com.oddin.ots.TicketOuterClass;
import com.oddin.ots.otsGrpc;
import io.grpc.ChannelCredentials;
import io.grpc.Grpc;
import io.grpc.ManagedChannel;
import io.grpc.TlsChannelCredentials;
import io.grpc.stub.StreamObserver;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

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

    String selectionID = System.getenv("ODDIN_GG_OTS_CLIENT_NEW_TICKET_SELECTION_ID"); // e.g. "od:match:115901/37/6?side=home"
    if (selectionID == null || selectionID.isEmpty()) {
      throw new Exception("missing 'ODDIN_GG_OTS_CLIENT_NEW_TICKET_SELECTION_ID' env variable");
    }

    String oddsValueStr = System.getenv("ODDIN_GG_OTS_CLIENT_NEW_TICKET_ODDS_VALUE");  // e.g "1.5"
    if (oddsValueStr == null || oddsValueStr.isEmpty()) {
      throw new Exception("missing 'ODDIN_GG_OTS_CLIENT_NEW_TICKET_ODDS_VALUE' env variable");
    }

    String stakeValueStr = System.getenv("ODDIN_GG_OTS_CLIENT_NEW_TICKET_STAKE_VALUE"); // e.g "10"
    if (stakeValueStr == null || stakeValueStr.isEmpty()) {
      throw new Exception("missing 'ODDIN_GG_OTS_CLIENT_NEW_TICKET_STAKE_VALUE' env variable");
    }

    float oddsValue = new BigDecimal(oddsValueStr).floatValue();
    long stakeValue = new BigDecimal(stakeValueStr).longValue();

    ChannelCredentials credentials = TlsChannelCredentials
      .newBuilder()
      .build();

    ManagedChannel channel = Grpc.newChannelBuilder(url, credentials)
      .intercept(new AuthenticationInterceptor(accessToken))
      .build();

    otsGrpc.otsStub stub = otsGrpc.newStub(channel);


    StreamObserver<TicketOuterClass.TicketResponse> ticketResponseStreamObserver = new StreamObserver<>() {

      @Override
      public void onNext(TicketOuterClass.TicketResponse response) {
        if (response.hasKeepalive()) {
          Timestamp timestamp = response.getKeepalive().getTimestamp();
          System.out.println("keep-alive received: " + Instant.ofEpochSecond(timestamp.getSeconds(), timestamp.getNanos()).toString());
        }

        if (response.hasState()) {
          System.out.println("ticket state received: " + response.getState());
        }

        if (response.hasMaxStake()) {
          System.out.println("maxStake received: " + response.getMaxStake());
        }

        if (response.hasCashout()) {
          System.out.println("cashout received: " + response.getCashout());
        }

        // System.out.println("RECEIVED from server: " + response);
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

    // thread which send keep alive message to server every 10s
    Thread keepAliveThread = new Thread(
      () -> {
        while (true) {
          requestObserver.onNext(buildKeepAliveRequest()); // send keep alive message every 10s
          // System.out.println("keep alive sent");
          try {
            Thread.sleep(10_000);
          } catch (InterruptedException e) {
            throw new RuntimeException(e);
          }
        }
      }
    );
    keepAliveThread.start();

    // iteratively send new ticket request
    while (true) {
      requestObserver.onNext(buildTicketRequest(selectionID, oddsValue, stakeValue));
      System.out.println("new ticket request sent");

      Thread.sleep(30_000); // send new ticket request every 30 seconds
    }
  }

  static TicketOuterClass.TicketRequest buildKeepAliveRequest() {
    return TicketOuterClass.TicketRequest
      .newBuilder()
      .setKeepalive(TicketOuterClass.TicketRequest.newBuilder().getKeepaliveBuilder())
      .build();
  }

  static TicketOuterClass.TicketRequest buildTicketRequest(String selectionID, float oddsValue, long stakeValue) {
    long scaleConstant = 10000;
    long oddsTransformed = (long) (oddsValue * (float) scaleConstant);
    long stakeTransformed = stakeValue * scaleConstant;
    long winTransformed = oddsTransformed * stakeValue;

    Instant now = Instant.now();
    return TicketOuterClass.TicketRequest
      .newBuilder()
      .setTicket(
        TicketOuterClass.Ticket.newBuilder()
          .setCurrency("EUR")
          .setChannel(Enums.TicketChannel.TICKET_CHANNEL_INTERNET)
          .setId(UUID.randomUUID().toString())
          .setTimestamp(Timestamp.newBuilder().setSeconds(now.getEpochSecond()).setNanos(now.getNano()).build())
          .setAcceptOddsChangeValue(Enums.AcceptOddsChange.ACCEPT_ODDS_CHANGE_ANY.getNumber())
          .setTotalCombinations(1)
          .addBets(
            TicketOuterClass.Bet.newBuilder()
              .setId(StringValue.of(UUID.randomUUID().toString()))
              .setStake(
                TicketOuterClass.BetStake.newBuilder()
                  .setValue(stakeTransformed)
                  .setType(Enums.BetStakeType.BET_STAKE_TYPE_SUM)
              )
              .setTotalWins(UInt64Value.of(winTransformed))
              .addSystems(1)
              .addSelections(TicketOuterClass.BetSelection.newBuilder().setId(selectionID))
          )
          .setCustomer(
            TicketOuterClass.TicketCustomer.newBuilder()
              .setId("2ac80780-9e7f-4fd7-a039-47f805872d1a")
              .setDeviceId(StringValue.of("8991f9e1-f068-4e68-a4e1-d0ffb48257d5"))
              .setLanguage("en")
          )
          .putSelections(
            selectionID,
            TicketOuterClass.TicketSelection.newBuilder()
              .setId(selectionID)
              .setOdds(oddsTransformed)
              .build()
          )
      )
      .build();
  }
}
