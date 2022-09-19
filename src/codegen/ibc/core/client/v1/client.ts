import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { Plan, PlanSDKType } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */

export interface IdentifiedClientState {
  /** client identifier */
  client_id: string;
  /** client state */

  client_state: Any;
}
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 */

export interface IdentifiedClientStateSDKType {
  /** client identifier */
  client_id: string;
  /** client state */

  client_state: AnySDKType;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */

export interface ConsensusStateWithHeight {
  /** consensus state height */
  height: Height;
  /** consensus state */

  consensus_state: Any;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 */

export interface ConsensusStateWithHeightSDKType {
  /** consensus state height */
  height: HeightSDKType;
  /** consensus state */

  consensus_state: AnySDKType;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */

export interface ClientConsensusStates {
  /** client identifier */
  client_id: string;
  /** consensus states and their heights associated with the client */

  consensus_states: ConsensusStateWithHeight[];
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 */

export interface ClientConsensusStatesSDKType {
  /** client identifier */
  client_id: string;
  /** consensus states and their heights associated with the client */

  consensus_states: ConsensusStateWithHeightSDKType[];
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */

export interface ClientUpdateProposal {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */

  description: string;
  /** the client identifier for the client to be updated if the proposal passes */

  subject_client_id: string;
  /**
   * the substitute client identifier for the client standing in for the subject
   * client
   */

  substitute_client_id: string;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 */

export interface ClientUpdateProposalSDKType {
  /** the title of the update proposal */
  title: string;
  /** the description of the proposal */

  description: string;
  /** the client identifier for the client to be updated if the proposal passes */

  subject_client_id: string;
  /**
   * the substitute client identifier for the client standing in for the subject
   * client
   */

  substitute_client_id: string;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */

export interface UpgradeProposal {
  title: string;
  description: string;
  plan: Plan;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades
   */

  upgraded_client_state: Any;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 */

export interface UpgradeProposalSDKType {
  title: string;
  description: string;
  plan: PlanSDKType;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades
   */

  upgraded_client_state: AnySDKType;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */

export interface Height {
  /** the revision that the client is currently on */
  revision_number: Long;
  /** the height within the given revision */

  revision_height: Long;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 * 
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */

export interface HeightSDKType {
  /** the revision that the client is currently on */
  revision_number: Long;
  /** the height within the given revision */

  revision_height: Long;
}
/** Params defines the set of IBC light client parameters. */

export interface Params {
  /** allowed_clients defines the list of allowed client state types. */
  allowed_clients: string[];
}
/** Params defines the set of IBC light client parameters. */

export interface ParamsSDKType {
  /** allowed_clients defines the list of allowed client state types. */
  allowed_clients: string[];
}

function createBaseIdentifiedClientState(): IdentifiedClientState {
  return {
    client_id: "",
    client_state: undefined
  };
}

export const IdentifiedClientState = {
  encode(message: IdentifiedClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedClientState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.client_state = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<IdentifiedClientState>): IdentifiedClientState {
    const message = createBaseIdentifiedClientState();
    message.client_id = object.client_id ?? "";
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    return message;
  }

};

function createBaseConsensusStateWithHeight(): ConsensusStateWithHeight {
  return {
    height: undefined,
    consensus_state: undefined
  };
}

export const ConsensusStateWithHeight = {
  encode(message: ConsensusStateWithHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }

    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateWithHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateWithHeight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
          break;

        case 2:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ConsensusStateWithHeight>): ConsensusStateWithHeight {
    const message = createBaseConsensusStateWithHeight();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    return message;
  }

};

function createBaseClientConsensusStates(): ClientConsensusStates {
  return {
    client_id: "",
    consensus_states: []
  };
}

export const ClientConsensusStates = {
  encode(message: ClientConsensusStates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }

    for (const v of message.consensus_states) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientConsensusStates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientConsensusStates();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;

        case 2:
          message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClientConsensusStates>): ClientConsensusStates {
    const message = createBaseClientConsensusStates();
    message.client_id = object.client_id ?? "";
    message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    return message;
  }

};

function createBaseClientUpdateProposal(): ClientUpdateProposal {
  return {
    title: "",
    description: "",
    subject_client_id: "",
    substitute_client_id: ""
  };
}

export const ClientUpdateProposal = {
  encode(message: ClientUpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.subject_client_id !== "") {
      writer.uint32(26).string(message.subject_client_id);
    }

    if (message.substitute_client_id !== "") {
      writer.uint32(34).string(message.substitute_client_id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientUpdateProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientUpdateProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.subject_client_id = reader.string();
          break;

        case 4:
          message.substitute_client_id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ClientUpdateProposal>): ClientUpdateProposal {
    const message = createBaseClientUpdateProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.subject_client_id = object.subject_client_id ?? "";
    message.substitute_client_id = object.substitute_client_id ?? "";
    return message;
  }

};

function createBaseUpgradeProposal(): UpgradeProposal {
  return {
    title: "",
    description: "",
    plan: undefined,
    upgraded_client_state: undefined
  };
}

export const UpgradeProposal = {
  encode(message: UpgradeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }

    if (message.upgraded_client_state !== undefined) {
      Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradeProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;

        case 4:
          message.upgraded_client_state = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<UpgradeProposal>): UpgradeProposal {
    const message = createBaseUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
    return message;
  }

};

function createBaseHeight(): Height {
  return {
    revision_number: Long.UZERO,
    revision_height: Long.UZERO
  };
}

export const Height = {
  encode(message: Height, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.revision_number.isZero()) {
      writer.uint32(8).uint64(message.revision_number);
    }

    if (!message.revision_height.isZero()) {
      writer.uint32(16).uint64(message.revision_height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Height {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeight();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.revision_number = (reader.uint64() as Long);
          break;

        case 2:
          message.revision_height = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Height>): Height {
    const message = createBaseHeight();
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
    return message;
  }

};

function createBaseParams(): Params {
  return {
    allowed_clients: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowed_clients) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowed_clients.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.allowed_clients = object.allowed_clients?.map(e => e) || [];
    return message;
  }

};