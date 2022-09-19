import { Timestamp } from "../../google/protobuf/timestamp";
import { Header, HeaderSDKType } from "../types/types";
import { ProofOps, ProofOpsSDKType } from "../crypto/proof";
import { EvidenceParams, EvidenceParamsSDKType, ValidatorParams, ValidatorParamsSDKType, VersionParams, VersionParamsSDKType } from "../types/params";
import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long, toTimestamp, fromTimestamp } from "@osmonauts/helpers";
export enum CheckTxType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export enum CheckTxTypeSDKType {
  NEW = 0,
  RECHECK = 1,
  UNRECOGNIZED = -1,
}
export function checkTxTypeFromJSON(object: any): CheckTxType {
  switch (object) {
    case 0:
    case "NEW":
      return CheckTxType.NEW;

    case 1:
    case "RECHECK":
      return CheckTxType.RECHECK;

    case -1:
    case "UNRECOGNIZED":
    default:
      return CheckTxType.UNRECOGNIZED;
  }
}
export function checkTxTypeToJSON(object: CheckTxType): string {
  switch (object) {
    case CheckTxType.NEW:
      return "NEW";

    case CheckTxType.RECHECK:
      return "RECHECK";

    default:
      return "UNKNOWN";
  }
}
export enum ResponseOfferSnapshot_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,

  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,

  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,

  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,

  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,

  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export enum ResponseOfferSnapshot_ResultSDKType {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,

  /** ACCEPT - Snapshot accepted, apply chunks */
  ACCEPT = 1,

  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,

  /** REJECT - Reject this specific snapshot, try others */
  REJECT = 3,

  /** REJECT_FORMAT - Reject all snapshots of this format, try others */
  REJECT_FORMAT = 4,

  /** REJECT_SENDER - Reject all snapshots from the sender(s), try others */
  REJECT_SENDER = 5,
  UNRECOGNIZED = -1,
}
export function responseOfferSnapshot_ResultFromJSON(object: any): ResponseOfferSnapshot_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseOfferSnapshot_Result.UNKNOWN;

    case 1:
    case "ACCEPT":
      return ResponseOfferSnapshot_Result.ACCEPT;

    case 2:
    case "ABORT":
      return ResponseOfferSnapshot_Result.ABORT;

    case 3:
    case "REJECT":
      return ResponseOfferSnapshot_Result.REJECT;

    case 4:
    case "REJECT_FORMAT":
      return ResponseOfferSnapshot_Result.REJECT_FORMAT;

    case 5:
    case "REJECT_SENDER":
      return ResponseOfferSnapshot_Result.REJECT_SENDER;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseOfferSnapshot_Result.UNRECOGNIZED;
  }
}
export function responseOfferSnapshot_ResultToJSON(object: ResponseOfferSnapshot_Result): string {
  switch (object) {
    case ResponseOfferSnapshot_Result.UNKNOWN:
      return "UNKNOWN";

    case ResponseOfferSnapshot_Result.ACCEPT:
      return "ACCEPT";

    case ResponseOfferSnapshot_Result.ABORT:
      return "ABORT";

    case ResponseOfferSnapshot_Result.REJECT:
      return "REJECT";

    case ResponseOfferSnapshot_Result.REJECT_FORMAT:
      return "REJECT_FORMAT";

    case ResponseOfferSnapshot_Result.REJECT_SENDER:
      return "REJECT_SENDER";

    default:
      return "UNKNOWN";
  }
}
export enum ResponseApplySnapshotChunk_Result {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,

  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,

  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,

  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,

  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,

  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export enum ResponseApplySnapshotChunk_ResultSDKType {
  /** UNKNOWN - Unknown result, abort all snapshot restoration */
  UNKNOWN = 0,

  /** ACCEPT - Chunk successfully accepted */
  ACCEPT = 1,

  /** ABORT - Abort all snapshot restoration */
  ABORT = 2,

  /** RETRY - Retry chunk (combine with refetch and reject) */
  RETRY = 3,

  /** RETRY_SNAPSHOT - Retry snapshot (combine with refetch and reject) */
  RETRY_SNAPSHOT = 4,

  /** REJECT_SNAPSHOT - Reject this snapshot, try others */
  REJECT_SNAPSHOT = 5,
  UNRECOGNIZED = -1,
}
export function responseApplySnapshotChunk_ResultFromJSON(object: any): ResponseApplySnapshotChunk_Result {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ResponseApplySnapshotChunk_Result.UNKNOWN;

    case 1:
    case "ACCEPT":
      return ResponseApplySnapshotChunk_Result.ACCEPT;

    case 2:
    case "ABORT":
      return ResponseApplySnapshotChunk_Result.ABORT;

    case 3:
    case "RETRY":
      return ResponseApplySnapshotChunk_Result.RETRY;

    case 4:
    case "RETRY_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT;

    case 5:
    case "REJECT_SNAPSHOT":
      return ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT;

    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseApplySnapshotChunk_Result.UNRECOGNIZED;
  }
}
export function responseApplySnapshotChunk_ResultToJSON(object: ResponseApplySnapshotChunk_Result): string {
  switch (object) {
    case ResponseApplySnapshotChunk_Result.UNKNOWN:
      return "UNKNOWN";

    case ResponseApplySnapshotChunk_Result.ACCEPT:
      return "ACCEPT";

    case ResponseApplySnapshotChunk_Result.ABORT:
      return "ABORT";

    case ResponseApplySnapshotChunk_Result.RETRY:
      return "RETRY";

    case ResponseApplySnapshotChunk_Result.RETRY_SNAPSHOT:
      return "RETRY_SNAPSHOT";

    case ResponseApplySnapshotChunk_Result.REJECT_SNAPSHOT:
      return "REJECT_SNAPSHOT";

    default:
      return "UNKNOWN";
  }
}
export enum EvidenceType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export enum EvidenceTypeSDKType {
  UNKNOWN = 0,
  DUPLICATE_VOTE = 1,
  LIGHT_CLIENT_ATTACK = 2,
  UNRECOGNIZED = -1,
}
export function evidenceTypeFromJSON(object: any): EvidenceType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return EvidenceType.UNKNOWN;

    case 1:
    case "DUPLICATE_VOTE":
      return EvidenceType.DUPLICATE_VOTE;

    case 2:
    case "LIGHT_CLIENT_ATTACK":
      return EvidenceType.LIGHT_CLIENT_ATTACK;

    case -1:
    case "UNRECOGNIZED":
    default:
      return EvidenceType.UNRECOGNIZED;
  }
}
export function evidenceTypeToJSON(object: EvidenceType): string {
  switch (object) {
    case EvidenceType.UNKNOWN:
      return "UNKNOWN";

    case EvidenceType.DUPLICATE_VOTE:
      return "DUPLICATE_VOTE";

    case EvidenceType.LIGHT_CLIENT_ATTACK:
      return "LIGHT_CLIENT_ATTACK";

    default:
      return "UNKNOWN";
  }
}
export interface Request {
  echo?: RequestEcho;
  flush?: RequestFlush;
  info?: RequestInfo;
  set_option?: RequestSetOption;
  init_chain?: RequestInitChain;
  query?: RequestQuery;
  begin_block?: RequestBeginBlock;
  check_tx?: RequestCheckTx;
  deliver_tx?: RequestDeliverTx;
  end_block?: RequestEndBlock;
  commit?: RequestCommit;
  list_snapshots?: RequestListSnapshots;
  offer_snapshot?: RequestOfferSnapshot;
  load_snapshot_chunk?: RequestLoadSnapshotChunk;
  apply_snapshot_chunk?: RequestApplySnapshotChunk;
}
export interface RequestSDKType {
  echo?: RequestEchoSDKType;
  flush?: RequestFlushSDKType;
  info?: RequestInfoSDKType;
  set_option?: RequestSetOptionSDKType;
  init_chain?: RequestInitChainSDKType;
  query?: RequestQuerySDKType;
  begin_block?: RequestBeginBlockSDKType;
  check_tx?: RequestCheckTxSDKType;
  deliver_tx?: RequestDeliverTxSDKType;
  end_block?: RequestEndBlockSDKType;
  commit?: RequestCommitSDKType;
  list_snapshots?: RequestListSnapshotsSDKType;
  offer_snapshot?: RequestOfferSnapshotSDKType;
  load_snapshot_chunk?: RequestLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: RequestApplySnapshotChunkSDKType;
}
export interface RequestEcho {
  message: string;
}
export interface RequestEchoSDKType {
  message: string;
}
export interface RequestFlush {}
export interface RequestFlushSDKType {}
export interface RequestInfo {
  version: string;
  block_version: Long;
  p2p_version: Long;
}
export interface RequestInfoSDKType {
  version: string;
  block_version: Long;
  p2p_version: Long;
}
/** nondeterministic */

