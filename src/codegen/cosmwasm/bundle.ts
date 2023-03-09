import * as _93 from "./wasm/v1/genesis";
import * as _94 from "./wasm/v1/ibc";
import * as _95 from "./wasm/v1/proposal";
import * as _96 from "./wasm/v1/query";
import * as _97 from "./wasm/v1/tx";
import * as _98 from "./wasm/v1/types";
import * as _171 from "./wasm/v1/tx.amino";
import * as _172 from "./wasm/v1/tx.registry";
import * as _173 from "./wasm/v1/query.lcd";
import * as _174 from "./wasm/v1/query.rpc.Query";
import * as _175 from "./wasm/v1/tx.rpc.msg";
import * as _182 from "./lcd";
import * as _183 from "./rpc.query";
import * as _184 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._175
    };
  }
  export const ClientFactory = { ..._182,
    ..._183,
    ..._184
  };
}