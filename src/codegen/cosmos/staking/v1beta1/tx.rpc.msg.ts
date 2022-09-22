import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgCreateValidatorResponseSDKType, MsgEditValidator, MsgEditValidatorResponse, MsgEditValidatorResponseSDKType, MsgDelegate, MsgDelegateResponse, MsgDelegateResponseSDKType, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgBeginRedelegateResponseSDKType, MsgUndelegate, MsgUndelegateResponse, MsgUndelegateResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponseSDKType>;
  /*CreateValidator defines a method for creating a new validator.*/

  editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponseSDKType>;
  /*EditValidator defines a method for editing an existing validator.*/

  delegate(request: MsgDelegate): Promise<MsgDelegateResponseSDKType>;
  /*Delegate defines a method for performing a delegation of coins
  from a delegator to a validator.*/

  beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponseSDKType>;
  /*BeginRedelegate defines a method for performing a redelegation
  of coins from a delegator and source validator to a destination validator.*/

  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponseSDKType>;
  /*Undelegate defines a method for performing an undelegation from a
  delegate and a validator.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* CreateValidator defines a method for creating a new validator. */


  createValidator = async (request: MsgCreateValidator): Promise<MsgCreateValidatorResponseSDKType> => {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
    return promise.then(data => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  };
  /* EditValidator defines a method for editing an existing validator. */

  editValidator = async (request: MsgEditValidator): Promise<MsgEditValidatorResponseSDKType> => {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
    return promise.then(data => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  };
  /* Delegate defines a method for performing a delegation of coins
  from a delegator to a validator. */

  delegate = async (request: MsgDelegate): Promise<MsgDelegateResponseSDKType> => {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new _m0.Reader(data)));
  };
  /* BeginRedelegate defines a method for performing a redelegation
  of coins from a delegator and source validator to a destination validator. */

  beginRedelegate = async (request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponseSDKType> => {
    const data = MsgBeginRedelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
    return promise.then(data => MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
  };
  /* Undelegate defines a method for performing an undelegation from a
  delegate and a validator. */

  undelegate = async (request: MsgUndelegate): Promise<MsgUndelegateResponseSDKType> => {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  };
}