export interface RequestSetOption {
  key: string;
  value: string;
}
/** nondeterministic */

export interface RequestSetOptionSDKType {
  key: string;
  value: string;
}
export interface RequestInitChain {
  time: Date;
  chain_id: string;
  consensus_params: ConsensusParams;
  validators: ValidatorUpdate[];
  app_state_bytes: Uint8Array;
  initial_height: Long;
}
export interface RequestInitChainSDKType {
  time: Date;
  chain_id: string;
  consensus_params: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_state_bytes: Uint8Array;
  initial_height: Long;
}
export interface RequestQuery {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
export interface RequestQuerySDKType {
  data: Uint8Array;
  path: string;
  height: Long;
  prove: boolean;
}
export interface RequestBeginBlock {
  hash: Uint8Array;
  header: Header;
  last_commit_info: LastCommitInfo;
  byzantine_validators: Evidence[];
}
export interface RequestBeginBlockSDKType {
  hash: Uint8Array;
  header: HeaderSDKType;
  last_commit_info: LastCommitInfoSDKType;
  byzantine_validators: EvidenceSDKType[];
}
export interface RequestCheckTx {
  tx: Uint8Array;
  type: CheckTxType;
}
export interface RequestCheckTxSDKType {
  tx: Uint8Array;
  type: CheckTxTypeSDKType;
}
export interface RequestDeliverTx {
  tx: Uint8Array;
}
export interface RequestDeliverTxSDKType {
  tx: Uint8Array;
}
export interface RequestEndBlock {
  height: Long;
}
export interface RequestEndBlockSDKType {
  height: Long;
}
export interface RequestCommit {}
export interface RequestCommitSDKType {}
/** lists available snapshots */

export interface RequestListSnapshots {}
/** lists available snapshots */

export interface RequestListSnapshotsSDKType {}
/** offers a snapshot to the application */

export interface RequestOfferSnapshot {
  /** snapshot offered by peers */
  snapshot: Snapshot;
  /** light client-verified app hash for snapshot height */

  app_hash: Uint8Array;
}
/** offers a snapshot to the application */

export interface RequestOfferSnapshotSDKType {
  /** snapshot offered by peers */
  snapshot: SnapshotSDKType;
  /** light client-verified app hash for snapshot height */

  app_hash: Uint8Array;
}
/** loads a snapshot chunk */

export interface RequestLoadSnapshotChunk {
  height: Long;
  format: number;
  chunk: number;
}
/** loads a snapshot chunk */

export interface RequestLoadSnapshotChunkSDKType {
  height: Long;
  format: number;
  chunk: number;
}
/** Applies a snapshot chunk */

export interface RequestApplySnapshotChunk {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
/** Applies a snapshot chunk */

export interface RequestApplySnapshotChunkSDKType {
  index: number;
  chunk: Uint8Array;
  sender: string;
}
export interface Response {
  exception?: ResponseException;
  echo?: ResponseEcho;
  flush?: ResponseFlush;
  info?: ResponseInfo;
  set_option?: ResponseSetOption;
  init_chain?: ResponseInitChain;
  query?: ResponseQuery;
  begin_block?: ResponseBeginBlock;
  check_tx?: ResponseCheckTx;
  deliver_tx?: ResponseDeliverTx;
  end_block?: ResponseEndBlock;
  commit?: ResponseCommit;
  list_snapshots?: ResponseListSnapshots;
  offer_snapshot?: ResponseOfferSnapshot;
  load_snapshot_chunk?: ResponseLoadSnapshotChunk;
  apply_snapshot_chunk?: ResponseApplySnapshotChunk;
}
export interface ResponseSDKType {
  exception?: ResponseExceptionSDKType;
  echo?: ResponseEchoSDKType;
  flush?: ResponseFlushSDKType;
  info?: ResponseInfoSDKType;
  set_option?: ResponseSetOptionSDKType;
  init_chain?: ResponseInitChainSDKType;
  query?: ResponseQuerySDKType;
  begin_block?: ResponseBeginBlockSDKType;
  check_tx?: ResponseCheckTxSDKType;
  deliver_tx?: ResponseDeliverTxSDKType;
  end_block?: ResponseEndBlockSDKType;
  commit?: ResponseCommitSDKType;
  list_snapshots?: ResponseListSnapshotsSDKType;
  offer_snapshot?: ResponseOfferSnapshotSDKType;
  load_snapshot_chunk?: ResponseLoadSnapshotChunkSDKType;
  apply_snapshot_chunk?: ResponseApplySnapshotChunkSDKType;
}
/** nondeterministic */

export interface ResponseException {
  error: string;
}
/** nondeterministic */

export interface ResponseExceptionSDKType {
  error: string;
}
export interface ResponseEcho {
  message: string;
}
export interface ResponseEchoSDKType {
  message: string;
}
export interface ResponseFlush {}
export interface ResponseFlushSDKType {}
export interface ResponseInfo {
  data: string;
  version: string;
  app_version: Long;
  last_block_height: Long;
  last_block_app_hash: Uint8Array;
}
export interface ResponseInfoSDKType {
  data: string;
  version: string;
  app_version: Long;
  last_block_height: Long;
  last_block_app_hash: Uint8Array;
}
/** nondeterministic */

export interface ResponseSetOption {
  code: number;
  /** bytes data = 2; */

