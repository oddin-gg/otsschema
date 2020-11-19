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
  clearRiskScoresList(): void;
  getRiskScoresList(): Array<PlayerRiskScore>;
  setRiskScoresList(value: Array<PlayerRiskScore>): void;
  addRiskScores(value?: PlayerRiskScore, index?: number): PlayerRiskScore;

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
    riskScoresList: Array<PlayerRiskScore.AsObject>,
  }
}

export class PlayerRiskScore extends jspb.Message {
  getSportId(): string;
  setSportId(value: string): void;

  getPrematch(): number;
  setPrematch(value: number): void;

  getLive(): number;
  setLive(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerRiskScore.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerRiskScore): PlayerRiskScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerRiskScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerRiskScore;
  static deserializeBinaryFromReader(message: PlayerRiskScore, reader: jspb.BinaryReader): PlayerRiskScore;
}

export namespace PlayerRiskScore {
  export type AsObject = {
    sportId: string,
    prematch: number,
    live: number,
  }
}

