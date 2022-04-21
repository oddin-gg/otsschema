// package: ots
// file: ots/ticket_max_stake.proto

import * as jspb from "google-protobuf";
import * as ots_ticket_pb from "../ots/ticket_pb";

export class TicketMaxStakeRequest extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): ots_ticket_pb.Ticket | undefined;
  setTicket(value?: ots_ticket_pb.Ticket): void;

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
    ticket?: ots_ticket_pb.Ticket.AsObject,
  }
}

export class TicketMaxStakeResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): ots_ticket_pb.TicketState | undefined;
  setState(value?: ots_ticket_pb.TicketState): void;

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
    state?: ots_ticket_pb.TicketState.AsObject,
  }
}

