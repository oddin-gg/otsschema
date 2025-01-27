// package: ots
// file: ots/player_risk_score.proto

import * as jspb from "google-protobuf";

export class PlayerRiskScoreRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerRiskScoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerRiskScoreRequest): PlayerRiskScoreRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerRiskScoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerRiskScoreRequest;
  static deserializeBinaryFromReader(message: PlayerRiskScoreRequest, reader: jspb.BinaryReader): PlayerRiskScoreRequest;
}

export namespace PlayerRiskScoreRequest {
  export type AsObject = {
    id: string,
  }
}

export class PlayerRiskScoreResponse extends jspb.Message {
  getScore(): number;
  setScore(value: number): void;

  getBos(): number;
  setBos(value: number): void;

  getOaf(): number;
  setOaf(value: number): void;

  getLiveDelay(): number;
  setLiveDelay(value: number): void;

  getPrematchDelay(): number;
  setPrematchDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerRiskScoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerRiskScoreResponse): PlayerRiskScoreResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerRiskScoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerRiskScoreResponse;
  static deserializeBinaryFromReader(message: PlayerRiskScoreResponse, reader: jspb.BinaryReader): PlayerRiskScoreResponse;
}

export namespace PlayerRiskScoreResponse {
  export type AsObject = {
    score: number,
    bos: number,
    oaf: number,
    liveDelay: number,
    prematchDelay: number,
  }
}

