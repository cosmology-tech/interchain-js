import * as _97 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _97.ScalarType;
    scalarTypeToJSON(object: _97.ScalarType): string;
    ScalarType: typeof _97.ScalarType;
    ScalarTypeSDKType: typeof _97.ScalarType;
    ScalarTypeAmino: typeof _97.ScalarType;
    InterfaceDescriptor: {
        encode(message: _97.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.InterfaceDescriptor;
        fromPartial(object: any): _97.InterfaceDescriptor;
        fromAmino(object: _97.InterfaceDescriptorAmino): _97.InterfaceDescriptor;
        toAmino(message: _97.InterfaceDescriptor): _97.InterfaceDescriptorAmino;
        fromAminoMsg(object: _97.InterfaceDescriptorAminoMsg): _97.InterfaceDescriptor;
        fromProtoMsg(message: _97.InterfaceDescriptorProtoMsg): _97.InterfaceDescriptor;
        toProto(message: _97.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _97.InterfaceDescriptor): _97.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        encode(message: _97.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ScalarDescriptor;
        fromPartial(object: any): _97.ScalarDescriptor;
        fromAmino(object: _97.ScalarDescriptorAmino): _97.ScalarDescriptor;
        toAmino(message: _97.ScalarDescriptor): _97.ScalarDescriptorAmino;
        fromAminoMsg(object: _97.ScalarDescriptorAminoMsg): _97.ScalarDescriptor;
        fromProtoMsg(message: _97.ScalarDescriptorProtoMsg): _97.ScalarDescriptor;
        toProto(message: _97.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _97.ScalarDescriptor): _97.ScalarDescriptorProtoMsg;
    };
};
