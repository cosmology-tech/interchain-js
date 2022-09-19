import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/port/v1/query";
import * as _121 from "./core/types/v1/genesis";
import * as _122 from "./lightclients/localhost/v1/localhost";
import * as _123 from "./lightclients/solomachine/v1/solomachine";
import * as _124 from "./lightclients/solomachine/v2/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _217 from "./applications/transfer/v1/query.lcd";
import * as _218 from "./core/channel/v1/query.lcd";
import * as _219 from "./core/client/v1/query.lcd";
import * as _220 from "./core/connection/v1/query.lcd";
import * as _221 from "./applications/transfer/v1/query.rpc.query";
import * as _222 from "./core/channel/v1/query.rpc.query";
import * as _223 from "./core/client/v1/query.rpc.query";
import * as _224 from "./core/connection/v1/query.rpc.query";
import * as _225 from "./core/port/v1/query.rpc.query";
import * as _226 from "./applications/transfer/v1/tx.rpc.msg";
import * as _227 from "./core/channel/v1/tx.rpc.msg";
import * as _228 from "./core/client/v1/tx.rpc.msg";
import * as _229 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _226.MsgClientImpl;
                QueryClientImpl: typeof _221.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponseSDKType>;
                    denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponseSDKType>;
                    params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponseSDKType>;
                };
                LCDQueryClient: typeof _217.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: _105.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("@osmonauts/helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _105.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _105.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransfer;
                    fromPartial(object: {
                        source_port?: string;
                        source_channel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeout_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        timeout_timestamp?: any;
                    }): _105.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _105.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransferResponseSDKType;
                    fromPartial(_: {}): _105.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _104.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DenomTrace;
                    fromPartial(object: {
                        path?: string;
                        base_denom?: string;
                    }): _104.DenomTrace;
                };
                Params: {
                    encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                    fromPartial(object: {
                        send_enabled?: boolean;
                        receive_enabled?: boolean;
                    }): _104.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _103.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceRequest;
                    fromPartial(object: {
                        hash?: string;
                    }): _103.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _103.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceResponseSDKType;
                    fromPartial(object: {
                        denom_trace?: {
                            path?: string;
                            base_denom?: string;
                        };
                    }): _103.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _103.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _103.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _103.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesResponseSDKType;
                    fromPartial(object: {
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _103.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                    fromPartial(_: {}): _103.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _103.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                    fromPartial(object: {
                        port_id?: string;
                        denom_traces?: {
                            path?: string;
                            base_denom?: string;
                        }[];
                        params?: {
                            send_enabled?: boolean;
                            receive_enabled?: boolean;
                        };
                    }): _102.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _106.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FungibleTokenPacketData;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _106.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _227.MsgClientImpl;
                QueryClientImpl: typeof _222.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _109.QueryChannelRequest): Promise<_109.QueryChannelResponseSDKType>;
                    channels(request?: _109.QueryChannelsRequest): Promise<_109.QueryChannelsResponseSDKType>;
                    connectionChannels(request: _109.QueryConnectionChannelsRequest): Promise<_109.QueryConnectionChannelsResponseSDKType>;
                    channelClientState(request: _109.QueryChannelClientStateRequest): Promise<_109.QueryChannelClientStateResponseSDKType>;
                    channelConsensusState(request: _109.QueryChannelConsensusStateRequest): Promise<_109.QueryChannelConsensusStateResponseSDKType>;
                    packetCommitment(request: _109.QueryPacketCommitmentRequest): Promise<_109.QueryPacketCommitmentResponseSDKType>;
                    packetCommitments(request: _109.QueryPacketCommitmentsRequest): Promise<_109.QueryPacketCommitmentsResponseSDKType>;
                    packetReceipt(request: _109.QueryPacketReceiptRequest): Promise<_109.QueryPacketReceiptResponseSDKType>;
                    packetAcknowledgement(request: _109.QueryPacketAcknowledgementRequest): Promise<_109.QueryPacketAcknowledgementResponseSDKType>;
                    packetAcknowledgements(request: _109.QueryPacketAcknowledgementsRequest): Promise<_109.QueryPacketAcknowledgementsResponseSDKType>;
                    unreceivedPackets(request: _109.QueryUnreceivedPacketsRequest): Promise<_109.QueryUnreceivedPacketsResponseSDKType>;
                    unreceivedAcks(request: _109.QueryUnreceivedAcksRequest): Promise<_109.QueryUnreceivedAcksResponseSDKType>;
                    nextSequenceReceive(request: _109.QueryNextSequenceReceiveRequest): Promise<_109.QueryNextSequenceReceiveResponseSDKType>;
                };
                LCDQueryClient: typeof _218.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ port_id, channel, signer }: _110.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _110.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: _110.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: _110.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: _110.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, signer }: _110.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _110.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: _110.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proof_commitment, proof_height, signer }: _110.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: _110.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _110.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: _110.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _110.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: _110.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("@osmonauts/helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _110.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInit;
                    fromPartial(object: {
                        port_id?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _110.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInitResponseSDKType;
                    fromPartial(_: {}): _110.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _110.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTry;
                    fromPartial(object: {
                        port_id?: string;
                        previous_channel_id?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        counterparty_version?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _110.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTryResponseSDKType;
                    fromPartial(_: {}): _110.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _110.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAck;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        counterparty_channel_id?: string;
                        counterparty_version?: string;
                        proof_try?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _110.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAckResponseSDKType;
                    fromPartial(_: {}): _110.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _110.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirm;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _110.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirmResponseSDKType;
                    fromPartial(_: {}): _110.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _110.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInit;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        signer?: string;
                    }): _110.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _110.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInitResponseSDKType;
                    fromPartial(_: {}): _110.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _110.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirm;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        proof_init?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _110.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirmResponseSDKType;
                    fromPartial(_: {}): _110.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _110.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacket;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_commitment?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _110.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacketResponseSDKType;
                    fromPartial(_: {}): _110.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _110.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeout;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        next_sequence_recv?: any;
                        signer?: string;
                    }): _110.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _110.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutResponseSDKType;
                    fromPartial(_: {}): _110.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _110.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnClose;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        proof_unreceived?: Uint8Array;
                        proof_close?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        next_sequence_recv?: any;
                        signer?: string;
                    }): _110.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _110.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnCloseResponseSDKType;
                    fromPartial(_: {}): _110.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _110.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgement;
                    fromPartial(object: {
                        packet?: {
                            sequence?: any;
                            source_port?: string;
                            source_channel?: string;
                            destination_port?: string;
                            destination_channel?: string;
                            data?: Uint8Array;
                            timeout_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            timeout_timestamp?: any;
                        };
                        acknowledgement?: Uint8Array;
                        proof_acked?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _110.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _110.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgementResponseSDKType;
                    fromPartial(_: {}): _110.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _109.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _109.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _109.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelResponseSDKType;
                    fromPartial(object: {
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _109.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _109.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsResponseSDKType;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _109.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsRequest;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _109.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsResponseSDKType;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _109.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _109.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _109.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateResponseSDKType;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _109.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                    }): _109.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _109.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateResponseSDKType;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _109.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _109.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _109.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentResponseSDKType;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _109.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _109.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsResponseSDKType;
                    fromPartial(object: {
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _109.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _109.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _109.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptResponseSDKType;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _109.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _109.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _109.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementResponseSDKType;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _109.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                        packet_commitment_sequences?: any[];
                    }): _109.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _109.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsResponseSDKType;
                    fromPartial(object: {
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _109.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_commitment_sequences?: any[];
                    }): _109.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _109.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsResponseSDKType;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _109.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        packet_ack_sequences?: any[];
                    }): _109.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _109.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksResponseSDKType;
                    fromPartial(object: {
                        sequences?: any[];
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _109.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveRequest;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _109.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _109.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveResponseSDKType;
                    fromPartial(object: {
                        next_sequence_receive?: any;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _109.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                            port_id?: string;
                            channel_id?: string;
                        }[];
                        acknowledgements?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                            data?: Uint8Array;
                        }[];
                        send_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        recv_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        ack_sequences?: {
                            port_id?: string;
                            channel_id?: string;
                            sequence?: any;
                        }[];
                        next_channel_sequence?: any;
                    }): _108.GenesisState;
                };
                PacketSequence: {
                    encode(message: _108.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketSequence;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                    }): _108.PacketSequence;
                };
                stateFromJSON(object: any): _107.State;
                stateToJSON(object: _107.State): string;
                orderFromJSON(object: any): _107.Order;
                orderToJSON(object: _107.Order): string;
                State: typeof _107.State;
                StateSDKType: typeof _107.StateSDKType;
                Order: typeof _107.Order;
                OrderSDKType: typeof _107.OrderSDKType;
                Channel: {
                    encode(message: _107.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Channel;
                    fromPartial(object: {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                    }): _107.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _107.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.IdentifiedChannel;
                    fromPartial(object: {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        connection_hops?: string[];
                        version?: string;
                        port_id?: string;
                        channel_id?: string;
                    }): _107.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _107.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Counterparty;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                    }): _107.Counterparty;
                };
                Packet: {
                    encode(message: _107.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Packet;
                    fromPartial(object: {
                        sequence?: any;
                        source_port?: string;
                        source_channel?: string;
                        destination_port?: string;
                        destination_channel?: string;
                        data?: Uint8Array;
                        timeout_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        timeout_timestamp?: any;
                    }): _107.Packet;
                };
                PacketState: {
                    encode(message: _107.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PacketState;
                    fromPartial(object: {
                        port_id?: string;
                        channel_id?: string;
                        sequence?: any;
                        data?: Uint8Array;
                    }): _107.PacketState;
                };
                Acknowledgement: {
                    encode(message: _107.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Acknowledgement;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _107.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _228.MsgClientImpl;
                QueryClientImpl: typeof _223.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _113.QueryClientStateRequest): Promise<_113.QueryClientStateResponseSDKType>;
                    clientStates(request?: _113.QueryClientStatesRequest): Promise<_113.QueryClientStatesResponseSDKType>;
                    consensusState(request: _113.QueryConsensusStateRequest): Promise<_113.QueryConsensusStateResponseSDKType>;
                    consensusStates(request: _113.QueryConsensusStatesRequest): Promise<_113.QueryConsensusStatesResponseSDKType>;
                    clientStatus(request: _113.QueryClientStatusRequest): Promise<_113.QueryClientStatusResponseSDKType>;
                    clientParams(request?: _113.QueryClientParamsRequest): Promise<_113.QueryClientParamsResponseSDKType>;
                    upgradedClientState(request?: _113.QueryUpgradedClientStateRequest): Promise<_113.QueryUpgradedClientStateResponseSDKType>;
                    upgradedConsensusState(request?: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponseSDKType>;
                };
                LCDQueryClient: typeof _219.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ client_state, consensus_state, signer }: _114.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ client_id, header, signer }: _114.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: _114.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _114.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ client_id, misbehaviour, signer }: _114.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _114.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClient;
                    fromPartial(object: {
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _114.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClientResponseSDKType;
                    fromPartial(_: {}): _114.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _114.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClient;
                    fromPartial(object: {
                        client_id?: string;
                        header?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _114.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClientResponseSDKType;
                    fromPartial(_: {}): _114.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _114.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClient;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_upgrade_client?: Uint8Array;
                        proof_upgrade_consensus_state?: Uint8Array;
                        signer?: string;
                    }): _114.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _114.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClientResponseSDKType;
                    fromPartial(_: {}): _114.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _114.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviour;
                    fromPartial(object: {
                        client_id?: string;
                        misbehaviour?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _114.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviourResponseSDKType;
                    fromPartial(_: {}): _114.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _113.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateRequest;
                    fromPartial(object: {
                        client_id?: string;
                    }): _113.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _113.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateResponseSDKType;
                    fromPartial(object: {
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _113.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _113.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _113.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesResponseSDKType;
                    fromPartial(object: {
                        client_states?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _113.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _113.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateRequest;
                    fromPartial(object: {
                        client_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                        latest_height?: boolean;
                    }): _113.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _113.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateResponseSDKType;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _113.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _113.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesRequest;
                    fromPartial(object: {
                        client_id?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _113.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesResponseSDKType;
                    fromPartial(object: {
                        consensus_states?: {
                            height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                    }): _113.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _113.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusRequest;
                    fromPartial(object: {
                        client_id?: string;
                    }): _113.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _113.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusResponseSDKType;
                    fromPartial(object: {
                        status?: string;
                    }): _113.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _113.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsRequest;
                    fromPartial(_: {}): _113.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _113.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsResponseSDKType;
                    fromPartial(object: {
                        params?: {
                            allowed_clients?: string[];
                        };
                    }): _113.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _113.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateRequest;
                    fromPartial(_: {}): _113.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _113.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateResponseSDKType;
                    fromPartial(object: {
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _113.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _113.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateRequest;
                    fromPartial(_: {}): _113.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _113.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateResponseSDKType;
                    fromPartial(object: {
                        upgraded_consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _113.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                    fromPartial(object: {
                        clients?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clients_consensus?: {
                            client_id?: string;
                            consensus_states?: {
                                height?: {
                                    revision_number?: any;
                                    revision_height?: any;
                                };
                                consensus_state?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clients_metadata?: {
                            client_id?: string;
                            client_metadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowed_clients?: string[];
                        };
                        create_localhost?: boolean;
                        next_client_sequence?: any;
                    }): _112.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _112.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisMetadata;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _112.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _112.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedGenesisMetadata;
                    fromPartial(object: {
                        client_id?: string;
                        client_metadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _112.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _111.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.IdentifiedClientState;
                    fromPartial(object: {
                        client_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _111.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _111.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusStateWithHeight;
                    fromPartial(object: {
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _111.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _111.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientConsensusStates;
                    fromPartial(object: {
                        client_id?: string;
                        consensus_states?: {
                            height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            consensus_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _111.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _111.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientUpdateProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subject_client_id?: string;
                        substitute_client_id?: string;
                    }): _111.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _111.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpgradeProposal;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: any;
                            info?: string;
                            upgraded_client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgraded_client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _111.UpgradeProposal;
                };
                Height: {
                    encode(message: _111.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Height;
                    fromPartial(object: {
                        revision_number?: any;
                        revision_height?: any;
                    }): _111.Height;
                };
                Params: {
                    encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                    fromPartial(object: {
                        allowed_clients?: string[];
                    }): _111.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _115.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleRoot;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _115.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _115.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePrefix;
                    fromPartial(object: {
                        key_prefix?: Uint8Array;
                    }): _115.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _115.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePath;
                    fromPartial(object: {
                        key_path?: string[];
                    }): _115.MerklePath;
                };
                MerkleProof: {
                    encode(message: _115.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleProof;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehash_key?: import("../confio/proofs").HashOp;
                                    prehash_value?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehash_key?: import("../confio/proofs").HashOp;
                                        prehash_value?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehash_key?: import("../confio/proofs").HashOp;
                                            prehash_value?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehash_key?: import("../confio/proofs").HashOp;
                                                prehash_value?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookup_inners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _115.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _229.MsgClientImpl;
                QueryClientImpl: typeof _224.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _118.QueryConnectionRequest): Promise<_118.QueryConnectionResponseSDKType>;
                    connections(request?: _118.QueryConnectionsRequest): Promise<_118.QueryConnectionsResponseSDKType>;
                    clientConnections(request: _118.QueryClientConnectionsRequest): Promise<_118.QueryClientConnectionsResponseSDKType>;
                    connectionClientState(request: _118.QueryConnectionClientStateRequest): Promise<_118.QueryConnectionClientStateResponseSDKType>;
                    connectionConsensusState(request: _118.QueryConnectionConsensusStateRequest): Promise<_118.QueryConnectionConsensusStateResponseSDKType>;
                };
                LCDQueryClient: typeof _220.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ client_id, counterparty, version, delay_period, signer }: _119.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _119.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: _119.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: _119.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connection_id, proof_ack, proof_height, signer }: _119.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("@osmonauts/helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _119.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInit;
                    fromPartial(object: {
                        client_id?: string;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delay_period?: any;
                        signer?: string;
                    }): _119.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _119.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInitResponseSDKType;
                    fromPartial(_: {}): _119.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _119.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTry;
                    fromPartial(object: {
                        client_id?: string;
                        previous_connection_id?: string;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                        counterparty_versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_init?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _119.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTryResponseSDKType;
                    fromPartial(_: {}): _119.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _119.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAck;
                    fromPartial(object: {
                        connection_id?: string;
                        counterparty_connection_id?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_try?: Uint8Array;
                        proof_client?: Uint8Array;
                        proof_consensus?: Uint8Array;
                        consensus_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _119.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAckResponseSDKType;
                    fromPartial(_: {}): _119.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _119.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirm;
                    fromPartial(object: {
                        connection_id?: string;
                        proof_ack?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _119.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirmResponseSDKType;
                    fromPartial(_: {}): _119.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _118.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionRequest;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _118.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _118.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionResponseSDKType;
                    fromPartial(object: {
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _118.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsRequest;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            count_total?: boolean;
                            reverse?: boolean;
                        };
                    }): _118.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _118.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsResponseSDKType;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        }[];
                        pagination?: {
                            next_key?: Uint8Array;
                            total?: any;
                        };
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _118.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsRequest;
                    fromPartial(object: {
                        client_id?: string;
                    }): _118.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _118.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsResponseSDKType;
                    fromPartial(object: {
                        connection_paths?: string[];
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _118.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateRequest;
                    fromPartial(object: {
                        connection_id?: string;
                    }): _118.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _118.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateResponseSDKType;
                    fromPartial(object: {
                        identified_client_state?: {
                            client_id?: string;
                            client_state?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _118.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateRequest;
                    fromPartial(object: {
                        connection_id?: string;
                        revision_number?: any;
                        revision_height?: any;
                    }): _118.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _118.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateResponseSDKType;
                    fromPartial(object: {
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        client_id?: string;
                        proof?: Uint8Array;
                        proof_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _118.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        }[];
                        client_connection_paths?: {
                            client_id?: string;
                            paths?: string[];
                        }[];
                        next_connection_sequence?: any;
                        params?: {
                            max_expected_time_per_block?: any;
                        };
                    }): _117.GenesisState;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                State: typeof _116.State;
                StateSDKType: typeof _116.StateSDKType;
                ConnectionEnd: {
                    encode(message: _116.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionEnd;
                    fromPartial(object: {
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                    }): _116.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _116.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedConnection;
                    fromPartial(object: {
                        id?: string;
                        client_id?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            client_id?: string;
                            connection_id?: string;
                            prefix?: {
                                key_prefix?: Uint8Array;
                            };
                        };
                        delay_period?: any;
                    }): _116.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Counterparty;
                    fromPartial(object: {
                        client_id?: string;
                        connection_id?: string;
                        prefix?: {
                            key_prefix?: Uint8Array;
                        };
                    }): _116.Counterparty;
                };
                ClientPaths: {
                    encode(message: _116.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ClientPaths;
                    fromPartial(object: {
                        paths?: string[];
                    }): _116.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _116.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionPaths;
                    fromPartial(object: {
                        client_id?: string;
                        paths?: string[];
                    }): _116.ConnectionPaths;
                };
                Version: {
                    encode(message: _116.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Version;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _116.Version;
                };
                Params: {
                    encode(message: _116.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Params;
                    fromPartial(object: {
                        max_expected_time_per_block?: any;
                    }): _116.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _225.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _120.QueryAppVersionRequest): Promise<_120.QueryAppVersionResponseSDKType>;
                };
                QueryAppVersionRequest: {
                    encode(message: _120.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionRequest;
                    fromPartial(object: {
                        port_id?: string;
                        connection_id?: string;
                        ordering?: _107.Order;
                        counterparty?: {
                            port_id?: string;
                            channel_id?: string;
                        };
                        proposed_version?: string;
                    }): _120.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _120.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.QueryAppVersionResponseSDKType;
                    fromPartial(object: {
                        port_id?: string;
                        version?: string;
                    }): _120.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                    fromPartial(object: {
                        client_genesis?: {
                            clients?: {
                                client_id?: string;
                                client_state?: {
                                    type_url?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clients_consensus?: {
                                client_id?: string;
                                consensus_states?: {
                                    height?: {
                                        revision_number?: any;
                                        revision_height?: any;
                                    };
                                    consensus_state?: {
                                        type_url?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clients_metadata?: {
                                client_id?: string;
                                client_metadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowed_clients?: string[];
                            };
                            create_localhost?: boolean;
                            next_client_sequence?: any;
                        };
                        connection_genesis?: {
                            connections?: {
                                id?: string;
                                client_id?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    client_id?: string;
                                    connection_id?: string;
                                    prefix?: {
                                        key_prefix?: Uint8Array;
                                    };
                                };
                                delay_period?: any;
                            }[];
                            client_connection_paths?: {
                                client_id?: string;
                                paths?: string[];
                            }[];
                            next_connection_sequence?: any;
                            params?: {
                                max_expected_time_per_block?: any;
                            };
                        };
                        channel_genesis?: {
                            channels?: {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    port_id?: string;
                                    channel_id?: string;
                                };
                                connection_hops?: string[];
                                version?: string;
                                port_id?: string;
                                channel_id?: string;
                            }[];
                            acknowledgements?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                                data?: Uint8Array;
                            }[];
                            send_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            recv_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            ack_sequences?: {
                                port_id?: string;
                                channel_id?: string;
                                sequence?: any;
                            }[];
                            next_channel_sequence?: any;
                        };
                    }): _121.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientState;
                    fromPartial(object: {
                        chain_id?: string;
                        height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                    }): _122.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _123.DataType;
                dataTypeToJSON(object: _123.DataType): string;
                DataType: typeof _123.DataType;
                DataTypeSDKType: typeof _123.DataTypeSDKType;
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
                    fromPartial(object: {
                        sequence?: any;
                        frozen_sequence?: any;
                        consensus_state?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _123.ClientState;
                };
                ConsensusState: {
                    encode(message: _123.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusState;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _123.ConsensusState;
                };
                Header: {
                    encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        new_public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _123.Header;
                };
                Misbehaviour: {
                    encode(message: _123.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Misbehaviour;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: any;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _123.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _123.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _123.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _123.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _123.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TimestampedSignatureData;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: any;
                    }): _123.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _123.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        data_type?: _123.DataType;
                        data?: Uint8Array;
                    }): _123.SignBytes;
                };
                HeaderData: {
                    encode(message: _123.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.HeaderData;
                    fromPartial(object: {
                        new_pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _123.HeaderData;
                };
                ClientStateData: {
                    encode(message: _123.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _123.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _123.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                    }): _123.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _123.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _123.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _123.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _123.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _123.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _123.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _123.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _123.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _123.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: any;
                    }): _123.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _124.DataType;
                dataTypeToJSON(object: _124.DataType): string;
                DataType: typeof _124.DataType;
                DataTypeSDKType: typeof _124.DataTypeSDKType;
                ClientState: {
                    encode(message: _124.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientState;
                    fromPartial(object: {
                        sequence?: any;
                        is_frozen?: boolean;
                        consensus_state?: {
                            public_key?: {
                                type_url?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: any;
                        };
                        allow_update_after_proposal?: boolean;
                    }): _124.ClientState;
                };
                ConsensusState: {
                    encode(message: _124.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusState;
                    fromPartial(object: {
                        public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: any;
                    }): _124.ConsensusState;
                };
                Header: {
                    encode(message: _124.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Header;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        signature?: Uint8Array;
                        new_public_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _124.Header;
                };
                Misbehaviour: {
                    encode(message: _124.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Misbehaviour;
                    fromPartial(object: {
                        client_id?: string;
                        sequence?: any;
                        signature_one?: {
                            signature?: Uint8Array;
                            data_type?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                        signature_two?: {
                            signature?: Uint8Array;
                            data_type?: _124.DataType;
                            data?: Uint8Array;
                            timestamp?: any;
                        };
                    }): _124.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _124.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignatureAndData;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        data_type?: _124.DataType;
                        data?: Uint8Array;
                        timestamp?: any;
                    }): _124.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _124.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.TimestampedSignatureData;
                    fromPartial(object: {
                        signature_data?: Uint8Array;
                        timestamp?: any;
                    }): _124.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _124.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.SignBytes;
                    fromPartial(object: {
                        sequence?: any;
                        timestamp?: any;
                        diversifier?: string;
                        data_type?: _124.DataType;
                        data?: Uint8Array;
                    }): _124.SignBytes;
                };
                HeaderData: {
                    encode(message: _124.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.HeaderData;
                    fromPartial(object: {
                        new_pub_key?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                        new_diversifier?: string;
                    }): _124.HeaderData;
                };
                ClientStateData: {
                    encode(message: _124.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        client_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _124.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _124.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensus_state?: {
                            type_url?: string;
                            value?: Uint8Array;
                        };
                    }): _124.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _124.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConnectionStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            client_id?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                client_id?: string;
                                connection_id?: string;
                                prefix?: {
                                    key_prefix?: Uint8Array;
                                };
                            };
                            delay_period?: any;
                        };
                    }): _124.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _124.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ChannelStateData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                port_id?: string;
                                channel_id?: string;
                            };
                            connection_hops?: string[];
                            version?: string;
                        };
                    }): _124.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _124.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketCommitmentData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _124.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _124.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketAcknowledgementData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _124.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _124.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.PacketReceiptAbsenceData;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _124.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _124.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.NextSequenceRecvData;
                    fromPartial(object: {
                        path?: Uint8Array;
                        next_seq_recv?: any;
                    }): _124.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _125.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ClientState;
                    fromPartial(object: {
                        chain_id?: string;
                        trust_level?: {
                            numerator?: any;
                            denominator?: any;
                        };
                        trusting_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        unbonding_period?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_clock_drift?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        frozen_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        latest_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        proof_specs?: {
                            leaf_spec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehash_key?: import("../confio/proofs").HashOp;
                                prehash_value?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            inner_spec?: {
                                child_order?: number[];
                                child_size?: number;
                                min_prefix_length?: number;
                                max_prefix_length?: number;
                                empty_child?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            max_depth?: number;
                            min_depth?: number;
                        }[];
                        upgrade_path?: string[];
                        allow_update_after_expiry?: boolean;
                        allow_update_after_misbehaviour?: boolean;
                    }): _125.ClientState;
                };
                ConsensusState: {
                    encode(message: _125.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.ConsensusState;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        next_validators_hash?: Uint8Array;
                    }): _125.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _125.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Misbehaviour;
                    fromPartial(object: {
                        client_id?: string;
                        header_1?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chain_id?: string;
                                    height?: any;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                            trusted_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            trusted_validators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                        };
                        header_2?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chain_id?: string;
                                    height?: any;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                            trusted_height?: {
                                revision_number?: any;
                                revision_height?: any;
                            };
                            trusted_validators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                        };
                    }): _125.Misbehaviour;
                };
                Header: {
                    encode(message: _125.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Header;
                    fromPartial(object: {
                        signed_header?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chain_id?: string;
                                height?: any;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: import("../tendermint/types/types").BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validator_set?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            };
                            total_voting_power?: any;
                        };
                        trusted_height?: {
                            revision_number?: any;
                            revision_height?: any;
                        };
                        trusted_validators?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            };
                            total_voting_power?: any;
                        };
                    }): _125.Header;
                };
                Fraction: {
                    encode(message: _125.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Fraction;
                    fromPartial(object: {
                        numerator?: any;
                        denominator?: any;
                    }): _125.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _226.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _227.MsgClientImpl;
                    };
                    client: {
                        v1: _228.MsgClientImpl;
                    };
                    connection: {
                        v1: _229.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponseSDKType>;
                            denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponseSDKType>;
                            params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponseSDKType>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _109.QueryChannelRequest): Promise<_109.QueryChannelResponseSDKType>;
                            channels(request?: _109.QueryChannelsRequest): Promise<_109.QueryChannelsResponseSDKType>;
                            connectionChannels(request: _109.QueryConnectionChannelsRequest): Promise<_109.QueryConnectionChannelsResponseSDKType>;
                            channelClientState(request: _109.QueryChannelClientStateRequest): Promise<_109.QueryChannelClientStateResponseSDKType>;
                            channelConsensusState(request: _109.QueryChannelConsensusStateRequest): Promise<_109.QueryChannelConsensusStateResponseSDKType>;
                            packetCommitment(request: _109.QueryPacketCommitmentRequest): Promise<_109.QueryPacketCommitmentResponseSDKType>;
                            packetCommitments(request: _109.QueryPacketCommitmentsRequest): Promise<_109.QueryPacketCommitmentsResponseSDKType>;
                            packetReceipt(request: _109.QueryPacketReceiptRequest): Promise<_109.QueryPacketReceiptResponseSDKType>;
                            packetAcknowledgement(request: _109.QueryPacketAcknowledgementRequest): Promise<_109.QueryPacketAcknowledgementResponseSDKType>;
                            packetAcknowledgements(request: _109.QueryPacketAcknowledgementsRequest): Promise<_109.QueryPacketAcknowledgementsResponseSDKType>;
                            unreceivedPackets(request: _109.QueryUnreceivedPacketsRequest): Promise<_109.QueryUnreceivedPacketsResponseSDKType>;
                            unreceivedAcks(request: _109.QueryUnreceivedAcksRequest): Promise<_109.QueryUnreceivedAcksResponseSDKType>;
                            nextSequenceReceive(request: _109.QueryNextSequenceReceiveRequest): Promise<_109.QueryNextSequenceReceiveResponseSDKType>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _113.QueryClientStateRequest): Promise<_113.QueryClientStateResponseSDKType>;
                            clientStates(request?: _113.QueryClientStatesRequest): Promise<_113.QueryClientStatesResponseSDKType>;
                            consensusState(request: _113.QueryConsensusStateRequest): Promise<_113.QueryConsensusStateResponseSDKType>;
                            consensusStates(request: _113.QueryConsensusStatesRequest): Promise<_113.QueryConsensusStatesResponseSDKType>;
                            clientStatus(request: _113.QueryClientStatusRequest): Promise<_113.QueryClientStatusResponseSDKType>;
                            clientParams(request?: _113.QueryClientParamsRequest): Promise<_113.QueryClientParamsResponseSDKType>;
                            upgradedClientState(request?: _113.QueryUpgradedClientStateRequest): Promise<_113.QueryUpgradedClientStateResponseSDKType>;
                            upgradedConsensusState(request?: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponseSDKType>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _118.QueryConnectionRequest): Promise<_118.QueryConnectionResponseSDKType>;
                            connections(request?: _118.QueryConnectionsRequest): Promise<_118.QueryConnectionsResponseSDKType>;
                            clientConnections(request: _118.QueryClientConnectionsRequest): Promise<_118.QueryClientConnectionsResponseSDKType>;
                            connectionClientState(request: _118.QueryConnectionClientStateRequest): Promise<_118.QueryConnectionClientStateResponseSDKType>;
                            connectionConsensusState(request: _118.QueryConnectionConsensusStateRequest): Promise<_118.QueryConnectionConsensusStateResponseSDKType>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _120.QueryAppVersionRequest): Promise<_120.QueryAppVersionResponseSDKType>;
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _217.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _218.LCDQueryClient;
                    };
                    client: {
                        v1: _219.LCDQueryClient;
                    };
                    connection: {
                        v1: _220.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