  log: string;
  info: string;
}
/** nondeterministic */

export interface ResponseSetOptionSDKType {
  code: number;
  /** bytes data = 2; */

  log: string;
  info: string;
}
export interface ResponseInitChain {
  consensus_params: ConsensusParams;
  validators: ValidatorUpdate[];
  app_hash: Uint8Array;
}
export interface ResponseInitChainSDKType {
  consensus_params: ConsensusParamsSDKType;
  validators: ValidatorUpdateSDKType[];
  app_hash: Uint8Array;
}
export interface ResponseQuery {
  code: number;
  /** bytes data = 2; // use "value" instead. */

  log: string;
  /** nondeterministic */

  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops: ProofOps;
  height: Long;
  codespace: string;
}
export interface ResponseQuerySDKType {
  code: number;
  /** bytes data = 2; // use "value" instead. */

  log: string;
  /** nondeterministic */

  info: string;
  index: Long;
  key: Uint8Array;
  value: Uint8Array;
  proof_ops: ProofOpsSDKType;
  height: Long;
  codespace: string;
}
export interface ResponseBeginBlock {
  events: Event[];
}
export interface ResponseBeginBlockSDKType {
  events: EventSDKType[];
}
export interface ResponseCheckTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: Event[];
  codespace: string;
}
export interface ResponseCheckTxSDKType {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
}
export interface ResponseDeliverTx {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: Event[];
  codespace: string;
}
export interface ResponseDeliverTxSDKType {
  code: number;
  data: Uint8Array;
  /** nondeterministic */

  log: string;
  /** nondeterministic */

  info: string;
  gas_wanted: Long;
  gas_used: Long;
  events: EventSDKType[];
  codespace: string;
}
export interface ResponseEndBlock {
  validator_updates: ValidatorUpdate[];
  consensus_param_updates: ConsensusParams;
  events: Event[];
}
export interface ResponseEndBlockSDKType {
  validator_updates: ValidatorUpdateSDKType[];
  consensus_param_updates: ConsensusParamsSDKType;
  events: EventSDKType[];
}
export interface ResponseCommit {
  /** reserve 1 */
  data: Uint8Array;
  retain_height: Long;
}
export interface ResponseCommitSDKType {
  /** reserve 1 */
  data: Uint8Array;
  retain_height: Long;
}
export interface ResponseListSnapshots {
  snapshots: Snapshot[];
}
export interface ResponseListSnapshotsSDKType {
  snapshots: SnapshotSDKType[];
}
export interface ResponseOfferSnapshot {
  result: ResponseOfferSnapshot_Result;
}
export interface ResponseOfferSnapshotSDKType {
  result: ResponseOfferSnapshot_ResultSDKType;
}
export interface ResponseLoadSnapshotChunk {
  chunk: Uint8Array;
}
export interface ResponseLoadSnapshotChunkSDKType {
  chunk: Uint8Array;
}
export interface ResponseApplySnapshotChunk {
  result: ResponseApplySnapshotChunk_Result;
  /** Chunks to refetch and reapply */

  refetch_chunks: number[];
  /** Chunk senders to reject and ban */

  reject_senders: string[];
}
export interface ResponseApplySnapshotChunkSDKType {
  result: ResponseApplySnapshotChunk_ResultSDKType;
  /** Chunks to refetch and reapply */

  refetch_chunks: number[];
  /** Chunk senders to reject and ban */

  reject_senders: string[];
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */

export interface ConsensusParams {
  block: BlockParams;
  evidence: EvidenceParams;
  validator: ValidatorParams;
  version: VersionParams;
}
/**
 * ConsensusParams contains all consensus-relevant parameters
 * that can be adjusted by the abci app
 */

export interface ConsensusParamsSDKType {
  block: BlockParamsSDKType;
  evidence: EvidenceParamsSDKType;
  validator: ValidatorParamsSDKType;
  version: VersionParamsSDKType;
}
/** BlockParams contains limits on the block size. */

export interface BlockParams {
  /** Note: must be greater than 0 */
  max_bytes: Long;
  /** Note: must be greater or equal to -1 */

  max_gas: Long;
}
/** BlockParams contains limits on the block size. */

export interface BlockParamsSDKType {
  /** Note: must be greater than 0 */
  max_bytes: Long;
  /** Note: must be greater or equal to -1 */

