import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /*SubmitProposal defines a method to create new proposal given a content.*/

  vote(request: MsgVote): Promise<MsgVoteResponse>;
  /*Vote defines a method to add a vote on a specific proposal.*/

  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
  /*VoteWeighted defines a method to add a weighted vote on a specific proposal.
  
  Since: cosmos-sdk 0.43*/

  deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /*Deposit defines a method to add deposit on a specific proposal.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* SubmitProposal defines a method to create new proposal given a content. */


  submitProposal = async (request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> => {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  };
  /* Vote defines a method to add a vote on a specific proposal. */

  vote = async (request: MsgVote): Promise<MsgVoteResponse> => {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  };
  /* VoteWeighted defines a method to add a weighted vote on a specific proposal.
  
  Since: cosmos-sdk 0.43 */

  voteWeighted = async (request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> => {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "VoteWeighted", data);
    return promise.then(data => MsgVoteWeightedResponse.decode(new _m0.Reader(data)));
  };
  /* Deposit defines a method to add deposit on a specific proposal. */

  deposit = async (request: MsgDeposit): Promise<MsgDepositResponse> => {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1beta1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  };
}