# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ots/ticket_max_stake.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ots_schema.ots import ticket_pb2 as ots_dot_ticket__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ots/ticket_max_stake.proto',
  package='ots',
  syntax='proto3',
  serialized_options=b'\n\rcom.oddin.otsZ\014oddin.gg/ots',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1aots/ticket_max_stake.proto\x12\x03ots\x1a\x10ots/ticket.proto\"8\n\x15TicketMaxStakeRequest\x12\x1b\n\x06ticket\x18\x01 \x01(\x0b\x32\x0b.ots.Ticket:\x02\x18\x01\"=\n\x16TicketMaxStakeResponse\x12\x1f\n\x05state\x18\x01 \x01(\x0b\x32\x10.ots.TicketState:\x02\x18\x01\x42\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3'
  ,
  dependencies=[ots_dot_ticket__pb2.DESCRIPTOR,])




_TICKETMAXSTAKEREQUEST = _descriptor.Descriptor(
  name='TicketMaxStakeRequest',
  full_name='ots.TicketMaxStakeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='ticket', full_name='ots.TicketMaxStakeRequest.ticket', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'\030\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=53,
  serialized_end=109,
)


_TICKETMAXSTAKERESPONSE = _descriptor.Descriptor(
  name='TicketMaxStakeResponse',
  full_name='ots.TicketMaxStakeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='state', full_name='ots.TicketMaxStakeResponse.state', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'\030\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=111,
  serialized_end=172,
)

_TICKETMAXSTAKEREQUEST.fields_by_name['ticket'].message_type = ots_dot_ticket__pb2._TICKET
_TICKETMAXSTAKERESPONSE.fields_by_name['state'].message_type = ots_dot_ticket__pb2._TICKETSTATE
DESCRIPTOR.message_types_by_name['TicketMaxStakeRequest'] = _TICKETMAXSTAKEREQUEST
DESCRIPTOR.message_types_by_name['TicketMaxStakeResponse'] = _TICKETMAXSTAKERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TicketMaxStakeRequest = _reflection.GeneratedProtocolMessageType('TicketMaxStakeRequest', (_message.Message,), {
  'DESCRIPTOR' : _TICKETMAXSTAKEREQUEST,
  '__module__' : 'ots.ticket_max_stake_pb2'
  # @@protoc_insertion_point(class_scope:ots.TicketMaxStakeRequest)
  })
_sym_db.RegisterMessage(TicketMaxStakeRequest)

TicketMaxStakeResponse = _reflection.GeneratedProtocolMessageType('TicketMaxStakeResponse', (_message.Message,), {
  'DESCRIPTOR' : _TICKETMAXSTAKERESPONSE,
  '__module__' : 'ots.ticket_max_stake_pb2'
  # @@protoc_insertion_point(class_scope:ots.TicketMaxStakeResponse)
  })
_sym_db.RegisterMessage(TicketMaxStakeResponse)


DESCRIPTOR._options = None
_TICKETMAXSTAKEREQUEST._options = None
_TICKETMAXSTAKERESPONSE._options = None
# @@protoc_insertion_point(module_scope)
