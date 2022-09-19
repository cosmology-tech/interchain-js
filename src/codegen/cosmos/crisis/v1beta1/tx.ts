import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */

export interface MsgVerifyInvariant {
  sender: string;
  invariant_module_name: string;
  invariant_route: string;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */

export interface MsgVerifyInvariantSDKType {
  sender: string;
  invariant_module_name: string;
  invariant_route: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

export interface MsgVerifyInvariantResponse {}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */

export interface MsgVerifyInvariantResponseSDKType {}

function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return {
    sender: "",
    invariant_module_name: "",
    invariant_route: ""
  };
}

export const MsgVerifyInvariant = {
  encode(message: MsgVerifyInvariant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.invariant_module_name !== "") {
      writer.uint32(18).string(message.invariant_module_name);
    }

    if (message.invariant_route !== "") {
      writer.uint32(26).string(message.invariant_route);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.invariant_module_name = reader.string();
          break;

        case 3:
          message.invariant_route = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgVerifyInvariant>): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariant_module_name = object.invariant_module_name ?? "";
    message.invariant_route = object.invariant_route ?? "";
    return message;
  }

};

function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return {};
}

export const MsgVerifyInvariantResponse = {
  encode(_: MsgVerifyInvariantResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();

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

  fromPartial(_: DeepPartial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  }

};