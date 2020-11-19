// package: ots
// file: ots/ticket_ack.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";

export class TicketAckRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getAcceptanceStatus(): ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap];
  setAcceptanceStatus(value: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap]): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): ots_enum_enums_pb.Reason | undefined;
  setReason(value?: ots_enum_enums_pb.Reason): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketAckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TicketAckRequest): TicketAckRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketAckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketAckRequest;
  static deserializeBinaryFromReader(message: TicketAckRequest, reader: jspb.BinaryReader): TicketAckRequest;
}

export namespace TicketAckRequest {
  export type AsObject = {
    id: string,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    acceptanceStatus: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap],
    reason?: ots_enum_enums_pb.Reason.AsObject,
  }
}

