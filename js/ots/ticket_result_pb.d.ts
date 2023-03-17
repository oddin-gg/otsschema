// package: ots
// file: ots/ticket_result.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as ots_enum_enums_pb from "../ots/enum/enums_pb";
import * as ots_commons_pb from "../ots/commons_pb";

export class TicketResultRequest extends jspb.Message {
  hasTicket(): boolean;
  clearTicket(): void;
  getTicket(): TicketResult | undefined;
  setTicket(value?: TicketResult): void;

  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): ots_commons_pb.StreamKeepalive | undefined;
  setKeepalive(value?: ots_commons_pb.StreamKeepalive): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): TicketsAfter | undefined;
  setAfter(value?: TicketsAfter): void;

  getDataCase(): TicketResultRequest.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultRequest): TicketResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultRequest;
  static deserializeBinaryFromReader(message: TicketResultRequest, reader: jspb.BinaryReader): TicketResultRequest;
}

export namespace TicketResultRequest {
  export type AsObject = {
    ticket?: TicketResult.AsObject,
    keepalive?: ots_commons_pb.StreamKeepalive.AsObject,
    after?: TicketsAfter.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    TICKET = 1,
    KEEPALIVE = 2,
    AFTER = 3,
  }
}

export class TicketResultResponse extends jspb.Message {
  hasState(): boolean;
  clearState(): void;
  getState(): TicketResultState | undefined;
  setState(value?: TicketResultState): void;

  hasKeepalive(): boolean;
  clearKeepalive(): void;
  getKeepalive(): ots_commons_pb.StreamKeepalive | undefined;
  setKeepalive(value?: ots_commons_pb.StreamKeepalive): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): TicketsAfterState | undefined;
  setAfter(value?: TicketsAfterState): void;

  getDataCase(): TicketResultResponse.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultResponse): TicketResultResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultResponse;
  static deserializeBinaryFromReader(message: TicketResultResponse, reader: jspb.BinaryReader): TicketResultResponse;
}

export namespace TicketResultResponse {
  export type AsObject = {
    state?: TicketResultState.AsObject,
    keepalive?: ots_commons_pb.StreamKeepalive.AsObject,
    after?: TicketsAfterState.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    STATE = 1,
    KEEPALIVE = 2,
    AFTER = 3,
  }
}

export class TicketsAfter extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketsAfter.AsObject;
  static toObject(includeInstance: boolean, msg: TicketsAfter): TicketsAfter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketsAfter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketsAfter;
  static deserializeBinaryFromReader(message: TicketsAfter, reader: jspb.BinaryReader): TicketsAfter;
}

export namespace TicketsAfter {
  export type AsObject = {
    requestId: string,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TicketsAfterState extends jspb.Message {
  getRequestId(): string;
  setRequestId(value: string): void;

  hasAfter(): boolean;
  clearAfter(): void;
  getAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearTicketsList(): void;
  getTicketsList(): Array<TicketResultState>;
  setTicketsList(value: Array<TicketResultState>): void;
  addTickets(value?: TicketResultState, index?: number): TicketResultState;

  hasError(): boolean;
  clearError(): void;
  getError(): TicketResultError | undefined;
  setError(value?: TicketResultError): void;

  hasBatchInfo(): boolean;
  clearBatchInfo(): void;
  getBatchInfo(): TicketsAfterState.BatchInfo | undefined;
  setBatchInfo(value?: TicketsAfterState.BatchInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketsAfterState.AsObject;
  static toObject(includeInstance: boolean, msg: TicketsAfterState): TicketsAfterState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketsAfterState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketsAfterState;
  static deserializeBinaryFromReader(message: TicketsAfterState, reader: jspb.BinaryReader): TicketsAfterState;
}

export namespace TicketsAfterState {
  export type AsObject = {
    requestId: string,
    after?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ticketsList: Array<TicketResultState.AsObject>,
    error?: TicketResultError.AsObject,
    batchInfo?: TicketsAfterState.BatchInfo.AsObject,
  }

  export class BatchInfo extends jspb.Message {
    getActual(): number;
    setActual(value: number): void;

    getTotal(): number;
    setTotal(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchInfo.AsObject;
    static toObject(includeInstance: boolean, msg: BatchInfo): BatchInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchInfo;
    static deserializeBinaryFromReader(message: BatchInfo, reader: jspb.BinaryReader): BatchInfo;
  }

  export namespace BatchInfo {
    export type AsObject = {
      actual: number,
      total: number,
    }
  }
}

export class TicketResult extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResult.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResult): TicketResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResult;
  static deserializeBinaryFromReader(message: TicketResult, reader: jspb.BinaryReader): TicketResult;
}

export namespace TicketResult {
  export type AsObject = {
    id: string,
  }
}

export class TicketResultStateBetInfo extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBetStatus(): ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap];
  setBetStatus(value: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap]): void;

  hasWonAmount(): boolean;
  clearWonAmount(): void;
  getWonAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setWonAmount(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultStateBetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultStateBetInfo): TicketResultStateBetInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultStateBetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultStateBetInfo;
  static deserializeBinaryFromReader(message: TicketResultStateBetInfo, reader: jspb.BinaryReader): TicketResultStateBetInfo;
}

