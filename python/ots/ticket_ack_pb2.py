# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ots/ticket_ack.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from ots_schema.ots.enum import enums_pb2 as ots_dot_enum_dot_enums__pb2
from ots_schema.ots import commons_pb2 as ots_dot_commons__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14ots/ticket_ack.proto\x12\x03ots\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14ots/enum/enums.proto\x1a\x11ots/commons.proto\"\xa2\x01\n\x10TicketAckRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12-\n\ttimestamp\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x36\n\x11\x61\x63\x63\x65ptance_status\x18\x03 \x01(\x0e\x32\x1b.ots.enums.AcceptanceStatus\x12\x1b\n\x06reason\x18\x04 \x01(\x0b\x32\x0b.ots.Reason\"\x13\n\x11TicketAckResponseB\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ots.ticket_ack_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\rcom.oddin.otsZ\014oddin.gg/ots'
  _TICKETACKREQUEST._serialized_start=104
  _TICKETACKREQUEST._serialized_end=266
  _TICKETACKRESPONSE._serialized_start=268
  _TICKETACKRESPONSE._serialized_end=287
# @@protoc_insertion_point(module_scope)
