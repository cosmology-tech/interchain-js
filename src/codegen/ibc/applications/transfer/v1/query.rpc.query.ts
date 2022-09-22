import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType>;
  /*DenomTrace queries a denomination trace information.*/

  denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponseSDKType>;
  /*DenomTraces queries all denomination traces.*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params queries all parameters of the ibc-transfer module.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* DenomTrace queries a denomination trace information. */


  denomTrace = async (request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType> => {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then(data => QueryDenomTraceResponse.decode(new _m0.Reader(data)));
  };
  /* DenomTraces queries all denomination traces. */

  denomTraces = async (request: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponseSDKType> => {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then(data => QueryDenomTracesResponse.decode(new _m0.Reader(data)));
  };
  /* Params queries all parameters of the ibc-transfer module. */

  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponseSDKType> {
      return queryService.denomTrace(request);
    },

    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponseSDKType> {
      return queryService.denomTraces(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    }

  };
};