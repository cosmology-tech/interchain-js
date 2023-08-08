import * as _54 from "./abci/types";
import * as _55 from "./crypto/keys";
import * as _56 from "./crypto/proof";
import * as _57 from "./libs/bits/types";
import * as _58 from "./p2p/types";
import * as _59 from "./types/block";
import * as _60 from "./types/evidence";
import * as _61 from "./types/params";
import * as _62 from "./types/types";
import * as _63 from "./types/validator";
import * as _64 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._54
  };
  export const crypto = {
    ..._55,
    ..._56
  };
  export namespace libs {
    export const bits = {
      ..._57
    };
  }
  export const p2p = {
    ..._58
  };
  export const types = {
    ..._59,
    ..._60,
    ..._61,
    ..._62,
    ..._63
  };
  export const version = {
    ..._64
  };
}