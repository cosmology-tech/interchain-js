import * as _98 from "./wasm/v1/genesis";
import * as _99 from "./wasm/v1/ibc";
import * as _100 from "./wasm/v1/proposal";
import * as _101 from "./wasm/v1/query";
import * as _102 from "./wasm/v1/tx";
import * as _103 from "./wasm/v1/types";
import * as _178 from "./wasm/v1/tx.amino";
import * as _179 from "./wasm/v1/tx.registry";
import * as _180 from "./wasm/v1/query.lcd";
import * as _181 from "./wasm/v1/query.rpc.Query";
import * as _182 from "./wasm/v1/tx.rpc.msg";
import * as _189 from "./lcd";
import * as _190 from "./rpc.query";
import * as _191 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._103,
      ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182
    };
  }
  export const ClientFactory = {
    ..._189,
    ..._190,
    ..._191
  };
}