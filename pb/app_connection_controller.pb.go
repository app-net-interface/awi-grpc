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
// source: app_connection_controller.proto

package awi

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_app_connection_controller_proto protoreflect.FileDescriptor

var file_app_connection_controller_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x61, 0x70, 0x70, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x14, 0x61, 0x70, 0x70, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xa6, 0x08, 0x0a, 0x17, 0x41, 0x70, 0x70, 0x43,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c,
	0x6c, 0x65, 0x72, 0x12, 0x37, 0x0a, 0x0b, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x41, 0x70,
	0x70, 0x73, 0x12, 0x0e, 0x2e, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x1a, 0x16, 0x2e, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x47, 0x0a, 0x0e,
	0x44, 0x69, 0x73, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x41, 0x70, 0x70, 0x73, 0x12, 0x18,
	0x2e, 0x41, 0x70, 0x70, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x41, 0x70, 0x70, 0x44, 0x69,
	0x73, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x49, 0x0a, 0x10, 0x47, 0x65, 0x74, 0x41, 0x70, 0x70, 0x43,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x18, 0x2e, 0x47, 0x65, 0x74, 0x41,
	0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x19, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x4e, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x65,
	0x64, 0x41, 0x70, 0x70, 0x73, 0x12, 0x1a, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x70, 0x70, 0x43,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x1b, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x58, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1e, 0x2e, 0x47, 0x65, 0x74,
	0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x41, 0x70, 0x70,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x64, 0x0a, 0x1a, 0x47, 0x65,
	0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74,
	0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x12, 0x22, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x70,
	0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74, 0x69,
	0x73, 0x74, 0x69, 0x63, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x41,
	0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x74, 0x61, 0x74,
	0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x12, 0x58, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73, 0x12, 0x1e, 0x2e, 0x47, 0x65, 0x74,
	0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x76, 0x65,
	0x6e, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x41, 0x70, 0x70,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x45, 0x0a, 0x13, 0x47, 0x65,
	0x74, 0x4d, 0x61, 0x74, 0x63, 0x68, 0x65, 0x64, 0x52, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x73, 0x12, 0x0e, 0x2e, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x1a, 0x1c, 0x2e, 0x47, 0x65, 0x74, 0x4d, 0x61, 0x74, 0x63, 0x68, 0x65, 0x64, 0x52, 0x65,
	0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x12, 0x64, 0x0a, 0x19, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x70, 0x70, 0x43, 0x6f,
	0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x12, 0x21,
	0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x22, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5b, 0x0a, 0x16, 0x47, 0x65, 0x74, 0x41, 0x70,
	0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x12, 0x1e, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x1f, 0x2e, 0x47, 0x65, 0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x64, 0x0a, 0x19, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x70,
	0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x79, 0x12, 0x21, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x41, 0x70, 0x70,
	0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63, 0x79,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x64, 0x0a, 0x19, 0x4c, 0x69,
	0x73, 0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50,
	0x6f, 0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x12, 0x21, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x41, 0x70,
	0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f, 0x6c, 0x69, 0x63,
	0x69, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x4c, 0x69, 0x73,
	0x74, 0x41, 0x70, 0x70, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x50, 0x6f,
	0x6c, 0x69, 0x63, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x42, 0x08, 0x5a, 0x06, 0x2e, 0x2f, 0x3b, 0x61, 0x77, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var file_app_connection_controller_proto_goTypes = []interface{}{
	(*AppConnection)(nil),                     // 0: AppConnection
	(*AppDisconnectionRequest)(nil),           // 1: AppDisconnectionRequest
	(*GetAppConnectionRequest)(nil),           // 2: GetAppConnectionRequest
	(*ListAppConnectionsRequest)(nil),         // 3: ListAppConnectionsRequest
	(*GetAppConnectionStatusRequest)(nil),     // 4: GetAppConnectionStatusRequest
	(*GetAppConnectionStatisticsRequest)(nil), // 5: GetAppConnectionStatisticsRequest
	(*GetAppConnectionEventsRequest)(nil),     // 6: GetAppConnectionEventsRequest
	(*CreateAppConnectionPolicyRequest)(nil),  // 7: CreateAppConnectionPolicyRequest
	(*GetAppConnectionPolicyRequest)(nil),     // 8: GetAppConnectionPolicyRequest
	(*DeleteAppConnectionPolicyRequest)(nil),  // 9: DeleteAppConnectionPolicyRequest
	(*ListAppConnectionPoliciesRequest)(nil),  // 10: ListAppConnectionPoliciesRequest
	(*AppConnectionResponse)(nil),             // 11: AppConnectionResponse
	(*AppDisconnectionResponse)(nil),          // 12: AppDisconnectionResponse
	(*GetAppConnectionResponse)(nil),          // 13: GetAppConnectionResponse
	(*ListAppConnectionsResponse)(nil),        // 14: ListAppConnectionsResponse
	(*AppConnectionStatusResponse)(nil),       // 15: AppConnectionStatusResponse
	(*AppConnectionStatisticsResponse)(nil),   // 16: AppConnectionStatisticsResponse
	(*AppConnectionEventsResponse)(nil),       // 17: AppConnectionEventsResponse
	(*GetMatchedResourcesResponse)(nil),       // 18: GetMatchedResourcesResponse
	(*CreateAppConnectionPolicyResponse)(nil), // 19: CreateAppConnectionPolicyResponse
	(*GetAppConnectionPolicyResponse)(nil),    // 20: GetAppConnectionPolicyResponse
	(*DeleteAppConnectionPolicyResponse)(nil), // 21: DeleteAppConnectionPolicyResponse
	(*ListAppConnectionPoliciesResponse)(nil), // 22: ListAppConnectionPoliciesResponse
}
var file_app_connection_controller_proto_depIdxs = []int32{
	0,  // 0: AppConnectionController.ConnectApps:input_type -> AppConnection
	1,  // 1: AppConnectionController.DisconnectApps:input_type -> AppDisconnectionRequest
	2,  // 2: AppConnectionController.GetAppConnection:input_type -> GetAppConnectionRequest
	3,  // 3: AppConnectionController.ListConnectedApps:input_type -> ListAppConnectionsRequest
	4,  // 4: AppConnectionController.GetAppConnectionStatus:input_type -> GetAppConnectionStatusRequest
	5,  // 5: AppConnectionController.GetAppConnectionStatistics:input_type -> GetAppConnectionStatisticsRequest
	6,  // 6: AppConnectionController.GetAppConnectionEvents:input_type -> GetAppConnectionEventsRequest
	0,  // 7: AppConnectionController.GetMatchedResources:input_type -> AppConnection
	7,  // 8: AppConnectionController.CreateAppConnectionPolicy:input_type -> CreateAppConnectionPolicyRequest
	8,  // 9: AppConnectionController.GetAppConnectionPolicy:input_type -> GetAppConnectionPolicyRequest
	9,  // 10: AppConnectionController.DeleteAppConnectionPolicy:input_type -> DeleteAppConnectionPolicyRequest
	10, // 11: AppConnectionController.ListAppConnectionPolicies:input_type -> ListAppConnectionPoliciesRequest
	11, // 12: AppConnectionController.ConnectApps:output_type -> AppConnectionResponse
	12, // 13: AppConnectionController.DisconnectApps:output_type -> AppDisconnectionResponse
	13, // 14: AppConnectionController.GetAppConnection:output_type -> GetAppConnectionResponse
	14, // 15: AppConnectionController.ListConnectedApps:output_type -> ListAppConnectionsResponse
	15, // 16: AppConnectionController.GetAppConnectionStatus:output_type -> AppConnectionStatusResponse
	16, // 17: AppConnectionController.GetAppConnectionStatistics:output_type -> AppConnectionStatisticsResponse
	17, // 18: AppConnectionController.GetAppConnectionEvents:output_type -> AppConnectionEventsResponse
	18, // 19: AppConnectionController.GetMatchedResources:output_type -> GetMatchedResourcesResponse
	19, // 20: AppConnectionController.CreateAppConnectionPolicy:output_type -> CreateAppConnectionPolicyResponse
	20, // 21: AppConnectionController.GetAppConnectionPolicy:output_type -> GetAppConnectionPolicyResponse
	21, // 22: AppConnectionController.DeleteAppConnectionPolicy:output_type -> DeleteAppConnectionPolicyResponse
	22, // 23: AppConnectionController.ListAppConnectionPolicies:output_type -> ListAppConnectionPoliciesResponse
	12, // [12:24] is the sub-list for method output_type
	0,  // [0:12] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_app_connection_controller_proto_init() }
func file_app_connection_controller_proto_init() {
	if File_app_connection_controller_proto != nil {
		return
	}
	file_app_connection_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_app_connection_controller_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_app_connection_controller_proto_goTypes,
		DependencyIndexes: file_app_connection_controller_proto_depIdxs,
	}.Build()
	File_app_connection_controller_proto = out.File
	file_app_connection_controller_proto_rawDesc = nil
	file_app_connection_controller_proto_goTypes = nil
	file_app_connection_controller_proto_depIdxs = nil
}
