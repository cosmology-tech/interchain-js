import * as _65 from "./applications/interchain_accounts/controller/v1/controller";
import * as _66 from "./applications/interchain_accounts/controller/v1/query";
import * as _67 from "./applications/interchain_accounts/controller/v1/tx";
import * as _68 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _69 from "./applications/interchain_accounts/host/v1/host";
import * as _70 from "./applications/interchain_accounts/host/v1/query";
import * as _71 from "./applications/interchain_accounts/v1/account";
import * as _72 from "./applications/interchain_accounts/v1/metadata";
import * as _73 from "./applications/interchain_accounts/v1/packet";
import * as _74 from "./applications/transfer/v1/genesis";
import * as _75 from "./applications/transfer/v1/query";
import * as _76 from "./applications/transfer/v1/transfer";
import * as _77 from "./applications/transfer/v1/tx";
import * as _78 from "./applications/transfer/v2/packet";
import * as _79 from "./core/channel/v1/channel";
import * as _80 from "./core/channel/v1/genesis";
import * as _81 from "./core/channel/v1/query";
import * as _82 from "./core/channel/v1/tx";
import * as _83 from "./core/client/v1/client";
import * as _84 from "./core/client/v1/genesis";
import * as _85 from "./core/client/v1/query";
import * as _86 from "./core/client/v1/tx";
import * as _87 from "./core/commitment/v1/commitment";
import * as _88 from "./core/connection/v1/connection";
import * as _89 from "./core/connection/v1/genesis";
import * as _90 from "./core/connection/v1/query";
import * as _91 from "./core/connection/v1/tx";
import * as _92 from "./lightclients/localhost/v1/localhost";
import * as _93 from "./lightclients/solomachine/v1/solomachine";
import * as _94 from "./lightclients/solomachine/v2/solomachine";
import * as _95 from "./lightclients/tendermint/v1/tendermint";
import * as _161 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _162 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _163 from "./applications/transfer/v1/query.lcd";
import * as _164 from "./core/channel/v1/query.lcd";
import * as _165 from "./core/client/v1/query.lcd";
import * as _166 from "./core/connection/v1/query.lcd";
import * as _167 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _168 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _169 from "./applications/transfer/v1/query.rpc.Query";
import * as _170 from "./core/channel/v1/query.rpc.Query";
import * as _171 from "./core/client/v1/query.rpc.Query";
import * as _172 from "./core/connection/v1/query.rpc.Query";
import * as _173 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _174 from "./applications/transfer/v1/tx.rpc.msg";
import * as _175 from "./core/channel/v1/tx.rpc.msg";
import * as _176 from "./core/client/v1/tx.rpc.msg";
import * as _177 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _173.MsgClientImpl;
                    QueryClientImpl: typeof _167.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _66.QueryInterchainAccountRequest): Promise<_66.QueryInterchainAccountResponse>;
                        params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _161.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _67.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _67.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _67.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _67.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _67.MsgSendTx): {
                                typeUrl: string;
                                value: _67.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _67.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _67.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _67.MsgSendTx): {
                                typeUrl: string;
                                value: _67.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _67.MsgRegisterInterchainAccount) => _67.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _67.MsgRegisterInterchainAccountAmino) => _67.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _67.MsgSendTx) => _67.MsgSendTxAmino;
                            fromAmino: (object: _67.MsgSendTxAmino) => _67.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        encode(message: _67.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterInterchainAccount;
                        fromPartial(object: any): _67.MsgRegisterInterchainAccount;
                        fromAmino(object: _67.MsgRegisterInterchainAccountAmino): _67.MsgRegisterInterchainAccount;
                        toAmino(message: _67.MsgRegisterInterchainAccount): _67.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _67.MsgRegisterInterchainAccountAminoMsg): _67.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _67.MsgRegisterInterchainAccount): _67.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _67.MsgRegisterInterchainAccountProtoMsg): _67.MsgRegisterInterchainAccount;
                        toProto(message: _67.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _67.MsgRegisterInterchainAccount): _67.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        encode(message: _67.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgRegisterInterchainAccountResponse;
                        fromPartial(object: any): _67.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _67.MsgRegisterInterchainAccountResponseAmino): _67.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _67.MsgRegisterInterchainAccountResponse): _67.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _67.MsgRegisterInterchainAccountResponseAminoMsg): _67.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _67.MsgRegisterInterchainAccountResponse): _67.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _67.MsgRegisterInterchainAccountResponseProtoMsg): _67.MsgRegisterInterchainAccountResponse;
                        toProto(message: _67.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _67.MsgRegisterInterchainAccountResponse): _67.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        encode(message: _67.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSendTx;
                        fromPartial(object: any): _67.MsgSendTx;
                        fromAmino(object: _67.MsgSendTxAmino): _67.MsgSendTx;
                        toAmino(message: _67.MsgSendTx): _67.MsgSendTxAmino;
                        fromAminoMsg(object: _67.MsgSendTxAminoMsg): _67.MsgSendTx;
                        toAminoMsg(message: _67.MsgSendTx): _67.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _67.MsgSendTxProtoMsg): _67.MsgSendTx;
                        toProto(message: _67.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _67.MsgSendTx): _67.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        encode(message: _67.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.MsgSendTxResponse;
                        fromPartial(object: any): _67.MsgSendTxResponse;
                        fromAmino(object: _67.MsgSendTxResponseAmino): _67.MsgSendTxResponse;
                        toAmino(message: _67.MsgSendTxResponse): _67.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _67.MsgSendTxResponseAminoMsg): _67.MsgSendTxResponse;
                        toAminoMsg(message: _67.MsgSendTxResponse): _67.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _67.MsgSendTxResponseProtoMsg): _67.MsgSendTxResponse;
                        toProto(message: _67.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _67.MsgSendTxResponse): _67.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        encode(message: _66.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInterchainAccountRequest;
                        fromPartial(object: any): _66.QueryInterchainAccountRequest;
                        fromAmino(object: _66.QueryInterchainAccountRequestAmino): _66.QueryInterchainAccountRequest;
                        toAmino(message: _66.QueryInterchainAccountRequest): _66.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _66.QueryInterchainAccountRequestAminoMsg): _66.QueryInterchainAccountRequest;
                        toAminoMsg(message: _66.QueryInterchainAccountRequest): _66.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _66.QueryInterchainAccountRequestProtoMsg): _66.QueryInterchainAccountRequest;
                        toProto(message: _66.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _66.QueryInterchainAccountRequest): _66.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _66.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryInterchainAccountResponse;
                        fromPartial(object: any): _66.QueryInterchainAccountResponse;
                        fromAmino(object: _66.QueryInterchainAccountResponseAmino): _66.QueryInterchainAccountResponse;
                        toAmino(message: _66.QueryInterchainAccountResponse): _66.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _66.QueryInterchainAccountResponseAminoMsg): _66.QueryInterchainAccountResponse;
                        toAminoMsg(message: _66.QueryInterchainAccountResponse): _66.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _66.QueryInterchainAccountResponseProtoMsg): _66.QueryInterchainAccountResponse;
                        toProto(message: _66.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _66.QueryInterchainAccountResponse): _66.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        encode(_: _66.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsRequest;
                        fromPartial(_: any): _66.QueryParamsRequest;
                        fromAmino(_: _66.QueryParamsRequestAmino): _66.QueryParamsRequest;
                        toAmino(_: _66.QueryParamsRequest): _66.QueryParamsRequestAmino;
                        fromAminoMsg(object: _66.QueryParamsRequestAminoMsg): _66.QueryParamsRequest;
                        toAminoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _66.QueryParamsRequestProtoMsg): _66.QueryParamsRequest;
                        toProto(message: _66.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _66.QueryParamsRequest): _66.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        encode(message: _66.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.QueryParamsResponse;
                        fromPartial(object: any): _66.QueryParamsResponse;
                        fromAmino(object: _66.QueryParamsResponseAmino): _66.QueryParamsResponse;
                        toAmino(message: _66.QueryParamsResponse): _66.QueryParamsResponseAmino;
                        fromAminoMsg(object: _66.QueryParamsResponseAminoMsg): _66.QueryParamsResponse;
                        toAminoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _66.QueryParamsResponseProtoMsg): _66.QueryParamsResponse;
                        toProto(message: _66.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _66.QueryParamsResponse): _66.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        encode(message: _65.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Params;
                        fromPartial(object: any): _65.Params;
                        fromAmino(object: _65.ParamsAmino): _65.Params;
                        toAmino(message: _65.Params): _65.ParamsAmino;
                        fromAminoMsg(object: _65.ParamsAminoMsg): _65.Params;
                        toAminoMsg(message: _65.Params): _65.ParamsAminoMsg;
                        fromProtoMsg(message: _65.ParamsProtoMsg): _65.Params;
                        toProto(message: _65.Params): Uint8Array;
                        toProtoMsg(message: _65.Params): _65.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        encode(message: _68.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.GenesisState;
                        fromPartial(object: any): _68.GenesisState;
                        fromAmino(object: _68.GenesisStateAmino): _68.GenesisState;
                        toAmino(message: _68.GenesisState): _68.GenesisStateAmino;
                        fromAminoMsg(object: _68.GenesisStateAminoMsg): _68.GenesisState;
                        toAminoMsg(message: _68.GenesisState): _68.GenesisStateAminoMsg;
                        fromProtoMsg(message: _68.GenesisStateProtoMsg): _68.GenesisState;
                        toProto(message: _68.GenesisState): Uint8Array;
                        toProtoMsg(message: _68.GenesisState): _68.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        encode(message: _68.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ControllerGenesisState;
                        fromPartial(object: any): _68.ControllerGenesisState;
                        fromAmino(object: _68.ControllerGenesisStateAmino): _68.ControllerGenesisState;
                        toAmino(message: _68.ControllerGenesisState): _68.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _68.ControllerGenesisStateAminoMsg): _68.ControllerGenesisState;
                        toAminoMsg(message: _68.ControllerGenesisState): _68.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _68.ControllerGenesisStateProtoMsg): _68.ControllerGenesisState;
                        toProto(message: _68.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _68.ControllerGenesisState): _68.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        encode(message: _68.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.HostGenesisState;
                        fromPartial(object: any): _68.HostGenesisState;
                        fromAmino(object: _68.HostGenesisStateAmino): _68.HostGenesisState;
                        toAmino(message: _68.HostGenesisState): _68.HostGenesisStateAmino;
                        fromAminoMsg(object: _68.HostGenesisStateAminoMsg): _68.HostGenesisState;
                        toAminoMsg(message: _68.HostGenesisState): _68.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _68.HostGenesisStateProtoMsg): _68.HostGenesisState;
                        toProto(message: _68.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _68.HostGenesisState): _68.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        encode(message: _68.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ActiveChannel;
                        fromPartial(object: any): _68.ActiveChannel;
                        fromAmino(object: _68.ActiveChannelAmino): _68.ActiveChannel;
                        toAmino(message: _68.ActiveChannel): _68.ActiveChannelAmino;
                        fromAminoMsg(object: _68.ActiveChannelAminoMsg): _68.ActiveChannel;
                        toAminoMsg(message: _68.ActiveChannel): _68.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _68.ActiveChannelProtoMsg): _68.ActiveChannel;
                        toProto(message: _68.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _68.ActiveChannel): _68.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        encode(message: _68.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.RegisteredInterchainAccount;
                        fromPartial(object: any): _68.RegisteredInterchainAccount;
                        fromAmino(object: _68.RegisteredInterchainAccountAmino): _68.RegisteredInterchainAccount;
                        toAmino(message: _68.RegisteredInterchainAccount): _68.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _68.RegisteredInterchainAccountAminoMsg): _68.RegisteredInterchainAccount;
                        toAminoMsg(message: _68.RegisteredInterchainAccount): _68.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _68.RegisteredInterchainAccountProtoMsg): _68.RegisteredInterchainAccount;
                        toProto(message: _68.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _68.RegisteredInterchainAccount): _68.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _168.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _162.LCDQueryClient;
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
                    Params: {
                        encode(message: _69.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Params;
                        fromPartial(object: any): _69.Params;
                        fromAmino(object: _69.ParamsAmino): _69.Params;
                        toAmino(message: _69.Params): _69.ParamsAmino;
                        fromAminoMsg(object: _69.ParamsAminoMsg): _69.Params;
                        toAminoMsg(message: _69.Params): _69.ParamsAminoMsg;
                        fromProtoMsg(message: _69.ParamsProtoMsg): _69.Params;
                        toProto(message: _69.Params): Uint8Array;
                        toProtoMsg(message: _69.Params): _69.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _73.Type;
                typeToJSON(object: _73.Type): string;
                Type: typeof _73.Type;
                TypeSDKType: typeof _73.Type;
                TypeAmino: typeof _73.Type;
                InterchainAccountPacketData: {
                    encode(message: _73.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.InterchainAccountPacketData;
                    fromPartial(object: any): _73.InterchainAccountPacketData;
                    fromAmino(object: _73.InterchainAccountPacketDataAmino): _73.InterchainAccountPacketData;
                    toAmino(message: _73.InterchainAccountPacketData): _73.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _73.InterchainAccountPacketDataAminoMsg): _73.InterchainAccountPacketData;
                    toAminoMsg(message: _73.InterchainAccountPacketData): _73.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _73.InterchainAccountPacketDataProtoMsg): _73.InterchainAccountPacketData;
                    toProto(message: _73.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _73.InterchainAccountPacketData): _73.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    encode(message: _73.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.CosmosTx;
                    fromPartial(object: any): _73.CosmosTx;
                    fromAmino(object: _73.CosmosTxAmino): _73.CosmosTx;
                    toAmino(message: _73.CosmosTx): _73.CosmosTxAmino;
                    fromAminoMsg(object: _73.CosmosTxAminoMsg): _73.CosmosTx;
                    toAminoMsg(message: _73.CosmosTx): _73.CosmosTxAminoMsg;
                    fromProtoMsg(message: _73.CosmosTxProtoMsg): _73.CosmosTx;
                    toProto(message: _73.CosmosTx): Uint8Array;
                    toProtoMsg(message: _73.CosmosTx): _73.CosmosTxProtoMsg;
                };
                Metadata: {
                    encode(message: _72.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Metadata;
                    fromPartial(object: any): _72.Metadata;
                    fromAmino(object: _72.MetadataAmino): _72.Metadata;
                    toAmino(message: _72.Metadata): _72.MetadataAmino;
                    fromAminoMsg(object: _72.MetadataAminoMsg): _72.Metadata;
                    toAminoMsg(message: _72.Metadata): _72.MetadataAminoMsg;
                    fromProtoMsg(message: _72.MetadataProtoMsg): _72.Metadata;
                    toProto(message: _72.Metadata): Uint8Array;
                    toProtoMsg(message: _72.Metadata): _72.MetadataProtoMsg;
                };
                InterchainAccount: {
                    encode(message: _71.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.InterchainAccount;
                    fromPartial(object: any): _71.InterchainAccount;
                    fromAmino(object: _71.InterchainAccountAmino): _71.InterchainAccount;
                    toAmino(message: _71.InterchainAccount): _71.InterchainAccountAmino;
                    fromAminoMsg(object: _71.InterchainAccountAminoMsg): _71.InterchainAccount;
                    toAminoMsg(message: _71.InterchainAccount): _71.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _71.InterchainAccountProtoMsg): _71.InterchainAccount;
                    toProto(message: _71.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _71.InterchainAccount): _71.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _174.MsgClientImpl;
                QueryClientImpl: typeof _169.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _75.QueryDenomTraceRequest): Promise<_75.QueryDenomTraceResponse>;
                    denomTraces(request?: _75.QueryDenomTracesRequest): Promise<_75.QueryDenomTracesResponse>;
                    params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                    denomHash(request: _75.QueryDenomHashRequest): Promise<_75.QueryDenomHashResponse>;
                    escrowAddress(request: _75.QueryEscrowAddressRequest): Promise<_75.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _163.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _77.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _77.MsgTransfer): {
                            typeUrl: string;
                            value: _77.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _77.MsgTransfer): {
                            typeUrl: string;
                            value: _77.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _77.MsgTransfer) => _77.MsgTransferAmino;
                        fromAmino: (object: _77.MsgTransferAmino) => _77.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _77.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTransfer;
                    fromPartial(object: any): _77.MsgTransfer;
                    fromAmino(object: _77.MsgTransferAmino): _77.MsgTransfer;
                    toAmino(message: _77.MsgTransfer): _77.MsgTransferAmino;
                    fromAminoMsg(object: _77.MsgTransferAminoMsg): _77.MsgTransfer;
                    toAminoMsg(message: _77.MsgTransfer): _77.MsgTransferAminoMsg;
                    fromProtoMsg(message: _77.MsgTransferProtoMsg): _77.MsgTransfer;
                    toProto(message: _77.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _77.MsgTransfer): _77.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    encode(message: _77.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgTransferResponse;
                    fromPartial(object: any): _77.MsgTransferResponse;
                    fromAmino(object: _77.MsgTransferResponseAmino): _77.MsgTransferResponse;
                    toAmino(message: _77.MsgTransferResponse): _77.MsgTransferResponseAmino;
                    fromAminoMsg(object: _77.MsgTransferResponseAminoMsg): _77.MsgTransferResponse;
                    toAminoMsg(message: _77.MsgTransferResponse): _77.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _77.MsgTransferResponseProtoMsg): _77.MsgTransferResponse;
                    toProto(message: _77.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _77.MsgTransferResponse): _77.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    encode(message: _76.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.DenomTrace;
                    fromPartial(object: any): _76.DenomTrace;
                    fromAmino(object: _76.DenomTraceAmino): _76.DenomTrace;
                    toAmino(message: _76.DenomTrace): _76.DenomTraceAmino;
                    fromAminoMsg(object: _76.DenomTraceAminoMsg): _76.DenomTrace;
                    toAminoMsg(message: _76.DenomTrace): _76.DenomTraceAminoMsg;
                    fromProtoMsg(message: _76.DenomTraceProtoMsg): _76.DenomTrace;
                    toProto(message: _76.DenomTrace): Uint8Array;
                    toProtoMsg(message: _76.DenomTrace): _76.DenomTraceProtoMsg;
                };
                Params: {
                    encode(message: _76.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Params;
                    fromPartial(object: any): _76.Params;
                    fromAmino(object: _76.ParamsAmino): _76.Params;
                    toAmino(message: _76.Params): _76.ParamsAmino;
                    fromAminoMsg(object: _76.ParamsAminoMsg): _76.Params;
                    toAminoMsg(message: _76.Params): _76.ParamsAminoMsg;
                    fromProtoMsg(message: _76.ParamsProtoMsg): _76.Params;
                    toProto(message: _76.Params): Uint8Array;
                    toProtoMsg(message: _76.Params): _76.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    encode(message: _75.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTraceRequest;
                    fromPartial(object: any): _75.QueryDenomTraceRequest;
                    fromAmino(object: _75.QueryDenomTraceRequestAmino): _75.QueryDenomTraceRequest;
                    toAmino(message: _75.QueryDenomTraceRequest): _75.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _75.QueryDenomTraceRequestAminoMsg): _75.QueryDenomTraceRequest;
                    toAminoMsg(message: _75.QueryDenomTraceRequest): _75.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _75.QueryDenomTraceRequestProtoMsg): _75.QueryDenomTraceRequest;
                    toProto(message: _75.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _75.QueryDenomTraceRequest): _75.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    encode(message: _75.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTraceResponse;
                    fromPartial(object: any): _75.QueryDenomTraceResponse;
                    fromAmino(object: _75.QueryDenomTraceResponseAmino): _75.QueryDenomTraceResponse;
                    toAmino(message: _75.QueryDenomTraceResponse): _75.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _75.QueryDenomTraceResponseAminoMsg): _75.QueryDenomTraceResponse;
                    toAminoMsg(message: _75.QueryDenomTraceResponse): _75.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _75.QueryDenomTraceResponseProtoMsg): _75.QueryDenomTraceResponse;
                    toProto(message: _75.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _75.QueryDenomTraceResponse): _75.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    encode(message: _75.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTracesRequest;
                    fromPartial(object: any): _75.QueryDenomTracesRequest;
                    fromAmino(object: _75.QueryDenomTracesRequestAmino): _75.QueryDenomTracesRequest;
                    toAmino(message: _75.QueryDenomTracesRequest): _75.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _75.QueryDenomTracesRequestAminoMsg): _75.QueryDenomTracesRequest;
                    toAminoMsg(message: _75.QueryDenomTracesRequest): _75.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _75.QueryDenomTracesRequestProtoMsg): _75.QueryDenomTracesRequest;
                    toProto(message: _75.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _75.QueryDenomTracesRequest): _75.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    encode(message: _75.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomTracesResponse;
                    fromPartial(object: any): _75.QueryDenomTracesResponse;
                    fromAmino(object: _75.QueryDenomTracesResponseAmino): _75.QueryDenomTracesResponse;
                    toAmino(message: _75.QueryDenomTracesResponse): _75.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _75.QueryDenomTracesResponseAminoMsg): _75.QueryDenomTracesResponse;
                    toAminoMsg(message: _75.QueryDenomTracesResponse): _75.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _75.QueryDenomTracesResponseProtoMsg): _75.QueryDenomTracesResponse;
                    toProto(message: _75.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _75.QueryDenomTracesResponse): _75.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    encode(_: _75.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsRequest;
                    fromPartial(_: any): _75.QueryParamsRequest;
                    fromAmino(_: _75.QueryParamsRequestAmino): _75.QueryParamsRequest;
                    toAmino(_: _75.QueryParamsRequest): _75.QueryParamsRequestAmino;
                    fromAminoMsg(object: _75.QueryParamsRequestAminoMsg): _75.QueryParamsRequest;
                    toAminoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _75.QueryParamsRequestProtoMsg): _75.QueryParamsRequest;
                    toProto(message: _75.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _75.QueryParamsRequest): _75.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    encode(message: _75.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryParamsResponse;
                    fromPartial(object: any): _75.QueryParamsResponse;
                    fromAmino(object: _75.QueryParamsResponseAmino): _75.QueryParamsResponse;
                    toAmino(message: _75.QueryParamsResponse): _75.QueryParamsResponseAmino;
                    fromAminoMsg(object: _75.QueryParamsResponseAminoMsg): _75.QueryParamsResponse;
                    toAminoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _75.QueryParamsResponseProtoMsg): _75.QueryParamsResponse;
                    toProto(message: _75.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _75.QueryParamsResponse): _75.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    encode(message: _75.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomHashRequest;
                    fromPartial(object: any): _75.QueryDenomHashRequest;
                    fromAmino(object: _75.QueryDenomHashRequestAmino): _75.QueryDenomHashRequest;
                    toAmino(message: _75.QueryDenomHashRequest): _75.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _75.QueryDenomHashRequestAminoMsg): _75.QueryDenomHashRequest;
                    toAminoMsg(message: _75.QueryDenomHashRequest): _75.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _75.QueryDenomHashRequestProtoMsg): _75.QueryDenomHashRequest;
                    toProto(message: _75.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _75.QueryDenomHashRequest): _75.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    encode(message: _75.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryDenomHashResponse;
                    fromPartial(object: any): _75.QueryDenomHashResponse;
                    fromAmino(object: _75.QueryDenomHashResponseAmino): _75.QueryDenomHashResponse;
                    toAmino(message: _75.QueryDenomHashResponse): _75.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _75.QueryDenomHashResponseAminoMsg): _75.QueryDenomHashResponse;
                    toAminoMsg(message: _75.QueryDenomHashResponse): _75.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _75.QueryDenomHashResponseProtoMsg): _75.QueryDenomHashResponse;
                    toProto(message: _75.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _75.QueryDenomHashResponse): _75.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _75.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryEscrowAddressRequest;
                    fromPartial(object: any): _75.QueryEscrowAddressRequest;
                    fromAmino(object: _75.QueryEscrowAddressRequestAmino): _75.QueryEscrowAddressRequest;
                    toAmino(message: _75.QueryEscrowAddressRequest): _75.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _75.QueryEscrowAddressRequestAminoMsg): _75.QueryEscrowAddressRequest;
                    toAminoMsg(message: _75.QueryEscrowAddressRequest): _75.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _75.QueryEscrowAddressRequestProtoMsg): _75.QueryEscrowAddressRequest;
                    toProto(message: _75.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _75.QueryEscrowAddressRequest): _75.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _75.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.QueryEscrowAddressResponse;
                    fromPartial(object: any): _75.QueryEscrowAddressResponse;
                    fromAmino(object: _75.QueryEscrowAddressResponseAmino): _75.QueryEscrowAddressResponse;
                    toAmino(message: _75.QueryEscrowAddressResponse): _75.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _75.QueryEscrowAddressResponseAminoMsg): _75.QueryEscrowAddressResponse;
                    toAminoMsg(message: _75.QueryEscrowAddressResponse): _75.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _75.QueryEscrowAddressResponseProtoMsg): _75.QueryEscrowAddressResponse;
                    toProto(message: _75.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _75.QueryEscrowAddressResponse): _75.QueryEscrowAddressResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _74.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.GenesisState;
                    fromPartial(object: any): _74.GenesisState;
                    fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                    toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                    fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                    toAminoMsg(message: _74.GenesisState): _74.GenesisStateAminoMsg;
                    fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                    toProto(message: _74.GenesisState): Uint8Array;
                    toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _78.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.FungibleTokenPacketData;
                    fromPartial(object: any): _78.FungibleTokenPacketData;
                    fromAmino(object: _78.FungibleTokenPacketDataAmino): _78.FungibleTokenPacketData;
                    toAmino(message: _78.FungibleTokenPacketData): _78.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _78.FungibleTokenPacketDataAminoMsg): _78.FungibleTokenPacketData;
                    toAminoMsg(message: _78.FungibleTokenPacketData): _78.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _78.FungibleTokenPacketDataProtoMsg): _78.FungibleTokenPacketData;
                    toProto(message: _78.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _78.FungibleTokenPacketData): _78.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _175.MsgClientImpl;
                QueryClientImpl: typeof _170.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _81.QueryChannelRequest): Promise<_81.QueryChannelResponse>;
                    channels(request?: _81.QueryChannelsRequest): Promise<_81.QueryChannelsResponse>;
                    connectionChannels(request: _81.QueryConnectionChannelsRequest): Promise<_81.QueryConnectionChannelsResponse>;
                    channelClientState(request: _81.QueryChannelClientStateRequest): Promise<_81.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _81.QueryChannelConsensusStateRequest): Promise<_81.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _81.QueryPacketCommitmentRequest): Promise<_81.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _81.QueryPacketCommitmentsRequest): Promise<_81.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _81.QueryPacketReceiptRequest): Promise<_81.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _81.QueryPacketAcknowledgementRequest): Promise<_81.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _81.QueryPacketAcknowledgementsRequest): Promise<_81.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _81.QueryUnreceivedPacketsRequest): Promise<_81.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _81.QueryUnreceivedAcksRequest): Promise<_81.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _81.QueryNextSequenceReceiveRequest): Promise<_81.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _164.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _82.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _82.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _82.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _82.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _82.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _82.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _82.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _82.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _82.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _82.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _82.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _82.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _82.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _82.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _82.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _82.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _82.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _82.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _82.MsgRecvPacket): {
                            typeUrl: string;
                            value: _82.MsgRecvPacket;
                        };
                        timeout(value: _82.MsgTimeout): {
                            typeUrl: string;
                            value: _82.MsgTimeout;
                        };
                        timeoutOnClose(value: _82.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _82.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _82.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _82.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _82.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _82.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _82.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _82.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _82.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _82.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _82.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _82.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _82.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _82.MsgRecvPacket): {
                            typeUrl: string;
                            value: _82.MsgRecvPacket;
                        };
                        timeout(value: _82.MsgTimeout): {
                            typeUrl: string;
                            value: _82.MsgTimeout;
                        };
                        timeoutOnClose(value: _82.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _82.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _82.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _82.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _82.MsgChannelOpenInit) => _82.MsgChannelOpenInitAmino;
                        fromAmino: (object: _82.MsgChannelOpenInitAmino) => _82.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _82.MsgChannelOpenTry) => _82.MsgChannelOpenTryAmino;
                        fromAmino: (object: _82.MsgChannelOpenTryAmino) => _82.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _82.MsgChannelOpenAck) => _82.MsgChannelOpenAckAmino;
                        fromAmino: (object: _82.MsgChannelOpenAckAmino) => _82.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _82.MsgChannelOpenConfirm) => _82.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _82.MsgChannelOpenConfirmAmino) => _82.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _82.MsgChannelCloseInit) => _82.MsgChannelCloseInitAmino;
                        fromAmino: (object: _82.MsgChannelCloseInitAmino) => _82.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _82.MsgChannelCloseConfirm) => _82.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _82.MsgChannelCloseConfirmAmino) => _82.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _82.MsgRecvPacket) => _82.MsgRecvPacketAmino;
                        fromAmino: (object: _82.MsgRecvPacketAmino) => _82.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _82.MsgTimeout) => _82.MsgTimeoutAmino;
                        fromAmino: (object: _82.MsgTimeoutAmino) => _82.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _82.MsgTimeoutOnClose) => _82.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _82.MsgTimeoutOnCloseAmino) => _82.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _82.MsgAcknowledgement) => _82.MsgAcknowledgementAmino;
                        fromAmino: (object: _82.MsgAcknowledgementAmino) => _82.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _82.ResponseResultType;
                responseResultTypeToJSON(object: _82.ResponseResultType): string;
                ResponseResultType: typeof _82.ResponseResultType;
                ResponseResultTypeSDKType: typeof _82.ResponseResultType;
                ResponseResultTypeAmino: typeof _82.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _82.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenInit;
                    fromPartial(object: any): _82.MsgChannelOpenInit;
                    fromAmino(object: _82.MsgChannelOpenInitAmino): _82.MsgChannelOpenInit;
                    toAmino(message: _82.MsgChannelOpenInit): _82.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenInitAminoMsg): _82.MsgChannelOpenInit;
                    toAminoMsg(message: _82.MsgChannelOpenInit): _82.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenInitProtoMsg): _82.MsgChannelOpenInit;
                    toProto(message: _82.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenInit): _82.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _82.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenInitResponse;
                    fromPartial(object: any): _82.MsgChannelOpenInitResponse;
                    fromAmino(object: _82.MsgChannelOpenInitResponseAmino): _82.MsgChannelOpenInitResponse;
                    toAmino(message: _82.MsgChannelOpenInitResponse): _82.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenInitResponseAminoMsg): _82.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _82.MsgChannelOpenInitResponse): _82.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenInitResponseProtoMsg): _82.MsgChannelOpenInitResponse;
                    toProto(message: _82.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenInitResponse): _82.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    encode(message: _82.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenTry;
                    fromPartial(object: any): _82.MsgChannelOpenTry;
                    fromAmino(object: _82.MsgChannelOpenTryAmino): _82.MsgChannelOpenTry;
                    toAmino(message: _82.MsgChannelOpenTry): _82.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenTryAminoMsg): _82.MsgChannelOpenTry;
                    toAminoMsg(message: _82.MsgChannelOpenTry): _82.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenTryProtoMsg): _82.MsgChannelOpenTry;
                    toProto(message: _82.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenTry): _82.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _82.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenTryResponse;
                    fromPartial(object: any): _82.MsgChannelOpenTryResponse;
                    fromAmino(object: _82.MsgChannelOpenTryResponseAmino): _82.MsgChannelOpenTryResponse;
                    toAmino(message: _82.MsgChannelOpenTryResponse): _82.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenTryResponseAminoMsg): _82.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _82.MsgChannelOpenTryResponse): _82.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenTryResponseProtoMsg): _82.MsgChannelOpenTryResponse;
                    toProto(message: _82.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenTryResponse): _82.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    encode(message: _82.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenAck;
                    fromPartial(object: any): _82.MsgChannelOpenAck;
                    fromAmino(object: _82.MsgChannelOpenAckAmino): _82.MsgChannelOpenAck;
                    toAmino(message: _82.MsgChannelOpenAck): _82.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenAckAminoMsg): _82.MsgChannelOpenAck;
                    toAminoMsg(message: _82.MsgChannelOpenAck): _82.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenAckProtoMsg): _82.MsgChannelOpenAck;
                    toProto(message: _82.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenAck): _82.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _82.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenAckResponse;
                    fromPartial(_: any): _82.MsgChannelOpenAckResponse;
                    fromAmino(_: _82.MsgChannelOpenAckResponseAmino): _82.MsgChannelOpenAckResponse;
                    toAmino(_: _82.MsgChannelOpenAckResponse): _82.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenAckResponseAminoMsg): _82.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _82.MsgChannelOpenAckResponse): _82.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenAckResponseProtoMsg): _82.MsgChannelOpenAckResponse;
                    toProto(message: _82.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenAckResponse): _82.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _82.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenConfirm;
                    fromPartial(object: any): _82.MsgChannelOpenConfirm;
                    fromAmino(object: _82.MsgChannelOpenConfirmAmino): _82.MsgChannelOpenConfirm;
                    toAmino(message: _82.MsgChannelOpenConfirm): _82.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenConfirmAminoMsg): _82.MsgChannelOpenConfirm;
                    toAminoMsg(message: _82.MsgChannelOpenConfirm): _82.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenConfirmProtoMsg): _82.MsgChannelOpenConfirm;
                    toProto(message: _82.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenConfirm): _82.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _82.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelOpenConfirmResponse;
                    fromPartial(_: any): _82.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _82.MsgChannelOpenConfirmResponseAmino): _82.MsgChannelOpenConfirmResponse;
                    toAmino(_: _82.MsgChannelOpenConfirmResponse): _82.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _82.MsgChannelOpenConfirmResponseAminoMsg): _82.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _82.MsgChannelOpenConfirmResponse): _82.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelOpenConfirmResponseProtoMsg): _82.MsgChannelOpenConfirmResponse;
                    toProto(message: _82.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelOpenConfirmResponse): _82.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    encode(message: _82.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelCloseInit;
                    fromPartial(object: any): _82.MsgChannelCloseInit;
                    fromAmino(object: _82.MsgChannelCloseInitAmino): _82.MsgChannelCloseInit;
                    toAmino(message: _82.MsgChannelCloseInit): _82.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _82.MsgChannelCloseInitAminoMsg): _82.MsgChannelCloseInit;
                    toAminoMsg(message: _82.MsgChannelCloseInit): _82.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelCloseInitProtoMsg): _82.MsgChannelCloseInit;
                    toProto(message: _82.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelCloseInit): _82.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _82.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelCloseInitResponse;
                    fromPartial(_: any): _82.MsgChannelCloseInitResponse;
                    fromAmino(_: _82.MsgChannelCloseInitResponseAmino): _82.MsgChannelCloseInitResponse;
                    toAmino(_: _82.MsgChannelCloseInitResponse): _82.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _82.MsgChannelCloseInitResponseAminoMsg): _82.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _82.MsgChannelCloseInitResponse): _82.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelCloseInitResponseProtoMsg): _82.MsgChannelCloseInitResponse;
                    toProto(message: _82.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelCloseInitResponse): _82.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _82.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelCloseConfirm;
                    fromPartial(object: any): _82.MsgChannelCloseConfirm;
                    fromAmino(object: _82.MsgChannelCloseConfirmAmino): _82.MsgChannelCloseConfirm;
                    toAmino(message: _82.MsgChannelCloseConfirm): _82.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _82.MsgChannelCloseConfirmAminoMsg): _82.MsgChannelCloseConfirm;
                    toAminoMsg(message: _82.MsgChannelCloseConfirm): _82.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelCloseConfirmProtoMsg): _82.MsgChannelCloseConfirm;
                    toProto(message: _82.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelCloseConfirm): _82.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _82.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgChannelCloseConfirmResponse;
                    fromPartial(_: any): _82.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _82.MsgChannelCloseConfirmResponseAmino): _82.MsgChannelCloseConfirmResponse;
                    toAmino(_: _82.MsgChannelCloseConfirmResponse): _82.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _82.MsgChannelCloseConfirmResponseAminoMsg): _82.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _82.MsgChannelCloseConfirmResponse): _82.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgChannelCloseConfirmResponseProtoMsg): _82.MsgChannelCloseConfirmResponse;
                    toProto(message: _82.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgChannelCloseConfirmResponse): _82.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    encode(message: _82.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgRecvPacket;
                    fromPartial(object: any): _82.MsgRecvPacket;
                    fromAmino(object: _82.MsgRecvPacketAmino): _82.MsgRecvPacket;
                    toAmino(message: _82.MsgRecvPacket): _82.MsgRecvPacketAmino;
                    fromAminoMsg(object: _82.MsgRecvPacketAminoMsg): _82.MsgRecvPacket;
                    toAminoMsg(message: _82.MsgRecvPacket): _82.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _82.MsgRecvPacketProtoMsg): _82.MsgRecvPacket;
                    toProto(message: _82.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _82.MsgRecvPacket): _82.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    encode(message: _82.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgRecvPacketResponse;
                    fromPartial(object: any): _82.MsgRecvPacketResponse;
                    fromAmino(object: _82.MsgRecvPacketResponseAmino): _82.MsgRecvPacketResponse;
                    toAmino(message: _82.MsgRecvPacketResponse): _82.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _82.MsgRecvPacketResponseAminoMsg): _82.MsgRecvPacketResponse;
                    toAminoMsg(message: _82.MsgRecvPacketResponse): _82.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgRecvPacketResponseProtoMsg): _82.MsgRecvPacketResponse;
                    toProto(message: _82.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgRecvPacketResponse): _82.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    encode(message: _82.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgTimeout;
                    fromPartial(object: any): _82.MsgTimeout;
                    fromAmino(object: _82.MsgTimeoutAmino): _82.MsgTimeout;
                    toAmino(message: _82.MsgTimeout): _82.MsgTimeoutAmino;
                    fromAminoMsg(object: _82.MsgTimeoutAminoMsg): _82.MsgTimeout;
                    toAminoMsg(message: _82.MsgTimeout): _82.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _82.MsgTimeoutProtoMsg): _82.MsgTimeout;
                    toProto(message: _82.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _82.MsgTimeout): _82.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    encode(message: _82.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgTimeoutResponse;
                    fromPartial(object: any): _82.MsgTimeoutResponse;
                    fromAmino(object: _82.MsgTimeoutResponseAmino): _82.MsgTimeoutResponse;
                    toAmino(message: _82.MsgTimeoutResponse): _82.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _82.MsgTimeoutResponseAminoMsg): _82.MsgTimeoutResponse;
                    toAminoMsg(message: _82.MsgTimeoutResponse): _82.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgTimeoutResponseProtoMsg): _82.MsgTimeoutResponse;
                    toProto(message: _82.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgTimeoutResponse): _82.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    encode(message: _82.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgTimeoutOnClose;
                    fromPartial(object: any): _82.MsgTimeoutOnClose;
                    fromAmino(object: _82.MsgTimeoutOnCloseAmino): _82.MsgTimeoutOnClose;
                    toAmino(message: _82.MsgTimeoutOnClose): _82.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _82.MsgTimeoutOnCloseAminoMsg): _82.MsgTimeoutOnClose;
                    toAminoMsg(message: _82.MsgTimeoutOnClose): _82.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _82.MsgTimeoutOnCloseProtoMsg): _82.MsgTimeoutOnClose;
                    toProto(message: _82.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _82.MsgTimeoutOnClose): _82.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _82.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgTimeoutOnCloseResponse;
                    fromPartial(object: any): _82.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _82.MsgTimeoutOnCloseResponseAmino): _82.MsgTimeoutOnCloseResponse;
                    toAmino(message: _82.MsgTimeoutOnCloseResponse): _82.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _82.MsgTimeoutOnCloseResponseAminoMsg): _82.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _82.MsgTimeoutOnCloseResponse): _82.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgTimeoutOnCloseResponseProtoMsg): _82.MsgTimeoutOnCloseResponse;
                    toProto(message: _82.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgTimeoutOnCloseResponse): _82.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    encode(message: _82.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgAcknowledgement;
                    fromPartial(object: any): _82.MsgAcknowledgement;
                    fromAmino(object: _82.MsgAcknowledgementAmino): _82.MsgAcknowledgement;
                    toAmino(message: _82.MsgAcknowledgement): _82.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _82.MsgAcknowledgementAminoMsg): _82.MsgAcknowledgement;
                    toAminoMsg(message: _82.MsgAcknowledgement): _82.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _82.MsgAcknowledgementProtoMsg): _82.MsgAcknowledgement;
                    toProto(message: _82.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _82.MsgAcknowledgement): _82.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _82.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgAcknowledgementResponse;
                    fromPartial(object: any): _82.MsgAcknowledgementResponse;
                    fromAmino(object: _82.MsgAcknowledgementResponseAmino): _82.MsgAcknowledgementResponse;
                    toAmino(message: _82.MsgAcknowledgementResponse): _82.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _82.MsgAcknowledgementResponseAminoMsg): _82.MsgAcknowledgementResponse;
                    toAminoMsg(message: _82.MsgAcknowledgementResponse): _82.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _82.MsgAcknowledgementResponseProtoMsg): _82.MsgAcknowledgementResponse;
                    toProto(message: _82.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _82.MsgAcknowledgementResponse): _82.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    encode(message: _81.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelRequest;
                    fromPartial(object: any): _81.QueryChannelRequest;
                    fromAmino(object: _81.QueryChannelRequestAmino): _81.QueryChannelRequest;
                    toAmino(message: _81.QueryChannelRequest): _81.QueryChannelRequestAmino;
                    fromAminoMsg(object: _81.QueryChannelRequestAminoMsg): _81.QueryChannelRequest;
                    toAminoMsg(message: _81.QueryChannelRequest): _81.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelRequestProtoMsg): _81.QueryChannelRequest;
                    toProto(message: _81.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelRequest): _81.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    encode(message: _81.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelResponse;
                    fromPartial(object: any): _81.QueryChannelResponse;
                    fromAmino(object: _81.QueryChannelResponseAmino): _81.QueryChannelResponse;
                    toAmino(message: _81.QueryChannelResponse): _81.QueryChannelResponseAmino;
                    fromAminoMsg(object: _81.QueryChannelResponseAminoMsg): _81.QueryChannelResponse;
                    toAminoMsg(message: _81.QueryChannelResponse): _81.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelResponseProtoMsg): _81.QueryChannelResponse;
                    toProto(message: _81.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelResponse): _81.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    encode(message: _81.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelsRequest;
                    fromPartial(object: any): _81.QueryChannelsRequest;
                    fromAmino(object: _81.QueryChannelsRequestAmino): _81.QueryChannelsRequest;
                    toAmino(message: _81.QueryChannelsRequest): _81.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _81.QueryChannelsRequestAminoMsg): _81.QueryChannelsRequest;
                    toAminoMsg(message: _81.QueryChannelsRequest): _81.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelsRequestProtoMsg): _81.QueryChannelsRequest;
                    toProto(message: _81.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelsRequest): _81.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    encode(message: _81.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelsResponse;
                    fromPartial(object: any): _81.QueryChannelsResponse;
                    fromAmino(object: _81.QueryChannelsResponseAmino): _81.QueryChannelsResponse;
                    toAmino(message: _81.QueryChannelsResponse): _81.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _81.QueryChannelsResponseAminoMsg): _81.QueryChannelsResponse;
                    toAminoMsg(message: _81.QueryChannelsResponse): _81.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelsResponseProtoMsg): _81.QueryChannelsResponse;
                    toProto(message: _81.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelsResponse): _81.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _81.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionChannelsRequest;
                    fromPartial(object: any): _81.QueryConnectionChannelsRequest;
                    fromAmino(object: _81.QueryConnectionChannelsRequestAmino): _81.QueryConnectionChannelsRequest;
                    toAmino(message: _81.QueryConnectionChannelsRequest): _81.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _81.QueryConnectionChannelsRequestAminoMsg): _81.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _81.QueryConnectionChannelsRequest): _81.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryConnectionChannelsRequestProtoMsg): _81.QueryConnectionChannelsRequest;
                    toProto(message: _81.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryConnectionChannelsRequest): _81.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _81.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConnectionChannelsResponse;
                    fromPartial(object: any): _81.QueryConnectionChannelsResponse;
                    fromAmino(object: _81.QueryConnectionChannelsResponseAmino): _81.QueryConnectionChannelsResponse;
                    toAmino(message: _81.QueryConnectionChannelsResponse): _81.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _81.QueryConnectionChannelsResponseAminoMsg): _81.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _81.QueryConnectionChannelsResponse): _81.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryConnectionChannelsResponseProtoMsg): _81.QueryConnectionChannelsResponse;
                    toProto(message: _81.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryConnectionChannelsResponse): _81.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _81.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelClientStateRequest;
                    fromPartial(object: any): _81.QueryChannelClientStateRequest;
                    fromAmino(object: _81.QueryChannelClientStateRequestAmino): _81.QueryChannelClientStateRequest;
                    toAmino(message: _81.QueryChannelClientStateRequest): _81.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _81.QueryChannelClientStateRequestAminoMsg): _81.QueryChannelClientStateRequest;
                    toAminoMsg(message: _81.QueryChannelClientStateRequest): _81.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelClientStateRequestProtoMsg): _81.QueryChannelClientStateRequest;
                    toProto(message: _81.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelClientStateRequest): _81.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _81.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelClientStateResponse;
                    fromPartial(object: any): _81.QueryChannelClientStateResponse;
                    fromAmino(object: _81.QueryChannelClientStateResponseAmino): _81.QueryChannelClientStateResponse;
                    toAmino(message: _81.QueryChannelClientStateResponse): _81.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _81.QueryChannelClientStateResponseAminoMsg): _81.QueryChannelClientStateResponse;
                    toAminoMsg(message: _81.QueryChannelClientStateResponse): _81.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelClientStateResponseProtoMsg): _81.QueryChannelClientStateResponse;
                    toProto(message: _81.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelClientStateResponse): _81.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _81.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelConsensusStateRequest;
                    fromPartial(object: any): _81.QueryChannelConsensusStateRequest;
                    fromAmino(object: _81.QueryChannelConsensusStateRequestAmino): _81.QueryChannelConsensusStateRequest;
                    toAmino(message: _81.QueryChannelConsensusStateRequest): _81.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _81.QueryChannelConsensusStateRequestAminoMsg): _81.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _81.QueryChannelConsensusStateRequest): _81.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelConsensusStateRequestProtoMsg): _81.QueryChannelConsensusStateRequest;
                    toProto(message: _81.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelConsensusStateRequest): _81.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _81.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryChannelConsensusStateResponse;
                    fromPartial(object: any): _81.QueryChannelConsensusStateResponse;
                    fromAmino(object: _81.QueryChannelConsensusStateResponseAmino): _81.QueryChannelConsensusStateResponse;
                    toAmino(message: _81.QueryChannelConsensusStateResponse): _81.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _81.QueryChannelConsensusStateResponseAminoMsg): _81.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _81.QueryChannelConsensusStateResponse): _81.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryChannelConsensusStateResponseProtoMsg): _81.QueryChannelConsensusStateResponse;
                    toProto(message: _81.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryChannelConsensusStateResponse): _81.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _81.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketCommitmentRequest;
                    fromPartial(object: any): _81.QueryPacketCommitmentRequest;
                    fromAmino(object: _81.QueryPacketCommitmentRequestAmino): _81.QueryPacketCommitmentRequest;
                    toAmino(message: _81.QueryPacketCommitmentRequest): _81.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _81.QueryPacketCommitmentRequestAminoMsg): _81.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _81.QueryPacketCommitmentRequest): _81.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketCommitmentRequestProtoMsg): _81.QueryPacketCommitmentRequest;
                    toProto(message: _81.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketCommitmentRequest): _81.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _81.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketCommitmentResponse;
                    fromPartial(object: any): _81.QueryPacketCommitmentResponse;
                    fromAmino(object: _81.QueryPacketCommitmentResponseAmino): _81.QueryPacketCommitmentResponse;
                    toAmino(message: _81.QueryPacketCommitmentResponse): _81.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _81.QueryPacketCommitmentResponseAminoMsg): _81.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _81.QueryPacketCommitmentResponse): _81.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketCommitmentResponseProtoMsg): _81.QueryPacketCommitmentResponse;
                    toProto(message: _81.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketCommitmentResponse): _81.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _81.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketCommitmentsRequest;
                    fromPartial(object: any): _81.QueryPacketCommitmentsRequest;
                    fromAmino(object: _81.QueryPacketCommitmentsRequestAmino): _81.QueryPacketCommitmentsRequest;
                    toAmino(message: _81.QueryPacketCommitmentsRequest): _81.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _81.QueryPacketCommitmentsRequestAminoMsg): _81.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _81.QueryPacketCommitmentsRequest): _81.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketCommitmentsRequestProtoMsg): _81.QueryPacketCommitmentsRequest;
                    toProto(message: _81.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketCommitmentsRequest): _81.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _81.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketCommitmentsResponse;
                    fromPartial(object: any): _81.QueryPacketCommitmentsResponse;
                    fromAmino(object: _81.QueryPacketCommitmentsResponseAmino): _81.QueryPacketCommitmentsResponse;
                    toAmino(message: _81.QueryPacketCommitmentsResponse): _81.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _81.QueryPacketCommitmentsResponseAminoMsg): _81.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _81.QueryPacketCommitmentsResponse): _81.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketCommitmentsResponseProtoMsg): _81.QueryPacketCommitmentsResponse;
                    toProto(message: _81.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketCommitmentsResponse): _81.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _81.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketReceiptRequest;
                    fromPartial(object: any): _81.QueryPacketReceiptRequest;
                    fromAmino(object: _81.QueryPacketReceiptRequestAmino): _81.QueryPacketReceiptRequest;
                    toAmino(message: _81.QueryPacketReceiptRequest): _81.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _81.QueryPacketReceiptRequestAminoMsg): _81.QueryPacketReceiptRequest;
                    toAminoMsg(message: _81.QueryPacketReceiptRequest): _81.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketReceiptRequestProtoMsg): _81.QueryPacketReceiptRequest;
                    toProto(message: _81.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketReceiptRequest): _81.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _81.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketReceiptResponse;
                    fromPartial(object: any): _81.QueryPacketReceiptResponse;
                    fromAmino(object: _81.QueryPacketReceiptResponseAmino): _81.QueryPacketReceiptResponse;
                    toAmino(message: _81.QueryPacketReceiptResponse): _81.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _81.QueryPacketReceiptResponseAminoMsg): _81.QueryPacketReceiptResponse;
                    toAminoMsg(message: _81.QueryPacketReceiptResponse): _81.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketReceiptResponseProtoMsg): _81.QueryPacketReceiptResponse;
                    toProto(message: _81.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketReceiptResponse): _81.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _81.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketAcknowledgementRequest;
                    fromPartial(object: any): _81.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _81.QueryPacketAcknowledgementRequestAmino): _81.QueryPacketAcknowledgementRequest;
                    toAmino(message: _81.QueryPacketAcknowledgementRequest): _81.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _81.QueryPacketAcknowledgementRequestAminoMsg): _81.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _81.QueryPacketAcknowledgementRequest): _81.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketAcknowledgementRequestProtoMsg): _81.QueryPacketAcknowledgementRequest;
                    toProto(message: _81.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketAcknowledgementRequest): _81.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _81.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketAcknowledgementResponse;
                    fromPartial(object: any): _81.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _81.QueryPacketAcknowledgementResponseAmino): _81.QueryPacketAcknowledgementResponse;
                    toAmino(message: _81.QueryPacketAcknowledgementResponse): _81.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _81.QueryPacketAcknowledgementResponseAminoMsg): _81.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _81.QueryPacketAcknowledgementResponse): _81.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketAcknowledgementResponseProtoMsg): _81.QueryPacketAcknowledgementResponse;
                    toProto(message: _81.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketAcknowledgementResponse): _81.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _81.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: any): _81.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _81.QueryPacketAcknowledgementsRequestAmino): _81.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _81.QueryPacketAcknowledgementsRequest): _81.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _81.QueryPacketAcknowledgementsRequestAminoMsg): _81.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _81.QueryPacketAcknowledgementsRequest): _81.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketAcknowledgementsRequestProtoMsg): _81.QueryPacketAcknowledgementsRequest;
                    toProto(message: _81.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketAcknowledgementsRequest): _81.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _81.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryPacketAcknowledgementsResponse;
                    fromPartial(object: any): _81.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _81.QueryPacketAcknowledgementsResponseAmino): _81.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _81.QueryPacketAcknowledgementsResponse): _81.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _81.QueryPacketAcknowledgementsResponseAminoMsg): _81.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _81.QueryPacketAcknowledgementsResponse): _81.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryPacketAcknowledgementsResponseProtoMsg): _81.QueryPacketAcknowledgementsResponse;
                    toProto(message: _81.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryPacketAcknowledgementsResponse): _81.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _81.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUnreceivedPacketsRequest;
                    fromPartial(object: any): _81.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _81.QueryUnreceivedPacketsRequestAmino): _81.QueryUnreceivedPacketsRequest;
                    toAmino(message: _81.QueryUnreceivedPacketsRequest): _81.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _81.QueryUnreceivedPacketsRequestAminoMsg): _81.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _81.QueryUnreceivedPacketsRequest): _81.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryUnreceivedPacketsRequestProtoMsg): _81.QueryUnreceivedPacketsRequest;
                    toProto(message: _81.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryUnreceivedPacketsRequest): _81.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _81.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUnreceivedPacketsResponse;
                    fromPartial(object: any): _81.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _81.QueryUnreceivedPacketsResponseAmino): _81.QueryUnreceivedPacketsResponse;
                    toAmino(message: _81.QueryUnreceivedPacketsResponse): _81.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _81.QueryUnreceivedPacketsResponseAminoMsg): _81.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _81.QueryUnreceivedPacketsResponse): _81.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryUnreceivedPacketsResponseProtoMsg): _81.QueryUnreceivedPacketsResponse;
                    toProto(message: _81.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryUnreceivedPacketsResponse): _81.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _81.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUnreceivedAcksRequest;
                    fromPartial(object: any): _81.QueryUnreceivedAcksRequest;
                    fromAmino(object: _81.QueryUnreceivedAcksRequestAmino): _81.QueryUnreceivedAcksRequest;
                    toAmino(message: _81.QueryUnreceivedAcksRequest): _81.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _81.QueryUnreceivedAcksRequestAminoMsg): _81.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _81.QueryUnreceivedAcksRequest): _81.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryUnreceivedAcksRequestProtoMsg): _81.QueryUnreceivedAcksRequest;
                    toProto(message: _81.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryUnreceivedAcksRequest): _81.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _81.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUnreceivedAcksResponse;
                    fromPartial(object: any): _81.QueryUnreceivedAcksResponse;
                    fromAmino(object: _81.QueryUnreceivedAcksResponseAmino): _81.QueryUnreceivedAcksResponse;
                    toAmino(message: _81.QueryUnreceivedAcksResponse): _81.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _81.QueryUnreceivedAcksResponseAminoMsg): _81.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _81.QueryUnreceivedAcksResponse): _81.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryUnreceivedAcksResponseProtoMsg): _81.QueryUnreceivedAcksResponse;
                    toProto(message: _81.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryUnreceivedAcksResponse): _81.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _81.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryNextSequenceReceiveRequest;
                    fromPartial(object: any): _81.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _81.QueryNextSequenceReceiveRequestAmino): _81.QueryNextSequenceReceiveRequest;
                    toAmino(message: _81.QueryNextSequenceReceiveRequest): _81.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _81.QueryNextSequenceReceiveRequestAminoMsg): _81.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _81.QueryNextSequenceReceiveRequest): _81.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _81.QueryNextSequenceReceiveRequestProtoMsg): _81.QueryNextSequenceReceiveRequest;
                    toProto(message: _81.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _81.QueryNextSequenceReceiveRequest): _81.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _81.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryNextSequenceReceiveResponse;
                    fromPartial(object: any): _81.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _81.QueryNextSequenceReceiveResponseAmino): _81.QueryNextSequenceReceiveResponse;
                    toAmino(message: _81.QueryNextSequenceReceiveResponse): _81.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _81.QueryNextSequenceReceiveResponseAminoMsg): _81.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _81.QueryNextSequenceReceiveResponse): _81.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _81.QueryNextSequenceReceiveResponseProtoMsg): _81.QueryNextSequenceReceiveResponse;
                    toProto(message: _81.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _81.QueryNextSequenceReceiveResponse): _81.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GenesisState;
                    fromPartial(object: any): _80.GenesisState;
                    fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                    toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                    fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                    toAminoMsg(message: _80.GenesisState): _80.GenesisStateAminoMsg;
                    fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                    toProto(message: _80.GenesisState): Uint8Array;
                    toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    encode(message: _80.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.PacketSequence;
                    fromPartial(object: any): _80.PacketSequence;
                    fromAmino(object: _80.PacketSequenceAmino): _80.PacketSequence;
                    toAmino(message: _80.PacketSequence): _80.PacketSequenceAmino;
                    fromAminoMsg(object: _80.PacketSequenceAminoMsg): _80.PacketSequence;
                    toAminoMsg(message: _80.PacketSequence): _80.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _80.PacketSequenceProtoMsg): _80.PacketSequence;
                    toProto(message: _80.PacketSequence): Uint8Array;
                    toProtoMsg(message: _80.PacketSequence): _80.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _79.State;
                stateToJSON(object: _79.State): string;
                orderFromJSON(object: any): _79.Order;
                orderToJSON(object: _79.Order): string;
                State: typeof _79.State;
                StateSDKType: typeof _79.State;
                StateAmino: typeof _79.State;
                Order: typeof _79.Order;
                OrderSDKType: typeof _79.Order;
                OrderAmino: typeof _79.Order;
                Channel: {
                    encode(message: _79.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Channel;
                    fromPartial(object: any): _79.Channel;
                    fromAmino(object: _79.ChannelAmino): _79.Channel;
                    toAmino(message: _79.Channel): _79.ChannelAmino;
                    fromAminoMsg(object: _79.ChannelAminoMsg): _79.Channel;
                    toAminoMsg(message: _79.Channel): _79.ChannelAminoMsg;
                    fromProtoMsg(message: _79.ChannelProtoMsg): _79.Channel;
                    toProto(message: _79.Channel): Uint8Array;
                    toProtoMsg(message: _79.Channel): _79.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    encode(message: _79.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.IdentifiedChannel;
                    fromPartial(object: any): _79.IdentifiedChannel;
                    fromAmino(object: _79.IdentifiedChannelAmino): _79.IdentifiedChannel;
                    toAmino(message: _79.IdentifiedChannel): _79.IdentifiedChannelAmino;
                    fromAminoMsg(object: _79.IdentifiedChannelAminoMsg): _79.IdentifiedChannel;
                    toAminoMsg(message: _79.IdentifiedChannel): _79.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _79.IdentifiedChannelProtoMsg): _79.IdentifiedChannel;
                    toProto(message: _79.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _79.IdentifiedChannel): _79.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    encode(message: _79.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Counterparty;
                    fromPartial(object: any): _79.Counterparty;
                    fromAmino(object: _79.CounterpartyAmino): _79.Counterparty;
                    toAmino(message: _79.Counterparty): _79.CounterpartyAmino;
                    fromAminoMsg(object: _79.CounterpartyAminoMsg): _79.Counterparty;
                    toAminoMsg(message: _79.Counterparty): _79.CounterpartyAminoMsg;
                    fromProtoMsg(message: _79.CounterpartyProtoMsg): _79.Counterparty;
                    toProto(message: _79.Counterparty): Uint8Array;
                    toProtoMsg(message: _79.Counterparty): _79.CounterpartyProtoMsg;
                };
                Packet: {
                    encode(message: _79.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Packet;
                    fromPartial(object: any): _79.Packet;
                    fromAmino(object: _79.PacketAmino): _79.Packet;
                    toAmino(message: _79.Packet): _79.PacketAmino;
                    fromAminoMsg(object: _79.PacketAminoMsg): _79.Packet;
                    toAminoMsg(message: _79.Packet): _79.PacketAminoMsg;
                    fromProtoMsg(message: _79.PacketProtoMsg): _79.Packet;
                    toProto(message: _79.Packet): Uint8Array;
                    toProtoMsg(message: _79.Packet): _79.PacketProtoMsg;
                };
                PacketState: {
                    encode(message: _79.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.PacketState;
                    fromPartial(object: any): _79.PacketState;
                    fromAmino(object: _79.PacketStateAmino): _79.PacketState;
                    toAmino(message: _79.PacketState): _79.PacketStateAmino;
                    fromAminoMsg(object: _79.PacketStateAminoMsg): _79.PacketState;
                    toAminoMsg(message: _79.PacketState): _79.PacketStateAminoMsg;
                    fromProtoMsg(message: _79.PacketStateProtoMsg): _79.PacketState;
                    toProto(message: _79.PacketState): Uint8Array;
                    toProtoMsg(message: _79.PacketState): _79.PacketStateProtoMsg;
                };
                PacketId: {
                    encode(message: _79.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.PacketId;
                    fromPartial(object: any): _79.PacketId;
                    fromAmino(object: _79.PacketIdAmino): _79.PacketId;
                    toAmino(message: _79.PacketId): _79.PacketIdAmino;
                    fromAminoMsg(object: _79.PacketIdAminoMsg): _79.PacketId;
                    toAminoMsg(message: _79.PacketId): _79.PacketIdAminoMsg;
                    fromProtoMsg(message: _79.PacketIdProtoMsg): _79.PacketId;
                    toProto(message: _79.PacketId): Uint8Array;
                    toProtoMsg(message: _79.PacketId): _79.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    encode(message: _79.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Acknowledgement;
                    fromPartial(object: any): _79.Acknowledgement;
                    fromAmino(object: _79.AcknowledgementAmino): _79.Acknowledgement;
                    toAmino(message: _79.Acknowledgement): _79.AcknowledgementAmino;
                    fromAminoMsg(object: _79.AcknowledgementAminoMsg): _79.Acknowledgement;
                    toAminoMsg(message: _79.Acknowledgement): _79.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _79.AcknowledgementProtoMsg): _79.Acknowledgement;
                    toProto(message: _79.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _79.Acknowledgement): _79.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _176.MsgClientImpl;
                QueryClientImpl: typeof _171.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _85.QueryClientStateRequest): Promise<_85.QueryClientStateResponse>;
                    clientStates(request?: _85.QueryClientStatesRequest): Promise<_85.QueryClientStatesResponse>;
                    consensusState(request: _85.QueryConsensusStateRequest): Promise<_85.QueryConsensusStateResponse>;
                    consensusStates(request: _85.QueryConsensusStatesRequest): Promise<_85.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _85.QueryConsensusStateHeightsRequest): Promise<_85.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _85.QueryClientStatusRequest): Promise<_85.QueryClientStatusResponse>;
                    clientParams(request?: _85.QueryClientParamsRequest): Promise<_85.QueryClientParamsResponse>;
                    upgradedClientState(request?: _85.QueryUpgradedClientStateRequest): Promise<_85.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _85.QueryUpgradedConsensusStateRequest): Promise<_85.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _165.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _86.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _86.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _86.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _86.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _86.MsgCreateClient): {
                            typeUrl: string;
                            value: _86.MsgCreateClient;
                        };
                        updateClient(value: _86.MsgUpdateClient): {
                            typeUrl: string;
                            value: _86.MsgUpdateClient;
                        };
                        upgradeClient(value: _86.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _86.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _86.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _86.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _86.MsgCreateClient): {
                            typeUrl: string;
                            value: _86.MsgCreateClient;
                        };
                        updateClient(value: _86.MsgUpdateClient): {
                            typeUrl: string;
                            value: _86.MsgUpdateClient;
                        };
                        upgradeClient(value: _86.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _86.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _86.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _86.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _86.MsgCreateClient) => _86.MsgCreateClientAmino;
                        fromAmino: (object: _86.MsgCreateClientAmino) => _86.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _86.MsgUpdateClient) => _86.MsgUpdateClientAmino;
                        fromAmino: (object: _86.MsgUpdateClientAmino) => _86.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _86.MsgUpgradeClient) => _86.MsgUpgradeClientAmino;
                        fromAmino: (object: _86.MsgUpgradeClientAmino) => _86.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _86.MsgSubmitMisbehaviour) => _86.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _86.MsgSubmitMisbehaviourAmino) => _86.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _86.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateClient;
                    fromPartial(object: any): _86.MsgCreateClient;
                    fromAmino(object: _86.MsgCreateClientAmino): _86.MsgCreateClient;
                    toAmino(message: _86.MsgCreateClient): _86.MsgCreateClientAmino;
                    fromAminoMsg(object: _86.MsgCreateClientAminoMsg): _86.MsgCreateClient;
                    toAminoMsg(message: _86.MsgCreateClient): _86.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _86.MsgCreateClientProtoMsg): _86.MsgCreateClient;
                    toProto(message: _86.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _86.MsgCreateClient): _86.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    encode(_: _86.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgCreateClientResponse;
                    fromPartial(_: any): _86.MsgCreateClientResponse;
                    fromAmino(_: _86.MsgCreateClientResponseAmino): _86.MsgCreateClientResponse;
                    toAmino(_: _86.MsgCreateClientResponse): _86.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _86.MsgCreateClientResponseAminoMsg): _86.MsgCreateClientResponse;
                    toAminoMsg(message: _86.MsgCreateClientResponse): _86.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgCreateClientResponseProtoMsg): _86.MsgCreateClientResponse;
                    toProto(message: _86.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgCreateClientResponse): _86.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    encode(message: _86.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUpdateClient;
                    fromPartial(object: any): _86.MsgUpdateClient;
                    fromAmino(object: _86.MsgUpdateClientAmino): _86.MsgUpdateClient;
                    toAmino(message: _86.MsgUpdateClient): _86.MsgUpdateClientAmino;
                    fromAminoMsg(object: _86.MsgUpdateClientAminoMsg): _86.MsgUpdateClient;
                    toAminoMsg(message: _86.MsgUpdateClient): _86.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _86.MsgUpdateClientProtoMsg): _86.MsgUpdateClient;
                    toProto(message: _86.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _86.MsgUpdateClient): _86.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    encode(_: _86.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUpdateClientResponse;
                    fromPartial(_: any): _86.MsgUpdateClientResponse;
                    fromAmino(_: _86.MsgUpdateClientResponseAmino): _86.MsgUpdateClientResponse;
                    toAmino(_: _86.MsgUpdateClientResponse): _86.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _86.MsgUpdateClientResponseAminoMsg): _86.MsgUpdateClientResponse;
                    toAminoMsg(message: _86.MsgUpdateClientResponse): _86.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgUpdateClientResponseProtoMsg): _86.MsgUpdateClientResponse;
                    toProto(message: _86.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgUpdateClientResponse): _86.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    encode(message: _86.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUpgradeClient;
                    fromPartial(object: any): _86.MsgUpgradeClient;
                    fromAmino(object: _86.MsgUpgradeClientAmino): _86.MsgUpgradeClient;
                    toAmino(message: _86.MsgUpgradeClient): _86.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _86.MsgUpgradeClientAminoMsg): _86.MsgUpgradeClient;
                    toAminoMsg(message: _86.MsgUpgradeClient): _86.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _86.MsgUpgradeClientProtoMsg): _86.MsgUpgradeClient;
                    toProto(message: _86.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _86.MsgUpgradeClient): _86.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _86.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUpgradeClientResponse;
                    fromPartial(_: any): _86.MsgUpgradeClientResponse;
                    fromAmino(_: _86.MsgUpgradeClientResponseAmino): _86.MsgUpgradeClientResponse;
                    toAmino(_: _86.MsgUpgradeClientResponse): _86.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _86.MsgUpgradeClientResponseAminoMsg): _86.MsgUpgradeClientResponse;
                    toAminoMsg(message: _86.MsgUpgradeClientResponse): _86.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgUpgradeClientResponseProtoMsg): _86.MsgUpgradeClientResponse;
                    toProto(message: _86.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgUpgradeClientResponse): _86.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _86.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgSubmitMisbehaviour;
                    fromPartial(object: any): _86.MsgSubmitMisbehaviour;
                    fromAmino(object: _86.MsgSubmitMisbehaviourAmino): _86.MsgSubmitMisbehaviour;
                    toAmino(message: _86.MsgSubmitMisbehaviour): _86.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _86.MsgSubmitMisbehaviourAminoMsg): _86.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _86.MsgSubmitMisbehaviour): _86.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _86.MsgSubmitMisbehaviourProtoMsg): _86.MsgSubmitMisbehaviour;
                    toProto(message: _86.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _86.MsgSubmitMisbehaviour): _86.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _86.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgSubmitMisbehaviourResponse;
                    fromPartial(_: any): _86.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _86.MsgSubmitMisbehaviourResponseAmino): _86.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _86.MsgSubmitMisbehaviourResponse): _86.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _86.MsgSubmitMisbehaviourResponseAminoMsg): _86.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _86.MsgSubmitMisbehaviourResponse): _86.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _86.MsgSubmitMisbehaviourResponseProtoMsg): _86.MsgSubmitMisbehaviourResponse;
                    toProto(message: _86.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _86.MsgSubmitMisbehaviourResponse): _86.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    encode(message: _85.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientStateRequest;
                    fromPartial(object: any): _85.QueryClientStateRequest;
                    fromAmino(object: _85.QueryClientStateRequestAmino): _85.QueryClientStateRequest;
                    toAmino(message: _85.QueryClientStateRequest): _85.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _85.QueryClientStateRequestAminoMsg): _85.QueryClientStateRequest;
                    toAminoMsg(message: _85.QueryClientStateRequest): _85.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryClientStateRequestProtoMsg): _85.QueryClientStateRequest;
                    toProto(message: _85.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryClientStateRequest): _85.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    encode(message: _85.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientStateResponse;
                    fromPartial(object: any): _85.QueryClientStateResponse;
                    fromAmino(object: _85.QueryClientStateResponseAmino): _85.QueryClientStateResponse;
                    toAmino(message: _85.QueryClientStateResponse): _85.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _85.QueryClientStateResponseAminoMsg): _85.QueryClientStateResponse;
                    toAminoMsg(message: _85.QueryClientStateResponse): _85.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryClientStateResponseProtoMsg): _85.QueryClientStateResponse;
                    toProto(message: _85.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryClientStateResponse): _85.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    encode(message: _85.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientStatesRequest;
                    fromPartial(object: any): _85.QueryClientStatesRequest;
                    fromAmino(object: _85.QueryClientStatesRequestAmino): _85.QueryClientStatesRequest;
                    toAmino(message: _85.QueryClientStatesRequest): _85.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _85.QueryClientStatesRequestAminoMsg): _85.QueryClientStatesRequest;
                    toAminoMsg(message: _85.QueryClientStatesRequest): _85.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryClientStatesRequestProtoMsg): _85.QueryClientStatesRequest;
                    toProto(message: _85.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryClientStatesRequest): _85.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    encode(message: _85.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientStatesResponse;
                    fromPartial(object: any): _85.QueryClientStatesResponse;
                    fromAmino(object: _85.QueryClientStatesResponseAmino): _85.QueryClientStatesResponse;
                    toAmino(message: _85.QueryClientStatesResponse): _85.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _85.QueryClientStatesResponseAminoMsg): _85.QueryClientStatesResponse;
                    toAminoMsg(message: _85.QueryClientStatesResponse): _85.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryClientStatesResponseProtoMsg): _85.QueryClientStatesResponse;
                    toProto(message: _85.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryClientStatesResponse): _85.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    encode(message: _85.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConsensusStateRequest;
                    fromPartial(object: any): _85.QueryConsensusStateRequest;
                    fromAmino(object: _85.QueryConsensusStateRequestAmino): _85.QueryConsensusStateRequest;
                    toAmino(message: _85.QueryConsensusStateRequest): _85.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _85.QueryConsensusStateRequestAminoMsg): _85.QueryConsensusStateRequest;
                    toAminoMsg(message: _85.QueryConsensusStateRequest): _85.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConsensusStateRequestProtoMsg): _85.QueryConsensusStateRequest;
                    toProto(message: _85.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConsensusStateRequest): _85.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    encode(message: _85.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConsensusStateResponse;
                    fromPartial(object: any): _85.QueryConsensusStateResponse;
                    fromAmino(object: _85.QueryConsensusStateResponseAmino): _85.QueryConsensusStateResponse;
                    toAmino(message: _85.QueryConsensusStateResponse): _85.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _85.QueryConsensusStateResponseAminoMsg): _85.QueryConsensusStateResponse;
                    toAminoMsg(message: _85.QueryConsensusStateResponse): _85.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConsensusStateResponseProtoMsg): _85.QueryConsensusStateResponse;
                    toProto(message: _85.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConsensusStateResponse): _85.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _85.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConsensusStatesRequest;
                    fromPartial(object: any): _85.QueryConsensusStatesRequest;
                    fromAmino(object: _85.QueryConsensusStatesRequestAmino): _85.QueryConsensusStatesRequest;
                    toAmino(message: _85.QueryConsensusStatesRequest): _85.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _85.QueryConsensusStatesRequestAminoMsg): _85.QueryConsensusStatesRequest;
                    toAminoMsg(message: _85.QueryConsensusStatesRequest): _85.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConsensusStatesRequestProtoMsg): _85.QueryConsensusStatesRequest;
                    toProto(message: _85.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConsensusStatesRequest): _85.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _85.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConsensusStatesResponse;
                    fromPartial(object: any): _85.QueryConsensusStatesResponse;
                    fromAmino(object: _85.QueryConsensusStatesResponseAmino): _85.QueryConsensusStatesResponse;
                    toAmino(message: _85.QueryConsensusStatesResponse): _85.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _85.QueryConsensusStatesResponseAminoMsg): _85.QueryConsensusStatesResponse;
                    toAminoMsg(message: _85.QueryConsensusStatesResponse): _85.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConsensusStatesResponseProtoMsg): _85.QueryConsensusStatesResponse;
                    toProto(message: _85.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConsensusStatesResponse): _85.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _85.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConsensusStateHeightsRequest;
                    fromPartial(object: any): _85.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _85.QueryConsensusStateHeightsRequestAmino): _85.QueryConsensusStateHeightsRequest;
                    toAmino(message: _85.QueryConsensusStateHeightsRequest): _85.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _85.QueryConsensusStateHeightsRequestAminoMsg): _85.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _85.QueryConsensusStateHeightsRequest): _85.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryConsensusStateHeightsRequestProtoMsg): _85.QueryConsensusStateHeightsRequest;
                    toProto(message: _85.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryConsensusStateHeightsRequest): _85.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _85.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryConsensusStateHeightsResponse;
                    fromPartial(object: any): _85.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _85.QueryConsensusStateHeightsResponseAmino): _85.QueryConsensusStateHeightsResponse;
                    toAmino(message: _85.QueryConsensusStateHeightsResponse): _85.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _85.QueryConsensusStateHeightsResponseAminoMsg): _85.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _85.QueryConsensusStateHeightsResponse): _85.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryConsensusStateHeightsResponseProtoMsg): _85.QueryConsensusStateHeightsResponse;
                    toProto(message: _85.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryConsensusStateHeightsResponse): _85.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    encode(message: _85.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientStatusRequest;
                    fromPartial(object: any): _85.QueryClientStatusRequest;
                    fromAmino(object: _85.QueryClientStatusRequestAmino): _85.QueryClientStatusRequest;
                    toAmino(message: _85.QueryClientStatusRequest): _85.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _85.QueryClientStatusRequestAminoMsg): _85.QueryClientStatusRequest;
                    toAminoMsg(message: _85.QueryClientStatusRequest): _85.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryClientStatusRequestProtoMsg): _85.QueryClientStatusRequest;
                    toProto(message: _85.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryClientStatusRequest): _85.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    encode(message: _85.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientStatusResponse;
                    fromPartial(object: any): _85.QueryClientStatusResponse;
                    fromAmino(object: _85.QueryClientStatusResponseAmino): _85.QueryClientStatusResponse;
                    toAmino(message: _85.QueryClientStatusResponse): _85.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _85.QueryClientStatusResponseAminoMsg): _85.QueryClientStatusResponse;
                    toAminoMsg(message: _85.QueryClientStatusResponse): _85.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryClientStatusResponseProtoMsg): _85.QueryClientStatusResponse;
                    toProto(message: _85.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryClientStatusResponse): _85.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    encode(_: _85.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientParamsRequest;
                    fromPartial(_: any): _85.QueryClientParamsRequest;
                    fromAmino(_: _85.QueryClientParamsRequestAmino): _85.QueryClientParamsRequest;
                    toAmino(_: _85.QueryClientParamsRequest): _85.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _85.QueryClientParamsRequestAminoMsg): _85.QueryClientParamsRequest;
                    toAminoMsg(message: _85.QueryClientParamsRequest): _85.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryClientParamsRequestProtoMsg): _85.QueryClientParamsRequest;
                    toProto(message: _85.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryClientParamsRequest): _85.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    encode(message: _85.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryClientParamsResponse;
                    fromPartial(object: any): _85.QueryClientParamsResponse;
                    fromAmino(object: _85.QueryClientParamsResponseAmino): _85.QueryClientParamsResponse;
                    toAmino(message: _85.QueryClientParamsResponse): _85.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _85.QueryClientParamsResponseAminoMsg): _85.QueryClientParamsResponse;
                    toAminoMsg(message: _85.QueryClientParamsResponse): _85.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryClientParamsResponseProtoMsg): _85.QueryClientParamsResponse;
                    toProto(message: _85.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryClientParamsResponse): _85.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _85.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUpgradedClientStateRequest;
                    fromPartial(_: any): _85.QueryUpgradedClientStateRequest;
                    fromAmino(_: _85.QueryUpgradedClientStateRequestAmino): _85.QueryUpgradedClientStateRequest;
                    toAmino(_: _85.QueryUpgradedClientStateRequest): _85.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _85.QueryUpgradedClientStateRequestAminoMsg): _85.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _85.QueryUpgradedClientStateRequest): _85.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryUpgradedClientStateRequestProtoMsg): _85.QueryUpgradedClientStateRequest;
                    toProto(message: _85.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryUpgradedClientStateRequest): _85.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _85.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUpgradedClientStateResponse;
                    fromPartial(object: any): _85.QueryUpgradedClientStateResponse;
                    fromAmino(object: _85.QueryUpgradedClientStateResponseAmino): _85.QueryUpgradedClientStateResponse;
                    toAmino(message: _85.QueryUpgradedClientStateResponse): _85.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _85.QueryUpgradedClientStateResponseAminoMsg): _85.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _85.QueryUpgradedClientStateResponse): _85.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryUpgradedClientStateResponseProtoMsg): _85.QueryUpgradedClientStateResponse;
                    toProto(message: _85.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryUpgradedClientStateResponse): _85.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _85.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: any): _85.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _85.QueryUpgradedConsensusStateRequestAmino): _85.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _85.QueryUpgradedConsensusStateRequest): _85.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _85.QueryUpgradedConsensusStateRequestAminoMsg): _85.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _85.QueryUpgradedConsensusStateRequest): _85.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _85.QueryUpgradedConsensusStateRequestProtoMsg): _85.QueryUpgradedConsensusStateRequest;
                    toProto(message: _85.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _85.QueryUpgradedConsensusStateRequest): _85.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _85.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryUpgradedConsensusStateResponse;
                    fromPartial(object: any): _85.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _85.QueryUpgradedConsensusStateResponseAmino): _85.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _85.QueryUpgradedConsensusStateResponse): _85.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _85.QueryUpgradedConsensusStateResponseAminoMsg): _85.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _85.QueryUpgradedConsensusStateResponse): _85.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _85.QueryUpgradedConsensusStateResponseProtoMsg): _85.QueryUpgradedConsensusStateResponse;
                    toProto(message: _85.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _85.QueryUpgradedConsensusStateResponse): _85.QueryUpgradedConsensusStateResponseProtoMsg;
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
                GenesisMetadata: {
                    encode(message: _84.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.GenesisMetadata;
                    fromPartial(object: any): _84.GenesisMetadata;
                    fromAmino(object: _84.GenesisMetadataAmino): _84.GenesisMetadata;
                    toAmino(message: _84.GenesisMetadata): _84.GenesisMetadataAmino;
                    fromAminoMsg(object: _84.GenesisMetadataAminoMsg): _84.GenesisMetadata;
                    toAminoMsg(message: _84.GenesisMetadata): _84.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _84.GenesisMetadataProtoMsg): _84.GenesisMetadata;
                    toProto(message: _84.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _84.GenesisMetadata): _84.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _84.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.IdentifiedGenesisMetadata;
                    fromPartial(object: any): _84.IdentifiedGenesisMetadata;
                    fromAmino(object: _84.IdentifiedGenesisMetadataAmino): _84.IdentifiedGenesisMetadata;
                    toAmino(message: _84.IdentifiedGenesisMetadata): _84.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _84.IdentifiedGenesisMetadataAminoMsg): _84.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _84.IdentifiedGenesisMetadata): _84.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _84.IdentifiedGenesisMetadataProtoMsg): _84.IdentifiedGenesisMetadata;
                    toProto(message: _84.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _84.IdentifiedGenesisMetadata): _84.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    encode(message: _83.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.IdentifiedClientState;
                    fromPartial(object: any): _83.IdentifiedClientState;
                    fromAmino(object: _83.IdentifiedClientStateAmino): _83.IdentifiedClientState;
                    toAmino(message: _83.IdentifiedClientState): _83.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _83.IdentifiedClientStateAminoMsg): _83.IdentifiedClientState;
                    toAminoMsg(message: _83.IdentifiedClientState): _83.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _83.IdentifiedClientStateProtoMsg): _83.IdentifiedClientState;
                    toProto(message: _83.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _83.IdentifiedClientState): _83.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    encode(message: _83.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusStateWithHeight;
                    fromPartial(object: any): _83.ConsensusStateWithHeight;
                    fromAmino(object: _83.ConsensusStateWithHeightAmino): _83.ConsensusStateWithHeight;
                    toAmino(message: _83.ConsensusStateWithHeight): _83.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _83.ConsensusStateWithHeightAminoMsg): _83.ConsensusStateWithHeight;
                    toAminoMsg(message: _83.ConsensusStateWithHeight): _83.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _83.ConsensusStateWithHeightProtoMsg): _83.ConsensusStateWithHeight;
                    toProto(message: _83.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _83.ConsensusStateWithHeight): _83.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    encode(message: _83.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientConsensusStates;
                    fromPartial(object: any): _83.ClientConsensusStates;
                    fromAmino(object: _83.ClientConsensusStatesAmino): _83.ClientConsensusStates;
                    toAmino(message: _83.ClientConsensusStates): _83.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _83.ClientConsensusStatesAminoMsg): _83.ClientConsensusStates;
                    toAminoMsg(message: _83.ClientConsensusStates): _83.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _83.ClientConsensusStatesProtoMsg): _83.ClientConsensusStates;
                    toProto(message: _83.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _83.ClientConsensusStates): _83.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    encode(message: _83.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ClientUpdateProposal;
                    fromPartial(object: any): _83.ClientUpdateProposal;
                    fromAmino(object: _83.ClientUpdateProposalAmino): _83.ClientUpdateProposal;
                    toAmino(message: _83.ClientUpdateProposal): _83.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _83.ClientUpdateProposalAminoMsg): _83.ClientUpdateProposal;
                    toAminoMsg(message: _83.ClientUpdateProposal): _83.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _83.ClientUpdateProposalProtoMsg): _83.ClientUpdateProposal;
                    toProto(message: _83.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _83.ClientUpdateProposal): _83.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    encode(message: _83.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.UpgradeProposal;
                    fromPartial(object: any): _83.UpgradeProposal;
                    fromAmino(object: _83.UpgradeProposalAmino): _83.UpgradeProposal;
                    toAmino(message: _83.UpgradeProposal): _83.UpgradeProposalAmino;
                    fromAminoMsg(object: _83.UpgradeProposalAminoMsg): _83.UpgradeProposal;
                    toAminoMsg(message: _83.UpgradeProposal): _83.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _83.UpgradeProposalProtoMsg): _83.UpgradeProposal;
                    toProto(message: _83.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _83.UpgradeProposal): _83.UpgradeProposalProtoMsg;
                };
                Height: {
                    encode(message: _83.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Height;
                    fromPartial(object: any): _83.Height;
                    fromAmino(object: _83.HeightAmino): _83.Height;
                    toAmino(message: _83.Height): _83.HeightAmino;
                    fromAminoMsg(object: _83.HeightAminoMsg): _83.Height;
                    toAminoMsg(message: _83.Height): _83.HeightAminoMsg;
                    fromProtoMsg(message: _83.HeightProtoMsg): _83.Height;
                    toProto(message: _83.Height): Uint8Array;
                    toProtoMsg(message: _83.Height): _83.HeightProtoMsg;
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
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _87.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MerkleRoot;
                    fromPartial(object: any): _87.MerkleRoot;
                    fromAmino(object: _87.MerkleRootAmino): _87.MerkleRoot;
                    toAmino(message: _87.MerkleRoot): _87.MerkleRootAmino;
                    fromAminoMsg(object: _87.MerkleRootAminoMsg): _87.MerkleRoot;
                    toAminoMsg(message: _87.MerkleRoot): _87.MerkleRootAminoMsg;
                    fromProtoMsg(message: _87.MerkleRootProtoMsg): _87.MerkleRoot;
                    toProto(message: _87.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _87.MerkleRoot): _87.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    encode(message: _87.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MerklePrefix;
                    fromPartial(object: any): _87.MerklePrefix;
                    fromAmino(object: _87.MerklePrefixAmino): _87.MerklePrefix;
                    toAmino(message: _87.MerklePrefix): _87.MerklePrefixAmino;
                    fromAminoMsg(object: _87.MerklePrefixAminoMsg): _87.MerklePrefix;
                    toAminoMsg(message: _87.MerklePrefix): _87.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _87.MerklePrefixProtoMsg): _87.MerklePrefix;
                    toProto(message: _87.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _87.MerklePrefix): _87.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    encode(message: _87.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MerklePath;
                    fromPartial(object: any): _87.MerklePath;
                    fromAmino(object: _87.MerklePathAmino): _87.MerklePath;
                    toAmino(message: _87.MerklePath): _87.MerklePathAmino;
                    fromAminoMsg(object: _87.MerklePathAminoMsg): _87.MerklePath;
                    toAminoMsg(message: _87.MerklePath): _87.MerklePathAminoMsg;
                    fromProtoMsg(message: _87.MerklePathProtoMsg): _87.MerklePath;
                    toProto(message: _87.MerklePath): Uint8Array;
                    toProtoMsg(message: _87.MerklePath): _87.MerklePathProtoMsg;
                };
                MerkleProof: {
                    encode(_: _87.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MerkleProof;
                    fromPartial(_: any): _87.MerkleProof;
                    fromAmino(_: _87.MerkleProofAmino): _87.MerkleProof;
                    toAmino(_: _87.MerkleProof): _87.MerkleProofAmino;
                    fromAminoMsg(object: _87.MerkleProofAminoMsg): _87.MerkleProof;
                    toAminoMsg(message: _87.MerkleProof): _87.MerkleProofAminoMsg;
                    fromProtoMsg(message: _87.MerkleProofProtoMsg): _87.MerkleProof;
                    toProto(message: _87.MerkleProof): Uint8Array;
                    toProtoMsg(message: _87.MerkleProof): _87.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _177.MsgClientImpl;
                QueryClientImpl: typeof _172.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _90.QueryConnectionRequest): Promise<_90.QueryConnectionResponse>;
                    connections(request?: _90.QueryConnectionsRequest): Promise<_90.QueryConnectionsResponse>;
                    clientConnections(request: _90.QueryClientConnectionsRequest): Promise<_90.QueryClientConnectionsResponse>;
                    connectionClientState(request: _90.QueryConnectionClientStateRequest): Promise<_90.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _90.QueryConnectionConsensusStateRequest): Promise<_90.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _90.QueryConnectionParamsRequest): Promise<_90.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _166.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _91.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _91.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _91.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _91.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _91.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _91.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _91.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _91.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _91.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _91.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _91.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _91.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _91.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _91.MsgConnectionOpenInit) => _91.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _91.MsgConnectionOpenInitAmino) => _91.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _91.MsgConnectionOpenTry) => _91.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _91.MsgConnectionOpenTryAmino) => _91.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _91.MsgConnectionOpenAck) => _91.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _91.MsgConnectionOpenAckAmino) => _91.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _91.MsgConnectionOpenConfirm) => _91.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _91.MsgConnectionOpenConfirmAmino) => _91.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _91.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenInit;
                    fromPartial(object: any): _91.MsgConnectionOpenInit;
                    fromAmino(object: _91.MsgConnectionOpenInitAmino): _91.MsgConnectionOpenInit;
                    toAmino(message: _91.MsgConnectionOpenInit): _91.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenInitAminoMsg): _91.MsgConnectionOpenInit;
                    toAminoMsg(message: _91.MsgConnectionOpenInit): _91.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenInitProtoMsg): _91.MsgConnectionOpenInit;
                    toProto(message: _91.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenInit): _91.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _91.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenInitResponse;
                    fromPartial(_: any): _91.MsgConnectionOpenInitResponse;
                    fromAmino(_: _91.MsgConnectionOpenInitResponseAmino): _91.MsgConnectionOpenInitResponse;
                    toAmino(_: _91.MsgConnectionOpenInitResponse): _91.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenInitResponseAminoMsg): _91.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _91.MsgConnectionOpenInitResponse): _91.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenInitResponseProtoMsg): _91.MsgConnectionOpenInitResponse;
                    toProto(message: _91.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenInitResponse): _91.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    encode(message: _91.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenTry;
                    fromPartial(object: any): _91.MsgConnectionOpenTry;
                    fromAmino(object: _91.MsgConnectionOpenTryAmino): _91.MsgConnectionOpenTry;
                    toAmino(message: _91.MsgConnectionOpenTry): _91.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenTryAminoMsg): _91.MsgConnectionOpenTry;
                    toAminoMsg(message: _91.MsgConnectionOpenTry): _91.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenTryProtoMsg): _91.MsgConnectionOpenTry;
                    toProto(message: _91.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenTry): _91.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _91.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenTryResponse;
                    fromPartial(_: any): _91.MsgConnectionOpenTryResponse;
                    fromAmino(_: _91.MsgConnectionOpenTryResponseAmino): _91.MsgConnectionOpenTryResponse;
                    toAmino(_: _91.MsgConnectionOpenTryResponse): _91.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenTryResponseAminoMsg): _91.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _91.MsgConnectionOpenTryResponse): _91.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenTryResponseProtoMsg): _91.MsgConnectionOpenTryResponse;
                    toProto(message: _91.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenTryResponse): _91.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    encode(message: _91.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenAck;
                    fromPartial(object: any): _91.MsgConnectionOpenAck;
                    fromAmino(object: _91.MsgConnectionOpenAckAmino): _91.MsgConnectionOpenAck;
                    toAmino(message: _91.MsgConnectionOpenAck): _91.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenAckAminoMsg): _91.MsgConnectionOpenAck;
                    toAminoMsg(message: _91.MsgConnectionOpenAck): _91.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenAckProtoMsg): _91.MsgConnectionOpenAck;
                    toProto(message: _91.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenAck): _91.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _91.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenAckResponse;
                    fromPartial(_: any): _91.MsgConnectionOpenAckResponse;
                    fromAmino(_: _91.MsgConnectionOpenAckResponseAmino): _91.MsgConnectionOpenAckResponse;
                    toAmino(_: _91.MsgConnectionOpenAckResponse): _91.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenAckResponseAminoMsg): _91.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _91.MsgConnectionOpenAckResponse): _91.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenAckResponseProtoMsg): _91.MsgConnectionOpenAckResponse;
                    toProto(message: _91.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenAckResponse): _91.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _91.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenConfirm;
                    fromPartial(object: any): _91.MsgConnectionOpenConfirm;
                    fromAmino(object: _91.MsgConnectionOpenConfirmAmino): _91.MsgConnectionOpenConfirm;
                    toAmino(message: _91.MsgConnectionOpenConfirm): _91.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenConfirmAminoMsg): _91.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _91.MsgConnectionOpenConfirm): _91.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenConfirmProtoMsg): _91.MsgConnectionOpenConfirm;
                    toProto(message: _91.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenConfirm): _91.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _91.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgConnectionOpenConfirmResponse;
                    fromPartial(_: any): _91.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _91.MsgConnectionOpenConfirmResponseAmino): _91.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _91.MsgConnectionOpenConfirmResponse): _91.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _91.MsgConnectionOpenConfirmResponseAminoMsg): _91.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _91.MsgConnectionOpenConfirmResponse): _91.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _91.MsgConnectionOpenConfirmResponseProtoMsg): _91.MsgConnectionOpenConfirmResponse;
                    toProto(message: _91.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _91.MsgConnectionOpenConfirmResponse): _91.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    encode(message: _90.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionRequest;
                    fromPartial(object: any): _90.QueryConnectionRequest;
                    fromAmino(object: _90.QueryConnectionRequestAmino): _90.QueryConnectionRequest;
                    toAmino(message: _90.QueryConnectionRequest): _90.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _90.QueryConnectionRequestAminoMsg): _90.QueryConnectionRequest;
                    toAminoMsg(message: _90.QueryConnectionRequest): _90.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionRequestProtoMsg): _90.QueryConnectionRequest;
                    toProto(message: _90.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionRequest): _90.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    encode(message: _90.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionResponse;
                    fromPartial(object: any): _90.QueryConnectionResponse;
                    fromAmino(object: _90.QueryConnectionResponseAmino): _90.QueryConnectionResponse;
                    toAmino(message: _90.QueryConnectionResponse): _90.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _90.QueryConnectionResponseAminoMsg): _90.QueryConnectionResponse;
                    toAminoMsg(message: _90.QueryConnectionResponse): _90.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionResponseProtoMsg): _90.QueryConnectionResponse;
                    toProto(message: _90.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionResponse): _90.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    encode(message: _90.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionsRequest;
                    fromPartial(object: any): _90.QueryConnectionsRequest;
                    fromAmino(object: _90.QueryConnectionsRequestAmino): _90.QueryConnectionsRequest;
                    toAmino(message: _90.QueryConnectionsRequest): _90.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _90.QueryConnectionsRequestAminoMsg): _90.QueryConnectionsRequest;
                    toAminoMsg(message: _90.QueryConnectionsRequest): _90.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionsRequestProtoMsg): _90.QueryConnectionsRequest;
                    toProto(message: _90.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionsRequest): _90.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    encode(message: _90.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionsResponse;
                    fromPartial(object: any): _90.QueryConnectionsResponse;
                    fromAmino(object: _90.QueryConnectionsResponseAmino): _90.QueryConnectionsResponse;
                    toAmino(message: _90.QueryConnectionsResponse): _90.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _90.QueryConnectionsResponseAminoMsg): _90.QueryConnectionsResponse;
                    toAminoMsg(message: _90.QueryConnectionsResponse): _90.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionsResponseProtoMsg): _90.QueryConnectionsResponse;
                    toProto(message: _90.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionsResponse): _90.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _90.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClientConnectionsRequest;
                    fromPartial(object: any): _90.QueryClientConnectionsRequest;
                    fromAmino(object: _90.QueryClientConnectionsRequestAmino): _90.QueryClientConnectionsRequest;
                    toAmino(message: _90.QueryClientConnectionsRequest): _90.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _90.QueryClientConnectionsRequestAminoMsg): _90.QueryClientConnectionsRequest;
                    toAminoMsg(message: _90.QueryClientConnectionsRequest): _90.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _90.QueryClientConnectionsRequestProtoMsg): _90.QueryClientConnectionsRequest;
                    toProto(message: _90.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _90.QueryClientConnectionsRequest): _90.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _90.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryClientConnectionsResponse;
                    fromPartial(object: any): _90.QueryClientConnectionsResponse;
                    fromAmino(object: _90.QueryClientConnectionsResponseAmino): _90.QueryClientConnectionsResponse;
                    toAmino(message: _90.QueryClientConnectionsResponse): _90.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _90.QueryClientConnectionsResponseAminoMsg): _90.QueryClientConnectionsResponse;
                    toAminoMsg(message: _90.QueryClientConnectionsResponse): _90.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _90.QueryClientConnectionsResponseProtoMsg): _90.QueryClientConnectionsResponse;
                    toProto(message: _90.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _90.QueryClientConnectionsResponse): _90.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _90.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionClientStateRequest;
                    fromPartial(object: any): _90.QueryConnectionClientStateRequest;
                    fromAmino(object: _90.QueryConnectionClientStateRequestAmino): _90.QueryConnectionClientStateRequest;
                    toAmino(message: _90.QueryConnectionClientStateRequest): _90.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _90.QueryConnectionClientStateRequestAminoMsg): _90.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _90.QueryConnectionClientStateRequest): _90.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionClientStateRequestProtoMsg): _90.QueryConnectionClientStateRequest;
                    toProto(message: _90.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionClientStateRequest): _90.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _90.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionClientStateResponse;
                    fromPartial(object: any): _90.QueryConnectionClientStateResponse;
                    fromAmino(object: _90.QueryConnectionClientStateResponseAmino): _90.QueryConnectionClientStateResponse;
                    toAmino(message: _90.QueryConnectionClientStateResponse): _90.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _90.QueryConnectionClientStateResponseAminoMsg): _90.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _90.QueryConnectionClientStateResponse): _90.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionClientStateResponseProtoMsg): _90.QueryConnectionClientStateResponse;
                    toProto(message: _90.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionClientStateResponse): _90.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _90.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionConsensusStateRequest;
                    fromPartial(object: any): _90.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _90.QueryConnectionConsensusStateRequestAmino): _90.QueryConnectionConsensusStateRequest;
                    toAmino(message: _90.QueryConnectionConsensusStateRequest): _90.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _90.QueryConnectionConsensusStateRequestAminoMsg): _90.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _90.QueryConnectionConsensusStateRequest): _90.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionConsensusStateRequestProtoMsg): _90.QueryConnectionConsensusStateRequest;
                    toProto(message: _90.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionConsensusStateRequest): _90.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _90.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionConsensusStateResponse;
                    fromPartial(object: any): _90.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _90.QueryConnectionConsensusStateResponseAmino): _90.QueryConnectionConsensusStateResponse;
                    toAmino(message: _90.QueryConnectionConsensusStateResponse): _90.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _90.QueryConnectionConsensusStateResponseAminoMsg): _90.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _90.QueryConnectionConsensusStateResponse): _90.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionConsensusStateResponseProtoMsg): _90.QueryConnectionConsensusStateResponse;
                    toProto(message: _90.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionConsensusStateResponse): _90.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    encode(_: _90.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionParamsRequest;
                    fromPartial(_: any): _90.QueryConnectionParamsRequest;
                    fromAmino(_: _90.QueryConnectionParamsRequestAmino): _90.QueryConnectionParamsRequest;
                    toAmino(_: _90.QueryConnectionParamsRequest): _90.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _90.QueryConnectionParamsRequestAminoMsg): _90.QueryConnectionParamsRequest;
                    toAminoMsg(message: _90.QueryConnectionParamsRequest): _90.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionParamsRequestProtoMsg): _90.QueryConnectionParamsRequest;
                    toProto(message: _90.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionParamsRequest): _90.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    encode(message: _90.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.QueryConnectionParamsResponse;
                    fromPartial(object: any): _90.QueryConnectionParamsResponse;
                    fromAmino(object: _90.QueryConnectionParamsResponseAmino): _90.QueryConnectionParamsResponse;
                    toAmino(message: _90.QueryConnectionParamsResponse): _90.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _90.QueryConnectionParamsResponseAminoMsg): _90.QueryConnectionParamsResponse;
                    toAminoMsg(message: _90.QueryConnectionParamsResponse): _90.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _90.QueryConnectionParamsResponseProtoMsg): _90.QueryConnectionParamsResponse;
                    toProto(message: _90.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _90.QueryConnectionParamsResponse): _90.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    encode(message: _89.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.GenesisState;
                    fromPartial(object: any): _89.GenesisState;
                    fromAmino(object: _89.GenesisStateAmino): _89.GenesisState;
                    toAmino(message: _89.GenesisState): _89.GenesisStateAmino;
                    fromAminoMsg(object: _89.GenesisStateAminoMsg): _89.GenesisState;
                    toAminoMsg(message: _89.GenesisState): _89.GenesisStateAminoMsg;
                    fromProtoMsg(message: _89.GenesisStateProtoMsg): _89.GenesisState;
                    toProto(message: _89.GenesisState): Uint8Array;
                    toProtoMsg(message: _89.GenesisState): _89.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _88.State;
                stateToJSON(object: _88.State): string;
                State: typeof _88.State;
                StateSDKType: typeof _88.State;
                StateAmino: typeof _88.State;
                ConnectionEnd: {
                    encode(message: _88.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConnectionEnd;
                    fromPartial(object: any): _88.ConnectionEnd;
                    fromAmino(object: _88.ConnectionEndAmino): _88.ConnectionEnd;
                    toAmino(message: _88.ConnectionEnd): _88.ConnectionEndAmino;
                    fromAminoMsg(object: _88.ConnectionEndAminoMsg): _88.ConnectionEnd;
                    toAminoMsg(message: _88.ConnectionEnd): _88.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _88.ConnectionEndProtoMsg): _88.ConnectionEnd;
                    toProto(message: _88.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _88.ConnectionEnd): _88.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    encode(message: _88.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.IdentifiedConnection;
                    fromPartial(object: any): _88.IdentifiedConnection;
                    fromAmino(object: _88.IdentifiedConnectionAmino): _88.IdentifiedConnection;
                    toAmino(message: _88.IdentifiedConnection): _88.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _88.IdentifiedConnectionAminoMsg): _88.IdentifiedConnection;
                    toAminoMsg(message: _88.IdentifiedConnection): _88.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _88.IdentifiedConnectionProtoMsg): _88.IdentifiedConnection;
                    toProto(message: _88.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _88.IdentifiedConnection): _88.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    encode(message: _88.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Counterparty;
                    fromPartial(object: any): _88.Counterparty;
                    fromAmino(object: _88.CounterpartyAmino): _88.Counterparty;
                    toAmino(message: _88.Counterparty): _88.CounterpartyAmino;
                    fromAminoMsg(object: _88.CounterpartyAminoMsg): _88.Counterparty;
                    toAminoMsg(message: _88.Counterparty): _88.CounterpartyAminoMsg;
                    fromProtoMsg(message: _88.CounterpartyProtoMsg): _88.Counterparty;
                    toProto(message: _88.Counterparty): Uint8Array;
                    toProtoMsg(message: _88.Counterparty): _88.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    encode(message: _88.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClientPaths;
                    fromPartial(object: any): _88.ClientPaths;
                    fromAmino(object: _88.ClientPathsAmino): _88.ClientPaths;
                    toAmino(message: _88.ClientPaths): _88.ClientPathsAmino;
                    fromAminoMsg(object: _88.ClientPathsAminoMsg): _88.ClientPaths;
                    toAminoMsg(message: _88.ClientPaths): _88.ClientPathsAminoMsg;
                    fromProtoMsg(message: _88.ClientPathsProtoMsg): _88.ClientPaths;
                    toProto(message: _88.ClientPaths): Uint8Array;
                    toProtoMsg(message: _88.ClientPaths): _88.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    encode(message: _88.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ConnectionPaths;
                    fromPartial(object: any): _88.ConnectionPaths;
                    fromAmino(object: _88.ConnectionPathsAmino): _88.ConnectionPaths;
                    toAmino(message: _88.ConnectionPaths): _88.ConnectionPathsAmino;
                    fromAminoMsg(object: _88.ConnectionPathsAminoMsg): _88.ConnectionPaths;
                    toAminoMsg(message: _88.ConnectionPaths): _88.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _88.ConnectionPathsProtoMsg): _88.ConnectionPaths;
                    toProto(message: _88.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _88.ConnectionPaths): _88.ConnectionPathsProtoMsg;
                };
                Version: {
                    encode(message: _88.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Version;
                    fromPartial(object: any): _88.Version;
                    fromAmino(object: _88.VersionAmino): _88.Version;
                    toAmino(message: _88.Version): _88.VersionAmino;
                    fromAminoMsg(object: _88.VersionAminoMsg): _88.Version;
                    toAminoMsg(message: _88.Version): _88.VersionAminoMsg;
                    fromProtoMsg(message: _88.VersionProtoMsg): _88.Version;
                    toProto(message: _88.Version): Uint8Array;
                    toProtoMsg(message: _88.Version): _88.VersionProtoMsg;
                };
                Params: {
                    encode(message: _88.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Params;
                    fromPartial(object: any): _88.Params;
                    fromAmino(object: _88.ParamsAmino): _88.Params;
                    toAmino(message: _88.Params): _88.ParamsAmino;
                    fromAminoMsg(object: _88.ParamsAminoMsg): _88.Params;
                    toAminoMsg(message: _88.Params): _88.ParamsAminoMsg;
                    fromProtoMsg(message: _88.ParamsProtoMsg): _88.Params;
                    toProto(message: _88.Params): Uint8Array;
                    toProtoMsg(message: _88.Params): _88.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _92.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ClientState;
                    fromPartial(object: any): _92.ClientState;
                    fromAmino(object: _92.ClientStateAmino): _92.ClientState;
                    toAmino(message: _92.ClientState): _92.ClientStateAmino;
                    fromAminoMsg(object: _92.ClientStateAminoMsg): _92.ClientState;
                    toAminoMsg(message: _92.ClientState): _92.ClientStateAminoMsg;
                    fromProtoMsg(message: _92.ClientStateProtoMsg): _92.ClientState;
                    toProto(message: _92.ClientState): Uint8Array;
                    toProtoMsg(message: _92.ClientState): _92.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _93.DataType;
                dataTypeToJSON(object: _93.DataType): string;
                DataType: typeof _93.DataType;
                DataTypeSDKType: typeof _93.DataType;
                DataTypeAmino: typeof _93.DataType;
                ClientState: {
                    encode(message: _93.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ClientState;
                    fromPartial(object: any): _93.ClientState;
                    fromAmino(object: _93.ClientStateAmino): _93.ClientState;
                    toAmino(message: _93.ClientState): _93.ClientStateAmino;
                    fromAminoMsg(object: _93.ClientStateAminoMsg): _93.ClientState;
                    toAminoMsg(message: _93.ClientState): _93.ClientStateAminoMsg;
                    fromProtoMsg(message: _93.ClientStateProtoMsg): _93.ClientState;
                    toProto(message: _93.ClientState): Uint8Array;
                    toProtoMsg(message: _93.ClientState): _93.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _93.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ConsensusState;
                    fromPartial(object: any): _93.ConsensusState;
                    fromAmino(object: _93.ConsensusStateAmino): _93.ConsensusState;
                    toAmino(message: _93.ConsensusState): _93.ConsensusStateAmino;
                    fromAminoMsg(object: _93.ConsensusStateAminoMsg): _93.ConsensusState;
                    toAminoMsg(message: _93.ConsensusState): _93.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _93.ConsensusStateProtoMsg): _93.ConsensusState;
                    toProto(message: _93.ConsensusState): Uint8Array;
                    toProtoMsg(message: _93.ConsensusState): _93.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _93.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Header;
                    fromPartial(object: any): _93.Header;
                    fromAmino(object: _93.HeaderAmino): _93.Header;
                    toAmino(message: _93.Header): _93.HeaderAmino;
                    fromAminoMsg(object: _93.HeaderAminoMsg): _93.Header;
                    toAminoMsg(message: _93.Header): _93.HeaderAminoMsg;
                    fromProtoMsg(message: _93.HeaderProtoMsg): _93.Header;
                    toProto(message: _93.Header): Uint8Array;
                    toProtoMsg(message: _93.Header): _93.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _93.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Misbehaviour;
                    fromPartial(object: any): _93.Misbehaviour;
                    fromAmino(object: _93.MisbehaviourAmino): _93.Misbehaviour;
                    toAmino(message: _93.Misbehaviour): _93.MisbehaviourAmino;
                    fromAminoMsg(object: _93.MisbehaviourAminoMsg): _93.Misbehaviour;
                    toAminoMsg(message: _93.Misbehaviour): _93.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _93.MisbehaviourProtoMsg): _93.Misbehaviour;
                    toProto(message: _93.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _93.Misbehaviour): _93.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _93.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SignatureAndData;
                    fromPartial(object: any): _93.SignatureAndData;
                    fromAmino(object: _93.SignatureAndDataAmino): _93.SignatureAndData;
                    toAmino(message: _93.SignatureAndData): _93.SignatureAndDataAmino;
                    fromAminoMsg(object: _93.SignatureAndDataAminoMsg): _93.SignatureAndData;
                    toAminoMsg(message: _93.SignatureAndData): _93.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _93.SignatureAndDataProtoMsg): _93.SignatureAndData;
                    toProto(message: _93.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _93.SignatureAndData): _93.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _93.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.TimestampedSignatureData;
                    fromPartial(object: any): _93.TimestampedSignatureData;
                    fromAmino(object: _93.TimestampedSignatureDataAmino): _93.TimestampedSignatureData;
                    toAmino(message: _93.TimestampedSignatureData): _93.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _93.TimestampedSignatureDataAminoMsg): _93.TimestampedSignatureData;
                    toAminoMsg(message: _93.TimestampedSignatureData): _93.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _93.TimestampedSignatureDataProtoMsg): _93.TimestampedSignatureData;
                    toProto(message: _93.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _93.TimestampedSignatureData): _93.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _93.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SignBytes;
                    fromPartial(object: any): _93.SignBytes;
                    fromAmino(object: _93.SignBytesAmino): _93.SignBytes;
                    toAmino(message: _93.SignBytes): _93.SignBytesAmino;
                    fromAminoMsg(object: _93.SignBytesAminoMsg): _93.SignBytes;
                    toAminoMsg(message: _93.SignBytes): _93.SignBytesAminoMsg;
                    fromProtoMsg(message: _93.SignBytesProtoMsg): _93.SignBytes;
                    toProto(message: _93.SignBytes): Uint8Array;
                    toProtoMsg(message: _93.SignBytes): _93.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _93.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.HeaderData;
                    fromPartial(object: any): _93.HeaderData;
                    fromAmino(object: _93.HeaderDataAmino): _93.HeaderData;
                    toAmino(message: _93.HeaderData): _93.HeaderDataAmino;
                    fromAminoMsg(object: _93.HeaderDataAminoMsg): _93.HeaderData;
                    toAminoMsg(message: _93.HeaderData): _93.HeaderDataAminoMsg;
                    fromProtoMsg(message: _93.HeaderDataProtoMsg): _93.HeaderData;
                    toProto(message: _93.HeaderData): Uint8Array;
                    toProtoMsg(message: _93.HeaderData): _93.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _93.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ClientStateData;
                    fromPartial(object: any): _93.ClientStateData;
                    fromAmino(object: _93.ClientStateDataAmino): _93.ClientStateData;
                    toAmino(message: _93.ClientStateData): _93.ClientStateDataAmino;
                    fromAminoMsg(object: _93.ClientStateDataAminoMsg): _93.ClientStateData;
                    toAminoMsg(message: _93.ClientStateData): _93.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _93.ClientStateDataProtoMsg): _93.ClientStateData;
                    toProto(message: _93.ClientStateData): Uint8Array;
                    toProtoMsg(message: _93.ClientStateData): _93.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _93.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ConsensusStateData;
                    fromPartial(object: any): _93.ConsensusStateData;
                    fromAmino(object: _93.ConsensusStateDataAmino): _93.ConsensusStateData;
                    toAmino(message: _93.ConsensusStateData): _93.ConsensusStateDataAmino;
                    fromAminoMsg(object: _93.ConsensusStateDataAminoMsg): _93.ConsensusStateData;
                    toAminoMsg(message: _93.ConsensusStateData): _93.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _93.ConsensusStateDataProtoMsg): _93.ConsensusStateData;
                    toProto(message: _93.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _93.ConsensusStateData): _93.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _93.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ConnectionStateData;
                    fromPartial(object: any): _93.ConnectionStateData;
                    fromAmino(object: _93.ConnectionStateDataAmino): _93.ConnectionStateData;
                    toAmino(message: _93.ConnectionStateData): _93.ConnectionStateDataAmino;
                    fromAminoMsg(object: _93.ConnectionStateDataAminoMsg): _93.ConnectionStateData;
                    toAminoMsg(message: _93.ConnectionStateData): _93.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _93.ConnectionStateDataProtoMsg): _93.ConnectionStateData;
                    toProto(message: _93.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _93.ConnectionStateData): _93.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _93.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ChannelStateData;
                    fromPartial(object: any): _93.ChannelStateData;
                    fromAmino(object: _93.ChannelStateDataAmino): _93.ChannelStateData;
                    toAmino(message: _93.ChannelStateData): _93.ChannelStateDataAmino;
                    fromAminoMsg(object: _93.ChannelStateDataAminoMsg): _93.ChannelStateData;
                    toAminoMsg(message: _93.ChannelStateData): _93.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _93.ChannelStateDataProtoMsg): _93.ChannelStateData;
                    toProto(message: _93.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _93.ChannelStateData): _93.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _93.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PacketCommitmentData;
                    fromPartial(object: any): _93.PacketCommitmentData;
                    fromAmino(object: _93.PacketCommitmentDataAmino): _93.PacketCommitmentData;
                    toAmino(message: _93.PacketCommitmentData): _93.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _93.PacketCommitmentDataAminoMsg): _93.PacketCommitmentData;
                    toAminoMsg(message: _93.PacketCommitmentData): _93.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _93.PacketCommitmentDataProtoMsg): _93.PacketCommitmentData;
                    toProto(message: _93.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _93.PacketCommitmentData): _93.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _93.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PacketAcknowledgementData;
                    fromPartial(object: any): _93.PacketAcknowledgementData;
                    fromAmino(object: _93.PacketAcknowledgementDataAmino): _93.PacketAcknowledgementData;
                    toAmino(message: _93.PacketAcknowledgementData): _93.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _93.PacketAcknowledgementDataAminoMsg): _93.PacketAcknowledgementData;
                    toAminoMsg(message: _93.PacketAcknowledgementData): _93.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _93.PacketAcknowledgementDataProtoMsg): _93.PacketAcknowledgementData;
                    toProto(message: _93.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _93.PacketAcknowledgementData): _93.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _93.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PacketReceiptAbsenceData;
                    fromPartial(object: any): _93.PacketReceiptAbsenceData;
                    fromAmino(object: _93.PacketReceiptAbsenceDataAmino): _93.PacketReceiptAbsenceData;
                    toAmino(message: _93.PacketReceiptAbsenceData): _93.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _93.PacketReceiptAbsenceDataAminoMsg): _93.PacketReceiptAbsenceData;
                    toAminoMsg(message: _93.PacketReceiptAbsenceData): _93.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _93.PacketReceiptAbsenceDataProtoMsg): _93.PacketReceiptAbsenceData;
                    toProto(message: _93.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _93.PacketReceiptAbsenceData): _93.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _93.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.NextSequenceRecvData;
                    fromPartial(object: any): _93.NextSequenceRecvData;
                    fromAmino(object: _93.NextSequenceRecvDataAmino): _93.NextSequenceRecvData;
                    toAmino(message: _93.NextSequenceRecvData): _93.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _93.NextSequenceRecvDataAminoMsg): _93.NextSequenceRecvData;
                    toAminoMsg(message: _93.NextSequenceRecvData): _93.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _93.NextSequenceRecvDataProtoMsg): _93.NextSequenceRecvData;
                    toProto(message: _93.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _93.NextSequenceRecvData): _93.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _94.DataType;
                dataTypeToJSON(object: _94.DataType): string;
                DataType: typeof _94.DataType;
                DataTypeSDKType: typeof _94.DataType;
                DataTypeAmino: typeof _94.DataType;
                ClientState: {
                    encode(message: _94.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ClientState;
                    fromPartial(object: any): _94.ClientState;
                    fromAmino(object: _94.ClientStateAmino): _94.ClientState;
                    toAmino(message: _94.ClientState): _94.ClientStateAmino;
                    fromAminoMsg(object: _94.ClientStateAminoMsg): _94.ClientState;
                    toAminoMsg(message: _94.ClientState): _94.ClientStateAminoMsg;
                    fromProtoMsg(message: _94.ClientStateProtoMsg): _94.ClientState;
                    toProto(message: _94.ClientState): Uint8Array;
                    toProtoMsg(message: _94.ClientState): _94.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _94.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConsensusState;
                    fromPartial(object: any): _94.ConsensusState;
                    fromAmino(object: _94.ConsensusStateAmino): _94.ConsensusState;
                    toAmino(message: _94.ConsensusState): _94.ConsensusStateAmino;
                    fromAminoMsg(object: _94.ConsensusStateAminoMsg): _94.ConsensusState;
                    toAminoMsg(message: _94.ConsensusState): _94.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _94.ConsensusStateProtoMsg): _94.ConsensusState;
                    toProto(message: _94.ConsensusState): Uint8Array;
                    toProtoMsg(message: _94.ConsensusState): _94.ConsensusStateProtoMsg;
                };
                Header: {
                    encode(message: _94.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Header;
                    fromPartial(object: any): _94.Header;
                    fromAmino(object: _94.HeaderAmino): _94.Header;
                    toAmino(message: _94.Header): _94.HeaderAmino;
                    fromAminoMsg(object: _94.HeaderAminoMsg): _94.Header;
                    toAminoMsg(message: _94.Header): _94.HeaderAminoMsg;
                    fromProtoMsg(message: _94.HeaderProtoMsg): _94.Header;
                    toProto(message: _94.Header): Uint8Array;
                    toProtoMsg(message: _94.Header): _94.HeaderProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _94.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Misbehaviour;
                    fromPartial(object: any): _94.Misbehaviour;
                    fromAmino(object: _94.MisbehaviourAmino): _94.Misbehaviour;
                    toAmino(message: _94.Misbehaviour): _94.MisbehaviourAmino;
                    fromAminoMsg(object: _94.MisbehaviourAminoMsg): _94.Misbehaviour;
                    toAminoMsg(message: _94.Misbehaviour): _94.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _94.MisbehaviourProtoMsg): _94.Misbehaviour;
                    toProto(message: _94.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _94.Misbehaviour): _94.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    encode(message: _94.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignatureAndData;
                    fromPartial(object: any): _94.SignatureAndData;
                    fromAmino(object: _94.SignatureAndDataAmino): _94.SignatureAndData;
                    toAmino(message: _94.SignatureAndData): _94.SignatureAndDataAmino;
                    fromAminoMsg(object: _94.SignatureAndDataAminoMsg): _94.SignatureAndData;
                    toAminoMsg(message: _94.SignatureAndData): _94.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _94.SignatureAndDataProtoMsg): _94.SignatureAndData;
                    toProto(message: _94.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _94.SignatureAndData): _94.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    encode(message: _94.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TimestampedSignatureData;
                    fromPartial(object: any): _94.TimestampedSignatureData;
                    fromAmino(object: _94.TimestampedSignatureDataAmino): _94.TimestampedSignatureData;
                    toAmino(message: _94.TimestampedSignatureData): _94.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _94.TimestampedSignatureDataAminoMsg): _94.TimestampedSignatureData;
                    toAminoMsg(message: _94.TimestampedSignatureData): _94.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _94.TimestampedSignatureDataProtoMsg): _94.TimestampedSignatureData;
                    toProto(message: _94.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _94.TimestampedSignatureData): _94.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    encode(message: _94.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignBytes;
                    fromPartial(object: any): _94.SignBytes;
                    fromAmino(object: _94.SignBytesAmino): _94.SignBytes;
                    toAmino(message: _94.SignBytes): _94.SignBytesAmino;
                    fromAminoMsg(object: _94.SignBytesAminoMsg): _94.SignBytes;
                    toAminoMsg(message: _94.SignBytes): _94.SignBytesAminoMsg;
                    fromProtoMsg(message: _94.SignBytesProtoMsg): _94.SignBytes;
                    toProto(message: _94.SignBytes): Uint8Array;
                    toProtoMsg(message: _94.SignBytes): _94.SignBytesProtoMsg;
                };
                HeaderData: {
                    encode(message: _94.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.HeaderData;
                    fromPartial(object: any): _94.HeaderData;
                    fromAmino(object: _94.HeaderDataAmino): _94.HeaderData;
                    toAmino(message: _94.HeaderData): _94.HeaderDataAmino;
                    fromAminoMsg(object: _94.HeaderDataAminoMsg): _94.HeaderData;
                    toAminoMsg(message: _94.HeaderData): _94.HeaderDataAminoMsg;
                    fromProtoMsg(message: _94.HeaderDataProtoMsg): _94.HeaderData;
                    toProto(message: _94.HeaderData): Uint8Array;
                    toProtoMsg(message: _94.HeaderData): _94.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    encode(message: _94.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ClientStateData;
                    fromPartial(object: any): _94.ClientStateData;
                    fromAmino(object: _94.ClientStateDataAmino): _94.ClientStateData;
                    toAmino(message: _94.ClientStateData): _94.ClientStateDataAmino;
                    fromAminoMsg(object: _94.ClientStateDataAminoMsg): _94.ClientStateData;
                    toAminoMsg(message: _94.ClientStateData): _94.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _94.ClientStateDataProtoMsg): _94.ClientStateData;
                    toProto(message: _94.ClientStateData): Uint8Array;
                    toProtoMsg(message: _94.ClientStateData): _94.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    encode(message: _94.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConsensusStateData;
                    fromPartial(object: any): _94.ConsensusStateData;
                    fromAmino(object: _94.ConsensusStateDataAmino): _94.ConsensusStateData;
                    toAmino(message: _94.ConsensusStateData): _94.ConsensusStateDataAmino;
                    fromAminoMsg(object: _94.ConsensusStateDataAminoMsg): _94.ConsensusStateData;
                    toAminoMsg(message: _94.ConsensusStateData): _94.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _94.ConsensusStateDataProtoMsg): _94.ConsensusStateData;
                    toProto(message: _94.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _94.ConsensusStateData): _94.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    encode(message: _94.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ConnectionStateData;
                    fromPartial(object: any): _94.ConnectionStateData;
                    fromAmino(object: _94.ConnectionStateDataAmino): _94.ConnectionStateData;
                    toAmino(message: _94.ConnectionStateData): _94.ConnectionStateDataAmino;
                    fromAminoMsg(object: _94.ConnectionStateDataAminoMsg): _94.ConnectionStateData;
                    toAminoMsg(message: _94.ConnectionStateData): _94.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _94.ConnectionStateDataProtoMsg): _94.ConnectionStateData;
                    toProto(message: _94.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _94.ConnectionStateData): _94.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    encode(message: _94.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ChannelStateData;
                    fromPartial(object: any): _94.ChannelStateData;
                    fromAmino(object: _94.ChannelStateDataAmino): _94.ChannelStateData;
                    toAmino(message: _94.ChannelStateData): _94.ChannelStateDataAmino;
                    fromAminoMsg(object: _94.ChannelStateDataAminoMsg): _94.ChannelStateData;
                    toAminoMsg(message: _94.ChannelStateData): _94.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _94.ChannelStateDataProtoMsg): _94.ChannelStateData;
                    toProto(message: _94.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _94.ChannelStateData): _94.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    encode(message: _94.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PacketCommitmentData;
                    fromPartial(object: any): _94.PacketCommitmentData;
                    fromAmino(object: _94.PacketCommitmentDataAmino): _94.PacketCommitmentData;
                    toAmino(message: _94.PacketCommitmentData): _94.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _94.PacketCommitmentDataAminoMsg): _94.PacketCommitmentData;
                    toAminoMsg(message: _94.PacketCommitmentData): _94.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _94.PacketCommitmentDataProtoMsg): _94.PacketCommitmentData;
                    toProto(message: _94.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _94.PacketCommitmentData): _94.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    encode(message: _94.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PacketAcknowledgementData;
                    fromPartial(object: any): _94.PacketAcknowledgementData;
                    fromAmino(object: _94.PacketAcknowledgementDataAmino): _94.PacketAcknowledgementData;
                    toAmino(message: _94.PacketAcknowledgementData): _94.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _94.PacketAcknowledgementDataAminoMsg): _94.PacketAcknowledgementData;
                    toAminoMsg(message: _94.PacketAcknowledgementData): _94.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _94.PacketAcknowledgementDataProtoMsg): _94.PacketAcknowledgementData;
                    toProto(message: _94.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _94.PacketAcknowledgementData): _94.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _94.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PacketReceiptAbsenceData;
                    fromPartial(object: any): _94.PacketReceiptAbsenceData;
                    fromAmino(object: _94.PacketReceiptAbsenceDataAmino): _94.PacketReceiptAbsenceData;
                    toAmino(message: _94.PacketReceiptAbsenceData): _94.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _94.PacketReceiptAbsenceDataAminoMsg): _94.PacketReceiptAbsenceData;
                    toAminoMsg(message: _94.PacketReceiptAbsenceData): _94.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _94.PacketReceiptAbsenceDataProtoMsg): _94.PacketReceiptAbsenceData;
                    toProto(message: _94.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _94.PacketReceiptAbsenceData): _94.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    encode(message: _94.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.NextSequenceRecvData;
                    fromPartial(object: any): _94.NextSequenceRecvData;
                    fromAmino(object: _94.NextSequenceRecvDataAmino): _94.NextSequenceRecvData;
                    toAmino(message: _94.NextSequenceRecvData): _94.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _94.NextSequenceRecvDataAminoMsg): _94.NextSequenceRecvData;
                    toAminoMsg(message: _94.NextSequenceRecvData): _94.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _94.NextSequenceRecvDataProtoMsg): _94.NextSequenceRecvData;
                    toProto(message: _94.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _94.NextSequenceRecvData): _94.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _95.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ClientState;
                    fromPartial(object: any): _95.ClientState;
                    fromAmino(object: _95.ClientStateAmino): _95.ClientState;
                    toAmino(message: _95.ClientState): _95.ClientStateAmino;
                    fromAminoMsg(object: _95.ClientStateAminoMsg): _95.ClientState;
                    toAminoMsg(message: _95.ClientState): _95.ClientStateAminoMsg;
                    fromProtoMsg(message: _95.ClientStateProtoMsg): _95.ClientState;
                    toProto(message: _95.ClientState): Uint8Array;
                    toProtoMsg(message: _95.ClientState): _95.ClientStateProtoMsg;
                };
                ConsensusState: {
                    encode(message: _95.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ConsensusState;
                    fromPartial(object: any): _95.ConsensusState;
                    fromAmino(object: _95.ConsensusStateAmino): _95.ConsensusState;
                    toAmino(message: _95.ConsensusState): _95.ConsensusStateAmino;
                    fromAminoMsg(object: _95.ConsensusStateAminoMsg): _95.ConsensusState;
                    toAminoMsg(message: _95.ConsensusState): _95.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _95.ConsensusStateProtoMsg): _95.ConsensusState;
                    toProto(message: _95.ConsensusState): Uint8Array;
                    toProtoMsg(message: _95.ConsensusState): _95.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    encode(message: _95.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Misbehaviour;
                    fromPartial(object: any): _95.Misbehaviour;
                    fromAmino(object: _95.MisbehaviourAmino): _95.Misbehaviour;
                    toAmino(message: _95.Misbehaviour): _95.MisbehaviourAmino;
                    fromAminoMsg(object: _95.MisbehaviourAminoMsg): _95.Misbehaviour;
                    toAminoMsg(message: _95.Misbehaviour): _95.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _95.MisbehaviourProtoMsg): _95.Misbehaviour;
                    toProto(message: _95.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _95.Misbehaviour): _95.MisbehaviourProtoMsg;
                };
                Header: {
                    encode(message: _95.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Header;
                    fromPartial(object: any): _95.Header;
                    fromAmino(object: _95.HeaderAmino): _95.Header;
                    toAmino(message: _95.Header): _95.HeaderAmino;
                    fromAminoMsg(object: _95.HeaderAminoMsg): _95.Header;
                    toAminoMsg(message: _95.Header): _95.HeaderAminoMsg;
                    fromProtoMsg(message: _95.HeaderProtoMsg): _95.Header;
                    toProto(message: _95.Header): Uint8Array;
                    toProtoMsg(message: _95.Header): _95.HeaderProtoMsg;
                };
                Fraction: {
                    encode(message: _95.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Fraction;
                    fromPartial(object: any): _95.Fraction;
                    fromAmino(object: _95.FractionAmino): _95.Fraction;
                    toAmino(message: _95.Fraction): _95.FractionAmino;
                    fromAminoMsg(object: _95.FractionAminoMsg): _95.Fraction;
                    toAminoMsg(message: _95.Fraction): _95.FractionAminoMsg;
                    fromProtoMsg(message: _95.FractionProtoMsg): _95.Fraction;
                    toProto(message: _95.Fraction): Uint8Array;
                    toProtoMsg(message: _95.Fraction): _95.FractionProtoMsg;
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
                            v1: _173.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _174.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _175.MsgClientImpl;
                    };
                    client: {
                        v1: _176.MsgClientImpl;
                    };
                    connection: {
                        v1: _177.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _66.QueryInterchainAccountRequest): Promise<_66.QueryInterchainAccountResponse>;
                                params(request?: _66.QueryParamsRequest): Promise<_66.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _70.QueryParamsRequest): Promise<_70.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _75.QueryDenomTraceRequest): Promise<_75.QueryDenomTraceResponse>;
                            denomTraces(request?: _75.QueryDenomTracesRequest): Promise<_75.QueryDenomTracesResponse>;
                            params(request?: _75.QueryParamsRequest): Promise<_75.QueryParamsResponse>;
                            denomHash(request: _75.QueryDenomHashRequest): Promise<_75.QueryDenomHashResponse>;
                            escrowAddress(request: _75.QueryEscrowAddressRequest): Promise<_75.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _81.QueryChannelRequest): Promise<_81.QueryChannelResponse>;
                            channels(request?: _81.QueryChannelsRequest): Promise<_81.QueryChannelsResponse>;
                            connectionChannels(request: _81.QueryConnectionChannelsRequest): Promise<_81.QueryConnectionChannelsResponse>;
                            channelClientState(request: _81.QueryChannelClientStateRequest): Promise<_81.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _81.QueryChannelConsensusStateRequest): Promise<_81.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _81.QueryPacketCommitmentRequest): Promise<_81.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _81.QueryPacketCommitmentsRequest): Promise<_81.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _81.QueryPacketReceiptRequest): Promise<_81.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _81.QueryPacketAcknowledgementRequest): Promise<_81.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _81.QueryPacketAcknowledgementsRequest): Promise<_81.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _81.QueryUnreceivedPacketsRequest): Promise<_81.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _81.QueryUnreceivedAcksRequest): Promise<_81.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _81.QueryNextSequenceReceiveRequest): Promise<_81.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _85.QueryClientStateRequest): Promise<_85.QueryClientStateResponse>;
                            clientStates(request?: _85.QueryClientStatesRequest): Promise<_85.QueryClientStatesResponse>;
                            consensusState(request: _85.QueryConsensusStateRequest): Promise<_85.QueryConsensusStateResponse>;
                            consensusStates(request: _85.QueryConsensusStatesRequest): Promise<_85.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _85.QueryConsensusStateHeightsRequest): Promise<_85.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _85.QueryClientStatusRequest): Promise<_85.QueryClientStatusResponse>;
                            clientParams(request?: _85.QueryClientParamsRequest): Promise<_85.QueryClientParamsResponse>;
                            upgradedClientState(request?: _85.QueryUpgradedClientStateRequest): Promise<_85.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _85.QueryUpgradedConsensusStateRequest): Promise<_85.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _90.QueryConnectionRequest): Promise<_90.QueryConnectionResponse>;
                            connections(request?: _90.QueryConnectionsRequest): Promise<_90.QueryConnectionsResponse>;
                            clientConnections(request: _90.QueryClientConnectionsRequest): Promise<_90.QueryClientConnectionsResponse>;
                            connectionClientState(request: _90.QueryConnectionClientStateRequest): Promise<_90.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _90.QueryConnectionConsensusStateRequest): Promise<_90.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _90.QueryConnectionParamsRequest): Promise<_90.QueryConnectionParamsResponse>;
                        };
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _161.LCDQueryClient;
                        };
                        host: {
                            v1: _162.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _163.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _164.LCDQueryClient;
                    };
                    client: {
                        v1: _165.LCDQueryClient;
                    };
                    connection: {
                        v1: _166.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
