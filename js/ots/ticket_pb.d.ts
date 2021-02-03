// package: ots
// file: ots/ticket.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";
import * as ots_commons_pb from "../ots/commons_pb";

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

  getTotalCombinations(): number;
  setTotalCombinations(value: number): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): TicketCustomer | undefined;
  setCustomer(value?: TicketCustomer): void;

  hasReofferId(): boolean;
  clearReofferId(): void;
  getReofferId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setReofferId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getSelectionsMap(): jspb.Map<string, TicketSelection>;
  clearSelectionsMap(): void;
  hasLocationId(): boolean;
  clearLocationId(): void;
  getLocationId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLocationId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getChannel(): ots_enum_enums_pb.TicketChannelMap[keyof ots_enum_enums_pb.TicketChannelMap];
  setChannel(value: ots_enum_enums_pb.TicketChannelMap[keyof ots_enum_enums_pb.TicketChannelMap]): void;

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
    totalCombinations: number,
    customer?: TicketCustomer.AsObject,
    reofferId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    selectionsMap: Array<[string, TicketSelection.AsObject]>,
    locationId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currency: string,
    channel: ots_enum_enums_pb.TicketChannelMap[keyof ots_enum_enums_pb.TicketChannelMap],
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

export class TicketCustomer extends jspb.Message {
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
  toObject(includeInstance?: boolean): TicketCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCustomer): TicketCustomer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCustomer;
  static deserializeBinaryFromReader(message: TicketCustomer, reader: jspb.BinaryReader): TicketCustomer;
}

export namespace TicketCustomer {
  export type AsObject = {
    id: string,
    ip?: google_protobuf_wrappers_pb.StringValue.AsObject,
    deviceId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    language: string,
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

export class TicketResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): TicketState | undefined;
  setState(value?: TicketState): void;

  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): ots_commons_pb.StreamKeepalive | undefined;
  setKeepalive(value?: ots_commons_pb.StreamKeepalive): void;

  getDataCase(): TicketResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResponse): TicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResponse;
  static deserializeBinaryFromReader(message: TicketResponse, reader: jspb.BinaryReader): TicketResponse;
}

export namespace TicketResponse {
  export type AsObject = {
    state?: TicketState.AsObject,
    keepalive?: ots_commons_pb.StreamKeepalive.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    STATE = 1,
    KEEPALIVE = 2,
  }
}

export class TicketState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTicketStatus(): ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap];
  setTicketStatus(value: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap]): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): ots_commons_pb.Reason | undefined;
  setReason(value?: ots_commons_pb.Reason): void;

  clearBetInfoList(): void;
  getBetInfoList(): Array<TicketResponseBetInfo>;
  setBetInfoList(value: Array<TicketResponseBetInfo>): void;
  addBetInfo(value?: TicketResponseBetInfo, index?: number): TicketResponseBetInfo;

  hasExchangeRate(): boolean;
  clearExchangeRate(): void;
  getExchangeRate(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setExchangeRate(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  clearAutoAcceptedOddsList(): void;
  getAutoAcceptedOddsList(): Array<AutoAcceptedOdds>;
  setAutoAcceptedOddsList(value: Array<AutoAcceptedOdds>): void;
  addAutoAcceptedOdds(value?: AutoAcceptedOdds, index?: number): AutoAcceptedOdds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketState.AsObject;
  static toObject(includeInstance: boolean, msg: TicketState): TicketState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketState;
  static deserializeBinaryFromReader(message: TicketState, reader: jspb.BinaryReader): TicketState;
}

export namespace TicketState {
  export type AsObject = {
    id: string,
    ticketStatus: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap],
    reason?: ots_commons_pb.Reason.AsObject,
    betInfoList: Array<TicketResponseBetInfo.AsObject>,
    exchangeRate?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    autoAcceptedOddsList: Array<AutoAcceptedOdds.AsObject>,
  }
}

export class AutoAcceptedOdds extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getRequestedOdds(): number;
  setRequestedOdds(value: number): void;

  getUsedOdds(): number;
  setUsedOdds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AutoAcceptedOdds.AsObject;
  static toObject(includeInstance: boolean, msg: AutoAcceptedOdds): AutoAcceptedOdds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AutoAcceptedOdds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AutoAcceptedOdds;
  static deserializeBinaryFromReader(message: AutoAcceptedOdds, reader: jspb.BinaryReader): AutoAcceptedOdds;
}

export namespace AutoAcceptedOdds {
  export type AsObject = {
    id: string,
    requestedOdds: number,
    usedOdds: number,
  }
}

export class TicketResponseBetInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): ots_commons_pb.Reason | undefined;
  setReason(value?: ots_commons_pb.Reason): void;

  hasReoffer(): boolean;
  clearReoffer(): void;
  getReoffer(): ResponseReoffer | undefined;
  setReoffer(value?: ResponseReoffer): void;

  clearSelectionsInfoList(): void;
  getSelectionsInfoList(): Array<RejectedSelection>;
  setSelectionsInfoList(value: Array<RejectedSelection>): void;
  addSelectionsInfo(value?: RejectedSelection, index?: number): RejectedSelection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResponseBetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResponseBetInfo): TicketResponseBetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResponseBetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResponseBetInfo;
  static deserializeBinaryFromReader(message: TicketResponseBetInfo, reader: jspb.BinaryReader): TicketResponseBetInfo;
}

export namespace TicketResponseBetInfo {
  export type AsObject = {
    id: string,
    reason?: ots_commons_pb.Reason.AsObject,
    reoffer?: ResponseReoffer.AsObject,
    selectionsInfoList: Array<RejectedSelection.AsObject>,
  }
}

export class RejectedSelection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): ots_commons_pb.Reason | undefined;
  setReason(value?: ots_commons_pb.Reason): void;

  hasRejectionInfo(): boolean;
  clearRejectionInfo(): void;
  getRejectionInfo(): RejectionInfo | undefined;
  setRejectionInfo(value?: RejectionInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectedSelection.AsObject;
  static toObject(includeInstance: boolean, msg: RejectedSelection): RejectedSelection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectedSelection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectedSelection;
  static deserializeBinaryFromReader(message: RejectedSelection, reader: jspb.BinaryReader): RejectedSelection;
}

export namespace RejectedSelection {
  export type AsObject = {
    id: string,
    reason?: ots_commons_pb.Reason.AsObject,
    rejectionInfo?: RejectionInfo.AsObject,
  }
}

export class RejectionInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOdds(): number;
  setOdds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RejectionInfo): RejectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RejectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectionInfo;
  static deserializeBinaryFromReader(message: RejectionInfo, reader: jspb.BinaryReader): RejectionInfo;
}

export namespace RejectionInfo {
  export type AsObject = {
    id: string,
    odds: number,
  }
}

export class ResponseReoffer extends jspb.Message {
  getStake(): number;
  setStake(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseReoffer.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseReoffer): ResponseReoffer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseReoffer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseReoffer;
  static deserializeBinaryFromReader(message: ResponseReoffer, reader: jspb.BinaryReader): ResponseReoffer;
}

export namespace ResponseReoffer {
  export type AsObject = {
    stake: number,
  }
}

