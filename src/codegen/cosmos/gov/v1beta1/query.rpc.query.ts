import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType>;
  /*Proposal queries proposal details based on ProposalID.*/

  proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType>;
  /*Proposals queries all proposals based on given status.*/

  vote(request: QueryVoteRequest): Promise<QueryVoteResponseSDKType>;
  /*Vote queries voted information based on proposalID, voterAddr.*/

  votes(request: QueryVotesRequest): Promise<QueryVotesResponseSDKType>;
  /*Votes queries votes of a given proposal.*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params queries all parameters of the gov module.*/

  deposit(request: QueryDepositRequest): Promise<QueryDepositResponseSDKType>;
  /*Deposit queries single deposit information based proposalID, depositAddr.*/

  deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType>;
  /*Deposits queries all deposits of a single proposal.*/

  tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType>;
  /*TallyResult queries the tally of a proposal vote.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Proposal queries proposal details based on ProposalID. */


  proposal = async (request: QueryProposalRequest): Promise<QueryProposalResponseSDKType> => {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new _m0.Reader(data)));
  };
  /* Proposals queries all proposals based on given status. */

  proposals = async (request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> => {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new _m0.Reader(data)));
  };
  /* Vote queries voted information based on proposalID, voterAddr. */

  vote = async (request: QueryVoteRequest): Promise<QueryVoteResponseSDKType> => {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new _m0.Reader(data)));
  };
  /* Votes queries votes of a given proposal. */

  votes = async (request: QueryVotesRequest): Promise<QueryVotesResponseSDKType> => {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new _m0.Reader(data)));
  };
  /* Params queries all parameters of the gov module. */

  params = async (request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  };
  /* Deposit queries single deposit information based proposalID, depositAddr. */

  deposit = async (request: QueryDepositRequest): Promise<QueryDepositResponseSDKType> => {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new _m0.Reader(data)));
  };
  /* Deposits queries all deposits of a single proposal. */

  deposits = async (request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> => {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new _m0.Reader(data)));
  };
  /* TallyResult queries the tally of a proposal vote. */

  tallyResult = async (request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> => {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
      return queryService.proposal(request);
    },

    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
      return queryService.proposals(request);
    },

    vote(request: QueryVoteRequest): Promise<QueryVoteResponseSDKType> {
      return queryService.vote(request);
    },

    votes(request: QueryVotesRequest): Promise<QueryVotesResponseSDKType> {
      return queryService.votes(request);
    },

    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    deposit(request: QueryDepositRequest): Promise<QueryDepositResponseSDKType> {
      return queryService.deposit(request);
    },

    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
      return queryService.deposits(request);
    },

    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
      return queryService.tallyResult(request);
    }

  };
};