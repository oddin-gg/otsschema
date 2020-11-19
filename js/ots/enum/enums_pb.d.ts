// package: ots.enums
// file: ots/enum/enums.proto

import * as jspb from "google-protobuf";

export class Reason extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reason.AsObject;
  static toObject(includeInstance: boolean, msg: Reason): Reason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reason;
  static deserializeBinaryFromReader(message: Reason, reader: jspb.BinaryReader): Reason;
}

export namespace Reason {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export interface AcceptanceStatusMap {
  REJECTED: 0;
  ACCEPTED: 1;
}

export const AcceptanceStatus: AcceptanceStatusMap;

export interface CancelStatusMap {
  NOT_CANCELED: 0;
  CANCELED: 1;
}

export const CancelStatus: CancelStatusMap;

export interface CancelReasonMap {
  UNKNOWN: 0;
  TICKET_TIMEOUT: 1;
  WRONG_TICKET: 2;
  TECHNICAL_ISSUE: 3;
  UNEXPECTED_ISSUE: 4;
  REGULATOR: 5;
}

export const CancelReason: CancelReasonMap;

export interface BetStakeTypeMap {
  SUM: 0;
  UNIT: 1;
}

export const BetStakeType: BetStakeTypeMap;

export interface AcceptOddsChangeMap {
  NONE: 0;
  ANY: 1;
  HIGHER: 2;
}

export const AcceptOddsChange: AcceptOddsChangeMap;

export interface BetChannelMap {
  NOT_SPECIFIED: 0;
  INTERNET: 1;
  RETAIL: 2;
  TERMINAL: 3;
  MOBILE: 4;
  PHONE: 5;
  SMS: 6;
  CALL_CENTRE: 7;
  TV_APP: 8;
  AGENT: 9;
}

export const BetChannel: BetChannelMap;

export interface BetBonusTypeMap {
  TOTAL: 0;
}

export const BetBonusType: BetBonusTypeMap;

export interface BetBonusModeMap {
  ALL: 0;
}

export const BetBonusMode: BetBonusModeMap;

