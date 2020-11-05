// package: ots
// file: ots/ticket_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";

export class TicketResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTicketStatus(): ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap];
  setTicketStatus(value: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap]): void;

  hasRejectionReason(): boolean;
  clearRejectionReason(): void;
  getRejectionReason(): ots_enum_enums_pb.RejectionReason | undefined;
  setRejectionReason(value?: ots_enum_enums_pb.RejectionReason): void;

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
    id: string,
    ticketStatus: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap],
    rejectionReason?: ots_enum_enums_pb.RejectionReason.AsObject,
    betInfoList: Array<TicketResponseBetInfo.AsObject>,
    exchangeRate?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    autoAcceptedOddsList: Array<AutoAcceptedOdds.AsObject>,
  }
}

export class AutoAcceptedOdds extends jspb.Message {
  getSelectionId(): string;
  setSelectionId(value: string): void;

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
    selectionId: string,
    requestedOdds: number,
    usedOdds: number,
  }
}

export class TicketResponseBetInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRejectionReason(): boolean;
  clearRejectionReason(): void;
  getRejectionReason(): ots_enum_enums_pb.RejectionReason | undefined;
  setRejectionReason(value?: ots_enum_enums_pb.RejectionReason): void;

  clearSelectionInfoList(): void;
  getSelectionInfoList(): Array<RejectedSelection>;
  setSelectionInfoList(value: Array<RejectedSelection>): void;
  addSelectionInfo(value?: RejectedSelection, index?: number): RejectedSelection;

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
    rejectionReason?: ots_enum_enums_pb.RejectionReason.AsObject,
    selectionInfoList: Array<RejectedSelection.AsObject>,
  }
}

export class RejectedSelection extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRejectionReason(): boolean;
  clearRejectionReason(): void;
  getRejectionReason(): ots_enum_enums_pb.RejectionReason | undefined;
  setRejectionReason(value?: ots_enum_enums_pb.RejectionReason): void;

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
    rejectionReason?: ots_enum_enums_pb.RejectionReason.AsObject,
    rejectionInfo?: RejectionInfo.AsObject,
  }
}

export class RejectionInfo extends jspb.Message {
  getEventid(): string;
  setEventid(value: string): void;

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
    eventid: string,
    id: string,
    odds: number,
  }
}

