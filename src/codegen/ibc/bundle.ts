import * as _60 from "./applications/interchain_accounts/controller/v1/controller";
import * as _61 from "./applications/interchain_accounts/controller/v1/query";
import * as _62 from "./applications/interchain_accounts/controller/v1/tx";
import * as _63 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _64 from "./applications/interchain_accounts/host/v1/host";
import * as _65 from "./applications/interchain_accounts/host/v1/query";
import * as _66 from "./applications/interchain_accounts/v1/account";
import * as _67 from "./applications/interchain_accounts/v1/metadata";
import * as _68 from "./applications/interchain_accounts/v1/packet";
import * as _69 from "./applications/transfer/v1/genesis";
import * as _70 from "./applications/transfer/v1/query";
import * as _71 from "./applications/transfer/v1/transfer";
import * as _72 from "./applications/transfer/v1/tx";
import * as _73 from "./applications/transfer/v2/packet";
import * as _74 from "./core/channel/v1/channel";
import * as _75 from "./core/channel/v1/genesis";
import * as _76 from "./core/channel/v1/query";
import * as _77 from "./core/channel/v1/tx";
import * as _78 from "./core/client/v1/client";
import * as _79 from "./core/client/v1/genesis";
import * as _80 from "./core/client/v1/query";
import * as _81 from "./core/client/v1/tx";
import * as _82 from "./core/commitment/v1/commitment";
import * as _83 from "./core/connection/v1/connection";
import * as _84 from "./core/connection/v1/genesis";
import * as _85 from "./core/connection/v1/query";
import * as _86 from "./core/connection/v1/tx";
import * as _87 from "./lightclients/localhost/v1/localhost";
import * as _88 from "./lightclients/solomachine/v1/solomachine";
import * as _89 from "./lightclients/solomachine/v2/solomachine";
import * as _90 from "./lightclients/tendermint/v1/tendermint";
import * as _144 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _145 from "./applications/transfer/v1/tx.amino";
import * as _146 from "./core/channel/v1/tx.amino";
import * as _147 from "./core/client/v1/tx.amino";
import * as _148 from "./core/connection/v1/tx.amino";
import * as _149 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _150 from "./applications/transfer/v1/tx.registry";
import * as _151 from "./core/channel/v1/tx.registry";
import * as _152 from "./core/client/v1/tx.registry";
import * as _153 from "./core/connection/v1/tx.registry";
import * as _154 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _155 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _156 from "./applications/transfer/v1/query.lcd";
import * as _157 from "./core/channel/v1/query.lcd";
import * as _158 from "./core/client/v1/query.lcd";
import * as _159 from "./core/connection/v1/query.lcd";
import * as _160 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _161 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _162 from "./applications/transfer/v1/query.rpc.Query";
import * as _163 from "./core/channel/v1/query.rpc.Query";
import * as _164 from "./core/client/v1/query.rpc.Query";
import * as _165 from "./core/connection/v1/query.rpc.Query";
import * as _166 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _167 from "./applications/transfer/v1/tx.rpc.msg";
import * as _168 from "./core/channel/v1/tx.rpc.msg";
import * as _169 from "./core/client/v1/tx.rpc.msg";
import * as _170 from "./core/connection/v1/tx.rpc.msg";
import * as _179 from "./lcd";
import * as _180 from "./rpc.query";
import * as _181 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._60,
          ..._61,
          ..._62,
          ..._144,
          ..._149,
          ..._154,
          ..._160,
          ..._166
        };
      }
      export namespace genesis {
        export const v1 = { ..._63
        };
      }
      export namespace host {
        export const v1 = { ..._64,
          ..._65,
          ..._155,
          ..._161
        };
      }
      export const v1 = { ..._66,
        ..._67,
        ..._68
      };
    }
    export namespace transfer {
      export const v1 = { ..._69,
        ..._70,
        ..._71,
        ..._72,
        ..._145,
        ..._150,
        ..._156,
        ..._162,
        ..._167
      };
      export const v2 = { ..._73
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._74,
        ..._75,
        ..._76,
        ..._77,
        ..._146,
        ..._151,
        ..._157,
        ..._163,
        ..._168
      };
    }
    export namespace client {
      export const v1 = { ..._78,
        ..._79,
        ..._80,
        ..._81,
        ..._147,
        ..._152,
        ..._158,
        ..._164,
        ..._169
      };
    }
    export namespace commitment {
      export const v1 = { ..._82
      };
    }
    export namespace connection {
      export const v1 = { ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._148,
        ..._153,
        ..._159,
        ..._165,
        ..._170
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._87
      };
    }
    export namespace solomachine {
      export const v1 = { ..._88
      };
      export const v2 = { ..._89
      };
    }
    export namespace tendermint {
      export const v1 = { ..._90
      };
    }
  }
  export const ClientFactory = { ..._179,
    ..._180,
    ..._181
  };
}