import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  setWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
  /*SetWithdrawAddress defines a method to change the withdraw address
  for a delegator (or validator self-delegation).*/

  withdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
  /*WithdrawDelegatorReward defines a method to withdraw rewards of delegator
  from a single validator.*/

  withdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
  /*WithdrawValidatorCommission defines a method to withdraw the
  full commission to the validator address.*/

  fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
  /*FundCommunityPool defines a method to allow an account to directly
  fund the community pool.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* SetWithdrawAddress defines a method to change the withdraw address
  for a delegator (or validator self-delegation). */


  setWithdrawAddress = async (request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> => {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  };
  /* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
  from a single validator. */

  withdrawDelegatorReward = async (request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse> => {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)));
  };
  /* WithdrawValidatorCommission defines a method to withdraw the
  full commission to the validator address. */

  withdrawValidatorCommission = async (request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse> => {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)));
  };
  /* FundCommunityPool defines a method to allow an account to directly
  fund the community pool. */

  fundCommunityPool = async (request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> => {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  };
}