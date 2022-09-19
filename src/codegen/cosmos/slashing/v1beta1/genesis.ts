import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState defines the slashing module's genesis state. */

export interface GenesisState {
  /** params defines all the paramaters of related to deposit. */
  params: Params;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */

  signing_infos: SigningInfo[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */

  missed_blocks: ValidatorMissedBlocks[];
}
/** GenesisState defines the slashing module's genesis state. */

export interface GenesisStateSDKType {
  /** params defines all the paramaters of related to deposit. */
  params: ParamsSDKType;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */

  signing_infos: SigningInfoSDKType[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */

  missed_blocks: ValidatorMissedBlocksSDKType[];
}
/** SigningInfo stores validator signing info of corresponding address. */

export interface SigningInfo {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */

  validator_signing_info: ValidatorSigningInfo;
}
/** SigningInfo stores validator signing info of corresponding address. */

export interface SigningInfoSDKType {
  /** address is the validator address. */
  address: string;
  /** validator_signing_info represents the signing info of this validator. */

  validator_signing_info: ValidatorSigningInfoSDKType;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */

export interface ValidatorMissedBlocks {
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */

  missed_blocks: MissedBlock[];
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */

export interface ValidatorMissedBlocksSDKType {
  /** address is the validator address. */
  address: string;
  /** missed_blocks is an array of missed blocks by the validator. */

  missed_blocks: MissedBlockSDKType[];
}
/** MissedBlock contains height and missed status as boolean. */

export interface MissedBlock {
  /** index is the height at which the block was missed. */
  index: Long;
  /** missed is the missed status. */

  missed: boolean;
}
/** MissedBlock contains height and missed status as boolean. */

export interface MissedBlockSDKType {
  /** index is the height at which the block was missed. */
  index: Long;
  /** missed is the missed status. */

  missed: boolean;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    signing_infos: [],
    missed_blocks: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.signing_infos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.missed_blocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.signing_infos.push(SigningInfo.decode(reader, reader.uint32()));
          break;

        case 3:
          message.missed_blocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.signing_infos = object.signing_infos?.map(e => SigningInfo.fromPartial(e)) || [];
    message.missed_blocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSigningInfo(): SigningInfo {
  return {
    address: "",
    validator_signing_info: undefined
  };
}

export const SigningInfo = {
  encode(message: SigningInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.validator_signing_info !== undefined) {
      ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.validator_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validator_signing_info = object.validator_signing_info !== undefined && object.validator_signing_info !== null ? ValidatorSigningInfo.fromPartial(object.validator_signing_info) : undefined;
    return message;
  }

};

function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    address: "",
    missed_blocks: []
  };
}

export const ValidatorMissedBlocks = {
  encode(message: ValidatorMissedBlocks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    for (const v of message.missed_blocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.missed_blocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missed_blocks = object.missed_blocks?.map(e => MissedBlock.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMissedBlock(): MissedBlock {
  return {
    index: Long.ZERO,
    missed: false
  };
}

export const MissedBlock = {
  encode(message: MissedBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).int64(message.index);
    }

    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.int64() as Long);
          break;

        case 2:
          message.missed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.missed = object.missed ?? false;
    return message;
  }

};