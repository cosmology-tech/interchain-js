import { MsgStoreCode, MsgStoreCodeAmino, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractAmino, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractAmino, MsgExecuteContractSDKType } from "./tx";
import { Params, ParamsAmino, ParamsSDKType, CodeInfo, CodeInfoAmino, CodeInfoSDKType, ContractInfo, ContractInfoAmino, ContractInfoSDKType, Model, ModelAmino, ModelSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    params?: Params;
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
    genMsgs: GenesisState_GenMsgs[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    codes: CodeAmino[];
    contracts: ContractAmino[];
    sequences: SequenceAmino[];
    gen_msgs: GenesisState_GenMsgsAmino[];
}
export interface GenesisStateAminoMsg {
    type: "wasm/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - genesis state of x/wasm */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    codes: CodeSDKType[];
    contracts: ContractSDKType[];
    sequences: SequenceSDKType[];
    gen_msgs: GenesisState_GenMsgsSDKType[];
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgs {
    storeCode?: MsgStoreCode;
    instantiateContract?: MsgInstantiateContract;
    executeContract?: MsgExecuteContract;
}
export interface GenesisState_GenMsgsProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.GenMsgs";
    value: Uint8Array;
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgsAmino {
    store_code?: MsgStoreCodeAmino;
    instantiate_contract?: MsgInstantiateContractAmino;
    execute_contract?: MsgExecuteContractAmino;
}
export interface GenesisState_GenMsgsAminoMsg {
    type: "wasm/GenMsgs";
    value: GenesisState_GenMsgsAmino;
}
/**
 * GenMsgs define the messages that can be executed during genesis phase in
 * order. The intention is to have more human readable data that is auditable.
 */
export interface GenesisState_GenMsgsSDKType {
    store_code?: MsgStoreCodeSDKType;
    instantiate_contract?: MsgInstantiateContractSDKType;
    execute_contract?: MsgExecuteContractSDKType;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    codeId: Long;
    codeInfo?: CodeInfo;
    codeBytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
export interface CodeProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Code";
    value: Uint8Array;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeAmino {
    code_id: string;
    code_info?: CodeInfoAmino;
    code_bytes: Uint8Array;
    /** Pinned to wasmvm cache */
    pinned: boolean;
}
export interface CodeAminoMsg {
    type: "wasm/Code";
    value: CodeAmino;
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface CodeSDKType {
    code_id: Long;
    code_info?: CodeInfoSDKType;
    code_bytes: Uint8Array;
    pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contractAddress: string;
    contractInfo?: ContractInfo;
    contractState: Model[];
}
export interface ContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Contract";
    value: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractAmino {
    contract_address: string;
    contract_info?: ContractInfoAmino;
    contract_state: ModelAmino[];
}
export interface ContractAminoMsg {
    type: "wasm/Contract";
    value: ContractAmino;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface ContractSDKType {
    contract_address: string;
    contract_info?: ContractInfoSDKType;
    contract_state: ModelSDKType[];
}
/** Sequence key and value of an id generation counter */
export interface Sequence {
    idKey: Uint8Array;
    value: Long;
}
export interface SequenceProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.Sequence";
    value: Uint8Array;
}
/** Sequence key and value of an id generation counter */
export interface SequenceAmino {
    id_key: Uint8Array;
    value: string;
}
export interface SequenceAminoMsg {
    type: "wasm/Sequence";
    value: SequenceAmino;
}
/** Sequence key and value of an id generation counter */
export interface SequenceSDKType {
    id_key: Uint8Array;
    value: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisState_GenMsgs: {
    encode(message: GenesisState_GenMsgs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_GenMsgs;
    fromPartial(object: DeepPartial<GenesisState_GenMsgs>): GenesisState_GenMsgs;
    fromAmino(object: GenesisState_GenMsgsAmino): GenesisState_GenMsgs;
    toAmino(message: GenesisState_GenMsgs): GenesisState_GenMsgsAmino;
    fromAminoMsg(object: GenesisState_GenMsgsAminoMsg): GenesisState_GenMsgs;
    toAminoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsAminoMsg;
    fromProtoMsg(message: GenesisState_GenMsgsProtoMsg): GenesisState_GenMsgs;
    toProto(message: GenesisState_GenMsgs): Uint8Array;
    toProtoMsg(message: GenesisState_GenMsgs): GenesisState_GenMsgsProtoMsg;
};
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Code;
    fromPartial(object: DeepPartial<Code>): Code;
    fromAmino(object: CodeAmino): Code;
    toAmino(message: Code): CodeAmino;
    fromAminoMsg(object: CodeAminoMsg): Code;
    toAminoMsg(message: Code): CodeAminoMsg;
    fromProtoMsg(message: CodeProtoMsg): Code;
    toProto(message: Code): Uint8Array;
    toProtoMsg(message: Code): CodeProtoMsg;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Contract;
    fromPartial(object: DeepPartial<Contract>): Contract;
    fromAmino(object: ContractAmino): Contract;
    toAmino(message: Contract): ContractAmino;
    fromAminoMsg(object: ContractAminoMsg): Contract;
    toAminoMsg(message: Contract): ContractAminoMsg;
    fromProtoMsg(message: ContractProtoMsg): Contract;
    toProto(message: Contract): Uint8Array;
    toProtoMsg(message: Contract): ContractProtoMsg;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Sequence;
    fromPartial(object: DeepPartial<Sequence>): Sequence;
    fromAmino(object: SequenceAmino): Sequence;
    toAmino(message: Sequence): SequenceAmino;
    fromAminoMsg(object: SequenceAminoMsg): Sequence;
    toAminoMsg(message: Sequence): SequenceAminoMsg;
    fromProtoMsg(message: SequenceProtoMsg): Sequence;
    toProto(message: Sequence): Uint8Array;
    toProtoMsg(message: Sequence): SequenceProtoMsg;
};
