import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */

export interface MsgCreateVestingAccount {
  from_address: string;
  to_address: string;
  amount: Coin[];
  end_time: Long;
  delayed: boolean;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */

export interface MsgCreateVestingAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
  end_time: Long;
  delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */

export interface MsgCreateVestingAccountResponse {}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */

export interface MsgCreateVestingAccountResponseSDKType {}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */

export interface MsgCreatePermanentLockedAccount {
  from_address: string;
  to_address: string;
  amount: Coin[];
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 */

export interface MsgCreatePermanentLockedAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */

export interface MsgCreatePermanentLockedAccountResponse {}
/** MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type. */

export interface MsgCreatePermanentLockedAccountResponseSDKType {}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */

export interface MsgCreatePeriodicVestingAccount {
  from_address: string;
  to_address: string;
  start_time: Long;
  vesting_periods: Period[];
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */

export interface MsgCreatePeriodicVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time: Long;
  vesting_periods: PeriodSDKType[];
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */

export interface MsgCreatePeriodicVestingAccountResponse {}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 */

export interface MsgCreatePeriodicVestingAccountResponseSDKType {}

function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    from_address: "",
    to_address: "",
    amount: [],
    end_time: Long.ZERO,
    delayed: false
  };
}

export const MsgCreateVestingAccount = {
  encode(message: MsgCreateVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }

    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.end_time.isZero()) {
      writer.uint32(32).int64(message.end_time);
    }

    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;

        case 2:
          message.to_address = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.end_time = (reader.int64() as Long);
          break;

        case 5:
          message.delayed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.from_address = object.from_address ?? "";
    message.to_address = object.to_address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? Long.fromValue(object.end_time) : Long.ZERO;
    message.delayed = object.delayed ?? false;
    return message;
  }

};

function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}

export const MsgCreateVestingAccountResponse = {
  encode(_: MsgCreateVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateVestingAccountResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();

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

  fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  }

};

function createBaseMsgCreatePermanentLockedAccount(): MsgCreatePermanentLockedAccount {
  return {
    from_address: "",
    to_address: "",
    amount: []
  };
}

export const MsgCreatePermanentLockedAccount = {
  encode(message: MsgCreatePermanentLockedAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }

    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;

        case 2:
          message.to_address = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreatePermanentLockedAccount>): MsgCreatePermanentLockedAccount {
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.from_address = object.from_address ?? "";
    message.to_address = object.to_address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCreatePermanentLockedAccountResponse(): MsgCreatePermanentLockedAccountResponse {
  return {};
}

export const MsgCreatePermanentLockedAccountResponse = {
  encode(_: MsgCreatePermanentLockedAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccountResponse();

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

  fromPartial(_: DeepPartial<MsgCreatePermanentLockedAccountResponse>): MsgCreatePermanentLockedAccountResponse {
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  }

};

function createBaseMsgCreatePeriodicVestingAccount(): MsgCreatePeriodicVestingAccount {
  return {
    from_address: "",
    to_address: "",
    start_time: Long.ZERO,
    vesting_periods: []
  };
}

export const MsgCreatePeriodicVestingAccount = {
  encode(message: MsgCreatePeriodicVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }

    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }

    if (!message.start_time.isZero()) {
      writer.uint32(24).int64(message.start_time);
    }

    for (const v of message.vesting_periods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;

        case 2:
          message.to_address = reader.string();
          break;

        case 3:
          message.start_time = (reader.int64() as Long);
          break;

        case 4:
          message.vesting_periods.push(Period.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount {
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.from_address = object.from_address ?? "";
    message.to_address = object.to_address ?? "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Long.fromValue(object.start_time) : Long.ZERO;
    message.vesting_periods = object.vesting_periods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCreatePeriodicVestingAccountResponse(): MsgCreatePeriodicVestingAccountResponse {
  return {};
}

export const MsgCreatePeriodicVestingAccountResponse = {
  encode(_: MsgCreatePeriodicVestingAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();

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

  fromPartial(_: DeepPartial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse {
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  }

};