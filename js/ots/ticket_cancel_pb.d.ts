// package: ots
// file: ots/ticket_cancel.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";

export class TicketCancelRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCancelReason(): ots_enum_enums_pb.CancelReasonMap[keyof ots_enum_enums_pb.CancelReasonMap];
  setCancelReason(value: ots_enum_enums_pb.CancelReasonMap[keyof ots_enum_enums_pb.CancelReasonMap]): void;

  getCancelReasonDetail(): string;
  setCancelReasonDetail(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCancelPercent(): number;
  setCancelPercent(value: number): void;

  clearCancelBetInfoList(): void;
  getCancelBetInfoList(): Array<CancelBetInfo>;
  setCancelBetInfoList(value: Array<CancelBetInfo>): void;
  addCancelBetInfo(value?: CancelBetInfo, index?: number): CancelBetInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCancelRequest): TicketCancelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCancelRequest;
  static deserializeBinaryFromReader(message: TicketCancelRequest, reader: jspb.BinaryReader): TicketCancelRequest;
}

export namespace TicketCancelRequest {
  export type AsObject = {
    id: string,
    cancelReason: ots_enum_enums_pb.CancelReasonMap[keyof ots_enum_enums_pb.CancelReasonMap],
    cancelReasonDetail: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelPercent: number,
    cancelBetInfoList: Array<CancelBetInfo.AsObject>,
  }
}

export class CancelBetInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getCancelPercent(): number;
  setCancelPercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelBetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CancelBetInfo): CancelBetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelBetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelBetInfo;
  static deserializeBinaryFromReader(message: CancelBetInfo, reader: jspb.BinaryReader): CancelBetInfo;
}

export namespace CancelBetInfo {
  export type AsObject = {
    id: string,
    cancelPercent: number,
  }
}

export class TicketCancelResponse extends jspb.Message {
  getStatus(): ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap];
  setStatus(value: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap]): void;

  getCancelRejectionReason(): CancelRejectionReasonMap[keyof CancelRejectionReasonMap];
  setCancelRejectionReason(value: CancelRejectionReasonMap[keyof CancelRejectionReasonMap]): void;

  getCancelRejectionMessage(): string;
  setCancelRejectionMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCancelResponse): TicketCancelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCancelResponse;
  static deserializeBinaryFromReader(message: TicketCancelResponse, reader: jspb.BinaryReader): TicketCancelResponse;
}

export namespace TicketCancelResponse {
  export type AsObject = {
    status: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap],
    cancelRejectionReason: CancelRejectionReasonMap[keyof CancelRejectionReasonMap],
    cancelRejectionMessage: string,
  }
}

export interface CancelRejectionReasonMap {
  UNKNOWN: 0;
  TICKET_NOT_FOUND: 1;
  TIME_EXPIRED: 2;
  ALREADY_SETTLED: 3;
  OTHER: 4;
}

export const CancelRejectionReason: CancelRejectionReasonMap;

