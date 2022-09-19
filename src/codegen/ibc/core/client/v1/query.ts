import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightSDKType, Params, ParamsSDKType } from "./client";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */

export interface QueryClientStateRequest {
  /** client state unique identifier */
  client_id: string;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */

export interface QueryClientStateRequestSDKType {
  /** client state unique identifier */
  client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */

export interface QueryClientStateResponse {
  /** client state associated with the request identifier */
  client_state: Any;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */

export interface QueryClientStateResponseSDKType {
  /** client state associated with the request identifier */
  client_state: AnySDKType;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */

export interface QueryClientStatesRequest {
  /** pagination request */
  pagination?: PageRequest;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */

export interface QueryClientStatesRequestSDKType {
  /** pagination request */
  pagination?: PageRequestSDKType;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */

export interface QueryClientStatesResponse {
  /** list of stored ClientStates of the chain. */
  client_states: IdentifiedClientState[];
  /** pagination response */

  pagination?: PageResponse;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */

export interface QueryClientStatesResponseSDKType {
  /** list of stored ClientStates of the chain. */
  client_states: IdentifiedClientStateSDKType[];
  /** pagination response */

  pagination?: PageResponseSDKType;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */

export interface QueryConsensusStateRequest {
  /** client identifier */
  client_id: string;
  /** consensus state revision number */

  revision_number: Long;
  /** consensus state revision height */

  revision_height: Long;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */

  latest_height?: boolean;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */

export interface QueryConsensusStateRequestSDKType {
  /** client identifier */
  client_id: string;
  /** consensus state revision number */

  revision_number: Long;
  /** consensus state revision height */

  revision_height: Long;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */

  latest_height?: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */

export interface QueryConsensusStateResponse {
  /** consensus state associated with the client identifier at the given height */
  consensus_state: Any;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */

export interface QueryConsensusStateResponseSDKType {
  /** consensus state associated with the client identifier at the given height */
  consensus_state: AnySDKType;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */

export interface QueryConsensusStatesRequest {
  /** client identifier */
  client_id: string;
  /** pagination request */

  pagination?: PageRequest;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */

export interface QueryConsensusStatesRequestSDKType {
  /** client identifier */
  client_id: string;
  /** pagination request */

  pagination?: PageRequestSDKType;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */

export interface QueryConsensusStatesResponse {
  /** consensus states associated with the identifier */
  consensus_states: ConsensusStateWithHeight[];
  /** pagination response */

  pagination?: PageResponse;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */

export interface QueryConsensusStatesResponseSDKType {
  /** consensus states associated with the identifier */
  consensus_states: ConsensusStateWithHeightSDKType[];
  /** pagination response */

