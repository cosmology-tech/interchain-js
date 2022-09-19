import { Channel, ChannelSDKType, Packet, PacketSDKType } from "./channel";
import { Height, HeightSDKType } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */

export interface MsgChannelOpenInit {
  port_id: string;
  channel: Channel;
  signer: string;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */

export interface MsgChannelOpenInitSDKType {
  port_id: string;
  channel: ChannelSDKType;
  signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */

export interface MsgChannelOpenInitResponse {}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */

export interface MsgChannelOpenInitResponseSDKType {}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */

export interface MsgChannelOpenTry {
  port_id: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */

  previous_channel_id: string;
  channel: Channel;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height: Height;
  signer: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */

export interface MsgChannelOpenTrySDKType {
  port_id: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */

  previous_channel_id: string;
  channel: ChannelSDKType;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */

export interface MsgChannelOpenTryResponse {}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */

export interface MsgChannelOpenTryResponseSDKType {}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */

export interface MsgChannelOpenAck {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height: Height;
  signer: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */

export interface MsgChannelOpenAckSDKType {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */

export interface MsgChannelOpenAckResponse {}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */

export interface MsgChannelOpenAckResponseSDKType {}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */

export interface MsgChannelOpenConfirm {
  port_id: string;
  channel_id: string;
  proof_ack: Uint8Array;
  proof_height: Height;
  signer: string;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */

export interface MsgChannelOpenConfirmSDKType {
  port_id: string;
  channel_id: string;
  proof_ack: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */

export interface MsgChannelOpenConfirmResponse {}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */

export interface MsgChannelOpenConfirmResponseSDKType {}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */

export interface MsgChannelCloseInit {
  port_id: string;
  channel_id: string;
  signer: string;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */

export interface MsgChannelCloseInitSDKType {
  port_id: string;
  channel_id: string;
  signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */

export interface MsgChannelCloseInitResponse {}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */

export interface MsgChannelCloseInitResponseSDKType {}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */

export interface MsgChannelCloseConfirm {
  port_id: string;
  channel_id: string;
  proof_init: Uint8Array;
  proof_height: Height;
  signer: string;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */

export interface MsgChannelCloseConfirmSDKType {
  port_id: string;
  channel_id: string;
  proof_init: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */

export interface MsgChannelCloseConfirmResponse {}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */

export interface MsgChannelCloseConfirmResponseSDKType {}
/** MsgRecvPacket receives incoming IBC packet */

export interface MsgRecvPacket {
  packet: Packet;
  proof_commitment: Uint8Array;
  proof_height: Height;
  signer: string;
}
/** MsgRecvPacket receives incoming IBC packet */

export interface MsgRecvPacketSDKType {
  packet: PacketSDKType;
  proof_commitment: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */

export interface MsgRecvPacketResponse {}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */

export interface MsgRecvPacketResponseSDKType {}
/** MsgTimeout receives timed-out packet */

export interface MsgTimeout {
  packet: Packet;
  proof_unreceived: Uint8Array;
  proof_height: Height;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeout receives timed-out packet */

export interface MsgTimeoutSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */

export interface MsgTimeoutResponse {}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */

export interface MsgTimeoutResponseSDKType {}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */

export interface MsgTimeoutOnClose {
  packet: Packet;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height: Height;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */

export interface MsgTimeoutOnCloseSDKType {
  packet: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height: HeightSDKType;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */

export interface MsgTimeoutOnCloseResponse {}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */

export interface MsgTimeoutOnCloseResponseSDKType {}
/** MsgAcknowledgement receives incoming IBC acknowledgement */

export interface MsgAcknowledgement {
  packet: Packet;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height: Height;
  signer: string;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */

export interface MsgAcknowledgementSDKType {
  packet: PacketSDKType;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */

export interface MsgAcknowledgementResponse {}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */

export interface MsgAcknowledgementResponseSDKType {}

function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return {
    port_id: "",
    channel: undefined,
    signer: ""
  };
}

export const MsgChannelOpenInit = {
  encode(message: MsgChannelOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.port_id = object.port_id ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return {};
}

export const MsgChannelOpenInitResponse = {
  encode(_: MsgChannelOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();

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

  fromPartial(_: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    return message;
  }

};

function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    port_id: "",
    previous_channel_id: "",
    channel: undefined,
    counterparty_version: "",
    proof_init: new Uint8Array(),
    proof_height: undefined,
    signer: ""
  };
}

export const MsgChannelOpenTry = {
  encode(message: MsgChannelOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.previous_channel_id !== "") {
      writer.uint32(18).string(message.previous_channel_id);
    }

    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }

    if (message.counterparty_version !== "") {
      writer.uint32(34).string(message.counterparty_version);
    }

