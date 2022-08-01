import * as _132 from "./abci/types";
import * as _133 from "./crypto/keys";
import * as _134 from "./crypto/proof";
import * as _135 from "./libs/bits/types";
import * as _136 from "./p2p/types";
import * as _137 from "./types/block";
import * as _138 from "./types/evidence";
import * as _139 from "./types/params";
import * as _140 from "./types/types";
import * as _141 from "./types/validator";
import * as _142 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _132.CheckTxType;
        checkTxTypeToJSON(object: _132.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _132.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _132.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _132.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _132.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _132.EvidenceType;
        evidenceTypeToJSON(object: _132.EvidenceType): string;
        CheckTxType: typeof _132.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _132.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _132.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _132.EvidenceType;
        Request: {
            encode(message: _132.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Request;
            fromJSON(object: any): _132.Request;
            toJSON(message: _132.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _132.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        totalVotingPower?: any;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _132.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: any;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _132.Request;
        };
        RequestEcho: {
            encode(message: _132.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestEcho;
            fromJSON(object: any): _132.RequestEcho;
            toJSON(message: _132.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _132.RequestEcho;
        };
        RequestFlush: {
            encode(_: _132.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestFlush;
            fromJSON(_: any): _132.RequestFlush;
            toJSON(_: _132.RequestFlush): unknown;
            fromPartial(_: {}): _132.RequestFlush;
        };
        RequestInfo: {
            encode(message: _132.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestInfo;
            fromJSON(object: any): _132.RequestInfo;
            toJSON(message: _132.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            }): _132.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _132.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestSetOption;
            fromJSON(object: any): _132.RequestSetOption;
            toJSON(message: _132.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _132.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _132.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestInitChain;
            fromJSON(object: any): _132.RequestInitChain;
            toJSON(message: _132.RequestInitChain): unknown;
            fromPartial(object: {
                time?: {
                    seconds?: any;
                    nanos?: number;
                };
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            }): _132.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _132.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestQuery;
            fromJSON(object: any): _132.RequestQuery;
            toJSON(message: _132.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            }): _132.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _132.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestBeginBlock;
            fromJSON(object: any): _132.RequestBeginBlock;
            toJSON(message: _132.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _132.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    totalVotingPower?: any;
                }[];
            }): _132.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _132.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestCheckTx;
            fromJSON(object: any): _132.RequestCheckTx;
            toJSON(message: _132.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _132.CheckTxType;
            }): _132.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _132.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestDeliverTx;
            fromJSON(object: any): _132.RequestDeliverTx;
            toJSON(message: _132.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _132.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _132.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestEndBlock;
            fromJSON(object: any): _132.RequestEndBlock;
            toJSON(message: _132.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: any;
            }): _132.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _132.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestCommit;
            fromJSON(_: any): _132.RequestCommit;
            toJSON(_: _132.RequestCommit): unknown;
            fromPartial(_: {}): _132.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _132.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestListSnapshots;
            fromJSON(_: any): _132.RequestListSnapshots;
            toJSON(_: _132.RequestListSnapshots): unknown;
            fromPartial(_: {}): _132.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _132.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestOfferSnapshot;
            fromJSON(object: any): _132.RequestOfferSnapshot;
            toJSON(message: _132.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _132.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _132.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestLoadSnapshotChunk;
            fromJSON(object: any): _132.RequestLoadSnapshotChunk;
            toJSON(message: _132.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunk?: number;
            }): _132.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _132.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestApplySnapshotChunk;
            fromJSON(object: any): _132.RequestApplySnapshotChunk;
            toJSON(message: _132.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _132.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _132.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Response;
            fromJSON(object: any): _132.Response;
            toJSON(message: _132.Response): unknown;
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
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
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
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
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
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
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
                    retainHeight?: any;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _132.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _132.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _132.Response;
        };
        ResponseException: {
            encode(message: _132.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseException;
            fromJSON(object: any): _132.ResponseException;
            toJSON(message: _132.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _132.ResponseException;
        };
        ResponseEcho: {
            encode(message: _132.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseEcho;
            fromJSON(object: any): _132.ResponseEcho;
            toJSON(message: _132.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _132.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _132.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseFlush;
            fromJSON(_: any): _132.ResponseFlush;
            toJSON(_: _132.ResponseFlush): unknown;
            fromPartial(_: {}): _132.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _132.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseInfo;
            fromJSON(object: any): _132.ResponseInfo;
            toJSON(message: _132.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            }): _132.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _132.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseSetOption;
            fromJSON(object: any): _132.ResponseSetOption;
            toJSON(message: _132.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _132.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _132.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseInitChain;
            fromJSON(object: any): _132.ResponseInitChain;
            toJSON(message: _132.ResponseInitChain): unknown;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appHash?: Uint8Array;
            }): _132.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _132.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseQuery;
            fromJSON(object: any): _132.ResponseQuery;
            toJSON(message: _132.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            }): _132.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _132.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseBeginBlock;
            fromJSON(object: any): _132.ResponseBeginBlock;
            toJSON(message: _132.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _132.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _132.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseCheckTx;
            fromJSON(object: any): _132.ResponseCheckTx;
            toJSON(message: _132.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _132.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _132.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseDeliverTx;
            fromJSON(object: any): _132.ResponseDeliverTx;
            toJSON(message: _132.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _132.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _132.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseEndBlock;
            fromJSON(object: any): _132.ResponseEndBlock;
            toJSON(message: _132.ResponseEndBlock): unknown;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
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
            }): _132.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _132.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseCommit;
            fromJSON(object: any): _132.ResponseCommit;
            toJSON(message: _132.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: any;
            }): _132.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _132.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseListSnapshots;
            fromJSON(object: any): _132.ResponseListSnapshots;
            toJSON(message: _132.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _132.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _132.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseOfferSnapshot;
            fromJSON(object: any): _132.ResponseOfferSnapshot;
            toJSON(message: _132.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _132.ResponseOfferSnapshot_Result;
            }): _132.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _132.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _132.ResponseLoadSnapshotChunk;
            toJSON(message: _132.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _132.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _132.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseApplySnapshotChunk;
            fromJSON(object: any): _132.ResponseApplySnapshotChunk;
            toJSON(message: _132.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _132.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _132.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _132.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusParams;
            fromJSON(object: any): _132.ConsensusParams;
            toJSON(message: _132.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _132.ConsensusParams;
        };
        BlockParams: {
            encode(message: _132.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BlockParams;
            fromJSON(object: any): _132.BlockParams;
            toJSON(message: _132.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
            }): _132.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _132.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.LastCommitInfo;
            fromJSON(object: any): _132.LastCommitInfo;
            toJSON(message: _132.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _132.LastCommitInfo;
        };
        Event: {
            encode(message: _132.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Event;
            fromJSON(object: any): _132.Event;
            toJSON(message: _132.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _132.Event;
        };
        EventAttribute: {
            encode(message: _132.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.EventAttribute;
            fromJSON(object: any): _132.EventAttribute;
            toJSON(message: _132.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _132.EventAttribute;
        };
        TxResult: {
            encode(message: _132.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TxResult;
            fromJSON(object: any): _132.TxResult;
            toJSON(message: _132.TxResult): unknown;
            fromPartial(object: {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
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
            }): _132.TxResult;
        };
        Validator: {
            encode(message: _132.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Validator;
            fromJSON(object: any): _132.Validator;
            toJSON(message: _132.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: any;
            }): _132.Validator;
        };
        ValidatorUpdate: {
            encode(message: _132.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ValidatorUpdate;
            fromJSON(object: any): _132.ValidatorUpdate;
            toJSON(message: _132.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            }): _132.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _132.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.VoteInfo;
            fromJSON(object: any): _132.VoteInfo;
            toJSON(message: _132.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            }): _132.VoteInfo;
        };
        Evidence: {
            encode(message: _132.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Evidence;
            fromJSON(object: any): _132.Evidence;
            toJSON(message: _132.Evidence): unknown;
            fromPartial(object: {
                type?: _132.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: {
                    seconds?: any;
                    nanos?: number;
                };
                totalVotingPower?: any;
            }): _132.Evidence;
        };
        Snapshot: {
            encode(message: _132.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Snapshot;
            fromJSON(object: any): _132.Snapshot;
            toJSON(message: _132.Snapshot): unknown;
            fromPartial(object: {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _132.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _134.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Proof;
            fromJSON(object: any): _134.Proof;
            toJSON(message: _134.Proof): unknown;
            fromPartial(object: {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _134.Proof;
        };
        ValueOp: {
            encode(message: _134.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ValueOp;
            fromJSON(object: any): _134.ValueOp;
            toJSON(message: _134.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _134.ValueOp;
        };
        DominoOp: {
            encode(message: _134.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.DominoOp;
            fromJSON(object: any): _134.DominoOp;
            toJSON(message: _134.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _134.DominoOp;
        };
        ProofOp: {
            encode(message: _134.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ProofOp;
            fromJSON(object: any): _134.ProofOp;
            toJSON(message: _134.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _134.ProofOp;
        };
        ProofOps: {
            encode(message: _134.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ProofOps;
            fromJSON(object: any): _134.ProofOps;
            toJSON(message: _134.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _134.ProofOps;
        };
        PublicKey: {
            encode(message: _133.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PublicKey;
            fromJSON(object: any): _133.PublicKey;
            toJSON(message: _133.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _133.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _135.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.BitArray;
                fromJSON(object: any): _135.BitArray;
                toJSON(message: _135.BitArray): unknown;
                fromPartial(object: {
                    bits?: any;
                    elems?: any[];
                }): _135.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _136.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ProtocolVersion;
            fromJSON(object: any): _136.ProtocolVersion;
            toJSON(message: _136.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: any;
                block?: any;
                app?: any;
            }): _136.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _136.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NodeInfo;
            fromJSON(object: any): _136.NodeInfo;
            toJSON(message: _136.NodeInfo): unknown;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                };
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _136.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _136.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NodeInfoOther;
            fromJSON(object: any): _136.NodeInfoOther;
            toJSON(message: _136.NodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _136.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _136.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PeerInfo;
            fromJSON(object: any): _136.PeerInfo;
            toJSON(message: _136.PeerInfo): unknown;
            fromPartial(object: {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lastDialFailure?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    dialFailures?: number;
                }[];
                lastConnected?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _136.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _136.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PeerAddressInfo;
            fromJSON(object: any): _136.PeerAddressInfo;
            toJSON(message: _136.PeerAddressInfo): unknown;
            fromPartial(object: {
                address?: string;
                lastDialSuccess?: {
                    seconds?: any;
                    nanos?: number;
                };
                lastDialFailure?: {
                    seconds?: any;
                    nanos?: number;
                };
                dialFailures?: number;
            }): _136.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _141.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ValidatorSet;
            fromJSON(object: any): _141.ValidatorSet;
            toJSON(message: _141.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                };
                totalVotingPower?: any;
            }): _141.ValidatorSet;
        };
        Validator: {
            encode(message: _141.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Validator;
            fromJSON(object: any): _141.Validator;
            toJSON(message: _141.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
            }): _141.Validator;
        };
        SimpleValidator: {
            encode(message: _141.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SimpleValidator;
            fromJSON(object: any): _141.SimpleValidator;
            toJSON(message: _141.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            }): _141.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _140.BlockIDFlag;
        blockIDFlagToJSON(object: _140.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _140.SignedMsgType;
        signedMsgTypeToJSON(object: _140.SignedMsgType): string;
        BlockIDFlag: typeof _140.BlockIDFlag;
        SignedMsgType: typeof _140.SignedMsgType;
        PartSetHeader: {
            encode(message: _140.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.PartSetHeader;
            fromJSON(object: any): _140.PartSetHeader;
            toJSON(message: _140.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _140.PartSetHeader;
        };
        Part: {
            encode(message: _140.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Part;
            fromJSON(object: any): _140.Part;
            toJSON(message: _140.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _140.Part;
        };
        BlockID: {
            encode(message: _140.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BlockID;
            fromJSON(object: any): _140.BlockID;
            toJSON(message: _140.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _140.BlockID;
        };
        Header: {
            encode(message: _140.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Header;
            fromJSON(object: any): _140.Header;
            toJSON(message: _140.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: any;
                    app?: any;
                };
                chainId?: string;
                height?: any;
                time?: {
                    seconds?: any;
                    nanos?: number;
                };
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _140.Header;
        };
        Data: {
            encode(message: _140.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Data;
            fromJSON(object: any): _140.Data;
            toJSON(message: _140.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _140.Data;
        };
        Vote: {
            encode(message: _140.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Vote;
            fromJSON(object: any): _140.Vote;
            toJSON(message: _140.Vote): unknown;
            fromPartial(object: {
                type?: _140.SignedMsgType;
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _140.Vote;
        };
        Commit: {
            encode(message: _140.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Commit;
            fromJSON(object: any): _140.Commit;
            toJSON(message: _140.Commit): unknown;
            fromPartial(object: {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _140.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    signature?: Uint8Array;
                }[];
            }): _140.Commit;
        };
        CommitSig: {
            encode(message: _140.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CommitSig;
            fromJSON(object: any): _140.CommitSig;
            toJSON(message: _140.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _140.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _140.CommitSig;
        };
        Proposal: {
            encode(message: _140.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Proposal;
            fromJSON(object: any): _140.Proposal;
            toJSON(message: _140.Proposal): unknown;
            fromPartial(object: {
                type?: _140.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
                signature?: Uint8Array;
            }): _140.Proposal;
        };
        SignedHeader: {
            encode(message: _140.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SignedHeader;
            fromJSON(object: any): _140.SignedHeader;
            toJSON(message: _140.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _140.SignedHeader;
        };
        LightBlock: {
            encode(message: _140.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.LightBlock;
            fromJSON(object: any): _140.LightBlock;
            toJSON(message: _140.LightBlock): unknown;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _140.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    };
                    totalVotingPower?: any;
                };
            }): _140.LightBlock;
        };
        BlockMeta: {
            encode(message: _140.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BlockMeta;
            fromJSON(object: any): _140.BlockMeta;
            toJSON(message: _140.BlockMeta): unknown;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: any;
            }): _140.BlockMeta;
        };
        TxProof: {
            encode(message: _140.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.TxProof;
            fromJSON(object: any): _140.TxProof;
            toJSON(message: _140.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _140.TxProof;
        };
        ConsensusParams: {
            encode(message: _139.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ConsensusParams;
            fromJSON(object: any): _139.ConsensusParams;
            toJSON(message: _139.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            }): _139.ConsensusParams;
        };
        BlockParams: {
            encode(message: _139.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.BlockParams;
            fromJSON(object: any): _139.BlockParams;
            toJSON(message: _139.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            }): _139.BlockParams;
        };
        EvidenceParams: {
            encode(message: _139.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.EvidenceParams;
            fromJSON(object: any): _139.EvidenceParams;
            toJSON(message: _139.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: {
                    seconds?: any;
                    nanos?: number;
                };
                maxBytes?: any;
            }): _139.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _139.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ValidatorParams;
            fromJSON(object: any): _139.ValidatorParams;
            toJSON(message: _139.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _139.ValidatorParams;
        };
        VersionParams: {
            encode(message: _139.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.VersionParams;
            fromJSON(object: any): _139.VersionParams;
            toJSON(message: _139.VersionParams): unknown;
            fromPartial(object: {
                appVersion?: any;
            }): _139.VersionParams;
        };
        HashedParams: {
            encode(message: _139.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.HashedParams;
            fromJSON(object: any): _139.HashedParams;
            toJSON(message: _139.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            }): _139.HashedParams;
        };
        Evidence: {
            encode(message: _138.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Evidence;
            fromJSON(object: any): _138.Evidence;
            toJSON(message: _138.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _140.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _140.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _140.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            };
                            totalVotingPower?: any;
                        };
                    };
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[];
                    totalVotingPower?: any;
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                };
            }): _138.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _138.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.DuplicateVoteEvidence;
            fromJSON(object: any): _138.DuplicateVoteEvidence;
            toJSON(message: _138.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _140.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _140.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _138.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _138.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.LightClientAttackEvidence;
            fromJSON(object: any): _138.LightClientAttackEvidence;
            toJSON(message: _138.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _140.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        };
                        totalVotingPower?: any;
                    };
                };
                commonHeight?: any;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[];
                totalVotingPower?: any;
                timestamp?: {
                    seconds?: any;
                    nanos?: number;
                };
            }): _138.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _138.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.EvidenceList;
            fromJSON(object: any): _138.EvidenceList;
            toJSON(message: _138.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _140.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _140.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    };
                                    chainId?: string;
                                    height?: any;
                                    time?: {
                                        seconds?: any;
                                        nanos?: number;
                                    };
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _140.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                };
                                totalVotingPower?: any;
                            };
                        };
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        totalVotingPower?: any;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }[];
            }): _138.EvidenceList;
        };
        Block: {
            encode(message: _137.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Block;
            fromJSON(object: any): _137.Block;
            toJSON(message: _137.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: any;
                        app?: any;
                    };
                    chainId?: string;
                    height?: any;
                    time?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _140.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _140.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: {
                                    seconds?: any;
                                    nanos?: number;
                                };
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        };
                                        chainId?: string;
                                        height?: any;
                                        time?: {
                                            seconds?: any;
                                            nanos?: number;
                                        };
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _140.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: {
                                                seconds?: any;
                                                nanos?: number;
                                            };
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    };
                                    totalVotingPower?: any;
                                };
                            };
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[];
                            totalVotingPower?: any;
                            timestamp?: {
                                seconds?: any;
                                nanos?: number;
                            };
                        };
                    }[];
                };
                lastCommit?: {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        signature?: Uint8Array;
                    }[];
                };
            }): _137.Block;
        };
    };
    const version: {
        App: {
            encode(message: _142.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.App;
            fromJSON(object: any): _142.App;
            toJSON(message: _142.App): unknown;
            fromPartial(object: {
                protocol?: any;
                software?: string;
            }): _142.App;
        };
        Consensus: {
            encode(message: _142.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Consensus;
            fromJSON(object: any): _142.Consensus;
            toJSON(message: _142.Consensus): unknown;
            fromPartial(object: {
                block?: any;
                app?: any;
            }): _142.Consensus;
        };
    };
}
