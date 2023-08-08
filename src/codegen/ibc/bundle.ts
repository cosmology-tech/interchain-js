import * as _65 from "./applications/interchain_accounts/controller/v1/controller";
import * as _66 from "./applications/interchain_accounts/controller/v1/query";
import * as _67 from "./applications/interchain_accounts/controller/v1/tx";
import * as _68 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _69 from "./applications/interchain_accounts/host/v1/host";
import * as _70 from "./applications/interchain_accounts/host/v1/query";
import * as _71 from "./applications/interchain_accounts/v1/account";
import * as _72 from "./applications/interchain_accounts/v1/metadata";
import * as _73 from "./applications/interchain_accounts/v1/packet";
import * as _74 from "./applications/transfer/v1/genesis";
import * as _75 from "./applications/transfer/v1/query";
import * as _76 from "./applications/transfer/v1/transfer";
import * as _77 from "./applications/transfer/v1/tx";
import * as _78 from "./applications/transfer/v2/packet";
import * as _79 from "./core/channel/v1/channel";
import * as _80 from "./core/channel/v1/genesis";
import * as _81 from "./core/channel/v1/query";
import * as _82 from "./core/channel/v1/tx";
import * as _83 from "./core/client/v1/client";
import * as _84 from "./core/client/v1/genesis";
import * as _85 from "./core/client/v1/query";
import * as _86 from "./core/client/v1/tx";
import * as _87 from "./core/commitment/v1/commitment";
import * as _88 from "./core/connection/v1/connection";
import * as _89 from "./core/connection/v1/genesis";
import * as _90 from "./core/connection/v1/query";
import * as _91 from "./core/connection/v1/tx";
import * as _92 from "./lightclients/localhost/v1/localhost";
import * as _93 from "./lightclients/solomachine/v1/solomachine";
import * as _94 from "./lightclients/solomachine/v2/solomachine";
import * as _95 from "./lightclients/tendermint/v1/tendermint";
import * as _151 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _152 from "./applications/transfer/v1/tx.amino";
import * as _153 from "./core/channel/v1/tx.amino";
import * as _154 from "./core/client/v1/tx.amino";
import * as _155 from "./core/connection/v1/tx.amino";
import * as _156 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _157 from "./applications/transfer/v1/tx.registry";
import * as _158 from "./core/channel/v1/tx.registry";
import * as _159 from "./core/client/v1/tx.registry";
import * as _160 from "./core/connection/v1/tx.registry";
import * as _161 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _162 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _163 from "./applications/transfer/v1/query.lcd";
import * as _164 from "./core/channel/v1/query.lcd";
import * as _165 from "./core/client/v1/query.lcd";
import * as _166 from "./core/connection/v1/query.lcd";
import * as _167 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _168 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _169 from "./applications/transfer/v1/query.rpc.Query";
import * as _170 from "./core/channel/v1/query.rpc.Query";
import * as _171 from "./core/client/v1/query.rpc.Query";
import * as _172 from "./core/connection/v1/query.rpc.Query";
import * as _173 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _174 from "./applications/transfer/v1/tx.rpc.msg";
import * as _175 from "./core/channel/v1/tx.rpc.msg";
import * as _176 from "./core/client/v1/tx.rpc.msg";
import * as _177 from "./core/connection/v1/tx.rpc.msg";
import * as _186 from "./lcd";
import * as _187 from "./rpc.query";
import * as _188 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._65,
          ..._66,
          ..._67,
          ..._151,
          ..._156,
          ..._161,
          ..._167,
          ..._173
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._68
        };
      }
      export namespace host {
        export const v1 = {
          ..._69,
          ..._70,
          ..._162,
          ..._168
        };
      }
      export const v1 = {
        ..._71,
        ..._72,
        ..._73
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._74,
        ..._75,
        ..._76,
        ..._77,
        ..._152,
        ..._157,
        ..._163,
        ..._169,
        ..._174
      };
      export const v2 = {
        ..._78
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._79,
        ..._80,
        ..._81,
        ..._82,
        ..._153,
        ..._158,
        ..._164,
        ..._170,
        ..._175
      };
    }
    export namespace client {
      export const v1 = {
        ..._83,
        ..._84,
        ..._85,
        ..._86,
        ..._154,
        ..._159,
        ..._165,
        ..._171,
        ..._176
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._87
      };
    }
    export namespace connection {
      export const v1 = {
        ..._88,
        ..._89,
        ..._90,
        ..._91,
        ..._155,
        ..._160,
        ..._166,
        ..._172,
        ..._177
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._92
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._93
      };
      export const v2 = {
        ..._94
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._95
      };
    }
  }
  export const ClientFactory = {
    ..._186,
    ..._187,
    ..._188
  };
}