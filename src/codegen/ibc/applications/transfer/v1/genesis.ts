import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the ibc-transfer genesis state */

export interface GenesisState {
  port_id: string;
  denom_traces: DenomTrace[];
  params: Params;
}
/** GenesisState defines the ibc-transfer genesis state */

export interface GenesisStateSDKType {
  port_id: string;
  denom_traces: DenomTraceSDKType[];
  params: ParamsSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    port_id: "",
    denom_traces: [],
    params: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }

    for (const v of message.denom_traces) {
      DenomTrace.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;

        case 2:
          message.denom_traces.push(DenomTrace.decode(reader, reader.uint32()));
          break;

        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.port_id = object.port_id ?? "";
    message.denom_traces = object.denom_traces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};