  pagination?: PageResponseSDKType;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */

export interface QueryClientStatusRequest {
  /** client unique identifier */
  client_id: string;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */

export interface QueryClientStatusRequestSDKType {
  /** client unique identifier */
  client_id: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */

export interface QueryClientStatusResponse {
  status: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */

export interface QueryClientStatusResponseSDKType {
  status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */

export interface QueryClientParamsRequest {}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */

export interface QueryClientParamsRequestSDKType {}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */

export interface QueryClientParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */

export interface QueryClientParamsResponseSDKType {
  /** params defines the parameters of the module. */
  params: ParamsSDKType;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */

export interface QueryUpgradedClientStateRequest {}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */

export interface QueryUpgradedClientStateRequestSDKType {}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */

export interface QueryUpgradedClientStateResponse {
  /** client state associated with the request identifier */
  upgraded_client_state: Any;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */

export interface QueryUpgradedClientStateResponseSDKType {
  /** client state associated with the request identifier */
  upgraded_client_state: AnySDKType;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */

export interface QueryUpgradedConsensusStateRequest {}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */

export interface QueryUpgradedConsensusStateRequestSDKType {}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */

export interface QueryUpgradedConsensusStateResponse {
  /** Consensus state associated with the request identifier */
  upgraded_consensus_state: Any;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */

export interface QueryUpgradedConsensusStateResponseSDKType {
  /** Consensus state associated with the request identifier */
  upgraded_consensus_state: AnySDKType;
}

function createBaseQueryClientStateRequest(): QueryClientStateRequest {
  return {
    client_id: ""
  };
}

export const QueryClientStateRequest = {
  encode(message: QueryClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClientStateRequest>): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    message.client_id = object.client_id ?? "";
    return message;
  }

};

function createBaseQueryClientStateResponse(): QueryClientStateResponse {
  return {
    client_state: undefined,
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryClientStateResponse = {
  encode(message: QueryClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_state = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClientStateResponse>): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryClientStatesRequest(): QueryClientStatesRequest {
  return {
    pagination: undefined
  };
}

export const QueryClientStatesRequest = {
  encode(message: QueryClientStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClientStatesRequest>): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClientStatesResponse(): QueryClientStatesResponse {
  return {
    client_states: [],
    pagination: undefined
  };
}

export const QueryClientStatesResponse = {
  encode(message: QueryClientStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.client_states) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_states.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClientStatesResponse>): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.client_states = object.client_states?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryConsensusStateRequest(): QueryConsensusStateRequest {
  return {
    client_id: "",
    revision_number: Long.UZERO,
    revision_height: Long.UZERO,
    latest_height: false
  };
}

export const QueryConsensusStateRequest = {
  encode(message: QueryConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    if (!message.revision_number.isZero()) {
      writer.uint32(16).uint64(message.revision_number);
    }

    if (!message.revision_height.isZero()) {
      writer.uint32(24).uint64(message.revision_height);
    }

    if (message.latest_height === true) {
      writer.uint32(32).bool(message.latest_height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.revision_number = (reader.uint64() as Long);
          break;

        case 3:
          message.revision_height = (reader.uint64() as Long);
          break;

        case 4:
          message.latest_height = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryConsensusStateRequest>): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    message.client_id = object.client_id ?? "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
    message.latest_height = object.latest_height ?? false;
    return message;
  }

};

function createBaseQueryConsensusStateResponse(): QueryConsensusStateResponse {
  return {
    consensus_state: undefined,
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryConsensusStateResponse = {
  encode(message: QueryConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof = reader.bytes();
          break;

        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryConsensusStateResponse>): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryConsensusStatesRequest(): QueryConsensusStatesRequest {
  return {
    client_id: "",
    pagination: undefined
  };
}

export const QueryConsensusStatesRequest = {
  encode(message: QueryConsensusStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
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

  fromPartial(object: DeepPartial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    message.client_id = object.client_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryConsensusStatesResponse(): QueryConsensusStatesResponse {
  return {
    consensus_states: [],
    pagination: undefined
  };
}

export const QueryConsensusStatesResponse = {
  encode(message: QueryConsensusStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consensus_states) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryClientStatusRequest(): QueryClientStatusRequest {
  return {
    client_id: ""
  };
}

export const QueryClientStatusRequest = {
  encode(message: QueryClientStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClientStatusRequest>): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    message.client_id = object.client_id ?? "";
    return message;
  }

};

function createBaseQueryClientStatusResponse(): QueryClientStatusResponse {
  return {
    status: ""
  };
}

export const QueryClientStatusResponse = {
  encode(message: QueryClientStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClientStatusResponse>): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    message.status = object.status ?? "";
    return message;
  }

};

function createBaseQueryClientParamsRequest(): QueryClientParamsRequest {
  return {};
}

export const QueryClientParamsRequest = {
  encode(_: QueryClientParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryClientParamsRequest>): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  }

};

function createBaseQueryClientParamsResponse(): QueryClientParamsResponse {
  return {
    params: undefined
  };
}

export const QueryClientParamsResponse = {
  encode(message: QueryClientParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryClientParamsResponse>): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryUpgradedClientStateRequest(): QueryUpgradedClientStateRequest {
  return {};
}

export const QueryUpgradedClientStateRequest = {
  encode(_: QueryUpgradedClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  }

};

function createBaseQueryUpgradedClientStateResponse(): QueryUpgradedClientStateResponse {
  return {
    upgraded_client_state: undefined
  };
}

export const QueryUpgradedClientStateResponse = {
  encode(message: QueryUpgradedClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgraded_client_state !== undefined) {
      Any.encode(message.upgraded_client_state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.upgraded_client_state = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
    return message;
  }

};

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {};
}

export const QueryUpgradedConsensusStateRequest = {
  encode(_: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  }

};

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgraded_consensus_state: undefined
  };
}

export const QueryUpgradedConsensusStateResponse = {
  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgraded_consensus_state !== undefined) {
      Any.encode(message.upgraded_consensus_state, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.upgraded_consensus_state = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgraded_consensus_state = object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null ? Any.fromPartial(object.upgraded_consensus_state) : undefined;
    return message;
  }

};