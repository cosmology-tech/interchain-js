import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

export interface CommitInfo {
  version: Long;
  store_infos: StoreInfo[];
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */

export interface CommitInfoSDKType {
  version: Long;
  store_infos: StoreInfoSDKType[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */

export interface StoreInfo {
  name: string;
  commit_id: CommitID;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */

export interface StoreInfoSDKType {
  name: string;
  commit_id: CommitIDSDKType;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */

export interface CommitID {
  version: Long;
  hash: Uint8Array;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */

export interface CommitIDSDKType {
  version: Long;
  hash: Uint8Array;
}

function createBaseCommitInfo(): CommitInfo {
  return {
    version: Long.ZERO,
    store_infos: []
  };
}

export const CommitInfo = {
  encode(message: CommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }

    for (const v of message.store_infos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = (reader.int64() as Long);
          break;

        case 2:
          message.store_infos.push(StoreInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = createBaseCommitInfo();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.store_infos = object.store_infos?.map(e => StoreInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseStoreInfo(): StoreInfo {
  return {
    name: "",
    commit_id: undefined
  };
}

export const StoreInfo = {
  encode(message: StoreInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.commit_id !== undefined) {
      CommitID.encode(message.commit_id, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.commit_id = CommitID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StoreInfo>): StoreInfo {
    const message = createBaseStoreInfo();
    message.name = object.name ?? "";
    message.commit_id = object.commit_id !== undefined && object.commit_id !== null ? CommitID.fromPartial(object.commit_id) : undefined;
    return message;
  }

};

function createBaseCommitID(): CommitID {
  return {
    version: Long.ZERO,
    hash: new Uint8Array()
  };
}

export const CommitID = {
  encode(message: CommitID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.version.isZero()) {
      writer.uint32(8).int64(message.version);
    }

    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = (reader.int64() as Long);
          break;

        case 2:
          message.hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommitID>): CommitID {
    const message = createBaseCommitID();
    message.version = object.version !== undefined && object.version !== null ? Long.fromValue(object.version) : Long.ZERO;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  }

};