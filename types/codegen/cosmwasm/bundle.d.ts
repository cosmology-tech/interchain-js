import * as _98 from "./wasm/v1/genesis";
import * as _99 from "./wasm/v1/ibc";
import * as _100 from "./wasm/v1/proposal";
import * as _101 from "./wasm/v1/query";
import * as _102 from "./wasm/v1/tx";
import * as _103 from "./wasm/v1/types";
import * as _180 from "./wasm/v1/query.lcd";
import * as _181 from "./wasm/v1/query.rpc.Query";
import * as _182 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _182.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _101.QueryContractInfoRequest): Promise<_101.QueryContractInfoResponse>;
                contractHistory(request: _101.QueryContractHistoryRequest): Promise<_101.QueryContractHistoryResponse>;
                contractsByCode(request: _101.QueryContractsByCodeRequest): Promise<_101.QueryContractsByCodeResponse>;
                allContractState(request: _101.QueryAllContractStateRequest): Promise<_101.QueryAllContractStateResponse>;
                rawContractState(request: _101.QueryRawContractStateRequest): Promise<_101.QueryRawContractStateResponse>;
                smartContractState(request: _101.QuerySmartContractStateRequest): Promise<_101.QuerySmartContractStateResponse>;
                code(request: _101.QueryCodeRequest): Promise<_101.QueryCodeResponse>;
                codes(request?: _101.QueryCodesRequest): Promise<_101.QueryCodesResponse>;
                pinnedCodes(request?: _101.QueryPinnedCodesRequest): Promise<_101.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _102.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _102.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _102.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _102.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _102.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _102.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _102.MsgStoreCode): {
                        typeUrl: string;
                        value: _102.MsgStoreCode;
                    };
                    instantiateContract(value: _102.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _102.MsgInstantiateContract;
                    };
                    executeContract(value: _102.MsgExecuteContract): {
                        typeUrl: string;
                        value: _102.MsgExecuteContract;
                    };
                    migrateContract(value: _102.MsgMigrateContract): {
                        typeUrl: string;
                        value: _102.MsgMigrateContract;
                    };
                    updateAdmin(value: _102.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _102.MsgClearAdmin): {
                        typeUrl: string;
                        value: _102.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _102.MsgStoreCode): {
                        typeUrl: string;
                        value: _102.MsgStoreCode;
                    };
                    instantiateContract(value: _102.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _102.MsgInstantiateContract;
                    };
                    executeContract(value: _102.MsgExecuteContract): {
                        typeUrl: string;
                        value: _102.MsgExecuteContract;
                    };
                    migrateContract(value: _102.MsgMigrateContract): {
                        typeUrl: string;
                        value: _102.MsgMigrateContract;
                    };
                    updateAdmin(value: _102.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _102.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _102.MsgClearAdmin): {
                        typeUrl: string;
                        value: _102.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _102.MsgStoreCode) => _102.MsgStoreCodeAmino;
                    fromAmino: (object: _102.MsgStoreCodeAmino) => _102.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgInstantiateContract) => _102.MsgInstantiateContractAmino;
                    fromAmino: (object: _102.MsgInstantiateContractAmino) => _102.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgExecuteContract) => _102.MsgExecuteContractAmino;
                    fromAmino: (object: _102.MsgExecuteContractAmino) => _102.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _102.MsgMigrateContract) => _102.MsgMigrateContractAmino;
                    fromAmino: (object: _102.MsgMigrateContractAmino) => _102.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _102.MsgUpdateAdmin) => _102.MsgUpdateAdminAmino;
                    fromAmino: (object: _102.MsgUpdateAdminAmino) => _102.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _102.MsgClearAdmin) => _102.MsgClearAdminAmino;
                    fromAmino: (object: _102.MsgClearAdminAmino) => _102.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _103.AccessType;
            accessTypeToJSON(object: _103.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _103.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _103.ContractCodeHistoryOperationType): string;
            AccessType: typeof _103.AccessType;
            AccessTypeSDKType: typeof _103.AccessType;
            AccessTypeAmino: typeof _103.AccessType;
            ContractCodeHistoryOperationType: typeof _103.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _103.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _103.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _103.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AccessTypeParam;
                fromPartial(object: any): _103.AccessTypeParam;
                fromAmino(object: _103.AccessTypeParamAmino): _103.AccessTypeParam;
                toAmino(message: _103.AccessTypeParam): _103.AccessTypeParamAmino;
                fromAminoMsg(object: _103.AccessTypeParamAminoMsg): _103.AccessTypeParam;
                toAminoMsg(message: _103.AccessTypeParam): _103.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _103.AccessTypeParamProtoMsg): _103.AccessTypeParam;
                toProto(message: _103.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _103.AccessTypeParam): _103.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                encode(message: _103.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AccessConfig;
                fromPartial(object: any): _103.AccessConfig;
                fromAmino(object: _103.AccessConfigAmino): _103.AccessConfig;
                toAmino(message: _103.AccessConfig): _103.AccessConfigAmino;
                fromAminoMsg(object: _103.AccessConfigAminoMsg): _103.AccessConfig;
                toAminoMsg(message: _103.AccessConfig): _103.AccessConfigAminoMsg;
                fromProtoMsg(message: _103.AccessConfigProtoMsg): _103.AccessConfig;
                toProto(message: _103.AccessConfig): Uint8Array;
                toProtoMsg(message: _103.AccessConfig): _103.AccessConfigProtoMsg;
            };
            Params: {
                encode(message: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Params;
                fromPartial(object: any): _103.Params;
                fromAmino(object: _103.ParamsAmino): _103.Params;
                toAmino(message: _103.Params): _103.ParamsAmino;
                fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
                toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
                fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
                toProto(message: _103.Params): Uint8Array;
                toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
            };
            CodeInfo: {
                encode(message: _103.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.CodeInfo;
                fromPartial(object: any): _103.CodeInfo;
                fromAmino(object: _103.CodeInfoAmino): _103.CodeInfo;
                toAmino(message: _103.CodeInfo): _103.CodeInfoAmino;
                fromAminoMsg(object: _103.CodeInfoAminoMsg): _103.CodeInfo;
                toAminoMsg(message: _103.CodeInfo): _103.CodeInfoAminoMsg;
                fromProtoMsg(message: _103.CodeInfoProtoMsg): _103.CodeInfo;
                toProto(message: _103.CodeInfo): Uint8Array;
                toProtoMsg(message: _103.CodeInfo): _103.CodeInfoProtoMsg;
            };
            ContractInfo: {
                encode(message: _103.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ContractInfo;
                fromPartial(object: any): _103.ContractInfo;
                fromAmino(object: _103.ContractInfoAmino): _103.ContractInfo;
                toAmino(message: _103.ContractInfo): _103.ContractInfoAmino;
                fromAminoMsg(object: _103.ContractInfoAminoMsg): _103.ContractInfo;
                toAminoMsg(message: _103.ContractInfo): _103.ContractInfoAminoMsg;
                fromProtoMsg(message: _103.ContractInfoProtoMsg): _103.ContractInfo;
                toProto(message: _103.ContractInfo): Uint8Array;
                toProtoMsg(message: _103.ContractInfo): _103.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                encode(message: _103.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.ContractCodeHistoryEntry;
                fromPartial(object: any): _103.ContractCodeHistoryEntry;
                fromAmino(object: _103.ContractCodeHistoryEntryAmino): _103.ContractCodeHistoryEntry;
                toAmino(message: _103.ContractCodeHistoryEntry): _103.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _103.ContractCodeHistoryEntryAminoMsg): _103.ContractCodeHistoryEntry;
                toAminoMsg(message: _103.ContractCodeHistoryEntry): _103.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _103.ContractCodeHistoryEntryProtoMsg): _103.ContractCodeHistoryEntry;
                toProto(message: _103.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _103.ContractCodeHistoryEntry): _103.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                encode(message: _103.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AbsoluteTxPosition;
                fromPartial(object: any): _103.AbsoluteTxPosition;
                fromAmino(object: _103.AbsoluteTxPositionAmino): _103.AbsoluteTxPosition;
                toAmino(message: _103.AbsoluteTxPosition): _103.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _103.AbsoluteTxPositionAminoMsg): _103.AbsoluteTxPosition;
                toAminoMsg(message: _103.AbsoluteTxPosition): _103.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _103.AbsoluteTxPositionProtoMsg): _103.AbsoluteTxPosition;
                toProto(message: _103.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _103.AbsoluteTxPosition): _103.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                encode(message: _103.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Model;
                fromPartial(object: any): _103.Model;
                fromAmino(object: _103.ModelAmino): _103.Model;
                toAmino(message: _103.Model): _103.ModelAmino;
                fromAminoMsg(object: _103.ModelAminoMsg): _103.Model;
                toAminoMsg(message: _103.Model): _103.ModelAminoMsg;
                fromProtoMsg(message: _103.ModelProtoMsg): _103.Model;
                toProto(message: _103.Model): Uint8Array;
                toProtoMsg(message: _103.Model): _103.ModelProtoMsg;
            };
            ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            ContractInfoExtension_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ContractInfoExtension_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            MsgStoreCode: {
                encode(message: _102.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgStoreCode;
                fromPartial(object: any): _102.MsgStoreCode;
                fromAmino(object: _102.MsgStoreCodeAmino): _102.MsgStoreCode;
                toAmino(message: _102.MsgStoreCode): _102.MsgStoreCodeAmino;
                fromAminoMsg(object: _102.MsgStoreCodeAminoMsg): _102.MsgStoreCode;
                toAminoMsg(message: _102.MsgStoreCode): _102.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _102.MsgStoreCodeProtoMsg): _102.MsgStoreCode;
                toProto(message: _102.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _102.MsgStoreCode): _102.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                encode(message: _102.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgStoreCodeResponse;
                fromPartial(object: any): _102.MsgStoreCodeResponse;
                fromAmino(object: _102.MsgStoreCodeResponseAmino): _102.MsgStoreCodeResponse;
                toAmino(message: _102.MsgStoreCodeResponse): _102.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _102.MsgStoreCodeResponseAminoMsg): _102.MsgStoreCodeResponse;
                toAminoMsg(message: _102.MsgStoreCodeResponse): _102.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _102.MsgStoreCodeResponseProtoMsg): _102.MsgStoreCodeResponse;
                toProto(message: _102.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _102.MsgStoreCodeResponse): _102.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                encode(message: _102.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgInstantiateContract;
                fromPartial(object: any): _102.MsgInstantiateContract;
                fromAmino(object: _102.MsgInstantiateContractAmino): _102.MsgInstantiateContract;
                toAmino(message: _102.MsgInstantiateContract): _102.MsgInstantiateContractAmino;
                fromAminoMsg(object: _102.MsgInstantiateContractAminoMsg): _102.MsgInstantiateContract;
                toAminoMsg(message: _102.MsgInstantiateContract): _102.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _102.MsgInstantiateContractProtoMsg): _102.MsgInstantiateContract;
                toProto(message: _102.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _102.MsgInstantiateContract): _102.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                encode(message: _102.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgInstantiateContractResponse;
                fromPartial(object: any): _102.MsgInstantiateContractResponse;
                fromAmino(object: _102.MsgInstantiateContractResponseAmino): _102.MsgInstantiateContractResponse;
                toAmino(message: _102.MsgInstantiateContractResponse): _102.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _102.MsgInstantiateContractResponseAminoMsg): _102.MsgInstantiateContractResponse;
                toAminoMsg(message: _102.MsgInstantiateContractResponse): _102.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgInstantiateContractResponseProtoMsg): _102.MsgInstantiateContractResponse;
                toProto(message: _102.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgInstantiateContractResponse): _102.MsgInstantiateContractResponseProtoMsg;
            };
            MsgExecuteContract: {
                encode(message: _102.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgExecuteContract;
                fromPartial(object: any): _102.MsgExecuteContract;
                fromAmino(object: _102.MsgExecuteContractAmino): _102.MsgExecuteContract;
                toAmino(message: _102.MsgExecuteContract): _102.MsgExecuteContractAmino;
                fromAminoMsg(object: _102.MsgExecuteContractAminoMsg): _102.MsgExecuteContract;
                toAminoMsg(message: _102.MsgExecuteContract): _102.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _102.MsgExecuteContractProtoMsg): _102.MsgExecuteContract;
                toProto(message: _102.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _102.MsgExecuteContract): _102.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                encode(message: _102.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgExecuteContractResponse;
                fromPartial(object: any): _102.MsgExecuteContractResponse;
                fromAmino(object: _102.MsgExecuteContractResponseAmino): _102.MsgExecuteContractResponse;
                toAmino(message: _102.MsgExecuteContractResponse): _102.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _102.MsgExecuteContractResponseAminoMsg): _102.MsgExecuteContractResponse;
                toAminoMsg(message: _102.MsgExecuteContractResponse): _102.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgExecuteContractResponseProtoMsg): _102.MsgExecuteContractResponse;
                toProto(message: _102.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgExecuteContractResponse): _102.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                encode(message: _102.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgMigrateContract;
                fromPartial(object: any): _102.MsgMigrateContract;
                fromAmino(object: _102.MsgMigrateContractAmino): _102.MsgMigrateContract;
                toAmino(message: _102.MsgMigrateContract): _102.MsgMigrateContractAmino;
                fromAminoMsg(object: _102.MsgMigrateContractAminoMsg): _102.MsgMigrateContract;
                toAminoMsg(message: _102.MsgMigrateContract): _102.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _102.MsgMigrateContractProtoMsg): _102.MsgMigrateContract;
                toProto(message: _102.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _102.MsgMigrateContract): _102.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                encode(message: _102.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgMigrateContractResponse;
                fromPartial(object: any): _102.MsgMigrateContractResponse;
                fromAmino(object: _102.MsgMigrateContractResponseAmino): _102.MsgMigrateContractResponse;
                toAmino(message: _102.MsgMigrateContractResponse): _102.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _102.MsgMigrateContractResponseAminoMsg): _102.MsgMigrateContractResponse;
                toAminoMsg(message: _102.MsgMigrateContractResponse): _102.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _102.MsgMigrateContractResponseProtoMsg): _102.MsgMigrateContractResponse;
                toProto(message: _102.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _102.MsgMigrateContractResponse): _102.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                encode(message: _102.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateAdmin;
                fromPartial(object: any): _102.MsgUpdateAdmin;
                fromAmino(object: _102.MsgUpdateAdminAmino): _102.MsgUpdateAdmin;
                toAmino(message: _102.MsgUpdateAdmin): _102.MsgUpdateAdminAmino;
                fromAminoMsg(object: _102.MsgUpdateAdminAminoMsg): _102.MsgUpdateAdmin;
                toAminoMsg(message: _102.MsgUpdateAdmin): _102.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateAdminProtoMsg): _102.MsgUpdateAdmin;
                toProto(message: _102.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateAdmin): _102.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                encode(_: _102.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgUpdateAdminResponse;
                fromPartial(_: any): _102.MsgUpdateAdminResponse;
                fromAmino(_: _102.MsgUpdateAdminResponseAmino): _102.MsgUpdateAdminResponse;
                toAmino(_: _102.MsgUpdateAdminResponse): _102.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _102.MsgUpdateAdminResponseAminoMsg): _102.MsgUpdateAdminResponse;
                toAminoMsg(message: _102.MsgUpdateAdminResponse): _102.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _102.MsgUpdateAdminResponseProtoMsg): _102.MsgUpdateAdminResponse;
                toProto(message: _102.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _102.MsgUpdateAdminResponse): _102.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                encode(message: _102.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgClearAdmin;
                fromPartial(object: any): _102.MsgClearAdmin;
                fromAmino(object: _102.MsgClearAdminAmino): _102.MsgClearAdmin;
                toAmino(message: _102.MsgClearAdmin): _102.MsgClearAdminAmino;
                fromAminoMsg(object: _102.MsgClearAdminAminoMsg): _102.MsgClearAdmin;
                toAminoMsg(message: _102.MsgClearAdmin): _102.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _102.MsgClearAdminProtoMsg): _102.MsgClearAdmin;
                toProto(message: _102.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _102.MsgClearAdmin): _102.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                encode(_: _102.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgClearAdminResponse;
                fromPartial(_: any): _102.MsgClearAdminResponse;
                fromAmino(_: _102.MsgClearAdminResponseAmino): _102.MsgClearAdminResponse;
                toAmino(_: _102.MsgClearAdminResponse): _102.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _102.MsgClearAdminResponseAminoMsg): _102.MsgClearAdminResponse;
                toAminoMsg(message: _102.MsgClearAdminResponse): _102.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _102.MsgClearAdminResponseProtoMsg): _102.MsgClearAdminResponse;
                toProto(message: _102.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _102.MsgClearAdminResponse): _102.MsgClearAdminResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                encode(message: _101.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractInfoRequest;
                fromPartial(object: any): _101.QueryContractInfoRequest;
                fromAmino(object: _101.QueryContractInfoRequestAmino): _101.QueryContractInfoRequest;
                toAmino(message: _101.QueryContractInfoRequest): _101.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _101.QueryContractInfoRequestAminoMsg): _101.QueryContractInfoRequest;
                toAminoMsg(message: _101.QueryContractInfoRequest): _101.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _101.QueryContractInfoRequestProtoMsg): _101.QueryContractInfoRequest;
                toProto(message: _101.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _101.QueryContractInfoRequest): _101.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                encode(message: _101.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractInfoResponse;
                fromPartial(object: any): _101.QueryContractInfoResponse;
                fromAmino(object: _101.QueryContractInfoResponseAmino): _101.QueryContractInfoResponse;
                toAmino(message: _101.QueryContractInfoResponse): _101.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _101.QueryContractInfoResponseAminoMsg): _101.QueryContractInfoResponse;
                toAminoMsg(message: _101.QueryContractInfoResponse): _101.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _101.QueryContractInfoResponseProtoMsg): _101.QueryContractInfoResponse;
                toProto(message: _101.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _101.QueryContractInfoResponse): _101.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                encode(message: _101.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractHistoryRequest;
                fromPartial(object: any): _101.QueryContractHistoryRequest;
                fromAmino(object: _101.QueryContractHistoryRequestAmino): _101.QueryContractHistoryRequest;
                toAmino(message: _101.QueryContractHistoryRequest): _101.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _101.QueryContractHistoryRequestAminoMsg): _101.QueryContractHistoryRequest;
                toAminoMsg(message: _101.QueryContractHistoryRequest): _101.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _101.QueryContractHistoryRequestProtoMsg): _101.QueryContractHistoryRequest;
                toProto(message: _101.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _101.QueryContractHistoryRequest): _101.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                encode(message: _101.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractHistoryResponse;
                fromPartial(object: any): _101.QueryContractHistoryResponse;
                fromAmino(object: _101.QueryContractHistoryResponseAmino): _101.QueryContractHistoryResponse;
                toAmino(message: _101.QueryContractHistoryResponse): _101.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _101.QueryContractHistoryResponseAminoMsg): _101.QueryContractHistoryResponse;
                toAminoMsg(message: _101.QueryContractHistoryResponse): _101.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _101.QueryContractHistoryResponseProtoMsg): _101.QueryContractHistoryResponse;
                toProto(message: _101.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _101.QueryContractHistoryResponse): _101.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                encode(message: _101.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractsByCodeRequest;
                fromPartial(object: any): _101.QueryContractsByCodeRequest;
                fromAmino(object: _101.QueryContractsByCodeRequestAmino): _101.QueryContractsByCodeRequest;
                toAmino(message: _101.QueryContractsByCodeRequest): _101.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _101.QueryContractsByCodeRequestAminoMsg): _101.QueryContractsByCodeRequest;
                toAminoMsg(message: _101.QueryContractsByCodeRequest): _101.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _101.QueryContractsByCodeRequestProtoMsg): _101.QueryContractsByCodeRequest;
                toProto(message: _101.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _101.QueryContractsByCodeRequest): _101.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                encode(message: _101.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryContractsByCodeResponse;
                fromPartial(object: any): _101.QueryContractsByCodeResponse;
                fromAmino(object: _101.QueryContractsByCodeResponseAmino): _101.QueryContractsByCodeResponse;
                toAmino(message: _101.QueryContractsByCodeResponse): _101.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _101.QueryContractsByCodeResponseAminoMsg): _101.QueryContractsByCodeResponse;
                toAminoMsg(message: _101.QueryContractsByCodeResponse): _101.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _101.QueryContractsByCodeResponseProtoMsg): _101.QueryContractsByCodeResponse;
                toProto(message: _101.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _101.QueryContractsByCodeResponse): _101.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                encode(message: _101.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllContractStateRequest;
                fromPartial(object: any): _101.QueryAllContractStateRequest;
                fromAmino(object: _101.QueryAllContractStateRequestAmino): _101.QueryAllContractStateRequest;
                toAmino(message: _101.QueryAllContractStateRequest): _101.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _101.QueryAllContractStateRequestAminoMsg): _101.QueryAllContractStateRequest;
                toAminoMsg(message: _101.QueryAllContractStateRequest): _101.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _101.QueryAllContractStateRequestProtoMsg): _101.QueryAllContractStateRequest;
                toProto(message: _101.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _101.QueryAllContractStateRequest): _101.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                encode(message: _101.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllContractStateResponse;
                fromPartial(object: any): _101.QueryAllContractStateResponse;
                fromAmino(object: _101.QueryAllContractStateResponseAmino): _101.QueryAllContractStateResponse;
                toAmino(message: _101.QueryAllContractStateResponse): _101.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _101.QueryAllContractStateResponseAminoMsg): _101.QueryAllContractStateResponse;
                toAminoMsg(message: _101.QueryAllContractStateResponse): _101.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _101.QueryAllContractStateResponseProtoMsg): _101.QueryAllContractStateResponse;
                toProto(message: _101.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _101.QueryAllContractStateResponse): _101.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                encode(message: _101.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryRawContractStateRequest;
                fromPartial(object: any): _101.QueryRawContractStateRequest;
                fromAmino(object: _101.QueryRawContractStateRequestAmino): _101.QueryRawContractStateRequest;
                toAmino(message: _101.QueryRawContractStateRequest): _101.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _101.QueryRawContractStateRequestAminoMsg): _101.QueryRawContractStateRequest;
                toAminoMsg(message: _101.QueryRawContractStateRequest): _101.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _101.QueryRawContractStateRequestProtoMsg): _101.QueryRawContractStateRequest;
                toProto(message: _101.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _101.QueryRawContractStateRequest): _101.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                encode(message: _101.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryRawContractStateResponse;
                fromPartial(object: any): _101.QueryRawContractStateResponse;
                fromAmino(object: _101.QueryRawContractStateResponseAmino): _101.QueryRawContractStateResponse;
                toAmino(message: _101.QueryRawContractStateResponse): _101.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _101.QueryRawContractStateResponseAminoMsg): _101.QueryRawContractStateResponse;
                toAminoMsg(message: _101.QueryRawContractStateResponse): _101.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _101.QueryRawContractStateResponseProtoMsg): _101.QueryRawContractStateResponse;
                toProto(message: _101.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _101.QueryRawContractStateResponse): _101.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                encode(message: _101.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QuerySmartContractStateRequest;
                fromPartial(object: any): _101.QuerySmartContractStateRequest;
                fromAmino(object: _101.QuerySmartContractStateRequestAmino): _101.QuerySmartContractStateRequest;
                toAmino(message: _101.QuerySmartContractStateRequest): _101.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _101.QuerySmartContractStateRequestAminoMsg): _101.QuerySmartContractStateRequest;
                toAminoMsg(message: _101.QuerySmartContractStateRequest): _101.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _101.QuerySmartContractStateRequestProtoMsg): _101.QuerySmartContractStateRequest;
                toProto(message: _101.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _101.QuerySmartContractStateRequest): _101.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                encode(message: _101.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QuerySmartContractStateResponse;
                fromPartial(object: any): _101.QuerySmartContractStateResponse;
                fromAmino(object: _101.QuerySmartContractStateResponseAmino): _101.QuerySmartContractStateResponse;
                toAmino(message: _101.QuerySmartContractStateResponse): _101.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _101.QuerySmartContractStateResponseAminoMsg): _101.QuerySmartContractStateResponse;
                toAminoMsg(message: _101.QuerySmartContractStateResponse): _101.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _101.QuerySmartContractStateResponseProtoMsg): _101.QuerySmartContractStateResponse;
                toProto(message: _101.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _101.QuerySmartContractStateResponse): _101.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                encode(message: _101.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodeRequest;
                fromPartial(object: any): _101.QueryCodeRequest;
                fromAmino(object: _101.QueryCodeRequestAmino): _101.QueryCodeRequest;
                toAmino(message: _101.QueryCodeRequest): _101.QueryCodeRequestAmino;
                fromAminoMsg(object: _101.QueryCodeRequestAminoMsg): _101.QueryCodeRequest;
                toAminoMsg(message: _101.QueryCodeRequest): _101.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _101.QueryCodeRequestProtoMsg): _101.QueryCodeRequest;
                toProto(message: _101.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _101.QueryCodeRequest): _101.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                encode(message: _101.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CodeInfoResponse;
                fromPartial(object: any): _101.CodeInfoResponse;
                fromAmino(object: _101.CodeInfoResponseAmino): _101.CodeInfoResponse;
                toAmino(message: _101.CodeInfoResponse): _101.CodeInfoResponseAmino;
                fromAminoMsg(object: _101.CodeInfoResponseAminoMsg): _101.CodeInfoResponse;
                toAminoMsg(message: _101.CodeInfoResponse): _101.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _101.CodeInfoResponseProtoMsg): _101.CodeInfoResponse;
                toProto(message: _101.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _101.CodeInfoResponse): _101.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                encode(message: _101.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodeResponse;
                fromPartial(object: any): _101.QueryCodeResponse;
                fromAmino(object: _101.QueryCodeResponseAmino): _101.QueryCodeResponse;
                toAmino(message: _101.QueryCodeResponse): _101.QueryCodeResponseAmino;
                fromAminoMsg(object: _101.QueryCodeResponseAminoMsg): _101.QueryCodeResponse;
                toAminoMsg(message: _101.QueryCodeResponse): _101.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _101.QueryCodeResponseProtoMsg): _101.QueryCodeResponse;
                toProto(message: _101.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _101.QueryCodeResponse): _101.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                encode(message: _101.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodesRequest;
                fromPartial(object: any): _101.QueryCodesRequest;
                fromAmino(object: _101.QueryCodesRequestAmino): _101.QueryCodesRequest;
                toAmino(message: _101.QueryCodesRequest): _101.QueryCodesRequestAmino;
                fromAminoMsg(object: _101.QueryCodesRequestAminoMsg): _101.QueryCodesRequest;
                toAminoMsg(message: _101.QueryCodesRequest): _101.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _101.QueryCodesRequestProtoMsg): _101.QueryCodesRequest;
                toProto(message: _101.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _101.QueryCodesRequest): _101.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                encode(message: _101.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryCodesResponse;
                fromPartial(object: any): _101.QueryCodesResponse;
                fromAmino(object: _101.QueryCodesResponseAmino): _101.QueryCodesResponse;
                toAmino(message: _101.QueryCodesResponse): _101.QueryCodesResponseAmino;
                fromAminoMsg(object: _101.QueryCodesResponseAminoMsg): _101.QueryCodesResponse;
                toAminoMsg(message: _101.QueryCodesResponse): _101.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _101.QueryCodesResponseProtoMsg): _101.QueryCodesResponse;
                toProto(message: _101.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _101.QueryCodesResponse): _101.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                encode(message: _101.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryPinnedCodesRequest;
                fromPartial(object: any): _101.QueryPinnedCodesRequest;
                fromAmino(object: _101.QueryPinnedCodesRequestAmino): _101.QueryPinnedCodesRequest;
                toAmino(message: _101.QueryPinnedCodesRequest): _101.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _101.QueryPinnedCodesRequestAminoMsg): _101.QueryPinnedCodesRequest;
                toAminoMsg(message: _101.QueryPinnedCodesRequest): _101.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _101.QueryPinnedCodesRequestProtoMsg): _101.QueryPinnedCodesRequest;
                toProto(message: _101.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _101.QueryPinnedCodesRequest): _101.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                encode(message: _101.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryPinnedCodesResponse;
                fromPartial(object: any): _101.QueryPinnedCodesResponse;
                fromAmino(object: _101.QueryPinnedCodesResponseAmino): _101.QueryPinnedCodesResponse;
                toAmino(message: _101.QueryPinnedCodesResponse): _101.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _101.QueryPinnedCodesResponseAminoMsg): _101.QueryPinnedCodesResponse;
                toAminoMsg(message: _101.QueryPinnedCodesResponse): _101.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _101.QueryPinnedCodesResponseProtoMsg): _101.QueryPinnedCodesResponse;
                toProto(message: _101.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _101.QueryPinnedCodesResponse): _101.QueryPinnedCodesResponseProtoMsg;
            };
            StoreCodeProposal: {
                encode(message: _100.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.StoreCodeProposal;
                fromPartial(object: any): _100.StoreCodeProposal;
                fromAmino(object: _100.StoreCodeProposalAmino): _100.StoreCodeProposal;
                toAmino(message: _100.StoreCodeProposal): _100.StoreCodeProposalAmino;
                fromAminoMsg(object: _100.StoreCodeProposalAminoMsg): _100.StoreCodeProposal;
                toAminoMsg(message: _100.StoreCodeProposal): _100.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _100.StoreCodeProposalProtoMsg): _100.StoreCodeProposal;
                toProto(message: _100.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _100.StoreCodeProposal): _100.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                encode(message: _100.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.InstantiateContractProposal;
                fromPartial(object: any): _100.InstantiateContractProposal;
                fromAmino(object: _100.InstantiateContractProposalAmino): _100.InstantiateContractProposal;
                toAmino(message: _100.InstantiateContractProposal): _100.InstantiateContractProposalAmino;
                fromAminoMsg(object: _100.InstantiateContractProposalAminoMsg): _100.InstantiateContractProposal;
                toAminoMsg(message: _100.InstantiateContractProposal): _100.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _100.InstantiateContractProposalProtoMsg): _100.InstantiateContractProposal;
                toProto(message: _100.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _100.InstantiateContractProposal): _100.InstantiateContractProposalProtoMsg;
            };
            MigrateContractProposal: {
                encode(message: _100.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.MigrateContractProposal;
                fromPartial(object: any): _100.MigrateContractProposal;
                fromAmino(object: _100.MigrateContractProposalAmino): _100.MigrateContractProposal;
                toAmino(message: _100.MigrateContractProposal): _100.MigrateContractProposalAmino;
                fromAminoMsg(object: _100.MigrateContractProposalAminoMsg): _100.MigrateContractProposal;
                toAminoMsg(message: _100.MigrateContractProposal): _100.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _100.MigrateContractProposalProtoMsg): _100.MigrateContractProposal;
                toProto(message: _100.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _100.MigrateContractProposal): _100.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                encode(message: _100.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.SudoContractProposal;
                fromPartial(object: any): _100.SudoContractProposal;
                fromAmino(object: _100.SudoContractProposalAmino): _100.SudoContractProposal;
                toAmino(message: _100.SudoContractProposal): _100.SudoContractProposalAmino;
                fromAminoMsg(object: _100.SudoContractProposalAminoMsg): _100.SudoContractProposal;
                toAminoMsg(message: _100.SudoContractProposal): _100.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _100.SudoContractProposalProtoMsg): _100.SudoContractProposal;
                toProto(message: _100.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _100.SudoContractProposal): _100.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                encode(message: _100.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ExecuteContractProposal;
                fromPartial(object: any): _100.ExecuteContractProposal;
                fromAmino(object: _100.ExecuteContractProposalAmino): _100.ExecuteContractProposal;
                toAmino(message: _100.ExecuteContractProposal): _100.ExecuteContractProposalAmino;
                fromAminoMsg(object: _100.ExecuteContractProposalAminoMsg): _100.ExecuteContractProposal;
                toAminoMsg(message: _100.ExecuteContractProposal): _100.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _100.ExecuteContractProposalProtoMsg): _100.ExecuteContractProposal;
                toProto(message: _100.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _100.ExecuteContractProposal): _100.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                encode(message: _100.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.UpdateAdminProposal;
                fromPartial(object: any): _100.UpdateAdminProposal;
                fromAmino(object: _100.UpdateAdminProposalAmino): _100.UpdateAdminProposal;
                toAmino(message: _100.UpdateAdminProposal): _100.UpdateAdminProposalAmino;
                fromAminoMsg(object: _100.UpdateAdminProposalAminoMsg): _100.UpdateAdminProposal;
                toAminoMsg(message: _100.UpdateAdminProposal): _100.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _100.UpdateAdminProposalProtoMsg): _100.UpdateAdminProposal;
                toProto(message: _100.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _100.UpdateAdminProposal): _100.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                encode(message: _100.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.ClearAdminProposal;
                fromPartial(object: any): _100.ClearAdminProposal;
                fromAmino(object: _100.ClearAdminProposalAmino): _100.ClearAdminProposal;
                toAmino(message: _100.ClearAdminProposal): _100.ClearAdminProposalAmino;
                fromAminoMsg(object: _100.ClearAdminProposalAminoMsg): _100.ClearAdminProposal;
                toAminoMsg(message: _100.ClearAdminProposal): _100.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _100.ClearAdminProposalProtoMsg): _100.ClearAdminProposal;
                toProto(message: _100.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _100.ClearAdminProposal): _100.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                encode(message: _100.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.PinCodesProposal;
                fromPartial(object: any): _100.PinCodesProposal;
                fromAmino(object: _100.PinCodesProposalAmino): _100.PinCodesProposal;
                toAmino(message: _100.PinCodesProposal): _100.PinCodesProposalAmino;
                fromAminoMsg(object: _100.PinCodesProposalAminoMsg): _100.PinCodesProposal;
                toAminoMsg(message: _100.PinCodesProposal): _100.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _100.PinCodesProposalProtoMsg): _100.PinCodesProposal;
                toProto(message: _100.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _100.PinCodesProposal): _100.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                encode(message: _100.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.UnpinCodesProposal;
                fromPartial(object: any): _100.UnpinCodesProposal;
                fromAmino(object: _100.UnpinCodesProposalAmino): _100.UnpinCodesProposal;
                toAmino(message: _100.UnpinCodesProposal): _100.UnpinCodesProposalAmino;
                fromAminoMsg(object: _100.UnpinCodesProposalAminoMsg): _100.UnpinCodesProposal;
                toAminoMsg(message: _100.UnpinCodesProposal): _100.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _100.UnpinCodesProposalProtoMsg): _100.UnpinCodesProposal;
                toProto(message: _100.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _100.UnpinCodesProposal): _100.UnpinCodesProposalProtoMsg;
            };
            MsgIBCSend: {
                encode(message: _99.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgIBCSend;
                fromPartial(object: any): _99.MsgIBCSend;
                fromAmino(object: _99.MsgIBCSendAmino): _99.MsgIBCSend;
                toAmino(message: _99.MsgIBCSend): _99.MsgIBCSendAmino;
                fromAminoMsg(object: _99.MsgIBCSendAminoMsg): _99.MsgIBCSend;
                toAminoMsg(message: _99.MsgIBCSend): _99.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _99.MsgIBCSendProtoMsg): _99.MsgIBCSend;
                toProto(message: _99.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _99.MsgIBCSend): _99.MsgIBCSendProtoMsg;
            };
            MsgIBCCloseChannel: {
                encode(message: _99.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgIBCCloseChannel;
                fromPartial(object: any): _99.MsgIBCCloseChannel;
                fromAmino(object: _99.MsgIBCCloseChannelAmino): _99.MsgIBCCloseChannel;
                toAmino(message: _99.MsgIBCCloseChannel): _99.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _99.MsgIBCCloseChannelAminoMsg): _99.MsgIBCCloseChannel;
                toAminoMsg(message: _99.MsgIBCCloseChannel): _99.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _99.MsgIBCCloseChannelProtoMsg): _99.MsgIBCCloseChannel;
                toProto(message: _99.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _99.MsgIBCCloseChannel): _99.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromPartial(object: any): _98.GenesisState;
                fromAmino(object: _98.GenesisStateAmino): _98.GenesisState;
                toAmino(message: _98.GenesisState): _98.GenesisStateAmino;
                fromAminoMsg(object: _98.GenesisStateAminoMsg): _98.GenesisState;
                toAminoMsg(message: _98.GenesisState): _98.GenesisStateAminoMsg;
                fromProtoMsg(message: _98.GenesisStateProtoMsg): _98.GenesisState;
                toProto(message: _98.GenesisState): Uint8Array;
                toProtoMsg(message: _98.GenesisState): _98.GenesisStateProtoMsg;
            };
            GenesisState_GenMsgs: {
                encode(message: _98.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState_GenMsgs;
                fromPartial(object: any): _98.GenesisState_GenMsgs;
                fromAmino(object: _98.GenesisState_GenMsgsAmino): _98.GenesisState_GenMsgs;
                toAmino(message: _98.GenesisState_GenMsgs): _98.GenesisState_GenMsgsAmino;
                fromAminoMsg(object: _98.GenesisState_GenMsgsAminoMsg): _98.GenesisState_GenMsgs;
                toAminoMsg(message: _98.GenesisState_GenMsgs): _98.GenesisState_GenMsgsAminoMsg;
                fromProtoMsg(message: _98.GenesisState_GenMsgsProtoMsg): _98.GenesisState_GenMsgs;
                toProto(message: _98.GenesisState_GenMsgs): Uint8Array;
                toProtoMsg(message: _98.GenesisState_GenMsgs): _98.GenesisState_GenMsgsProtoMsg;
            };
            Code: {
                encode(message: _98.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Code;
                fromPartial(object: any): _98.Code;
                fromAmino(object: _98.CodeAmino): _98.Code;
                toAmino(message: _98.Code): _98.CodeAmino;
                fromAminoMsg(object: _98.CodeAminoMsg): _98.Code;
                toAminoMsg(message: _98.Code): _98.CodeAminoMsg;
                fromProtoMsg(message: _98.CodeProtoMsg): _98.Code;
                toProto(message: _98.Code): Uint8Array;
                toProtoMsg(message: _98.Code): _98.CodeProtoMsg;
            };
            Contract: {
                encode(message: _98.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Contract;
                fromPartial(object: any): _98.Contract;
                fromAmino(object: _98.ContractAmino): _98.Contract;
                toAmino(message: _98.Contract): _98.ContractAmino;
                fromAminoMsg(object: _98.ContractAminoMsg): _98.Contract;
                toAminoMsg(message: _98.Contract): _98.ContractAminoMsg;
                fromProtoMsg(message: _98.ContractProtoMsg): _98.Contract;
                toProto(message: _98.Contract): Uint8Array;
                toProtoMsg(message: _98.Contract): _98.ContractProtoMsg;
            };
            Sequence: {
                encode(message: _98.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Sequence;
                fromPartial(object: any): _98.Sequence;
                fromAmino(object: _98.SequenceAmino): _98.Sequence;
                toAmino(message: _98.Sequence): _98.SequenceAmino;
                fromAminoMsg(object: _98.SequenceAminoMsg): _98.Sequence;
                toAminoMsg(message: _98.Sequence): _98.SequenceAminoMsg;
                fromProtoMsg(message: _98.SequenceProtoMsg): _98.Sequence;
                toProto(message: _98.Sequence): Uint8Array;
                toProtoMsg(message: _98.Sequence): _98.SequenceProtoMsg;
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
                    v1: _182.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
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
                        contractInfo(request: _101.QueryContractInfoRequest): Promise<_101.QueryContractInfoResponse>;
                        contractHistory(request: _101.QueryContractHistoryRequest): Promise<_101.QueryContractHistoryResponse>;
                        contractsByCode(request: _101.QueryContractsByCodeRequest): Promise<_101.QueryContractsByCodeResponse>;
                        allContractState(request: _101.QueryAllContractStateRequest): Promise<_101.QueryAllContractStateResponse>;
                        rawContractState(request: _101.QueryRawContractStateRequest): Promise<_101.QueryRawContractStateResponse>;
                        smartContractState(request: _101.QuerySmartContractStateRequest): Promise<_101.QuerySmartContractStateResponse>;
                        code(request: _101.QueryCodeRequest): Promise<_101.QueryCodeResponse>;
                        codes(request?: _101.QueryCodesRequest): Promise<_101.QueryCodesResponse>;
                        pinnedCodes(request?: _101.QueryPinnedCodesRequest): Promise<_101.QueryPinnedCodesResponse>;
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
                    v1: _180.LCDQueryClient;
                };
            };
        }>;
    };
}
