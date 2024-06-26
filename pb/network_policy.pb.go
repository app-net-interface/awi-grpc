// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v4.22.2
// source: network_policy.proto

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

type Priority int32

const (
	Priority_BUSINESS_CRITICAL Priority = 0
	Priority_MISSION_CRITICAL  Priority = 1
	Priority_ESSENTIAL         Priority = 2
	Priority_STRATEGIC         Priority = 3
	Priority_COMPLIANCE        Priority = 4
	Priority_CUSTOMER_FACING   Priority = 5
	Priority_OPERATIONAL       Priority = 6
	Priority_SUPPORT           Priority = 7
)

// Enum value maps for Priority.
var (
	Priority_name = map[int32]string{
		0: "BUSINESS_CRITICAL",
		1: "MISSION_CRITICAL",
		2: "ESSENTIAL",
		3: "STRATEGIC",
		4: "COMPLIANCE",
		5: "CUSTOMER_FACING",
		6: "OPERATIONAL",
		7: "SUPPORT",
	}
	Priority_value = map[string]int32{
		"BUSINESS_CRITICAL": 0,
		"MISSION_CRITICAL":  1,
		"ESSENTIAL":         2,
		"STRATEGIC":         3,
		"COMPLIANCE":        4,
		"CUSTOMER_FACING":   5,
		"OPERATIONAL":       6,
		"SUPPORT":           7,
	}
)

func (x Priority) Enum() *Priority {
	p := new(Priority)
	*p = x
	return p
}

func (x Priority) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (Priority) Descriptor() protoreflect.EnumDescriptor {
	return file_network_policy_proto_enumTypes[0].Descriptor()
}

func (Priority) Type() protoreflect.EnumType {
	return &file_network_policy_proto_enumTypes[0]
}

func (x Priority) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use Priority.Descriptor instead.
func (Priority) EnumDescriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{0}
}

type EnforcementRequestType int32

const (
	EnforcementRequestType_HARD EnforcementRequestType = 0
	EnforcementRequestType_SOFT EnforcementRequestType = 1
)

// Enum value maps for EnforcementRequestType.
var (
	EnforcementRequestType_name = map[int32]string{
		0: "HARD",
		1: "SOFT",
	}
	EnforcementRequestType_value = map[string]int32{
		"HARD": 0,
		"SOFT": 1,
	}
)

func (x EnforcementRequestType) Enum() *EnforcementRequestType {
	p := new(EnforcementRequestType)
	*p = x
	return p
}

func (x EnforcementRequestType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (EnforcementRequestType) Descriptor() protoreflect.EnumDescriptor {
	return file_network_policy_proto_enumTypes[1].Descriptor()
}

func (EnforcementRequestType) Type() protoreflect.EnumType {
	return &file_network_policy_proto_enumTypes[1]
}

func (x EnforcementRequestType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use EnforcementRequestType.Descriptor instead.
func (EnforcementRequestType) EnumDescriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{1}
}

type NetworkSLA struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata       *NetworkSLA_Metadata `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	TrafficProfile *TrafficProfile      `protobuf:"bytes,2,opt,name=trafficProfile,proto3" json:"trafficProfile,omitempty"`
	// Don't use enums for now as they are problematic in CRD spec build
	Priority           string              `protobuf:"bytes,3,opt,name=priority,proto3" json:"priority,omitempty"`
	EnforcementRequest *EnforcementRequest `protobuf:"bytes,4,opt,name=enforcementRequest,proto3" json:"enforcementRequest,omitempty"`
}

func (x *NetworkSLA) Reset() {
	*x = NetworkSLA{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkSLA) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkSLA) ProtoMessage() {}

func (x *NetworkSLA) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkSLA.ProtoReflect.Descriptor instead.
func (*NetworkSLA) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{0}
}

func (x *NetworkSLA) GetMetadata() *NetworkSLA_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *NetworkSLA) GetTrafficProfile() *TrafficProfile {
	if x != nil {
		return x.TrafficProfile
	}
	return nil
}

func (x *NetworkSLA) GetPriority() string {
	if x != nil {
		return x.Priority
	}
	return ""
}

func (x *NetworkSLA) GetEnforcementRequest() *EnforcementRequest {
	if x != nil {
		return x.EnforcementRequest
	}
	return nil
}

type TrafficProfile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Bandwidth float32 `protobuf:"fixed32,1,opt,name=bandwidth,proto3" json:"bandwidth,omitempty"`
	Jitter    float32 `protobuf:"fixed32,2,opt,name=jitter,proto3" json:"jitter,omitempty"`
	Latency   float32 `protobuf:"fixed32,3,opt,name=latency,proto3" json:"latency,omitempty"`
	Loss      float32 `protobuf:"fixed32,4,opt,name=loss,proto3" json:"loss,omitempty"`
}

func (x *TrafficProfile) Reset() {
	*x = TrafficProfile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TrafficProfile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TrafficProfile) ProtoMessage() {}

func (x *TrafficProfile) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TrafficProfile.ProtoReflect.Descriptor instead.
func (*TrafficProfile) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{1}
}

func (x *TrafficProfile) GetBandwidth() float32 {
	if x != nil {
		return x.Bandwidth
	}
	return 0
}

func (x *TrafficProfile) GetJitter() float32 {
	if x != nil {
		return x.Jitter
	}
	return 0
}

func (x *TrafficProfile) GetLatency() float32 {
	if x != nil {
		return x.Latency
	}
	return 0
}

func (x *TrafficProfile) GetLoss() float32 {
	if x != nil {
		return x.Loss
	}
	return 0
}

type EnforcementRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Don't use enums for now as they are problematic in CRD spec build
	Type string `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
}

