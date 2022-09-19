import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */

export interface QueryProposalRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */

export interface QueryProposalRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

export interface QueryProposalResponse {
  proposal: Proposal;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */

export interface QueryProposalResponseSDKType {
  proposal: ProposalSDKType;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */

export interface QueryProposalsRequest {
  /** proposal_status defines the status of the proposals. */
  proposal_status?: ProposalStatus;
  /** voter defines the voter address for the proposals. */

  voter?: string;
  /** depositor defines the deposit addresses from the proposals. */

  depositor?: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */

export interface QueryProposalsRequestSDKType {
  /** proposal_status defines the status of the proposals. */
  proposal_status?: ProposalStatusSDKType;
  /** voter defines the voter address for the proposals. */

  voter?: string;
  /** depositor defines the deposit addresses from the proposals. */

  depositor?: string;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

export interface QueryProposalsResponse {
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */

export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */

export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** voter defines the oter address for the proposals. */

  voter: string;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */

export interface QueryVoteRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** voter defines the oter address for the proposals. */

  voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */

export interface QueryVoteResponse {
  /** vote defined the queried vote. */
  vote: Vote;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */

export interface QueryVoteResponseSDKType {
  /** vote defined the queried vote. */
  vote: VoteSDKType;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */

export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */

export interface QueryVotesRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */

export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */

export interface QueryVotesResponseSDKType {
  /** votes defined the queried votes. */
  votes: VoteSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  voting_params: VotingParams;
  /** deposit_params defines the parameters related to deposit. */

  deposit_params: DepositParams;
  /** tally_params defines the parameters related to tally. */

  tally_params: TallyParams;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** voting_params defines the parameters related to voting. */
  voting_params: VotingParamsSDKType;
  /** deposit_params defines the parameters related to deposit. */

  deposit_params: DepositParamsSDKType;
  /** tally_params defines the parameters related to tally. */

  tally_params: TallyParamsSDKType;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */

export interface QueryDepositRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** depositor defines the deposit addresses from the proposals. */

  depositor: string;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */

export interface QueryDepositRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** depositor defines the deposit addresses from the proposals. */

  depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */

export interface QueryDepositResponse {
  /** deposit defines the requested deposit. */
  deposit: Deposit;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */

export interface QueryDepositResponseSDKType {
  /** deposit defines the requested deposit. */
  deposit: DepositSDKType;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

export interface QueryDepositsRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequest;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */

export interface QueryDepositsRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
  /** pagination defines an optional pagination for the request. */

  pagination?: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

export interface QueryDepositsResponse {
  deposits: Deposit[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponse;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */

export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  /** pagination defines the pagination in the response. */

  pagination?: PageResponseSDKType;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */

export interface QueryTallyResultRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */

export interface QueryTallyResultRequestSDKType {
  /** proposal_id defines the unique id of the proposal. */
  proposal_id: Long;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */

export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally: TallyResult;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */

export interface QueryTallyResultResponseSDKType {
  /** tally defines the requested tally. */
  tally: TallyResultSDKType;
}

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposal_id: Long.UZERO
  };
}

export const QueryProposalRequest = {
  encode(message: QueryProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}

export const QueryProposalResponse = {
  encode(message: QueryProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  }

};

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposal_status: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}

export const QueryProposalsRequest = {
  encode(message: QueryProposalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal_status !== 0) {
      writer.uint32(8).int32(message.proposal_status);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_status = (reader.int32() as any);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.depositor = reader.string();
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposal_status = object.proposal_status ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}

export const QueryProposalsResponse = {
  encode(message: QueryProposalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposal_id: Long.UZERO,
    voter: ""
  };
}

export const QueryVoteRequest = {
  encode(message: QueryVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.voter = object.voter ?? "";
    return message;
  }

};

function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: undefined
  };
}

export const QueryVoteResponse = {
  encode(message: QueryVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  }

};

function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposal_id: Long.UZERO,
    pagination: undefined
  };
}

export const QueryVotesRequest = {
  encode(message: QueryVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}

export const QueryVotesResponse = {
  encode(message: QueryVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    params_type: ""
  };
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params_type !== "") {
      writer.uint32(10).string(message.params_type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params_type = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.params_type = object.params_type ?? "";
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    voting_params: undefined,
    deposit_params: undefined,
    tally_params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voting_params !== undefined) {
      VotingParams.encode(message.voting_params, writer.uint32(10).fork()).ldelim();
    }

    if (message.deposit_params !== undefined) {
      DepositParams.encode(message.deposit_params, writer.uint32(18).fork()).ldelim();
    }

    if (message.tally_params !== undefined) {
      TallyParams.encode(message.tally_params, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.voting_params = VotingParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.deposit_params = DepositParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.tally_params = TallyParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.voting_params = object.voting_params !== undefined && object.voting_params !== null ? VotingParams.fromPartial(object.voting_params) : undefined;
    message.deposit_params = object.deposit_params !== undefined && object.deposit_params !== null ? DepositParams.fromPartial(object.deposit_params) : undefined;
    message.tally_params = object.tally_params !== undefined && object.tally_params !== null ? TallyParams.fromPartial(object.tally_params) : undefined;
    return message;
  }

};

function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposal_id: Long.UZERO,
    depositor: ""
  };
}

export const QueryDepositRequest = {
  encode(message: QueryDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    return message;
  }

};

function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: undefined
  };
}

export const QueryDepositResponse = {
  encode(message: QueryDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  }

};

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposal_id: Long.UZERO,
    pagination: undefined
  };
}

export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}

export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposal_id: Long.UZERO
  };
}

export const QueryTallyResultRequest = {
  encode(message: QueryTallyResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposal_id.isZero()) {
      writer.uint32(8).uint64(message.proposal_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal_id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? Long.fromValue(object.proposal_id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}

export const QueryTallyResultResponse = {
  encode(message: QueryTallyResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponseSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  }

};