import * as _60 from "./applications/interchain_accounts/controller/v1/controller";
import * as _61 from "./applications/interchain_accounts/controller/v1/query";
import * as _62 from "./applications/interchain_accounts/controller/v1/tx";
import * as _63 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _64 from "./applications/interchain_accounts/host/v1/host";
import * as _65 from "./applications/interchain_accounts/host/v1/query";
import * as _66 from "./applications/interchain_accounts/v1/account";
import * as _67 from "./applications/interchain_accounts/v1/metadata";
import * as _68 from "./applications/interchain_accounts/v1/packet";
import * as _69 from "./applications/transfer/v1/genesis";
import * as _70 from "./applications/transfer/v1/query";
import * as _71 from "./applications/transfer/v1/transfer";
import * as _72 from "./applications/transfer/v1/tx";
import * as _73 from "./applications/transfer/v2/packet";
import * as _74 from "./core/channel/v1/channel";
import * as _75 from "./core/channel/v1/genesis";
import * as _76 from "./core/channel/v1/query";
import * as _77 from "./core/channel/v1/tx";
import * as _78 from "./core/client/v1/client";
import * as _79 from "./core/client/v1/genesis";
import * as _80 from "./core/client/v1/query";
import * as _81 from "./core/client/v1/tx";
import * as _82 from "./core/commitment/v1/commitment";
import * as _83 from "./core/connection/v1/connection";
import * as _84 from "./core/connection/v1/genesis";
import * as _85 from "./core/connection/v1/query";
import * as _86 from "./core/connection/v1/tx";
import * as _87 from "./lightclients/localhost/v1/localhost";
import * as _88 from "./lightclients/solomachine/v1/solomachine";
import * as _89 from "./lightclients/solomachine/v2/solomachine";
import * as _90 from "./lightclients/tendermint/v1/tendermint";
import * as _154 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _155 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _156 from "./applications/transfer/v1/query.lcd";
import * as _157 from "./core/channel/v1/query.lcd";
import * as _158 from "./core/client/v1/query.lcd";
import * as _159 from "./core/connection/v1/query.lcd";
import * as _160 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _161 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _162 from "./applications/transfer/v1/query.rpc.Query";
import * as _163 from "./core/channel/v1/query.rpc.Query";
import * as _164 from "./core/client/v1/query.rpc.Query";
import * as _165 from "./core/connection/v1/query.rpc.Query";
import * as _166 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _167 from "./applications/transfer/v1/tx.rpc.msg";
import * as _168 from "./core/channel/v1/tx.rpc.msg";
import * as _169 from "./core/client/v1/tx.rpc.msg";
import * as _170 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _166.MsgClientImpl;
                    QueryClientImpl: typeof _160.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _61.QueryInterchainAccountRequest): Promise<_61.QueryInterchainAccountResponse>;
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _154.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _62.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _62.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _62.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _62.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _62.MsgSendTx): {
                                typeUrl: string;
                                value: _62.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _62.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _62.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _62.MsgSendTx): {
                                typeUrl: string;
                                value: _62.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _62.MsgRegisterInterchainAccount) => _62.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _62.MsgRegisterInterchainAccountAmino) => _62.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _62.MsgSendTx) => _62.MsgSendTxAmino;
                            fromAmino: (object: _62.MsgSendTxAmino) => _62.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        encode(message: _62.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgRegisterInterchainAccount;
                        fromPartial(object: any): _62.MsgRegisterInterchainAccount;
                        fromAmino(object: _62.MsgRegisterInterchainAccountAmino): _62.MsgRegisterInterchainAccount;
                        toAmino(message: _62.MsgRegisterInterchainAccount): _62.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _62.MsgRegisterInterchainAccountAminoMsg): _62.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _62.MsgRegisterInterchainAccount): _62.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _62.MsgRegisterInterchainAccountProtoMsg): _62.MsgRegisterInterchainAccount;
                        toProto(message: _62.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _62.MsgRegisterInterchainAccount): _62.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        encode(message: _62.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: any): _62.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _62.MsgRegisterInterchainAccountResponseAmino): _62.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _62.MsgRegisterInterchainAccountResponse): _62.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _62.MsgRegisterInterchainAccountResponseAminoMsg): _62.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _62.MsgRegisterInterchainAccountResponse): _62.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _62.MsgRegisterInterchainAccountResponseProtoMsg): _62.MsgRegisterInterchainAccountResponse;
                        toProto(message: _62.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _62.MsgRegisterInterchainAccountResponse): _62.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        encode(message: _62.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSendTx;
                        fromPartial(object: any): _62.MsgSendTx;
                        fromAmino(object: _62.MsgSendTxAmino): _62.MsgSendTx;
                        toAmino(message: _62.MsgSendTx): _62.MsgSendTxAmino;
                        fromAminoMsg(object: _62.MsgSendTxAminoMsg): _62.MsgSendTx;
                        toAminoMsg(message: _62.MsgSendTx): _62.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _62.MsgSendTxProtoMsg): _62.MsgSendTx;
                        toProto(message: _62.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _62.MsgSendTx): _62.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        encode(message: _62.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgSendTxResponse;
                        fromPartial(object: any): _62.MsgSendTxResponse;
                        fromAmino(object: _62.MsgSendTxResponseAmino): _62.MsgSendTxResponse;
                        toAmino(message: _62.MsgSendTxResponse): _62.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _62.MsgSendTxResponseAminoMsg): _62.MsgSendTxResponse;
                        toAminoMsg(message: _62.MsgSendTxResponse): _62.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _62.MsgSendTxResponseProtoMsg): _62.MsgSendTxResponse;
                        toProto(message: _62.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _62.MsgSendTxResponse): _62.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _61.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryInterchainAccountRequest;
                        fromPartial(object: any): _61.QueryInterchainAccountRequest;
                        fromAmino(object: _61.QueryInterchainAccountRequestAmino): _61.QueryInterchainAccountRequest;
                        toAmino(message: _61.QueryInterchainAccountRequest): _61.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _61.QueryInterchainAccountRequestAminoMsg): _61.QueryInterchainAccountRequest;
                        toAminoMsg(message: _61.QueryInterchainAccountRequest): _61.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _61.QueryInterchainAccountRequestProtoMsg): _61.QueryInterchainAccountRequest;
                        toProto(message: _61.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _61.QueryInterchainAccountRequest): _61.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _61.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryInterchainAccountResponse;
                        fromPartial(object: any): _61.QueryInterchainAccountResponse;
                        fromAmino(object: _61.QueryInterchainAccountResponseAmino): _61.QueryInterchainAccountResponse;
                        toAmino(message: _61.QueryInterchainAccountResponse): _61.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _61.QueryInterchainAccountResponseAminoMsg): _61.QueryInterchainAccountResponse;
                        toAminoMsg(message: _61.QueryInterchainAccountResponse): _61.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _61.QueryInterchainAccountResponseProtoMsg): _61.QueryInterchainAccountResponse;
                        toProto(message: _61.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _61.QueryInterchainAccountResponse): _61.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                        fromPartial(_: any): _61.QueryParamsRequest;
                        fromAmino(_: _61.QueryParamsRequestAmino): _61.QueryParamsRequest;
                        toAmino(_: _61.QueryParamsRequest): _61.QueryParamsRequestAmino;
                        fromAminoMsg(object: _61.QueryParamsRequestAminoMsg): _61.QueryParamsRequest;
                        toAminoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _61.QueryParamsRequestProtoMsg): _61.QueryParamsRequest;
                        toProto(message: _61.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _61.QueryParamsRequest): _61.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                        fromPartial(object: any): _61.QueryParamsResponse;
                        fromAmino(object: _61.QueryParamsResponseAmino): _61.QueryParamsResponse;
                        toAmino(message: _61.QueryParamsResponse): _61.QueryParamsResponseAmino;
                        fromAminoMsg(object: _61.QueryParamsResponseAminoMsg): _61.QueryParamsResponse;
                        toAminoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _61.QueryParamsResponseProtoMsg): _61.QueryParamsResponse;
                        toProto(message: _61.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _61.QueryParamsResponse): _61.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        encode(message: _60.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Params;
                        fromPartial(object: any): _60.Params;
                        fromAmino(object: _60.ParamsAmino): _60.Params;
                        toAmino(message: _60.Params): _60.ParamsAmino;
                        fromAminoMsg(object: _60.ParamsAminoMsg): _60.Params;
                        toAminoMsg(message: _60.Params): _60.ParamsAminoMsg;
                        fromProtoMsg(message: _60.ParamsProtoMsg): _60.Params;
                        toProto(message: _60.Params): Uint8Array;
                        toProtoMsg(message: _60.Params): _60.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                        fromPartial(object: any): _63.GenesisState;
                        fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                        toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                        fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                        toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                        fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                        toProto(message: _63.GenesisState): Uint8Array;
                        toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        encode(message: _63.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ControllerGenesisState;
                        fromPartial(object: any): _63.ControllerGenesisState;
                        fromAmino(object: _63.ControllerGenesisStateAmino): _63.ControllerGenesisState;
                        toAmino(message: _63.ControllerGenesisState): _63.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _63.ControllerGenesisStateAminoMsg): _63.ControllerGenesisState;
                        toAminoMsg(message: _63.ControllerGenesisState): _63.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _63.ControllerGenesisStateProtoMsg): _63.ControllerGenesisState;
                        toProto(message: _63.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _63.ControllerGenesisState): _63.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        encode(message: _63.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.HostGenesisState;
                        fromPartial(object: any): _63.HostGenesisState;
                        fromAmino(object: _63.HostGenesisStateAmino): _63.HostGenesisState;
                        toAmino(message: _63.HostGenesisState): _63.HostGenesisStateAmino;
                        fromAminoMsg(object: _63.HostGenesisStateAminoMsg): _63.HostGenesisState;
                        toAminoMsg(message: _63.HostGenesisState): _63.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _63.HostGenesisStateProtoMsg): _63.HostGenesisState;
                        toProto(message: _63.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _63.HostGenesisState): _63.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        encode(message: _63.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ActiveChannel;
                        fromPartial(object: any): _63.ActiveChannel;
                        fromAmino(object: _63.ActiveChannelAmino): _63.ActiveChannel;
                        toAmino(message: _63.ActiveChannel): _63.ActiveChannelAmino;
                        fromAminoMsg(object: _63.ActiveChannelAminoMsg): _63.ActiveChannel;
                        toAminoMsg(message: _63.ActiveChannel): _63.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _63.ActiveChannelProtoMsg): _63.ActiveChannel;
                        toProto(message: _63.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _63.ActiveChannel): _63.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        encode(message: _63.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.RegisteredInterchainAccount;
                        fromPartial(object: any): _63.RegisteredInterchainAccount;
                        fromAmino(object: _63.RegisteredInterchainAccountAmino): _63.RegisteredInterchainAccount;
                        toAmino(message: _63.RegisteredInterchainAccount): _63.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _63.RegisteredInterchainAccountAminoMsg): _63.RegisteredInterchainAccount;
                        toAminoMsg(message: _63.RegisteredInterchainAccount): _63.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _63.RegisteredInterchainAccountProtoMsg): _63.RegisteredInterchainAccount;
                        toProto(message: _63.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _63.RegisteredInterchainAccount): _63.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _161.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _155.LCDQueryClient;
                    QueryParamsRequest: {
                        encode(_: _65.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsRequest;
                        fromPartial(_: any): _65.QueryParamsRequest;
                        fromAmino(_: _65.QueryParamsRequestAmino): _65.QueryParamsRequest;
                        toAmino(_: _65.QueryParamsRequest): _65.QueryParamsRequestAmino;
                        fromAminoMsg(object: _65.QueryParamsRequestAminoMsg): _65.QueryParamsRequest;
                        toAminoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _65.QueryParamsRequestProtoMsg): _65.QueryParamsRequest;
                        toProto(message: _65.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _65.QueryParamsRequest): _65.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        encode(message: _65.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.QueryParamsResponse;
                        fromPartial(object: any): _65.QueryParamsResponse;
                        fromAmino(object: _65.QueryParamsResponseAmino): _65.QueryParamsResponse;
                        toAmino(message: _65.QueryParamsResponse): _65.QueryParamsResponseAmino;
                        fromAminoMsg(object: _65.QueryParamsResponseAminoMsg): _65.QueryParamsResponse;
                        toAminoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _65.QueryParamsResponseProtoMsg): _65.QueryParamsResponse;
                        toProto(message: _65.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _65.QueryParamsResponse): _65.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        encode(message: _64.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Params;
                        fromPartial(object: any): _64.Params;
                        fromAmino(object: _64.ParamsAmino): _64.Params;
                        toAmino(message: _64.Params): _64.ParamsAmino;
                        fromAminoMsg(object: _64.ParamsAminoMsg): _64.Params;
                        toAminoMsg(message: _64.Params): _64.ParamsAminoMsg;
                        fromProtoMsg(message: _64.ParamsProtoMsg): _64.Params;
                        toProto(message: _64.Params): Uint8Array;
                        toProtoMsg(message: _64.Params): _64.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _68.Type;
                typeToJSON(object: _68.Type): string;
                Type: typeof _68.Type;
                TypeSDKType: typeof _68.Type;
                TypeAmino: typeof _68.Type;
                InterchainAccountPacketData: {
                    encode(message: _68.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.InterchainAccountPacketData;
                    fromPartial(object: any): _68.InterchainAccountPacketData;
                    fromAmino(object: _68.InterchainAccountPacketDataAmino): _68.InterchainAccountPacketData;
                    toAmino(message: _68.InterchainAccountPacketData): _68.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _68.InterchainAccountPacketDataAminoMsg): _68.InterchainAccountPacketData;
                    toAminoMsg(message: _68.InterchainAccountPacketData): _68.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _68.InterchainAccountPacketDataProtoMsg): _68.InterchainAccountPacketData;
                    toProto(message: _68.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _68.InterchainAccountPacketData): _68.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    encode(message: _68.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.CosmosTx;
                    fromPartial(object: any): _68.CosmosTx;
                    fromAmino(object: _68.CosmosTxAmino): _68.CosmosTx;
                    toAmino(message: _68.CosmosTx): _68.CosmosTxAmino;
                    fromAminoMsg(object: _68.CosmosTxAminoMsg): _68.CosmosTx;
                    toAminoMsg(message: _68.CosmosTx): _68.CosmosTxAminoMsg;
                    fromProtoMsg(message: _68.CosmosTxProtoMsg): _68.CosmosTx;
                    toProto(message: _68.CosmosTx): Uint8Array;
                    toProtoMsg(message: _68.CosmosTx): _68.CosmosTxProtoMsg;
                };
                Metadata: {
                    encode(message: _67.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Metadata;
                    fromPartial(object: any): _67.Metadata;
                    fromAmino(object: _67.MetadataAmino): _67.Metadata;
                    toAmino(message: _67.Metadata): _67.MetadataAmino;
                    fromAminoMsg(object: _67.MetadataAminoMsg): _67.Metadata;
                    toAminoMsg(message: _67.Metadata): _67.MetadataAminoMsg;
                    fromProtoMsg(message: _67.MetadataProtoMsg): _67.Metadata;
                    toProto(message: _67.Metadata): Uint8Array;
                    toProtoMsg(message: _67.Metadata): _67.MetadataProtoMsg;
                };
                InterchainAccount: {
                    encode(message: _66.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.InterchainAccount;
                    fromPartial(object: any): _66.InterchainAccount;
                    fromAmino(object: _66.InterchainAccountAmino): _66.InterchainAccount;
                    toAmino(message: _66.InterchainAccount): _66.InterchainAccountAmino;
                    fromAminoMsg(object: _66.InterchainAccountAminoMsg): _66.InterchainAccount;
                    toAminoMsg(message: _66.InterchainAccount): _66.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _66.InterchainAccountProtoMsg): _66.InterchainAccount;
                    toProto(message: _66.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _66.InterchainAccount): _66.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _167.MsgClientImpl;
                QueryClientImpl: typeof _162.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _70.QueryDenomTraceRequest): Promise<_70.QueryDenomTraceResponse>;
                    denomTraces(request?: _70.QueryDenomTracesRequest): Promise<_70.QueryDenomTracesResponse>;
                    params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                    denomHash(request: _70.QueryDenomHashRequest): Promise<_70.QueryDenomHashResponse>;
                    escrowAddress(request: _70.QueryEscrowAddressRequest): Promise<_70.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _156.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _72.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _72.MsgTransfer): {
                            typeUrl: string;
                            value: _72.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _72.MsgTransfer): {
                            typeUrl: string;
                            value: _72.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _72.MsgTransfer) => _72.MsgTransferAmino;
                        fromAmino: (object: _72.MsgTransferAmino) => _72.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _72.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgTransfer;
                    fromPartial(object: any): _72.MsgTransfer;
                    fromAmino(object: _72.MsgTransferAmino): _72.MsgTransfer;
                    toAmino(message: _72.MsgTransfer): _72.MsgTransferAmino;
                    fromAminoMsg(object: _72.MsgTransferAminoMsg): _72.MsgTransfer;
                    toAminoMsg(message: _72.MsgTransfer): _72.MsgTransferAminoMsg;
                    fromProtoMsg(message: _72.MsgTransferProtoMsg): _72.MsgTransfer;
                    toProto(message: _72.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _72.MsgTransfer): _72.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    encode(message: _72.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.MsgTransferResponse;
                    fromPartial(object: any): _72.MsgTransferResponse;
                    fromAmino(object: _72.MsgTransferResponseAmino): _72.MsgTransferResponse;
                    toAmino(message: _72.MsgTransferResponse): _72.MsgTransferResponseAmino;
                    fromAminoMsg(object: _72.MsgTransferResponseAminoMsg): _72.MsgTransferResponse;
                    toAminoMsg(message: _72.MsgTransferResponse): _72.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _72.MsgTransferResponseProtoMsg): _72.MsgTransferResponse;
                    toProto(message: _72.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _72.MsgTransferResponse): _72.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    encode(message: _71.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.DenomTrace;
                    fromPartial(object: any): _71.DenomTrace;
                    fromAmino(object: _71.DenomTraceAmino): _71.DenomTrace;
                    toAmino(message: _71.DenomTrace): _71.DenomTraceAmino;
                    fromAminoMsg(object: _71.DenomTraceAminoMsg): _71.DenomTrace;
                    toAminoMsg(message: _71.DenomTrace): _71.DenomTraceAminoMsg;
                    fromProtoMsg(message: _71.DenomTraceProtoMsg): _71.DenomTrace;
                    toProto(message: _71.DenomTrace): Uint8Array;
                    toProtoMsg(message: _71.DenomTrace): _71.DenomTraceProtoMsg;
                };
                Params: {
                    encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Params;
                    fromPartial(object: any): _71.Params;
                    fromAmino(object: _71.ParamsAmino): _71.Params;
                    toAmino(message: _71.Params): _71.ParamsAmino;
                    fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
                    toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
                    fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
                    toProto(message: _71.Params): Uint8Array;
                    toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    encode(message: _70.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDenomTraceRequest;
                    fromPartial(object: any): _70.QueryDenomTraceRequest;
                    fromAmino(object: _70.QueryDenomTraceRequestAmino): _70.QueryDenomTraceRequest;
                    toAmino(message: _70.QueryDenomTraceRequest): _70.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _70.QueryDenomTraceRequestAminoMsg): _70.QueryDenomTraceRequest;
                    toAminoMsg(message: _70.QueryDenomTraceRequest): _70.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryDenomTraceRequestProtoMsg): _70.QueryDenomTraceRequest;
                    toProto(message: _70.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryDenomTraceRequest): _70.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    encode(message: _70.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDenomTraceResponse;
                    fromPartial(object: any): _70.QueryDenomTraceResponse;
                    fromAmino(object: _70.QueryDenomTraceResponseAmino): _70.QueryDenomTraceResponse;
                    toAmino(message: _70.QueryDenomTraceResponse): _70.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _70.QueryDenomTraceResponseAminoMsg): _70.QueryDenomTraceResponse;
                    toAminoMsg(message: _70.QueryDenomTraceResponse): _70.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryDenomTraceResponseProtoMsg): _70.QueryDenomTraceResponse;
                    toProto(message: _70.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryDenomTraceResponse): _70.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    encode(message: _70.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDenomTracesRequest;
                    fromPartial(object: any): _70.QueryDenomTracesRequest;
                    fromAmino(object: _70.QueryDenomTracesRequestAmino): _70.QueryDenomTracesRequest;
                    toAmino(message: _70.QueryDenomTracesRequest): _70.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _70.QueryDenomTracesRequestAminoMsg): _70.QueryDenomTracesRequest;
                    toAminoMsg(message: _70.QueryDenomTracesRequest): _70.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryDenomTracesRequestProtoMsg): _70.QueryDenomTracesRequest;
                    toProto(message: _70.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryDenomTracesRequest): _70.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    encode(message: _70.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDenomTracesResponse;
                    fromPartial(object: any): _70.QueryDenomTracesResponse;
                    fromAmino(object: _70.QueryDenomTracesResponseAmino): _70.QueryDenomTracesResponse;
                    toAmino(message: _70.QueryDenomTracesResponse): _70.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _70.QueryDenomTracesResponseAminoMsg): _70.QueryDenomTracesResponse;
                    toAminoMsg(message: _70.QueryDenomTracesResponse): _70.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryDenomTracesResponseProtoMsg): _70.QueryDenomTracesResponse;
                    toProto(message: _70.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryDenomTracesResponse): _70.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    encode(_: _70.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsRequest;
                    fromPartial(_: any): _70.QueryParamsRequest;
                    fromAmino(_: _70.QueryParamsRequestAmino): _70.QueryParamsRequest;
                    toAmino(_: _70.QueryParamsRequest): _70.QueryParamsRequestAmino;
                    fromAminoMsg(object: _70.QueryParamsRequestAminoMsg): _70.QueryParamsRequest;
                    toAminoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryParamsRequestProtoMsg): _70.QueryParamsRequest;
                    toProto(message: _70.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryParamsRequest): _70.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    encode(message: _70.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryParamsResponse;
                    fromPartial(object: any): _70.QueryParamsResponse;
                    fromAmino(object: _70.QueryParamsResponseAmino): _70.QueryParamsResponse;
                    toAmino(message: _70.QueryParamsResponse): _70.QueryParamsResponseAmino;
                    fromAminoMsg(object: _70.QueryParamsResponseAminoMsg): _70.QueryParamsResponse;
                    toAminoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryParamsResponseProtoMsg): _70.QueryParamsResponse;
                    toProto(message: _70.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryParamsResponse): _70.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    encode(message: _70.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDenomHashRequest;
                    fromPartial(object: any): _70.QueryDenomHashRequest;
                    fromAmino(object: _70.QueryDenomHashRequestAmino): _70.QueryDenomHashRequest;
                    toAmino(message: _70.QueryDenomHashRequest): _70.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _70.QueryDenomHashRequestAminoMsg): _70.QueryDenomHashRequest;
                    toAminoMsg(message: _70.QueryDenomHashRequest): _70.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryDenomHashRequestProtoMsg): _70.QueryDenomHashRequest;
                    toProto(message: _70.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryDenomHashRequest): _70.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    encode(message: _70.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryDenomHashResponse;
                    fromPartial(object: any): _70.QueryDenomHashResponse;
                    fromAmino(object: _70.QueryDenomHashResponseAmino): _70.QueryDenomHashResponse;
                    toAmino(message: _70.QueryDenomHashResponse): _70.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _70.QueryDenomHashResponseAminoMsg): _70.QueryDenomHashResponse;
                    toAminoMsg(message: _70.QueryDenomHashResponse): _70.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryDenomHashResponseProtoMsg): _70.QueryDenomHashResponse;
                    toProto(message: _70.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryDenomHashResponse): _70.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _70.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryEscrowAddressRequest;
                    fromPartial(object: any): _70.QueryEscrowAddressRequest;
                    fromAmino(object: _70.QueryEscrowAddressRequestAmino): _70.QueryEscrowAddressRequest;
                    toAmino(message: _70.QueryEscrowAddressRequest): _70.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _70.QueryEscrowAddressRequestAminoMsg): _70.QueryEscrowAddressRequest;
                    toAminoMsg(message: _70.QueryEscrowAddressRequest): _70.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _70.QueryEscrowAddressRequestProtoMsg): _70.QueryEscrowAddressRequest;
                    toProto(message: _70.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _70.QueryEscrowAddressRequest): _70.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _70.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.QueryEscrowAddressResponse;
                    fromPartial(object: any): _70.QueryEscrowAddressResponse;
                    fromAmino(object: _70.QueryEscrowAddressResponseAmino): _70.QueryEscrowAddressResponse;
                    toAmino(message: _70.QueryEscrowAddressResponse): _70.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _70.QueryEscrowAddressResponseAminoMsg): _70.QueryEscrowAddressResponse;
                    toAminoMsg(message: _70.QueryEscrowAddressResponse): _70.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _70.QueryEscrowAddressResponseProtoMsg): _70.QueryEscrowAddressResponse;
                    toProto(message: _70.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _70.QueryEscrowAddressResponse): _70.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _69.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GenesisState;
                    fromPartial(object: any): _69.GenesisState;
                    fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                    toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                    fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                    toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                    fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                    toProto(message: _69.GenesisState): Uint8Array;
                    toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _73.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.FungibleTokenPacketData;
                    fromPartial(object: any): _73.FungibleTokenPacketData;
                    fromAmino(object: _73.FungibleTokenPacketDataAmino): _73.FungibleTokenPacketData;
                    toAmino(message: _73.FungibleTokenPacketData): _73.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _73.FungibleTokenPacketDataAminoMsg): _73.FungibleTokenPacketData;
                    toAminoMsg(message: _73.FungibleTokenPacketData): _73.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _73.FungibleTokenPacketDataProtoMsg): _73.FungibleTokenPacketData;
                    toProto(message: _73.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _73.FungibleTokenPacketData): _73.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _168.MsgClientImpl;
                QueryClientImpl: typeof _163.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _76.QueryChannelRequest): Promise<_76.QueryChannelResponse>;
                    channels(request?: _76.QueryChannelsRequest): Promise<_76.QueryChannelsResponse>;
                    connectionChannels(request: _76.QueryConnectionChannelsRequest): Promise<_76.QueryConnectionChannelsResponse>;
                    channelClientState(request: _76.QueryChannelClientStateRequest): Promise<_76.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _76.QueryChannelConsensusStateRequest): Promise<_76.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _76.QueryPacketCommitmentRequest): Promise<_76.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _76.QueryPacketCommitmentsRequest): Promise<_76.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _76.QueryPacketReceiptRequest): Promise<_76.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _76.QueryPacketAcknowledgementRequest): Promise<_76.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _76.QueryPacketAcknowledgementsRequest): Promise<_76.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _76.QueryUnreceivedPacketsRequest): Promise<_76.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _76.QueryUnreceivedAcksRequest): Promise<_76.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _76.QueryNextSequenceReceiveRequest): Promise<_76.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _157.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _77.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _77.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _77.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _77.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _77.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _77.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _77.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _77.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _77.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _77.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _77.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _77.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _77.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _77.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _77.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _77.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _77.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _77.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _77.MsgRecvPacket): {
                            typeUrl: string;
                            value: _77.MsgRecvPacket;
                        };
                        timeout(value: _77.MsgTimeout): {
                            typeUrl: string;
                            value: _77.MsgTimeout;
                        };
                        timeoutOnClose(value: _77.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _77.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _77.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _77.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _77.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _77.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _77.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _77.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _77.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _77.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _77.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _77.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _77.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _77.MsgRecvPacket): {
                            typeUrl: string;
                            value: _77.MsgRecvPacket;
                        };
                        timeout(value: _77.MsgTimeout): {
                            typeUrl: string;
                            value: _77.MsgTimeout;
                        };
                        timeoutOnClose(value: _77.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _77.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _77.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _77.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _77.MsgChannelOpenInit) => _77.MsgChannelOpenInitAmino;
                        fromAmino: (object: _77.MsgChannelOpenInitAmino) => _77.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _77.MsgChannelOpenTry) => _77.MsgChannelOpenTryAmino;
                        fromAmino: (object: _77.MsgChannelOpenTryAmino) => _77.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _77.MsgChannelOpenAck) => _77.MsgChannelOpenAckAmino;
                        fromAmino: (object: _77.MsgChannelOpenAckAmino) => _77.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _77.MsgChannelOpenConfirm) => _77.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _77.MsgChannelOpenConfirmAmino) => _77.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _77.MsgChannelCloseInit) => _77.MsgChannelCloseInitAmino;
                        fromAmino: (object: _77.MsgChannelCloseInitAmino) => _77.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _77.MsgChannelCloseConfirm) => _77.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _77.MsgChannelCloseConfirmAmino) => _77.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _77.MsgRecvPacket) => _77.MsgRecvPacketAmino;
                        fromAmino: (object: _77.MsgRecvPacketAmino) => _77.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _77.MsgTimeout) => _77.MsgTimeoutAmino;
                        fromAmino: (object: _77.MsgTimeoutAmino) => _77.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _77.MsgTimeoutOnClose) => _77.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _77.MsgTimeoutOnCloseAmino) => _77.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _77.MsgAcknowledgement) => _77.MsgAcknowledgementAmino;
                        fromAmino: (object: _77.MsgAcknowledgementAmino) => _77.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _77.ResponseResultType;
                responseResultTypeToJSON(object: _77.ResponseResultType): string;
                ResponseResultType: typeof _77.ResponseResultType;
                ResponseResultTypeSDKType: typeof _77.ResponseResultType;
                ResponseResultTypeAmino: typeof _77.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _77.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenInit;
                    fromPartial(object: any): _77.MsgChannelOpenInit;
                    fromAmino(object: _77.MsgChannelOpenInitAmino): _77.MsgChannelOpenInit;
                    toAmino(message: _77.MsgChannelOpenInit): _77.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenInitAminoMsg): _77.MsgChannelOpenInit;
                    toAminoMsg(message: _77.MsgChannelOpenInit): _77.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenInitProtoMsg): _77.MsgChannelOpenInit;
                    toProto(message: _77.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenInit): _77.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _77.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenInitResponse;
                    fromPartial(object: any): _77.MsgChannelOpenInitResponse;
                    fromAmino(object: _77.MsgChannelOpenInitResponseAmino): _77.MsgChannelOpenInitResponse;
                    toAmino(message: _77.MsgChannelOpenInitResponse): _77.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenInitResponseAminoMsg): _77.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _77.MsgChannelOpenInitResponse): _77.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenInitResponseProtoMsg): _77.MsgChannelOpenInitResponse;
                    toProto(message: _77.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenInitResponse): _77.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    encode(message: _77.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenTry;
                    fromPartial(object: any): _77.MsgChannelOpenTry;
                    fromAmino(object: _77.MsgChannelOpenTryAmino): _77.MsgChannelOpenTry;
                    toAmino(message: _77.MsgChannelOpenTry): _77.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenTryAminoMsg): _77.MsgChannelOpenTry;
                    toAminoMsg(message: _77.MsgChannelOpenTry): _77.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenTryProtoMsg): _77.MsgChannelOpenTry;
                    toProto(message: _77.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenTry): _77.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _77.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenTryResponse;
                    fromPartial(object: any): _77.MsgChannelOpenTryResponse;
                    fromAmino(object: _77.MsgChannelOpenTryResponseAmino): _77.MsgChannelOpenTryResponse;
                    toAmino(message: _77.MsgChannelOpenTryResponse): _77.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenTryResponseAminoMsg): _77.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _77.MsgChannelOpenTryResponse): _77.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenTryResponseProtoMsg): _77.MsgChannelOpenTryResponse;
                    toProto(message: _77.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenTryResponse): _77.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    encode(message: _77.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenAck;
                    fromPartial(object: any): _77.MsgChannelOpenAck;
                    fromAmino(object: _77.MsgChannelOpenAckAmino): _77.MsgChannelOpenAck;
                    toAmino(message: _77.MsgChannelOpenAck): _77.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenAckAminoMsg): _77.MsgChannelOpenAck;
                    toAminoMsg(message: _77.MsgChannelOpenAck): _77.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenAckProtoMsg): _77.MsgChannelOpenAck;
                    toProto(message: _77.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenAck): _77.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _77.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenAckResponse;
                    fromPartial(_: any): _77.MsgChannelOpenAckResponse;
                    fromAmino(_: _77.MsgChannelOpenAckResponseAmino): _77.MsgChannelOpenAckResponse;
                    toAmino(_: _77.MsgChannelOpenAckResponse): _77.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenAckResponseAminoMsg): _77.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _77.MsgChannelOpenAckResponse): _77.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenAckResponseProtoMsg): _77.MsgChannelOpenAckResponse;
                    toProto(message: _77.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenAckResponse): _77.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _77.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenConfirm;
                    fromPartial(object: any): _77.MsgChannelOpenConfirm;
                    fromAmino(object: _77.MsgChannelOpenConfirmAmino): _77.MsgChannelOpenConfirm;
                    toAmino(message: _77.MsgChannelOpenConfirm): _77.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenConfirmAminoMsg): _77.MsgChannelOpenConfirm;
                    toAminoMsg(message: _77.MsgChannelOpenConfirm): _77.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenConfirmProtoMsg): _77.MsgChannelOpenConfirm;
                    toProto(message: _77.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenConfirm): _77.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _77.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelOpenConfirmResponse;
                    fromPartial(_: any): _77.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _77.MsgChannelOpenConfirmResponseAmino): _77.MsgChannelOpenConfirmResponse;
                    toAmino(_: _77.MsgChannelOpenConfirmResponse): _77.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _77.MsgChannelOpenConfirmResponseAminoMsg): _77.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _77.MsgChannelOpenConfirmResponse): _77.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelOpenConfirmResponseProtoMsg): _77.MsgChannelOpenConfirmResponse;
                    toProto(message: _77.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelOpenConfirmResponse): _77.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    encode(message: _77.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelCloseInit;
                    fromPartial(object: any): _77.MsgChannelCloseInit;
                    fromAmino(object: _77.MsgChannelCloseInitAmino): _77.MsgChannelCloseInit;
                    toAmino(message: _77.MsgChannelCloseInit): _77.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _77.MsgChannelCloseInitAminoMsg): _77.MsgChannelCloseInit;
                    toAminoMsg(message: _77.MsgChannelCloseInit): _77.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelCloseInitProtoMsg): _77.MsgChannelCloseInit;
                    toProto(message: _77.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelCloseInit): _77.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _77.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelCloseInitResponse;
                    fromPartial(_: any): _77.MsgChannelCloseInitResponse;
                    fromAmino(_: _77.MsgChannelCloseInitResponseAmino): _77.MsgChannelCloseInitResponse;
                    toAmino(_: _77.MsgChannelCloseInitResponse): _77.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _77.MsgChannelCloseInitResponseAminoMsg): _77.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _77.MsgChannelCloseInitResponse): _77.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelCloseInitResponseProtoMsg): _77.MsgChannelCloseInitResponse;
                    toProto(message: _77.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelCloseInitResponse): _77.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _77.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelCloseConfirm;
                    fromPartial(object: any): _77.MsgChannelCloseConfirm;
                    fromAmino(object: _77.MsgChannelCloseConfirmAmino): _77.MsgChannelCloseConfirm;
                    toAmino(message: _77.MsgChannelCloseConfirm): _77.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _77.MsgChannelCloseConfirmAminoMsg): _77.MsgChannelCloseConfirm;
                    toAminoMsg(message: _77.MsgChannelCloseConfirm): _77.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelCloseConfirmProtoMsg): _77.MsgChannelCloseConfirm;
                    toProto(message: _77.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelCloseConfirm): _77.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _77.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgChannelCloseConfirmResponse;
                    fromPartial(_: any): _77.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _77.MsgChannelCloseConfirmResponseAmino): _77.MsgChannelCloseConfirmResponse;
                    toAmino(_: _77.MsgChannelCloseConfirmResponse): _77.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _77.MsgChannelCloseConfirmResponseAminoMsg): _77.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _77.MsgChannelCloseConfirmResponse): _77.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgChannelCloseConfirmResponseProtoMsg): _77.MsgChannelCloseConfirmResponse;
                    toProto(message: _77.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgChannelCloseConfirmResponse): _77.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    encode(message: _77.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgRecvPacket;
                    fromPartial(object: any): _77.MsgRecvPacket;
                    fromAmino(object: _77.MsgRecvPacketAmino): _77.MsgRecvPacket;
                    toAmino(message: _77.MsgRecvPacket): _77.MsgRecvPacketAmino;
                    fromAminoMsg(object: _77.MsgRecvPacketAminoMsg): _77.MsgRecvPacket;
                    toAminoMsg(message: _77.MsgRecvPacket): _77.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _77.MsgRecvPacketProtoMsg): _77.MsgRecvPacket;
                    toProto(message: _77.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _77.MsgRecvPacket): _77.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    encode(message: _77.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgRecvPacketResponse;
                    fromPartial(object: any): _77.MsgRecvPacketResponse;
                    fromAmino(object: _77.MsgRecvPacketResponseAmino): _77.MsgRecvPacketResponse;
                    toAmino(message: _77.MsgRecvPacketResponse): _77.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _77.MsgRecvPacketResponseAminoMsg): _77.MsgRecvPacketResponse;
                    toAminoMsg(message: _77.MsgRecvPacketResponse): _77.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgRecvPacketResponseProtoMsg): _77.MsgRecvPacketResponse;
                    toProto(message: _77.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgRecvPacketResponse): _77.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    encode(message: _77.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTimeout;
                    fromPartial(object: any): _77.MsgTimeout;
                    fromAmino(object: _77.MsgTimeoutAmino): _77.MsgTimeout;
                    toAmino(message: _77.MsgTimeout): _77.MsgTimeoutAmino;
                    fromAminoMsg(object: _77.MsgTimeoutAminoMsg): _77.MsgTimeout;
                    toAminoMsg(message: _77.MsgTimeout): _77.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _77.MsgTimeoutProtoMsg): _77.MsgTimeout;
                    toProto(message: _77.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _77.MsgTimeout): _77.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    encode(message: _77.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTimeoutResponse;
                    fromPartial(object: any): _77.MsgTimeoutResponse;
                    fromAmino(object: _77.MsgTimeoutResponseAmino): _77.MsgTimeoutResponse;
                    toAmino(message: _77.MsgTimeoutResponse): _77.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _77.MsgTimeoutResponseAminoMsg): _77.MsgTimeoutResponse;
                    toAminoMsg(message: _77.MsgTimeoutResponse): _77.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgTimeoutResponseProtoMsg): _77.MsgTimeoutResponse;
                    toProto(message: _77.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgTimeoutResponse): _77.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    encode(message: _77.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTimeoutOnClose;
                    fromPartial(object: any): _77.MsgTimeoutOnClose;
                    fromAmino(object: _77.MsgTimeoutOnCloseAmino): _77.MsgTimeoutOnClose;
                    toAmino(message: _77.MsgTimeoutOnClose): _77.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _77.MsgTimeoutOnCloseAminoMsg): _77.MsgTimeoutOnClose;
                    toAminoMsg(message: _77.MsgTimeoutOnClose): _77.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _77.MsgTimeoutOnCloseProtoMsg): _77.MsgTimeoutOnClose;
                    toProto(message: _77.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _77.MsgTimeoutOnClose): _77.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _77.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTimeoutOnCloseResponse;
                    fromPartial(object: any): _77.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _77.MsgTimeoutOnCloseResponseAmino): _77.MsgTimeoutOnCloseResponse;
                    toAmino(message: _77.MsgTimeoutOnCloseResponse): _77.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _77.MsgTimeoutOnCloseResponseAminoMsg): _77.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _77.MsgTimeoutOnCloseResponse): _77.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgTimeoutOnCloseResponseProtoMsg): _77.MsgTimeoutOnCloseResponse;
                    toProto(message: _77.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgTimeoutOnCloseResponse): _77.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    encode(message: _77.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgAcknowledgement;
                    fromPartial(object: any): _77.MsgAcknowledgement;
                    fromAmino(object: _77.MsgAcknowledgementAmino): _77.MsgAcknowledgement;
                    toAmino(message: _77.MsgAcknowledgement): _77.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _77.MsgAcknowledgementAminoMsg): _77.MsgAcknowledgement;
                    toAminoMsg(message: _77.MsgAcknowledgement): _77.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _77.MsgAcknowledgementProtoMsg): _77.MsgAcknowledgement;
                    toProto(message: _77.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _77.MsgAcknowledgement): _77.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _77.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgAcknowledgementResponse;
                    fromPartial(object: any): _77.MsgAcknowledgementResponse;
                    fromAmino(object: _77.MsgAcknowledgementResponseAmino): _77.MsgAcknowledgementResponse;
                    toAmino(message: _77.MsgAcknowledgementResponse): _77.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _77.MsgAcknowledgementResponseAminoMsg): _77.MsgAcknowledgementResponse;
                    toAminoMsg(message: _77.MsgAcknowledgementResponse): _77.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgAcknowledgementResponseProtoMsg): _77.MsgAcknowledgementResponse;
                    toProto(message: _77.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgAcknowledgementResponse): _77.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    encode(message: _76.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelRequest;
                    fromPartial(object: any): _76.QueryChannelRequest;
                    fromAmino(object: _76.QueryChannelRequestAmino): _76.QueryChannelRequest;
                    toAmino(message: _76.QueryChannelRequest): _76.QueryChannelRequestAmino;
                    fromAminoMsg(object: _76.QueryChannelRequestAminoMsg): _76.QueryChannelRequest;
                    toAminoMsg(message: _76.QueryChannelRequest): _76.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelRequestProtoMsg): _76.QueryChannelRequest;
                    toProto(message: _76.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelRequest): _76.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    encode(message: _76.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelResponse;
                    fromPartial(object: any): _76.QueryChannelResponse;
                    fromAmino(object: _76.QueryChannelResponseAmino): _76.QueryChannelResponse;
                    toAmino(message: _76.QueryChannelResponse): _76.QueryChannelResponseAmino;
                    fromAminoMsg(object: _76.QueryChannelResponseAminoMsg): _76.QueryChannelResponse;
                    toAminoMsg(message: _76.QueryChannelResponse): _76.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelResponseProtoMsg): _76.QueryChannelResponse;
                    toProto(message: _76.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelResponse): _76.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    encode(message: _76.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelsRequest;
                    fromPartial(object: any): _76.QueryChannelsRequest;
                    fromAmino(object: _76.QueryChannelsRequestAmino): _76.QueryChannelsRequest;
                    toAmino(message: _76.QueryChannelsRequest): _76.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _76.QueryChannelsRequestAminoMsg): _76.QueryChannelsRequest;
                    toAminoMsg(message: _76.QueryChannelsRequest): _76.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelsRequestProtoMsg): _76.QueryChannelsRequest;
                    toProto(message: _76.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelsRequest): _76.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    encode(message: _76.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelsResponse;
                    fromPartial(object: any): _76.QueryChannelsResponse;
                    fromAmino(object: _76.QueryChannelsResponseAmino): _76.QueryChannelsResponse;
                    toAmino(message: _76.QueryChannelsResponse): _76.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _76.QueryChannelsResponseAminoMsg): _76.QueryChannelsResponse;
                    toAminoMsg(message: _76.QueryChannelsResponse): _76.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelsResponseProtoMsg): _76.QueryChannelsResponse;
                    toProto(message: _76.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelsResponse): _76.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _76.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionChannelsRequest;
                    fromPartial(object: any): _76.QueryConnectionChannelsRequest;
                    fromAmino(object: _76.QueryConnectionChannelsRequestAmino): _76.QueryConnectionChannelsRequest;
                    toAmino(message: _76.QueryConnectionChannelsRequest): _76.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _76.QueryConnectionChannelsRequestAminoMsg): _76.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _76.QueryConnectionChannelsRequest): _76.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionChannelsRequestProtoMsg): _76.QueryConnectionChannelsRequest;
                    toProto(message: _76.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionChannelsRequest): _76.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _76.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryConnectionChannelsResponse;
                    fromPartial(object: any): _76.QueryConnectionChannelsResponse;
                    fromAmino(object: _76.QueryConnectionChannelsResponseAmino): _76.QueryConnectionChannelsResponse;
                    toAmino(message: _76.QueryConnectionChannelsResponse): _76.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _76.QueryConnectionChannelsResponseAminoMsg): _76.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _76.QueryConnectionChannelsResponse): _76.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryConnectionChannelsResponseProtoMsg): _76.QueryConnectionChannelsResponse;
                    toProto(message: _76.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryConnectionChannelsResponse): _76.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _76.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelClientStateRequest;
                    fromPartial(object: any): _76.QueryChannelClientStateRequest;
                    fromAmino(object: _76.QueryChannelClientStateRequestAmino): _76.QueryChannelClientStateRequest;
                    toAmino(message: _76.QueryChannelClientStateRequest): _76.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _76.QueryChannelClientStateRequestAminoMsg): _76.QueryChannelClientStateRequest;
                    toAminoMsg(message: _76.QueryChannelClientStateRequest): _76.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelClientStateRequestProtoMsg): _76.QueryChannelClientStateRequest;
                    toProto(message: _76.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelClientStateRequest): _76.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _76.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelClientStateResponse;
                    fromPartial(object: any): _76.QueryChannelClientStateResponse;
                    fromAmino(object: _76.QueryChannelClientStateResponseAmino): _76.QueryChannelClientStateResponse;
                    toAmino(message: _76.QueryChannelClientStateResponse): _76.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _76.QueryChannelClientStateResponseAminoMsg): _76.QueryChannelClientStateResponse;
                    toAminoMsg(message: _76.QueryChannelClientStateResponse): _76.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelClientStateResponseProtoMsg): _76.QueryChannelClientStateResponse;
                    toProto(message: _76.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelClientStateResponse): _76.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _76.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelConsensusStateRequest;
                    fromPartial(object: any): _76.QueryChannelConsensusStateRequest;
                    fromAmino(object: _76.QueryChannelConsensusStateRequestAmino): _76.QueryChannelConsensusStateRequest;
                    toAmino(message: _76.QueryChannelConsensusStateRequest): _76.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _76.QueryChannelConsensusStateRequestAminoMsg): _76.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _76.QueryChannelConsensusStateRequest): _76.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelConsensusStateRequestProtoMsg): _76.QueryChannelConsensusStateRequest;
                    toProto(message: _76.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelConsensusStateRequest): _76.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _76.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryChannelConsensusStateResponse;
                    fromPartial(object: any): _76.QueryChannelConsensusStateResponse;
                    fromAmino(object: _76.QueryChannelConsensusStateResponseAmino): _76.QueryChannelConsensusStateResponse;
                    toAmino(message: _76.QueryChannelConsensusStateResponse): _76.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _76.QueryChannelConsensusStateResponseAminoMsg): _76.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _76.QueryChannelConsensusStateResponse): _76.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryChannelConsensusStateResponseProtoMsg): _76.QueryChannelConsensusStateResponse;
                    toProto(message: _76.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryChannelConsensusStateResponse): _76.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _76.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketCommitmentRequest;
                    fromPartial(object: any): _76.QueryPacketCommitmentRequest;
                    fromAmino(object: _76.QueryPacketCommitmentRequestAmino): _76.QueryPacketCommitmentRequest;
                    toAmino(message: _76.QueryPacketCommitmentRequest): _76.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _76.QueryPacketCommitmentRequestAminoMsg): _76.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _76.QueryPacketCommitmentRequest): _76.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketCommitmentRequestProtoMsg): _76.QueryPacketCommitmentRequest;
                    toProto(message: _76.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketCommitmentRequest): _76.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _76.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketCommitmentResponse;
                    fromPartial(object: any): _76.QueryPacketCommitmentResponse;
                    fromAmino(object: _76.QueryPacketCommitmentResponseAmino): _76.QueryPacketCommitmentResponse;
                    toAmino(message: _76.QueryPacketCommitmentResponse): _76.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _76.QueryPacketCommitmentResponseAminoMsg): _76.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _76.QueryPacketCommitmentResponse): _76.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketCommitmentResponseProtoMsg): _76.QueryPacketCommitmentResponse;
                    toProto(message: _76.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketCommitmentResponse): _76.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _76.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketCommitmentsRequest;
                    fromPartial(object: any): _76.QueryPacketCommitmentsRequest;
                    fromAmino(object: _76.QueryPacketCommitmentsRequestAmino): _76.QueryPacketCommitmentsRequest;
                    toAmino(message: _76.QueryPacketCommitmentsRequest): _76.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _76.QueryPacketCommitmentsRequestAminoMsg): _76.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _76.QueryPacketCommitmentsRequest): _76.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketCommitmentsRequestProtoMsg): _76.QueryPacketCommitmentsRequest;
                    toProto(message: _76.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketCommitmentsRequest): _76.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _76.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketCommitmentsResponse;
                    fromPartial(object: any): _76.QueryPacketCommitmentsResponse;
                    fromAmino(object: _76.QueryPacketCommitmentsResponseAmino): _76.QueryPacketCommitmentsResponse;
                    toAmino(message: _76.QueryPacketCommitmentsResponse): _76.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _76.QueryPacketCommitmentsResponseAminoMsg): _76.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _76.QueryPacketCommitmentsResponse): _76.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketCommitmentsResponseProtoMsg): _76.QueryPacketCommitmentsResponse;
                    toProto(message: _76.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketCommitmentsResponse): _76.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _76.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketReceiptRequest;
                    fromPartial(object: any): _76.QueryPacketReceiptRequest;
                    fromAmino(object: _76.QueryPacketReceiptRequestAmino): _76.QueryPacketReceiptRequest;
                    toAmino(message: _76.QueryPacketReceiptRequest): _76.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _76.QueryPacketReceiptRequestAminoMsg): _76.QueryPacketReceiptRequest;
                    toAminoMsg(message: _76.QueryPacketReceiptRequest): _76.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketReceiptRequestProtoMsg): _76.QueryPacketReceiptRequest;
                    toProto(message: _76.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketReceiptRequest): _76.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _76.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketReceiptResponse;
                    fromPartial(object: any): _76.QueryPacketReceiptResponse;
                    fromAmino(object: _76.QueryPacketReceiptResponseAmino): _76.QueryPacketReceiptResponse;
                    toAmino(message: _76.QueryPacketReceiptResponse): _76.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _76.QueryPacketReceiptResponseAminoMsg): _76.QueryPacketReceiptResponse;
                    toAminoMsg(message: _76.QueryPacketReceiptResponse): _76.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketReceiptResponseProtoMsg): _76.QueryPacketReceiptResponse;
                    toProto(message: _76.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketReceiptResponse): _76.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _76.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketAcknowledgementRequest;
                    fromPartial(object: any): _76.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _76.QueryPacketAcknowledgementRequestAmino): _76.QueryPacketAcknowledgementRequest;
                    toAmino(message: _76.QueryPacketAcknowledgementRequest): _76.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _76.QueryPacketAcknowledgementRequestAminoMsg): _76.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _76.QueryPacketAcknowledgementRequest): _76.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketAcknowledgementRequestProtoMsg): _76.QueryPacketAcknowledgementRequest;
                    toProto(message: _76.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketAcknowledgementRequest): _76.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _76.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketAcknowledgementResponse;
                    fromPartial(object: any): _76.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _76.QueryPacketAcknowledgementResponseAmino): _76.QueryPacketAcknowledgementResponse;
                    toAmino(message: _76.QueryPacketAcknowledgementResponse): _76.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _76.QueryPacketAcknowledgementResponseAminoMsg): _76.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _76.QueryPacketAcknowledgementResponse): _76.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketAcknowledgementResponseProtoMsg): _76.QueryPacketAcknowledgementResponse;
                    toProto(message: _76.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketAcknowledgementResponse): _76.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _76.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: any): _76.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _76.QueryPacketAcknowledgementsRequestAmino): _76.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _76.QueryPacketAcknowledgementsRequest): _76.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _76.QueryPacketAcknowledgementsRequestAminoMsg): _76.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _76.QueryPacketAcknowledgementsRequest): _76.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketAcknowledgementsRequestProtoMsg): _76.QueryPacketAcknowledgementsRequest;
                    toProto(message: _76.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketAcknowledgementsRequest): _76.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _76.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: any): _76.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _76.QueryPacketAcknowledgementsResponseAmino): _76.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _76.QueryPacketAcknowledgementsResponse): _76.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _76.QueryPacketAcknowledgementsResponseAminoMsg): _76.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _76.QueryPacketAcknowledgementsResponse): _76.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryPacketAcknowledgementsResponseProtoMsg): _76.QueryPacketAcknowledgementsResponse;
                    toProto(message: _76.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryPacketAcknowledgementsResponse): _76.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _76.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUnreceivedPacketsRequest;
                    fromPartial(object: any): _76.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _76.QueryUnreceivedPacketsRequestAmino): _76.QueryUnreceivedPacketsRequest;
                    toAmino(message: _76.QueryUnreceivedPacketsRequest): _76.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _76.QueryUnreceivedPacketsRequestAminoMsg): _76.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _76.QueryUnreceivedPacketsRequest): _76.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryUnreceivedPacketsRequestProtoMsg): _76.QueryUnreceivedPacketsRequest;
                    toProto(message: _76.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryUnreceivedPacketsRequest): _76.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _76.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUnreceivedPacketsResponse;
                    fromPartial(object: any): _76.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _76.QueryUnreceivedPacketsResponseAmino): _76.QueryUnreceivedPacketsResponse;
                    toAmino(message: _76.QueryUnreceivedPacketsResponse): _76.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _76.QueryUnreceivedPacketsResponseAminoMsg): _76.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _76.QueryUnreceivedPacketsResponse): _76.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryUnreceivedPacketsResponseProtoMsg): _76.QueryUnreceivedPacketsResponse;
                    toProto(message: _76.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryUnreceivedPacketsResponse): _76.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _76.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUnreceivedAcksRequest;
                    fromPartial(object: any): _76.QueryUnreceivedAcksRequest;
                    fromAmino(object: _76.QueryUnreceivedAcksRequestAmino): _76.QueryUnreceivedAcksRequest;
                    toAmino(message: _76.QueryUnreceivedAcksRequest): _76.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _76.QueryUnreceivedAcksRequestAminoMsg): _76.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _76.QueryUnreceivedAcksRequest): _76.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryUnreceivedAcksRequestProtoMsg): _76.QueryUnreceivedAcksRequest;
                    toProto(message: _76.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryUnreceivedAcksRequest): _76.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _76.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryUnreceivedAcksResponse;
                    fromPartial(object: any): _76.QueryUnreceivedAcksResponse;
                    fromAmino(object: _76.QueryUnreceivedAcksResponseAmino): _76.QueryUnreceivedAcksResponse;
                    toAmino(message: _76.QueryUnreceivedAcksResponse): _76.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _76.QueryUnreceivedAcksResponseAminoMsg): _76.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _76.QueryUnreceivedAcksResponse): _76.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryUnreceivedAcksResponseProtoMsg): _76.QueryUnreceivedAcksResponse;
                    toProto(message: _76.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryUnreceivedAcksResponse): _76.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _76.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryNextSequenceReceiveRequest;
                    fromPartial(object: any): _76.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _76.QueryNextSequenceReceiveRequestAmino): _76.QueryNextSequenceReceiveRequest;
                    toAmino(message: _76.QueryNextSequenceReceiveRequest): _76.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _76.QueryNextSequenceReceiveRequestAminoMsg): _76.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _76.QueryNextSequenceReceiveRequest): _76.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _76.QueryNextSequenceReceiveRequestProtoMsg): _76.QueryNextSequenceReceiveRequest;
                    toProto(message: _76.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _76.QueryNextSequenceReceiveRequest): _76.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _76.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.QueryNextSequenceReceiveResponse;
                    fromPartial(object: any): _76.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _76.QueryNextSequenceReceiveResponseAmino): _76.QueryNextSequenceReceiveResponse;
                    toAmino(message: _76.QueryNextSequenceReceiveResponse): _76.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _76.QueryNextSequenceReceiveResponseAminoMsg): _76.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _76.QueryNextSequenceReceiveResponse): _76.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _76.QueryNextSequenceReceiveResponseProtoMsg): _76.QueryNextSequenceReceiveResponse;
                    toProto(message: _76.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _76.QueryNextSequenceReceiveResponse): _76.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                    fromPartial(object: any): _75.GenesisState;
                    fromAmino(object: _75.GenesisStateAmino): _75.GenesisState;
                    toAmino(message: _75.GenesisState): _75.GenesisStateAmino;
                    fromAminoMsg(object: _75.GenesisStateAminoMsg): _75.GenesisState;
                    toAminoMsg(message: _75.GenesisState): _75.GenesisStateAminoMsg;
                    fromProtoMsg(message: _75.GenesisStateProtoMsg): _75.GenesisState;
                    toProto(message: _75.GenesisState): Uint8Array;
                    toProtoMsg(message: _75.GenesisState): _75.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    encode(message: _75.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketSequence;
                    fromPartial(object: any): _75.PacketSequence;
                    fromAmino(object: _75.PacketSequenceAmino): _75.PacketSequence;
                    toAmino(message: _75.PacketSequence): _75.PacketSequenceAmino;
                    fromAminoMsg(object: _75.PacketSequenceAminoMsg): _75.PacketSequence;
                    toAminoMsg(message: _75.PacketSequence): _75.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _75.PacketSequenceProtoMsg): _75.PacketSequence;
                    toProto(message: _75.PacketSequence): Uint8Array;
                    toProtoMsg(message: _75.PacketSequence): _75.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _74.State;
                stateToJSON(object: _74.State): string;
                orderFromJSON(object: any): _74.Order;
                orderToJSON(object: _74.Order): string;
                State: typeof _74.State;
                StateSDKType: typeof _74.State;
                StateAmino: typeof _74.State;
                Order: typeof _74.Order;
                OrderSDKType: typeof _74.Order;
                OrderAmino: typeof _74.Order;
                Channel: {
                    encode(message: _74.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Channel;
                    fromPartial(object: any): _74.Channel;
                    fromAmino(object: _74.ChannelAmino): _74.Channel;
                    toAmino(message: _74.Channel): _74.ChannelAmino;
                    fromAminoMsg(object: _74.ChannelAminoMsg): _74.Channel;
                    toAminoMsg(message: _74.Channel): _74.ChannelAminoMsg;
                    fromProtoMsg(message: _74.ChannelProtoMsg): _74.Channel;
                    toProto(message: _74.Channel): Uint8Array;
                    toProtoMsg(message: _74.Channel): _74.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    encode(message: _74.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.IdentifiedChannel;
                    fromPartial(object: any): _74.IdentifiedChannel;
                    fromAmino(object: _74.IdentifiedChannelAmino): _74.IdentifiedChannel;
                    toAmino(message: _74.IdentifiedChannel): _74.IdentifiedChannelAmino;
                    fromAminoMsg(object: _74.IdentifiedChannelAminoMsg): _74.IdentifiedChannel;
                    toAminoMsg(message: _74.IdentifiedChannel): _74.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _74.IdentifiedChannelProtoMsg): _74.IdentifiedChannel;
                    toProto(message: _74.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _74.IdentifiedChannel): _74.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    encode(message: _74.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Counterparty;
                    fromPartial(object: any): _74.Counterparty;
                    fromAmino(object: _74.CounterpartyAmino): _74.Counterparty;
                    toAmino(message: _74.Counterparty): _74.CounterpartyAmino;
                    fromAminoMsg(object: _74.CounterpartyAminoMsg): _74.Counterparty;
                    toAminoMsg(message: _74.Counterparty): _74.CounterpartyAminoMsg;
                    fromProtoMsg(message: _74.CounterpartyProtoMsg): _74.Counterparty;
                    toProto(message: _74.Counterparty): Uint8Array;
                    toProtoMsg(message: _74.Counterparty): _74.CounterpartyProtoMsg;
                };
                Packet: {
                    encode(message: _74.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Packet;
                    fromPartial(object: any): _74.Packet;
                    fromAmino(object: _74.PacketAmino): _74.Packet;
                    toAmino(message: _74.Packet): _74.PacketAmino;
                    fromAminoMsg(object: _74.PacketAminoMsg): _74.Packet;
                    toAminoMsg(message: _74.Packet): _74.PacketAminoMsg;
                    fromProtoMsg(message: _74.PacketProtoMsg): _74.Packet;
                    toProto(message: _74.Packet): Uint8Array;
                    toProtoMsg(message: _74.Packet): _74.PacketProtoMsg;
                };
                PacketState: {
                    encode(message: _74.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PacketState;
                    fromPartial(object: any): _74.PacketState;
                    fromAmino(object: _74.PacketStateAmino): _74.PacketState;
                    toAmino(message: _74.PacketState): _74.PacketStateAmino;
                    fromAminoMsg(object: _74.PacketStateAminoMsg): _74.PacketState;
                    toAminoMsg(message: _74.PacketState): _74.PacketStateAminoMsg;
                    fromProtoMsg(message: _74.PacketStateProtoMsg): _74.PacketState;
                    toProto(message: _74.PacketState): Uint8Array;
                    toProtoMsg(message: _74.PacketState): _74.PacketStateProtoMsg;
                };
                PacketId: {
                    encode(message: _74.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.PacketId;
                    fromPartial(object: any): _74.PacketId;
                    fromAmino(object: _74.PacketIdAmino): _74.PacketId;
                    toAmino(message: _74.PacketId): _74.PacketIdAmino;
                    fromAminoMsg(object: _74.PacketIdAminoMsg): _74.PacketId;
                    toAminoMsg(message: _74.PacketId): _74.PacketIdAminoMsg;
                    fromProtoMsg(message: _74.PacketIdProtoMsg): _74.PacketId;
                    toProto(message: _74.PacketId): Uint8Array;
                    toProtoMsg(message: _74.PacketId): _74.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    encode(message: _74.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.Acknowledgement;
                    fromPartial(object: any): _74.Acknowledgement;
                    fromAmino(object: _74.AcknowledgementAmino): _74.Acknowledgement;
                    toAmino(message: _74.Acknowledgement): _74.AcknowledgementAmino;
                    fromAminoMsg(object: _74.AcknowledgementAminoMsg): _74.Acknowledgement;
                    toAminoMsg(message: _74.Acknowledgement): _74.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _74.AcknowledgementProtoMsg): _74.Acknowledgement;
                    toProto(message: _74.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _74.Acknowledgement): _74.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _169.MsgClientImpl;
                QueryClientImpl: typeof _164.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _80.QueryClientStateRequest): Promise<_80.QueryClientStateResponse>;
                    clientStates(request?: _80.QueryClientStatesRequest): Promise<_80.QueryClientStatesResponse>;
                    consensusState(request: _80.QueryConsensusStateRequest): Promise<_80.QueryConsensusStateResponse>;
                    consensusStates(request: _80.QueryConsensusStatesRequest): Promise<_80.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _80.QueryConsensusStateHeightsRequest): Promise<_80.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _80.QueryClientStatusRequest): Promise<_80.QueryClientStatusResponse>;
                    clientParams(request?: _80.QueryClientParamsRequest): Promise<_80.QueryClientParamsResponse>;
                    upgradedClientState(request?: _80.QueryUpgradedClientStateRequest): Promise<_80.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _80.QueryUpgradedConsensusStateRequest): Promise<_80.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _158.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _81.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _81.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _81.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _81.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _81.MsgCreateClient): {
                            typeUrl: string;
                            value: _81.MsgCreateClient;
                        };
                        updateClient(value: _81.MsgUpdateClient): {
                            typeUrl: string;
                            value: _81.MsgUpdateClient;
                        };
                        upgradeClient(value: _81.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _81.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _81.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _81.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _81.MsgCreateClient): {
                            typeUrl: string;
                            value: _81.MsgCreateClient;
                        };
                        updateClient(value: _81.MsgUpdateClient): {
                            typeUrl: string;
                            value: _81.MsgUpdateClient;
                        };
                        upgradeClient(value: _81.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _81.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _81.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _81.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _81.MsgCreateClient) => _81.MsgCreateClientAmino;
                        fromAmino: (object: _81.MsgCreateClientAmino) => _81.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _81.MsgUpdateClient) => _81.MsgUpdateClientAmino;
                        fromAmino: (object: _81.MsgUpdateClientAmino) => _81.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _81.MsgUpgradeClient) => _81.MsgUpgradeClientAmino;
                        fromAmino: (object: _81.MsgUpgradeClientAmino) => _81.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _81.MsgSubmitMisbehaviour) => _81.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _81.MsgSubmitMisbehaviourAmino) => _81.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _81.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateClient;
                    fromPartial(object: any): _81.MsgCreateClient;
                    fromAmino(object: _81.MsgCreateClientAmino): _81.MsgCreateClient;
                    toAmino(message: _81.MsgCreateClient): _81.MsgCreateClientAmino;
                    fromAminoMsg(object: _81.MsgCreateClientAminoMsg): _81.MsgCreateClient;
                    toAminoMsg(message: _81.MsgCreateClient): _81.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _81.MsgCreateClientProtoMsg): _81.MsgCreateClient;
                    toProto(message: _81.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _81.MsgCreateClient): _81.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    encode(_: _81.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgCreateClientResponse;
                    fromPartial(_: any): _81.MsgCreateClientResponse;
                    fromAmino(_: _81.MsgCreateClientResponseAmino): _81.MsgCreateClientResponse;
                    toAmino(_: _81.MsgCreateClientResponse): _81.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _81.MsgCreateClientResponseAminoMsg): _81.MsgCreateClientResponse;
                    toAminoMsg(message: _81.MsgCreateClientResponse): _81.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _81.MsgCreateClientResponseProtoMsg): _81.MsgCreateClientResponse;
                    toProto(message: _81.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _81.MsgCreateClientResponse): _81.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    encode(message: _81.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateClient;
                    fromPartial(object: any): _81.MsgUpdateClient;
                    fromAmino(object: _81.MsgUpdateClientAmino): _81.MsgUpdateClient;
                    toAmino(message: _81.MsgUpdateClient): _81.MsgUpdateClientAmino;
                    fromAminoMsg(object: _81.MsgUpdateClientAminoMsg): _81.MsgUpdateClient;
                    toAminoMsg(message: _81.MsgUpdateClient): _81.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _81.MsgUpdateClientProtoMsg): _81.MsgUpdateClient;
                    toProto(message: _81.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _81.MsgUpdateClient): _81.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    encode(_: _81.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpdateClientResponse;
                    fromPartial(_: any): _81.MsgUpdateClientResponse;
                    fromAmino(_: _81.MsgUpdateClientResponseAmino): _81.MsgUpdateClientResponse;
                    toAmino(_: _81.MsgUpdateClientResponse): _81.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _81.MsgUpdateClientResponseAminoMsg): _81.MsgUpdateClientResponse;
                    toAminoMsg(message: _81.MsgUpdateClientResponse): _81.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _81.MsgUpdateClientResponseProtoMsg): _81.MsgUpdateClientResponse;
                    toProto(message: _81.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _81.MsgUpdateClientResponse): _81.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    encode(message: _81.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpgradeClient;
                    fromPartial(object: any): _81.MsgUpgradeClient;
                    fromAmino(object: _81.MsgUpgradeClientAmino): _81.MsgUpgradeClient;
                    toAmino(message: _81.MsgUpgradeClient): _81.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _81.MsgUpgradeClientAminoMsg): _81.MsgUpgradeClient;
                    toAminoMsg(message: _81.MsgUpgradeClient): _81.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _81.MsgUpgradeClientProtoMsg): _81.MsgUpgradeClient;
                    toProto(message: _81.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _81.MsgUpgradeClient): _81.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _81.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgUpgradeClientResponse;
                    fromPartial(_: any): _81.MsgUpgradeClientResponse;
                    fromAmino(_: _81.MsgUpgradeClientResponseAmino): _81.MsgUpgradeClientResponse;
                    toAmino(_: _81.MsgUpgradeClientResponse): _81.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _81.MsgUpgradeClientResponseAminoMsg): _81.MsgUpgradeClientResponse;
                    toAminoMsg(message: _81.MsgUpgradeClientResponse): _81.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _81.MsgUpgradeClientResponseProtoMsg): _81.MsgUpgradeClientResponse;
                    toProto(message: _81.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _81.MsgUpgradeClientResponse): _81.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _81.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgSubmitMisbehaviour;
                    fromPartial(object: any): _81.MsgSubmitMisbehaviour;
                    fromAmino(object: _81.MsgSubmitMisbehaviourAmino): _81.MsgSubmitMisbehaviour;
                    toAmino(message: _81.MsgSubmitMisbehaviour): _81.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _81.MsgSubmitMisbehaviourAminoMsg): _81.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _81.MsgSubmitMisbehaviour): _81.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _81.MsgSubmitMisbehaviourProtoMsg): _81.MsgSubmitMisbehaviour;
                    toProto(message: _81.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _81.MsgSubmitMisbehaviour): _81.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _81.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: any): _81.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _81.MsgSubmitMisbehaviourResponseAmino): _81.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _81.MsgSubmitMisbehaviourResponse): _81.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _81.MsgSubmitMisbehaviourResponseAminoMsg): _81.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _81.MsgSubmitMisbehaviourResponse): _81.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _81.MsgSubmitMisbehaviourResponseProtoMsg): _81.MsgSubmitMisbehaviourResponse;
                    toProto(message: _81.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _81.MsgSubmitMisbehaviourResponse): _81.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    encode(message: _80.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientStateRequest;
                    fromPartial(object: any): _80.QueryClientStateRequest;
                    fromAmino(object: _80.QueryClientStateRequestAmino): _80.QueryClientStateRequest;
                    toAmino(message: _80.QueryClientStateRequest): _80.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _80.QueryClientStateRequestAminoMsg): _80.QueryClientStateRequest;
                    toAminoMsg(message: _80.QueryClientStateRequest): _80.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryClientStateRequestProtoMsg): _80.QueryClientStateRequest;
                    toProto(message: _80.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryClientStateRequest): _80.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    encode(message: _80.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientStateResponse;
                    fromPartial(object: any): _80.QueryClientStateResponse;
                    fromAmino(object: _80.QueryClientStateResponseAmino): _80.QueryClientStateResponse;
                    toAmino(message: _80.QueryClientStateResponse): _80.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _80.QueryClientStateResponseAminoMsg): _80.QueryClientStateResponse;
                    toAminoMsg(message: _80.QueryClientStateResponse): _80.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryClientStateResponseProtoMsg): _80.QueryClientStateResponse;
                    toProto(message: _80.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryClientStateResponse): _80.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    encode(message: _80.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientStatesRequest;
                    fromPartial(object: any): _80.QueryClientStatesRequest;
                    fromAmino(object: _80.QueryClientStatesRequestAmino): _80.QueryClientStatesRequest;
                    toAmino(message: _80.QueryClientStatesRequest): _80.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _80.QueryClientStatesRequestAminoMsg): _80.QueryClientStatesRequest;
                    toAminoMsg(message: _80.QueryClientStatesRequest): _80.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryClientStatesRequestProtoMsg): _80.QueryClientStatesRequest;
                    toProto(message: _80.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryClientStatesRequest): _80.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    encode(message: _80.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientStatesResponse;
                    fromPartial(object: any): _80.QueryClientStatesResponse;
                    fromAmino(object: _80.QueryClientStatesResponseAmino): _80.QueryClientStatesResponse;
                    toAmino(message: _80.QueryClientStatesResponse): _80.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _80.QueryClientStatesResponseAminoMsg): _80.QueryClientStatesResponse;
                    toAminoMsg(message: _80.QueryClientStatesResponse): _80.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryClientStatesResponseProtoMsg): _80.QueryClientStatesResponse;
                    toProto(message: _80.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryClientStatesResponse): _80.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    encode(message: _80.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConsensusStateRequest;
                    fromPartial(object: any): _80.QueryConsensusStateRequest;
                    fromAmino(object: _80.QueryConsensusStateRequestAmino): _80.QueryConsensusStateRequest;
                    toAmino(message: _80.QueryConsensusStateRequest): _80.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _80.QueryConsensusStateRequestAminoMsg): _80.QueryConsensusStateRequest;
                    toAminoMsg(message: _80.QueryConsensusStateRequest): _80.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryConsensusStateRequestProtoMsg): _80.QueryConsensusStateRequest;
                    toProto(message: _80.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryConsensusStateRequest): _80.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    encode(message: _80.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConsensusStateResponse;
                    fromPartial(object: any): _80.QueryConsensusStateResponse;
                    fromAmino(object: _80.QueryConsensusStateResponseAmino): _80.QueryConsensusStateResponse;
                    toAmino(message: _80.QueryConsensusStateResponse): _80.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _80.QueryConsensusStateResponseAminoMsg): _80.QueryConsensusStateResponse;
                    toAminoMsg(message: _80.QueryConsensusStateResponse): _80.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryConsensusStateResponseProtoMsg): _80.QueryConsensusStateResponse;
                    toProto(message: _80.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryConsensusStateResponse): _80.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _80.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConsensusStatesRequest;
                    fromPartial(object: any): _80.QueryConsensusStatesRequest;
                    fromAmino(object: _80.QueryConsensusStatesRequestAmino): _80.QueryConsensusStatesRequest;
                    toAmino(message: _80.QueryConsensusStatesRequest): _80.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _80.QueryConsensusStatesRequestAminoMsg): _80.QueryConsensusStatesRequest;
                    toAminoMsg(message: _80.QueryConsensusStatesRequest): _80.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryConsensusStatesRequestProtoMsg): _80.QueryConsensusStatesRequest;
                    toProto(message: _80.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryConsensusStatesRequest): _80.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _80.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConsensusStatesResponse;
                    fromPartial(object: any): _80.QueryConsensusStatesResponse;
                    fromAmino(object: _80.QueryConsensusStatesResponseAmino): _80.QueryConsensusStatesResponse;
                    toAmino(message: _80.QueryConsensusStatesResponse): _80.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _80.QueryConsensusStatesResponseAminoMsg): _80.QueryConsensusStatesResponse;
                    toAminoMsg(message: _80.QueryConsensusStatesResponse): _80.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryConsensusStatesResponseProtoMsg): _80.QueryConsensusStatesResponse;
                    toProto(message: _80.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryConsensusStatesResponse): _80.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _80.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConsensusStateHeightsRequest;
                    fromPartial(object: any): _80.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _80.QueryConsensusStateHeightsRequestAmino): _80.QueryConsensusStateHeightsRequest;
                    toAmino(message: _80.QueryConsensusStateHeightsRequest): _80.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _80.QueryConsensusStateHeightsRequestAminoMsg): _80.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _80.QueryConsensusStateHeightsRequest): _80.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryConsensusStateHeightsRequestProtoMsg): _80.QueryConsensusStateHeightsRequest;
                    toProto(message: _80.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryConsensusStateHeightsRequest): _80.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _80.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryConsensusStateHeightsResponse;
                    fromPartial(object: any): _80.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _80.QueryConsensusStateHeightsResponseAmino): _80.QueryConsensusStateHeightsResponse;
                    toAmino(message: _80.QueryConsensusStateHeightsResponse): _80.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _80.QueryConsensusStateHeightsResponseAminoMsg): _80.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _80.QueryConsensusStateHeightsResponse): _80.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryConsensusStateHeightsResponseProtoMsg): _80.QueryConsensusStateHeightsResponse;
                    toProto(message: _80.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryConsensusStateHeightsResponse): _80.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    encode(message: _80.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientStatusRequest;
                    fromPartial(object: any): _80.QueryClientStatusRequest;
                    fromAmino(object: _80.QueryClientStatusRequestAmino): _80.QueryClientStatusRequest;
                    toAmino(message: _80.QueryClientStatusRequest): _80.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _80.QueryClientStatusRequestAminoMsg): _80.QueryClientStatusRequest;
                    toAminoMsg(message: _80.QueryClientStatusRequest): _80.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryClientStatusRequestProtoMsg): _80.QueryClientStatusRequest;
                    toProto(message: _80.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryClientStatusRequest): _80.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    encode(message: _80.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientStatusResponse;
                    fromPartial(object: any): _80.QueryClientStatusResponse;
                    fromAmino(object: _80.QueryClientStatusResponseAmino): _80.QueryClientStatusResponse;
                    toAmino(message: _80.QueryClientStatusResponse): _80.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _80.QueryClientStatusResponseAminoMsg): _80.QueryClientStatusResponse;
                    toAminoMsg(message: _80.QueryClientStatusResponse): _80.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryClientStatusResponseProtoMsg): _80.QueryClientStatusResponse;
                    toProto(message: _80.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryClientStatusResponse): _80.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    encode(_: _80.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientParamsRequest;
                    fromPartial(_: any): _80.QueryClientParamsRequest;
                    fromAmino(_: _80.QueryClientParamsRequestAmino): _80.QueryClientParamsRequest;
                    toAmino(_: _80.QueryClientParamsRequest): _80.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _80.QueryClientParamsRequestAminoMsg): _80.QueryClientParamsRequest;
                    toAminoMsg(message: _80.QueryClientParamsRequest): _80.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryClientParamsRequestProtoMsg): _80.QueryClientParamsRequest;
                    toProto(message: _80.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryClientParamsRequest): _80.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    encode(message: _80.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryClientParamsResponse;
                    fromPartial(object: any): _80.QueryClientParamsResponse;
                    fromAmino(object: _80.QueryClientParamsResponseAmino): _80.QueryClientParamsResponse;
                    toAmino(message: _80.QueryClientParamsResponse): _80.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _80.QueryClientParamsResponseAminoMsg): _80.QueryClientParamsResponse;
                    toAminoMsg(message: _80.QueryClientParamsResponse): _80.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryClientParamsResponseProtoMsg): _80.QueryClientParamsResponse;
                    toProto(message: _80.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryClientParamsResponse): _80.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _80.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUpgradedClientStateRequest;
                    fromPartial(_: any): _80.QueryUpgradedClientStateRequest;
                    fromAmino(_: _80.QueryUpgradedClientStateRequestAmino): _80.QueryUpgradedClientStateRequest;
                    toAmino(_: _80.QueryUpgradedClientStateRequest): _80.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _80.QueryUpgradedClientStateRequestAminoMsg): _80.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _80.QueryUpgradedClientStateRequest): _80.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryUpgradedClientStateRequestProtoMsg): _80.QueryUpgradedClientStateRequest;
                    toProto(message: _80.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryUpgradedClientStateRequest): _80.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _80.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUpgradedClientStateResponse;
                    fromPartial(object: any): _80.QueryUpgradedClientStateResponse;
                    fromAmino(object: _80.QueryUpgradedClientStateResponseAmino): _80.QueryUpgradedClientStateResponse;
                    toAmino(message: _80.QueryUpgradedClientStateResponse): _80.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _80.QueryUpgradedClientStateResponseAminoMsg): _80.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _80.QueryUpgradedClientStateResponse): _80.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryUpgradedClientStateResponseProtoMsg): _80.QueryUpgradedClientStateResponse;
                    toProto(message: _80.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryUpgradedClientStateResponse): _80.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _80.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: any): _80.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _80.QueryUpgradedConsensusStateRequestAmino): _80.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _80.QueryUpgradedConsensusStateRequest): _80.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _80.QueryUpgradedConsensusStateRequestAminoMsg): _80.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _80.QueryUpgradedConsensusStateRequest): _80.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _80.QueryUpgradedConsensusStateRequestProtoMsg): _80.QueryUpgradedConsensusStateRequest;
                    toProto(message: _80.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _80.QueryUpgradedConsensusStateRequest): _80.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _80.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: any): _80.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _80.QueryUpgradedConsensusStateResponseAmino): _80.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _80.QueryUpgradedConsensusStateResponse): _80.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _80.QueryUpgradedConsensusStateResponseAminoMsg): _80.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _80.QueryUpgradedConsensusStateResponse): _80.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _80.QueryUpgradedConsensusStateResponseProtoMsg): _80.QueryUpgradedConsensusStateResponse;
                    toProto(message: _80.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _80.QueryUpgradedConsensusStateResponse): _80.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _79.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisState;
                    fromPartial(object: any): _79.GenesisState;
                    fromAmino(object: _79.GenesisStateAmino): _79.GenesisState;
                    toAmino(message: _79.GenesisState): _79.GenesisStateAmino;
                    fromAminoMsg(object: _79.GenesisStateAminoMsg): _79.GenesisState;
                    toAminoMsg(message: _79.GenesisState): _79.GenesisStateAminoMsg;
                    fromProtoMsg(message: _79.GenesisStateProtoMsg): _79.GenesisState;
                    toProto(message: _79.GenesisState): Uint8Array;
                    toProtoMsg(message: _79.GenesisState): _79.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    encode(message: _79.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GenesisMetadata;
                    fromPartial(object: any): _79.GenesisMetadata;
                    fromAmino(object: _79.GenesisMetadataAmino): _79.GenesisMetadata;
                    toAmino(message: _79.GenesisMetadata): _79.GenesisMetadataAmino;
                    fromAminoMsg(object: _79.GenesisMetadataAminoMsg): _79.GenesisMetadata;
                    toAminoMsg(message: _79.GenesisMetadata): _79.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _79.GenesisMetadataProtoMsg): _79.GenesisMetadata;
                    toProto(message: _79.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _79.GenesisMetadata): _79.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _79.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.IdentifiedGenesisMetadata;
                    fromPartial(object: any): _79.IdentifiedGenesisMetadata;
                    fromAmino(object: _79.IdentifiedGenesisMetadataAmino): _79.IdentifiedGenesisMetadata;
                    toAmino(message: _79.IdentifiedGenesisMetadata): _79.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _79.IdentifiedGenesisMetadataAminoMsg): _79.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _79.IdentifiedGenesisMetadata): _79.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _79.IdentifiedGenesisMetadataProtoMsg): _79.IdentifiedGenesisMetadata;
                    toProto(message: _79.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _79.IdentifiedGenesisMetadata): _79.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    encode(message: _78.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.IdentifiedClientState;
                    fromPartial(object: any): _78.IdentifiedClientState;
                    fromAmino(object: _78.IdentifiedClientStateAmino): _78.IdentifiedClientState;
                    toAmino(message: _78.IdentifiedClientState): _78.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _78.IdentifiedClientStateAminoMsg): _78.IdentifiedClientState;
                    toAminoMsg(message: _78.IdentifiedClientState): _78.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _78.IdentifiedClientStateProtoMsg): _78.IdentifiedClientState;
                    toProto(message: _78.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _78.IdentifiedClientState): _78.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    encode(message: _78.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ConsensusStateWithHeight;
                    fromPartial(object: any): _78.ConsensusStateWithHeight;
                    fromAmino(object: _78.ConsensusStateWithHeightAmino): _78.ConsensusStateWithHeight;
                    toAmino(message: _78.ConsensusStateWithHeight): _78.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _78.ConsensusStateWithHeightAminoMsg): _78.ConsensusStateWithHeight;
                    toAminoMsg(message: _78.ConsensusStateWithHeight): _78.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _78.ConsensusStateWithHeightProtoMsg): _78.ConsensusStateWithHeight;
                    toProto(message: _78.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _78.ConsensusStateWithHeight): _78.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    encode(message: _78.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ClientConsensusStates;
                    fromPartial(object: any): _78.ClientConsensusStates;
                    fromAmino(object: _78.ClientConsensusStatesAmino): _78.ClientConsensusStates;
                    toAmino(message: _78.ClientConsensusStates): _78.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _78.ClientConsensusStatesAminoMsg): _78.ClientConsensusStates;
                    toAminoMsg(message: _78.ClientConsensusStates): _78.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _78.ClientConsensusStatesProtoMsg): _78.ClientConsensusStates;
                    toProto(message: _78.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _78.ClientConsensusStates): _78.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    encode(message: _78.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ClientUpdateProposal;
                    fromPartial(object: any): _78.ClientUpdateProposal;
                    fromAmino(object: _78.ClientUpdateProposalAmino): _78.ClientUpdateProposal;
                    toAmino(message: _78.ClientUpdateProposal): _78.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _78.ClientUpdateProposalAminoMsg): _78.ClientUpdateProposal;
                    toAminoMsg(message: _78.ClientUpdateProposal): _78.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _78.ClientUpdateProposalProtoMsg): _78.ClientUpdateProposal;
                    toProto(message: _78.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _78.ClientUpdateProposal): _78.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    encode(message: _78.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.UpgradeProposal;
                    fromPartial(object: any): _78.UpgradeProposal;
                    fromAmino(object: _78.UpgradeProposalAmino): _78.UpgradeProposal;
                    toAmino(message: _78.UpgradeProposal): _78.UpgradeProposalAmino;
                    fromAminoMsg(object: _78.UpgradeProposalAminoMsg): _78.UpgradeProposal;
                    toAminoMsg(message: _78.UpgradeProposal): _78.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _78.UpgradeProposalProtoMsg): _78.UpgradeProposal;
                    toProto(message: _78.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _78.UpgradeProposal): _78.UpgradeProposalProtoMsg;
                };
                Height: {
                    encode(message: _78.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Height;
                    fromPartial(object: any): _78.Height;
                    fromAmino(object: _78.HeightAmino): _78.Height;
                    toAmino(message: _78.Height): _78.HeightAmino;
                    fromAminoMsg(object: _78.HeightAminoMsg): _78.Height;
                    toAminoMsg(message: _78.Height): _78.HeightAminoMsg;
                    fromProtoMsg(message: _78.HeightProtoMsg): _78.Height;
                    toProto(message: _78.Height): Uint8Array;
                    toProtoMsg(message: _78.Height): _78.HeightProtoMsg;
                };
                Params: {
                    encode(message: _78.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Params;
                    fromPartial(object: any): _78.Params;
                    fromAmino(object: _78.ParamsAmino): _78.Params;
                    toAmino(message: _78.Params): _78.ParamsAmino;
                    fromAminoMsg(object: _78.ParamsAminoMsg): _78.Params;
                    toAminoMsg(message: _78.Params): _78.ParamsAminoMsg;
                    fromProtoMsg(message: _78.ParamsProtoMsg): _78.Params;
                    toProto(message: _78.Params): Uint8Array;
                    toProtoMsg(message: _78.Params): _78.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _82.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MerkleRoot;
                    fromPartial(object: any): _82.MerkleRoot;
                    fromAmino(object: _82.MerkleRootAmino): _82.MerkleRoot;
                    toAmino(message: _82.MerkleRoot): _82.MerkleRootAmino;
                    fromAminoMsg(object: _82.MerkleRootAminoMsg): _82.MerkleRoot;
                    toAminoMsg(message: _82.MerkleRoot): _82.MerkleRootAminoMsg;
                    fromProtoMsg(message: _82.MerkleRootProtoMsg): _82.MerkleRoot;
                    toProto(message: _82.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _82.MerkleRoot): _82.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    encode(message: _82.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MerklePrefix;
                    fromPartial(object: any): _82.MerklePrefix;
                    fromAmino(object: _82.MerklePrefixAmino): _82.MerklePrefix;
                    toAmino(message: _82.MerklePrefix): _82.MerklePrefixAmino;
                    fromAminoMsg(object: _82.MerklePrefixAminoMsg): _82.MerklePrefix;
                    toAminoMsg(message: _82.MerklePrefix): _82.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _82.MerklePrefixProtoMsg): _82.MerklePrefix;
                    toProto(message: _82.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _82.MerklePrefix): _82.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    encode(message: _82.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MerklePath;
                    fromPartial(object: any): _82.MerklePath;
                    fromAmino(object: _82.MerklePathAmino): _82.MerklePath;
                    toAmino(message: _82.MerklePath): _82.MerklePathAmino;
                    fromAminoMsg(object: _82.MerklePathAminoMsg): _82.MerklePath;
                    toAminoMsg(message: _82.MerklePath): _82.MerklePathAminoMsg;
                    fromProtoMsg(message: _82.MerklePathProtoMsg): _82.MerklePath;
                    toProto(message: _82.MerklePath): Uint8Array;
                    toProtoMsg(message: _82.MerklePath): _82.MerklePathProtoMsg;
                };
                MerkleProof: {
                    encode(message: _82.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MerkleProof;
                    fromPartial(object: any): _82.MerkleProof;
                    fromAmino(object: _82.MerkleProofAmino): _82.MerkleProof;
                    toAmino(message: _82.MerkleProof): _82.MerkleProofAmino;
                    fromAminoMsg(object: _82.MerkleProofAminoMsg): _82.MerkleProof;
                    toAminoMsg(message: _82.MerkleProof): _82.MerkleProofAminoMsg;
                    fromProtoMsg(message: _82.MerkleProofProtoMsg): _82.MerkleProof;
                    toProto(message: _82.MerkleProof): Uint8Array;
                    toProtoMsg(message: _82.MerkleProof): _82.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _170.MsgClientImpl;
                QueryClientImpl: typeof _165.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _85.QueryConnectionRequest): Promise<_85.QueryConnectionResponse>;
                    connections(request?: _85.QueryConnectionsRequest): Promise<_85.QueryConnectionsResponse>;
                    clientConnections(request: _85.QueryClientConnectionsRequest): Promise<_85.QueryClientConnectionsResponse>;
                    connectionClientState(request: _85.QueryConnectionClientStateRequest): Promise<_85.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _85.QueryConnectionConsensusStateRequest): Promise<_85.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _85.QueryConnectionParamsRequest): Promise<_85.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _159.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _86.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _86.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _86.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _86.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _86.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _86.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _86.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _86.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _86.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _86.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _86.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _86.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _86.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _86.MsgConnectionOpenInit) => _86.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _86.MsgConnectionOpenInitAmino) => _86.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _86.MsgConnectionOpenTry) => _86.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _86.MsgConnectionOpenTryAmino) => _86.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _86.MsgConnectionOpenAck) => _86.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _86.MsgConnectionOpenAckAmino) => _86.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _86.MsgConnectionOpenConfirm) => _86.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _86.MsgConnectionOpenConfirmAmino) => _86.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _86.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenInit;
                    fromPartial(object: any): _86.MsgConnectionOpenInit;
                    fromAmino(object: _86.MsgConnectionOpenInitAmino): _86.MsgConnectionOpenInit;
                    toAmino(message: _86.MsgConnectionOpenInit): _86.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenInitAminoMsg): _86.MsgConnectionOpenInit;
                    toAminoMsg(message: _86.MsgConnectionOpenInit): _86.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenInitProtoMsg): _86.MsgConnectionOpenInit;
                    toProto(message: _86.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenInit): _86.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _86.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenInitResponse;
                    fromPartial(_: any): _86.MsgConnectionOpenInitResponse;
                    fromAmino(_: _86.MsgConnectionOpenInitResponseAmino): _86.MsgConnectionOpenInitResponse;
                    toAmino(_: _86.MsgConnectionOpenInitResponse): _86.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenInitResponseAminoMsg): _86.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _86.MsgConnectionOpenInitResponse): _86.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenInitResponseProtoMsg): _86.MsgConnectionOpenInitResponse;
                    toProto(message: _86.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenInitResponse): _86.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    encode(message: _86.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenTry;
                    fromPartial(object: any): _86.MsgConnectionOpenTry;
                    fromAmino(object: _86.MsgConnectionOpenTryAmino): _86.MsgConnectionOpenTry;
                    toAmino(message: _86.MsgConnectionOpenTry): _86.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenTryAminoMsg): _86.MsgConnectionOpenTry;
                    toAminoMsg(message: _86.MsgConnectionOpenTry): _86.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenTryProtoMsg): _86.MsgConnectionOpenTry;
                    toProto(message: _86.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenTry): _86.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _86.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenTryResponse;
                    fromPartial(_: any): _86.MsgConnectionOpenTryResponse;
                    fromAmino(_: _86.MsgConnectionOpenTryResponseAmino): _86.MsgConnectionOpenTryResponse;
                    toAmino(_: _86.MsgConnectionOpenTryResponse): _86.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenTryResponseAminoMsg): _86.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _86.MsgConnectionOpenTryResponse): _86.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenTryResponseProtoMsg): _86.MsgConnectionOpenTryResponse;
                    toProto(message: _86.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenTryResponse): _86.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    encode(message: _86.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenAck;
                    fromPartial(object: any): _86.MsgConnectionOpenAck;
                    fromAmino(object: _86.MsgConnectionOpenAckAmino): _86.MsgConnectionOpenAck;
                    toAmino(message: _86.MsgConnectionOpenAck): _86.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenAckAminoMsg): _86.MsgConnectionOpenAck;
                    toAminoMsg(message: _86.MsgConnectionOpenAck): _86.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenAckProtoMsg): _86.MsgConnectionOpenAck;
                    toProto(message: _86.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenAck): _86.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _86.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenAckResponse;
                    fromPartial(_: any): _86.MsgConnectionOpenAckResponse;
                    fromAmino(_: _86.MsgConnectionOpenAckResponseAmino): _86.MsgConnectionOpenAckResponse;
                    toAmino(_: _86.MsgConnectionOpenAckResponse): _86.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenAckResponseAminoMsg): _86.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _86.MsgConnectionOpenAckResponse): _86.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenAckResponseProtoMsg): _86.MsgConnectionOpenAckResponse;
                    toProto(message: _86.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenAckResponse): _86.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _86.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenConfirm;
                    fromPartial(object: any): _86.MsgConnectionOpenConfirm;
                    fromAmino(object: _86.MsgConnectionOpenConfirmAmino): _86.MsgConnectionOpenConfirm;
                    toAmino(message: _86.MsgConnectionOpenConfirm): _86.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenConfirmAminoMsg): _86.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _86.MsgConnectionOpenConfirm): _86.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenConfirmProtoMsg): _86.MsgConnectionOpenConfirm;
                    toProto(message: _86.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenConfirm): _86.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _86.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: any): _86.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _86.MsgConnectionOpenConfirmResponseAmino): _86.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _86.MsgConnectionOpenConfirmResponse): _86.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _86.MsgConnectionOpenConfirmResponseAminoMsg): _86.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _86.MsgConnectionOpenConfirmResponse): _86.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgConnectionOpenConfirmResponseProtoMsg): _86.MsgConnectionOpenConfirmResponse;
                    toProto(message: _86.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgConnectionOpenConfirmResponse): _86.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    encode(message: _85.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionRequest;
                    fromPartial(object: any): _85.QueryConnectionRequest;
                    fromAmino(object: _85.QueryConnectionRequestAmino): _85.QueryConnectionRequest;
                    toAmino(message: _85.QueryConnectionRequest): _85.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _85.QueryConnectionRequestAminoMsg): _85.QueryConnectionRequest;
                    toAminoMsg(message: _85.QueryConnectionRequest): _85.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionRequestProtoMsg): _85.QueryConnectionRequest;
                    toProto(message: _85.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionRequest): _85.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    encode(message: _85.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionResponse;
                    fromPartial(object: any): _85.QueryConnectionResponse;
                    fromAmino(object: _85.QueryConnectionResponseAmino): _85.QueryConnectionResponse;
                    toAmino(message: _85.QueryConnectionResponse): _85.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _85.QueryConnectionResponseAminoMsg): _85.QueryConnectionResponse;
                    toAminoMsg(message: _85.QueryConnectionResponse): _85.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionResponseProtoMsg): _85.QueryConnectionResponse;
                    toProto(message: _85.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionResponse): _85.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    encode(message: _85.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionsRequest;
                    fromPartial(object: any): _85.QueryConnectionsRequest;
                    fromAmino(object: _85.QueryConnectionsRequestAmino): _85.QueryConnectionsRequest;
                    toAmino(message: _85.QueryConnectionsRequest): _85.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _85.QueryConnectionsRequestAminoMsg): _85.QueryConnectionsRequest;
                    toAminoMsg(message: _85.QueryConnectionsRequest): _85.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionsRequestProtoMsg): _85.QueryConnectionsRequest;
                    toProto(message: _85.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionsRequest): _85.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    encode(message: _85.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionsResponse;
                    fromPartial(object: any): _85.QueryConnectionsResponse;
                    fromAmino(object: _85.QueryConnectionsResponseAmino): _85.QueryConnectionsResponse;
                    toAmino(message: _85.QueryConnectionsResponse): _85.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _85.QueryConnectionsResponseAminoMsg): _85.QueryConnectionsResponse;
                    toAminoMsg(message: _85.QueryConnectionsResponse): _85.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionsResponseProtoMsg): _85.QueryConnectionsResponse;
                    toProto(message: _85.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionsResponse): _85.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _85.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientConnectionsRequest;
                    fromPartial(object: any): _85.QueryClientConnectionsRequest;
                    fromAmino(object: _85.QueryClientConnectionsRequestAmino): _85.QueryClientConnectionsRequest;
                    toAmino(message: _85.QueryClientConnectionsRequest): _85.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _85.QueryClientConnectionsRequestAminoMsg): _85.QueryClientConnectionsRequest;
                    toAminoMsg(message: _85.QueryClientConnectionsRequest): _85.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryClientConnectionsRequestProtoMsg): _85.QueryClientConnectionsRequest;
                    toProto(message: _85.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryClientConnectionsRequest): _85.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _85.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientConnectionsResponse;
                    fromPartial(object: any): _85.QueryClientConnectionsResponse;
                    fromAmino(object: _85.QueryClientConnectionsResponseAmino): _85.QueryClientConnectionsResponse;
                    toAmino(message: _85.QueryClientConnectionsResponse): _85.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _85.QueryClientConnectionsResponseAminoMsg): _85.QueryClientConnectionsResponse;
                    toAminoMsg(message: _85.QueryClientConnectionsResponse): _85.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryClientConnectionsResponseProtoMsg): _85.QueryClientConnectionsResponse;
                    toProto(message: _85.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryClientConnectionsResponse): _85.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _85.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionClientStateRequest;
                    fromPartial(object: any): _85.QueryConnectionClientStateRequest;
                    fromAmino(object: _85.QueryConnectionClientStateRequestAmino): _85.QueryConnectionClientStateRequest;
                    toAmino(message: _85.QueryConnectionClientStateRequest): _85.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _85.QueryConnectionClientStateRequestAminoMsg): _85.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _85.QueryConnectionClientStateRequest): _85.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionClientStateRequestProtoMsg): _85.QueryConnectionClientStateRequest;
                    toProto(message: _85.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionClientStateRequest): _85.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _85.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionClientStateResponse;
                    fromPartial(object: any): _85.QueryConnectionClientStateResponse;
                    fromAmino(object: _85.QueryConnectionClientStateResponseAmino): _85.QueryConnectionClientStateResponse;
                    toAmino(message: _85.QueryConnectionClientStateResponse): _85.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _85.QueryConnectionClientStateResponseAminoMsg): _85.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _85.QueryConnectionClientStateResponse): _85.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionClientStateResponseProtoMsg): _85.QueryConnectionClientStateResponse;
                    toProto(message: _85.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionClientStateResponse): _85.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _85.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionConsensusStateRequest;
                    fromPartial(object: any): _85.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _85.QueryConnectionConsensusStateRequestAmino): _85.QueryConnectionConsensusStateRequest;
                    toAmino(message: _85.QueryConnectionConsensusStateRequest): _85.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _85.QueryConnectionConsensusStateRequestAminoMsg): _85.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _85.QueryConnectionConsensusStateRequest): _85.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionConsensusStateRequestProtoMsg): _85.QueryConnectionConsensusStateRequest;
                    toProto(message: _85.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionConsensusStateRequest): _85.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _85.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionConsensusStateResponse;
                    fromPartial(object: any): _85.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _85.QueryConnectionConsensusStateResponseAmino): _85.QueryConnectionConsensusStateResponse;
                    toAmino(message: _85.QueryConnectionConsensusStateResponse): _85.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _85.QueryConnectionConsensusStateResponseAminoMsg): _85.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _85.QueryConnectionConsensusStateResponse): _85.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionConsensusStateResponseProtoMsg): _85.QueryConnectionConsensusStateResponse;
                    toProto(message: _85.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionConsensusStateResponse): _85.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    encode(_: _85.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionParamsRequest;
                    fromPartial(_: any): _85.QueryConnectionParamsRequest;
                    fromAmino(_: _85.QueryConnectionParamsRequestAmino): _85.QueryConnectionParamsRequest;
                    toAmino(_: _85.QueryConnectionParamsRequest): _85.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _85.QueryConnectionParamsRequestAminoMsg): _85.QueryConnectionParamsRequest;
                    toAminoMsg(message: _85.QueryConnectionParamsRequest): _85.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionParamsRequestProtoMsg): _85.QueryConnectionParamsRequest;
                    toProto(message: _85.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionParamsRequest): _85.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    encode(message: _85.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConnectionParamsResponse;
                    fromPartial(object: any): _85.QueryConnectionParamsResponse;
                    fromAmino(object: _85.QueryConnectionParamsResponseAmino): _85.QueryConnectionParamsResponse;
                    toAmino(message: _85.QueryConnectionParamsResponse): _85.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _85.QueryConnectionParamsResponseAminoMsg): _85.QueryConnectionParamsResponse;
                    toAminoMsg(message: _85.QueryConnectionParamsResponse): _85.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConnectionParamsResponseProtoMsg): _85.QueryConnectionParamsResponse;
                    toProto(message: _85.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConnectionParamsResponse): _85.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _84.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisState;
                    fromPartial(object: any): _84.GenesisState;
                    fromAmino(object: _84.GenesisStateAmino): _84.GenesisState;
                    toAmino(message: _84.GenesisState): _84.GenesisStateAmino;
                    fromAminoMsg(object: _84.GenesisStateAminoMsg): _84.GenesisState;
                    toAminoMsg(message: _84.GenesisState): _84.GenesisStateAminoMsg;
                    fromProtoMsg(message: _84.GenesisStateProtoMsg): _84.GenesisState;
                    toProto(message: _84.GenesisState): Uint8Array;
                    toProtoMsg(message: _84.GenesisState): _84.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _83.State;
                stateToJSON(object: _83.State): string;
                State: typeof _83.State;
                StateSDKType: typeof _83.State;
                StateAmino: typeof _83.State;
                ConnectionEnd: {
                    encode(message: _83.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConnectionEnd;
                    fromPartial(object: any): _83.ConnectionEnd;
                    fromAmino(object: _83.ConnectionEndAmino): _83.ConnectionEnd;
                    toAmino(message: _83.ConnectionEnd): _83.ConnectionEndAmino;
                    fromAminoMsg(object: _83.ConnectionEndAminoMsg): _83.ConnectionEnd;
                    toAminoMsg(message: _83.ConnectionEnd): _83.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _83.ConnectionEndProtoMsg): _83.ConnectionEnd;
                    toProto(message: _83.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _83.ConnectionEnd): _83.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    encode(message: _83.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.IdentifiedConnection;
                    fromPartial(object: any): _83.IdentifiedConnection;
                    fromAmino(object: _83.IdentifiedConnectionAmino): _83.IdentifiedConnection;
                    toAmino(message: _83.IdentifiedConnection): _83.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _83.IdentifiedConnectionAminoMsg): _83.IdentifiedConnection;
                    toAminoMsg(message: _83.IdentifiedConnection): _83.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _83.IdentifiedConnectionProtoMsg): _83.IdentifiedConnection;
                    toProto(message: _83.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _83.IdentifiedConnection): _83.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    encode(message: _83.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Counterparty;
                    fromPartial(object: any): _83.Counterparty;
                    fromAmino(object: _83.CounterpartyAmino): _83.Counterparty;
                    toAmino(message: _83.Counterparty): _83.CounterpartyAmino;
                    fromAminoMsg(object: _83.CounterpartyAminoMsg): _83.Counterparty;
                    toAminoMsg(message: _83.Counterparty): _83.CounterpartyAminoMsg;
                    fromProtoMsg(message: _83.CounterpartyProtoMsg): _83.Counterparty;
                    toProto(message: _83.Counterparty): Uint8Array;
                    toProtoMsg(message: _83.Counterparty): _83.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    encode(message: _83.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientPaths;
                    fromPartial(object: any): _83.ClientPaths;
                    fromAmino(object: _83.ClientPathsAmino): _83.ClientPaths;
                    toAmino(message: _83.ClientPaths): _83.ClientPathsAmino;
                    fromAminoMsg(object: _83.ClientPathsAminoMsg): _83.ClientPaths;
                    toAminoMsg(message: _83.ClientPaths): _83.ClientPathsAminoMsg;
                    fromProtoMsg(message: _83.ClientPathsProtoMsg): _83.ClientPaths;
                    toProto(message: _83.ClientPaths): Uint8Array;
                    toProtoMsg(message: _83.ClientPaths): _83.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    encode(message: _83.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConnectionPaths;
                    fromPartial(object: any): _83.ConnectionPaths;
                    fromAmino(object: _83.ConnectionPathsAmino): _83.ConnectionPaths;
                    toAmino(message: _83.ConnectionPaths): _83.ConnectionPathsAmino;
                    fromAminoMsg(object: _83.ConnectionPathsAminoMsg): _83.ConnectionPaths;
                    toAminoMsg(message: _83.ConnectionPaths): _83.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _83.ConnectionPathsProtoMsg): _83.ConnectionPaths;
                    toProto(message: _83.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _83.ConnectionPaths): _83.ConnectionPathsProtoMsg;
                };
                Version: {
                    encode(message: _83.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Version;
                    fromPartial(object: any): _83.Version;
                    fromAmino(object: _83.VersionAmino): _83.Version;
                    toAmino(message: _83.Version): _83.VersionAmino;
                    fromAminoMsg(object: _83.VersionAminoMsg): _83.Version;
                    toAminoMsg(message: _83.Version): _83.VersionAminoMsg;
                    fromProtoMsg(message: _83.VersionProtoMsg): _83.Version;
                    toProto(message: _83.Version): Uint8Array;
                    toProtoMsg(message: _83.Version): _83.VersionProtoMsg;
                };
                Params: {
                    encode(message: _83.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Params;
                    fromPartial(object: any): _83.Params;
                    fromAmino(object: _83.ParamsAmino): _83.Params;
                    toAmino(message: _83.Params): _83.ParamsAmino;
                    fromAminoMsg(object: _83.ParamsAminoMsg): _83.Params;
                    toAminoMsg(message: _83.Params): _83.ParamsAminoMsg;
                    fromProtoMsg(message: _83.ParamsProtoMsg): _83.Params;
                    toProto(message: _83.Params): Uint8Array;
                    toProtoMsg(message: _83.Params): _83.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _87.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ClientState;
                    fromPartial(object: any): _87.ClientState;
                    fromAmino(object: _87.ClientStateAmino): _87.ClientState;
                    toAmino(message: _87.ClientState): _87.ClientStateAmino;
                    fromAminoMsg(object: _87.ClientStateAminoMsg): _87.ClientState;
                    toAminoMsg(message: _87.ClientState): _87.ClientStateAminoMsg;
                    fromProtoMsg(message: _87.ClientStateProtoMsg): _87.ClientState;
                    toProto(message: _87.ClientState): Uint8Array;
                    toProtoMsg(message: _87.ClientState): _87.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _88.DataType;
                dataTypeToJSON(object: _88.DataType): string;
                DataType: typeof _88.DataType;
                DataTypeSDKType: typeof _88.DataType;
                DataTypeAmino: typeof _88.DataType;
                ClientState: {
                    encode(message: _88.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClientState;
                    fromPartial(object: any): _88.ClientState;
                    fromAmino(object: _88.ClientStateAmino): _88.ClientState;
                    toAmino(message: _88.ClientState): _88.ClientStateAmino;
                    fromAminoMsg(object: _88.ClientStateAminoMsg): _88.ClientState;
                    toAminoMsg(message: _88.ClientState): _88.ClientStateAminoMsg;
                    fromProtoMsg(message: _88.ClientStateProtoMsg): _88.ClientState;
                    toProto(message: _88.ClientState): Uint8Array;
                    toProtoMsg(message: _88.ClientState): _88.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _88.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConsensusState;
                    fromPartial(object: any): _88.ConsensusState;
                    fromAmino(object: _88.ConsensusStateAmino): _88.ConsensusState;
                    toAmino(message: _88.ConsensusState): _88.ConsensusStateAmino;
                    fromAminoMsg(object: _88.ConsensusStateAminoMsg): _88.ConsensusState;
                    toAminoMsg(message: _88.ConsensusState): _88.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _88.ConsensusStateProtoMsg): _88.ConsensusState;
                    toProto(message: _88.ConsensusState): Uint8Array;
                    toProtoMsg(message: _88.ConsensusState): _88.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _88.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Header;
                    fromPartial(object: any): _88.Header;
                    fromAmino(object: _88.HeaderAmino): _88.Header;
                    toAmino(message: _88.Header): _88.HeaderAmino;
                    fromAminoMsg(object: _88.HeaderAminoMsg): _88.Header;
                    toAminoMsg(message: _88.Header): _88.HeaderAminoMsg;
                    fromProtoMsg(message: _88.HeaderProtoMsg): _88.Header;
                    toProto(message: _88.Header): Uint8Array;
                    toProtoMsg(message: _88.Header): _88.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _88.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Misbehaviour;
                    fromPartial(object: any): _88.Misbehaviour;
                    fromAmino(object: _88.MisbehaviourAmino): _88.Misbehaviour;
                    toAmino(message: _88.Misbehaviour): _88.MisbehaviourAmino;
                    fromAminoMsg(object: _88.MisbehaviourAminoMsg): _88.Misbehaviour;
                    toAminoMsg(message: _88.Misbehaviour): _88.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _88.MisbehaviourProtoMsg): _88.Misbehaviour;
                    toProto(message: _88.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _88.Misbehaviour): _88.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _88.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignatureAndData;
                    fromPartial(object: any): _88.SignatureAndData;
                    fromAmino(object: _88.SignatureAndDataAmino): _88.SignatureAndData;
                    toAmino(message: _88.SignatureAndData): _88.SignatureAndDataAmino;
                    fromAminoMsg(object: _88.SignatureAndDataAminoMsg): _88.SignatureAndData;
                    toAminoMsg(message: _88.SignatureAndData): _88.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _88.SignatureAndDataProtoMsg): _88.SignatureAndData;
                    toProto(message: _88.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _88.SignatureAndData): _88.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _88.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.TimestampedSignatureData;
                    fromPartial(object: any): _88.TimestampedSignatureData;
                    fromAmino(object: _88.TimestampedSignatureDataAmino): _88.TimestampedSignatureData;
                    toAmino(message: _88.TimestampedSignatureData): _88.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _88.TimestampedSignatureDataAminoMsg): _88.TimestampedSignatureData;
                    toAminoMsg(message: _88.TimestampedSignatureData): _88.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _88.TimestampedSignatureDataProtoMsg): _88.TimestampedSignatureData;
                    toProto(message: _88.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _88.TimestampedSignatureData): _88.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _88.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.SignBytes;
                    fromPartial(object: any): _88.SignBytes;
                    fromAmino(object: _88.SignBytesAmino): _88.SignBytes;
                    toAmino(message: _88.SignBytes): _88.SignBytesAmino;
                    fromAminoMsg(object: _88.SignBytesAminoMsg): _88.SignBytes;
                    toAminoMsg(message: _88.SignBytes): _88.SignBytesAminoMsg;
                    fromProtoMsg(message: _88.SignBytesProtoMsg): _88.SignBytes;
                    toProto(message: _88.SignBytes): Uint8Array;
                    toProtoMsg(message: _88.SignBytes): _88.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _88.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.HeaderData;
                    fromPartial(object: any): _88.HeaderData;
                    fromAmino(object: _88.HeaderDataAmino): _88.HeaderData;
                    toAmino(message: _88.HeaderData): _88.HeaderDataAmino;
                    fromAminoMsg(object: _88.HeaderDataAminoMsg): _88.HeaderData;
                    toAminoMsg(message: _88.HeaderData): _88.HeaderDataAminoMsg;
                    fromProtoMsg(message: _88.HeaderDataProtoMsg): _88.HeaderData;
                    toProto(message: _88.HeaderData): Uint8Array;
                    toProtoMsg(message: _88.HeaderData): _88.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _88.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClientStateData;
                    fromPartial(object: any): _88.ClientStateData;
                    fromAmino(object: _88.ClientStateDataAmino): _88.ClientStateData;
                    toAmino(message: _88.ClientStateData): _88.ClientStateDataAmino;
                    fromAminoMsg(object: _88.ClientStateDataAminoMsg): _88.ClientStateData;
                    toAminoMsg(message: _88.ClientStateData): _88.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _88.ClientStateDataProtoMsg): _88.ClientStateData;
                    toProto(message: _88.ClientStateData): Uint8Array;
                    toProtoMsg(message: _88.ClientStateData): _88.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _88.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConsensusStateData;
                    fromPartial(object: any): _88.ConsensusStateData;
                    fromAmino(object: _88.ConsensusStateDataAmino): _88.ConsensusStateData;
                    toAmino(message: _88.ConsensusStateData): _88.ConsensusStateDataAmino;
                    fromAminoMsg(object: _88.ConsensusStateDataAminoMsg): _88.ConsensusStateData;
                    toAminoMsg(message: _88.ConsensusStateData): _88.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _88.ConsensusStateDataProtoMsg): _88.ConsensusStateData;
                    toProto(message: _88.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _88.ConsensusStateData): _88.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _88.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConnectionStateData;
                    fromPartial(object: any): _88.ConnectionStateData;
                    fromAmino(object: _88.ConnectionStateDataAmino): _88.ConnectionStateData;
                    toAmino(message: _88.ConnectionStateData): _88.ConnectionStateDataAmino;
                    fromAminoMsg(object: _88.ConnectionStateDataAminoMsg): _88.ConnectionStateData;
                    toAminoMsg(message: _88.ConnectionStateData): _88.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _88.ConnectionStateDataProtoMsg): _88.ConnectionStateData;
                    toProto(message: _88.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _88.ConnectionStateData): _88.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _88.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ChannelStateData;
                    fromPartial(object: any): _88.ChannelStateData;
                    fromAmino(object: _88.ChannelStateDataAmino): _88.ChannelStateData;
                    toAmino(message: _88.ChannelStateData): _88.ChannelStateDataAmino;
                    fromAminoMsg(object: _88.ChannelStateDataAminoMsg): _88.ChannelStateData;
                    toAminoMsg(message: _88.ChannelStateData): _88.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _88.ChannelStateDataProtoMsg): _88.ChannelStateData;
                    toProto(message: _88.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _88.ChannelStateData): _88.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _88.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PacketCommitmentData;
                    fromPartial(object: any): _88.PacketCommitmentData;
                    fromAmino(object: _88.PacketCommitmentDataAmino): _88.PacketCommitmentData;
                    toAmino(message: _88.PacketCommitmentData): _88.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _88.PacketCommitmentDataAminoMsg): _88.PacketCommitmentData;
                    toAminoMsg(message: _88.PacketCommitmentData): _88.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _88.PacketCommitmentDataProtoMsg): _88.PacketCommitmentData;
                    toProto(message: _88.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _88.PacketCommitmentData): _88.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _88.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PacketAcknowledgementData;
                    fromPartial(object: any): _88.PacketAcknowledgementData;
                    fromAmino(object: _88.PacketAcknowledgementDataAmino): _88.PacketAcknowledgementData;
                    toAmino(message: _88.PacketAcknowledgementData): _88.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _88.PacketAcknowledgementDataAminoMsg): _88.PacketAcknowledgementData;
                    toAminoMsg(message: _88.PacketAcknowledgementData): _88.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _88.PacketAcknowledgementDataProtoMsg): _88.PacketAcknowledgementData;
                    toProto(message: _88.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _88.PacketAcknowledgementData): _88.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _88.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.PacketReceiptAbsenceData;
                    fromPartial(object: any): _88.PacketReceiptAbsenceData;
                    fromAmino(object: _88.PacketReceiptAbsenceDataAmino): _88.PacketReceiptAbsenceData;
                    toAmino(message: _88.PacketReceiptAbsenceData): _88.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _88.PacketReceiptAbsenceDataAminoMsg): _88.PacketReceiptAbsenceData;
                    toAminoMsg(message: _88.PacketReceiptAbsenceData): _88.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _88.PacketReceiptAbsenceDataProtoMsg): _88.PacketReceiptAbsenceData;
                    toProto(message: _88.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _88.PacketReceiptAbsenceData): _88.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _88.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.NextSequenceRecvData;
                    fromPartial(object: any): _88.NextSequenceRecvData;
                    fromAmino(object: _88.NextSequenceRecvDataAmino): _88.NextSequenceRecvData;
                    toAmino(message: _88.NextSequenceRecvData): _88.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _88.NextSequenceRecvDataAminoMsg): _88.NextSequenceRecvData;
                    toAminoMsg(message: _88.NextSequenceRecvData): _88.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _88.NextSequenceRecvDataProtoMsg): _88.NextSequenceRecvData;
                    toProto(message: _88.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _88.NextSequenceRecvData): _88.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _89.DataType;
                dataTypeToJSON(object: _89.DataType): string;
                DataType: typeof _89.DataType;
                DataTypeSDKType: typeof _89.DataType;
                DataTypeAmino: typeof _89.DataType;
                ClientState: {
                    encode(message: _89.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ClientState;
                    fromPartial(object: any): _89.ClientState;
                    fromAmino(object: _89.ClientStateAmino): _89.ClientState;
                    toAmino(message: _89.ClientState): _89.ClientStateAmino;
                    fromAminoMsg(object: _89.ClientStateAminoMsg): _89.ClientState;
                    toAminoMsg(message: _89.ClientState): _89.ClientStateAminoMsg;
                    fromProtoMsg(message: _89.ClientStateProtoMsg): _89.ClientState;
                    toProto(message: _89.ClientState): Uint8Array;
                    toProtoMsg(message: _89.ClientState): _89.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _89.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConsensusState;
                    fromPartial(object: any): _89.ConsensusState;
                    fromAmino(object: _89.ConsensusStateAmino): _89.ConsensusState;
                    toAmino(message: _89.ConsensusState): _89.ConsensusStateAmino;
                    fromAminoMsg(object: _89.ConsensusStateAminoMsg): _89.ConsensusState;
                    toAminoMsg(message: _89.ConsensusState): _89.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _89.ConsensusStateProtoMsg): _89.ConsensusState;
                    toProto(message: _89.ConsensusState): Uint8Array;
                    toProtoMsg(message: _89.ConsensusState): _89.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _89.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Header;
                    fromPartial(object: any): _89.Header;
                    fromAmino(object: _89.HeaderAmino): _89.Header;
                    toAmino(message: _89.Header): _89.HeaderAmino;
                    fromAminoMsg(object: _89.HeaderAminoMsg): _89.Header;
                    toAminoMsg(message: _89.Header): _89.HeaderAminoMsg;
                    fromProtoMsg(message: _89.HeaderProtoMsg): _89.Header;
                    toProto(message: _89.Header): Uint8Array;
                    toProtoMsg(message: _89.Header): _89.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _89.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Misbehaviour;
                    fromPartial(object: any): _89.Misbehaviour;
                    fromAmino(object: _89.MisbehaviourAmino): _89.Misbehaviour;
                    toAmino(message: _89.Misbehaviour): _89.MisbehaviourAmino;
                    fromAminoMsg(object: _89.MisbehaviourAminoMsg): _89.Misbehaviour;
                    toAminoMsg(message: _89.Misbehaviour): _89.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _89.MisbehaviourProtoMsg): _89.Misbehaviour;
                    toProto(message: _89.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _89.Misbehaviour): _89.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _89.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignatureAndData;
                    fromPartial(object: any): _89.SignatureAndData;
                    fromAmino(object: _89.SignatureAndDataAmino): _89.SignatureAndData;
                    toAmino(message: _89.SignatureAndData): _89.SignatureAndDataAmino;
                    fromAminoMsg(object: _89.SignatureAndDataAminoMsg): _89.SignatureAndData;
                    toAminoMsg(message: _89.SignatureAndData): _89.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _89.SignatureAndDataProtoMsg): _89.SignatureAndData;
                    toProto(message: _89.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _89.SignatureAndData): _89.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _89.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TimestampedSignatureData;
                    fromPartial(object: any): _89.TimestampedSignatureData;
                    fromAmino(object: _89.TimestampedSignatureDataAmino): _89.TimestampedSignatureData;
                    toAmino(message: _89.TimestampedSignatureData): _89.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _89.TimestampedSignatureDataAminoMsg): _89.TimestampedSignatureData;
                    toAminoMsg(message: _89.TimestampedSignatureData): _89.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _89.TimestampedSignatureDataProtoMsg): _89.TimestampedSignatureData;
                    toProto(message: _89.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _89.TimestampedSignatureData): _89.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _89.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignBytes;
                    fromPartial(object: any): _89.SignBytes;
                    fromAmino(object: _89.SignBytesAmino): _89.SignBytes;
                    toAmino(message: _89.SignBytes): _89.SignBytesAmino;
                    fromAminoMsg(object: _89.SignBytesAminoMsg): _89.SignBytes;
                    toAminoMsg(message: _89.SignBytes): _89.SignBytesAminoMsg;
                    fromProtoMsg(message: _89.SignBytesProtoMsg): _89.SignBytes;
                    toProto(message: _89.SignBytes): Uint8Array;
                    toProtoMsg(message: _89.SignBytes): _89.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _89.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.HeaderData;
                    fromPartial(object: any): _89.HeaderData;
                    fromAmino(object: _89.HeaderDataAmino): _89.HeaderData;
                    toAmino(message: _89.HeaderData): _89.HeaderDataAmino;
                    fromAminoMsg(object: _89.HeaderDataAminoMsg): _89.HeaderData;
                    toAminoMsg(message: _89.HeaderData): _89.HeaderDataAminoMsg;
                    fromProtoMsg(message: _89.HeaderDataProtoMsg): _89.HeaderData;
                    toProto(message: _89.HeaderData): Uint8Array;
                    toProtoMsg(message: _89.HeaderData): _89.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _89.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ClientStateData;
                    fromPartial(object: any): _89.ClientStateData;
                    fromAmino(object: _89.ClientStateDataAmino): _89.ClientStateData;
                    toAmino(message: _89.ClientStateData): _89.ClientStateDataAmino;
                    fromAminoMsg(object: _89.ClientStateDataAminoMsg): _89.ClientStateData;
                    toAminoMsg(message: _89.ClientStateData): _89.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _89.ClientStateDataProtoMsg): _89.ClientStateData;
                    toProto(message: _89.ClientStateData): Uint8Array;
                    toProtoMsg(message: _89.ClientStateData): _89.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _89.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConsensusStateData;
                    fromPartial(object: any): _89.ConsensusStateData;
                    fromAmino(object: _89.ConsensusStateDataAmino): _89.ConsensusStateData;
                    toAmino(message: _89.ConsensusStateData): _89.ConsensusStateDataAmino;
                    fromAminoMsg(object: _89.ConsensusStateDataAminoMsg): _89.ConsensusStateData;
                    toAminoMsg(message: _89.ConsensusStateData): _89.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _89.ConsensusStateDataProtoMsg): _89.ConsensusStateData;
                    toProto(message: _89.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _89.ConsensusStateData): _89.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _89.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConnectionStateData;
                    fromPartial(object: any): _89.ConnectionStateData;
                    fromAmino(object: _89.ConnectionStateDataAmino): _89.ConnectionStateData;
                    toAmino(message: _89.ConnectionStateData): _89.ConnectionStateDataAmino;
                    fromAminoMsg(object: _89.ConnectionStateDataAminoMsg): _89.ConnectionStateData;
                    toAminoMsg(message: _89.ConnectionStateData): _89.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _89.ConnectionStateDataProtoMsg): _89.ConnectionStateData;
                    toProto(message: _89.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _89.ConnectionStateData): _89.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _89.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ChannelStateData;
                    fromPartial(object: any): _89.ChannelStateData;
                    fromAmino(object: _89.ChannelStateDataAmino): _89.ChannelStateData;
                    toAmino(message: _89.ChannelStateData): _89.ChannelStateDataAmino;
                    fromAminoMsg(object: _89.ChannelStateDataAminoMsg): _89.ChannelStateData;
                    toAminoMsg(message: _89.ChannelStateData): _89.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _89.ChannelStateDataProtoMsg): _89.ChannelStateData;
                    toProto(message: _89.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _89.ChannelStateData): _89.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _89.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PacketCommitmentData;
                    fromPartial(object: any): _89.PacketCommitmentData;
                    fromAmino(object: _89.PacketCommitmentDataAmino): _89.PacketCommitmentData;
                    toAmino(message: _89.PacketCommitmentData): _89.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _89.PacketCommitmentDataAminoMsg): _89.PacketCommitmentData;
                    toAminoMsg(message: _89.PacketCommitmentData): _89.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _89.PacketCommitmentDataProtoMsg): _89.PacketCommitmentData;
                    toProto(message: _89.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _89.PacketCommitmentData): _89.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _89.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PacketAcknowledgementData;
                    fromPartial(object: any): _89.PacketAcknowledgementData;
                    fromAmino(object: _89.PacketAcknowledgementDataAmino): _89.PacketAcknowledgementData;
                    toAmino(message: _89.PacketAcknowledgementData): _89.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _89.PacketAcknowledgementDataAminoMsg): _89.PacketAcknowledgementData;
                    toAminoMsg(message: _89.PacketAcknowledgementData): _89.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _89.PacketAcknowledgementDataProtoMsg): _89.PacketAcknowledgementData;
                    toProto(message: _89.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _89.PacketAcknowledgementData): _89.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _89.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PacketReceiptAbsenceData;
                    fromPartial(object: any): _89.PacketReceiptAbsenceData;
                    fromAmino(object: _89.PacketReceiptAbsenceDataAmino): _89.PacketReceiptAbsenceData;
                    toAmino(message: _89.PacketReceiptAbsenceData): _89.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _89.PacketReceiptAbsenceDataAminoMsg): _89.PacketReceiptAbsenceData;
                    toAminoMsg(message: _89.PacketReceiptAbsenceData): _89.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _89.PacketReceiptAbsenceDataProtoMsg): _89.PacketReceiptAbsenceData;
                    toProto(message: _89.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _89.PacketReceiptAbsenceData): _89.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _89.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.NextSequenceRecvData;
                    fromPartial(object: any): _89.NextSequenceRecvData;
                    fromAmino(object: _89.NextSequenceRecvDataAmino): _89.NextSequenceRecvData;
                    toAmino(message: _89.NextSequenceRecvData): _89.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _89.NextSequenceRecvDataAminoMsg): _89.NextSequenceRecvData;
                    toAminoMsg(message: _89.NextSequenceRecvData): _89.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _89.NextSequenceRecvDataProtoMsg): _89.NextSequenceRecvData;
                    toProto(message: _89.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _89.NextSequenceRecvData): _89.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _90.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ClientState;
                    fromPartial(object: any): _90.ClientState;
                    fromAmino(object: _90.ClientStateAmino): _90.ClientState;
                    toAmino(message: _90.ClientState): _90.ClientStateAmino;
                    fromAminoMsg(object: _90.ClientStateAminoMsg): _90.ClientState;
                    toAminoMsg(message: _90.ClientState): _90.ClientStateAminoMsg;
                    fromProtoMsg(message: _90.ClientStateProtoMsg): _90.ClientState;
                    toProto(message: _90.ClientState): Uint8Array;
                    toProtoMsg(message: _90.ClientState): _90.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _90.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ConsensusState;
                    fromPartial(object: any): _90.ConsensusState;
                    fromAmino(object: _90.ConsensusStateAmino): _90.ConsensusState;
                    toAmino(message: _90.ConsensusState): _90.ConsensusStateAmino;
                    fromAminoMsg(object: _90.ConsensusStateAminoMsg): _90.ConsensusState;
                    toAminoMsg(message: _90.ConsensusState): _90.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _90.ConsensusStateProtoMsg): _90.ConsensusState;
                    toProto(message: _90.ConsensusState): Uint8Array;
                    toProtoMsg(message: _90.ConsensusState): _90.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _90.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Misbehaviour;
                    fromPartial(object: any): _90.Misbehaviour;
                    fromAmino(object: _90.MisbehaviourAmino): _90.Misbehaviour;
                    toAmino(message: _90.Misbehaviour): _90.MisbehaviourAmino;
                    fromAminoMsg(object: _90.MisbehaviourAminoMsg): _90.Misbehaviour;
                    toAminoMsg(message: _90.Misbehaviour): _90.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _90.MisbehaviourProtoMsg): _90.Misbehaviour;
                    toProto(message: _90.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _90.Misbehaviour): _90.MisbehaviourProtoMsg;
                };
                Header: {
                    encode(message: _90.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Header;
                    fromPartial(object: any): _90.Header;
                    fromAmino(object: _90.HeaderAmino): _90.Header;
                    toAmino(message: _90.Header): _90.HeaderAmino;
                    fromAminoMsg(object: _90.HeaderAminoMsg): _90.Header;
                    toAminoMsg(message: _90.Header): _90.HeaderAminoMsg;
                    fromProtoMsg(message: _90.HeaderProtoMsg): _90.Header;
                    toProto(message: _90.Header): Uint8Array;
                    toProtoMsg(message: _90.Header): _90.HeaderProtoMsg;
                };
                Fraction: {
                    encode(message: _90.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Fraction;
                    fromPartial(object: any): _90.Fraction;
                    fromAmino(object: _90.FractionAmino): _90.Fraction;
                    toAmino(message: _90.Fraction): _90.FractionAmino;
                    fromAminoMsg(object: _90.FractionAminoMsg): _90.Fraction;
                    toAminoMsg(message: _90.Fraction): _90.FractionAminoMsg;
                    fromProtoMsg(message: _90.FractionProtoMsg): _90.Fraction;
                    toProto(message: _90.Fraction): Uint8Array;
                    toProtoMsg(message: _90.Fraction): _90.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _166.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _167.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _168.MsgClientImpl;
                    };
                    client: {
                        v1: _169.MsgClientImpl;
                    };
                    connection: {
                        v1: _170.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _61.QueryInterchainAccountRequest): Promise<_61.QueryInterchainAccountResponse>;
                                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _65.QueryParamsRequest): Promise<_65.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _70.QueryDenomTraceRequest): Promise<_70.QueryDenomTraceResponse>;
                            denomTraces(request?: _70.QueryDenomTracesRequest): Promise<_70.QueryDenomTracesResponse>;
                            params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                            denomHash(request: _70.QueryDenomHashRequest): Promise<_70.QueryDenomHashResponse>;
                            escrowAddress(request: _70.QueryEscrowAddressRequest): Promise<_70.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _76.QueryChannelRequest): Promise<_76.QueryChannelResponse>;
                            channels(request?: _76.QueryChannelsRequest): Promise<_76.QueryChannelsResponse>;
                            connectionChannels(request: _76.QueryConnectionChannelsRequest): Promise<_76.QueryConnectionChannelsResponse>;
                            channelClientState(request: _76.QueryChannelClientStateRequest): Promise<_76.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _76.QueryChannelConsensusStateRequest): Promise<_76.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _76.QueryPacketCommitmentRequest): Promise<_76.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _76.QueryPacketCommitmentsRequest): Promise<_76.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _76.QueryPacketReceiptRequest): Promise<_76.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _76.QueryPacketAcknowledgementRequest): Promise<_76.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _76.QueryPacketAcknowledgementsRequest): Promise<_76.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _76.QueryUnreceivedPacketsRequest): Promise<_76.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _76.QueryUnreceivedAcksRequest): Promise<_76.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _76.QueryNextSequenceReceiveRequest): Promise<_76.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _80.QueryClientStateRequest): Promise<_80.QueryClientStateResponse>;
                            clientStates(request?: _80.QueryClientStatesRequest): Promise<_80.QueryClientStatesResponse>;
                            consensusState(request: _80.QueryConsensusStateRequest): Promise<_80.QueryConsensusStateResponse>;
                            consensusStates(request: _80.QueryConsensusStatesRequest): Promise<_80.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _80.QueryConsensusStateHeightsRequest): Promise<_80.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _80.QueryClientStatusRequest): Promise<_80.QueryClientStatusResponse>;
                            clientParams(request?: _80.QueryClientParamsRequest): Promise<_80.QueryClientParamsResponse>;
                            upgradedClientState(request?: _80.QueryUpgradedClientStateRequest): Promise<_80.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _80.QueryUpgradedConsensusStateRequest): Promise<_80.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _85.QueryConnectionRequest): Promise<_85.QueryConnectionResponse>;
                            connections(request?: _85.QueryConnectionsRequest): Promise<_85.QueryConnectionsResponse>;
                            clientConnections(request: _85.QueryClientConnectionsRequest): Promise<_85.QueryClientConnectionsResponse>;
                            connectionClientState(request: _85.QueryConnectionClientStateRequest): Promise<_85.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _85.QueryConnectionConsensusStateRequest): Promise<_85.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _85.QueryConnectionParamsRequest): Promise<_85.QueryConnectionParamsResponse>;
                        };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _154.LCDQueryClient;
                        };
                        host: {
                            v1: _155.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _156.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _157.LCDQueryClient;
                    };
                    client: {
                        v1: _158.LCDQueryClient;
                    };
                    connection: {
                        v1: _159.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
