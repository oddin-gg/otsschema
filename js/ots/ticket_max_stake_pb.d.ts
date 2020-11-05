// package: ots
// file: ots/ticket_max_stake.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class TicketMaxStakeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketMaxStakeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TicketMaxStakeRequest): TicketMaxStakeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketMaxStakeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketMaxStakeRequest;
  static deserializeBinaryFromReader(message: TicketMaxStakeRequest, reader: jspb.BinaryReader): TicketMaxStakeRequest;
}

export namespace TicketMaxStakeRequest {
  export type AsObject = {
    id: string,
  }
}

export class TicketMaxStakeResponse extends jspb.Message {
  getStake(): number;
  setStake(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketMaxStakeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TicketMaxStakeResponse): TicketMaxStakeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketMaxStakeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketMaxStakeResponse;
  static deserializeBinaryFromReader(message: TicketMaxStakeResponse, reader: jspb.BinaryReader): TicketMaxStakeResponse;
}

export namespace TicketMaxStakeResponse {
  export type AsObject = {
    stake: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

