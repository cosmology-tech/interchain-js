import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  connectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse>;
  /*ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.*/

  connectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse>;
  /*ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.*/

  connectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse>;
  /*ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.*/

  connectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse>;
  /*ConnectionOpenConfirm defines a rpc handler method for
  MsgConnectionOpenConfirm.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */


  connectionOpenInit = async (request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse> => {
    const data = MsgConnectionOpenInit.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
    return promise.then(data => MsgConnectionOpenInitResponse.decode(new _m0.Reader(data)));
  };
  /* ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */

  connectionOpenTry = async (request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse> => {
    const data = MsgConnectionOpenTry.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
    return promise.then(data => MsgConnectionOpenTryResponse.decode(new _m0.Reader(data)));
  };
  /* ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */

  connectionOpenAck = async (request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse> => {
    const data = MsgConnectionOpenAck.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
    return promise.then(data => MsgConnectionOpenAckResponse.decode(new _m0.Reader(data)));
  };
  /* ConnectionOpenConfirm defines a rpc handler method for
  MsgConnectionOpenConfirm. */

  connectionOpenConfirm = async (request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse> => {
    const data = MsgConnectionOpenConfirm.encode(request).finish();
    const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
    return promise.then(data => MsgConnectionOpenConfirmResponse.decode(new _m0.Reader(data)));
  };
}