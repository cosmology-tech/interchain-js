import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType>;
  /*ContractInfo gets the contract meta data*/

  contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType>;
  /*ContractHistory gets the contract code history*/

  contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType>;
  /*ContractsByCode lists all smart contracts for a code id*/

  allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType>;
  /*AllContractState gets all raw store data for a single contract*/

  rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType>;
  /*RawContractState gets single key from the raw store data of a contract*/

  smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType>;
  /*SmartContractState get smart query result from the contract*/

  code(request: QueryCodeRequest): Promise<QueryCodeResponseSDKType>;
  /*Code gets the binary code and metadata for a singe wasm code*/

  codes(request?: QueryCodesRequest): Promise<QueryCodesResponseSDKType>;
  /*Codes gets the metadata for all stored wasm codes*/

  pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponseSDKType>;
  /*PinnedCodes gets the pinned code ids*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* ContractInfo gets the contract meta data */


  contractInfo = async (request: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> => {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then(data => QueryContractInfoResponse.decode(new _m0.Reader(data)));
  };
  /* ContractHistory gets the contract code history */

  contractHistory = async (request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType> => {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then(data => QueryContractHistoryResponse.decode(new _m0.Reader(data)));
  };
  /* ContractsByCode lists all smart contracts for a code id */

  contractsByCode = async (request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType> => {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then(data => QueryContractsByCodeResponse.decode(new _m0.Reader(data)));
  };
  /* AllContractState gets all raw store data for a single contract */

  allContractState = async (request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType> => {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then(data => QueryAllContractStateResponse.decode(new _m0.Reader(data)));
  };
  /* RawContractState gets single key from the raw store data of a contract */

  rawContractState = async (request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType> => {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then(data => QueryRawContractStateResponse.decode(new _m0.Reader(data)));
  };
  /* SmartContractState get smart query result from the contract */

  smartContractState = async (request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType> => {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then(data => QuerySmartContractStateResponse.decode(new _m0.Reader(data)));
  };
  /* Code gets the binary code and metadata for a singe wasm code */

  code = async (request: QueryCodeRequest): Promise<QueryCodeResponseSDKType> => {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new _m0.Reader(data)));
  };
  /* Codes gets the metadata for all stored wasm codes */

  codes = async (request: QueryCodesRequest = {
    pagination: undefined
  }): Promise<QueryCodesResponseSDKType> => {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then(data => QueryCodesResponse.decode(new _m0.Reader(data)));
  };
  /* PinnedCodes gets the pinned code ids */

  pinnedCodes = async (request: QueryPinnedCodesRequest = {
    pagination: undefined
  }): Promise<QueryPinnedCodesResponseSDKType> => {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then(data => QueryPinnedCodesResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponseSDKType> {
      return queryService.contractInfo(request);
    },

    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponseSDKType> {
      return queryService.contractHistory(request);
    },

    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponseSDKType> {
      return queryService.contractsByCode(request);
    },

    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponseSDKType> {
      return queryService.allContractState(request);
    },

    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponseSDKType> {
      return queryService.rawContractState(request);
    },

    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponseSDKType> {
      return queryService.smartContractState(request);
    },

    code(request: QueryCodeRequest): Promise<QueryCodeResponseSDKType> {
      return queryService.code(request);
    },

    codes(request?: QueryCodesRequest): Promise<QueryCodesResponseSDKType> {
      return queryService.codes(request);
    },

    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponseSDKType> {
      return queryService.pinnedCodes(request);
    }

  };
};