    if (message.proof_init.length !== 0) {
      writer.uint32(42).bytes(message.proof_init);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.previous_channel_id = reader.string();
          break;

        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterparty_version = reader.string();
          break;

        case 5:
          message.proof_init = reader.bytes();
          break;

        case 6:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.port_id = object.port_id ?? "";
    message.previous_channel_id = object.previous_channel_id ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.counterparty_version = object.counterparty_version ?? "";
    message.proof_init = object.proof_init ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {};
}

export const MsgChannelOpenTryResponse = {
  encode(_: MsgChannelOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();

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

  fromPartial(_: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    return message;
  }

};

function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    port_id: "",
    channel_id: "",
    counterparty_channel_id: "",
    counterparty_version: "",
    proof_try: new Uint8Array(),
    proof_height: undefined,
    signer: ""
  };
}

export const MsgChannelOpenAck = {
  encode(message: MsgChannelOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (message.counterparty_channel_id !== "") {
      writer.uint32(26).string(message.counterparty_channel_id);
    }

    if (message.counterparty_version !== "") {
      writer.uint32(34).string(message.counterparty_version);
    }

    if (message.proof_try.length !== 0) {
      writer.uint32(42).bytes(message.proof_try);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();

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
          message.counterparty_channel_id = reader.string();
          break;

        case 4:
          message.counterparty_version = reader.string();
          break;

        case 5:
          message.proof_try = reader.bytes();
          break;

        case 6:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.counterparty_channel_id = object.counterparty_channel_id ?? "";
    message.counterparty_version = object.counterparty_version ?? "";
    message.proof_try = object.proof_try ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}

export const MsgChannelOpenAckResponse = {
  encode(_: MsgChannelOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();

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

  fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  }

};

function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return {
    port_id: "",
    channel_id: "",
    proof_ack: new Uint8Array(),
    proof_height: undefined,
    signer: ""
  };
}

export const MsgChannelOpenConfirm = {
  encode(message: MsgChannelOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (message.proof_ack.length !== 0) {
      writer.uint32(26).bytes(message.proof_ack);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();

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
          message.proof_ack = reader.bytes();
          break;

        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.proof_ack = object.proof_ack ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}

export const MsgChannelOpenConfirmResponse = {
  encode(_: MsgChannelOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();

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

  fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  }

};

function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return {
    port_id: "",
    channel_id: "",
    signer: ""
  };
}

export const MsgChannelCloseInit = {
  encode(message: MsgChannelCloseInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();

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
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}

export const MsgChannelCloseInitResponse = {
  encode(_: MsgChannelCloseInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();

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

  fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  }

};

function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    port_id: "",
    channel_id: "",
    proof_init: new Uint8Array(),
    proof_height: undefined,
    signer: ""
  };
}

export const MsgChannelCloseConfirm = {
  encode(message: MsgChannelCloseConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }

    if (message.proof_init.length !== 0) {
      writer.uint32(26).bytes(message.proof_init);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();

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
          message.proof_init = reader.bytes();
          break;

        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.proof_init = object.proof_init ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}

export const MsgChannelCloseConfirmResponse = {
  encode(_: MsgChannelCloseConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();

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

  fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  }

};

function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: undefined,
    proof_commitment: new Uint8Array(),
    proof_height: undefined,
    signer: ""
  };
}

export const MsgRecvPacket = {
  encode(message: MsgRecvPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof_commitment.length !== 0) {
      writer.uint32(18).bytes(message.proof_commitment);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof_commitment = reader.bytes();
          break;

        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proof_commitment = object.proof_commitment ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {};
}

export const MsgRecvPacketResponse = {
  encode(_: MsgRecvPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();

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

  fromPartial(_: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    return message;
  }

};

function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: undefined,
    proof_unreceived: new Uint8Array(),
    proof_height: undefined,
    next_sequence_recv: Long.UZERO,
    signer: ""
  };
}

export const MsgTimeout = {
  encode(message: MsgTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof_unreceived.length !== 0) {
      writer.uint32(18).bytes(message.proof_unreceived);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    if (!message.next_sequence_recv.isZero()) {
      writer.uint32(32).uint64(message.next_sequence_recv);
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof_unreceived = reader.bytes();
          break;

        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 4:
          message.next_sequence_recv = (reader.uint64() as Long);
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? Long.fromValue(object.next_sequence_recv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {};
}

export const MsgTimeoutResponse = {
  encode(_: MsgTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();

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

  fromPartial(_: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    return message;
  }

};

function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: undefined,
    proof_unreceived: new Uint8Array(),
    proof_close: new Uint8Array(),
    proof_height: undefined,
    next_sequence_recv: Long.UZERO,
    signer: ""
  };
}

export const MsgTimeoutOnClose = {
  encode(message: MsgTimeoutOnClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.proof_unreceived.length !== 0) {
      writer.uint32(18).bytes(message.proof_unreceived);
    }

    if (message.proof_close.length !== 0) {
      writer.uint32(26).bytes(message.proof_close);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }

    if (!message.next_sequence_recv.isZero()) {
      writer.uint32(40).uint64(message.next_sequence_recv);
    }

    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.proof_unreceived = reader.bytes();
          break;

        case 3:
          message.proof_close = reader.bytes();
          break;

        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.next_sequence_recv = (reader.uint64() as Long);
          break;

        case 6:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
    message.proof_close = object.proof_close ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? Long.fromValue(object.next_sequence_recv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {};
}

export const MsgTimeoutOnCloseResponse = {
  encode(_: MsgTimeoutOnCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();

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

  fromPartial(_: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    return message;
  }

};

function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: undefined,
    acknowledgement: new Uint8Array(),
    proof_acked: new Uint8Array(),
    proof_height: undefined,
    signer: ""
  };
}

export const MsgAcknowledgement = {
  encode(message: MsgAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }

    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }

    if (message.proof_acked.length !== 0) {
      writer.uint32(26).bytes(message.proof_acked);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;

        case 2:
          message.acknowledgement = reader.bytes();
          break;

        case 3:
          message.proof_acked = reader.bytes();
          break;

        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof_acked = object.proof_acked ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {};
}

export const MsgAcknowledgementResponse = {
  encode(_: MsgAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();

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

  fromPartial(_: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    return message;
  }

};