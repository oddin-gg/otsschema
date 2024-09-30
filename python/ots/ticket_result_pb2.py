# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ots/ticket_result.proto
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
    'ots/ticket_result.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from ots_schema.ots.enum import enums_pb2 as ots_dot_enum_dot_enums__pb2
from ots_schema.ots import commons_pb2 as ots_dot_commons__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x17ots/ticket_result.proto\x12\x03ots\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14ots/enum/enums.proto\x1a\x11ots/commons.proto\"\x91\x01\n\x13TicketResultRequest\x12#\n\x06ticket\x18\x01 \x01(\x0b\x32\x11.ots.TicketResultH\x00\x12)\n\tkeepalive\x18\x02 \x01(\x0b\x32\x14.ots.StreamKeepaliveH\x00\x12\"\n\x05\x61\x66ter\x18\x03 \x01(\x0b\x32\x11.ots.TicketsAfterH\x00\x42\x06\n\x04\x64\x61ta\"\x9b\x01\n\x14TicketResultResponse\x12\'\n\x05state\x18\x01 \x01(\x0b\x32\x16.ots.TicketResultStateH\x00\x12)\n\tkeepalive\x18\x02 \x01(\x0b\x32\x14.ots.StreamKeepaliveH\x00\x12\'\n\x05\x61\x66ter\x18\x03 \x01(\x0b\x32\x16.ots.TicketsAfterStateH\x00\x42\x06\n\x04\x64\x61ta\"M\n\x0cTicketsAfter\x12\x12\n\nrequest_id\x18\x01 \x01(\t\x12)\n\x05\x61\x66ter\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\"\x84\x02\n\x11TicketsAfterState\x12\x12\n\nrequest_id\x18\x01 \x01(\t\x12)\n\x05\x61\x66ter\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\'\n\x07tickets\x18\x03 \x03(\x0b\x32\x16.ots.TicketResultState\x12%\n\x05\x65rror\x18\x04 \x01(\x0b\x32\x16.ots.TicketResultError\x12\x34\n\nbatch_info\x18\x05 \x01(\x0b\x32 .ots.TicketsAfterState.BatchInfo\x1a*\n\tBatchInfo\x12\x0e\n\x06\x61\x63tual\x18\x01 \x01(\r\x12\r\n\x05total\x18\x02 \x01(\r\"\x1a\n\x0cTicketResult\x12\n\n\x02id\x18\x01 \x01(\t\"\x88\x01\n\x18TicketResultStateBetInfo\x12\n\n\x02id\x18\x01 \x01(\t\x12.\n\nbet_status\x18\x02 \x01(\x0e\x32\x1a.ots.enums.ResultingStatus\x12\x30\n\nwon_amount\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\"V\n\x1eTicketResultStateSelectionInfo\x12\x34\n\x10selection_status\x18\x01 \x01(\x0e\x32\x1a.ots.enums.ResultingStatus\"g\n\x11TicketResultError\x12#\n\x04\x63ode\x18\x01 \x01(\x0e\x32\x15.ots.enums.ReasonCode\x12-\n\x07message\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"\xfa\x05\n\x11TicketResultState\x12\n\n\x02id\x18\x01 \x01(\t\x12\x31\n\rticket_status\x18\x02 \x01(\x0e\x32\x1a.ots.enums.ResultingStatus\x12\x30\n\nwon_amount\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x35\n\x08\x62\x65t_info\x18\x04 \x03(\x0b\x32#.ots.TicketResultState.BetInfoEntry\x12\x41\n\x0eselection_info\x18\x05 \x03(\x0b\x32).ots.TicketResultState.SelectionInfoEntry\x12O\n\x16obb_sub_selection_info\x18\n \x03(\x0b\x32/.ots.TicketResultState.ObbSubSelectionInfoEntry\x12\x15\n\rexchange_rate\x18\x06 \x01(\x04\x12/\n\x0bresulted_at\x18\x07 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12%\n\x05\x65rror\x18\x08 \x01(\x0b\x32\x16.ots.TicketResultError\x12/\n\x0bmodified_at\x18\t \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x1aM\n\x0c\x42\x65tInfoEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12,\n\x05value\x18\x02 \x01(\x0b\x32\x1d.ots.TicketResultStateBetInfo:\x02\x38\x01\x1aY\n\x12SelectionInfoEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x32\n\x05value\x18\x02 \x01(\x0b\x32#.ots.TicketResultStateSelectionInfo:\x02\x38\x01\x1a_\n\x18ObbSubSelectionInfoEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\x32\n\x05value\x18\x02 \x01(\x0b\x32#.ots.TicketResultStateSelectionInfo:\x02\x38\x01\x42\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ots.ticket_result_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\rcom.oddin.otsZ\014oddin.gg/ots'
  _globals['_TICKETRESULTSTATE_BETINFOENTRY']._loaded_options = None
  _globals['_TICKETRESULTSTATE_BETINFOENTRY']._serialized_options = b'8\001'
  _globals['_TICKETRESULTSTATE_SELECTIONINFOENTRY']._loaded_options = None
  _globals['_TICKETRESULTSTATE_SELECTIONINFOENTRY']._serialized_options = b'8\001'
  _globals['_TICKETRESULTSTATE_OBBSUBSELECTIONINFOENTRY']._loaded_options = None
  _globals['_TICKETRESULTSTATE_OBBSUBSELECTIONINFOENTRY']._serialized_options = b'8\001'
  _globals['_TICKETRESULTREQUEST']._serialized_start=139
  _globals['_TICKETRESULTREQUEST']._serialized_end=284
  _globals['_TICKETRESULTRESPONSE']._serialized_start=287
  _globals['_TICKETRESULTRESPONSE']._serialized_end=442
  _globals['_TICKETSAFTER']._serialized_start=444
  _globals['_TICKETSAFTER']._serialized_end=521
  _globals['_TICKETSAFTERSTATE']._serialized_start=524
  _globals['_TICKETSAFTERSTATE']._serialized_end=784
  _globals['_TICKETSAFTERSTATE_BATCHINFO']._serialized_start=742
  _globals['_TICKETSAFTERSTATE_BATCHINFO']._serialized_end=784
  _globals['_TICKETRESULT']._serialized_start=786
  _globals['_TICKETRESULT']._serialized_end=812
  _globals['_TICKETRESULTSTATEBETINFO']._serialized_start=815
  _globals['_TICKETRESULTSTATEBETINFO']._serialized_end=951
  _globals['_TICKETRESULTSTATESELECTIONINFO']._serialized_start=953
  _globals['_TICKETRESULTSTATESELECTIONINFO']._serialized_end=1039
  _globals['_TICKETRESULTERROR']._serialized_start=1041
  _globals['_TICKETRESULTERROR']._serialized_end=1144
  _globals['_TICKETRESULTSTATE']._serialized_start=1147
  _globals['_TICKETRESULTSTATE']._serialized_end=1909
  _globals['_TICKETRESULTSTATE_BETINFOENTRY']._serialized_start=1644
  _globals['_TICKETRESULTSTATE_BETINFOENTRY']._serialized_end=1721
  _globals['_TICKETRESULTSTATE_SELECTIONINFOENTRY']._serialized_start=1723
  _globals['_TICKETRESULTSTATE_SELECTIONINFOENTRY']._serialized_end=1812
  _globals['_TICKETRESULTSTATE_OBBSUBSELECTIONINFOENTRY']._serialized_start=1814
  _globals['_TICKETRESULTSTATE_OBBSUBSELECTIONINFOENTRY']._serialized_end=1909
# @@protoc_insertion_point(module_scope)
