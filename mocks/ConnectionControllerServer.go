// Code generated by mockery v2.32.0. DO NOT EDIT.

package mocks

import (
	context "context"

	awi "github.com/app-net-interface/awi-grpc/pb"

	mock "github.com/stretchr/testify/mock"
)

// ConnectionControllerServer is an autogenerated mock type for the ConnectionControllerServer type
type ConnectionControllerServer struct {
	mock.Mock
}

type ConnectionControllerServer_Expecter struct {
	mock *mock.Mock
}

func (_m *ConnectionControllerServer) EXPECT() *ConnectionControllerServer_Expecter {
	return &ConnectionControllerServer_Expecter{mock: &_m.Mock}
}

// Connect provides a mock function with given fields: _a0, _a1
func (_m *ConnectionControllerServer) Connect(_a0 context.Context, _a1 *awi.ConnectionRequest) (*awi.ConnectionResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ConnectionResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionRequest) (*awi.ConnectionResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionRequest) *awi.ConnectionResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ConnectionResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ConnectionRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerServer_Connect_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Connect'
type ConnectionControllerServer_Connect_Call struct {
	*mock.Call
}

// Connect is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ConnectionRequest
func (_e *ConnectionControllerServer_Expecter) Connect(_a0 interface{}, _a1 interface{}) *ConnectionControllerServer_Connect_Call {
	return &ConnectionControllerServer_Connect_Call{Call: _e.mock.On("Connect", _a0, _a1)}
}

func (_c *ConnectionControllerServer_Connect_Call) Run(run func(_a0 context.Context, _a1 *awi.ConnectionRequest)) *ConnectionControllerServer_Connect_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ConnectionRequest))
	})
	return _c
}

func (_c *ConnectionControllerServer_Connect_Call) Return(_a0 *awi.ConnectionResponse, _a1 error) *ConnectionControllerServer_Connect_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerServer_Connect_Call) RunAndReturn(run func(context.Context, *awi.ConnectionRequest) (*awi.ConnectionResponse, error)) *ConnectionControllerServer_Connect_Call {
	_c.Call.Return(run)
	return _c
}

// Disconnect provides a mock function with given fields: _a0, _a1
func (_m *ConnectionControllerServer) Disconnect(_a0 context.Context, _a1 *awi.DisconnectRequest) (*awi.DisconnectResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.DisconnectResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.DisconnectRequest) (*awi.DisconnectResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.DisconnectRequest) *awi.DisconnectResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.DisconnectResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.DisconnectRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerServer_Disconnect_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Disconnect'
type ConnectionControllerServer_Disconnect_Call struct {
	*mock.Call
}

// Disconnect is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.DisconnectRequest
func (_e *ConnectionControllerServer_Expecter) Disconnect(_a0 interface{}, _a1 interface{}) *ConnectionControllerServer_Disconnect_Call {
	return &ConnectionControllerServer_Disconnect_Call{Call: _e.mock.On("Disconnect", _a0, _a1)}
}

func (_c *ConnectionControllerServer_Disconnect_Call) Run(run func(_a0 context.Context, _a1 *awi.DisconnectRequest)) *ConnectionControllerServer_Disconnect_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.DisconnectRequest))
	})
	return _c
}

func (_c *ConnectionControllerServer_Disconnect_Call) Return(_a0 *awi.DisconnectResponse, _a1 error) *ConnectionControllerServer_Disconnect_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerServer_Disconnect_Call) RunAndReturn(run func(context.Context, *awi.DisconnectRequest) (*awi.DisconnectResponse, error)) *ConnectionControllerServer_Disconnect_Call {
	_c.Call.Return(run)
	return _c
}

// GetConnection provides a mock function with given fields: _a0, _a1
func (_m *ConnectionControllerServer) GetConnection(_a0 context.Context, _a1 *awi.GetConnectionRequest) (*awi.ConnectionResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ConnectionResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetConnectionRequest) (*awi.ConnectionResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetConnectionRequest) *awi.ConnectionResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ConnectionResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.GetConnectionRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerServer_GetConnection_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetConnection'
type ConnectionControllerServer_GetConnection_Call struct {
	*mock.Call
}

// GetConnection is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.GetConnectionRequest
func (_e *ConnectionControllerServer_Expecter) GetConnection(_a0 interface{}, _a1 interface{}) *ConnectionControllerServer_GetConnection_Call {
	return &ConnectionControllerServer_GetConnection_Call{Call: _e.mock.On("GetConnection", _a0, _a1)}
}

func (_c *ConnectionControllerServer_GetConnection_Call) Run(run func(_a0 context.Context, _a1 *awi.GetConnectionRequest)) *ConnectionControllerServer_GetConnection_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.GetConnectionRequest))
	})
	return _c
}

