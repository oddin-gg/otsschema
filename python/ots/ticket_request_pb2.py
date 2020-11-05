# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ots/ticket_request.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from ots_schema.ots.enum import enums_pb2 as ots_dot_enum_dot_enums__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ots/ticket_request.proto',
  package='ots',
  syntax='proto3',
  serialized_options=b'\n\rcom.oddin.otsZ\014oddin.gg/ots',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x18ots/ticket_request.proto\x12\x03ots\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14ots/enum/enums.proto\"\xf3\x03\n\rTicketRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12-\n\ttimestamp\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x16\n\x04\x62\x65ts\x18\x03 \x03(\x0b\x32\x08.ots.Bet\x12\x37\n\x12\x61\x63\x63\x65pt_odds_change\x18\x04 \x01(\x0e\x32\x1b.ots.enums.AcceptOddsChange\x12\x38\n\x12total_combinations\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x12+\n\x08\x62\x65t_info\x18\x06 \x01(\x0b\x32\x19.ots.TicketRequestBetInfo\x12<\n\x18last_match_end_timestamp\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x30\n\nreoffer_id\x18\x08 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x36\n\nselections\x18\t \x03(\x0b\x32\".ots.TicketRequest.SelectionsEntry\x1aG\n\x0fSelectionsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12#\n\x05value\x18\x02 \x01(\x0b\x32\x14.ots.TicketSelection:\x02\x38\x01\"\x87\x02\n\x03\x42\x65t\x12(\n\x02id\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x1c\n\x05\x62onus\x18\x02 \x01(\x0b\x32\r.ots.BetBonus\x12\x1c\n\x05stake\x18\x03 \x01(\x0b\x32\r.ots.BetStake\x12\x30\n\nreoffer_id\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x30\n\ntotal_wins\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x0f\n\x07systems\x18\x06 \x03(\r\x12%\n\nselections\x18\x07 \x03(\x0b\x32\x11.ots.BetSelection\"=\n\x0fTicketSelection\x12\x10\n\x08\x65vent_id\x18\x01 \x01(\t\x12\n\n\x02id\x18\x02 \x01(\t\x12\x0c\n\x04odds\x18\x03 \x01(\x04\"*\n\x0c\x42\x65tSelection\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0e\n\x06\x62\x61nker\x18\x02 \x01(\x08\"@\n\x08\x42\x65tStake\x12\r\n\x05value\x18\x01 \x01(\x04\x12%\n\x04type\x18\x02 \x01(\x0e\x32\x17.ots.enums.BetStakeType\"g\n\x08\x42\x65tBonus\x12\r\n\x05value\x18\x01 \x01(\x04\x12%\n\x04type\x18\x02 \x01(\x0e\x32\x17.ots.enums.BetBonusType\x12%\n\x04mode\x18\x03 \x01(\x0e\x32\x17.ots.enums.BetBonusMode\"\xab\x01\n\x14TicketRequestBetInfo\x12\x31\n\x0blocation_id\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12*\n\x0b\x62\x65t_channel\x18\x02 \x01(\x0e\x32\x15.ots.enums.BetChannel\x12\x10\n\x08\x63urrency\x18\x03 \x01(\t\x12\"\n\x08\x63ustomer\x18\x04 \x01(\x0b\x32\x10.ots.BetCustomer\"\x86\x01\n\x0b\x42\x65tCustomer\x12\n\n\x02id\x18\x01 \x01(\t\x12(\n\x02ip\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12/\n\tdevice_id\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x10\n\x08language\x18\x04 \x01(\tB\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_wrappers__pb2.DESCRIPTOR,google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,ots_dot_enum_dot_enums__pb2.DESCRIPTOR,])




_TICKETREQUEST_SELECTIONSENTRY = _descriptor.Descriptor(
  name='SelectionsEntry',
  full_name='ots.TicketRequest.SelectionsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='ots.TicketRequest.SelectionsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='ots.TicketRequest.SelectionsEntry.value', index=1,
      number=2, type=11, cpp_type=10, label=1,
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
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=549,
  serialized_end=620,
)

_TICKETREQUEST = _descriptor.Descriptor(
  name='TicketRequest',
  full_name='ots.TicketRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ots.TicketRequest.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='ots.TicketRequest.timestamp', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='bets', full_name='ots.TicketRequest.bets', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='accept_odds_change', full_name='ots.TicketRequest.accept_odds_change', index=3,
      number=4, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='total_combinations', full_name='ots.TicketRequest.total_combinations', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='bet_info', full_name='ots.TicketRequest.bet_info', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='last_match_end_timestamp', full_name='ots.TicketRequest.last_match_end_timestamp', index=6,
      number=7, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='reoffer_id', full_name='ots.TicketRequest.reoffer_id', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='selections', full_name='ots.TicketRequest.selections', index=8,
      number=9, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_TICKETREQUEST_SELECTIONSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=121,
  serialized_end=620,
)


