// package: ots
// file: ots/ticket_cashout.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";

export class TicketCashoutRejectReason extends jspb.Message {
  getCode(): TicketCashoutRejectReason.CodeMap[keyof TicketCashoutRejectReason.CodeMap];
  setCode(value: TicketCashoutRejectReason.CodeMap[keyof TicketCashoutRejectReason.CodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCashoutRejectReason.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCashoutRejectReason): TicketCashoutRejectReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCashoutRejectReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCashoutRejectReason;
  static deserializeBinaryFromReader(message: TicketCashoutRejectReason, reader: jspb.BinaryReader): TicketCashoutRejectReason;
}

export namespace TicketCashoutRejectReason {
  export type AsObject = {
    code: TicketCashoutRejectReason.CodeMap[keyof TicketCashoutRejectReason.CodeMap],
    message: string,
  }

  export interface CodeMap {
    CODE_UNSPECIFIED: 0;
    CODE_INTERNAL: 1;
    CODE_INVALID_ARGUMENT: 2;
    CODE_NOT_FOUND: 3;
    CODE_WRONG_TICKET_STAKE: 4;
    CODE_MAX_PAYOUT_BREACHED: 5;
  }

  export const Code: CodeMap;
}

export class TicketCashoutState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTicketStatus(): ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap];
  setTicketStatus(value: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap]): void;

  hasRejectReason(): boolean;
  clearRejectReason(): void;
  getRejectReason(): TicketCashoutRejectReason | undefined;
  setRejectReason(value?: TicketCashoutRejectReason): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCashoutState.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCashoutState): TicketCashoutState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCashoutState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCashoutState;
  static deserializeBinaryFromReader(message: TicketCashoutState, reader: jspb.BinaryReader): TicketCashoutState;
}

export namespace TicketCashoutState {
  export type AsObject = {
    id: string,
    ticketStatus: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap],
    rejectReason?: TicketCashoutRejectReason.AsObject,
  }
}

export class BetCashout extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCashoutStake(): boolean;
  clearCashoutStake(): void;
  getCashoutStake(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCashoutStake(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasCashoutPercent(): boolean;
  clearCashoutPercent(): void;
  getCashoutPercent(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCashoutPercent(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BetCashout.AsObject;
  static toObject(includeInstance: boolean, msg: BetCashout): BetCashout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BetCashout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BetCashout;
  static deserializeBinaryFromReader(message: BetCashout, reader: jspb.BinaryReader): BetCashout;
}

export namespace BetCashout {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cashoutStake?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    cashoutPercent?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class TicketCashout extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCashoutStake(): boolean;
  clearCashoutStake(): void;
  getCashoutStake(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCashoutStake(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasCashoutPercent(): boolean;
  clearCashoutPercent(): void;
  getCashoutPercent(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCashoutPercent(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  clearBetCashoutList(): void;
  getBetCashoutList(): Array<BetCashout>;
  setBetCashoutList(value: Array<BetCashout>): void;
  addBetCashout(value?: BetCashout, index?: number): BetCashout;

  hasStakeMultiplier(): boolean;
  clearStakeMultiplier(): void;
  getStakeMultiplier(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setStakeMultiplier(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCashout.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCashout): TicketCashout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCashout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCashout;
  static deserializeBinaryFromReader(message: TicketCashout, reader: jspb.BinaryReader): TicketCashout;
}

export namespace TicketCashout {
  export type AsObject = {
    id: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cashoutStake?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    cashoutPercent?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    betCashoutList: Array<BetCashout.AsObject>,
    stakeMultiplier?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

