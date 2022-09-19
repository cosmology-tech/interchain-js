import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */

export interface MsgConnectionOpenInit {
  client_id: string;
  counterparty: Counterparty;
  version: Version;
  delay_period: Long;
  signer: string;
}
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */

export interface MsgConnectionOpenInitSDKType {
  client_id: string;
  counterparty: CounterpartySDKType;
  version: VersionSDKType;
  delay_period: Long;
  signer: string;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */

export interface MsgConnectionOpenInitResponse {}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */

export interface MsgConnectionOpenInitResponseSDKType {}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */

export interface MsgConnectionOpenTry {
  client_id: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the connection identifier of the previous connection in state INIT
   */

  previous_connection_id: string;
  client_state: Any;
  counterparty: Counterparty;
  delay_period: Long;
  counterparty_versions: Version[];
  proof_height: Height;
  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */

  proof_init: Uint8Array;
  /** proof of client state included in message */

  proof_client: Uint8Array;
  /** proof of client consensus state */

  proof_consensus: Uint8Array;
  consensus_height: Height;
  signer: string;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */

export interface MsgConnectionOpenTrySDKType {
  client_id: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the connection identifier of the previous connection in state INIT
   */

  previous_connection_id: string;
  client_state: AnySDKType;
  counterparty: CounterpartySDKType;
  delay_period: Long;
  counterparty_versions: VersionSDKType[];
  proof_height: HeightSDKType;
  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */

  proof_init: Uint8Array;
  /** proof of client state included in message */

  proof_client: Uint8Array;
  /** proof of client consensus state */

  proof_consensus: Uint8Array;
  consensus_height: HeightSDKType;
  signer: string;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */

export interface MsgConnectionOpenTryResponse {}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */

export interface MsgConnectionOpenTryResponseSDKType {}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */

export interface MsgConnectionOpenAck {
  connection_id: string;
  counterparty_connection_id: string;
  version: Version;
  client_state: Any;
  proof_height: Height;
  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */

  proof_try: Uint8Array;
  /** proof of client state included in message */

  proof_client: Uint8Array;
  /** proof of client consensus state */

  proof_consensus: Uint8Array;
  consensus_height: Height;
  signer: string;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */

export interface MsgConnectionOpenAckSDKType {
  connection_id: string;
  counterparty_connection_id: string;
  version: VersionSDKType;
  client_state: AnySDKType;
  proof_height: HeightSDKType;
  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */

  proof_try: Uint8Array;
  /** proof of client state included in message */

  proof_client: Uint8Array;
  /** proof of client consensus state */

  proof_consensus: Uint8Array;
  consensus_height: HeightSDKType;
  signer: string;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */

export interface MsgConnectionOpenAckResponse {}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */

export interface MsgConnectionOpenAckResponseSDKType {}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */

export interface MsgConnectionOpenConfirm {
  connection_id: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */

  proof_ack: Uint8Array;
  proof_height: Height;
  signer: string;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */

export interface MsgConnectionOpenConfirmSDKType {
  connection_id: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */

