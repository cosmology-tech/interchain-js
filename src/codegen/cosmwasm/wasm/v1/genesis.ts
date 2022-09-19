import { MsgStoreCode, MsgStoreCodeSDKType, MsgInstantiateContract, MsgInstantiateContractSDKType, MsgExecuteContract, MsgExecuteContractSDKType } from "./tx";
import { Params, ParamsSDKType, CodeInfo, CodeInfoSDKType, ContractInfo, ContractInfoSDKType, Model, ModelSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** GenesisState - genesis state of x/wasm */

export interface GenesisState {
  params: Params;
  codes: Code[];
  contracts: Contract[];
  sequences: Sequence[];
  gen_msgs: GenesisState_GenMsgs[];
}
/** GenesisState - genesis state of x/wasm */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
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
  store_code?: MsgStoreCode;
  instantiate_contract?: MsgInstantiateContract;
  execute_contract?: MsgExecuteContract;
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
  code_id: Long;
  code_info: CodeInfo;
  code_bytes: Uint8Array;
  /** Pinned to wasmvm cache */

  pinned: boolean;
}
/** Code struct encompasses CodeInfo and CodeBytes */

export interface CodeSDKType {
  code_id: Long;
  code_info: CodeInfoSDKType;
  code_bytes: Uint8Array;
  /** Pinned to wasmvm cache */

  pinned: boolean;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface Contract {
  contract_address: string;
  contract_info: ContractInfo;
  contract_state: Model[];
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */

export interface ContractSDKType {
  contract_address: string;
  contract_info: ContractInfoSDKType;
  contract_state: ModelSDKType[];
}
/** Sequence key and value of an id generation counter */

export interface Sequence {
  id_key: Uint8Array;
  value: Long;
}
/** Sequence key and value of an id generation counter */

export interface SequenceSDKType {
  id_key: Uint8Array;
  value: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    codes: [],
    contracts: [],
    sequences: [],
    gen_msgs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.codes) {
      Code.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.contracts) {
      Contract.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.sequences) {
      Sequence.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.gen_msgs) {
      GenesisState_GenMsgs.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.codes.push(Code.decode(reader, reader.uint32()));
          break;

        case 3:
          message.contracts.push(Contract.decode(reader, reader.uint32()));
          break;

        case 4:
          message.sequences.push(Sequence.decode(reader, reader.uint32()));
          break;

        case 5:
          message.gen_msgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
    message.codes = object.codes?.map(e => Code.fromPartial(e)) || [];
    message.contracts = object.contracts?.map(e => Contract.fromPartial(e)) || [];
    message.sequences = object.sequences?.map(e => Sequence.fromPartial(e)) || [];
    message.gen_msgs = object.gen_msgs?.map(e => GenesisState_GenMsgs.fromPartial(e)) || [];
    return message;
  }

};

function createBaseGenesisState_GenMsgs(): GenesisState_GenMsgs {
  return {
    store_code: undefined,
    instantiate_contract: undefined,
    execute_contract: undefined
  };
}

export const GenesisState_GenMsgs = {
  encode(message: GenesisState_GenMsgs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.store_code !== undefined) {
      MsgStoreCode.encode(message.store_code, writer.uint32(10).fork()).ldelim();
    }

    if (message.instantiate_contract !== undefined) {
      MsgInstantiateContract.encode(message.instantiate_contract, writer.uint32(18).fork()).ldelim();
    }

    if (message.execute_contract !== undefined) {
      MsgExecuteContract.encode(message.execute_contract, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState_GenMsgs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState_GenMsgs();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.store_code = MsgStoreCode.decode(reader, reader.uint32());
          break;

        case 2:
          message.instantiate_contract = MsgInstantiateContract.decode(reader, reader.uint32());
          break;

        case 3:
          message.execute_contract = MsgExecuteContract.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState_GenMsgs>): GenesisState_GenMsgs {
    const message = createBaseGenesisState_GenMsgs();
    message.store_code = object.store_code !== undefined && object.store_code !== null ? MsgStoreCode.fromPartial(object.store_code) : undefined;
    message.instantiate_contract = object.instantiate_contract !== undefined && object.instantiate_contract !== null ? MsgInstantiateContract.fromPartial(object.instantiate_contract) : undefined;
    message.execute_contract = object.execute_contract !== undefined && object.execute_contract !== null ? MsgExecuteContract.fromPartial(object.execute_contract) : undefined;
    return message;
  }

};

function createBaseCode(): Code {
  return {
    code_id: Long.UZERO,
    code_info: undefined,
    code_bytes: new Uint8Array(),
    pinned: false
  };
}

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.code_id.isZero()) {
      writer.uint32(8).uint64(message.code_id);
    }

    if (message.code_info !== undefined) {
      CodeInfo.encode(message.code_info, writer.uint32(18).fork()).ldelim();
    }

    if (message.code_bytes.length !== 0) {
      writer.uint32(26).bytes(message.code_bytes);
    }

    if (message.pinned === true) {
      writer.uint32(32).bool(message.pinned);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code_id = (reader.uint64() as Long);
          break;

        case 2:
          message.code_info = CodeInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.code_bytes = reader.bytes();
          break;

        case 4:
          message.pinned = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Code>): Code {
    const message = createBaseCode();
    message.code_id = object.code_id !== undefined && object.code_id !== null ? Long.fromValue(object.code_id) : Long.UZERO;
    message.code_info = object.code_info !== undefined && object.code_info !== null ? CodeInfo.fromPartial(object.code_info) : undefined;
    message.code_bytes = object.code_bytes ?? new Uint8Array();
    message.pinned = object.pinned ?? false;
    return message;
  }

};

function createBaseContract(): Contract {
  return {
    contract_address: "",
    contract_info: undefined,
    contract_state: []
  };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }

    if (message.contract_info !== undefined) {
      ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.contract_state) {
      Model.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;

        case 2:
          message.contract_info = ContractInfo.decode(reader, reader.uint32());
          break;

        case 3:
          message.contract_state.push(Model.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Contract>): Contract {
    const message = createBaseContract();
    message.contract_address = object.contract_address ?? "";
    message.contract_info = object.contract_info !== undefined && object.contract_info !== null ? ContractInfo.fromPartial(object.contract_info) : undefined;
    message.contract_state = object.contract_state?.map(e => Model.fromPartial(e)) || [];
    return message;
  }

};

function createBaseSequence(): Sequence {
  return {
    id_key: new Uint8Array(),
    value: Long.UZERO
  };
}

export const Sequence = {
  encode(message: Sequence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id_key.length !== 0) {
      writer.uint32(10).bytes(message.id_key);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Sequence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSequence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id_key = reader.bytes();
          break;

        case 2:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Sequence>): Sequence {
    const message = createBaseSequence();
    message.id_key = object.id_key ?? new Uint8Array();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  }

};