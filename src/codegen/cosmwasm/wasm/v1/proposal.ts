import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */

export interface StoreCodeProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasm_byte_code: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */

  instantiate_permission: AccessConfig;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */

export interface StoreCodeProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** WASMByteCode can be raw or gzip compressed */

  wasm_byte_code: Uint8Array;
  /** InstantiatePermission to apply on contract creation, optional */

  instantiate_permission: AccessConfigSDKType;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */

export interface InstantiateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  code_id: Long;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */

export interface InstantiateContractProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** Admin is an optional address that can execute migrations */

  admin: string;
  /** CodeID is the reference to the stored WASM code */

  code_id: Long;
  /** Label is optional metadata to be stored with a constract instance. */

  label: string;
  /** Msg json encoded message to be passed to the contract on instantiation */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinSDKType[];
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */

export interface MigrateContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** CodeID references the new WASM codesudo */

  code_id: Long;
  /** Msg json encoded message to be passed to the contract on migration */

  msg: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */

export interface MigrateContractProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** CodeID references the new WASM codesudo */

  code_id: Long;
  /** Msg json encoded message to be passed to the contract on migration */

  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */

export interface SudoContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */

  msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */

export interface SudoContractProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as sudo */

  msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */

export interface ExecuteContractProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: Coin[];
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */

export interface ExecuteContractProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** RunAs is the address that is passed to the contract's environment as sender */

  run_as: string;
  /** Contract is the address of the smart contract */

  contract: string;
  /** Msg json encoded message to be passed to the contract as execute */

  msg: Uint8Array;
  /** Funds coins that are transferred to the contract on instantiation */

  funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */

export interface UpdateAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** NewAdmin address to be set */

  new_admin: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */

export interface UpdateAdminProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** NewAdmin address to be set */

  new_admin: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */

export interface ClearAdminProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */

export interface ClearAdminProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** Contract is the address of the smart contract */

  contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */

export interface PinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the new WASM codes */

  code_ids: Long[];
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */

export interface PinCodesProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the new WASM codes */

  code_ids: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */

export interface UnpinCodesProposal {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the WASM codes */

  code_ids: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */

export interface UnpinCodesProposalSDKType {
  /** Title is a short summary */
  title: string;
  /** Description is a human readable text */

  description: string;
  /** CodeIDs references the WASM codes */

