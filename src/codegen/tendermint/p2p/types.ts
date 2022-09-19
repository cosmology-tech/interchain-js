import { Timestamp } from "../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
export interface ProtocolVersion {
  p2p: Long;
  block: Long;
  app: Long;
}
export interface ProtocolVersionSDKType {
  p2p: Long;
  block: Long;
  app: Long;
}
export interface NodeInfo {
  protocol_version: ProtocolVersion;
  node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: NodeInfoOther;
}
export interface NodeInfoSDKType {
  protocol_version: ProtocolVersionSDKType;
  node_id: string;
  listen_addr: string;
  network: string;
  version: string;
  channels: Uint8Array;
  moniker: string;
  other: NodeInfoOtherSDKType;
}
export interface NodeInfoOther {
  tx_index: string;
  rpc_address: string;
}
export interface NodeInfoOtherSDKType {
  tx_index: string;
  rpc_address: string;
}
export interface PeerInfo {
  id: string;
  address_info: PeerAddressInfo[];
  last_connected: Date;
}
export interface PeerInfoSDKType {
  id: string;
  address_info: PeerAddressInfoSDKType[];
  last_connected: Date;
}
export interface PeerAddressInfo {
  address: string;
  last_dial_success: Date;
  last_dial_failure: Date;
  dial_failures: number;
}
export interface PeerAddressInfoSDKType {
  address: string;
  last_dial_success: Date;
  last_dial_failure: Date;
  dial_failures: number;
}

function createBaseProtocolVersion(): ProtocolVersion {
  return {
    p2p: Long.UZERO,
    block: Long.UZERO,
    app: Long.UZERO
  };
}

export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.p2p.isZero()) {
      writer.uint32(8).uint64(message.p2p);
    }

    if (!message.block.isZero()) {
      writer.uint32(16).uint64(message.block);
    }

    if (!message.app.isZero()) {
      writer.uint32(24).uint64(message.app);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.p2p = (reader.uint64() as Long);
          break;

        case 2:
          message.block = (reader.uint64() as Long);
          break;

        case 3:
          message.app = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.p2p = object.p2p !== undefined && object.p2p !== null ? Long.fromValue(object.p2p) : Long.UZERO;
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
    return message;
  }

};

function createBaseNodeInfo(): NodeInfo {
  return {
    protocol_version: undefined,
    node_id: "",
    listen_addr: "",
    network: "",
    version: "",
    channels: new Uint8Array(),
    moniker: "",
    other: undefined
  };
}

export const NodeInfo = {
  encode(message: NodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol_version !== undefined) {
      ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
    }

    if (message.node_id !== "") {
      writer.uint32(18).string(message.node_id);
    }

    if (message.listen_addr !== "") {
      writer.uint32(26).string(message.listen_addr);
    }

    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }

    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }

    if (message.channels.length !== 0) {
      writer.uint32(50).bytes(message.channels);
    }

    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }

    if (message.other !== undefined) {
      NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
          break;

        case 2:
          message.node_id = reader.string();
          break;

        case 3:
          message.listen_addr = reader.string();
          break;

        case 4:
          message.network = reader.string();
          break;

        case 5:
          message.version = reader.string();
          break;

        case 6:
          message.channels = reader.bytes();
          break;

        case 7:
          message.moniker = reader.string();
          break;

        case 8:
          message.other = NodeInfoOther.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NodeInfo>): NodeInfo {
    const message = createBaseNodeInfo();
    message.protocol_version = object.protocol_version !== undefined && object.protocol_version !== null ? ProtocolVersion.fromPartial(object.protocol_version) : undefined;
    message.node_id = object.node_id ?? "";
    message.listen_addr = object.listen_addr ?? "";
    message.network = object.network ?? "";
    message.version = object.version ?? "";
    message.channels = object.channels ?? new Uint8Array();
    message.moniker = object.moniker ?? "";
    message.other = object.other !== undefined && object.other !== null ? NodeInfoOther.fromPartial(object.other) : undefined;
    return message;
  }

};

function createBaseNodeInfoOther(): NodeInfoOther {
  return {
    tx_index: "",
    rpc_address: ""
  };
}

export const NodeInfoOther = {
  encode(message: NodeInfoOther, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx_index !== "") {
      writer.uint32(10).string(message.tx_index);
    }

    if (message.rpc_address !== "") {
      writer.uint32(18).string(message.rpc_address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeInfoOther {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeInfoOther();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx_index = reader.string();
          break;

        case 2:
          message.rpc_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<NodeInfoOther>): NodeInfoOther {
    const message = createBaseNodeInfoOther();
    message.tx_index = object.tx_index ?? "";
    message.rpc_address = object.rpc_address ?? "";
    return message;
  }

};

function createBasePeerInfo(): PeerInfo {
  return {
    id: "",
    address_info: [],
    last_connected: undefined
  };
}

export const PeerInfo = {
  encode(message: PeerInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    for (const v of message.address_info) {
      PeerAddressInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.last_connected !== undefined) {
      Timestamp.encode(toTimestamp(message.last_connected), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.address_info.push(PeerAddressInfo.decode(reader, reader.uint32()));
          break;

        case 3:
          message.last_connected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PeerInfo>): PeerInfo {
    const message = createBasePeerInfo();
    message.id = object.id ?? "";
    message.address_info = object.address_info?.map(e => PeerAddressInfo.fromPartial(e)) || [];
    message.last_connected = object.last_connected ?? undefined;
    return message;
  }

};

function createBasePeerAddressInfo(): PeerAddressInfo {
  return {
    address: "",
    last_dial_success: undefined,
    last_dial_failure: undefined,
    dial_failures: 0
  };
}

export const PeerAddressInfo = {
  encode(message: PeerAddressInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.last_dial_success !== undefined) {
      Timestamp.encode(toTimestamp(message.last_dial_success), writer.uint32(18).fork()).ldelim();
    }

    if (message.last_dial_failure !== undefined) {
      Timestamp.encode(toTimestamp(message.last_dial_failure), writer.uint32(26).fork()).ldelim();
    }

    if (message.dial_failures !== 0) {
      writer.uint32(32).uint32(message.dial_failures);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeerAddressInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeerAddressInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.last_dial_success = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.last_dial_failure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.dial_failures = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PeerAddressInfo>): PeerAddressInfo {
    const message = createBasePeerAddressInfo();
    message.address = object.address ?? "";
    message.last_dial_success = object.last_dial_success ?? undefined;
    message.last_dial_failure = object.last_dial_failure ?? undefined;
    message.dial_failures = object.dial_failures ?? 0;
    return message;
  }

};