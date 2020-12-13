// source: ots/enum/enums.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.ots.enums.AcceptOddsChange', null, global);
goog.exportSymbol('proto.ots.enums.AcceptanceStatus', null, global);
goog.exportSymbol('proto.ots.enums.BetBonusMode', null, global);
goog.exportSymbol('proto.ots.enums.BetBonusType', null, global);
goog.exportSymbol('proto.ots.enums.BetStakeType', null, global);
goog.exportSymbol('proto.ots.enums.CancelReason', null, global);
goog.exportSymbol('proto.ots.enums.CancelRejectionReason', null, global);
goog.exportSymbol('proto.ots.enums.CancelStatus', null, global);
goog.exportSymbol('proto.ots.enums.ReasonCode', null, global);
goog.exportSymbol('proto.ots.enums.TicketChannel', null, global);
/**
 * @enum {number}
 */
proto.ots.enums.AcceptanceStatus = {
  ACCEPTANCE_STATUS_UNSPECIFIED: 0,
  ACCEPTANCE_STATUS_REJECTED: 1,
  ACCEPTANCE_STATUS_ACCEPTED: 2
};

/**
 * @enum {number}
 */
proto.ots.enums.CancelStatus = {
  CANCEL_STATUS_UNSPECIFIED: 0,
  CANCEL_STATUS_NOT_CANCELED: 1,
  CANCEL_STATUS_CANCELED: 2
};

/**
 * @enum {number}
 */
proto.ots.enums.CancelReason = {
  CANCEL_REASON_UNSPECIFIED: 0,
  CANCEL_REASON_TICKET_TIMEOUT: 1,
  CANCEL_REASON_WRONG_TICKET: 2,
  CANCEL_REASON_TECHNICAL_ISSUE: 3,
  CANCEL_REASON_UNEXPECTED_ISSUE: 4,
  CANCEL_REASON_REGULATOR: 5
};

/**
 * @enum {number}
 */
proto.ots.enums.CancelRejectionReason = {
  CANCEL_REJECT_REASON_UNSPECIFIED: 0,
  CANCEL_REJECT_REASON_TICKET_NOT_FOUND: 1,
  CANCEL_REJECT_REASON_TIME_EXPIRED: 2,
  CANCEL_REJECT_REASON_ALREADY_SETTLED: 3,
  CANCEL_REJECT_REASON_OTHER: 4
};

/**
 * @enum {number}
 */
proto.ots.enums.BetStakeType = {
  BET_STAKE_TYPE_UNSPECIFIED: 0,
  BET_STAKE_TYPE_SUM: 1,
  BET_STAKE_TYPE_UNIT: 2
};

/**
 * @enum {number}
 */
proto.ots.enums.AcceptOddsChange = {
  ACCEPT_ODDS_CHANGE_UNSPECIFIED: 0,
  ACCEPT_ODDS_CHANGE_NONE: 1,
  ACCEPT_ODDS_CHANGE_ANY: 2,
  ACCEPT_ODDS_CHANGE_HIGHER: 3
};

/**
 * @enum {number}
 */
proto.ots.enums.TicketChannel = {
  TICKET_CHANNEL_UNSPECIFIED: 0,
  TICKET_CHANNEL_INTERNET: 1,
  TICKET_CHANNEL_RETAIL: 2,
  TICKET_CHANNEL_TERMINAL: 3,
  TICKET_CHANNEL_MOBILE: 4,
  TICKET_CHANNEL_PHONE: 5,
  TICKET_CHANNEL_SMS: 6,
  TICKET_CHANNEL_CALL_CENTRE: 7,
  TICKET_CHANNEL_TV_APP: 8,
  TICKET_CHANNEL_AGENT: 9
};

/**
 * @enum {number}
 */
proto.ots.enums.BetBonusType = {
  BET_BONUS_TYPE_UNSPECIFIED: 0,
  BET_BONUS_TYPE_TOTAL: 1
};

/**
 * @enum {number}
 */
proto.ots.enums.BetBonusMode = {
  BET_BONUS_MODE_UNSPECIFIED: 0,
  BET_BONUS_MODE_ALL: 1
};

/**
 * @enum {number}
 */
proto.ots.enums.ReasonCode = {
  REASON_CODE_UNSPECIFIED: 0,
  REASON_CODE_INVALID_ARGUMENT: 1,
  REASON_CODE_ALREADY_EXISTS: 2,
  REASON_CODE_NOT_FOUND: 3,
  REASON_CODE_UNAVAILABLE: 4,
  REASON_CODE_INTERNAL: 5
};

goog.object.extend(exports, proto.ots.enums);
