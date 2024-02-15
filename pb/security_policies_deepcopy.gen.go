// Code generated by protoc-gen-deepcopy. DO NOT EDIT.
package awi

import (
	proto "google.golang.org/protobuf/proto"
)

// DeepCopyInto supports using Security within kubernetes types, where deepcopy-gen is used.
func (in *Security) DeepCopyInto(out *Security) {
	p := proto.Clone(in).(*Security)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Security. Required by controller-gen.
func (in *Security) DeepCopy() *Security {
	if in == nil {
		return nil
	}
	out := new(Security)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Security. Required by controller-gen.
func (in *Security) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Security_PolicyMetadata within kubernetes types, where deepcopy-gen is used.
func (in *Security_PolicyMetadata) DeepCopyInto(out *Security_PolicyMetadata) {
	p := proto.Clone(in).(*Security_PolicyMetadata)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Security_PolicyMetadata. Required by controller-gen.
func (in *Security_PolicyMetadata) DeepCopy() *Security_PolicyMetadata {
	if in == nil {
		return nil
	}
	out := new(Security_PolicyMetadata)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Security_PolicyMetadata. Required by controller-gen.
func (in *Security_PolicyMetadata) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Security_AccessPolicy within kubernetes types, where deepcopy-gen is used.
func (in *Security_AccessPolicy) DeepCopyInto(out *Security_AccessPolicy) {
	p := proto.Clone(in).(*Security_AccessPolicy)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Security_AccessPolicy. Required by controller-gen.
func (in *Security_AccessPolicy) DeepCopy() *Security_AccessPolicy {
	if in == nil {
		return nil
	}
	out := new(Security_AccessPolicy)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Security_AccessPolicy. Required by controller-gen.
func (in *Security_AccessPolicy) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}

// DeepCopyInto supports using Security_AccessPolicy_AccessProtocol within kubernetes types, where deepcopy-gen is used.
func (in *Security_AccessPolicy_AccessProtocol) DeepCopyInto(out *Security_AccessPolicy_AccessProtocol) {
	p := proto.Clone(in).(*Security_AccessPolicy_AccessProtocol)
	*out = *p
}

// DeepCopy is an autogenerated deepcopy function, copying the receiver, creating a new Security_AccessPolicy_AccessProtocol. Required by controller-gen.
func (in *Security_AccessPolicy_AccessProtocol) DeepCopy() *Security_AccessPolicy_AccessProtocol {
	if in == nil {
		return nil
	}
	out := new(Security_AccessPolicy_AccessProtocol)
	in.DeepCopyInto(out)
	return out
}

// DeepCopyInterface is an autogenerated deepcopy function, copying the receiver, creating a new Security_AccessPolicy_AccessProtocol. Required by controller-gen.
func (in *Security_AccessPolicy_AccessProtocol) DeepCopyInterface() interface{} {
	return in.DeepCopy()
}