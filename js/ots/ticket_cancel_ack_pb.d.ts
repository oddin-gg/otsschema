// package: ots
// file: ots/ticket_cancel_ack.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";

export class TicketCancelAckRequest extends jspb.Message {
  getTicketid(): string;
  setTicketid(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCancelStatus(): ots_enum_enums_pb.CancelStatusMap[keyof ots_enum_enums_pb.CancelStatusMap];
  setCancelStatus(value: ots_enum_enums_pb.CancelStatusMap[keyof ots_enum_enums_pb.CancelStatusMap]): void;

  getCancelReason(): ots_enum_enums_pb.CancelReasonMap[keyof ots_enum_enums_pb.CancelReasonMap];
  setCancelReason(value: ots_enum_enums_pb.CancelReasonMap[keyof ots_enum_enums_pb.CancelReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketCancelAckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TicketCancelAckRequest): TicketCancelAckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketCancelAckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketCancelAckRequest;
  static deserializeBinaryFromReader(message: TicketCancelAckRequest, reader: jspb.BinaryReader): TicketCancelAckRequest;
}

export namespace TicketCancelAckRequest {
  export type AsObject = {
    ticketid: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    cancelStatus: ots_enum_enums_pb.CancelStatusMap[keyof ots_enum_enums_pb.CancelStatusMap],
    cancelReason: ots_enum_enums_pb.CancelReasonMap[keyof ots_enum_enums_pb.CancelReasonMap],
  }
}

