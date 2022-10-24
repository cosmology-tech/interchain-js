import * as _48 from "./wasm/v1/genesis";
import * as _49 from "./wasm/v1/ibc";
import * as _50 from "./wasm/v1/proposal";
import * as _51 from "./wasm/v1/query";
import * as _52 from "./wasm/v1/tx";
import * as _53 from "./wasm/v1/types";
import * as _130 from "./wasm/v1/tx.amino";
import * as _131 from "./wasm/v1/tx.registry";
import * as _132 from "./wasm/v1/query.lcd";
import * as _133 from "./wasm/v1/query.rpc.Query";
import * as _134 from "./wasm/v1/tx.rpc.msg";
import * as _158 from "./lcd";
import * as _159 from "./rpc.query";
import * as _160 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._130,
      ..._131,
      ..._132,
      ..._133,
      ..._134
    };
  }
  export const ClientFactory = { ..._158,
    ..._159,
    ..._160
  };
}