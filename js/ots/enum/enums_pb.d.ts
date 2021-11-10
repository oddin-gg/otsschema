// package: ots.enums
// file: ots/enum/enums.proto

import * as jspb from "google-protobuf";

export interface AcceptanceStatusMap {
  ACCEPTANCE_STATUS_UNSPECIFIED: 0;
  ACCEPTANCE_STATUS_REJECTED: 1;
  ACCEPTANCE_STATUS_ACCEPTED: 2;
  ACCEPTANCE_STATUS_PENDING: 3;
}

export const AcceptanceStatus: AcceptanceStatusMap;

export interface CancelStatusMap {
  CANCEL_STATUS_UNSPECIFIED: 0;
  CANCEL_STATUS_NOT_CANCELED: 1;
  CANCEL_STATUS_CANCELED: 2;
}

export const CancelStatus: CancelStatusMap;

export interface CancelReasonMap {
  CANCEL_REASON_UNSPECIFIED: 0;
  CANCEL_REASON_TICKET_TIMEOUT: 1;
  CANCEL_REASON_WRONG_TICKET: 2;
  CANCEL_REASON_TECHNICAL_ISSUE: 3;
  CANCEL_REASON_UNEXPECTED_ISSUE: 4;
  CANCEL_REASON_REGULATOR: 5;
  CANCEL_REASON_FOREIGN_STAKE_REJECTED: 6;
}

export const CancelReason: CancelReasonMap;

export interface CancelRejectionReasonMap {
  CANCEL_REJECT_REASON_UNSPECIFIED: 0;
  CANCEL_REJECT_REASON_TICKET_NOT_FOUND: 1;
  CANCEL_REJECT_REASON_TIME_EXPIRED: 2;
  CANCEL_REJECT_REASON_ALREADY_SETTLED: 3;
  CANCEL_REJECT_REASON_OTHER: 4;
}

export const CancelRejectionReason: CancelRejectionReasonMap;

export interface BetStakeTypeMap {
  BET_STAKE_TYPE_UNSPECIFIED: 0;
  BET_STAKE_TYPE_SUM: 1;
  BET_STAKE_TYPE_UNIT: 2;
}

export const BetStakeType: BetStakeTypeMap;

export interface AcceptOddsChangeMap {
  ACCEPT_ODDS_CHANGE_UNSPECIFIED: 0;
  ACCEPT_ODDS_CHANGE_NONE: 1;
  ACCEPT_ODDS_CHANGE_ANY: 2;
  ACCEPT_ODDS_CHANGE_HIGHER: 3;
}

export const AcceptOddsChange: AcceptOddsChangeMap;

export interface TicketChannelMap {
  TICKET_CHANNEL_UNSPECIFIED: 0;
  TICKET_CHANNEL_INTERNET: 1;
  TICKET_CHANNEL_RETAIL: 2;
  TICKET_CHANNEL_TERMINAL: 3;
  TICKET_CHANNEL_MOBILE: 4;
  TICKET_CHANNEL_PHONE: 5;
  TICKET_CHANNEL_SMS: 6;
  TICKET_CHANNEL_CALL_CENTRE: 7;
  TICKET_CHANNEL_TV_APP: 8;
  TICKET_CHANNEL_AGENT: 9;
}

export const TicketChannel: TicketChannelMap;

export interface BetBonusTypeMap {
  BET_BONUS_TYPE_UNSPECIFIED: 0;
  BET_BONUS_TYPE_TOTAL: 1;
}

export const BetBonusType: BetBonusTypeMap;

export interface BetBonusModeMap {
  BET_BONUS_MODE_UNSPECIFIED: 0;
  BET_BONUS_MODE_ALL: 1;
}

export const BetBonusMode: BetBonusModeMap;

export interface ReasonCodeMap {
  REASON_CODE_UNSPECIFIED: 0;
  REASON_CODE_INVALID_ARGUMENT: 1;
  REASON_CODE_ALREADY_EXISTS: 2;
  REASON_CODE_NOT_FOUND: 3;
  REASON_CODE_UNAVAILABLE: 4;
  REASON_CODE_INTERNAL: 5;
}

export const ReasonCode: ReasonCodeMap;