  max_gas: Long;
}
export interface LastCommitInfo {
  round: number;
  votes: VoteInfo[];
}
export interface LastCommitInfoSDKType {
  round: number;
  votes: VoteInfoSDKType[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */

export interface Event {
  type: string;
  attributes: EventAttribute[];
}
/**
 * Event allows application developers to attach additional information to
 * ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
 * Later, transactions may be queried using these events.
 */

export interface EventSDKType {
  type: string;
  attributes: EventAttributeSDKType[];
}
/** EventAttribute is a single key-value pair, associated with an event. */

export interface EventAttribute {
  key: Uint8Array;
  value: Uint8Array;
  /** nondeterministic */

  index: boolean;
}
/** EventAttribute is a single key-value pair, associated with an event. */

export interface EventAttributeSDKType {
  key: Uint8Array;
  value: Uint8Array;
  /** nondeterministic */

  index: boolean;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */

export interface TxResult {
  height: Long;
  index: number;
  tx: Uint8Array;
  result: ResponseDeliverTx;
}
/**
 * TxResult contains results of executing the transaction.
 * 
 * One usage is indexing transaction results.
 */

export interface TxResultSDKType {
  height: Long;
  index: number;
  tx: Uint8Array;
  result: ResponseDeliverTxSDKType;
}
/** Validator */

export interface Validator {
  /**
   * The first 20 bytes of SHA256(public key)
   * PubKey pub_key = 2 [(gogoproto.nullable)=false];
   */
  address: Uint8Array;
  /** The voting power */

  power: Long;
}
/** Validator */

export interface ValidatorSDKType {
  /**
   * The first 20 bytes of SHA256(public key)
   * PubKey pub_key = 2 [(gogoproto.nullable)=false];
   */
  address: Uint8Array;
  /** The voting power */

  power: Long;
}
/** ValidatorUpdate */

export interface ValidatorUpdate {
  pub_key: PublicKey;
  power: Long;
}
/** ValidatorUpdate */

export interface ValidatorUpdateSDKType {
  pub_key: PublicKeySDKType;
  power: Long;
}
/** VoteInfo */

export interface VoteInfo {
  validator: Validator;
  signed_last_block: boolean;
}
/** VoteInfo */

export interface VoteInfoSDKType {
  validator: ValidatorSDKType;
  signed_last_block: boolean;
}
export interface Evidence {
  type: EvidenceType;
  /** The offending validator */

  validator: Validator;
  /** The height when the offense occurred */

  height: Long;
  /** The corresponding time where the offense occurred */

  time: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */

  total_voting_power: Long;
}
export interface EvidenceSDKType {
  type: EvidenceTypeSDKType;
  /** The offending validator */

  validator: ValidatorSDKType;
  /** The height when the offense occurred */

  height: Long;
  /** The corresponding time where the offense occurred */

  time: Date;
  /**
   * Total voting power of the validator set in case the ABCI application does
   * not store historical validators.
   * https://github.com/tendermint/tendermint/issues/4581
   */

  total_voting_power: Long;
}
export interface Snapshot {
  /** The height at which the snapshot was taken */
  height: Long;
  /** The application-specific snapshot format */

  format: number;
  /** Number of chunks in the snapshot */

  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */

  hash: Uint8Array;
  /** Arbitrary application metadata */

  metadata: Uint8Array;
}
export interface SnapshotSDKType {
  /** The height at which the snapshot was taken */
  height: Long;
  /** The application-specific snapshot format */

  format: number;
  /** Number of chunks in the snapshot */

  chunks: number;
  /** Arbitrary snapshot hash, equal only if identical */

  hash: Uint8Array;
  /** Arbitrary application metadata */

  metadata: Uint8Array;
}

function createBaseRequest(): Request {
  return {
    echo: undefined,
    flush: undefined,
    info: undefined,
    set_option: undefined,
    init_chain: undefined,
    query: undefined,
    begin_block: undefined,
    check_tx: undefined,
    deliver_tx: undefined,
    end_block: undefined,
    commit: undefined,
    list_snapshots: undefined,
    offer_snapshot: undefined,
    load_snapshot_chunk: undefined,
    apply_snapshot_chunk: undefined
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.echo !== undefined) {
      RequestEcho.encode(message.echo, writer.uint32(10).fork()).ldelim();
    }

    if (message.flush !== undefined) {
      RequestFlush.encode(message.flush, writer.uint32(18).fork()).ldelim();
    }

    if (message.info !== undefined) {
      RequestInfo.encode(message.info, writer.uint32(26).fork()).ldelim();
    }

    if (message.set_option !== undefined) {
      RequestSetOption.encode(message.set_option, writer.uint32(34).fork()).ldelim();
    }

    if (message.init_chain !== undefined) {
      RequestInitChain.encode(message.init_chain, writer.uint32(42).fork()).ldelim();
    }

    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(50).fork()).ldelim();
    }

    if (message.begin_block !== undefined) {
      RequestBeginBlock.encode(message.begin_block, writer.uint32(58).fork()).ldelim();
    }

    if (message.check_tx !== undefined) {
      RequestCheckTx.encode(message.check_tx, writer.uint32(66).fork()).ldelim();
    }

    if (message.deliver_tx !== undefined) {
      RequestDeliverTx.encode(message.deliver_tx, writer.uint32(74).fork()).ldelim();
    }

    if (message.end_block !== undefined) {
      RequestEndBlock.encode(message.end_block, writer.uint32(82).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      RequestCommit.encode(message.commit, writer.uint32(90).fork()).ldelim();
    }

    if (message.list_snapshots !== undefined) {
      RequestListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).ldelim();
    }

    if (message.offer_snapshot !== undefined) {
      RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).ldelim();
    }

    if (message.load_snapshot_chunk !== undefined) {
      RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).ldelim();
    }

