import * as _93 from "./api/http";
import * as _94 from "./protobuf/any";
import * as _95 from "./protobuf/descriptor";
import * as _96 from "./protobuf/duration";
import * as _97 from "./protobuf/empty";
import * as _98 from "./protobuf/timestamp";
import * as _99 from "./protobuf/struct";
import * as _100 from "./protobuf/wrappers";
import * as _101 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _93.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    response_body?: string;
                    additional_bindings?: any[];
                }[];
                fully_decode_reserved_expansion?: boolean;
            }): _93.Http;
        };
        HttpRule: {
            encode(message: _93.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                response_body?: string;
                additional_bindings?: any[];
            }): _93.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _93.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _93.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _101.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.FieldMask;
            fromPartial(object: {
                paths?: string[];
            }): _101.FieldMask;
        };
        DoubleValue: {
            encode(message: _100.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.DoubleValue;
            fromPartial(object: {
                value?: number;
            }): _100.DoubleValue;
        };
        FloatValue: {
            encode(message: _100.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.FloatValue;
            fromPartial(object: {
                value?: number;
            }): _100.FloatValue;
        };
        Int64Value: {
            encode(message: _100.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Int64Value;
            fromPartial(object: {
                value?: any;
            }): _100.Int64Value;
        };
        UInt64Value: {
            encode(message: _100.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.UInt64Value;
            fromPartial(object: {
                value?: any;
            }): _100.UInt64Value;
        };
        Int32Value: {
            encode(message: _100.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Int32Value;
            fromPartial(object: {
                value?: number;
            }): _100.Int32Value;
        };
        UInt32Value: {
            encode(message: _100.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.UInt32Value;
            fromPartial(object: {
                value?: number;
            }): _100.UInt32Value;
        };
        BoolValue: {
            encode(message: _100.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.BoolValue;
            fromPartial(object: {
                value?: boolean;
            }): _100.BoolValue;
        };
        StringValue: {
            encode(message: _100.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.StringValue;
            fromPartial(object: {
                value?: string;
            }): _100.StringValue;
        };
        BytesValue: {
            encode(message: _100.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.BytesValue;
            fromPartial(object: {
                value?: Uint8Array;
            }): _100.BytesValue;
        };
        nullValueFromJSON(object: any): _99.NullValue;
        nullValueToJSON(object: _99.NullValue): string;
        NullValue: typeof _99.NullValue;
        NullValueSDKType: typeof _99.NullValueSDKType;
        Struct_FieldsEntry: {
            encode(message: _99.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Struct_FieldsEntry;
            fromPartial(object: {
                key?: string;
                value?: {
                    null_value?: _99.NullValue;
                    number_value?: number;
                    string_value?: string;
                    bool_value?: boolean;
                    struct_value?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    list_value?: {
                        values?: any[];
                    };
                };
            }): _99.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _99.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Struct;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _99.Struct;
        };
        Value: {
            encode(message: _99.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Value;
            fromPartial(object: {
                null_value?: _99.NullValue;
                number_value?: number;
                string_value?: string;
                bool_value?: boolean;
                struct_value?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                list_value?: {
                    values?: any[];
                };
            }): _99.Value;
        };
        ListValue: {
            encode(message: _99.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ListValue;
            fromPartial(object: {
                values?: any[];
            }): _99.ListValue;
        };
        Timestamp: {
            encode(message: _98.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Timestamp;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _98.Timestamp;
        };
        Empty: {
            encode(_: _97.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Empty;
            fromPartial(_: {}): _97.Empty;
        };
        Duration: {
            encode(message: _96.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Duration;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _96.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _95.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _95.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _95.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _95.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _95.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _95.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _95.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _95.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _95.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _95.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _95.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _95.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _95.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _95.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _95.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _95.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _95.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _95.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _95.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _95.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _95.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _95.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _95.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _95.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _95.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.FileDescriptorSet;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    public_dependency?: number[];
                    weak_dependency?: number[];
                    message_type?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _95.FieldDescriptorProto_Label;
                            type?: _95.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _95.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _95.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _95.FieldDescriptorProto_Label;
                            type?: _95.FieldDescriptorProto_Type;
                            type_name?: string;
                            extendee?: string;
                            default_value?: string;
                            oneof_index?: number;
                            json_name?: string;
                            options?: {
                                ctype?: _95.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _95.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        nested_type?: any[];
                        enum_type?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpreted_option?: {
                                        name?: {
                                            name_part?: string;
                                            is_extension?: boolean;
                                        }[];
                                        identifier_value?: string;
                                        positive_int_value?: any;
                                        negative_int_value?: any;
                                        double_value?: number;
                                        string_value?: Uint8Array;
                                        aggregate_value?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allow_alias?: boolean;
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            reserved_range?: {
                                start?: number;
                                end?: number;
                            }[];
                            reserved_name?: string[];
                        }[];
                        extension_range?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        oneof_decl?: {
                            name?: string;
                            options?: {
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            message_set_wire_format?: boolean;
                            no_standard_descriptor_accessor?: boolean;
                            deprecated?: boolean;
                            map_entry?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            input_type?: string;
                            output_type?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotency_level?: _95.MethodOptions_IdempotencyLevel;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                            client_streaming?: boolean;
                            server_streaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _95.FieldDescriptorProto_Label;
                        type?: _95.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _95.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _95.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        java_package?: string;
                        java_outer_classname?: string;
                        java_multiple_files?: boolean;
                        java_generate_equals_and_hash?: boolean;
                        java_string_check_utf8?: boolean;
                        optimize_for?: _95.FileOptions_OptimizeMode;
                        go_package?: string;
                        cc_generic_services?: boolean;
                        java_generic_services?: boolean;
                        py_generic_services?: boolean;
                        php_generic_services?: boolean;
                        deprecated?: boolean;
                        cc_enable_arenas?: boolean;
                        objc_class_prefix?: string;
                        csharp_namespace?: string;
                        swift_prefix?: string;
                        php_class_prefix?: string;
                        php_namespace?: string;
                        php_metadata_namespace?: string;
                        ruby_package?: string;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    source_code_info?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leading_comments?: string;
                            trailing_comments?: string;
                            leading_detached_comments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _95.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _95.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.FileDescriptorProto;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                public_dependency?: number[];
                weak_dependency?: number[];
                message_type?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _95.FieldDescriptorProto_Label;
                        type?: _95.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _95.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _95.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _95.FieldDescriptorProto_Label;
                        type?: _95.FieldDescriptorProto_Type;
                        type_name?: string;
                        extendee?: string;
                        default_value?: string;
                        oneof_index?: number;
                        json_name?: string;
                        options?: {
                            ctype?: _95.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _95.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    nested_type?: any[];
                    enum_type?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpreted_option?: {
                                    name?: {
                                        name_part?: string;
                                        is_extension?: boolean;
                                    }[];
                                    identifier_value?: string;
                                    positive_int_value?: any;
                                    negative_int_value?: any;
                                    double_value?: number;
                                    string_value?: Uint8Array;
                                    aggregate_value?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allow_alias?: boolean;
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        reserved_range?: {
                            start?: number;
                            end?: number;
                        }[];
                        reserved_name?: string[];
                    }[];
                    extension_range?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    oneof_decl?: {
                        name?: string;
                        options?: {
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        message_set_wire_format?: boolean;
                        no_standard_descriptor_accessor?: boolean;
                        deprecated?: boolean;
                        map_entry?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        input_type?: string;
                        output_type?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotency_level?: _95.MethodOptions_IdempotencyLevel;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                        client_streaming?: boolean;
                        server_streaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _95.FieldDescriptorProto_Label;
                    type?: _95.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _95.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _95.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    java_package?: string;
                    java_outer_classname?: string;
                    java_multiple_files?: boolean;
                    java_generate_equals_and_hash?: boolean;
                    java_string_check_utf8?: boolean;
                    optimize_for?: _95.FileOptions_OptimizeMode;
                    go_package?: string;
                    cc_generic_services?: boolean;
                    java_generic_services?: boolean;
                    py_generic_services?: boolean;
                    php_generic_services?: boolean;
                    deprecated?: boolean;
                    cc_enable_arenas?: boolean;
                    objc_class_prefix?: string;
                    csharp_namespace?: string;
                    swift_prefix?: string;
                    php_class_prefix?: string;
                    php_namespace?: string;
                    php_metadata_namespace?: string;
                    ruby_package?: string;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                source_code_info?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leading_comments?: string;
                        trailing_comments?: string;
                        leading_detached_comments?: string[];
                    }[];
                };
                syntax?: string;
            }): _95.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _95.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _95.FieldDescriptorProto_Label;
                    type?: _95.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _95.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _95.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _95.FieldDescriptorProto_Label;
                    type?: _95.FieldDescriptorProto_Type;
                    type_name?: string;
                    extendee?: string;
                    default_value?: string;
                    oneof_index?: number;
                    json_name?: string;
                    options?: {
                        ctype?: _95.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _95.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                nested_type?: any[];
                enum_type?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpreted_option?: {
                                name?: {
                                    name_part?: string;
                                    is_extension?: boolean;
                                }[];
                                identifier_value?: string;
                                positive_int_value?: any;
                                negative_int_value?: any;
                                double_value?: number;
                                string_value?: Uint8Array;
                                aggregate_value?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allow_alias?: boolean;
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    reserved_range?: {
                        start?: number;
                        end?: number;
                    }[];
                    reserved_name?: string[];
                }[];
                extension_range?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                oneof_decl?: {
                    name?: string;
                    options?: {
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    message_set_wire_format?: boolean;
                    no_standard_descriptor_accessor?: boolean;
                    deprecated?: boolean;
                    map_entry?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _95.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _95.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DescriptorProto_ExtensionRange;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _95.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _95.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _95.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _95.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ExtensionRangeOptions;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _95.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _95.FieldDescriptorProto_Label;
                type?: _95.FieldDescriptorProto_Type;
                type_name?: string;
                extendee?: string;
                default_value?: string;
                oneof_index?: number;
                json_name?: string;
                options?: {
                    ctype?: _95.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _95.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _95.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _95.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.OneofDescriptorProto;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _95.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _95.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EnumDescriptorProto;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                }[];
                options?: {
                    allow_alias?: boolean;
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                reserved_range?: {
                    start?: number;
                    end?: number;
                }[];
                reserved_name?: string[];
            }): _95.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _95.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _95.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _95.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EnumValueDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _95.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _95.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    input_type?: string;
                    output_type?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotency_level?: _95.MethodOptions_IdempotencyLevel;
                        uninterpreted_option?: {
                            name?: {
                                name_part?: string;
                                is_extension?: boolean;
                            }[];
                            identifier_value?: string;
                            positive_int_value?: any;
                            negative_int_value?: any;
                            double_value?: number;
                            string_value?: Uint8Array;
                            aggregate_value?: string;
                        }[];
                    };
                    client_streaming?: boolean;
                    server_streaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
            }): _95.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _95.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                input_type?: string;
                output_type?: string;
                options?: {
                    deprecated?: boolean;
                    idempotency_level?: _95.MethodOptions_IdempotencyLevel;
                    uninterpreted_option?: {
                        name?: {
                            name_part?: string;
                            is_extension?: boolean;
                        }[];
                        identifier_value?: string;
                        positive_int_value?: any;
                        negative_int_value?: any;
                        double_value?: number;
                        string_value?: Uint8Array;
                        aggregate_value?: string;
                    }[];
                };
                client_streaming?: boolean;
                server_streaming?: boolean;
            }): _95.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _95.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.FileOptions;
            fromPartial(object: {
                java_package?: string;
                java_outer_classname?: string;
                java_multiple_files?: boolean;
                java_generate_equals_and_hash?: boolean;
                java_string_check_utf8?: boolean;
                optimize_for?: _95.FileOptions_OptimizeMode;
                go_package?: string;
                cc_generic_services?: boolean;
                java_generic_services?: boolean;
                py_generic_services?: boolean;
                php_generic_services?: boolean;
                deprecated?: boolean;
                cc_enable_arenas?: boolean;
                objc_class_prefix?: string;
                csharp_namespace?: string;
                swift_prefix?: string;
                php_class_prefix?: string;
                php_namespace?: string;
                php_metadata_namespace?: string;
                ruby_package?: string;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.FileOptions;
        };
        MessageOptions: {
            encode(message: _95.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MessageOptions;
            fromPartial(object: {
                message_set_wire_format?: boolean;
                no_standard_descriptor_accessor?: boolean;
                deprecated?: boolean;
                map_entry?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.MessageOptions;
        };
        FieldOptions: {
            encode(message: _95.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.FieldOptions;
            fromPartial(object: {
                ctype?: _95.FieldOptions_CType;
                packed?: boolean;
                jstype?: _95.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.FieldOptions;
        };
        OneofOptions: {
            encode(message: _95.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.OneofOptions;
            fromPartial(object: {
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.OneofOptions;
        };
        EnumOptions: {
            encode(message: _95.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EnumOptions;
            fromPartial(object: {
                allow_alias?: boolean;
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _95.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.EnumValueOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _95.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ServiceOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _95.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotency_level?: _95.MethodOptions_IdempotencyLevel;
                uninterpreted_option?: {
                    name?: {
                        name_part?: string;
                        is_extension?: boolean;
                    }[];
                    identifier_value?: string;
                    positive_int_value?: any;
                    negative_int_value?: any;
                    double_value?: number;
                    string_value?: Uint8Array;
                    aggregate_value?: string;
                }[];
            }): _95.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _95.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.UninterpretedOption;
            fromPartial(object: {
                name?: {
                    name_part?: string;
                    is_extension?: boolean;
                }[];
                identifier_value?: string;
                positive_int_value?: any;
                negative_int_value?: any;
                double_value?: number;
                string_value?: Uint8Array;
                aggregate_value?: string;
            }): _95.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _95.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.UninterpretedOption_NamePart;
            fromPartial(object: {
                name_part?: string;
                is_extension?: boolean;
            }): _95.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _95.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leading_comments?: string;
                    trailing_comments?: string;
                    leading_detached_comments?: string[];
                }[];
            }): _95.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _95.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leading_comments?: string;
                trailing_comments?: string;
                leading_detached_comments?: string[];
            }): _95.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _95.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    source_file?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _95.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _95.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                source_file?: string;
                begin?: number;
                end?: number;
            }): _95.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _94.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Any;
            fromPartial(object: {
                type_url?: string;
                value?: Uint8Array;
            }): _94.Any;
        };
    };
}
