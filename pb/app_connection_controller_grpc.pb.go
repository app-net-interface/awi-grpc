// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.22.2
// source: app_connection_controller.proto

package awi

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// AppConnectionControllerClient is the client API for AppConnectionController service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AppConnectionControllerClient interface {
	ConnectApps(ctx context.Context, in *AppConnection, opts ...grpc.CallOption) (*AppConnectionResponse, error)
	DisconnectApps(ctx context.Context, in *AppDisconnectionRequest, opts ...grpc.CallOption) (*AppDisconnectionResponse, error)
	GetAppConnection(ctx context.Context, in *GetAppConnectionRequest, opts ...grpc.CallOption) (*GetAppConnectionResponse, error)
	//
	//List all connections that can connect different workloads.
	ListConnectedApps(ctx context.Context, in *ListAppConnectionsRequest, opts ...grpc.CallOption) (*ListAppConnectionsResponse, error)
	GetAppConnectionStatus(ctx context.Context, in *GetAppConnectionStatusRequest, opts ...grpc.CallOption) (*AppConnectionStatusResponse, error)
	GetAppConnectionStatistics(ctx context.Context, in *GetAppConnectionStatisticsRequest, opts ...grpc.CallOption) (*AppConnectionStatisticsResponse, error)
	GetAppConnectionEvents(ctx context.Context, in *GetAppConnectionEventsRequest, opts ...grpc.CallOption) (*AppConnectionEventsResponse, error)
	GetMatchedResources(ctx context.Context, in *AppConnection, opts ...grpc.CallOption) (*GetMatchedResourcesResponse, error)
	CreateAppConnectionPolicy(ctx context.Context, in *CreateAppConnectionPolicyRequest, opts ...grpc.CallOption) (*CreateAppConnectionPolicyResponse, error)
	GetAppConnectionPolicy(ctx context.Context, in *GetAppConnectionPolicyRequest, opts ...grpc.CallOption) (*GetAppConnectionPolicyResponse, error)
	DeleteAppConnectionPolicy(ctx context.Context, in *DeleteAppConnectionPolicyRequest, opts ...grpc.CallOption) (*DeleteAppConnectionPolicyResponse, error)
	ListAppConnectionPolicies(ctx context.Context, in *ListAppConnectionPoliciesRequest, opts ...grpc.CallOption) (*ListAppConnectionPoliciesResponse, error)
}

type appConnectionControllerClient struct {
	cc grpc.ClientConnInterface
}

func NewAppConnectionControllerClient(cc grpc.ClientConnInterface) AppConnectionControllerClient {
	return &appConnectionControllerClient{cc}
}