_BET = _descriptor.Descriptor(
  name='Bet',
  full_name='ots.Bet',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ots.Bet.id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='bonus', full_name='ots.Bet.bonus', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='stake', full_name='ots.Bet.stake', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='reoffer_id', full_name='ots.Bet.reoffer_id', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='total_wins', full_name='ots.Bet.total_wins', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='systems', full_name='ots.Bet.systems', index=5,
      number=6, type=13, cpp_type=3, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='selections', full_name='ots.Bet.selections', index=6,
      number=7, type=11, cpp_type=10, label=3,
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
  serialized_start=623,
  serialized_end=886,
)


_TICKETSELECTION = _descriptor.Descriptor(
  name='TicketSelection',
  full_name='ots.TicketSelection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='event_id', full_name='ots.TicketSelection.event_id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='id', full_name='ots.TicketSelection.id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='odds', full_name='ots.TicketSelection.odds', index=2,
      number=3, type=4, cpp_type=4, label=1,
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
  serialized_start=888,
  serialized_end=949,
)


_BETSELECTION = _descriptor.Descriptor(
  name='BetSelection',
  full_name='ots.BetSelection',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ots.BetSelection.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='banker', full_name='ots.BetSelection.banker', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
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
  serialized_start=951,
  serialized_end=993,
)


_BETSTAKE = _descriptor.Descriptor(
  name='BetStake',
  full_name='ots.BetStake',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='ots.BetStake.value', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='ots.BetStake.type', index=1,
      number=2, type=14, cpp_type=8, label=1,
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
  serialized_start=995,
  serialized_end=1059,
)


_BETBONUS = _descriptor.Descriptor(
  name='BetBonus',
  full_name='ots.BetBonus',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='ots.BetBonus.value', index=0,
      number=1, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='type', full_name='ots.BetBonus.type', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='mode', full_name='ots.BetBonus.mode', index=2,
      number=3, type=14, cpp_type=8, label=1,
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
  serialized_start=1061,
  serialized_end=1164,
)


_TICKETREQUESTBETINFO = _descriptor.Descriptor(
  name='TicketRequestBetInfo',
  full_name='ots.TicketRequestBetInfo',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='location_id', full_name='ots.TicketRequestBetInfo.location_id', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='bet_channel', full_name='ots.TicketRequestBetInfo.bet_channel', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='currency', full_name='ots.TicketRequestBetInfo.currency', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='customer', full_name='ots.TicketRequestBetInfo.customer', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1167,
  serialized_end=1338,
)


_BETCUSTOMER = _descriptor.Descriptor(
  name='BetCustomer',
  full_name='ots.BetCustomer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ots.BetCustomer.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ip', full_name='ots.BetCustomer.ip', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='device_id', full_name='ots.BetCustomer.device_id', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='language', full_name='ots.BetCustomer.language', index=3,
      number=4, type=9, cpp_type=9, label=1,
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
  serialized_start=1341,
  serialized_end=1475,
)

