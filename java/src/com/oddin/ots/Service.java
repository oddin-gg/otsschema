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
      "\n\021ots/service.proto\022\003ots\032\020ots/ticket.pro" +
      "to\032\027ots/ticket_cancel.proto\032\033ots/player_" +
      "risk_score.proto\032*ots/resolve_foreign_ev" +
      "ents_in_ticket.proto\032\024ots/ticket_ack.pro" +
      "to2\201\003\n\003ots\0225\n\006Ticket\022\022.ots.TicketRequest" +
      "\032\023.ots.TicketResponse(\0010\001\022t\n\035ResolveFore" +
      "ignMatchesInTicket\022(.ots.ResolveForeignE" +
      "ventsInTicketRequest\032).ots.ResolveForeig" +
      "nEventsInTicketResponse\022C\n\014CancelTicket\022" +
      "\030.ots.TicketCancelRequest\032\031.ots.TicketCa" +
      "ncelResponse\022L\n\017PlayerRiskScore\022\033.ots.Pl" +
      "ayerRiskScoreRequest\032\034.ots.PlayerRiskSco" +
      "reResponse\022:\n\tTicketAck\022\025.ots.TicketAckR" +
      "equest\032\026.ots.TicketAckResponseB\035\n\rcom.od" +
      "din.otsZ\014oddin.gg/otsb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          com.oddin.ots.TicketOuterClass.getDescriptor(),
          com.oddin.ots.TicketCancel.getDescriptor(),
          com.oddin.ots.PlayerRiskScoreOuterClass.getDescriptor(),
          com.oddin.ots.ResolveForeignEventsInTicket.getDescriptor(),
          com.oddin.ots.TicketAck.getDescriptor(),
        });
    com.oddin.ots.TicketOuterClass.getDescriptor();
    com.oddin.ots.TicketCancel.getDescriptor();
    com.oddin.ots.PlayerRiskScoreOuterClass.getDescriptor();
    com.oddin.ots.ResolveForeignEventsInTicket.getDescriptor();
    com.oddin.ots.TicketAck.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
