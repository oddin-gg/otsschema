# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ots/commons.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from ots_schema.ots.enum import enums_pb2 as ots_dot_enum_dot_enums__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11ots/commons.proto\x12\x03ots\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14ots/enum/enums.proto\">\n\x06Reason\x12#\n\x04\x63ode\x18\x01 \x01(\x0e\x32\x15.ots.enums.ReasonCode\x12\x0f\n\x07message\x18\x02 \x01(\t\"@\n\x0fStreamKeepalive\x12-\n\ttimestamp\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.TimestampB\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ots.commons_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\rcom.oddin.otsZ\014oddin.gg/ots'
  _REASON._serialized_start=81
  _REASON._serialized_end=143
  _STREAMKEEPALIVE._serialized_start=145
  _STREAMKEEPALIVE._serialized_end=209
# @@protoc_insertion_point(module_scope)