func (x *EnforcementRequest) Reset() {
	*x = EnforcementRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EnforcementRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EnforcementRequest) ProtoMessage() {}

func (x *EnforcementRequest) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EnforcementRequest.ProtoReflect.Descriptor instead.
func (*EnforcementRequest) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{2}
}

func (x *EnforcementRequest) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

type Countries struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Include []string `protobuf:"bytes,1,rep,name=include,proto3" json:"include,omitempty"`
	Exclude []string `protobuf:"bytes,2,rep,name=exclude,proto3" json:"exclude,omitempty"`
}

func (x *Countries) Reset() {
	*x = Countries{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Countries) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Countries) ProtoMessage() {}

func (x *Countries) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Countries.ProtoReflect.Descriptor instead.
func (*Countries) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{3}
}

func (x *Countries) GetInclude() []string {
	if x != nil {
		return x.Include
	}
	return nil
}

func (x *Countries) GetExclude() []string {
	if x != nil {
		return x.Exclude
	}
	return nil
}

type Regions struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Countries *Countries `protobuf:"bytes,1,opt,name=countries,proto3" json:"countries,omitempty"`
}

func (x *Regions) Reset() {
	*x = Regions{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Regions) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Regions) ProtoMessage() {}

func (x *Regions) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Regions.ProtoReflect.Descriptor instead.
func (*Regions) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{4}
}

func (x *Regions) GetCountries() *Countries {
	if x != nil {
		return x.Countries
	}
	return nil
}