  code_ids: Long[];
}

function createBaseStoreCodeProposal(): StoreCodeProposal {
  return {
    title: "",
    description: "",
    run_as: "",
    wasm_byte_code: new Uint8Array(),
    instantiate_permission: undefined
  };
}

export const StoreCodeProposal = {
  encode(message: StoreCodeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }

    if (message.wasm_byte_code.length !== 0) {
      writer.uint32(34).bytes(message.wasm_byte_code);
    }

    if (message.instantiate_permission !== undefined) {
      AccessConfig.encode(message.instantiate_permission, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoreCodeProposal();

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
          message.run_as = reader.string();
          break;

        case 4:
          message.wasm_byte_code = reader.bytes();
          break;

        case 7:
          message.instantiate_permission = AccessConfig.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal {
    const message = createBaseStoreCodeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.wasm_byte_code = object.wasm_byte_code ?? new Uint8Array();
    message.instantiate_permission = object.instantiate_permission !== undefined && object.instantiate_permission !== null ? AccessConfig.fromPartial(object.instantiate_permission) : undefined;
    return message;
  }

};

function createBaseInstantiateContractProposal(): InstantiateContractProposal {
  return {
    title: "",
    description: "",
    run_as: "",
    admin: "",
    code_id: Long.UZERO,
    label: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const InstantiateContractProposal = {
  encode(message: InstantiateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }

    if (message.admin !== "") {
      writer.uint32(34).string(message.admin);
    }

    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }

    if (message.label !== "") {
      writer.uint32(50).string(message.label);
    }

    if (message.msg.length !== 0) {
      writer.uint32(58).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstantiateContractProposal();

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
          message.run_as = reader.string();
          break;

        case 4:
          message.admin = reader.string();
          break;

        case 5:
          message.code_id = (reader.uint64() as Long);
          break;

        case 6:
          message.label = reader.string();
          break;

        case 7:
          message.msg = reader.bytes();
          break;

        case 8:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal {
    const message = createBaseInstantiateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.admin = object.admin ?? "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.label = object.label ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMigrateContractProposal(): MigrateContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    code_id: Long.UZERO,
    msg: new Uint8Array()
  };
}

export const MigrateContractProposal = {
  encode(message: MigrateContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (!message.code_id.isZero()) {
      writer.uint32(40).uint64(message.code_id);
    }

    if (message.msg.length !== 0) {
      writer.uint32(50).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMigrateContractProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.code_id = (reader.uint64() as Long);
          break;

        case 6:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal {
    const message = createBaseMigrateContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};

function createBaseSudoContractProposal(): SudoContractProposal {
  return {
    title: "",
    description: "",
    contract: "",
    msg: new Uint8Array()
  };
}

export const SudoContractProposal = {
  encode(message: SudoContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoContractProposal();

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
          message.contract = reader.string();
          break;

        case 4:
          message.msg = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<SudoContractProposal>): SudoContractProposal {
    const message = createBaseSudoContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    return message;
  }

};

function createBaseExecuteContractProposal(): ExecuteContractProposal {
  return {
    title: "",
    description: "",
    run_as: "",
    contract: "",
    msg: new Uint8Array(),
    funds: []
  };
}

export const ExecuteContractProposal = {
  encode(message: ExecuteContractProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.run_as !== "") {
      writer.uint32(26).string(message.run_as);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    if (message.msg.length !== 0) {
      writer.uint32(42).bytes(message.msg);
    }

    for (const v of message.funds) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecuteContractProposal();

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
          message.run_as = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        case 5:
          message.msg = reader.bytes();
          break;

        case 6:
          message.funds.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal {
    const message = createBaseExecuteContractProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.run_as = object.run_as ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? new Uint8Array();
    message.funds = object.funds?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseUpdateAdminProposal(): UpdateAdminProposal {
  return {
    title: "",
    description: "",
    new_admin: "",
    contract: ""
  };
}

export const UpdateAdminProposal = {
  encode(message: UpdateAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.new_admin !== "") {
      writer.uint32(26).string(message.new_admin);
    }

    if (message.contract !== "") {
      writer.uint32(34).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminProposal();

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
          message.new_admin = reader.string();
          break;

        case 4:
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal {
    const message = createBaseUpdateAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.new_admin = object.new_admin ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};

function createBaseClearAdminProposal(): ClearAdminProposal {
  return {
    title: "",
    description: "",
    contract: ""
  };
}

export const ClearAdminProposal = {
  encode(message: ClearAdminProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClearAdminProposal();

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
          message.contract = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal {
    const message = createBaseClearAdminProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contract = object.contract ?? "";
    return message;
  }

};

function createBasePinCodesProposal(): PinCodesProposal {
  return {
    title: "",
    description: "",
    code_ids: []
  };
}

export const PinCodesProposal = {
  encode(message: PinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    for (const v of message.code_ids) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePinCodesProposal();

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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.code_ids.push((reader.uint64() as Long));
            }
          } else {
            message.code_ids.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal {
    const message = createBasePinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.code_ids = object.code_ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseUnpinCodesProposal(): UnpinCodesProposal {
  return {
    title: "",
    description: "",
    code_ids: []
  };
}

export const UnpinCodesProposal = {
  encode(message: UnpinCodesProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    writer.uint32(26).fork();

    for (const v of message.code_ids) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpinCodesProposal();

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
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.code_ids.push((reader.uint64() as Long));
            }
          } else {
            message.code_ids.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal {
    const message = createBaseUnpinCodesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.code_ids = object.code_ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};