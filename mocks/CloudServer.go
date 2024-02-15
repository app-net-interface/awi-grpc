// Code generated by mockery v2.32.0. DO NOT EDIT.

package mocks

import (
	context "context"

	awi "github.com/app-net-interface/awi-grpc/pb"

	mock "github.com/stretchr/testify/mock"
)

// CloudServer is an autogenerated mock type for the CloudServer type
type CloudServer struct {
	mock.Mock
}

type CloudServer_Expecter struct {
	mock *mock.Mock
}

func (_m *CloudServer) EXPECT() *CloudServer_Expecter {
	return &CloudServer_Expecter{mock: &_m.Mock}
}

// ListInstances provides a mock function with given fields: _a0, _a1
func (_m *CloudServer) ListInstances(_a0 context.Context, _a1 *awi.ListInstancesRequest) (*awi.ListInstancesResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListInstancesResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListInstancesRequest) (*awi.ListInstancesResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListInstancesRequest) *awi.ListInstancesResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListInstancesResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListInstancesRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CloudServer_ListInstances_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListInstances'
type CloudServer_ListInstances_Call struct {
	*mock.Call
}

// ListInstances is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListInstancesRequest
func (_e *CloudServer_Expecter) ListInstances(_a0 interface{}, _a1 interface{}) *CloudServer_ListInstances_Call {
	return &CloudServer_ListInstances_Call{Call: _e.mock.On("ListInstances", _a0, _a1)}
}

func (_c *CloudServer_ListInstances_Call) Run(run func(_a0 context.Context, _a1 *awi.ListInstancesRequest)) *CloudServer_ListInstances_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListInstancesRequest))
	})
	return _c
}

func (_c *CloudServer_ListInstances_Call) Return(_a0 *awi.ListInstancesResponse, _a1 error) *CloudServer_ListInstances_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *CloudServer_ListInstances_Call) RunAndReturn(run func(context.Context, *awi.ListInstancesRequest) (*awi.ListInstancesResponse, error)) *CloudServer_ListInstances_Call {
	_c.Call.Return(run)
	return _c
}

// ListSites provides a mock function with given fields: _a0, _a1
func (_m *CloudServer) ListSites(_a0 context.Context, _a1 *awi.ListSiteRequest) (*awi.ListSiteResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListSiteResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListSiteRequest) (*awi.ListSiteResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListSiteRequest) *awi.ListSiteResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListSiteResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListSiteRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CloudServer_ListSites_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListSites'
type CloudServer_ListSites_Call struct {
	*mock.Call
}

// ListSites is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListSiteRequest
func (_e *CloudServer_Expecter) ListSites(_a0 interface{}, _a1 interface{}) *CloudServer_ListSites_Call {
	return &CloudServer_ListSites_Call{Call: _e.mock.On("ListSites", _a0, _a1)}
}

func (_c *CloudServer_ListSites_Call) Run(run func(_a0 context.Context, _a1 *awi.ListSiteRequest)) *CloudServer_ListSites_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListSiteRequest))
	})
	return _c
}

func (_c *CloudServer_ListSites_Call) Return(_a0 *awi.ListSiteResponse, _a1 error) *CloudServer_ListSites_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *CloudServer_ListSites_Call) RunAndReturn(run func(context.Context, *awi.ListSiteRequest) (*awi.ListSiteResponse, error)) *CloudServer_ListSites_Call {
	_c.Call.Return(run)
	return _c
}

// ListSubnets provides a mock function with given fields: _a0, _a1
func (_m *CloudServer) ListSubnets(_a0 context.Context, _a1 *awi.ListSubnetRequest) (*awi.ListSubnetResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListSubnetResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListSubnetRequest) (*awi.ListSubnetResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListSubnetRequest) *awi.ListSubnetResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListSubnetResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListSubnetRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CloudServer_ListSubnets_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListSubnets'
type CloudServer_ListSubnets_Call struct {
	*mock.Call
}

// ListSubnets is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListSubnetRequest
func (_e *CloudServer_Expecter) ListSubnets(_a0 interface{}, _a1 interface{}) *CloudServer_ListSubnets_Call {
	return &CloudServer_ListSubnets_Call{Call: _e.mock.On("ListSubnets", _a0, _a1)}
}

func (_c *CloudServer_ListSubnets_Call) Run(run func(_a0 context.Context, _a1 *awi.ListSubnetRequest)) *CloudServer_ListSubnets_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListSubnetRequest))
	})
	return _c
}

func (_c *CloudServer_ListSubnets_Call) Return(_a0 *awi.ListSubnetResponse, _a1 error) *CloudServer_ListSubnets_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *CloudServer_ListSubnets_Call) RunAndReturn(run func(context.Context, *awi.ListSubnetRequest) (*awi.ListSubnetResponse, error)) *CloudServer_ListSubnets_Call {
	_c.Call.Return(run)
	return _c
}

// ListVPCTags provides a mock function with given fields: _a0, _a1
func (_m *CloudServer) ListVPCTags(_a0 context.Context, _a1 *awi.ListVPCTagRequest) (*awi.ListVPCResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListVPCResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListVPCTagRequest) (*awi.ListVPCResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListVPCTagRequest) *awi.ListVPCResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListVPCResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListVPCTagRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CloudServer_ListVPCTags_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListVPCTags'
type CloudServer_ListVPCTags_Call struct {
	*mock.Call
}

