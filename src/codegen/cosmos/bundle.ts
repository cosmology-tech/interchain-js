import * as _0 from "./app/module/v1alpha1/module";
import * as _1 from "./auth/v1beta1/auth";
import * as _2 from "./auth/v1beta1/genesis";
import * as _3 from "./auth/v1beta1/query";
import * as _4 from "./authz/v1beta1/authz";
import * as _5 from "./authz/v1beta1/event";
import * as _6 from "./authz/v1beta1/genesis";
import * as _7 from "./authz/v1beta1/query";
import * as _8 from "./authz/v1beta1/tx";
import * as _9 from "./bank/v1beta1/authz";
import * as _10 from "./bank/v1beta1/bank";
import * as _11 from "./bank/v1beta1/genesis";
import * as _12 from "./bank/v1beta1/query";
import * as _13 from "./bank/v1beta1/tx";
import * as _14 from "./base/abci/v1beta1/abci";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distribution/v1beta1/distribution";
import * as _26 from "./distribution/v1beta1/genesis";
import * as _27 from "./distribution/v1beta1/query";
import * as _28 from "./distribution/v1beta1/tx";
import * as _29 from "./gov/v1/genesis";
import * as _30 from "./gov/v1/gov";
import * as _31 from "./gov/v1/query";
import * as _32 from "./gov/v1/tx";
import * as _33 from "./gov/v1beta1/genesis";
import * as _34 from "./gov/v1beta1/gov";
import * as _35 from "./gov/v1beta1/query";
import * as _36 from "./gov/v1beta1/tx";
import * as _37 from "./mint/v1beta1/genesis";
import * as _38 from "./mint/v1beta1/mint";
import * as _39 from "./mint/v1beta1/query";
import * as _40 from "./orm/module/v1alpha1/module";
import * as _41 from "./staking/v1beta1/authz";
import * as _42 from "./staking/v1beta1/genesis";
import * as _43 from "./staking/v1beta1/query";
import * as _44 from "./staking/v1beta1/staking";
import * as _45 from "./staking/v1beta1/tx";
import * as _46 from "./tx/signing/v1beta1/signing";
import * as _47 from "./tx/v1beta1/service";
import * as _48 from "./tx/v1beta1/tx";
import * as _49 from "./upgrade/v1beta1/query";
import * as _50 from "./upgrade/v1beta1/tx";
import * as _51 from "./upgrade/v1beta1/upgrade";
import * as _52 from "./ics23/v1/proofs";
import * as _53 from "../proofs";
import * as _110 from "./bank/v1beta1/tx.amino";
import * as _111 from "./distribution/v1beta1/tx.amino";
import * as _112 from "./gov/v1/tx.amino";
import * as _113 from "./gov/v1beta1/tx.amino";
import * as _114 from "./staking/v1beta1/tx.amino";
import * as _115 from "./upgrade/v1beta1/tx.amino";
import * as _116 from "./bank/v1beta1/tx.registry";
import * as _117 from "./distribution/v1beta1/tx.registry";
import * as _118 from "./gov/v1/tx.registry";
import * as _119 from "./gov/v1beta1/tx.registry";
import * as _120 from "./staking/v1beta1/tx.registry";
import * as _121 from "./upgrade/v1beta1/tx.registry";
import * as _122 from "./auth/v1beta1/query.lcd";
import * as _123 from "./authz/v1beta1/query.lcd";
import * as _124 from "./bank/v1beta1/query.lcd";
import * as _125 from "./base/node/v1beta1/query.lcd";
import * as _126 from "./distribution/v1beta1/query.lcd";
import * as _127 from "./gov/v1/query.lcd";
import * as _128 from "./gov/v1beta1/query.lcd";
import * as _129 from "./mint/v1beta1/query.lcd";
import * as _130 from "./staking/v1beta1/query.lcd";
import * as _131 from "./tx/v1beta1/service.lcd";
import * as _132 from "./upgrade/v1beta1/query.lcd";
import * as _133 from "./auth/v1beta1/query.rpc.Query";
import * as _134 from "./authz/v1beta1/query.rpc.Query";
import * as _135 from "./bank/v1beta1/query.rpc.Query";
import * as _136 from "./base/node/v1beta1/query.rpc.Service";
import * as _137 from "./distribution/v1beta1/query.rpc.Query";
import * as _138 from "./gov/v1/query.rpc.Query";
import * as _139 from "./gov/v1beta1/query.rpc.Query";
import * as _140 from "./mint/v1beta1/query.rpc.Query";
import * as _141 from "./staking/v1beta1/query.rpc.Query";
import * as _142 from "./tx/v1beta1/service.rpc.Service";
import * as _143 from "./upgrade/v1beta1/query.rpc.Query";
import * as _144 from "./authz/v1beta1/tx.rpc.msg";
import * as _145 from "./bank/v1beta1/tx.rpc.msg";
import * as _146 from "./distribution/v1beta1/tx.rpc.msg";
import * as _147 from "./gov/v1/tx.rpc.msg";
import * as _148 from "./gov/v1beta1/tx.rpc.msg";
import * as _149 from "./staking/v1beta1/tx.rpc.msg";
import * as _150 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _183 from "./lcd";
import * as _184 from "./rpc.query";
import * as _185 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace module {
      export const v1alpha1 = {
        ..._0
      };
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._122,
      ..._133
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._123,
      ..._134,
      ..._144
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._110,
      ..._116,
      ..._124,
      ..._135,
      ..._145
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._14
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._15,
        ..._125,
        ..._136
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._16
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._17
      };
    }
    export const v1beta1 = {
      ..._18
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._19
    };
    export namespace hd {
      export const v1 = {
        ..._20
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._21
      };
    }
    export const multisig = {
      ..._22
    };
    export const secp256k1 = {
      ..._23
    };
    export const secp256r1 = {
      ..._24
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._25,
      ..._26,
      ..._27,
      ..._28,
      ..._111,
      ..._117,
      ..._126,
      ..._137,
      ..._146
    };
  }
  export namespace gov {
    export const v1 = {
      ..._29,
      ..._30,
      ..._31,
      ..._32,
      ..._112,
      ..._118,
      ..._127,
      ..._138,
      ..._147
    };
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._113,
      ..._119,
      ..._128,
      ..._139,
      ..._148
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._129,
      ..._140
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._40
      };
    }
  }
  export namespace staking {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._114,
      ..._120,
      ..._130,
      ..._141,
      ..._149
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._46
      };
    }
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._131,
      ..._142
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._115,
      ..._121,
      ..._132,
      ..._143,
      ..._150
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._52,
      ..._53
    };
  }
  export const ClientFactory = {
    ..._183,
    ..._184,
    ..._185
  };
}