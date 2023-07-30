import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryDenomTraceRequest, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomHashRequest, QueryDenomHashResponseSDKType, QueryEscrowAddressRequest, QueryEscrowAddressResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* DenomTrace queries a denomination trace information. */


  denomTrace = async (params: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType> => {
    const endpoint = `ibc/apps/transfer/v1/denom_traces/${params.hash}`;
    return await this.req.get<QueryDenomTraceResponseSDKType>(endpoint);
  };
  /* DenomTraces queries all denomination traces. */

  denomTraces = async (params: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponseSDKType> => {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `ibc/apps/transfer/v1/denom_traces`;
    return await this.req.get<QueryDenomTracesResponseSDKType>(endpoint, options);
  };
  /* Params queries all parameters of the ibc-transfer module. */

  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `ibc/apps/transfer/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* DenomHash queries a denomination hash information. */

  denomHash = async (params: QueryDenomHashRequest): Promise<QueryDenomHashResponseSDKType> => {
    const endpoint = `ibc/apps/transfer/v1/denom_hashes/${params.trace}`;
    return await this.req.get<QueryDenomHashResponseSDKType>(endpoint);
  };
  /* EscrowAddress returns the escrow address for a particular port and channel id. */

  escrowAddress = async (params: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponseSDKType> => {
    const endpoint = `ibc/apps/transfer/v1/channels/${params.channelId}/ports/${params.portId}/escrow_address`;
    return await this.req.get<QueryEscrowAddressResponseSDKType>(endpoint);
  };
}