    if (message.apply_snapshot_chunk !== undefined) {
      RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.echo = RequestEcho.decode(reader, reader.uint32());
          break;

        case 2:
          message.flush = RequestFlush.decode(reader, reader.uint32());
          break;

        case 3:
          message.info = RequestInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.set_option = RequestSetOption.decode(reader, reader.uint32());
          break;

        case 5:
          message.init_chain = RequestInitChain.decode(reader, reader.uint32());
          break;

        case 6:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;

        case 7:
          message.begin_block = RequestBeginBlock.decode(reader, reader.uint32());
          break;

        case 8:
          message.check_tx = RequestCheckTx.decode(reader, reader.uint32());
          break;

        case 9:
          message.deliver_tx = RequestDeliverTx.decode(reader, reader.uint32());
          break;

        case 10:
          message.end_block = RequestEndBlock.decode(reader, reader.uint32());
          break;

        case 11:
          message.commit = RequestCommit.decode(reader, reader.uint32());
          break;

        case 12:
          message.list_snapshots = RequestListSnapshots.decode(reader, reader.uint32());
          break;

        case 13:
          message.offer_snapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
          break;

        case 14:
          message.load_snapshot_chunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
          break;

        case 15:
          message.apply_snapshot_chunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Request>): Request {
    const message = createBaseRequest();
    message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
    message.set_option = object.set_option !== undefined && object.set_option !== null ? RequestSetOption.fromPartial(object.set_option) : undefined;
    message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? RequestInitChain.fromPartial(object.init_chain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
    message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? RequestBeginBlock.fromPartial(object.begin_block) : undefined;
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? RequestCheckTx.fromPartial(object.check_tx) : undefined;
    message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? RequestDeliverTx.fromPartial(object.deliver_tx) : undefined;
    message.end_block = object.end_block !== undefined && object.end_block !== null ? RequestEndBlock.fromPartial(object.end_block) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
    message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
    message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
    message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
    message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
    return message;
  }

};

function createBaseRequestEcho(): RequestEcho {
  return {
    message: ""
  };
}

export const RequestEcho = {
  encode(message: RequestEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEcho {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEcho();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestEcho>): RequestEcho {
    const message = createBaseRequestEcho();
    message.message = object.message ?? "";
    return message;
  }

};

function createBaseRequestFlush(): RequestFlush {
  return {};
}

export const RequestFlush = {
  encode(_: RequestFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestFlush {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestFlush();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<RequestFlush>): RequestFlush {
    const message = createBaseRequestFlush();
    return message;
  }

};

function createBaseRequestInfo(): RequestInfo {
  return {
    version: "",
    block_version: Long.UZERO,
    p2p_version: Long.UZERO
  };
}

export const RequestInfo = {
  encode(message: RequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }

    if (!message.block_version.isZero()) {
      writer.uint32(16).uint64(message.block_version);
    }

    if (!message.p2p_version.isZero()) {
      writer.uint32(24).uint64(message.p2p_version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;

        case 2:
          message.block_version = (reader.uint64() as Long);
          break;

        case 3:
          message.p2p_version = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.version = object.version ?? "";
    message.block_version = object.block_version !== undefined && object.block_version !== null ? Long.fromValue(object.block_version) : Long.UZERO;
    message.p2p_version = object.p2p_version !== undefined && object.p2p_version !== null ? Long.fromValue(object.p2p_version) : Long.UZERO;
    return message;
  }

};

function createBaseRequestSetOption(): RequestSetOption {
  return {
    key: "",
    value: ""
  };
}

export const RequestSetOption = {
  encode(message: RequestSetOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestSetOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSetOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestSetOption>): RequestSetOption {
    const message = createBaseRequestSetOption();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseRequestInitChain(): RequestInitChain {
  return {
    time: undefined,
    chain_id: "",
    consensus_params: undefined,
    validators: [],
    app_state_bytes: new Uint8Array(),
    initial_height: Long.ZERO
  };
}

export const RequestInitChain = {
  encode(message: RequestInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }

    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }

    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.app_state_bytes.length !== 0) {
      writer.uint32(42).bytes(message.app_state_bytes);
    }

    if (!message.initial_height.isZero()) {
      writer.uint32(48).int64(message.initial_height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestInitChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInitChain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.chain_id = reader.string();
          break;

        case 3:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 5:
          message.app_state_bytes = reader.bytes();
          break;

        case 6:
          message.initial_height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestInitChain>): RequestInitChain {
    const message = createBaseRequestInitChain();
    message.time = object.time ?? undefined;
    message.chain_id = object.chain_id ?? "";
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.app_state_bytes = object.app_state_bytes ?? new Uint8Array();
    message.initial_height = object.initial_height !== undefined && object.initial_height !== null ? Long.fromValue(object.initial_height) : Long.ZERO;
    return message;
  }

};

function createBaseRequestQuery(): RequestQuery {
  return {
    data: new Uint8Array(),
    path: "",
    height: Long.ZERO,
    prove: false
  };
}

export const RequestQuery = {
  encode(message: RequestQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.prove === true) {
      writer.uint32(32).bool(message.prove);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.path = reader.string();
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        case 4:
          message.prove = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestQuery>): RequestQuery {
    const message = createBaseRequestQuery();
    message.data = object.data ?? new Uint8Array();
    message.path = object.path ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.prove = object.prove ?? false;
    return message;
  }

};

function createBaseRequestBeginBlock(): RequestBeginBlock {
  return {
    hash: new Uint8Array(),
    header: undefined,
    last_commit_info: undefined,
    byzantine_validators: []
  };
}

export const RequestBeginBlock = {
  encode(message: RequestBeginBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }

    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(18).fork()).ldelim();
    }

    if (message.last_commit_info !== undefined) {
      LastCommitInfo.encode(message.last_commit_info, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.byzantine_validators) {
      Evidence.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestBeginBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestBeginBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;

        case 2:
          message.header = Header.decode(reader, reader.uint32());
          break;

        case 3:
          message.last_commit_info = LastCommitInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.byzantine_validators.push(Evidence.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestBeginBlock>): RequestBeginBlock {
    const message = createBaseRequestBeginBlock();
    message.hash = object.hash ?? new Uint8Array();
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.last_commit_info = object.last_commit_info !== undefined && object.last_commit_info !== null ? LastCommitInfo.fromPartial(object.last_commit_info) : undefined;
    message.byzantine_validators = object.byzantine_validators?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  }

};

function createBaseRequestCheckTx(): RequestCheckTx {
  return {
    tx: new Uint8Array(),
    type: 0
  };
}

export const RequestCheckTx = {
  encode(message: RequestCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }

    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCheckTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCheckTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;

        case 2:
          message.type = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestCheckTx>): RequestCheckTx {
    const message = createBaseRequestCheckTx();
    message.tx = object.tx ?? new Uint8Array();
    message.type = object.type ?? 0;
    return message;
  }

};

function createBaseRequestDeliverTx(): RequestDeliverTx {
  return {
    tx: new Uint8Array()
  };
}

export const RequestDeliverTx = {
  encode(message: RequestDeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx.length !== 0) {
      writer.uint32(10).bytes(message.tx);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestDeliverTx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDeliverTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tx = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestDeliverTx>): RequestDeliverTx {
    const message = createBaseRequestDeliverTx();
    message.tx = object.tx ?? new Uint8Array();
    return message;
  }

};

function createBaseRequestEndBlock(): RequestEndBlock {
  return {
    height: Long.ZERO
  };
}

export const RequestEndBlock = {
  encode(message: RequestEndBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestEndBlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestEndBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestEndBlock>): RequestEndBlock {
    const message = createBaseRequestEndBlock();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseRequestCommit(): RequestCommit {
  return {};
}

export const RequestCommit = {
  encode(_: RequestCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCommit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<RequestCommit>): RequestCommit {
    const message = createBaseRequestCommit();
    return message;
  }

};

function createBaseRequestListSnapshots(): RequestListSnapshots {
  return {};
}

export const RequestListSnapshots = {
  encode(_: RequestListSnapshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestListSnapshots {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestListSnapshots();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<RequestListSnapshots>): RequestListSnapshots {
    const message = createBaseRequestListSnapshots();
    return message;
  }

};

function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
  return {
    snapshot: undefined,
    app_hash: new Uint8Array()
  };
}

export const RequestOfferSnapshot = {
  encode(message: RequestOfferSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.snapshot !== undefined) {
      Snapshot.encode(message.snapshot, writer.uint32(10).fork()).ldelim();
    }

    if (message.app_hash.length !== 0) {
      writer.uint32(18).bytes(message.app_hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestOfferSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestOfferSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.snapshot = Snapshot.decode(reader, reader.uint32());
          break;

        case 2:
          message.app_hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestOfferSnapshot>): RequestOfferSnapshot {
    const message = createBaseRequestOfferSnapshot();
    message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
    message.app_hash = object.app_hash ?? new Uint8Array();
    return message;
  }

};

function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
  return {
    height: Long.UZERO,
    format: 0,
    chunk: 0
  };
}

export const RequestLoadSnapshotChunk = {
  encode(message: RequestLoadSnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.chunk !== 0) {
      writer.uint32(24).uint32(message.chunk);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestLoadSnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLoadSnapshotChunk();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.chunk = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestLoadSnapshotChunk>): RequestLoadSnapshotChunk {
    const message = createBaseRequestLoadSnapshotChunk();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunk = object.chunk ?? 0;
    return message;
  }

};

function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
  return {
    index: 0,
    chunk: new Uint8Array(),
    sender: ""
  };
}

export const RequestApplySnapshotChunk = {
  encode(message: RequestApplySnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint32(message.index);
    }

    if (message.chunk.length !== 0) {
      writer.uint32(18).bytes(message.chunk);
    }

    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestApplySnapshotChunk {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestApplySnapshotChunk();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint32();
          break;

        case 2:
          message.chunk = reader.bytes();
          break;

        case 3:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<RequestApplySnapshotChunk>): RequestApplySnapshotChunk {
    const message = createBaseRequestApplySnapshotChunk();
    message.index = object.index ?? 0;
    message.chunk = object.chunk ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  }

};

function createBaseResponse(): Response {
  return {
    exception: undefined,
    echo: undefined,
    flush: undefined,
    info: undefined,
    set_option: undefined,
    init_chain: undefined,
    query: undefined,
    begin_block: undefined,
    check_tx: undefined,
    deliver_tx: undefined,
    end_block: undefined,
    commit: undefined,
    list_snapshots: undefined,
    offer_snapshot: undefined,
    load_snapshot_chunk: undefined,
    apply_snapshot_chunk: undefined
  };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exception !== undefined) {
      ResponseException.encode(message.exception, writer.uint32(10).fork()).ldelim();
    }

    if (message.echo !== undefined) {
      ResponseEcho.encode(message.echo, writer.uint32(18).fork()).ldelim();
    }

    if (message.flush !== undefined) {
      ResponseFlush.encode(message.flush, writer.uint32(26).fork()).ldelim();
    }

    if (message.info !== undefined) {
      ResponseInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }

    if (message.set_option !== undefined) {
      ResponseSetOption.encode(message.set_option, writer.uint32(42).fork()).ldelim();
    }

    if (message.init_chain !== undefined) {
      ResponseInitChain.encode(message.init_chain, writer.uint32(50).fork()).ldelim();
    }

    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(58).fork()).ldelim();
    }

    if (message.begin_block !== undefined) {
      ResponseBeginBlock.encode(message.begin_block, writer.uint32(66).fork()).ldelim();
    }

    if (message.check_tx !== undefined) {
      ResponseCheckTx.encode(message.check_tx, writer.uint32(74).fork()).ldelim();
    }

    if (message.deliver_tx !== undefined) {
      ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(82).fork()).ldelim();
    }

    if (message.end_block !== undefined) {
      ResponseEndBlock.encode(message.end_block, writer.uint32(90).fork()).ldelim();
    }

    if (message.commit !== undefined) {
      ResponseCommit.encode(message.commit, writer.uint32(98).fork()).ldelim();
    }

    if (message.list_snapshots !== undefined) {
      ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(106).fork()).ldelim();
    }

