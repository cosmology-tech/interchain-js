import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Params defines the set of params for the distribution module. */

export interface Params {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
/** Params defines the set of params for the distribution module. */

export interface ParamsSDKType {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 * number of outstanding delegations which ended the associated period (and
 * might need to read that record)
 * + number of slashes which ended the associated period (and might need to
 * read that record)
 * + one per validator for the zeroeth period, set on initialization
 */

export interface ValidatorHistoricalRewards {
  cumulative_reward_ratio: DecCoin[];
  reference_count: number;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 * number of outstanding delegations which ended the associated period (and
 * might need to read that record)
 * + number of slashes which ended the associated period (and might need to
 * read that record)
 * + one per validator for the zeroeth period, set on initialization
 */

export interface ValidatorHistoricalRewardsSDKType {
  cumulative_reward_ratio: DecCoinSDKType[];
  reference_count: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */

export interface ValidatorCurrentRewards {
  rewards: DecCoin[];
  period: Long;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */

export interface ValidatorCurrentRewardsSDKType {
  rewards: DecCoinSDKType[];
  period: Long;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */

export interface ValidatorAccumulatedCommission {
  commission: DecCoin[];
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */

export interface ValidatorAccumulatedCommissionSDKType {
  commission: DecCoinSDKType[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */

export interface ValidatorOutstandingRewards {
  rewards: DecCoin[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */

export interface ValidatorOutstandingRewardsSDKType {
  rewards: DecCoinSDKType[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */

export interface ValidatorSlashEvent {
  validator_period: Long;
  fraction: string;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */

export interface ValidatorSlashEventSDKType {
  validator_period: Long;
  fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */

export interface ValidatorSlashEvents {
  validator_slash_events: ValidatorSlashEvent[];
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */

export interface ValidatorSlashEventsSDKType {
  validator_slash_events: ValidatorSlashEventSDKType[];
}
/** FeePool is the global fee pool for distribution. */

export interface FeePool {
  community_pool: DecCoin[];
}
/** FeePool is the global fee pool for distribution. */

export interface FeePoolSDKType {
  community_pool: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */

export interface CommunityPoolSpendProposal {
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */

export interface CommunityPoolSpendProposalSDKType {
  title: string;
  description: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */

export interface DelegatorStartingInfo {
  previous_period: Long;
  stake: string;
  height: Long;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */

export interface DelegatorStartingInfoSDKType {
  previous_period: Long;
  stake: string;
  height: Long;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */

export interface DelegationDelegatorReward {
  validator_address: string;
  reward: DecCoin[];
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */

export interface DelegationDelegatorRewardSDKType {
  validator_address: string;
  reward: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */

export interface CommunityPoolSpendProposalWithDeposit {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */

export interface CommunityPoolSpendProposalWithDepositSDKType {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}

function createBaseParams(): Params {
  return {
    community_tax: "",
    base_proposer_reward: "",
    bonus_proposer_reward: "",
    withdraw_addr_enabled: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.community_tax !== "") {
      writer.uint32(10).string(message.community_tax);
    }

    if (message.base_proposer_reward !== "") {
      writer.uint32(18).string(message.base_proposer_reward);
    }

    if (message.bonus_proposer_reward !== "") {
      writer.uint32(26).string(message.bonus_proposer_reward);
    }

    if (message.withdraw_addr_enabled === true) {
      writer.uint32(32).bool(message.withdraw_addr_enabled);
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
          message.community_tax = reader.string();
          break;

        case 2:
          message.base_proposer_reward = reader.string();
          break;

        case 3:
          message.bonus_proposer_reward = reader.string();
          break;

        case 4:
          message.withdraw_addr_enabled = reader.bool();
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
    message.community_tax = object.community_tax ?? "";
    message.base_proposer_reward = object.base_proposer_reward ?? "";
    message.bonus_proposer_reward = object.bonus_proposer_reward ?? "";
    message.withdraw_addr_enabled = object.withdraw_addr_enabled ?? false;
    return message;
  }

};

function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return {
    cumulative_reward_ratio: [],
    reference_count: 0
  };
}

export const ValidatorHistoricalRewards = {
  encode(message: ValidatorHistoricalRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cumulative_reward_ratio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.reference_count !== 0) {
      writer.uint32(16).uint32(message.reference_count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cumulative_reward_ratio.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.reference_count = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorHistoricalRewards>): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulative_reward_ratio = object.cumulative_reward_ratio?.map(e => DecCoin.fromPartial(e)) || [];
    message.reference_count = object.reference_count ?? 0;
    return message;
  }

};

function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return {
    rewards: [],
    period: Long.UZERO
  };
}

export const ValidatorCurrentRewards = {
  encode(message: ValidatorCurrentRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.period = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorCurrentRewards>): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  }

};

function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return {
    commission: []
  };
}

export const ValidatorAccumulatedCommission = {
  encode(message: ValidatorAccumulatedCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorAccumulatedCommission>): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return {
    rewards: []
  };
}

export const ValidatorOutstandingRewards = {
  encode(message: ValidatorOutstandingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorOutstandingRewards>): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return {
    validator_period: Long.UZERO,
    fraction: ""
  };
}

export const ValidatorSlashEvent = {
  encode(message: ValidatorSlashEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.validator_period.isZero()) {
      writer.uint32(8).uint64(message.validator_period);
    }

    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_period = (reader.uint64() as Long);
          break;

        case 2:
          message.fraction = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorSlashEvent>): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    message.validator_period = object.validator_period !== undefined && object.validator_period !== null ? Long.fromValue(object.validator_period) : Long.UZERO;
    message.fraction = object.fraction ?? "";
    return message;
  }

};

function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return {
    validator_slash_events: []
  };
}

export const ValidatorSlashEvents = {
  encode(message: ValidatorSlashEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validator_slash_events) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_slash_events.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorSlashEvents>): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validator_slash_events = object.validator_slash_events?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    return message;
  }

};

function createBaseFeePool(): FeePool {
  return {
    community_pool: []
  };
}

export const FeePool = {
  encode(message: FeePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.community_pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.community_pool.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<FeePool>): FeePool {
    const message = createBaseFeePool();
    message.community_pool = object.community_pool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}

export const CommunityPoolSpendProposal = {
  encode(message: CommunityPoolSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommunityPoolSpendProposal>): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    previous_period: Long.UZERO,
    stake: "",
    height: Long.UZERO
  };
}

export const DelegatorStartingInfo = {
  encode(message: DelegatorStartingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.previous_period.isZero()) {
      writer.uint32(8).uint64(message.previous_period);
    }

    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.previous_period = (reader.uint64() as Long);
          break;

        case 2:
          message.stake = reader.string();
          break;

        case 3:
          message.height = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DelegatorStartingInfo>): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previous_period = object.previous_period !== undefined && object.previous_period !== null ? Long.fromValue(object.previous_period) : Long.UZERO;
    message.stake = object.stake ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  }

};

function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    validator_address: "",
    reward: []
  };
}

export const DelegationDelegatorReward = {
  encode(message: DelegationDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }

    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;

        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DelegationDelegatorReward>): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validator_address = object.validator_address ?? "";
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}

export const CommunityPoolSpendProposalWithDeposit = {
  encode(message: CommunityPoolSpendProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.recipient = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        case 5:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CommunityPoolSpendProposalWithDeposit>): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  }

};