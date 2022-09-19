import * as _85 from "./wasm/v1/genesis";
import * as _86 from "./wasm/v1/ibc";
import * as _87 from "./wasm/v1/proposal";
import * as _88 from "./wasm/v1/query";
import * as _89 from "./wasm/v1/tx";
import * as _90 from "./wasm/v1/types";
import * as _206 from "./wasm/v1/query.lcd";
import * as _207 from "./wasm/v1/query.rpc.query";
import * as _208 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _208.MsgClientImpl;
            QueryClientImpl: typeof _207.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _88.QueryContractInfoRequest): Promise<_88.QueryContractInfoResponseSDKType>;
                contractHistory(request: _88.QueryContractHistoryRequest): Promise<_88.QueryContractHistoryResponseSDKType>;
                contractsByCode(request: _88.QueryContractsByCodeRequest): Promise<_88.QueryContractsByCodeResponseSDKType>;
                allContractState(request: _88.QueryAllContractStateRequest): Promise<_88.QueryAllContractStateResponseSDKType>;
                rawContractState(request: _88.QueryRawContractStateRequest): Promise<_88.QueryRawContractStateResponseSDKType>;
                smartContractState(request: _88.QuerySmartContractStateRequest): Promise<_88.QuerySmartContractStateResponseSDKType>;
                code(request: _88.QueryCodeRequest): Promise<_88.QueryCodeResponseSDKType>;
                codes(request?: _88.QueryCodesRequest): Promise<_88.QueryCodesResponseSDKType>;
                pinnedCodes(request?: _88.QueryPinnedCodesRequest): Promise<_88.QueryPinnedCodesResponseSDKType>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _89.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _89.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _89.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _89.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _89.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _89.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _89.MsgStoreCode): {
                        typeUrl: string;
                        value: _89.MsgStoreCode;
                    };
                    instantiateContract(value: _89.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _89.MsgInstantiateContract;
                    };
                    executeContract(value: _89.MsgExecuteContract): {
                        typeUrl: string;
                        value: _89.MsgExecuteContract;
                    };
                    migrateContract(value: _89.MsgMigrateContract): {
                        typeUrl: string;
                        value: _89.MsgMigrateContract;
                    };
                    updateAdmin(value: _89.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _89.MsgClearAdmin): {
                        typeUrl: string;
                        value: _89.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _89.MsgStoreCode): {
                        typeUrl: string;
                        value: _89.MsgStoreCode;
                    };
                    instantiateContract(value: _89.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _89.MsgInstantiateContract;
                    };
                    executeContract(value: _89.MsgExecuteContract): {
                        typeUrl: string;
                        value: _89.MsgExecuteContract;
                    };
                    migrateContract(value: _89.MsgMigrateContract): {
                        typeUrl: string;
                        value: _89.MsgMigrateContract;
                    };
                    updateAdmin(value: _89.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _89.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _89.MsgClearAdmin): {
                        typeUrl: string;
                        value: _89.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasm_byte_code, instantiate_permission }: _89.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _89.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, code_id, label, msg, funds }: _89.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _89.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _89.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _89.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, code_id, msg }: _89.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _89.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, new_admin, contract }: _89.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _89.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _89.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _89.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _90.AccessType;
            accessTypeToJSON(object: _90.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _90.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _90.ContractCodeHistoryOperationType): string;
            AccessType: typeof _90.AccessType;
            AccessTypeSDKType: typeof _90.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _90.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _90.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _90.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AccessTypeParam;
                fromPartial(object: {
                    value?: _90.AccessType;
                }): _90.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _90.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AccessConfig;
                fromPartial(object: {
                    permission?: _90.AccessType;
                    address?: string;
                }): _90.AccessConfig;
            };
            Params: {
                encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
                fromPartial(object: {
                    code_upload_access?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                    instantiate_default_permission?: _90.AccessType;
                    max_wasm_code_size?: any;
                }): _90.Params;
            };
            CodeInfo: {
                encode(message: _90.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CodeInfo;
                fromPartial(object: {
                    code_hash?: Uint8Array;
                    creator?: string;
                    instantiate_config?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                }): _90.CodeInfo;
            };
            ContractInfo: {
                encode(message: _90.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ContractInfo;
                fromPartial(object: {
                    code_id?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        block_height?: any;
                        tx_index?: any;
                    };
                    ibc_port_id?: string;
                    extension?: {
                        type_url?: string;
                        value?: Uint8Array;
                    };
                }): _90.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _90.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ContractCodeHistoryEntry;
                fromPartial(object: {
                    operation?: _90.ContractCodeHistoryOperationType;
                    code_id?: any;
                    updated?: {
                        block_height?: any;
                        tx_index?: any;
                    };
                    msg?: Uint8Array;
                }): _90.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _90.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.AbsoluteTxPosition;
                fromPartial(object: {
                    block_height?: any;
                    tx_index?: any;
                }): _90.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _90.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Model;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _90.Model;
            };
            MsgStoreCode: {
                encode(message: _89.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgStoreCode;
                fromPartial(object: {
                    sender?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                }): _89.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _89.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgStoreCodeResponseSDKType;
                fromPartial(object: {
                    code_id?: any;
                }): _89.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _89.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    code_id?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _89.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _89.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgInstantiateContractResponseSDKType;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _89.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _89.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _89.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _89.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgExecuteContractResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _89.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _89.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgMigrateContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    code_id?: any;
                    msg?: Uint8Array;
                }): _89.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _89.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgMigrateContractResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _89.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _89.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUpdateAdmin;
                fromPartial(object: {
                    sender?: string;
                    new_admin?: string;
                    contract?: string;
                }): _89.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _89.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgUpdateAdminResponseSDKType;
                fromPartial(_: {}): _89.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _89.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgClearAdmin;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _89.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _89.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.MsgClearAdminResponseSDKType;
                fromPartial(_: {}): _89.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _88.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _88.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _88.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractInfoResponseSDKType;
                fromPartial(object: {
                    address?: string;
                    contract_info?: {
                        code_id?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            block_height?: any;
                            tx_index?: any;
                        };
                        ibc_port_id?: string;
                        extension?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _88.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _88.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractHistoryRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _88.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractHistoryResponseSDKType;
                fromPartial(object: {
                    entries?: {
                        operation?: _90.ContractCodeHistoryOperationType;
                        code_id?: any;
                        updated?: {
                            block_height?: any;
                            tx_index?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _88.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractsByCodeRequest;
                fromPartial(object: {
                    code_id?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _88.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryContractsByCodeResponseSDKType;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _88.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _88.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryAllContractStateResponseSDKType;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _88.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryRawContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    query_data?: Uint8Array;
                }): _88.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _88.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryRawContractStateResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _88.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _88.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QuerySmartContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    query_data?: Uint8Array;
                }): _88.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _88.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QuerySmartContractStateResponseSDKType;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _88.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _88.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodeRequest;
                fromPartial(object: {
                    code_id?: any;
                }): _88.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _88.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.CodeInfoResponse;
                fromPartial(object: {
                    code_id?: any;
                    creator?: string;
                    data_hash?: Uint8Array;
                }): _88.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _88.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodeResponseSDKType;
                fromPartial(object: {
                    code_info?: {
                        code_id?: any;
                        creator?: string;
                        data_hash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _88.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _88.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _88.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryCodesResponseSDKType;
                fromPartial(object: {
                    code_infos?: {
                        code_id?: any;
                        creator?: string;
                        data_hash?: Uint8Array;
                    }[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _88.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryPinnedCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        count_total?: boolean;
                        reverse?: boolean;
                    };
                }): _88.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _88.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryPinnedCodesResponseSDKType;
                fromPartial(object: {
                    code_ids?: any[];
                    pagination?: {
                        next_key?: Uint8Array;
                        total?: any;
                    };
                }): _88.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _87.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.StoreCodeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    wasm_byte_code?: Uint8Array;
                    instantiate_permission?: {
                        permission?: _90.AccessType;
                        address?: string;
                    };
                }): _87.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _87.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.InstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    admin?: string;
                    code_id?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _87.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MigrateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    code_id?: any;
                    msg?: Uint8Array;
                }): _87.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _87.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.SudoContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _87.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _87.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ExecuteContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    run_as?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _87.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _87.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.UpdateAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    new_admin?: string;
                    contract?: string;
                }): _87.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _87.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClearAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _87.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _87.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.PinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    code_ids?: any[];
                }): _87.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _87.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.UnpinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    code_ids?: any[];
                }): _87.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _86.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgIBCSend;
                fromPartial(object: {
                    channel?: string;
                    timeout_height?: any;
                    timeout_timestamp?: any;
                    data?: Uint8Array;
                }): _86.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _86.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgIBCCloseChannel;
                fromPartial(object: {
                    channel?: string;
                }): _86.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState;
                fromPartial(object: {
                    params?: {
                        code_upload_access?: {
                            permission?: _90.AccessType;
                            address?: string;
                        };
                        instantiate_default_permission?: _90.AccessType;
                        max_wasm_code_size?: any;
                    };
                    codes?: {
                        code_id?: any;
                        code_info?: {
                            code_hash?: Uint8Array;
                            creator?: string;
                            instantiate_config?: {
                                permission?: _90.AccessType;
                                address?: string;
                            };
                        };
                        code_bytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contract_address?: string;
                        contract_info?: {
                            code_id?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                block_height?: any;
                                tx_index?: any;
                            };
                            ibc_port_id?: string;
                            extension?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        contract_state?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        id_key?: Uint8Array;
                        value?: any;
                    }[];
                    gen_msgs?: {
                        store_code?: {
                            sender?: string;
                            wasm_byte_code?: Uint8Array;
                            instantiate_permission?: {
                                permission?: _90.AccessType;
                                address?: string;
                            };
                        };
                        instantiate_contract?: {
                            sender?: string;
                            admin?: string;
                            code_id?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        execute_contract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _85.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _85.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState_GenMsgs;
                fromPartial(object: {
                    store_code?: {
                        sender?: string;
                        wasm_byte_code?: Uint8Array;
                        instantiate_permission?: {
                            permission?: _90.AccessType;
                            address?: string;
                        };
                    };
                    instantiate_contract?: {
                        sender?: string;
                        admin?: string;
                        code_id?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    execute_contract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _85.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _85.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Code;
                fromPartial(object: {
                    code_id?: any;
                    code_info?: {
                        code_hash?: Uint8Array;
                        creator?: string;
                        instantiate_config?: {
                            permission?: _90.AccessType;
                            address?: string;
                        };
                    };
                    code_bytes?: Uint8Array;
                    pinned?: boolean;
                }): _85.Code;
            };
            Contract: {
                encode(message: _85.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Contract;
                fromPartial(object: {
                    contract_address?: string;
                    contract_info?: {
                        code_id?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            block_height?: any;
                            tx_index?: any;
                        };
                        ibc_port_id?: string;
                        extension?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    };
                    contract_state?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _85.Contract;
            };
            Sequence: {
                encode(message: _85.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Sequence;
                fromPartial(object: {
                    id_key?: Uint8Array;
                    value?: any;
                }): _85.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _208.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponseSDKType>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponseSDKType>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponseSDKType>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponseSDKType>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponseSDKType>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponseSDKType>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponseSDKType>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponseSDKType>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponseSDKType>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponseSDKType>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponseSDKType>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponseSDKType>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponseSDKType>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponseSDKType>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponseSDKType>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponseSDKType>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponseSDKType>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponseSDKType>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponseSDKType>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponseSDKType>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponseSDKType>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponseSDKType>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponseSDKType>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponseSDKType>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponseSDKType>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponseSDKType>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponseSDKType>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponseSDKType>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponseSDKType>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponseSDKType>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponseSDKType>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponseSDKType>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponseSDKType>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponseSDKType>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponseSDKType>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponseSDKType>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponseSDKType>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponseSDKType>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponseSDKType>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponseSDKType>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponseSDKType>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponseSDKType>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponseSDKType>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponseSDKType>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponseSDKType>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponseSDKType>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponseSDKType>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponseSDKType>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponseSDKType>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponseSDKType>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponseSDKType>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponseSDKType>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponseSDKType>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponseSDKType>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponseSDKType>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponseSDKType>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponseSDKType>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponseSDKType>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponseSDKType>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponseSDKType>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponseSDKType>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponseSDKType>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponseSDKType>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponseSDKType>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponseSDKType>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponseSDKType>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponseSDKType>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponseSDKType>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponseSDKType>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponseSDKType>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponseSDKType>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponseSDKType>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponseSDKType>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponseSDKType>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponseSDKType>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponseSDKType>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponseSDKType>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponseSDKType>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponseSDKType>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponseSDKType>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponseSDKType>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponseSDKType>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponseSDKType>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponseSDKType>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponseSDKType>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponseSDKType>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _88.QueryContractInfoRequest): Promise<_88.QueryContractInfoResponseSDKType>;
                        contractHistory(request: _88.QueryContractHistoryRequest): Promise<_88.QueryContractHistoryResponseSDKType>;
                        contractsByCode(request: _88.QueryContractsByCodeRequest): Promise<_88.QueryContractsByCodeResponseSDKType>;
                        allContractState(request: _88.QueryAllContractStateRequest): Promise<_88.QueryAllContractStateResponseSDKType>;
                        rawContractState(request: _88.QueryRawContractStateRequest): Promise<_88.QueryRawContractStateResponseSDKType>;
                        smartContractState(request: _88.QuerySmartContractStateRequest): Promise<_88.QuerySmartContractStateResponseSDKType>;
                        code(request: _88.QueryCodeRequest): Promise<_88.QueryCodeResponseSDKType>;
                        codes(request?: _88.QueryCodesRequest): Promise<_88.QueryCodesResponseSDKType>;
                        pinnedCodes(request?: _88.QueryPinnedCodesRequest): Promise<_88.QueryPinnedCodesResponseSDKType>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _206.LCDQueryClient;
                };
            };
        }>;
    };
}
