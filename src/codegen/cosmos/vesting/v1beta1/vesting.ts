import { BaseAccount, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */

export interface BaseVestingAccount {
  base_account: BaseAccount;
  original_vesting: Coin[];
  delegated_free: Coin[];
  delegated_vesting: Coin[];
  end_time: Long;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */

export interface BaseVestingAccountSDKType {
  base_account: BaseAccountSDKType;
  original_vesting: CoinSDKType[];
  delegated_free: CoinSDKType[];
  delegated_vesting: CoinSDKType[];
  end_time: Long;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */

export interface ContinuousVestingAccount {
  base_vesting_account: BaseVestingAccount;
  start_time: Long;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */

export interface ContinuousVestingAccountSDKType {
  base_vesting_account: BaseVestingAccountSDKType;
  start_time: Long;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */

export interface DelayedVestingAccount {
  base_vesting_account: BaseVestingAccount;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */

export interface DelayedVestingAccountSDKType {
  base_vesting_account: BaseVestingAccountSDKType;
}
/** Period defines a length of time and amount of coins that will vest. */

export interface Period {
  length: Long;
  amount: Coin[];
}
/** Period defines a length of time and amount of coins that will vest. */

export interface PeriodSDKType {
  length: Long;
  amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */

export interface PeriodicVestingAccount {
  base_vesting_account: BaseVestingAccount;
  start_time: Long;
  vesting_periods: Period[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */

export interface PeriodicVestingAccountSDKType {
  base_vesting_account: BaseVestingAccountSDKType;
  start_time: Long;
  vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface PermanentLockedAccount {
  base_vesting_account: BaseVestingAccount;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 * 
 * Since: cosmos-sdk 0.43
 */

export interface PermanentLockedAccountSDKType {
  base_vesting_account: BaseVestingAccountSDKType;
}

function createBaseBaseVestingAccount(): BaseVestingAccount {
  return {
    base_account: undefined,
    original_vesting: [],
    delegated_free: [],
    delegated_vesting: [],
    end_time: Long.ZERO
  };
}

export const BaseVestingAccount = {
  encode(message: BaseVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.original_vesting) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.delegated_free) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.delegated_vesting) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.end_time.isZero()) {
      writer.uint32(40).int64(message.end_time);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base_account = BaseAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.original_vesting.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.delegated_free.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.delegated_vesting.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.end_time = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount {
    const message = createBaseBaseVestingAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.original_vesting = object.original_vesting?.map(e => Coin.fromPartial(e)) || [];
    message.delegated_free = object.delegated_free?.map(e => Coin.fromPartial(e)) || [];
    message.delegated_vesting = object.delegated_vesting?.map(e => Coin.fromPartial(e)) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? Long.fromValue(object.end_time) : Long.ZERO;
    return message;
  }

};

function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
  return {
    base_vesting_account: undefined,
    start_time: Long.ZERO
  };
}

export const ContinuousVestingAccount = {
  encode(message: ContinuousVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }

    if (!message.start_time.isZero()) {
      writer.uint32(16).int64(message.start_time);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContinuousVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContinuousVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.start_time = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContinuousVestingAccount>): ContinuousVestingAccount {
    const message = createBaseContinuousVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Long.fromValue(object.start_time) : Long.ZERO;
    return message;
  }

};

function createBaseDelayedVestingAccount(): DelayedVestingAccount {
  return {
    base_vesting_account: undefined
  };
}

export const DelayedVestingAccount = {
  encode(message: DelayedVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelayedVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelayedVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DelayedVestingAccount>): DelayedVestingAccount {
    const message = createBaseDelayedVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  }

};

function createBasePeriod(): Period {
  return {
    length: Long.ZERO,
    amount: []
  };
}

export const Period = {
  encode(message: Period, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.length.isZero()) {
      writer.uint32(8).int64(message.length);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Period {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.length = (reader.int64() as Long);
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Period>): Period {
    const message = createBasePeriod();
    message.length = object.length !== undefined && object.length !== null ? Long.fromValue(object.length) : Long.ZERO;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
  return {
    base_vesting_account: undefined,
    start_time: Long.ZERO,
    vesting_periods: []
  };
}

export const PeriodicVestingAccount = {
  encode(message: PeriodicVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }

    if (!message.start_time.isZero()) {
      writer.uint32(16).int64(message.start_time);
    }

    for (const v of message.vesting_periods) {
      Period.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicVestingAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicVestingAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;

        case 2:
          message.start_time = (reader.int64() as Long);
          break;

        case 3:
          message.vesting_periods.push(Period.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PeriodicVestingAccount>): PeriodicVestingAccount {
    const message = createBasePeriodicVestingAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    message.start_time = object.start_time !== undefined && object.start_time !== null ? Long.fromValue(object.start_time) : Long.ZERO;
    message.vesting_periods = object.vesting_periods?.map(e => Period.fromPartial(e)) || [];
    return message;
  }

};

function createBasePermanentLockedAccount(): PermanentLockedAccount {
  return {
    base_vesting_account: undefined
  };
}

export const PermanentLockedAccount = {
  encode(message: PermanentLockedAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base_vesting_account !== undefined) {
      BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PermanentLockedAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePermanentLockedAccount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PermanentLockedAccount>): PermanentLockedAccount {
    const message = createBasePermanentLockedAccount();
    message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
    return message;
  }

};