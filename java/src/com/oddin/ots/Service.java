// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: ots/service.proto

package com.oddin.ots;

public final class Service {
  private Service() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\021ots/service.proto\022\003ots\032\030ots/ticket_req" +
      "uest.proto\032\031ots/ticket_response.proto\032\027o" +
      "ts/ticket_cancel.proto\032\033ots/player_risk_" +
      "score.proto\032*ots/resolve_foreign_events_" +
      "in_ticket.proto\032\024ots/ticket_ack.proto\032\033g" +
      "oogle/protobuf/empty.proto2\375\002\n\003ots\0221\n\006Ti" +
      "cket\022\022.ots.TicketRequest\032\023.ots.TicketRes" +
      "ponse\022t\n\035ResolveForeignMatchesInTicket\022(" +
      ".ots.ResolveForeignEventsInTicketRequest" +
      "\032).ots.ResolveForeignEventsInTicketRespo" +
      "nse\022C\n\014CancelTicket\022\030.ots.TicketCancelRe" +
      "quest\032\031.ots.TicketCancelResponse\022L\n\017Play" +
      "erRiskScore\022\033.ots.PlayerRiskScoreRequest" +
      "\032\034.ots.PlayerRiskScoreResponse\022:\n\tTicket" +
      "Ack\022\025.ots.TicketAckRequest\032\026.google.prot" +
      "obuf.EmptyB\035\n\rcom.oddin.otsZ\014oddin.gg/ot" +
      "sb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.oddin.ots.TicketRequestOuterClass.getDescriptor(),
          com.oddin.ots.TicketResponseOuterClass.getDescriptor(),
          com.oddin.ots.TicketCancel.getDescriptor(),
          com.oddin.ots.PlayerRiskScoreOuterClass.getDescriptor(),
          com.oddin.ots.ResolveForeignEventsInTicket.getDescriptor(),
          com.oddin.ots.TicketAck.getDescriptor(),
          com.google.protobuf.EmptyProto.getDescriptor(),
        });
    com.oddin.ots.TicketRequestOuterClass.getDescriptor();
    com.oddin.ots.TicketResponseOuterClass.getDescriptor();
    com.oddin.ots.TicketCancel.getDescriptor();
    com.oddin.ots.PlayerRiskScoreOuterClass.getDescriptor();
    com.oddin.ots.ResolveForeignEventsInTicket.getDescriptor();
    com.oddin.ots.TicketAck.getDescriptor();
    com.google.protobuf.EmptyProto.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}