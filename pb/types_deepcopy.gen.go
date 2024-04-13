// Code generated by protoc-gen-deepcopy. DO NOT EDIT.
package awi

import (
	proto "google.golang.org/protobuf/proto"
)

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

// DeepCopyInto supports using Account within kubernetes types, where deepcopy-gen is used.
func (in *Account) DeepCopyInto(out *Account) {
	p := proto.Clone(in).(*Account)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Account. Required by controller-gen.
func (in *Account) DeepCopy() *Account {
	if in == nil {
		return nil
	}
	out := new(Account)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Account. Required by controller-gen.
func (in *Account) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ACL within kubernetes types, where deepcopy-gen is used.
func (in *ACL) DeepCopyInto(out *ACL) {
	p := proto.Clone(in).(*ACL)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ACL. Required by controller-gen.
func (in *ACL) DeepCopy() *ACL {
	if in == nil {
		return nil
	}
	out := new(ACL)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ACL. Required by controller-gen.
func (in *ACL) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using ACL_ACLRule within kubernetes types, where deepcopy-gen is used.
func (in *ACL_ACLRule) DeepCopyInto(out *ACL_ACLRule) {
	p := proto.Clone(in).(*ACL_ACLRule)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new ACL_ACLRule. Required by controller-gen.
func (in *ACL_ACLRule) DeepCopy() *ACL_ACLRule {
	if in == nil {
		return nil
	}
	out := new(ACL_ACLRule)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new ACL_ACLRule. Required by controller-gen.
func (in *ACL_ACLRule) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using SecurityGroup within kubernetes types, where deepcopy-gen is used.
func (in *SecurityGroup) DeepCopyInto(out *SecurityGroup) {
	p := proto.Clone(in).(*SecurityGroup)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SecurityGroup. Required by controller-gen.
func (in *SecurityGroup) DeepCopy() *SecurityGroup {
	if in == nil {
		return nil
	}
	out := new(SecurityGroup)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new SecurityGroup. Required by controller-gen.
func (in *SecurityGroup) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using SecurityGroup_SecurityGroupRule within kubernetes types, where deepcopy-gen is used.
func (in *SecurityGroup_SecurityGroupRule) DeepCopyInto(out *SecurityGroup_SecurityGroupRule) {
	p := proto.Clone(in).(*SecurityGroup_SecurityGroupRule)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SecurityGroup_SecurityGroupRule. Required by controller-gen.
func (in *SecurityGroup_SecurityGroupRule) DeepCopy() *SecurityGroup_SecurityGroupRule {
	if in == nil {
		return nil
	}
	out := new(SecurityGroup_SecurityGroupRule)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new SecurityGroup_SecurityGroupRule. Required by controller-gen.
func (in *SecurityGroup_SecurityGroupRule) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using RouteTable within kubernetes types, where deepcopy-gen is used.
func (in *RouteTable) DeepCopyInto(out *RouteTable) {
	p := proto.Clone(in).(*RouteTable)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RouteTable. Required by controller-gen.
func (in *RouteTable) DeepCopy() *RouteTable {
	if in == nil {
		return nil
	}
	out := new(RouteTable)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new RouteTable. Required by controller-gen.
func (in *RouteTable) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using RouteTable_Route within kubernetes types, where deepcopy-gen is used.
func (in *RouteTable_Route) DeepCopyInto(out *RouteTable_Route) {
	p := proto.Clone(in).(*RouteTable_Route)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new RouteTable_Route. Required by controller-gen.
func (in *RouteTable_Route) DeepCopy() *RouteTable_Route {
	if in == nil {
		return nil
	}
	out := new(RouteTable_Route)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new RouteTable_Route. Required by controller-gen.
func (in *RouteTable_Route) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Router within kubernetes types, where deepcopy-gen is used.
func (in *Router) DeepCopyInto(out *Router) {
	p := proto.Clone(in).(*Router)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Router. Required by controller-gen.
func (in *Router) DeepCopy() *Router {
	if in == nil {
		return nil
	}
	out := new(Router)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Router. Required by controller-gen.
func (in *Router) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using NATGateway within kubernetes types, where deepcopy-gen is used.
func (in *NATGateway) DeepCopyInto(out *NATGateway) {
	p := proto.Clone(in).(*NATGateway)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new NATGateway. Required by controller-gen.
func (in *NATGateway) DeepCopy() *NATGateway {
	if in == nil {
		return nil
	}
	out := new(NATGateway)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new NATGateway. Required by controller-gen.
func (in *NATGateway) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using IGW within kubernetes types, where deepcopy-gen is used.
func (in *IGW) DeepCopyInto(out *IGW) {
	p := proto.Clone(in).(*IGW)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new IGW. Required by controller-gen.
func (in *IGW) DeepCopy() *IGW {
	if in == nil {
		return nil
	}
	out := new(IGW)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new IGW. Required by controller-gen.
func (in *IGW) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}
