import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgSubmitProposalResponseSDKType, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgExecLegacyContentResponseSDKType, MsgVote, MsgVoteResponse, MsgVoteResponseSDKType, MsgVoteWeighted, MsgVoteWeightedResponse, MsgVoteWeightedResponseSDKType, MsgDeposit, MsgDepositResponse, MsgDepositResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType>;
  /*SubmitProposal defines a method to create new proposal given a content.*/

  execLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponseSDKType>;
  /*ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
  to execute a legacy content-based proposal.*/

  vote(request: MsgVote): Promise<MsgVoteResponseSDKType>;
  /*Vote defines a method to add a vote on a specific proposal.*/

  voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponseSDKType>;
  /*VoteWeighted defines a method to add a weighted vote on a specific proposal.*/

  deposit(request: MsgDeposit): Promise<MsgDepositResponseSDKType>;
  /*Deposit defines a method to add deposit on a specific proposal.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* SubmitProposal defines a method to create new proposal given a content. */


  submitProposal = async (request: MsgSubmitProposal): Promise<MsgSubmitProposalResponseSDKType> => {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "SubmitProposal", data);
    return promise.then(data => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
  };
  /* ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
  to execute a legacy content-based proposal. */

  execLegacyContent = async (request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponseSDKType> => {
    const data = MsgExecLegacyContent.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "ExecLegacyContent", data);
    return promise.then(data => MsgExecLegacyContentResponse.decode(new _m0.Reader(data)));
  };
  /* Vote defines a method to add a vote on a specific proposal. */

  vote = async (request: MsgVote): Promise<MsgVoteResponseSDKType> => {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Vote", data);
    return promise.then(data => MsgVoteResponse.decode(new _m0.Reader(data)));
  };
  /* VoteWeighted defines a method to add a weighted vote on a specific proposal. */

  voteWeighted = async (request: MsgVoteWeighted): Promise<MsgVoteWeightedResponseSDKType> => {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "VoteWeighted", data);
    return promise.then(data => MsgVoteWeightedResponse.decode(new _m0.Reader(data)));
  };
  /* Deposit defines a method to add deposit on a specific proposal. */

  deposit = async (request: MsgDeposit): Promise<MsgDepositResponseSDKType> => {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("cosmos.gov.v1.Msg", "Deposit", data);
    return promise.then(data => MsgDepositResponse.decode(new _m0.Reader(data)));
  };
}