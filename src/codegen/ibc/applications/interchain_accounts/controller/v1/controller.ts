import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../../../helpers";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */

export interface Params {
  /** controller_enabled enables or disables the controller submodule. */
  controllerEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */

export interface ParamsAmino {
  /** controller_enabled enables or disables the controller submodule. */
  controller_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */

export interface ParamsSDKType {
  controller_enabled: boolean;
}

function createBaseParams(): Params {
  return {
    controllerEnabled: false
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controllerEnabled === true) {
      writer.uint32(8).bool(message.controllerEnabled);
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
          message.controllerEnabled = reader.bool();
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
    message.controllerEnabled = object.controllerEnabled ?? false;
    return message;
  },

  fromAmino(object: ParamsAmino): Params {
    return {
      controllerEnabled: object.controller_enabled
    };
  },

  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.controller_enabled = message.controllerEnabled;
    return obj;
  },

  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },

  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },

  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },

  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },

  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
      value: Params.encode(message).finish()
    };
  }

};