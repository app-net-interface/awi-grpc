// Copyright (c) 2023 Cisco Systems, Inc. and its affiliates
// All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http:www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v3.12.4
// source: security_policies.proto

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

type Security struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *Security) Reset() {
	*x = Security{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policies_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Security) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Security) ProtoMessage() {}

func (x *Security) ProtoReflect() protoreflect.Message {
	mi := &file_security_policies_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Security.ProtoReflect.Descriptor instead.
func (*Security) Descriptor() ([]byte, []int) {
	return file_security_policies_proto_rawDescGZIP(), []int{0}
}

type Security_PolicyMetadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name                  string            `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description           string            `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	Labels                map[string]string `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	CreationTimestamp     string            `protobuf:"bytes,4,opt,name=creationTimestamp,proto3" json:"creationTimestamp,omitempty"`
	ModificationTimestamp string            `protobuf:"bytes,5,opt,name=modificationTimestamp,proto3" json:"modificationTimestamp,omitempty"`
}

func (x *Security_PolicyMetadata) Reset() {
	*x = Security_PolicyMetadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policies_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Security_PolicyMetadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Security_PolicyMetadata) ProtoMessage() {}

func (x *Security_PolicyMetadata) ProtoReflect() protoreflect.Message {
	mi := &file_security_policies_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Security_PolicyMetadata.ProtoReflect.Descriptor instead.
func (*Security_PolicyMetadata) Descriptor() ([]byte, []int) {
	return file_security_policies_proto_rawDescGZIP(), []int{0, 0}
}

func (x *Security_PolicyMetadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Security_PolicyMetadata) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Security_PolicyMetadata) GetLabels() map[string]string {
	if x != nil {
		return x.Labels
	}
	return nil
}

func (x *Security_PolicyMetadata) GetCreationTimestamp() string {
	if x != nil {
		return x.CreationTimestamp
	}
	return ""
}

func (x *Security_PolicyMetadata) GetModificationTimestamp() string {
	if x != nil {
		return x.ModificationTimestamp
	}
	return ""
}

type Security_AccessPolicy struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata        *Security_PolicyMetadata                `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	AccessProtocols []*Security_AccessPolicy_AccessProtocol `protobuf:"bytes,2,rep,name=accessProtocols,proto3" json:"accessProtocols,omitempty"`
	AccessType      string                                  `protobuf:"bytes,3,opt,name=accessType,proto3" json:"accessType,omitempty"`
	Priority        int32                                   `protobuf:"varint,4,opt,name=priority,proto3" json:"priority,omitempty"`
}

func (x *Security_AccessPolicy) Reset() {
	*x = Security_AccessPolicy{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policies_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Security_AccessPolicy) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Security_AccessPolicy) ProtoMessage() {}

func (x *Security_AccessPolicy) ProtoReflect() protoreflect.Message {
	mi := &file_security_policies_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Security_AccessPolicy.ProtoReflect.Descriptor instead.
func (*Security_AccessPolicy) Descriptor() ([]byte, []int) {
	return file_security_policies_proto_rawDescGZIP(), []int{0, 1}
}

func (x *Security_AccessPolicy) GetMetadata() *Security_PolicyMetadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *Security_AccessPolicy) GetAccessProtocols() []*Security_AccessPolicy_AccessProtocol {
	if x != nil {
		return x.AccessProtocols
	}
	return nil
}

func (x *Security_AccessPolicy) GetAccessType() string {
	if x != nil {
		return x.AccessType
	}
	return ""
}

func (x *Security_AccessPolicy) GetPriority() int32 {
	if x != nil {
		return x.Priority
	}
	return 0
}

type Security_AccessPolicy_AccessProtocol struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Protocol string `protobuf:"bytes,1,opt,name=protocol,proto3" json:"protocol,omitempty"`
	Port     string `protobuf:"bytes,2,opt,name=port,proto3" json:"port,omitempty"`
}

func (x *Security_AccessPolicy_AccessProtocol) Reset() {
	*x = Security_AccessPolicy_AccessProtocol{}
	if protoimpl.UnsafeEnabled {
		mi := &file_security_policies_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Security_AccessPolicy_AccessProtocol) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Security_AccessPolicy_AccessProtocol) ProtoMessage() {}

