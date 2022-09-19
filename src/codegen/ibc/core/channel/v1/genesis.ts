import { IdentifiedChannel, IdentifiedChannelSDKType, PacketState, PacketStateSDKType } from "./channel";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the ibc channel submodule's genesis state. */

export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  send_sequences: PacketSequence[];
  recv_sequences: PacketSequence[];
  ack_sequences: PacketSequence[];
  /** the sequence for the next generated channel identifier */

  next_channel_sequence: Long;
}
/** GenesisState defines the ibc channel submodule's genesis state. */

export interface GenesisStateSDKType {
  channels: IdentifiedChannelSDKType[];
  acknowledgements: PacketStateSDKType[];
  commitments: PacketStateSDKType[];
  receipts: PacketStateSDKType[];
  send_sequences: PacketSequenceSDKType[];
  recv_sequences: PacketSequenceSDKType[];
  ack_sequences: PacketSequenceSDKType[];
  /** the sequence for the next generated channel identifier */

  next_channel_sequence: Long;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */

export interface PacketSequence {
  port_id: string;
  channel_id: string;
  sequence: Long;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */

export interface PacketSequenceSDKType {
  port_id: string;
  channel_id: string;
  sequence: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    send_sequences: [],
    recv_sequences: [],
    ack_sequences: [],
    next_channel_sequence: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.send_sequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.recv_sequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.ack_sequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.next_channel_sequence.isZero()) {
      writer.uint32(64).uint64(message.next_channel_sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;

        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;

        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;

        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;

        case 5:
          message.send_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;

        case 6:
          message.recv_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;

        case 7:
          message.ack_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;

        case 8:
          message.next_channel_sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
    message.send_sequences = object.send_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.recv_sequences = object.recv_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.ack_sequences = object.ack_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.next_channel_sequence = object.next_channel_sequence !== undefined && object.next_channel_sequence !== null ? Long.fromValue(object.next_channel_sequence) : Long.UZERO;
    return message;
  }

};

function createBasePacketSequence(): PacketSequence {
  return {
    port_id: "",
    channel_id: "",
    sequence: Long.UZERO
  };
}

export const PacketSequence = {
  encode(message: PacketSequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();

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

  fromPartial(object: DeepPartial<PacketSequence>): PacketSequence {
    const message = createBasePacketSequence();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};