type NetworkPath struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata *NetworkPath_Metadata `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Regions  *Regions              `protobuf:"bytes,2,opt,name=regions,proto3" json:"regions,omitempty"`
}

func (x *NetworkPath) Reset() {
	*x = NetworkPath{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkPath) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkPath) ProtoMessage() {}

func (x *NetworkPath) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkPath.ProtoReflect.Descriptor instead.
func (*NetworkPath) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{5}
}

func (x *NetworkPath) GetMetadata() *NetworkPath_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *NetworkPath) GetRegions() *Regions {
	if x != nil {
		return x.Regions
	}
	return nil
}

type NetworkSLA_Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name                  string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description           string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	CreationTimestamp     string `protobuf:"bytes,3,opt,name=creationTimestamp,proto3" json:"creationTimestamp,omitempty"`
	ModificationTimestamp string `protobuf:"bytes,4,opt,name=modificationTimestamp,proto3" json:"modificationTimestamp,omitempty"`
}

func (x *NetworkSLA_Metadata) Reset() {
	*x = NetworkSLA_Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkSLA_Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkSLA_Metadata) ProtoMessage() {}

func (x *NetworkSLA_Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkSLA_Metadata.ProtoReflect.Descriptor instead.
func (*NetworkSLA_Metadata) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{0, 0}
}

func (x *NetworkSLA_Metadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *NetworkSLA_Metadata) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *NetworkSLA_Metadata) GetCreationTimestamp() string {
	if x != nil {
		return x.CreationTimestamp
	}
	return ""
}

func (x *NetworkSLA_Metadata) GetModificationTimestamp() string {
	if x != nil {
		return x.ModificationTimestamp
	}
	return ""
}

type NetworkPath_Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name                  string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Description           string `protobuf:"bytes,2,opt,name=description,proto3" json:"description,omitempty"`
	CreationTimestamp     string `protobuf:"bytes,4,opt,name=creationTimestamp,proto3" json:"creationTimestamp,omitempty"`
	ModificationTimestamp string `protobuf:"bytes,5,opt,name=modificationTimestamp,proto3" json:"modificationTimestamp,omitempty"`
}

func (x *NetworkPath_Metadata) Reset() {
	*x = NetworkPath_Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_network_policy_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *NetworkPath_Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*NetworkPath_Metadata) ProtoMessage() {}

func (x *NetworkPath_Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_network_policy_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use NetworkPath_Metadata.ProtoReflect.Descriptor instead.
func (*NetworkPath_Metadata) Descriptor() ([]byte, []int) {
	return file_network_policy_proto_rawDescGZIP(), []int{5, 0}
}

func (x *NetworkPath_Metadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *NetworkPath_Metadata) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *NetworkPath_Metadata) GetCreationTimestamp() string {
	if x != nil {
		return x.CreationTimestamp
	}
	return ""
}

func (x *NetworkPath_Metadata) GetModificationTimestamp() string {
	if x != nil {
		return x.ModificationTimestamp
	}
	return ""
}

var File_network_policy_proto protoreflect.FileDescriptor

var file_network_policy_proto_rawDesc = []byte{
	0x0a, 0x14, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x70, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xff, 0x02, 0x0a, 0x0a, 0x4e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x53, 0x4c, 0x41, 0x12, 0x30, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72,
	0x6b, 0x53, 0x4c, 0x41, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x37, 0x0a, 0x0e, 0x74, 0x72, 0x61, 0x66, 0x66,
	0x69, 0x63, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0f, 0x2e, 0x54, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65,
	0x52, 0x0e, 0x74, 0x72, 0x61, 0x66, 0x66, 0x69, 0x63, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65,
	0x12, 0x1a, 0x0a, 0x08, 0x70, 0x72, 0x69, 0x6f, 0x72, 0x69, 0x74, 0x79, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x70, 0x72, 0x69, 0x6f, 0x72, 0x69, 0x74, 0x79, 0x12, 0x43, 0x0a, 0x12,
	0x65, 0x6e, 0x66, 0x6f, 0x72, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x13, 0x2e, 0x45, 0x6e, 0x66, 0x6f, 0x72,
	0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52, 0x12, 0x65,
	0x6e, 0x66, 0x6f, 0x72, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0xa4, 0x01, 0x0a, 0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70,
	0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2c, 0x0a, 0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61,
	0x6d, 0x70, 0x12, 0x34, 0x0a, 0x15, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x15, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x22, 0x74, 0x0a, 0x0e, 0x54, 0x72, 0x61, 0x66,
	0x66, 0x69, 0x63, 0x50, 0x72, 0x6f, 0x66, 0x69, 0x6c, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x62, 0x61,
	0x6e, 0x64, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x02, 0x52, 0x09, 0x62,
	0x61, 0x6e, 0x64, 0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x16, 0x0a, 0x06, 0x6a, 0x69, 0x74, 0x74,
	0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x02, 0x52, 0x06, 0x6a, 0x69, 0x74, 0x74, 0x65, 0x72,
	0x12, 0x18, 0x0a, 0x07, 0x6c, 0x61, 0x74, 0x65, 0x6e, 0x63, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x02, 0x52, 0x07, 0x6c, 0x61, 0x74, 0x65, 0x6e, 0x63, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x6f,
	0x73, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x02, 0x52, 0x04, 0x6c, 0x6f, 0x73, 0x73, 0x22, 0x28,
	0x0a, 0x12, 0x45, 0x6e, 0x66, 0x6f, 0x72, 0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x22, 0x3f, 0x0a, 0x09, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x72, 0x69, 0x65, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x07, 0x69, 0x6e, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x12,
	0x18, 0x0a, 0x07, 0x65, 0x78, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x07, 0x65, 0x78, 0x63, 0x6c, 0x75, 0x64, 0x65, 0x22, 0x33, 0x0a, 0x07, 0x52, 0x65, 0x67,
	0x69, 0x6f, 0x6e, 0x73, 0x12, 0x28, 0x0a, 0x09, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x69, 0x65,
	0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72,
	0x69, 0x65, 0x73, 0x52, 0x09, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x22, 0x8b,
	0x02, 0x0a, 0x0b, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x50, 0x61, 0x74, 0x68, 0x12, 0x31,
	0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x15, 0x2e, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x50, 0x61, 0x74, 0x68, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x12, 0x22, 0x0a, 0x07, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x08, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x07, 0x72, 0x65,
	0x67, 0x69, 0x6f, 0x6e, 0x73, 0x1a, 0xa4, 0x01, 0x0a, 0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69,
	0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73,
	0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2c, 0x0a, 0x11, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x34, 0x0a, 0x15, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x15, 0x6d, 0x6f, 0x64, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2a, 0x98, 0x01, 0x0a,
	0x08, 0x50, 0x72, 0x69, 0x6f, 0x72, 0x69, 0x74, 0x79, 0x12, 0x15, 0x0a, 0x11, 0x42, 0x55, 0x53,
	0x49, 0x4e, 0x45, 0x53, 0x53, 0x5f, 0x43, 0x52, 0x49, 0x54, 0x49, 0x43, 0x41, 0x4c, 0x10, 0x00,
	0x12, 0x14, 0x0a, 0x10, 0x4d, 0x49, 0x53, 0x53, 0x49, 0x4f, 0x4e, 0x5f, 0x43, 0x52, 0x49, 0x54,
	0x49, 0x43, 0x41, 0x4c, 0x10, 0x01, 0x12, 0x0d, 0x0a, 0x09, 0x45, 0x53, 0x53, 0x45, 0x4e, 0x54,
	0x49, 0x41, 0x4c, 0x10, 0x02, 0x12, 0x0d, 0x0a, 0x09, 0x53, 0x54, 0x52, 0x41, 0x54, 0x45, 0x47,
	0x49, 0x43, 0x10, 0x03, 0x12, 0x0e, 0x0a, 0x0a, 0x43, 0x4f, 0x4d, 0x50, 0x4c, 0x49, 0x41, 0x4e,
	0x43, 0x45, 0x10, 0x04, 0x12, 0x13, 0x0a, 0x0f, 0x43, 0x55, 0x53, 0x54, 0x4f, 0x4d, 0x45, 0x52,
	0x5f, 0x46, 0x41, 0x43, 0x49, 0x4e, 0x47, 0x10, 0x05, 0x12, 0x0f, 0x0a, 0x0b, 0x4f, 0x50, 0x45,
	0x52, 0x41, 0x54, 0x49, 0x4f, 0x4e, 0x41, 0x4c, 0x10, 0x06, 0x12, 0x0b, 0x0a, 0x07, 0x53, 0x55,
	0x50, 0x50, 0x4f, 0x52, 0x54, 0x10, 0x07, 0x2a, 0x2c, 0x0a, 0x16, 0x45, 0x6e, 0x66, 0x6f, 0x72,
	0x63, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x54, 0x79, 0x70,
	0x65, 0x12, 0x08, 0x0a, 0x04, 0x48, 0x41, 0x52, 0x44, 0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x53,
	0x4f, 0x46, 0x54, 0x10, 0x01, 0x42, 0x08, 0x5a, 0x06, 0x2e, 0x2f, 0x3b, 0x61, 0x77, 0x69, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_network_policy_proto_rawDescOnce sync.Once
	file_network_policy_proto_rawDescData = file_network_policy_proto_rawDesc
)

func file_network_policy_proto_rawDescGZIP() []byte {
	file_network_policy_proto_rawDescOnce.Do(func() {
		file_network_policy_proto_rawDescData = protoimpl.X.CompressGZIP(file_network_policy_proto_rawDescData)
	})
	return file_network_policy_proto_rawDescData
}

var file_network_policy_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_network_policy_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_network_policy_proto_goTypes = []interface{}{
	(Priority)(0),                // 0: Priority
	(EnforcementRequestType)(0),  // 1: EnforcementRequestType
	(*NetworkSLA)(nil),           // 2: NetworkSLA
	(*TrafficProfile)(nil),       // 3: TrafficProfile
	(*EnforcementRequest)(nil),   // 4: EnforcementRequest
	(*Countries)(nil),            // 5: Countries
	(*Regions)(nil),              // 6: Regions
	(*NetworkPath)(nil),          // 7: NetworkPath
	(*NetworkSLA_Metadata)(nil),  // 8: NetworkSLA.Metadata
	(*NetworkPath_Metadata)(nil), // 9: NetworkPath.Metadata
}
var file_network_policy_proto_depIdxs = []int32{
	8, // 0: NetworkSLA.metadata:type_name -> NetworkSLA.Metadata
	3, // 1: NetworkSLA.trafficProfile:type_name -> TrafficProfile
	4, // 2: NetworkSLA.enforcementRequest:type_name -> EnforcementRequest
	5, // 3: Regions.countries:type_name -> Countries
	9, // 4: NetworkPath.metadata:type_name -> NetworkPath.Metadata
	6, // 5: NetworkPath.regions:type_name -> Regions
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_network_policy_proto_init() }
func file_network_policy_proto_init() {
	if File_network_policy_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_network_policy_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkSLA); i {
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
		file_network_policy_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TrafficProfile); i {
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
		file_network_policy_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EnforcementRequest); i {
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
		file_network_policy_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Countries); i {
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
		file_network_policy_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Regions); i {
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
		file_network_policy_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkPath); i {
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
		file_network_policy_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkSLA_Metadata); i {
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
		file_network_policy_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*NetworkPath_Metadata); i {
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
			RawDescriptor: file_network_policy_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_network_policy_proto_goTypes,
		DependencyIndexes: file_network_policy_proto_depIdxs,
		EnumInfos:         file_network_policy_proto_enumTypes,
		MessageInfos:      file_network_policy_proto_msgTypes,
	}.Build()
	File_network_policy_proto = out.File
	file_network_policy_proto_rawDesc = nil
	file_network_policy_proto_goTypes = nil
	file_network_policy_proto_depIdxs = nil
}