_TICKETREQUEST_SELECTIONSENTRY.fields_by_name['value'].message_type = _TICKETSELECTION
_TICKETREQUEST_SELECTIONSENTRY.containing_type = _TICKETREQUEST
_TICKETREQUEST.fields_by_name['timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TICKETREQUEST.fields_by_name['bets'].message_type = _BET
_TICKETREQUEST.fields_by_name['accept_odds_change'].enum_type = ots_dot_enum_dot_enums__pb2._ACCEPTODDSCHANGE
_TICKETREQUEST.fields_by_name['total_combinations'].message_type = google_dot_protobuf_dot_wrappers__pb2._UINT32VALUE
_TICKETREQUEST.fields_by_name['bet_info'].message_type = _TICKETREQUESTBETINFO
_TICKETREQUEST.fields_by_name['last_match_end_timestamp'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_TICKETREQUEST.fields_by_name['reoffer_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TICKETREQUEST.fields_by_name['selections'].message_type = _TICKETREQUEST_SELECTIONSENTRY
_BET.fields_by_name['id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_BET.fields_by_name['bonus'].message_type = _BETBONUS
_BET.fields_by_name['stake'].message_type = _BETSTAKE
_BET.fields_by_name['reoffer_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_BET.fields_by_name['total_wins'].message_type = google_dot_protobuf_dot_wrappers__pb2._UINT64VALUE
_BET.fields_by_name['selections'].message_type = _BETSELECTION
_BETSTAKE.fields_by_name['type'].enum_type = ots_dot_enum_dot_enums__pb2._BETSTAKETYPE
_BETBONUS.fields_by_name['type'].enum_type = ots_dot_enum_dot_enums__pb2._BETBONUSTYPE
_BETBONUS.fields_by_name['mode'].enum_type = ots_dot_enum_dot_enums__pb2._BETBONUSMODE
_TICKETREQUESTBETINFO.fields_by_name['location_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_TICKETREQUESTBETINFO.fields_by_name['bet_channel'].enum_type = ots_dot_enum_dot_enums__pb2._BETCHANNEL
_TICKETREQUESTBETINFO.fields_by_name['customer'].message_type = _BETCUSTOMER
_BETCUSTOMER.fields_by_name['ip'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
_BETCUSTOMER.fields_by_name['device_id'].message_type = google_dot_protobuf_dot_wrappers__pb2._STRINGVALUE
DESCRIPTOR.message_types_by_name['TicketRequest'] = _TICKETREQUEST
DESCRIPTOR.message_types_by_name['Bet'] = _BET
DESCRIPTOR.message_types_by_name['TicketSelection'] = _TICKETSELECTION
DESCRIPTOR.message_types_by_name['BetSelection'] = _BETSELECTION
DESCRIPTOR.message_types_by_name['BetStake'] = _BETSTAKE
DESCRIPTOR.message_types_by_name['BetBonus'] = _BETBONUS
DESCRIPTOR.message_types_by_name['TicketRequestBetInfo'] = _TICKETREQUESTBETINFO
DESCRIPTOR.message_types_by_name['BetCustomer'] = _BETCUSTOMER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TicketRequest = _reflection.GeneratedProtocolMessageType('TicketRequest', (_message.Message,), {

  'SelectionsEntry' : _reflection.GeneratedProtocolMessageType('SelectionsEntry', (_message.Message,), {
    'DESCRIPTOR' : _TICKETREQUEST_SELECTIONSENTRY,
    '__module__' : 'ots.ticket_request_pb2'
    # @@protoc_insertion_point(class_scope:ots.TicketRequest.SelectionsEntry)
    })
  ,
  'DESCRIPTOR' : _TICKETREQUEST,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.TicketRequest)
  })
_sym_db.RegisterMessage(TicketRequest)
_sym_db.RegisterMessage(TicketRequest.SelectionsEntry)

Bet = _reflection.GeneratedProtocolMessageType('Bet', (_message.Message,), {
  'DESCRIPTOR' : _BET,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.Bet)
  })
_sym_db.RegisterMessage(Bet)

TicketSelection = _reflection.GeneratedProtocolMessageType('TicketSelection', (_message.Message,), {
  'DESCRIPTOR' : _TICKETSELECTION,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.TicketSelection)
  })
_sym_db.RegisterMessage(TicketSelection)

BetSelection = _reflection.GeneratedProtocolMessageType('BetSelection', (_message.Message,), {
  'DESCRIPTOR' : _BETSELECTION,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.BetSelection)
  })
_sym_db.RegisterMessage(BetSelection)

BetStake = _reflection.GeneratedProtocolMessageType('BetStake', (_message.Message,), {
  'DESCRIPTOR' : _BETSTAKE,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.BetStake)
  })
_sym_db.RegisterMessage(BetStake)

BetBonus = _reflection.GeneratedProtocolMessageType('BetBonus', (_message.Message,), {
  'DESCRIPTOR' : _BETBONUS,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.BetBonus)
  })
_sym_db.RegisterMessage(BetBonus)

TicketRequestBetInfo = _reflection.GeneratedProtocolMessageType('TicketRequestBetInfo', (_message.Message,), {
  'DESCRIPTOR' : _TICKETREQUESTBETINFO,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.TicketRequestBetInfo)
  })
_sym_db.RegisterMessage(TicketRequestBetInfo)

BetCustomer = _reflection.GeneratedProtocolMessageType('BetCustomer', (_message.Message,), {
  'DESCRIPTOR' : _BETCUSTOMER,
  '__module__' : 'ots.ticket_request_pb2'
  # @@protoc_insertion_point(class_scope:ots.BetCustomer)
  })
_sym_db.RegisterMessage(BetCustomer)


DESCRIPTOR._options = None
_TICKETREQUEST_SELECTIONSENTRY._options = None
# @@protoc_insertion_point(module_scope)
