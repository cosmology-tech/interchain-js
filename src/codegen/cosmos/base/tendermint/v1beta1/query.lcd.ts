import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { GetNodeInfoRequest, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GetNodeInfo queries the current node info. */


  getNodeInfo = async (_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.req.get<GetNodeInfoResponseSDKType>(endpoint);
  };
  /* GetSyncing queries node syncing. */

  getSyncing = async (_params: GetSyncingRequest = {}): Promise<GetSyncingResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.req.get<GetSyncingResponseSDKType>(endpoint);
  };
  /* GetLatestBlock returns the latest block. */

  getLatestBlock = async (_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.req.get<GetLatestBlockResponseSDKType>(endpoint);
  };
  /* GetBlockByHeight queries block for given height. */

  getBlockByHeight = async (params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.req.get<GetBlockByHeightResponseSDKType>(endpoint);
  };
  /* GetLatestValidatorSet queries latest validator-set. */

  getLatestValidatorSet = async (params: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.req.get<GetLatestValidatorSetResponseSDKType>(endpoint, options);
  };
  /* GetValidatorSetByHeight queries validator-set at a given height. */

  getValidatorSetByHeight = async (params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.req.get<GetValidatorSetByHeightResponseSDKType>(endpoint, options);
  };
}