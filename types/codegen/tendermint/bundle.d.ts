import * as _126 from "./abci/types";
import * as _127 from "./crypto/keys";
import * as _128 from "./crypto/proof";
import * as _129 from "./libs/bits/types";
import * as _130 from "./p2p/types";
import * as _131 from "./types/block";
import * as _132 from "./types/evidence";
import * as _133 from "./types/params";
import * as _134 from "./types/types";
import * as _135 from "./types/validator";
import * as _136 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _126.CheckTxType;
        checkTxTypeToJSON(object: _126.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _126.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _126.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _126.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _126.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _126.EvidenceType;
        evidenceTypeToJSON(object: _126.EvidenceType): string;
        CheckTxType: typeof _126.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _126.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _126.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _126.EvidenceType;
        Request: {
            encode(message: _126.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Request;
            fromJSON(object: any): _126.Request;
            toJSON(message: _126.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    block_version?: any;
                    p2p_version?: any;
                };
                set_option?: {
                    key?: string;
                    value?: string;
                };
                init_chain?: {
                    time?: Date;
                    chain_id?: string;
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_state_bytes?: Uint8Array;
                    initial_height?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                begin_block?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chain_id?: string;
                        height?: any;
                        time?: Date;
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    last_commit_info?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signed_last_block?: boolean;
                        }[];
                    };
                    byzantine_validators?: {
                        type?: _126.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        total_voting_power?: any;
                    }[];
                };
                check_tx?: {
                    tx?: Uint8Array;
                    type?: _126.CheckTxType;
                };
                deliver_tx?: {
                    tx?: Uint8Array;
                };
                end_block?: {
                    height?: any;
                };
                commit?: {};
                list_snapshots?: {};
                offer_snapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    app_hash?: Uint8Array;
                };
                load_snapshot_chunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                apply_snapshot_chunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _126.Request;
        };
        RequestEcho: {
            encode(message: _126.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestEcho;
            fromJSON(object: any): _126.RequestEcho;
            toJSON(message: _126.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _126.RequestEcho;
        };
        RequestFlush: {
            encode(_: _126.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestFlush;
            fromJSON(_: any): _126.RequestFlush;
            toJSON(_: _126.RequestFlush): unknown;
            fromPartial(_: {}): _126.RequestFlush;
        };
        RequestInfo: {
            encode(message: _126.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestInfo;
            fromJSON(object: any): _126.RequestInfo;
            toJSON(message: _126.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                block_version?: any;
                p2p_version?: any;
            }): _126.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _126.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestSetOption;
            fromJSON(object: any): _126.RequestSetOption;
            toJSON(message: _126.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _126.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _126.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestInitChain;
            fromJSON(object: any): _126.RequestInitChain;
            toJSON(message: _126.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chain_id?: string;
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_state_bytes?: Uint8Array;
                initial_height?: any;
            }): _126.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _126.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestQuery;
            fromJSON(object: any): _126.RequestQuery;
            toJSON(message: _126.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _126.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _126.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestBeginBlock;
            fromJSON(object: any): _126.RequestBeginBlock;
            toJSON(message: _126.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                last_commit_info?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signed_last_block?: boolean;
                    }[];
                };
                byzantine_validators?: {
                    type?: _126.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    total_voting_power?: any;
                }[];
            }): _126.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _126.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestCheckTx;
            fromJSON(object: any): _126.RequestCheckTx;
            toJSON(message: _126.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _126.CheckTxType;
            }): _126.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _126.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestDeliverTx;
            fromJSON(object: any): _126.RequestDeliverTx;
            toJSON(message: _126.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _126.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _126.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestEndBlock;
            fromJSON(object: any): _126.RequestEndBlock;
            toJSON(message: _126.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: any;
            }): _126.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _126.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestCommit;
            fromJSON(_: any): _126.RequestCommit;
            toJSON(_: _126.RequestCommit): unknown;
            fromPartial(_: {}): _126.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _126.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestListSnapshots;
            fromJSON(_: any): _126.RequestListSnapshots;
            toJSON(_: _126.RequestListSnapshots): unknown;
            fromPartial(_: {}): _126.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _126.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestOfferSnapshot;
            fromJSON(object: any): _126.RequestOfferSnapshot;
            toJSON(message: _126.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                app_hash?: Uint8Array;
            }): _126.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _126.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestLoadSnapshotChunk;
            fromJSON(object: any): _126.RequestLoadSnapshotChunk;
            toJSON(message: _126.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _126.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _126.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.RequestApplySnapshotChunk;
            fromJSON(object: any): _126.RequestApplySnapshotChunk;
            toJSON(message: _126.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _126.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _126.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Response;
            fromJSON(object: any): _126.Response;
            toJSON(message: _126.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    app_version?: any;
                    last_block_height?: any;
                    last_block_app_hash?: Uint8Array;
                };
                set_option?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                init_chain?: {
                    consensus_params?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    validators?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    app_hash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proof_ops?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                begin_block?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                check_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliver_tx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                end_block?: {
                    validator_updates?: {
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensus_param_updates?: {
                        block?: {
                            max_bytes?: any;
                            max_gas?: any;
                        };
                        evidence?: {
                            max_age_num_blocks?: any;
                            max_age_duration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            max_bytes?: any;
                        };
                        validator?: {
                            pub_key_types?: string[];
                        };
                        version?: {
                            app_version?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retain_height?: any;
                };
                list_snapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offer_snapshot?: {
                    result?: _126.ResponseOfferSnapshot_Result;
                };
                load_snapshot_chunk?: {
                    chunk?: Uint8Array;
                };
                apply_snapshot_chunk?: {
                    result?: _126.ResponseApplySnapshotChunk_Result;
                    refetch_chunks?: number[];
                    reject_senders?: string[];
                };
            }): _126.Response;
        };
        ResponseException: {
            encode(message: _126.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseException;
            fromJSON(object: any): _126.ResponseException;
            toJSON(message: _126.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _126.ResponseException;
        };
        ResponseEcho: {
            encode(message: _126.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseEcho;
            fromJSON(object: any): _126.ResponseEcho;
            toJSON(message: _126.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _126.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _126.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseFlush;
            fromJSON(_: any): _126.ResponseFlush;
            toJSON(_: _126.ResponseFlush): unknown;
            fromPartial(_: {}): _126.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _126.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseInfo;
            fromJSON(object: any): _126.ResponseInfo;
            toJSON(message: _126.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                app_version?: any;
                last_block_height?: any;
                last_block_app_hash?: Uint8Array;
            }): _126.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _126.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseSetOption;
            fromJSON(object: any): _126.ResponseSetOption;
            toJSON(message: _126.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _126.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _126.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseInitChain;
            fromJSON(object: any): _126.ResponseInitChain;
            toJSON(message: _126.ResponseInitChain): unknown;
            fromPartial(object: {
                consensus_params?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                validators?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                app_hash?: Uint8Array;
            }): _126.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _126.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseQuery;
            fromJSON(object: any): _126.ResponseQuery;
            toJSON(message: _126.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proof_ops?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _126.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _126.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseBeginBlock;
            fromJSON(object: any): _126.ResponseBeginBlock;
            toJSON(message: _126.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _126.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _126.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseCheckTx;
            fromJSON(object: any): _126.ResponseCheckTx;
            toJSON(message: _126.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _126.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _126.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseDeliverTx;
            fromJSON(object: any): _126.ResponseDeliverTx;
            toJSON(message: _126.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gas_wanted?: any;
                gas_used?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _126.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _126.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseEndBlock;
            fromJSON(object: any): _126.ResponseEndBlock;
            toJSON(message: _126.ResponseEndBlock): unknown;
            fromPartial(object: {
                validator_updates?: {
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensus_param_updates?: {
                    block?: {
                        max_bytes?: any;
                        max_gas?: any;
                    };
                    evidence?: {
                        max_age_num_blocks?: any;
                        max_age_duration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        max_bytes?: any;
                    };
                    validator?: {
                        pub_key_types?: string[];
                    };
                    version?: {
                        app_version?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _126.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _126.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseCommit;
            fromJSON(object: any): _126.ResponseCommit;
            toJSON(message: _126.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retain_height?: any;
            }): _126.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _126.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseListSnapshots;
            fromJSON(object: any): _126.ResponseListSnapshots;
            toJSON(message: _126.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _126.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _126.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseOfferSnapshot;
            fromJSON(object: any): _126.ResponseOfferSnapshot;
            toJSON(message: _126.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _126.ResponseOfferSnapshot_Result;
            }): _126.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _126.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _126.ResponseLoadSnapshotChunk;
            toJSON(message: _126.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _126.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _126.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ResponseApplySnapshotChunk;
            fromJSON(object: any): _126.ResponseApplySnapshotChunk;
            toJSON(message: _126.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _126.ResponseApplySnapshotChunk_Result;
                refetch_chunks?: number[];
                reject_senders?: string[];
            }): _126.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _126.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ConsensusParams;
            fromJSON(object: any): _126.ConsensusParams;
            toJSON(message: _126.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _126.ConsensusParams;
        };
        BlockParams: {
            encode(message: _126.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.BlockParams;
            fromJSON(object: any): _126.BlockParams;
            toJSON(message: _126.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
            }): _126.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _126.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.LastCommitInfo;
            fromJSON(object: any): _126.LastCommitInfo;
            toJSON(message: _126.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signed_last_block?: boolean;
                }[];
            }): _126.LastCommitInfo;
        };
        Event: {
            encode(message: _126.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Event;
            fromJSON(object: any): _126.Event;
            toJSON(message: _126.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _126.Event;
        };
        EventAttribute: {
            encode(message: _126.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.EventAttribute;
            fromJSON(object: any): _126.EventAttribute;
            toJSON(message: _126.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _126.EventAttribute;
        };
        TxResult: {
            encode(message: _126.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.TxResult;
            fromJSON(object: any): _126.TxResult;
            toJSON(message: _126.TxResult): unknown;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gas_wanted?: any;
                    gas_used?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _126.TxResult;
        };
        Validator: {
            encode(message: _126.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Validator;
            fromJSON(object: any): _126.Validator;
            toJSON(message: _126.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _126.Validator;
        };
        ValidatorUpdate: {
            encode(message: _126.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.ValidatorUpdate;
            fromJSON(object: any): _126.ValidatorUpdate;
            toJSON(message: _126.ValidatorUpdate): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _126.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _126.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.VoteInfo;
            fromJSON(object: any): _126.VoteInfo;
            toJSON(message: _126.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signed_last_block?: boolean;
            }): _126.VoteInfo;
        };
        Evidence: {
            encode(message: _126.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Evidence;
            fromJSON(object: any): _126.Evidence;
            toJSON(message: _126.Evidence): unknown;
            fromPartial(object: {
                type?: _126.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                total_voting_power?: any;
            }): _126.Evidence;
        };
        Snapshot: {
            encode(message: _126.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Snapshot;
            fromJSON(object: any): _126.Snapshot;
            toJSON(message: _126.Snapshot): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _126.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _128.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Proof;
            fromJSON(object: any): _128.Proof;
            toJSON(message: _128.Proof): unknown;
            fromPartial(object: {
                total?: any;
                index?: any;
                leaf_hash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _128.Proof;
        };
        ValueOp: {
            encode(message: _128.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ValueOp;
            fromJSON(object: any): _128.ValueOp;
            toJSON(message: _128.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _128.ValueOp;
        };
        DominoOp: {
            encode(message: _128.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.DominoOp;
            fromJSON(object: any): _128.DominoOp;
            toJSON(message: _128.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _128.DominoOp;
        };
        ProofOp: {
            encode(message: _128.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ProofOp;
            fromJSON(object: any): _128.ProofOp;
            toJSON(message: _128.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _128.ProofOp;
        };
        ProofOps: {
            encode(message: _128.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.ProofOps;
            fromJSON(object: any): _128.ProofOps;
            toJSON(message: _128.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _128.ProofOps;
        };
        PublicKey: {
            encode(message: _127.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PublicKey;
            fromJSON(object: any): _127.PublicKey;
            toJSON(message: _127.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _127.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _129.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.BitArray;
                fromJSON(object: any): _129.BitArray;
                toJSON(message: _129.BitArray): unknown;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _129.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _130.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ProtocolVersion;
            fromJSON(object: any): _130.ProtocolVersion;
            toJSON(message: _130.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _130.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _130.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.NodeInfo;
            fromJSON(object: any): _130.NodeInfo;
            toJSON(message: _130.NodeInfo): unknown;
            fromPartial(object: {
                protocol_version?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                };
                node_id?: string;
                listen_addr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    tx_index?: string;
                    rpc_address?: string;
                };
            }): _130.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _130.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.NodeInfoOther;
            fromJSON(object: any): _130.NodeInfoOther;
            toJSON(message: _130.NodeInfoOther): unknown;
            fromPartial(object: {
                tx_index?: string;
                rpc_address?: string;
            }): _130.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _130.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PeerInfo;
            fromJSON(object: any): _130.PeerInfo;
            toJSON(message: _130.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                address_info?: {
                    address?: string;
                    last_dial_success?: Date;
                    last_dial_failure?: Date;
                    dial_failures?: number;
                }[];
                last_connected?: Date;
            }): _130.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _130.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PeerAddressInfo;
            fromJSON(object: any): _130.PeerAddressInfo;
            toJSON(message: _130.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                last_dial_success?: Date;
                last_dial_failure?: Date;
                dial_failures?: number;
            }): _130.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _135.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.ValidatorSet;
            fromJSON(object: any): _135.ValidatorSet;
            toJSON(message: _135.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                };
                total_voting_power?: any;
            }): _135.ValidatorSet;
        };
        Validator: {
            encode(message: _135.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.Validator;
            fromJSON(object: any): _135.Validator;
            toJSON(message: _135.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
                proposer_priority?: any;
            }): _135.Validator;
        };
        SimpleValidator: {
            encode(message: _135.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.SimpleValidator;
            fromJSON(object: any): _135.SimpleValidator;
            toJSON(message: _135.SimpleValidator): unknown;
            fromPartial(object: {
                pub_key?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                voting_power?: any;
            }): _135.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _134.BlockIDFlag;
        blockIDFlagToJSON(object: _134.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _134.SignedMsgType;
        signedMsgTypeToJSON(object: _134.SignedMsgType): string;
        BlockIDFlag: typeof _134.BlockIDFlag;
        SignedMsgType: typeof _134.SignedMsgType;
        PartSetHeader: {
            encode(message: _134.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.PartSetHeader;
            fromJSON(object: any): _134.PartSetHeader;
            toJSON(message: _134.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _134.PartSetHeader;
        };
        Part: {
            encode(message: _134.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Part;
            fromJSON(object: any): _134.Part;
            toJSON(message: _134.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _134.Part;
        };
        BlockID: {
            encode(message: _134.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.BlockID;
            fromJSON(object: any): _134.BlockID;
            toJSON(message: _134.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                part_set_header?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _134.BlockID;
        };
        Header: {
            encode(message: _134.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Header;
            fromJSON(object: any): _134.Header;
            toJSON(message: _134.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chain_id?: string;
                height?: any;
                time?: Date;
                last_block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                last_commit_hash?: Uint8Array;
                data_hash?: Uint8Array;
                validators_hash?: Uint8Array;
                next_validators_hash?: Uint8Array;
                consensus_hash?: Uint8Array;
                app_hash?: Uint8Array;
                last_results_hash?: Uint8Array;
                evidence_hash?: Uint8Array;
                proposer_address?: Uint8Array;
            }): _134.Header;
        };
        Data: {
            encode(message: _134.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Data;
            fromJSON(object: any): _134.Data;
            toJSON(message: _134.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _134.Data;
        };
        Vote: {
            encode(message: _134.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Vote;
            fromJSON(object: any): _134.Vote;
            toJSON(message: _134.Vote): unknown;
            fromPartial(object: {
                type?: _134.SignedMsgType;
                height?: any;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validator_address?: Uint8Array;
                validator_index?: number;
                signature?: Uint8Array;
            }): _134.Vote;
        };
        Commit: {
            encode(message: _134.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Commit;
            fromJSON(object: any): _134.Commit;
            toJSON(message: _134.Commit): unknown;
            fromPartial(object: {
                height?: any;
                round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    block_id_flag?: _134.BlockIDFlag;
                    validator_address?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _134.Commit;
        };
        CommitSig: {
            encode(message: _134.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.CommitSig;
            fromJSON(object: any): _134.CommitSig;
            toJSON(message: _134.CommitSig): unknown;
            fromPartial(object: {
                block_id_flag?: _134.BlockIDFlag;
                validator_address?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _134.CommitSig;
        };
        Proposal: {
            encode(message: _134.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Proposal;
            fromJSON(object: any): _134.Proposal;
            toJSON(message: _134.Proposal): unknown;
            fromPartial(object: {
                type?: _134.SignedMsgType;
                height?: any;
                round?: number;
                pol_round?: number;
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _134.Proposal;
        };
        SignedHeader: {
            encode(message: _134.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.SignedHeader;
            fromJSON(object: any): _134.SignedHeader;
            toJSON(message: _134.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                commit?: {
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _134.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _134.SignedHeader;
        };
        LightBlock: {
            encode(message: _134.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.LightBlock;
            fromJSON(object: any): _134.LightBlock;
            toJSON(message: _134.LightBlock): unknown;
            fromPartial(object: {
                signed_header?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chain_id?: string;
                        height?: any;
                        time?: Date;
                        last_block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        last_commit_hash?: Uint8Array;
                        data_hash?: Uint8Array;
                        validators_hash?: Uint8Array;
                        next_validators_hash?: Uint8Array;
                        consensus_hash?: Uint8Array;
                        app_hash?: Uint8Array;
                        last_results_hash?: Uint8Array;
                        evidence_hash?: Uint8Array;
                        proposer_address?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            block_id_flag?: _134.BlockIDFlag;
                            validator_address?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validator_set?: {
                    validators?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    };
                    total_voting_power?: any;
                };
            }): _134.LightBlock;
        };
        BlockMeta: {
            encode(message: _134.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.BlockMeta;
            fromJSON(object: any): _134.BlockMeta;
            toJSON(message: _134.BlockMeta): unknown;
            fromPartial(object: {
                block_id?: {
                    hash?: Uint8Array;
                    part_set_header?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                block_size?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                num_txs?: any;
            }): _134.BlockMeta;
        };
        TxProof: {
            encode(message: _134.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.TxProof;
            fromJSON(object: any): _134.TxProof;
            toJSON(message: _134.TxProof): unknown;
            fromPartial(object: {
                root_hash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leaf_hash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _134.TxProof;
        };
        ConsensusParams: {
            encode(message: _133.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ConsensusParams;
            fromJSON(object: any): _133.ConsensusParams;
            toJSON(message: _133.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    max_bytes?: any;
                    max_gas?: any;
                    time_iota_ms?: any;
                };
                evidence?: {
                    max_age_num_blocks?: any;
                    max_age_duration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    max_bytes?: any;
                };
                validator?: {
                    pub_key_types?: string[];
                };
                version?: {
                    app_version?: any;
                };
            }): _133.ConsensusParams;
        };
        BlockParams: {
            encode(message: _133.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.BlockParams;
            fromJSON(object: any): _133.BlockParams;
            toJSON(message: _133.BlockParams): unknown;
            fromPartial(object: {
                max_bytes?: any;
                max_gas?: any;
                time_iota_ms?: any;
            }): _133.BlockParams;
        };
        EvidenceParams: {
            encode(message: _133.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.EvidenceParams;
            fromJSON(object: any): _133.EvidenceParams;
            toJSON(message: _133.EvidenceParams): unknown;
            fromPartial(object: {
                max_age_num_blocks?: any;
                max_age_duration?: {
                    seconds?: any;
                    nanos?: number;
                };
                max_bytes?: any;
            }): _133.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _133.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ValidatorParams;
            fromJSON(object: any): _133.ValidatorParams;
            toJSON(message: _133.ValidatorParams): unknown;
            fromPartial(object: {
                pub_key_types?: string[];
            }): _133.ValidatorParams;
        };
        VersionParams: {
            encode(message: _133.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.VersionParams;
            fromJSON(object: any): _133.VersionParams;
            toJSON(message: _133.VersionParams): unknown;
            fromPartial(object: {
                app_version?: any;
            }): _133.VersionParams;
        };
        HashedParams: {
            encode(message: _133.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.HashedParams;
            fromJSON(object: any): _133.HashedParams;
            toJSON(message: _133.HashedParams): unknown;
            fromPartial(object: {
                block_max_bytes?: any;
                block_max_gas?: any;
            }): _133.HashedParams;
        };
        Evidence: {
            encode(message: _132.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Evidence;
            fromJSON(object: any): _132.Evidence;
            toJSON(message: _132.Evidence): unknown;
            fromPartial(object: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: _134.SignedMsgType;
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    vote_b?: {
                        type?: _134.SignedMsgType;
                        height?: any;
                        round?: number;
                        block_id?: {
                            hash?: Uint8Array;
                            part_set_header?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validator_address?: Uint8Array;
                        validator_index?: number;
                        signature?: Uint8Array;
                    };
                    total_voting_power?: any;
                    validator_power?: any;
                    timestamp?: Date;
                };
                light_client_attack_evidence?: {
                    conflicting_block?: {
                        signed_header?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chain_id?: string;
                                height?: any;
                                time?: Date;
                                last_block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                last_commit_hash?: Uint8Array;
                                data_hash?: Uint8Array;
                                validators_hash?: Uint8Array;
                                next_validators_hash?: Uint8Array;
                                consensus_hash?: Uint8Array;
                                app_hash?: Uint8Array;
                                last_results_hash?: Uint8Array;
                                evidence_hash?: Uint8Array;
                                proposer_address?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    block_id_flag?: _134.BlockIDFlag;
                                    validator_address?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validator_set?: {
                            validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            };
                            total_voting_power?: any;
                        };
                    };
                    common_height?: any;
                    byzantine_validators?: {
                        address?: Uint8Array;
                        pub_key?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        voting_power?: any;
                        proposer_priority?: any;
                    }[];
                    total_voting_power?: any;
                    timestamp?: Date;
                };
            }): _132.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _132.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.DuplicateVoteEvidence;
            fromJSON(object: any): _132.DuplicateVoteEvidence;
            toJSON(message: _132.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                vote_a?: {
                    type?: _134.SignedMsgType;
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                vote_b?: {
                    type?: _134.SignedMsgType;
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validator_address?: Uint8Array;
                    validator_index?: number;
                    signature?: Uint8Array;
                };
                total_voting_power?: any;
                validator_power?: any;
                timestamp?: Date;
            }): _132.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _132.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.LightClientAttackEvidence;
            fromJSON(object: any): _132.LightClientAttackEvidence;
            toJSON(message: _132.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflicting_block?: {
                    signed_header?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chain_id?: string;
                            height?: any;
                            time?: Date;
                            last_block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            last_commit_hash?: Uint8Array;
                            data_hash?: Uint8Array;
                            validators_hash?: Uint8Array;
                            next_validators_hash?: Uint8Array;
                            consensus_hash?: Uint8Array;
                            app_hash?: Uint8Array;
                            last_results_hash?: Uint8Array;
                            evidence_hash?: Uint8Array;
                            proposer_address?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                block_id_flag?: _134.BlockIDFlag;
                                validator_address?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validator_set?: {
                        validators?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        };
                        total_voting_power?: any;
                    };
                };
                common_height?: any;
                byzantine_validators?: {
                    address?: Uint8Array;
                    pub_key?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    voting_power?: any;
                    proposer_priority?: any;
                }[];
                total_voting_power?: any;
                timestamp?: Date;
            }): _132.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _132.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.EvidenceList;
            fromJSON(object: any): _132.EvidenceList;
            toJSON(message: _132.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: _134.SignedMsgType;
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        vote_b?: {
                            type?: _134.SignedMsgType;
                            height?: any;
                            round?: number;
                            block_id?: {
                                hash?: Uint8Array;
                                part_set_header?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validator_address?: Uint8Array;
                            validator_index?: number;
                            signature?: Uint8Array;
                        };
                        total_voting_power?: any;
                        validator_power?: any;
                        timestamp?: Date;
                    };
                    light_client_attack_evidence?: {
                        conflicting_block?: {
                            signed_header?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chain_id?: string;
                                    height?: any;
                                    time?: Date;
                                    last_block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    last_commit_hash?: Uint8Array;
                                    data_hash?: Uint8Array;
                                    validators_hash?: Uint8Array;
                                    next_validators_hash?: Uint8Array;
                                    consensus_hash?: Uint8Array;
                                    app_hash?: Uint8Array;
                                    last_results_hash?: Uint8Array;
                                    evidence_hash?: Uint8Array;
                                    proposer_address?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    block_id?: {
                                        hash?: Uint8Array;
                                        part_set_header?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        block_id_flag?: _134.BlockIDFlag;
                                        validator_address?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validator_set?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pub_key?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    voting_power?: any;
                                    proposer_priority?: any;
                                };
                                total_voting_power?: any;
                            };
                        };
                        common_height?: any;
                        byzantine_validators?: {
                            address?: Uint8Array;
                            pub_key?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            voting_power?: any;
                            proposer_priority?: any;
                        }[];
                        total_voting_power?: any;
                        timestamp?: Date;
                    };
                }[];
            }): _132.EvidenceList;
        };
        Block: {
            encode(message: _131.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Block;
            fromJSON(object: any): _131.Block;
            toJSON(message: _131.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chain_id?: string;
                    height?: any;
                    time?: Date;
                    last_block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    last_commit_hash?: Uint8Array;
                    data_hash?: Uint8Array;
                    validators_hash?: Uint8Array;
                    next_validators_hash?: Uint8Array;
                    consensus_hash?: Uint8Array;
                    app_hash?: Uint8Array;
                    last_results_hash?: Uint8Array;
                    evidence_hash?: Uint8Array;
                    proposer_address?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicate_vote_evidence?: {
                            vote_a?: {
                                type?: _134.SignedMsgType;
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            vote_b?: {
                                type?: _134.SignedMsgType;
                                height?: any;
                                round?: number;
                                block_id?: {
                                    hash?: Uint8Array;
                                    part_set_header?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validator_address?: Uint8Array;
                                validator_index?: number;
                                signature?: Uint8Array;
                            };
                            total_voting_power?: any;
                            validator_power?: any;
                            timestamp?: Date;
                        };
                        light_client_attack_evidence?: {
                            conflicting_block?: {
                                signed_header?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chain_id?: string;
                                        height?: any;
                                        time?: Date;
                                        last_block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        last_commit_hash?: Uint8Array;
                                        data_hash?: Uint8Array;
                                        validators_hash?: Uint8Array;
                                        next_validators_hash?: Uint8Array;
                                        consensus_hash?: Uint8Array;
                                        app_hash?: Uint8Array;
                                        last_results_hash?: Uint8Array;
                                        evidence_hash?: Uint8Array;
                                        proposer_address?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        block_id?: {
                                            hash?: Uint8Array;
                                            part_set_header?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            block_id_flag?: _134.BlockIDFlag;
                                            validator_address?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validator_set?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: any;
                                        proposer_priority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pub_key?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        voting_power?: any;
                                        proposer_priority?: any;
                                    };
                                    total_voting_power?: any;
                                };
                            };
                            common_height?: any;
                            byzantine_validators?: {
                                address?: Uint8Array;
                                pub_key?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                voting_power?: any;
                                proposer_priority?: any;
                            }[];
                            total_voting_power?: any;
                            timestamp?: Date;
                        };
                    }[];
                };
                last_commit?: {
                    height?: any;
                    round?: number;
                    block_id?: {
                        hash?: Uint8Array;
                        part_set_header?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        block_id_flag?: _134.BlockIDFlag;
                        validator_address?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _131.Block;
        };
    };
    const version: {
        App: {
            encode(message: _136.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.App;
            fromJSON(object: any): _136.App;
            toJSON(message: _136.App): unknown;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _136.App;
        };
        Consensus: {
            encode(message: _136.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Consensus;
            fromJSON(object: any): _136.Consensus;
            toJSON(message: _136.Consensus): unknown;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _136.Consensus;
        };
    };
}
