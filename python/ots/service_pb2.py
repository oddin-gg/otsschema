# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ots/service.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ots_schema.ots import ticket_pb2 as ots_dot_ticket__pb2
from ots_schema.ots import ticket_cancel_pb2 as ots_dot_ticket__cancel__pb2
from ots_schema.ots import player_risk_score_pb2 as ots_dot_player__risk__score__pb2
from ots_schema.ots import resolve_foreign_events_in_ticket_pb2 as ots_dot_resolve__foreign__events__in__ticket__pb2
from ots_schema.ots import ticket_ack_pb2 as ots_dot_ticket__ack__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ots/service.proto',
  package='ots',
  syntax='proto3',
  serialized_options=b'\n\rcom.oddin.otsZ\014oddin.gg/ots',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x11ots/service.proto\x12\x03ots\x1a\x10ots/ticket.proto\x1a\x17ots/ticket_cancel.proto\x1a\x1bots/player_risk_score.proto\x1a*ots/resolve_foreign_events_in_ticket.proto\x1a\x14ots/ticket_ack.proto2\xca\x03\n\x03ots\x12\x35\n\x06Ticket\x12\x12.ots.TicketRequest\x1a\x13.ots.TicketResponse(\x01\x30\x01\x12t\n\x1dResolveForeignMatchesInTicket\x12(.ots.ResolveForeignEventsInTicketRequest\x1a).ots.ResolveForeignEventsInTicketResponse\x12\x43\n\x0c\x43\x61ncelTicket\x12\x18.ots.TicketCancelRequest\x1a\x19.ots.TicketCancelResponse\x12L\n\x0fPlayerRiskScore\x12\x1b.ots.PlayerRiskScoreRequest\x1a\x1c.ots.PlayerRiskScoreResponse\x12:\n\tTicketAck\x12\x15.ots.TicketAckRequest\x1a\x16.ots.TicketAckResponse\x12G\n\x0cTicketResult\x12\x18.ots.TicketResultRequest\x1a\x19.ots.TicketResultResponse(\x01\x30\x01\x42\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3'
  ,
  dependencies=[ots_dot_ticket__pb2.DESCRIPTOR,ots_dot_ticket__cancel__pb2.DESCRIPTOR,ots_dot_player__risk__score__pb2.DESCRIPTOR,ots_dot_resolve__foreign__events__in__ticket__pb2.DESCRIPTOR,ots_dot_ticket__ack__pb2.DESCRIPTOR,])



_sym_db.RegisterFileDescriptor(DESCRIPTOR)


DESCRIPTOR._options = None

_OTS = _descriptor.ServiceDescriptor(
  name='ots',
  full_name='ots.ots',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=165,
  serialized_end=623,
  methods=[
  _descriptor.MethodDescriptor(
    name='Ticket',
    full_name='ots.ots.Ticket',
    index=0,
    containing_service=None,
    input_type=ots_dot_ticket__pb2._TICKETREQUEST,
    output_type=ots_dot_ticket__pb2._TICKETRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ResolveForeignMatchesInTicket',
    full_name='ots.ots.ResolveForeignMatchesInTicket',
    index=1,
    containing_service=None,
    input_type=ots_dot_resolve__foreign__events__in__ticket__pb2._RESOLVEFOREIGNEVENTSINTICKETREQUEST,
    output_type=ots_dot_resolve__foreign__events__in__ticket__pb2._RESOLVEFOREIGNEVENTSINTICKETRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CancelTicket',
    full_name='ots.ots.CancelTicket',
    index=2,
    containing_service=None,
    input_type=ots_dot_ticket__cancel__pb2._TICKETCANCELREQUEST,
    output_type=ots_dot_ticket__cancel__pb2._TICKETCANCELRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='PlayerRiskScore',
    full_name='ots.ots.PlayerRiskScore',
    index=3,
    containing_service=None,
    input_type=ots_dot_player__risk__score__pb2._PLAYERRISKSCOREREQUEST,
    output_type=ots_dot_player__risk__score__pb2._PLAYERRISKSCORERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TicketAck',
    full_name='ots.ots.TicketAck',
    index=4,
    containing_service=None,
    input_type=ots_dot_ticket__ack__pb2._TICKETACKREQUEST,
    output_type=ots_dot_ticket__ack__pb2._TICKETACKRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='TicketResult',
    full_name='ots.ots.TicketResult',
    index=5,
    containing_service=None,
    input_type=ots_dot_ticket__pb2._TICKETRESULTREQUEST,
    output_type=ots_dot_ticket__pb2._TICKETRESULTRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_OTS)

DESCRIPTOR.services_by_name['ots'] = _OTS

# @@protoc_insertion_point(module_scope)
