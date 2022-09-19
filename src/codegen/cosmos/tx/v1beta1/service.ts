import { Tx, TxSDKType } from "./tx";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseSDKType, GasInfo, GasInfoSDKType, Result, ResultSDKType } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDSDKType } from "../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../tendermint/types/block";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** OrderBy defines the sorting order */

export enum OrderBy {
  /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
  ORDER_BY_UNSPECIFIED = 0,

  /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
  ORDER_BY_ASC = 1,

  /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
  ORDER_BY_DESC = 2,
  UNRECOGNIZED = -1,
}
/** OrderBy defines the sorting order */

export enum OrderBySDKType {
  /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
  ORDER_BY_UNSPECIFIED = 0,

  /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
  ORDER_BY_ASC = 1,

  /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
  ORDER_BY_DESC = 2,
  UNRECOGNIZED = -1,
}
export function orderByFromJSON(object: any): OrderBy {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;

    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;

    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;

    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object: OrderBy): string {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";

    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";

    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";

    default:
      return "UNKNOWN";
  }
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */

export enum BroadcastMode {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,

  /**
   * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
   * the tx to be committed in a block.
   */
  BROADCAST_MODE_BLOCK = 1,

  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,

  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */

export enum BroadcastModeSDKType {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,

  /**
   * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
   * the tx to be committed in a block.
   */
  BROADCAST_MODE_BLOCK = 1,

  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,

  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}
export function broadcastModeFromJSON(object: any): BroadcastMode {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;

    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;

    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;

    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;

    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object: BroadcastMode): string {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";

    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";

    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";

    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";

    default:
      return "UNKNOWN";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventRequest {
  /** events is the list of transaction event type. */
  events?: string[];
  /** pagination defines a pagination for the request. */

  pagination?: PageRequest;
  order_by?: OrderBy;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventRequestSDKType {
  /** events is the list of transaction event type. */
  events?: string[];
  /** pagination defines a pagination for the request. */

  pagination?: PageRequestSDKType;
  order_by?: OrderBySDKType;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventResponse {
  /** txs is the list of queried transactions. */
  txs: Tx[];
  /** tx_responses is the list of queried TxResponses. */

  tx_responses: TxResponse[];
  /** pagination defines a pagination for the response. */

  pagination?: PageResponse;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */

export interface GetTxsEventResponseSDKType {
  /** txs is the list of queried transactions. */
  txs: TxSDKType[];
  /** tx_responses is the list of queried TxResponses. */

  tx_responses: TxResponseSDKType[];
  /** pagination defines a pagination for the response. */

  pagination?: PageResponseSDKType;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

export interface BroadcastTxRequest {
  /** tx_bytes is the raw transaction. */
  tx_bytes: Uint8Array;
  mode: BroadcastMode;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */

export interface BroadcastTxRequestSDKType {
  /** tx_bytes is the raw transaction. */
  tx_bytes: Uint8Array;
  mode: BroadcastModeSDKType;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

export interface BroadcastTxResponse {
  /** tx_response is the queried TxResponses. */
  tx_response: TxResponse;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */

export interface BroadcastTxResponseSDKType {
  /** tx_response is the queried TxResponses. */
  tx_response: TxResponseSDKType;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

export interface SimulateRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */

  /** @deprecated */
  tx: Tx;
  /**
   * tx_bytes is the raw transaction.
   * 
   * Since: cosmos-sdk 0.43
   */

  tx_bytes: Uint8Array;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */

export interface SimulateRequestSDKType {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */

  /** @deprecated */
  tx: TxSDKType;
  /**
   * tx_bytes is the raw transaction.
   * 
   * Since: cosmos-sdk 0.43
   */

  tx_bytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

export interface SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gas_info: GasInfo;
  /** result is the result of the simulation. */

  result: Result;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */

export interface SimulateResponseSDKType {
  /** gas_info is the information about gas used in the simulation. */
  gas_info: GasInfoSDKType;
  /** result is the result of the simulation. */

  result: ResultSDKType;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

export interface GetTxRequest {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */

export interface GetTxRequestSDKType {
  /** hash is the tx hash to query, encoded as a hex string. */
  hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */

export interface GetTxResponse {
  /** tx is the queried transaction. */
  tx: Tx;
  /** tx_response is the queried TxResponses. */

  tx_response: TxResponse;
}
/** GetTxResponse is the response type for the Service.GetTx method. */

export interface GetTxResponseSDKType {
  /** tx is the queried transaction. */
  tx: TxSDKType;
  /** tx_response is the queried TxResponses. */

  tx_response: TxResponseSDKType;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

export interface GetBlockWithTxsRequest {
  /** height is the height of the block to query. */
  height: Long;
  /** pagination defines a pagination for the request. */

  pagination?: PageRequest;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

export interface GetBlockWithTxsRequestSDKType {
  /** height is the height of the block to query. */
  height: Long;
  /** pagination defines a pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

export interface GetBlockWithTxsResponse {
  /** txs are the transactions in the block. */
  txs: Tx[];
  block_id: BlockID;
  block: Block;
  /** pagination defines a pagination for the response. */

  pagination?: PageResponse;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 * 
 * Since: cosmos-sdk 0.45.2
 */

export interface GetBlockWithTxsResponseSDKType {
  /** txs are the transactions in the block. */
  txs: TxSDKType[];
  block_id: BlockIDSDKType;
  block: BlockSDKType;
  /** pagination defines a pagination for the response. */

  pagination?: PageResponseSDKType;
}

function createBaseGetTxsEventRequest(): GetTxsEventRequest {
  return {
    events: [],
    pagination: undefined,
    order_by: 0
  };
}

export const GetTxsEventRequest = {
  encode(message: GetTxsEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      writer.uint32(10).string(v!);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.order_by !== 0) {
      writer.uint32(24).int32(message.order_by);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 3:
          message.order_by = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.order_by = object.order_by ?? 0;
    return message;
  }

};

function createBaseGetTxsEventResponse(): GetTxsEventResponse {
  return {
    txs: [],
    tx_responses: [],
    pagination: undefined
  };
}

export const GetTxsEventResponse = {
  encode(message: GetTxsEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.tx_responses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;

        case 2:
          message.tx_responses.push(TxResponse.decode(reader, reader.uint32()));
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.tx_responses = object.tx_responses?.map(e => TxResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseBroadcastTxRequest(): BroadcastTxRequest {
  return {
    tx_bytes: new Uint8Array(),
    mode: 0
  };
}

export const BroadcastTxRequest = {
  encode(message: BroadcastTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx_bytes.length !== 0) {
      writer.uint32(10).bytes(message.tx_bytes);
    }

    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx_bytes = reader.bytes();
          break;

        case 2:
          message.mode = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest {
    const message = createBaseBroadcastTxRequest();
    message.tx_bytes = object.tx_bytes ?? new Uint8Array();
    message.mode = object.mode ?? 0;
    return message;
  }

};

function createBaseBroadcastTxResponse(): BroadcastTxResponse {
  return {
    tx_response: undefined
  };
}

export const BroadcastTxResponse = {
  encode(message: BroadcastTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx_response !== undefined) {
      TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx_response = TxResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse {
    const message = createBaseBroadcastTxResponse();
    message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
    return message;
  }

};

function createBaseSimulateRequest(): SimulateRequest {
  return {
    tx: undefined,
    tx_bytes: new Uint8Array()
  };
}

export const SimulateRequest = {
  encode(message: SimulateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.tx_bytes.length !== 0) {
      writer.uint32(18).bytes(message.tx_bytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.tx_bytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest {
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.tx_bytes = object.tx_bytes ?? new Uint8Array();
    return message;
  }

};

function createBaseSimulateResponse(): SimulateResponse {
  return {
    gas_info: undefined,
    result: undefined
  };
}

export const SimulateResponse = {
  encode(message: SimulateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.gas_info !== undefined) {
      GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
    }

    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gas_info = GasInfo.decode(reader, reader.uint32());
          break;

        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse {
    const message = createBaseSimulateResponse();
    message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  }

};

function createBaseGetTxRequest(): GetTxRequest {
  return {
    hash: ""
  };
}

export const GetTxRequest = {
  encode(message: GetTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest {
    const message = createBaseGetTxRequest();
    message.hash = object.hash ?? "";
    return message;
  }

};

function createBaseGetTxResponse(): GetTxResponse {
  return {
    tx: undefined,
    tx_response: undefined
  };
}

export const GetTxResponse = {
  encode(message: GetTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }

    if (message.tx_response !== undefined) {
      TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;

        case 2:
          message.tx_response = TxResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
    return message;
  }

};

function createBaseGetBlockWithTxsRequest(): GetBlockWithTxsRequest {
  return {
    height: Long.ZERO,
    pagination: undefined
  };
}

export const GetBlockWithTxsRequest = {
  encode(message: GetBlockWithTxsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest {
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseGetBlockWithTxsResponse(): GetBlockWithTxsResponse {
  return {
    txs: [],
    block_id: undefined,
    block: undefined,
    pagination: undefined
  };
}

export const GetBlockWithTxsResponse = {
  encode(message: GetBlockWithTxsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.block_id !== undefined) {
      BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
    }

    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;

        case 2:
          message.block_id = BlockID.decode(reader, reader.uint32());
          break;

        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;

        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};