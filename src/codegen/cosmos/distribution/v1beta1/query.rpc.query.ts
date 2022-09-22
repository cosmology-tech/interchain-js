import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params queries params of the distribution module.*/

  validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType>;
  /*ValidatorOutstandingRewards queries rewards of a validator address.*/

  validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType>;
  /*ValidatorCommission queries accumulated commission for a validator.*/

  validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType>;
  /*ValidatorSlashes queries slash events of a validator.*/

  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType>;
  /*DelegationRewards queries the total rewards accrued by a delegation.*/

  delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType>;
  /*DelegationTotalRewards queries the total rewards accrued by a each
  validator.*/

  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
  /*DelegatorValidators queries the validators of a delegator.*/

  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType>;
  /*DelegatorWithdrawAddress queries withdraw address of a delegator.*/

  communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponseSDKType>;
  /*CommunityPool queries the community pool coins.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Params queries params of the distribution module. */


  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  };
  /* ValidatorOutstandingRewards queries rewards of a validator address. */

  validatorOutstandingRewards = async (request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType> => {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new _m0.Reader(data)));
  };
  /* ValidatorCommission queries accumulated commission for a validator. */

  validatorCommission = async (request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType> => {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new _m0.Reader(data)));
  };
  /* ValidatorSlashes queries slash events of a validator. */

  validatorSlashes = async (request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType> => {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new _m0.Reader(data)));
  };
  /* DelegationRewards queries the total rewards accrued by a delegation. */

  delegationRewards = async (request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType> => {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new _m0.Reader(data)));
  };
  /* DelegationTotalRewards queries the total rewards accrued by a each
  validator. */

  delegationTotalRewards = async (request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType> => {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new _m0.Reader(data)));
  };
  /* DelegatorValidators queries the validators of a delegator. */

  delegatorValidators = async (request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> => {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  };
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */

  delegatorWithdrawAddress = async (request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType> => {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new _m0.Reader(data)));
  };
  /* CommunityPool queries the community pool coins. */

  communityPool = async (request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponseSDKType> => {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType> {
      return queryService.validatorOutstandingRewards(request);
    },

    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType> {
      return queryService.validatorCommission(request);
    },

    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType> {
      return queryService.validatorSlashes(request);
    },

    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType> {
      return queryService.delegationRewards(request);
    },

    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType> {
      return queryService.delegationTotalRewards(request);
    },

    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> {
      return queryService.delegatorValidators(request);
    },

    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType> {
      return queryService.delegatorWithdrawAddress(request);
    },

    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponseSDKType> {
      return queryService.communityPool(request);
    }

  };
};