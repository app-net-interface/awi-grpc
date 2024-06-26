// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.22.2
// source: network_policy_service.proto

package awi

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type NetworkSLACreateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status Status `protobuf:"varint,1,opt,name=status,proto3,enum=Status" json:"status,omitempty"`
}

func (x *NetworkSLACreateResponse) Reset() {
	*x = NetworkSLACreateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkSLACreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkSLACreateResponse) ProtoMessage() {}

func (x *NetworkSLACreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkSLACreateResponse.ProtoReflect.Descriptor instead.
func (*NetworkSLACreateResponse) Descriptor() ([]byte, []int) {
	return file_network_policy_service_proto_rawDescGZIP(), []int{0}
}

func (x *NetworkSLACreateResponse) GetStatus() Status {
	if x != nil {
		return x.Status
	}
	return Status_IN_PROGRESS
}

type NetworkSLADeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *NetworkSLADeleteRequest) Reset() {
	*x = NetworkSLADeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkSLADeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkSLADeleteRequest) ProtoMessage() {}

func (x *NetworkSLADeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkSLADeleteRequest.ProtoReflect.Descriptor instead.
func (*NetworkSLADeleteRequest) Descriptor() ([]byte, []int) {
	return file_network_policy_service_proto_rawDescGZIP(), []int{1}
}

func (x *NetworkSLADeleteRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type NetworkSLADeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *NetworkSLADeleteResponse) Reset() {
	*x = NetworkSLADeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkSLADeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkSLADeleteResponse) ProtoMessage() {}

func (x *NetworkSLADeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkSLADeleteResponse.ProtoReflect.Descriptor instead.
func (*NetworkSLADeleteResponse) Descriptor() ([]byte, []int) {
	return file_network_policy_service_proto_rawDescGZIP(), []int{2}
}

type NetworkSLAListReqest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *NetworkSLAListReqest) Reset() {
	*x = NetworkSLAListReqest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkSLAListReqest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkSLAListReqest) ProtoMessage() {}

func (x *NetworkSLAListReqest) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkSLAListReqest.ProtoReflect.Descriptor instead.
func (*NetworkSLAListReqest) Descriptor() ([]byte, []int) {
	return file_network_policy_service_proto_rawDescGZIP(), []int{3}
}

type NetworkSLAListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	NetworkSLAs []*NetworkSLA `protobuf:"bytes,1,rep,name=networkSLAs,proto3" json:"networkSLAs,omitempty"`
}

func (x *NetworkSLAListResponse) Reset() {
	*x = NetworkSLAListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkSLAListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkSLAListResponse) ProtoMessage() {}

func (x *NetworkSLAListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkSLAListResponse.ProtoReflect.Descriptor instead.
func (*NetworkSLAListResponse) Descriptor() ([]byte, []int) {
	return file_network_policy_service_proto_rawDescGZIP(), []int{4}
}

func (x *NetworkSLAListResponse) GetNetworkSLAs() []*NetworkSLA {
	if x != nil {
		return x.NetworkSLAs
	}
	return nil
}

var File_network_policy_service_proto protoreflect.FileDescriptor

var file_network_policy_service_proto_rawDesc = []byte{
	0x0a, 0x1c, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x14,
	0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x3b, 0x0a, 0x18, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1f,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x07,
	0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22,
	0x2d, 0x0a, 0x17, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x1a,
	0x0a, 0x18, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x16, 0x0a, 0x14, 0x4e, 0x65,
	0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x65,
	0x73, 0x74, 0x22, 0x47, 0x0a, 0x16, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41,
	0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2d, 0x0a, 0x0b,
	0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x0b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x52, 0x0b,
	0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x73, 0x32, 0xe1, 0x01, 0x0a, 0x11,
	0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x12, 0x3c, 0x0a, 0x10, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x4e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x53, 0x4c, 0x41, 0x12, 0x0b, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53,
	0x4c, 0x41, 0x1a, 0x19, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x49, 0x0a, 0x10, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x53, 0x4c, 0x41, 0x12, 0x18, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e,
	0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x43, 0x0a, 0x0f, 0x4c, 0x69,
	0x73, 0x74, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x73, 0x12, 0x15, 0x2e,
	0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c, 0x41, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65,
	0x71, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x53, 0x4c,
	0x41, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42,
	0x08, 0x5a, 0x06, 0x2e, 0x2f, 0x3b, 0x61, 0x77, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_network_policy_service_proto_rawDescOnce sync.Once
	file_network_policy_service_proto_rawDescData = file_network_policy_service_proto_rawDesc
)

func file_network_policy_service_proto_rawDescGZIP() []byte {
	file_network_policy_service_proto_rawDescOnce.Do(func() {
		file_network_policy_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_network_policy_service_proto_rawDescData)
	})
	return file_network_policy_service_proto_rawDescData
}

var file_network_policy_service_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_network_policy_service_proto_goTypes = []interface{}{
	(*NetworkSLACreateResponse)(nil), // 0: NetworkSLACreateResponse
	(*NetworkSLADeleteRequest)(nil),  // 1: NetworkSLADeleteRequest
	(*NetworkSLADeleteResponse)(nil), // 2: NetworkSLADeleteResponse
	(*NetworkSLAListReqest)(nil),     // 3: NetworkSLAListReqest
	(*NetworkSLAListResponse)(nil),   // 4: NetworkSLAListResponse
	(Status)(0),                      // 5: Status
	(*NetworkSLA)(nil),               // 6: NetworkSLA
}
var file_network_policy_service_proto_depIdxs = []int32{
	5, // 0: NetworkSLACreateResponse.status:type_name -> Status
	6, // 1: NetworkSLAListResponse.networkSLAs:type_name -> NetworkSLA
	6, // 2: NetworkSLAService.CreateNetworkSLA:input_type -> NetworkSLA
	1, // 3: NetworkSLAService.DeleteNetworkSLA:input_type -> NetworkSLADeleteRequest
	3, // 4: NetworkSLAService.ListNetworkSLAs:input_type -> NetworkSLAListReqest
	0, // 5: NetworkSLAService.CreateNetworkSLA:output_type -> NetworkSLACreateResponse
	2, // 6: NetworkSLAService.DeleteNetworkSLA:output_type -> NetworkSLADeleteResponse
	4, // 7: NetworkSLAService.ListNetworkSLAs:output_type -> NetworkSLAListResponse
	5, // [5:8] is the sub-list for method output_type
	2, // [2:5] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_network_policy_service_proto_init() }
func file_network_policy_service_proto_init() {
	if File_network_policy_service_proto != nil {
		return
	}
	file_network_policy_proto_init()
	file_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_network_policy_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkSLACreateResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_network_policy_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkSLADeleteRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_network_policy_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkSLADeleteResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_network_policy_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkSLAListReqest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_network_policy_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkSLAListResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_network_policy_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_network_policy_service_proto_goTypes,
		DependencyIndexes: file_network_policy_service_proto_depIdxs,
		MessageInfos:      file_network_policy_service_proto_msgTypes,
	}.Build()
	File_network_policy_service_proto = out.File
	file_network_policy_service_proto_rawDesc = nil
	file_network_policy_service_proto_goTypes = nil
	file_network_policy_service_proto_depIdxs = nil
}
