import * as _48 from "./wasm/v1/genesis";
import * as _49 from "./wasm/v1/ibc";
import * as _50 from "./wasm/v1/proposal";
import * as _51 from "./wasm/v1/query";
import * as _52 from "./wasm/v1/tx";
import * as _53 from "./wasm/v1/types";
import * as _132 from "./wasm/v1/query.lcd";
import * as _133 from "./wasm/v1/query.rpc.Query";
import * as _134 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _134.MsgClientImpl;
            QueryClientImpl: typeof _133.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _51.QueryContractInfoRequest): Promise<_51.QueryContractInfoResponse>;
                contractHistory(request: _51.QueryContractHistoryRequest): Promise<_51.QueryContractHistoryResponse>;
                contractsByCode(request: _51.QueryContractsByCodeRequest): Promise<_51.QueryContractsByCodeResponse>;
                allContractState(request: _51.QueryAllContractStateRequest): Promise<_51.QueryAllContractStateResponse>;
                rawContractState(request: _51.QueryRawContractStateRequest): Promise<_51.QueryRawContractStateResponse>;
                smartContractState(request: _51.QuerySmartContractStateRequest): Promise<_51.QuerySmartContractStateResponse>;
                code(request: _51.QueryCodeRequest): Promise<_51.QueryCodeResponse>;
                codes(request?: _51.QueryCodesRequest): Promise<_51.QueryCodesResponse>;
                pinnedCodes(request?: _51.QueryPinnedCodesRequest): Promise<_51.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _52.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _52.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _52.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _52.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _52.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _52.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _52.MsgStoreCode): {
                        typeUrl: string;
                        value: _52.MsgStoreCode;
                    };
                    instantiateContract(value: _52.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _52.MsgInstantiateContract;
                    };
                    executeContract(value: _52.MsgExecuteContract): {
                        typeUrl: string;
                        value: _52.MsgExecuteContract;
                    };
                    migrateContract(value: _52.MsgMigrateContract): {
                        typeUrl: string;
                        value: _52.MsgMigrateContract;
                    };
                    updateAdmin(value: _52.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _52.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _52.MsgClearAdmin): {
                        typeUrl: string;
                        value: _52.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _52.MsgStoreCode): {
                        typeUrl: string;
                        value: _52.MsgStoreCode;
                    };
                    instantiateContract(value: _52.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _52.MsgInstantiateContract;
                    };
                    executeContract(value: _52.MsgExecuteContract): {
                        typeUrl: string;
                        value: _52.MsgExecuteContract;
                    };
                    migrateContract(value: _52.MsgMigrateContract): {
                        typeUrl: string;
                        value: _52.MsgMigrateContract;
                    };
                    updateAdmin(value: _52.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _52.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _52.MsgClearAdmin): {
                        typeUrl: string;
                        value: _52.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _52.MsgStoreCode) => {
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
                    }) => _52.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _52.MsgInstantiateContract) => {
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
                    }) => _52.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _52.MsgExecuteContract) => {
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
                    }) => _52.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _52.MsgMigrateContract) => {
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
                    }) => _52.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _52.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _52.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _52.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _52.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _53.AccessType;
            accessTypeToJSON(object: _53.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _53.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _53.ContractCodeHistoryOperationType): string;
            AccessType: typeof _53.AccessType;
            AccessTypeSDKType: typeof _53.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _53.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _53.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _53.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.AccessTypeParam;
                fromPartial(object: {
                    value?: _53.AccessType;
                }): _53.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _53.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.AccessConfig;
                fromPartial(object: {
                    permission?: _53.AccessType;
                    address?: string;
                }): _53.AccessConfig;
            };
            Params: {
                encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Params;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _53.AccessType;
                        address?: string;
                    };
                    instantiateDefaultPermission?: _53.AccessType;
                    maxWasmCodeSize?: any;
                }): _53.Params;
            };
            CodeInfo: {
                encode(message: _53.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CodeInfo;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _53.AccessType;
                        address?: string;
                    };
                }): _53.CodeInfo;
            };
            ContractInfo: {
                encode(message: _53.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ContractInfo;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _53.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _53.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ContractCodeHistoryEntry;
                fromPartial(object: {
                    operation?: _53.ContractCodeHistoryOperationType;
                    codeId?: any;
                    updated?: {
                        blockHeight?: any;
                        txIndex?: any;
                    };
                    msg?: Uint8Array;
                }): _53.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _53.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.AbsoluteTxPosition;
                fromPartial(object: {
                    blockHeight?: any;
                    txIndex?: any;
                }): _53.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _53.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Model;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _53.Model;
            };
            MsgStoreCode: {
                encode(message: _52.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgStoreCode;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _53.AccessType;
                        address?: string;
                    };
                }): _52.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _52.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgStoreCodeResponse;
                fromPartial(object: {
                    codeId?: any;
                }): _52.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _52.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgInstantiateContract;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _52.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _52.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgInstantiateContractResponse;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _52.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _52.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgExecuteContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _52.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _52.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgExecuteContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _52.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _52.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgMigrateContract;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _52.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _52.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgMigrateContractResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _52.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _52.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUpdateAdmin;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _52.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _52.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgUpdateAdminResponse;
                fromPartial(_: {}): _52.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _52.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgClearAdmin;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _52.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _52.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MsgClearAdminResponse;
                fromPartial(_: {}): _52.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _51.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryContractInfoRequest;
                fromPartial(object: {
                    address?: string;
                }): _51.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _51.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryContractInfoResponse;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _51.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _51.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryContractHistoryRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _51.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _51.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryContractHistoryResponse;
                fromPartial(object: {
                    entries?: {
                        operation?: _53.ContractCodeHistoryOperationType;
                        codeId?: any;
                        updated?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _51.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _51.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryContractsByCodeRequest;
                fromPartial(object: {
                    codeId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _51.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _51.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryContractsByCodeResponse;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _51.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _51.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _51.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _51.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryAllContractStateResponse;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _51.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _51.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryRawContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _51.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _51.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryRawContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _51.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _51.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QuerySmartContractStateRequest;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _51.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _51.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QuerySmartContractStateResponse;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _51.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _51.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCodeRequest;
                fromPartial(object: {
                    codeId?: any;
                }): _51.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _51.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.CodeInfoResponse;
                fromPartial(object: {
                    codeId?: any;
                    creator?: string;
                    dataHash?: Uint8Array;
                }): _51.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _51.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCodeResponse;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    };
                    data?: Uint8Array;
                }): _51.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _51.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _51.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _51.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryCodesResponse;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: any;
                        creator?: string;
                        dataHash?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _51.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _51.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryPinnedCodesRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _51.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _51.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.QueryPinnedCodesResponse;
                fromPartial(object: {
                    codeIds?: any[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _51.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _50.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.StoreCodeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _53.AccessType;
                        address?: string;
                    };
                }): _50.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _50.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.InstantiateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: any;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _50.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MigrateContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: any;
                    msg?: Uint8Array;
                }): _50.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _50.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.SudoContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _50.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _50.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ExecuteContractProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _50.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _50.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.UpdateAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _50.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _50.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ClearAdminProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _50.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _50.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.PinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _50.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _50.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.UnpinCodesProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: any[];
                }): _50.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _49.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgIBCSend;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: any;
                    timeoutTimestamp?: any;
                    data?: Uint8Array;
                }): _49.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _49.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgIBCCloseChannel;
                fromPartial(object: {
                    channel?: string;
                }): _49.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _53.AccessType;
                            address?: string;
                        };
                        instantiateDefaultPermission?: _53.AccessType;
                        maxWasmCodeSize?: any;
                    };
                    codes?: {
                        codeId?: any;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _53.AccessType;
                                address?: string;
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: any;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: any;
                                txIndex?: any;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: any;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _53.AccessType;
                                address?: string;
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: any;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _48.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _48.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState_GenMsgs;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _53.AccessType;
                            address?: string;
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: any;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _48.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _48.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Code;
                fromPartial(object: {
                    codeId?: any;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _53.AccessType;
                            address?: string;
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _48.Code;
            };
            Contract: {
                encode(message: _48.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Contract;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: any;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: any;
                            txIndex?: any;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _48.Contract;
            };
            Sequence: {
                encode(message: _48.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Sequence;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: any;
                }): _48.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _134.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _51.QueryContractInfoRequest): Promise<_51.QueryContractInfoResponse>;
                        contractHistory(request: _51.QueryContractHistoryRequest): Promise<_51.QueryContractHistoryResponse>;
                        contractsByCode(request: _51.QueryContractsByCodeRequest): Promise<_51.QueryContractsByCodeResponse>;
                        allContractState(request: _51.QueryAllContractStateRequest): Promise<_51.QueryAllContractStateResponse>;
                        rawContractState(request: _51.QueryRawContractStateRequest): Promise<_51.QueryRawContractStateResponse>;
                        smartContractState(request: _51.QuerySmartContractStateRequest): Promise<_51.QuerySmartContractStateResponse>;
                        code(request: _51.QueryCodeRequest): Promise<_51.QueryCodeResponse>;
                        codes(request?: _51.QueryCodesRequest): Promise<_51.QueryCodesResponse>;
                        pinnedCodes(request?: _51.QueryPinnedCodesRequest): Promise<_51.QueryPinnedCodesResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
                    v1: _132.LCDQueryClient;
                };
            };
        }>;
    };
}
