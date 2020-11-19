// package: ots
// file: ots/ticket_request.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";

export class TicketRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearBetsList(): void;
  getBetsList(): Array<Bet>;
  setBetsList(value: Array<Bet>): void;
  addBets(value?: Bet, index?: number): Bet;

  getAcceptOddsChange(): ots_enum_enums_pb.AcceptOddsChangeMap[keyof ots_enum_enums_pb.AcceptOddsChangeMap];
  setAcceptOddsChange(value: ots_enum_enums_pb.AcceptOddsChangeMap[keyof ots_enum_enums_pb.AcceptOddsChangeMap]): void;

  hasTotalCombinations(): boolean;
  clearTotalCombinations(): void;
  getTotalCombinations(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setTotalCombinations(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  hasBetInfo(): boolean;
  clearBetInfo(): void;
  getBetInfo(): TicketRequestBetInfo | undefined;
  setBetInfo(value?: TicketRequestBetInfo): void;

  hasReofferId(): boolean;
  clearReofferId(): void;
  getReofferId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReofferId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getSelectionsMap(): jspb.Map<string, TicketSelection>;
  clearSelectionsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TicketRequest): TicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketRequest;
  static deserializeBinaryFromReader(message: TicketRequest, reader: jspb.BinaryReader): TicketRequest;
}

export namespace TicketRequest {
  export type AsObject = {
    id: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    betsList: Array<Bet.AsObject>,
    acceptOddsChange: ots_enum_enums_pb.AcceptOddsChangeMap[keyof ots_enum_enums_pb.AcceptOddsChangeMap],
    totalCombinations?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    betInfo?: TicketRequestBetInfo.AsObject,
    reofferId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    selectionsMap: Array<[string, TicketSelection.AsObject]>,
  }
}

export class Bet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasBonus(): boolean;
  clearBonus(): void;
  getBonus(): BetBonus | undefined;
  setBonus(value?: BetBonus): void;

  hasStake(): boolean;
  clearStake(): void;
  getStake(): BetStake | undefined;
  setStake(value?: BetStake): void;

  hasReofferId(): boolean;
  clearReofferId(): void;
  getReofferId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReofferId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTotalWins(): boolean;
  clearTotalWins(): void;
  getTotalWins(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setTotalWins(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  clearSystemsList(): void;
  getSystemsList(): Array<number>;
  setSystemsList(value: Array<number>): void;
  addSystems(value: number, index?: number): number;

  clearSelectionsList(): void;
  getSelectionsList(): Array<BetSelection>;
  setSelectionsList(value: Array<BetSelection>): void;
  addSelections(value?: BetSelection, index?: number): BetSelection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bet.AsObject;
  static toObject(includeInstance: boolean, msg: Bet): Bet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bet;
  static deserializeBinaryFromReader(message: Bet, reader: jspb.BinaryReader): Bet;
}

export namespace Bet {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    bonus?: BetBonus.AsObject,
    stake?: BetStake.AsObject,
    reofferId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    totalWins?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    systemsList: Array<number>,
    selectionsList: Array<BetSelection.AsObject>,
  }
}

export class TicketSelection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOdds(): number;
  setOdds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketSelection.AsObject;
  static toObject(includeInstance: boolean, msg: TicketSelection): TicketSelection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketSelection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketSelection;
  static deserializeBinaryFromReader(message: TicketSelection, reader: jspb.BinaryReader): TicketSelection;
}

export namespace TicketSelection {
  export type AsObject = {
    id: string,
    odds: number,
  }
}

export class BetSelection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BetSelection.AsObject;
  static toObject(includeInstance: boolean, msg: BetSelection): BetSelection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BetSelection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BetSelection;
  static deserializeBinaryFromReader(message: BetSelection, reader: jspb.BinaryReader): BetSelection;
}

export namespace BetSelection {
  export type AsObject = {
    id: string,
  }
}

export class BetStake extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getType(): ots_enum_enums_pb.BetStakeTypeMap[keyof ots_enum_enums_pb.BetStakeTypeMap];
  setType(value: ots_enum_enums_pb.BetStakeTypeMap[keyof ots_enum_enums_pb.BetStakeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BetStake.AsObject;
  static toObject(includeInstance: boolean, msg: BetStake): BetStake.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BetStake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BetStake;
  static deserializeBinaryFromReader(message: BetStake, reader: jspb.BinaryReader): BetStake;
}

export namespace BetStake {
  export type AsObject = {
    value: number,
    type: ots_enum_enums_pb.BetStakeTypeMap[keyof ots_enum_enums_pb.BetStakeTypeMap],
  }
}

export class BetBonus extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getType(): ots_enum_enums_pb.BetBonusTypeMap[keyof ots_enum_enums_pb.BetBonusTypeMap];
  setType(value: ots_enum_enums_pb.BetBonusTypeMap[keyof ots_enum_enums_pb.BetBonusTypeMap]): void;

  getMode(): ots_enum_enums_pb.BetBonusModeMap[keyof ots_enum_enums_pb.BetBonusModeMap];
  setMode(value: ots_enum_enums_pb.BetBonusModeMap[keyof ots_enum_enums_pb.BetBonusModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BetBonus.AsObject;
  static toObject(includeInstance: boolean, msg: BetBonus): BetBonus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BetBonus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BetBonus;
  static deserializeBinaryFromReader(message: BetBonus, reader: jspb.BinaryReader): BetBonus;
}

export namespace BetBonus {
  export type AsObject = {
    value: number,
    type: ots_enum_enums_pb.BetBonusTypeMap[keyof ots_enum_enums_pb.BetBonusTypeMap],
    mode: ots_enum_enums_pb.BetBonusModeMap[keyof ots_enum_enums_pb.BetBonusModeMap],
  }
}

export class TicketRequestBetInfo extends jspb.Message {
  hasLocationId(): boolean;
  clearLocationId(): void;
  getLocationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLocationId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getBetChannel(): ots_enum_enums_pb.BetChannelMap[keyof ots_enum_enums_pb.BetChannelMap];
  setBetChannel(value: ots_enum_enums_pb.BetChannelMap[keyof ots_enum_enums_pb.BetChannelMap]): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): BetCustomer | undefined;
  setCustomer(value?: BetCustomer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketRequestBetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketRequestBetInfo): TicketRequestBetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketRequestBetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketRequestBetInfo;
  static deserializeBinaryFromReader(message: TicketRequestBetInfo, reader: jspb.BinaryReader): TicketRequestBetInfo;
}

export namespace TicketRequestBetInfo {
  export type AsObject = {
    locationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    betChannel: ots_enum_enums_pb.BetChannelMap[keyof ots_enum_enums_pb.BetChannelMap],
    currency: string,
    customer?: BetCustomer.AsObject,
  }
}

export class BetCustomer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasIp(): boolean;
  clearIp(): void;
  getIp(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIp(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDeviceId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BetCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: BetCustomer): BetCustomer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BetCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BetCustomer;
  static deserializeBinaryFromReader(message: BetCustomer, reader: jspb.BinaryReader): BetCustomer;
}

export namespace BetCustomer {
  export type AsObject = {
    id: string,
    ip?: google_protobuf_wrappers_pb.StringValue.AsObject,
    deviceId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    language: string,
  }
}