func (x *Security_AccessPolicy_AccessProtocol) ProtoReflect() protoreflect.Message {
	mi := &file_security_policies_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Security_AccessPolicy_AccessProtocol.ProtoReflect.Descriptor instead.
func (*Security_AccessPolicy_AccessProtocol) Descriptor() ([]byte, []int) {
	return file_security_policies_proto_rawDescGZIP(), []int{0, 1, 0}
}

func (x *Security_AccessPolicy_AccessProtocol) GetProtocol() string {
	if x != nil {
		return x.Protocol
	}
	return ""
}

func (x *Security_AccessPolicy_AccessProtocol) GetPort() string {
	if x != nil {
		return x.Port
	}
	return ""
}

var File_security_policies_proto protoreflect.FileDescriptor

var file_security_policies_proto_rawDesc = []byte{
	0x0a, 0x17, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x5f, 0x70, 0x6f, 0x6c, 0x69, 0x63,
	0x69, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc6, 0x04, 0x0a, 0x08, 0x53, 0x65,
	0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x1a, 0xa3, 0x02, 0x0a, 0x0e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a,
	0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x3c, 0x0a, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x24, 0x2e, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73,
	0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x6c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x12, 0x2c, 0x0a,
	0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x34, 0x0a, 0x15, 0x6d,
	0x6f, 0x64, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73,
	0x74, 0x61, 0x6d, 0x70, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x15, 0x6d, 0x6f, 0x64, 0x69,
	0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x1a, 0x39, 0x0a, 0x0b, 0x4c, 0x61, 0x62, 0x65, 0x6c, 0x73, 0x45, 0x6e, 0x74, 0x72, 0x79,
	0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b,
	0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x1a, 0x93, 0x02, 0x0a,
	0x0c, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x34, 0x0a,
	0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x18, 0x2e, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x12, 0x4f, 0x0a, 0x0f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x53,
	0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x79, 0x2e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x63, 0x6f, 0x6c, 0x52, 0x0f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x63, 0x6f, 0x6c, 0x73, 0x12, 0x1e, 0x0a, 0x0a, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x79,
	0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x54, 0x79, 0x70, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x72, 0x69, 0x6f, 0x72, 0x69, 0x74, 0x79,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x70, 0x72, 0x69, 0x6f, 0x72, 0x69, 0x74, 0x79,
	0x1a, 0x40, 0x0a, 0x0e, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x63,
	0x6f, 0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x63, 0x6f, 0x6c, 0x12, 0x12,
	0x0a, 0x04, 0x70, 0x6f, 0x72, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x6f,
	0x72, 0x74, 0x42, 0x08, 0x5a, 0x06, 0x2e, 0x2f, 0x3b, 0x61, 0x77, 0x69, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_security_policies_proto_rawDescOnce sync.Once
	file_security_policies_proto_rawDescData = file_security_policies_proto_rawDesc
)

func file_security_policies_proto_rawDescGZIP() []byte {
	file_security_policies_proto_rawDescOnce.Do(func() {
		file_security_policies_proto_rawDescData = protoimpl.X.CompressGZIP(file_security_policies_proto_rawDescData)
	})
	return file_security_policies_proto_rawDescData
}

var file_security_policies_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_security_policies_proto_goTypes = []interface{}{
	(*Security)(nil),                // 0: Security
	(*Security_PolicyMetadata)(nil), // 1: Security.PolicyMetadata
	(*Security_AccessPolicy)(nil),   // 2: Security.AccessPolicy
	nil,                             // 3: Security.PolicyMetadata.LabelsEntry
	(*Security_AccessPolicy_AccessProtocol)(nil), // 4: Security.AccessPolicy.AccessProtocol
}
var file_security_policies_proto_depIdxs = []int32{
	3, // 0: Security.PolicyMetadata.labels:type_name -> Security.PolicyMetadata.LabelsEntry
	1, // 1: Security.AccessPolicy.metadata:type_name -> Security.PolicyMetadata
	4, // 2: Security.AccessPolicy.accessProtocols:type_name -> Security.AccessPolicy.AccessProtocol
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_security_policies_proto_init() }
func file_security_policies_proto_init() {
	if File_security_policies_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_security_policies_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Security); i {
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
		file_security_policies_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Security_PolicyMetadata); i {
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
		file_security_policies_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Security_AccessPolicy); i {
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
		file_security_policies_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Security_AccessPolicy_AccessProtocol); i {
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
			RawDescriptor: file_security_policies_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_security_policies_proto_goTypes,
		DependencyIndexes: file_security_policies_proto_depIdxs,
		MessageInfos:      file_security_policies_proto_msgTypes,
	}.Build()
	File_security_policies_proto = out.File
	file_security_policies_proto_rawDesc = nil
	file_security_policies_proto_goTypes = nil
	file_security_policies_proto_depIdxs = nil
}
