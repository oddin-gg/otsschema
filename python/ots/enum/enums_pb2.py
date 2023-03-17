# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ots/enum/enums.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14ots/enum/enums.proto\x12\tots.enums*\xea\x01\n\x0fResultingStatus\x12 \n\x1cRESULTING_STATUS_UNSPECIFIED\x10\x00\x12\x18\n\x14RESULTING_STATUS_WON\x10\x01\x12\x1b\n\x17RESULTING_STATUS_VOIDED\x10\x02\x12\x19\n\x15RESULTING_STATUS_LOST\x10\x03\x12!\n\x1dRESULTING_STATUS_NOT_RESULTED\x10\x04\x12!\n\x1dRESULTING_STATUS_PENDING_LOST\x10\x05\x12\x1d\n\x19RESULTING_STATUS_REJECTED\x10\x06*\x94\x01\n\x10\x41\x63\x63\x65ptanceStatus\x12!\n\x1d\x41\x43\x43\x45PTANCE_STATUS_UNSPECIFIED\x10\x00\x12\x1e\n\x1a\x41\x43\x43\x45PTANCE_STATUS_REJECTED\x10\x01\x12\x1e\n\x1a\x41\x43\x43\x45PTANCE_STATUS_ACCEPTED\x10\x02\x12\x1d\n\x19\x41\x43\x43\x45PTANCE_STATUS_PENDING\x10\x03*i\n\x0c\x43\x61ncelStatus\x12\x1d\n\x19\x43\x41NCEL_STATUS_UNSPECIFIED\x10\x00\x12\x1e\n\x1a\x43\x41NCEL_STATUS_NOT_CANCELED\x10\x01\x12\x1a\n\x16\x43\x41NCEL_STATUS_CANCELED\x10\x02*\xfd\x01\n\x0c\x43\x61ncelReason\x12\x1d\n\x19\x43\x41NCEL_REASON_UNSPECIFIED\x10\x00\x12 \n\x1c\x43\x41NCEL_REASON_TICKET_TIMEOUT\x10\x01\x12\x1e\n\x1a\x43\x41NCEL_REASON_WRONG_TICKET\x10\x02\x12!\n\x1d\x43\x41NCEL_REASON_TECHNICAL_ISSUE\x10\x03\x12\"\n\x1e\x43\x41NCEL_REASON_UNEXPECTED_ISSUE\x10\x04\x12\x1b\n\x17\x43\x41NCEL_REASON_REGULATOR\x10\x05\x12(\n$CANCEL_REASON_FOREIGN_STAKE_REJECTED\x10\x06*\xd9\x01\n\x15\x43\x61ncelRejectionReason\x12$\n CANCEL_REJECT_REASON_UNSPECIFIED\x10\x00\x12)\n%CANCEL_REJECT_REASON_TICKET_NOT_FOUND\x10\x01\x12%\n!CANCEL_REJECT_REASON_TIME_EXPIRED\x10\x02\x12(\n$CANCEL_REJECT_REASON_ALREADY_SETTLED\x10\x03\x12\x1e\n\x1a\x43\x41NCEL_REJECT_REASON_OTHER\x10\x04*_\n\x0c\x42\x65tStakeType\x12\x1e\n\x1a\x42\x45T_STAKE_TYPE_UNSPECIFIED\x10\x00\x12\x16\n\x12\x42\x45T_STAKE_TYPE_SUM\x10\x01\x12\x17\n\x13\x42\x45T_STAKE_TYPE_UNIT\x10\x02*\x8e\x01\n\x10\x41\x63\x63\x65ptOddsChange\x12\"\n\x1e\x41\x43\x43\x45PT_ODDS_CHANGE_UNSPECIFIED\x10\x00\x12\x1b\n\x17\x41\x43\x43\x45PT_ODDS_CHANGE_NONE\x10\x01\x12\x1a\n\x16\x41\x43\x43\x45PT_ODDS_CHANGE_ANY\x10\x02\x12\x1d\n\x19\x41\x43\x43\x45PT_ODDS_CHANGE_HIGHER\x10\x03*\xa6\x02\n\rTicketChannel\x12\x1e\n\x1aTICKET_CHANNEL_UNSPECIFIED\x10\x00\x12\x1b\n\x17TICKET_CHANNEL_INTERNET\x10\x01\x12\x19\n\x15TICKET_CHANNEL_RETAIL\x10\x02\x12\x1b\n\x17TICKET_CHANNEL_TERMINAL\x10\x03\x12\x19\n\x15TICKET_CHANNEL_MOBILE\x10\x04\x12\x18\n\x14TICKET_CHANNEL_PHONE\x10\x05\x12\x16\n\x12TICKET_CHANNEL_SMS\x10\x06\x12\x1e\n\x1aTICKET_CHANNEL_CALL_CENTRE\x10\x07\x12\x19\n\x15TICKET_CHANNEL_TV_APP\x10\x08\x12\x18\n\x14TICKET_CHANNEL_AGENT\x10\t*H\n\x0c\x42\x65tBonusType\x12\x1e\n\x1a\x42\x45T_BONUS_TYPE_UNSPECIFIED\x10\x00\x12\x18\n\x14\x42\x45T_BONUS_TYPE_TOTAL\x10\x01*F\n\x0c\x42\x65tBonusMode\x12\x1e\n\x1a\x42\x45T_BONUS_MODE_UNSPECIFIED\x10\x00\x12\x16\n\x12\x42\x45T_BONUS_MODE_ALL\x10\x01*\xbd\x01\n\nReasonCode\x12\x1b\n\x17REASON_CODE_UNSPECIFIED\x10\x00\x12 \n\x1cREASON_CODE_INVALID_ARGUMENT\x10\x01\x12\x1e\n\x1aREASON_CODE_ALREADY_EXISTS\x10\x02\x12\x19\n\x15REASON_CODE_NOT_FOUND\x10\x03\x12\x1b\n\x17REASON_CODE_UNAVAILABLE\x10\x04\x12\x18\n\x14REASON_CODE_INTERNAL\x10\x05\x42\x1d\n\rcom.oddin.otsZ\x0coddin.gg/otsb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ots.enum.enums_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  DESCRIPTOR._serialized_options = b'\n\rcom.oddin.otsZ\014oddin.gg/ots'
  _RESULTINGSTATUS._serialized_start=36
  _RESULTINGSTATUS._serialized_end=270
  _ACCEPTANCESTATUS._serialized_start=273
  _ACCEPTANCESTATUS._serialized_end=421
  _CANCELSTATUS._serialized_start=423
  _CANCELSTATUS._serialized_end=528
  _CANCELREASON._serialized_start=531
  _CANCELREASON._serialized_end=784
  _CANCELREJECTIONREASON._serialized_start=787
  _CANCELREJECTIONREASON._serialized_end=1004
  _BETSTAKETYPE._serialized_start=1006
  _BETSTAKETYPE._serialized_end=1101
  _ACCEPTODDSCHANGE._serialized_start=1104
  _ACCEPTODDSCHANGE._serialized_end=1246
  _TICKETCHANNEL._serialized_start=1249
  _TICKETCHANNEL._serialized_end=1543
  _BETBONUSTYPE._serialized_start=1545
  _BETBONUSTYPE._serialized_end=1617
  _BETBONUSMODE._serialized_start=1619
  _BETBONUSMODE._serialized_end=1689
  _REASONCODE._serialized_start=1692
  _REASONCODE._serialized_end=1881
# @@protoc_insertion_point(module_scope)
