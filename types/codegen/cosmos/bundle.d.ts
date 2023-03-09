import * as _0 from "./app/module/v1alpha1/module";
import * as _1 from "./authz/v1beta1/authz";
import * as _2 from "./authz/v1beta1/event";
import * as _3 from "./authz/v1beta1/genesis";
import * as _4 from "./authz/v1beta1/query";
import * as _5 from "./authz/v1beta1/tx";
import * as _6 from "./bank/v1beta1/authz";
import * as _7 from "./bank/v1beta1/bank";
import * as _8 from "./bank/v1beta1/genesis";
import * as _9 from "./bank/v1beta1/query";
import * as _10 from "./bank/v1beta1/tx";
import * as _11 from "./base/abci/v1beta1/abci";
import * as _12 from "./base/node/v1beta1/query";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./crypto/ed25519/keys";
import * as _17 from "./crypto/hd/v1/hd";
import * as _18 from "./crypto/keyring/v1/record";
import * as _19 from "./crypto/multisig/keys";
import * as _20 from "./crypto/secp256k1/keys";
import * as _21 from "./crypto/secp256r1/keys";
import * as _22 from "./distribution/v1beta1/distribution";
import * as _23 from "./distribution/v1beta1/genesis";
import * as _24 from "./distribution/v1beta1/query";
import * as _25 from "./distribution/v1beta1/tx";
import * as _26 from "./gov/v1/genesis";
import * as _27 from "./gov/v1/gov";
import * as _28 from "./gov/v1/query";
import * as _29 from "./gov/v1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./mint/v1beta1/genesis";
import * as _35 from "./mint/v1beta1/mint";
import * as _36 from "./mint/v1beta1/query";
import * as _37 from "./orm/module/v1alpha1/module";
import * as _38 from "./staking/v1beta1/authz";
import * as _39 from "./staking/v1beta1/genesis";
import * as _40 from "./staking/v1beta1/query";
import * as _41 from "./staking/v1beta1/staking";
import * as _42 from "./staking/v1beta1/tx";
import * as _43 from "./tx/signing/v1beta1/signing";
import * as _44 from "./tx/v1beta1/service";
import * as _45 from "./tx/v1beta1/tx";
import * as _46 from "./upgrade/v1beta1/query";
import * as _47 from "./upgrade/v1beta1/tx";
import * as _48 from "./upgrade/v1beta1/upgrade";
import * as _117 from "./authz/v1beta1/query.lcd";
import * as _118 from "./bank/v1beta1/query.lcd";
import * as _119 from "./base/node/v1beta1/query.lcd";
import * as _120 from "./distribution/v1beta1/query.lcd";
import * as _121 from "./gov/v1/query.lcd";
import * as _122 from "./gov/v1beta1/query.lcd";
import * as _123 from "./mint/v1beta1/query.lcd";
import * as _124 from "./staking/v1beta1/query.lcd";
import * as _125 from "./tx/v1beta1/service.lcd";
import * as _126 from "./upgrade/v1beta1/query.lcd";
import * as _127 from "./authz/v1beta1/query.rpc.Query";
import * as _128 from "./bank/v1beta1/query.rpc.Query";
import * as _129 from "./base/node/v1beta1/query.rpc.Service";
import * as _130 from "./distribution/v1beta1/query.rpc.Query";
import * as _131 from "./gov/v1/query.rpc.Query";
import * as _132 from "./gov/v1beta1/query.rpc.Query";
import * as _133 from "./mint/v1beta1/query.rpc.Query";
import * as _134 from "./staking/v1beta1/query.rpc.Query";
import * as _135 from "./tx/v1beta1/service.rpc.Service";
import * as _136 from "./upgrade/v1beta1/query.rpc.Query";
import * as _137 from "./authz/v1beta1/tx.rpc.msg";
import * as _138 from "./bank/v1beta1/tx.rpc.msg";
import * as _139 from "./distribution/v1beta1/tx.rpc.msg";
import * as _140 from "./gov/v1/tx.rpc.msg";
import * as _141 from "./gov/v1beta1/tx.rpc.msg";
import * as _142 from "./staking/v1beta1/tx.rpc.msg";
import * as _143 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _0.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Module;
                    fromPartial(_: any): _0.Module;
                    fromAmino(_: _0.ModuleAmino): _0.Module;
                    toAmino(_: _0.Module): _0.ModuleAmino;
                    fromAminoMsg(object: _0.ModuleAminoMsg): _0.Module;
                    toAminoMsg(message: _0.Module): _0.ModuleAminoMsg;
                    fromProtoMsg(message: _0.ModuleProtoMsg): _0.Module;
                    toProto(message: _0.Module): Uint8Array;
                    toProtoMsg(message: _0.Module): _0.ModuleProtoMsg;
                };
            };
        }
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            QueryClientImpl: typeof _127.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _4.QueryGrantsRequest): Promise<_4.QueryGrantsResponse>;
                granterGrants(request: _4.QueryGranterGrantsRequest): Promise<_4.QueryGranterGrantsResponse>;
                granteeGrants(request: _4.QueryGranteeGrantsRequest): Promise<_4.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _117.LCDQueryClient;
            MsgGrant: {
                encode(message: _5.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgGrant;
                fromPartial(object: any): _5.MsgGrant;
                fromAmino(object: _5.MsgGrantAmino): _5.MsgGrant;
                toAmino(message: _5.MsgGrant): _5.MsgGrantAmino;
                fromAminoMsg(object: _5.MsgGrantAminoMsg): _5.MsgGrant;
                toAminoMsg(message: _5.MsgGrant): _5.MsgGrantAminoMsg;
                fromProtoMsg(message: _5.MsgGrantProtoMsg): _5.MsgGrant;
                toProto(message: _5.MsgGrant): Uint8Array;
                toProtoMsg(message: _5.MsgGrant): _5.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _5.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgExecResponse;
                fromPartial(object: any): _5.MsgExecResponse;
                fromAmino(object: _5.MsgExecResponseAmino): _5.MsgExecResponse;
                toAmino(message: _5.MsgExecResponse): _5.MsgExecResponseAmino;
                fromAminoMsg(object: _5.MsgExecResponseAminoMsg): _5.MsgExecResponse;
                toAminoMsg(message: _5.MsgExecResponse): _5.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _5.MsgExecResponseProtoMsg): _5.MsgExecResponse;
                toProto(message: _5.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _5.MsgExecResponse): _5.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _5.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgExec;
                fromPartial(object: any): _5.MsgExec;
                fromAmino(object: _5.MsgExecAmino): _5.MsgExec;
                toAmino(message: _5.MsgExec): _5.MsgExecAmino;
                fromAminoMsg(object: _5.MsgExecAminoMsg): _5.MsgExec;
                toAminoMsg(message: _5.MsgExec): _5.MsgExecAminoMsg;
                fromProtoMsg(message: _5.MsgExecProtoMsg): _5.MsgExec;
                toProto(message: _5.MsgExec): Uint8Array;
                toProtoMsg(message: _5.MsgExec): _5.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _5.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgGrantResponse;
                fromPartial(_: any): _5.MsgGrantResponse;
                fromAmino(_: _5.MsgGrantResponseAmino): _5.MsgGrantResponse;
                toAmino(_: _5.MsgGrantResponse): _5.MsgGrantResponseAmino;
                fromAminoMsg(object: _5.MsgGrantResponseAminoMsg): _5.MsgGrantResponse;
                toAminoMsg(message: _5.MsgGrantResponse): _5.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _5.MsgGrantResponseProtoMsg): _5.MsgGrantResponse;
                toProto(message: _5.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _5.MsgGrantResponse): _5.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _5.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgRevoke;
                fromPartial(object: any): _5.MsgRevoke;
                fromAmino(object: _5.MsgRevokeAmino): _5.MsgRevoke;
                toAmino(message: _5.MsgRevoke): _5.MsgRevokeAmino;
                fromAminoMsg(object: _5.MsgRevokeAminoMsg): _5.MsgRevoke;
                toAminoMsg(message: _5.MsgRevoke): _5.MsgRevokeAminoMsg;
                fromProtoMsg(message: _5.MsgRevokeProtoMsg): _5.MsgRevoke;
                toProto(message: _5.MsgRevoke): Uint8Array;
                toProtoMsg(message: _5.MsgRevoke): _5.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _5.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgRevokeResponse;
                fromPartial(_: any): _5.MsgRevokeResponse;
                fromAmino(_: _5.MsgRevokeResponseAmino): _5.MsgRevokeResponse;
                toAmino(_: _5.MsgRevokeResponse): _5.MsgRevokeResponseAmino;
                fromAminoMsg(object: _5.MsgRevokeResponseAminoMsg): _5.MsgRevokeResponse;
                toAminoMsg(message: _5.MsgRevokeResponse): _5.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _5.MsgRevokeResponseProtoMsg): _5.MsgRevokeResponse;
                toProto(message: _5.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _5.MsgRevokeResponse): _5.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                encode(message: _4.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGrantsRequest;
                fromPartial(object: any): _4.QueryGrantsRequest;
                fromAmino(object: _4.QueryGrantsRequestAmino): _4.QueryGrantsRequest;
                toAmino(message: _4.QueryGrantsRequest): _4.QueryGrantsRequestAmino;
                fromAminoMsg(object: _4.QueryGrantsRequestAminoMsg): _4.QueryGrantsRequest;
                toAminoMsg(message: _4.QueryGrantsRequest): _4.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryGrantsRequestProtoMsg): _4.QueryGrantsRequest;
                toProto(message: _4.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryGrantsRequest): _4.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _4.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGrantsResponse;
                fromPartial(object: any): _4.QueryGrantsResponse;
                fromAmino(object: _4.QueryGrantsResponseAmino): _4.QueryGrantsResponse;
                toAmino(message: _4.QueryGrantsResponse): _4.QueryGrantsResponseAmino;
                fromAminoMsg(object: _4.QueryGrantsResponseAminoMsg): _4.QueryGrantsResponse;
                toAminoMsg(message: _4.QueryGrantsResponse): _4.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryGrantsResponseProtoMsg): _4.QueryGrantsResponse;
                toProto(message: _4.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryGrantsResponse): _4.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _4.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranterGrantsRequest;
                fromPartial(object: any): _4.QueryGranterGrantsRequest;
                fromAmino(object: _4.QueryGranterGrantsRequestAmino): _4.QueryGranterGrantsRequest;
                toAmino(message: _4.QueryGranterGrantsRequest): _4.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _4.QueryGranterGrantsRequestAminoMsg): _4.QueryGranterGrantsRequest;
                toAminoMsg(message: _4.QueryGranterGrantsRequest): _4.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryGranterGrantsRequestProtoMsg): _4.QueryGranterGrantsRequest;
                toProto(message: _4.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryGranterGrantsRequest): _4.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _4.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranterGrantsResponse;
                fromPartial(object: any): _4.QueryGranterGrantsResponse;
                fromAmino(object: _4.QueryGranterGrantsResponseAmino): _4.QueryGranterGrantsResponse;
                toAmino(message: _4.QueryGranterGrantsResponse): _4.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _4.QueryGranterGrantsResponseAminoMsg): _4.QueryGranterGrantsResponse;
                toAminoMsg(message: _4.QueryGranterGrantsResponse): _4.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryGranterGrantsResponseProtoMsg): _4.QueryGranterGrantsResponse;
                toProto(message: _4.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryGranterGrantsResponse): _4.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _4.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranteeGrantsRequest;
                fromPartial(object: any): _4.QueryGranteeGrantsRequest;
                fromAmino(object: _4.QueryGranteeGrantsRequestAmino): _4.QueryGranteeGrantsRequest;
                toAmino(message: _4.QueryGranteeGrantsRequest): _4.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _4.QueryGranteeGrantsRequestAminoMsg): _4.QueryGranteeGrantsRequest;
                toAminoMsg(message: _4.QueryGranteeGrantsRequest): _4.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _4.QueryGranteeGrantsRequestProtoMsg): _4.QueryGranteeGrantsRequest;
                toProto(message: _4.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryGranteeGrantsRequest): _4.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _4.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryGranteeGrantsResponse;
                fromPartial(object: any): _4.QueryGranteeGrantsResponse;
                fromAmino(object: _4.QueryGranteeGrantsResponseAmino): _4.QueryGranteeGrantsResponse;
                toAmino(message: _4.QueryGranteeGrantsResponse): _4.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _4.QueryGranteeGrantsResponseAminoMsg): _4.QueryGranteeGrantsResponse;
                toAminoMsg(message: _4.QueryGranteeGrantsResponse): _4.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _4.QueryGranteeGrantsResponseProtoMsg): _4.QueryGranteeGrantsResponse;
                toProto(message: _4.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryGranteeGrantsResponse): _4.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromPartial(object: any): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                toAminoMsg(message: _3.GenesisState): _3.GenesisStateAminoMsg;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _2.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.EventGrant;
                fromPartial(object: any): _2.EventGrant;
                fromAmino(object: _2.EventGrantAmino): _2.EventGrant;
                toAmino(message: _2.EventGrant): _2.EventGrantAmino;
                fromAminoMsg(object: _2.EventGrantAminoMsg): _2.EventGrant;
                toAminoMsg(message: _2.EventGrant): _2.EventGrantAminoMsg;
                fromProtoMsg(message: _2.EventGrantProtoMsg): _2.EventGrant;
                toProto(message: _2.EventGrant): Uint8Array;
                toProtoMsg(message: _2.EventGrant): _2.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _2.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.EventRevoke;
                fromPartial(object: any): _2.EventRevoke;
                fromAmino(object: _2.EventRevokeAmino): _2.EventRevoke;
                toAmino(message: _2.EventRevoke): _2.EventRevokeAmino;
                fromAminoMsg(object: _2.EventRevokeAminoMsg): _2.EventRevoke;
                toAminoMsg(message: _2.EventRevoke): _2.EventRevokeAminoMsg;
                fromProtoMsg(message: _2.EventRevokeProtoMsg): _2.EventRevoke;
                toProto(message: _2.EventRevoke): Uint8Array;
                toProtoMsg(message: _2.EventRevoke): _2.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _1.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenericAuthorization;
                fromPartial(object: any): _1.GenericAuthorization;
                fromAmino(object: _1.GenericAuthorizationAmino): _1.GenericAuthorization;
                toAmino(message: _1.GenericAuthorization): _1.GenericAuthorizationAmino;
                fromAminoMsg(object: _1.GenericAuthorizationAminoMsg): _1.GenericAuthorization;
                toAminoMsg(message: _1.GenericAuthorization): _1.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _1.GenericAuthorizationProtoMsg): _1.GenericAuthorization;
                toProto(message: _1.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _1.GenericAuthorization): _1.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _1.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Grant;
                fromPartial(object: any): _1.Grant;
                fromAmino(object: _1.GrantAmino): _1.Grant;
                toAmino(message: _1.Grant): _1.GrantAmino;
                fromAminoMsg(object: _1.GrantAminoMsg): _1.Grant;
                toAminoMsg(message: _1.Grant): _1.GrantAminoMsg;
                fromProtoMsg(message: _1.GrantProtoMsg): _1.Grant;
                toProto(message: _1.Grant): Uint8Array;
                toProtoMsg(message: _1.Grant): _1.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _1.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GrantAuthorization;
                fromPartial(object: any): _1.GrantAuthorization;
                fromAmino(object: _1.GrantAuthorizationAmino): _1.GrantAuthorization;
                toAmino(message: _1.GrantAuthorization): _1.GrantAuthorizationAmino;
                fromAminoMsg(object: _1.GrantAuthorizationAminoMsg): _1.GrantAuthorization;
                toAminoMsg(message: _1.GrantAuthorization): _1.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _1.GrantAuthorizationProtoMsg): _1.GrantAuthorization;
                toProto(message: _1.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _1.GrantAuthorization): _1.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _1.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GrantQueueItem;
                fromPartial(object: any): _1.GrantQueueItem;
                fromAmino(object: _1.GrantQueueItemAmino): _1.GrantQueueItem;
                toAmino(message: _1.GrantQueueItem): _1.GrantQueueItemAmino;
                fromAminoMsg(object: _1.GrantQueueItemAminoMsg): _1.GrantQueueItem;
                toAminoMsg(message: _1.GrantQueueItem): _1.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _1.GrantQueueItemProtoMsg): _1.GrantQueueItem;
                toProto(message: _1.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _1.GrantQueueItem): _1.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _6.SendAuthorization | _38.StakeAuthorization | _1.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _128.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _9.QueryBalanceRequest): Promise<_9.QueryBalanceResponse>;
                allBalances(request: _9.QueryAllBalancesRequest): Promise<_9.QueryAllBalancesResponse>;
                spendableBalances(request: _9.QuerySpendableBalancesRequest): Promise<_9.QuerySpendableBalancesResponse>;
                totalSupply(request?: _9.QueryTotalSupplyRequest): Promise<_9.QueryTotalSupplyResponse>;
                supplyOf(request: _9.QuerySupplyOfRequest): Promise<_9.QuerySupplyOfResponse>;
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                denomMetadata(request: _9.QueryDenomMetadataRequest): Promise<_9.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _9.QueryDenomsMetadataRequest): Promise<_9.QueryDenomsMetadataResponse>;
                denomOwners(request: _9.QueryDenomOwnersRequest): Promise<_9.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _118.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _10.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _10.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _10.MsgSend): {
                        typeUrl: string;
                        value: _10.MsgSend;
                    };
                    multiSend(value: _10.MsgMultiSend): {
                        typeUrl: string;
                        value: _10.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _10.MsgSend): {
                        typeUrl: string;
                        value: _10.MsgSend;
                    };
                    multiSend(value: _10.MsgMultiSend): {
                        typeUrl: string;
                        value: _10.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _10.MsgSend) => _10.MsgSendAmino;
                    fromAmino: (object: _10.MsgSendAmino) => _10.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _10.MsgMultiSend) => _10.MsgMultiSendAmino;
                    fromAmino: (object: _10.MsgMultiSendAmino) => _10.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _10.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgSend;
                fromPartial(object: any): _10.MsgSend;
                fromAmino(object: _10.MsgSendAmino): _10.MsgSend;
                toAmino(message: _10.MsgSend): _10.MsgSendAmino;
                fromAminoMsg(object: _10.MsgSendAminoMsg): _10.MsgSend;
                toAminoMsg(message: _10.MsgSend): _10.MsgSendAminoMsg;
                fromProtoMsg(message: _10.MsgSendProtoMsg): _10.MsgSend;
                toProto(message: _10.MsgSend): Uint8Array;
                toProtoMsg(message: _10.MsgSend): _10.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _10.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgSendResponse;
                fromPartial(_: any): _10.MsgSendResponse;
                fromAmino(_: _10.MsgSendResponseAmino): _10.MsgSendResponse;
                toAmino(_: _10.MsgSendResponse): _10.MsgSendResponseAmino;
                fromAminoMsg(object: _10.MsgSendResponseAminoMsg): _10.MsgSendResponse;
                toAminoMsg(message: _10.MsgSendResponse): _10.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _10.MsgSendResponseProtoMsg): _10.MsgSendResponse;
                toProto(message: _10.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _10.MsgSendResponse): _10.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _10.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgMultiSend;
                fromPartial(object: any): _10.MsgMultiSend;
                fromAmino(object: _10.MsgMultiSendAmino): _10.MsgMultiSend;
                toAmino(message: _10.MsgMultiSend): _10.MsgMultiSendAmino;
                fromAminoMsg(object: _10.MsgMultiSendAminoMsg): _10.MsgMultiSend;
                toAminoMsg(message: _10.MsgMultiSend): _10.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _10.MsgMultiSendProtoMsg): _10.MsgMultiSend;
                toProto(message: _10.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _10.MsgMultiSend): _10.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _10.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgMultiSendResponse;
                fromPartial(_: any): _10.MsgMultiSendResponse;
                fromAmino(_: _10.MsgMultiSendResponseAmino): _10.MsgMultiSendResponse;
                toAmino(_: _10.MsgMultiSendResponse): _10.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _10.MsgMultiSendResponseAminoMsg): _10.MsgMultiSendResponse;
                toAminoMsg(message: _10.MsgMultiSendResponse): _10.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _10.MsgMultiSendResponseProtoMsg): _10.MsgMultiSendResponse;
                toProto(message: _10.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _10.MsgMultiSendResponse): _10.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _9.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBalanceRequest;
                fromPartial(object: any): _9.QueryBalanceRequest;
                fromAmino(object: _9.QueryBalanceRequestAmino): _9.QueryBalanceRequest;
                toAmino(message: _9.QueryBalanceRequest): _9.QueryBalanceRequestAmino;
                fromAminoMsg(object: _9.QueryBalanceRequestAminoMsg): _9.QueryBalanceRequest;
                toAminoMsg(message: _9.QueryBalanceRequest): _9.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _9.QueryBalanceRequestProtoMsg): _9.QueryBalanceRequest;
                toProto(message: _9.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceRequest): _9.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _9.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBalanceResponse;
                fromPartial(object: any): _9.QueryBalanceResponse;
                fromAmino(object: _9.QueryBalanceResponseAmino): _9.QueryBalanceResponse;
                toAmino(message: _9.QueryBalanceResponse): _9.QueryBalanceResponseAmino;
                fromAminoMsg(object: _9.QueryBalanceResponseAminoMsg): _9.QueryBalanceResponse;
                toAminoMsg(message: _9.QueryBalanceResponse): _9.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _9.QueryBalanceResponseProtoMsg): _9.QueryBalanceResponse;
                toProto(message: _9.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBalanceResponse): _9.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _9.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAllBalancesRequest;
                fromPartial(object: any): _9.QueryAllBalancesRequest;
                fromAmino(object: _9.QueryAllBalancesRequestAmino): _9.QueryAllBalancesRequest;
                toAmino(message: _9.QueryAllBalancesRequest): _9.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _9.QueryAllBalancesRequestAminoMsg): _9.QueryAllBalancesRequest;
                toAminoMsg(message: _9.QueryAllBalancesRequest): _9.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _9.QueryAllBalancesRequestProtoMsg): _9.QueryAllBalancesRequest;
                toProto(message: _9.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _9.QueryAllBalancesRequest): _9.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _9.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryAllBalancesResponse;
                fromPartial(object: any): _9.QueryAllBalancesResponse;
                fromAmino(object: _9.QueryAllBalancesResponseAmino): _9.QueryAllBalancesResponse;
                toAmino(message: _9.QueryAllBalancesResponse): _9.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _9.QueryAllBalancesResponseAminoMsg): _9.QueryAllBalancesResponse;
                toAminoMsg(message: _9.QueryAllBalancesResponse): _9.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _9.QueryAllBalancesResponseProtoMsg): _9.QueryAllBalancesResponse;
                toProto(message: _9.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _9.QueryAllBalancesResponse): _9.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _9.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySpendableBalancesRequest;
                fromPartial(object: any): _9.QuerySpendableBalancesRequest;
                fromAmino(object: _9.QuerySpendableBalancesRequestAmino): _9.QuerySpendableBalancesRequest;
                toAmino(message: _9.QuerySpendableBalancesRequest): _9.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _9.QuerySpendableBalancesRequestAminoMsg): _9.QuerySpendableBalancesRequest;
                toAminoMsg(message: _9.QuerySpendableBalancesRequest): _9.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _9.QuerySpendableBalancesRequestProtoMsg): _9.QuerySpendableBalancesRequest;
                toProto(message: _9.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySpendableBalancesRequest): _9.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _9.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySpendableBalancesResponse;
                fromPartial(object: any): _9.QuerySpendableBalancesResponse;
                fromAmino(object: _9.QuerySpendableBalancesResponseAmino): _9.QuerySpendableBalancesResponse;
                toAmino(message: _9.QuerySpendableBalancesResponse): _9.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _9.QuerySpendableBalancesResponseAminoMsg): _9.QuerySpendableBalancesResponse;
                toAminoMsg(message: _9.QuerySpendableBalancesResponse): _9.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _9.QuerySpendableBalancesResponseProtoMsg): _9.QuerySpendableBalancesResponse;
                toProto(message: _9.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySpendableBalancesResponse): _9.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _9.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryTotalSupplyRequest;
                fromPartial(object: any): _9.QueryTotalSupplyRequest;
                fromAmino(object: _9.QueryTotalSupplyRequestAmino): _9.QueryTotalSupplyRequest;
                toAmino(message: _9.QueryTotalSupplyRequest): _9.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _9.QueryTotalSupplyRequestAminoMsg): _9.QueryTotalSupplyRequest;
                toAminoMsg(message: _9.QueryTotalSupplyRequest): _9.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _9.QueryTotalSupplyRequestProtoMsg): _9.QueryTotalSupplyRequest;
                toProto(message: _9.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _9.QueryTotalSupplyRequest): _9.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _9.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryTotalSupplyResponse;
                fromPartial(object: any): _9.QueryTotalSupplyResponse;
                fromAmino(object: _9.QueryTotalSupplyResponseAmino): _9.QueryTotalSupplyResponse;
                toAmino(message: _9.QueryTotalSupplyResponse): _9.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _9.QueryTotalSupplyResponseAminoMsg): _9.QueryTotalSupplyResponse;
                toAminoMsg(message: _9.QueryTotalSupplyResponse): _9.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _9.QueryTotalSupplyResponseProtoMsg): _9.QueryTotalSupplyResponse;
                toProto(message: _9.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _9.QueryTotalSupplyResponse): _9.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _9.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySupplyOfRequest;
                fromPartial(object: any): _9.QuerySupplyOfRequest;
                fromAmino(object: _9.QuerySupplyOfRequestAmino): _9.QuerySupplyOfRequest;
                toAmino(message: _9.QuerySupplyOfRequest): _9.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _9.QuerySupplyOfRequestAminoMsg): _9.QuerySupplyOfRequest;
                toAminoMsg(message: _9.QuerySupplyOfRequest): _9.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _9.QuerySupplyOfRequestProtoMsg): _9.QuerySupplyOfRequest;
                toProto(message: _9.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _9.QuerySupplyOfRequest): _9.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _9.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QuerySupplyOfResponse;
                fromPartial(object: any): _9.QuerySupplyOfResponse;
                fromAmino(object: _9.QuerySupplyOfResponseAmino): _9.QuerySupplyOfResponse;
                toAmino(message: _9.QuerySupplyOfResponse): _9.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _9.QuerySupplyOfResponseAminoMsg): _9.QuerySupplyOfResponse;
                toAminoMsg(message: _9.QuerySupplyOfResponse): _9.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _9.QuerySupplyOfResponseProtoMsg): _9.QuerySupplyOfResponse;
                toProto(message: _9.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _9.QuerySupplyOfResponse): _9.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsRequest;
                fromPartial(_: any): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                toAminoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsResponse;
                fromPartial(object: any): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                toAminoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _9.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomsMetadataRequest;
                fromPartial(object: any): _9.QueryDenomsMetadataRequest;
                fromAmino(object: _9.QueryDenomsMetadataRequestAmino): _9.QueryDenomsMetadataRequest;
                toAmino(message: _9.QueryDenomsMetadataRequest): _9.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _9.QueryDenomsMetadataRequestAminoMsg): _9.QueryDenomsMetadataRequest;
                toAminoMsg(message: _9.QueryDenomsMetadataRequest): _9.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _9.QueryDenomsMetadataRequestProtoMsg): _9.QueryDenomsMetadataRequest;
                toProto(message: _9.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDenomsMetadataRequest): _9.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _9.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomsMetadataResponse;
                fromPartial(object: any): _9.QueryDenomsMetadataResponse;
                fromAmino(object: _9.QueryDenomsMetadataResponseAmino): _9.QueryDenomsMetadataResponse;
                toAmino(message: _9.QueryDenomsMetadataResponse): _9.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _9.QueryDenomsMetadataResponseAminoMsg): _9.QueryDenomsMetadataResponse;
                toAminoMsg(message: _9.QueryDenomsMetadataResponse): _9.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _9.QueryDenomsMetadataResponseProtoMsg): _9.QueryDenomsMetadataResponse;
                toProto(message: _9.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDenomsMetadataResponse): _9.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _9.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomMetadataRequest;
                fromPartial(object: any): _9.QueryDenomMetadataRequest;
                fromAmino(object: _9.QueryDenomMetadataRequestAmino): _9.QueryDenomMetadataRequest;
                toAmino(message: _9.QueryDenomMetadataRequest): _9.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _9.QueryDenomMetadataRequestAminoMsg): _9.QueryDenomMetadataRequest;
                toAminoMsg(message: _9.QueryDenomMetadataRequest): _9.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _9.QueryDenomMetadataRequestProtoMsg): _9.QueryDenomMetadataRequest;
                toProto(message: _9.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDenomMetadataRequest): _9.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _9.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomMetadataResponse;
                fromPartial(object: any): _9.QueryDenomMetadataResponse;
                fromAmino(object: _9.QueryDenomMetadataResponseAmino): _9.QueryDenomMetadataResponse;
                toAmino(message: _9.QueryDenomMetadataResponse): _9.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _9.QueryDenomMetadataResponseAminoMsg): _9.QueryDenomMetadataResponse;
                toAminoMsg(message: _9.QueryDenomMetadataResponse): _9.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _9.QueryDenomMetadataResponseProtoMsg): _9.QueryDenomMetadataResponse;
                toProto(message: _9.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDenomMetadataResponse): _9.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _9.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomOwnersRequest;
                fromPartial(object: any): _9.QueryDenomOwnersRequest;
                fromAmino(object: _9.QueryDenomOwnersRequestAmino): _9.QueryDenomOwnersRequest;
                toAmino(message: _9.QueryDenomOwnersRequest): _9.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _9.QueryDenomOwnersRequestAminoMsg): _9.QueryDenomOwnersRequest;
                toAminoMsg(message: _9.QueryDenomOwnersRequest): _9.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _9.QueryDenomOwnersRequestProtoMsg): _9.QueryDenomOwnersRequest;
                toProto(message: _9.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _9.QueryDenomOwnersRequest): _9.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _9.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DenomOwner;
                fromPartial(object: any): _9.DenomOwner;
                fromAmino(object: _9.DenomOwnerAmino): _9.DenomOwner;
                toAmino(message: _9.DenomOwner): _9.DenomOwnerAmino;
                fromAminoMsg(object: _9.DenomOwnerAminoMsg): _9.DenomOwner;
                toAminoMsg(message: _9.DenomOwner): _9.DenomOwnerAminoMsg;
                fromProtoMsg(message: _9.DenomOwnerProtoMsg): _9.DenomOwner;
                toProto(message: _9.DenomOwner): Uint8Array;
                toProtoMsg(message: _9.DenomOwner): _9.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _9.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryDenomOwnersResponse;
                fromPartial(object: any): _9.QueryDenomOwnersResponse;
                fromAmino(object: _9.QueryDenomOwnersResponseAmino): _9.QueryDenomOwnersResponse;
                toAmino(message: _9.QueryDenomOwnersResponse): _9.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _9.QueryDenomOwnersResponseAminoMsg): _9.QueryDenomOwnersResponse;
                toAminoMsg(message: _9.QueryDenomOwnersResponse): _9.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _9.QueryDenomOwnersResponseProtoMsg): _9.QueryDenomOwnersResponse;
                toProto(message: _9.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _9.QueryDenomOwnersResponse): _9.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromPartial(object: any): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                toAminoMsg(message: _8.GenesisState): _8.GenesisStateAminoMsg;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _8.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Balance;
                fromPartial(object: any): _8.Balance;
                fromAmino(object: _8.BalanceAmino): _8.Balance;
                toAmino(message: _8.Balance): _8.BalanceAmino;
                fromAminoMsg(object: _8.BalanceAminoMsg): _8.Balance;
                toAminoMsg(message: _8.Balance): _8.BalanceAminoMsg;
                fromProtoMsg(message: _8.BalanceProtoMsg): _8.Balance;
                toProto(message: _8.Balance): Uint8Array;
                toProtoMsg(message: _8.Balance): _8.BalanceProtoMsg;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromPartial(object: any): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                toAminoMsg(message: _7.Params): _7.ParamsAminoMsg;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _7.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.SendEnabled;
                fromPartial(object: any): _7.SendEnabled;
                fromAmino(object: _7.SendEnabledAmino): _7.SendEnabled;
                toAmino(message: _7.SendEnabled): _7.SendEnabledAmino;
                fromAminoMsg(object: _7.SendEnabledAminoMsg): _7.SendEnabled;
                toAminoMsg(message: _7.SendEnabled): _7.SendEnabledAminoMsg;
                fromProtoMsg(message: _7.SendEnabledProtoMsg): _7.SendEnabled;
                toProto(message: _7.SendEnabled): Uint8Array;
                toProtoMsg(message: _7.SendEnabled): _7.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _7.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Input;
                fromPartial(object: any): _7.Input;
                fromAmino(object: _7.InputAmino): _7.Input;
                toAmino(message: _7.Input): _7.InputAmino;
                fromAminoMsg(object: _7.InputAminoMsg): _7.Input;
                toAminoMsg(message: _7.Input): _7.InputAminoMsg;
                fromProtoMsg(message: _7.InputProtoMsg): _7.Input;
                toProto(message: _7.Input): Uint8Array;
                toProtoMsg(message: _7.Input): _7.InputProtoMsg;
            };
            Output: {
                encode(message: _7.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Output;
                fromPartial(object: any): _7.Output;
                fromAmino(object: _7.OutputAmino): _7.Output;
                toAmino(message: _7.Output): _7.OutputAmino;
                fromAminoMsg(object: _7.OutputAminoMsg): _7.Output;
                toAminoMsg(message: _7.Output): _7.OutputAminoMsg;
                fromProtoMsg(message: _7.OutputProtoMsg): _7.Output;
                toProto(message: _7.Output): Uint8Array;
                toProtoMsg(message: _7.Output): _7.OutputProtoMsg;
            };
            Supply: {
                encode(message: _7.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Supply;
                fromPartial(object: any): _7.Supply;
                fromAmino(object: _7.SupplyAmino): _7.Supply;
                toAmino(message: _7.Supply): _7.SupplyAmino;
                fromAminoMsg(object: _7.SupplyAminoMsg): _7.Supply;
                toAminoMsg(message: _7.Supply): _7.SupplyAminoMsg;
                fromProtoMsg(message: _7.SupplyProtoMsg): _7.Supply;
                toProto(message: _7.Supply): Uint8Array;
                toProtoMsg(message: _7.Supply): _7.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _7.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.DenomUnit;
                fromPartial(object: any): _7.DenomUnit;
                fromAmino(object: _7.DenomUnitAmino): _7.DenomUnit;
                toAmino(message: _7.DenomUnit): _7.DenomUnitAmino;
                fromAminoMsg(object: _7.DenomUnitAminoMsg): _7.DenomUnit;
                toAminoMsg(message: _7.DenomUnit): _7.DenomUnitAminoMsg;
                fromProtoMsg(message: _7.DenomUnitProtoMsg): _7.DenomUnit;
                toProto(message: _7.DenomUnit): Uint8Array;
                toProtoMsg(message: _7.DenomUnit): _7.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _7.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Metadata;
                fromPartial(object: any): _7.Metadata;
                fromAmino(object: _7.MetadataAmino): _7.Metadata;
                toAmino(message: _7.Metadata): _7.MetadataAmino;
                fromAminoMsg(object: _7.MetadataAminoMsg): _7.Metadata;
                toAminoMsg(message: _7.Metadata): _7.MetadataAminoMsg;
                fromProtoMsg(message: _7.MetadataProtoMsg): _7.Metadata;
                toProto(message: _7.Metadata): Uint8Array;
                toProtoMsg(message: _7.Metadata): _7.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _6.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.SendAuthorization;
                fromPartial(object: any): _6.SendAuthorization;
                fromAmino(object: _6.SendAuthorizationAmino): _6.SendAuthorization;
                toAmino(message: _6.SendAuthorization): _6.SendAuthorizationAmino;
                fromAminoMsg(object: _6.SendAuthorizationAminoMsg): _6.SendAuthorization;
                toAminoMsg(message: _6.SendAuthorization): _6.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _6.SendAuthorizationProtoMsg): _6.SendAuthorization;
                toProto(message: _6.SendAuthorization): Uint8Array;
                toProtoMsg(message: _6.SendAuthorization): _6.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _11.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.TxResponse;
                    fromPartial(object: any): _11.TxResponse;
                    fromAmino(object: _11.TxResponseAmino): _11.TxResponse;
                    toAmino(message: _11.TxResponse): _11.TxResponseAmino;
                    fromAminoMsg(object: _11.TxResponseAminoMsg): _11.TxResponse;
                    toAminoMsg(message: _11.TxResponse): _11.TxResponseAminoMsg;
                    fromProtoMsg(message: _11.TxResponseProtoMsg): _11.TxResponse;
                    toProto(message: _11.TxResponse): Uint8Array;
                    toProtoMsg(message: _11.TxResponse): _11.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _11.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ABCIMessageLog;
                    fromPartial(object: any): _11.ABCIMessageLog;
                    fromAmino(object: _11.ABCIMessageLogAmino): _11.ABCIMessageLog;
                    toAmino(message: _11.ABCIMessageLog): _11.ABCIMessageLogAmino;
                    fromAminoMsg(object: _11.ABCIMessageLogAminoMsg): _11.ABCIMessageLog;
                    toAminoMsg(message: _11.ABCIMessageLog): _11.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _11.ABCIMessageLogProtoMsg): _11.ABCIMessageLog;
                    toProto(message: _11.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _11.ABCIMessageLog): _11.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _11.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.StringEvent;
                    fromPartial(object: any): _11.StringEvent;
                    fromAmino(object: _11.StringEventAmino): _11.StringEvent;
                    toAmino(message: _11.StringEvent): _11.StringEventAmino;
                    fromAminoMsg(object: _11.StringEventAminoMsg): _11.StringEvent;
                    toAminoMsg(message: _11.StringEvent): _11.StringEventAminoMsg;
                    fromProtoMsg(message: _11.StringEventProtoMsg): _11.StringEvent;
                    toProto(message: _11.StringEvent): Uint8Array;
                    toProtoMsg(message: _11.StringEvent): _11.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _11.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Attribute;
                    fromPartial(object: any): _11.Attribute;
                    fromAmino(object: _11.AttributeAmino): _11.Attribute;
                    toAmino(message: _11.Attribute): _11.AttributeAmino;
                    fromAminoMsg(object: _11.AttributeAminoMsg): _11.Attribute;
                    toAminoMsg(message: _11.Attribute): _11.AttributeAminoMsg;
                    fromProtoMsg(message: _11.AttributeProtoMsg): _11.Attribute;
                    toProto(message: _11.Attribute): Uint8Array;
                    toProtoMsg(message: _11.Attribute): _11.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _11.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GasInfo;
                    fromPartial(object: any): _11.GasInfo;
                    fromAmino(object: _11.GasInfoAmino): _11.GasInfo;
                    toAmino(message: _11.GasInfo): _11.GasInfoAmino;
                    fromAminoMsg(object: _11.GasInfoAminoMsg): _11.GasInfo;
                    toAminoMsg(message: _11.GasInfo): _11.GasInfoAminoMsg;
                    fromProtoMsg(message: _11.GasInfoProtoMsg): _11.GasInfo;
                    toProto(message: _11.GasInfo): Uint8Array;
                    toProtoMsg(message: _11.GasInfo): _11.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _11.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Result;
                    fromPartial(object: any): _11.Result;
                    fromAmino(object: _11.ResultAmino): _11.Result;
                    toAmino(message: _11.Result): _11.ResultAmino;
                    fromAminoMsg(object: _11.ResultAminoMsg): _11.Result;
                    toAminoMsg(message: _11.Result): _11.ResultAminoMsg;
                    fromProtoMsg(message: _11.ResultProtoMsg): _11.Result;
                    toProto(message: _11.Result): Uint8Array;
                    toProtoMsg(message: _11.Result): _11.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _11.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SimulationResponse;
                    fromPartial(object: any): _11.SimulationResponse;
                    fromAmino(object: _11.SimulationResponseAmino): _11.SimulationResponse;
                    toAmino(message: _11.SimulationResponse): _11.SimulationResponseAmino;
                    fromAminoMsg(object: _11.SimulationResponseAminoMsg): _11.SimulationResponse;
                    toAminoMsg(message: _11.SimulationResponse): _11.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _11.SimulationResponseProtoMsg): _11.SimulationResponse;
                    toProto(message: _11.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _11.SimulationResponse): _11.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _11.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgData;
                    fromPartial(object: any): _11.MsgData;
                    fromAmino(object: _11.MsgDataAmino): _11.MsgData;
                    toAmino(message: _11.MsgData): _11.MsgDataAmino;
                    fromAminoMsg(object: _11.MsgDataAminoMsg): _11.MsgData;
                    toAminoMsg(message: _11.MsgData): _11.MsgDataAminoMsg;
                    fromProtoMsg(message: _11.MsgDataProtoMsg): _11.MsgData;
                    toProto(message: _11.MsgData): Uint8Array;
                    toProtoMsg(message: _11.MsgData): _11.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _11.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.TxMsgData;
                    fromPartial(object: any): _11.TxMsgData;
                    fromAmino(object: _11.TxMsgDataAmino): _11.TxMsgData;
                    toAmino(message: _11.TxMsgData): _11.TxMsgDataAmino;
                    fromAminoMsg(object: _11.TxMsgDataAminoMsg): _11.TxMsgData;
                    toAminoMsg(message: _11.TxMsgData): _11.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _11.TxMsgDataProtoMsg): _11.TxMsgData;
                    toProto(message: _11.TxMsgData): Uint8Array;
                    toProtoMsg(message: _11.TxMsgData): _11.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _11.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SearchTxsResult;
                    fromPartial(object: any): _11.SearchTxsResult;
                    fromAmino(object: _11.SearchTxsResultAmino): _11.SearchTxsResult;
                    toAmino(message: _11.SearchTxsResult): _11.SearchTxsResultAmino;
                    fromAminoMsg(object: _11.SearchTxsResultAminoMsg): _11.SearchTxsResult;
                    toAminoMsg(message: _11.SearchTxsResult): _11.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _11.SearchTxsResultProtoMsg): _11.SearchTxsResult;
                    toProto(message: _11.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _11.SearchTxsResult): _11.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _129.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _12.ConfigRequest): Promise<_12.ConfigResponse>;
                };
                LCDQueryClient: typeof _119.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _12.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ConfigRequest;
                    fromPartial(_: any): _12.ConfigRequest;
                    fromAmino(_: _12.ConfigRequestAmino): _12.ConfigRequest;
                    toAmino(_: _12.ConfigRequest): _12.ConfigRequestAmino;
                    fromAminoMsg(object: _12.ConfigRequestAminoMsg): _12.ConfigRequest;
                    toAminoMsg(message: _12.ConfigRequest): _12.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _12.ConfigRequestProtoMsg): _12.ConfigRequest;
                    toProto(message: _12.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _12.ConfigRequest): _12.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    encode(message: _12.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ConfigResponse;
                    fromPartial(object: any): _12.ConfigResponse;
                    fromAmino(object: _12.ConfigResponseAmino): _12.ConfigResponse;
                    toAmino(message: _12.ConfigResponse): _12.ConfigResponseAmino;
                    fromAminoMsg(object: _12.ConfigResponseAminoMsg): _12.ConfigResponse;
                    toAminoMsg(message: _12.ConfigResponse): _12.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _12.ConfigResponseProtoMsg): _12.ConfigResponse;
                    toProto(message: _12.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _12.ConfigResponse): _12.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _13.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageRequest;
                    fromPartial(object: any): _13.PageRequest;
                    fromAmino(object: _13.PageRequestAmino): _13.PageRequest;
                    toAmino(message: _13.PageRequest): _13.PageRequestAmino;
                    fromAminoMsg(object: _13.PageRequestAminoMsg): _13.PageRequest;
                    toAminoMsg(message: _13.PageRequest): _13.PageRequestAminoMsg;
                    fromProtoMsg(message: _13.PageRequestProtoMsg): _13.PageRequest;
                    toProto(message: _13.PageRequest): Uint8Array;
                    toProtoMsg(message: _13.PageRequest): _13.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _13.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageResponse;
                    fromPartial(object: any): _13.PageResponse;
                    fromAmino(object: _13.PageResponseAmino): _13.PageResponse;
                    toAmino(message: _13.PageResponse): _13.PageResponseAmino;
                    fromAminoMsg(object: _13.PageResponseAminoMsg): _13.PageResponse;
                    toAminoMsg(message: _13.PageResponse): _13.PageResponseAminoMsg;
                    fromProtoMsg(message: _13.PageResponseProtoMsg): _13.PageResponse;
                    toProto(message: _13.PageResponse): Uint8Array;
                    toProtoMsg(message: _13.PageResponse): _13.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _14.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AppDescriptor;
                    fromPartial(object: any): _14.AppDescriptor;
                    fromAmino(object: _14.AppDescriptorAmino): _14.AppDescriptor;
                    toAmino(message: _14.AppDescriptor): _14.AppDescriptorAmino;
                    fromAminoMsg(object: _14.AppDescriptorAminoMsg): _14.AppDescriptor;
                    toAminoMsg(message: _14.AppDescriptor): _14.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _14.AppDescriptorProtoMsg): _14.AppDescriptor;
                    toProto(message: _14.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _14.AppDescriptor): _14.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _14.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxDescriptor;
                    fromPartial(object: any): _14.TxDescriptor;
                    fromAmino(object: _14.TxDescriptorAmino): _14.TxDescriptor;
                    toAmino(message: _14.TxDescriptor): _14.TxDescriptorAmino;
                    fromAminoMsg(object: _14.TxDescriptorAminoMsg): _14.TxDescriptor;
                    toAminoMsg(message: _14.TxDescriptor): _14.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _14.TxDescriptorProtoMsg): _14.TxDescriptor;
                    toProto(message: _14.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _14.TxDescriptor): _14.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _14.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AuthnDescriptor;
                    fromPartial(object: any): _14.AuthnDescriptor;
                    fromAmino(object: _14.AuthnDescriptorAmino): _14.AuthnDescriptor;
                    toAmino(message: _14.AuthnDescriptor): _14.AuthnDescriptorAmino;
                    fromAminoMsg(object: _14.AuthnDescriptorAminoMsg): _14.AuthnDescriptor;
                    toAminoMsg(message: _14.AuthnDescriptor): _14.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _14.AuthnDescriptorProtoMsg): _14.AuthnDescriptor;
                    toProto(message: _14.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _14.AuthnDescriptor): _14.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _14.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SigningModeDescriptor;
                    fromPartial(object: any): _14.SigningModeDescriptor;
                    fromAmino(object: _14.SigningModeDescriptorAmino): _14.SigningModeDescriptor;
                    toAmino(message: _14.SigningModeDescriptor): _14.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _14.SigningModeDescriptorAminoMsg): _14.SigningModeDescriptor;
                    toAminoMsg(message: _14.SigningModeDescriptor): _14.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _14.SigningModeDescriptorProtoMsg): _14.SigningModeDescriptor;
                    toProto(message: _14.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _14.SigningModeDescriptor): _14.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _14.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ChainDescriptor;
                    fromPartial(object: any): _14.ChainDescriptor;
                    fromAmino(object: _14.ChainDescriptorAmino): _14.ChainDescriptor;
                    toAmino(message: _14.ChainDescriptor): _14.ChainDescriptorAmino;
                    fromAminoMsg(object: _14.ChainDescriptorAminoMsg): _14.ChainDescriptor;
                    toAminoMsg(message: _14.ChainDescriptor): _14.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _14.ChainDescriptorProtoMsg): _14.ChainDescriptor;
                    toProto(message: _14.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _14.ChainDescriptor): _14.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _14.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.CodecDescriptor;
                    fromPartial(object: any): _14.CodecDescriptor;
                    fromAmino(object: _14.CodecDescriptorAmino): _14.CodecDescriptor;
                    toAmino(message: _14.CodecDescriptor): _14.CodecDescriptorAmino;
                    fromAminoMsg(object: _14.CodecDescriptorAminoMsg): _14.CodecDescriptor;
                    toAminoMsg(message: _14.CodecDescriptor): _14.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _14.CodecDescriptorProtoMsg): _14.CodecDescriptor;
                    toProto(message: _14.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _14.CodecDescriptor): _14.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _14.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceDescriptor;
                    fromPartial(object: any): _14.InterfaceDescriptor;
                    fromAmino(object: _14.InterfaceDescriptorAmino): _14.InterfaceDescriptor;
                    toAmino(message: _14.InterfaceDescriptor): _14.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _14.InterfaceDescriptorAminoMsg): _14.InterfaceDescriptor;
                    toAminoMsg(message: _14.InterfaceDescriptor): _14.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _14.InterfaceDescriptorProtoMsg): _14.InterfaceDescriptor;
                    toProto(message: _14.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _14.InterfaceDescriptor): _14.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _14.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceImplementerDescriptor;
                    fromPartial(object: any): _14.InterfaceImplementerDescriptor;
                    fromAmino(object: _14.InterfaceImplementerDescriptorAmino): _14.InterfaceImplementerDescriptor;
                    toAmino(message: _14.InterfaceImplementerDescriptor): _14.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _14.InterfaceImplementerDescriptorAminoMsg): _14.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _14.InterfaceImplementerDescriptor): _14.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _14.InterfaceImplementerDescriptorProtoMsg): _14.InterfaceImplementerDescriptor;
                    toProto(message: _14.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _14.InterfaceImplementerDescriptor): _14.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _14.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: any): _14.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _14.InterfaceAcceptingMessageDescriptorAmino): _14.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _14.InterfaceAcceptingMessageDescriptor): _14.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _14.InterfaceAcceptingMessageDescriptorAminoMsg): _14.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _14.InterfaceAcceptingMessageDescriptor): _14.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _14.InterfaceAcceptingMessageDescriptorProtoMsg): _14.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _14.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _14.InterfaceAcceptingMessageDescriptor): _14.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _14.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ConfigurationDescriptor;
                    fromPartial(object: any): _14.ConfigurationDescriptor;
                    fromAmino(object: _14.ConfigurationDescriptorAmino): _14.ConfigurationDescriptor;
                    toAmino(message: _14.ConfigurationDescriptor): _14.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _14.ConfigurationDescriptorAminoMsg): _14.ConfigurationDescriptor;
                    toAminoMsg(message: _14.ConfigurationDescriptor): _14.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _14.ConfigurationDescriptorProtoMsg): _14.ConfigurationDescriptor;
                    toProto(message: _14.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _14.ConfigurationDescriptor): _14.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _14.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgDescriptor;
                    fromPartial(object: any): _14.MsgDescriptor;
                    fromAmino(object: _14.MsgDescriptorAmino): _14.MsgDescriptor;
                    toAmino(message: _14.MsgDescriptor): _14.MsgDescriptorAmino;
                    fromAminoMsg(object: _14.MsgDescriptorAminoMsg): _14.MsgDescriptor;
                    toAminoMsg(message: _14.MsgDescriptor): _14.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _14.MsgDescriptorProtoMsg): _14.MsgDescriptor;
                    toProto(message: _14.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _14.MsgDescriptor): _14.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _14.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorRequest;
                    fromPartial(_: any): _14.GetAuthnDescriptorRequest;
                    fromAmino(_: _14.GetAuthnDescriptorRequestAmino): _14.GetAuthnDescriptorRequest;
                    toAmino(_: _14.GetAuthnDescriptorRequest): _14.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetAuthnDescriptorRequestAminoMsg): _14.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _14.GetAuthnDescriptorRequest): _14.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetAuthnDescriptorRequestProtoMsg): _14.GetAuthnDescriptorRequest;
                    toProto(message: _14.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetAuthnDescriptorRequest): _14.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _14.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorResponse;
                    fromPartial(object: any): _14.GetAuthnDescriptorResponse;
                    fromAmino(object: _14.GetAuthnDescriptorResponseAmino): _14.GetAuthnDescriptorResponse;
                    toAmino(message: _14.GetAuthnDescriptorResponse): _14.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetAuthnDescriptorResponseAminoMsg): _14.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _14.GetAuthnDescriptorResponse): _14.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetAuthnDescriptorResponseProtoMsg): _14.GetAuthnDescriptorResponse;
                    toProto(message: _14.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetAuthnDescriptorResponse): _14.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _14.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorRequest;
                    fromPartial(_: any): _14.GetChainDescriptorRequest;
                    fromAmino(_: _14.GetChainDescriptorRequestAmino): _14.GetChainDescriptorRequest;
                    toAmino(_: _14.GetChainDescriptorRequest): _14.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetChainDescriptorRequestAminoMsg): _14.GetChainDescriptorRequest;
                    toAminoMsg(message: _14.GetChainDescriptorRequest): _14.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetChainDescriptorRequestProtoMsg): _14.GetChainDescriptorRequest;
                    toProto(message: _14.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetChainDescriptorRequest): _14.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _14.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorResponse;
                    fromPartial(object: any): _14.GetChainDescriptorResponse;
                    fromAmino(object: _14.GetChainDescriptorResponseAmino): _14.GetChainDescriptorResponse;
                    toAmino(message: _14.GetChainDescriptorResponse): _14.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetChainDescriptorResponseAminoMsg): _14.GetChainDescriptorResponse;
                    toAminoMsg(message: _14.GetChainDescriptorResponse): _14.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetChainDescriptorResponseProtoMsg): _14.GetChainDescriptorResponse;
                    toProto(message: _14.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetChainDescriptorResponse): _14.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _14.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorRequest;
                    fromPartial(_: any): _14.GetCodecDescriptorRequest;
                    fromAmino(_: _14.GetCodecDescriptorRequestAmino): _14.GetCodecDescriptorRequest;
                    toAmino(_: _14.GetCodecDescriptorRequest): _14.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetCodecDescriptorRequestAminoMsg): _14.GetCodecDescriptorRequest;
                    toAminoMsg(message: _14.GetCodecDescriptorRequest): _14.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetCodecDescriptorRequestProtoMsg): _14.GetCodecDescriptorRequest;
                    toProto(message: _14.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetCodecDescriptorRequest): _14.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _14.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorResponse;
                    fromPartial(object: any): _14.GetCodecDescriptorResponse;
                    fromAmino(object: _14.GetCodecDescriptorResponseAmino): _14.GetCodecDescriptorResponse;
                    toAmino(message: _14.GetCodecDescriptorResponse): _14.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetCodecDescriptorResponseAminoMsg): _14.GetCodecDescriptorResponse;
                    toAminoMsg(message: _14.GetCodecDescriptorResponse): _14.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetCodecDescriptorResponseProtoMsg): _14.GetCodecDescriptorResponse;
                    toProto(message: _14.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetCodecDescriptorResponse): _14.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _14.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorRequest;
                    fromPartial(_: any): _14.GetConfigurationDescriptorRequest;
                    fromAmino(_: _14.GetConfigurationDescriptorRequestAmino): _14.GetConfigurationDescriptorRequest;
                    toAmino(_: _14.GetConfigurationDescriptorRequest): _14.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetConfigurationDescriptorRequestAminoMsg): _14.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _14.GetConfigurationDescriptorRequest): _14.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetConfigurationDescriptorRequestProtoMsg): _14.GetConfigurationDescriptorRequest;
                    toProto(message: _14.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetConfigurationDescriptorRequest): _14.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _14.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorResponse;
                    fromPartial(object: any): _14.GetConfigurationDescriptorResponse;
                    fromAmino(object: _14.GetConfigurationDescriptorResponseAmino): _14.GetConfigurationDescriptorResponse;
                    toAmino(message: _14.GetConfigurationDescriptorResponse): _14.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetConfigurationDescriptorResponseAminoMsg): _14.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _14.GetConfigurationDescriptorResponse): _14.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetConfigurationDescriptorResponseProtoMsg): _14.GetConfigurationDescriptorResponse;
                    toProto(message: _14.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetConfigurationDescriptorResponse): _14.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _14.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorRequest;
                    fromPartial(_: any): _14.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _14.GetQueryServicesDescriptorRequestAmino): _14.GetQueryServicesDescriptorRequest;
                    toAmino(_: _14.GetQueryServicesDescriptorRequest): _14.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetQueryServicesDescriptorRequestAminoMsg): _14.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _14.GetQueryServicesDescriptorRequest): _14.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetQueryServicesDescriptorRequestProtoMsg): _14.GetQueryServicesDescriptorRequest;
                    toProto(message: _14.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetQueryServicesDescriptorRequest): _14.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _14.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorResponse;
                    fromPartial(object: any): _14.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _14.GetQueryServicesDescriptorResponseAmino): _14.GetQueryServicesDescriptorResponse;
                    toAmino(message: _14.GetQueryServicesDescriptorResponse): _14.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetQueryServicesDescriptorResponseAminoMsg): _14.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _14.GetQueryServicesDescriptorResponse): _14.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetQueryServicesDescriptorResponseProtoMsg): _14.GetQueryServicesDescriptorResponse;
                    toProto(message: _14.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetQueryServicesDescriptorResponse): _14.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _14.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorRequest;
                    fromPartial(_: any): _14.GetTxDescriptorRequest;
                    fromAmino(_: _14.GetTxDescriptorRequestAmino): _14.GetTxDescriptorRequest;
                    toAmino(_: _14.GetTxDescriptorRequest): _14.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _14.GetTxDescriptorRequestAminoMsg): _14.GetTxDescriptorRequest;
                    toAminoMsg(message: _14.GetTxDescriptorRequest): _14.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _14.GetTxDescriptorRequestProtoMsg): _14.GetTxDescriptorRequest;
                    toProto(message: _14.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _14.GetTxDescriptorRequest): _14.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _14.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorResponse;
                    fromPartial(object: any): _14.GetTxDescriptorResponse;
                    fromAmino(object: _14.GetTxDescriptorResponseAmino): _14.GetTxDescriptorResponse;
                    toAmino(message: _14.GetTxDescriptorResponse): _14.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _14.GetTxDescriptorResponseAminoMsg): _14.GetTxDescriptorResponse;
                    toAminoMsg(message: _14.GetTxDescriptorResponse): _14.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _14.GetTxDescriptorResponseProtoMsg): _14.GetTxDescriptorResponse;
                    toProto(message: _14.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _14.GetTxDescriptorResponse): _14.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _14.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServicesDescriptor;
                    fromPartial(object: any): _14.QueryServicesDescriptor;
                    fromAmino(object: _14.QueryServicesDescriptorAmino): _14.QueryServicesDescriptor;
                    toAmino(message: _14.QueryServicesDescriptor): _14.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _14.QueryServicesDescriptorAminoMsg): _14.QueryServicesDescriptor;
                    toAminoMsg(message: _14.QueryServicesDescriptor): _14.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _14.QueryServicesDescriptorProtoMsg): _14.QueryServicesDescriptor;
                    toProto(message: _14.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _14.QueryServicesDescriptor): _14.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _14.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServiceDescriptor;
                    fromPartial(object: any): _14.QueryServiceDescriptor;
                    fromAmino(object: _14.QueryServiceDescriptorAmino): _14.QueryServiceDescriptor;
                    toAmino(message: _14.QueryServiceDescriptor): _14.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _14.QueryServiceDescriptorAminoMsg): _14.QueryServiceDescriptor;
                    toAminoMsg(message: _14.QueryServiceDescriptor): _14.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _14.QueryServiceDescriptorProtoMsg): _14.QueryServiceDescriptor;
                    toProto(message: _14.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _14.QueryServiceDescriptor): _14.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _14.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryMethodDescriptor;
                    fromPartial(object: any): _14.QueryMethodDescriptor;
                    fromAmino(object: _14.QueryMethodDescriptorAmino): _14.QueryMethodDescriptor;
                    toAmino(message: _14.QueryMethodDescriptor): _14.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _14.QueryMethodDescriptorAminoMsg): _14.QueryMethodDescriptor;
                    toAminoMsg(message: _14.QueryMethodDescriptor): _14.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _14.QueryMethodDescriptorProtoMsg): _14.QueryMethodDescriptor;
                    toProto(message: _14.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _14.QueryMethodDescriptor): _14.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _15.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Coin;
                fromPartial(object: any): _15.Coin;
                fromAmino(object: _15.CoinAmino): _15.Coin;
                toAmino(message: _15.Coin): _15.CoinAmino;
                fromAminoMsg(object: _15.CoinAminoMsg): _15.Coin;
                toAminoMsg(message: _15.Coin): _15.CoinAminoMsg;
                fromProtoMsg(message: _15.CoinProtoMsg): _15.Coin;
                toProto(message: _15.Coin): Uint8Array;
                toProtoMsg(message: _15.Coin): _15.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _15.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecCoin;
                fromPartial(object: any): _15.DecCoin;
                fromAmino(object: _15.DecCoinAmino): _15.DecCoin;
                toAmino(message: _15.DecCoin): _15.DecCoinAmino;
                fromAminoMsg(object: _15.DecCoinAminoMsg): _15.DecCoin;
                toAminoMsg(message: _15.DecCoin): _15.DecCoinAminoMsg;
                fromProtoMsg(message: _15.DecCoinProtoMsg): _15.DecCoin;
                toProto(message: _15.DecCoin): Uint8Array;
                toProtoMsg(message: _15.DecCoin): _15.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _15.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.IntProto;
                fromPartial(object: any): _15.IntProto;
                fromAmino(object: _15.IntProtoAmino): _15.IntProto;
                toAmino(message: _15.IntProto): _15.IntProtoAmino;
                fromAminoMsg(object: _15.IntProtoAminoMsg): _15.IntProto;
                toAminoMsg(message: _15.IntProto): _15.IntProtoAminoMsg;
                fromProtoMsg(message: _15.IntProtoProtoMsg): _15.IntProto;
                toProto(message: _15.IntProto): Uint8Array;
                toProtoMsg(message: _15.IntProto): _15.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _15.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecProto;
                fromPartial(object: any): _15.DecProto;
                fromAmino(object: _15.DecProtoAmino): _15.DecProto;
                toAmino(message: _15.DecProto): _15.DecProtoAmino;
                fromAminoMsg(object: _15.DecProtoAminoMsg): _15.DecProto;
                toAminoMsg(message: _15.DecProto): _15.DecProtoAminoMsg;
                fromProtoMsg(message: _15.DecProtoProtoMsg): _15.DecProto;
                toProto(message: _15.DecProto): Uint8Array;
                toProtoMsg(message: _15.DecProto): _15.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _16.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PubKey;
                fromPartial(object: any): _16.PubKey;
                fromAmino(object: _16.PubKeyAmino): _16.PubKey;
                toAmino(message: _16.PubKey): _16.PubKeyAmino;
                fromAminoMsg(object: _16.PubKeyAminoMsg): _16.PubKey;
                toAminoMsg(message: _16.PubKey): _16.PubKeyAminoMsg;
                fromProtoMsg(message: _16.PubKeyProtoMsg): _16.PubKey;
                toProto(message: _16.PubKey): Uint8Array;
                toProtoMsg(message: _16.PubKey): _16.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _16.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PrivKey;
                fromPartial(object: any): _16.PrivKey;
                fromAmino(object: _16.PrivKeyAmino): _16.PrivKey;
                toAmino(message: _16.PrivKey): _16.PrivKeyAmino;
                fromAminoMsg(object: _16.PrivKeyAminoMsg): _16.PrivKey;
                toAminoMsg(message: _16.PrivKey): _16.PrivKeyAminoMsg;
                fromProtoMsg(message: _16.PrivKeyProtoMsg): _16.PrivKey;
                toProto(message: _16.PrivKey): Uint8Array;
                toProtoMsg(message: _16.PrivKey): _16.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _17.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.BIP44Params;
                    fromPartial(object: any): _17.BIP44Params;
                    fromAmino(object: _17.BIP44ParamsAmino): _17.BIP44Params;
                    toAmino(message: _17.BIP44Params): _17.BIP44ParamsAmino;
                    fromAminoMsg(object: _17.BIP44ParamsAminoMsg): _17.BIP44Params;
                    toAminoMsg(message: _17.BIP44Params): _17.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _17.BIP44ParamsProtoMsg): _17.BIP44Params;
                    toProto(message: _17.BIP44Params): Uint8Array;
                    toProtoMsg(message: _17.BIP44Params): _17.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _18.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record;
                    fromPartial(object: any): _18.Record;
                    fromAmino(object: _18.RecordAmino): _18.Record;
                    toAmino(message: _18.Record): _18.RecordAmino;
                    fromAminoMsg(object: _18.RecordAminoMsg): _18.Record;
                    toAminoMsg(message: _18.Record): _18.RecordAminoMsg;
                    fromProtoMsg(message: _18.RecordProtoMsg): _18.Record;
                    toProto(message: _18.Record): Uint8Array;
                    toProtoMsg(message: _18.Record): _18.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _18.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Local;
                    fromPartial(object: any): _18.Record_Local;
                    fromAmino(object: _18.Record_LocalAmino): _18.Record_Local;
                    toAmino(message: _18.Record_Local): _18.Record_LocalAmino;
                    fromAminoMsg(object: _18.Record_LocalAminoMsg): _18.Record_Local;
                    toAminoMsg(message: _18.Record_Local): _18.Record_LocalAminoMsg;
                    fromProtoMsg(message: _18.Record_LocalProtoMsg): _18.Record_Local;
                    toProto(message: _18.Record_Local): Uint8Array;
                    toProtoMsg(message: _18.Record_Local): _18.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _18.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Ledger;
                    fromPartial(object: any): _18.Record_Ledger;
                    fromAmino(object: _18.Record_LedgerAmino): _18.Record_Ledger;
                    toAmino(message: _18.Record_Ledger): _18.Record_LedgerAmino;
                    fromAminoMsg(object: _18.Record_LedgerAminoMsg): _18.Record_Ledger;
                    toAminoMsg(message: _18.Record_Ledger): _18.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _18.Record_LedgerProtoMsg): _18.Record_Ledger;
                    toProto(message: _18.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _18.Record_Ledger): _18.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _18.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Multi;
                    fromPartial(_: any): _18.Record_Multi;
                    fromAmino(_: _18.Record_MultiAmino): _18.Record_Multi;
                    toAmino(_: _18.Record_Multi): _18.Record_MultiAmino;
                    fromAminoMsg(object: _18.Record_MultiAminoMsg): _18.Record_Multi;
                    toAminoMsg(message: _18.Record_Multi): _18.Record_MultiAminoMsg;
                    fromProtoMsg(message: _18.Record_MultiProtoMsg): _18.Record_Multi;
                    toProto(message: _18.Record_Multi): Uint8Array;
                    toProtoMsg(message: _18.Record_Multi): _18.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _18.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Offline;
                    fromPartial(_: any): _18.Record_Offline;
                    fromAmino(_: _18.Record_OfflineAmino): _18.Record_Offline;
                    toAmino(_: _18.Record_Offline): _18.Record_OfflineAmino;
                    fromAminoMsg(object: _18.Record_OfflineAminoMsg): _18.Record_Offline;
                    toAminoMsg(message: _18.Record_Offline): _18.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _18.Record_OfflineProtoMsg): _18.Record_Offline;
                    toProto(message: _18.Record_Offline): Uint8Array;
                    toProtoMsg(message: _18.Record_Offline): _18.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _19.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.LegacyAminoPubKey;
                fromPartial(object: any): _19.LegacyAminoPubKey;
                fromAmino(object: _19.LegacyAminoPubKeyAmino): _19.LegacyAminoPubKey;
                toAmino(message: _19.LegacyAminoPubKey): _19.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _19.LegacyAminoPubKeyAminoMsg): _19.LegacyAminoPubKey;
                toAminoMsg(message: _19.LegacyAminoPubKey): _19.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _19.LegacyAminoPubKeyProtoMsg): _19.LegacyAminoPubKey;
                toProto(message: _19.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _19.LegacyAminoPubKey): _19.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _20.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PubKey;
                fromPartial(object: any): _20.PubKey;
                fromAmino(object: _20.PubKeyAmino): _20.PubKey;
                toAmino(message: _20.PubKey): _20.PubKeyAmino;
                fromAminoMsg(object: _20.PubKeyAminoMsg): _20.PubKey;
                toAminoMsg(message: _20.PubKey): _20.PubKeyAminoMsg;
                fromProtoMsg(message: _20.PubKeyProtoMsg): _20.PubKey;
                toProto(message: _20.PubKey): Uint8Array;
                toProtoMsg(message: _20.PubKey): _20.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _20.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PrivKey;
                fromPartial(object: any): _20.PrivKey;
                fromAmino(object: _20.PrivKeyAmino): _20.PrivKey;
                toAmino(message: _20.PrivKey): _20.PrivKeyAmino;
                fromAminoMsg(object: _20.PrivKeyAminoMsg): _20.PrivKey;
                toAminoMsg(message: _20.PrivKey): _20.PrivKeyAminoMsg;
                fromProtoMsg(message: _20.PrivKeyProtoMsg): _20.PrivKey;
                toProto(message: _20.PrivKey): Uint8Array;
                toProtoMsg(message: _20.PrivKey): _20.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _21.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PubKey;
                fromPartial(object: any): _21.PubKey;
                fromAmino(object: _21.PubKeyAmino): _21.PubKey;
                toAmino(message: _21.PubKey): _21.PubKeyAmino;
                fromAminoMsg(object: _21.PubKeyAminoMsg): _21.PubKey;
                toAminoMsg(message: _21.PubKey): _21.PubKeyAminoMsg;
                fromProtoMsg(message: _21.PubKeyProtoMsg): _21.PubKey;
                toProto(message: _21.PubKey): Uint8Array;
                toProtoMsg(message: _21.PubKey): _21.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _21.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PrivKey;
                fromPartial(object: any): _21.PrivKey;
                fromAmino(object: _21.PrivKeyAmino): _21.PrivKey;
                toAmino(message: _21.PrivKey): _21.PrivKeyAmino;
                fromAminoMsg(object: _21.PrivKeyAminoMsg): _21.PrivKey;
                toAminoMsg(message: _21.PrivKey): _21.PrivKeyAminoMsg;
                fromProtoMsg(message: _21.PrivKeyProtoMsg): _21.PrivKey;
                toProto(message: _21.PrivKey): Uint8Array;
                toProtoMsg(message: _21.PrivKey): _21.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _139.MsgClientImpl;
            QueryClientImpl: typeof _130.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _120.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _25.MsgSetWithdrawAddress) => _25.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _25.MsgSetWithdrawAddressAmino) => _25.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _25.MsgWithdrawDelegatorReward) => _25.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _25.MsgWithdrawDelegatorRewardAmino) => _25.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _25.MsgWithdrawValidatorCommission) => _25.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _25.MsgWithdrawValidatorCommissionAmino) => _25.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _25.MsgFundCommunityPool) => _25.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _25.MsgFundCommunityPoolAmino) => _25.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _25.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddress;
                fromPartial(object: any): _25.MsgSetWithdrawAddress;
                fromAmino(object: _25.MsgSetWithdrawAddressAmino): _25.MsgSetWithdrawAddress;
                toAmino(message: _25.MsgSetWithdrawAddress): _25.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _25.MsgSetWithdrawAddressAminoMsg): _25.MsgSetWithdrawAddress;
                toAminoMsg(message: _25.MsgSetWithdrawAddress): _25.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _25.MsgSetWithdrawAddressProtoMsg): _25.MsgSetWithdrawAddress;
                toProto(message: _25.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _25.MsgSetWithdrawAddress): _25.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _25.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddressResponse;
                fromPartial(_: any): _25.MsgSetWithdrawAddressResponse;
                fromAmino(_: _25.MsgSetWithdrawAddressResponseAmino): _25.MsgSetWithdrawAddressResponse;
                toAmino(_: _25.MsgSetWithdrawAddressResponse): _25.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _25.MsgSetWithdrawAddressResponseAminoMsg): _25.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _25.MsgSetWithdrawAddressResponse): _25.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _25.MsgSetWithdrawAddressResponseProtoMsg): _25.MsgSetWithdrawAddressResponse;
                toProto(message: _25.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _25.MsgSetWithdrawAddressResponse): _25.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _25.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorReward;
                fromPartial(object: any): _25.MsgWithdrawDelegatorReward;
                fromAmino(object: _25.MsgWithdrawDelegatorRewardAmino): _25.MsgWithdrawDelegatorReward;
                toAmino(message: _25.MsgWithdrawDelegatorReward): _25.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _25.MsgWithdrawDelegatorRewardAminoMsg): _25.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _25.MsgWithdrawDelegatorReward): _25.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawDelegatorRewardProtoMsg): _25.MsgWithdrawDelegatorReward;
                toProto(message: _25.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawDelegatorReward): _25.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _25.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: any): _25.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _25.MsgWithdrawDelegatorRewardResponseAmino): _25.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _25.MsgWithdrawDelegatorRewardResponse): _25.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _25.MsgWithdrawDelegatorRewardResponseAminoMsg): _25.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _25.MsgWithdrawDelegatorRewardResponse): _25.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawDelegatorRewardResponseProtoMsg): _25.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _25.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawDelegatorRewardResponse): _25.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _25.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommission;
                fromPartial(object: any): _25.MsgWithdrawValidatorCommission;
                fromAmino(object: _25.MsgWithdrawValidatorCommissionAmino): _25.MsgWithdrawValidatorCommission;
                toAmino(message: _25.MsgWithdrawValidatorCommission): _25.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _25.MsgWithdrawValidatorCommissionAminoMsg): _25.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _25.MsgWithdrawValidatorCommission): _25.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawValidatorCommissionProtoMsg): _25.MsgWithdrawValidatorCommission;
                toProto(message: _25.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawValidatorCommission): _25.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _25.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: any): _25.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _25.MsgWithdrawValidatorCommissionResponseAmino): _25.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _25.MsgWithdrawValidatorCommissionResponse): _25.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _25.MsgWithdrawValidatorCommissionResponseAminoMsg): _25.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _25.MsgWithdrawValidatorCommissionResponse): _25.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _25.MsgWithdrawValidatorCommissionResponseProtoMsg): _25.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _25.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _25.MsgWithdrawValidatorCommissionResponse): _25.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _25.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPool;
                fromPartial(object: any): _25.MsgFundCommunityPool;
                fromAmino(object: _25.MsgFundCommunityPoolAmino): _25.MsgFundCommunityPool;
                toAmino(message: _25.MsgFundCommunityPool): _25.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _25.MsgFundCommunityPoolAminoMsg): _25.MsgFundCommunityPool;
                toAminoMsg(message: _25.MsgFundCommunityPool): _25.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _25.MsgFundCommunityPoolProtoMsg): _25.MsgFundCommunityPool;
                toProto(message: _25.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _25.MsgFundCommunityPool): _25.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _25.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPoolResponse;
                fromPartial(_: any): _25.MsgFundCommunityPoolResponse;
                fromAmino(_: _25.MsgFundCommunityPoolResponseAmino): _25.MsgFundCommunityPoolResponse;
                toAmino(_: _25.MsgFundCommunityPoolResponse): _25.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _25.MsgFundCommunityPoolResponseAminoMsg): _25.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _25.MsgFundCommunityPoolResponse): _25.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _25.MsgFundCommunityPoolResponseProtoMsg): _25.MsgFundCommunityPoolResponse;
                toProto(message: _25.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _25.MsgFundCommunityPoolResponse): _25.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromPartial(_: any): _24.QueryParamsRequest;
                fromAmino(_: _24.QueryParamsRequestAmino): _24.QueryParamsRequest;
                toAmino(_: _24.QueryParamsRequest): _24.QueryParamsRequestAmino;
                fromAminoMsg(object: _24.QueryParamsRequestAminoMsg): _24.QueryParamsRequest;
                toAminoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryParamsRequestProtoMsg): _24.QueryParamsRequest;
                toProto(message: _24.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromPartial(object: any): _24.QueryParamsResponse;
                fromAmino(object: _24.QueryParamsResponseAmino): _24.QueryParamsResponse;
                toAmino(message: _24.QueryParamsResponse): _24.QueryParamsResponseAmino;
                fromAminoMsg(object: _24.QueryParamsResponseAminoMsg): _24.QueryParamsResponse;
                toAminoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryParamsResponseProtoMsg): _24.QueryParamsResponse;
                toProto(message: _24.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _24.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: any): _24.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _24.QueryValidatorOutstandingRewardsRequestAmino): _24.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _24.QueryValidatorOutstandingRewardsRequest): _24.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _24.QueryValidatorOutstandingRewardsRequestAminoMsg): _24.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _24.QueryValidatorOutstandingRewardsRequest): _24.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorOutstandingRewardsRequestProtoMsg): _24.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _24.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorOutstandingRewardsRequest): _24.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _24.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: any): _24.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _24.QueryValidatorOutstandingRewardsResponseAmino): _24.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _24.QueryValidatorOutstandingRewardsResponse): _24.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _24.QueryValidatorOutstandingRewardsResponseAminoMsg): _24.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _24.QueryValidatorOutstandingRewardsResponse): _24.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorOutstandingRewardsResponseProtoMsg): _24.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _24.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorOutstandingRewardsResponse): _24.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _24.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionRequest;
                fromPartial(object: any): _24.QueryValidatorCommissionRequest;
                fromAmino(object: _24.QueryValidatorCommissionRequestAmino): _24.QueryValidatorCommissionRequest;
                toAmino(message: _24.QueryValidatorCommissionRequest): _24.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _24.QueryValidatorCommissionRequestAminoMsg): _24.QueryValidatorCommissionRequest;
                toAminoMsg(message: _24.QueryValidatorCommissionRequest): _24.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorCommissionRequestProtoMsg): _24.QueryValidatorCommissionRequest;
                toProto(message: _24.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorCommissionRequest): _24.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _24.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionResponse;
                fromPartial(object: any): _24.QueryValidatorCommissionResponse;
                fromAmino(object: _24.QueryValidatorCommissionResponseAmino): _24.QueryValidatorCommissionResponse;
                toAmino(message: _24.QueryValidatorCommissionResponse): _24.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _24.QueryValidatorCommissionResponseAminoMsg): _24.QueryValidatorCommissionResponse;
                toAminoMsg(message: _24.QueryValidatorCommissionResponse): _24.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorCommissionResponseProtoMsg): _24.QueryValidatorCommissionResponse;
                toProto(message: _24.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorCommissionResponse): _24.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _24.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesRequest;
                fromPartial(object: any): _24.QueryValidatorSlashesRequest;
                fromAmino(object: _24.QueryValidatorSlashesRequestAmino): _24.QueryValidatorSlashesRequest;
                toAmino(message: _24.QueryValidatorSlashesRequest): _24.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _24.QueryValidatorSlashesRequestAminoMsg): _24.QueryValidatorSlashesRequest;
                toAminoMsg(message: _24.QueryValidatorSlashesRequest): _24.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorSlashesRequestProtoMsg): _24.QueryValidatorSlashesRequest;
                toProto(message: _24.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorSlashesRequest): _24.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _24.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesResponse;
                fromPartial(object: any): _24.QueryValidatorSlashesResponse;
                fromAmino(object: _24.QueryValidatorSlashesResponseAmino): _24.QueryValidatorSlashesResponse;
                toAmino(message: _24.QueryValidatorSlashesResponse): _24.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _24.QueryValidatorSlashesResponseAminoMsg): _24.QueryValidatorSlashesResponse;
                toAminoMsg(message: _24.QueryValidatorSlashesResponse): _24.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _24.QueryValidatorSlashesResponseProtoMsg): _24.QueryValidatorSlashesResponse;
                toProto(message: _24.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _24.QueryValidatorSlashesResponse): _24.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _24.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsRequest;
                fromPartial(object: any): _24.QueryDelegationRewardsRequest;
                fromAmino(object: _24.QueryDelegationRewardsRequestAmino): _24.QueryDelegationRewardsRequest;
                toAmino(message: _24.QueryDelegationRewardsRequest): _24.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _24.QueryDelegationRewardsRequestAminoMsg): _24.QueryDelegationRewardsRequest;
                toAminoMsg(message: _24.QueryDelegationRewardsRequest): _24.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationRewardsRequestProtoMsg): _24.QueryDelegationRewardsRequest;
                toProto(message: _24.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationRewardsRequest): _24.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _24.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsResponse;
                fromPartial(object: any): _24.QueryDelegationRewardsResponse;
                fromAmino(object: _24.QueryDelegationRewardsResponseAmino): _24.QueryDelegationRewardsResponse;
                toAmino(message: _24.QueryDelegationRewardsResponse): _24.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _24.QueryDelegationRewardsResponseAminoMsg): _24.QueryDelegationRewardsResponse;
                toAminoMsg(message: _24.QueryDelegationRewardsResponse): _24.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationRewardsResponseProtoMsg): _24.QueryDelegationRewardsResponse;
                toProto(message: _24.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationRewardsResponse): _24.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _24.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsRequest;
                fromPartial(object: any): _24.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _24.QueryDelegationTotalRewardsRequestAmino): _24.QueryDelegationTotalRewardsRequest;
                toAmino(message: _24.QueryDelegationTotalRewardsRequest): _24.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _24.QueryDelegationTotalRewardsRequestAminoMsg): _24.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _24.QueryDelegationTotalRewardsRequest): _24.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationTotalRewardsRequestProtoMsg): _24.QueryDelegationTotalRewardsRequest;
                toProto(message: _24.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationTotalRewardsRequest): _24.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _24.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsResponse;
                fromPartial(object: any): _24.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _24.QueryDelegationTotalRewardsResponseAmino): _24.QueryDelegationTotalRewardsResponse;
                toAmino(message: _24.QueryDelegationTotalRewardsResponse): _24.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _24.QueryDelegationTotalRewardsResponseAminoMsg): _24.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _24.QueryDelegationTotalRewardsResponse): _24.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegationTotalRewardsResponseProtoMsg): _24.QueryDelegationTotalRewardsResponse;
                toProto(message: _24.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegationTotalRewardsResponse): _24.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _24.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _24.QueryDelegatorValidatorsRequest;
                fromAmino(object: _24.QueryDelegatorValidatorsRequestAmino): _24.QueryDelegatorValidatorsRequest;
                toAmino(message: _24.QueryDelegatorValidatorsRequest): _24.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _24.QueryDelegatorValidatorsRequestAminoMsg): _24.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _24.QueryDelegatorValidatorsRequest): _24.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorValidatorsRequestProtoMsg): _24.QueryDelegatorValidatorsRequest;
                toProto(message: _24.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorValidatorsRequest): _24.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _24.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _24.QueryDelegatorValidatorsResponse;
                fromAmino(object: _24.QueryDelegatorValidatorsResponseAmino): _24.QueryDelegatorValidatorsResponse;
                toAmino(message: _24.QueryDelegatorValidatorsResponse): _24.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _24.QueryDelegatorValidatorsResponseAminoMsg): _24.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _24.QueryDelegatorValidatorsResponse): _24.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorValidatorsResponseProtoMsg): _24.QueryDelegatorValidatorsResponse;
                toProto(message: _24.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorValidatorsResponse): _24.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _24.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: any): _24.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _24.QueryDelegatorWithdrawAddressRequestAmino): _24.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _24.QueryDelegatorWithdrawAddressRequest): _24.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _24.QueryDelegatorWithdrawAddressRequestAminoMsg): _24.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _24.QueryDelegatorWithdrawAddressRequest): _24.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorWithdrawAddressRequestProtoMsg): _24.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _24.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorWithdrawAddressRequest): _24.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _24.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: any): _24.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _24.QueryDelegatorWithdrawAddressResponseAmino): _24.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _24.QueryDelegatorWithdrawAddressResponse): _24.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _24.QueryDelegatorWithdrawAddressResponseAminoMsg): _24.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _24.QueryDelegatorWithdrawAddressResponse): _24.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _24.QueryDelegatorWithdrawAddressResponseProtoMsg): _24.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _24.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _24.QueryDelegatorWithdrawAddressResponse): _24.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _24.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolRequest;
                fromPartial(_: any): _24.QueryCommunityPoolRequest;
                fromAmino(_: _24.QueryCommunityPoolRequestAmino): _24.QueryCommunityPoolRequest;
                toAmino(_: _24.QueryCommunityPoolRequest): _24.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _24.QueryCommunityPoolRequestAminoMsg): _24.QueryCommunityPoolRequest;
                toAminoMsg(message: _24.QueryCommunityPoolRequest): _24.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _24.QueryCommunityPoolRequestProtoMsg): _24.QueryCommunityPoolRequest;
                toProto(message: _24.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _24.QueryCommunityPoolRequest): _24.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _24.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolResponse;
                fromPartial(object: any): _24.QueryCommunityPoolResponse;
                fromAmino(object: _24.QueryCommunityPoolResponseAmino): _24.QueryCommunityPoolResponse;
                toAmino(message: _24.QueryCommunityPoolResponse): _24.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _24.QueryCommunityPoolResponseAminoMsg): _24.QueryCommunityPoolResponse;
                toAminoMsg(message: _24.QueryCommunityPoolResponse): _24.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _24.QueryCommunityPoolResponseProtoMsg): _24.QueryCommunityPoolResponse;
                toProto(message: _24.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _24.QueryCommunityPoolResponse): _24.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _23.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorWithdrawInfo;
                fromPartial(object: any): _23.DelegatorWithdrawInfo;
                fromAmino(object: _23.DelegatorWithdrawInfoAmino): _23.DelegatorWithdrawInfo;
                toAmino(message: _23.DelegatorWithdrawInfo): _23.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _23.DelegatorWithdrawInfoAminoMsg): _23.DelegatorWithdrawInfo;
                toAminoMsg(message: _23.DelegatorWithdrawInfo): _23.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _23.DelegatorWithdrawInfoProtoMsg): _23.DelegatorWithdrawInfo;
                toProto(message: _23.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _23.DelegatorWithdrawInfo): _23.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _23.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorOutstandingRewardsRecord;
                fromPartial(object: any): _23.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _23.ValidatorOutstandingRewardsRecordAmino): _23.ValidatorOutstandingRewardsRecord;
                toAmino(message: _23.ValidatorOutstandingRewardsRecord): _23.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _23.ValidatorOutstandingRewardsRecordAminoMsg): _23.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _23.ValidatorOutstandingRewardsRecord): _23.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorOutstandingRewardsRecordProtoMsg): _23.ValidatorOutstandingRewardsRecord;
                toProto(message: _23.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorOutstandingRewardsRecord): _23.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _23.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: any): _23.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _23.ValidatorAccumulatedCommissionRecordAmino): _23.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _23.ValidatorAccumulatedCommissionRecord): _23.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _23.ValidatorAccumulatedCommissionRecordAminoMsg): _23.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _23.ValidatorAccumulatedCommissionRecord): _23.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorAccumulatedCommissionRecordProtoMsg): _23.ValidatorAccumulatedCommissionRecord;
                toProto(message: _23.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorAccumulatedCommissionRecord): _23.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _23.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorHistoricalRewardsRecord;
                fromPartial(object: any): _23.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _23.ValidatorHistoricalRewardsRecordAmino): _23.ValidatorHistoricalRewardsRecord;
                toAmino(message: _23.ValidatorHistoricalRewardsRecord): _23.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _23.ValidatorHistoricalRewardsRecordAminoMsg): _23.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _23.ValidatorHistoricalRewardsRecord): _23.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorHistoricalRewardsRecordProtoMsg): _23.ValidatorHistoricalRewardsRecord;
                toProto(message: _23.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorHistoricalRewardsRecord): _23.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _23.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorCurrentRewardsRecord;
                fromPartial(object: any): _23.ValidatorCurrentRewardsRecord;
                fromAmino(object: _23.ValidatorCurrentRewardsRecordAmino): _23.ValidatorCurrentRewardsRecord;
                toAmino(message: _23.ValidatorCurrentRewardsRecord): _23.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _23.ValidatorCurrentRewardsRecordAminoMsg): _23.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _23.ValidatorCurrentRewardsRecord): _23.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorCurrentRewardsRecordProtoMsg): _23.ValidatorCurrentRewardsRecord;
                toProto(message: _23.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorCurrentRewardsRecord): _23.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _23.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorStartingInfoRecord;
                fromPartial(object: any): _23.DelegatorStartingInfoRecord;
                fromAmino(object: _23.DelegatorStartingInfoRecordAmino): _23.DelegatorStartingInfoRecord;
                toAmino(message: _23.DelegatorStartingInfoRecord): _23.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _23.DelegatorStartingInfoRecordAminoMsg): _23.DelegatorStartingInfoRecord;
                toAminoMsg(message: _23.DelegatorStartingInfoRecord): _23.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _23.DelegatorStartingInfoRecordProtoMsg): _23.DelegatorStartingInfoRecord;
                toProto(message: _23.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _23.DelegatorStartingInfoRecord): _23.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _23.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEventRecord;
                fromPartial(object: any): _23.ValidatorSlashEventRecord;
                fromAmino(object: _23.ValidatorSlashEventRecordAmino): _23.ValidatorSlashEventRecord;
                toAmino(message: _23.ValidatorSlashEventRecord): _23.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _23.ValidatorSlashEventRecordAminoMsg): _23.ValidatorSlashEventRecord;
                toAminoMsg(message: _23.ValidatorSlashEventRecord): _23.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _23.ValidatorSlashEventRecordProtoMsg): _23.ValidatorSlashEventRecord;
                toProto(message: _23.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _23.ValidatorSlashEventRecord): _23.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromPartial(object: any): _23.GenesisState;
                fromAmino(object: _23.GenesisStateAmino): _23.GenesisState;
                toAmino(message: _23.GenesisState): _23.GenesisStateAmino;
                fromAminoMsg(object: _23.GenesisStateAminoMsg): _23.GenesisState;
                toAminoMsg(message: _23.GenesisState): _23.GenesisStateAminoMsg;
                fromProtoMsg(message: _23.GenesisStateProtoMsg): _23.GenesisState;
                toProto(message: _23.GenesisState): Uint8Array;
                toProtoMsg(message: _23.GenesisState): _23.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Params;
                fromPartial(object: any): _22.Params;
                fromAmino(object: _22.ParamsAmino): _22.Params;
                toAmino(message: _22.Params): _22.ParamsAmino;
                fromAminoMsg(object: _22.ParamsAminoMsg): _22.Params;
                toAminoMsg(message: _22.Params): _22.ParamsAminoMsg;
                fromProtoMsg(message: _22.ParamsProtoMsg): _22.Params;
                toProto(message: _22.Params): Uint8Array;
                toProtoMsg(message: _22.Params): _22.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _22.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorHistoricalRewards;
                fromPartial(object: any): _22.ValidatorHistoricalRewards;
                fromAmino(object: _22.ValidatorHistoricalRewardsAmino): _22.ValidatorHistoricalRewards;
                toAmino(message: _22.ValidatorHistoricalRewards): _22.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _22.ValidatorHistoricalRewardsAminoMsg): _22.ValidatorHistoricalRewards;
                toAminoMsg(message: _22.ValidatorHistoricalRewards): _22.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _22.ValidatorHistoricalRewardsProtoMsg): _22.ValidatorHistoricalRewards;
                toProto(message: _22.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _22.ValidatorHistoricalRewards): _22.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _22.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorCurrentRewards;
                fromPartial(object: any): _22.ValidatorCurrentRewards;
                fromAmino(object: _22.ValidatorCurrentRewardsAmino): _22.ValidatorCurrentRewards;
                toAmino(message: _22.ValidatorCurrentRewards): _22.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _22.ValidatorCurrentRewardsAminoMsg): _22.ValidatorCurrentRewards;
                toAminoMsg(message: _22.ValidatorCurrentRewards): _22.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _22.ValidatorCurrentRewardsProtoMsg): _22.ValidatorCurrentRewards;
                toProto(message: _22.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _22.ValidatorCurrentRewards): _22.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _22.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorAccumulatedCommission;
                fromPartial(object: any): _22.ValidatorAccumulatedCommission;
                fromAmino(object: _22.ValidatorAccumulatedCommissionAmino): _22.ValidatorAccumulatedCommission;
                toAmino(message: _22.ValidatorAccumulatedCommission): _22.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _22.ValidatorAccumulatedCommissionAminoMsg): _22.ValidatorAccumulatedCommission;
                toAminoMsg(message: _22.ValidatorAccumulatedCommission): _22.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _22.ValidatorAccumulatedCommissionProtoMsg): _22.ValidatorAccumulatedCommission;
                toProto(message: _22.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _22.ValidatorAccumulatedCommission): _22.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _22.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorOutstandingRewards;
                fromPartial(object: any): _22.ValidatorOutstandingRewards;
                fromAmino(object: _22.ValidatorOutstandingRewardsAmino): _22.ValidatorOutstandingRewards;
                toAmino(message: _22.ValidatorOutstandingRewards): _22.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _22.ValidatorOutstandingRewardsAminoMsg): _22.ValidatorOutstandingRewards;
                toAminoMsg(message: _22.ValidatorOutstandingRewards): _22.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _22.ValidatorOutstandingRewardsProtoMsg): _22.ValidatorOutstandingRewards;
                toProto(message: _22.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _22.ValidatorOutstandingRewards): _22.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _22.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvent;
                fromPartial(object: any): _22.ValidatorSlashEvent;
                fromAmino(object: _22.ValidatorSlashEventAmino): _22.ValidatorSlashEvent;
                toAmino(message: _22.ValidatorSlashEvent): _22.ValidatorSlashEventAmino;
                fromAminoMsg(object: _22.ValidatorSlashEventAminoMsg): _22.ValidatorSlashEvent;
                toAminoMsg(message: _22.ValidatorSlashEvent): _22.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _22.ValidatorSlashEventProtoMsg): _22.ValidatorSlashEvent;
                toProto(message: _22.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _22.ValidatorSlashEvent): _22.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _22.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvents;
                fromPartial(object: any): _22.ValidatorSlashEvents;
                fromAmino(object: _22.ValidatorSlashEventsAmino): _22.ValidatorSlashEvents;
                toAmino(message: _22.ValidatorSlashEvents): _22.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _22.ValidatorSlashEventsAminoMsg): _22.ValidatorSlashEvents;
                toAminoMsg(message: _22.ValidatorSlashEvents): _22.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _22.ValidatorSlashEventsProtoMsg): _22.ValidatorSlashEvents;
                toProto(message: _22.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _22.ValidatorSlashEvents): _22.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _22.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.FeePool;
                fromPartial(object: any): _22.FeePool;
                fromAmino(object: _22.FeePoolAmino): _22.FeePool;
                toAmino(message: _22.FeePool): _22.FeePoolAmino;
                fromAminoMsg(object: _22.FeePoolAminoMsg): _22.FeePool;
                toAminoMsg(message: _22.FeePool): _22.FeePoolAminoMsg;
                fromProtoMsg(message: _22.FeePoolProtoMsg): _22.FeePool;
                toProto(message: _22.FeePool): Uint8Array;
                toProtoMsg(message: _22.FeePool): _22.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _22.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposal;
                fromPartial(object: any): _22.CommunityPoolSpendProposal;
                fromAmino(object: _22.CommunityPoolSpendProposalAmino): _22.CommunityPoolSpendProposal;
                toAmino(message: _22.CommunityPoolSpendProposal): _22.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _22.CommunityPoolSpendProposalAminoMsg): _22.CommunityPoolSpendProposal;
                toAminoMsg(message: _22.CommunityPoolSpendProposal): _22.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _22.CommunityPoolSpendProposalProtoMsg): _22.CommunityPoolSpendProposal;
                toProto(message: _22.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _22.CommunityPoolSpendProposal): _22.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _22.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegatorStartingInfo;
                fromPartial(object: any): _22.DelegatorStartingInfo;
                fromAmino(object: _22.DelegatorStartingInfoAmino): _22.DelegatorStartingInfo;
                toAmino(message: _22.DelegatorStartingInfo): _22.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _22.DelegatorStartingInfoAminoMsg): _22.DelegatorStartingInfo;
                toAminoMsg(message: _22.DelegatorStartingInfo): _22.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _22.DelegatorStartingInfoProtoMsg): _22.DelegatorStartingInfo;
                toProto(message: _22.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _22.DelegatorStartingInfo): _22.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _22.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegationDelegatorReward;
                fromPartial(object: any): _22.DelegationDelegatorReward;
                fromAmino(object: _22.DelegationDelegatorRewardAmino): _22.DelegationDelegatorReward;
                toAmino(message: _22.DelegationDelegatorReward): _22.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _22.DelegationDelegatorRewardAminoMsg): _22.DelegationDelegatorReward;
                toAminoMsg(message: _22.DelegationDelegatorReward): _22.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _22.DelegationDelegatorRewardProtoMsg): _22.DelegationDelegatorReward;
                toProto(message: _22.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _22.DelegationDelegatorReward): _22.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _22.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: any): _22.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _22.CommunityPoolSpendProposalWithDepositAmino): _22.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _22.CommunityPoolSpendProposalWithDeposit): _22.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _22.CommunityPoolSpendProposalWithDepositAminoMsg): _22.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _22.CommunityPoolSpendProposalWithDeposit): _22.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _22.CommunityPoolSpendProposalWithDepositProtoMsg): _22.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _22.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _22.CommunityPoolSpendProposalWithDeposit): _22.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _140.MsgClientImpl;
            QueryClientImpl: typeof _131.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _121.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _29.MsgExecLegacyContent;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _29.MsgExecLegacyContent;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _29.MsgSubmitProposal) => _29.MsgSubmitProposalAmino;
                    fromAmino: (object: _29.MsgSubmitProposalAmino) => _29.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _29.MsgExecLegacyContent) => _29.MsgExecLegacyContentAmino;
                    fromAmino: (object: _29.MsgExecLegacyContentAmino) => _29.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _29.MsgVote) => _29.MsgVoteAmino;
                    fromAmino: (object: _29.MsgVoteAmino) => _29.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _29.MsgVoteWeighted) => _29.MsgVoteWeightedAmino;
                    fromAmino: (object: _29.MsgVoteWeightedAmino) => _29.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _29.MsgDeposit) => _29.MsgDepositAmino;
                    fromAmino: (object: _29.MsgDepositAmino) => _29.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _29.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposal;
                fromPartial(object: any): _29.MsgSubmitProposal;
                fromAmino(object: _29.MsgSubmitProposalAmino): _29.MsgSubmitProposal;
                toAmino(message: _29.MsgSubmitProposal): _29.MsgSubmitProposalAmino;
                fromAminoMsg(object: _29.MsgSubmitProposalAminoMsg): _29.MsgSubmitProposal;
                toAminoMsg(message: _29.MsgSubmitProposal): _29.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _29.MsgSubmitProposalProtoMsg): _29.MsgSubmitProposal;
                toProto(message: _29.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _29.MsgSubmitProposal): _29.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _29.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposalResponse;
                fromPartial(object: any): _29.MsgSubmitProposalResponse;
                fromAmino(object: _29.MsgSubmitProposalResponseAmino): _29.MsgSubmitProposalResponse;
                toAmino(message: _29.MsgSubmitProposalResponse): _29.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _29.MsgSubmitProposalResponseAminoMsg): _29.MsgSubmitProposalResponse;
                toAminoMsg(message: _29.MsgSubmitProposalResponse): _29.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _29.MsgSubmitProposalResponseProtoMsg): _29.MsgSubmitProposalResponse;
                toProto(message: _29.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _29.MsgSubmitProposalResponse): _29.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _29.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExecLegacyContent;
                fromPartial(object: any): _29.MsgExecLegacyContent;
                fromAmino(object: _29.MsgExecLegacyContentAmino): _29.MsgExecLegacyContent;
                toAmino(message: _29.MsgExecLegacyContent): _29.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _29.MsgExecLegacyContentAminoMsg): _29.MsgExecLegacyContent;
                toAminoMsg(message: _29.MsgExecLegacyContent): _29.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _29.MsgExecLegacyContentProtoMsg): _29.MsgExecLegacyContent;
                toProto(message: _29.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _29.MsgExecLegacyContent): _29.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _29.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExecLegacyContentResponse;
                fromPartial(_: any): _29.MsgExecLegacyContentResponse;
                fromAmino(_: _29.MsgExecLegacyContentResponseAmino): _29.MsgExecLegacyContentResponse;
                toAmino(_: _29.MsgExecLegacyContentResponse): _29.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _29.MsgExecLegacyContentResponseAminoMsg): _29.MsgExecLegacyContentResponse;
                toAminoMsg(message: _29.MsgExecLegacyContentResponse): _29.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _29.MsgExecLegacyContentResponseProtoMsg): _29.MsgExecLegacyContentResponse;
                toProto(message: _29.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _29.MsgExecLegacyContentResponse): _29.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _29.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVote;
                fromPartial(object: any): _29.MsgVote;
                fromAmino(object: _29.MsgVoteAmino): _29.MsgVote;
                toAmino(message: _29.MsgVote): _29.MsgVoteAmino;
                fromAminoMsg(object: _29.MsgVoteAminoMsg): _29.MsgVote;
                toAminoMsg(message: _29.MsgVote): _29.MsgVoteAminoMsg;
                fromProtoMsg(message: _29.MsgVoteProtoMsg): _29.MsgVote;
                toProto(message: _29.MsgVote): Uint8Array;
                toProtoMsg(message: _29.MsgVote): _29.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _29.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteResponse;
                fromPartial(_: any): _29.MsgVoteResponse;
                fromAmino(_: _29.MsgVoteResponseAmino): _29.MsgVoteResponse;
                toAmino(_: _29.MsgVoteResponse): _29.MsgVoteResponseAmino;
                fromAminoMsg(object: _29.MsgVoteResponseAminoMsg): _29.MsgVoteResponse;
                toAminoMsg(message: _29.MsgVoteResponse): _29.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _29.MsgVoteResponseProtoMsg): _29.MsgVoteResponse;
                toProto(message: _29.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _29.MsgVoteResponse): _29.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _29.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeighted;
                fromPartial(object: any): _29.MsgVoteWeighted;
                fromAmino(object: _29.MsgVoteWeightedAmino): _29.MsgVoteWeighted;
                toAmino(message: _29.MsgVoteWeighted): _29.MsgVoteWeightedAmino;
                fromAminoMsg(object: _29.MsgVoteWeightedAminoMsg): _29.MsgVoteWeighted;
                toAminoMsg(message: _29.MsgVoteWeighted): _29.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _29.MsgVoteWeightedProtoMsg): _29.MsgVoteWeighted;
                toProto(message: _29.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _29.MsgVoteWeighted): _29.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _29.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeightedResponse;
                fromPartial(_: any): _29.MsgVoteWeightedResponse;
                fromAmino(_: _29.MsgVoteWeightedResponseAmino): _29.MsgVoteWeightedResponse;
                toAmino(_: _29.MsgVoteWeightedResponse): _29.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _29.MsgVoteWeightedResponseAminoMsg): _29.MsgVoteWeightedResponse;
                toAminoMsg(message: _29.MsgVoteWeightedResponse): _29.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _29.MsgVoteWeightedResponseProtoMsg): _29.MsgVoteWeightedResponse;
                toProto(message: _29.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _29.MsgVoteWeightedResponse): _29.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _29.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDeposit;
                fromPartial(object: any): _29.MsgDeposit;
                fromAmino(object: _29.MsgDepositAmino): _29.MsgDeposit;
                toAmino(message: _29.MsgDeposit): _29.MsgDepositAmino;
                fromAminoMsg(object: _29.MsgDepositAminoMsg): _29.MsgDeposit;
                toAminoMsg(message: _29.MsgDeposit): _29.MsgDepositAminoMsg;
                fromProtoMsg(message: _29.MsgDepositProtoMsg): _29.MsgDeposit;
                toProto(message: _29.MsgDeposit): Uint8Array;
                toProtoMsg(message: _29.MsgDeposit): _29.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _29.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDepositResponse;
                fromPartial(_: any): _29.MsgDepositResponse;
                fromAmino(_: _29.MsgDepositResponseAmino): _29.MsgDepositResponse;
                toAmino(_: _29.MsgDepositResponse): _29.MsgDepositResponseAmino;
                fromAminoMsg(object: _29.MsgDepositResponseAminoMsg): _29.MsgDepositResponse;
                toAminoMsg(message: _29.MsgDepositResponse): _29.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _29.MsgDepositResponseProtoMsg): _29.MsgDepositResponse;
                toProto(message: _29.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _29.MsgDepositResponse): _29.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _31.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _28.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalRequest;
                fromPartial(object: any): _28.QueryProposalRequest;
                fromAmino(object: _28.QueryProposalRequestAmino): _28.QueryProposalRequest;
                toAmino(message: _28.QueryProposalRequest): _28.QueryProposalRequestAmino;
                fromAminoMsg(object: _28.QueryProposalRequestAminoMsg): _28.QueryProposalRequest;
                toAminoMsg(message: _28.QueryProposalRequest): _28.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _28.QueryProposalRequestProtoMsg): _28.QueryProposalRequest;
                toProto(message: _28.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _28.QueryProposalRequest): _28.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _28.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalResponse;
                fromPartial(object: any): _28.QueryProposalResponse;
                fromAmino(object: _28.QueryProposalResponseAmino): _28.QueryProposalResponse;
                toAmino(message: _28.QueryProposalResponse): _28.QueryProposalResponseAmino;
                fromAminoMsg(object: _28.QueryProposalResponseAminoMsg): _28.QueryProposalResponse;
                toAminoMsg(message: _28.QueryProposalResponse): _28.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _28.QueryProposalResponseProtoMsg): _28.QueryProposalResponse;
                toProto(message: _28.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _28.QueryProposalResponse): _28.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _28.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsRequest;
                fromPartial(object: any): _28.QueryProposalsRequest;
                fromAmino(object: _28.QueryProposalsRequestAmino): _28.QueryProposalsRequest;
                toAmino(message: _28.QueryProposalsRequest): _28.QueryProposalsRequestAmino;
                fromAminoMsg(object: _28.QueryProposalsRequestAminoMsg): _28.QueryProposalsRequest;
                toAminoMsg(message: _28.QueryProposalsRequest): _28.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryProposalsRequestProtoMsg): _28.QueryProposalsRequest;
                toProto(message: _28.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryProposalsRequest): _28.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _28.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsResponse;
                fromPartial(object: any): _28.QueryProposalsResponse;
                fromAmino(object: _28.QueryProposalsResponseAmino): _28.QueryProposalsResponse;
                toAmino(message: _28.QueryProposalsResponse): _28.QueryProposalsResponseAmino;
                fromAminoMsg(object: _28.QueryProposalsResponseAminoMsg): _28.QueryProposalsResponse;
                toAminoMsg(message: _28.QueryProposalsResponse): _28.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryProposalsResponseProtoMsg): _28.QueryProposalsResponse;
                toProto(message: _28.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryProposalsResponse): _28.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _28.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteRequest;
                fromPartial(object: any): _28.QueryVoteRequest;
                fromAmino(object: _28.QueryVoteRequestAmino): _28.QueryVoteRequest;
                toAmino(message: _28.QueryVoteRequest): _28.QueryVoteRequestAmino;
                fromAminoMsg(object: _28.QueryVoteRequestAminoMsg): _28.QueryVoteRequest;
                toAminoMsg(message: _28.QueryVoteRequest): _28.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _28.QueryVoteRequestProtoMsg): _28.QueryVoteRequest;
                toProto(message: _28.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _28.QueryVoteRequest): _28.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _28.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteResponse;
                fromPartial(object: any): _28.QueryVoteResponse;
                fromAmino(object: _28.QueryVoteResponseAmino): _28.QueryVoteResponse;
                toAmino(message: _28.QueryVoteResponse): _28.QueryVoteResponseAmino;
                fromAminoMsg(object: _28.QueryVoteResponseAminoMsg): _28.QueryVoteResponse;
                toAminoMsg(message: _28.QueryVoteResponse): _28.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _28.QueryVoteResponseProtoMsg): _28.QueryVoteResponse;
                toProto(message: _28.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _28.QueryVoteResponse): _28.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _28.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesRequest;
                fromPartial(object: any): _28.QueryVotesRequest;
                fromAmino(object: _28.QueryVotesRequestAmino): _28.QueryVotesRequest;
                toAmino(message: _28.QueryVotesRequest): _28.QueryVotesRequestAmino;
                fromAminoMsg(object: _28.QueryVotesRequestAminoMsg): _28.QueryVotesRequest;
                toAminoMsg(message: _28.QueryVotesRequest): _28.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _28.QueryVotesRequestProtoMsg): _28.QueryVotesRequest;
                toProto(message: _28.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _28.QueryVotesRequest): _28.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _28.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesResponse;
                fromPartial(object: any): _28.QueryVotesResponse;
                fromAmino(object: _28.QueryVotesResponseAmino): _28.QueryVotesResponse;
                toAmino(message: _28.QueryVotesResponse): _28.QueryVotesResponseAmino;
                fromAminoMsg(object: _28.QueryVotesResponseAminoMsg): _28.QueryVotesResponse;
                toAminoMsg(message: _28.QueryVotesResponse): _28.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _28.QueryVotesResponseProtoMsg): _28.QueryVotesResponse;
                toProto(message: _28.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _28.QueryVotesResponse): _28.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsRequest;
                fromPartial(object: any): _28.QueryParamsRequest;
                fromAmino(object: _28.QueryParamsRequestAmino): _28.QueryParamsRequest;
                toAmino(message: _28.QueryParamsRequest): _28.QueryParamsRequestAmino;
                fromAminoMsg(object: _28.QueryParamsRequestAminoMsg): _28.QueryParamsRequest;
                toAminoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryParamsRequestProtoMsg): _28.QueryParamsRequest;
                toProto(message: _28.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryParamsRequest): _28.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsResponse;
                fromPartial(object: any): _28.QueryParamsResponse;
                fromAmino(object: _28.QueryParamsResponseAmino): _28.QueryParamsResponse;
                toAmino(message: _28.QueryParamsResponse): _28.QueryParamsResponseAmino;
                fromAminoMsg(object: _28.QueryParamsResponseAminoMsg): _28.QueryParamsResponse;
                toAminoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryParamsResponseProtoMsg): _28.QueryParamsResponse;
                toProto(message: _28.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryParamsResponse): _28.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _28.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositRequest;
                fromPartial(object: any): _28.QueryDepositRequest;
                fromAmino(object: _28.QueryDepositRequestAmino): _28.QueryDepositRequest;
                toAmino(message: _28.QueryDepositRequest): _28.QueryDepositRequestAmino;
                fromAminoMsg(object: _28.QueryDepositRequestAminoMsg): _28.QueryDepositRequest;
                toAminoMsg(message: _28.QueryDepositRequest): _28.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDepositRequestProtoMsg): _28.QueryDepositRequest;
                toProto(message: _28.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDepositRequest): _28.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _28.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositResponse;
                fromPartial(object: any): _28.QueryDepositResponse;
                fromAmino(object: _28.QueryDepositResponseAmino): _28.QueryDepositResponse;
                toAmino(message: _28.QueryDepositResponse): _28.QueryDepositResponseAmino;
                fromAminoMsg(object: _28.QueryDepositResponseAminoMsg): _28.QueryDepositResponse;
                toAminoMsg(message: _28.QueryDepositResponse): _28.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDepositResponseProtoMsg): _28.QueryDepositResponse;
                toProto(message: _28.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDepositResponse): _28.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _28.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsRequest;
                fromPartial(object: any): _28.QueryDepositsRequest;
                fromAmino(object: _28.QueryDepositsRequestAmino): _28.QueryDepositsRequest;
                toAmino(message: _28.QueryDepositsRequest): _28.QueryDepositsRequestAmino;
                fromAminoMsg(object: _28.QueryDepositsRequestAminoMsg): _28.QueryDepositsRequest;
                toAminoMsg(message: _28.QueryDepositsRequest): _28.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _28.QueryDepositsRequestProtoMsg): _28.QueryDepositsRequest;
                toProto(message: _28.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _28.QueryDepositsRequest): _28.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _28.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsResponse;
                fromPartial(object: any): _28.QueryDepositsResponse;
                fromAmino(object: _28.QueryDepositsResponseAmino): _28.QueryDepositsResponse;
                toAmino(message: _28.QueryDepositsResponse): _28.QueryDepositsResponseAmino;
                fromAminoMsg(object: _28.QueryDepositsResponseAminoMsg): _28.QueryDepositsResponse;
                toAminoMsg(message: _28.QueryDepositsResponse): _28.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _28.QueryDepositsResponseProtoMsg): _28.QueryDepositsResponse;
                toProto(message: _28.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _28.QueryDepositsResponse): _28.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _28.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultRequest;
                fromPartial(object: any): _28.QueryTallyResultRequest;
                fromAmino(object: _28.QueryTallyResultRequestAmino): _28.QueryTallyResultRequest;
                toAmino(message: _28.QueryTallyResultRequest): _28.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _28.QueryTallyResultRequestAminoMsg): _28.QueryTallyResultRequest;
                toAminoMsg(message: _28.QueryTallyResultRequest): _28.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _28.QueryTallyResultRequestProtoMsg): _28.QueryTallyResultRequest;
                toProto(message: _28.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _28.QueryTallyResultRequest): _28.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _28.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultResponse;
                fromPartial(object: any): _28.QueryTallyResultResponse;
                fromAmino(object: _28.QueryTallyResultResponseAmino): _28.QueryTallyResultResponse;
                toAmino(message: _28.QueryTallyResultResponse): _28.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _28.QueryTallyResultResponseAminoMsg): _28.QueryTallyResultResponse;
                toAminoMsg(message: _28.QueryTallyResultResponse): _28.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _28.QueryTallyResultResponseProtoMsg): _28.QueryTallyResultResponse;
                toProto(message: _28.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _28.QueryTallyResultResponse): _28.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _27.VoteOption;
            voteOptionToJSON(object: _27.VoteOption): string;
            proposalStatusFromJSON(object: any): _27.ProposalStatus;
            proposalStatusToJSON(object: _27.ProposalStatus): string;
            VoteOption: typeof _27.VoteOption;
            VoteOptionSDKType: typeof _27.VoteOption;
            VoteOptionAmino: typeof _27.VoteOption;
            ProposalStatus: typeof _27.ProposalStatus;
            ProposalStatusSDKType: typeof _27.ProposalStatus;
            ProposalStatusAmino: typeof _27.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _27.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.WeightedVoteOption;
                fromPartial(object: any): _27.WeightedVoteOption;
                fromAmino(object: _27.WeightedVoteOptionAmino): _27.WeightedVoteOption;
                toAmino(message: _27.WeightedVoteOption): _27.WeightedVoteOptionAmino;
                fromAminoMsg(object: _27.WeightedVoteOptionAminoMsg): _27.WeightedVoteOption;
                toAminoMsg(message: _27.WeightedVoteOption): _27.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _27.WeightedVoteOptionProtoMsg): _27.WeightedVoteOption;
                toProto(message: _27.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _27.WeightedVoteOption): _27.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _27.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Deposit;
                fromPartial(object: any): _27.Deposit;
                fromAmino(object: _27.DepositAmino): _27.Deposit;
                toAmino(message: _27.Deposit): _27.DepositAmino;
                fromAminoMsg(object: _27.DepositAminoMsg): _27.Deposit;
                toAminoMsg(message: _27.Deposit): _27.DepositAminoMsg;
                fromProtoMsg(message: _27.DepositProtoMsg): _27.Deposit;
                toProto(message: _27.Deposit): Uint8Array;
                toProtoMsg(message: _27.Deposit): _27.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _27.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Proposal;
                fromPartial(object: any): _27.Proposal;
                fromAmino(object: _27.ProposalAmino): _27.Proposal;
                toAmino(message: _27.Proposal): _27.ProposalAmino;
                fromAminoMsg(object: _27.ProposalAminoMsg): _27.Proposal;
                toAminoMsg(message: _27.Proposal): _27.ProposalAminoMsg;
                fromProtoMsg(message: _27.ProposalProtoMsg): _27.Proposal;
                toProto(message: _27.Proposal): Uint8Array;
                toProtoMsg(message: _27.Proposal): _27.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _27.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyResult;
                fromPartial(object: any): _27.TallyResult;
                fromAmino(object: _27.TallyResultAmino): _27.TallyResult;
                toAmino(message: _27.TallyResult): _27.TallyResultAmino;
                fromAminoMsg(object: _27.TallyResultAminoMsg): _27.TallyResult;
                toAminoMsg(message: _27.TallyResult): _27.TallyResultAminoMsg;
                fromProtoMsg(message: _27.TallyResultProtoMsg): _27.TallyResult;
                toProto(message: _27.TallyResult): Uint8Array;
                toProtoMsg(message: _27.TallyResult): _27.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _27.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Vote;
                fromPartial(object: any): _27.Vote;
                fromAmino(object: _27.VoteAmino): _27.Vote;
                toAmino(message: _27.Vote): _27.VoteAmino;
                fromAminoMsg(object: _27.VoteAminoMsg): _27.Vote;
                toAminoMsg(message: _27.Vote): _27.VoteAminoMsg;
                fromProtoMsg(message: _27.VoteProtoMsg): _27.Vote;
                toProto(message: _27.Vote): Uint8Array;
                toProtoMsg(message: _27.Vote): _27.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _27.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DepositParams;
                fromPartial(object: any): _27.DepositParams;
                fromAmino(object: _27.DepositParamsAmino): _27.DepositParams;
                toAmino(message: _27.DepositParams): _27.DepositParamsAmino;
                fromAminoMsg(object: _27.DepositParamsAminoMsg): _27.DepositParams;
                toAminoMsg(message: _27.DepositParams): _27.DepositParamsAminoMsg;
                fromProtoMsg(message: _27.DepositParamsProtoMsg): _27.DepositParams;
                toProto(message: _27.DepositParams): Uint8Array;
                toProtoMsg(message: _27.DepositParams): _27.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _27.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VotingParams;
                fromPartial(object: any): _27.VotingParams;
                fromAmino(object: _27.VotingParamsAmino): _27.VotingParams;
                toAmino(message: _27.VotingParams): _27.VotingParamsAmino;
                fromAminoMsg(object: _27.VotingParamsAminoMsg): _27.VotingParams;
                toAminoMsg(message: _27.VotingParams): _27.VotingParamsAminoMsg;
                fromProtoMsg(message: _27.VotingParamsProtoMsg): _27.VotingParams;
                toProto(message: _27.VotingParams): Uint8Array;
                toProtoMsg(message: _27.VotingParams): _27.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _27.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyParams;
                fromPartial(object: any): _27.TallyParams;
                fromAmino(object: _27.TallyParamsAmino): _27.TallyParams;
                toAmino(message: _27.TallyParams): _27.TallyParamsAmino;
                fromAminoMsg(object: _27.TallyParamsAminoMsg): _27.TallyParams;
                toAminoMsg(message: _27.TallyParams): _27.TallyParamsAminoMsg;
                fromProtoMsg(message: _27.TallyParamsProtoMsg): _27.TallyParams;
                toProto(message: _27.TallyParams): Uint8Array;
                toProtoMsg(message: _27.TallyParams): _27.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: any): _26.GenesisState;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                toAminoMsg(message: _26.GenesisState): _26.GenesisStateAminoMsg;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _141.MsgClientImpl;
            QueryClientImpl: typeof _132.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _122.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _33.MsgSubmitProposal) => _33.MsgSubmitProposalAmino;
                    fromAmino: (object: _33.MsgSubmitProposalAmino) => _33.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVote) => _33.MsgVoteAmino;
                    fromAmino: (object: _33.MsgVoteAmino) => _33.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _33.MsgVoteWeighted) => _33.MsgVoteWeightedAmino;
                    fromAmino: (object: _33.MsgVoteWeightedAmino) => _33.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _33.MsgDeposit) => _33.MsgDepositAmino;
                    fromAmino: (object: _33.MsgDepositAmino) => _33.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _33.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposal;
                fromPartial(object: any): _33.MsgSubmitProposal;
                fromAmino(object: _33.MsgSubmitProposalAmino): _33.MsgSubmitProposal;
                toAmino(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalAminoMsg): _33.MsgSubmitProposal;
                toAminoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalProtoMsg): _33.MsgSubmitProposal;
                toProto(message: _33.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposal): _33.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _33.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposalResponse;
                fromPartial(object: any): _33.MsgSubmitProposalResponse;
                fromAmino(object: _33.MsgSubmitProposalResponseAmino): _33.MsgSubmitProposalResponse;
                toAmino(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _33.MsgSubmitProposalResponseAminoMsg): _33.MsgSubmitProposalResponse;
                toAminoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _33.MsgSubmitProposalResponseProtoMsg): _33.MsgSubmitProposalResponse;
                toProto(message: _33.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _33.MsgSubmitProposalResponse): _33.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _33.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVote;
                fromPartial(object: any): _33.MsgVote;
                fromAmino(object: _33.MsgVoteAmino): _33.MsgVote;
                toAmino(message: _33.MsgVote): _33.MsgVoteAmino;
                fromAminoMsg(object: _33.MsgVoteAminoMsg): _33.MsgVote;
                toAminoMsg(message: _33.MsgVote): _33.MsgVoteAminoMsg;
                fromProtoMsg(message: _33.MsgVoteProtoMsg): _33.MsgVote;
                toProto(message: _33.MsgVote): Uint8Array;
                toProtoMsg(message: _33.MsgVote): _33.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _33.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteResponse;
                fromPartial(_: any): _33.MsgVoteResponse;
                fromAmino(_: _33.MsgVoteResponseAmino): _33.MsgVoteResponse;
                toAmino(_: _33.MsgVoteResponse): _33.MsgVoteResponseAmino;
                fromAminoMsg(object: _33.MsgVoteResponseAminoMsg): _33.MsgVoteResponse;
                toAminoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteResponseProtoMsg): _33.MsgVoteResponse;
                toProto(message: _33.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteResponse): _33.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _33.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeighted;
                fromPartial(object: any): _33.MsgVoteWeighted;
                fromAmino(object: _33.MsgVoteWeightedAmino): _33.MsgVoteWeighted;
                toAmino(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedAminoMsg): _33.MsgVoteWeighted;
                toAminoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedProtoMsg): _33.MsgVoteWeighted;
                toProto(message: _33.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeighted): _33.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _33.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeightedResponse;
                fromPartial(_: any): _33.MsgVoteWeightedResponse;
                fromAmino(_: _33.MsgVoteWeightedResponseAmino): _33.MsgVoteWeightedResponse;
                toAmino(_: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _33.MsgVoteWeightedResponseAminoMsg): _33.MsgVoteWeightedResponse;
                toAminoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _33.MsgVoteWeightedResponseProtoMsg): _33.MsgVoteWeightedResponse;
                toProto(message: _33.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _33.MsgVoteWeightedResponse): _33.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _33.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDeposit;
                fromPartial(object: any): _33.MsgDeposit;
                fromAmino(object: _33.MsgDepositAmino): _33.MsgDeposit;
                toAmino(message: _33.MsgDeposit): _33.MsgDepositAmino;
                fromAminoMsg(object: _33.MsgDepositAminoMsg): _33.MsgDeposit;
                toAminoMsg(message: _33.MsgDeposit): _33.MsgDepositAminoMsg;
                fromProtoMsg(message: _33.MsgDepositProtoMsg): _33.MsgDeposit;
                toProto(message: _33.MsgDeposit): Uint8Array;
                toProtoMsg(message: _33.MsgDeposit): _33.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _33.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDepositResponse;
                fromPartial(_: any): _33.MsgDepositResponse;
                fromAmino(_: _33.MsgDepositResponseAmino): _33.MsgDepositResponse;
                toAmino(_: _33.MsgDepositResponse): _33.MsgDepositResponseAmino;
                fromAminoMsg(object: _33.MsgDepositResponseAminoMsg): _33.MsgDepositResponse;
                toAminoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _33.MsgDepositResponseProtoMsg): _33.MsgDepositResponse;
                toProto(message: _33.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _33.MsgDepositResponse): _33.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _31.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _32.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalRequest;
                fromPartial(object: any): _32.QueryProposalRequest;
                fromAmino(object: _32.QueryProposalRequestAmino): _32.QueryProposalRequest;
                toAmino(message: _32.QueryProposalRequest): _32.QueryProposalRequestAmino;
                fromAminoMsg(object: _32.QueryProposalRequestAminoMsg): _32.QueryProposalRequest;
                toAminoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalRequestProtoMsg): _32.QueryProposalRequest;
                toProto(message: _32.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalRequest): _32.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _32.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalResponse;
                fromPartial(object: any): _32.QueryProposalResponse;
                fromAmino(object: _32.QueryProposalResponseAmino): _32.QueryProposalResponse;
                toAmino(message: _32.QueryProposalResponse): _32.QueryProposalResponseAmino;
                fromAminoMsg(object: _32.QueryProposalResponseAminoMsg): _32.QueryProposalResponse;
                toAminoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalResponseProtoMsg): _32.QueryProposalResponse;
                toProto(message: _32.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalResponse): _32.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _32.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsRequest;
                fromPartial(object: any): _32.QueryProposalsRequest;
                fromAmino(object: _32.QueryProposalsRequestAmino): _32.QueryProposalsRequest;
                toAmino(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAmino;
                fromAminoMsg(object: _32.QueryProposalsRequestAminoMsg): _32.QueryProposalsRequest;
                toAminoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsRequestProtoMsg): _32.QueryProposalsRequest;
                toProto(message: _32.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsRequest): _32.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _32.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsResponse;
                fromPartial(object: any): _32.QueryProposalsResponse;
                fromAmino(object: _32.QueryProposalsResponseAmino): _32.QueryProposalsResponse;
                toAmino(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAmino;
                fromAminoMsg(object: _32.QueryProposalsResponseAminoMsg): _32.QueryProposalsResponse;
                toAminoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryProposalsResponseProtoMsg): _32.QueryProposalsResponse;
                toProto(message: _32.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryProposalsResponse): _32.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _32.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteRequest;
                fromPartial(object: any): _32.QueryVoteRequest;
                fromAmino(object: _32.QueryVoteRequestAmino): _32.QueryVoteRequest;
                toAmino(message: _32.QueryVoteRequest): _32.QueryVoteRequestAmino;
                fromAminoMsg(object: _32.QueryVoteRequestAminoMsg): _32.QueryVoteRequest;
                toAminoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVoteRequestProtoMsg): _32.QueryVoteRequest;
                toProto(message: _32.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVoteRequest): _32.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _32.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteResponse;
                fromPartial(object: any): _32.QueryVoteResponse;
                fromAmino(object: _32.QueryVoteResponseAmino): _32.QueryVoteResponse;
                toAmino(message: _32.QueryVoteResponse): _32.QueryVoteResponseAmino;
                fromAminoMsg(object: _32.QueryVoteResponseAminoMsg): _32.QueryVoteResponse;
                toAminoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVoteResponseProtoMsg): _32.QueryVoteResponse;
                toProto(message: _32.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVoteResponse): _32.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _32.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesRequest;
                fromPartial(object: any): _32.QueryVotesRequest;
                fromAmino(object: _32.QueryVotesRequestAmino): _32.QueryVotesRequest;
                toAmino(message: _32.QueryVotesRequest): _32.QueryVotesRequestAmino;
                fromAminoMsg(object: _32.QueryVotesRequestAminoMsg): _32.QueryVotesRequest;
                toAminoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _32.QueryVotesRequestProtoMsg): _32.QueryVotesRequest;
                toProto(message: _32.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _32.QueryVotesRequest): _32.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _32.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesResponse;
                fromPartial(object: any): _32.QueryVotesResponse;
                fromAmino(object: _32.QueryVotesResponseAmino): _32.QueryVotesResponse;
                toAmino(message: _32.QueryVotesResponse): _32.QueryVotesResponseAmino;
                fromAminoMsg(object: _32.QueryVotesResponseAminoMsg): _32.QueryVotesResponse;
                toAminoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _32.QueryVotesResponseProtoMsg): _32.QueryVotesResponse;
                toProto(message: _32.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _32.QueryVotesResponse): _32.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsRequest;
                fromPartial(object: any): _32.QueryParamsRequest;
                fromAmino(object: _32.QueryParamsRequestAmino): _32.QueryParamsRequest;
                toAmino(message: _32.QueryParamsRequest): _32.QueryParamsRequestAmino;
                fromAminoMsg(object: _32.QueryParamsRequestAminoMsg): _32.QueryParamsRequest;
                toAminoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryParamsRequestProtoMsg): _32.QueryParamsRequest;
                toProto(message: _32.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryParamsRequest): _32.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsResponse;
                fromPartial(object: any): _32.QueryParamsResponse;
                fromAmino(object: _32.QueryParamsResponseAmino): _32.QueryParamsResponse;
                toAmino(message: _32.QueryParamsResponse): _32.QueryParamsResponseAmino;
                fromAminoMsg(object: _32.QueryParamsResponseAminoMsg): _32.QueryParamsResponse;
                toAminoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryParamsResponseProtoMsg): _32.QueryParamsResponse;
                toProto(message: _32.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryParamsResponse): _32.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _32.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositRequest;
                fromPartial(object: any): _32.QueryDepositRequest;
                fromAmino(object: _32.QueryDepositRequestAmino): _32.QueryDepositRequest;
                toAmino(message: _32.QueryDepositRequest): _32.QueryDepositRequestAmino;
                fromAminoMsg(object: _32.QueryDepositRequestAminoMsg): _32.QueryDepositRequest;
                toAminoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositRequestProtoMsg): _32.QueryDepositRequest;
                toProto(message: _32.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositRequest): _32.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _32.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositResponse;
                fromPartial(object: any): _32.QueryDepositResponse;
                fromAmino(object: _32.QueryDepositResponseAmino): _32.QueryDepositResponse;
                toAmino(message: _32.QueryDepositResponse): _32.QueryDepositResponseAmino;
                fromAminoMsg(object: _32.QueryDepositResponseAminoMsg): _32.QueryDepositResponse;
                toAminoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositResponseProtoMsg): _32.QueryDepositResponse;
                toProto(message: _32.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositResponse): _32.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _32.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsRequest;
                fromPartial(object: any): _32.QueryDepositsRequest;
                fromAmino(object: _32.QueryDepositsRequestAmino): _32.QueryDepositsRequest;
                toAmino(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAmino;
                fromAminoMsg(object: _32.QueryDepositsRequestAminoMsg): _32.QueryDepositsRequest;
                toAminoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsRequestProtoMsg): _32.QueryDepositsRequest;
                toProto(message: _32.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsRequest): _32.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _32.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsResponse;
                fromPartial(object: any): _32.QueryDepositsResponse;
                fromAmino(object: _32.QueryDepositsResponseAmino): _32.QueryDepositsResponse;
                toAmino(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAmino;
                fromAminoMsg(object: _32.QueryDepositsResponseAminoMsg): _32.QueryDepositsResponse;
                toAminoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryDepositsResponseProtoMsg): _32.QueryDepositsResponse;
                toProto(message: _32.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryDepositsResponse): _32.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _32.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultRequest;
                fromPartial(object: any): _32.QueryTallyResultRequest;
                fromAmino(object: _32.QueryTallyResultRequestAmino): _32.QueryTallyResultRequest;
                toAmino(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _32.QueryTallyResultRequestAminoMsg): _32.QueryTallyResultRequest;
                toAminoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultRequestProtoMsg): _32.QueryTallyResultRequest;
                toProto(message: _32.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultRequest): _32.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _32.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultResponse;
                fromPartial(object: any): _32.QueryTallyResultResponse;
                fromAmino(object: _32.QueryTallyResultResponseAmino): _32.QueryTallyResultResponse;
                toAmino(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _32.QueryTallyResultResponseAminoMsg): _32.QueryTallyResultResponse;
                toAminoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _32.QueryTallyResultResponseProtoMsg): _32.QueryTallyResultResponse;
                toProto(message: _32.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _32.QueryTallyResultResponse): _32.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _31.VoteOption;
            voteOptionToJSON(object: _31.VoteOption): string;
            proposalStatusFromJSON(object: any): _31.ProposalStatus;
            proposalStatusToJSON(object: _31.ProposalStatus): string;
            VoteOption: typeof _31.VoteOption;
            VoteOptionSDKType: typeof _31.VoteOption;
            VoteOptionAmino: typeof _31.VoteOption;
            ProposalStatus: typeof _31.ProposalStatus;
            ProposalStatusSDKType: typeof _31.ProposalStatus;
            ProposalStatusAmino: typeof _31.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _31.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.WeightedVoteOption;
                fromPartial(object: any): _31.WeightedVoteOption;
                fromAmino(object: _31.WeightedVoteOptionAmino): _31.WeightedVoteOption;
                toAmino(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAmino;
                fromAminoMsg(object: _31.WeightedVoteOptionAminoMsg): _31.WeightedVoteOption;
                toAminoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _31.WeightedVoteOptionProtoMsg): _31.WeightedVoteOption;
                toProto(message: _31.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _31.WeightedVoteOption): _31.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _31.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TextProposal;
                fromPartial(object: any): _31.TextProposal;
                fromAmino(object: _31.TextProposalAmino): _31.TextProposal;
                toAmino(message: _31.TextProposal): _31.TextProposalAmino;
                fromAminoMsg(object: _31.TextProposalAminoMsg): _31.TextProposal;
                toAminoMsg(message: _31.TextProposal): _31.TextProposalAminoMsg;
                fromProtoMsg(message: _31.TextProposalProtoMsg): _31.TextProposal;
                toProto(message: _31.TextProposal): Uint8Array;
                toProtoMsg(message: _31.TextProposal): _31.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _31.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Deposit;
                fromPartial(object: any): _31.Deposit;
                fromAmino(object: _31.DepositAmino): _31.Deposit;
                toAmino(message: _31.Deposit): _31.DepositAmino;
                fromAminoMsg(object: _31.DepositAminoMsg): _31.Deposit;
                toAminoMsg(message: _31.Deposit): _31.DepositAminoMsg;
                fromProtoMsg(message: _31.DepositProtoMsg): _31.Deposit;
                toProto(message: _31.Deposit): Uint8Array;
                toProtoMsg(message: _31.Deposit): _31.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _31.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Proposal;
                fromPartial(object: any): _31.Proposal;
                fromAmino(object: _31.ProposalAmino): _31.Proposal;
                toAmino(message: _31.Proposal): _31.ProposalAmino;
                fromAminoMsg(object: _31.ProposalAminoMsg): _31.Proposal;
                toAminoMsg(message: _31.Proposal): _31.ProposalAminoMsg;
                fromProtoMsg(message: _31.ProposalProtoMsg): _31.Proposal;
                toProto(message: _31.Proposal): Uint8Array;
                toProtoMsg(message: _31.Proposal): _31.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _31.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyResult;
                fromPartial(object: any): _31.TallyResult;
                fromAmino(object: _31.TallyResultAmino): _31.TallyResult;
                toAmino(message: _31.TallyResult): _31.TallyResultAmino;
                fromAminoMsg(object: _31.TallyResultAminoMsg): _31.TallyResult;
                toAminoMsg(message: _31.TallyResult): _31.TallyResultAminoMsg;
                fromProtoMsg(message: _31.TallyResultProtoMsg): _31.TallyResult;
                toProto(message: _31.TallyResult): Uint8Array;
                toProtoMsg(message: _31.TallyResult): _31.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _31.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Vote;
                fromPartial(object: any): _31.Vote;
                fromAmino(object: _31.VoteAmino): _31.Vote;
                toAmino(message: _31.Vote): _31.VoteAmino;
                fromAminoMsg(object: _31.VoteAminoMsg): _31.Vote;
                toAminoMsg(message: _31.Vote): _31.VoteAminoMsg;
                fromProtoMsg(message: _31.VoteProtoMsg): _31.Vote;
                toProto(message: _31.Vote): Uint8Array;
                toProtoMsg(message: _31.Vote): _31.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _31.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DepositParams;
                fromPartial(object: any): _31.DepositParams;
                fromAmino(object: _31.DepositParamsAmino): _31.DepositParams;
                toAmino(message: _31.DepositParams): _31.DepositParamsAmino;
                fromAminoMsg(object: _31.DepositParamsAminoMsg): _31.DepositParams;
                toAminoMsg(message: _31.DepositParams): _31.DepositParamsAminoMsg;
                fromProtoMsg(message: _31.DepositParamsProtoMsg): _31.DepositParams;
                toProto(message: _31.DepositParams): Uint8Array;
                toProtoMsg(message: _31.DepositParams): _31.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _31.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.VotingParams;
                fromPartial(object: any): _31.VotingParams;
                fromAmino(object: _31.VotingParamsAmino): _31.VotingParams;
                toAmino(message: _31.VotingParams): _31.VotingParamsAmino;
                fromAminoMsg(object: _31.VotingParamsAminoMsg): _31.VotingParams;
                toAminoMsg(message: _31.VotingParams): _31.VotingParamsAminoMsg;
                fromProtoMsg(message: _31.VotingParamsProtoMsg): _31.VotingParams;
                toProto(message: _31.VotingParams): Uint8Array;
                toProtoMsg(message: _31.VotingParams): _31.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _31.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyParams;
                fromPartial(object: any): _31.TallyParams;
                fromAmino(object: _31.TallyParamsAmino): _31.TallyParams;
                toAmino(message: _31.TallyParams): _31.TallyParamsAmino;
                fromAminoMsg(object: _31.TallyParamsAminoMsg): _31.TallyParams;
                toAminoMsg(message: _31.TallyParams): _31.TallyParamsAminoMsg;
                fromProtoMsg(message: _31.TallyParamsProtoMsg): _31.TallyParams;
                toProto(message: _31.TallyParams): Uint8Array;
                toProtoMsg(message: _31.TallyParams): _31.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: any): _30.GenesisState;
                fromAmino(object: _30.GenesisStateAmino): _30.GenesisState;
                toAmino(message: _30.GenesisState): _30.GenesisStateAmino;
                fromAminoMsg(object: _30.GenesisStateAminoMsg): _30.GenesisState;
                toAminoMsg(message: _30.GenesisState): _30.GenesisStateAminoMsg;
                fromProtoMsg(message: _30.GenesisStateProtoMsg): _30.GenesisState;
                toProto(message: _30.GenesisState): Uint8Array;
                toProtoMsg(message: _30.GenesisState): _30.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _133.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                inflation(request?: _36.QueryInflationRequest): Promise<_36.QueryInflationResponse>;
                annualProvisions(request?: _36.QueryAnnualProvisionsRequest): Promise<_36.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _123.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsRequest;
                fromPartial(_: any): _36.QueryParamsRequest;
                fromAmino(_: _36.QueryParamsRequestAmino): _36.QueryParamsRequest;
                toAmino(_: _36.QueryParamsRequest): _36.QueryParamsRequestAmino;
                fromAminoMsg(object: _36.QueryParamsRequestAminoMsg): _36.QueryParamsRequest;
                toAminoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryParamsRequestProtoMsg): _36.QueryParamsRequest;
                toProto(message: _36.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsResponse;
                fromPartial(object: any): _36.QueryParamsResponse;
                fromAmino(object: _36.QueryParamsResponseAmino): _36.QueryParamsResponse;
                toAmino(message: _36.QueryParamsResponse): _36.QueryParamsResponseAmino;
                fromAminoMsg(object: _36.QueryParamsResponseAminoMsg): _36.QueryParamsResponse;
                toAminoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryParamsResponseProtoMsg): _36.QueryParamsResponse;
                toProto(message: _36.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _36.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryInflationRequest;
                fromPartial(_: any): _36.QueryInflationRequest;
                fromAmino(_: _36.QueryInflationRequestAmino): _36.QueryInflationRequest;
                toAmino(_: _36.QueryInflationRequest): _36.QueryInflationRequestAmino;
                fromAminoMsg(object: _36.QueryInflationRequestAminoMsg): _36.QueryInflationRequest;
                toAminoMsg(message: _36.QueryInflationRequest): _36.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _36.QueryInflationRequestProtoMsg): _36.QueryInflationRequest;
                toProto(message: _36.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _36.QueryInflationRequest): _36.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _36.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryInflationResponse;
                fromPartial(object: any): _36.QueryInflationResponse;
                fromAmino(object: _36.QueryInflationResponseAmino): _36.QueryInflationResponse;
                toAmino(message: _36.QueryInflationResponse): _36.QueryInflationResponseAmino;
                fromAminoMsg(object: _36.QueryInflationResponseAminoMsg): _36.QueryInflationResponse;
                toAminoMsg(message: _36.QueryInflationResponse): _36.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _36.QueryInflationResponseProtoMsg): _36.QueryInflationResponse;
                toProto(message: _36.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _36.QueryInflationResponse): _36.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _36.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryAnnualProvisionsRequest;
                fromPartial(_: any): _36.QueryAnnualProvisionsRequest;
                fromAmino(_: _36.QueryAnnualProvisionsRequestAmino): _36.QueryAnnualProvisionsRequest;
                toAmino(_: _36.QueryAnnualProvisionsRequest): _36.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _36.QueryAnnualProvisionsRequestAminoMsg): _36.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _36.QueryAnnualProvisionsRequest): _36.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryAnnualProvisionsRequestProtoMsg): _36.QueryAnnualProvisionsRequest;
                toProto(message: _36.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryAnnualProvisionsRequest): _36.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _36.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryAnnualProvisionsResponse;
                fromPartial(object: any): _36.QueryAnnualProvisionsResponse;
                fromAmino(object: _36.QueryAnnualProvisionsResponseAmino): _36.QueryAnnualProvisionsResponse;
                toAmino(message: _36.QueryAnnualProvisionsResponse): _36.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _36.QueryAnnualProvisionsResponseAminoMsg): _36.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _36.QueryAnnualProvisionsResponse): _36.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryAnnualProvisionsResponseProtoMsg): _36.QueryAnnualProvisionsResponse;
                toProto(message: _36.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryAnnualProvisionsResponse): _36.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _35.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Minter;
                fromPartial(object: any): _35.Minter;
                fromAmino(object: _35.MinterAmino): _35.Minter;
                toAmino(message: _35.Minter): _35.MinterAmino;
                fromAminoMsg(object: _35.MinterAminoMsg): _35.Minter;
                toAminoMsg(message: _35.Minter): _35.MinterAminoMsg;
                fromProtoMsg(message: _35.MinterProtoMsg): _35.Minter;
                toProto(message: _35.Minter): Uint8Array;
                toProtoMsg(message: _35.Minter): _35.MinterProtoMsg;
            };
            Params: {
                encode(message: _35.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Params;
                fromPartial(object: any): _35.Params;
                fromAmino(object: _35.ParamsAmino): _35.Params;
                toAmino(message: _35.Params): _35.ParamsAmino;
                fromAminoMsg(object: _35.ParamsAminoMsg): _35.Params;
                toAminoMsg(message: _35.Params): _35.ParamsAminoMsg;
                fromProtoMsg(message: _35.ParamsProtoMsg): _35.Params;
                toProto(message: _35.Params): Uint8Array;
                toProtoMsg(message: _35.Params): _35.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: any): _34.GenesisState;
                fromAmino(object: _34.GenesisStateAmino): _34.GenesisState;
                toAmino(message: _34.GenesisState): _34.GenesisStateAmino;
                fromAminoMsg(object: _34.GenesisStateAminoMsg): _34.GenesisState;
                toAminoMsg(message: _34.GenesisState): _34.GenesisStateAminoMsg;
                fromProtoMsg(message: _34.GenesisStateProtoMsg): _34.GenesisState;
                toProto(message: _34.GenesisState): Uint8Array;
                toProtoMsg(message: _34.GenesisState): _34.GenesisStateProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _37.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Module;
                    fromPartial(_: any): _37.Module;
                    fromAmino(_: _37.ModuleAmino): _37.Module;
                    toAmino(_: _37.Module): _37.ModuleAmino;
                    fromAminoMsg(object: _37.ModuleAminoMsg): _37.Module;
                    toAminoMsg(message: _37.Module): _37.ModuleAminoMsg;
                    fromProtoMsg(message: _37.ModuleProtoMsg): _37.Module;
                    toProto(message: _37.Module): Uint8Array;
                    toProtoMsg(message: _37.Module): _37.ModuleProtoMsg;
                };
            };
        }
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _142.MsgClientImpl;
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _40.QueryValidatorsRequest): Promise<_40.QueryValidatorsResponse>;
                validator(request: _40.QueryValidatorRequest): Promise<_40.QueryValidatorResponse>;
                validatorDelegations(request: _40.QueryValidatorDelegationsRequest): Promise<_40.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _40.QueryValidatorUnbondingDelegationsRequest): Promise<_40.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _40.QueryDelegationRequest): Promise<_40.QueryDelegationResponse>;
                unbondingDelegation(request: _40.QueryUnbondingDelegationRequest): Promise<_40.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _40.QueryDelegatorDelegationsRequest): Promise<_40.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _40.QueryDelegatorUnbondingDelegationsRequest): Promise<_40.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _40.QueryRedelegationsRequest): Promise<_40.QueryRedelegationsResponse>;
                delegatorValidators(request: _40.QueryDelegatorValidatorsRequest): Promise<_40.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _40.QueryDelegatorValidatorRequest): Promise<_40.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _40.QueryHistoricalInfoRequest): Promise<_40.QueryHistoricalInfoResponse>;
                pool(request?: _40.QueryPoolRequest): Promise<_40.QueryPoolResponse>;
                params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _124.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _42.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _42.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _42.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _42.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _42.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _42.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _42.MsgCreateValidator): {
                        typeUrl: string;
                        value: _42.MsgCreateValidator;
                    };
                    editValidator(value: _42.MsgEditValidator): {
                        typeUrl: string;
                        value: _42.MsgEditValidator;
                    };
                    delegate(value: _42.MsgDelegate): {
                        typeUrl: string;
                        value: _42.MsgDelegate;
                    };
                    beginRedelegate(value: _42.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _42.MsgBeginRedelegate;
                    };
                    undelegate(value: _42.MsgUndelegate): {
                        typeUrl: string;
                        value: _42.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _42.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _42.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _42.MsgCreateValidator): {
                        typeUrl: string;
                        value: _42.MsgCreateValidator;
                    };
                    editValidator(value: _42.MsgEditValidator): {
                        typeUrl: string;
                        value: _42.MsgEditValidator;
                    };
                    delegate(value: _42.MsgDelegate): {
                        typeUrl: string;
                        value: _42.MsgDelegate;
                    };
                    beginRedelegate(value: _42.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _42.MsgBeginRedelegate;
                    };
                    undelegate(value: _42.MsgUndelegate): {
                        typeUrl: string;
                        value: _42.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _42.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _42.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _42.MsgCreateValidator) => _42.MsgCreateValidatorAmino;
                    fromAmino: (object: _42.MsgCreateValidatorAmino) => _42.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _42.MsgEditValidator) => _42.MsgEditValidatorAmino;
                    fromAmino: (object: _42.MsgEditValidatorAmino) => _42.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _42.MsgDelegate) => _42.MsgDelegateAmino;
                    fromAmino: (object: _42.MsgDelegateAmino) => _42.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _42.MsgBeginRedelegate) => _42.MsgBeginRedelegateAmino;
                    fromAmino: (object: _42.MsgBeginRedelegateAmino) => _42.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _42.MsgUndelegate) => _42.MsgUndelegateAmino;
                    fromAmino: (object: _42.MsgUndelegateAmino) => _42.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _42.MsgCancelUnbondingDelegation) => _42.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _42.MsgCancelUnbondingDelegationAmino) => _42.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _42.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCreateValidator;
                fromPartial(object: any): _42.MsgCreateValidator;
                fromAmino(object: _42.MsgCreateValidatorAmino): _42.MsgCreateValidator;
                toAmino(message: _42.MsgCreateValidator): _42.MsgCreateValidatorAmino;
                fromAminoMsg(object: _42.MsgCreateValidatorAminoMsg): _42.MsgCreateValidator;
                toAminoMsg(message: _42.MsgCreateValidator): _42.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _42.MsgCreateValidatorProtoMsg): _42.MsgCreateValidator;
                toProto(message: _42.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _42.MsgCreateValidator): _42.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _42.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCreateValidatorResponse;
                fromPartial(_: any): _42.MsgCreateValidatorResponse;
                fromAmino(_: _42.MsgCreateValidatorResponseAmino): _42.MsgCreateValidatorResponse;
                toAmino(_: _42.MsgCreateValidatorResponse): _42.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _42.MsgCreateValidatorResponseAminoMsg): _42.MsgCreateValidatorResponse;
                toAminoMsg(message: _42.MsgCreateValidatorResponse): _42.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _42.MsgCreateValidatorResponseProtoMsg): _42.MsgCreateValidatorResponse;
                toProto(message: _42.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _42.MsgCreateValidatorResponse): _42.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _42.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgEditValidator;
                fromPartial(object: any): _42.MsgEditValidator;
                fromAmino(object: _42.MsgEditValidatorAmino): _42.MsgEditValidator;
                toAmino(message: _42.MsgEditValidator): _42.MsgEditValidatorAmino;
                fromAminoMsg(object: _42.MsgEditValidatorAminoMsg): _42.MsgEditValidator;
                toAminoMsg(message: _42.MsgEditValidator): _42.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _42.MsgEditValidatorProtoMsg): _42.MsgEditValidator;
                toProto(message: _42.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _42.MsgEditValidator): _42.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _42.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgEditValidatorResponse;
                fromPartial(_: any): _42.MsgEditValidatorResponse;
                fromAmino(_: _42.MsgEditValidatorResponseAmino): _42.MsgEditValidatorResponse;
                toAmino(_: _42.MsgEditValidatorResponse): _42.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _42.MsgEditValidatorResponseAminoMsg): _42.MsgEditValidatorResponse;
                toAminoMsg(message: _42.MsgEditValidatorResponse): _42.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _42.MsgEditValidatorResponseProtoMsg): _42.MsgEditValidatorResponse;
                toProto(message: _42.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _42.MsgEditValidatorResponse): _42.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _42.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgDelegate;
                fromPartial(object: any): _42.MsgDelegate;
                fromAmino(object: _42.MsgDelegateAmino): _42.MsgDelegate;
                toAmino(message: _42.MsgDelegate): _42.MsgDelegateAmino;
                fromAminoMsg(object: _42.MsgDelegateAminoMsg): _42.MsgDelegate;
                toAminoMsg(message: _42.MsgDelegate): _42.MsgDelegateAminoMsg;
                fromProtoMsg(message: _42.MsgDelegateProtoMsg): _42.MsgDelegate;
                toProto(message: _42.MsgDelegate): Uint8Array;
                toProtoMsg(message: _42.MsgDelegate): _42.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _42.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgDelegateResponse;
                fromPartial(_: any): _42.MsgDelegateResponse;
                fromAmino(_: _42.MsgDelegateResponseAmino): _42.MsgDelegateResponse;
                toAmino(_: _42.MsgDelegateResponse): _42.MsgDelegateResponseAmino;
                fromAminoMsg(object: _42.MsgDelegateResponseAminoMsg): _42.MsgDelegateResponse;
                toAminoMsg(message: _42.MsgDelegateResponse): _42.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _42.MsgDelegateResponseProtoMsg): _42.MsgDelegateResponse;
                toProto(message: _42.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _42.MsgDelegateResponse): _42.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _42.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgBeginRedelegate;
                fromPartial(object: any): _42.MsgBeginRedelegate;
                fromAmino(object: _42.MsgBeginRedelegateAmino): _42.MsgBeginRedelegate;
                toAmino(message: _42.MsgBeginRedelegate): _42.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _42.MsgBeginRedelegateAminoMsg): _42.MsgBeginRedelegate;
                toAminoMsg(message: _42.MsgBeginRedelegate): _42.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _42.MsgBeginRedelegateProtoMsg): _42.MsgBeginRedelegate;
                toProto(message: _42.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _42.MsgBeginRedelegate): _42.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _42.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgBeginRedelegateResponse;
                fromPartial(object: any): _42.MsgBeginRedelegateResponse;
                fromAmino(object: _42.MsgBeginRedelegateResponseAmino): _42.MsgBeginRedelegateResponse;
                toAmino(message: _42.MsgBeginRedelegateResponse): _42.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _42.MsgBeginRedelegateResponseAminoMsg): _42.MsgBeginRedelegateResponse;
                toAminoMsg(message: _42.MsgBeginRedelegateResponse): _42.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _42.MsgBeginRedelegateResponseProtoMsg): _42.MsgBeginRedelegateResponse;
                toProto(message: _42.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _42.MsgBeginRedelegateResponse): _42.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _42.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgUndelegate;
                fromPartial(object: any): _42.MsgUndelegate;
                fromAmino(object: _42.MsgUndelegateAmino): _42.MsgUndelegate;
                toAmino(message: _42.MsgUndelegate): _42.MsgUndelegateAmino;
                fromAminoMsg(object: _42.MsgUndelegateAminoMsg): _42.MsgUndelegate;
                toAminoMsg(message: _42.MsgUndelegate): _42.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _42.MsgUndelegateProtoMsg): _42.MsgUndelegate;
                toProto(message: _42.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _42.MsgUndelegate): _42.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _42.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgUndelegateResponse;
                fromPartial(object: any): _42.MsgUndelegateResponse;
                fromAmino(object: _42.MsgUndelegateResponseAmino): _42.MsgUndelegateResponse;
                toAmino(message: _42.MsgUndelegateResponse): _42.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _42.MsgUndelegateResponseAminoMsg): _42.MsgUndelegateResponse;
                toAminoMsg(message: _42.MsgUndelegateResponse): _42.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _42.MsgUndelegateResponseProtoMsg): _42.MsgUndelegateResponse;
                toProto(message: _42.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _42.MsgUndelegateResponse): _42.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _42.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCancelUnbondingDelegation;
                fromPartial(object: any): _42.MsgCancelUnbondingDelegation;
                fromAmino(object: _42.MsgCancelUnbondingDelegationAmino): _42.MsgCancelUnbondingDelegation;
                toAmino(message: _42.MsgCancelUnbondingDelegation): _42.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _42.MsgCancelUnbondingDelegationAminoMsg): _42.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _42.MsgCancelUnbondingDelegation): _42.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _42.MsgCancelUnbondingDelegationProtoMsg): _42.MsgCancelUnbondingDelegation;
                toProto(message: _42.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _42.MsgCancelUnbondingDelegation): _42.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _42.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: any): _42.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _42.MsgCancelUnbondingDelegationResponseAmino): _42.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _42.MsgCancelUnbondingDelegationResponse): _42.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _42.MsgCancelUnbondingDelegationResponseAminoMsg): _42.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _42.MsgCancelUnbondingDelegationResponse): _42.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _42.MsgCancelUnbondingDelegationResponseProtoMsg): _42.MsgCancelUnbondingDelegationResponse;
                toProto(message: _42.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _42.MsgCancelUnbondingDelegationResponse): _42.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _41.BondStatus;
            bondStatusToJSON(object: _41.BondStatus): string;
            BondStatus: typeof _41.BondStatus;
            BondStatusSDKType: typeof _41.BondStatus;
            BondStatusAmino: typeof _41.BondStatus;
            HistoricalInfo: {
                encode(message: _41.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.HistoricalInfo;
                fromPartial(object: any): _41.HistoricalInfo;
                fromAmino(object: _41.HistoricalInfoAmino): _41.HistoricalInfo;
                toAmino(message: _41.HistoricalInfo): _41.HistoricalInfoAmino;
                fromAminoMsg(object: _41.HistoricalInfoAminoMsg): _41.HistoricalInfo;
                toAminoMsg(message: _41.HistoricalInfo): _41.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _41.HistoricalInfoProtoMsg): _41.HistoricalInfo;
                toProto(message: _41.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _41.HistoricalInfo): _41.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _41.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.CommissionRates;
                fromPartial(object: any): _41.CommissionRates;
                fromAmino(object: _41.CommissionRatesAmino): _41.CommissionRates;
                toAmino(message: _41.CommissionRates): _41.CommissionRatesAmino;
                fromAminoMsg(object: _41.CommissionRatesAminoMsg): _41.CommissionRates;
                toAminoMsg(message: _41.CommissionRates): _41.CommissionRatesAminoMsg;
                fromProtoMsg(message: _41.CommissionRatesProtoMsg): _41.CommissionRates;
                toProto(message: _41.CommissionRates): Uint8Array;
                toProtoMsg(message: _41.CommissionRates): _41.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _41.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Commission;
                fromPartial(object: any): _41.Commission;
                fromAmino(object: _41.CommissionAmino): _41.Commission;
                toAmino(message: _41.Commission): _41.CommissionAmino;
                fromAminoMsg(object: _41.CommissionAminoMsg): _41.Commission;
                toAminoMsg(message: _41.Commission): _41.CommissionAminoMsg;
                fromProtoMsg(message: _41.CommissionProtoMsg): _41.Commission;
                toProto(message: _41.Commission): Uint8Array;
                toProtoMsg(message: _41.Commission): _41.CommissionProtoMsg;
            };
            Description: {
                encode(message: _41.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Description;
                fromPartial(object: any): _41.Description;
                fromAmino(object: _41.DescriptionAmino): _41.Description;
                toAmino(message: _41.Description): _41.DescriptionAmino;
                fromAminoMsg(object: _41.DescriptionAminoMsg): _41.Description;
                toAminoMsg(message: _41.Description): _41.DescriptionAminoMsg;
                fromProtoMsg(message: _41.DescriptionProtoMsg): _41.Description;
                toProto(message: _41.Description): Uint8Array;
                toProtoMsg(message: _41.Description): _41.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _41.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Validator;
                fromPartial(object: any): _41.Validator;
                fromAmino(object: _41.ValidatorAmino): _41.Validator;
                toAmino(message: _41.Validator): _41.ValidatorAmino;
                fromAminoMsg(object: _41.ValidatorAminoMsg): _41.Validator;
                toAminoMsg(message: _41.Validator): _41.ValidatorAminoMsg;
                fromProtoMsg(message: _41.ValidatorProtoMsg): _41.Validator;
                toProto(message: _41.Validator): Uint8Array;
                toProtoMsg(message: _41.Validator): _41.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _41.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ValAddresses;
                fromPartial(object: any): _41.ValAddresses;
                fromAmino(object: _41.ValAddressesAmino): _41.ValAddresses;
                toAmino(message: _41.ValAddresses): _41.ValAddressesAmino;
                fromAminoMsg(object: _41.ValAddressesAminoMsg): _41.ValAddresses;
                toAminoMsg(message: _41.ValAddresses): _41.ValAddressesAminoMsg;
                fromProtoMsg(message: _41.ValAddressesProtoMsg): _41.ValAddresses;
                toProto(message: _41.ValAddresses): Uint8Array;
                toProtoMsg(message: _41.ValAddresses): _41.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _41.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DVPair;
                fromPartial(object: any): _41.DVPair;
                fromAmino(object: _41.DVPairAmino): _41.DVPair;
                toAmino(message: _41.DVPair): _41.DVPairAmino;
                fromAminoMsg(object: _41.DVPairAminoMsg): _41.DVPair;
                toAminoMsg(message: _41.DVPair): _41.DVPairAminoMsg;
                fromProtoMsg(message: _41.DVPairProtoMsg): _41.DVPair;
                toProto(message: _41.DVPair): Uint8Array;
                toProtoMsg(message: _41.DVPair): _41.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _41.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DVPairs;
                fromPartial(object: any): _41.DVPairs;
                fromAmino(object: _41.DVPairsAmino): _41.DVPairs;
                toAmino(message: _41.DVPairs): _41.DVPairsAmino;
                fromAminoMsg(object: _41.DVPairsAminoMsg): _41.DVPairs;
                toAminoMsg(message: _41.DVPairs): _41.DVPairsAminoMsg;
                fromProtoMsg(message: _41.DVPairsProtoMsg): _41.DVPairs;
                toProto(message: _41.DVPairs): Uint8Array;
                toProtoMsg(message: _41.DVPairs): _41.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _41.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DVVTriplet;
                fromPartial(object: any): _41.DVVTriplet;
                fromAmino(object: _41.DVVTripletAmino): _41.DVVTriplet;
                toAmino(message: _41.DVVTriplet): _41.DVVTripletAmino;
                fromAminoMsg(object: _41.DVVTripletAminoMsg): _41.DVVTriplet;
                toAminoMsg(message: _41.DVVTriplet): _41.DVVTripletAminoMsg;
                fromProtoMsg(message: _41.DVVTripletProtoMsg): _41.DVVTriplet;
                toProto(message: _41.DVVTriplet): Uint8Array;
                toProtoMsg(message: _41.DVVTriplet): _41.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _41.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DVVTriplets;
                fromPartial(object: any): _41.DVVTriplets;
                fromAmino(object: _41.DVVTripletsAmino): _41.DVVTriplets;
                toAmino(message: _41.DVVTriplets): _41.DVVTripletsAmino;
                fromAminoMsg(object: _41.DVVTripletsAminoMsg): _41.DVVTriplets;
                toAminoMsg(message: _41.DVVTriplets): _41.DVVTripletsAminoMsg;
                fromProtoMsg(message: _41.DVVTripletsProtoMsg): _41.DVVTriplets;
                toProto(message: _41.DVVTriplets): Uint8Array;
                toProtoMsg(message: _41.DVVTriplets): _41.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _41.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Delegation;
                fromPartial(object: any): _41.Delegation;
                fromAmino(object: _41.DelegationAmino): _41.Delegation;
                toAmino(message: _41.Delegation): _41.DelegationAmino;
                fromAminoMsg(object: _41.DelegationAminoMsg): _41.Delegation;
                toAminoMsg(message: _41.Delegation): _41.DelegationAminoMsg;
                fromProtoMsg(message: _41.DelegationProtoMsg): _41.Delegation;
                toProto(message: _41.Delegation): Uint8Array;
                toProtoMsg(message: _41.Delegation): _41.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _41.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.UnbondingDelegation;
                fromPartial(object: any): _41.UnbondingDelegation;
                fromAmino(object: _41.UnbondingDelegationAmino): _41.UnbondingDelegation;
                toAmino(message: _41.UnbondingDelegation): _41.UnbondingDelegationAmino;
                fromAminoMsg(object: _41.UnbondingDelegationAminoMsg): _41.UnbondingDelegation;
                toAminoMsg(message: _41.UnbondingDelegation): _41.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _41.UnbondingDelegationProtoMsg): _41.UnbondingDelegation;
                toProto(message: _41.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _41.UnbondingDelegation): _41.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _41.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.UnbondingDelegationEntry;
                fromPartial(object: any): _41.UnbondingDelegationEntry;
                fromAmino(object: _41.UnbondingDelegationEntryAmino): _41.UnbondingDelegationEntry;
                toAmino(message: _41.UnbondingDelegationEntry): _41.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _41.UnbondingDelegationEntryAminoMsg): _41.UnbondingDelegationEntry;
                toAminoMsg(message: _41.UnbondingDelegationEntry): _41.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _41.UnbondingDelegationEntryProtoMsg): _41.UnbondingDelegationEntry;
                toProto(message: _41.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _41.UnbondingDelegationEntry): _41.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _41.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.RedelegationEntry;
                fromPartial(object: any): _41.RedelegationEntry;
                fromAmino(object: _41.RedelegationEntryAmino): _41.RedelegationEntry;
                toAmino(message: _41.RedelegationEntry): _41.RedelegationEntryAmino;
                fromAminoMsg(object: _41.RedelegationEntryAminoMsg): _41.RedelegationEntry;
                toAminoMsg(message: _41.RedelegationEntry): _41.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _41.RedelegationEntryProtoMsg): _41.RedelegationEntry;
                toProto(message: _41.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _41.RedelegationEntry): _41.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _41.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Redelegation;
                fromPartial(object: any): _41.Redelegation;
                fromAmino(object: _41.RedelegationAmino): _41.Redelegation;
                toAmino(message: _41.Redelegation): _41.RedelegationAmino;
                fromAminoMsg(object: _41.RedelegationAminoMsg): _41.Redelegation;
                toAminoMsg(message: _41.Redelegation): _41.RedelegationAminoMsg;
                fromProtoMsg(message: _41.RedelegationProtoMsg): _41.Redelegation;
                toProto(message: _41.Redelegation): Uint8Array;
                toProtoMsg(message: _41.Redelegation): _41.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _41.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Params;
                fromPartial(object: any): _41.Params;
                fromAmino(object: _41.ParamsAmino): _41.Params;
                toAmino(message: _41.Params): _41.ParamsAmino;
                fromAminoMsg(object: _41.ParamsAminoMsg): _41.Params;
                toAminoMsg(message: _41.Params): _41.ParamsAminoMsg;
                fromProtoMsg(message: _41.ParamsProtoMsg): _41.Params;
                toProto(message: _41.Params): Uint8Array;
                toProtoMsg(message: _41.Params): _41.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _41.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.DelegationResponse;
                fromPartial(object: any): _41.DelegationResponse;
                fromAmino(object: _41.DelegationResponseAmino): _41.DelegationResponse;
                toAmino(message: _41.DelegationResponse): _41.DelegationResponseAmino;
                fromAminoMsg(object: _41.DelegationResponseAminoMsg): _41.DelegationResponse;
                toAminoMsg(message: _41.DelegationResponse): _41.DelegationResponseAminoMsg;
                fromProtoMsg(message: _41.DelegationResponseProtoMsg): _41.DelegationResponse;
                toProto(message: _41.DelegationResponse): Uint8Array;
                toProtoMsg(message: _41.DelegationResponse): _41.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _41.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.RedelegationEntryResponse;
                fromPartial(object: any): _41.RedelegationEntryResponse;
                fromAmino(object: _41.RedelegationEntryResponseAmino): _41.RedelegationEntryResponse;
                toAmino(message: _41.RedelegationEntryResponse): _41.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _41.RedelegationEntryResponseAminoMsg): _41.RedelegationEntryResponse;
                toAminoMsg(message: _41.RedelegationEntryResponse): _41.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _41.RedelegationEntryResponseProtoMsg): _41.RedelegationEntryResponse;
                toProto(message: _41.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _41.RedelegationEntryResponse): _41.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _41.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.RedelegationResponse;
                fromPartial(object: any): _41.RedelegationResponse;
                fromAmino(object: _41.RedelegationResponseAmino): _41.RedelegationResponse;
                toAmino(message: _41.RedelegationResponse): _41.RedelegationResponseAmino;
                fromAminoMsg(object: _41.RedelegationResponseAminoMsg): _41.RedelegationResponse;
                toAminoMsg(message: _41.RedelegationResponse): _41.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _41.RedelegationResponseProtoMsg): _41.RedelegationResponse;
                toProto(message: _41.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _41.RedelegationResponse): _41.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _41.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Pool;
                fromPartial(object: any): _41.Pool;
                fromAmino(object: _41.PoolAmino): _41.Pool;
                toAmino(message: _41.Pool): _41.PoolAmino;
                fromAminoMsg(object: _41.PoolAminoMsg): _41.Pool;
                toAminoMsg(message: _41.Pool): _41.PoolAminoMsg;
                fromProtoMsg(message: _41.PoolProtoMsg): _41.Pool;
                toProto(message: _41.Pool): Uint8Array;
                toProtoMsg(message: _41.Pool): _41.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _40.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorsRequest;
                fromPartial(object: any): _40.QueryValidatorsRequest;
                fromAmino(object: _40.QueryValidatorsRequestAmino): _40.QueryValidatorsRequest;
                toAmino(message: _40.QueryValidatorsRequest): _40.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _40.QueryValidatorsRequestAminoMsg): _40.QueryValidatorsRequest;
                toAminoMsg(message: _40.QueryValidatorsRequest): _40.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorsRequestProtoMsg): _40.QueryValidatorsRequest;
                toProto(message: _40.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorsRequest): _40.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _40.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorsResponse;
                fromPartial(object: any): _40.QueryValidatorsResponse;
                fromAmino(object: _40.QueryValidatorsResponseAmino): _40.QueryValidatorsResponse;
                toAmino(message: _40.QueryValidatorsResponse): _40.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _40.QueryValidatorsResponseAminoMsg): _40.QueryValidatorsResponse;
                toAminoMsg(message: _40.QueryValidatorsResponse): _40.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorsResponseProtoMsg): _40.QueryValidatorsResponse;
                toProto(message: _40.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorsResponse): _40.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _40.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorRequest;
                fromPartial(object: any): _40.QueryValidatorRequest;
                fromAmino(object: _40.QueryValidatorRequestAmino): _40.QueryValidatorRequest;
                toAmino(message: _40.QueryValidatorRequest): _40.QueryValidatorRequestAmino;
                fromAminoMsg(object: _40.QueryValidatorRequestAminoMsg): _40.QueryValidatorRequest;
                toAminoMsg(message: _40.QueryValidatorRequest): _40.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorRequestProtoMsg): _40.QueryValidatorRequest;
                toProto(message: _40.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorRequest): _40.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _40.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorResponse;
                fromPartial(object: any): _40.QueryValidatorResponse;
                fromAmino(object: _40.QueryValidatorResponseAmino): _40.QueryValidatorResponse;
                toAmino(message: _40.QueryValidatorResponse): _40.QueryValidatorResponseAmino;
                fromAminoMsg(object: _40.QueryValidatorResponseAminoMsg): _40.QueryValidatorResponse;
                toAminoMsg(message: _40.QueryValidatorResponse): _40.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorResponseProtoMsg): _40.QueryValidatorResponse;
                toProto(message: _40.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorResponse): _40.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _40.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorDelegationsRequest;
                fromPartial(object: any): _40.QueryValidatorDelegationsRequest;
                fromAmino(object: _40.QueryValidatorDelegationsRequestAmino): _40.QueryValidatorDelegationsRequest;
                toAmino(message: _40.QueryValidatorDelegationsRequest): _40.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _40.QueryValidatorDelegationsRequestAminoMsg): _40.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _40.QueryValidatorDelegationsRequest): _40.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorDelegationsRequestProtoMsg): _40.QueryValidatorDelegationsRequest;
                toProto(message: _40.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorDelegationsRequest): _40.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _40.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorDelegationsResponse;
                fromPartial(object: any): _40.QueryValidatorDelegationsResponse;
                fromAmino(object: _40.QueryValidatorDelegationsResponseAmino): _40.QueryValidatorDelegationsResponse;
                toAmino(message: _40.QueryValidatorDelegationsResponse): _40.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _40.QueryValidatorDelegationsResponseAminoMsg): _40.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _40.QueryValidatorDelegationsResponse): _40.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorDelegationsResponseProtoMsg): _40.QueryValidatorDelegationsResponse;
                toProto(message: _40.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorDelegationsResponse): _40.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _40.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: any): _40.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _40.QueryValidatorUnbondingDelegationsRequestAmino): _40.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _40.QueryValidatorUnbondingDelegationsRequest): _40.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _40.QueryValidatorUnbondingDelegationsRequestAminoMsg): _40.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _40.QueryValidatorUnbondingDelegationsRequest): _40.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorUnbondingDelegationsRequestProtoMsg): _40.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _40.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorUnbondingDelegationsRequest): _40.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _40.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: any): _40.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _40.QueryValidatorUnbondingDelegationsResponseAmino): _40.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _40.QueryValidatorUnbondingDelegationsResponse): _40.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _40.QueryValidatorUnbondingDelegationsResponseAminoMsg): _40.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _40.QueryValidatorUnbondingDelegationsResponse): _40.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryValidatorUnbondingDelegationsResponseProtoMsg): _40.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _40.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryValidatorUnbondingDelegationsResponse): _40.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _40.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationRequest;
                fromPartial(object: any): _40.QueryDelegationRequest;
                fromAmino(object: _40.QueryDelegationRequestAmino): _40.QueryDelegationRequest;
                toAmino(message: _40.QueryDelegationRequest): _40.QueryDelegationRequestAmino;
                fromAminoMsg(object: _40.QueryDelegationRequestAminoMsg): _40.QueryDelegationRequest;
                toAminoMsg(message: _40.QueryDelegationRequest): _40.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegationRequestProtoMsg): _40.QueryDelegationRequest;
                toProto(message: _40.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegationRequest): _40.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _40.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegationResponse;
                fromPartial(object: any): _40.QueryDelegationResponse;
                fromAmino(object: _40.QueryDelegationResponseAmino): _40.QueryDelegationResponse;
                toAmino(message: _40.QueryDelegationResponse): _40.QueryDelegationResponseAmino;
                fromAminoMsg(object: _40.QueryDelegationResponseAminoMsg): _40.QueryDelegationResponse;
                toAminoMsg(message: _40.QueryDelegationResponse): _40.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegationResponseProtoMsg): _40.QueryDelegationResponse;
                toProto(message: _40.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegationResponse): _40.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _40.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryUnbondingDelegationRequest;
                fromPartial(object: any): _40.QueryUnbondingDelegationRequest;
                fromAmino(object: _40.QueryUnbondingDelegationRequestAmino): _40.QueryUnbondingDelegationRequest;
                toAmino(message: _40.QueryUnbondingDelegationRequest): _40.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _40.QueryUnbondingDelegationRequestAminoMsg): _40.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _40.QueryUnbondingDelegationRequest): _40.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _40.QueryUnbondingDelegationRequestProtoMsg): _40.QueryUnbondingDelegationRequest;
                toProto(message: _40.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _40.QueryUnbondingDelegationRequest): _40.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _40.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryUnbondingDelegationResponse;
                fromPartial(object: any): _40.QueryUnbondingDelegationResponse;
                fromAmino(object: _40.QueryUnbondingDelegationResponseAmino): _40.QueryUnbondingDelegationResponse;
                toAmino(message: _40.QueryUnbondingDelegationResponse): _40.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _40.QueryUnbondingDelegationResponseAminoMsg): _40.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _40.QueryUnbondingDelegationResponse): _40.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _40.QueryUnbondingDelegationResponseProtoMsg): _40.QueryUnbondingDelegationResponse;
                toProto(message: _40.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _40.QueryUnbondingDelegationResponse): _40.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _40.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorDelegationsRequest;
                fromPartial(object: any): _40.QueryDelegatorDelegationsRequest;
                fromAmino(object: _40.QueryDelegatorDelegationsRequestAmino): _40.QueryDelegatorDelegationsRequest;
                toAmino(message: _40.QueryDelegatorDelegationsRequest): _40.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _40.QueryDelegatorDelegationsRequestAminoMsg): _40.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _40.QueryDelegatorDelegationsRequest): _40.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorDelegationsRequestProtoMsg): _40.QueryDelegatorDelegationsRequest;
                toProto(message: _40.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorDelegationsRequest): _40.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _40.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorDelegationsResponse;
                fromPartial(object: any): _40.QueryDelegatorDelegationsResponse;
                fromAmino(object: _40.QueryDelegatorDelegationsResponseAmino): _40.QueryDelegatorDelegationsResponse;
                toAmino(message: _40.QueryDelegatorDelegationsResponse): _40.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _40.QueryDelegatorDelegationsResponseAminoMsg): _40.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _40.QueryDelegatorDelegationsResponse): _40.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorDelegationsResponseProtoMsg): _40.QueryDelegatorDelegationsResponse;
                toProto(message: _40.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorDelegationsResponse): _40.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _40.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: any): _40.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _40.QueryDelegatorUnbondingDelegationsRequestAmino): _40.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _40.QueryDelegatorUnbondingDelegationsRequest): _40.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _40.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _40.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _40.QueryDelegatorUnbondingDelegationsRequest): _40.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _40.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _40.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorUnbondingDelegationsRequest): _40.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _40.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: any): _40.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _40.QueryDelegatorUnbondingDelegationsResponseAmino): _40.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _40.QueryDelegatorUnbondingDelegationsResponse): _40.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _40.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _40.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _40.QueryDelegatorUnbondingDelegationsResponse): _40.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _40.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _40.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorUnbondingDelegationsResponse): _40.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _40.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryRedelegationsRequest;
                fromPartial(object: any): _40.QueryRedelegationsRequest;
                fromAmino(object: _40.QueryRedelegationsRequestAmino): _40.QueryRedelegationsRequest;
                toAmino(message: _40.QueryRedelegationsRequest): _40.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _40.QueryRedelegationsRequestAminoMsg): _40.QueryRedelegationsRequest;
                toAminoMsg(message: _40.QueryRedelegationsRequest): _40.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryRedelegationsRequestProtoMsg): _40.QueryRedelegationsRequest;
                toProto(message: _40.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryRedelegationsRequest): _40.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _40.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryRedelegationsResponse;
                fromPartial(object: any): _40.QueryRedelegationsResponse;
                fromAmino(object: _40.QueryRedelegationsResponseAmino): _40.QueryRedelegationsResponse;
                toAmino(message: _40.QueryRedelegationsResponse): _40.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _40.QueryRedelegationsResponseAminoMsg): _40.QueryRedelegationsResponse;
                toAminoMsg(message: _40.QueryRedelegationsResponse): _40.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryRedelegationsResponseProtoMsg): _40.QueryRedelegationsResponse;
                toProto(message: _40.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryRedelegationsResponse): _40.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _40.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _40.QueryDelegatorValidatorsRequest;
                fromAmino(object: _40.QueryDelegatorValidatorsRequestAmino): _40.QueryDelegatorValidatorsRequest;
                toAmino(message: _40.QueryDelegatorValidatorsRequest): _40.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _40.QueryDelegatorValidatorsRequestAminoMsg): _40.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _40.QueryDelegatorValidatorsRequest): _40.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorValidatorsRequestProtoMsg): _40.QueryDelegatorValidatorsRequest;
                toProto(message: _40.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorValidatorsRequest): _40.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _40.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _40.QueryDelegatorValidatorsResponse;
                fromAmino(object: _40.QueryDelegatorValidatorsResponseAmino): _40.QueryDelegatorValidatorsResponse;
                toAmino(message: _40.QueryDelegatorValidatorsResponse): _40.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _40.QueryDelegatorValidatorsResponseAminoMsg): _40.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _40.QueryDelegatorValidatorsResponse): _40.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorValidatorsResponseProtoMsg): _40.QueryDelegatorValidatorsResponse;
                toProto(message: _40.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorValidatorsResponse): _40.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _40.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorRequest;
                fromPartial(object: any): _40.QueryDelegatorValidatorRequest;
                fromAmino(object: _40.QueryDelegatorValidatorRequestAmino): _40.QueryDelegatorValidatorRequest;
                toAmino(message: _40.QueryDelegatorValidatorRequest): _40.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _40.QueryDelegatorValidatorRequestAminoMsg): _40.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _40.QueryDelegatorValidatorRequest): _40.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorValidatorRequestProtoMsg): _40.QueryDelegatorValidatorRequest;
                toProto(message: _40.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorValidatorRequest): _40.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _40.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryDelegatorValidatorResponse;
                fromPartial(object: any): _40.QueryDelegatorValidatorResponse;
                fromAmino(object: _40.QueryDelegatorValidatorResponseAmino): _40.QueryDelegatorValidatorResponse;
                toAmino(message: _40.QueryDelegatorValidatorResponse): _40.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _40.QueryDelegatorValidatorResponseAminoMsg): _40.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _40.QueryDelegatorValidatorResponse): _40.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _40.QueryDelegatorValidatorResponseProtoMsg): _40.QueryDelegatorValidatorResponse;
                toProto(message: _40.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _40.QueryDelegatorValidatorResponse): _40.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _40.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryHistoricalInfoRequest;
                fromPartial(object: any): _40.QueryHistoricalInfoRequest;
                fromAmino(object: _40.QueryHistoricalInfoRequestAmino): _40.QueryHistoricalInfoRequest;
                toAmino(message: _40.QueryHistoricalInfoRequest): _40.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _40.QueryHistoricalInfoRequestAminoMsg): _40.QueryHistoricalInfoRequest;
                toAminoMsg(message: _40.QueryHistoricalInfoRequest): _40.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _40.QueryHistoricalInfoRequestProtoMsg): _40.QueryHistoricalInfoRequest;
                toProto(message: _40.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _40.QueryHistoricalInfoRequest): _40.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _40.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryHistoricalInfoResponse;
                fromPartial(object: any): _40.QueryHistoricalInfoResponse;
                fromAmino(object: _40.QueryHistoricalInfoResponseAmino): _40.QueryHistoricalInfoResponse;
                toAmino(message: _40.QueryHistoricalInfoResponse): _40.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _40.QueryHistoricalInfoResponseAminoMsg): _40.QueryHistoricalInfoResponse;
                toAminoMsg(message: _40.QueryHistoricalInfoResponse): _40.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _40.QueryHistoricalInfoResponseProtoMsg): _40.QueryHistoricalInfoResponse;
                toProto(message: _40.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _40.QueryHistoricalInfoResponse): _40.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _40.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryPoolRequest;
                fromPartial(_: any): _40.QueryPoolRequest;
                fromAmino(_: _40.QueryPoolRequestAmino): _40.QueryPoolRequest;
                toAmino(_: _40.QueryPoolRequest): _40.QueryPoolRequestAmino;
                fromAminoMsg(object: _40.QueryPoolRequestAminoMsg): _40.QueryPoolRequest;
                toAminoMsg(message: _40.QueryPoolRequest): _40.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _40.QueryPoolRequestProtoMsg): _40.QueryPoolRequest;
                toProto(message: _40.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _40.QueryPoolRequest): _40.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _40.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryPoolResponse;
                fromPartial(object: any): _40.QueryPoolResponse;
                fromAmino(object: _40.QueryPoolResponseAmino): _40.QueryPoolResponse;
                toAmino(message: _40.QueryPoolResponse): _40.QueryPoolResponseAmino;
                fromAminoMsg(object: _40.QueryPoolResponseAminoMsg): _40.QueryPoolResponse;
                toAminoMsg(message: _40.QueryPoolResponse): _40.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _40.QueryPoolResponseProtoMsg): _40.QueryPoolResponse;
                toProto(message: _40.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _40.QueryPoolResponse): _40.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _40.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsRequest;
                fromPartial(_: any): _40.QueryParamsRequest;
                fromAmino(_: _40.QueryParamsRequestAmino): _40.QueryParamsRequest;
                toAmino(_: _40.QueryParamsRequest): _40.QueryParamsRequestAmino;
                fromAminoMsg(object: _40.QueryParamsRequestAminoMsg): _40.QueryParamsRequest;
                toAminoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _40.QueryParamsRequestProtoMsg): _40.QueryParamsRequest;
                toProto(message: _40.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _40.QueryParamsRequest): _40.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _40.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.QueryParamsResponse;
                fromPartial(object: any): _40.QueryParamsResponse;
                fromAmino(object: _40.QueryParamsResponseAmino): _40.QueryParamsResponse;
                toAmino(message: _40.QueryParamsResponse): _40.QueryParamsResponseAmino;
                fromAminoMsg(object: _40.QueryParamsResponseAminoMsg): _40.QueryParamsResponse;
                toAminoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _40.QueryParamsResponseProtoMsg): _40.QueryParamsResponse;
                toProto(message: _40.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _40.QueryParamsResponse): _40.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _39.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GenesisState;
                fromPartial(object: any): _39.GenesisState;
                fromAmino(object: _39.GenesisStateAmino): _39.GenesisState;
                toAmino(message: _39.GenesisState): _39.GenesisStateAmino;
                fromAminoMsg(object: _39.GenesisStateAminoMsg): _39.GenesisState;
                toAminoMsg(message: _39.GenesisState): _39.GenesisStateAminoMsg;
                fromProtoMsg(message: _39.GenesisStateProtoMsg): _39.GenesisState;
                toProto(message: _39.GenesisState): Uint8Array;
                toProtoMsg(message: _39.GenesisState): _39.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _39.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.LastValidatorPower;
                fromPartial(object: any): _39.LastValidatorPower;
                fromAmino(object: _39.LastValidatorPowerAmino): _39.LastValidatorPower;
                toAmino(message: _39.LastValidatorPower): _39.LastValidatorPowerAmino;
                fromAminoMsg(object: _39.LastValidatorPowerAminoMsg): _39.LastValidatorPower;
                toAminoMsg(message: _39.LastValidatorPower): _39.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _39.LastValidatorPowerProtoMsg): _39.LastValidatorPower;
                toProto(message: _39.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _39.LastValidatorPower): _39.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _38.AuthorizationType;
            authorizationTypeToJSON(object: _38.AuthorizationType): string;
            AuthorizationType: typeof _38.AuthorizationType;
            AuthorizationTypeSDKType: typeof _38.AuthorizationType;
            AuthorizationTypeAmino: typeof _38.AuthorizationType;
            StakeAuthorization: {
                encode(message: _38.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.StakeAuthorization;
                fromPartial(object: any): _38.StakeAuthorization;
                fromAmino(object: _38.StakeAuthorizationAmino): _38.StakeAuthorization;
                toAmino(message: _38.StakeAuthorization): _38.StakeAuthorizationAmino;
                fromAminoMsg(object: _38.StakeAuthorizationAminoMsg): _38.StakeAuthorization;
                toAminoMsg(message: _38.StakeAuthorization): _38.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _38.StakeAuthorizationProtoMsg): _38.StakeAuthorization;
                toProto(message: _38.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _38.StakeAuthorization): _38.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _38.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.StakeAuthorization_Validators;
                fromPartial(object: any): _38.StakeAuthorization_Validators;
                fromAmino(object: _38.StakeAuthorization_ValidatorsAmino): _38.StakeAuthorization_Validators;
                toAmino(message: _38.StakeAuthorization_Validators): _38.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _38.StakeAuthorization_ValidatorsAminoMsg): _38.StakeAuthorization_Validators;
                toAminoMsg(message: _38.StakeAuthorization_Validators): _38.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _38.StakeAuthorization_ValidatorsProtoMsg): _38.StakeAuthorization_Validators;
                toProto(message: _38.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _38.StakeAuthorization_Validators): _38.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _43.SignMode;
                signModeToJSON(object: _43.SignMode): string;
                SignMode: typeof _43.SignMode;
                SignModeSDKType: typeof _43.SignMode;
                SignModeAmino: typeof _43.SignMode;
                SignatureDescriptors: {
                    encode(message: _43.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignatureDescriptors;
                    fromPartial(object: any): _43.SignatureDescriptors;
                    fromAmino(object: _43.SignatureDescriptorsAmino): _43.SignatureDescriptors;
                    toAmino(message: _43.SignatureDescriptors): _43.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _43.SignatureDescriptorsAminoMsg): _43.SignatureDescriptors;
                    toAminoMsg(message: _43.SignatureDescriptors): _43.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _43.SignatureDescriptorsProtoMsg): _43.SignatureDescriptors;
                    toProto(message: _43.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _43.SignatureDescriptors): _43.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _43.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignatureDescriptor;
                    fromPartial(object: any): _43.SignatureDescriptor;
                    fromAmino(object: _43.SignatureDescriptorAmino): _43.SignatureDescriptor;
                    toAmino(message: _43.SignatureDescriptor): _43.SignatureDescriptorAmino;
                    fromAminoMsg(object: _43.SignatureDescriptorAminoMsg): _43.SignatureDescriptor;
                    toAminoMsg(message: _43.SignatureDescriptor): _43.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _43.SignatureDescriptorProtoMsg): _43.SignatureDescriptor;
                    toProto(message: _43.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _43.SignatureDescriptor): _43.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _43.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignatureDescriptor_Data;
                    fromPartial(object: any): _43.SignatureDescriptor_Data;
                    fromAmino(object: _43.SignatureDescriptor_DataAmino): _43.SignatureDescriptor_Data;
                    toAmino(message: _43.SignatureDescriptor_Data): _43.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _43.SignatureDescriptor_DataAminoMsg): _43.SignatureDescriptor_Data;
                    toAminoMsg(message: _43.SignatureDescriptor_Data): _43.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _43.SignatureDescriptor_DataProtoMsg): _43.SignatureDescriptor_Data;
                    toProto(message: _43.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _43.SignatureDescriptor_Data): _43.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _43.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignatureDescriptor_Data_Single;
                    fromPartial(object: any): _43.SignatureDescriptor_Data_Single;
                    fromAmino(object: _43.SignatureDescriptor_Data_SingleAmino): _43.SignatureDescriptor_Data_Single;
                    toAmino(message: _43.SignatureDescriptor_Data_Single): _43.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _43.SignatureDescriptor_Data_SingleAminoMsg): _43.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _43.SignatureDescriptor_Data_Single): _43.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _43.SignatureDescriptor_Data_SingleProtoMsg): _43.SignatureDescriptor_Data_Single;
                    toProto(message: _43.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _43.SignatureDescriptor_Data_Single): _43.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _43.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SignatureDescriptor_Data_Multi;
                    fromPartial(object: any): _43.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _43.SignatureDescriptor_Data_MultiAmino): _43.SignatureDescriptor_Data_Multi;
                    toAmino(message: _43.SignatureDescriptor_Data_Multi): _43.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _43.SignatureDescriptor_Data_MultiAminoMsg): _43.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _43.SignatureDescriptor_Data_Multi): _43.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _43.SignatureDescriptor_Data_MultiProtoMsg): _43.SignatureDescriptor_Data_Multi;
                    toProto(message: _43.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _43.SignatureDescriptor_Data_Multi): _43.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _135.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _44.SimulateRequest): Promise<_44.SimulateResponse>;
                getTx(request: _44.GetTxRequest): Promise<_44.GetTxResponse>;
                broadcastTx(request: _44.BroadcastTxRequest): Promise<_44.BroadcastTxResponse>;
                getTxsEvent(request: _44.GetTxsEventRequest): Promise<_44.GetTxsEventResponse>;
                getBlockWithTxs(request: _44.GetBlockWithTxsRequest): Promise<_44.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _125.LCDQueryClient;
            Tx: {
                encode(message: _45.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Tx;
                fromPartial(object: any): _45.Tx;
                fromAmino(object: _45.TxAmino): _45.Tx;
                toAmino(message: _45.Tx): _45.TxAmino;
                fromAminoMsg(object: _45.TxAminoMsg): _45.Tx;
                toAminoMsg(message: _45.Tx): _45.TxAminoMsg;
                fromProtoMsg(message: _45.TxProtoMsg): _45.Tx;
                toProto(message: _45.Tx): Uint8Array;
                toProtoMsg(message: _45.Tx): _45.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _45.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.TxRaw;
                fromPartial(object: any): _45.TxRaw;
                fromAmino(object: _45.TxRawAmino): _45.TxRaw;
                toAmino(message: _45.TxRaw): _45.TxRawAmino;
                fromAminoMsg(object: _45.TxRawAminoMsg): _45.TxRaw;
                toAminoMsg(message: _45.TxRaw): _45.TxRawAminoMsg;
                fromProtoMsg(message: _45.TxRawProtoMsg): _45.TxRaw;
                toProto(message: _45.TxRaw): Uint8Array;
                toProtoMsg(message: _45.TxRaw): _45.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _45.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.SignDoc;
                fromPartial(object: any): _45.SignDoc;
                fromAmino(object: _45.SignDocAmino): _45.SignDoc;
                toAmino(message: _45.SignDoc): _45.SignDocAmino;
                fromAminoMsg(object: _45.SignDocAminoMsg): _45.SignDoc;
                toAminoMsg(message: _45.SignDoc): _45.SignDocAminoMsg;
                fromProtoMsg(message: _45.SignDocProtoMsg): _45.SignDoc;
                toProto(message: _45.SignDoc): Uint8Array;
                toProtoMsg(message: _45.SignDoc): _45.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _45.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.SignDocDirectAux;
                fromPartial(object: any): _45.SignDocDirectAux;
                fromAmino(object: _45.SignDocDirectAuxAmino): _45.SignDocDirectAux;
                toAmino(message: _45.SignDocDirectAux): _45.SignDocDirectAuxAmino;
                fromAminoMsg(object: _45.SignDocDirectAuxAminoMsg): _45.SignDocDirectAux;
                toAminoMsg(message: _45.SignDocDirectAux): _45.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _45.SignDocDirectAuxProtoMsg): _45.SignDocDirectAux;
                toProto(message: _45.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _45.SignDocDirectAux): _45.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _45.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.TxBody;
                fromPartial(object: any): _45.TxBody;
                fromAmino(object: _45.TxBodyAmino): _45.TxBody;
                toAmino(message: _45.TxBody): _45.TxBodyAmino;
                fromAminoMsg(object: _45.TxBodyAminoMsg): _45.TxBody;
                toAminoMsg(message: _45.TxBody): _45.TxBodyAminoMsg;
                fromProtoMsg(message: _45.TxBodyProtoMsg): _45.TxBody;
                toProto(message: _45.TxBody): Uint8Array;
                toProtoMsg(message: _45.TxBody): _45.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _45.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.AuthInfo;
                fromPartial(object: any): _45.AuthInfo;
                fromAmino(object: _45.AuthInfoAmino): _45.AuthInfo;
                toAmino(message: _45.AuthInfo): _45.AuthInfoAmino;
                fromAminoMsg(object: _45.AuthInfoAminoMsg): _45.AuthInfo;
                toAminoMsg(message: _45.AuthInfo): _45.AuthInfoAminoMsg;
                fromProtoMsg(message: _45.AuthInfoProtoMsg): _45.AuthInfo;
                toProto(message: _45.AuthInfo): Uint8Array;
                toProtoMsg(message: _45.AuthInfo): _45.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _45.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.SignerInfo;
                fromPartial(object: any): _45.SignerInfo;
                fromAmino(object: _45.SignerInfoAmino): _45.SignerInfo;
                toAmino(message: _45.SignerInfo): _45.SignerInfoAmino;
                fromAminoMsg(object: _45.SignerInfoAminoMsg): _45.SignerInfo;
                toAminoMsg(message: _45.SignerInfo): _45.SignerInfoAminoMsg;
                fromProtoMsg(message: _45.SignerInfoProtoMsg): _45.SignerInfo;
                toProto(message: _45.SignerInfo): Uint8Array;
                toProtoMsg(message: _45.SignerInfo): _45.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _45.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ModeInfo;
                fromPartial(object: any): _45.ModeInfo;
                fromAmino(object: _45.ModeInfoAmino): _45.ModeInfo;
                toAmino(message: _45.ModeInfo): _45.ModeInfoAmino;
                fromAminoMsg(object: _45.ModeInfoAminoMsg): _45.ModeInfo;
                toAminoMsg(message: _45.ModeInfo): _45.ModeInfoAminoMsg;
                fromProtoMsg(message: _45.ModeInfoProtoMsg): _45.ModeInfo;
                toProto(message: _45.ModeInfo): Uint8Array;
                toProtoMsg(message: _45.ModeInfo): _45.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _45.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ModeInfo_Single;
                fromPartial(object: any): _45.ModeInfo_Single;
                fromAmino(object: _45.ModeInfo_SingleAmino): _45.ModeInfo_Single;
                toAmino(message: _45.ModeInfo_Single): _45.ModeInfo_SingleAmino;
                fromAminoMsg(object: _45.ModeInfo_SingleAminoMsg): _45.ModeInfo_Single;
                toAminoMsg(message: _45.ModeInfo_Single): _45.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _45.ModeInfo_SingleProtoMsg): _45.ModeInfo_Single;
                toProto(message: _45.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _45.ModeInfo_Single): _45.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _45.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ModeInfo_Multi;
                fromPartial(object: any): _45.ModeInfo_Multi;
                fromAmino(object: _45.ModeInfo_MultiAmino): _45.ModeInfo_Multi;
                toAmino(message: _45.ModeInfo_Multi): _45.ModeInfo_MultiAmino;
                fromAminoMsg(object: _45.ModeInfo_MultiAminoMsg): _45.ModeInfo_Multi;
                toAminoMsg(message: _45.ModeInfo_Multi): _45.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _45.ModeInfo_MultiProtoMsg): _45.ModeInfo_Multi;
                toProto(message: _45.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _45.ModeInfo_Multi): _45.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _45.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Fee;
                fromPartial(object: any): _45.Fee;
                fromAmino(object: _45.FeeAmino): _45.Fee;
                toAmino(message: _45.Fee): _45.FeeAmino;
                fromAminoMsg(object: _45.FeeAminoMsg): _45.Fee;
                toAminoMsg(message: _45.Fee): _45.FeeAminoMsg;
                fromProtoMsg(message: _45.FeeProtoMsg): _45.Fee;
                toProto(message: _45.Fee): Uint8Array;
                toProtoMsg(message: _45.Fee): _45.FeeProtoMsg;
            };
            Tip: {
                encode(message: _45.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.Tip;
                fromPartial(object: any): _45.Tip;
                fromAmino(object: _45.TipAmino): _45.Tip;
                toAmino(message: _45.Tip): _45.TipAmino;
                fromAminoMsg(object: _45.TipAminoMsg): _45.Tip;
                toAminoMsg(message: _45.Tip): _45.TipAminoMsg;
                fromProtoMsg(message: _45.TipProtoMsg): _45.Tip;
                toProto(message: _45.Tip): Uint8Array;
                toProtoMsg(message: _45.Tip): _45.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _45.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.AuxSignerData;
                fromPartial(object: any): _45.AuxSignerData;
                fromAmino(object: _45.AuxSignerDataAmino): _45.AuxSignerData;
                toAmino(message: _45.AuxSignerData): _45.AuxSignerDataAmino;
                fromAminoMsg(object: _45.AuxSignerDataAminoMsg): _45.AuxSignerData;
                toAminoMsg(message: _45.AuxSignerData): _45.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _45.AuxSignerDataProtoMsg): _45.AuxSignerData;
                toProto(message: _45.AuxSignerData): Uint8Array;
                toProtoMsg(message: _45.AuxSignerData): _45.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _44.OrderBy;
            orderByToJSON(object: _44.OrderBy): string;
            broadcastModeFromJSON(object: any): _44.BroadcastMode;
            broadcastModeToJSON(object: _44.BroadcastMode): string;
            OrderBy: typeof _44.OrderBy;
            OrderBySDKType: typeof _44.OrderBy;
            OrderByAmino: typeof _44.OrderBy;
            BroadcastMode: typeof _44.BroadcastMode;
            BroadcastModeSDKType: typeof _44.BroadcastMode;
            BroadcastModeAmino: typeof _44.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _44.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GetTxsEventRequest;
                fromPartial(object: any): _44.GetTxsEventRequest;
                fromAmino(object: _44.GetTxsEventRequestAmino): _44.GetTxsEventRequest;
                toAmino(message: _44.GetTxsEventRequest): _44.GetTxsEventRequestAmino;
                fromAminoMsg(object: _44.GetTxsEventRequestAminoMsg): _44.GetTxsEventRequest;
                toAminoMsg(message: _44.GetTxsEventRequest): _44.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _44.GetTxsEventRequestProtoMsg): _44.GetTxsEventRequest;
                toProto(message: _44.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _44.GetTxsEventRequest): _44.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _44.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GetTxsEventResponse;
                fromPartial(object: any): _44.GetTxsEventResponse;
                fromAmino(object: _44.GetTxsEventResponseAmino): _44.GetTxsEventResponse;
                toAmino(message: _44.GetTxsEventResponse): _44.GetTxsEventResponseAmino;
                fromAminoMsg(object: _44.GetTxsEventResponseAminoMsg): _44.GetTxsEventResponse;
                toAminoMsg(message: _44.GetTxsEventResponse): _44.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _44.GetTxsEventResponseProtoMsg): _44.GetTxsEventResponse;
                toProto(message: _44.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _44.GetTxsEventResponse): _44.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _44.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.BroadcastTxRequest;
                fromPartial(object: any): _44.BroadcastTxRequest;
                fromAmino(object: _44.BroadcastTxRequestAmino): _44.BroadcastTxRequest;
                toAmino(message: _44.BroadcastTxRequest): _44.BroadcastTxRequestAmino;
                fromAminoMsg(object: _44.BroadcastTxRequestAminoMsg): _44.BroadcastTxRequest;
                toAminoMsg(message: _44.BroadcastTxRequest): _44.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _44.BroadcastTxRequestProtoMsg): _44.BroadcastTxRequest;
                toProto(message: _44.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _44.BroadcastTxRequest): _44.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _44.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.BroadcastTxResponse;
                fromPartial(object: any): _44.BroadcastTxResponse;
                fromAmino(object: _44.BroadcastTxResponseAmino): _44.BroadcastTxResponse;
                toAmino(message: _44.BroadcastTxResponse): _44.BroadcastTxResponseAmino;
                fromAminoMsg(object: _44.BroadcastTxResponseAminoMsg): _44.BroadcastTxResponse;
                toAminoMsg(message: _44.BroadcastTxResponse): _44.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _44.BroadcastTxResponseProtoMsg): _44.BroadcastTxResponse;
                toProto(message: _44.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _44.BroadcastTxResponse): _44.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _44.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SimulateRequest;
                fromPartial(object: any): _44.SimulateRequest;
                fromAmino(object: _44.SimulateRequestAmino): _44.SimulateRequest;
                toAmino(message: _44.SimulateRequest): _44.SimulateRequestAmino;
                fromAminoMsg(object: _44.SimulateRequestAminoMsg): _44.SimulateRequest;
                toAminoMsg(message: _44.SimulateRequest): _44.SimulateRequestAminoMsg;
                fromProtoMsg(message: _44.SimulateRequestProtoMsg): _44.SimulateRequest;
                toProto(message: _44.SimulateRequest): Uint8Array;
                toProtoMsg(message: _44.SimulateRequest): _44.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _44.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SimulateResponse;
                fromPartial(object: any): _44.SimulateResponse;
                fromAmino(object: _44.SimulateResponseAmino): _44.SimulateResponse;
                toAmino(message: _44.SimulateResponse): _44.SimulateResponseAmino;
                fromAminoMsg(object: _44.SimulateResponseAminoMsg): _44.SimulateResponse;
                toAminoMsg(message: _44.SimulateResponse): _44.SimulateResponseAminoMsg;
                fromProtoMsg(message: _44.SimulateResponseProtoMsg): _44.SimulateResponse;
                toProto(message: _44.SimulateResponse): Uint8Array;
                toProtoMsg(message: _44.SimulateResponse): _44.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _44.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GetTxRequest;
                fromPartial(object: any): _44.GetTxRequest;
                fromAmino(object: _44.GetTxRequestAmino): _44.GetTxRequest;
                toAmino(message: _44.GetTxRequest): _44.GetTxRequestAmino;
                fromAminoMsg(object: _44.GetTxRequestAminoMsg): _44.GetTxRequest;
                toAminoMsg(message: _44.GetTxRequest): _44.GetTxRequestAminoMsg;
                fromProtoMsg(message: _44.GetTxRequestProtoMsg): _44.GetTxRequest;
                toProto(message: _44.GetTxRequest): Uint8Array;
                toProtoMsg(message: _44.GetTxRequest): _44.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _44.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GetTxResponse;
                fromPartial(object: any): _44.GetTxResponse;
                fromAmino(object: _44.GetTxResponseAmino): _44.GetTxResponse;
                toAmino(message: _44.GetTxResponse): _44.GetTxResponseAmino;
                fromAminoMsg(object: _44.GetTxResponseAminoMsg): _44.GetTxResponse;
                toAminoMsg(message: _44.GetTxResponse): _44.GetTxResponseAminoMsg;
                fromProtoMsg(message: _44.GetTxResponseProtoMsg): _44.GetTxResponse;
                toProto(message: _44.GetTxResponse): Uint8Array;
                toProtoMsg(message: _44.GetTxResponse): _44.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _44.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GetBlockWithTxsRequest;
                fromPartial(object: any): _44.GetBlockWithTxsRequest;
                fromAmino(object: _44.GetBlockWithTxsRequestAmino): _44.GetBlockWithTxsRequest;
                toAmino(message: _44.GetBlockWithTxsRequest): _44.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _44.GetBlockWithTxsRequestAminoMsg): _44.GetBlockWithTxsRequest;
                toAminoMsg(message: _44.GetBlockWithTxsRequest): _44.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _44.GetBlockWithTxsRequestProtoMsg): _44.GetBlockWithTxsRequest;
                toProto(message: _44.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _44.GetBlockWithTxsRequest): _44.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _44.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GetBlockWithTxsResponse;
                fromPartial(object: any): _44.GetBlockWithTxsResponse;
                fromAmino(object: _44.GetBlockWithTxsResponseAmino): _44.GetBlockWithTxsResponse;
                toAmino(message: _44.GetBlockWithTxsResponse): _44.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _44.GetBlockWithTxsResponseAminoMsg): _44.GetBlockWithTxsResponse;
                toAminoMsg(message: _44.GetBlockWithTxsResponse): _44.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _44.GetBlockWithTxsResponseProtoMsg): _44.GetBlockWithTxsResponse;
                toProto(message: _44.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _44.GetBlockWithTxsResponse): _44.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _143.MsgClientImpl;
            QueryClientImpl: typeof _136.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _46.QueryCurrentPlanRequest): Promise<_46.QueryCurrentPlanResponse>;
                appliedPlan(request: _46.QueryAppliedPlanRequest): Promise<_46.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _46.QueryUpgradedConsensusStateRequest): Promise<_46.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _46.QueryModuleVersionsRequest): Promise<_46.QueryModuleVersionsResponse>;
                authority(request?: _46.QueryAuthorityRequest): Promise<_46.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _126.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _47.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _47.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _47.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _47.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _47.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _47.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _47.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _47.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _47.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _47.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _47.MsgSoftwareUpgrade) => _47.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _47.MsgSoftwareUpgradeAmino) => _47.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _47.MsgCancelUpgrade) => _47.MsgCancelUpgradeAmino;
                    fromAmino: (object: _47.MsgCancelUpgradeAmino) => _47.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _48.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Plan;
                fromPartial(object: any): _48.Plan;
                fromAmino(object: _48.PlanAmino): _48.Plan;
                toAmino(message: _48.Plan): _48.PlanAmino;
                fromAminoMsg(object: _48.PlanAminoMsg): _48.Plan;
                toAminoMsg(message: _48.Plan): _48.PlanAminoMsg;
                fromProtoMsg(message: _48.PlanProtoMsg): _48.Plan;
                toProto(message: _48.Plan): Uint8Array;
                toProtoMsg(message: _48.Plan): _48.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _48.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SoftwareUpgradeProposal;
                fromPartial(object: any): _48.SoftwareUpgradeProposal;
                fromAmino(object: _48.SoftwareUpgradeProposalAmino): _48.SoftwareUpgradeProposal;
                toAmino(message: _48.SoftwareUpgradeProposal): _48.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _48.SoftwareUpgradeProposalAminoMsg): _48.SoftwareUpgradeProposal;
                toAminoMsg(message: _48.SoftwareUpgradeProposal): _48.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _48.SoftwareUpgradeProposalProtoMsg): _48.SoftwareUpgradeProposal;
                toProto(message: _48.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _48.SoftwareUpgradeProposal): _48.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _48.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.CancelSoftwareUpgradeProposal;
                fromPartial(object: any): _48.CancelSoftwareUpgradeProposal;
                fromAmino(object: _48.CancelSoftwareUpgradeProposalAmino): _48.CancelSoftwareUpgradeProposal;
                toAmino(message: _48.CancelSoftwareUpgradeProposal): _48.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _48.CancelSoftwareUpgradeProposalAminoMsg): _48.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _48.CancelSoftwareUpgradeProposal): _48.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _48.CancelSoftwareUpgradeProposalProtoMsg): _48.CancelSoftwareUpgradeProposal;
                toProto(message: _48.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _48.CancelSoftwareUpgradeProposal): _48.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _48.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ModuleVersion;
                fromPartial(object: any): _48.ModuleVersion;
                fromAmino(object: _48.ModuleVersionAmino): _48.ModuleVersion;
                toAmino(message: _48.ModuleVersion): _48.ModuleVersionAmino;
                fromAminoMsg(object: _48.ModuleVersionAminoMsg): _48.ModuleVersion;
                toAminoMsg(message: _48.ModuleVersion): _48.ModuleVersionAminoMsg;
                fromProtoMsg(message: _48.ModuleVersionProtoMsg): _48.ModuleVersion;
                toProto(message: _48.ModuleVersion): Uint8Array;
                toProtoMsg(message: _48.ModuleVersion): _48.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _47.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSoftwareUpgrade;
                fromPartial(object: any): _47.MsgSoftwareUpgrade;
                fromAmino(object: _47.MsgSoftwareUpgradeAmino): _47.MsgSoftwareUpgrade;
                toAmino(message: _47.MsgSoftwareUpgrade): _47.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _47.MsgSoftwareUpgradeAminoMsg): _47.MsgSoftwareUpgrade;
                toAminoMsg(message: _47.MsgSoftwareUpgrade): _47.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _47.MsgSoftwareUpgradeProtoMsg): _47.MsgSoftwareUpgrade;
                toProto(message: _47.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _47.MsgSoftwareUpgrade): _47.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _47.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSoftwareUpgradeResponse;
                fromPartial(_: any): _47.MsgSoftwareUpgradeResponse;
                fromAmino(_: _47.MsgSoftwareUpgradeResponseAmino): _47.MsgSoftwareUpgradeResponse;
                toAmino(_: _47.MsgSoftwareUpgradeResponse): _47.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _47.MsgSoftwareUpgradeResponseAminoMsg): _47.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _47.MsgSoftwareUpgradeResponse): _47.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _47.MsgSoftwareUpgradeResponseProtoMsg): _47.MsgSoftwareUpgradeResponse;
                toProto(message: _47.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _47.MsgSoftwareUpgradeResponse): _47.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _47.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgCancelUpgrade;
                fromPartial(object: any): _47.MsgCancelUpgrade;
                fromAmino(object: _47.MsgCancelUpgradeAmino): _47.MsgCancelUpgrade;
                toAmino(message: _47.MsgCancelUpgrade): _47.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _47.MsgCancelUpgradeAminoMsg): _47.MsgCancelUpgrade;
                toAminoMsg(message: _47.MsgCancelUpgrade): _47.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _47.MsgCancelUpgradeProtoMsg): _47.MsgCancelUpgrade;
                toProto(message: _47.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _47.MsgCancelUpgrade): _47.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _47.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgCancelUpgradeResponse;
                fromPartial(_: any): _47.MsgCancelUpgradeResponse;
                fromAmino(_: _47.MsgCancelUpgradeResponseAmino): _47.MsgCancelUpgradeResponse;
                toAmino(_: _47.MsgCancelUpgradeResponse): _47.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _47.MsgCancelUpgradeResponseAminoMsg): _47.MsgCancelUpgradeResponse;
                toAminoMsg(message: _47.MsgCancelUpgradeResponse): _47.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _47.MsgCancelUpgradeResponseProtoMsg): _47.MsgCancelUpgradeResponse;
                toProto(message: _47.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _47.MsgCancelUpgradeResponse): _47.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _46.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryCurrentPlanRequest;
                fromPartial(_: any): _46.QueryCurrentPlanRequest;
                fromAmino(_: _46.QueryCurrentPlanRequestAmino): _46.QueryCurrentPlanRequest;
                toAmino(_: _46.QueryCurrentPlanRequest): _46.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _46.QueryCurrentPlanRequestAminoMsg): _46.QueryCurrentPlanRequest;
                toAminoMsg(message: _46.QueryCurrentPlanRequest): _46.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _46.QueryCurrentPlanRequestProtoMsg): _46.QueryCurrentPlanRequest;
                toProto(message: _46.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _46.QueryCurrentPlanRequest): _46.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _46.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryCurrentPlanResponse;
                fromPartial(object: any): _46.QueryCurrentPlanResponse;
                fromAmino(object: _46.QueryCurrentPlanResponseAmino): _46.QueryCurrentPlanResponse;
                toAmino(message: _46.QueryCurrentPlanResponse): _46.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _46.QueryCurrentPlanResponseAminoMsg): _46.QueryCurrentPlanResponse;
                toAminoMsg(message: _46.QueryCurrentPlanResponse): _46.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _46.QueryCurrentPlanResponseProtoMsg): _46.QueryCurrentPlanResponse;
                toProto(message: _46.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _46.QueryCurrentPlanResponse): _46.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _46.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAppliedPlanRequest;
                fromPartial(object: any): _46.QueryAppliedPlanRequest;
                fromAmino(object: _46.QueryAppliedPlanRequestAmino): _46.QueryAppliedPlanRequest;
                toAmino(message: _46.QueryAppliedPlanRequest): _46.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _46.QueryAppliedPlanRequestAminoMsg): _46.QueryAppliedPlanRequest;
                toAminoMsg(message: _46.QueryAppliedPlanRequest): _46.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _46.QueryAppliedPlanRequestProtoMsg): _46.QueryAppliedPlanRequest;
                toProto(message: _46.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _46.QueryAppliedPlanRequest): _46.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _46.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAppliedPlanResponse;
                fromPartial(object: any): _46.QueryAppliedPlanResponse;
                fromAmino(object: _46.QueryAppliedPlanResponseAmino): _46.QueryAppliedPlanResponse;
                toAmino(message: _46.QueryAppliedPlanResponse): _46.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _46.QueryAppliedPlanResponseAminoMsg): _46.QueryAppliedPlanResponse;
                toAminoMsg(message: _46.QueryAppliedPlanResponse): _46.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _46.QueryAppliedPlanResponseProtoMsg): _46.QueryAppliedPlanResponse;
                toProto(message: _46.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _46.QueryAppliedPlanResponse): _46.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _46.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryUpgradedConsensusStateRequest;
                fromPartial(object: any): _46.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _46.QueryUpgradedConsensusStateRequestAmino): _46.QueryUpgradedConsensusStateRequest;
                toAmino(message: _46.QueryUpgradedConsensusStateRequest): _46.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _46.QueryUpgradedConsensusStateRequestAminoMsg): _46.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _46.QueryUpgradedConsensusStateRequest): _46.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _46.QueryUpgradedConsensusStateRequestProtoMsg): _46.QueryUpgradedConsensusStateRequest;
                toProto(message: _46.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _46.QueryUpgradedConsensusStateRequest): _46.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _46.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryUpgradedConsensusStateResponse;
                fromPartial(object: any): _46.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _46.QueryUpgradedConsensusStateResponseAmino): _46.QueryUpgradedConsensusStateResponse;
                toAmino(message: _46.QueryUpgradedConsensusStateResponse): _46.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _46.QueryUpgradedConsensusStateResponseAminoMsg): _46.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _46.QueryUpgradedConsensusStateResponse): _46.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _46.QueryUpgradedConsensusStateResponseProtoMsg): _46.QueryUpgradedConsensusStateResponse;
                toProto(message: _46.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _46.QueryUpgradedConsensusStateResponse): _46.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _46.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryModuleVersionsRequest;
                fromPartial(object: any): _46.QueryModuleVersionsRequest;
                fromAmino(object: _46.QueryModuleVersionsRequestAmino): _46.QueryModuleVersionsRequest;
                toAmino(message: _46.QueryModuleVersionsRequest): _46.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _46.QueryModuleVersionsRequestAminoMsg): _46.QueryModuleVersionsRequest;
                toAminoMsg(message: _46.QueryModuleVersionsRequest): _46.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _46.QueryModuleVersionsRequestProtoMsg): _46.QueryModuleVersionsRequest;
                toProto(message: _46.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _46.QueryModuleVersionsRequest): _46.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _46.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryModuleVersionsResponse;
                fromPartial(object: any): _46.QueryModuleVersionsResponse;
                fromAmino(object: _46.QueryModuleVersionsResponseAmino): _46.QueryModuleVersionsResponse;
                toAmino(message: _46.QueryModuleVersionsResponse): _46.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _46.QueryModuleVersionsResponseAminoMsg): _46.QueryModuleVersionsResponse;
                toAminoMsg(message: _46.QueryModuleVersionsResponse): _46.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _46.QueryModuleVersionsResponseProtoMsg): _46.QueryModuleVersionsResponse;
                toProto(message: _46.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _46.QueryModuleVersionsResponse): _46.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _46.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAuthorityRequest;
                fromPartial(_: any): _46.QueryAuthorityRequest;
                fromAmino(_: _46.QueryAuthorityRequestAmino): _46.QueryAuthorityRequest;
                toAmino(_: _46.QueryAuthorityRequest): _46.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _46.QueryAuthorityRequestAminoMsg): _46.QueryAuthorityRequest;
                toAminoMsg(message: _46.QueryAuthorityRequest): _46.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _46.QueryAuthorityRequestProtoMsg): _46.QueryAuthorityRequest;
                toProto(message: _46.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _46.QueryAuthorityRequest): _46.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _46.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryAuthorityResponse;
                fromPartial(object: any): _46.QueryAuthorityResponse;
                fromAmino(object: _46.QueryAuthorityResponseAmino): _46.QueryAuthorityResponse;
                toAmino(message: _46.QueryAuthorityResponse): _46.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _46.QueryAuthorityResponseAminoMsg): _46.QueryAuthorityResponse;
                toAminoMsg(message: _46.QueryAuthorityResponse): _46.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _46.QueryAuthorityResponseProtoMsg): _46.QueryAuthorityResponse;
                toProto(message: _46.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _46.QueryAuthorityResponse): _46.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _137.MsgClientImpl;
                };
                bank: {
                    v1beta1: _138.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _139.MsgClientImpl;
                };
                gov: {
                    v1: _140.MsgClientImpl;
                    v1beta1: _141.MsgClientImpl;
                };
                staking: {
                    v1beta1: _142.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _143.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _4.QueryGrantsRequest): Promise<_4.QueryGrantsResponse>;
                        granterGrants(request: _4.QueryGranterGrantsRequest): Promise<_4.QueryGranterGrantsResponse>;
                        granteeGrants(request: _4.QueryGranteeGrantsRequest): Promise<_4.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _9.QueryBalanceRequest): Promise<_9.QueryBalanceResponse>;
                        allBalances(request: _9.QueryAllBalancesRequest): Promise<_9.QueryAllBalancesResponse>;
                        spendableBalances(request: _9.QuerySpendableBalancesRequest): Promise<_9.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _9.QueryTotalSupplyRequest): Promise<_9.QueryTotalSupplyResponse>;
                        supplyOf(request: _9.QuerySupplyOfRequest): Promise<_9.QuerySupplyOfResponse>;
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        denomMetadata(request: _9.QueryDenomMetadataRequest): Promise<_9.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _9.QueryDenomsMetadataRequest): Promise<_9.QueryDenomsMetadataResponse>;
                        denomOwners(request: _9.QueryDenomOwnersRequest): Promise<_9.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _12.ConfigRequest): Promise<_12.ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                        proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                        vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                        votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                        params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                        deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                        tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                        proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                        vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                        votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                        params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                        deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                        tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                        inflation(request?: _36.QueryInflationRequest): Promise<_36.QueryInflationResponse>;
                        annualProvisions(request?: _36.QueryAnnualProvisionsRequest): Promise<_36.QueryAnnualProvisionsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _40.QueryValidatorsRequest): Promise<_40.QueryValidatorsResponse>;
                        validator(request: _40.QueryValidatorRequest): Promise<_40.QueryValidatorResponse>;
                        validatorDelegations(request: _40.QueryValidatorDelegationsRequest): Promise<_40.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _40.QueryValidatorUnbondingDelegationsRequest): Promise<_40.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _40.QueryDelegationRequest): Promise<_40.QueryDelegationResponse>;
                        unbondingDelegation(request: _40.QueryUnbondingDelegationRequest): Promise<_40.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _40.QueryDelegatorDelegationsRequest): Promise<_40.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _40.QueryDelegatorUnbondingDelegationsRequest): Promise<_40.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _40.QueryRedelegationsRequest): Promise<_40.QueryRedelegationsResponse>;
                        delegatorValidators(request: _40.QueryDelegatorValidatorsRequest): Promise<_40.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _40.QueryDelegatorValidatorRequest): Promise<_40.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _40.QueryHistoricalInfoRequest): Promise<_40.QueryHistoricalInfoResponse>;
                        pool(request?: _40.QueryPoolRequest): Promise<_40.QueryPoolResponse>;
                        params(request?: _40.QueryParamsRequest): Promise<_40.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _44.SimulateRequest): Promise<_44.SimulateResponse>;
                        getTx(request: _44.GetTxRequest): Promise<_44.GetTxResponse>;
                        broadcastTx(request: _44.BroadcastTxRequest): Promise<_44.BroadcastTxResponse>;
                        getTxsEvent(request: _44.GetTxsEventRequest): Promise<_44.GetTxsEventResponse>;
                        getBlockWithTxs(request: _44.GetBlockWithTxsRequest): Promise<_44.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _46.QueryCurrentPlanRequest): Promise<_46.QueryCurrentPlanResponse>;
                        appliedPlan(request: _46.QueryAppliedPlanRequest): Promise<_46.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _46.QueryUpgradedConsensusStateRequest): Promise<_46.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _46.QueryModuleVersionsRequest): Promise<_46.QueryModuleVersionsResponse>;
                        authority(request?: _46.QueryAuthorityRequest): Promise<_46.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _117.LCDQueryClient;
                };
                bank: {
                    v1beta1: _118.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _119.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _120.LCDQueryClient;
                };
                gov: {
                    v1: _121.LCDQueryClient;
                    v1beta1: _122.LCDQueryClient;
                };
                mint: {
                    v1beta1: _123.LCDQueryClient;
                };
                staking: {
                    v1beta1: _124.LCDQueryClient;
                };
                tx: {
                    v1beta1: _125.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _126.LCDQueryClient;
                };
            };
        }>;
    };
}
