import * as _85 from "./wasm/v1/genesis";
import * as _86 from "./wasm/v1/ibc";
import * as _87 from "./wasm/v1/proposal";
import * as _88 from "./wasm/v1/query";
import * as _89 from "./wasm/v1/tx";
import * as _90 from "./wasm/v1/types";
import * as _204 from "./wasm/v1/tx.amino";
import * as _205 from "./wasm/v1/tx.registry";
import * as _206 from "./wasm/v1/query.lcd";
import * as _207 from "./wasm/v1/query.rpc.query";
import * as _208 from "./wasm/v1/tx.rpc.msg";
import * as _233 from "./lcd";
import * as _234 from "./rpc.query";
import * as _235 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._85,
      ..._86,
      ..._87,
      ..._88,
      ..._89,
      ..._90,
      ..._204,
      ..._205,
      ..._206,
      ..._207,
      ..._208
    };
  }
  export const ClientFactory = { ..._233,
    ..._234,
    ..._235
  };
}