export namespace TicketResultStateBetInfo {
  export type AsObject = {
    id: string,
    betStatus: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap],
    wonAmount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class TicketResultStateSelectionInfo extends jspb.Message {
  getSelectionStatus(): ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap];
  setSelectionStatus(value: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultStateSelectionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultStateSelectionInfo): TicketResultStateSelectionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultStateSelectionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultStateSelectionInfo;
  static deserializeBinaryFromReader(message: TicketResultStateSelectionInfo, reader: jspb.BinaryReader): TicketResultStateSelectionInfo;
}

export namespace TicketResultStateSelectionInfo {
  export type AsObject = {
    selectionStatus: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap],
  }
}

export class TicketResultError extends jspb.Message {
  getCode(): ots_enum_enums_pb.ReasonCodeMap[keyof ots_enum_enums_pb.ReasonCodeMap];
  setCode(value: ots_enum_enums_pb.ReasonCodeMap[keyof ots_enum_enums_pb.ReasonCodeMap]): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMessage(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultError.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultError): TicketResultError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultError;
  static deserializeBinaryFromReader(message: TicketResultError, reader: jspb.BinaryReader): TicketResultError;
}

export namespace TicketResultError {
  export type AsObject = {
    code: ots_enum_enums_pb.ReasonCodeMap[keyof ots_enum_enums_pb.ReasonCodeMap],
    message?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TicketResultState extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTicketStatus(): ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap];
  setTicketStatus(value: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap]): void;

  hasWonAmount(): boolean;
  clearWonAmount(): void;
  getWonAmount(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setWonAmount(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  getBetInfoMap(): jspb.Map<string, TicketResultStateBetInfo>;
  clearBetInfoMap(): void;
  getSelectionInfoMap(): jspb.Map<string, TicketResultStateSelectionInfo>;
  clearSelectionInfoMap(): void;
  getExchangeRate(): number;
  setExchangeRate(value: number): void;

  hasResultedAt(): boolean;
  clearResultedAt(): void;
  getResultedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResultedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasError(): boolean;
  clearError(): void;
  getError(): TicketResultError | undefined;
  setError(value?: TicketResultError): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketResultState.AsObject;
  static toObject(includeInstance: boolean, msg: TicketResultState): TicketResultState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TicketResultState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketResultState;
  static deserializeBinaryFromReader(message: TicketResultState, reader: jspb.BinaryReader): TicketResultState;
}

export namespace TicketResultState {
  export type AsObject = {
    id: string,
    ticketStatus: ots_enum_enums_pb.ResultingStatusMap[keyof ots_enum_enums_pb.ResultingStatusMap],
    wonAmount?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    betInfoMap: Array<[string, TicketResultStateBetInfo.AsObject]>,
    selectionInfoMap: Array<[string, TicketResultStateSelectionInfo.AsObject]>,
    exchangeRate: number,
    resultedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    error?: TicketResultError.AsObject,
  }
}

