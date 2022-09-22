import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryAccountsRequest, QueryAccountsResponseSDKType, QueryAccountRequest, QueryAccountResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryModuleAccountsRequest, QueryModuleAccountsResponseSDKType, Bech32PrefixRequest, Bech32PrefixResponseSDKType, AddressBytesToStringRequest, AddressBytesToStringResponseSDKType, AddressStringToBytesRequest, AddressStringToBytesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Accounts returns all the existing accounts
  
  Since: cosmos-sdk 0.43 */


  accounts = async (params: QueryAccountsRequest = {
    pagination: undefined
  }): Promise<QueryAccountsResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/auth/v1beta1/accounts`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint, options);
  };
  /* Account returns account details based on address. */

  account = async (params: QueryAccountRequest): Promise<QueryAccountResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/accounts/${params.address}`;
    return await this.req.get<QueryAccountResponseSDKType>(endpoint);
  };
  /* Params queries all parameters. */

  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* ModuleAccounts returns all the existing module accounts. */

  moduleAccounts = async (_params: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/module_accounts`;
    return await this.req.get<QueryModuleAccountsResponseSDKType>(endpoint);
  };
  /* Bech32 queries bech32Prefix */

  bech32Prefix = async (_params: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32`;
    return await this.req.get<Bech32PrefixResponseSDKType>(endpoint);
  };
  /* AddressBytesToString converts Account Address bytes to string */

  addressBytesToString = async (params: AddressBytesToStringRequest): Promise<AddressBytesToStringResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressBytes}`;
    return await this.req.get<AddressBytesToStringResponseSDKType>(endpoint);
  };
  /* AddressStringToBytes converts Address string to bytes */

  addressStringToBytes = async (params: AddressStringToBytesRequest): Promise<AddressStringToBytesResponseSDKType> => {
    const endpoint = `cosmos/auth/v1beta1/bech32/${params.addressString}`;
    return await this.req.get<AddressStringToBytesResponseSDKType>(endpoint);
  };
}