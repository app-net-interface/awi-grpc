// Code generated by protoc-gen-deepcopy. DO NOT EDIT.
package awi

import (
	proto "google.golang.org/protobuf/proto"
)

// DeepCopyInto supports using ListInstancesRequest within kubernetes types, where deepcopy-gen is used.
func (in *ListInstancesRequest) DeepCopyInto(out *ListInstancesRequest) {
	p := proto.Clone(in).(*ListInstancesRequest)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListInstancesRequest. Required by controller-gen.
func (in *ListInstancesRequest) DeepCopy() *ListInstancesRequest {
	if in == nil {
		return nil
	}
	out := new(ListInstancesRequest)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListInstancesRequest. Required by controller-gen.
func (in *ListInstancesRequest) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListInstancesResponse within kubernetes types, where deepcopy-gen is used.
func (in *ListInstancesResponse) DeepCopyInto(out *ListInstancesResponse) {
	p := proto.Clone(in).(*ListInstancesResponse)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListInstancesResponse. Required by controller-gen.
func (in *ListInstancesResponse) DeepCopy() *ListInstancesResponse {
	if in == nil {
		return nil
	}
	out := new(ListInstancesResponse)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListInstancesResponse. Required by controller-gen.
func (in *ListInstancesResponse) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Instance within kubernetes types, where deepcopy-gen is used.
func (in *Instance) DeepCopyInto(out *Instance) {
	p := proto.Clone(in).(*Instance)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Instance. Required by controller-gen.
func (in *Instance) DeepCopy() *Instance {
	if in == nil {
		return nil
	}
	out := new(Instance)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Instance. Required by controller-gen.
func (in *Instance) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListSubnetRequest within kubernetes types, where deepcopy-gen is used.
func (in *ListSubnetRequest) DeepCopyInto(out *ListSubnetRequest) {
	p := proto.Clone(in).(*ListSubnetRequest)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListSubnetRequest. Required by controller-gen.
func (in *ListSubnetRequest) DeepCopy() *ListSubnetRequest {
	if in == nil {
		return nil
	}
	out := new(ListSubnetRequest)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListSubnetRequest. Required by controller-gen.
func (in *ListSubnetRequest) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListSubnetResponse within kubernetes types, where deepcopy-gen is used.
func (in *ListSubnetResponse) DeepCopyInto(out *ListSubnetResponse) {
	p := proto.Clone(in).(*ListSubnetResponse)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListSubnetResponse. Required by controller-gen.
func (in *ListSubnetResponse) DeepCopy() *ListSubnetResponse {
	if in == nil {
		return nil
	}
	out := new(ListSubnetResponse)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListSubnetResponse. Required by controller-gen.
func (in *ListSubnetResponse) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Subnet within kubernetes types, where deepcopy-gen is used.
func (in *Subnet) DeepCopyInto(out *Subnet) {
	p := proto.Clone(in).(*Subnet)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Subnet. Required by controller-gen.
func (in *Subnet) DeepCopy() *Subnet {
	if in == nil {
		return nil
	}
	out := new(Subnet)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Subnet. Required by controller-gen.
func (in *Subnet) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListSiteRequest within kubernetes types, where deepcopy-gen is used.
func (in *ListSiteRequest) DeepCopyInto(out *ListSiteRequest) {
	p := proto.Clone(in).(*ListSiteRequest)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListSiteRequest. Required by controller-gen.
func (in *ListSiteRequest) DeepCopy() *ListSiteRequest {
	if in == nil {
		return nil
	}
	out := new(ListSiteRequest)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListSiteRequest. Required by controller-gen.
func (in *ListSiteRequest) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListSiteResponse within kubernetes types, where deepcopy-gen is used.
func (in *ListSiteResponse) DeepCopyInto(out *ListSiteResponse) {
	p := proto.Clone(in).(*ListSiteResponse)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListSiteResponse. Required by controller-gen.
func (in *ListSiteResponse) DeepCopy() *ListSiteResponse {
	if in == nil {
		return nil
	}
	out := new(ListSiteResponse)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListSiteResponse. Required by controller-gen.
func (in *ListSiteResponse) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using SiteDetail within kubernetes types, where deepcopy-gen is used.
func (in *SiteDetail) DeepCopyInto(out *SiteDetail) {
	p := proto.Clone(in).(*SiteDetail)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SiteDetail. Required by controller-gen.
func (in *SiteDetail) DeepCopy() *SiteDetail {
	if in == nil {
		return nil
	}
	out := new(SiteDetail)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new SiteDetail. Required by controller-gen.
func (in *SiteDetail) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListVPCRequest within kubernetes types, where deepcopy-gen is used.
func (in *ListVPCRequest) DeepCopyInto(out *ListVPCRequest) {
	p := proto.Clone(in).(*ListVPCRequest)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListVPCRequest. Required by controller-gen.
func (in *ListVPCRequest) DeepCopy() *ListVPCRequest {
	if in == nil {
		return nil
	}
	out := new(ListVPCRequest)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListVPCRequest. Required by controller-gen.
func (in *ListVPCRequest) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListVPCTagRequest within kubernetes types, where deepcopy-gen is used.
func (in *ListVPCTagRequest) DeepCopyInto(out *ListVPCTagRequest) {
	p := proto.Clone(in).(*ListVPCTagRequest)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListVPCTagRequest. Required by controller-gen.
func (in *ListVPCTagRequest) DeepCopy() *ListVPCTagRequest {
	if in == nil {
		return nil
	}
	out := new(ListVPCTagRequest)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListVPCTagRequest. Required by controller-gen.
func (in *ListVPCTagRequest) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListVPCResponse within kubernetes types, where deepcopy-gen is used.
func (in *ListVPCResponse) DeepCopyInto(out *ListVPCResponse) {
	p := proto.Clone(in).(*ListVPCResponse)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListVPCResponse. Required by controller-gen.
func (in *ListVPCResponse) DeepCopy() *ListVPCResponse {
	if in == nil {
		return nil
	}
	out := new(ListVPCResponse)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListVPCResponse. Required by controller-gen.
func (in *ListVPCResponse) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using VPC within kubernetes types, where deepcopy-gen is used.
func (in *VPC) DeepCopyInto(out *VPC) {
	p := proto.Clone(in).(*VPC)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new VPC. Required by controller-gen.
func (in *VPC) DeepCopy() *VPC {
	if in == nil {
		return nil
	}
	out := new(VPC)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new VPC. Required by controller-gen.
func (in *VPC) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListVPNRequest within kubernetes types, where deepcopy-gen is used.
func (in *ListVPNRequest) DeepCopyInto(out *ListVPNRequest) {
	p := proto.Clone(in).(*ListVPNRequest)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListVPNRequest. Required by controller-gen.
func (in *ListVPNRequest) DeepCopy() *ListVPNRequest {
	if in == nil {
		return nil
	}
	out := new(ListVPNRequest)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListVPNRequest. Required by controller-gen.
func (in *ListVPNRequest) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ListVPNResponse within kubernetes types, where deepcopy-gen is used.
func (in *ListVPNResponse) DeepCopyInto(out *ListVPNResponse) {
	p := proto.Clone(in).(*ListVPNResponse)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ListVPNResponse. Required by controller-gen.
func (in *ListVPNResponse) DeepCopy() *ListVPNResponse {
	if in == nil {
		return nil
	}
	out := new(ListVPNResponse)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ListVPNResponse. Required by controller-gen.
func (in *ListVPNResponse) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using VPN within kubernetes types, where deepcopy-gen is used.
func (in *VPN) DeepCopyInto(out *VPN) {
	p := proto.Clone(in).(*VPN)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new VPN. Required by controller-gen.
func (in *VPN) DeepCopy() *VPN {
	if in == nil {
		return nil
	}
	out := new(VPN)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new VPN. Required by controller-gen.
func (in *VPN) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Pod within kubernetes types, where deepcopy-gen is used.
func (in *Pod) DeepCopyInto(out *Pod) {
	p := proto.Clone(in).(*Pod)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Pod. Required by controller-gen.
func (in *Pod) DeepCopy() *Pod {
	if in == nil {
		return nil
	}
	out := new(Pod)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Pod. Required by controller-gen.
func (in *Pod) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using K8SService within kubernetes types, where deepcopy-gen is used.
func (in *K8SService) DeepCopyInto(out *K8SService) {
	p := proto.Clone(in).(*K8SService)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new K8SService. Required by controller-gen.
func (in *K8SService) DeepCopy() *K8SService {
	if in == nil {
		return nil
	}
	out := new(K8SService)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new K8SService. Required by controller-gen.
func (in *K8SService) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using K8SService_Ingress within kubernetes types, where deepcopy-gen is used.
func (in *K8SService_Ingress) DeepCopyInto(out *K8SService_Ingress) {
	p := proto.Clone(in).(*K8SService_Ingress)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new K8SService_Ingress. Required by controller-gen.
func (in *K8SService_Ingress) DeepCopy() *K8SService_Ingress {
	if in == nil {
		return nil
	}
	out := new(K8SService_Ingress)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new K8SService_Ingress. Required by controller-gen.
func (in *K8SService_Ingress) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}