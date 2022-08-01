import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _218 from "./wasm/v1/tx.amino";
import * as _219 from "./wasm/v1/tx.registry";
import * as _220 from "./wasm/v1/query.lcd";
import * as _221 from "./wasm/v1/query.rpc.query";
import * as _222 from "./wasm/v1/tx.rpc.msg";
import * as _247 from "./lcd";
import * as _248 from "./rpc.query";
import * as _249 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222
    };
  }
  export const ClientFactory = { ..._247,
    ..._248,
    ..._249
  };
}