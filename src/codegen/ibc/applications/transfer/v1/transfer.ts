import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */

export interface DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */

  base_denom: string;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */

export interface DenomTraceSDKType {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */

  base_denom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */

export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */

  receive_enabled: boolean;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */

export interface ParamsSDKType {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */

  receive_enabled: boolean;
}

function createBaseDenomTrace(): DenomTrace {
  return {
    path: "",
    base_denom: ""
  };
}

export const DenomTrace = {
  encode(message: DenomTrace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }

    if (message.base_denom !== "") {
      writer.uint32(18).string(message.base_denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomTrace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;

        case 2:
          message.base_denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DenomTrace>): DenomTrace {
    const message = createBaseDenomTrace();
    message.path = object.path ?? "";
    message.base_denom = object.base_denom ?? "";
    return message;
  }

};

function createBaseParams(): Params {
  return {
    send_enabled: false,
    receive_enabled: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.send_enabled === true) {
      writer.uint32(8).bool(message.send_enabled);
    }

    if (message.receive_enabled === true) {
      writer.uint32(16).bool(message.receive_enabled);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.send_enabled = reader.bool();
          break;

        case 2:
          message.receive_enabled = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.send_enabled = object.send_enabled ?? false;
    message.receive_enabled = object.receive_enabled ?? false;
    return message;
  }

};