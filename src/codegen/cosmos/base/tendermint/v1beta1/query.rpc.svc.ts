import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType } from "./query";
/** Service defines the RPC service */

export interface Service {
  getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponseSDKType>;
  /*GetNodeInfo queries the current node info.*/

  getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponseSDKType>;
  /*GetSyncing queries node syncing.*/

  getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponseSDKType>;
  /*GetLatestBlock returns the latest block.*/

  getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType>;
  /*GetBlockByHeight queries block for given height.*/

  getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponseSDKType>;
  /*GetLatestValidatorSet queries latest validator-set.*/

  getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType>;
  /*GetValidatorSetByHeight queries validator-set at a given height.*/

}
export class QueryClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* GetNodeInfo queries the current node info. */


  getNodeInfo = async (request: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponseSDKType> => {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
    return promise.then(data => GetNodeInfoResponse.decode(new _m0.Reader(data)));
  };
  /* GetSyncing queries node syncing. */

  getSyncing = async (request: GetSyncingRequest = {}): Promise<GetSyncingResponseSDKType> => {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
    return promise.then(data => GetSyncingResponse.decode(new _m0.Reader(data)));
  };
  /* GetLatestBlock returns the latest block. */

  getLatestBlock = async (request: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponseSDKType> => {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
    return promise.then(data => GetLatestBlockResponse.decode(new _m0.Reader(data)));
  };
  /* GetBlockByHeight queries block for given height. */

  getBlockByHeight = async (request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> => {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
    return promise.then(data => GetBlockByHeightResponse.decode(new _m0.Reader(data)));
  };
  /* GetLatestValidatorSet queries latest validator-set. */

  getLatestValidatorSet = async (request: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponseSDKType> => {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
    return promise.then(data => GetLatestValidatorSetResponse.decode(new _m0.Reader(data)));
  };
  /* GetValidatorSetByHeight queries validator-set at a given height. */

  getValidatorSetByHeight = async (request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> => {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
    return promise.then(data => GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponseSDKType> {
      return queryService.getNodeInfo(request);
    },

    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponseSDKType> {
      return queryService.getSyncing(request);
    },

    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponseSDKType> {
      return queryService.getLatestBlock(request);
    },

    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> {
      return queryService.getBlockByHeight(request);
    },

    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponseSDKType> {
      return queryService.getLatestValidatorSet(request);
    },

    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> {
      return queryService.getValidatorSetByHeight(request);
    }

  };
};