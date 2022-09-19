import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

export interface BaseAccount {
  address: string;
  pub_key: Any;
  account_number: Long;
  sequence: Long;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */

export interface BaseAccountSDKType {
  address: string;
  pub_key: AnySDKType;
  account_number: Long;
  sequence: Long;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */

export interface ModuleAccount {
  base_account: BaseAccount;
  name: string;
  permissions: string[];
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */

export interface ModuleAccountSDKType {
  base_account: BaseAccountSDKType;
  name: string;
  permissions: string[];
}
/** Params defines the parameters for the auth module. */

export interface Params {
  max_memo_characters: Long;
  tx_sig_limit: Long;
  tx_size_cost_per_byte: Long;
  sig_verify_cost_ed25519: Long;
  sig_verify_cost_secp256k1: Long;
}
/** Params defines the parameters for the auth module. */

export interface ParamsSDKType {
  max_memo_characters: Long;
  tx_sig_limit: Long;
  tx_size_cost_per_byte: Long;
  sig_verify_cost_ed25519: Long;
  sig_verify_cost_secp256k1: Long;
}

function createBaseBaseAccount(): BaseAccount {
  return {
    address: "",
    pub_key: undefined,
    account_number: Long.UZERO,
    sequence: Long.UZERO
  };
}

export const BaseAccount = {
  encode(message: BaseAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.pub_key !== undefined) {
      Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
    }

    if (!message.account_number.isZero()) {
      writer.uint32(24).uint64(message.account_number);
    }

    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.pub_key = Any.decode(reader, reader.uint32());
          break;

        case 3:
          message.account_number = (reader.uint64() as Long);
          break;

        case 4:
          message.sequence = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BaseAccount>): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
    message.account_number = object.account_number !== undefined && object.account_number !== null ? Long.fromValue(object.account_number) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  }

};

function createBaseModuleAccount(): ModuleAccount {
  return {
    base_account: undefined,
    name: "",
    permissions: []
  };
}

export const ModuleAccount = {
  encode(message: ModuleAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.permissions.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount {
    const message = createBaseModuleAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    max_memo_characters: Long.UZERO,
    tx_sig_limit: Long.UZERO,
    tx_size_cost_per_byte: Long.UZERO,
    sig_verify_cost_ed25519: Long.UZERO,
    sig_verify_cost_secp256k1: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_memo_characters.isZero()) {
      writer.uint32(8).uint64(message.max_memo_characters);
    }

    if (!message.tx_sig_limit.isZero()) {
      writer.uint32(16).uint64(message.tx_sig_limit);
    }

    if (!message.tx_size_cost_per_byte.isZero()) {
      writer.uint32(24).uint64(message.tx_size_cost_per_byte);
    }

    if (!message.sig_verify_cost_ed25519.isZero()) {
      writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
    }

    if (!message.sig_verify_cost_secp256k1.isZero()) {
      writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.max_memo_characters = (reader.uint64() as Long);
          break;

        case 2:
          message.tx_sig_limit = (reader.uint64() as Long);
          break;

        case 3:
          message.tx_size_cost_per_byte = (reader.uint64() as Long);
          break;

        case 4:
          message.sig_verify_cost_ed25519 = (reader.uint64() as Long);
          break;

        case 5:
          message.sig_verify_cost_secp256k1 = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.max_memo_characters = object.max_memo_characters !== undefined && object.max_memo_characters !== null ? Long.fromValue(object.max_memo_characters) : Long.UZERO;
    message.tx_sig_limit = object.tx_sig_limit !== undefined && object.tx_sig_limit !== null ? Long.fromValue(object.tx_sig_limit) : Long.UZERO;
    message.tx_size_cost_per_byte = object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null ? Long.fromValue(object.tx_size_cost_per_byte) : Long.UZERO;
    message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null ? Long.fromValue(object.sig_verify_cost_ed25519) : Long.UZERO;
    message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null ? Long.fromValue(object.sig_verify_cost_secp256k1) : Long.UZERO;
    return message;
  }

};