    if (message.offer_snapshot !== undefined) {
      ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(114).fork()).ldelim();
    }

    if (message.load_snapshot_chunk !== undefined) {
      ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(122).fork()).ldelim();
    }

    if (message.apply_snapshot_chunk !== undefined) {
      ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(130).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exception = ResponseException.decode(reader, reader.uint32());
          break;

        case 2:
          message.echo = ResponseEcho.decode(reader, reader.uint32());
          break;

        case 3:
          message.flush = ResponseFlush.decode(reader, reader.uint32());
          break;

        case 4:
          message.info = ResponseInfo.decode(reader, reader.uint32());
          break;

        case 5:
          message.set_option = ResponseSetOption.decode(reader, reader.uint32());
          break;

        case 6:
          message.init_chain = ResponseInitChain.decode(reader, reader.uint32());
          break;

        case 7:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;

        case 8:
          message.begin_block = ResponseBeginBlock.decode(reader, reader.uint32());
          break;

        case 9:
          message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
          break;

        case 10:
          message.deliver_tx = ResponseDeliverTx.decode(reader, reader.uint32());
          break;

        case 11:
          message.end_block = ResponseEndBlock.decode(reader, reader.uint32());
          break;

        case 12:
          message.commit = ResponseCommit.decode(reader, reader.uint32());
          break;

        case 13:
          message.list_snapshots = ResponseListSnapshots.decode(reader, reader.uint32());
          break;

        case 14:
          message.offer_snapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
          break;

        case 15:
          message.load_snapshot_chunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
          break;

        case 16:
          message.apply_snapshot_chunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Response>): Response {
    const message = createBaseResponse();
    message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
    message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
    message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
    message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
    message.set_option = object.set_option !== undefined && object.set_option !== null ? ResponseSetOption.fromPartial(object.set_option) : undefined;
    message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? ResponseInitChain.fromPartial(object.init_chain) : undefined;
    message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
    message.begin_block = object.begin_block !== undefined && object.begin_block !== null ? ResponseBeginBlock.fromPartial(object.begin_block) : undefined;
    message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? ResponseCheckTx.fromPartial(object.check_tx) : undefined;
    message.deliver_tx = object.deliver_tx !== undefined && object.deliver_tx !== null ? ResponseDeliverTx.fromPartial(object.deliver_tx) : undefined;
    message.end_block = object.end_block !== undefined && object.end_block !== null ? ResponseEndBlock.fromPartial(object.end_block) : undefined;
    message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
    message.list_snapshots = object.list_snapshots !== undefined && object.list_snapshots !== null ? ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
    message.offer_snapshot = object.offer_snapshot !== undefined && object.offer_snapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
    message.load_snapshot_chunk = object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null ? ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk) : undefined;
    message.apply_snapshot_chunk = object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null ? ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk) : undefined;
    return message;
  }

};

function createBaseResponseException(): ResponseException {
  return {
    error: ""
  };
}

export const ResponseException = {
  encode(message: ResponseException, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseException {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseException();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseException>): ResponseException {
    const message = createBaseResponseException();
    message.error = object.error ?? "";
    return message;
  }

};

function createBaseResponseEcho(): ResponseEcho {
  return {
    message: ""
  };
}

export const ResponseEcho = {
  encode(message: ResponseEcho, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEchoSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEcho();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseEcho>): ResponseEcho {
    const message = createBaseResponseEcho();
    message.message = object.message ?? "";
    return message;
  }

};

function createBaseResponseFlush(): ResponseFlush {
  return {};
}

export const ResponseFlush = {
  encode(_: ResponseFlush, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseFlushSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseFlush();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<ResponseFlush>): ResponseFlush {
    const message = createBaseResponseFlush();
    return message;
  }

};

function createBaseResponseInfo(): ResponseInfo {
  return {
    data: "",
    version: "",
    app_version: Long.UZERO,
    last_block_height: Long.ZERO,
    last_block_app_hash: new Uint8Array()
  };
}

export const ResponseInfo = {
  encode(message: ResponseInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }

    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }

    if (!message.app_version.isZero()) {
      writer.uint32(24).uint64(message.app_version);
    }

    if (!message.last_block_height.isZero()) {
      writer.uint32(32).int64(message.last_block_height);
    }

    if (message.last_block_app_hash.length !== 0) {
      writer.uint32(42).bytes(message.last_block_app_hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInfoSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;

        case 2:
          message.version = reader.string();
          break;

        case 3:
          message.app_version = (reader.uint64() as Long);
          break;

        case 4:
          message.last_block_height = (reader.int64() as Long);
          break;

        case 5:
          message.last_block_app_hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseInfo>): ResponseInfo {
    const message = createBaseResponseInfo();
    message.data = object.data ?? "";
    message.version = object.version ?? "";
    message.app_version = object.app_version !== undefined && object.app_version !== null ? Long.fromValue(object.app_version) : Long.UZERO;
    message.last_block_height = object.last_block_height !== undefined && object.last_block_height !== null ? Long.fromValue(object.last_block_height) : Long.ZERO;
    message.last_block_app_hash = object.last_block_app_hash ?? new Uint8Array();
    return message;
  }

};

function createBaseResponseSetOption(): ResponseSetOption {
  return {
    code: 0,
    log: "",
    info: ""
  };
}

export const ResponseSetOption = {
  encode(message: ResponseSetOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSetOptionSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSetOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseSetOption>): ResponseSetOption {
    const message = createBaseResponseSetOption();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    return message;
  }

};

function createBaseResponseInitChain(): ResponseInitChain {
  return {
    consensus_params: undefined,
    validators: [],
    app_hash: new Uint8Array()
  };
}

export const ResponseInitChain = {
  encode(message: ResponseInitChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus_params !== undefined) {
      ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.validators) {
      ValidatorUpdate.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.app_hash.length !== 0) {
      writer.uint32(26).bytes(message.app_hash);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseInitChainSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseInitChain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 3:
          message.app_hash = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseInitChain>): ResponseInitChain {
    const message = createBaseResponseInitChain();
    message.consensus_params = object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
    message.validators = object.validators?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.app_hash = object.app_hash ?? new Uint8Array();
    return message;
  }

};

function createBaseResponseQuery(): ResponseQuery {
  return {
    code: 0,
    log: "",
    info: "",
    index: Long.ZERO,
    key: new Uint8Array(),
    value: new Uint8Array(),
    proof_ops: undefined,
    height: Long.ZERO,
    codespace: ""
  };
}

export const ResponseQuery = {
  encode(message: ResponseQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.index.isZero()) {
      writer.uint32(40).int64(message.index);
    }

    if (message.key.length !== 0) {
      writer.uint32(50).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(58).bytes(message.value);
    }

    if (message.proof_ops !== undefined) {
      ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(72).int64(message.height);
    }

    if (message.codespace !== "") {
      writer.uint32(82).string(message.codespace);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuerySDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.index = (reader.int64() as Long);
          break;

        case 6:
          message.key = reader.bytes();
          break;

        case 7:
          message.value = reader.bytes();
          break;

        case 8:
          message.proof_ops = ProofOps.decode(reader, reader.uint32());
          break;

        case 9:
          message.height = (reader.int64() as Long);
          break;

        case 10:
          message.codespace = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseQuery>): ResponseQuery {
    const message = createBaseResponseQuery();
    message.code = object.code ?? 0;
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.ZERO;
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.codespace = object.codespace ?? "";
    return message;
  }

};

function createBaseResponseBeginBlock(): ResponseBeginBlock {
  return {
    events: []
  };
}

export const ResponseBeginBlock = {
  encode(message: ResponseBeginBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      Event.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBeginBlockSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseBeginBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseBeginBlock>): ResponseBeginBlock {
    const message = createBaseResponseBeginBlock();
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  }

};

function createBaseResponseCheckTx(): ResponseCheckTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gas_wanted: Long.ZERO,
    gas_used: Long.ZERO,
    events: [],
    codespace: ""
  };
}

