// Code generated by mockery v2.32.0. DO NOT EDIT.

package mocks

import (
	context "context"

	awi "github.com/app-net-interface/awi-grpc/pb"

	grpc "google.golang.org/grpc"

	mock "github.com/stretchr/testify/mock"
)

// ConnectionControllerClient is an autogenerated mock type for the ConnectionControllerClient type
type ConnectionControllerClient struct {
	mock.Mock
}

type ConnectionControllerClient_Expecter struct {
	mock *mock.Mock
}

func (_m *ConnectionControllerClient) EXPECT() *ConnectionControllerClient_Expecter {
	return &ConnectionControllerClient_Expecter{mock: &_m.Mock}
}

// Connect provides a mock function with given fields: ctx, in, opts
func (_m *ConnectionControllerClient) Connect(ctx context.Context, in *awi.ConnectionRequest, opts ...grpc.CallOption) (*awi.ConnectionResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *awi.ConnectionResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionRequest, ...grpc.CallOption) (*awi.ConnectionResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionRequest, ...grpc.CallOption) *awi.ConnectionResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ConnectionResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ConnectionRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerClient_Connect_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Connect'
type ConnectionControllerClient_Connect_Call struct {
	*mock.Call
}

// Connect is a helper method to define mock.On call
//   - ctx context.Context
//   - in *awi.ConnectionRequest
//   - opts ...grpc.CallOption
func (_e *ConnectionControllerClient_Expecter) Connect(ctx interface{}, in interface{}, opts ...interface{}) *ConnectionControllerClient_Connect_Call {
	return &ConnectionControllerClient_Connect_Call{Call: _e.mock.On("Connect",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *ConnectionControllerClient_Connect_Call) Run(run func(ctx context.Context, in *awi.ConnectionRequest, opts ...grpc.CallOption)) *ConnectionControllerClient_Connect_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*awi.ConnectionRequest), variadicArgs...)
	})
	return _c
}

func (_c *ConnectionControllerClient_Connect_Call) Return(_a0 *awi.ConnectionResponse, _a1 error) *ConnectionControllerClient_Connect_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerClient_Connect_Call) RunAndReturn(run func(context.Context, *awi.ConnectionRequest, ...grpc.CallOption) (*awi.ConnectionResponse, error)) *ConnectionControllerClient_Connect_Call {
	_c.Call.Return(run)
	return _c
}

// Disconnect provides a mock function with given fields: ctx, in, opts
func (_m *ConnectionControllerClient) Disconnect(ctx context.Context, in *awi.DisconnectRequest, opts ...grpc.CallOption) (*awi.DisconnectResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *awi.DisconnectResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.DisconnectRequest, ...grpc.CallOption) (*awi.DisconnectResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.DisconnectRequest, ...grpc.CallOption) *awi.DisconnectResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.DisconnectResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.DisconnectRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerClient_Disconnect_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Disconnect'
type ConnectionControllerClient_Disconnect_Call struct {
	*mock.Call
}

// Disconnect is a helper method to define mock.On call
//   - ctx context.Context
//   - in *awi.DisconnectRequest
//   - opts ...grpc.CallOption
func (_e *ConnectionControllerClient_Expecter) Disconnect(ctx interface{}, in interface{}, opts ...interface{}) *ConnectionControllerClient_Disconnect_Call {
	return &ConnectionControllerClient_Disconnect_Call{Call: _e.mock.On("Disconnect",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *ConnectionControllerClient_Disconnect_Call) Run(run func(ctx context.Context, in *awi.DisconnectRequest, opts ...grpc.CallOption)) *ConnectionControllerClient_Disconnect_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*awi.DisconnectRequest), variadicArgs...)
	})
	return _c
}

func (_c *ConnectionControllerClient_Disconnect_Call) Return(_a0 *awi.DisconnectResponse, _a1 error) *ConnectionControllerClient_Disconnect_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerClient_Disconnect_Call) RunAndReturn(run func(context.Context, *awi.DisconnectRequest, ...grpc.CallOption) (*awi.DisconnectResponse, error)) *ConnectionControllerClient_Disconnect_Call {
	_c.Call.Return(run)
	return _c
}

// GetConnection provides a mock function with given fields: ctx, in, opts
func (_m *ConnectionControllerClient) GetConnection(ctx context.Context, in *awi.GetConnectionRequest, opts ...grpc.CallOption) (*awi.ConnectionResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *awi.ConnectionResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetConnectionRequest, ...grpc.CallOption) (*awi.ConnectionResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetConnectionRequest, ...grpc.CallOption) *awi.ConnectionResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ConnectionResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.GetConnectionRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerClient_GetConnection_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetConnection'
type ConnectionControllerClient_GetConnection_Call struct {
	*mock.Call
}

// GetConnection is a helper method to define mock.On call
//   - ctx context.Context
//   - in *awi.GetConnectionRequest
//   - opts ...grpc.CallOption
func (_e *ConnectionControllerClient_Expecter) GetConnection(ctx interface{}, in interface{}, opts ...interface{}) *ConnectionControllerClient_GetConnection_Call {
	return &ConnectionControllerClient_GetConnection_Call{Call: _e.mock.On("GetConnection",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *ConnectionControllerClient_GetConnection_Call) Run(run func(ctx context.Context, in *awi.GetConnectionRequest, opts ...grpc.CallOption)) *ConnectionControllerClient_GetConnection_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*awi.GetConnectionRequest), variadicArgs...)
	})
	return _c
}

