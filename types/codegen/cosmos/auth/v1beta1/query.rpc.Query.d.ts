import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /**
     * AccountAddressByID returns account address based on account number.
     *
     * Since: cosmos-sdk 0.46.2
     */
    accountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * ModuleAccounts returns all the existing module accounts.
     *
     * Since: cosmos-sdk 0.46
     */
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    /** ModuleAccountByName returns the module account info by module name */
    moduleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse>;
    /**
     * Bech32Prefix queries bech32Prefix
     *
     * Since: cosmos-sdk 0.46
     */
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    /**
     * AddressBytesToString converts Account Address bytes to string
     *
     * Since: cosmos-sdk 0.46
     */
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    /**
     * AddressStringToBytes converts Address string to bytes
     *
     * Since: cosmos-sdk 0.46
     */
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    accounts: (request?: QueryAccountsRequest) => Promise<QueryAccountsResponse>;
    account: (request: QueryAccountRequest) => Promise<QueryAccountResponse>;
    accountAddressByID: (request: QueryAccountAddressByIDRequest) => Promise<QueryAccountAddressByIDResponse>;
    params: (request?: QueryParamsRequest) => Promise<QueryParamsResponse>;
    moduleAccounts: (request?: QueryModuleAccountsRequest) => Promise<QueryModuleAccountsResponse>;
    moduleAccountByName: (request: QueryModuleAccountByNameRequest) => Promise<QueryModuleAccountByNameResponse>;
    bech32Prefix: (request?: Bech32PrefixRequest) => Promise<Bech32PrefixResponse>;
    addressBytesToString: (request: AddressBytesToStringRequest) => Promise<AddressBytesToStringResponse>;
    addressStringToBytes: (request: AddressStringToBytesRequest) => Promise<AddressStringToBytesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    accountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    moduleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
};