export const ResponseCheckTx = {
  encode(message: ResponseCheckTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.gas_wanted.isZero()) {
      writer.uint32(40).int64(message.gas_wanted);
    }

    if (!message.gas_used.isZero()) {
      writer.uint32(48).int64(message.gas_used);
    }

    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCheckTxSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCheckTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.gas_wanted = (reader.int64() as Long);
          break;

        case 6:
          message.gas_used = (reader.int64() as Long);
          break;

        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        case 8:
          message.codespace = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseCheckTx>): ResponseCheckTx {
    const message = createBaseResponseCheckTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.ZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  }

};

function createBaseResponseDeliverTx(): ResponseDeliverTx {
  return {
    code: 0,
    data: new Uint8Array(),
    log: "",
    info: "",
    gas_wanted: Long.ZERO,
    gas_used: Long.ZERO,
    events: [],
    codespace: ""
  };
}

export const ResponseDeliverTx = {
  encode(message: ResponseDeliverTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).uint32(message.code);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (message.log !== "") {
      writer.uint32(26).string(message.log);
    }

    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }

    if (!message.gas_wanted.isZero()) {
      writer.uint32(40).int64(message.gas_wanted);
    }

    if (!message.gas_used.isZero()) {
      writer.uint32(48).int64(message.gas_used);
    }

    for (const v of message.events) {
      Event.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.codespace !== "") {
      writer.uint32(66).string(message.codespace);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDeliverTxSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDeliverTx();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.uint32();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.log = reader.string();
          break;

        case 4:
          message.info = reader.string();
          break;

        case 5:
          message.gas_wanted = (reader.int64() as Long);
          break;

        case 6:
          message.gas_used = (reader.int64() as Long);
          break;

        case 7:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        case 8:
          message.codespace = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseDeliverTx>): ResponseDeliverTx {
    const message = createBaseResponseDeliverTx();
    message.code = object.code ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    message.info = object.info ?? "";
    message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? Long.fromValue(object.gas_wanted) : Long.ZERO;
    message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? Long.fromValue(object.gas_used) : Long.ZERO;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    message.codespace = object.codespace ?? "";
    return message;
  }

};

function createBaseResponseEndBlock(): ResponseEndBlock {
  return {
    validator_updates: [],
    consensus_param_updates: undefined,
    events: []
  };
}

export const ResponseEndBlock = {
  encode(message: ResponseEndBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validator_updates) {
      ValidatorUpdate.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.consensus_param_updates !== undefined) {
      ConsensusParams.encode(message.consensus_param_updates, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.events) {
      Event.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseEndBlockSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseEndBlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
          break;

        case 2:
          message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.events.push(Event.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseEndBlock>): ResponseEndBlock {
    const message = createBaseResponseEndBlock();
    message.validator_updates = object.validator_updates?.map(e => ValidatorUpdate.fromPartial(e)) || [];
    message.consensus_param_updates = object.consensus_param_updates !== undefined && object.consensus_param_updates !== null ? ConsensusParams.fromPartial(object.consensus_param_updates) : undefined;
    message.events = object.events?.map(e => Event.fromPartial(e)) || [];
    return message;
  }

};

function createBaseResponseCommit(): ResponseCommit {
  return {
    data: new Uint8Array(),
    retain_height: Long.ZERO
  };
}

export const ResponseCommit = {
  encode(message: ResponseCommit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    if (!message.retain_height.isZero()) {
      writer.uint32(24).int64(message.retain_height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCommitSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCommit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.retain_height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseCommit>): ResponseCommit {
    const message = createBaseResponseCommit();
    message.data = object.data ?? new Uint8Array();
    message.retain_height = object.retain_height !== undefined && object.retain_height !== null ? Long.fromValue(object.retain_height) : Long.ZERO;
    return message;
  }

};

function createBaseResponseListSnapshots(): ResponseListSnapshots {
  return {
    snapshots: []
  };
}

export const ResponseListSnapshots = {
  encode(message: ResponseListSnapshots, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.snapshots) {
      Snapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseListSnapshotsSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseListSnapshots();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseListSnapshots>): ResponseListSnapshots {
    const message = createBaseResponseListSnapshots();
    message.snapshots = object.snapshots?.map(e => Snapshot.fromPartial(e)) || [];
    return message;
  }

};

function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
  return {
    result: 0
  };
}

export const ResponseOfferSnapshot = {
  encode(message: ResponseOfferSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseOfferSnapshotSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseOfferSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseOfferSnapshot>): ResponseOfferSnapshot {
    const message = createBaseResponseOfferSnapshot();
    message.result = object.result ?? 0;
    return message;
  }

};

function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
  return {
    chunk: new Uint8Array()
  };
}

export const ResponseLoadSnapshotChunk = {
  encode(message: ResponseLoadSnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chunk.length !== 0) {
      writer.uint32(10).bytes(message.chunk);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLoadSnapshotChunkSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLoadSnapshotChunk();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chunk = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseLoadSnapshotChunk>): ResponseLoadSnapshotChunk {
    const message = createBaseResponseLoadSnapshotChunk();
    message.chunk = object.chunk ?? new Uint8Array();
    return message;
  }

};

function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
  return {
    result: 0,
    refetch_chunks: [],
    reject_senders: []
  };
}

export const ResponseApplySnapshotChunk = {
  encode(message: ResponseApplySnapshotChunk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }

    writer.uint32(18).fork();

    for (const v of message.refetch_chunks) {
      writer.uint32(v);
    }

    writer.ldelim();

    for (const v of message.reject_senders) {
      writer.uint32(26).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseApplySnapshotChunkSDKType {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseApplySnapshotChunk();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = (reader.int32() as any);
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.refetch_chunks.push(reader.uint32());
            }
          } else {
            message.refetch_chunks.push(reader.uint32());
          }

          break;

        case 3:
          message.reject_senders.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ResponseApplySnapshotChunk>): ResponseApplySnapshotChunk {
    const message = createBaseResponseApplySnapshotChunk();
    message.result = object.result ?? 0;
    message.refetch_chunks = object.refetch_chunks?.map(e => e) || [];
    message.reject_senders = object.reject_senders?.map(e => e) || [];
    return message;
  }

};