func (_c *ConnectionControllerClient_GetConnection_Call) Return(_a0 *awi.ConnectionResponse, _a1 error) *ConnectionControllerClient_GetConnection_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerClient_GetConnection_Call) RunAndReturn(run func(context.Context, *awi.GetConnectionRequest, ...grpc.CallOption) (*awi.ConnectionResponse, error)) *ConnectionControllerClient_GetConnection_Call {
	_c.Call.Return(run)
	return _c
}

// GetConnectionStatus provides a mock function with given fields: ctx, in, opts
func (_m *ConnectionControllerClient) GetConnectionStatus(ctx context.Context, in *awi.ConnectionStatusRequest, opts ...grpc.CallOption) (*awi.ConnectionStatusResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *awi.ConnectionStatusResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionStatusRequest, ...grpc.CallOption) (*awi.ConnectionStatusResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionStatusRequest, ...grpc.CallOption) *awi.ConnectionStatusResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ConnectionStatusResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ConnectionStatusRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerClient_GetConnectionStatus_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetConnectionStatus'
type ConnectionControllerClient_GetConnectionStatus_Call struct {
	*mock.Call
}

// GetConnectionStatus is a helper method to define mock.On call
//   - ctx context.Context
//   - in *awi.ConnectionStatusRequest
//   - opts ...grpc.CallOption
func (_e *ConnectionControllerClient_Expecter) GetConnectionStatus(ctx interface{}, in interface{}, opts ...interface{}) *ConnectionControllerClient_GetConnectionStatus_Call {
	return &ConnectionControllerClient_GetConnectionStatus_Call{Call: _e.mock.On("GetConnectionStatus",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *ConnectionControllerClient_GetConnectionStatus_Call) Run(run func(ctx context.Context, in *awi.ConnectionStatusRequest, opts ...grpc.CallOption)) *ConnectionControllerClient_GetConnectionStatus_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*awi.ConnectionStatusRequest), variadicArgs...)
	})
	return _c
}

func (_c *ConnectionControllerClient_GetConnectionStatus_Call) Return(_a0 *awi.ConnectionStatusResponse, _a1 error) *ConnectionControllerClient_GetConnectionStatus_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerClient_GetConnectionStatus_Call) RunAndReturn(run func(context.Context, *awi.ConnectionStatusRequest, ...grpc.CallOption) (*awi.ConnectionStatusResponse, error)) *ConnectionControllerClient_GetConnectionStatus_Call {
	_c.Call.Return(run)
	return _c
}

// ListConnections provides a mock function with given fields: ctx, in, opts
func (_m *ConnectionControllerClient) ListConnections(ctx context.Context, in *awi.ListConnectionsRequest, opts ...grpc.CallOption) (*awi.ListConnectionsResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *awi.ListConnectionsResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListConnectionsRequest, ...grpc.CallOption) (*awi.ListConnectionsResponse, error)); ok {
		return rf(ctx, in, opts...)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListConnectionsRequest, ...grpc.CallOption) *awi.ListConnectionsResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListConnectionsResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListConnectionsRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerClient_ListConnections_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListConnections'
type ConnectionControllerClient_ListConnections_Call struct {
	*mock.Call
}

// ListConnections is a helper method to define mock.On call
//   - ctx context.Context
//   - in *awi.ListConnectionsRequest
//   - opts ...grpc.CallOption
func (_e *ConnectionControllerClient_Expecter) ListConnections(ctx interface{}, in interface{}, opts ...interface{}) *ConnectionControllerClient_ListConnections_Call {
	return &ConnectionControllerClient_ListConnections_Call{Call: _e.mock.On("ListConnections",
		append([]interface{}{ctx, in}, opts...)...)}
}

func (_c *ConnectionControllerClient_ListConnections_Call) Run(run func(ctx context.Context, in *awi.ListConnectionsRequest, opts ...grpc.CallOption)) *ConnectionControllerClient_ListConnections_Call {
	_c.Call.Run(func(args mock.Arguments) {
		variadicArgs := make([]grpc.CallOption, len(args)-2)
		for i, a := range args[2:] {
			if a != nil {
				variadicArgs[i] = a.(grpc.CallOption)
			}
		}
		run(args[0].(context.Context), args[1].(*awi.ListConnectionsRequest), variadicArgs...)
	})
	return _c
}

func (_c *ConnectionControllerClient_ListConnections_Call) Return(_a0 *awi.ListConnectionsResponse, _a1 error) *ConnectionControllerClient_ListConnections_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerClient_ListConnections_Call) RunAndReturn(run func(context.Context, *awi.ListConnectionsRequest, ...grpc.CallOption) (*awi.ListConnectionsResponse, error)) *ConnectionControllerClient_ListConnections_Call {
	_c.Call.Return(run)
	return _c
}

// NewConnectionControllerClient creates a new instance of ConnectionControllerClient. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewConnectionControllerClient(t interface {
	mock.TestingT
	Cleanup(func())
}) *ConnectionControllerClient {
	mock := &ConnectionControllerClient{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
