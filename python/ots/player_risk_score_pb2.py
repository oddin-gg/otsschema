# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ots/player_risk_score.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='ots/player_risk_score.proto',
  package='ots',
  syntax='proto3',
  serialized_options=b'\n\rcom.oddin.otsZ\014oddin.gg/ots',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x1bots/player_risk_score.proto\x12\x03ots\"$\n\x16PlayerRiskScoreRequest\x12\n\n\x02id\x18\x01 \x01(\t\"D\n\x17PlayerRiskScoreResponse\x12)\n\x0brisk_scores\x18\x01 \x03(\x0b\x32\x14.ots.PlayerRiskScore\"C\n\x0fPlayerRiskScore\x12\x10\n\x08sport_id\x18\x01 \x01(\t\x12\x10\n\x08prematch\x18\x02 \x01(\r\x12\x0c\n\x04live\x18\x03 \x01(\rB\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3'
)




_PLAYERRISKSCOREREQUEST = _descriptor.Descriptor(
  name='PlayerRiskScoreRequest',
  full_name='ots.PlayerRiskScoreRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ots.PlayerRiskScoreRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=36,
  serialized_end=72,
)


_PLAYERRISKSCORERESPONSE = _descriptor.Descriptor(
  name='PlayerRiskScoreResponse',
  full_name='ots.PlayerRiskScoreResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='risk_scores', full_name='ots.PlayerRiskScoreResponse.risk_scores', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=74,
  serialized_end=142,
)


_PLAYERRISKSCORE = _descriptor.Descriptor(
  name='PlayerRiskScore',
  full_name='ots.PlayerRiskScore',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='sport_id', full_name='ots.PlayerRiskScore.sport_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='prematch', full_name='ots.PlayerRiskScore.prematch', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='live', full_name='ots.PlayerRiskScore.live', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=144,
  serialized_end=211,
)

_PLAYERRISKSCORERESPONSE.fields_by_name['risk_scores'].message_type = _PLAYERRISKSCORE
DESCRIPTOR.message_types_by_name['PlayerRiskScoreRequest'] = _PLAYERRISKSCOREREQUEST
DESCRIPTOR.message_types_by_name['PlayerRiskScoreResponse'] = _PLAYERRISKSCORERESPONSE
DESCRIPTOR.message_types_by_name['PlayerRiskScore'] = _PLAYERRISKSCORE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PlayerRiskScoreRequest = _reflection.GeneratedProtocolMessageType('PlayerRiskScoreRequest', (_message.Message,), {
  'DESCRIPTOR' : _PLAYERRISKSCOREREQUEST,
  '__module__' : 'ots.player_risk_score_pb2'
  # @@protoc_insertion_point(class_scope:ots.PlayerRiskScoreRequest)
  })
_sym_db.RegisterMessage(PlayerRiskScoreRequest)

PlayerRiskScoreResponse = _reflection.GeneratedProtocolMessageType('PlayerRiskScoreResponse', (_message.Message,), {
  'DESCRIPTOR' : _PLAYERRISKSCORERESPONSE,
  '__module__' : 'ots.player_risk_score_pb2'
  # @@protoc_insertion_point(class_scope:ots.PlayerRiskScoreResponse)
  })
_sym_db.RegisterMessage(PlayerRiskScoreResponse)

PlayerRiskScore = _reflection.GeneratedProtocolMessageType('PlayerRiskScore', (_message.Message,), {
  'DESCRIPTOR' : _PLAYERRISKSCORE,
  '__module__' : 'ots.player_risk_score_pb2'
  # @@protoc_insertion_point(class_scope:ots.PlayerRiskScore)
  })
_sym_db.RegisterMessage(PlayerRiskScore)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
