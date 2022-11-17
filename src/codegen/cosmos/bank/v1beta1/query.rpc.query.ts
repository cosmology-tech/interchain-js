import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
/** Query defines the gRPC querier service. */

import {
  useQuery,
  useMutation,
  UseQueryOptions,
} from '@tanstack/react-query'


export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all coins for a single account. */

  allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */

  spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
  /** TotalSupply queries the total supply of all coins. */

  totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
  /** SupplyOf queries the supply of a single coin. */

  supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */

  denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */

  denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */

  denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Balance queries the balance of a single coin for a single account. */


  balance = async (request: QueryBalanceRequest): Promise<QueryBalanceResponse> => {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
    return promise.then(data => QueryBalanceResponse.decode(new _m0.Reader(data)));
  };
  /* AllBalances queries the balance of all coins for a single account. */

  allBalances = async (request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> => {
    const data = QueryAllBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
    return promise.then(data => QueryAllBalancesResponse.decode(new _m0.Reader(data)));
  };
  /* SpendableBalances queries the spenable balance of all coins for a single
   account. */

  spendableBalances = async (request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> => {
    const data = QuerySpendableBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
    return promise.then(data => QuerySpendableBalancesResponse.decode(new _m0.Reader(data)));
  };
  /* TotalSupply queries the total supply of all coins. */

  totalSupply = async (request: QueryTotalSupplyRequest = {
    pagination: undefined
  }): Promise<QueryTotalSupplyResponse> => {
    const data = QueryTotalSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
    return promise.then(data => QueryTotalSupplyResponse.decode(new _m0.Reader(data)));
  };
  /* SupplyOf queries the supply of a single coin. */

  supplyOf = async (request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> => {
    const data = QuerySupplyOfRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
    return promise.then(data => QuerySupplyOfResponse.decode(new _m0.Reader(data)));
  };
  /* Params queries the parameters of x/bank module. */

  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  };
  /* DenomsMetadata queries the client metadata of a given coin denomination. */

  denomMetadata = async (request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> => {
    const data = QueryDenomMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
    return promise.then(data => QueryDenomMetadataResponse.decode(new _m0.Reader(data)));
  };
  /* DenomsMetadata queries the client metadata for all registered coin
   denominations. */

  denomsMetadata = async (request: QueryDenomsMetadataRequest = {
    pagination: undefined
  }): Promise<QueryDenomsMetadataResponse> => {
    const data = QueryDenomsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
    return promise.then(data => QueryDenomsMetadataResponse.decode(new _m0.Reader(data)));
  };
  /* DenomOwners queries for all account addresses that own a particular token
   denomination. */

  denomOwners = async (request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> => {
    const data = QueryDenomOwnersRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
    return promise.then(data => QueryDenomOwnersResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
      return queryService.balance(request);
    },

    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
      return queryService.allBalances(request);
    },

    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
      return queryService.spendableBalances(request);
    },

    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
      return queryService.totalSupply(request);
    },

    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
      return queryService.supplyOf(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
      return queryService.denomMetadata(request);
    },

    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
      return queryService.denomsMetadata(request);
    },

    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
      return queryService.denomOwners(request);
    }

  };
};

export interface ReactQueryParams<TResponse, TData = TResponse> {
  options?: UseQueryOptions<TResponse, Error, TData>;
}

export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
  args: QueryBalanceRequest;
}

export const createRpcQueryHooks = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    useBalance<TData = QueryBalanceResponse>({
      args,
      options
    }) {
      return useQuery<QueryBalanceResponse, Error, TData>(["queryBalance", args], () => {
        return queryService.balance(args)
      }, options);
    },

    // useAllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse> {
    //   return queryService.allBalances(request);
    // },

    // useSpendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse> {
    //   return queryService.spendableBalances(request);
    // },

    // useTotalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse> {
    //   return queryService.totalSupply(request);
    // },

    // useSupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse> {
    //   return queryService.supplyOf(request);
    // },

    // useParams(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
    //   return queryService.params(request);
    // },

    // useDenomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
    //   return queryService.denomMetadata(request);
    // },

    // denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse> {
    //   return queryService.denomsMetadata(request);
    // },

    // useDenomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse> {
    //   return queryService.denomOwners(request);
    // }

  };
};