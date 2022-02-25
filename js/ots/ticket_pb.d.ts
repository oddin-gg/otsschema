// package: ots
// file: ots/ticket.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";
import * as ots_commons_pb from "../ots/commons_pb";

export class TicketRequest extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): Ticket | undefined;
  setTicket(value?: Ticket): void;

  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): ots_commons_pb.StreamKeepalive | undefined;
  setKeepalive(value?: ots_commons_pb.StreamKeepalive): void;

  getDataCase(): TicketRequest.DataCase;
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
    ticket?: Ticket.AsObject,
    keepalive?: ots_commons_pb.StreamKeepalive.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    TICKET = 1,
    KEEPALIVE = 2,
  }
}

export class TicketResultRequest extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): TicketResult | undefined;
  setTicket(value?: TicketResult): void;

  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): ots_commons_pb.StreamKeepalive | undefined;
  setKeepalive(value?: ots_commons_pb.StreamKeepalive): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): TicketsAfter | undefined;
  setAfter(value?: TicketsAfter): void;

  getDataCase(): TicketResultRequest.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultRequest): TicketResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultRequest;
  static deserializeBinaryFromReader(message: TicketResultRequest, reader: jspb.BinaryReader): TicketResultRequest;
}

export namespace TicketResultRequest {
  export type AsObject = {
    ticket?: TicketResult.AsObject,
    keepalive?: ots_commons_pb.StreamKeepalive.AsObject,
    after?: TicketsAfter.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    TICKET = 1,
    KEEPALIVE = 2,
    AFTER = 3,
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

export class TicketResultResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): TicketResultState | undefined;
  setState(value?: TicketResultState): void;

  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): ots_commons_pb.StreamKeepalive | undefined;
  setKeepalive(value?: ots_commons_pb.StreamKeepalive): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): TicketsAfterState | undefined;
  setAfter(value?: TicketsAfterState): void;

  getDataCase(): TicketResultResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultResponse): TicketResultResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultResponse;
  static deserializeBinaryFromReader(message: TicketResultResponse, reader: jspb.BinaryReader): TicketResultResponse;
}

export namespace TicketResultResponse {
  export type AsObject = {
    state?: TicketResultState.AsObject,
    keepalive?: ots_commons_pb.StreamKeepalive.AsObject,
    after?: TicketsAfterState.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    STATE = 1,
    KEEPALIVE = 2,
    AFTER = 3,
  }
}

export class Ticket extends jspb.Message {
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

