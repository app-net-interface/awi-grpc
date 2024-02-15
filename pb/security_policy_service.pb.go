// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.22.2
// source: security_policy_service.proto

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

type AccessPolicyCreateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccessPolicy *Security_AccessPolicy `protobuf:"bytes,1,opt,name=access_policy,json=accessPolicy,proto3" json:"access_policy,omitempty"`
}

func (x *AccessPolicyCreateRequest) Reset() {
	*x = AccessPolicyCreateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policy_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessPolicyCreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessPolicyCreateRequest) ProtoMessage() {}

func (x *AccessPolicyCreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_security_policy_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessPolicyCreateRequest.ProtoReflect.Descriptor instead.
func (*AccessPolicyCreateRequest) Descriptor() ([]byte, []int) {
	return file_security_policy_service_proto_rawDescGZIP(), []int{0}
}

func (x *AccessPolicyCreateRequest) GetAccessPolicy() *Security_AccessPolicy {
	if x != nil {
		return x.AccessPolicy
	}
	return nil
}

type AccessPolicyCreateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Status Status `protobuf:"varint,1,opt,name=status,proto3,enum=Status" json:"status,omitempty"`
}

func (x *AccessPolicyCreateResponse) Reset() {
	*x = AccessPolicyCreateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policy_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessPolicyCreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessPolicyCreateResponse) ProtoMessage() {}

func (x *AccessPolicyCreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_security_policy_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessPolicyCreateResponse.ProtoReflect.Descriptor instead.
func (*AccessPolicyCreateResponse) Descriptor() ([]byte, []int) {
	return file_security_policy_service_proto_rawDescGZIP(), []int{1}
}

func (x *AccessPolicyCreateResponse) GetStatus() Status {
	if x != nil {
		return x.Status
	}
	return Status_IN_PROGRESS
}

type AccessPolicyDeleteRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *AccessPolicyDeleteRequest) Reset() {
	*x = AccessPolicyDeleteRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policy_service_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessPolicyDeleteRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessPolicyDeleteRequest) ProtoMessage() {}

func (x *AccessPolicyDeleteRequest) ProtoReflect() protoreflect.Message {
	mi := &file_security_policy_service_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessPolicyDeleteRequest.ProtoReflect.Descriptor instead.
func (*AccessPolicyDeleteRequest) Descriptor() ([]byte, []int) {
	return file_security_policy_service_proto_rawDescGZIP(), []int{2}
}

func (x *AccessPolicyDeleteRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type AccessPolicyDeleteResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AccessPolicyDeleteResponse) Reset() {
	*x = AccessPolicyDeleteResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policy_service_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessPolicyDeleteResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessPolicyDeleteResponse) ProtoMessage() {}

func (x *AccessPolicyDeleteResponse) ProtoReflect() protoreflect.Message {
	mi := &file_security_policy_service_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessPolicyDeleteResponse.ProtoReflect.Descriptor instead.
func (*AccessPolicyDeleteResponse) Descriptor() ([]byte, []int) {
	return file_security_policy_service_proto_rawDescGZIP(), []int{3}
}

type AccessPolicyListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *AccessPolicyListRequest) Reset() {
	*x = AccessPolicyListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policy_service_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessPolicyListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessPolicyListRequest) ProtoMessage() {}

func (x *AccessPolicyListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_security_policy_service_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessPolicyListRequest.ProtoReflect.Descriptor instead.
func (*AccessPolicyListRequest) Descriptor() ([]byte, []int) {
	return file_security_policy_service_proto_rawDescGZIP(), []int{4}
}

type AccessPolicyListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AccessPolicies []*Security_AccessPolicy `protobuf:"bytes,1,rep,name=access_policies,json=accessPolicies,proto3" json:"access_policies,omitempty"`
}

func (x *AccessPolicyListResponse) Reset() {
	*x = AccessPolicyListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policy_service_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AccessPolicyListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AccessPolicyListResponse) ProtoMessage() {}

func (x *AccessPolicyListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_security_policy_service_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AccessPolicyListResponse.ProtoReflect.Descriptor instead.
func (*AccessPolicyListResponse) Descriptor() ([]byte, []int) {
	return file_security_policy_service_proto_rawDescGZIP(), []int{5}
}

func (x *AccessPolicyListResponse) GetAccessPolicies() []*Security_AccessPolicy {
	if x != nil {
		return x.AccessPolicies
	}
	return nil
}

var File_security_policy_service_proto protoreflect.FileDescriptor

var file_security_policy_service_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x5f, 0x70, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x17, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x5f, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x69,
	0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x58, 0x0a, 0x19, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x3b, 0x0a, 0x0d, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x70, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x53, 0x65, 0x63,
	0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69,
	0x63, 0x79, 0x52, 0x0c, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x22, 0x3d, 0x0a, 0x1a, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1f,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x07,
	0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22,
	0x2f, 0x0a, 0x19, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x22, 0x1c, 0x0a, 0x1a, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x19,
	0x0a, 0x17, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x4c, 0x69,
	0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x5b, 0x0a, 0x18, 0x41, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3f, 0x0a, 0x0f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f,
	0x70, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x16,
	0x2e, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x0e, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x32, 0x86, 0x02, 0x0a, 0x15, 0x53, 0x65, 0x63, 0x75, 0x72,
	0x69, 0x74, 0x79, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x4f, 0x0a, 0x12, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x1a, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50,
	0x6f, 0x6c, 0x69, 0x63, 0x79, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x12, 0x4f, 0x0a, 0x12, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x1a, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69,
	0x63, 0x79, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x00, 0x12, 0x4b, 0x0a, 0x12, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x50, 0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x12, 0x18, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73,
	0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x19, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42,
	0x08, 0x5a, 0x06, 0x2e, 0x2f, 0x3b, 0x61, 0x77, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_security_policy_service_proto_rawDescOnce sync.Once
	file_security_policy_service_proto_rawDescData = file_security_policy_service_proto_rawDesc
)

func file_security_policy_service_proto_rawDescGZIP() []byte {
	file_security_policy_service_proto_rawDescOnce.Do(func() {
		file_security_policy_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_security_policy_service_proto_rawDescData)
	})
	return file_security_policy_service_proto_rawDescData
}

