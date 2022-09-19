import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */

export interface MsgTransfer {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */

  source_channel: string;
  /** the tokens to be transferred */

  token: Coin;
  /** the sender address */

  sender: string;
  /** the recipient address on the destination chain */

  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */

  timeout_height: Height;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */

  timeout_timestamp: Long;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */

export interface MsgTransferSDKType {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */

  source_channel: string;
  /** the tokens to be transferred */

  token: CoinSDKType;
  /** the sender address */

  sender: string;
  /** the recipient address on the destination chain */

  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */

  timeout_height: HeightSDKType;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */

  timeout_timestamp: Long;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */

export interface MsgTransferResponse {}
/** MsgTransferResponse defines the Msg/Transfer response type. */

export interface MsgTransferResponseSDKType {}

function createBaseMsgTransfer(): MsgTransfer {
  return {
    source_port: "",
    source_channel: "",
    token: undefined,
    sender: "",
    receiver: "",
    timeout_height: undefined,
    timeout_timestamp: Long.UZERO
  };
}

export const MsgTransfer = {
  encode(message: MsgTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source_port !== "") {
      writer.uint32(10).string(message.source_port);
    }

    if (message.source_channel !== "") {
      writer.uint32(18).string(message.source_channel);
    }

    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }

    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }

    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }

    if (message.timeout_height !== undefined) {
      Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
    }

    if (!message.timeout_timestamp.isZero()) {
      writer.uint32(56).uint64(message.timeout_timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.source_port = reader.string();
          break;

        case 2:
          message.source_channel = reader.string();
          break;

        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;

        case 4:
          message.sender = reader.string();
          break;

        case 5:
          message.receiver = reader.string();
          break;

        case 6:
          message.timeout_height = Height.decode(reader, reader.uint32());
          break;

        case 7:
          message.timeout_timestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.source_port = object.source_port ?? "";
    message.source_channel = object.source_channel ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Height.fromPartial(object.timeout_height) : undefined;
    message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? Long.fromValue(object.timeout_timestamp) : Long.UZERO;
    return message;
  }

};

function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {};
}

export const MsgTransferResponse = {
  encode(_: MsgTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    return message;
  }

};