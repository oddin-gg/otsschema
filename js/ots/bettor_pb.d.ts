// package: ots
// file: ots/bettor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_commons_pb from "../ots/commons_pb";

export class BettorsRequest extends jspb.Message {
  hasRecoverSince(): boolean;
  clearRecoverSince(): void;
  getRecoverSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRecoverSince(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BettorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BettorsRequest): BettorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BettorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BettorsRequest;
  static deserializeBinaryFromReader(message: BettorsRequest, reader: jspb.BinaryReader): BettorsRequest;
}

export namespace BettorsRequest {
  export type AsObject = {
    recoverSince?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class BettorsResponse extends jspb.Message {
  hasBettor(): boolean;
  clearBettor(): void;
  getBettor(): Bettor | undefined;
  setBettor(value?: Bettor): void;

  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): ots_commons_pb.StreamKeepalive | undefined;
  setKeepalive(value?: ots_commons_pb.StreamKeepalive): void;

  getDataCase(): BettorsResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BettorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BettorsResponse): BettorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BettorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BettorsResponse;
  static deserializeBinaryFromReader(message: BettorsResponse, reader: jspb.BinaryReader): BettorsResponse;
}

export namespace BettorsResponse {
  export type AsObject = {
    bettor?: Bettor.AsObject,
    keepalive?: ots_commons_pb.StreamKeepalive.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    BETTOR = 1,
    KEEPALIVE = 2,
  }
}

export class BettorUpsertRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasBos(): boolean;
  clearBos(): void;
  getBos(): number;
  setBos(value: number): void;

  hasOverAskFactor(): boolean;
  clearOverAskFactor(): void;
  getOverAskFactor(): number;
  setOverAskFactor(value: number): void;

  hasLabels(): boolean;
  clearLabels(): void;
  getLabels(): BettorUpsertRequest.NewLabelSet | undefined;
  setLabels(value?: BettorUpsertRequest.NewLabelSet): void;

  hasNickname(): boolean;
  clearNickname(): void;
  getNickname(): string;
  setNickname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BettorUpsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BettorUpsertRequest): BettorUpsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BettorUpsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BettorUpsertRequest;
  static deserializeBinaryFromReader(message: BettorUpsertRequest, reader: jspb.BinaryReader): BettorUpsertRequest;
}

export namespace BettorUpsertRequest {
  export type AsObject = {
    id: string,
    bos: number,
    overAskFactor: number,
    labels?: BettorUpsertRequest.NewLabelSet.AsObject,
    nickname: string,
  }

  export class NewLabelSet extends jspb.Message {
    clearLabelsList(): void;
    getLabelsList(): Array<string>;
    setLabelsList(value: Array<string>): void;
    addLabels(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NewLabelSet.AsObject;
    static toObject(includeInstance: boolean, msg: NewLabelSet): NewLabelSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NewLabelSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NewLabelSet;
    static deserializeBinaryFromReader(message: NewLabelSet, reader: jspb.BinaryReader): NewLabelSet;
  }

  export namespace NewLabelSet {
    export type AsObject = {
      labelsList: Array<string>,
    }
  }
}

export class BettorUpsertResponse extends jspb.Message {
  hasBettor(): boolean;
  clearBettor(): void;
  getBettor(): Bettor | undefined;
  setBettor(value?: Bettor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BettorUpsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BettorUpsertResponse): BettorUpsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BettorUpsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BettorUpsertResponse;
  static deserializeBinaryFromReader(message: BettorUpsertResponse, reader: jspb.BinaryReader): BettorUpsertResponse;
}

export namespace BettorUpsertResponse {
  export type AsObject = {
    bettor?: Bettor.AsObject,
  }
}

export class BettorLabelsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BettorLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BettorLabelsRequest): BettorLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BettorLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BettorLabelsRequest;
  static deserializeBinaryFromReader(message: BettorLabelsRequest, reader: jspb.BinaryReader): BettorLabelsRequest;
}

export namespace BettorLabelsRequest {
  export type AsObject = {
  }
}

export class BettorLabelsResponse extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BettorLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BettorLabelsResponse): BettorLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BettorLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BettorLabelsResponse;
  static deserializeBinaryFromReader(message: BettorLabelsResponse, reader: jspb.BinaryReader): BettorLabelsResponse;
}

export namespace BettorLabelsResponse {
  export type AsObject = {
    labelsList: Array<string>,
  }
}

export class Bettor extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getExtId(): string;
  setExtId(value: string): void;

  hasModifiedAt(): boolean;
  clearModifiedAt(): void;
  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getBos(): number;
  setBos(value: number): void;

  getOverAskFactor(): number;
  setOverAskFactor(value: number): void;

  clearOddinsLabelsList(): void;
  getOddinsLabelsList(): Array<string>;
  setOddinsLabelsList(value: Array<string>): void;
  addOddinsLabels(value: string, index?: number): string;

  clearClientsLabelsList(): void;
  getClientsLabelsList(): Array<string>;
  setClientsLabelsList(value: Array<string>): void;
  addClientsLabels(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bettor.AsObject;
  static toObject(includeInstance: boolean, msg: Bettor): Bettor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bettor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bettor;
  static deserializeBinaryFromReader(message: Bettor, reader: jspb.BinaryReader): Bettor;
}

export namespace Bettor {
  export type AsObject = {
    id: string,
    extId: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    bos: number,
    overAskFactor: number,
    oddinsLabelsList: Array<string>,
    clientsLabelsList: Array<string>,
  }
}