var file_security_policy_service_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_security_policy_service_proto_goTypes = []interface{}{
	(*AccessPolicyCreateRequest)(nil),  // 0: AccessPolicyCreateRequest
	(*AccessPolicyCreateResponse)(nil), // 1: AccessPolicyCreateResponse
	(*AccessPolicyDeleteRequest)(nil),  // 2: AccessPolicyDeleteRequest
	(*AccessPolicyDeleteResponse)(nil), // 3: AccessPolicyDeleteResponse
	(*AccessPolicyListRequest)(nil),    // 4: AccessPolicyListRequest
	(*AccessPolicyListResponse)(nil),   // 5: AccessPolicyListResponse
	(*Security_AccessPolicy)(nil),      // 6: Security.AccessPolicy
	(Status)(0),                        // 7: Status
}
var file_security_policy_service_proto_depIdxs = []int32{
	6, // 0: AccessPolicyCreateRequest.access_policy:type_name -> Security.AccessPolicy
	7, // 1: AccessPolicyCreateResponse.status:type_name -> Status
	6, // 2: AccessPolicyListResponse.access_policies:type_name -> Security.AccessPolicy
	0, // 3: SecurityPolicyService.CreateAccessPolicy:input_type -> AccessPolicyCreateRequest
	2, // 4: SecurityPolicyService.DeleteAccessPolicy:input_type -> AccessPolicyDeleteRequest
	4, // 5: SecurityPolicyService.ListAccessPolicies:input_type -> AccessPolicyListRequest
	1, // 6: SecurityPolicyService.CreateAccessPolicy:output_type -> AccessPolicyCreateResponse
	3, // 7: SecurityPolicyService.DeleteAccessPolicy:output_type -> AccessPolicyDeleteResponse
	5, // 8: SecurityPolicyService.ListAccessPolicies:output_type -> AccessPolicyListResponse
	6, // [6:9] is the sub-list for method output_type
	3, // [3:6] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_security_policy_service_proto_init() }
func file_security_policy_service_proto_init() {
	if File_security_policy_service_proto != nil {
		return
	}
	file_security_policies_proto_init()
	file_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_security_policy_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessPolicyCreateRequest); i {
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
		file_security_policy_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessPolicyCreateResponse); i {
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
		file_security_policy_service_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessPolicyDeleteRequest); i {
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
		file_security_policy_service_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessPolicyDeleteResponse); i {
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
		file_security_policy_service_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessPolicyListRequest); i {
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
		file_security_policy_service_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AccessPolicyListResponse); i {
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
			RawDescriptor: file_security_policy_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_security_policy_service_proto_goTypes,
		DependencyIndexes: file_security_policy_service_proto_depIdxs,
		MessageInfos:      file_security_policy_service_proto_msgTypes,
	}.Build()
	File_security_policy_service_proto = out.File
	file_security_policy_service_proto_rawDesc = nil
	file_security_policy_service_proto_goTypes = nil
	file_security_policy_service_proto_depIdxs = nil
}