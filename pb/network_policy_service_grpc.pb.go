// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.22.2
// source: network_policy_service.proto

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

// NetworkSLAServiceClient is the client API for NetworkSLAService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type NetworkSLAServiceClient interface {
	CreateNetworkSLA(ctx context.Context, in *NetworkSLA, opts ...grpc.CallOption) (*NetworkSLACreateResponse, error)
	DeleteNetworkSLA(ctx context.Context, in *NetworkSLADeleteRequest, opts ...grpc.CallOption) (*NetworkSLADeleteResponse, error)
	ListNetworkSLAs(ctx context.Context, in *NetworkSLAListReqest, opts ...grpc.CallOption) (*NetworkSLAListResponse, error)
}

type networkSLAServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewNetworkSLAServiceClient(cc grpc.ClientConnInterface) NetworkSLAServiceClient {
	return &networkSLAServiceClient{cc}
}

func (c *networkSLAServiceClient) CreateNetworkSLA(ctx context.Context, in *NetworkSLA, opts ...grpc.CallOption) (*NetworkSLACreateResponse, error) {
	out := new(NetworkSLACreateResponse)
	err := c.cc.Invoke(ctx, "/NetworkSLAService/CreateNetworkSLA", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *networkSLAServiceClient) DeleteNetworkSLA(ctx context.Context, in *NetworkSLADeleteRequest, opts ...grpc.CallOption) (*NetworkSLADeleteResponse, error) {
	out := new(NetworkSLADeleteResponse)
	err := c.cc.Invoke(ctx, "/NetworkSLAService/DeleteNetworkSLA", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *networkSLAServiceClient) ListNetworkSLAs(ctx context.Context, in *NetworkSLAListReqest, opts ...grpc.CallOption) (*NetworkSLAListResponse, error) {
	out := new(NetworkSLAListResponse)
	err := c.cc.Invoke(ctx, "/NetworkSLAService/ListNetworkSLAs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// NetworkSLAServiceServer is the server API for NetworkSLAService service.
// All implementations must embed UnimplementedNetworkSLAServiceServer
// for forward compatibility
type NetworkSLAServiceServer interface {
	CreateNetworkSLA(context.Context, *NetworkSLA) (*NetworkSLACreateResponse, error)
	DeleteNetworkSLA(context.Context, *NetworkSLADeleteRequest) (*NetworkSLADeleteResponse, error)
	ListNetworkSLAs(context.Context, *NetworkSLAListReqest) (*NetworkSLAListResponse, error)
	mustEmbedUnimplementedNetworkSLAServiceServer()
}

// UnimplementedNetworkSLAServiceServer must be embedded to have forward compatible implementations.
type UnimplementedNetworkSLAServiceServer struct {
}

func (UnimplementedNetworkSLAServiceServer) CreateNetworkSLA(context.Context, *NetworkSLA) (*NetworkSLACreateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateNetworkSLA not implemented")
}
func (UnimplementedNetworkSLAServiceServer) DeleteNetworkSLA(context.Context, *NetworkSLADeleteRequest) (*NetworkSLADeleteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteNetworkSLA not implemented")
}
func (UnimplementedNetworkSLAServiceServer) ListNetworkSLAs(context.Context, *NetworkSLAListReqest) (*NetworkSLAListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListNetworkSLAs not implemented")
}
func (UnimplementedNetworkSLAServiceServer) mustEmbedUnimplementedNetworkSLAServiceServer() {}

// UnsafeNetworkSLAServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to NetworkSLAServiceServer will
// result in compilation errors.
type UnsafeNetworkSLAServiceServer interface {
	mustEmbedUnimplementedNetworkSLAServiceServer()
}

func RegisterNetworkSLAServiceServer(s grpc.ServiceRegistrar, srv NetworkSLAServiceServer) {
	s.RegisterService(&NetworkSLAService_ServiceDesc, srv)
}

func _NetworkSLAService_CreateNetworkSLA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NetworkSLA)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NetworkSLAServiceServer).CreateNetworkSLA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/NetworkSLAService/CreateNetworkSLA",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NetworkSLAServiceServer).CreateNetworkSLA(ctx, req.(*NetworkSLA))
	}
	return interceptor(ctx, in, info, handler)
}

func _NetworkSLAService_DeleteNetworkSLA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NetworkSLADeleteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NetworkSLAServiceServer).DeleteNetworkSLA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/NetworkSLAService/DeleteNetworkSLA",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NetworkSLAServiceServer).DeleteNetworkSLA(ctx, req.(*NetworkSLADeleteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _NetworkSLAService_ListNetworkSLAs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NetworkSLAListReqest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(NetworkSLAServiceServer).ListNetworkSLAs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/NetworkSLAService/ListNetworkSLAs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(NetworkSLAServiceServer).ListNetworkSLAs(ctx, req.(*NetworkSLAListReqest))
	}
	return interceptor(ctx, in, info, handler)
}

// NetworkSLAService_ServiceDesc is the grpc.ServiceDesc for NetworkSLAService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var NetworkSLAService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "NetworkSLAService",
	HandlerType: (*NetworkSLAServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateNetworkSLA",
			Handler:    _NetworkSLAService_CreateNetworkSLA_Handler,
		},
		{
			MethodName: "DeleteNetworkSLA",
			Handler:    _NetworkSLAService_DeleteNetworkSLA_Handler,
		},
		{
			MethodName: "ListNetworkSLAs",
			Handler:    _NetworkSLAService_ListNetworkSLAs_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "network_policy_service.proto",
}