function createBaseConsensusParams(): ConsensusParams {
  return {
    block: undefined,
    evidence: undefined,
    validator: undefined,
    version: undefined
  };
}

export const ConsensusParams = {
  encode(message: ConsensusParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
    }

    if (message.evidence !== undefined) {
      EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
    }

    if (message.validator !== undefined) {
      ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
    }

    if (message.version !== undefined) {
      VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.block = BlockParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.evidence = EvidenceParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.validator = ValidatorParams.decode(reader, reader.uint32());
          break;

        case 4:
          message.version = VersionParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConsensusParams>): ConsensusParams {
    const message = createBaseConsensusParams();
    message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
    message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
    message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
    message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
    return message;
  }

};

function createBaseBlockParams(): BlockParams {
  return {
    max_bytes: Long.ZERO,
    max_gas: Long.ZERO
  };
}

export const BlockParams = {
  encode(message: BlockParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.max_bytes.isZero()) {
      writer.uint32(8).int64(message.max_bytes);
    }

    if (!message.max_gas.isZero()) {
      writer.uint32(16).int64(message.max_gas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.max_bytes = (reader.int64() as Long);
          break;

        case 2:
          message.max_gas = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BlockParams>): BlockParams {
    const message = createBaseBlockParams();
    message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? Long.fromValue(object.max_bytes) : Long.ZERO;
    message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? Long.fromValue(object.max_gas) : Long.ZERO;
    return message;
  }

};

function createBaseLastCommitInfo(): LastCommitInfo {
  return {
    round: 0,
    votes: []
  };
}

export const LastCommitInfo = {
  encode(message: LastCommitInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.round !== 0) {
      writer.uint32(8).int32(message.round);
    }

    for (const v of message.votes) {
      VoteInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastCommitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastCommitInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.round = reader.int32();
          break;

        case 2:
          message.votes.push(VoteInfo.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LastCommitInfo>): LastCommitInfo {
    const message = createBaseLastCommitInfo();
    message.round = object.round ?? 0;
    message.votes = object.votes?.map(e => VoteInfo.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEvent(): Event {
  return {
    type: "",
    attributes: []
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }

    for (const v of message.attributes) {
      EventAttribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;

        case 2:
          message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.type = object.type ?? "";
    message.attributes = object.attributes?.map(e => EventAttribute.fromPartial(e)) || [];
    return message;
  }

};

function createBaseEventAttribute(): EventAttribute {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    index: false
  };
}

export const EventAttribute = {
  encode(message: EventAttribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }

    if (message.index === true) {
      writer.uint32(24).bool(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAttribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAttribute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.value = reader.bytes();
          break;

        case 3:
          message.index = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<EventAttribute>): EventAttribute {
    const message = createBaseEventAttribute();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.index = object.index ?? false;
    return message;
  }

};

function createBaseTxResult(): TxResult {
  return {
    height: Long.ZERO,
    index: 0,
    tx: new Uint8Array(),
    result: undefined
  };
}

export const TxResult = {
  encode(message: TxResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }

    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }

    if (message.tx.length !== 0) {
      writer.uint32(26).bytes(message.tx);
    }

    if (message.result !== undefined) {
      ResponseDeliverTx.encode(message.result, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;

        case 2:
          message.index = reader.uint32();
          break;

        case 3:
          message.tx = reader.bytes();
          break;

        case 4:
          message.result = ResponseDeliverTx.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TxResult>): TxResult {
    const message = createBaseTxResult();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.index = object.index ?? 0;
    message.tx = object.tx ?? new Uint8Array();
    message.result = object.result !== undefined && object.result !== null ? ResponseDeliverTx.fromPartial(object.result) : undefined;
    return message;
  }

};

function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    power: Long.ZERO
  };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 3:
          message.power = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }

};

function createBaseValidatorUpdate(): ValidatorUpdate {
  return {
    pub_key: undefined,
    power: Long.ZERO
  };
}

export const ValidatorUpdate = {
  encode(message: ValidatorUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pub_key !== undefined) {
      PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
    }

    if (!message.power.isZero()) {
      writer.uint32(16).int64(message.power);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorUpdate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pub_key = PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.power = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ValidatorUpdate>): ValidatorUpdate {
    const message = createBaseValidatorUpdate();
    message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    return message;
  }

};

function createBaseVoteInfo(): VoteInfo {
  return {
    validator: undefined,
    signed_last_block: false
  };
}

export const VoteInfo = {
  encode(message: VoteInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }

    if (message.signed_last_block === true) {
      writer.uint32(16).bool(message.signed_last_block);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        case 2:
          message.signed_last_block = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<VoteInfo>): VoteInfo {
    const message = createBaseVoteInfo();
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.signed_last_block = object.signed_last_block ?? false;
    return message;
  }

};

function createBaseEvidence(): Evidence {
  return {
    type: 0,
    validator: undefined,
    height: Long.ZERO,
    time: undefined,
    total_voting_power: Long.ZERO
  };
}

export const Evidence = {
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }

    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(18).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    }

    if (!message.total_voting_power.isZero()) {
      writer.uint32(40).int64(message.total_voting_power);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;

        case 2:
          message.validator = Validator.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.total_voting_power = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.type = object.type ?? 0;
    message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time ?? undefined;
    message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? Long.fromValue(object.total_voting_power) : Long.ZERO;
    return message;
  }

};

function createBaseSnapshot(): Snapshot {
  return {
    height: Long.UZERO,
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: new Uint8Array()
  };
}

export const Snapshot = {
  encode(message: Snapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).uint64(message.height);
    }

    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }

    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }

    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }

    if (message.metadata.length !== 0) {
      writer.uint32(42).bytes(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = (reader.uint64() as Long);
          break;

        case 2:
          message.format = reader.uint32();
          break;

        case 3:
          message.chunks = reader.uint32();
          break;

        case 4:
          message.hash = reader.bytes();
          break;

        case 5:
          message.metadata = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata ?? new Uint8Array();
    return message;
  }

};