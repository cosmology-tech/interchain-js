import * as _93 from "./wasm/v1/genesis";
import * as _94 from "./wasm/v1/ibc";
import * as _95 from "./wasm/v1/proposal";
import * as _96 from "./wasm/v1/query";
import * as _97 from "./wasm/v1/tx";
import * as _98 from "./wasm/v1/types";
import * as _173 from "./wasm/v1/query.lcd";
import * as _174 from "./wasm/v1/query.rpc.Query";
import * as _175 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _175.MsgClientImpl;
            QueryClientImpl: typeof _174.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _96.QueryContractInfoRequest): Promise<_96.QueryContractInfoResponse>;
                contractHistory(request: _96.QueryContractHistoryRequest): Promise<_96.QueryContractHistoryResponse>;
                contractsByCode(request: _96.QueryContractsByCodeRequest): Promise<_96.QueryContractsByCodeResponse>;
                allContractState(request: _96.QueryAllContractStateRequest): Promise<_96.QueryAllContractStateResponse>;
                rawContractState(request: _96.QueryRawContractStateRequest): Promise<_96.QueryRawContractStateResponse>;
                smartContractState(request: _96.QuerySmartContractStateRequest): Promise<_96.QuerySmartContractStateResponse>;
                code(request: _96.QueryCodeRequest): Promise<_96.QueryCodeResponse>;
                codes(request?: _96.QueryCodesRequest): Promise<_96.QueryCodesResponse>;
                pinnedCodes(request?: _96.QueryPinnedCodesRequest): Promise<_96.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _173.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _97.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _97.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _97.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _97.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _97.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _97.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _97.MsgStoreCode): {
                        typeUrl: string;
                        value: _97.MsgStoreCode;
                    };
                    instantiateContract(value: _97.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract;
                    };
                    executeContract(value: _97.MsgExecuteContract): {
                        typeUrl: string;
                        value: _97.MsgExecuteContract;
                    };
                    migrateContract(value: _97.MsgMigrateContract): {
                        typeUrl: string;
                        value: _97.MsgMigrateContract;
                    };
                    updateAdmin(value: _97.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _97.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _97.MsgClearAdmin): {
                        typeUrl: string;
                        value: _97.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _97.MsgStoreCode): {
                        typeUrl: string;
                        value: _97.MsgStoreCode;
                    };
                    instantiateContract(value: _97.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _97.MsgInstantiateContract;
                    };
                    executeContract(value: _97.MsgExecuteContract): {
                        typeUrl: string;
                        value: _97.MsgExecuteContract;
                    };
                    migrateContract(value: _97.MsgMigrateContract): {
                        typeUrl: string;
                        value: _97.MsgMigrateContract;
                    };
                    updateAdmin(value: _97.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _97.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _97.MsgClearAdmin): {
                        typeUrl: string;
                        value: _97.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _97.MsgStoreCode) => _97.MsgStoreCodeAmino;
                    fromAmino: (object: _97.MsgStoreCodeAmino) => _97.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _97.MsgInstantiateContract) => _97.MsgInstantiateContractAmino;
                    fromAmino: (object: _97.MsgInstantiateContractAmino) => _97.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _97.MsgExecuteContract) => _97.MsgExecuteContractAmino;
                    fromAmino: (object: _97.MsgExecuteContractAmino) => _97.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _97.MsgMigrateContract) => _97.MsgMigrateContractAmino;
                    fromAmino: (object: _97.MsgMigrateContractAmino) => _97.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _97.MsgUpdateAdmin) => _97.MsgUpdateAdminAmino;
                    fromAmino: (object: _97.MsgUpdateAdminAmino) => _97.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _97.MsgClearAdmin) => _97.MsgClearAdminAmino;
                    fromAmino: (object: _97.MsgClearAdminAmino) => _97.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _98.AccessType;
            accessTypeToJSON(object: _98.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _98.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _98.ContractCodeHistoryOperationType): string;
            AccessType: typeof _98.AccessType;
            AccessTypeSDKType: typeof _98.AccessType;
            AccessTypeAmino: typeof _98.AccessType;
            ContractCodeHistoryOperationType: typeof _98.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _98.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _98.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _98.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccessTypeParam;
                fromPartial(object: any): _98.AccessTypeParam;
                fromAmino(object: _98.AccessTypeParamAmino): _98.AccessTypeParam;
                toAmino(message: _98.AccessTypeParam): _98.AccessTypeParamAmino;
                fromAminoMsg(object: _98.AccessTypeParamAminoMsg): _98.AccessTypeParam;
                toAminoMsg(message: _98.AccessTypeParam): _98.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _98.AccessTypeParamProtoMsg): _98.AccessTypeParam;
                toProto(message: _98.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _98.AccessTypeParam): _98.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                encode(message: _98.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AccessConfig;
                fromPartial(object: any): _98.AccessConfig;
                fromAmino(object: _98.AccessConfigAmino): _98.AccessConfig;
                toAmino(message: _98.AccessConfig): _98.AccessConfigAmino;
                fromAminoMsg(object: _98.AccessConfigAminoMsg): _98.AccessConfig;
                toAminoMsg(message: _98.AccessConfig): _98.AccessConfigAminoMsg;
                fromProtoMsg(message: _98.AccessConfigProtoMsg): _98.AccessConfig;
                toProto(message: _98.AccessConfig): Uint8Array;
                toProtoMsg(message: _98.AccessConfig): _98.AccessConfigProtoMsg;
            };
            Params: {
                encode(message: _98.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Params;
                fromPartial(object: any): _98.Params;
                fromAmino(object: _98.ParamsAmino): _98.Params;
                toAmino(message: _98.Params): _98.ParamsAmino;
                fromAminoMsg(object: _98.ParamsAminoMsg): _98.Params;
                toAminoMsg(message: _98.Params): _98.ParamsAminoMsg;
                fromProtoMsg(message: _98.ParamsProtoMsg): _98.Params;
                toProto(message: _98.Params): Uint8Array;
                toProtoMsg(message: _98.Params): _98.ParamsProtoMsg;
            };
            CodeInfo: {
                encode(message: _98.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.CodeInfo;
                fromPartial(object: any): _98.CodeInfo;
                fromAmino(object: _98.CodeInfoAmino): _98.CodeInfo;
                toAmino(message: _98.CodeInfo): _98.CodeInfoAmino;
                fromAminoMsg(object: _98.CodeInfoAminoMsg): _98.CodeInfo;
                toAminoMsg(message: _98.CodeInfo): _98.CodeInfoAminoMsg;
                fromProtoMsg(message: _98.CodeInfoProtoMsg): _98.CodeInfo;
                toProto(message: _98.CodeInfo): Uint8Array;
                toProtoMsg(message: _98.CodeInfo): _98.CodeInfoProtoMsg;
            };
            ContractInfo: {
                encode(message: _98.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ContractInfo;
                fromPartial(object: any): _98.ContractInfo;
                fromAmino(object: _98.ContractInfoAmino): _98.ContractInfo;
                toAmino(message: _98.ContractInfo): _98.ContractInfoAmino;
                fromAminoMsg(object: _98.ContractInfoAminoMsg): _98.ContractInfo;
                toAminoMsg(message: _98.ContractInfo): _98.ContractInfoAminoMsg;
                fromProtoMsg(message: _98.ContractInfoProtoMsg): _98.ContractInfo;
                toProto(message: _98.ContractInfo): Uint8Array;
                toProtoMsg(message: _98.ContractInfo): _98.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                encode(message: _98.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.ContractCodeHistoryEntry;
                fromPartial(object: any): _98.ContractCodeHistoryEntry;
                fromAmino(object: _98.ContractCodeHistoryEntryAmino): _98.ContractCodeHistoryEntry;
                toAmino(message: _98.ContractCodeHistoryEntry): _98.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _98.ContractCodeHistoryEntryAminoMsg): _98.ContractCodeHistoryEntry;
                toAminoMsg(message: _98.ContractCodeHistoryEntry): _98.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _98.ContractCodeHistoryEntryProtoMsg): _98.ContractCodeHistoryEntry;
                toProto(message: _98.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _98.ContractCodeHistoryEntry): _98.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                encode(message: _98.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.AbsoluteTxPosition;
                fromPartial(object: any): _98.AbsoluteTxPosition;
                fromAmino(object: _98.AbsoluteTxPositionAmino): _98.AbsoluteTxPosition;
                toAmino(message: _98.AbsoluteTxPosition): _98.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _98.AbsoluteTxPositionAminoMsg): _98.AbsoluteTxPosition;
                toAminoMsg(message: _98.AbsoluteTxPosition): _98.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _98.AbsoluteTxPositionProtoMsg): _98.AbsoluteTxPosition;
                toProto(message: _98.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _98.AbsoluteTxPosition): _98.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                encode(message: _98.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Model;
                fromPartial(object: any): _98.Model;
                fromAmino(object: _98.ModelAmino): _98.Model;
                toAmino(message: _98.Model): _98.ModelAmino;
                fromAminoMsg(object: _98.ModelAminoMsg): _98.Model;
                toAminoMsg(message: _98.Model): _98.ModelAminoMsg;
                fromProtoMsg(message: _98.ModelProtoMsg): _98.Model;
                toProto(message: _98.Model): Uint8Array;
                toProtoMsg(message: _98.Model): _98.ModelProtoMsg;
            };
            ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                encode(message: _97.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgStoreCode;
                fromPartial(object: any): _97.MsgStoreCode;
                fromAmino(object: _97.MsgStoreCodeAmino): _97.MsgStoreCode;
                toAmino(message: _97.MsgStoreCode): _97.MsgStoreCodeAmino;
                fromAminoMsg(object: _97.MsgStoreCodeAminoMsg): _97.MsgStoreCode;
                toAminoMsg(message: _97.MsgStoreCode): _97.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _97.MsgStoreCodeProtoMsg): _97.MsgStoreCode;
                toProto(message: _97.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _97.MsgStoreCode): _97.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                encode(message: _97.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgStoreCodeResponse;
                fromPartial(object: any): _97.MsgStoreCodeResponse;
                fromAmino(object: _97.MsgStoreCodeResponseAmino): _97.MsgStoreCodeResponse;
                toAmino(message: _97.MsgStoreCodeResponse): _97.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _97.MsgStoreCodeResponseAminoMsg): _97.MsgStoreCodeResponse;
                toAminoMsg(message: _97.MsgStoreCodeResponse): _97.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _97.MsgStoreCodeResponseProtoMsg): _97.MsgStoreCodeResponse;
                toProto(message: _97.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _97.MsgStoreCodeResponse): _97.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                encode(message: _97.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgInstantiateContract;
                fromPartial(object: any): _97.MsgInstantiateContract;
                fromAmino(object: _97.MsgInstantiateContractAmino): _97.MsgInstantiateContract;
                toAmino(message: _97.MsgInstantiateContract): _97.MsgInstantiateContractAmino;
                fromAminoMsg(object: _97.MsgInstantiateContractAminoMsg): _97.MsgInstantiateContract;
                toAminoMsg(message: _97.MsgInstantiateContract): _97.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _97.MsgInstantiateContractProtoMsg): _97.MsgInstantiateContract;
                toProto(message: _97.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _97.MsgInstantiateContract): _97.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                encode(message: _97.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgInstantiateContractResponse;
                fromPartial(object: any): _97.MsgInstantiateContractResponse;
                fromAmino(object: _97.MsgInstantiateContractResponseAmino): _97.MsgInstantiateContractResponse;
                toAmino(message: _97.MsgInstantiateContractResponse): _97.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _97.MsgInstantiateContractResponseAminoMsg): _97.MsgInstantiateContractResponse;
                toAminoMsg(message: _97.MsgInstantiateContractResponse): _97.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _97.MsgInstantiateContractResponseProtoMsg): _97.MsgInstantiateContractResponse;
                toProto(message: _97.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _97.MsgInstantiateContractResponse): _97.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                encode(message: _97.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgExecuteContract;
                fromPartial(object: any): _97.MsgExecuteContract;
                fromAmino(object: _97.MsgExecuteContractAmino): _97.MsgExecuteContract;
                toAmino(message: _97.MsgExecuteContract): _97.MsgExecuteContractAmino;
                fromAminoMsg(object: _97.MsgExecuteContractAminoMsg): _97.MsgExecuteContract;
                toAminoMsg(message: _97.MsgExecuteContract): _97.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _97.MsgExecuteContractProtoMsg): _97.MsgExecuteContract;
                toProto(message: _97.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _97.MsgExecuteContract): _97.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                encode(message: _97.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgExecuteContractResponse;
                fromPartial(object: any): _97.MsgExecuteContractResponse;
                fromAmino(object: _97.MsgExecuteContractResponseAmino): _97.MsgExecuteContractResponse;
                toAmino(message: _97.MsgExecuteContractResponse): _97.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _97.MsgExecuteContractResponseAminoMsg): _97.MsgExecuteContractResponse;
                toAminoMsg(message: _97.MsgExecuteContractResponse): _97.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _97.MsgExecuteContractResponseProtoMsg): _97.MsgExecuteContractResponse;
                toProto(message: _97.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _97.MsgExecuteContractResponse): _97.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                encode(message: _97.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgMigrateContract;
                fromPartial(object: any): _97.MsgMigrateContract;
                fromAmino(object: _97.MsgMigrateContractAmino): _97.MsgMigrateContract;
                toAmino(message: _97.MsgMigrateContract): _97.MsgMigrateContractAmino;
                fromAminoMsg(object: _97.MsgMigrateContractAminoMsg): _97.MsgMigrateContract;
                toAminoMsg(message: _97.MsgMigrateContract): _97.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _97.MsgMigrateContractProtoMsg): _97.MsgMigrateContract;
                toProto(message: _97.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _97.MsgMigrateContract): _97.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                encode(message: _97.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgMigrateContractResponse;
                fromPartial(object: any): _97.MsgMigrateContractResponse;
                fromAmino(object: _97.MsgMigrateContractResponseAmino): _97.MsgMigrateContractResponse;
                toAmino(message: _97.MsgMigrateContractResponse): _97.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _97.MsgMigrateContractResponseAminoMsg): _97.MsgMigrateContractResponse;
                toAminoMsg(message: _97.MsgMigrateContractResponse): _97.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _97.MsgMigrateContractResponseProtoMsg): _97.MsgMigrateContractResponse;
                toProto(message: _97.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _97.MsgMigrateContractResponse): _97.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                encode(message: _97.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgUpdateAdmin;
                fromPartial(object: any): _97.MsgUpdateAdmin;
                fromAmino(object: _97.MsgUpdateAdminAmino): _97.MsgUpdateAdmin;
                toAmino(message: _97.MsgUpdateAdmin): _97.MsgUpdateAdminAmino;
                fromAminoMsg(object: _97.MsgUpdateAdminAminoMsg): _97.MsgUpdateAdmin;
                toAminoMsg(message: _97.MsgUpdateAdmin): _97.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _97.MsgUpdateAdminProtoMsg): _97.MsgUpdateAdmin;
                toProto(message: _97.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _97.MsgUpdateAdmin): _97.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                encode(_: _97.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgUpdateAdminResponse;
                fromPartial(_: any): _97.MsgUpdateAdminResponse;
                fromAmino(_: _97.MsgUpdateAdminResponseAmino): _97.MsgUpdateAdminResponse;
                toAmino(_: _97.MsgUpdateAdminResponse): _97.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _97.MsgUpdateAdminResponseAminoMsg): _97.MsgUpdateAdminResponse;
                toAminoMsg(message: _97.MsgUpdateAdminResponse): _97.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _97.MsgUpdateAdminResponseProtoMsg): _97.MsgUpdateAdminResponse;
                toProto(message: _97.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _97.MsgUpdateAdminResponse): _97.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                encode(message: _97.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgClearAdmin;
                fromPartial(object: any): _97.MsgClearAdmin;
                fromAmino(object: _97.MsgClearAdminAmino): _97.MsgClearAdmin;
                toAmino(message: _97.MsgClearAdmin): _97.MsgClearAdminAmino;
                fromAminoMsg(object: _97.MsgClearAdminAminoMsg): _97.MsgClearAdmin;
                toAminoMsg(message: _97.MsgClearAdmin): _97.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _97.MsgClearAdminProtoMsg): _97.MsgClearAdmin;
                toProto(message: _97.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _97.MsgClearAdmin): _97.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                encode(_: _97.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.MsgClearAdminResponse;
                fromPartial(_: any): _97.MsgClearAdminResponse;
                fromAmino(_: _97.MsgClearAdminResponseAmino): _97.MsgClearAdminResponse;
                toAmino(_: _97.MsgClearAdminResponse): _97.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _97.MsgClearAdminResponseAminoMsg): _97.MsgClearAdminResponse;
                toAminoMsg(message: _97.MsgClearAdminResponse): _97.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _97.MsgClearAdminResponseProtoMsg): _97.MsgClearAdminResponse;
                toProto(message: _97.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _97.MsgClearAdminResponse): _97.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                encode(message: _96.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryContractInfoRequest;
                fromPartial(object: any): _96.QueryContractInfoRequest;
                fromAmino(object: _96.QueryContractInfoRequestAmino): _96.QueryContractInfoRequest;
                toAmino(message: _96.QueryContractInfoRequest): _96.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _96.QueryContractInfoRequestAminoMsg): _96.QueryContractInfoRequest;
                toAminoMsg(message: _96.QueryContractInfoRequest): _96.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _96.QueryContractInfoRequestProtoMsg): _96.QueryContractInfoRequest;
                toProto(message: _96.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _96.QueryContractInfoRequest): _96.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                encode(message: _96.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryContractInfoResponse;
                fromPartial(object: any): _96.QueryContractInfoResponse;
                fromAmino(object: _96.QueryContractInfoResponseAmino): _96.QueryContractInfoResponse;
                toAmino(message: _96.QueryContractInfoResponse): _96.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _96.QueryContractInfoResponseAminoMsg): _96.QueryContractInfoResponse;
                toAminoMsg(message: _96.QueryContractInfoResponse): _96.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _96.QueryContractInfoResponseProtoMsg): _96.QueryContractInfoResponse;
                toProto(message: _96.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _96.QueryContractInfoResponse): _96.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                encode(message: _96.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryContractHistoryRequest;
                fromPartial(object: any): _96.QueryContractHistoryRequest;
                fromAmino(object: _96.QueryContractHistoryRequestAmino): _96.QueryContractHistoryRequest;
                toAmino(message: _96.QueryContractHistoryRequest): _96.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _96.QueryContractHistoryRequestAminoMsg): _96.QueryContractHistoryRequest;
                toAminoMsg(message: _96.QueryContractHistoryRequest): _96.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _96.QueryContractHistoryRequestProtoMsg): _96.QueryContractHistoryRequest;
                toProto(message: _96.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _96.QueryContractHistoryRequest): _96.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                encode(message: _96.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryContractHistoryResponse;
                fromPartial(object: any): _96.QueryContractHistoryResponse;
                fromAmino(object: _96.QueryContractHistoryResponseAmino): _96.QueryContractHistoryResponse;
                toAmino(message: _96.QueryContractHistoryResponse): _96.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _96.QueryContractHistoryResponseAminoMsg): _96.QueryContractHistoryResponse;
                toAminoMsg(message: _96.QueryContractHistoryResponse): _96.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _96.QueryContractHistoryResponseProtoMsg): _96.QueryContractHistoryResponse;
                toProto(message: _96.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _96.QueryContractHistoryResponse): _96.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                encode(message: _96.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryContractsByCodeRequest;
                fromPartial(object: any): _96.QueryContractsByCodeRequest;
                fromAmino(object: _96.QueryContractsByCodeRequestAmino): _96.QueryContractsByCodeRequest;
                toAmino(message: _96.QueryContractsByCodeRequest): _96.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _96.QueryContractsByCodeRequestAminoMsg): _96.QueryContractsByCodeRequest;
                toAminoMsg(message: _96.QueryContractsByCodeRequest): _96.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _96.QueryContractsByCodeRequestProtoMsg): _96.QueryContractsByCodeRequest;
                toProto(message: _96.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _96.QueryContractsByCodeRequest): _96.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                encode(message: _96.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryContractsByCodeResponse;
                fromPartial(object: any): _96.QueryContractsByCodeResponse;
                fromAmino(object: _96.QueryContractsByCodeResponseAmino): _96.QueryContractsByCodeResponse;
                toAmino(message: _96.QueryContractsByCodeResponse): _96.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _96.QueryContractsByCodeResponseAminoMsg): _96.QueryContractsByCodeResponse;
                toAminoMsg(message: _96.QueryContractsByCodeResponse): _96.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _96.QueryContractsByCodeResponseProtoMsg): _96.QueryContractsByCodeResponse;
                toProto(message: _96.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _96.QueryContractsByCodeResponse): _96.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                encode(message: _96.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryAllContractStateRequest;
                fromPartial(object: any): _96.QueryAllContractStateRequest;
                fromAmino(object: _96.QueryAllContractStateRequestAmino): _96.QueryAllContractStateRequest;
                toAmino(message: _96.QueryAllContractStateRequest): _96.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _96.QueryAllContractStateRequestAminoMsg): _96.QueryAllContractStateRequest;
                toAminoMsg(message: _96.QueryAllContractStateRequest): _96.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _96.QueryAllContractStateRequestProtoMsg): _96.QueryAllContractStateRequest;
                toProto(message: _96.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _96.QueryAllContractStateRequest): _96.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                encode(message: _96.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryAllContractStateResponse;
                fromPartial(object: any): _96.QueryAllContractStateResponse;
                fromAmino(object: _96.QueryAllContractStateResponseAmino): _96.QueryAllContractStateResponse;
                toAmino(message: _96.QueryAllContractStateResponse): _96.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _96.QueryAllContractStateResponseAminoMsg): _96.QueryAllContractStateResponse;
                toAminoMsg(message: _96.QueryAllContractStateResponse): _96.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _96.QueryAllContractStateResponseProtoMsg): _96.QueryAllContractStateResponse;
                toProto(message: _96.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _96.QueryAllContractStateResponse): _96.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                encode(message: _96.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryRawContractStateRequest;
                fromPartial(object: any): _96.QueryRawContractStateRequest;
                fromAmino(object: _96.QueryRawContractStateRequestAmino): _96.QueryRawContractStateRequest;
                toAmino(message: _96.QueryRawContractStateRequest): _96.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _96.QueryRawContractStateRequestAminoMsg): _96.QueryRawContractStateRequest;
                toAminoMsg(message: _96.QueryRawContractStateRequest): _96.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _96.QueryRawContractStateRequestProtoMsg): _96.QueryRawContractStateRequest;
                toProto(message: _96.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _96.QueryRawContractStateRequest): _96.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                encode(message: _96.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryRawContractStateResponse;
                fromPartial(object: any): _96.QueryRawContractStateResponse;
                fromAmino(object: _96.QueryRawContractStateResponseAmino): _96.QueryRawContractStateResponse;
                toAmino(message: _96.QueryRawContractStateResponse): _96.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _96.QueryRawContractStateResponseAminoMsg): _96.QueryRawContractStateResponse;
                toAminoMsg(message: _96.QueryRawContractStateResponse): _96.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _96.QueryRawContractStateResponseProtoMsg): _96.QueryRawContractStateResponse;
                toProto(message: _96.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _96.QueryRawContractStateResponse): _96.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                encode(message: _96.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QuerySmartContractStateRequest;
                fromPartial(object: any): _96.QuerySmartContractStateRequest;
                fromAmino(object: _96.QuerySmartContractStateRequestAmino): _96.QuerySmartContractStateRequest;
                toAmino(message: _96.QuerySmartContractStateRequest): _96.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _96.QuerySmartContractStateRequestAminoMsg): _96.QuerySmartContractStateRequest;
                toAminoMsg(message: _96.QuerySmartContractStateRequest): _96.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _96.QuerySmartContractStateRequestProtoMsg): _96.QuerySmartContractStateRequest;
                toProto(message: _96.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _96.QuerySmartContractStateRequest): _96.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                encode(message: _96.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QuerySmartContractStateResponse;
                fromPartial(object: any): _96.QuerySmartContractStateResponse;
                fromAmino(object: _96.QuerySmartContractStateResponseAmino): _96.QuerySmartContractStateResponse;
                toAmino(message: _96.QuerySmartContractStateResponse): _96.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _96.QuerySmartContractStateResponseAminoMsg): _96.QuerySmartContractStateResponse;
                toAminoMsg(message: _96.QuerySmartContractStateResponse): _96.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _96.QuerySmartContractStateResponseProtoMsg): _96.QuerySmartContractStateResponse;
                toProto(message: _96.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _96.QuerySmartContractStateResponse): _96.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                encode(message: _96.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCodeRequest;
                fromPartial(object: any): _96.QueryCodeRequest;
                fromAmino(object: _96.QueryCodeRequestAmino): _96.QueryCodeRequest;
                toAmino(message: _96.QueryCodeRequest): _96.QueryCodeRequestAmino;
                fromAminoMsg(object: _96.QueryCodeRequestAminoMsg): _96.QueryCodeRequest;
                toAminoMsg(message: _96.QueryCodeRequest): _96.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _96.QueryCodeRequestProtoMsg): _96.QueryCodeRequest;
                toProto(message: _96.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _96.QueryCodeRequest): _96.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                encode(message: _96.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.CodeInfoResponse;
                fromPartial(object: any): _96.CodeInfoResponse;
                fromAmino(object: _96.CodeInfoResponseAmino): _96.CodeInfoResponse;
                toAmino(message: _96.CodeInfoResponse): _96.CodeInfoResponseAmino;
                fromAminoMsg(object: _96.CodeInfoResponseAminoMsg): _96.CodeInfoResponse;
                toAminoMsg(message: _96.CodeInfoResponse): _96.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _96.CodeInfoResponseProtoMsg): _96.CodeInfoResponse;
                toProto(message: _96.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _96.CodeInfoResponse): _96.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                encode(message: _96.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCodeResponse;
                fromPartial(object: any): _96.QueryCodeResponse;
                fromAmino(object: _96.QueryCodeResponseAmino): _96.QueryCodeResponse;
                toAmino(message: _96.QueryCodeResponse): _96.QueryCodeResponseAmino;
                fromAminoMsg(object: _96.QueryCodeResponseAminoMsg): _96.QueryCodeResponse;
                toAminoMsg(message: _96.QueryCodeResponse): _96.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _96.QueryCodeResponseProtoMsg): _96.QueryCodeResponse;
                toProto(message: _96.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _96.QueryCodeResponse): _96.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                encode(message: _96.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCodesRequest;
                fromPartial(object: any): _96.QueryCodesRequest;
                fromAmino(object: _96.QueryCodesRequestAmino): _96.QueryCodesRequest;
                toAmino(message: _96.QueryCodesRequest): _96.QueryCodesRequestAmino;
                fromAminoMsg(object: _96.QueryCodesRequestAminoMsg): _96.QueryCodesRequest;
                toAminoMsg(message: _96.QueryCodesRequest): _96.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _96.QueryCodesRequestProtoMsg): _96.QueryCodesRequest;
                toProto(message: _96.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryCodesRequest): _96.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                encode(message: _96.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryCodesResponse;
                fromPartial(object: any): _96.QueryCodesResponse;
                fromAmino(object: _96.QueryCodesResponseAmino): _96.QueryCodesResponse;
                toAmino(message: _96.QueryCodesResponse): _96.QueryCodesResponseAmino;
                fromAminoMsg(object: _96.QueryCodesResponseAminoMsg): _96.QueryCodesResponse;
                toAminoMsg(message: _96.QueryCodesResponse): _96.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _96.QueryCodesResponseProtoMsg): _96.QueryCodesResponse;
                toProto(message: _96.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryCodesResponse): _96.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                encode(message: _96.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryPinnedCodesRequest;
                fromPartial(object: any): _96.QueryPinnedCodesRequest;
                fromAmino(object: _96.QueryPinnedCodesRequestAmino): _96.QueryPinnedCodesRequest;
                toAmino(message: _96.QueryPinnedCodesRequest): _96.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _96.QueryPinnedCodesRequestAminoMsg): _96.QueryPinnedCodesRequest;
                toAminoMsg(message: _96.QueryPinnedCodesRequest): _96.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _96.QueryPinnedCodesRequestProtoMsg): _96.QueryPinnedCodesRequest;
                toProto(message: _96.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _96.QueryPinnedCodesRequest): _96.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                encode(message: _96.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryPinnedCodesResponse;
                fromPartial(object: any): _96.QueryPinnedCodesResponse;
                fromAmino(object: _96.QueryPinnedCodesResponseAmino): _96.QueryPinnedCodesResponse;
                toAmino(message: _96.QueryPinnedCodesResponse): _96.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _96.QueryPinnedCodesResponseAminoMsg): _96.QueryPinnedCodesResponse;
                toAminoMsg(message: _96.QueryPinnedCodesResponse): _96.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _96.QueryPinnedCodesResponseProtoMsg): _96.QueryPinnedCodesResponse;
                toProto(message: _96.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _96.QueryPinnedCodesResponse): _96.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                encode(message: _95.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.StoreCodeProposal;
                fromPartial(object: any): _95.StoreCodeProposal;
                fromAmino(object: _95.StoreCodeProposalAmino): _95.StoreCodeProposal;
                toAmino(message: _95.StoreCodeProposal): _95.StoreCodeProposalAmino;
                fromAminoMsg(object: _95.StoreCodeProposalAminoMsg): _95.StoreCodeProposal;
                toAminoMsg(message: _95.StoreCodeProposal): _95.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _95.StoreCodeProposalProtoMsg): _95.StoreCodeProposal;
                toProto(message: _95.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _95.StoreCodeProposal): _95.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                encode(message: _95.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.InstantiateContractProposal;
                fromPartial(object: any): _95.InstantiateContractProposal;
                fromAmino(object: _95.InstantiateContractProposalAmino): _95.InstantiateContractProposal;
                toAmino(message: _95.InstantiateContractProposal): _95.InstantiateContractProposalAmino;
                fromAminoMsg(object: _95.InstantiateContractProposalAminoMsg): _95.InstantiateContractProposal;
                toAminoMsg(message: _95.InstantiateContractProposal): _95.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _95.InstantiateContractProposalProtoMsg): _95.InstantiateContractProposal;
                toProto(message: _95.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _95.InstantiateContractProposal): _95.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                encode(message: _95.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MigrateContractProposal;
                fromPartial(object: any): _95.MigrateContractProposal;
                fromAmino(object: _95.MigrateContractProposalAmino): _95.MigrateContractProposal;
                toAmino(message: _95.MigrateContractProposal): _95.MigrateContractProposalAmino;
                fromAminoMsg(object: _95.MigrateContractProposalAminoMsg): _95.MigrateContractProposal;
                toAminoMsg(message: _95.MigrateContractProposal): _95.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _95.MigrateContractProposalProtoMsg): _95.MigrateContractProposal;
                toProto(message: _95.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _95.MigrateContractProposal): _95.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                encode(message: _95.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SudoContractProposal;
                fromPartial(object: any): _95.SudoContractProposal;
                fromAmino(object: _95.SudoContractProposalAmino): _95.SudoContractProposal;
                toAmino(message: _95.SudoContractProposal): _95.SudoContractProposalAmino;
                fromAminoMsg(object: _95.SudoContractProposalAminoMsg): _95.SudoContractProposal;
                toAminoMsg(message: _95.SudoContractProposal): _95.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _95.SudoContractProposalProtoMsg): _95.SudoContractProposal;
                toProto(message: _95.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _95.SudoContractProposal): _95.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                encode(message: _95.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ExecuteContractProposal;
                fromPartial(object: any): _95.ExecuteContractProposal;
                fromAmino(object: _95.ExecuteContractProposalAmino): _95.ExecuteContractProposal;
                toAmino(message: _95.ExecuteContractProposal): _95.ExecuteContractProposalAmino;
                fromAminoMsg(object: _95.ExecuteContractProposalAminoMsg): _95.ExecuteContractProposal;
                toAminoMsg(message: _95.ExecuteContractProposal): _95.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _95.ExecuteContractProposalProtoMsg): _95.ExecuteContractProposal;
                toProto(message: _95.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _95.ExecuteContractProposal): _95.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                encode(message: _95.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.UpdateAdminProposal;
                fromPartial(object: any): _95.UpdateAdminProposal;
                fromAmino(object: _95.UpdateAdminProposalAmino): _95.UpdateAdminProposal;
                toAmino(message: _95.UpdateAdminProposal): _95.UpdateAdminProposalAmino;
                fromAminoMsg(object: _95.UpdateAdminProposalAminoMsg): _95.UpdateAdminProposal;
                toAminoMsg(message: _95.UpdateAdminProposal): _95.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _95.UpdateAdminProposalProtoMsg): _95.UpdateAdminProposal;
                toProto(message: _95.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _95.UpdateAdminProposal): _95.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                encode(message: _95.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ClearAdminProposal;
                fromPartial(object: any): _95.ClearAdminProposal;
                fromAmino(object: _95.ClearAdminProposalAmino): _95.ClearAdminProposal;
                toAmino(message: _95.ClearAdminProposal): _95.ClearAdminProposalAmino;
                fromAminoMsg(object: _95.ClearAdminProposalAminoMsg): _95.ClearAdminProposal;
                toAminoMsg(message: _95.ClearAdminProposal): _95.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _95.ClearAdminProposalProtoMsg): _95.ClearAdminProposal;
                toProto(message: _95.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _95.ClearAdminProposal): _95.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                encode(message: _95.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.PinCodesProposal;
                fromPartial(object: any): _95.PinCodesProposal;
                fromAmino(object: _95.PinCodesProposalAmino): _95.PinCodesProposal;
                toAmino(message: _95.PinCodesProposal): _95.PinCodesProposalAmino;
                fromAminoMsg(object: _95.PinCodesProposalAminoMsg): _95.PinCodesProposal;
                toAminoMsg(message: _95.PinCodesProposal): _95.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _95.PinCodesProposalProtoMsg): _95.PinCodesProposal;
                toProto(message: _95.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _95.PinCodesProposal): _95.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                encode(message: _95.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.UnpinCodesProposal;
                fromPartial(object: any): _95.UnpinCodesProposal;
                fromAmino(object: _95.UnpinCodesProposalAmino): _95.UnpinCodesProposal;
                toAmino(message: _95.UnpinCodesProposal): _95.UnpinCodesProposalAmino;
                fromAminoMsg(object: _95.UnpinCodesProposalAminoMsg): _95.UnpinCodesProposal;
                toAminoMsg(message: _95.UnpinCodesProposal): _95.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _95.UnpinCodesProposalProtoMsg): _95.UnpinCodesProposal;
                toProto(message: _95.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _95.UnpinCodesProposal): _95.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                encode(message: _94.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgIBCSend;
                fromPartial(object: any): _94.MsgIBCSend;
                fromAmino(object: _94.MsgIBCSendAmino): _94.MsgIBCSend;
                toAmino(message: _94.MsgIBCSend): _94.MsgIBCSendAmino;
                fromAminoMsg(object: _94.MsgIBCSendAminoMsg): _94.MsgIBCSend;
                toAminoMsg(message: _94.MsgIBCSend): _94.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _94.MsgIBCSendProtoMsg): _94.MsgIBCSend;
                toProto(message: _94.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _94.MsgIBCSend): _94.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                encode(message: _94.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.MsgIBCCloseChannel;
                fromPartial(object: any): _94.MsgIBCCloseChannel;
                fromAmino(object: _94.MsgIBCCloseChannelAmino): _94.MsgIBCCloseChannel;
                toAmino(message: _94.MsgIBCCloseChannel): _94.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _94.MsgIBCCloseChannelAminoMsg): _94.MsgIBCCloseChannel;
                toAminoMsg(message: _94.MsgIBCCloseChannel): _94.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _94.MsgIBCCloseChannelProtoMsg): _94.MsgIBCCloseChannel;
                toProto(message: _94.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _94.MsgIBCCloseChannel): _94.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                encode(message: _93.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState;
                fromPartial(object: any): _93.GenesisState;
                fromAmino(object: _93.GenesisStateAmino): _93.GenesisState;
                toAmino(message: _93.GenesisState): _93.GenesisStateAmino;
                fromAminoMsg(object: _93.GenesisStateAminoMsg): _93.GenesisState;
                toAminoMsg(message: _93.GenesisState): _93.GenesisStateAminoMsg;
                fromProtoMsg(message: _93.GenesisStateProtoMsg): _93.GenesisState;
                toProto(message: _93.GenesisState): Uint8Array;
                toProtoMsg(message: _93.GenesisState): _93.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                encode(message: _93.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GenesisState_GenMsgs;
                fromPartial(object: any): _93.GenesisState_GenMsgs;
                fromAmino(object: _93.GenesisState_GenMsgsAmino): _93.GenesisState_GenMsgs;
                toAmino(message: _93.GenesisState_GenMsgs): _93.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _93.GenesisState_GenMsgsAminoMsg): _93.GenesisState_GenMsgs;
                toAminoMsg(message: _93.GenesisState_GenMsgs): _93.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _93.GenesisState_GenMsgsProtoMsg): _93.GenesisState_GenMsgs;
                toProto(message: _93.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _93.GenesisState_GenMsgs): _93.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                encode(message: _93.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Code;
                fromPartial(object: any): _93.Code;
                fromAmino(object: _93.CodeAmino): _93.Code;
                toAmino(message: _93.Code): _93.CodeAmino;
                fromAminoMsg(object: _93.CodeAminoMsg): _93.Code;
                toAminoMsg(message: _93.Code): _93.CodeAminoMsg;
                fromProtoMsg(message: _93.CodeProtoMsg): _93.Code;
                toProto(message: _93.Code): Uint8Array;
                toProtoMsg(message: _93.Code): _93.CodeProtoMsg;
            };
            Contract: {
                encode(message: _93.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Contract;
                fromPartial(object: any): _93.Contract;
                fromAmino(object: _93.ContractAmino): _93.Contract;
                toAmino(message: _93.Contract): _93.ContractAmino;
                fromAminoMsg(object: _93.ContractAminoMsg): _93.Contract;
                toAminoMsg(message: _93.Contract): _93.ContractAminoMsg;
                fromProtoMsg(message: _93.ContractProtoMsg): _93.Contract;
                toProto(message: _93.Contract): Uint8Array;
                toProtoMsg(message: _93.Contract): _93.ContractProtoMsg;
            };
            Sequence: {
                encode(message: _93.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Sequence;
                fromPartial(object: any): _93.Sequence;
                fromAmino(object: _93.SequenceAmino): _93.Sequence;
                toAmino(message: _93.Sequence): _93.SequenceAmino;
                fromAminoMsg(object: _93.SequenceAminoMsg): _93.Sequence;
                toAminoMsg(message: _93.Sequence): _93.SequenceAminoMsg;
                fromProtoMsg(message: _93.SequenceProtoMsg): _93.Sequence;
                toProto(message: _93.Sequence): Uint8Array;
                toProtoMsg(message: _93.Sequence): _93.SequenceProtoMsg;
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
                    v1: _175.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
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
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
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
                        contractInfo(request: _96.QueryContractInfoRequest): Promise<_96.QueryContractInfoResponse>;
                        contractHistory(request: _96.QueryContractHistoryRequest): Promise<_96.QueryContractHistoryResponse>;
                        contractsByCode(request: _96.QueryContractsByCodeRequest): Promise<_96.QueryContractsByCodeResponse>;
                        allContractState(request: _96.QueryAllContractStateRequest): Promise<_96.QueryAllContractStateResponse>;
                        rawContractState(request: _96.QueryRawContractStateRequest): Promise<_96.QueryRawContractStateResponse>;
                        smartContractState(request: _96.QuerySmartContractStateRequest): Promise<_96.QuerySmartContractStateResponse>;
                        code(request: _96.QueryCodeRequest): Promise<_96.QueryCodeResponse>;
                        codes(request?: _96.QueryCodesRequest): Promise<_96.QueryCodesResponse>;
                        pinnedCodes(request?: _96.QueryPinnedCodesRequest): Promise<_96.QueryPinnedCodesResponse>;
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
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
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
                    v1: _173.LCDQueryClient;
                };
            };
        }>;
    };
}
