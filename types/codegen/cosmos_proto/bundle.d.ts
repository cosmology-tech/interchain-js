import * as _92 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _92.ScalarType;
    scalarTypeToJSON(object: _92.ScalarType): string;
    ScalarType: typeof _92.ScalarType;
    ScalarTypeSDKType: typeof _92.ScalarType;
    ScalarTypeAmino: typeof _92.ScalarType;
    InterfaceDescriptor: {
        encode(message: _92.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.InterfaceDescriptor;
        fromPartial(object: any): _92.InterfaceDescriptor;
        fromAmino(object: _92.InterfaceDescriptorAmino): _92.InterfaceDescriptor;
        toAmino(message: _92.InterfaceDescriptor): _92.InterfaceDescriptorAmino;
        fromAminoMsg(object: _92.InterfaceDescriptorAminoMsg): _92.InterfaceDescriptor;
        fromProtoMsg(message: _92.InterfaceDescriptorProtoMsg): _92.InterfaceDescriptor;
        toProto(message: _92.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _92.InterfaceDescriptor): _92.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        encode(message: _92.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ScalarDescriptor;
        fromPartial(object: any): _92.ScalarDescriptor;
        fromAmino(object: _92.ScalarDescriptorAmino): _92.ScalarDescriptor;
        toAmino(message: _92.ScalarDescriptor): _92.ScalarDescriptorAmino;
        fromAminoMsg(object: _92.ScalarDescriptorAminoMsg): _92.ScalarDescriptor;
        fromProtoMsg(message: _92.ScalarDescriptorProtoMsg): _92.ScalarDescriptor;
        toProto(message: _92.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _92.ScalarDescriptor): _92.ScalarDescriptorProtoMsg;
    };
};
