// Code generated by protoc-gen-deepcopy. DO NOT EDIT.
package awi

import (
	proto "google.golang.org/protobuf/proto"
)

// DeepCopyInto supports using Hard_SLA within kubernetes types, where deepcopy-gen is used.
func (in *Hard_SLA) DeepCopyInto(out *Hard_SLA) {
	p := proto.Clone(in).(*Hard_SLA)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Hard_SLA. Required by controller-gen.
func (in *Hard_SLA) DeepCopy() *Hard_SLA {
	if in == nil {
		return nil
	}
	out := new(Hard_SLA)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Hard_SLA. Required by controller-gen.
func (in *Hard_SLA) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Soft_SLA within kubernetes types, where deepcopy-gen is used.
func (in *Soft_SLA) DeepCopyInto(out *Soft_SLA) {
	p := proto.Clone(in).(*Soft_SLA)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Soft_SLA. Required by controller-gen.
func (in *Soft_SLA) DeepCopy() *Soft_SLA {
	if in == nil {
		return nil
	}
	out := new(Soft_SLA)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Soft_SLA. Required by controller-gen.
func (in *Soft_SLA) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Network_SLA within kubernetes types, where deepcopy-gen is used.
func (in *Network_SLA) DeepCopyInto(out *Network_SLA) {
	p := proto.Clone(in).(*Network_SLA)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Network_SLA. Required by controller-gen.
func (in *Network_SLA) DeepCopy() *Network_SLA {
	if in == nil {
		return nil
	}
	out := new(Network_SLA)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Network_SLA. Required by controller-gen.
func (in *Network_SLA) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using SLAResponse within kubernetes types, where deepcopy-gen is used.
func (in *SLAResponse) DeepCopyInto(out *SLAResponse) {
	p := proto.Clone(in).(*SLAResponse)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new SLAResponse. Required by controller-gen.
func (in *SLAResponse) DeepCopy() *SLAResponse {
	if in == nil {
		return nil
	}
	out := new(SLAResponse)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new SLAResponse. Required by controller-gen.
func (in *SLAResponse) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}
