// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.22.2
// source: cloud_request.proto

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

// CloudClient is the client API for Cloud service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CloudClient interface {
	ListInstances(ctx context.Context, in *ListInstancesRequest, opts ...grpc.CallOption) (*ListInstancesResponse, error)
	ListSubnets(ctx context.Context, in *ListSubnetRequest, opts ...grpc.CallOption) (*ListSubnetResponse, error)
	ListSites(ctx context.Context, in *ListSiteRequest, opts ...grpc.CallOption) (*ListSiteResponse, error)
	ListVPCs(ctx context.Context, in *ListVPCRequest, opts ...grpc.CallOption) (*ListVPCResponse, error)
	ListVPCTags(ctx context.Context, in *ListVPCTagRequest, opts ...grpc.CallOption) (*ListVPCResponse, error)
	ListVPNs(ctx context.Context, in *ListVPNRequest, opts ...grpc.CallOption) (*ListVPNResponse, error)
}

type cloudClient struct {
	cc grpc.ClientConnInterface
}

func NewCloudClient(cc grpc.ClientConnInterface) CloudClient {
	return &cloudClient{cc}
}

func (c *cloudClient) ListInstances(ctx context.Context, in *ListInstancesRequest, opts ...grpc.CallOption) (*ListInstancesResponse, error) {
	out := new(ListInstancesResponse)
	err := c.cc.Invoke(ctx, "/Cloud/ListInstances", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudClient) ListSubnets(ctx context.Context, in *ListSubnetRequest, opts ...grpc.CallOption) (*ListSubnetResponse, error) {
	out := new(ListSubnetResponse)
	err := c.cc.Invoke(ctx, "/Cloud/ListSubnets", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudClient) ListSites(ctx context.Context, in *ListSiteRequest, opts ...grpc.CallOption) (*ListSiteResponse, error) {
	out := new(ListSiteResponse)
	err := c.cc.Invoke(ctx, "/Cloud/ListSites", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudClient) ListVPCs(ctx context.Context, in *ListVPCRequest, opts ...grpc.CallOption) (*ListVPCResponse, error) {
	out := new(ListVPCResponse)
	err := c.cc.Invoke(ctx, "/Cloud/ListVPCs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudClient) ListVPCTags(ctx context.Context, in *ListVPCTagRequest, opts ...grpc.CallOption) (*ListVPCResponse, error) {
	out := new(ListVPCResponse)
	err := c.cc.Invoke(ctx, "/Cloud/ListVPCTags", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudClient) ListVPNs(ctx context.Context, in *ListVPNRequest, opts ...grpc.CallOption) (*ListVPNResponse, error) {
	out := new(ListVPNResponse)
	err := c.cc.Invoke(ctx, "/Cloud/ListVPNs", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CloudServer is the server API for Cloud service.
// All implementations must embed UnimplementedCloudServer
// for forward compatibility
type CloudServer interface {
	ListInstances(context.Context, *ListInstancesRequest) (*ListInstancesResponse, error)
	ListSubnets(context.Context, *ListSubnetRequest) (*ListSubnetResponse, error)
	ListSites(context.Context, *ListSiteRequest) (*ListSiteResponse, error)
	ListVPCs(context.Context, *ListVPCRequest) (*ListVPCResponse, error)
	ListVPCTags(context.Context, *ListVPCTagRequest) (*ListVPCResponse, error)
	ListVPNs(context.Context, *ListVPNRequest) (*ListVPNResponse, error)
	mustEmbedUnimplementedCloudServer()
}

// UnimplementedCloudServer must be embedded to have forward compatible implementations.
type UnimplementedCloudServer struct {
}

func (UnimplementedCloudServer) ListInstances(context.Context, *ListInstancesRequest) (*ListInstancesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListInstances not implemented")
}
func (UnimplementedCloudServer) ListSubnets(context.Context, *ListSubnetRequest) (*ListSubnetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSubnets not implemented")
}
func (UnimplementedCloudServer) ListSites(context.Context, *ListSiteRequest) (*ListSiteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSites not implemented")
}
func (UnimplementedCloudServer) ListVPCs(context.Context, *ListVPCRequest) (*ListVPCResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListVPCs not implemented")
}
func (UnimplementedCloudServer) ListVPCTags(context.Context, *ListVPCTagRequest) (*ListVPCResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListVPCTags not implemented")
}
func (UnimplementedCloudServer) ListVPNs(context.Context, *ListVPNRequest) (*ListVPNResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListVPNs not implemented")
}
func (UnimplementedCloudServer) mustEmbedUnimplementedCloudServer() {}

// UnsafeCloudServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CloudServer will
// result in compilation errors.
type UnsafeCloudServer interface {
	mustEmbedUnimplementedCloudServer()
}

func RegisterCloudServer(s grpc.ServiceRegistrar, srv CloudServer) {
	s.RegisterService(&Cloud_ServiceDesc, srv)
}

func _Cloud_ListInstances_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListInstancesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudServer).ListInstances(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud/ListInstances",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudServer).ListInstances(ctx, req.(*ListInstancesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Cloud_ListSubnets_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSubnetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudServer).ListSubnets(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud/ListSubnets",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudServer).ListSubnets(ctx, req.(*ListSubnetRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Cloud_ListSites_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSiteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudServer).ListSites(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud/ListSites",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudServer).ListSites(ctx, req.(*ListSiteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Cloud_ListVPCs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListVPCRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudServer).ListVPCs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud/ListVPCs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudServer).ListVPCs(ctx, req.(*ListVPCRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Cloud_ListVPCTags_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListVPCTagRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudServer).ListVPCTags(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud/ListVPCTags",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudServer).ListVPCTags(ctx, req.(*ListVPCTagRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Cloud_ListVPNs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListVPNRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudServer).ListVPNs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/Cloud/ListVPNs",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudServer).ListVPNs(ctx, req.(*ListVPNRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Cloud_ServiceDesc is the grpc.ServiceDesc for Cloud service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Cloud_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "Cloud",
	HandlerType: (*CloudServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListInstances",
			Handler:    _Cloud_ListInstances_Handler,
		},
		{
			MethodName: "ListSubnets",
			Handler:    _Cloud_ListSubnets_Handler,
		},
		{
			MethodName: "ListSites",
			Handler:    _Cloud_ListSites_Handler,
		},
		{
			MethodName: "ListVPCs",
			Handler:    _Cloud_ListVPCs_Handler,
		},
		{
			MethodName: "ListVPCTags",
			Handler:    _Cloud_ListVPCTags_Handler,
		},
		{
			MethodName: "ListVPNs",
			Handler:    _Cloud_ListVPNs_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cloud_request.proto",
}
