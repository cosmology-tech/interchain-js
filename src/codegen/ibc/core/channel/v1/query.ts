import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelSDKType, IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import { Height, HeightSDKType, IdentifiedClientState, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */

export interface QueryChannelRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */

export interface QueryChannelRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */

export interface QueryChannelResponse {
  /** channel associated with the request identifiers */
  channel: Channel;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */

export interface QueryChannelResponseSDKType {
  /** channel associated with the request identifiers */
  channel: ChannelSDKType;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */

export interface QueryChannelsRequest {
  /** pagination request */
  pagination?: PageRequest;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */

export interface QueryChannelsRequestSDKType {
  /** pagination request */
  pagination?: PageRequestSDKType;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */

export interface QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannel[];
  /** pagination response */

  pagination?: PageResponse;
  /** query block height */

  height: Height;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */

export interface QueryChannelsResponseSDKType {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannelSDKType[];
  /** pagination response */

  pagination?: PageResponseSDKType;
  /** query block height */

  height: HeightSDKType;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */

export interface QueryConnectionChannelsRequest {
  /** connection unique identifier */
  connection: string;
  /** pagination request */

  pagination?: PageRequest;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */

export interface QueryConnectionChannelsRequestSDKType {
  /** connection unique identifier */
  connection: string;
  /** pagination request */

  pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */

export interface QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannel[];
  /** pagination response */

  pagination?: PageResponse;
  /** query block height */

  height: Height;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */

export interface QueryConnectionChannelsResponseSDKType {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannelSDKType[];
  /** pagination response */

  pagination?: PageResponseSDKType;
  /** query block height */

  height: HeightSDKType;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */

export interface QueryChannelClientStateRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */

export interface QueryChannelClientStateRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */

export interface QueryChannelClientStateResponse {
  /** client state associated with the channel */
  identified_client_state: IdentifiedClientState;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */

export interface QueryChannelClientStateResponseSDKType {
  /** client state associated with the channel */
  identified_client_state: IdentifiedClientStateSDKType;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */

export interface QueryChannelConsensusStateRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** revision number of the consensus state */

  revision_number: Long;
  /** revision height of the consensus state */

  revision_height: Long;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */

export interface QueryChannelConsensusStateRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** revision number of the consensus state */

  revision_number: Long;
  /** revision height of the consensus state */

  revision_height: Long;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */

export interface QueryChannelConsensusStateResponse {
  /** consensus state associated with the channel */
  consensus_state: Any;
  /** client ID associated with the consensus state */

  client_id: string;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */

export interface QueryChannelConsensusStateResponseSDKType {
  /** consensus state associated with the channel */
  consensus_state: AnySDKType;
  /** client ID associated with the consensus state */

  client_id: string;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */

export interface QueryPacketCommitmentRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** packet sequence */

  sequence: Long;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */

export interface QueryPacketCommitmentRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** packet sequence */

  sequence: Long;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */

export interface QueryPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */

export interface QueryPacketCommitmentResponseSDKType {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

export interface QueryPacketCommitmentsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** pagination request */

  pagination?: PageRequest;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

export interface QueryPacketCommitmentsRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** pagination request */

  pagination?: PageRequestSDKType;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

export interface QueryPacketCommitmentsResponse {
  commitments: PacketState[];
  /** pagination response */

  pagination?: PageResponse;
  /** query block height */

  height: Height;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

export interface QueryPacketCommitmentsResponseSDKType {
  commitments: PacketStateSDKType[];
  /** pagination response */

  pagination?: PageResponseSDKType;
  /** query block height */

  height: HeightSDKType;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */

export interface QueryPacketReceiptRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** packet sequence */

  sequence: Long;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */

export interface QueryPacketReceiptRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** packet sequence */

  sequence: Long;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */

export interface QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */

export interface QueryPacketReceiptResponseSDKType {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */

export interface QueryPacketAcknowledgementRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** packet sequence */

  sequence: Long;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */

export interface QueryPacketAcknowledgementRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** packet sequence */

  sequence: Long;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */

export interface QueryPacketAcknowledgementResponse {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */

export interface QueryPacketAcknowledgementResponseSDKType {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

export interface QueryPacketAcknowledgementsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** pagination request */

  pagination?: PageRequest;
  /** list of packet sequences */

  packet_commitment_sequences?: Long[];
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */

export interface QueryPacketAcknowledgementsRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** pagination request */

  pagination?: PageRequestSDKType;
  /** list of packet sequences */

  packet_commitment_sequences?: Long[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */

export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];
  /** pagination response */

  pagination?: PageResponse;
  /** query block height */

  height: Height;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */

export interface QueryPacketAcknowledgementsResponseSDKType {
  acknowledgements: PacketStateSDKType[];
  /** pagination response */

  pagination?: PageResponseSDKType;
  /** query block height */

  height: HeightSDKType;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */

export interface QueryUnreceivedPacketsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** list of packet sequences */

  packet_commitment_sequences: Long[];
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */

export interface QueryUnreceivedPacketsRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** list of packet sequences */

  packet_commitment_sequences: Long[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */

export interface QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences: Long[];
  /** query block height */

  height: Height;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */

export interface QueryUnreceivedPacketsResponseSDKType {
  /** list of unreceived packet sequences */
  sequences: Long[];
  /** query block height */

  height: HeightSDKType;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */

export interface QueryUnreceivedAcksRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** list of acknowledgement sequences */

  packet_ack_sequences: Long[];
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */

export interface QueryUnreceivedAcksRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
  /** list of acknowledgement sequences */

  packet_ack_sequences: Long[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */

export interface QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences: Long[];
  /** query block height */

  height: Height;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */

export interface QueryUnreceivedAcksResponseSDKType {
  /** list of unreceived acknowledgement sequences */
  sequences: Long[];
  /** query block height */

  height: HeightSDKType;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */

export interface QueryNextSequenceReceiveRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */

export interface QueryNextSequenceReceiveRequestSDKType {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */

  channel_id: string;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */

export interface QueryNextSequenceReceiveResponse {
  /** next sequence receive number */
  next_sequence_receive: Long;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: Height;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */

export interface QueryNextSequenceReceiveResponseSDKType {
  /** next sequence receive number */
  next_sequence_receive: Long;
  /** merkle proof of existence */

  proof: Uint8Array;
  /** height at which the proof was retrieved */

  proof_height: HeightSDKType;
}

function createBaseQueryChannelRequest(): QueryChannelRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}

export const QueryChannelRequest = {
  encode(message: QueryChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryChannelRequest>): QueryChannelRequest {
    const message = createBaseQueryChannelRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  }

};

function createBaseQueryChannelResponse(): QueryChannelResponse {
  return {
    channel: undefined,
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryChannelResponse = {
  encode(message: QueryChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channel = Channel.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<QueryChannelResponse>): QueryChannelResponse {
    const message = createBaseQueryChannelResponse();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryChannelsRequest(): QueryChannelsRequest {
  return {
    pagination: undefined
  };
}

export const QueryChannelsRequest = {
  encode(message: QueryChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsRequest();

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

  fromPartial(object: DeepPartial<QueryChannelsRequest>): QueryChannelsRequest {
    const message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryChannelsResponse(): QueryChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryChannelsResponse = {
  encode(message: QueryChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryChannelsResponse>): QueryChannelsResponse {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  }

};

function createBaseQueryConnectionChannelsRequest(): QueryConnectionChannelsRequest {
  return {
    connection: "",
    pagination: undefined
  };
}

export const QueryConnectionChannelsRequest = {
  encode(message: QueryConnectionChannelsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
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

  fromPartial(object: DeepPartial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest {
    const message = createBaseQueryConnectionChannelsRequest();
    message.connection = object.connection ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryConnectionChannelsResponse(): QueryConnectionChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryConnectionChannelsResponse = {
  encode(message: QueryConnectionChannelsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionChannelsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  }

};

function createBaseQueryChannelClientStateRequest(): QueryChannelClientStateRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}

export const QueryChannelClientStateRequest = {
  encode(message: QueryChannelClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest {
    const message = createBaseQueryChannelClientStateRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  }

};

function createBaseQueryChannelClientStateResponse(): QueryChannelClientStateResponse {
  return {
    identified_client_state: undefined,
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryChannelClientStateResponse = {
  encode(message: QueryChannelClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identified_client_state !== undefined) {
      IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelClientStateResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.identified_client_state = IdentifiedClientState.decode(reader, reader.uint32());
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

  fromPartial(object: DeepPartial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse {
    const message = createBaseQueryChannelClientStateResponse();
    message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryChannelConsensusStateRequest(): QueryChannelConsensusStateRequest {
  return {
    port_id: "",
    channel_id: "",
    revision_number: Long.UZERO,
    revision_height: Long.UZERO
  };
}

export const QueryChannelConsensusStateRequest = {
  encode(message: QueryChannelConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (!message.revision_number.isZero()) {
      writer.uint32(24).uint64(message.revision_number);
    }

    if (!message.revision_height.isZero()) {
      writer.uint32(32).uint64(message.revision_height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.revision_number = (reader.uint64() as Long);
          break;

        case 4:
          message.revision_height = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest {
    const message = createBaseQueryChannelConsensusStateRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
    return message;
  }

};

function createBaseQueryChannelConsensusStateResponse(): QueryChannelConsensusStateResponse {
  return {
    consensus_state: undefined,
    client_id: "",
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryChannelConsensusStateResponse = {
  encode(message: QueryChannelConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }

    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }

    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChannelConsensusStateResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.client_id = reader.string();
          break;

        case 3:
          message.proof = reader.bytes();
          break;

        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse {
    const message = createBaseQueryChannelConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.client_id = object.client_id ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryPacketCommitmentRequest(): QueryPacketCommitmentRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: Long.UZERO
  };
}

export const QueryPacketCommitmentRequest = {
  encode(message: QueryPacketCommitmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPacketCommitmentResponse(): QueryPacketCommitmentResponse {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryPacketCommitmentResponse = {
  encode(message: QueryPacketCommitmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
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

  fromPartial(object: DeepPartial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryPacketCommitmentsRequest(): QueryPacketCommitmentsRequest {
  return {
    port_id: "",
    channel_id: "",
    pagination: undefined
  };
}

export const QueryPacketCommitmentsRequest = {
  encode(message: QueryPacketCommitmentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryPacketCommitmentsResponse(): QueryPacketCommitmentsResponse {
  return {
    commitments: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryPacketCommitmentsResponse = {
  encode(message: QueryPacketCommitmentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketCommitmentsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  }

};

function createBaseQueryPacketReceiptRequest(): QueryPacketReceiptRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: Long.UZERO
  };
}

export const QueryPacketReceiptRequest = {
  encode(message: QueryPacketReceiptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPacketReceiptResponse(): QueryPacketReceiptResponse {
  return {
    received: false,
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryPacketReceiptResponse = {
  encode(message: QueryPacketReceiptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }

    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketReceiptResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;

        case 3:
          message.proof = reader.bytes();
          break;

        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryPacketAcknowledgementRequest(): QueryPacketAcknowledgementRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: Long.UZERO
  };
}

export const QueryPacketAcknowledgementRequest = {
  encode(message: QueryPacketAcknowledgementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(24).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseQueryPacketAcknowledgementResponse(): QueryPacketAcknowledgementResponse {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryPacketAcknowledgementResponse = {
  encode(message: QueryPacketAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
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

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};

function createBaseQueryPacketAcknowledgementsRequest(): QueryPacketAcknowledgementsRequest {
  return {
    port_id: "",
    channel_id: "",
    pagination: undefined,
    packet_commitment_sequences: []
  };
}

export const QueryPacketAcknowledgementsRequest = {
  encode(message: QueryPacketAcknowledgementsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    writer.uint32(34).fork();

    for (const v of message.packet_commitment_sequences) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packet_commitment_sequences.push((reader.uint64() as Long));
            }
          } else {
            message.packet_commitment_sequences.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseQueryPacketAcknowledgementsResponse(): QueryPacketAcknowledgementsResponse {
  return {
    acknowledgements: [],
    pagination: undefined,
    height: undefined
  };
}

export const QueryPacketAcknowledgementsResponse = {
  encode(message: QueryPacketAcknowledgementsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  }

};

function createBaseQueryUnreceivedPacketsRequest(): QueryUnreceivedPacketsRequest {
  return {
    port_id: "",
    channel_id: "",
    packet_commitment_sequences: []
  };
}

export const QueryUnreceivedPacketsRequest = {
  encode(message: QueryUnreceivedPacketsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    writer.uint32(26).fork();

    for (const v of message.packet_commitment_sequences) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packet_commitment_sequences.push((reader.uint64() as Long));
            }
          } else {
            message.packet_commitment_sequences.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseQueryUnreceivedPacketsResponse(): QueryUnreceivedPacketsResponse {
  return {
    sequences: [],
    height: undefined
  };
}

export const QueryUnreceivedPacketsResponse = {
  encode(message: QueryUnreceivedPacketsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.sequences) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedPacketsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push((reader.uint64() as Long));
            }
          } else {
            message.sequences.push((reader.uint64() as Long));
          }

          break;

        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => Long.fromValue(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  }

};

function createBaseQueryUnreceivedAcksRequest(): QueryUnreceivedAcksRequest {
  return {
    port_id: "",
    channel_id: "",
    packet_ack_sequences: []
  };
}

export const QueryUnreceivedAcksRequest = {
  encode(message: QueryUnreceivedAcksRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    writer.uint32(26).fork();

    for (const v of message.packet_ack_sequences) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.packet_ack_sequences.push((reader.uint64() as Long));
            }
          } else {
            message.packet_ack_sequences.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.packet_ack_sequences = object.packet_ack_sequences?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseQueryUnreceivedAcksResponse(): QueryUnreceivedAcksResponse {
  return {
    sequences: [],
    height: undefined
  };
}

export const QueryUnreceivedAcksResponse = {
  encode(message: QueryUnreceivedAcksResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.sequences) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnreceivedAcksResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.sequences.push((reader.uint64() as Long));
            }
          } else {
            message.sequences.push((reader.uint64() as Long));
          }

          break;

        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => Long.fromValue(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  }

};

function createBaseQueryNextSequenceReceiveRequest(): QueryNextSequenceReceiveRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}

export const QueryNextSequenceReceiveRequest = {
  encode(message: QueryNextSequenceReceiveRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest {
    const message = createBaseQueryNextSequenceReceiveRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  }

};

function createBaseQueryNextSequenceReceiveResponse(): QueryNextSequenceReceiveResponse {
  return {
    next_sequence_receive: Long.UZERO,
    proof: new Uint8Array(),
    proof_height: undefined
  };
}

export const QueryNextSequenceReceiveResponse = {
  encode(message: QueryNextSequenceReceiveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.next_sequence_receive.isZero()) {
      writer.uint32(8).uint64(message.next_sequence_receive);
    }

    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextSequenceReceiveResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.next_sequence_receive = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse {
    const message = createBaseQueryNextSequenceReceiveResponse();
    message.next_sequence_receive = object.next_sequence_receive !== undefined && object.next_sequence_receive !== null ? Long.fromValue(object.next_sequence_receive) : Long.UZERO;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  }

};