  hasLastforeigneventstarttime(): boolean;
  clearLastforeigneventstarttime(): void;
  getLastforeigneventstarttime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastforeigneventstarttime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastforeigneventendtime(): boolean;
  clearLastforeigneventendtime(): void;
  getLastforeigneventendtime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastforeigneventendtime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStakeMultiplier(): boolean;
  clearStakeMultiplier(): void;
  getStakeMultiplier(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setStakeMultiplier(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ticket.AsObject;
  static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ticket;
  static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
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
    lastforeigneventstarttime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastforeigneventendtime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stakeMultiplier?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class TicketSelection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOdds(): number;
  setOdds(value: number): void;

  hasForeign(): boolean;
  clearForeign(): void;
  getForeign(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setForeign(value?: google_protobuf_wrappers_pb.BoolValue): void;

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
    foreign?: google_protobuf_wrappers_pb.BoolValue.AsObject,
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

  hasNickname(): boolean;
  clearNickname(): void;
  getNickname(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNickname(value?: google_protobuf_wrappers_pb.StringValue): void;

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
    nickname?: google_protobuf_wrappers_pb.StringValue.AsObject,
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

export class TicketsAfterState extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearTicketsList(): void;
  getTicketsList(): Array<TicketResultState>;
  setTicketsList(value: Array<TicketResultState>): void;
  addTickets(value?: TicketResultState, index?: number): TicketResultState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketsAfterState.AsObject;
  static toObject(includeInstance: boolean, msg: TicketsAfterState): TicketsAfterState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketsAfterState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketsAfterState;
  static deserializeBinaryFromReader(message: TicketsAfterState, reader: jspb.BinaryReader): TicketsAfterState;
}

export namespace TicketsAfterState {
  export type AsObject = {
    requestId: string,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticketsList: Array<TicketResultState.AsObject>,
  }
}

export class TicketState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTicketStatus(): ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap];
  setTicketStatus(value: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap]): void;

  hasRejectReason(): boolean;
  clearRejectReason(): void;
  getRejectReason(): TicketRejectReason | undefined;
  setRejectReason(value?: TicketRejectReason): void;

  getBetInfoMap(): jspb.Map<string, TicketResponseBetInfo>;
  clearBetInfoMap(): void;
  getSelectionInfoMap(): jspb.Map<string, TicketSelectionRejectReason>;
  clearSelectionInfoMap(): void;
  hasExchangeRate(): boolean;
  clearExchangeRate(): void;
  getExchangeRate(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setExchangeRate(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  getAutoAcceptedOddsMap(): jspb.Map<string, AutoAcceptedOdds>;
  clearAutoAcceptedOddsMap(): void;
  hasReoffer(): boolean;
  clearReoffer(): void;
  getReoffer(): ResponseReoffer | undefined;
  setReoffer(value?: ResponseReoffer): void;

  getTotalOdds(): number;
  setTotalOdds(value: number): void;

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
    rejectReason?: TicketRejectReason.AsObject,
    betInfoMap: Array<[string, TicketResponseBetInfo.AsObject]>,
    selectionInfoMap: Array<[string, TicketSelectionRejectReason.AsObject]>,
    exchangeRate?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    autoAcceptedOddsMap: Array<[string, AutoAcceptedOdds.AsObject]>,
    reoffer?: ResponseReoffer.AsObject,
    totalOdds: number,
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

export class TicketRejectReason extends jspb.Message {
  getCode(): TicketRejectReason.CodeMap[keyof TicketRejectReason.CodeMap];
  setCode(value: TicketRejectReason.CodeMap[keyof TicketRejectReason.CodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketRejectReason.AsObject;
  static toObject(includeInstance: boolean, msg: TicketRejectReason): TicketRejectReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketRejectReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketRejectReason;
  static deserializeBinaryFromReader(message: TicketRejectReason, reader: jspb.BinaryReader): TicketRejectReason;
}

export namespace TicketRejectReason {
  export type AsObject = {
    code: TicketRejectReason.CodeMap[keyof TicketRejectReason.CodeMap],
    message: string,
  }

  export interface CodeMap {
    CODE_UNSPECIFIED: 0;
    CODE_INTERNAL: 1;
    CODE_INVALID_ARGUMENT: 2;
    CODE_ALREADY_EXISTS: 3;
    CODE_STAKE_TOO_LOW: 4;
    CODE_STAKE_TOO_HIGH: 5;
    CODE_MAX_PAYOUT_BREACHED: 6;
    CODE_BETS_NOT_ACCEPTABLE: 7;
    CODE_SELECTIONS_NOT_ACCEPTABLE: 8;
    CODE_NOT_FOUND: 9;
  }

  export const Code: CodeMap;
}

export class TicketBetRejectReason extends jspb.Message {
  getCode(): TicketBetRejectReason.CodeMap[keyof TicketBetRejectReason.CodeMap];
  setCode(value: TicketBetRejectReason.CodeMap[keyof TicketBetRejectReason.CodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketBetRejectReason.AsObject;
  static toObject(includeInstance: boolean, msg: TicketBetRejectReason): TicketBetRejectReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketBetRejectReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketBetRejectReason;
  static deserializeBinaryFromReader(message: TicketBetRejectReason, reader: jspb.BinaryReader): TicketBetRejectReason;
}

export namespace TicketBetRejectReason {
  export type AsObject = {
    code: TicketBetRejectReason.CodeMap[keyof TicketBetRejectReason.CodeMap],
    message: string,
  }

  export interface CodeMap {
    CODE_UNSPECIFIED: 0;
    CODE_ODDS_CHANGED: 1;
    CODE_SELECTION_NOT_ACTIVE: 2;
    CODE_STAKE_TOO_LOW: 3;
    CODE_STAKE_TOO_HIGH: 4;
    CODE_MAX_PAYOUT_BREACHED: 5;
    CODE_MARKET_LIABILITY_BREACHED: 6;
    CODE_BETTOR_LIABILITY_BREACHED: 7;
    CODE_EVENT_LIABILITY_BREACHED: 8;
  }

  export const Code: CodeMap;
}

export class TicketResponseBetInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRejectReason(): boolean;
  clearRejectReason(): void;
  getRejectReason(): TicketBetRejectReason | undefined;
  setRejectReason(value?: TicketBetRejectReason): void;

  hasReoffer(): boolean;
  clearReoffer(): void;
  getReoffer(): ResponseReoffer | undefined;
  setReoffer(value?: ResponseReoffer): void;

  getTotalOdds(): number;
  setTotalOdds(value: number): void;

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
    rejectReason?: TicketBetRejectReason.AsObject,
    reoffer?: ResponseReoffer.AsObject,
    totalOdds: number,
  }
}

export class TicketSelectionRejectReason extends jspb.Message {
  getCode(): TicketSelectionRejectReason.CodeMap[keyof TicketSelectionRejectReason.CodeMap];
  setCode(value: TicketSelectionRejectReason.CodeMap[keyof TicketSelectionRejectReason.CodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketSelectionRejectReason.AsObject;
  static toObject(includeInstance: boolean, msg: TicketSelectionRejectReason): TicketSelectionRejectReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketSelectionRejectReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketSelectionRejectReason;
  static deserializeBinaryFromReader(message: TicketSelectionRejectReason, reader: jspb.BinaryReader): TicketSelectionRejectReason;
}

export namespace TicketSelectionRejectReason {
  export type AsObject = {
    code: TicketSelectionRejectReason.CodeMap[keyof TicketSelectionRejectReason.CodeMap],
    message: string,
  }

  export interface CodeMap {
    CODE_UNSPECIFIED: 0;
    CODE_ODDS_CHANGED: 1;
    CODE_NOT_ACTIVE: 2;
    CODE_NOT_INDEPENDENT: 3;
  }

  export const Code: CodeMap;
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

export class TicketsAfter extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketsAfter.AsObject;
  static toObject(includeInstance: boolean, msg: TicketsAfter): TicketsAfter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketsAfter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketsAfter;
  static deserializeBinaryFromReader(message: TicketsAfter, reader: jspb.BinaryReader): TicketsAfter;
}

export namespace TicketsAfter {
  export type AsObject = {
    requestId: string,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TicketResult extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResult.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResult): TicketResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResult;
  static deserializeBinaryFromReader(message: TicketResult, reader: jspb.BinaryReader): TicketResult;
}

export namespace TicketResult {
  export type AsObject = {
    id: string,
  }
}

export class TicketResultStateBetInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBetStatus(): ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap];
  setBetStatus(value: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap]): void;

  hasWonAmount(): boolean;
  clearWonAmount(): void;
  getWonAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setWonAmount(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultStateBetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultStateBetInfo): TicketResultStateBetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultStateBetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultStateBetInfo;
  static deserializeBinaryFromReader(message: TicketResultStateBetInfo, reader: jspb.BinaryReader): TicketResultStateBetInfo;
}

export namespace TicketResultStateBetInfo {
  export type AsObject = {
    id: string,
    betStatus: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap],
    wonAmount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class TicketResultStateSelectionInfo extends jspb.Message {
  getSelectionStatus(): ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap];
  setSelectionStatus(value: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultStateSelectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultStateSelectionInfo): TicketResultStateSelectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultStateSelectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultStateSelectionInfo;
  static deserializeBinaryFromReader(message: TicketResultStateSelectionInfo, reader: jspb.BinaryReader): TicketResultStateSelectionInfo;
}

export namespace TicketResultStateSelectionInfo {
  export type AsObject = {
    selectionStatus: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap],
  }
}

export class TicketResultState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTicketStatus(): ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap];
  setTicketStatus(value: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap]): void;

  hasWonAmount(): boolean;
  clearWonAmount(): void;
  getWonAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setWonAmount(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  getBetInfoMap(): jspb.Map<string, TicketResultStateBetInfo>;
  clearBetInfoMap(): void;
  getSelectionInfoMap(): jspb.Map<string, TicketResultStateSelectionInfo>;
  clearSelectionInfoMap(): void;
  hasExchangeRate(): boolean;
  clearExchangeRate(): void;
  getExchangeRate(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setExchangeRate(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasResultedAt(): boolean;
  clearResultedAt(): void;
  getResultedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResultedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultState.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultState): TicketResultState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultState;
  static deserializeBinaryFromReader(message: TicketResultState, reader: jspb.BinaryReader): TicketResultState;
}

export namespace TicketResultState {
  export type AsObject = {
    id: string,
    ticketStatus: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap],
    wonAmount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    betInfoMap: Array<[string, TicketResultStateBetInfo.AsObject]>,
    selectionInfoMap: Array<[string, TicketResultStateSelectionInfo.AsObject]>,
    exchangeRate?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    resultedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

