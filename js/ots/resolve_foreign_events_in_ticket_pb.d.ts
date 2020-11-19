// package: ots
// file: ots/resolve_foreign_events_in_ticket.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";

export class ResolveForeignEventsInTicketRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getForeignStake(): number;
  setForeignStake(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveForeignEventsInTicketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveForeignEventsInTicketRequest): ResolveForeignEventsInTicketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveForeignEventsInTicketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveForeignEventsInTicketRequest;
  static deserializeBinaryFromReader(message: ResolveForeignEventsInTicketRequest, reader: jspb.BinaryReader): ResolveForeignEventsInTicketRequest;
}

export namespace ResolveForeignEventsInTicketRequest {
  export type AsObject = {
    id: string,
    foreignStake: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ResolveForeignEventsInTicketResponse extends jspb.Message {
  getStatus(): ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap];
  setStatus(value: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap]): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): ots_enum_enums_pb.Reason | undefined;
  setReason(value?: ots_enum_enums_pb.Reason): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveForeignEventsInTicketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveForeignEventsInTicketResponse): ResolveForeignEventsInTicketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveForeignEventsInTicketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveForeignEventsInTicketResponse;
  static deserializeBinaryFromReader(message: ResolveForeignEventsInTicketResponse, reader: jspb.BinaryReader): ResolveForeignEventsInTicketResponse;
}

export namespace ResolveForeignEventsInTicketResponse {
  export type AsObject = {
    status: ots_enum_enums_pb.AcceptanceStatusMap[keyof ots_enum_enums_pb.AcceptanceStatusMap],
    reason?: ots_enum_enums_pb.Reason.AsObject,
  }
}

