import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySigningInfoRequest, QuerySigningInfoResponseSDKType, QuerySigningInfosRequest, QuerySigningInfosResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params queries the parameters of slashing module */


  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/slashing/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* SigningInfo queries the signing info of given cons address */

  signingInfo = async (params: QuerySigningInfoRequest): Promise<QuerySigningInfoResponseSDKType> => {
    const endpoint = `cosmos/slashing/v1beta1/signing_infos/${params.consAddress}`;
    return await this.req.get<QuerySigningInfoResponseSDKType>(endpoint);
  };
  /* SigningInfos queries signing info of all validators */

  signingInfos = async (params: QuerySigningInfosRequest = {
    pagination: undefined
  }): Promise<QuerySigningInfosResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/slashing/v1beta1/signing_infos`;
    return await this.req.get<QuerySigningInfosResponseSDKType>(endpoint, options);
  };
}