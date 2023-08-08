import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgGrant, MsgGrantResponse, MsgExec, MsgExecResponse, MsgRevoke, MsgRevokeResponse } from "./tx";
/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time. If there is already a grant
   * for the given (granter, grantee, Authorization) triple, then the grant
   * will be overwritten.
   */
  grant(request: MsgGrant): Promise<MsgGrantResponse>;
  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  exec(request: MsgExec): Promise<MsgExecResponse>;
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Grant grants the provided authorization to the grantee on the granter's
   account with the provided expiration time. If there is already a grant
   for the given (granter, grantee, Authorization) triple, then the grant
   will be overwritten. */
  grant = async (request: MsgGrant): Promise<MsgGrantResponse> => {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
    return promise.then(data => MsgGrantResponse.decode(new _m0.Reader(data)));
  };
  /* Exec attempts to execute the provided messages using
   authorizations granted to the grantee. Each message should have only
   one signer corresponding to the granter of the authorization. */
  exec = async (request: MsgExec): Promise<MsgExecResponse> => {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  };
  /* Revoke revokes any authorization corresponding to the provided method name on the
   granter's account that has been granted to the grantee. */
  revoke = async (request: MsgRevoke): Promise<MsgRevokeResponse> => {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
    return promise.then(data => MsgRevokeResponse.decode(new _m0.Reader(data)));
  };
}