  proof_ack: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */

export interface MsgConnectionOpenConfirmResponse {}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */

export interface MsgConnectionOpenConfirmResponseSDKType {}

function createBaseMsgConnectionOpenInit(): MsgConnectionOpenInit {
  return {
    client_id: "",
    counterparty: undefined,
    version: undefined,
    delay_period: Long.UZERO,
    signer: ""
  };
}

export const MsgConnectionOpenInit = {
  encode(message: MsgConnectionOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }

    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (!message.delay_period.isZero()) {
      writer.uint32(32).uint64(message.delay_period);
    }

    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.delay_period = (reader.uint64() as Long);
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

  fromPartial(object: DeepPartial<MsgConnectionOpenInit>): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    message.client_id = object.client_id ?? "";
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgConnectionOpenInitResponse(): MsgConnectionOpenInitResponse {
  return {};
}

export const MsgConnectionOpenInitResponse = {
  encode(_: MsgConnectionOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenInitResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();

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

  fromPartial(_: DeepPartial<MsgConnectionOpenInitResponse>): MsgConnectionOpenInitResponse {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  }

};

function createBaseMsgConnectionOpenTry(): MsgConnectionOpenTry {
  return {
    client_id: "",
    previous_connection_id: "",
    client_state: undefined,
    counterparty: undefined,
    delay_period: Long.UZERO,
    counterparty_versions: [],
    proof_height: undefined,
    proof_init: new Uint8Array(),
    proof_client: new Uint8Array(),
    proof_consensus: new Uint8Array(),
    consensus_height: undefined,
    signer: ""
  };
}

export const MsgConnectionOpenTry = {
  encode(message: MsgConnectionOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    if (message.previous_connection_id !== "") {
      writer.uint32(18).string(message.previous_connection_id);
    }

    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(26).fork()).ldelim();
    }

    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }

    if (!message.delay_period.isZero()) {
      writer.uint32(40).uint64(message.delay_period);
    }

    for (const v of message.counterparty_versions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
    }

    if (message.proof_init.length !== 0) {
      writer.uint32(66).bytes(message.proof_init);
    }

    if (message.proof_client.length !== 0) {
      writer.uint32(74).bytes(message.proof_client);
    }

    if (message.proof_consensus.length !== 0) {
      writer.uint32(82).bytes(message.proof_consensus);
    }

    if (message.consensus_height !== undefined) {
      Height.encode(message.consensus_height, writer.uint32(90).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(98).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.previous_connection_id = reader.string();
          break;

        case 3:
          message.client_state = Any.decode(reader, reader.uint32());
          break;

        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;

        case 5:
          message.delay_period = (reader.uint64() as Long);
          break;

        case 6:
          message.counterparty_versions.push(Version.decode(reader, reader.uint32()));
          break;

        case 7:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.proof_init = reader.bytes();
          break;

        case 9:
          message.proof_client = reader.bytes();
          break;

        case 10:
          message.proof_consensus = reader.bytes();
          break;

        case 11:
          message.consensus_height = Height.decode(reader, reader.uint32());
          break;

        case 12:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgConnectionOpenTry>): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    message.client_id = object.client_id ?? "";
    message.previous_connection_id = object.previous_connection_id ?? "";
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
    message.counterparty_versions = object.counterparty_versions?.map(e => Version.fromPartial(e)) || [];
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.proof_init = object.proof_init ?? new Uint8Array();
    message.proof_client = object.proof_client ?? new Uint8Array();
    message.proof_consensus = object.proof_consensus ?? new Uint8Array();
    message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? Height.fromPartial(object.consensus_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgConnectionOpenTryResponse(): MsgConnectionOpenTryResponse {
  return {};
}

export const MsgConnectionOpenTryResponse = {
  encode(_: MsgConnectionOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenTryResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();

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

  fromPartial(_: DeepPartial<MsgConnectionOpenTryResponse>): MsgConnectionOpenTryResponse {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  }

};

function createBaseMsgConnectionOpenAck(): MsgConnectionOpenAck {
  return {
    connection_id: "",
    counterparty_connection_id: "",
    version: undefined,
    client_state: undefined,
    proof_height: undefined,
    proof_try: new Uint8Array(),
    proof_client: new Uint8Array(),
    proof_consensus: new Uint8Array(),
    consensus_height: undefined,
    signer: ""
  };
}

export const MsgConnectionOpenAck = {
  encode(message: MsgConnectionOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }

    if (message.counterparty_connection_id !== "") {
      writer.uint32(18).string(message.counterparty_connection_id);
    }

    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }

    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(34).fork()).ldelim();
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
    }

    if (message.proof_try.length !== 0) {
      writer.uint32(50).bytes(message.proof_try);
    }

    if (message.proof_client.length !== 0) {
      writer.uint32(58).bytes(message.proof_client);
    }

    if (message.proof_consensus.length !== 0) {
      writer.uint32(66).bytes(message.proof_consensus);
    }

    if (message.consensus_height !== undefined) {
      Height.encode(message.consensus_height, writer.uint32(74).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(82).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;

        case 2:
          message.counterparty_connection_id = reader.string();
          break;

        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;

        case 4:
          message.client_state = Any.decode(reader, reader.uint32());
          break;

        case 5:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;

        case 6:
          message.proof_try = reader.bytes();
          break;

        case 7:
          message.proof_client = reader.bytes();
          break;

        case 8:
          message.proof_consensus = reader.bytes();
          break;

        case 9:
          message.consensus_height = Height.decode(reader, reader.uint32());
          break;

        case 10:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgConnectionOpenAck>): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    message.connection_id = object.connection_id ?? "";
    message.counterparty_connection_id = object.counterparty_connection_id ?? "";
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.proof_try = object.proof_try ?? new Uint8Array();
    message.proof_client = object.proof_client ?? new Uint8Array();
    message.proof_consensus = object.proof_consensus ?? new Uint8Array();
    message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? Height.fromPartial(object.consensus_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgConnectionOpenAckResponse(): MsgConnectionOpenAckResponse {
  return {};
}

export const MsgConnectionOpenAckResponse = {
  encode(_: MsgConnectionOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenAckResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();

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

  fromPartial(_: DeepPartial<MsgConnectionOpenAckResponse>): MsgConnectionOpenAckResponse {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  }

};

function createBaseMsgConnectionOpenConfirm(): MsgConnectionOpenConfirm {
  return {
    connection_id: "",
    proof_ack: new Uint8Array(),
    proof_height: undefined,
    signer: ""
  };
}

export const MsgConnectionOpenConfirm = {
  encode(message: MsgConnectionOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }

    if (message.proof_ack.length !== 0) {
      writer.uint32(18).bytes(message.proof_ack);
    }

    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirm();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;

        case 2:
          message.proof_ack = reader.bytes();
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

  fromPartial(object: DeepPartial<MsgConnectionOpenConfirm>): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    message.connection_id = object.connection_id ?? "";
    message.proof_ack = object.proof_ack ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgConnectionOpenConfirmResponse(): MsgConnectionOpenConfirmResponse {
  return {};
}

export const MsgConnectionOpenConfirmResponse = {
  encode(_: MsgConnectionOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();

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

  fromPartial(_: DeepPartial<MsgConnectionOpenConfirmResponse>): MsgConnectionOpenConfirmResponse {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  }

};