// ListVPCTags is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListVPCTagRequest
func (_e *CloudServer_Expecter) ListVPCTags(_a0 interface{}, _a1 interface{}) *CloudServer_ListVPCTags_Call {
	return &CloudServer_ListVPCTags_Call{Call: _e.mock.On("ListVPCTags", _a0, _a1)}
}

func (_c *CloudServer_ListVPCTags_Call) Run(run func(_a0 context.Context, _a1 *awi.ListVPCTagRequest)) *CloudServer_ListVPCTags_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListVPCTagRequest))
	})
	return _c
}

func (_c *CloudServer_ListVPCTags_Call) Return(_a0 *awi.ListVPCResponse, _a1 error) *CloudServer_ListVPCTags_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *CloudServer_ListVPCTags_Call) RunAndReturn(run func(context.Context, *awi.ListVPCTagRequest) (*awi.ListVPCResponse, error)) *CloudServer_ListVPCTags_Call {
	_c.Call.Return(run)
	return _c
}

// ListVPCs provides a mock function with given fields: _a0, _a1
func (_m *CloudServer) ListVPCs(_a0 context.Context, _a1 *awi.ListVPCRequest) (*awi.ListVPCResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListVPCResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListVPCRequest) (*awi.ListVPCResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListVPCRequest) *awi.ListVPCResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListVPCResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListVPCRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CloudServer_ListVPCs_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListVPCs'
type CloudServer_ListVPCs_Call struct {
	*mock.Call
}

// ListVPCs is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListVPCRequest
func (_e *CloudServer_Expecter) ListVPCs(_a0 interface{}, _a1 interface{}) *CloudServer_ListVPCs_Call {
	return &CloudServer_ListVPCs_Call{Call: _e.mock.On("ListVPCs", _a0, _a1)}
}

func (_c *CloudServer_ListVPCs_Call) Run(run func(_a0 context.Context, _a1 *awi.ListVPCRequest)) *CloudServer_ListVPCs_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListVPCRequest))
	})
	return _c
}

func (_c *CloudServer_ListVPCs_Call) Return(_a0 *awi.ListVPCResponse, _a1 error) *CloudServer_ListVPCs_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *CloudServer_ListVPCs_Call) RunAndReturn(run func(context.Context, *awi.ListVPCRequest) (*awi.ListVPCResponse, error)) *CloudServer_ListVPCs_Call {
	_c.Call.Return(run)
	return _c
}

// ListVPNs provides a mock function with given fields: _a0, _a1
func (_m *CloudServer) ListVPNs(_a0 context.Context, _a1 *awi.ListVPNRequest) (*awi.ListVPNResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListVPNResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListVPNRequest) (*awi.ListVPNResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListVPNRequest) *awi.ListVPNResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListVPNResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListVPNRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CloudServer_ListVPNs_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListVPNs'
type CloudServer_ListVPNs_Call struct {
	*mock.Call
}

// ListVPNs is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListVPNRequest
func (_e *CloudServer_Expecter) ListVPNs(_a0 interface{}, _a1 interface{}) *CloudServer_ListVPNs_Call {
	return &CloudServer_ListVPNs_Call{Call: _e.mock.On("ListVPNs", _a0, _a1)}
}

func (_c *CloudServer_ListVPNs_Call) Run(run func(_a0 context.Context, _a1 *awi.ListVPNRequest)) *CloudServer_ListVPNs_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListVPNRequest))
	})
	return _c
}

func (_c *CloudServer_ListVPNs_Call) Return(_a0 *awi.ListVPNResponse, _a1 error) *CloudServer_ListVPNs_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *CloudServer_ListVPNs_Call) RunAndReturn(run func(context.Context, *awi.ListVPNRequest) (*awi.ListVPNResponse, error)) *CloudServer_ListVPNs_Call {
	_c.Call.Return(run)
	return _c
}

// mustEmbedUnimplementedCloudServer provides a mock function with given fields:
func (_m *CloudServer) mustEmbedUnimplementedCloudServer() {
	_m.Called()
}

// CloudServer_mustEmbedUnimplementedCloudServer_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'mustEmbedUnimplementedCloudServer'
type CloudServer_mustEmbedUnimplementedCloudServer_Call struct {
	*mock.Call
}

// mustEmbedUnimplementedCloudServer is a helper method to define mock.On call
func (_e *CloudServer_Expecter) mustEmbedUnimplementedCloudServer() *CloudServer_mustEmbedUnimplementedCloudServer_Call {
	return &CloudServer_mustEmbedUnimplementedCloudServer_Call{Call: _e.mock.On("mustEmbedUnimplementedCloudServer")}
}

func (_c *CloudServer_mustEmbedUnimplementedCloudServer_Call) Run(run func()) *CloudServer_mustEmbedUnimplementedCloudServer_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *CloudServer_mustEmbedUnimplementedCloudServer_Call) Return() *CloudServer_mustEmbedUnimplementedCloudServer_Call {
	_c.Call.Return()
	return _c
}

func (_c *CloudServer_mustEmbedUnimplementedCloudServer_Call) RunAndReturn(run func()) *CloudServer_mustEmbedUnimplementedCloudServer_Call {
	_c.Call.Return(run)
	return _c
}

// NewCloudServer creates a new instance of CloudServer. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewCloudServer(t interface {
	mock.TestingT
	Cleanup(func())
}) *CloudServer {
	mock := &CloudServer{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
