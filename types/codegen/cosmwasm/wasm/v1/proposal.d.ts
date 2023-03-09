import { AccessConfig, AccessConfigAmino, AccessConfigSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission?: AccessConfig;
}
export interface StoreCodeProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.StoreCodeProposal";
    value: Uint8Array;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiate_permission?: AccessConfigAmino;
}
export interface StoreCodeProposalAminoMsg {
    type: "wasm/StoreCodeProposal";
    value: StoreCodeProposalAmino;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
    title: string;
    description: string;
    run_as: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission?: AccessConfigSDKType;
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
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface InstantiateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.InstantiateContractProposal";
    value: Uint8Array;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
}
export interface InstantiateContractProposalAminoMsg {
    type: "wasm/InstantiateContractProposal";
    value: InstantiateContractProposalAmino;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
    title: string;
    description: string;
    run_as: string;
    admin: string;
    code_id: Long;
    label: string;
    msg: Uint8Array;
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
    codeId: Long;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MigrateContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MigrateContractProposal";
    value: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM codesudo */
    code_id: string;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MigrateContractProposalAminoMsg {
    type: "wasm/MigrateContractProposal";
    value: MigrateContractProposalAmino;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
    title: string;
    description: string;
    contract: string;
    code_id: Long;
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
export interface SudoContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.SudoContractProposal";
    value: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
export interface SudoContractProposalAminoMsg {
    type: "wasm/SudoContractProposal";
    value: SudoContractProposalAmino;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
    title: string;
    description: string;
    contract: string;
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
    runAs: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface ExecuteContractProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ExecuteContractProposal";
    value: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalAmino {
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
    funds: CoinAmino[];
}
export interface ExecuteContractProposalAminoMsg {
    type: "wasm/ExecuteContractProposal";
    value: ExecuteContractProposalAmino;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
    title: string;
    description: string;
    run_as: string;
    contract: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface UpdateAdminProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UpdateAdminProposal";
    value: Uint8Array;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    new_admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface UpdateAdminProposalAminoMsg {
    type: "wasm/UpdateAdminProposal";
    value: UpdateAdminProposalAmino;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
    title: string;
    description: string;
    new_admin: string;
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
export interface ClearAdminProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ClearAdminProposal";
    value: Uint8Array;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface ClearAdminProposalAminoMsg {
    type: "wasm/ClearAdminProposal";
    value: ClearAdminProposalAmino;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
    title: string;
    description: string;
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
    codeIds: Long[];
}
export interface PinCodesProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.PinCodesProposal";
    value: Uint8Array;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    code_ids: string[];
}
export interface PinCodesProposalAminoMsg {
    type: "wasm/PinCodesProposal";
    value: PinCodesProposalAmino;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
    title: string;
    description: string;
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
    codeIds: Long[];
}
export interface UnpinCodesProposalProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.UnpinCodesProposal";
    value: Uint8Array;
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalAmino {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    code_ids: string[];
}
export interface UnpinCodesProposalAminoMsg {
    type: "wasm/UnpinCodesProposal";
    value: UnpinCodesProposalAmino;
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
    title: string;
    description: string;
    code_ids: Long[];
}
export declare const StoreCodeProposal: {
    encode(message: StoreCodeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal;
    fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal;
    fromAmino(object: StoreCodeProposalAmino): StoreCodeProposal;
    toAmino(message: StoreCodeProposal): StoreCodeProposalAmino;
    fromAminoMsg(object: StoreCodeProposalAminoMsg): StoreCodeProposal;
    toAminoMsg(message: StoreCodeProposal): StoreCodeProposalAminoMsg;
    fromProtoMsg(message: StoreCodeProposalProtoMsg): StoreCodeProposal;
    toProto(message: StoreCodeProposal): Uint8Array;
    toProtoMsg(message: StoreCodeProposal): StoreCodeProposalProtoMsg;
};
export declare const InstantiateContractProposal: {
    encode(message: InstantiateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal;
    fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal;
    fromAmino(object: InstantiateContractProposalAmino): InstantiateContractProposal;
    toAmino(message: InstantiateContractProposal): InstantiateContractProposalAmino;
    fromAminoMsg(object: InstantiateContractProposalAminoMsg): InstantiateContractProposal;
    toAminoMsg(message: InstantiateContractProposal): InstantiateContractProposalAminoMsg;
    fromProtoMsg(message: InstantiateContractProposalProtoMsg): InstantiateContractProposal;
    toProto(message: InstantiateContractProposal): Uint8Array;
    toProtoMsg(message: InstantiateContractProposal): InstantiateContractProposalProtoMsg;
};
export declare const MigrateContractProposal: {
    encode(message: MigrateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal;
    fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal;
    fromAmino(object: MigrateContractProposalAmino): MigrateContractProposal;
    toAmino(message: MigrateContractProposal): MigrateContractProposalAmino;
    fromAminoMsg(object: MigrateContractProposalAminoMsg): MigrateContractProposal;
    toAminoMsg(message: MigrateContractProposal): MigrateContractProposalAminoMsg;
    fromProtoMsg(message: MigrateContractProposalProtoMsg): MigrateContractProposal;
    toProto(message: MigrateContractProposal): Uint8Array;
    toProtoMsg(message: MigrateContractProposal): MigrateContractProposalProtoMsg;
};
export declare const SudoContractProposal: {
    encode(message: SudoContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal;
    fromPartial(object: DeepPartial<SudoContractProposal>): SudoContractProposal;
    fromAmino(object: SudoContractProposalAmino): SudoContractProposal;
    toAmino(message: SudoContractProposal): SudoContractProposalAmino;
    fromAminoMsg(object: SudoContractProposalAminoMsg): SudoContractProposal;
    toAminoMsg(message: SudoContractProposal): SudoContractProposalAminoMsg;
    fromProtoMsg(message: SudoContractProposalProtoMsg): SudoContractProposal;
    toProto(message: SudoContractProposal): Uint8Array;
    toProtoMsg(message: SudoContractProposal): SudoContractProposalProtoMsg;
};
export declare const ExecuteContractProposal: {
    encode(message: ExecuteContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal;
    fromPartial(object: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal;
    fromAmino(object: ExecuteContractProposalAmino): ExecuteContractProposal;
    toAmino(message: ExecuteContractProposal): ExecuteContractProposalAmino;
    fromAminoMsg(object: ExecuteContractProposalAminoMsg): ExecuteContractProposal;
    toAminoMsg(message: ExecuteContractProposal): ExecuteContractProposalAminoMsg;
    fromProtoMsg(message: ExecuteContractProposalProtoMsg): ExecuteContractProposal;
    toProto(message: ExecuteContractProposal): Uint8Array;
    toProtoMsg(message: ExecuteContractProposal): ExecuteContractProposalProtoMsg;
};
export declare const UpdateAdminProposal: {
    encode(message: UpdateAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal;
    fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal;
    fromAmino(object: UpdateAdminProposalAmino): UpdateAdminProposal;
    toAmino(message: UpdateAdminProposal): UpdateAdminProposalAmino;
    fromAminoMsg(object: UpdateAdminProposalAminoMsg): UpdateAdminProposal;
    toAminoMsg(message: UpdateAdminProposal): UpdateAdminProposalAminoMsg;
    fromProtoMsg(message: UpdateAdminProposalProtoMsg): UpdateAdminProposal;
    toProto(message: UpdateAdminProposal): Uint8Array;
    toProtoMsg(message: UpdateAdminProposal): UpdateAdminProposalProtoMsg;
};
export declare const ClearAdminProposal: {
    encode(message: ClearAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal;
    fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal;
    fromAmino(object: ClearAdminProposalAmino): ClearAdminProposal;
    toAmino(message: ClearAdminProposal): ClearAdminProposalAmino;
    fromAminoMsg(object: ClearAdminProposalAminoMsg): ClearAdminProposal;
    toAminoMsg(message: ClearAdminProposal): ClearAdminProposalAminoMsg;
    fromProtoMsg(message: ClearAdminProposalProtoMsg): ClearAdminProposal;
    toProto(message: ClearAdminProposal): Uint8Array;
    toProtoMsg(message: ClearAdminProposal): ClearAdminProposalProtoMsg;
};
export declare const PinCodesProposal: {
    encode(message: PinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal;
    fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal;
    fromAmino(object: PinCodesProposalAmino): PinCodesProposal;
    toAmino(message: PinCodesProposal): PinCodesProposalAmino;
    fromAminoMsg(object: PinCodesProposalAminoMsg): PinCodesProposal;
    toAminoMsg(message: PinCodesProposal): PinCodesProposalAminoMsg;
    fromProtoMsg(message: PinCodesProposalProtoMsg): PinCodesProposal;
    toProto(message: PinCodesProposal): Uint8Array;
    toProtoMsg(message: PinCodesProposal): PinCodesProposalProtoMsg;
};
export declare const UnpinCodesProposal: {
    encode(message: UnpinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal;
    fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal;
    fromAmino(object: UnpinCodesProposalAmino): UnpinCodesProposal;
    toAmino(message: UnpinCodesProposal): UnpinCodesProposalAmino;
    fromAminoMsg(object: UnpinCodesProposalAminoMsg): UnpinCodesProposal;
    toAminoMsg(message: UnpinCodesProposal): UnpinCodesProposalAminoMsg;
    fromProtoMsg(message: UnpinCodesProposalProtoMsg): UnpinCodesProposal;
    toProto(message: UnpinCodesProposal): Uint8Array;
    toProtoMsg(message: UnpinCodesProposal): UnpinCodesProposalProtoMsg;
};