func (c *appConnectionControllerClient) ConnectApps(ctx context.Context, in *AppConnection, opts ...grpc.CallOption) (*AppConnectionResponse, error) {
	out := new(AppConnectionResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/ConnectApps", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) DisconnectApps(ctx context.Context, in *AppDisconnectionRequest, opts ...grpc.CallOption) (*AppDisconnectionResponse, error) {
	out := new(AppDisconnectionResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/DisconnectApps", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) GetAppConnection(ctx context.Context, in *GetAppConnectionRequest, opts ...grpc.CallOption) (*GetAppConnectionResponse, error) {
	out := new(GetAppConnectionResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/GetAppConnection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) ListConnectedApps(ctx context.Context, in *ListAppConnectionsRequest, opts ...grpc.CallOption) (*ListAppConnectionsResponse, error) {
	out := new(ListAppConnectionsResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/ListConnectedApps", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) GetAppConnectionStatus(ctx context.Context, in *GetAppConnectionStatusRequest, opts ...grpc.CallOption) (*AppConnectionStatusResponse, error) {
	out := new(AppConnectionStatusResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/GetAppConnectionStatus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) GetAppConnectionStatistics(ctx context.Context, in *GetAppConnectionStatisticsRequest, opts ...grpc.CallOption) (*AppConnectionStatisticsResponse, error) {
	out := new(AppConnectionStatisticsResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/GetAppConnectionStatistics", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) GetAppConnectionEvents(ctx context.Context, in *GetAppConnectionEventsRequest, opts ...grpc.CallOption) (*AppConnectionEventsResponse, error) {
	out := new(AppConnectionEventsResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/GetAppConnectionEvents", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) GetMatchedResources(ctx context.Context, in *AppConnection, opts ...grpc.CallOption) (*GetMatchedResourcesResponse, error) {
	out := new(GetMatchedResourcesResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/GetMatchedResources", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) CreateAppConnectionPolicy(ctx context.Context, in *CreateAppConnectionPolicyRequest, opts ...grpc.CallOption) (*CreateAppConnectionPolicyResponse, error) {
	out := new(CreateAppConnectionPolicyResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/CreateAppConnectionPolicy", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) GetAppConnectionPolicy(ctx context.Context, in *GetAppConnectionPolicyRequest, opts ...grpc.CallOption) (*GetAppConnectionPolicyResponse, error) {
	out := new(GetAppConnectionPolicyResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/GetAppConnectionPolicy", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) DeleteAppConnectionPolicy(ctx context.Context, in *DeleteAppConnectionPolicyRequest, opts ...grpc.CallOption) (*DeleteAppConnectionPolicyResponse, error) {
	out := new(DeleteAppConnectionPolicyResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/DeleteAppConnectionPolicy", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *appConnectionControllerClient) ListAppConnectionPolicies(ctx context.Context, in *ListAppConnectionPoliciesRequest, opts ...grpc.CallOption) (*ListAppConnectionPoliciesResponse, error) {
	out := new(ListAppConnectionPoliciesResponse)
	err := c.cc.Invoke(ctx, "/AppConnectionController/ListAppConnectionPolicies", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AppConnectionControllerServer is the server API for AppConnectionController service.
// All implementations must embed UnimplementedAppConnectionControllerServer
// for forward compatibility
type AppConnectionControllerServer interface {
	ConnectApps(context.Context, *AppConnection) (*AppConnectionResponse, error)
	DisconnectApps(context.Context, *AppDisconnectionRequest) (*AppDisconnectionResponse, error)
	GetAppConnection(context.Context, *GetAppConnectionRequest) (*GetAppConnectionResponse, error)
	//
	//List all connections that can connect different workloads.
	ListConnectedApps(context.Context, *ListAppConnectionsRequest) (*ListAppConnectionsResponse, error)
	GetAppConnectionStatus(context.Context, *GetAppConnectionStatusRequest) (*AppConnectionStatusResponse, error)
	GetAppConnectionStatistics(context.Context, *GetAppConnectionStatisticsRequest) (*AppConnectionStatisticsResponse, error)
	GetAppConnectionEvents(context.Context, *GetAppConnectionEventsRequest) (*AppConnectionEventsResponse, error)
	GetMatchedResources(context.Context, *AppConnection) (*GetMatchedResourcesResponse, error)
	CreateAppConnectionPolicy(context.Context, *CreateAppConnectionPolicyRequest) (*CreateAppConnectionPolicyResponse, error)
	GetAppConnectionPolicy(context.Context, *GetAppConnectionPolicyRequest) (*GetAppConnectionPolicyResponse, error)
	DeleteAppConnectionPolicy(context.Context, *DeleteAppConnectionPolicyRequest) (*DeleteAppConnectionPolicyResponse, error)
	ListAppConnectionPolicies(context.Context, *ListAppConnectionPoliciesRequest) (*ListAppConnectionPoliciesResponse, error)
	mustEmbedUnimplementedAppConnectionControllerServer()
}

// UnimplementedAppConnectionControllerServer must be embedded to have forward compatible implementations.
type UnimplementedAppConnectionControllerServer struct {
}

func (UnimplementedAppConnectionControllerServer) ConnectApps(context.Context, *AppConnection) (*AppConnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ConnectApps not implemented")
}
func (UnimplementedAppConnectionControllerServer) DisconnectApps(context.Context, *AppDisconnectionRequest) (*AppDisconnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DisconnectApps not implemented")
}
func (UnimplementedAppConnectionControllerServer) GetAppConnection(context.Context, *GetAppConnectionRequest) (*GetAppConnectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAppConnection not implemented")
}
func (UnimplementedAppConnectionControllerServer) ListConnectedApps(context.Context, *ListAppConnectionsRequest) (*ListAppConnectionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListConnectedApps not implemented")
}
func (UnimplementedAppConnectionControllerServer) GetAppConnectionStatus(context.Context, *GetAppConnectionStatusRequest) (*AppConnectionStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAppConnectionStatus not implemented")
}
func (UnimplementedAppConnectionControllerServer) GetAppConnectionStatistics(context.Context, *GetAppConnectionStatisticsRequest) (*AppConnectionStatisticsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAppConnectionStatistics not implemented")
}
func (UnimplementedAppConnectionControllerServer) GetAppConnectionEvents(context.Context, *GetAppConnectionEventsRequest) (*AppConnectionEventsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAppConnectionEvents not implemented")
}
func (UnimplementedAppConnectionControllerServer) GetMatchedResources(context.Context, *AppConnection) (*GetMatchedResourcesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMatchedResources not implemented")
}
func (UnimplementedAppConnectionControllerServer) CreateAppConnectionPolicy(context.Context, *CreateAppConnectionPolicyRequest) (*CreateAppConnectionPolicyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAppConnectionPolicy not implemented")
}
func (UnimplementedAppConnectionControllerServer) GetAppConnectionPolicy(context.Context, *GetAppConnectionPolicyRequest) (*GetAppConnectionPolicyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAppConnectionPolicy not implemented")
}
func (UnimplementedAppConnectionControllerServer) DeleteAppConnectionPolicy(context.Context, *DeleteAppConnectionPolicyRequest) (*DeleteAppConnectionPolicyResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAppConnectionPolicy not implemented")
}
func (UnimplementedAppConnectionControllerServer) ListAppConnectionPolicies(context.Context, *ListAppConnectionPoliciesRequest) (*ListAppConnectionPoliciesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAppConnectionPolicies not implemented")
}
func (UnimplementedAppConnectionControllerServer) mustEmbedUnimplementedAppConnectionControllerServer() {
}

// UnsafeAppConnectionControllerServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AppConnectionControllerServer will
// result in compilation errors.
type UnsafeAppConnectionControllerServer interface {
	mustEmbedUnimplementedAppConnectionControllerServer()
}

func RegisterAppConnectionControllerServer(s grpc.ServiceRegistrar, srv AppConnectionControllerServer) {
	s.RegisterService(&AppConnectionController_ServiceDesc, srv)
}

func _AppConnectionController_ConnectApps_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppConnection)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).ConnectApps(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/ConnectApps",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).ConnectApps(ctx, req.(*AppConnection))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_DisconnectApps_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppDisconnectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).DisconnectApps(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/DisconnectApps",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).DisconnectApps(ctx, req.(*AppDisconnectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_GetAppConnection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAppConnectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).GetAppConnection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/GetAppConnection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).GetAppConnection(ctx, req.(*GetAppConnectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_ListConnectedApps_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAppConnectionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).ListConnectedApps(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/ListConnectedApps",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).ListConnectedApps(ctx, req.(*ListAppConnectionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_GetAppConnectionStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAppConnectionStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).GetAppConnectionStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/GetAppConnectionStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).GetAppConnectionStatus(ctx, req.(*GetAppConnectionStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_GetAppConnectionStatistics_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAppConnectionStatisticsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).GetAppConnectionStatistics(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/GetAppConnectionStatistics",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).GetAppConnectionStatistics(ctx, req.(*GetAppConnectionStatisticsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_GetAppConnectionEvents_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAppConnectionEventsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).GetAppConnectionEvents(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/GetAppConnectionEvents",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).GetAppConnectionEvents(ctx, req.(*GetAppConnectionEventsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_GetMatchedResources_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AppConnection)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).GetMatchedResources(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/GetMatchedResources",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).GetMatchedResources(ctx, req.(*AppConnection))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_CreateAppConnectionPolicy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateAppConnectionPolicyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).CreateAppConnectionPolicy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/CreateAppConnectionPolicy",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).CreateAppConnectionPolicy(ctx, req.(*CreateAppConnectionPolicyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_GetAppConnectionPolicy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAppConnectionPolicyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).GetAppConnectionPolicy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/GetAppConnectionPolicy",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).GetAppConnectionPolicy(ctx, req.(*GetAppConnectionPolicyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_DeleteAppConnectionPolicy_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAppConnectionPolicyRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).DeleteAppConnectionPolicy(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/DeleteAppConnectionPolicy",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).DeleteAppConnectionPolicy(ctx, req.(*DeleteAppConnectionPolicyRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AppConnectionController_ListAppConnectionPolicies_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAppConnectionPoliciesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AppConnectionControllerServer).ListAppConnectionPolicies(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/AppConnectionController/ListAppConnectionPolicies",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AppConnectionControllerServer).ListAppConnectionPolicies(ctx, req.(*ListAppConnectionPoliciesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AppConnectionController_ServiceDesc is the grpc.ServiceDesc for AppConnectionController service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AppConnectionController_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "AppConnectionController",
	HandlerType: (*AppConnectionControllerServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ConnectApps",
			Handler:    _AppConnectionController_ConnectApps_Handler,
		},
		{
			MethodName: "DisconnectApps",
			Handler:    _AppConnectionController_DisconnectApps_Handler,
		},
		{
			MethodName: "GetAppConnection",
			Handler:    _AppConnectionController_GetAppConnection_Handler,
		},
		{
			MethodName: "ListConnectedApps",
			Handler:    _AppConnectionController_ListConnectedApps_Handler,
		},
		{
			MethodName: "GetAppConnectionStatus",
			Handler:    _AppConnectionController_GetAppConnectionStatus_Handler,
		},
		{
			MethodName: "GetAppConnectionStatistics",
			Handler:    _AppConnectionController_GetAppConnectionStatistics_Handler,
		},
		{
			MethodName: "GetAppConnectionEvents",
			Handler:    _AppConnectionController_GetAppConnectionEvents_Handler,
		},
		{
			MethodName: "GetMatchedResources",
			Handler:    _AppConnectionController_GetMatchedResources_Handler,
		},
		{
			MethodName: "CreateAppConnectionPolicy",
			Handler:    _AppConnectionController_CreateAppConnectionPolicy_Handler,
		},
		{
			MethodName: "GetAppConnectionPolicy",
			Handler:    _AppConnectionController_GetAppConnectionPolicy_Handler,
		},
		{
			MethodName: "DeleteAppConnectionPolicy",
			Handler:    _AppConnectionController_DeleteAppConnectionPolicy_Handler,
		},
		{
			MethodName: "ListAppConnectionPolicies",
			Handler:    _AppConnectionController_ListAppConnectionPolicies_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "app_connection_controller.proto",
}
