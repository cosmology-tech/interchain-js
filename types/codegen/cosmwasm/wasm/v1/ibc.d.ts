import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgIBCSend */
export interface MsgIBCSend {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: Long;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: Long;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
export interface MsgIBCSendProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend";
    value: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendAmino {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height: string;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp: string;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
export interface MsgIBCSendAminoMsg {
    type: "wasm/MsgIBCSend";
    value: MsgIBCSendAmino;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
    channel: string;
    timeout_height: Long;
    timeout_timestamp: Long;
    data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
    channel: string;
}
export interface MsgIBCCloseChannelProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel";
    value: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelAmino {
    channel: string;
}
export interface MsgIBCCloseChannelAminoMsg {
    type: "wasm/MsgIBCCloseChannel";
    value: MsgIBCCloseChannelAmino;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
    channel: string;
}
export declare const MsgIBCSend: {
    encode(message: MsgIBCSend, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSend;
    fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend;
    fromAmino(object: MsgIBCSendAmino): MsgIBCSend;
    toAmino(message: MsgIBCSend): MsgIBCSendAmino;
    fromAminoMsg(object: MsgIBCSendAminoMsg): MsgIBCSend;
    toAminoMsg(message: MsgIBCSend): MsgIBCSendAminoMsg;
    fromProtoMsg(message: MsgIBCSendProtoMsg): MsgIBCSend;
    toProto(message: MsgIBCSend): Uint8Array;
    toProtoMsg(message: MsgIBCSend): MsgIBCSendProtoMsg;
};
export declare const MsgIBCCloseChannel: {
    encode(message: MsgIBCCloseChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCCloseChannel;
    fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel;
    fromAmino(object: MsgIBCCloseChannelAmino): MsgIBCCloseChannel;
    toAmino(message: MsgIBCCloseChannel): MsgIBCCloseChannelAmino;
    fromAminoMsg(object: MsgIBCCloseChannelAminoMsg): MsgIBCCloseChannel;
    toAminoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelAminoMsg;
    fromProtoMsg(message: MsgIBCCloseChannelProtoMsg): MsgIBCCloseChannel;
    toProto(message: MsgIBCCloseChannel): Uint8Array;
    toProtoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelProtoMsg;
};
