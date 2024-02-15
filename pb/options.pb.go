// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.22.2
// source: options.proto

package awi

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	descriptorpb "google.golang.org/protobuf/types/descriptorpb"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var file_options_proto_extTypes = []protoimpl.ExtensionInfo{
	{
		ExtendedType:  (*descriptorpb.EnumOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         1060,
		Name:          "alpha_enum",
		Tag:           "varint,1060,opt,name=alpha_enum",
		Filename:      "options.proto",
	},
	{
		ExtendedType:  (*descriptorpb.EnumValueOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         1060,
		Name:          "alpha_enum_value",
		Tag:           "varint,1060,opt,name=alpha_enum_value",
		Filename:      "options.proto",
	},
	{
		ExtendedType:  (*descriptorpb.FieldOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         1059,
		Name:          "controller_secret",
		Tag:           "varint,1059,opt,name=controller_secret",
		Filename:      "options.proto",
	},
	{
		ExtendedType:  (*descriptorpb.FieldOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         1060,
		Name:          "alpha_field",
		Tag:           "varint,1060,opt,name=alpha_field",
		Filename:      "options.proto",
	},
	{
		ExtendedType:  (*descriptorpb.MessageOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         1060,
		Name:          "alpha_message",
		Tag:           "varint,1060,opt,name=alpha_message",
		Filename:      "options.proto",
	},
	{
		ExtendedType:  (*descriptorpb.MethodOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         1060,
		Name:          "alpha_method",
		Tag:           "varint,1060,opt,name=alpha_method",
		Filename:      "options.proto",
	},
	{
		ExtendedType:  (*descriptorpb.ServiceOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         1060,
		Name:          "alpha_service",
		Tag:           "varint,1060,opt,name=alpha_service",
		Filename:      "options.proto",
	},
}

// Extension fields to descriptorpb.EnumOptions.
var (
	// Indicates that this enum is OPTIONAL and part of an experimental
	// API that may be deprecated and eventually removed between minor
	// releases.
	//
	// optional bool alpha_enum = 1060;
	E_AlphaEnum = &file_options_proto_extTypes[0]
)

// Extension fields to descriptorpb.EnumValueOptions.
var (
	// Indicates that this enum value is OPTIONAL and part of an
	// experimental API that may be deprecated and eventually removed
	// between minor releases.
	//
	// optional bool alpha_enum_value = 1060;
	E_AlphaEnumValue = &file_options_proto_extTypes[1]
)

// Extension fields to descriptorpb.FieldOptions.
var (
	// Indicates that a field MAY contain information that is sensitive
	// and MUST be treated as such (e.g. not logged).
	//
	// optional bool controller_secret = 1059;
	E_ControllerSecret = &file_options_proto_extTypes[2]
	// Indicates that this field is OPTIONAL and part of an experimental
	// API that may be deprecated and eventually removed between minor
	// releases.
	//
	// optional bool alpha_field = 1060;
	E_AlphaField = &file_options_proto_extTypes[3]
)

// Extension fields to descriptorpb.MessageOptions.
var (
	// Indicates that this message is OPTIONAL and part of an experimental
	// API that may be deprecated and eventually removed between minor
	// releases.
	//
	// optional bool alpha_message = 1060;
	E_AlphaMessage = &file_options_proto_extTypes[4]
)

// Extension fields to descriptorpb.MethodOptions.
var (
	// Indicates that this method is OPTIONAL and part of an experimental
	// API that may be deprecated and eventually removed between minor
	// releases.
	//
	// optional bool alpha_method = 1060;
	E_AlphaMethod = &file_options_proto_extTypes[5]
)

// Extension fields to descriptorpb.ServiceOptions.
var (
	// Indicates that this service is OPTIONAL and part of an experimental
	// API that may be deprecated and eventually removed between minor
	// releases.
	//
	// optional bool alpha_service = 1060;
	E_AlphaService = &file_options_proto_extTypes[6]
)

var File_options_proto protoreflect.FileDescriptor

var file_options_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x6f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x3a, 0x3c, 0x0a, 0x0a, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x5f, 0x65, 0x6e, 0x75, 0x6d, 0x12,
	0x1c, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x45, 0x6e, 0x75, 0x6d, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xa4, 0x08,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x45, 0x6e, 0x75, 0x6d, 0x3a,
	0x4c, 0x0a, 0x10, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x5f, 0x65, 0x6e, 0x75, 0x6d, 0x5f, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x12, 0x21, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x45, 0x6e, 0x75, 0x6d, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x4f,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xa4, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0e, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x45, 0x6e, 0x75, 0x6d, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x4b, 0x0a,
	0x11, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x5f, 0x73, 0x65, 0x63, 0x72,
	0x65, 0x74, 0x12, 0x1d, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x18, 0xa3, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x10, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f,
	0x6c, 0x6c, 0x65, 0x72, 0x53, 0x65, 0x63, 0x72, 0x65, 0x74, 0x3a, 0x3f, 0x0a, 0x0b, 0x61, 0x6c,
	0x70, 0x68, 0x61, 0x5f, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x12, 0x1d, 0x2e, 0x67, 0x6f, 0x6f, 0x67,
	0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c,
	0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xa4, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0a, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x3a, 0x45, 0x0a, 0x0d, 0x61,
	0x6c, 0x70, 0x68, 0x61, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x1f, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xa4, 0x08,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x0c, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x4d, 0x65, 0x73, 0x73, 0x61,
	0x67, 0x65, 0x3a, 0x42, 0x0a, 0x0c, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x5f, 0x6d, 0x65, 0x74, 0x68,
	0x6f, 0x64, 0x12, 0x1e, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x73, 0x18, 0xa4, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0b, 0x61, 0x6c, 0x70, 0x68, 0x61,
	0x4d, 0x65, 0x74, 0x68, 0x6f, 0x64, 0x3a, 0x45, 0x0a, 0x0d, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x5f,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x1f, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xa4, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0c, 0x61, 0x6c, 0x70, 0x68, 0x61, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x42, 0x08, 0x5a,
	0x06, 0x2e, 0x2f, 0x3b, 0x61, 0x77, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_options_proto_goTypes = []interface{}{
	(*descriptorpb.EnumOptions)(nil),      // 0: google.protobuf.EnumOptions
	(*descriptorpb.EnumValueOptions)(nil), // 1: google.protobuf.EnumValueOptions
	(*descriptorpb.FieldOptions)(nil),     // 2: google.protobuf.FieldOptions
	(*descriptorpb.MessageOptions)(nil),   // 3: google.protobuf.MessageOptions
	(*descriptorpb.MethodOptions)(nil),    // 4: google.protobuf.MethodOptions
	(*descriptorpb.ServiceOptions)(nil),   // 5: google.protobuf.ServiceOptions
}
var file_options_proto_depIdxs = []int32{
	0, // 0: alpha_enum:extendee -> google.protobuf.EnumOptions
	1, // 1: alpha_enum_value:extendee -> google.protobuf.EnumValueOptions
	2, // 2: controller_secret:extendee -> google.protobuf.FieldOptions
	2, // 3: alpha_field:extendee -> google.protobuf.FieldOptions
	3, // 4: alpha_message:extendee -> google.protobuf.MessageOptions
	4, // 5: alpha_method:extendee -> google.protobuf.MethodOptions
	5, // 6: alpha_service:extendee -> google.protobuf.ServiceOptions
	7, // [7:7] is the sub-list for method output_type
	7, // [7:7] is the sub-list for method input_type
	7, // [7:7] is the sub-list for extension type_name
	0, // [0:7] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_options_proto_init() }
func file_options_proto_init() {
	if File_options_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_options_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 7,
			NumServices:   0,
		},
		GoTypes:           file_options_proto_goTypes,
		DependencyIndexes: file_options_proto_depIdxs,
		ExtensionInfos:    file_options_proto_extTypes,
	}.Build()
	File_options_proto = out.File
	file_options_proto_rawDesc = nil
	file_options_proto_goTypes = nil
	file_options_proto_depIdxs = nil
}