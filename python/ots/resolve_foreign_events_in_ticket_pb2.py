# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ots/resolve_foreign_events_in_ticket.proto
# Protobuf Python Version: 5.27.2
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    27,
    2,
    '',
    'ots/resolve_foreign_events_in_ticket.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from ots_schema.ots.enum import enums_pb2 as ots_dot_enum_dot_enums__pb2
from ots_schema.ots import commons_pb2 as ots_dot_commons__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n*ots/resolve_foreign_events_in_ticket.proto\x12\x03ots\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14ots/enum/enums.proto\x1a\x11ots/commons.proto\"w\n#ResolveForeignEventsInTicketRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12\x15\n\rforeign_stake\x18\x03 \x01(\x04\x12-\n\ttimestamp\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"p\n$ResolveForeignEventsInTicketResponse\x12+\n\x06status\x18\x01 \x01(\x0e\x32\x1b.ots.enums.AcceptanceStatus\x12\x1b\n\x06reason\x18\x02 \x01(\x0b\x32\x0b.ots.ReasonB\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ots.resolve_foreign_events_in_ticket_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\rcom.oddin.otsZ\014oddin.gg/ots'
  _globals['_RESOLVEFOREIGNEVENTSINTICKETREQUEST']._serialized_start=125
  _globals['_RESOLVEFOREIGNEVENTSINTICKETREQUEST']._serialized_end=244
  _globals['_RESOLVEFOREIGNEVENTSINTICKETRESPONSE']._serialized_start=246
  _globals['_RESOLVEFOREIGNEVENTSINTICKETRESPONSE']._serialized_end=358
# @@protoc_insertion_point(module_scope)