func (_c *ConnectionControllerServer_GetConnection_Call) Return(_a0 *awi.ConnectionResponse, _a1 error) *ConnectionControllerServer_GetConnection_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerServer_GetConnection_Call) RunAndReturn(run func(context.Context, *awi.GetConnectionRequest) (*awi.ConnectionResponse, error)) *ConnectionControllerServer_GetConnection_Call {
	_c.Call.Return(run)
	return _c
}

// GetConnectionStatus provides a mock function with given fields: _a0, _a1
func (_m *ConnectionControllerServer) GetConnectionStatus(_a0 context.Context, _a1 *awi.ConnectionStatusRequest) (*awi.ConnectionStatusResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ConnectionStatusResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionStatusRequest) (*awi.ConnectionStatusResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ConnectionStatusRequest) *awi.ConnectionStatusResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ConnectionStatusResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ConnectionStatusRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerServer_GetConnectionStatus_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetConnectionStatus'
type ConnectionControllerServer_GetConnectionStatus_Call struct {
	*mock.Call
}

// GetConnectionStatus is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ConnectionStatusRequest
func (_e *ConnectionControllerServer_Expecter) GetConnectionStatus(_a0 interface{}, _a1 interface{}) *ConnectionControllerServer_GetConnectionStatus_Call {
	return &ConnectionControllerServer_GetConnectionStatus_Call{Call: _e.mock.On("GetConnectionStatus", _a0, _a1)}
}

func (_c *ConnectionControllerServer_GetConnectionStatus_Call) Run(run func(_a0 context.Context, _a1 *awi.ConnectionStatusRequest)) *ConnectionControllerServer_GetConnectionStatus_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ConnectionStatusRequest))
	})
	return _c
}

func (_c *ConnectionControllerServer_GetConnectionStatus_Call) Return(_a0 *awi.ConnectionStatusResponse, _a1 error) *ConnectionControllerServer_GetConnectionStatus_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerServer_GetConnectionStatus_Call) RunAndReturn(run func(context.Context, *awi.ConnectionStatusRequest) (*awi.ConnectionStatusResponse, error)) *ConnectionControllerServer_GetConnectionStatus_Call {
	_c.Call.Return(run)
	return _c
}

// ListConnections provides a mock function with given fields: _a0, _a1
func (_m *ConnectionControllerServer) ListConnections(_a0 context.Context, _a1 *awi.ListConnectionsRequest) (*awi.ListConnectionsResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListConnectionsResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListConnectionsRequest) (*awi.ListConnectionsResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListConnectionsRequest) *awi.ListConnectionsResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListConnectionsResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListConnectionsRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ConnectionControllerServer_ListConnections_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListConnections'
type ConnectionControllerServer_ListConnections_Call struct {
	*mock.Call
}

// ListConnections is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListConnectionsRequest
func (_e *ConnectionControllerServer_Expecter) ListConnections(_a0 interface{}, _a1 interface{}) *ConnectionControllerServer_ListConnections_Call {
	return &ConnectionControllerServer_ListConnections_Call{Call: _e.mock.On("ListConnections", _a0, _a1)}
}

func (_c *ConnectionControllerServer_ListConnections_Call) Run(run func(_a0 context.Context, _a1 *awi.ListConnectionsRequest)) *ConnectionControllerServer_ListConnections_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListConnectionsRequest))
	})
	return _c
}

func (_c *ConnectionControllerServer_ListConnections_Call) Return(_a0 *awi.ListConnectionsResponse, _a1 error) *ConnectionControllerServer_ListConnections_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *ConnectionControllerServer_ListConnections_Call) RunAndReturn(run func(context.Context, *awi.ListConnectionsRequest) (*awi.ListConnectionsResponse, error)) *ConnectionControllerServer_ListConnections_Call {
	_c.Call.Return(run)
	return _c
}

// mustEmbedUnimplementedConnectionControllerServer provides a mock function with given fields:
func (_m *ConnectionControllerServer) mustEmbedUnimplementedConnectionControllerServer() {
	_m.Called()
}

// ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'mustEmbedUnimplementedConnectionControllerServer'
type ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call struct {
	*mock.Call
}

// mustEmbedUnimplementedConnectionControllerServer is a helper method to define mock.On call
func (_e *ConnectionControllerServer_Expecter) mustEmbedUnimplementedConnectionControllerServer() *ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call {
	return &ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call{Call: _e.mock.On("mustEmbedUnimplementedConnectionControllerServer")}
}

func (_c *ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call) Run(run func()) *ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call) Return() *ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call {
	_c.Call.Return()
	return _c
}

func (_c *ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call) RunAndReturn(run func()) *ConnectionControllerServer_mustEmbedUnimplementedConnectionControllerServer_Call {
	_c.Call.Return(run)
	return _c
}

// NewConnectionControllerServer creates a new instance of ConnectionControllerServer. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewConnectionControllerServer(t interface {
	mock.TestingT
	Cleanup(func())
}) *ConnectionControllerServer {
	mock := &ConnectionControllerServer{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
