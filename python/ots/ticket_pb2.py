# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: ots/ticket.proto
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
    'ots/ticket.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import wrappers_pb2 as google_dot_protobuf_dot_wrappers__pb2
from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2
from ots_schema.ots.enum import enums_pb2 as ots_dot_enum_dot_enums__pb2
from ots_schema.ots import commons_pb2 as ots_dot_commons__pb2
from ots_schema.ots import ticket_cashout_pb2 as ots_dot_ticket__cashout__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10ots/ticket.proto\x12\x03ots\x1a\x1egoogle/protobuf/wrappers.proto\x1a\x1fgoogle/protobuf/timestamp.proto\x1a\x14ots/enum/enums.proto\x1a\x11ots/commons.proto\x1a\x18ots/ticket_cashout.proto\"\xb2\x01\n\rTicketRequest\x12\x1d\n\x06ticket\x18\x01 \x01(\x0b\x32\x0b.ots.TicketH\x00\x12)\n\tkeepalive\x18\x02 \x01(\x0b\x32\x14.ots.StreamKeepaliveH\x00\x12%\n\x07\x63\x61shout\x18\x03 \x01(\x0b\x32\x12.ots.TicketCashoutH\x00\x12(\n\tmax_stake\x18\x04 \x01(\x0b\x32\x13.ots.TicketMaxStakeH\x00\x42\x06\n\x04\x64\x61ta\"\xc1\x01\n\x0eTicketResponse\x12!\n\x05state\x18\x01 \x01(\x0b\x32\x10.ots.TicketStateH\x00\x12)\n\tkeepalive\x18\x02 \x01(\x0b\x32\x14.ots.StreamKeepaliveH\x00\x12*\n\x07\x63\x61shout\x18\x03 \x01(\x0b\x32\x17.ots.TicketCashoutStateH\x00\x12-\n\tmax_stake\x18\x04 \x01(\x0b\x32\x18.ots.TicketMaxStakeStateH\x00\x42\x06\n\x04\x64\x61ta\"-\n\x0eTicketMaxStake\x12\x1b\n\x06ticket\x18\x01 \x01(\x0b\x32\x0b.ots.Ticket\"B\n\x13TicketMaxStakeState\x12\n\n\x02id\x18\x01 \x01(\t\x12\x1f\n\x05state\x18\x02 \x01(\x0b\x32\x10.ots.TicketState\"\x85\x06\n\x06Ticket\x12\n\n\x02id\x18\x01 \x01(\t\x12-\n\ttimestamp\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x16\n\x04\x62\x65ts\x18\x03 \x03(\x0b\x32\x08.ots.Bet\x12\x37\n\x12\x61\x63\x63\x65pt_odds_change\x18\x04 \x01(\x0e\x32\x1b.ots.enums.AcceptOddsChange\x12\x1a\n\x12total_combinations\x18\x05 \x01(\x04\x12%\n\x08\x63ustomer\x18\x06 \x01(\x0b\x32\x13.ots.TicketCustomer\x12\x30\n\nreoffer_id\x18\x08 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12/\n\nselections\x18\t \x03(\x0b\x32\x1b.ots.Ticket.SelectionsEntry\x12\x31\n\x0blocation_id\x18\n \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x10\n\x08\x63urrency\x18\x0b \x01(\t\x12)\n\x07\x63hannel\x18\x0c \x01(\x0e\x32\x18.ots.enums.TicketChannel\x12=\n\x19lastForeignEventStartTime\x18\r \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12;\n\x17lastForeignEventEndTime\x18\x0e \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x36\n\x10stake_multiplier\x18\x0f \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12+\n\x08metadata\x18\x10 \x03(\x0b\x32\x19.ots.Ticket.MetadataEntry\x1aG\n\x0fSelectionsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12#\n\x05value\x18\x02 \x01(\x0b\x32\x14.ots.TicketSelection:\x02\x38\x01\x1a/\n\rMetadataEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xa1\x01\n\x0fTicketSelection\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04odds\x18\x03 \x01(\x04\x12+\n\x07\x66oreign\x18\x04 \x01(\x0b\x32\x1a.google.protobuf.BoolValue\x12\x32\n\x10obb_session_info\x18\x06 \x01(\x0b\x32\x13.ots.OBBSessionInfoH\x00\x88\x01\x01\x42\x13\n\x11_obb_session_info\"<\n\x0eOBBSessionInfo\x12\x12\n\nsession_id\x18\x01 \x01(\t\x12\x16\n\x0esub_selections\x18\x02 \x03(\t\"\xb9\x01\n\x0eTicketCustomer\x12\n\n\x02id\x18\x01 \x01(\t\x12(\n\x02ip\x18\x02 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12/\n\tdevice_id\x18\x03 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x10\n\x08language\x18\x04 \x01(\t\x12.\n\x08nickname\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.StringValue\"\x8b\x02\n\x03\x42\x65t\x12(\n\x02id\x18\x01 \x01(\x0b\x32\x1c.google.protobuf.StringValue\x12\x1c\n\x05\x62onus\x18\x02 \x01(\x0b\x32\r.ots.BetBonus\x12\x1c\n\x05stake\x18\x03 \x01(\x0b\x32\r.ots.BetStake\x12\x34\n\nreoffer_id\x18\x04 \x01(\x0b\x32\x1c.google.protobuf.StringValueB\x02\x18\x01\x12\x30\n\ntotal_wins\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x0f\n\x07systems\x18\x06 \x03(\r\x12%\n\nselections\x18\x07 \x03(\x0b\x32\x11.ots.BetSelection\"\x1a\n\x0c\x42\x65tSelection\x12\n\n\x02id\x18\x01 \x01(\t\"@\n\x08\x42\x65tStake\x12\r\n\x05value\x18\x01 \x01(\x04\x12%\n\x04type\x18\x02 \x01(\x0e\x32\x17.ots.enums.BetStakeType\"g\n\x08\x42\x65tBonus\x12\r\n\x05value\x18\x01 \x01(\x04\x12%\n\x04type\x18\x02 \x01(\x0e\x32\x17.ots.enums.BetBonusType\x12%\n\x04mode\x18\x03 \x01(\x0e\x32\x17.ots.enums.BetBonusMode\"\xc8\x05\n\x0bTicketState\x12\n\n\x02id\x18\x01 \x01(\t\x12\x32\n\rticket_status\x18\x02 \x01(\x0e\x32\x1b.ots.enums.AcceptanceStatus\x12.\n\rreject_reason\x18\x03 \x01(\x0b\x32\x17.ots.TicketRejectReason\x12/\n\x08\x62\x65t_info\x18\x04 \x03(\x0b\x32\x1d.ots.TicketState.BetInfoEntry\x12;\n\x0eselection_info\x18\x07 \x03(\x0b\x32#.ots.TicketState.SelectionInfoEntry\x12\x33\n\rexchange_rate\x18\x05 \x01(\x0b\x32\x1c.google.protobuf.UInt64Value\x12\x42\n\x12\x61uto_accepted_odds\x18\x06 \x03(\x0b\x32&.ots.TicketState.AutoAcceptedOddsEntry\x12%\n\x07reoffer\x18\x08 \x01(\x0b\x32\x14.ots.ResponseReoffer\x12\x12\n\ntotal_odds\x18\t \x01(\x04\x12\x33\n\rpending_delay\x18\n \x01(\x0b\x32\x1c.google.protobuf.UInt32Value\x1aJ\n\x0c\x42\x65tInfoEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12)\n\x05value\x18\x02 \x01(\x0b\x32\x1a.ots.TicketResponseBetInfo:\x02\x38\x01\x1aV\n\x12SelectionInfoEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12/\n\x05value\x18\x02 \x01(\x0b\x32 .ots.TicketSelectionRejectReason:\x02\x38\x01\x1aN\n\x15\x41utoAcceptedOddsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12$\n\x05value\x18\x02 \x01(\x0b\x32\x15.ots.AutoAcceptedOdds:\x02\x38\x01\"I\n\x10\x41utoAcceptedOdds\x12\n\n\x02id\x18\x01 \x01(\t\x12\x16\n\x0erequested_odds\x18\x02 \x01(\x04\x12\x11\n\tused_odds\x18\x03 \x01(\x04\"\xdc\x02\n\x12TicketRejectReason\x12*\n\x04\x63ode\x18\x01 \x01(\x0e\x32\x1c.ots.TicketRejectReason.Code\x12\x0f\n\x07message\x18\x02 \x01(\t\"\x88\x02\n\x04\x43ode\x12\x14\n\x10\x43ODE_UNSPECIFIED\x10\x00\x12\x11\n\rCODE_INTERNAL\x10\x01\x12\x19\n\x15\x43ODE_INVALID_ARGUMENT\x10\x02\x12\x17\n\x13\x43ODE_ALREADY_EXISTS\x10\x03\x12\x16\n\x12\x43ODE_STAKE_TOO_LOW\x10\x04\x12\x17\n\x13\x43ODE_STAKE_TOO_HIGH\x10\x05\x12\x1c\n\x18\x43ODE_MAX_PAYOUT_BREACHED\x10\x06\x12\x1c\n\x18\x43ODE_BETS_NOT_ACCEPTABLE\x10\x07\x12\"\n\x1e\x43ODE_SELECTIONS_NOT_ACCEPTABLE\x10\x08\x12\x12\n\x0e\x43ODE_NOT_FOUND\x10\t\"\x91\x03\n\x15TicketBetRejectReason\x12-\n\x04\x63ode\x18\x01 \x01(\x0e\x32\x1f.ots.TicketBetRejectReason.Code\x12\x0f\n\x07message\x18\x02 \x01(\t\"\xb7\x02\n\x04\x43ode\x12\x14\n\x10\x43ODE_UNSPECIFIED\x10\x00\x12\x15\n\x11\x43ODE_ODDS_CHANGED\x10\x01\x12\x1d\n\x19\x43ODE_SELECTION_NOT_ACTIVE\x10\x02\x12\x16\n\x12\x43ODE_STAKE_TOO_LOW\x10\x03\x12\x17\n\x13\x43ODE_STAKE_TOO_HIGH\x10\x04\x12\x1c\n\x18\x43ODE_MAX_PAYOUT_BREACHED\x10\x05\x12\"\n\x1e\x43ODE_MARKET_LIABILITY_BREACHED\x10\x06\x12\"\n\x1e\x43ODE_BETTOR_LIABILITY_BREACHED\x10\x07\x12!\n\x1d\x43ODE_EVENT_LIABILITY_BREACHED\x10\x08\x12)\n%CODE_MARKET_BETTOR_LIABILITY_BREACHED\x10\t\"\x91\x01\n\x15TicketResponseBetInfo\x12\n\n\x02id\x18\x01 \x01(\t\x12\x31\n\rreject_reason\x18\x02 \x01(\x0b\x32\x1a.ots.TicketBetRejectReason\x12%\n\x07reoffer\x18\x03 \x01(\x0b\x32\x14.ots.ResponseReoffer\x12\x12\n\ntotal_odds\x18\x04 \x01(\x04\"\xc7\x01\n\x1bTicketSelectionRejectReason\x12\x33\n\x04\x63ode\x18\x01 \x01(\x0e\x32%.ots.TicketSelectionRejectReason.Code\x12\x0f\n\x07message\x18\x02 \x01(\t\"b\n\x04\x43ode\x12\x14\n\x10\x43ODE_UNSPECIFIED\x10\x00\x12\x15\n\x11\x43ODE_ODDS_CHANGED\x10\x01\x12\x13\n\x0f\x43ODE_NOT_ACTIVE\x10\x02\x12\x18\n\x14\x43ODE_NOT_INDEPENDENT\x10\x03\" \n\x0fResponseReoffer\x12\r\n\x05stake\x18\x01 \x01(\x04\x42\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ots.ticket_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\rcom.oddin.otsZ\014oddin.gg/ots'
  _globals['_TICKET_SELECTIONSENTRY']._loaded_options = None
  _globals['_TICKET_SELECTIONSENTRY']._serialized_options = b'8\001'
  _globals['_TICKET_METADATAENTRY']._loaded_options = None
  _globals['_TICKET_METADATAENTRY']._serialized_options = b'8\001'
  _globals['_BET'].fields_by_name['reoffer_id']._loaded_options = None
  _globals['_BET'].fields_by_name['reoffer_id']._serialized_options = b'\030\001'
  _globals['_TICKETSTATE_BETINFOENTRY']._loaded_options = None
  _globals['_TICKETSTATE_BETINFOENTRY']._serialized_options = b'8\001'
  _globals['_TICKETSTATE_SELECTIONINFOENTRY']._loaded_options = None
  _globals['_TICKETSTATE_SELECTIONINFOENTRY']._serialized_options = b'8\001'
  _globals['_TICKETSTATE_AUTOACCEPTEDODDSENTRY']._loaded_options = None
  _globals['_TICKETSTATE_AUTOACCEPTEDODDSENTRY']._serialized_options = b'8\001'
  _globals['_TICKETREQUEST']._serialized_start=158
  _globals['_TICKETREQUEST']._serialized_end=336
  _globals['_TICKETRESPONSE']._serialized_start=339
  _globals['_TICKETRESPONSE']._serialized_end=532
  _globals['_TICKETMAXSTAKE']._serialized_start=534
  _globals['_TICKETMAXSTAKE']._serialized_end=579
  _globals['_TICKETMAXSTAKESTATE']._serialized_start=581
  _globals['_TICKETMAXSTAKESTATE']._serialized_end=647
  _globals['_TICKET']._serialized_start=650
  _globals['_TICKET']._serialized_end=1423
  _globals['_TICKET_SELECTIONSENTRY']._serialized_start=1303
  _globals['_TICKET_SELECTIONSENTRY']._serialized_end=1374
  _globals['_TICKET_METADATAENTRY']._serialized_start=1376
  _globals['_TICKET_METADATAENTRY']._serialized_end=1423
  _globals['_TICKETSELECTION']._serialized_start=1426
  _globals['_TICKETSELECTION']._serialized_end=1587
  _globals['_OBBSESSIONINFO']._serialized_start=1589
  _globals['_OBBSESSIONINFO']._serialized_end=1649
  _globals['_TICKETCUSTOMER']._serialized_start=1652
  _globals['_TICKETCUSTOMER']._serialized_end=1837
  _globals['_BET']._serialized_start=1840
  _globals['_BET']._serialized_end=2107
  _globals['_BETSELECTION']._serialized_start=2109
  _globals['_BETSELECTION']._serialized_end=2135
  _globals['_BETSTAKE']._serialized_start=2137
  _globals['_BETSTAKE']._serialized_end=2201
  _globals['_BETBONUS']._serialized_start=2203
  _globals['_BETBONUS']._serialized_end=2306
  _globals['_TICKETSTATE']._serialized_start=2309
  _globals['_TICKETSTATE']._serialized_end=3021
  _globals['_TICKETSTATE_BETINFOENTRY']._serialized_start=2779
  _globals['_TICKETSTATE_BETINFOENTRY']._serialized_end=2853
  _globals['_TICKETSTATE_SELECTIONINFOENTRY']._serialized_start=2855
  _globals['_TICKETSTATE_SELECTIONINFOENTRY']._serialized_end=2941
  _globals['_TICKETSTATE_AUTOACCEPTEDODDSENTRY']._serialized_start=2943
  _globals['_TICKETSTATE_AUTOACCEPTEDODDSENTRY']._serialized_end=3021
  _globals['_AUTOACCEPTEDODDS']._serialized_start=3023
  _globals['_AUTOACCEPTEDODDS']._serialized_end=3096
  _globals['_TICKETREJECTREASON']._serialized_start=3099
  _globals['_TICKETREJECTREASON']._serialized_end=3447
  _globals['_TICKETREJECTREASON_CODE']._serialized_start=3183
  _globals['_TICKETREJECTREASON_CODE']._serialized_end=3447
  _globals['_TICKETBETREJECTREASON']._serialized_start=3450
  _globals['_TICKETBETREJECTREASON']._serialized_end=3851
  _globals['_TICKETBETREJECTREASON_CODE']._serialized_start=3540
  _globals['_TICKETBETREJECTREASON_CODE']._serialized_end=3851
  _globals['_TICKETRESPONSEBETINFO']._serialized_start=3854
  _globals['_TICKETRESPONSEBETINFO']._serialized_end=3999
  _globals['_TICKETSELECTIONREJECTREASON']._serialized_start=4002
  _globals['_TICKETSELECTIONREJECTREASON']._serialized_end=4201
  _globals['_TICKETSELECTIONREJECTREASON_CODE']._serialized_start=4103
  _globals['_TICKETSELECTIONREJECTREASON_CODE']._serialized_end=4201
  _globals['_RESPONSEREOFFER']._serialized_start=4203
  _globals['_RESPONSEREOFFER']._serialized_end=4235
# @@protoc_insertion_point(module_scope)
