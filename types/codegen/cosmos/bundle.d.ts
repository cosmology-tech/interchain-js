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
import * as _53 from "../proofs";
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
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _133.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _3.QueryAccountsRequest): Promise<_3.QueryAccountsResponse>;
                account(request: _3.QueryAccountRequest): Promise<_3.QueryAccountResponse>;
                accountAddressByID(request: _3.QueryAccountAddressByIDRequest): Promise<_3.QueryAccountAddressByIDResponse>;
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                moduleAccounts(request?: _3.QueryModuleAccountsRequest): Promise<_3.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _3.QueryModuleAccountByNameRequest): Promise<_3.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _3.Bech32PrefixRequest): Promise<_3.Bech32PrefixResponse>;
                addressBytesToString(request: _3.AddressBytesToStringRequest): Promise<_3.AddressBytesToStringResponse>;
                addressStringToBytes(request: _3.AddressStringToBytesRequest): Promise<_3.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _122.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _3.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountsRequest;
                fromPartial(object: any): _3.QueryAccountsRequest;
                fromAmino(object: _3.QueryAccountsRequestAmino): _3.QueryAccountsRequest;
                toAmino(message: _3.QueryAccountsRequest): _3.QueryAccountsRequestAmino;
                fromAminoMsg(object: _3.QueryAccountsRequestAminoMsg): _3.QueryAccountsRequest;
                toAminoMsg(message: _3.QueryAccountsRequest): _3.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryAccountsRequestProtoMsg): _3.QueryAccountsRequest;
                toProto(message: _3.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAccountsRequest): _3.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _3.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountsResponse;
                fromPartial(object: any): _3.QueryAccountsResponse;
                fromAmino(object: _3.QueryAccountsResponseAmino): _3.QueryAccountsResponse;
                toAmino(message: _3.QueryAccountsResponse): _3.QueryAccountsResponseAmino;
                fromAminoMsg(object: _3.QueryAccountsResponseAminoMsg): _3.QueryAccountsResponse;
                toAminoMsg(message: _3.QueryAccountsResponse): _3.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryAccountsResponseProtoMsg): _3.QueryAccountsResponse;
                toProto(message: _3.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryAccountsResponse): _3.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _3.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountRequest;
                fromPartial(object: any): _3.QueryAccountRequest;
                fromAmino(object: _3.QueryAccountRequestAmino): _3.QueryAccountRequest;
                toAmino(message: _3.QueryAccountRequest): _3.QueryAccountRequestAmino;
                fromAminoMsg(object: _3.QueryAccountRequestAminoMsg): _3.QueryAccountRequest;
                toAminoMsg(message: _3.QueryAccountRequest): _3.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _3.QueryAccountRequestProtoMsg): _3.QueryAccountRequest;
                toProto(message: _3.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAccountRequest): _3.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                encode(message: _3.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountResponse;
                fromPartial(object: any): _3.QueryAccountResponse;
                fromAmino(object: _3.QueryAccountResponseAmino): _3.QueryAccountResponse;
                toAmino(message: _3.QueryAccountResponse): _3.QueryAccountResponseAmino;
                fromAminoMsg(object: _3.QueryAccountResponseAminoMsg): _3.QueryAccountResponse;
                toAminoMsg(message: _3.QueryAccountResponse): _3.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _3.QueryAccountResponseProtoMsg): _3.QueryAccountResponse;
                toProto(message: _3.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _3.QueryAccountResponse): _3.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                fromPartial(_: any): _3.QueryParamsRequest;
                fromAmino(_: _3.QueryParamsRequestAmino): _3.QueryParamsRequest;
                toAmino(_: _3.QueryParamsRequest): _3.QueryParamsRequestAmino;
                fromAminoMsg(object: _3.QueryParamsRequestAminoMsg): _3.QueryParamsRequest;
                toAminoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryParamsRequestProtoMsg): _3.QueryParamsRequest;
                toProto(message: _3.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryParamsRequest): _3.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                fromPartial(object: any): _3.QueryParamsResponse;
                fromAmino(object: _3.QueryParamsResponseAmino): _3.QueryParamsResponse;
                toAmino(message: _3.QueryParamsResponse): _3.QueryParamsResponseAmino;
                fromAminoMsg(object: _3.QueryParamsResponseAminoMsg): _3.QueryParamsResponse;
                toAminoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryParamsResponseProtoMsg): _3.QueryParamsResponse;
                toProto(message: _3.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryParamsResponse): _3.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                encode(_: _3.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryModuleAccountsRequest;
                fromPartial(_: any): _3.QueryModuleAccountsRequest;
                fromAmino(_: _3.QueryModuleAccountsRequestAmino): _3.QueryModuleAccountsRequest;
                toAmino(_: _3.QueryModuleAccountsRequest): _3.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _3.QueryModuleAccountsRequestAminoMsg): _3.QueryModuleAccountsRequest;
                toAminoMsg(message: _3.QueryModuleAccountsRequest): _3.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _3.QueryModuleAccountsRequestProtoMsg): _3.QueryModuleAccountsRequest;
                toProto(message: _3.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountsRequest): _3.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                encode(message: _3.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryModuleAccountsResponse;
                fromPartial(object: any): _3.QueryModuleAccountsResponse;
                fromAmino(object: _3.QueryModuleAccountsResponseAmino): _3.QueryModuleAccountsResponse;
                toAmino(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _3.QueryModuleAccountsResponseAminoMsg): _3.QueryModuleAccountsResponse;
                toAminoMsg(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _3.QueryModuleAccountsResponseProtoMsg): _3.QueryModuleAccountsResponse;
                toProto(message: _3.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountsResponse): _3.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _3.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryModuleAccountByNameRequest;
                fromPartial(object: any): _3.QueryModuleAccountByNameRequest;
                fromAmino(object: _3.QueryModuleAccountByNameRequestAmino): _3.QueryModuleAccountByNameRequest;
                toAmino(message: _3.QueryModuleAccountByNameRequest): _3.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _3.QueryModuleAccountByNameRequestAminoMsg): _3.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _3.QueryModuleAccountByNameRequest): _3.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _3.QueryModuleAccountByNameRequestProtoMsg): _3.QueryModuleAccountByNameRequest;
                toProto(message: _3.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountByNameRequest): _3.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _3.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryModuleAccountByNameResponse;
                fromPartial(object: any): _3.QueryModuleAccountByNameResponse;
                fromAmino(object: _3.QueryModuleAccountByNameResponseAmino): _3.QueryModuleAccountByNameResponse;
                toAmino(message: _3.QueryModuleAccountByNameResponse): _3.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _3.QueryModuleAccountByNameResponseAminoMsg): _3.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _3.QueryModuleAccountByNameResponse): _3.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _3.QueryModuleAccountByNameResponseProtoMsg): _3.QueryModuleAccountByNameResponse;
                toProto(message: _3.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _3.QueryModuleAccountByNameResponse): _3.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                encode(_: _3.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Bech32PrefixRequest;
                fromPartial(_: any): _3.Bech32PrefixRequest;
                fromAmino(_: _3.Bech32PrefixRequestAmino): _3.Bech32PrefixRequest;
                toAmino(_: _3.Bech32PrefixRequest): _3.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _3.Bech32PrefixRequestAminoMsg): _3.Bech32PrefixRequest;
                toAminoMsg(message: _3.Bech32PrefixRequest): _3.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _3.Bech32PrefixRequestProtoMsg): _3.Bech32PrefixRequest;
                toProto(message: _3.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _3.Bech32PrefixRequest): _3.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                encode(message: _3.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Bech32PrefixResponse;
                fromPartial(object: any): _3.Bech32PrefixResponse;
                fromAmino(object: _3.Bech32PrefixResponseAmino): _3.Bech32PrefixResponse;
                toAmino(message: _3.Bech32PrefixResponse): _3.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _3.Bech32PrefixResponseAminoMsg): _3.Bech32PrefixResponse;
                toAminoMsg(message: _3.Bech32PrefixResponse): _3.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _3.Bech32PrefixResponseProtoMsg): _3.Bech32PrefixResponse;
                toProto(message: _3.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _3.Bech32PrefixResponse): _3.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                encode(message: _3.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.AddressBytesToStringRequest;
                fromPartial(object: any): _3.AddressBytesToStringRequest;
                fromAmino(object: _3.AddressBytesToStringRequestAmino): _3.AddressBytesToStringRequest;
                toAmino(message: _3.AddressBytesToStringRequest): _3.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _3.AddressBytesToStringRequestAminoMsg): _3.AddressBytesToStringRequest;
                toAminoMsg(message: _3.AddressBytesToStringRequest): _3.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _3.AddressBytesToStringRequestProtoMsg): _3.AddressBytesToStringRequest;
                toProto(message: _3.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _3.AddressBytesToStringRequest): _3.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                encode(message: _3.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.AddressBytesToStringResponse;
                fromPartial(object: any): _3.AddressBytesToStringResponse;
                fromAmino(object: _3.AddressBytesToStringResponseAmino): _3.AddressBytesToStringResponse;
                toAmino(message: _3.AddressBytesToStringResponse): _3.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _3.AddressBytesToStringResponseAminoMsg): _3.AddressBytesToStringResponse;
                toAminoMsg(message: _3.AddressBytesToStringResponse): _3.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _3.AddressBytesToStringResponseProtoMsg): _3.AddressBytesToStringResponse;
                toProto(message: _3.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _3.AddressBytesToStringResponse): _3.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                encode(message: _3.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.AddressStringToBytesRequest;
                fromPartial(object: any): _3.AddressStringToBytesRequest;
                fromAmino(object: _3.AddressStringToBytesRequestAmino): _3.AddressStringToBytesRequest;
                toAmino(message: _3.AddressStringToBytesRequest): _3.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _3.AddressStringToBytesRequestAminoMsg): _3.AddressStringToBytesRequest;
                toAminoMsg(message: _3.AddressStringToBytesRequest): _3.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _3.AddressStringToBytesRequestProtoMsg): _3.AddressStringToBytesRequest;
                toProto(message: _3.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _3.AddressStringToBytesRequest): _3.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                encode(message: _3.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.AddressStringToBytesResponse;
                fromPartial(object: any): _3.AddressStringToBytesResponse;
                fromAmino(object: _3.AddressStringToBytesResponseAmino): _3.AddressStringToBytesResponse;
                toAmino(message: _3.AddressStringToBytesResponse): _3.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _3.AddressStringToBytesResponseAminoMsg): _3.AddressStringToBytesResponse;
                toAminoMsg(message: _3.AddressStringToBytesResponse): _3.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _3.AddressStringToBytesResponseProtoMsg): _3.AddressStringToBytesResponse;
                toProto(message: _3.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _3.AddressStringToBytesResponse): _3.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                encode(message: _3.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountAddressByIDRequest;
                fromPartial(object: any): _3.QueryAccountAddressByIDRequest;
                fromAmino(object: _3.QueryAccountAddressByIDRequestAmino): _3.QueryAccountAddressByIDRequest;
                toAmino(message: _3.QueryAccountAddressByIDRequest): _3.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _3.QueryAccountAddressByIDRequestAminoMsg): _3.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _3.QueryAccountAddressByIDRequest): _3.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _3.QueryAccountAddressByIDRequestProtoMsg): _3.QueryAccountAddressByIDRequest;
                toProto(message: _3.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _3.QueryAccountAddressByIDRequest): _3.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                encode(message: _3.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAccountAddressByIDResponse;
                fromPartial(object: any): _3.QueryAccountAddressByIDResponse;
                fromAmino(object: _3.QueryAccountAddressByIDResponseAmino): _3.QueryAccountAddressByIDResponse;
                toAmino(message: _3.QueryAccountAddressByIDResponse): _3.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _3.QueryAccountAddressByIDResponseAminoMsg): _3.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _3.QueryAccountAddressByIDResponse): _3.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _3.QueryAccountAddressByIDResponseProtoMsg): _3.QueryAccountAddressByIDResponse;
                toProto(message: _3.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _3.QueryAccountAddressByIDResponse): _3.QueryAccountAddressByIDResponseProtoMsg;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _1.BaseAccount;
            AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _1.ModuleAccount;
            ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                encode(message: _2.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenesisState;
                fromPartial(object: any): _2.GenesisState;
                fromAmino(object: _2.GenesisStateAmino): _2.GenesisState;
                toAmino(message: _2.GenesisState): _2.GenesisStateAmino;
                fromAminoMsg(object: _2.GenesisStateAminoMsg): _2.GenesisState;
                toAminoMsg(message: _2.GenesisState): _2.GenesisStateAminoMsg;
                fromProtoMsg(message: _2.GenesisStateProtoMsg): _2.GenesisState;
                toProto(message: _2.GenesisState): Uint8Array;
                toProtoMsg(message: _2.GenesisState): _2.GenesisStateProtoMsg;
            };
            BaseAccount: {
                encode(message: _1.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.BaseAccount;
                fromPartial(object: any): _1.BaseAccount;
                fromAmino(object: _1.BaseAccountAmino): _1.BaseAccount;
                toAmino(message: _1.BaseAccount): _1.BaseAccountAmino;
                fromAminoMsg(object: _1.BaseAccountAminoMsg): _1.BaseAccount;
                toAminoMsg(message: _1.BaseAccount): _1.BaseAccountAminoMsg;
                fromProtoMsg(message: _1.BaseAccountProtoMsg): _1.BaseAccount;
                toProto(message: _1.BaseAccount): Uint8Array;
                toProtoMsg(message: _1.BaseAccount): _1.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _1.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ModuleAccount;
                fromPartial(object: any): _1.ModuleAccount;
                fromAmino(object: _1.ModuleAccountAmino): _1.ModuleAccount;
                toAmino(message: _1.ModuleAccount): _1.ModuleAccountAmino;
                fromAminoMsg(object: _1.ModuleAccountAminoMsg): _1.ModuleAccount;
                toAminoMsg(message: _1.ModuleAccount): _1.ModuleAccountAminoMsg;
                fromProtoMsg(message: _1.ModuleAccountProtoMsg): _1.ModuleAccount;
                toProto(message: _1.ModuleAccount): Uint8Array;
                toProtoMsg(message: _1.ModuleAccount): _1.ModuleAccountProtoMsg;
            };
            Params: {
                encode(message: _1.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Params;
                fromPartial(object: any): _1.Params;
                fromAmino(object: _1.ParamsAmino): _1.Params;
                toAmino(message: _1.Params): _1.ParamsAmino;
                fromAminoMsg(object: _1.ParamsAminoMsg): _1.Params;
                toAminoMsg(message: _1.Params): _1.ParamsAminoMsg;
                fromProtoMsg(message: _1.ParamsProtoMsg): _1.Params;
                toProto(message: _1.Params): Uint8Array;
                toProtoMsg(message: _1.Params): _1.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _144.MsgClientImpl;
            QueryClientImpl: typeof _134.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _7.QueryGrantsRequest): Promise<_7.QueryGrantsResponse>;
                granterGrants(request: _7.QueryGranterGrantsRequest): Promise<_7.QueryGranterGrantsResponse>;
                granteeGrants(request: _7.QueryGranteeGrantsRequest): Promise<_7.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _123.LCDQueryClient;
            MsgGrant: {
                encode(message: _8.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgGrant;
                fromPartial(object: any): _8.MsgGrant;
                fromAmino(object: _8.MsgGrantAmino): _8.MsgGrant;
                toAmino(message: _8.MsgGrant): _8.MsgGrantAmino;
                fromAminoMsg(object: _8.MsgGrantAminoMsg): _8.MsgGrant;
                toAminoMsg(message: _8.MsgGrant): _8.MsgGrantAminoMsg;
                fromProtoMsg(message: _8.MsgGrantProtoMsg): _8.MsgGrant;
                toProto(message: _8.MsgGrant): Uint8Array;
                toProtoMsg(message: _8.MsgGrant): _8.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _8.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgExecResponse;
                fromPartial(object: any): _8.MsgExecResponse;
                fromAmino(object: _8.MsgExecResponseAmino): _8.MsgExecResponse;
                toAmino(message: _8.MsgExecResponse): _8.MsgExecResponseAmino;
                fromAminoMsg(object: _8.MsgExecResponseAminoMsg): _8.MsgExecResponse;
                toAminoMsg(message: _8.MsgExecResponse): _8.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _8.MsgExecResponseProtoMsg): _8.MsgExecResponse;
                toProto(message: _8.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _8.MsgExecResponse): _8.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _8.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgExec;
                fromPartial(object: any): _8.MsgExec;
                fromAmino(object: _8.MsgExecAmino): _8.MsgExec;
                toAmino(message: _8.MsgExec): _8.MsgExecAmino;
                fromAminoMsg(object: _8.MsgExecAminoMsg): _8.MsgExec;
                toAminoMsg(message: _8.MsgExec): _8.MsgExecAminoMsg;
                fromProtoMsg(message: _8.MsgExecProtoMsg): _8.MsgExec;
                toProto(message: _8.MsgExec): Uint8Array;
                toProtoMsg(message: _8.MsgExec): _8.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _8.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgGrantResponse;
                fromPartial(_: any): _8.MsgGrantResponse;
                fromAmino(_: _8.MsgGrantResponseAmino): _8.MsgGrantResponse;
                toAmino(_: _8.MsgGrantResponse): _8.MsgGrantResponseAmino;
                fromAminoMsg(object: _8.MsgGrantResponseAminoMsg): _8.MsgGrantResponse;
                toAminoMsg(message: _8.MsgGrantResponse): _8.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _8.MsgGrantResponseProtoMsg): _8.MsgGrantResponse;
                toProto(message: _8.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _8.MsgGrantResponse): _8.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _8.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgRevoke;
                fromPartial(object: any): _8.MsgRevoke;
                fromAmino(object: _8.MsgRevokeAmino): _8.MsgRevoke;
                toAmino(message: _8.MsgRevoke): _8.MsgRevokeAmino;
                fromAminoMsg(object: _8.MsgRevokeAminoMsg): _8.MsgRevoke;
                toAminoMsg(message: _8.MsgRevoke): _8.MsgRevokeAminoMsg;
                fromProtoMsg(message: _8.MsgRevokeProtoMsg): _8.MsgRevoke;
                toProto(message: _8.MsgRevoke): Uint8Array;
                toProtoMsg(message: _8.MsgRevoke): _8.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _8.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.MsgRevokeResponse;
                fromPartial(_: any): _8.MsgRevokeResponse;
                fromAmino(_: _8.MsgRevokeResponseAmino): _8.MsgRevokeResponse;
                toAmino(_: _8.MsgRevokeResponse): _8.MsgRevokeResponseAmino;
                fromAminoMsg(object: _8.MsgRevokeResponseAminoMsg): _8.MsgRevokeResponse;
                toAminoMsg(message: _8.MsgRevokeResponse): _8.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _8.MsgRevokeResponseProtoMsg): _8.MsgRevokeResponse;
                toProto(message: _8.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _8.MsgRevokeResponse): _8.MsgRevokeResponseProtoMsg;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Sdk_Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Sdk_Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Authz_Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authz_Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                encode(message: _7.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGrantsRequest;
                fromPartial(object: any): _7.QueryGrantsRequest;
                fromAmino(object: _7.QueryGrantsRequestAmino): _7.QueryGrantsRequest;
                toAmino(message: _7.QueryGrantsRequest): _7.QueryGrantsRequestAmino;
                fromAminoMsg(object: _7.QueryGrantsRequestAminoMsg): _7.QueryGrantsRequest;
                toAminoMsg(message: _7.QueryGrantsRequest): _7.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryGrantsRequestProtoMsg): _7.QueryGrantsRequest;
                toProto(message: _7.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryGrantsRequest): _7.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _7.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGrantsResponse;
                fromPartial(object: any): _7.QueryGrantsResponse;
                fromAmino(object: _7.QueryGrantsResponseAmino): _7.QueryGrantsResponse;
                toAmino(message: _7.QueryGrantsResponse): _7.QueryGrantsResponseAmino;
                fromAminoMsg(object: _7.QueryGrantsResponseAminoMsg): _7.QueryGrantsResponse;
                toAminoMsg(message: _7.QueryGrantsResponse): _7.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryGrantsResponseProtoMsg): _7.QueryGrantsResponse;
                toProto(message: _7.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryGrantsResponse): _7.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _7.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranterGrantsRequest;
                fromPartial(object: any): _7.QueryGranterGrantsRequest;
                fromAmino(object: _7.QueryGranterGrantsRequestAmino): _7.QueryGranterGrantsRequest;
                toAmino(message: _7.QueryGranterGrantsRequest): _7.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _7.QueryGranterGrantsRequestAminoMsg): _7.QueryGranterGrantsRequest;
                toAminoMsg(message: _7.QueryGranterGrantsRequest): _7.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryGranterGrantsRequestProtoMsg): _7.QueryGranterGrantsRequest;
                toProto(message: _7.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryGranterGrantsRequest): _7.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _7.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranterGrantsResponse;
                fromPartial(object: any): _7.QueryGranterGrantsResponse;
                fromAmino(object: _7.QueryGranterGrantsResponseAmino): _7.QueryGranterGrantsResponse;
                toAmino(message: _7.QueryGranterGrantsResponse): _7.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _7.QueryGranterGrantsResponseAminoMsg): _7.QueryGranterGrantsResponse;
                toAminoMsg(message: _7.QueryGranterGrantsResponse): _7.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryGranterGrantsResponseProtoMsg): _7.QueryGranterGrantsResponse;
                toProto(message: _7.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryGranterGrantsResponse): _7.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _7.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranteeGrantsRequest;
                fromPartial(object: any): _7.QueryGranteeGrantsRequest;
                fromAmino(object: _7.QueryGranteeGrantsRequestAmino): _7.QueryGranteeGrantsRequest;
                toAmino(message: _7.QueryGranteeGrantsRequest): _7.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _7.QueryGranteeGrantsRequestAminoMsg): _7.QueryGranteeGrantsRequest;
                toAminoMsg(message: _7.QueryGranteeGrantsRequest): _7.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _7.QueryGranteeGrantsRequestProtoMsg): _7.QueryGranteeGrantsRequest;
                toProto(message: _7.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _7.QueryGranteeGrantsRequest): _7.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _7.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryGranteeGrantsResponse;
                fromPartial(object: any): _7.QueryGranteeGrantsResponse;
                fromAmino(object: _7.QueryGranteeGrantsResponseAmino): _7.QueryGranteeGrantsResponse;
                toAmino(message: _7.QueryGranteeGrantsResponse): _7.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _7.QueryGranteeGrantsResponseAminoMsg): _7.QueryGranteeGrantsResponse;
                toAminoMsg(message: _7.QueryGranteeGrantsResponse): _7.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _7.QueryGranteeGrantsResponseProtoMsg): _7.QueryGranteeGrantsResponse;
                toProto(message: _7.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _7.QueryGranteeGrantsResponse): _7.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromPartial(object: any): _6.GenesisState;
                fromAmino(object: _6.GenesisStateAmino): _6.GenesisState;
                toAmino(message: _6.GenesisState): _6.GenesisStateAmino;
                fromAminoMsg(object: _6.GenesisStateAminoMsg): _6.GenesisState;
                toAminoMsg(message: _6.GenesisState): _6.GenesisStateAminoMsg;
                fromProtoMsg(message: _6.GenesisStateProtoMsg): _6.GenesisState;
                toProto(message: _6.GenesisState): Uint8Array;
                toProtoMsg(message: _6.GenesisState): _6.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _5.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventGrant;
                fromPartial(object: any): _5.EventGrant;
                fromAmino(object: _5.EventGrantAmino): _5.EventGrant;
                toAmino(message: _5.EventGrant): _5.EventGrantAmino;
                fromAminoMsg(object: _5.EventGrantAminoMsg): _5.EventGrant;
                toAminoMsg(message: _5.EventGrant): _5.EventGrantAminoMsg;
                fromProtoMsg(message: _5.EventGrantProtoMsg): _5.EventGrant;
                toProto(message: _5.EventGrant): Uint8Array;
                toProtoMsg(message: _5.EventGrant): _5.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _5.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.EventRevoke;
                fromPartial(object: any): _5.EventRevoke;
                fromAmino(object: _5.EventRevokeAmino): _5.EventRevoke;
                toAmino(message: _5.EventRevoke): _5.EventRevokeAmino;
                fromAminoMsg(object: _5.EventRevokeAminoMsg): _5.EventRevoke;
                toAminoMsg(message: _5.EventRevoke): _5.EventRevokeAminoMsg;
                fromProtoMsg(message: _5.EventRevokeProtoMsg): _5.EventRevoke;
                toProto(message: _5.EventRevoke): Uint8Array;
                toProtoMsg(message: _5.EventRevoke): _5.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _4.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenericAuthorization;
                fromPartial(object: any): _4.GenericAuthorization;
                fromAmino(object: _4.GenericAuthorizationAmino): _4.GenericAuthorization;
                toAmino(message: _4.GenericAuthorization): _4.GenericAuthorizationAmino;
                fromAminoMsg(object: _4.GenericAuthorizationAminoMsg): _4.GenericAuthorization;
                toAminoMsg(message: _4.GenericAuthorization): _4.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _4.GenericAuthorizationProtoMsg): _4.GenericAuthorization;
                toProto(message: _4.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _4.GenericAuthorization): _4.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _4.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Grant;
                fromPartial(object: any): _4.Grant;
                fromAmino(object: _4.GrantAmino): _4.Grant;
                toAmino(message: _4.Grant): _4.GrantAmino;
                fromAminoMsg(object: _4.GrantAminoMsg): _4.Grant;
                toAminoMsg(message: _4.Grant): _4.GrantAminoMsg;
                fromProtoMsg(message: _4.GrantProtoMsg): _4.Grant;
                toProto(message: _4.Grant): Uint8Array;
                toProtoMsg(message: _4.Grant): _4.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _4.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GrantAuthorization;
                fromPartial(object: any): _4.GrantAuthorization;
                fromAmino(object: _4.GrantAuthorizationAmino): _4.GrantAuthorization;
                toAmino(message: _4.GrantAuthorization): _4.GrantAuthorizationAmino;
                fromAminoMsg(object: _4.GrantAuthorizationAminoMsg): _4.GrantAuthorization;
                toAminoMsg(message: _4.GrantAuthorization): _4.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _4.GrantAuthorizationProtoMsg): _4.GrantAuthorization;
                toProto(message: _4.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _4.GrantAuthorization): _4.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _4.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GrantQueueItem;
                fromPartial(object: any): _4.GrantQueueItem;
                fromAmino(object: _4.GrantQueueItemAmino): _4.GrantQueueItem;
                toAmino(message: _4.GrantQueueItem): _4.GrantQueueItemAmino;
                fromAminoMsg(object: _4.GrantQueueItemAminoMsg): _4.GrantQueueItem;
                toAminoMsg(message: _4.GrantQueueItem): _4.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _4.GrantQueueItemProtoMsg): _4.GrantQueueItem;
                toProto(message: _4.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _4.GrantQueueItem): _4.GrantQueueItemProtoMsg;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _9.SendAuthorization | _41.StakeAuthorization | _4.GenericAuthorization;
            Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _145.MsgClientImpl;
            QueryClientImpl: typeof _135.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
                denomOwners(request: _12.QueryDenomOwnersRequest): Promise<_12.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _124.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _13.MsgSend): {
                        typeUrl: string;
                        value: _13.MsgSend;
                    };
                    multiSend(value: _13.MsgMultiSend): {
                        typeUrl: string;
                        value: _13.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgSend) => _13.MsgSendAmino;
                    fromAmino: (object: _13.MsgSendAmino) => _13.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _13.MsgMultiSend) => _13.MsgMultiSendAmino;
                    fromAmino: (object: _13.MsgMultiSendAmino) => _13.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _13.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgSend;
                fromPartial(object: any): _13.MsgSend;
                fromAmino(object: _13.MsgSendAmino): _13.MsgSend;
                toAmino(message: _13.MsgSend): _13.MsgSendAmino;
                fromAminoMsg(object: _13.MsgSendAminoMsg): _13.MsgSend;
                toAminoMsg(message: _13.MsgSend): _13.MsgSendAminoMsg;
                fromProtoMsg(message: _13.MsgSendProtoMsg): _13.MsgSend;
                toProto(message: _13.MsgSend): Uint8Array;
                toProtoMsg(message: _13.MsgSend): _13.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _13.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgSendResponse;
                fromPartial(_: any): _13.MsgSendResponse;
                fromAmino(_: _13.MsgSendResponseAmino): _13.MsgSendResponse;
                toAmino(_: _13.MsgSendResponse): _13.MsgSendResponseAmino;
                fromAminoMsg(object: _13.MsgSendResponseAminoMsg): _13.MsgSendResponse;
                toAminoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgSendResponseProtoMsg): _13.MsgSendResponse;
                toProto(message: _13.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgSendResponse): _13.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _13.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgMultiSend;
                fromPartial(object: any): _13.MsgMultiSend;
                fromAmino(object: _13.MsgMultiSendAmino): _13.MsgMultiSend;
                toAmino(message: _13.MsgMultiSend): _13.MsgMultiSendAmino;
                fromAminoMsg(object: _13.MsgMultiSendAminoMsg): _13.MsgMultiSend;
                toAminoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendProtoMsg): _13.MsgMultiSend;
                toProto(message: _13.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSend): _13.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _13.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgMultiSendResponse;
                fromPartial(_: any): _13.MsgMultiSendResponse;
                fromAmino(_: _13.MsgMultiSendResponseAmino): _13.MsgMultiSendResponse;
                toAmino(_: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _13.MsgMultiSendResponseAminoMsg): _13.MsgMultiSendResponse;
                toAminoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _13.MsgMultiSendResponseProtoMsg): _13.MsgMultiSendResponse;
                toProto(message: _13.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _13.MsgMultiSendResponse): _13.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _12.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBalanceRequest;
                fromPartial(object: any): _12.QueryBalanceRequest;
                fromAmino(object: _12.QueryBalanceRequestAmino): _12.QueryBalanceRequest;
                toAmino(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestAmino;
                fromAminoMsg(object: _12.QueryBalanceRequestAminoMsg): _12.QueryBalanceRequest;
                toAminoMsg(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _12.QueryBalanceRequestProtoMsg): _12.QueryBalanceRequest;
                toProto(message: _12.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _12.QueryBalanceRequest): _12.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _12.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryBalanceResponse;
                fromPartial(object: any): _12.QueryBalanceResponse;
                fromAmino(object: _12.QueryBalanceResponseAmino): _12.QueryBalanceResponse;
                toAmino(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseAmino;
                fromAminoMsg(object: _12.QueryBalanceResponseAminoMsg): _12.QueryBalanceResponse;
                toAminoMsg(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _12.QueryBalanceResponseProtoMsg): _12.QueryBalanceResponse;
                toProto(message: _12.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _12.QueryBalanceResponse): _12.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _12.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAllBalancesRequest;
                fromPartial(object: any): _12.QueryAllBalancesRequest;
                fromAmino(object: _12.QueryAllBalancesRequestAmino): _12.QueryAllBalancesRequest;
                toAmino(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _12.QueryAllBalancesRequestAminoMsg): _12.QueryAllBalancesRequest;
                toAminoMsg(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _12.QueryAllBalancesRequestProtoMsg): _12.QueryAllBalancesRequest;
                toProto(message: _12.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _12.QueryAllBalancesRequest): _12.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _12.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAllBalancesResponse;
                fromPartial(object: any): _12.QueryAllBalancesResponse;
                fromAmino(object: _12.QueryAllBalancesResponseAmino): _12.QueryAllBalancesResponse;
                toAmino(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _12.QueryAllBalancesResponseAminoMsg): _12.QueryAllBalancesResponse;
                toAminoMsg(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _12.QueryAllBalancesResponseProtoMsg): _12.QueryAllBalancesResponse;
                toProto(message: _12.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _12.QueryAllBalancesResponse): _12.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _12.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySpendableBalancesRequest;
                fromPartial(object: any): _12.QuerySpendableBalancesRequest;
                fromAmino(object: _12.QuerySpendableBalancesRequestAmino): _12.QuerySpendableBalancesRequest;
                toAmino(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _12.QuerySpendableBalancesRequestAminoMsg): _12.QuerySpendableBalancesRequest;
                toAminoMsg(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _12.QuerySpendableBalancesRequestProtoMsg): _12.QuerySpendableBalancesRequest;
                toProto(message: _12.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySpendableBalancesRequest): _12.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _12.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySpendableBalancesResponse;
                fromPartial(object: any): _12.QuerySpendableBalancesResponse;
                fromAmino(object: _12.QuerySpendableBalancesResponseAmino): _12.QuerySpendableBalancesResponse;
                toAmino(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _12.QuerySpendableBalancesResponseAminoMsg): _12.QuerySpendableBalancesResponse;
                toAminoMsg(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _12.QuerySpendableBalancesResponseProtoMsg): _12.QuerySpendableBalancesResponse;
                toProto(message: _12.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySpendableBalancesResponse): _12.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _12.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyRequest;
                fromPartial(object: any): _12.QueryTotalSupplyRequest;
                fromAmino(object: _12.QueryTotalSupplyRequestAmino): _12.QueryTotalSupplyRequest;
                toAmino(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyRequestAminoMsg): _12.QueryTotalSupplyRequest;
                toAminoMsg(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyRequestProtoMsg): _12.QueryTotalSupplyRequest;
                toProto(message: _12.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyRequest): _12.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _12.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryTotalSupplyResponse;
                fromPartial(object: any): _12.QueryTotalSupplyResponse;
                fromAmino(object: _12.QueryTotalSupplyResponseAmino): _12.QueryTotalSupplyResponse;
                toAmino(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _12.QueryTotalSupplyResponseAminoMsg): _12.QueryTotalSupplyResponse;
                toAminoMsg(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _12.QueryTotalSupplyResponseProtoMsg): _12.QueryTotalSupplyResponse;
                toProto(message: _12.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _12.QueryTotalSupplyResponse): _12.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _12.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfRequest;
                fromPartial(object: any): _12.QuerySupplyOfRequest;
                fromAmino(object: _12.QuerySupplyOfRequestAmino): _12.QuerySupplyOfRequest;
                toAmino(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _12.QuerySupplyOfRequestAminoMsg): _12.QuerySupplyOfRequest;
                toAminoMsg(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfRequestProtoMsg): _12.QuerySupplyOfRequest;
                toProto(message: _12.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfRequest): _12.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _12.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QuerySupplyOfResponse;
                fromPartial(object: any): _12.QuerySupplyOfResponse;
                fromAmino(object: _12.QuerySupplyOfResponseAmino): _12.QuerySupplyOfResponse;
                toAmino(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _12.QuerySupplyOfResponseAminoMsg): _12.QuerySupplyOfResponse;
                toAminoMsg(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _12.QuerySupplyOfResponseProtoMsg): _12.QuerySupplyOfResponse;
                toProto(message: _12.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _12.QuerySupplyOfResponse): _12.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _12.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsRequest;
                fromPartial(_: any): _12.QueryParamsRequest;
                fromAmino(_: _12.QueryParamsRequestAmino): _12.QueryParamsRequest;
                toAmino(_: _12.QueryParamsRequest): _12.QueryParamsRequestAmino;
                fromAminoMsg(object: _12.QueryParamsRequestAminoMsg): _12.QueryParamsRequest;
                toAminoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _12.QueryParamsRequestProtoMsg): _12.QueryParamsRequest;
                toProto(message: _12.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _12.QueryParamsRequest): _12.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsResponse;
                fromPartial(object: any): _12.QueryParamsResponse;
                fromAmino(object: _12.QueryParamsResponseAmino): _12.QueryParamsResponse;
                toAmino(message: _12.QueryParamsResponse): _12.QueryParamsResponseAmino;
                fromAminoMsg(object: _12.QueryParamsResponseAminoMsg): _12.QueryParamsResponse;
                toAminoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _12.QueryParamsResponseProtoMsg): _12.QueryParamsResponse;
                toProto(message: _12.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _12.QueryParamsResponse): _12.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _12.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomsMetadataRequest;
                fromPartial(object: any): _12.QueryDenomsMetadataRequest;
                fromAmino(object: _12.QueryDenomsMetadataRequestAmino): _12.QueryDenomsMetadataRequest;
                toAmino(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _12.QueryDenomsMetadataRequestAminoMsg): _12.QueryDenomsMetadataRequest;
                toAminoMsg(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _12.QueryDenomsMetadataRequestProtoMsg): _12.QueryDenomsMetadataRequest;
                toProto(message: _12.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsMetadataRequest): _12.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _12.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomsMetadataResponse;
                fromPartial(object: any): _12.QueryDenomsMetadataResponse;
                fromAmino(object: _12.QueryDenomsMetadataResponseAmino): _12.QueryDenomsMetadataResponse;
                toAmino(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _12.QueryDenomsMetadataResponseAminoMsg): _12.QueryDenomsMetadataResponse;
                toAminoMsg(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _12.QueryDenomsMetadataResponseProtoMsg): _12.QueryDenomsMetadataResponse;
                toProto(message: _12.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomsMetadataResponse): _12.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _12.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomMetadataRequest;
                fromPartial(object: any): _12.QueryDenomMetadataRequest;
                fromAmino(object: _12.QueryDenomMetadataRequestAmino): _12.QueryDenomMetadataRequest;
                toAmino(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _12.QueryDenomMetadataRequestAminoMsg): _12.QueryDenomMetadataRequest;
                toAminoMsg(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _12.QueryDenomMetadataRequestProtoMsg): _12.QueryDenomMetadataRequest;
                toProto(message: _12.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomMetadataRequest): _12.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _12.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomMetadataResponse;
                fromPartial(object: any): _12.QueryDenomMetadataResponse;
                fromAmino(object: _12.QueryDenomMetadataResponseAmino): _12.QueryDenomMetadataResponse;
                toAmino(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _12.QueryDenomMetadataResponseAminoMsg): _12.QueryDenomMetadataResponse;
                toAminoMsg(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _12.QueryDenomMetadataResponseProtoMsg): _12.QueryDenomMetadataResponse;
                toProto(message: _12.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomMetadataResponse): _12.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _12.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomOwnersRequest;
                fromPartial(object: any): _12.QueryDenomOwnersRequest;
                fromAmino(object: _12.QueryDenomOwnersRequestAmino): _12.QueryDenomOwnersRequest;
                toAmino(message: _12.QueryDenomOwnersRequest): _12.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _12.QueryDenomOwnersRequestAminoMsg): _12.QueryDenomOwnersRequest;
                toAminoMsg(message: _12.QueryDenomOwnersRequest): _12.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _12.QueryDenomOwnersRequestProtoMsg): _12.QueryDenomOwnersRequest;
                toProto(message: _12.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _12.QueryDenomOwnersRequest): _12.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _12.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.DenomOwner;
                fromPartial(object: any): _12.DenomOwner;
                fromAmino(object: _12.DenomOwnerAmino): _12.DenomOwner;
                toAmino(message: _12.DenomOwner): _12.DenomOwnerAmino;
                fromAminoMsg(object: _12.DenomOwnerAminoMsg): _12.DenomOwner;
                toAminoMsg(message: _12.DenomOwner): _12.DenomOwnerAminoMsg;
                fromProtoMsg(message: _12.DenomOwnerProtoMsg): _12.DenomOwner;
                toProto(message: _12.DenomOwner): Uint8Array;
                toProtoMsg(message: _12.DenomOwner): _12.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _12.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryDenomOwnersResponse;
                fromPartial(object: any): _12.QueryDenomOwnersResponse;
                fromAmino(object: _12.QueryDenomOwnersResponseAmino): _12.QueryDenomOwnersResponse;
                toAmino(message: _12.QueryDenomOwnersResponse): _12.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _12.QueryDenomOwnersResponseAminoMsg): _12.QueryDenomOwnersResponse;
                toAminoMsg(message: _12.QueryDenomOwnersResponse): _12.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _12.QueryDenomOwnersResponseProtoMsg): _12.QueryDenomOwnersResponse;
                toProto(message: _12.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _12.QueryDenomOwnersResponse): _12.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _11.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GenesisState;
                fromPartial(object: any): _11.GenesisState;
                fromAmino(object: _11.GenesisStateAmino): _11.GenesisState;
                toAmino(message: _11.GenesisState): _11.GenesisStateAmino;
                fromAminoMsg(object: _11.GenesisStateAminoMsg): _11.GenesisState;
                toAminoMsg(message: _11.GenesisState): _11.GenesisStateAminoMsg;
                fromProtoMsg(message: _11.GenesisStateProtoMsg): _11.GenesisState;
                toProto(message: _11.GenesisState): Uint8Array;
                toProtoMsg(message: _11.GenesisState): _11.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _11.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Balance;
                fromPartial(object: any): _11.Balance;
                fromAmino(object: _11.BalanceAmino): _11.Balance;
                toAmino(message: _11.Balance): _11.BalanceAmino;
                fromAminoMsg(object: _11.BalanceAminoMsg): _11.Balance;
                toAminoMsg(message: _11.Balance): _11.BalanceAminoMsg;
                fromProtoMsg(message: _11.BalanceProtoMsg): _11.Balance;
                toProto(message: _11.Balance): Uint8Array;
                toProtoMsg(message: _11.Balance): _11.BalanceProtoMsg;
            };
            Params: {
                encode(message: _10.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Params;
                fromPartial(object: any): _10.Params;
                fromAmino(object: _10.ParamsAmino): _10.Params;
                toAmino(message: _10.Params): _10.ParamsAmino;
                fromAminoMsg(object: _10.ParamsAminoMsg): _10.Params;
                toAminoMsg(message: _10.Params): _10.ParamsAminoMsg;
                fromProtoMsg(message: _10.ParamsProtoMsg): _10.Params;
                toProto(message: _10.Params): Uint8Array;
                toProtoMsg(message: _10.Params): _10.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _10.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SendEnabled;
                fromPartial(object: any): _10.SendEnabled;
                fromAmino(object: _10.SendEnabledAmino): _10.SendEnabled;
                toAmino(message: _10.SendEnabled): _10.SendEnabledAmino;
                fromAminoMsg(object: _10.SendEnabledAminoMsg): _10.SendEnabled;
                toAminoMsg(message: _10.SendEnabled): _10.SendEnabledAminoMsg;
                fromProtoMsg(message: _10.SendEnabledProtoMsg): _10.SendEnabled;
                toProto(message: _10.SendEnabled): Uint8Array;
                toProtoMsg(message: _10.SendEnabled): _10.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _10.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Input;
                fromPartial(object: any): _10.Input;
                fromAmino(object: _10.InputAmino): _10.Input;
                toAmino(message: _10.Input): _10.InputAmino;
                fromAminoMsg(object: _10.InputAminoMsg): _10.Input;
                toAminoMsg(message: _10.Input): _10.InputAminoMsg;
                fromProtoMsg(message: _10.InputProtoMsg): _10.Input;
                toProto(message: _10.Input): Uint8Array;
                toProtoMsg(message: _10.Input): _10.InputProtoMsg;
            };
            Output: {
                encode(message: _10.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Output;
                fromPartial(object: any): _10.Output;
                fromAmino(object: _10.OutputAmino): _10.Output;
                toAmino(message: _10.Output): _10.OutputAmino;
                fromAminoMsg(object: _10.OutputAminoMsg): _10.Output;
                toAminoMsg(message: _10.Output): _10.OutputAminoMsg;
                fromProtoMsg(message: _10.OutputProtoMsg): _10.Output;
                toProto(message: _10.Output): Uint8Array;
                toProtoMsg(message: _10.Output): _10.OutputProtoMsg;
            };
            Supply: {
                encode(message: _10.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Supply;
                fromPartial(object: any): _10.Supply;
                fromAmino(object: _10.SupplyAmino): _10.Supply;
                toAmino(message: _10.Supply): _10.SupplyAmino;
                fromAminoMsg(object: _10.SupplyAminoMsg): _10.Supply;
                toAminoMsg(message: _10.Supply): _10.SupplyAminoMsg;
                fromProtoMsg(message: _10.SupplyProtoMsg): _10.Supply;
                toProto(message: _10.Supply): Uint8Array;
                toProtoMsg(message: _10.Supply): _10.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _10.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.DenomUnit;
                fromPartial(object: any): _10.DenomUnit;
                fromAmino(object: _10.DenomUnitAmino): _10.DenomUnit;
                toAmino(message: _10.DenomUnit): _10.DenomUnitAmino;
                fromAminoMsg(object: _10.DenomUnitAminoMsg): _10.DenomUnit;
                toAminoMsg(message: _10.DenomUnit): _10.DenomUnitAminoMsg;
                fromProtoMsg(message: _10.DenomUnitProtoMsg): _10.DenomUnit;
                toProto(message: _10.DenomUnit): Uint8Array;
                toProtoMsg(message: _10.DenomUnit): _10.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _10.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Metadata;
                fromPartial(object: any): _10.Metadata;
                fromAmino(object: _10.MetadataAmino): _10.Metadata;
                toAmino(message: _10.Metadata): _10.MetadataAmino;
                fromAminoMsg(object: _10.MetadataAminoMsg): _10.Metadata;
                toAminoMsg(message: _10.Metadata): _10.MetadataAminoMsg;
                fromProtoMsg(message: _10.MetadataProtoMsg): _10.Metadata;
                toProto(message: _10.Metadata): Uint8Array;
                toProtoMsg(message: _10.Metadata): _10.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _9.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SendAuthorization;
                fromPartial(object: any): _9.SendAuthorization;
                fromAmino(object: _9.SendAuthorizationAmino): _9.SendAuthorization;
                toAmino(message: _9.SendAuthorization): _9.SendAuthorizationAmino;
                fromAminoMsg(object: _9.SendAuthorizationAminoMsg): _9.SendAuthorization;
                toAminoMsg(message: _9.SendAuthorization): _9.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _9.SendAuthorizationProtoMsg): _9.SendAuthorization;
                toProto(message: _9.SendAuthorization): Uint8Array;
                toProtoMsg(message: _9.SendAuthorization): _9.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _14.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxResponse;
                    fromPartial(object: any): _14.TxResponse;
                    fromAmino(object: _14.TxResponseAmino): _14.TxResponse;
                    toAmino(message: _14.TxResponse): _14.TxResponseAmino;
                    fromAminoMsg(object: _14.TxResponseAminoMsg): _14.TxResponse;
                    toAminoMsg(message: _14.TxResponse): _14.TxResponseAminoMsg;
                    fromProtoMsg(message: _14.TxResponseProtoMsg): _14.TxResponse;
                    toProto(message: _14.TxResponse): Uint8Array;
                    toProtoMsg(message: _14.TxResponse): _14.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _14.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ABCIMessageLog;
                    fromPartial(object: any): _14.ABCIMessageLog;
                    fromAmino(object: _14.ABCIMessageLogAmino): _14.ABCIMessageLog;
                    toAmino(message: _14.ABCIMessageLog): _14.ABCIMessageLogAmino;
                    fromAminoMsg(object: _14.ABCIMessageLogAminoMsg): _14.ABCIMessageLog;
                    toAminoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _14.ABCIMessageLogProtoMsg): _14.ABCIMessageLog;
                    toProto(message: _14.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _14.ABCIMessageLog): _14.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _14.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.StringEvent;
                    fromPartial(object: any): _14.StringEvent;
                    fromAmino(object: _14.StringEventAmino): _14.StringEvent;
                    toAmino(message: _14.StringEvent): _14.StringEventAmino;
                    fromAminoMsg(object: _14.StringEventAminoMsg): _14.StringEvent;
                    toAminoMsg(message: _14.StringEvent): _14.StringEventAminoMsg;
                    fromProtoMsg(message: _14.StringEventProtoMsg): _14.StringEvent;
                    toProto(message: _14.StringEvent): Uint8Array;
                    toProtoMsg(message: _14.StringEvent): _14.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _14.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Attribute;
                    fromPartial(object: any): _14.Attribute;
                    fromAmino(object: _14.AttributeAmino): _14.Attribute;
                    toAmino(message: _14.Attribute): _14.AttributeAmino;
                    fromAminoMsg(object: _14.AttributeAminoMsg): _14.Attribute;
                    toAminoMsg(message: _14.Attribute): _14.AttributeAminoMsg;
                    fromProtoMsg(message: _14.AttributeProtoMsg): _14.Attribute;
                    toProto(message: _14.Attribute): Uint8Array;
                    toProtoMsg(message: _14.Attribute): _14.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _14.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GasInfo;
                    fromPartial(object: any): _14.GasInfo;
                    fromAmino(object: _14.GasInfoAmino): _14.GasInfo;
                    toAmino(message: _14.GasInfo): _14.GasInfoAmino;
                    fromAminoMsg(object: _14.GasInfoAminoMsg): _14.GasInfo;
                    toAminoMsg(message: _14.GasInfo): _14.GasInfoAminoMsg;
                    fromProtoMsg(message: _14.GasInfoProtoMsg): _14.GasInfo;
                    toProto(message: _14.GasInfo): Uint8Array;
                    toProtoMsg(message: _14.GasInfo): _14.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _14.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Result;
                    fromPartial(object: any): _14.Result;
                    fromAmino(object: _14.ResultAmino): _14.Result;
                    toAmino(message: _14.Result): _14.ResultAmino;
                    fromAminoMsg(object: _14.ResultAminoMsg): _14.Result;
                    toAminoMsg(message: _14.Result): _14.ResultAminoMsg;
                    fromProtoMsg(message: _14.ResultProtoMsg): _14.Result;
                    toProto(message: _14.Result): Uint8Array;
                    toProtoMsg(message: _14.Result): _14.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _14.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SimulationResponse;
                    fromPartial(object: any): _14.SimulationResponse;
                    fromAmino(object: _14.SimulationResponseAmino): _14.SimulationResponse;
                    toAmino(message: _14.SimulationResponse): _14.SimulationResponseAmino;
                    fromAminoMsg(object: _14.SimulationResponseAminoMsg): _14.SimulationResponse;
                    toAminoMsg(message: _14.SimulationResponse): _14.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _14.SimulationResponseProtoMsg): _14.SimulationResponse;
                    toProto(message: _14.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _14.SimulationResponse): _14.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _14.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgData;
                    fromPartial(object: any): _14.MsgData;
                    fromAmino(object: _14.MsgDataAmino): _14.MsgData;
                    toAmino(message: _14.MsgData): _14.MsgDataAmino;
                    fromAminoMsg(object: _14.MsgDataAminoMsg): _14.MsgData;
                    toAminoMsg(message: _14.MsgData): _14.MsgDataAminoMsg;
                    fromProtoMsg(message: _14.MsgDataProtoMsg): _14.MsgData;
                    toProto(message: _14.MsgData): Uint8Array;
                    toProtoMsg(message: _14.MsgData): _14.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _14.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxMsgData;
                    fromPartial(object: any): _14.TxMsgData;
                    fromAmino(object: _14.TxMsgDataAmino): _14.TxMsgData;
                    toAmino(message: _14.TxMsgData): _14.TxMsgDataAmino;
                    fromAminoMsg(object: _14.TxMsgDataAminoMsg): _14.TxMsgData;
                    toAminoMsg(message: _14.TxMsgData): _14.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _14.TxMsgDataProtoMsg): _14.TxMsgData;
                    toProto(message: _14.TxMsgData): Uint8Array;
                    toProtoMsg(message: _14.TxMsgData): _14.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _14.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SearchTxsResult;
                    fromPartial(object: any): _14.SearchTxsResult;
                    fromAmino(object: _14.SearchTxsResultAmino): _14.SearchTxsResult;
                    toAmino(message: _14.SearchTxsResult): _14.SearchTxsResultAmino;
                    fromAminoMsg(object: _14.SearchTxsResultAminoMsg): _14.SearchTxsResult;
                    toAminoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _14.SearchTxsResultProtoMsg): _14.SearchTxsResult;
                    toProto(message: _14.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _14.SearchTxsResult): _14.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _136.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                };
                LCDQueryClient: typeof _125.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _15.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ConfigRequest;
                    fromPartial(_: any): _15.ConfigRequest;
                    fromAmino(_: _15.ConfigRequestAmino): _15.ConfigRequest;
                    toAmino(_: _15.ConfigRequest): _15.ConfigRequestAmino;
                    fromAminoMsg(object: _15.ConfigRequestAminoMsg): _15.ConfigRequest;
                    toAminoMsg(message: _15.ConfigRequest): _15.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _15.ConfigRequestProtoMsg): _15.ConfigRequest;
                    toProto(message: _15.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _15.ConfigRequest): _15.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    encode(message: _15.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ConfigResponse;
                    fromPartial(object: any): _15.ConfigResponse;
                    fromAmino(object: _15.ConfigResponseAmino): _15.ConfigResponse;
                    toAmino(message: _15.ConfigResponse): _15.ConfigResponseAmino;
                    fromAminoMsg(object: _15.ConfigResponseAminoMsg): _15.ConfigResponse;
                    toAminoMsg(message: _15.ConfigResponse): _15.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _15.ConfigResponseProtoMsg): _15.ConfigResponse;
                    toProto(message: _15.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _15.ConfigResponse): _15.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _16.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageRequest;
                    fromPartial(object: any): _16.PageRequest;
                    fromAmino(object: _16.PageRequestAmino): _16.PageRequest;
                    toAmino(message: _16.PageRequest): _16.PageRequestAmino;
                    fromAminoMsg(object: _16.PageRequestAminoMsg): _16.PageRequest;
                    toAminoMsg(message: _16.PageRequest): _16.PageRequestAminoMsg;
                    fromProtoMsg(message: _16.PageRequestProtoMsg): _16.PageRequest;
                    toProto(message: _16.PageRequest): Uint8Array;
                    toProtoMsg(message: _16.PageRequest): _16.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _16.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageResponse;
                    fromPartial(object: any): _16.PageResponse;
                    fromAmino(object: _16.PageResponseAmino): _16.PageResponse;
                    toAmino(message: _16.PageResponse): _16.PageResponseAmino;
                    fromAminoMsg(object: _16.PageResponseAminoMsg): _16.PageResponse;
                    toAminoMsg(message: _16.PageResponse): _16.PageResponseAminoMsg;
                    fromProtoMsg(message: _16.PageResponseProtoMsg): _16.PageResponse;
                    toProto(message: _16.PageResponse): Uint8Array;
                    toProtoMsg(message: _16.PageResponse): _16.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _17.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppDescriptor;
                    fromPartial(object: any): _17.AppDescriptor;
                    fromAmino(object: _17.AppDescriptorAmino): _17.AppDescriptor;
                    toAmino(message: _17.AppDescriptor): _17.AppDescriptorAmino;
                    fromAminoMsg(object: _17.AppDescriptorAminoMsg): _17.AppDescriptor;
                    toAminoMsg(message: _17.AppDescriptor): _17.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AppDescriptorProtoMsg): _17.AppDescriptor;
                    toProto(message: _17.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AppDescriptor): _17.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _17.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxDescriptor;
                    fromPartial(object: any): _17.TxDescriptor;
                    fromAmino(object: _17.TxDescriptorAmino): _17.TxDescriptor;
                    toAmino(message: _17.TxDescriptor): _17.TxDescriptorAmino;
                    fromAminoMsg(object: _17.TxDescriptorAminoMsg): _17.TxDescriptor;
                    toAminoMsg(message: _17.TxDescriptor): _17.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _17.TxDescriptorProtoMsg): _17.TxDescriptor;
                    toProto(message: _17.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _17.TxDescriptor): _17.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _17.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AuthnDescriptor;
                    fromPartial(object: any): _17.AuthnDescriptor;
                    fromAmino(object: _17.AuthnDescriptorAmino): _17.AuthnDescriptor;
                    toAmino(message: _17.AuthnDescriptor): _17.AuthnDescriptorAmino;
                    fromAminoMsg(object: _17.AuthnDescriptorAminoMsg): _17.AuthnDescriptor;
                    toAminoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _17.AuthnDescriptorProtoMsg): _17.AuthnDescriptor;
                    toProto(message: _17.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _17.AuthnDescriptor): _17.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _17.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SigningModeDescriptor;
                    fromPartial(object: any): _17.SigningModeDescriptor;
                    fromAmino(object: _17.SigningModeDescriptorAmino): _17.SigningModeDescriptor;
                    toAmino(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _17.SigningModeDescriptorAminoMsg): _17.SigningModeDescriptor;
                    toAminoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _17.SigningModeDescriptorProtoMsg): _17.SigningModeDescriptor;
                    toProto(message: _17.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _17.SigningModeDescriptor): _17.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _17.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ChainDescriptor;
                    fromPartial(object: any): _17.ChainDescriptor;
                    fromAmino(object: _17.ChainDescriptorAmino): _17.ChainDescriptor;
                    toAmino(message: _17.ChainDescriptor): _17.ChainDescriptorAmino;
                    fromAminoMsg(object: _17.ChainDescriptorAminoMsg): _17.ChainDescriptor;
                    toAminoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ChainDescriptorProtoMsg): _17.ChainDescriptor;
                    toProto(message: _17.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ChainDescriptor): _17.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _17.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.CodecDescriptor;
                    fromPartial(object: any): _17.CodecDescriptor;
                    fromAmino(object: _17.CodecDescriptorAmino): _17.CodecDescriptor;
                    toAmino(message: _17.CodecDescriptor): _17.CodecDescriptorAmino;
                    fromAminoMsg(object: _17.CodecDescriptorAminoMsg): _17.CodecDescriptor;
                    toAminoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _17.CodecDescriptorProtoMsg): _17.CodecDescriptor;
                    toProto(message: _17.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _17.CodecDescriptor): _17.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _17.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceDescriptor;
                    fromPartial(object: any): _17.InterfaceDescriptor;
                    fromAmino(object: _17.InterfaceDescriptorAmino): _17.InterfaceDescriptor;
                    toAmino(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceDescriptorAminoMsg): _17.InterfaceDescriptor;
                    toAminoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceDescriptorProtoMsg): _17.InterfaceDescriptor;
                    toProto(message: _17.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceDescriptor): _17.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceImplementerDescriptor;
                    fromPartial(object: any): _17.InterfaceImplementerDescriptor;
                    fromAmino(object: _17.InterfaceImplementerDescriptorAmino): _17.InterfaceImplementerDescriptor;
                    toAmino(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceImplementerDescriptorAminoMsg): _17.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceImplementerDescriptorProtoMsg): _17.InterfaceImplementerDescriptor;
                    toProto(message: _17.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceImplementerDescriptor): _17.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: any): _17.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _17.InterfaceAcceptingMessageDescriptorAmino): _17.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _17.InterfaceAcceptingMessageDescriptorAminoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _17.InterfaceAcceptingMessageDescriptorProtoMsg): _17.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _17.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _17.InterfaceAcceptingMessageDescriptor): _17.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _17.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigurationDescriptor;
                    fromPartial(object: any): _17.ConfigurationDescriptor;
                    fromAmino(object: _17.ConfigurationDescriptorAmino): _17.ConfigurationDescriptor;
                    toAmino(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _17.ConfigurationDescriptorAminoMsg): _17.ConfigurationDescriptor;
                    toAminoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _17.ConfigurationDescriptorProtoMsg): _17.ConfigurationDescriptor;
                    toProto(message: _17.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _17.ConfigurationDescriptor): _17.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _17.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDescriptor;
                    fromPartial(object: any): _17.MsgDescriptor;
                    fromAmino(object: _17.MsgDescriptorAmino): _17.MsgDescriptor;
                    toAmino(message: _17.MsgDescriptor): _17.MsgDescriptorAmino;
                    fromAminoMsg(object: _17.MsgDescriptorAminoMsg): _17.MsgDescriptor;
                    toAminoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _17.MsgDescriptorProtoMsg): _17.MsgDescriptor;
                    toProto(message: _17.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _17.MsgDescriptor): _17.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorRequest;
                    fromPartial(_: any): _17.GetAuthnDescriptorRequest;
                    fromAmino(_: _17.GetAuthnDescriptorRequestAmino): _17.GetAuthnDescriptorRequest;
                    toAmino(_: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorRequestAminoMsg): _17.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorRequestProtoMsg): _17.GetAuthnDescriptorRequest;
                    toProto(message: _17.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorRequest): _17.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorResponse;
                    fromPartial(object: any): _17.GetAuthnDescriptorResponse;
                    fromAmino(object: _17.GetAuthnDescriptorResponseAmino): _17.GetAuthnDescriptorResponse;
                    toAmino(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetAuthnDescriptorResponseAminoMsg): _17.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetAuthnDescriptorResponseProtoMsg): _17.GetAuthnDescriptorResponse;
                    toProto(message: _17.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetAuthnDescriptorResponse): _17.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorRequest;
                    fromPartial(_: any): _17.GetChainDescriptorRequest;
                    fromAmino(_: _17.GetChainDescriptorRequestAmino): _17.GetChainDescriptorRequest;
                    toAmino(_: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorRequestAminoMsg): _17.GetChainDescriptorRequest;
                    toAminoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorRequestProtoMsg): _17.GetChainDescriptorRequest;
                    toProto(message: _17.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorRequest): _17.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorResponse;
                    fromPartial(object: any): _17.GetChainDescriptorResponse;
                    fromAmino(object: _17.GetChainDescriptorResponseAmino): _17.GetChainDescriptorResponse;
                    toAmino(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetChainDescriptorResponseAminoMsg): _17.GetChainDescriptorResponse;
                    toAminoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetChainDescriptorResponseProtoMsg): _17.GetChainDescriptorResponse;
                    toProto(message: _17.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetChainDescriptorResponse): _17.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorRequest;
                    fromPartial(_: any): _17.GetCodecDescriptorRequest;
                    fromAmino(_: _17.GetCodecDescriptorRequestAmino): _17.GetCodecDescriptorRequest;
                    toAmino(_: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorRequestAminoMsg): _17.GetCodecDescriptorRequest;
                    toAminoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorRequestProtoMsg): _17.GetCodecDescriptorRequest;
                    toProto(message: _17.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorRequest): _17.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorResponse;
                    fromPartial(object: any): _17.GetCodecDescriptorResponse;
                    fromAmino(object: _17.GetCodecDescriptorResponseAmino): _17.GetCodecDescriptorResponse;
                    toAmino(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetCodecDescriptorResponseAminoMsg): _17.GetCodecDescriptorResponse;
                    toAminoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetCodecDescriptorResponseProtoMsg): _17.GetCodecDescriptorResponse;
                    toProto(message: _17.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetCodecDescriptorResponse): _17.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorRequest;
                    fromPartial(_: any): _17.GetConfigurationDescriptorRequest;
                    fromAmino(_: _17.GetConfigurationDescriptorRequestAmino): _17.GetConfigurationDescriptorRequest;
                    toAmino(_: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorRequestAminoMsg): _17.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorRequestProtoMsg): _17.GetConfigurationDescriptorRequest;
                    toProto(message: _17.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorRequest): _17.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorResponse;
                    fromPartial(object: any): _17.GetConfigurationDescriptorResponse;
                    fromAmino(object: _17.GetConfigurationDescriptorResponseAmino): _17.GetConfigurationDescriptorResponse;
                    toAmino(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetConfigurationDescriptorResponseAminoMsg): _17.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetConfigurationDescriptorResponseProtoMsg): _17.GetConfigurationDescriptorResponse;
                    toProto(message: _17.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetConfigurationDescriptorResponse): _17.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorRequest;
                    fromPartial(_: any): _17.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _17.GetQueryServicesDescriptorRequestAmino): _17.GetQueryServicesDescriptorRequest;
                    toAmino(_: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorRequestAminoMsg): _17.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorRequestProtoMsg): _17.GetQueryServicesDescriptorRequest;
                    toProto(message: _17.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorRequest): _17.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorResponse;
                    fromPartial(object: any): _17.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _17.GetQueryServicesDescriptorResponseAmino): _17.GetQueryServicesDescriptorResponse;
                    toAmino(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetQueryServicesDescriptorResponseAminoMsg): _17.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetQueryServicesDescriptorResponseProtoMsg): _17.GetQueryServicesDescriptorResponse;
                    toProto(message: _17.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetQueryServicesDescriptorResponse): _17.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorRequest;
                    fromPartial(_: any): _17.GetTxDescriptorRequest;
                    fromAmino(_: _17.GetTxDescriptorRequestAmino): _17.GetTxDescriptorRequest;
                    toAmino(_: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorRequestAminoMsg): _17.GetTxDescriptorRequest;
                    toAminoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorRequestProtoMsg): _17.GetTxDescriptorRequest;
                    toProto(message: _17.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorRequest): _17.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorResponse;
                    fromPartial(object: any): _17.GetTxDescriptorResponse;
                    fromAmino(object: _17.GetTxDescriptorResponseAmino): _17.GetTxDescriptorResponse;
                    toAmino(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _17.GetTxDescriptorResponseAminoMsg): _17.GetTxDescriptorResponse;
                    toAminoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _17.GetTxDescriptorResponseProtoMsg): _17.GetTxDescriptorResponse;
                    toProto(message: _17.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _17.GetTxDescriptorResponse): _17.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _17.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServicesDescriptor;
                    fromPartial(object: any): _17.QueryServicesDescriptor;
                    fromAmino(object: _17.QueryServicesDescriptorAmino): _17.QueryServicesDescriptor;
                    toAmino(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServicesDescriptorAminoMsg): _17.QueryServicesDescriptor;
                    toAminoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServicesDescriptorProtoMsg): _17.QueryServicesDescriptor;
                    toProto(message: _17.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServicesDescriptor): _17.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _17.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServiceDescriptor;
                    fromPartial(object: any): _17.QueryServiceDescriptor;
                    fromAmino(object: _17.QueryServiceDescriptorAmino): _17.QueryServiceDescriptor;
                    toAmino(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _17.QueryServiceDescriptorAminoMsg): _17.QueryServiceDescriptor;
                    toAminoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryServiceDescriptorProtoMsg): _17.QueryServiceDescriptor;
                    toProto(message: _17.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryServiceDescriptor): _17.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _17.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryMethodDescriptor;
                    fromPartial(object: any): _17.QueryMethodDescriptor;
                    fromAmino(object: _17.QueryMethodDescriptorAmino): _17.QueryMethodDescriptor;
                    toAmino(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _17.QueryMethodDescriptorAminoMsg): _17.QueryMethodDescriptor;
                    toAminoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _17.QueryMethodDescriptorProtoMsg): _17.QueryMethodDescriptor;
                    toProto(message: _17.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _17.QueryMethodDescriptor): _17.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _18.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Coin;
                fromPartial(object: any): _18.Coin;
                fromAmino(object: _18.CoinAmino): _18.Coin;
                toAmino(message: _18.Coin): _18.CoinAmino;
                fromAminoMsg(object: _18.CoinAminoMsg): _18.Coin;
                toAminoMsg(message: _18.Coin): _18.CoinAminoMsg;
                fromProtoMsg(message: _18.CoinProtoMsg): _18.Coin;
                toProto(message: _18.Coin): Uint8Array;
                toProtoMsg(message: _18.Coin): _18.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _18.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecCoin;
                fromPartial(object: any): _18.DecCoin;
                fromAmino(object: _18.DecCoinAmino): _18.DecCoin;
                toAmino(message: _18.DecCoin): _18.DecCoinAmino;
                fromAminoMsg(object: _18.DecCoinAminoMsg): _18.DecCoin;
                toAminoMsg(message: _18.DecCoin): _18.DecCoinAminoMsg;
                fromProtoMsg(message: _18.DecCoinProtoMsg): _18.DecCoin;
                toProto(message: _18.DecCoin): Uint8Array;
                toProtoMsg(message: _18.DecCoin): _18.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _18.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.IntProto;
                fromPartial(object: any): _18.IntProto;
                fromAmino(object: _18.IntProtoAmino): _18.IntProto;
                toAmino(message: _18.IntProto): _18.IntProtoAmino;
                fromAminoMsg(object: _18.IntProtoAminoMsg): _18.IntProto;
                toAminoMsg(message: _18.IntProto): _18.IntProtoAminoMsg;
                fromProtoMsg(message: _18.IntProtoProtoMsg): _18.IntProto;
                toProto(message: _18.IntProto): Uint8Array;
                toProtoMsg(message: _18.IntProto): _18.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _18.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecProto;
                fromPartial(object: any): _18.DecProto;
                fromAmino(object: _18.DecProtoAmino): _18.DecProto;
                toAmino(message: _18.DecProto): _18.DecProtoAmino;
                fromAminoMsg(object: _18.DecProtoAminoMsg): _18.DecProto;
                toAminoMsg(message: _18.DecProto): _18.DecProtoAminoMsg;
                fromProtoMsg(message: _18.DecProtoProtoMsg): _18.DecProto;
                toProto(message: _18.DecProto): Uint8Array;
                toProtoMsg(message: _18.DecProto): _18.DecProtoProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _19.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PubKey;
                fromPartial(object: any): _19.PubKey;
                fromAmino(object: _19.PubKeyAmino): _19.PubKey;
                toAmino(message: _19.PubKey): _19.PubKeyAmino;
                fromAminoMsg(object: _19.PubKeyAminoMsg): _19.PubKey;
                toAminoMsg(message: _19.PubKey): _19.PubKeyAminoMsg;
                fromProtoMsg(message: _19.PubKeyProtoMsg): _19.PubKey;
                toProto(message: _19.PubKey): Uint8Array;
                toProtoMsg(message: _19.PubKey): _19.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _19.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PrivKey;
                fromPartial(object: any): _19.PrivKey;
                fromAmino(object: _19.PrivKeyAmino): _19.PrivKey;
                toAmino(message: _19.PrivKey): _19.PrivKeyAmino;
                fromAminoMsg(object: _19.PrivKeyAminoMsg): _19.PrivKey;
                toAminoMsg(message: _19.PrivKey): _19.PrivKeyAminoMsg;
                fromProtoMsg(message: _19.PrivKeyProtoMsg): _19.PrivKey;
                toProto(message: _19.PrivKey): Uint8Array;
                toProtoMsg(message: _19.PrivKey): _19.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _20.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.BIP44Params;
                    fromPartial(object: any): _20.BIP44Params;
                    fromAmino(object: _20.BIP44ParamsAmino): _20.BIP44Params;
                    toAmino(message: _20.BIP44Params): _20.BIP44ParamsAmino;
                    fromAminoMsg(object: _20.BIP44ParamsAminoMsg): _20.BIP44Params;
                    toAminoMsg(message: _20.BIP44Params): _20.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _20.BIP44ParamsProtoMsg): _20.BIP44Params;
                    toProto(message: _20.BIP44Params): Uint8Array;
                    toProtoMsg(message: _20.BIP44Params): _20.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _21.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record;
                    fromPartial(object: any): _21.Record;
                    fromAmino(object: _21.RecordAmino): _21.Record;
                    toAmino(message: _21.Record): _21.RecordAmino;
                    fromAminoMsg(object: _21.RecordAminoMsg): _21.Record;
                    toAminoMsg(message: _21.Record): _21.RecordAminoMsg;
                    fromProtoMsg(message: _21.RecordProtoMsg): _21.Record;
                    toProto(message: _21.Record): Uint8Array;
                    toProtoMsg(message: _21.Record): _21.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _21.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Local;
                    fromPartial(object: any): _21.Record_Local;
                    fromAmino(object: _21.Record_LocalAmino): _21.Record_Local;
                    toAmino(message: _21.Record_Local): _21.Record_LocalAmino;
                    fromAminoMsg(object: _21.Record_LocalAminoMsg): _21.Record_Local;
                    toAminoMsg(message: _21.Record_Local): _21.Record_LocalAminoMsg;
                    fromProtoMsg(message: _21.Record_LocalProtoMsg): _21.Record_Local;
                    toProto(message: _21.Record_Local): Uint8Array;
                    toProtoMsg(message: _21.Record_Local): _21.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _21.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Ledger;
                    fromPartial(object: any): _21.Record_Ledger;
                    fromAmino(object: _21.Record_LedgerAmino): _21.Record_Ledger;
                    toAmino(message: _21.Record_Ledger): _21.Record_LedgerAmino;
                    fromAminoMsg(object: _21.Record_LedgerAminoMsg): _21.Record_Ledger;
                    toAminoMsg(message: _21.Record_Ledger): _21.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _21.Record_LedgerProtoMsg): _21.Record_Ledger;
                    toProto(message: _21.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _21.Record_Ledger): _21.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _21.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Multi;
                    fromPartial(_: any): _21.Record_Multi;
                    fromAmino(_: _21.Record_MultiAmino): _21.Record_Multi;
                    toAmino(_: _21.Record_Multi): _21.Record_MultiAmino;
                    fromAminoMsg(object: _21.Record_MultiAminoMsg): _21.Record_Multi;
                    toAminoMsg(message: _21.Record_Multi): _21.Record_MultiAminoMsg;
                    fromProtoMsg(message: _21.Record_MultiProtoMsg): _21.Record_Multi;
                    toProto(message: _21.Record_Multi): Uint8Array;
                    toProtoMsg(message: _21.Record_Multi): _21.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _21.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Offline;
                    fromPartial(_: any): _21.Record_Offline;
                    fromAmino(_: _21.Record_OfflineAmino): _21.Record_Offline;
                    toAmino(_: _21.Record_Offline): _21.Record_OfflineAmino;
                    fromAminoMsg(object: _21.Record_OfflineAminoMsg): _21.Record_Offline;
                    toAminoMsg(message: _21.Record_Offline): _21.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _21.Record_OfflineProtoMsg): _21.Record_Offline;
                    toProto(message: _21.Record_Offline): Uint8Array;
                    toProtoMsg(message: _21.Record_Offline): _21.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _22.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.LegacyAminoPubKey;
                fromPartial(object: any): _22.LegacyAminoPubKey;
                fromAmino(object: _22.LegacyAminoPubKeyAmino): _22.LegacyAminoPubKey;
                toAmino(message: _22.LegacyAminoPubKey): _22.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _22.LegacyAminoPubKeyAminoMsg): _22.LegacyAminoPubKey;
                toAminoMsg(message: _22.LegacyAminoPubKey): _22.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _22.LegacyAminoPubKeyProtoMsg): _22.LegacyAminoPubKey;
                toProto(message: _22.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _22.LegacyAminoPubKey): _22.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _23.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PubKey;
                fromPartial(object: any): _23.PubKey;
                fromAmino(object: _23.PubKeyAmino): _23.PubKey;
                toAmino(message: _23.PubKey): _23.PubKeyAmino;
                fromAminoMsg(object: _23.PubKeyAminoMsg): _23.PubKey;
                toAminoMsg(message: _23.PubKey): _23.PubKeyAminoMsg;
                fromProtoMsg(message: _23.PubKeyProtoMsg): _23.PubKey;
                toProto(message: _23.PubKey): Uint8Array;
                toProtoMsg(message: _23.PubKey): _23.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _23.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PrivKey;
                fromPartial(object: any): _23.PrivKey;
                fromAmino(object: _23.PrivKeyAmino): _23.PrivKey;
                toAmino(message: _23.PrivKey): _23.PrivKeyAmino;
                fromAminoMsg(object: _23.PrivKeyAminoMsg): _23.PrivKey;
                toAminoMsg(message: _23.PrivKey): _23.PrivKeyAminoMsg;
                fromProtoMsg(message: _23.PrivKeyProtoMsg): _23.PrivKey;
                toProto(message: _23.PrivKey): Uint8Array;
                toProtoMsg(message: _23.PrivKey): _23.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _24.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PubKey;
                fromPartial(object: any): _24.PubKey;
                fromAmino(object: _24.PubKeyAmino): _24.PubKey;
                toAmino(message: _24.PubKey): _24.PubKeyAmino;
                fromAminoMsg(object: _24.PubKeyAminoMsg): _24.PubKey;
                toAminoMsg(message: _24.PubKey): _24.PubKeyAminoMsg;
                fromProtoMsg(message: _24.PubKeyProtoMsg): _24.PubKey;
                toProto(message: _24.PubKey): Uint8Array;
                toProtoMsg(message: _24.PubKey): _24.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _24.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PrivKey;
                fromPartial(object: any): _24.PrivKey;
                fromAmino(object: _24.PrivKeyAmino): _24.PrivKey;
                toAmino(message: _24.PrivKey): _24.PrivKeyAmino;
                fromAminoMsg(object: _24.PrivKeyAminoMsg): _24.PrivKey;
                toAminoMsg(message: _24.PrivKey): _24.PrivKeyAminoMsg;
                fromProtoMsg(message: _24.PrivKeyProtoMsg): _24.PrivKey;
                toProto(message: _24.PrivKey): Uint8Array;
                toProtoMsg(message: _24.PrivKey): _24.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _146.MsgClientImpl;
            QueryClientImpl: typeof _137.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _126.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _28.MsgSetWithdrawAddress) => _28.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _28.MsgSetWithdrawAddressAmino) => _28.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _28.MsgWithdrawDelegatorReward) => _28.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _28.MsgWithdrawDelegatorRewardAmino) => _28.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _28.MsgWithdrawValidatorCommission) => _28.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _28.MsgWithdrawValidatorCommissionAmino) => _28.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _28.MsgFundCommunityPool) => _28.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _28.MsgFundCommunityPoolAmino) => _28.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _28.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddress;
                fromPartial(object: any): _28.MsgSetWithdrawAddress;
                fromAmino(object: _28.MsgSetWithdrawAddressAmino): _28.MsgSetWithdrawAddress;
                toAmino(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _28.MsgSetWithdrawAddressAminoMsg): _28.MsgSetWithdrawAddress;
                toAminoMsg(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _28.MsgSetWithdrawAddressProtoMsg): _28.MsgSetWithdrawAddress;
                toProto(message: _28.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _28.MsgSetWithdrawAddress): _28.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _28.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddressResponse;
                fromPartial(_: any): _28.MsgSetWithdrawAddressResponse;
                fromAmino(_: _28.MsgSetWithdrawAddressResponseAmino): _28.MsgSetWithdrawAddressResponse;
                toAmino(_: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _28.MsgSetWithdrawAddressResponseAminoMsg): _28.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _28.MsgSetWithdrawAddressResponseProtoMsg): _28.MsgSetWithdrawAddressResponse;
                toProto(message: _28.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _28.MsgSetWithdrawAddressResponse): _28.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _28.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorReward;
                fromPartial(object: any): _28.MsgWithdrawDelegatorReward;
                fromAmino(object: _28.MsgWithdrawDelegatorRewardAmino): _28.MsgWithdrawDelegatorReward;
                toAmino(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _28.MsgWithdrawDelegatorRewardAminoMsg): _28.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawDelegatorRewardProtoMsg): _28.MsgWithdrawDelegatorReward;
                toProto(message: _28.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawDelegatorReward): _28.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _28.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: any): _28.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _28.MsgWithdrawDelegatorRewardResponseAmino): _28.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _28.MsgWithdrawDelegatorRewardResponseAminoMsg): _28.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawDelegatorRewardResponseProtoMsg): _28.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _28.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawDelegatorRewardResponse): _28.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _28.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommission;
                fromPartial(object: any): _28.MsgWithdrawValidatorCommission;
                fromAmino(object: _28.MsgWithdrawValidatorCommissionAmino): _28.MsgWithdrawValidatorCommission;
                toAmino(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _28.MsgWithdrawValidatorCommissionAminoMsg): _28.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawValidatorCommissionProtoMsg): _28.MsgWithdrawValidatorCommission;
                toProto(message: _28.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawValidatorCommission): _28.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _28.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: any): _28.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _28.MsgWithdrawValidatorCommissionResponseAmino): _28.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _28.MsgWithdrawValidatorCommissionResponseAminoMsg): _28.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _28.MsgWithdrawValidatorCommissionResponseProtoMsg): _28.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _28.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _28.MsgWithdrawValidatorCommissionResponse): _28.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _28.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPool;
                fromPartial(object: any): _28.MsgFundCommunityPool;
                fromAmino(object: _28.MsgFundCommunityPoolAmino): _28.MsgFundCommunityPool;
                toAmino(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _28.MsgFundCommunityPoolAminoMsg): _28.MsgFundCommunityPool;
                toAminoMsg(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _28.MsgFundCommunityPoolProtoMsg): _28.MsgFundCommunityPool;
                toProto(message: _28.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _28.MsgFundCommunityPool): _28.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _28.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPoolResponse;
                fromPartial(_: any): _28.MsgFundCommunityPoolResponse;
                fromAmino(_: _28.MsgFundCommunityPoolResponseAmino): _28.MsgFundCommunityPoolResponse;
                toAmino(_: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _28.MsgFundCommunityPoolResponseAminoMsg): _28.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _28.MsgFundCommunityPoolResponseProtoMsg): _28.MsgFundCommunityPoolResponse;
                toProto(message: _28.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _28.MsgFundCommunityPoolResponse): _28.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _27.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsRequest;
                fromPartial(_: any): _27.QueryParamsRequest;
                fromAmino(_: _27.QueryParamsRequestAmino): _27.QueryParamsRequest;
                toAmino(_: _27.QueryParamsRequest): _27.QueryParamsRequestAmino;
                fromAminoMsg(object: _27.QueryParamsRequestAminoMsg): _27.QueryParamsRequest;
                toAminoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryParamsRequestProtoMsg): _27.QueryParamsRequest;
                toProto(message: _27.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryParamsRequest): _27.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _27.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsResponse;
                fromPartial(object: any): _27.QueryParamsResponse;
                fromAmino(object: _27.QueryParamsResponseAmino): _27.QueryParamsResponse;
                toAmino(message: _27.QueryParamsResponse): _27.QueryParamsResponseAmino;
                fromAminoMsg(object: _27.QueryParamsResponseAminoMsg): _27.QueryParamsResponse;
                toAminoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryParamsResponseProtoMsg): _27.QueryParamsResponse;
                toProto(message: _27.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryParamsResponse): _27.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _27.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: any): _27.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _27.QueryValidatorOutstandingRewardsRequestAmino): _27.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorOutstandingRewardsRequestAminoMsg): _27.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorOutstandingRewardsRequestProtoMsg): _27.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _27.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorOutstandingRewardsRequest): _27.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _27.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: any): _27.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _27.QueryValidatorOutstandingRewardsResponseAmino): _27.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorOutstandingRewardsResponseAminoMsg): _27.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorOutstandingRewardsResponseProtoMsg): _27.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _27.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorOutstandingRewardsResponse): _27.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _27.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionRequest;
                fromPartial(object: any): _27.QueryValidatorCommissionRequest;
                fromAmino(object: _27.QueryValidatorCommissionRequestAmino): _27.QueryValidatorCommissionRequest;
                toAmino(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorCommissionRequestAminoMsg): _27.QueryValidatorCommissionRequest;
                toAminoMsg(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorCommissionRequestProtoMsg): _27.QueryValidatorCommissionRequest;
                toProto(message: _27.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorCommissionRequest): _27.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _27.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionResponse;
                fromPartial(object: any): _27.QueryValidatorCommissionResponse;
                fromAmino(object: _27.QueryValidatorCommissionResponseAmino): _27.QueryValidatorCommissionResponse;
                toAmino(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorCommissionResponseAminoMsg): _27.QueryValidatorCommissionResponse;
                toAminoMsg(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorCommissionResponseProtoMsg): _27.QueryValidatorCommissionResponse;
                toProto(message: _27.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorCommissionResponse): _27.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _27.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesRequest;
                fromPartial(object: any): _27.QueryValidatorSlashesRequest;
                fromAmino(object: _27.QueryValidatorSlashesRequestAmino): _27.QueryValidatorSlashesRequest;
                toAmino(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _27.QueryValidatorSlashesRequestAminoMsg): _27.QueryValidatorSlashesRequest;
                toAminoMsg(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorSlashesRequestProtoMsg): _27.QueryValidatorSlashesRequest;
                toProto(message: _27.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorSlashesRequest): _27.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _27.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesResponse;
                fromPartial(object: any): _27.QueryValidatorSlashesResponse;
                fromAmino(object: _27.QueryValidatorSlashesResponseAmino): _27.QueryValidatorSlashesResponse;
                toAmino(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _27.QueryValidatorSlashesResponseAminoMsg): _27.QueryValidatorSlashesResponse;
                toAminoMsg(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _27.QueryValidatorSlashesResponseProtoMsg): _27.QueryValidatorSlashesResponse;
                toProto(message: _27.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _27.QueryValidatorSlashesResponse): _27.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _27.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsRequest;
                fromPartial(object: any): _27.QueryDelegationRewardsRequest;
                fromAmino(object: _27.QueryDelegationRewardsRequestAmino): _27.QueryDelegationRewardsRequest;
                toAmino(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegationRewardsRequestAminoMsg): _27.QueryDelegationRewardsRequest;
                toAminoMsg(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationRewardsRequestProtoMsg): _27.QueryDelegationRewardsRequest;
                toProto(message: _27.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationRewardsRequest): _27.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _27.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsResponse;
                fromPartial(object: any): _27.QueryDelegationRewardsResponse;
                fromAmino(object: _27.QueryDelegationRewardsResponseAmino): _27.QueryDelegationRewardsResponse;
                toAmino(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegationRewardsResponseAminoMsg): _27.QueryDelegationRewardsResponse;
                toAminoMsg(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationRewardsResponseProtoMsg): _27.QueryDelegationRewardsResponse;
                toProto(message: _27.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationRewardsResponse): _27.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _27.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsRequest;
                fromPartial(object: any): _27.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _27.QueryDelegationTotalRewardsRequestAmino): _27.QueryDelegationTotalRewardsRequest;
                toAmino(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegationTotalRewardsRequestAminoMsg): _27.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationTotalRewardsRequestProtoMsg): _27.QueryDelegationTotalRewardsRequest;
                toProto(message: _27.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationTotalRewardsRequest): _27.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _27.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsResponse;
                fromPartial(object: any): _27.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _27.QueryDelegationTotalRewardsResponseAmino): _27.QueryDelegationTotalRewardsResponse;
                toAmino(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegationTotalRewardsResponseAminoMsg): _27.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegationTotalRewardsResponseProtoMsg): _27.QueryDelegationTotalRewardsResponse;
                toProto(message: _27.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegationTotalRewardsResponse): _27.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _27.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _27.QueryDelegatorValidatorsRequest;
                fromAmino(object: _27.QueryDelegatorValidatorsRequestAmino): _27.QueryDelegatorValidatorsRequest;
                toAmino(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _27.QueryDelegatorValidatorsRequestAminoMsg): _27.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorValidatorsRequestProtoMsg): _27.QueryDelegatorValidatorsRequest;
                toProto(message: _27.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorValidatorsRequest): _27.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _27.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _27.QueryDelegatorValidatorsResponse;
                fromAmino(object: _27.QueryDelegatorValidatorsResponseAmino): _27.QueryDelegatorValidatorsResponse;
                toAmino(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _27.QueryDelegatorValidatorsResponseAminoMsg): _27.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorValidatorsResponseProtoMsg): _27.QueryDelegatorValidatorsResponse;
                toProto(message: _27.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorValidatorsResponse): _27.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _27.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: any): _27.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _27.QueryDelegatorWithdrawAddressRequestAmino): _27.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _27.QueryDelegatorWithdrawAddressRequestAminoMsg): _27.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorWithdrawAddressRequestProtoMsg): _27.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _27.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorWithdrawAddressRequest): _27.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _27.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: any): _27.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _27.QueryDelegatorWithdrawAddressResponseAmino): _27.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _27.QueryDelegatorWithdrawAddressResponseAminoMsg): _27.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _27.QueryDelegatorWithdrawAddressResponseProtoMsg): _27.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _27.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _27.QueryDelegatorWithdrawAddressResponse): _27.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _27.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolRequest;
                fromPartial(_: any): _27.QueryCommunityPoolRequest;
                fromAmino(_: _27.QueryCommunityPoolRequestAmino): _27.QueryCommunityPoolRequest;
                toAmino(_: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _27.QueryCommunityPoolRequestAminoMsg): _27.QueryCommunityPoolRequest;
                toAminoMsg(message: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _27.QueryCommunityPoolRequestProtoMsg): _27.QueryCommunityPoolRequest;
                toProto(message: _27.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _27.QueryCommunityPoolRequest): _27.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _27.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolResponse;
                fromPartial(object: any): _27.QueryCommunityPoolResponse;
                fromAmino(object: _27.QueryCommunityPoolResponseAmino): _27.QueryCommunityPoolResponse;
                toAmino(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _27.QueryCommunityPoolResponseAminoMsg): _27.QueryCommunityPoolResponse;
                toAminoMsg(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _27.QueryCommunityPoolResponseProtoMsg): _27.QueryCommunityPoolResponse;
                toProto(message: _27.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _27.QueryCommunityPoolResponse): _27.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _26.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorWithdrawInfo;
                fromPartial(object: any): _26.DelegatorWithdrawInfo;
                fromAmino(object: _26.DelegatorWithdrawInfoAmino): _26.DelegatorWithdrawInfo;
                toAmino(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _26.DelegatorWithdrawInfoAminoMsg): _26.DelegatorWithdrawInfo;
                toAminoMsg(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _26.DelegatorWithdrawInfoProtoMsg): _26.DelegatorWithdrawInfo;
                toProto(message: _26.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _26.DelegatorWithdrawInfo): _26.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _26.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorOutstandingRewardsRecord;
                fromPartial(object: any): _26.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _26.ValidatorOutstandingRewardsRecordAmino): _26.ValidatorOutstandingRewardsRecord;
                toAmino(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorOutstandingRewardsRecordAminoMsg): _26.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorOutstandingRewardsRecordProtoMsg): _26.ValidatorOutstandingRewardsRecord;
                toProto(message: _26.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorOutstandingRewardsRecord): _26.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _26.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: any): _26.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _26.ValidatorAccumulatedCommissionRecordAmino): _26.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _26.ValidatorAccumulatedCommissionRecordAminoMsg): _26.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorAccumulatedCommissionRecordProtoMsg): _26.ValidatorAccumulatedCommissionRecord;
                toProto(message: _26.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorAccumulatedCommissionRecord): _26.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _26.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorHistoricalRewardsRecord;
                fromPartial(object: any): _26.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _26.ValidatorHistoricalRewardsRecordAmino): _26.ValidatorHistoricalRewardsRecord;
                toAmino(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorHistoricalRewardsRecordAminoMsg): _26.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorHistoricalRewardsRecordProtoMsg): _26.ValidatorHistoricalRewardsRecord;
                toProto(message: _26.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorHistoricalRewardsRecord): _26.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _26.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorCurrentRewardsRecord;
                fromPartial(object: any): _26.ValidatorCurrentRewardsRecord;
                fromAmino(object: _26.ValidatorCurrentRewardsRecordAmino): _26.ValidatorCurrentRewardsRecord;
                toAmino(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _26.ValidatorCurrentRewardsRecordAminoMsg): _26.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorCurrentRewardsRecordProtoMsg): _26.ValidatorCurrentRewardsRecord;
                toProto(message: _26.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorCurrentRewardsRecord): _26.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _26.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorStartingInfoRecord;
                fromPartial(object: any): _26.DelegatorStartingInfoRecord;
                fromAmino(object: _26.DelegatorStartingInfoRecordAmino): _26.DelegatorStartingInfoRecord;
                toAmino(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _26.DelegatorStartingInfoRecordAminoMsg): _26.DelegatorStartingInfoRecord;
                toAminoMsg(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _26.DelegatorStartingInfoRecordProtoMsg): _26.DelegatorStartingInfoRecord;
                toProto(message: _26.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _26.DelegatorStartingInfoRecord): _26.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _26.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorSlashEventRecord;
                fromPartial(object: any): _26.ValidatorSlashEventRecord;
                fromAmino(object: _26.ValidatorSlashEventRecordAmino): _26.ValidatorSlashEventRecord;
                toAmino(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _26.ValidatorSlashEventRecordAminoMsg): _26.ValidatorSlashEventRecord;
                toAminoMsg(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _26.ValidatorSlashEventRecordProtoMsg): _26.ValidatorSlashEventRecord;
                toProto(message: _26.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _26.ValidatorSlashEventRecord): _26.ValidatorSlashEventRecordProtoMsg;
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
            Params: {
                encode(message: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Params;
                fromPartial(object: any): _25.Params;
                fromAmino(object: _25.ParamsAmino): _25.Params;
                toAmino(message: _25.Params): _25.ParamsAmino;
                fromAminoMsg(object: _25.ParamsAminoMsg): _25.Params;
                toAminoMsg(message: _25.Params): _25.ParamsAminoMsg;
                fromProtoMsg(message: _25.ParamsProtoMsg): _25.Params;
                toProto(message: _25.Params): Uint8Array;
                toProtoMsg(message: _25.Params): _25.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _25.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorHistoricalRewards;
                fromPartial(object: any): _25.ValidatorHistoricalRewards;
                fromAmino(object: _25.ValidatorHistoricalRewardsAmino): _25.ValidatorHistoricalRewards;
                toAmino(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _25.ValidatorHistoricalRewardsAminoMsg): _25.ValidatorHistoricalRewards;
                toAminoMsg(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorHistoricalRewardsProtoMsg): _25.ValidatorHistoricalRewards;
                toProto(message: _25.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorHistoricalRewards): _25.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _25.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorCurrentRewards;
                fromPartial(object: any): _25.ValidatorCurrentRewards;
                fromAmino(object: _25.ValidatorCurrentRewardsAmino): _25.ValidatorCurrentRewards;
                toAmino(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _25.ValidatorCurrentRewardsAminoMsg): _25.ValidatorCurrentRewards;
                toAminoMsg(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorCurrentRewardsProtoMsg): _25.ValidatorCurrentRewards;
                toProto(message: _25.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorCurrentRewards): _25.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _25.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorAccumulatedCommission;
                fromPartial(object: any): _25.ValidatorAccumulatedCommission;
                fromAmino(object: _25.ValidatorAccumulatedCommissionAmino): _25.ValidatorAccumulatedCommission;
                toAmino(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _25.ValidatorAccumulatedCommissionAminoMsg): _25.ValidatorAccumulatedCommission;
                toAminoMsg(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _25.ValidatorAccumulatedCommissionProtoMsg): _25.ValidatorAccumulatedCommission;
                toProto(message: _25.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _25.ValidatorAccumulatedCommission): _25.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _25.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorOutstandingRewards;
                fromPartial(object: any): _25.ValidatorOutstandingRewards;
                fromAmino(object: _25.ValidatorOutstandingRewardsAmino): _25.ValidatorOutstandingRewards;
                toAmino(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _25.ValidatorOutstandingRewardsAminoMsg): _25.ValidatorOutstandingRewards;
                toAminoMsg(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _25.ValidatorOutstandingRewardsProtoMsg): _25.ValidatorOutstandingRewards;
                toProto(message: _25.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _25.ValidatorOutstandingRewards): _25.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _25.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvent;
                fromPartial(object: any): _25.ValidatorSlashEvent;
                fromAmino(object: _25.ValidatorSlashEventAmino): _25.ValidatorSlashEvent;
                toAmino(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventAminoMsg): _25.ValidatorSlashEvent;
                toAminoMsg(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventProtoMsg): _25.ValidatorSlashEvent;
                toProto(message: _25.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEvent): _25.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _25.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvents;
                fromPartial(object: any): _25.ValidatorSlashEvents;
                fromAmino(object: _25.ValidatorSlashEventsAmino): _25.ValidatorSlashEvents;
                toAmino(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _25.ValidatorSlashEventsAminoMsg): _25.ValidatorSlashEvents;
                toAminoMsg(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _25.ValidatorSlashEventsProtoMsg): _25.ValidatorSlashEvents;
                toProto(message: _25.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _25.ValidatorSlashEvents): _25.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _25.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.FeePool;
                fromPartial(object: any): _25.FeePool;
                fromAmino(object: _25.FeePoolAmino): _25.FeePool;
                toAmino(message: _25.FeePool): _25.FeePoolAmino;
                fromAminoMsg(object: _25.FeePoolAminoMsg): _25.FeePool;
                toAminoMsg(message: _25.FeePool): _25.FeePoolAminoMsg;
                fromProtoMsg(message: _25.FeePoolProtoMsg): _25.FeePool;
                toProto(message: _25.FeePool): Uint8Array;
                toProtoMsg(message: _25.FeePool): _25.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _25.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposal;
                fromPartial(object: any): _25.CommunityPoolSpendProposal;
                fromAmino(object: _25.CommunityPoolSpendProposalAmino): _25.CommunityPoolSpendProposal;
                toAmino(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _25.CommunityPoolSpendProposalAminoMsg): _25.CommunityPoolSpendProposal;
                toAminoMsg(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _25.CommunityPoolSpendProposalProtoMsg): _25.CommunityPoolSpendProposal;
                toProto(message: _25.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _25.CommunityPoolSpendProposal): _25.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _25.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegatorStartingInfo;
                fromPartial(object: any): _25.DelegatorStartingInfo;
                fromAmino(object: _25.DelegatorStartingInfoAmino): _25.DelegatorStartingInfo;
                toAmino(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _25.DelegatorStartingInfoAminoMsg): _25.DelegatorStartingInfo;
                toAminoMsg(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _25.DelegatorStartingInfoProtoMsg): _25.DelegatorStartingInfo;
                toProto(message: _25.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _25.DelegatorStartingInfo): _25.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _25.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegationDelegatorReward;
                fromPartial(object: any): _25.DelegationDelegatorReward;
                fromAmino(object: _25.DelegationDelegatorRewardAmino): _25.DelegationDelegatorReward;
                toAmino(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _25.DelegationDelegatorRewardAminoMsg): _25.DelegationDelegatorReward;
                toAminoMsg(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _25.DelegationDelegatorRewardProtoMsg): _25.DelegationDelegatorReward;
                toProto(message: _25.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _25.DelegationDelegatorReward): _25.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _25.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: any): _25.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _25.CommunityPoolSpendProposalWithDepositAmino): _25.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _25.CommunityPoolSpendProposalWithDepositAminoMsg): _25.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _25.CommunityPoolSpendProposalWithDepositProtoMsg): _25.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _25.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _25.CommunityPoolSpendProposalWithDeposit): _25.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _147.MsgClientImpl;
            QueryClientImpl: typeof _138.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _127.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _32.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _32.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _32.MsgExecLegacyContent;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _32.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _32.MsgExecLegacyContent;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _32.MsgSubmitProposal) => _32.MsgSubmitProposalAmino;
                    fromAmino: (object: _32.MsgSubmitProposalAmino) => _32.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _32.MsgExecLegacyContent) => _32.MsgExecLegacyContentAmino;
                    fromAmino: (object: _32.MsgExecLegacyContentAmino) => _32.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVote) => _32.MsgVoteAmino;
                    fromAmino: (object: _32.MsgVoteAmino) => _32.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _32.MsgVoteWeighted) => _32.MsgVoteWeightedAmino;
                    fromAmino: (object: _32.MsgVoteWeightedAmino) => _32.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _32.MsgDeposit) => _32.MsgDepositAmino;
                    fromAmino: (object: _32.MsgDepositAmino) => _32.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _32.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposal;
                fromPartial(object: any): _32.MsgSubmitProposal;
                fromAmino(object: _32.MsgSubmitProposalAmino): _32.MsgSubmitProposal;
                toAmino(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalAmino;
                fromAminoMsg(object: _32.MsgSubmitProposalAminoMsg): _32.MsgSubmitProposal;
                toAminoMsg(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _32.MsgSubmitProposalProtoMsg): _32.MsgSubmitProposal;
                toProto(message: _32.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitProposal): _32.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _32.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposalResponse;
                fromPartial(object: any): _32.MsgSubmitProposalResponse;
                fromAmino(object: _32.MsgSubmitProposalResponseAmino): _32.MsgSubmitProposalResponse;
                toAmino(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _32.MsgSubmitProposalResponseAminoMsg): _32.MsgSubmitProposalResponse;
                toAminoMsg(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _32.MsgSubmitProposalResponseProtoMsg): _32.MsgSubmitProposalResponse;
                toProto(message: _32.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _32.MsgSubmitProposalResponse): _32.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _32.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgExecLegacyContent;
                fromPartial(object: any): _32.MsgExecLegacyContent;
                fromAmino(object: _32.MsgExecLegacyContentAmino): _32.MsgExecLegacyContent;
                toAmino(message: _32.MsgExecLegacyContent): _32.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _32.MsgExecLegacyContentAminoMsg): _32.MsgExecLegacyContent;
                toAminoMsg(message: _32.MsgExecLegacyContent): _32.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _32.MsgExecLegacyContentProtoMsg): _32.MsgExecLegacyContent;
                toProto(message: _32.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _32.MsgExecLegacyContent): _32.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _32.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgExecLegacyContentResponse;
                fromPartial(_: any): _32.MsgExecLegacyContentResponse;
                fromAmino(_: _32.MsgExecLegacyContentResponseAmino): _32.MsgExecLegacyContentResponse;
                toAmino(_: _32.MsgExecLegacyContentResponse): _32.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _32.MsgExecLegacyContentResponseAminoMsg): _32.MsgExecLegacyContentResponse;
                toAminoMsg(message: _32.MsgExecLegacyContentResponse): _32.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _32.MsgExecLegacyContentResponseProtoMsg): _32.MsgExecLegacyContentResponse;
                toProto(message: _32.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _32.MsgExecLegacyContentResponse): _32.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _32.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVote;
                fromPartial(object: any): _32.MsgVote;
                fromAmino(object: _32.MsgVoteAmino): _32.MsgVote;
                toAmino(message: _32.MsgVote): _32.MsgVoteAmino;
                fromAminoMsg(object: _32.MsgVoteAminoMsg): _32.MsgVote;
                toAminoMsg(message: _32.MsgVote): _32.MsgVoteAminoMsg;
                fromProtoMsg(message: _32.MsgVoteProtoMsg): _32.MsgVote;
                toProto(message: _32.MsgVote): Uint8Array;
                toProtoMsg(message: _32.MsgVote): _32.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _32.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteResponse;
                fromPartial(_: any): _32.MsgVoteResponse;
                fromAmino(_: _32.MsgVoteResponseAmino): _32.MsgVoteResponse;
                toAmino(_: _32.MsgVoteResponse): _32.MsgVoteResponseAmino;
                fromAminoMsg(object: _32.MsgVoteResponseAminoMsg): _32.MsgVoteResponse;
                toAminoMsg(message: _32.MsgVoteResponse): _32.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVoteResponseProtoMsg): _32.MsgVoteResponse;
                toProto(message: _32.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVoteResponse): _32.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _32.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeighted;
                fromPartial(object: any): _32.MsgVoteWeighted;
                fromAmino(object: _32.MsgVoteWeightedAmino): _32.MsgVoteWeighted;
                toAmino(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedAmino;
                fromAminoMsg(object: _32.MsgVoteWeightedAminoMsg): _32.MsgVoteWeighted;
                toAminoMsg(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _32.MsgVoteWeightedProtoMsg): _32.MsgVoteWeighted;
                toProto(message: _32.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _32.MsgVoteWeighted): _32.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _32.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeightedResponse;
                fromPartial(_: any): _32.MsgVoteWeightedResponse;
                fromAmino(_: _32.MsgVoteWeightedResponseAmino): _32.MsgVoteWeightedResponse;
                toAmino(_: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _32.MsgVoteWeightedResponseAminoMsg): _32.MsgVoteWeightedResponse;
                toAminoMsg(message: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _32.MsgVoteWeightedResponseProtoMsg): _32.MsgVoteWeightedResponse;
                toProto(message: _32.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _32.MsgVoteWeightedResponse): _32.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _32.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDeposit;
                fromPartial(object: any): _32.MsgDeposit;
                fromAmino(object: _32.MsgDepositAmino): _32.MsgDeposit;
                toAmino(message: _32.MsgDeposit): _32.MsgDepositAmino;
                fromAminoMsg(object: _32.MsgDepositAminoMsg): _32.MsgDeposit;
                toAminoMsg(message: _32.MsgDeposit): _32.MsgDepositAminoMsg;
                fromProtoMsg(message: _32.MsgDepositProtoMsg): _32.MsgDeposit;
                toProto(message: _32.MsgDeposit): Uint8Array;
                toProtoMsg(message: _32.MsgDeposit): _32.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _32.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDepositResponse;
                fromPartial(_: any): _32.MsgDepositResponse;
                fromAmino(_: _32.MsgDepositResponseAmino): _32.MsgDepositResponse;
                toAmino(_: _32.MsgDepositResponse): _32.MsgDepositResponseAmino;
                fromAminoMsg(object: _32.MsgDepositResponseAminoMsg): _32.MsgDepositResponse;
                toAminoMsg(message: _32.MsgDepositResponse): _32.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _32.MsgDepositResponseProtoMsg): _32.MsgDepositResponse;
                toProto(message: _32.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _32.MsgDepositResponse): _32.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _34.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _31.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalRequest;
                fromPartial(object: any): _31.QueryProposalRequest;
                fromAmino(object: _31.QueryProposalRequestAmino): _31.QueryProposalRequest;
                toAmino(message: _31.QueryProposalRequest): _31.QueryProposalRequestAmino;
                fromAminoMsg(object: _31.QueryProposalRequestAminoMsg): _31.QueryProposalRequest;
                toAminoMsg(message: _31.QueryProposalRequest): _31.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _31.QueryProposalRequestProtoMsg): _31.QueryProposalRequest;
                toProto(message: _31.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _31.QueryProposalRequest): _31.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _31.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalResponse;
                fromPartial(object: any): _31.QueryProposalResponse;
                fromAmino(object: _31.QueryProposalResponseAmino): _31.QueryProposalResponse;
                toAmino(message: _31.QueryProposalResponse): _31.QueryProposalResponseAmino;
                fromAminoMsg(object: _31.QueryProposalResponseAminoMsg): _31.QueryProposalResponse;
                toAminoMsg(message: _31.QueryProposalResponse): _31.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _31.QueryProposalResponseProtoMsg): _31.QueryProposalResponse;
                toProto(message: _31.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _31.QueryProposalResponse): _31.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _31.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsRequest;
                fromPartial(object: any): _31.QueryProposalsRequest;
                fromAmino(object: _31.QueryProposalsRequestAmino): _31.QueryProposalsRequest;
                toAmino(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestAmino;
                fromAminoMsg(object: _31.QueryProposalsRequestAminoMsg): _31.QueryProposalsRequest;
                toAminoMsg(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryProposalsRequestProtoMsg): _31.QueryProposalsRequest;
                toProto(message: _31.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryProposalsRequest): _31.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _31.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsResponse;
                fromPartial(object: any): _31.QueryProposalsResponse;
                fromAmino(object: _31.QueryProposalsResponseAmino): _31.QueryProposalsResponse;
                toAmino(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseAmino;
                fromAminoMsg(object: _31.QueryProposalsResponseAminoMsg): _31.QueryProposalsResponse;
                toAminoMsg(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryProposalsResponseProtoMsg): _31.QueryProposalsResponse;
                toProto(message: _31.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryProposalsResponse): _31.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _31.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteRequest;
                fromPartial(object: any): _31.QueryVoteRequest;
                fromAmino(object: _31.QueryVoteRequestAmino): _31.QueryVoteRequest;
                toAmino(message: _31.QueryVoteRequest): _31.QueryVoteRequestAmino;
                fromAminoMsg(object: _31.QueryVoteRequestAminoMsg): _31.QueryVoteRequest;
                toAminoMsg(message: _31.QueryVoteRequest): _31.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _31.QueryVoteRequestProtoMsg): _31.QueryVoteRequest;
                toProto(message: _31.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _31.QueryVoteRequest): _31.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _31.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteResponse;
                fromPartial(object: any): _31.QueryVoteResponse;
                fromAmino(object: _31.QueryVoteResponseAmino): _31.QueryVoteResponse;
                toAmino(message: _31.QueryVoteResponse): _31.QueryVoteResponseAmino;
                fromAminoMsg(object: _31.QueryVoteResponseAminoMsg): _31.QueryVoteResponse;
                toAminoMsg(message: _31.QueryVoteResponse): _31.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _31.QueryVoteResponseProtoMsg): _31.QueryVoteResponse;
                toProto(message: _31.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _31.QueryVoteResponse): _31.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _31.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesRequest;
                fromPartial(object: any): _31.QueryVotesRequest;
                fromAmino(object: _31.QueryVotesRequestAmino): _31.QueryVotesRequest;
                toAmino(message: _31.QueryVotesRequest): _31.QueryVotesRequestAmino;
                fromAminoMsg(object: _31.QueryVotesRequestAminoMsg): _31.QueryVotesRequest;
                toAminoMsg(message: _31.QueryVotesRequest): _31.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _31.QueryVotesRequestProtoMsg): _31.QueryVotesRequest;
                toProto(message: _31.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _31.QueryVotesRequest): _31.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _31.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesResponse;
                fromPartial(object: any): _31.QueryVotesResponse;
                fromAmino(object: _31.QueryVotesResponseAmino): _31.QueryVotesResponse;
                toAmino(message: _31.QueryVotesResponse): _31.QueryVotesResponseAmino;
                fromAminoMsg(object: _31.QueryVotesResponseAminoMsg): _31.QueryVotesResponse;
                toAminoMsg(message: _31.QueryVotesResponse): _31.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _31.QueryVotesResponseProtoMsg): _31.QueryVotesResponse;
                toProto(message: _31.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _31.QueryVotesResponse): _31.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _31.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsRequest;
                fromPartial(object: any): _31.QueryParamsRequest;
                fromAmino(object: _31.QueryParamsRequestAmino): _31.QueryParamsRequest;
                toAmino(message: _31.QueryParamsRequest): _31.QueryParamsRequestAmino;
                fromAminoMsg(object: _31.QueryParamsRequestAminoMsg): _31.QueryParamsRequest;
                toAminoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryParamsRequestProtoMsg): _31.QueryParamsRequest;
                toProto(message: _31.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryParamsRequest): _31.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _31.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsResponse;
                fromPartial(object: any): _31.QueryParamsResponse;
                fromAmino(object: _31.QueryParamsResponseAmino): _31.QueryParamsResponse;
                toAmino(message: _31.QueryParamsResponse): _31.QueryParamsResponseAmino;
                fromAminoMsg(object: _31.QueryParamsResponseAminoMsg): _31.QueryParamsResponse;
                toAminoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryParamsResponseProtoMsg): _31.QueryParamsResponse;
                toProto(message: _31.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryParamsResponse): _31.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _31.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositRequest;
                fromPartial(object: any): _31.QueryDepositRequest;
                fromAmino(object: _31.QueryDepositRequestAmino): _31.QueryDepositRequest;
                toAmino(message: _31.QueryDepositRequest): _31.QueryDepositRequestAmino;
                fromAminoMsg(object: _31.QueryDepositRequestAminoMsg): _31.QueryDepositRequest;
                toAminoMsg(message: _31.QueryDepositRequest): _31.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDepositRequestProtoMsg): _31.QueryDepositRequest;
                toProto(message: _31.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDepositRequest): _31.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _31.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositResponse;
                fromPartial(object: any): _31.QueryDepositResponse;
                fromAmino(object: _31.QueryDepositResponseAmino): _31.QueryDepositResponse;
                toAmino(message: _31.QueryDepositResponse): _31.QueryDepositResponseAmino;
                fromAminoMsg(object: _31.QueryDepositResponseAminoMsg): _31.QueryDepositResponse;
                toAminoMsg(message: _31.QueryDepositResponse): _31.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDepositResponseProtoMsg): _31.QueryDepositResponse;
                toProto(message: _31.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDepositResponse): _31.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _31.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsRequest;
                fromPartial(object: any): _31.QueryDepositsRequest;
                fromAmino(object: _31.QueryDepositsRequestAmino): _31.QueryDepositsRequest;
                toAmino(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestAmino;
                fromAminoMsg(object: _31.QueryDepositsRequestAminoMsg): _31.QueryDepositsRequest;
                toAminoMsg(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _31.QueryDepositsRequestProtoMsg): _31.QueryDepositsRequest;
                toProto(message: _31.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _31.QueryDepositsRequest): _31.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _31.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsResponse;
                fromPartial(object: any): _31.QueryDepositsResponse;
                fromAmino(object: _31.QueryDepositsResponseAmino): _31.QueryDepositsResponse;
                toAmino(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseAmino;
                fromAminoMsg(object: _31.QueryDepositsResponseAminoMsg): _31.QueryDepositsResponse;
                toAminoMsg(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _31.QueryDepositsResponseProtoMsg): _31.QueryDepositsResponse;
                toProto(message: _31.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _31.QueryDepositsResponse): _31.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _31.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultRequest;
                fromPartial(object: any): _31.QueryTallyResultRequest;
                fromAmino(object: _31.QueryTallyResultRequestAmino): _31.QueryTallyResultRequest;
                toAmino(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _31.QueryTallyResultRequestAminoMsg): _31.QueryTallyResultRequest;
                toAminoMsg(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _31.QueryTallyResultRequestProtoMsg): _31.QueryTallyResultRequest;
                toProto(message: _31.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _31.QueryTallyResultRequest): _31.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _31.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultResponse;
                fromPartial(object: any): _31.QueryTallyResultResponse;
                fromAmino(object: _31.QueryTallyResultResponseAmino): _31.QueryTallyResultResponse;
                toAmino(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _31.QueryTallyResultResponseAminoMsg): _31.QueryTallyResultResponse;
                toAminoMsg(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _31.QueryTallyResultResponseProtoMsg): _31.QueryTallyResultResponse;
                toProto(message: _31.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _31.QueryTallyResultResponse): _31.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _30.VoteOption;
            voteOptionToJSON(object: _30.VoteOption): string;
            proposalStatusFromJSON(object: any): _30.ProposalStatus;
            proposalStatusToJSON(object: _30.ProposalStatus): string;
            VoteOption: typeof _30.VoteOption;
            VoteOptionSDKType: typeof _30.VoteOption;
            VoteOptionAmino: typeof _30.VoteOption;
            ProposalStatus: typeof _30.ProposalStatus;
            ProposalStatusSDKType: typeof _30.ProposalStatus;
            ProposalStatusAmino: typeof _30.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _30.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.WeightedVoteOption;
                fromPartial(object: any): _30.WeightedVoteOption;
                fromAmino(object: _30.WeightedVoteOptionAmino): _30.WeightedVoteOption;
                toAmino(message: _30.WeightedVoteOption): _30.WeightedVoteOptionAmino;
                fromAminoMsg(object: _30.WeightedVoteOptionAminoMsg): _30.WeightedVoteOption;
                toAminoMsg(message: _30.WeightedVoteOption): _30.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _30.WeightedVoteOptionProtoMsg): _30.WeightedVoteOption;
                toProto(message: _30.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _30.WeightedVoteOption): _30.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _30.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Deposit;
                fromPartial(object: any): _30.Deposit;
                fromAmino(object: _30.DepositAmino): _30.Deposit;
                toAmino(message: _30.Deposit): _30.DepositAmino;
                fromAminoMsg(object: _30.DepositAminoMsg): _30.Deposit;
                toAminoMsg(message: _30.Deposit): _30.DepositAminoMsg;
                fromProtoMsg(message: _30.DepositProtoMsg): _30.Deposit;
                toProto(message: _30.Deposit): Uint8Array;
                toProtoMsg(message: _30.Deposit): _30.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _30.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Proposal;
                fromPartial(object: any): _30.Proposal;
                fromAmino(object: _30.ProposalAmino): _30.Proposal;
                toAmino(message: _30.Proposal): _30.ProposalAmino;
                fromAminoMsg(object: _30.ProposalAminoMsg): _30.Proposal;
                toAminoMsg(message: _30.Proposal): _30.ProposalAminoMsg;
                fromProtoMsg(message: _30.ProposalProtoMsg): _30.Proposal;
                toProto(message: _30.Proposal): Uint8Array;
                toProtoMsg(message: _30.Proposal): _30.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _30.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyResult;
                fromPartial(object: any): _30.TallyResult;
                fromAmino(object: _30.TallyResultAmino): _30.TallyResult;
                toAmino(message: _30.TallyResult): _30.TallyResultAmino;
                fromAminoMsg(object: _30.TallyResultAminoMsg): _30.TallyResult;
                toAminoMsg(message: _30.TallyResult): _30.TallyResultAminoMsg;
                fromProtoMsg(message: _30.TallyResultProtoMsg): _30.TallyResult;
                toProto(message: _30.TallyResult): Uint8Array;
                toProtoMsg(message: _30.TallyResult): _30.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _30.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Vote;
                fromPartial(object: any): _30.Vote;
                fromAmino(object: _30.VoteAmino): _30.Vote;
                toAmino(message: _30.Vote): _30.VoteAmino;
                fromAminoMsg(object: _30.VoteAminoMsg): _30.Vote;
                toAminoMsg(message: _30.Vote): _30.VoteAminoMsg;
                fromProtoMsg(message: _30.VoteProtoMsg): _30.Vote;
                toProto(message: _30.Vote): Uint8Array;
                toProtoMsg(message: _30.Vote): _30.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _30.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DepositParams;
                fromPartial(object: any): _30.DepositParams;
                fromAmino(object: _30.DepositParamsAmino): _30.DepositParams;
                toAmino(message: _30.DepositParams): _30.DepositParamsAmino;
                fromAminoMsg(object: _30.DepositParamsAminoMsg): _30.DepositParams;
                toAminoMsg(message: _30.DepositParams): _30.DepositParamsAminoMsg;
                fromProtoMsg(message: _30.DepositParamsProtoMsg): _30.DepositParams;
                toProto(message: _30.DepositParams): Uint8Array;
                toProtoMsg(message: _30.DepositParams): _30.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _30.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.VotingParams;
                fromPartial(object: any): _30.VotingParams;
                fromAmino(object: _30.VotingParamsAmino): _30.VotingParams;
                toAmino(message: _30.VotingParams): _30.VotingParamsAmino;
                fromAminoMsg(object: _30.VotingParamsAminoMsg): _30.VotingParams;
                toAminoMsg(message: _30.VotingParams): _30.VotingParamsAminoMsg;
                fromProtoMsg(message: _30.VotingParamsProtoMsg): _30.VotingParams;
                toProto(message: _30.VotingParams): Uint8Array;
                toProtoMsg(message: _30.VotingParams): _30.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _30.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyParams;
                fromPartial(object: any): _30.TallyParams;
                fromAmino(object: _30.TallyParamsAmino): _30.TallyParams;
                toAmino(message: _30.TallyParams): _30.TallyParamsAmino;
                fromAminoMsg(object: _30.TallyParamsAminoMsg): _30.TallyParams;
                toAminoMsg(message: _30.TallyParams): _30.TallyParamsAminoMsg;
                fromProtoMsg(message: _30.TallyParamsProtoMsg): _30.TallyParams;
                toProto(message: _30.TallyParams): Uint8Array;
                toProtoMsg(message: _30.TallyParams): _30.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromPartial(object: any): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _148.MsgClientImpl;
            QueryClientImpl: typeof _139.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _35.QueryProposalRequest): Promise<_35.QueryProposalResponse>;
                proposals(request: _35.QueryProposalsRequest): Promise<_35.QueryProposalsResponse>;
                vote(request: _35.QueryVoteRequest): Promise<_35.QueryVoteResponse>;
                votes(request: _35.QueryVotesRequest): Promise<_35.QueryVotesResponse>;
                params(request: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                deposit(request: _35.QueryDepositRequest): Promise<_35.QueryDepositResponse>;
                deposits(request: _35.QueryDepositsRequest): Promise<_35.QueryDepositsResponse>;
                tallyResult(request: _35.QueryTallyResultRequest): Promise<_35.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _128.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _36.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _36.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _36.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _36.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _36.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _36.MsgSubmitProposal;
                    };
                    vote(value: _36.MsgVote): {
                        typeUrl: string;
                        value: _36.MsgVote;
                    };
                    voteWeighted(value: _36.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _36.MsgVoteWeighted;
                    };
                    deposit(value: _36.MsgDeposit): {
                        typeUrl: string;
                        value: _36.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _36.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _36.MsgSubmitProposal;
                    };
                    vote(value: _36.MsgVote): {
                        typeUrl: string;
                        value: _36.MsgVote;
                    };
                    voteWeighted(value: _36.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _36.MsgVoteWeighted;
                    };
                    deposit(value: _36.MsgDeposit): {
                        typeUrl: string;
                        value: _36.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _36.MsgSubmitProposal) => _36.MsgSubmitProposalAmino;
                    fromAmino: (object: _36.MsgSubmitProposalAmino) => _36.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _36.MsgVote) => _36.MsgVoteAmino;
                    fromAmino: (object: _36.MsgVoteAmino) => _36.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _36.MsgVoteWeighted) => _36.MsgVoteWeightedAmino;
                    fromAmino: (object: _36.MsgVoteWeightedAmino) => _36.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _36.MsgDeposit) => _36.MsgDepositAmino;
                    fromAmino: (object: _36.MsgDepositAmino) => _36.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _36.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSubmitProposal;
                fromPartial(object: any): _36.MsgSubmitProposal;
                fromAmino(object: _36.MsgSubmitProposalAmino): _36.MsgSubmitProposal;
                toAmino(message: _36.MsgSubmitProposal): _36.MsgSubmitProposalAmino;
                fromAminoMsg(object: _36.MsgSubmitProposalAminoMsg): _36.MsgSubmitProposal;
                toAminoMsg(message: _36.MsgSubmitProposal): _36.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _36.MsgSubmitProposalProtoMsg): _36.MsgSubmitProposal;
                toProto(message: _36.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _36.MsgSubmitProposal): _36.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _36.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgSubmitProposalResponse;
                fromPartial(object: any): _36.MsgSubmitProposalResponse;
                fromAmino(object: _36.MsgSubmitProposalResponseAmino): _36.MsgSubmitProposalResponse;
                toAmino(message: _36.MsgSubmitProposalResponse): _36.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _36.MsgSubmitProposalResponseAminoMsg): _36.MsgSubmitProposalResponse;
                toAminoMsg(message: _36.MsgSubmitProposalResponse): _36.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _36.MsgSubmitProposalResponseProtoMsg): _36.MsgSubmitProposalResponse;
                toProto(message: _36.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _36.MsgSubmitProposalResponse): _36.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _36.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVote;
                fromPartial(object: any): _36.MsgVote;
                fromAmino(object: _36.MsgVoteAmino): _36.MsgVote;
                toAmino(message: _36.MsgVote): _36.MsgVoteAmino;
                fromAminoMsg(object: _36.MsgVoteAminoMsg): _36.MsgVote;
                toAminoMsg(message: _36.MsgVote): _36.MsgVoteAminoMsg;
                fromProtoMsg(message: _36.MsgVoteProtoMsg): _36.MsgVote;
                toProto(message: _36.MsgVote): Uint8Array;
                toProtoMsg(message: _36.MsgVote): _36.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _36.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVoteResponse;
                fromPartial(_: any): _36.MsgVoteResponse;
                fromAmino(_: _36.MsgVoteResponseAmino): _36.MsgVoteResponse;
                toAmino(_: _36.MsgVoteResponse): _36.MsgVoteResponseAmino;
                fromAminoMsg(object: _36.MsgVoteResponseAminoMsg): _36.MsgVoteResponse;
                toAminoMsg(message: _36.MsgVoteResponse): _36.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _36.MsgVoteResponseProtoMsg): _36.MsgVoteResponse;
                toProto(message: _36.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _36.MsgVoteResponse): _36.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _36.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVoteWeighted;
                fromPartial(object: any): _36.MsgVoteWeighted;
                fromAmino(object: _36.MsgVoteWeightedAmino): _36.MsgVoteWeighted;
                toAmino(message: _36.MsgVoteWeighted): _36.MsgVoteWeightedAmino;
                fromAminoMsg(object: _36.MsgVoteWeightedAminoMsg): _36.MsgVoteWeighted;
                toAminoMsg(message: _36.MsgVoteWeighted): _36.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _36.MsgVoteWeightedProtoMsg): _36.MsgVoteWeighted;
                toProto(message: _36.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _36.MsgVoteWeighted): _36.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _36.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgVoteWeightedResponse;
                fromPartial(_: any): _36.MsgVoteWeightedResponse;
                fromAmino(_: _36.MsgVoteWeightedResponseAmino): _36.MsgVoteWeightedResponse;
                toAmino(_: _36.MsgVoteWeightedResponse): _36.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _36.MsgVoteWeightedResponseAminoMsg): _36.MsgVoteWeightedResponse;
                toAminoMsg(message: _36.MsgVoteWeightedResponse): _36.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _36.MsgVoteWeightedResponseProtoMsg): _36.MsgVoteWeightedResponse;
                toProto(message: _36.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _36.MsgVoteWeightedResponse): _36.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _36.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgDeposit;
                fromPartial(object: any): _36.MsgDeposit;
                fromAmino(object: _36.MsgDepositAmino): _36.MsgDeposit;
                toAmino(message: _36.MsgDeposit): _36.MsgDepositAmino;
                fromAminoMsg(object: _36.MsgDepositAminoMsg): _36.MsgDeposit;
                toAminoMsg(message: _36.MsgDeposit): _36.MsgDepositAminoMsg;
                fromProtoMsg(message: _36.MsgDepositProtoMsg): _36.MsgDeposit;
                toProto(message: _36.MsgDeposit): Uint8Array;
                toProtoMsg(message: _36.MsgDeposit): _36.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _36.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MsgDepositResponse;
                fromPartial(_: any): _36.MsgDepositResponse;
                fromAmino(_: _36.MsgDepositResponseAmino): _36.MsgDepositResponse;
                toAmino(_: _36.MsgDepositResponse): _36.MsgDepositResponseAmino;
                fromAminoMsg(object: _36.MsgDepositResponseAminoMsg): _36.MsgDepositResponse;
                toAminoMsg(message: _36.MsgDepositResponse): _36.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _36.MsgDepositResponseProtoMsg): _36.MsgDepositResponse;
                toProto(message: _36.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _36.MsgDepositResponse): _36.MsgDepositResponseProtoMsg;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _34.TextProposal;
            Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                encode(message: _35.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalRequest;
                fromPartial(object: any): _35.QueryProposalRequest;
                fromAmino(object: _35.QueryProposalRequestAmino): _35.QueryProposalRequest;
                toAmino(message: _35.QueryProposalRequest): _35.QueryProposalRequestAmino;
                fromAminoMsg(object: _35.QueryProposalRequestAminoMsg): _35.QueryProposalRequest;
                toAminoMsg(message: _35.QueryProposalRequest): _35.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _35.QueryProposalRequestProtoMsg): _35.QueryProposalRequest;
                toProto(message: _35.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _35.QueryProposalRequest): _35.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _35.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalResponse;
                fromPartial(object: any): _35.QueryProposalResponse;
                fromAmino(object: _35.QueryProposalResponseAmino): _35.QueryProposalResponse;
                toAmino(message: _35.QueryProposalResponse): _35.QueryProposalResponseAmino;
                fromAminoMsg(object: _35.QueryProposalResponseAminoMsg): _35.QueryProposalResponse;
                toAminoMsg(message: _35.QueryProposalResponse): _35.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _35.QueryProposalResponseProtoMsg): _35.QueryProposalResponse;
                toProto(message: _35.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _35.QueryProposalResponse): _35.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _35.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalsRequest;
                fromPartial(object: any): _35.QueryProposalsRequest;
                fromAmino(object: _35.QueryProposalsRequestAmino): _35.QueryProposalsRequest;
                toAmino(message: _35.QueryProposalsRequest): _35.QueryProposalsRequestAmino;
                fromAminoMsg(object: _35.QueryProposalsRequestAminoMsg): _35.QueryProposalsRequest;
                toAminoMsg(message: _35.QueryProposalsRequest): _35.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryProposalsRequestProtoMsg): _35.QueryProposalsRequest;
                toProto(message: _35.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryProposalsRequest): _35.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _35.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryProposalsResponse;
                fromPartial(object: any): _35.QueryProposalsResponse;
                fromAmino(object: _35.QueryProposalsResponseAmino): _35.QueryProposalsResponse;
                toAmino(message: _35.QueryProposalsResponse): _35.QueryProposalsResponseAmino;
                fromAminoMsg(object: _35.QueryProposalsResponseAminoMsg): _35.QueryProposalsResponse;
                toAminoMsg(message: _35.QueryProposalsResponse): _35.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryProposalsResponseProtoMsg): _35.QueryProposalsResponse;
                toProto(message: _35.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryProposalsResponse): _35.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _35.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVoteRequest;
                fromPartial(object: any): _35.QueryVoteRequest;
                fromAmino(object: _35.QueryVoteRequestAmino): _35.QueryVoteRequest;
                toAmino(message: _35.QueryVoteRequest): _35.QueryVoteRequestAmino;
                fromAminoMsg(object: _35.QueryVoteRequestAminoMsg): _35.QueryVoteRequest;
                toAminoMsg(message: _35.QueryVoteRequest): _35.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _35.QueryVoteRequestProtoMsg): _35.QueryVoteRequest;
                toProto(message: _35.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _35.QueryVoteRequest): _35.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _35.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVoteResponse;
                fromPartial(object: any): _35.QueryVoteResponse;
                fromAmino(object: _35.QueryVoteResponseAmino): _35.QueryVoteResponse;
                toAmino(message: _35.QueryVoteResponse): _35.QueryVoteResponseAmino;
                fromAminoMsg(object: _35.QueryVoteResponseAminoMsg): _35.QueryVoteResponse;
                toAminoMsg(message: _35.QueryVoteResponse): _35.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _35.QueryVoteResponseProtoMsg): _35.QueryVoteResponse;
                toProto(message: _35.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _35.QueryVoteResponse): _35.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _35.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVotesRequest;
                fromPartial(object: any): _35.QueryVotesRequest;
                fromAmino(object: _35.QueryVotesRequestAmino): _35.QueryVotesRequest;
                toAmino(message: _35.QueryVotesRequest): _35.QueryVotesRequestAmino;
                fromAminoMsg(object: _35.QueryVotesRequestAminoMsg): _35.QueryVotesRequest;
                toAminoMsg(message: _35.QueryVotesRequest): _35.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _35.QueryVotesRequestProtoMsg): _35.QueryVotesRequest;
                toProto(message: _35.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _35.QueryVotesRequest): _35.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _35.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryVotesResponse;
                fromPartial(object: any): _35.QueryVotesResponse;
                fromAmino(object: _35.QueryVotesResponseAmino): _35.QueryVotesResponse;
                toAmino(message: _35.QueryVotesResponse): _35.QueryVotesResponseAmino;
                fromAminoMsg(object: _35.QueryVotesResponseAminoMsg): _35.QueryVotesResponse;
                toAminoMsg(message: _35.QueryVotesResponse): _35.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _35.QueryVotesResponseProtoMsg): _35.QueryVotesResponse;
                toProto(message: _35.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _35.QueryVotesResponse): _35.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(object: any): _35.QueryParamsRequest;
                fromAmino(object: _35.QueryParamsRequestAmino): _35.QueryParamsRequest;
                toAmino(message: _35.QueryParamsRequest): _35.QueryParamsRequestAmino;
                fromAminoMsg(object: _35.QueryParamsRequestAminoMsg): _35.QueryParamsRequest;
                toAminoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryParamsRequestProtoMsg): _35.QueryParamsRequest;
                toProto(message: _35.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryParamsRequest): _35.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: any): _35.QueryParamsResponse;
                fromAmino(object: _35.QueryParamsResponseAmino): _35.QueryParamsResponse;
                toAmino(message: _35.QueryParamsResponse): _35.QueryParamsResponseAmino;
                fromAminoMsg(object: _35.QueryParamsResponseAminoMsg): _35.QueryParamsResponse;
                toAminoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryParamsResponseProtoMsg): _35.QueryParamsResponse;
                toProto(message: _35.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryParamsResponse): _35.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _35.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositRequest;
                fromPartial(object: any): _35.QueryDepositRequest;
                fromAmino(object: _35.QueryDepositRequestAmino): _35.QueryDepositRequest;
                toAmino(message: _35.QueryDepositRequest): _35.QueryDepositRequestAmino;
                fromAminoMsg(object: _35.QueryDepositRequestAminoMsg): _35.QueryDepositRequest;
                toAminoMsg(message: _35.QueryDepositRequest): _35.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDepositRequestProtoMsg): _35.QueryDepositRequest;
                toProto(message: _35.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDepositRequest): _35.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _35.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositResponse;
                fromPartial(object: any): _35.QueryDepositResponse;
                fromAmino(object: _35.QueryDepositResponseAmino): _35.QueryDepositResponse;
                toAmino(message: _35.QueryDepositResponse): _35.QueryDepositResponseAmino;
                fromAminoMsg(object: _35.QueryDepositResponseAminoMsg): _35.QueryDepositResponse;
                toAminoMsg(message: _35.QueryDepositResponse): _35.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDepositResponseProtoMsg): _35.QueryDepositResponse;
                toProto(message: _35.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDepositResponse): _35.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _35.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositsRequest;
                fromPartial(object: any): _35.QueryDepositsRequest;
                fromAmino(object: _35.QueryDepositsRequestAmino): _35.QueryDepositsRequest;
                toAmino(message: _35.QueryDepositsRequest): _35.QueryDepositsRequestAmino;
                fromAminoMsg(object: _35.QueryDepositsRequestAminoMsg): _35.QueryDepositsRequest;
                toAminoMsg(message: _35.QueryDepositsRequest): _35.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _35.QueryDepositsRequestProtoMsg): _35.QueryDepositsRequest;
                toProto(message: _35.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _35.QueryDepositsRequest): _35.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _35.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDepositsResponse;
                fromPartial(object: any): _35.QueryDepositsResponse;
                fromAmino(object: _35.QueryDepositsResponseAmino): _35.QueryDepositsResponse;
                toAmino(message: _35.QueryDepositsResponse): _35.QueryDepositsResponseAmino;
                fromAminoMsg(object: _35.QueryDepositsResponseAminoMsg): _35.QueryDepositsResponse;
                toAminoMsg(message: _35.QueryDepositsResponse): _35.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _35.QueryDepositsResponseProtoMsg): _35.QueryDepositsResponse;
                toProto(message: _35.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _35.QueryDepositsResponse): _35.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _35.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTallyResultRequest;
                fromPartial(object: any): _35.QueryTallyResultRequest;
                fromAmino(object: _35.QueryTallyResultRequestAmino): _35.QueryTallyResultRequest;
                toAmino(message: _35.QueryTallyResultRequest): _35.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _35.QueryTallyResultRequestAminoMsg): _35.QueryTallyResultRequest;
                toAminoMsg(message: _35.QueryTallyResultRequest): _35.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _35.QueryTallyResultRequestProtoMsg): _35.QueryTallyResultRequest;
                toProto(message: _35.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _35.QueryTallyResultRequest): _35.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _35.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryTallyResultResponse;
                fromPartial(object: any): _35.QueryTallyResultResponse;
                fromAmino(object: _35.QueryTallyResultResponseAmino): _35.QueryTallyResultResponse;
                toAmino(message: _35.QueryTallyResultResponse): _35.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _35.QueryTallyResultResponseAminoMsg): _35.QueryTallyResultResponse;
                toAminoMsg(message: _35.QueryTallyResultResponse): _35.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _35.QueryTallyResultResponseProtoMsg): _35.QueryTallyResultResponse;
                toProto(message: _35.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _35.QueryTallyResultResponse): _35.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _34.VoteOption;
            voteOptionToJSON(object: _34.VoteOption): string;
            proposalStatusFromJSON(object: any): _34.ProposalStatus;
            proposalStatusToJSON(object: _34.ProposalStatus): string;
            VoteOption: typeof _34.VoteOption;
            VoteOptionSDKType: typeof _34.VoteOption;
            VoteOptionAmino: typeof _34.VoteOption;
            ProposalStatus: typeof _34.ProposalStatus;
            ProposalStatusSDKType: typeof _34.ProposalStatus;
            ProposalStatusAmino: typeof _34.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _34.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.WeightedVoteOption;
                fromPartial(object: any): _34.WeightedVoteOption;
                fromAmino(object: _34.WeightedVoteOptionAmino): _34.WeightedVoteOption;
                toAmino(message: _34.WeightedVoteOption): _34.WeightedVoteOptionAmino;
                fromAminoMsg(object: _34.WeightedVoteOptionAminoMsg): _34.WeightedVoteOption;
                toAminoMsg(message: _34.WeightedVoteOption): _34.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _34.WeightedVoteOptionProtoMsg): _34.WeightedVoteOption;
                toProto(message: _34.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _34.WeightedVoteOption): _34.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _34.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TextProposal;
                fromPartial(object: any): _34.TextProposal;
                fromAmino(object: _34.TextProposalAmino): _34.TextProposal;
                toAmino(message: _34.TextProposal): _34.TextProposalAmino;
                fromAminoMsg(object: _34.TextProposalAminoMsg): _34.TextProposal;
                toAminoMsg(message: _34.TextProposal): _34.TextProposalAminoMsg;
                fromProtoMsg(message: _34.TextProposalProtoMsg): _34.TextProposal;
                toProto(message: _34.TextProposal): Uint8Array;
                toProtoMsg(message: _34.TextProposal): _34.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _34.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Deposit;
                fromPartial(object: any): _34.Deposit;
                fromAmino(object: _34.DepositAmino): _34.Deposit;
                toAmino(message: _34.Deposit): _34.DepositAmino;
                fromAminoMsg(object: _34.DepositAminoMsg): _34.Deposit;
                toAminoMsg(message: _34.Deposit): _34.DepositAminoMsg;
                fromProtoMsg(message: _34.DepositProtoMsg): _34.Deposit;
                toProto(message: _34.Deposit): Uint8Array;
                toProtoMsg(message: _34.Deposit): _34.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _34.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Proposal;
                fromPartial(object: any): _34.Proposal;
                fromAmino(object: _34.ProposalAmino): _34.Proposal;
                toAmino(message: _34.Proposal): _34.ProposalAmino;
                fromAminoMsg(object: _34.ProposalAminoMsg): _34.Proposal;
                toAminoMsg(message: _34.Proposal): _34.ProposalAminoMsg;
                fromProtoMsg(message: _34.ProposalProtoMsg): _34.Proposal;
                toProto(message: _34.Proposal): Uint8Array;
                toProtoMsg(message: _34.Proposal): _34.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _34.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TallyResult;
                fromPartial(object: any): _34.TallyResult;
                fromAmino(object: _34.TallyResultAmino): _34.TallyResult;
                toAmino(message: _34.TallyResult): _34.TallyResultAmino;
                fromAminoMsg(object: _34.TallyResultAminoMsg): _34.TallyResult;
                toAminoMsg(message: _34.TallyResult): _34.TallyResultAminoMsg;
                fromProtoMsg(message: _34.TallyResultProtoMsg): _34.TallyResult;
                toProto(message: _34.TallyResult): Uint8Array;
                toProtoMsg(message: _34.TallyResult): _34.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _34.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Vote;
                fromPartial(object: any): _34.Vote;
                fromAmino(object: _34.VoteAmino): _34.Vote;
                toAmino(message: _34.Vote): _34.VoteAmino;
                fromAminoMsg(object: _34.VoteAminoMsg): _34.Vote;
                toAminoMsg(message: _34.Vote): _34.VoteAminoMsg;
                fromProtoMsg(message: _34.VoteProtoMsg): _34.Vote;
                toProto(message: _34.Vote): Uint8Array;
                toProtoMsg(message: _34.Vote): _34.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _34.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.DepositParams;
                fromPartial(object: any): _34.DepositParams;
                fromAmino(object: _34.DepositParamsAmino): _34.DepositParams;
                toAmino(message: _34.DepositParams): _34.DepositParamsAmino;
                fromAminoMsg(object: _34.DepositParamsAminoMsg): _34.DepositParams;
                toAminoMsg(message: _34.DepositParams): _34.DepositParamsAminoMsg;
                fromProtoMsg(message: _34.DepositParamsProtoMsg): _34.DepositParams;
                toProto(message: _34.DepositParams): Uint8Array;
                toProtoMsg(message: _34.DepositParams): _34.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _34.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.VotingParams;
                fromPartial(object: any): _34.VotingParams;
                fromAmino(object: _34.VotingParamsAmino): _34.VotingParams;
                toAmino(message: _34.VotingParams): _34.VotingParamsAmino;
                fromAminoMsg(object: _34.VotingParamsAminoMsg): _34.VotingParams;
                toAminoMsg(message: _34.VotingParams): _34.VotingParamsAminoMsg;
                fromProtoMsg(message: _34.VotingParamsProtoMsg): _34.VotingParams;
                toProto(message: _34.VotingParams): Uint8Array;
                toProtoMsg(message: _34.VotingParams): _34.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _34.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TallyParams;
                fromPartial(object: any): _34.TallyParams;
                fromAmino(object: _34.TallyParamsAmino): _34.TallyParams;
                toAmino(message: _34.TallyParams): _34.TallyParamsAmino;
                fromAminoMsg(object: _34.TallyParamsAminoMsg): _34.TallyParams;
                toAminoMsg(message: _34.TallyParams): _34.TallyParamsAminoMsg;
                fromProtoMsg(message: _34.TallyParamsProtoMsg): _34.TallyParams;
                toProto(message: _34.TallyParams): Uint8Array;
                toProtoMsg(message: _34.TallyParams): _34.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisState;
                fromPartial(object: any): _33.GenesisState;
                fromAmino(object: _33.GenesisStateAmino): _33.GenesisState;
                toAmino(message: _33.GenesisState): _33.GenesisStateAmino;
                fromAminoMsg(object: _33.GenesisStateAminoMsg): _33.GenesisState;
                toAminoMsg(message: _33.GenesisState): _33.GenesisStateAminoMsg;
                fromProtoMsg(message: _33.GenesisStateProtoMsg): _33.GenesisState;
                toProto(message: _33.GenesisState): Uint8Array;
                toProtoMsg(message: _33.GenesisState): _33.GenesisStateProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _140.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                inflation(request?: _39.QueryInflationRequest): Promise<_39.QueryInflationResponse>;
                annualProvisions(request?: _39.QueryAnnualProvisionsRequest): Promise<_39.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _129.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _39.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsRequest;
                fromPartial(_: any): _39.QueryParamsRequest;
                fromAmino(_: _39.QueryParamsRequestAmino): _39.QueryParamsRequest;
                toAmino(_: _39.QueryParamsRequest): _39.QueryParamsRequestAmino;
                fromAminoMsg(object: _39.QueryParamsRequestAminoMsg): _39.QueryParamsRequest;
                toAminoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryParamsRequestProtoMsg): _39.QueryParamsRequest;
                toProto(message: _39.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryParamsRequest): _39.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _39.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsResponse;
                fromPartial(object: any): _39.QueryParamsResponse;
                fromAmino(object: _39.QueryParamsResponseAmino): _39.QueryParamsResponse;
                toAmino(message: _39.QueryParamsResponse): _39.QueryParamsResponseAmino;
                fromAminoMsg(object: _39.QueryParamsResponseAminoMsg): _39.QueryParamsResponse;
                toAminoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryParamsResponseProtoMsg): _39.QueryParamsResponse;
                toProto(message: _39.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryParamsResponse): _39.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _39.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryInflationRequest;
                fromPartial(_: any): _39.QueryInflationRequest;
                fromAmino(_: _39.QueryInflationRequestAmino): _39.QueryInflationRequest;
                toAmino(_: _39.QueryInflationRequest): _39.QueryInflationRequestAmino;
                fromAminoMsg(object: _39.QueryInflationRequestAminoMsg): _39.QueryInflationRequest;
                toAminoMsg(message: _39.QueryInflationRequest): _39.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _39.QueryInflationRequestProtoMsg): _39.QueryInflationRequest;
                toProto(message: _39.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _39.QueryInflationRequest): _39.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _39.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryInflationResponse;
                fromPartial(object: any): _39.QueryInflationResponse;
                fromAmino(object: _39.QueryInflationResponseAmino): _39.QueryInflationResponse;
                toAmino(message: _39.QueryInflationResponse): _39.QueryInflationResponseAmino;
                fromAminoMsg(object: _39.QueryInflationResponseAminoMsg): _39.QueryInflationResponse;
                toAminoMsg(message: _39.QueryInflationResponse): _39.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _39.QueryInflationResponseProtoMsg): _39.QueryInflationResponse;
                toProto(message: _39.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _39.QueryInflationResponse): _39.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _39.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAnnualProvisionsRequest;
                fromPartial(_: any): _39.QueryAnnualProvisionsRequest;
                fromAmino(_: _39.QueryAnnualProvisionsRequestAmino): _39.QueryAnnualProvisionsRequest;
                toAmino(_: _39.QueryAnnualProvisionsRequest): _39.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _39.QueryAnnualProvisionsRequestAminoMsg): _39.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _39.QueryAnnualProvisionsRequest): _39.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _39.QueryAnnualProvisionsRequestProtoMsg): _39.QueryAnnualProvisionsRequest;
                toProto(message: _39.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _39.QueryAnnualProvisionsRequest): _39.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _39.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryAnnualProvisionsResponse;
                fromPartial(object: any): _39.QueryAnnualProvisionsResponse;
                fromAmino(object: _39.QueryAnnualProvisionsResponseAmino): _39.QueryAnnualProvisionsResponse;
                toAmino(message: _39.QueryAnnualProvisionsResponse): _39.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _39.QueryAnnualProvisionsResponseAminoMsg): _39.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _39.QueryAnnualProvisionsResponse): _39.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _39.QueryAnnualProvisionsResponseProtoMsg): _39.QueryAnnualProvisionsResponse;
                toProto(message: _39.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _39.QueryAnnualProvisionsResponse): _39.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _38.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Minter;
                fromPartial(object: any): _38.Minter;
                fromAmino(object: _38.MinterAmino): _38.Minter;
                toAmino(message: _38.Minter): _38.MinterAmino;
                fromAminoMsg(object: _38.MinterAminoMsg): _38.Minter;
                toAminoMsg(message: _38.Minter): _38.MinterAminoMsg;
                fromProtoMsg(message: _38.MinterProtoMsg): _38.Minter;
                toProto(message: _38.Minter): Uint8Array;
                toProtoMsg(message: _38.Minter): _38.MinterProtoMsg;
            };
            Params: {
                encode(message: _38.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Params;
                fromPartial(object: any): _38.Params;
                fromAmino(object: _38.ParamsAmino): _38.Params;
                toAmino(message: _38.Params): _38.ParamsAmino;
                fromAminoMsg(object: _38.ParamsAminoMsg): _38.Params;
                toAminoMsg(message: _38.Params): _38.ParamsAminoMsg;
                fromProtoMsg(message: _38.ParamsProtoMsg): _38.Params;
                toProto(message: _38.Params): Uint8Array;
                toProtoMsg(message: _38.Params): _38.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromPartial(object: any): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    encode(_: _40.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Module;
                    fromPartial(_: any): _40.Module;
                    fromAmino(_: _40.ModuleAmino): _40.Module;
                    toAmino(_: _40.Module): _40.ModuleAmino;
                    fromAminoMsg(object: _40.ModuleAminoMsg): _40.Module;
                    toAminoMsg(message: _40.Module): _40.ModuleAminoMsg;
                    fromProtoMsg(message: _40.ModuleProtoMsg): _40.Module;
                    toProto(message: _40.Module): Uint8Array;
                    toProtoMsg(message: _40.Module): _40.ModuleProtoMsg;
                };
            };
        }
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _149.MsgClientImpl;
            QueryClientImpl: typeof _141.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _43.QueryValidatorsRequest): Promise<_43.QueryValidatorsResponse>;
                validator(request: _43.QueryValidatorRequest): Promise<_43.QueryValidatorResponse>;
                validatorDelegations(request: _43.QueryValidatorDelegationsRequest): Promise<_43.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _43.QueryValidatorUnbondingDelegationsRequest): Promise<_43.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _43.QueryDelegationRequest): Promise<_43.QueryDelegationResponse>;
                unbondingDelegation(request: _43.QueryUnbondingDelegationRequest): Promise<_43.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _43.QueryDelegatorDelegationsRequest): Promise<_43.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _43.QueryDelegatorUnbondingDelegationsRequest): Promise<_43.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _43.QueryRedelegationsRequest): Promise<_43.QueryRedelegationsResponse>;
                delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _43.QueryDelegatorValidatorRequest): Promise<_43.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _43.QueryHistoricalInfoRequest): Promise<_43.QueryHistoricalInfoResponse>;
                pool(request?: _43.QueryPoolRequest): Promise<_43.QueryPoolResponse>;
                params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _130.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _45.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _45.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _45.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _45.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _45.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _45.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _45.MsgCreateValidator): {
                        typeUrl: string;
                        value: _45.MsgCreateValidator;
                    };
                    editValidator(value: _45.MsgEditValidator): {
                        typeUrl: string;
                        value: _45.MsgEditValidator;
                    };
                    delegate(value: _45.MsgDelegate): {
                        typeUrl: string;
                        value: _45.MsgDelegate;
                    };
                    beginRedelegate(value: _45.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _45.MsgBeginRedelegate;
                    };
                    undelegate(value: _45.MsgUndelegate): {
                        typeUrl: string;
                        value: _45.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _45.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _45.MsgCancelUnbondingDelegation;
                    };
                };
                fromPartial: {
                    createValidator(value: _45.MsgCreateValidator): {
                        typeUrl: string;
                        value: _45.MsgCreateValidator;
                    };
                    editValidator(value: _45.MsgEditValidator): {
                        typeUrl: string;
                        value: _45.MsgEditValidator;
                    };
                    delegate(value: _45.MsgDelegate): {
                        typeUrl: string;
                        value: _45.MsgDelegate;
                    };
                    beginRedelegate(value: _45.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _45.MsgBeginRedelegate;
                    };
                    undelegate(value: _45.MsgUndelegate): {
                        typeUrl: string;
                        value: _45.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _45.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _45.MsgCancelUnbondingDelegation;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _45.MsgCreateValidator) => _45.MsgCreateValidatorAmino;
                    fromAmino: (object: _45.MsgCreateValidatorAmino) => _45.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _45.MsgEditValidator) => _45.MsgEditValidatorAmino;
                    fromAmino: (object: _45.MsgEditValidatorAmino) => _45.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _45.MsgDelegate) => _45.MsgDelegateAmino;
                    fromAmino: (object: _45.MsgDelegateAmino) => _45.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _45.MsgBeginRedelegate) => _45.MsgBeginRedelegateAmino;
                    fromAmino: (object: _45.MsgBeginRedelegateAmino) => _45.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _45.MsgUndelegate) => _45.MsgUndelegateAmino;
                    fromAmino: (object: _45.MsgUndelegateAmino) => _45.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _45.MsgCancelUnbondingDelegation) => _45.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _45.MsgCancelUnbondingDelegationAmino) => _45.MsgCancelUnbondingDelegation;
                };
            };
            MsgCreateValidator: {
                encode(message: _45.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgCreateValidator;
                fromPartial(object: any): _45.MsgCreateValidator;
                fromAmino(object: _45.MsgCreateValidatorAmino): _45.MsgCreateValidator;
                toAmino(message: _45.MsgCreateValidator): _45.MsgCreateValidatorAmino;
                fromAminoMsg(object: _45.MsgCreateValidatorAminoMsg): _45.MsgCreateValidator;
                toAminoMsg(message: _45.MsgCreateValidator): _45.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _45.MsgCreateValidatorProtoMsg): _45.MsgCreateValidator;
                toProto(message: _45.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _45.MsgCreateValidator): _45.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _45.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgCreateValidatorResponse;
                fromPartial(_: any): _45.MsgCreateValidatorResponse;
                fromAmino(_: _45.MsgCreateValidatorResponseAmino): _45.MsgCreateValidatorResponse;
                toAmino(_: _45.MsgCreateValidatorResponse): _45.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _45.MsgCreateValidatorResponseAminoMsg): _45.MsgCreateValidatorResponse;
                toAminoMsg(message: _45.MsgCreateValidatorResponse): _45.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _45.MsgCreateValidatorResponseProtoMsg): _45.MsgCreateValidatorResponse;
                toProto(message: _45.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _45.MsgCreateValidatorResponse): _45.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _45.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgEditValidator;
                fromPartial(object: any): _45.MsgEditValidator;
                fromAmino(object: _45.MsgEditValidatorAmino): _45.MsgEditValidator;
                toAmino(message: _45.MsgEditValidator): _45.MsgEditValidatorAmino;
                fromAminoMsg(object: _45.MsgEditValidatorAminoMsg): _45.MsgEditValidator;
                toAminoMsg(message: _45.MsgEditValidator): _45.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _45.MsgEditValidatorProtoMsg): _45.MsgEditValidator;
                toProto(message: _45.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _45.MsgEditValidator): _45.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _45.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgEditValidatorResponse;
                fromPartial(_: any): _45.MsgEditValidatorResponse;
                fromAmino(_: _45.MsgEditValidatorResponseAmino): _45.MsgEditValidatorResponse;
                toAmino(_: _45.MsgEditValidatorResponse): _45.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _45.MsgEditValidatorResponseAminoMsg): _45.MsgEditValidatorResponse;
                toAminoMsg(message: _45.MsgEditValidatorResponse): _45.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _45.MsgEditValidatorResponseProtoMsg): _45.MsgEditValidatorResponse;
                toProto(message: _45.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _45.MsgEditValidatorResponse): _45.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _45.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgDelegate;
                fromPartial(object: any): _45.MsgDelegate;
                fromAmino(object: _45.MsgDelegateAmino): _45.MsgDelegate;
                toAmino(message: _45.MsgDelegate): _45.MsgDelegateAmino;
                fromAminoMsg(object: _45.MsgDelegateAminoMsg): _45.MsgDelegate;
                toAminoMsg(message: _45.MsgDelegate): _45.MsgDelegateAminoMsg;
                fromProtoMsg(message: _45.MsgDelegateProtoMsg): _45.MsgDelegate;
                toProto(message: _45.MsgDelegate): Uint8Array;
                toProtoMsg(message: _45.MsgDelegate): _45.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _45.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgDelegateResponse;
                fromPartial(_: any): _45.MsgDelegateResponse;
                fromAmino(_: _45.MsgDelegateResponseAmino): _45.MsgDelegateResponse;
                toAmino(_: _45.MsgDelegateResponse): _45.MsgDelegateResponseAmino;
                fromAminoMsg(object: _45.MsgDelegateResponseAminoMsg): _45.MsgDelegateResponse;
                toAminoMsg(message: _45.MsgDelegateResponse): _45.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _45.MsgDelegateResponseProtoMsg): _45.MsgDelegateResponse;
                toProto(message: _45.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _45.MsgDelegateResponse): _45.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _45.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgBeginRedelegate;
                fromPartial(object: any): _45.MsgBeginRedelegate;
                fromAmino(object: _45.MsgBeginRedelegateAmino): _45.MsgBeginRedelegate;
                toAmino(message: _45.MsgBeginRedelegate): _45.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _45.MsgBeginRedelegateAminoMsg): _45.MsgBeginRedelegate;
                toAminoMsg(message: _45.MsgBeginRedelegate): _45.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _45.MsgBeginRedelegateProtoMsg): _45.MsgBeginRedelegate;
                toProto(message: _45.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _45.MsgBeginRedelegate): _45.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _45.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgBeginRedelegateResponse;
                fromPartial(object: any): _45.MsgBeginRedelegateResponse;
                fromAmino(object: _45.MsgBeginRedelegateResponseAmino): _45.MsgBeginRedelegateResponse;
                toAmino(message: _45.MsgBeginRedelegateResponse): _45.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _45.MsgBeginRedelegateResponseAminoMsg): _45.MsgBeginRedelegateResponse;
                toAminoMsg(message: _45.MsgBeginRedelegateResponse): _45.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _45.MsgBeginRedelegateResponseProtoMsg): _45.MsgBeginRedelegateResponse;
                toProto(message: _45.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _45.MsgBeginRedelegateResponse): _45.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _45.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgUndelegate;
                fromPartial(object: any): _45.MsgUndelegate;
                fromAmino(object: _45.MsgUndelegateAmino): _45.MsgUndelegate;
                toAmino(message: _45.MsgUndelegate): _45.MsgUndelegateAmino;
                fromAminoMsg(object: _45.MsgUndelegateAminoMsg): _45.MsgUndelegate;
                toAminoMsg(message: _45.MsgUndelegate): _45.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _45.MsgUndelegateProtoMsg): _45.MsgUndelegate;
                toProto(message: _45.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _45.MsgUndelegate): _45.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _45.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgUndelegateResponse;
                fromPartial(object: any): _45.MsgUndelegateResponse;
                fromAmino(object: _45.MsgUndelegateResponseAmino): _45.MsgUndelegateResponse;
                toAmino(message: _45.MsgUndelegateResponse): _45.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _45.MsgUndelegateResponseAminoMsg): _45.MsgUndelegateResponse;
                toAminoMsg(message: _45.MsgUndelegateResponse): _45.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _45.MsgUndelegateResponseProtoMsg): _45.MsgUndelegateResponse;
                toProto(message: _45.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _45.MsgUndelegateResponse): _45.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                encode(message: _45.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgCancelUnbondingDelegation;
                fromPartial(object: any): _45.MsgCancelUnbondingDelegation;
                fromAmino(object: _45.MsgCancelUnbondingDelegationAmino): _45.MsgCancelUnbondingDelegation;
                toAmino(message: _45.MsgCancelUnbondingDelegation): _45.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _45.MsgCancelUnbondingDelegationAminoMsg): _45.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _45.MsgCancelUnbondingDelegation): _45.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _45.MsgCancelUnbondingDelegationProtoMsg): _45.MsgCancelUnbondingDelegation;
                toProto(message: _45.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _45.MsgCancelUnbondingDelegation): _45.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                encode(_: _45.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgCancelUnbondingDelegationResponse;
                fromPartial(_: any): _45.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _45.MsgCancelUnbondingDelegationResponseAmino): _45.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _45.MsgCancelUnbondingDelegationResponse): _45.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _45.MsgCancelUnbondingDelegationResponseAminoMsg): _45.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _45.MsgCancelUnbondingDelegationResponse): _45.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _45.MsgCancelUnbondingDelegationResponseProtoMsg): _45.MsgCancelUnbondingDelegationResponse;
                toProto(message: _45.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _45.MsgCancelUnbondingDelegationResponse): _45.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => string;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => {
                typeUrl: string;
                value: Uint8Array;
            };
            bondStatusFromJSON(object: any): _44.BondStatus;
            bondStatusToJSON(object: _44.BondStatus): string;
            BondStatus: typeof _44.BondStatus;
            BondStatusSDKType: typeof _44.BondStatus;
            BondStatusAmino: typeof _44.BondStatus;
            HistoricalInfo: {
                encode(message: _44.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.HistoricalInfo;
                fromPartial(object: any): _44.HistoricalInfo;
                fromAmino(object: _44.HistoricalInfoAmino): _44.HistoricalInfo;
                toAmino(message: _44.HistoricalInfo): _44.HistoricalInfoAmino;
                fromAminoMsg(object: _44.HistoricalInfoAminoMsg): _44.HistoricalInfo;
                toAminoMsg(message: _44.HistoricalInfo): _44.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _44.HistoricalInfoProtoMsg): _44.HistoricalInfo;
                toProto(message: _44.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _44.HistoricalInfo): _44.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _44.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CommissionRates;
                fromPartial(object: any): _44.CommissionRates;
                fromAmino(object: _44.CommissionRatesAmino): _44.CommissionRates;
                toAmino(message: _44.CommissionRates): _44.CommissionRatesAmino;
                fromAminoMsg(object: _44.CommissionRatesAminoMsg): _44.CommissionRates;
                toAminoMsg(message: _44.CommissionRates): _44.CommissionRatesAminoMsg;
                fromProtoMsg(message: _44.CommissionRatesProtoMsg): _44.CommissionRates;
                toProto(message: _44.CommissionRates): Uint8Array;
                toProtoMsg(message: _44.CommissionRates): _44.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _44.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Commission;
                fromPartial(object: any): _44.Commission;
                fromAmino(object: _44.CommissionAmino): _44.Commission;
                toAmino(message: _44.Commission): _44.CommissionAmino;
                fromAminoMsg(object: _44.CommissionAminoMsg): _44.Commission;
                toAminoMsg(message: _44.Commission): _44.CommissionAminoMsg;
                fromProtoMsg(message: _44.CommissionProtoMsg): _44.Commission;
                toProto(message: _44.Commission): Uint8Array;
                toProtoMsg(message: _44.Commission): _44.CommissionProtoMsg;
            };
            Description: {
                encode(message: _44.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Description;
                fromPartial(object: any): _44.Description;
                fromAmino(object: _44.DescriptionAmino): _44.Description;
                toAmino(message: _44.Description): _44.DescriptionAmino;
                fromAminoMsg(object: _44.DescriptionAminoMsg): _44.Description;
                toAminoMsg(message: _44.Description): _44.DescriptionAminoMsg;
                fromProtoMsg(message: _44.DescriptionProtoMsg): _44.Description;
                toProto(message: _44.Description): Uint8Array;
                toProtoMsg(message: _44.Description): _44.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _44.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Validator;
                fromPartial(object: any): _44.Validator;
                fromAmino(object: _44.ValidatorAmino): _44.Validator;
                toAmino(message: _44.Validator): _44.ValidatorAmino;
                fromAminoMsg(object: _44.ValidatorAminoMsg): _44.Validator;
                toAminoMsg(message: _44.Validator): _44.ValidatorAminoMsg;
                fromProtoMsg(message: _44.ValidatorProtoMsg): _44.Validator;
                toProto(message: _44.Validator): Uint8Array;
                toProtoMsg(message: _44.Validator): _44.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _44.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ValAddresses;
                fromPartial(object: any): _44.ValAddresses;
                fromAmino(object: _44.ValAddressesAmino): _44.ValAddresses;
                toAmino(message: _44.ValAddresses): _44.ValAddressesAmino;
                fromAminoMsg(object: _44.ValAddressesAminoMsg): _44.ValAddresses;
                toAminoMsg(message: _44.ValAddresses): _44.ValAddressesAminoMsg;
                fromProtoMsg(message: _44.ValAddressesProtoMsg): _44.ValAddresses;
                toProto(message: _44.ValAddresses): Uint8Array;
                toProtoMsg(message: _44.ValAddresses): _44.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _44.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DVPair;
                fromPartial(object: any): _44.DVPair;
                fromAmino(object: _44.DVPairAmino): _44.DVPair;
                toAmino(message: _44.DVPair): _44.DVPairAmino;
                fromAminoMsg(object: _44.DVPairAminoMsg): _44.DVPair;
                toAminoMsg(message: _44.DVPair): _44.DVPairAminoMsg;
                fromProtoMsg(message: _44.DVPairProtoMsg): _44.DVPair;
                toProto(message: _44.DVPair): Uint8Array;
                toProtoMsg(message: _44.DVPair): _44.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _44.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DVPairs;
                fromPartial(object: any): _44.DVPairs;
                fromAmino(object: _44.DVPairsAmino): _44.DVPairs;
                toAmino(message: _44.DVPairs): _44.DVPairsAmino;
                fromAminoMsg(object: _44.DVPairsAminoMsg): _44.DVPairs;
                toAminoMsg(message: _44.DVPairs): _44.DVPairsAminoMsg;
                fromProtoMsg(message: _44.DVPairsProtoMsg): _44.DVPairs;
                toProto(message: _44.DVPairs): Uint8Array;
                toProtoMsg(message: _44.DVPairs): _44.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _44.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DVVTriplet;
                fromPartial(object: any): _44.DVVTriplet;
                fromAmino(object: _44.DVVTripletAmino): _44.DVVTriplet;
                toAmino(message: _44.DVVTriplet): _44.DVVTripletAmino;
                fromAminoMsg(object: _44.DVVTripletAminoMsg): _44.DVVTriplet;
                toAminoMsg(message: _44.DVVTriplet): _44.DVVTripletAminoMsg;
                fromProtoMsg(message: _44.DVVTripletProtoMsg): _44.DVVTriplet;
                toProto(message: _44.DVVTriplet): Uint8Array;
                toProtoMsg(message: _44.DVVTriplet): _44.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _44.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DVVTriplets;
                fromPartial(object: any): _44.DVVTriplets;
                fromAmino(object: _44.DVVTripletsAmino): _44.DVVTriplets;
                toAmino(message: _44.DVVTriplets): _44.DVVTripletsAmino;
                fromAminoMsg(object: _44.DVVTripletsAminoMsg): _44.DVVTriplets;
                toAminoMsg(message: _44.DVVTriplets): _44.DVVTripletsAminoMsg;
                fromProtoMsg(message: _44.DVVTripletsProtoMsg): _44.DVVTriplets;
                toProto(message: _44.DVVTriplets): Uint8Array;
                toProtoMsg(message: _44.DVVTriplets): _44.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _44.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Delegation;
                fromPartial(object: any): _44.Delegation;
                fromAmino(object: _44.DelegationAmino): _44.Delegation;
                toAmino(message: _44.Delegation): _44.DelegationAmino;
                fromAminoMsg(object: _44.DelegationAminoMsg): _44.Delegation;
                toAminoMsg(message: _44.Delegation): _44.DelegationAminoMsg;
                fromProtoMsg(message: _44.DelegationProtoMsg): _44.Delegation;
                toProto(message: _44.Delegation): Uint8Array;
                toProtoMsg(message: _44.Delegation): _44.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _44.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.UnbondingDelegation;
                fromPartial(object: any): _44.UnbondingDelegation;
                fromAmino(object: _44.UnbondingDelegationAmino): _44.UnbondingDelegation;
                toAmino(message: _44.UnbondingDelegation): _44.UnbondingDelegationAmino;
                fromAminoMsg(object: _44.UnbondingDelegationAminoMsg): _44.UnbondingDelegation;
                toAminoMsg(message: _44.UnbondingDelegation): _44.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _44.UnbondingDelegationProtoMsg): _44.UnbondingDelegation;
                toProto(message: _44.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _44.UnbondingDelegation): _44.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _44.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.UnbondingDelegationEntry;
                fromPartial(object: any): _44.UnbondingDelegationEntry;
                fromAmino(object: _44.UnbondingDelegationEntryAmino): _44.UnbondingDelegationEntry;
                toAmino(message: _44.UnbondingDelegationEntry): _44.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _44.UnbondingDelegationEntryAminoMsg): _44.UnbondingDelegationEntry;
                toAminoMsg(message: _44.UnbondingDelegationEntry): _44.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _44.UnbondingDelegationEntryProtoMsg): _44.UnbondingDelegationEntry;
                toProto(message: _44.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _44.UnbondingDelegationEntry): _44.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _44.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.RedelegationEntry;
                fromPartial(object: any): _44.RedelegationEntry;
                fromAmino(object: _44.RedelegationEntryAmino): _44.RedelegationEntry;
                toAmino(message: _44.RedelegationEntry): _44.RedelegationEntryAmino;
                fromAminoMsg(object: _44.RedelegationEntryAminoMsg): _44.RedelegationEntry;
                toAminoMsg(message: _44.RedelegationEntry): _44.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _44.RedelegationEntryProtoMsg): _44.RedelegationEntry;
                toProto(message: _44.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _44.RedelegationEntry): _44.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _44.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Redelegation;
                fromPartial(object: any): _44.Redelegation;
                fromAmino(object: _44.RedelegationAmino): _44.Redelegation;
                toAmino(message: _44.Redelegation): _44.RedelegationAmino;
                fromAminoMsg(object: _44.RedelegationAminoMsg): _44.Redelegation;
                toAminoMsg(message: _44.Redelegation): _44.RedelegationAminoMsg;
                fromProtoMsg(message: _44.RedelegationProtoMsg): _44.Redelegation;
                toProto(message: _44.Redelegation): Uint8Array;
                toProtoMsg(message: _44.Redelegation): _44.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _44.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Params;
                fromPartial(object: any): _44.Params;
                fromAmino(object: _44.ParamsAmino): _44.Params;
                toAmino(message: _44.Params): _44.ParamsAmino;
                fromAminoMsg(object: _44.ParamsAminoMsg): _44.Params;
                toAminoMsg(message: _44.Params): _44.ParamsAminoMsg;
                fromProtoMsg(message: _44.ParamsProtoMsg): _44.Params;
                toProto(message: _44.Params): Uint8Array;
                toProtoMsg(message: _44.Params): _44.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _44.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DelegationResponse;
                fromPartial(object: any): _44.DelegationResponse;
                fromAmino(object: _44.DelegationResponseAmino): _44.DelegationResponse;
                toAmino(message: _44.DelegationResponse): _44.DelegationResponseAmino;
                fromAminoMsg(object: _44.DelegationResponseAminoMsg): _44.DelegationResponse;
                toAminoMsg(message: _44.DelegationResponse): _44.DelegationResponseAminoMsg;
                fromProtoMsg(message: _44.DelegationResponseProtoMsg): _44.DelegationResponse;
                toProto(message: _44.DelegationResponse): Uint8Array;
                toProtoMsg(message: _44.DelegationResponse): _44.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _44.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.RedelegationEntryResponse;
                fromPartial(object: any): _44.RedelegationEntryResponse;
                fromAmino(object: _44.RedelegationEntryResponseAmino): _44.RedelegationEntryResponse;
                toAmino(message: _44.RedelegationEntryResponse): _44.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _44.RedelegationEntryResponseAminoMsg): _44.RedelegationEntryResponse;
                toAminoMsg(message: _44.RedelegationEntryResponse): _44.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _44.RedelegationEntryResponseProtoMsg): _44.RedelegationEntryResponse;
                toProto(message: _44.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _44.RedelegationEntryResponse): _44.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _44.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.RedelegationResponse;
                fromPartial(object: any): _44.RedelegationResponse;
                fromAmino(object: _44.RedelegationResponseAmino): _44.RedelegationResponse;
                toAmino(message: _44.RedelegationResponse): _44.RedelegationResponseAmino;
                fromAminoMsg(object: _44.RedelegationResponseAminoMsg): _44.RedelegationResponse;
                toAminoMsg(message: _44.RedelegationResponse): _44.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _44.RedelegationResponseProtoMsg): _44.RedelegationResponse;
                toProto(message: _44.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _44.RedelegationResponse): _44.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _44.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Pool;
                fromPartial(object: any): _44.Pool;
                fromAmino(object: _44.PoolAmino): _44.Pool;
                toAmino(message: _44.Pool): _44.PoolAmino;
                fromAminoMsg(object: _44.PoolAminoMsg): _44.Pool;
                toAminoMsg(message: _44.Pool): _44.PoolAminoMsg;
                fromProtoMsg(message: _44.PoolProtoMsg): _44.Pool;
                toProto(message: _44.Pool): Uint8Array;
                toProtoMsg(message: _44.Pool): _44.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _43.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorsRequest;
                fromPartial(object: any): _43.QueryValidatorsRequest;
                fromAmino(object: _43.QueryValidatorsRequestAmino): _43.QueryValidatorsRequest;
                toAmino(message: _43.QueryValidatorsRequest): _43.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorsRequestAminoMsg): _43.QueryValidatorsRequest;
                toAminoMsg(message: _43.QueryValidatorsRequest): _43.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorsRequestProtoMsg): _43.QueryValidatorsRequest;
                toProto(message: _43.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorsRequest): _43.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _43.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorsResponse;
                fromPartial(object: any): _43.QueryValidatorsResponse;
                fromAmino(object: _43.QueryValidatorsResponseAmino): _43.QueryValidatorsResponse;
                toAmino(message: _43.QueryValidatorsResponse): _43.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorsResponseAminoMsg): _43.QueryValidatorsResponse;
                toAminoMsg(message: _43.QueryValidatorsResponse): _43.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorsResponseProtoMsg): _43.QueryValidatorsResponse;
                toProto(message: _43.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorsResponse): _43.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _43.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorRequest;
                fromPartial(object: any): _43.QueryValidatorRequest;
                fromAmino(object: _43.QueryValidatorRequestAmino): _43.QueryValidatorRequest;
                toAmino(message: _43.QueryValidatorRequest): _43.QueryValidatorRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorRequestAminoMsg): _43.QueryValidatorRequest;
                toAminoMsg(message: _43.QueryValidatorRequest): _43.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorRequestProtoMsg): _43.QueryValidatorRequest;
                toProto(message: _43.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorRequest): _43.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _43.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorResponse;
                fromPartial(object: any): _43.QueryValidatorResponse;
                fromAmino(object: _43.QueryValidatorResponseAmino): _43.QueryValidatorResponse;
                toAmino(message: _43.QueryValidatorResponse): _43.QueryValidatorResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorResponseAminoMsg): _43.QueryValidatorResponse;
                toAminoMsg(message: _43.QueryValidatorResponse): _43.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorResponseProtoMsg): _43.QueryValidatorResponse;
                toProto(message: _43.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorResponse): _43.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _43.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorDelegationsRequest;
                fromPartial(object: any): _43.QueryValidatorDelegationsRequest;
                fromAmino(object: _43.QueryValidatorDelegationsRequestAmino): _43.QueryValidatorDelegationsRequest;
                toAmino(message: _43.QueryValidatorDelegationsRequest): _43.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorDelegationsRequestAminoMsg): _43.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _43.QueryValidatorDelegationsRequest): _43.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorDelegationsRequestProtoMsg): _43.QueryValidatorDelegationsRequest;
                toProto(message: _43.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorDelegationsRequest): _43.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _43.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorDelegationsResponse;
                fromPartial(object: any): _43.QueryValidatorDelegationsResponse;
                fromAmino(object: _43.QueryValidatorDelegationsResponseAmino): _43.QueryValidatorDelegationsResponse;
                toAmino(message: _43.QueryValidatorDelegationsResponse): _43.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorDelegationsResponseAminoMsg): _43.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _43.QueryValidatorDelegationsResponse): _43.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorDelegationsResponseProtoMsg): _43.QueryValidatorDelegationsResponse;
                toProto(message: _43.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorDelegationsResponse): _43.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _43.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: any): _43.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _43.QueryValidatorUnbondingDelegationsRequestAmino): _43.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _43.QueryValidatorUnbondingDelegationsRequest): _43.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _43.QueryValidatorUnbondingDelegationsRequestAminoMsg): _43.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _43.QueryValidatorUnbondingDelegationsRequest): _43.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorUnbondingDelegationsRequestProtoMsg): _43.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _43.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorUnbondingDelegationsRequest): _43.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _43.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: any): _43.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _43.QueryValidatorUnbondingDelegationsResponseAmino): _43.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _43.QueryValidatorUnbondingDelegationsResponse): _43.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _43.QueryValidatorUnbondingDelegationsResponseAminoMsg): _43.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _43.QueryValidatorUnbondingDelegationsResponse): _43.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryValidatorUnbondingDelegationsResponseProtoMsg): _43.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _43.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryValidatorUnbondingDelegationsResponse): _43.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _43.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegationRequest;
                fromPartial(object: any): _43.QueryDelegationRequest;
                fromAmino(object: _43.QueryDelegationRequestAmino): _43.QueryDelegationRequest;
                toAmino(message: _43.QueryDelegationRequest): _43.QueryDelegationRequestAmino;
                fromAminoMsg(object: _43.QueryDelegationRequestAminoMsg): _43.QueryDelegationRequest;
                toAminoMsg(message: _43.QueryDelegationRequest): _43.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationRequestProtoMsg): _43.QueryDelegationRequest;
                toProto(message: _43.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationRequest): _43.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _43.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegationResponse;
                fromPartial(object: any): _43.QueryDelegationResponse;
                fromAmino(object: _43.QueryDelegationResponseAmino): _43.QueryDelegationResponse;
                toAmino(message: _43.QueryDelegationResponse): _43.QueryDelegationResponseAmino;
                fromAminoMsg(object: _43.QueryDelegationResponseAminoMsg): _43.QueryDelegationResponse;
                toAminoMsg(message: _43.QueryDelegationResponse): _43.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegationResponseProtoMsg): _43.QueryDelegationResponse;
                toProto(message: _43.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegationResponse): _43.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _43.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryUnbondingDelegationRequest;
                fromPartial(object: any): _43.QueryUnbondingDelegationRequest;
                fromAmino(object: _43.QueryUnbondingDelegationRequestAmino): _43.QueryUnbondingDelegationRequest;
                toAmino(message: _43.QueryUnbondingDelegationRequest): _43.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _43.QueryUnbondingDelegationRequestAminoMsg): _43.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _43.QueryUnbondingDelegationRequest): _43.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _43.QueryUnbondingDelegationRequestProtoMsg): _43.QueryUnbondingDelegationRequest;
                toProto(message: _43.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _43.QueryUnbondingDelegationRequest): _43.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _43.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryUnbondingDelegationResponse;
                fromPartial(object: any): _43.QueryUnbondingDelegationResponse;
                fromAmino(object: _43.QueryUnbondingDelegationResponseAmino): _43.QueryUnbondingDelegationResponse;
                toAmino(message: _43.QueryUnbondingDelegationResponse): _43.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _43.QueryUnbondingDelegationResponseAminoMsg): _43.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _43.QueryUnbondingDelegationResponse): _43.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _43.QueryUnbondingDelegationResponseProtoMsg): _43.QueryUnbondingDelegationResponse;
                toProto(message: _43.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _43.QueryUnbondingDelegationResponse): _43.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _43.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorDelegationsRequest;
                fromPartial(object: any): _43.QueryDelegatorDelegationsRequest;
                fromAmino(object: _43.QueryDelegatorDelegationsRequestAmino): _43.QueryDelegatorDelegationsRequest;
                toAmino(message: _43.QueryDelegatorDelegationsRequest): _43.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorDelegationsRequestAminoMsg): _43.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _43.QueryDelegatorDelegationsRequest): _43.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorDelegationsRequestProtoMsg): _43.QueryDelegatorDelegationsRequest;
                toProto(message: _43.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorDelegationsRequest): _43.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _43.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorDelegationsResponse;
                fromPartial(object: any): _43.QueryDelegatorDelegationsResponse;
                fromAmino(object: _43.QueryDelegatorDelegationsResponseAmino): _43.QueryDelegatorDelegationsResponse;
                toAmino(message: _43.QueryDelegatorDelegationsResponse): _43.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorDelegationsResponseAminoMsg): _43.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _43.QueryDelegatorDelegationsResponse): _43.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorDelegationsResponseProtoMsg): _43.QueryDelegatorDelegationsResponse;
                toProto(message: _43.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorDelegationsResponse): _43.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _43.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: any): _43.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _43.QueryDelegatorUnbondingDelegationsRequestAmino): _43.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _43.QueryDelegatorUnbondingDelegationsRequest): _43.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _43.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _43.QueryDelegatorUnbondingDelegationsRequest): _43.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _43.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _43.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorUnbondingDelegationsRequest): _43.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _43.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: any): _43.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _43.QueryDelegatorUnbondingDelegationsResponseAmino): _43.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _43.QueryDelegatorUnbondingDelegationsResponse): _43.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _43.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _43.QueryDelegatorUnbondingDelegationsResponse): _43.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _43.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _43.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorUnbondingDelegationsResponse): _43.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _43.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryRedelegationsRequest;
                fromPartial(object: any): _43.QueryRedelegationsRequest;
                fromAmino(object: _43.QueryRedelegationsRequestAmino): _43.QueryRedelegationsRequest;
                toAmino(message: _43.QueryRedelegationsRequest): _43.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _43.QueryRedelegationsRequestAminoMsg): _43.QueryRedelegationsRequest;
                toAminoMsg(message: _43.QueryRedelegationsRequest): _43.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryRedelegationsRequestProtoMsg): _43.QueryRedelegationsRequest;
                toProto(message: _43.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryRedelegationsRequest): _43.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _43.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryRedelegationsResponse;
                fromPartial(object: any): _43.QueryRedelegationsResponse;
                fromAmino(object: _43.QueryRedelegationsResponseAmino): _43.QueryRedelegationsResponse;
                toAmino(message: _43.QueryRedelegationsResponse): _43.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _43.QueryRedelegationsResponseAminoMsg): _43.QueryRedelegationsResponse;
                toAminoMsg(message: _43.QueryRedelegationsResponse): _43.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryRedelegationsResponseProtoMsg): _43.QueryRedelegationsResponse;
                toProto(message: _43.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryRedelegationsResponse): _43.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _43.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _43.QueryDelegatorValidatorsRequest;
                fromAmino(object: _43.QueryDelegatorValidatorsRequestAmino): _43.QueryDelegatorValidatorsRequest;
                toAmino(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorsRequestAminoMsg): _43.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorsRequestProtoMsg): _43.QueryDelegatorValidatorsRequest;
                toProto(message: _43.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorsRequest): _43.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _43.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _43.QueryDelegatorValidatorsResponse;
                fromAmino(object: _43.QueryDelegatorValidatorsResponseAmino): _43.QueryDelegatorValidatorsResponse;
                toAmino(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorsResponseAminoMsg): _43.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorsResponseProtoMsg): _43.QueryDelegatorValidatorsResponse;
                toProto(message: _43.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorsResponse): _43.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _43.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorValidatorRequest;
                fromPartial(object: any): _43.QueryDelegatorValidatorRequest;
                fromAmino(object: _43.QueryDelegatorValidatorRequestAmino): _43.QueryDelegatorValidatorRequest;
                toAmino(message: _43.QueryDelegatorValidatorRequest): _43.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorRequestAminoMsg): _43.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _43.QueryDelegatorValidatorRequest): _43.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorRequestProtoMsg): _43.QueryDelegatorValidatorRequest;
                toProto(message: _43.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorRequest): _43.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _43.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDelegatorValidatorResponse;
                fromPartial(object: any): _43.QueryDelegatorValidatorResponse;
                fromAmino(object: _43.QueryDelegatorValidatorResponseAmino): _43.QueryDelegatorValidatorResponse;
                toAmino(message: _43.QueryDelegatorValidatorResponse): _43.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _43.QueryDelegatorValidatorResponseAminoMsg): _43.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _43.QueryDelegatorValidatorResponse): _43.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _43.QueryDelegatorValidatorResponseProtoMsg): _43.QueryDelegatorValidatorResponse;
                toProto(message: _43.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _43.QueryDelegatorValidatorResponse): _43.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _43.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryHistoricalInfoRequest;
                fromPartial(object: any): _43.QueryHistoricalInfoRequest;
                fromAmino(object: _43.QueryHistoricalInfoRequestAmino): _43.QueryHistoricalInfoRequest;
                toAmino(message: _43.QueryHistoricalInfoRequest): _43.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _43.QueryHistoricalInfoRequestAminoMsg): _43.QueryHistoricalInfoRequest;
                toAminoMsg(message: _43.QueryHistoricalInfoRequest): _43.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _43.QueryHistoricalInfoRequestProtoMsg): _43.QueryHistoricalInfoRequest;
                toProto(message: _43.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _43.QueryHistoricalInfoRequest): _43.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _43.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryHistoricalInfoResponse;
                fromPartial(object: any): _43.QueryHistoricalInfoResponse;
                fromAmino(object: _43.QueryHistoricalInfoResponseAmino): _43.QueryHistoricalInfoResponse;
                toAmino(message: _43.QueryHistoricalInfoResponse): _43.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _43.QueryHistoricalInfoResponseAminoMsg): _43.QueryHistoricalInfoResponse;
                toAminoMsg(message: _43.QueryHistoricalInfoResponse): _43.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _43.QueryHistoricalInfoResponseProtoMsg): _43.QueryHistoricalInfoResponse;
                toProto(message: _43.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _43.QueryHistoricalInfoResponse): _43.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _43.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryPoolRequest;
                fromPartial(_: any): _43.QueryPoolRequest;
                fromAmino(_: _43.QueryPoolRequestAmino): _43.QueryPoolRequest;
                toAmino(_: _43.QueryPoolRequest): _43.QueryPoolRequestAmino;
                fromAminoMsg(object: _43.QueryPoolRequestAminoMsg): _43.QueryPoolRequest;
                toAminoMsg(message: _43.QueryPoolRequest): _43.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _43.QueryPoolRequestProtoMsg): _43.QueryPoolRequest;
                toProto(message: _43.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _43.QueryPoolRequest): _43.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _43.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryPoolResponse;
                fromPartial(object: any): _43.QueryPoolResponse;
                fromAmino(object: _43.QueryPoolResponseAmino): _43.QueryPoolResponse;
                toAmino(message: _43.QueryPoolResponse): _43.QueryPoolResponseAmino;
                fromAminoMsg(object: _43.QueryPoolResponseAminoMsg): _43.QueryPoolResponse;
                toAminoMsg(message: _43.QueryPoolResponse): _43.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _43.QueryPoolResponseProtoMsg): _43.QueryPoolResponse;
                toProto(message: _43.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _43.QueryPoolResponse): _43.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsRequest;
                fromPartial(_: any): _43.QueryParamsRequest;
                fromAmino(_: _43.QueryParamsRequestAmino): _43.QueryParamsRequest;
                toAmino(_: _43.QueryParamsRequest): _43.QueryParamsRequestAmino;
                fromAminoMsg(object: _43.QueryParamsRequestAminoMsg): _43.QueryParamsRequest;
                toAminoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _43.QueryParamsRequestProtoMsg): _43.QueryParamsRequest;
                toProto(message: _43.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _43.QueryParamsRequest): _43.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsResponse;
                fromPartial(object: any): _43.QueryParamsResponse;
                fromAmino(object: _43.QueryParamsResponseAmino): _43.QueryParamsResponse;
                toAmino(message: _43.QueryParamsResponse): _43.QueryParamsResponseAmino;
                fromAminoMsg(object: _43.QueryParamsResponseAminoMsg): _43.QueryParamsResponse;
                toAminoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _43.QueryParamsResponseProtoMsg): _43.QueryParamsResponse;
                toProto(message: _43.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _43.QueryParamsResponse): _43.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _42.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.GenesisState;
                fromPartial(object: any): _42.GenesisState;
                fromAmino(object: _42.GenesisStateAmino): _42.GenesisState;
                toAmino(message: _42.GenesisState): _42.GenesisStateAmino;
                fromAminoMsg(object: _42.GenesisStateAminoMsg): _42.GenesisState;
                toAminoMsg(message: _42.GenesisState): _42.GenesisStateAminoMsg;
                fromProtoMsg(message: _42.GenesisStateProtoMsg): _42.GenesisState;
                toProto(message: _42.GenesisState): Uint8Array;
                toProtoMsg(message: _42.GenesisState): _42.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _42.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.LastValidatorPower;
                fromPartial(object: any): _42.LastValidatorPower;
                fromAmino(object: _42.LastValidatorPowerAmino): _42.LastValidatorPower;
                toAmino(message: _42.LastValidatorPower): _42.LastValidatorPowerAmino;
                fromAminoMsg(object: _42.LastValidatorPowerAminoMsg): _42.LastValidatorPower;
                toAminoMsg(message: _42.LastValidatorPower): _42.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _42.LastValidatorPowerProtoMsg): _42.LastValidatorPower;
                toProto(message: _42.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _42.LastValidatorPower): _42.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _41.AuthorizationType;
            authorizationTypeToJSON(object: _41.AuthorizationType): string;
            AuthorizationType: typeof _41.AuthorizationType;
            AuthorizationTypeSDKType: typeof _41.AuthorizationType;
            AuthorizationTypeAmino: typeof _41.AuthorizationType;
            StakeAuthorization: {
                encode(message: _41.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.StakeAuthorization;
                fromPartial(object: any): _41.StakeAuthorization;
                fromAmino(object: _41.StakeAuthorizationAmino): _41.StakeAuthorization;
                toAmino(message: _41.StakeAuthorization): _41.StakeAuthorizationAmino;
                fromAminoMsg(object: _41.StakeAuthorizationAminoMsg): _41.StakeAuthorization;
                toAminoMsg(message: _41.StakeAuthorization): _41.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _41.StakeAuthorizationProtoMsg): _41.StakeAuthorization;
                toProto(message: _41.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _41.StakeAuthorization): _41.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _41.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.StakeAuthorization_Validators;
                fromPartial(object: any): _41.StakeAuthorization_Validators;
                fromAmino(object: _41.StakeAuthorization_ValidatorsAmino): _41.StakeAuthorization_Validators;
                toAmino(message: _41.StakeAuthorization_Validators): _41.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _41.StakeAuthorization_ValidatorsAminoMsg): _41.StakeAuthorization_Validators;
                toAminoMsg(message: _41.StakeAuthorization_Validators): _41.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _41.StakeAuthorization_ValidatorsProtoMsg): _41.StakeAuthorization_Validators;
                toProto(message: _41.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _41.StakeAuthorization_Validators): _41.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _46.SignMode;
                signModeToJSON(object: _46.SignMode): string;
                SignMode: typeof _46.SignMode;
                SignModeSDKType: typeof _46.SignMode;
                SignModeAmino: typeof _46.SignMode;
                SignatureDescriptors: {
                    encode(message: _46.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SignatureDescriptors;
                    fromPartial(object: any): _46.SignatureDescriptors;
                    fromAmino(object: _46.SignatureDescriptorsAmino): _46.SignatureDescriptors;
                    toAmino(message: _46.SignatureDescriptors): _46.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _46.SignatureDescriptorsAminoMsg): _46.SignatureDescriptors;
                    toAminoMsg(message: _46.SignatureDescriptors): _46.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _46.SignatureDescriptorsProtoMsg): _46.SignatureDescriptors;
                    toProto(message: _46.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _46.SignatureDescriptors): _46.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _46.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SignatureDescriptor;
                    fromPartial(object: any): _46.SignatureDescriptor;
                    fromAmino(object: _46.SignatureDescriptorAmino): _46.SignatureDescriptor;
                    toAmino(message: _46.SignatureDescriptor): _46.SignatureDescriptorAmino;
                    fromAminoMsg(object: _46.SignatureDescriptorAminoMsg): _46.SignatureDescriptor;
                    toAminoMsg(message: _46.SignatureDescriptor): _46.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _46.SignatureDescriptorProtoMsg): _46.SignatureDescriptor;
                    toProto(message: _46.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _46.SignatureDescriptor): _46.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _46.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SignatureDescriptor_Data;
                    fromPartial(object: any): _46.SignatureDescriptor_Data;
                    fromAmino(object: _46.SignatureDescriptor_DataAmino): _46.SignatureDescriptor_Data;
                    toAmino(message: _46.SignatureDescriptor_Data): _46.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _46.SignatureDescriptor_DataAminoMsg): _46.SignatureDescriptor_Data;
                    toAminoMsg(message: _46.SignatureDescriptor_Data): _46.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _46.SignatureDescriptor_DataProtoMsg): _46.SignatureDescriptor_Data;
                    toProto(message: _46.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _46.SignatureDescriptor_Data): _46.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _46.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SignatureDescriptor_Data_Single;
                    fromPartial(object: any): _46.SignatureDescriptor_Data_Single;
                    fromAmino(object: _46.SignatureDescriptor_Data_SingleAmino): _46.SignatureDescriptor_Data_Single;
                    toAmino(message: _46.SignatureDescriptor_Data_Single): _46.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _46.SignatureDescriptor_Data_SingleAminoMsg): _46.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _46.SignatureDescriptor_Data_Single): _46.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _46.SignatureDescriptor_Data_SingleProtoMsg): _46.SignatureDescriptor_Data_Single;
                    toProto(message: _46.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _46.SignatureDescriptor_Data_Single): _46.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _46.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SignatureDescriptor_Data_Multi;
                    fromPartial(object: any): _46.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _46.SignatureDescriptor_Data_MultiAmino): _46.SignatureDescriptor_Data_Multi;
                    toAmino(message: _46.SignatureDescriptor_Data_Multi): _46.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _46.SignatureDescriptor_Data_MultiAminoMsg): _46.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _46.SignatureDescriptor_Data_Multi): _46.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _46.SignatureDescriptor_Data_MultiProtoMsg): _46.SignatureDescriptor_Data_Multi;
                    toProto(message: _46.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _46.SignatureDescriptor_Data_Multi): _46.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _142.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _47.SimulateRequest): Promise<_47.SimulateResponse>;
                getTx(request: _47.GetTxRequest): Promise<_47.GetTxResponse>;
                broadcastTx(request: _47.BroadcastTxRequest): Promise<_47.BroadcastTxResponse>;
                getTxsEvent(request: _47.GetTxsEventRequest): Promise<_47.GetTxsEventResponse>;
                getBlockWithTxs(request: _47.GetBlockWithTxsRequest): Promise<_47.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _131.LCDQueryClient;
            Tx: {
                encode(message: _48.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Tx;
                fromPartial(object: any): _48.Tx;
                fromAmino(object: _48.TxAmino): _48.Tx;
                toAmino(message: _48.Tx): _48.TxAmino;
                fromAminoMsg(object: _48.TxAminoMsg): _48.Tx;
                toAminoMsg(message: _48.Tx): _48.TxAminoMsg;
                fromProtoMsg(message: _48.TxProtoMsg): _48.Tx;
                toProto(message: _48.Tx): Uint8Array;
                toProtoMsg(message: _48.Tx): _48.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _48.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TxRaw;
                fromPartial(object: any): _48.TxRaw;
                fromAmino(object: _48.TxRawAmino): _48.TxRaw;
                toAmino(message: _48.TxRaw): _48.TxRawAmino;
                fromAminoMsg(object: _48.TxRawAminoMsg): _48.TxRaw;
                toAminoMsg(message: _48.TxRaw): _48.TxRawAminoMsg;
                fromProtoMsg(message: _48.TxRawProtoMsg): _48.TxRaw;
                toProto(message: _48.TxRaw): Uint8Array;
                toProtoMsg(message: _48.TxRaw): _48.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _48.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignDoc;
                fromPartial(object: any): _48.SignDoc;
                fromAmino(object: _48.SignDocAmino): _48.SignDoc;
                toAmino(message: _48.SignDoc): _48.SignDocAmino;
                fromAminoMsg(object: _48.SignDocAminoMsg): _48.SignDoc;
                toAminoMsg(message: _48.SignDoc): _48.SignDocAminoMsg;
                fromProtoMsg(message: _48.SignDocProtoMsg): _48.SignDoc;
                toProto(message: _48.SignDoc): Uint8Array;
                toProtoMsg(message: _48.SignDoc): _48.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _48.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignDocDirectAux;
                fromPartial(object: any): _48.SignDocDirectAux;
                fromAmino(object: _48.SignDocDirectAuxAmino): _48.SignDocDirectAux;
                toAmino(message: _48.SignDocDirectAux): _48.SignDocDirectAuxAmino;
                fromAminoMsg(object: _48.SignDocDirectAuxAminoMsg): _48.SignDocDirectAux;
                toAminoMsg(message: _48.SignDocDirectAux): _48.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _48.SignDocDirectAuxProtoMsg): _48.SignDocDirectAux;
                toProto(message: _48.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _48.SignDocDirectAux): _48.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _48.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.TxBody;
                fromPartial(object: any): _48.TxBody;
                fromAmino(object: _48.TxBodyAmino): _48.TxBody;
                toAmino(message: _48.TxBody): _48.TxBodyAmino;
                fromAminoMsg(object: _48.TxBodyAminoMsg): _48.TxBody;
                toAminoMsg(message: _48.TxBody): _48.TxBodyAminoMsg;
                fromProtoMsg(message: _48.TxBodyProtoMsg): _48.TxBody;
                toProto(message: _48.TxBody): Uint8Array;
                toProtoMsg(message: _48.TxBody): _48.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _48.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AuthInfo;
                fromPartial(object: any): _48.AuthInfo;
                fromAmino(object: _48.AuthInfoAmino): _48.AuthInfo;
                toAmino(message: _48.AuthInfo): _48.AuthInfoAmino;
                fromAminoMsg(object: _48.AuthInfoAminoMsg): _48.AuthInfo;
                toAminoMsg(message: _48.AuthInfo): _48.AuthInfoAminoMsg;
                fromProtoMsg(message: _48.AuthInfoProtoMsg): _48.AuthInfo;
                toProto(message: _48.AuthInfo): Uint8Array;
                toProtoMsg(message: _48.AuthInfo): _48.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _48.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.SignerInfo;
                fromPartial(object: any): _48.SignerInfo;
                fromAmino(object: _48.SignerInfoAmino): _48.SignerInfo;
                toAmino(message: _48.SignerInfo): _48.SignerInfoAmino;
                fromAminoMsg(object: _48.SignerInfoAminoMsg): _48.SignerInfo;
                toAminoMsg(message: _48.SignerInfo): _48.SignerInfoAminoMsg;
                fromProtoMsg(message: _48.SignerInfoProtoMsg): _48.SignerInfo;
                toProto(message: _48.SignerInfo): Uint8Array;
                toProtoMsg(message: _48.SignerInfo): _48.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _48.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ModeInfo;
                fromPartial(object: any): _48.ModeInfo;
                fromAmino(object: _48.ModeInfoAmino): _48.ModeInfo;
                toAmino(message: _48.ModeInfo): _48.ModeInfoAmino;
                fromAminoMsg(object: _48.ModeInfoAminoMsg): _48.ModeInfo;
                toAminoMsg(message: _48.ModeInfo): _48.ModeInfoAminoMsg;
                fromProtoMsg(message: _48.ModeInfoProtoMsg): _48.ModeInfo;
                toProto(message: _48.ModeInfo): Uint8Array;
                toProtoMsg(message: _48.ModeInfo): _48.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _48.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ModeInfo_Single;
                fromPartial(object: any): _48.ModeInfo_Single;
                fromAmino(object: _48.ModeInfo_SingleAmino): _48.ModeInfo_Single;
                toAmino(message: _48.ModeInfo_Single): _48.ModeInfo_SingleAmino;
                fromAminoMsg(object: _48.ModeInfo_SingleAminoMsg): _48.ModeInfo_Single;
                toAminoMsg(message: _48.ModeInfo_Single): _48.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _48.ModeInfo_SingleProtoMsg): _48.ModeInfo_Single;
                toProto(message: _48.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _48.ModeInfo_Single): _48.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _48.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.ModeInfo_Multi;
                fromPartial(object: any): _48.ModeInfo_Multi;
                fromAmino(object: _48.ModeInfo_MultiAmino): _48.ModeInfo_Multi;
                toAmino(message: _48.ModeInfo_Multi): _48.ModeInfo_MultiAmino;
                fromAminoMsg(object: _48.ModeInfo_MultiAminoMsg): _48.ModeInfo_Multi;
                toAminoMsg(message: _48.ModeInfo_Multi): _48.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _48.ModeInfo_MultiProtoMsg): _48.ModeInfo_Multi;
                toProto(message: _48.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _48.ModeInfo_Multi): _48.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _48.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Fee;
                fromPartial(object: any): _48.Fee;
                fromAmino(object: _48.FeeAmino): _48.Fee;
                toAmino(message: _48.Fee): _48.FeeAmino;
                fromAminoMsg(object: _48.FeeAminoMsg): _48.Fee;
                toAminoMsg(message: _48.Fee): _48.FeeAminoMsg;
                fromProtoMsg(message: _48.FeeProtoMsg): _48.Fee;
                toProto(message: _48.Fee): Uint8Array;
                toProtoMsg(message: _48.Fee): _48.FeeProtoMsg;
            };
            Tip: {
                encode(message: _48.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Tip;
                fromPartial(object: any): _48.Tip;
                fromAmino(object: _48.TipAmino): _48.Tip;
                toAmino(message: _48.Tip): _48.TipAmino;
                fromAminoMsg(object: _48.TipAminoMsg): _48.Tip;
                toAminoMsg(message: _48.Tip): _48.TipAminoMsg;
                fromProtoMsg(message: _48.TipProtoMsg): _48.Tip;
                toProto(message: _48.Tip): Uint8Array;
                toProtoMsg(message: _48.Tip): _48.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _48.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.AuxSignerData;
                fromPartial(object: any): _48.AuxSignerData;
                fromAmino(object: _48.AuxSignerDataAmino): _48.AuxSignerData;
                toAmino(message: _48.AuxSignerData): _48.AuxSignerDataAmino;
                fromAminoMsg(object: _48.AuxSignerDataAminoMsg): _48.AuxSignerData;
                toAminoMsg(message: _48.AuxSignerData): _48.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _48.AuxSignerDataProtoMsg): _48.AuxSignerData;
                toProto(message: _48.AuxSignerData): Uint8Array;
                toProtoMsg(message: _48.AuxSignerData): _48.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _47.OrderBy;
            orderByToJSON(object: _47.OrderBy): string;
            broadcastModeFromJSON(object: any): _47.BroadcastMode;
            broadcastModeToJSON(object: _47.BroadcastMode): string;
            OrderBy: typeof _47.OrderBy;
            OrderBySDKType: typeof _47.OrderBy;
            OrderByAmino: typeof _47.OrderBy;
            BroadcastMode: typeof _47.BroadcastMode;
            BroadcastModeSDKType: typeof _47.BroadcastMode;
            BroadcastModeAmino: typeof _47.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _47.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GetTxsEventRequest;
                fromPartial(object: any): _47.GetTxsEventRequest;
                fromAmino(object: _47.GetTxsEventRequestAmino): _47.GetTxsEventRequest;
                toAmino(message: _47.GetTxsEventRequest): _47.GetTxsEventRequestAmino;
                fromAminoMsg(object: _47.GetTxsEventRequestAminoMsg): _47.GetTxsEventRequest;
                toAminoMsg(message: _47.GetTxsEventRequest): _47.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _47.GetTxsEventRequestProtoMsg): _47.GetTxsEventRequest;
                toProto(message: _47.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _47.GetTxsEventRequest): _47.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _47.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GetTxsEventResponse;
                fromPartial(object: any): _47.GetTxsEventResponse;
                fromAmino(object: _47.GetTxsEventResponseAmino): _47.GetTxsEventResponse;
                toAmino(message: _47.GetTxsEventResponse): _47.GetTxsEventResponseAmino;
                fromAminoMsg(object: _47.GetTxsEventResponseAminoMsg): _47.GetTxsEventResponse;
                toAminoMsg(message: _47.GetTxsEventResponse): _47.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _47.GetTxsEventResponseProtoMsg): _47.GetTxsEventResponse;
                toProto(message: _47.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _47.GetTxsEventResponse): _47.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _47.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.BroadcastTxRequest;
                fromPartial(object: any): _47.BroadcastTxRequest;
                fromAmino(object: _47.BroadcastTxRequestAmino): _47.BroadcastTxRequest;
                toAmino(message: _47.BroadcastTxRequest): _47.BroadcastTxRequestAmino;
                fromAminoMsg(object: _47.BroadcastTxRequestAminoMsg): _47.BroadcastTxRequest;
                toAminoMsg(message: _47.BroadcastTxRequest): _47.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _47.BroadcastTxRequestProtoMsg): _47.BroadcastTxRequest;
                toProto(message: _47.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _47.BroadcastTxRequest): _47.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _47.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.BroadcastTxResponse;
                fromPartial(object: any): _47.BroadcastTxResponse;
                fromAmino(object: _47.BroadcastTxResponseAmino): _47.BroadcastTxResponse;
                toAmino(message: _47.BroadcastTxResponse): _47.BroadcastTxResponseAmino;
                fromAminoMsg(object: _47.BroadcastTxResponseAminoMsg): _47.BroadcastTxResponse;
                toAminoMsg(message: _47.BroadcastTxResponse): _47.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _47.BroadcastTxResponseProtoMsg): _47.BroadcastTxResponse;
                toProto(message: _47.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _47.BroadcastTxResponse): _47.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _47.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.SimulateRequest;
                fromPartial(object: any): _47.SimulateRequest;
                fromAmino(object: _47.SimulateRequestAmino): _47.SimulateRequest;
                toAmino(message: _47.SimulateRequest): _47.SimulateRequestAmino;
                fromAminoMsg(object: _47.SimulateRequestAminoMsg): _47.SimulateRequest;
                toAminoMsg(message: _47.SimulateRequest): _47.SimulateRequestAminoMsg;
                fromProtoMsg(message: _47.SimulateRequestProtoMsg): _47.SimulateRequest;
                toProto(message: _47.SimulateRequest): Uint8Array;
                toProtoMsg(message: _47.SimulateRequest): _47.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _47.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.SimulateResponse;
                fromPartial(object: any): _47.SimulateResponse;
                fromAmino(object: _47.SimulateResponseAmino): _47.SimulateResponse;
                toAmino(message: _47.SimulateResponse): _47.SimulateResponseAmino;
                fromAminoMsg(object: _47.SimulateResponseAminoMsg): _47.SimulateResponse;
                toAminoMsg(message: _47.SimulateResponse): _47.SimulateResponseAminoMsg;
                fromProtoMsg(message: _47.SimulateResponseProtoMsg): _47.SimulateResponse;
                toProto(message: _47.SimulateResponse): Uint8Array;
                toProtoMsg(message: _47.SimulateResponse): _47.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _47.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GetTxRequest;
                fromPartial(object: any): _47.GetTxRequest;
                fromAmino(object: _47.GetTxRequestAmino): _47.GetTxRequest;
                toAmino(message: _47.GetTxRequest): _47.GetTxRequestAmino;
                fromAminoMsg(object: _47.GetTxRequestAminoMsg): _47.GetTxRequest;
                toAminoMsg(message: _47.GetTxRequest): _47.GetTxRequestAminoMsg;
                fromProtoMsg(message: _47.GetTxRequestProtoMsg): _47.GetTxRequest;
                toProto(message: _47.GetTxRequest): Uint8Array;
                toProtoMsg(message: _47.GetTxRequest): _47.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _47.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GetTxResponse;
                fromPartial(object: any): _47.GetTxResponse;
                fromAmino(object: _47.GetTxResponseAmino): _47.GetTxResponse;
                toAmino(message: _47.GetTxResponse): _47.GetTxResponseAmino;
                fromAminoMsg(object: _47.GetTxResponseAminoMsg): _47.GetTxResponse;
                toAminoMsg(message: _47.GetTxResponse): _47.GetTxResponseAminoMsg;
                fromProtoMsg(message: _47.GetTxResponseProtoMsg): _47.GetTxResponse;
                toProto(message: _47.GetTxResponse): Uint8Array;
                toProtoMsg(message: _47.GetTxResponse): _47.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _47.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GetBlockWithTxsRequest;
                fromPartial(object: any): _47.GetBlockWithTxsRequest;
                fromAmino(object: _47.GetBlockWithTxsRequestAmino): _47.GetBlockWithTxsRequest;
                toAmino(message: _47.GetBlockWithTxsRequest): _47.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _47.GetBlockWithTxsRequestAminoMsg): _47.GetBlockWithTxsRequest;
                toAminoMsg(message: _47.GetBlockWithTxsRequest): _47.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _47.GetBlockWithTxsRequestProtoMsg): _47.GetBlockWithTxsRequest;
                toProto(message: _47.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _47.GetBlockWithTxsRequest): _47.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _47.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.GetBlockWithTxsResponse;
                fromPartial(object: any): _47.GetBlockWithTxsResponse;
                fromAmino(object: _47.GetBlockWithTxsResponseAmino): _47.GetBlockWithTxsResponse;
                toAmino(message: _47.GetBlockWithTxsResponse): _47.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _47.GetBlockWithTxsResponseAminoMsg): _47.GetBlockWithTxsResponse;
                toAminoMsg(message: _47.GetBlockWithTxsResponse): _47.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _47.GetBlockWithTxsResponseProtoMsg): _47.GetBlockWithTxsResponse;
                toProto(message: _47.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _47.GetBlockWithTxsResponse): _47.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _150.MsgClientImpl;
            QueryClientImpl: typeof _143.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _49.QueryCurrentPlanRequest): Promise<_49.QueryCurrentPlanResponse>;
                appliedPlan(request: _49.QueryAppliedPlanRequest): Promise<_49.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _49.QueryUpgradedConsensusStateRequest): Promise<_49.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _49.QueryModuleVersionsRequest): Promise<_49.QueryModuleVersionsResponse>;
                authority(request?: _49.QueryAuthorityRequest): Promise<_49.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _132.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _50.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _50.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _50.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _50.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _50.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _50.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _50.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _50.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _50.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _50.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _50.MsgSoftwareUpgrade) => _50.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _50.MsgSoftwareUpgradeAmino) => _50.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _50.MsgCancelUpgrade) => _50.MsgCancelUpgradeAmino;
                    fromAmino: (object: _50.MsgCancelUpgradeAmino) => _50.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _51.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Plan;
                fromPartial(object: any): _51.Plan;
                fromAmino(object: _51.PlanAmino): _51.Plan;
                toAmino(message: _51.Plan): _51.PlanAmino;
                fromAminoMsg(object: _51.PlanAminoMsg): _51.Plan;
                toAminoMsg(message: _51.Plan): _51.PlanAminoMsg;
                fromProtoMsg(message: _51.PlanProtoMsg): _51.Plan;
                toProto(message: _51.Plan): Uint8Array;
                toProtoMsg(message: _51.Plan): _51.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _51.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.SoftwareUpgradeProposal;
                fromPartial(object: any): _51.SoftwareUpgradeProposal;
                fromAmino(object: _51.SoftwareUpgradeProposalAmino): _51.SoftwareUpgradeProposal;
                toAmino(message: _51.SoftwareUpgradeProposal): _51.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _51.SoftwareUpgradeProposalAminoMsg): _51.SoftwareUpgradeProposal;
                toAminoMsg(message: _51.SoftwareUpgradeProposal): _51.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _51.SoftwareUpgradeProposalProtoMsg): _51.SoftwareUpgradeProposal;
                toProto(message: _51.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _51.SoftwareUpgradeProposal): _51.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _51.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.CancelSoftwareUpgradeProposal;
                fromPartial(object: any): _51.CancelSoftwareUpgradeProposal;
                fromAmino(object: _51.CancelSoftwareUpgradeProposalAmino): _51.CancelSoftwareUpgradeProposal;
                toAmino(message: _51.CancelSoftwareUpgradeProposal): _51.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _51.CancelSoftwareUpgradeProposalAminoMsg): _51.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _51.CancelSoftwareUpgradeProposal): _51.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _51.CancelSoftwareUpgradeProposalProtoMsg): _51.CancelSoftwareUpgradeProposal;
                toProto(message: _51.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _51.CancelSoftwareUpgradeProposal): _51.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _51.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.ModuleVersion;
                fromPartial(object: any): _51.ModuleVersion;
                fromAmino(object: _51.ModuleVersionAmino): _51.ModuleVersion;
                toAmino(message: _51.ModuleVersion): _51.ModuleVersionAmino;
                fromAminoMsg(object: _51.ModuleVersionAminoMsg): _51.ModuleVersion;
                toAminoMsg(message: _51.ModuleVersion): _51.ModuleVersionAminoMsg;
                fromProtoMsg(message: _51.ModuleVersionProtoMsg): _51.ModuleVersion;
                toProto(message: _51.ModuleVersion): Uint8Array;
                toProtoMsg(message: _51.ModuleVersion): _51.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _50.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSoftwareUpgrade;
                fromPartial(object: any): _50.MsgSoftwareUpgrade;
                fromAmino(object: _50.MsgSoftwareUpgradeAmino): _50.MsgSoftwareUpgrade;
                toAmino(message: _50.MsgSoftwareUpgrade): _50.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _50.MsgSoftwareUpgradeAminoMsg): _50.MsgSoftwareUpgrade;
                toAminoMsg(message: _50.MsgSoftwareUpgrade): _50.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _50.MsgSoftwareUpgradeProtoMsg): _50.MsgSoftwareUpgrade;
                toProto(message: _50.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _50.MsgSoftwareUpgrade): _50.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _50.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgSoftwareUpgradeResponse;
                fromPartial(_: any): _50.MsgSoftwareUpgradeResponse;
                fromAmino(_: _50.MsgSoftwareUpgradeResponseAmino): _50.MsgSoftwareUpgradeResponse;
                toAmino(_: _50.MsgSoftwareUpgradeResponse): _50.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _50.MsgSoftwareUpgradeResponseAminoMsg): _50.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _50.MsgSoftwareUpgradeResponse): _50.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _50.MsgSoftwareUpgradeResponseProtoMsg): _50.MsgSoftwareUpgradeResponse;
                toProto(message: _50.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _50.MsgSoftwareUpgradeResponse): _50.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _50.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgCancelUpgrade;
                fromPartial(object: any): _50.MsgCancelUpgrade;
                fromAmino(object: _50.MsgCancelUpgradeAmino): _50.MsgCancelUpgrade;
                toAmino(message: _50.MsgCancelUpgrade): _50.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _50.MsgCancelUpgradeAminoMsg): _50.MsgCancelUpgrade;
                toAminoMsg(message: _50.MsgCancelUpgrade): _50.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _50.MsgCancelUpgradeProtoMsg): _50.MsgCancelUpgrade;
                toProto(message: _50.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _50.MsgCancelUpgrade): _50.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _50.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.MsgCancelUpgradeResponse;
                fromPartial(_: any): _50.MsgCancelUpgradeResponse;
                fromAmino(_: _50.MsgCancelUpgradeResponseAmino): _50.MsgCancelUpgradeResponse;
                toAmino(_: _50.MsgCancelUpgradeResponse): _50.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _50.MsgCancelUpgradeResponseAminoMsg): _50.MsgCancelUpgradeResponse;
                toAminoMsg(message: _50.MsgCancelUpgradeResponse): _50.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _50.MsgCancelUpgradeResponseProtoMsg): _50.MsgCancelUpgradeResponse;
                toProto(message: _50.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _50.MsgCancelUpgradeResponse): _50.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _49.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCurrentPlanRequest;
                fromPartial(_: any): _49.QueryCurrentPlanRequest;
                fromAmino(_: _49.QueryCurrentPlanRequestAmino): _49.QueryCurrentPlanRequest;
                toAmino(_: _49.QueryCurrentPlanRequest): _49.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _49.QueryCurrentPlanRequestAminoMsg): _49.QueryCurrentPlanRequest;
                toAminoMsg(message: _49.QueryCurrentPlanRequest): _49.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _49.QueryCurrentPlanRequestProtoMsg): _49.QueryCurrentPlanRequest;
                toProto(message: _49.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _49.QueryCurrentPlanRequest): _49.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _49.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryCurrentPlanResponse;
                fromPartial(object: any): _49.QueryCurrentPlanResponse;
                fromAmino(object: _49.QueryCurrentPlanResponseAmino): _49.QueryCurrentPlanResponse;
                toAmino(message: _49.QueryCurrentPlanResponse): _49.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _49.QueryCurrentPlanResponseAminoMsg): _49.QueryCurrentPlanResponse;
                toAminoMsg(message: _49.QueryCurrentPlanResponse): _49.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _49.QueryCurrentPlanResponseProtoMsg): _49.QueryCurrentPlanResponse;
                toProto(message: _49.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _49.QueryCurrentPlanResponse): _49.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _49.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAppliedPlanRequest;
                fromPartial(object: any): _49.QueryAppliedPlanRequest;
                fromAmino(object: _49.QueryAppliedPlanRequestAmino): _49.QueryAppliedPlanRequest;
                toAmino(message: _49.QueryAppliedPlanRequest): _49.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _49.QueryAppliedPlanRequestAminoMsg): _49.QueryAppliedPlanRequest;
                toAminoMsg(message: _49.QueryAppliedPlanRequest): _49.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAppliedPlanRequestProtoMsg): _49.QueryAppliedPlanRequest;
                toProto(message: _49.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAppliedPlanRequest): _49.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _49.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAppliedPlanResponse;
                fromPartial(object: any): _49.QueryAppliedPlanResponse;
                fromAmino(object: _49.QueryAppliedPlanResponseAmino): _49.QueryAppliedPlanResponse;
                toAmino(message: _49.QueryAppliedPlanResponse): _49.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _49.QueryAppliedPlanResponseAminoMsg): _49.QueryAppliedPlanResponse;
                toAminoMsg(message: _49.QueryAppliedPlanResponse): _49.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAppliedPlanResponseProtoMsg): _49.QueryAppliedPlanResponse;
                toProto(message: _49.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAppliedPlanResponse): _49.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _49.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryUpgradedConsensusStateRequest;
                fromPartial(object: any): _49.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _49.QueryUpgradedConsensusStateRequestAmino): _49.QueryUpgradedConsensusStateRequest;
                toAmino(message: _49.QueryUpgradedConsensusStateRequest): _49.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _49.QueryUpgradedConsensusStateRequestAminoMsg): _49.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _49.QueryUpgradedConsensusStateRequest): _49.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _49.QueryUpgradedConsensusStateRequestProtoMsg): _49.QueryUpgradedConsensusStateRequest;
                toProto(message: _49.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _49.QueryUpgradedConsensusStateRequest): _49.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _49.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryUpgradedConsensusStateResponse;
                fromPartial(object: any): _49.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _49.QueryUpgradedConsensusStateResponseAmino): _49.QueryUpgradedConsensusStateResponse;
                toAmino(message: _49.QueryUpgradedConsensusStateResponse): _49.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _49.QueryUpgradedConsensusStateResponseAminoMsg): _49.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _49.QueryUpgradedConsensusStateResponse): _49.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _49.QueryUpgradedConsensusStateResponseProtoMsg): _49.QueryUpgradedConsensusStateResponse;
                toProto(message: _49.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _49.QueryUpgradedConsensusStateResponse): _49.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _49.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryModuleVersionsRequest;
                fromPartial(object: any): _49.QueryModuleVersionsRequest;
                fromAmino(object: _49.QueryModuleVersionsRequestAmino): _49.QueryModuleVersionsRequest;
                toAmino(message: _49.QueryModuleVersionsRequest): _49.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _49.QueryModuleVersionsRequestAminoMsg): _49.QueryModuleVersionsRequest;
                toAminoMsg(message: _49.QueryModuleVersionsRequest): _49.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _49.QueryModuleVersionsRequestProtoMsg): _49.QueryModuleVersionsRequest;
                toProto(message: _49.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _49.QueryModuleVersionsRequest): _49.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _49.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryModuleVersionsResponse;
                fromPartial(object: any): _49.QueryModuleVersionsResponse;
                fromAmino(object: _49.QueryModuleVersionsResponseAmino): _49.QueryModuleVersionsResponse;
                toAmino(message: _49.QueryModuleVersionsResponse): _49.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _49.QueryModuleVersionsResponseAminoMsg): _49.QueryModuleVersionsResponse;
                toAminoMsg(message: _49.QueryModuleVersionsResponse): _49.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _49.QueryModuleVersionsResponseProtoMsg): _49.QueryModuleVersionsResponse;
                toProto(message: _49.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _49.QueryModuleVersionsResponse): _49.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _49.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAuthorityRequest;
                fromPartial(_: any): _49.QueryAuthorityRequest;
                fromAmino(_: _49.QueryAuthorityRequestAmino): _49.QueryAuthorityRequest;
                toAmino(_: _49.QueryAuthorityRequest): _49.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _49.QueryAuthorityRequestAminoMsg): _49.QueryAuthorityRequest;
                toAminoMsg(message: _49.QueryAuthorityRequest): _49.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _49.QueryAuthorityRequestProtoMsg): _49.QueryAuthorityRequest;
                toProto(message: _49.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _49.QueryAuthorityRequest): _49.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _49.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryAuthorityResponse;
                fromPartial(object: any): _49.QueryAuthorityResponse;
                fromAmino(object: _49.QueryAuthorityResponseAmino): _49.QueryAuthorityResponse;
                toAmino(message: _49.QueryAuthorityResponse): _49.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _49.QueryAuthorityResponseAminoMsg): _49.QueryAuthorityResponse;
                toAminoMsg(message: _49.QueryAuthorityResponse): _49.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _49.QueryAuthorityResponseProtoMsg): _49.QueryAuthorityResponse;
                toProto(message: _49.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _49.QueryAuthorityResponse): _49.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _53.HashOp;
            hashOpToJSON(object: _53.HashOp): string;
            lengthOpFromJSON(object: any): _53.LengthOp;
            lengthOpToJSON(object: _53.LengthOp): string;
            HashOp: typeof _53.HashOp;
            HashOpSDKType: typeof _53.HashOp;
            HashOpAmino: typeof _53.HashOp;
            LengthOp: typeof _53.LengthOp;
            LengthOpSDKType: typeof _53.LengthOp;
            LengthOpAmino: typeof _53.LengthOp;
            ExistenceProof: {
                encode(message: _53.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ExistenceProof;
                fromPartial(object: any): _53.ExistenceProof;
                fromAmino(object: _53.ExistenceProofAmino): _53.ExistenceProof;
                toAmino(message: _53.ExistenceProof): _53.ExistenceProofAmino;
                fromAminoMsg(object: _53.ExistenceProofAminoMsg): _53.ExistenceProof;
                toAminoMsg(message: _53.ExistenceProof): _53.ExistenceProofAminoMsg;
                fromProtoMsg(message: _53.ExistenceProofProtoMsg): _53.ExistenceProof;
                toProto(message: _53.ExistenceProof): Uint8Array;
                toProtoMsg(message: _53.ExistenceProof): _53.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                encode(message: _53.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.NonExistenceProof;
                fromPartial(object: any): _53.NonExistenceProof;
                fromAmino(object: _53.NonExistenceProofAmino): _53.NonExistenceProof;
                toAmino(message: _53.NonExistenceProof): _53.NonExistenceProofAmino;
                fromAminoMsg(object: _53.NonExistenceProofAminoMsg): _53.NonExistenceProof;
                toAminoMsg(message: _53.NonExistenceProof): _53.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _53.NonExistenceProofProtoMsg): _53.NonExistenceProof;
                toProto(message: _53.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _53.NonExistenceProof): _53.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                encode(message: _53.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CommitmentProof;
                fromPartial(object: any): _53.CommitmentProof;
                fromAmino(object: _53.CommitmentProofAmino): _53.CommitmentProof;
                toAmino(message: _53.CommitmentProof): _53.CommitmentProofAmino;
                fromAminoMsg(object: _53.CommitmentProofAminoMsg): _53.CommitmentProof;
                toAminoMsg(message: _53.CommitmentProof): _53.CommitmentProofAminoMsg;
                fromProtoMsg(message: _53.CommitmentProofProtoMsg): _53.CommitmentProof;
                toProto(message: _53.CommitmentProof): Uint8Array;
                toProtoMsg(message: _53.CommitmentProof): _53.CommitmentProofProtoMsg;
            };
            LeafOp: {
                encode(message: _53.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.LeafOp;
                fromPartial(object: any): _53.LeafOp;
                fromAmino(object: _53.LeafOpAmino): _53.LeafOp;
                toAmino(message: _53.LeafOp): _53.LeafOpAmino;
                fromAminoMsg(object: _53.LeafOpAminoMsg): _53.LeafOp;
                toAminoMsg(message: _53.LeafOp): _53.LeafOpAminoMsg;
                fromProtoMsg(message: _53.LeafOpProtoMsg): _53.LeafOp;
                toProto(message: _53.LeafOp): Uint8Array;
                toProtoMsg(message: _53.LeafOp): _53.LeafOpProtoMsg;
            };
            InnerOp: {
                encode(message: _53.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.InnerOp;
                fromPartial(object: any): _53.InnerOp;
                fromAmino(object: _53.InnerOpAmino): _53.InnerOp;
                toAmino(message: _53.InnerOp): _53.InnerOpAmino;
                fromAminoMsg(object: _53.InnerOpAminoMsg): _53.InnerOp;
                toAminoMsg(message: _53.InnerOp): _53.InnerOpAminoMsg;
                fromProtoMsg(message: _53.InnerOpProtoMsg): _53.InnerOp;
                toProto(message: _53.InnerOp): Uint8Array;
                toProtoMsg(message: _53.InnerOp): _53.InnerOpProtoMsg;
            };
            ProofSpec: {
                encode(message: _53.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ProofSpec;
                fromPartial(object: any): _53.ProofSpec;
                fromAmino(object: _53.ProofSpecAmino): _53.ProofSpec;
                toAmino(message: _53.ProofSpec): _53.ProofSpecAmino;
                fromAminoMsg(object: _53.ProofSpecAminoMsg): _53.ProofSpec;
                toAminoMsg(message: _53.ProofSpec): _53.ProofSpecAminoMsg;
                fromProtoMsg(message: _53.ProofSpecProtoMsg): _53.ProofSpec;
                toProto(message: _53.ProofSpec): Uint8Array;
                toProtoMsg(message: _53.ProofSpec): _53.ProofSpecProtoMsg;
            };
            InnerSpec: {
                encode(message: _53.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.InnerSpec;
                fromPartial(object: any): _53.InnerSpec;
                fromAmino(object: _53.InnerSpecAmino): _53.InnerSpec;
                toAmino(message: _53.InnerSpec): _53.InnerSpecAmino;
                fromAminoMsg(object: _53.InnerSpecAminoMsg): _53.InnerSpec;
                toAminoMsg(message: _53.InnerSpec): _53.InnerSpecAminoMsg;
                fromProtoMsg(message: _53.InnerSpecProtoMsg): _53.InnerSpec;
                toProto(message: _53.InnerSpec): Uint8Array;
                toProtoMsg(message: _53.InnerSpec): _53.InnerSpecProtoMsg;
            };
            BatchProof: {
                encode(message: _53.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.BatchProof;
                fromPartial(object: any): _53.BatchProof;
                fromAmino(object: _53.BatchProofAmino): _53.BatchProof;
                toAmino(message: _53.BatchProof): _53.BatchProofAmino;
                fromAminoMsg(object: _53.BatchProofAminoMsg): _53.BatchProof;
                toAminoMsg(message: _53.BatchProof): _53.BatchProofAminoMsg;
                fromProtoMsg(message: _53.BatchProofProtoMsg): _53.BatchProof;
                toProto(message: _53.BatchProof): Uint8Array;
                toProtoMsg(message: _53.BatchProof): _53.BatchProofProtoMsg;
            };
            BatchEntry: {
                encode(message: _53.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.BatchEntry;
                fromPartial(object: any): _53.BatchEntry;
                fromAmino(object: _53.BatchEntryAmino): _53.BatchEntry;
                toAmino(message: _53.BatchEntry): _53.BatchEntryAmino;
                fromAminoMsg(object: _53.BatchEntryAminoMsg): _53.BatchEntry;
                toAminoMsg(message: _53.BatchEntry): _53.BatchEntryAminoMsg;
                fromProtoMsg(message: _53.BatchEntryProtoMsg): _53.BatchEntry;
                toProto(message: _53.BatchEntry): Uint8Array;
                toProtoMsg(message: _53.BatchEntry): _53.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                encode(message: _53.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedBatchProof;
                fromPartial(object: any): _53.CompressedBatchProof;
                fromAmino(object: _53.CompressedBatchProofAmino): _53.CompressedBatchProof;
                toAmino(message: _53.CompressedBatchProof): _53.CompressedBatchProofAmino;
                fromAminoMsg(object: _53.CompressedBatchProofAminoMsg): _53.CompressedBatchProof;
                toAminoMsg(message: _53.CompressedBatchProof): _53.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _53.CompressedBatchProofProtoMsg): _53.CompressedBatchProof;
                toProto(message: _53.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _53.CompressedBatchProof): _53.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                encode(message: _53.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedBatchEntry;
                fromPartial(object: any): _53.CompressedBatchEntry;
                fromAmino(object: _53.CompressedBatchEntryAmino): _53.CompressedBatchEntry;
                toAmino(message: _53.CompressedBatchEntry): _53.CompressedBatchEntryAmino;
                fromAminoMsg(object: _53.CompressedBatchEntryAminoMsg): _53.CompressedBatchEntry;
                toAminoMsg(message: _53.CompressedBatchEntry): _53.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _53.CompressedBatchEntryProtoMsg): _53.CompressedBatchEntry;
                toProto(message: _53.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _53.CompressedBatchEntry): _53.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                encode(message: _53.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedExistenceProof;
                fromPartial(object: any): _53.CompressedExistenceProof;
                fromAmino(object: _53.CompressedExistenceProofAmino): _53.CompressedExistenceProof;
                toAmino(message: _53.CompressedExistenceProof): _53.CompressedExistenceProofAmino;
                fromAminoMsg(object: _53.CompressedExistenceProofAminoMsg): _53.CompressedExistenceProof;
                toAminoMsg(message: _53.CompressedExistenceProof): _53.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _53.CompressedExistenceProofProtoMsg): _53.CompressedExistenceProof;
                toProto(message: _53.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _53.CompressedExistenceProof): _53.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                encode(message: _53.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.CompressedNonExistenceProof;
                fromPartial(object: any): _53.CompressedNonExistenceProof;
                fromAmino(object: _53.CompressedNonExistenceProofAmino): _53.CompressedNonExistenceProof;
                toAmino(message: _53.CompressedNonExistenceProof): _53.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _53.CompressedNonExistenceProofAminoMsg): _53.CompressedNonExistenceProof;
                toAminoMsg(message: _53.CompressedNonExistenceProof): _53.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _53.CompressedNonExistenceProofProtoMsg): _53.CompressedNonExistenceProof;
                toProto(message: _53.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _53.CompressedNonExistenceProof): _53.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _144.MsgClientImpl;
                };
                bank: {
                    v1beta1: _145.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _146.MsgClientImpl;
                };
                gov: {
                    v1: _147.MsgClientImpl;
                    v1beta1: _148.MsgClientImpl;
                };
                staking: {
                    v1beta1: _149.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _150.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _3.QueryAccountsRequest): Promise<_3.QueryAccountsResponse>;
                        account(request: _3.QueryAccountRequest): Promise<_3.QueryAccountResponse>;
                        accountAddressByID(request: _3.QueryAccountAddressByIDRequest): Promise<_3.QueryAccountAddressByIDResponse>;
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                        moduleAccounts(request?: _3.QueryModuleAccountsRequest): Promise<_3.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _3.QueryModuleAccountByNameRequest): Promise<_3.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _3.Bech32PrefixRequest): Promise<_3.Bech32PrefixResponse>;
                        addressBytesToString(request: _3.AddressBytesToStringRequest): Promise<_3.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _3.AddressStringToBytesRequest): Promise<_3.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _7.QueryGrantsRequest): Promise<_7.QueryGrantsResponse>;
                        granterGrants(request: _7.QueryGranterGrantsRequest): Promise<_7.QueryGranterGrantsResponse>;
                        granteeGrants(request: _7.QueryGranteeGrantsRequest): Promise<_7.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _12.QueryBalanceRequest): Promise<_12.QueryBalanceResponse>;
                        allBalances(request: _12.QueryAllBalancesRequest): Promise<_12.QueryAllBalancesResponse>;
                        spendableBalances(request: _12.QuerySpendableBalancesRequest): Promise<_12.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _12.QueryTotalSupplyRequest): Promise<_12.QueryTotalSupplyResponse>;
                        supplyOf(request: _12.QuerySupplyOfRequest): Promise<_12.QuerySupplyOfResponse>;
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        denomMetadata(request: _12.QueryDenomMetadataRequest): Promise<_12.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _12.QueryDenomsMetadataRequest): Promise<_12.QueryDenomsMetadataResponse>;
                        denomOwners(request: _12.QueryDenomOwnersRequest): Promise<_12.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                        proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                        vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                        votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                        params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                        deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                        tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _35.QueryProposalRequest): Promise<_35.QueryProposalResponse>;
                        proposals(request: _35.QueryProposalsRequest): Promise<_35.QueryProposalsResponse>;
                        vote(request: _35.QueryVoteRequest): Promise<_35.QueryVoteResponse>;
                        votes(request: _35.QueryVotesRequest): Promise<_35.QueryVotesResponse>;
                        params(request: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                        deposit(request: _35.QueryDepositRequest): Promise<_35.QueryDepositResponse>;
                        deposits(request: _35.QueryDepositsRequest): Promise<_35.QueryDepositsResponse>;
                        tallyResult(request: _35.QueryTallyResultRequest): Promise<_35.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                        inflation(request?: _39.QueryInflationRequest): Promise<_39.QueryInflationResponse>;
                        annualProvisions(request?: _39.QueryAnnualProvisionsRequest): Promise<_39.QueryAnnualProvisionsResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _43.QueryValidatorsRequest): Promise<_43.QueryValidatorsResponse>;
                        validator(request: _43.QueryValidatorRequest): Promise<_43.QueryValidatorResponse>;
                        validatorDelegations(request: _43.QueryValidatorDelegationsRequest): Promise<_43.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _43.QueryValidatorUnbondingDelegationsRequest): Promise<_43.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _43.QueryDelegationRequest): Promise<_43.QueryDelegationResponse>;
                        unbondingDelegation(request: _43.QueryUnbondingDelegationRequest): Promise<_43.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _43.QueryDelegatorDelegationsRequest): Promise<_43.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _43.QueryDelegatorUnbondingDelegationsRequest): Promise<_43.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _43.QueryRedelegationsRequest): Promise<_43.QueryRedelegationsResponse>;
                        delegatorValidators(request: _43.QueryDelegatorValidatorsRequest): Promise<_43.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _43.QueryDelegatorValidatorRequest): Promise<_43.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _43.QueryHistoricalInfoRequest): Promise<_43.QueryHistoricalInfoResponse>;
                        pool(request?: _43.QueryPoolRequest): Promise<_43.QueryPoolResponse>;
                        params(request?: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _47.SimulateRequest): Promise<_47.SimulateResponse>;
                        getTx(request: _47.GetTxRequest): Promise<_47.GetTxResponse>;
                        broadcastTx(request: _47.BroadcastTxRequest): Promise<_47.BroadcastTxResponse>;
                        getTxsEvent(request: _47.GetTxsEventRequest): Promise<_47.GetTxsEventResponse>;
                        getBlockWithTxs(request: _47.GetBlockWithTxsRequest): Promise<_47.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _49.QueryCurrentPlanRequest): Promise<_49.QueryCurrentPlanResponse>;
                        appliedPlan(request: _49.QueryAppliedPlanRequest): Promise<_49.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _49.QueryUpgradedConsensusStateRequest): Promise<_49.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _49.QueryModuleVersionsRequest): Promise<_49.QueryModuleVersionsResponse>;
                        authority(request?: _49.QueryAuthorityRequest): Promise<_49.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _122.LCDQueryClient;
                };
                authz: {
                    v1beta1: _123.LCDQueryClient;
                };
                bank: {
                    v1beta1: _124.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _125.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _126.LCDQueryClient;
                };
                gov: {
                    v1: _127.LCDQueryClient;
                    v1beta1: _128.LCDQueryClient;
                };
                mint: {
                    v1beta1: _129.LCDQueryClient;
                };
                staking: {
                    v1beta1: _130.LCDQueryClient;
                };
                tx: {
                    v1beta1: _131.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _132.LCDQueryClient;
                };
            };
        }>;
    };
}
