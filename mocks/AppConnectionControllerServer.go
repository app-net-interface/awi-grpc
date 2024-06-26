// Code generated by mockery v2.32.0. DO NOT EDIT.

package mocks

import (
	context "context"

	awi "github.com/app-net-interface/awi-grpc/pb"

	mock "github.com/stretchr/testify/mock"
)

// AppConnectionControllerServer is an autogenerated mock type for the AppConnectionControllerServer type
type AppConnectionControllerServer struct {
	mock.Mock
}

type AppConnectionControllerServer_Expecter struct {
	mock *mock.Mock
}

func (_m *AppConnectionControllerServer) EXPECT() *AppConnectionControllerServer_Expecter {
	return &AppConnectionControllerServer_Expecter{mock: &_m.Mock}
}

// ConnectApps provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) ConnectApps(_a0 context.Context, _a1 *awi.AppConnection) (*awi.AppConnectionResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.AppConnectionResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.AppConnection) (*awi.AppConnectionResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.AppConnection) *awi.AppConnectionResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.AppConnectionResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.AppConnection) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_ConnectApps_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ConnectApps'
type AppConnectionControllerServer_ConnectApps_Call struct {
	*mock.Call
}

// ConnectApps is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.AppConnection
func (_e *AppConnectionControllerServer_Expecter) ConnectApps(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_ConnectApps_Call {
	return &AppConnectionControllerServer_ConnectApps_Call{Call: _e.mock.On("ConnectApps", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_ConnectApps_Call) Run(run func(_a0 context.Context, _a1 *awi.AppConnection)) *AppConnectionControllerServer_ConnectApps_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.AppConnection))
	})
	return _c
}

func (_c *AppConnectionControllerServer_ConnectApps_Call) Return(_a0 *awi.AppConnectionResponse, _a1 error) *AppConnectionControllerServer_ConnectApps_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_ConnectApps_Call) RunAndReturn(run func(context.Context, *awi.AppConnection) (*awi.AppConnectionResponse, error)) *AppConnectionControllerServer_ConnectApps_Call {
	_c.Call.Return(run)
	return _c
}

// CreateAppConnectionPolicy provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) CreateAppConnectionPolicy(_a0 context.Context, _a1 *awi.CreateAppConnectionPolicyRequest) (*awi.CreateAppConnectionPolicyResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.CreateAppConnectionPolicyResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.CreateAppConnectionPolicyRequest) (*awi.CreateAppConnectionPolicyResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.CreateAppConnectionPolicyRequest) *awi.CreateAppConnectionPolicyResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.CreateAppConnectionPolicyResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.CreateAppConnectionPolicyRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_CreateAppConnectionPolicy_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'CreateAppConnectionPolicy'
type AppConnectionControllerServer_CreateAppConnectionPolicy_Call struct {
	*mock.Call
}

// CreateAppConnectionPolicy is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.CreateAppConnectionPolicyRequest
func (_e *AppConnectionControllerServer_Expecter) CreateAppConnectionPolicy(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_CreateAppConnectionPolicy_Call {
	return &AppConnectionControllerServer_CreateAppConnectionPolicy_Call{Call: _e.mock.On("CreateAppConnectionPolicy", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_CreateAppConnectionPolicy_Call) Run(run func(_a0 context.Context, _a1 *awi.CreateAppConnectionPolicyRequest)) *AppConnectionControllerServer_CreateAppConnectionPolicy_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.CreateAppConnectionPolicyRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_CreateAppConnectionPolicy_Call) Return(_a0 *awi.CreateAppConnectionPolicyResponse, _a1 error) *AppConnectionControllerServer_CreateAppConnectionPolicy_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_CreateAppConnectionPolicy_Call) RunAndReturn(run func(context.Context, *awi.CreateAppConnectionPolicyRequest) (*awi.CreateAppConnectionPolicyResponse, error)) *AppConnectionControllerServer_CreateAppConnectionPolicy_Call {
	_c.Call.Return(run)
	return _c
}

// DeleteAppConnectionPolicy provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) DeleteAppConnectionPolicy(_a0 context.Context, _a1 *awi.DeleteAppConnectionPolicyRequest) (*awi.DeleteAppConnectionPolicyResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.DeleteAppConnectionPolicyResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.DeleteAppConnectionPolicyRequest) (*awi.DeleteAppConnectionPolicyResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.DeleteAppConnectionPolicyRequest) *awi.DeleteAppConnectionPolicyResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.DeleteAppConnectionPolicyResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.DeleteAppConnectionPolicyRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_DeleteAppConnectionPolicy_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'DeleteAppConnectionPolicy'
type AppConnectionControllerServer_DeleteAppConnectionPolicy_Call struct {
	*mock.Call
}

// DeleteAppConnectionPolicy is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.DeleteAppConnectionPolicyRequest
func (_e *AppConnectionControllerServer_Expecter) DeleteAppConnectionPolicy(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_DeleteAppConnectionPolicy_Call {
	return &AppConnectionControllerServer_DeleteAppConnectionPolicy_Call{Call: _e.mock.On("DeleteAppConnectionPolicy", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_DeleteAppConnectionPolicy_Call) Run(run func(_a0 context.Context, _a1 *awi.DeleteAppConnectionPolicyRequest)) *AppConnectionControllerServer_DeleteAppConnectionPolicy_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.DeleteAppConnectionPolicyRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_DeleteAppConnectionPolicy_Call) Return(_a0 *awi.DeleteAppConnectionPolicyResponse, _a1 error) *AppConnectionControllerServer_DeleteAppConnectionPolicy_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_DeleteAppConnectionPolicy_Call) RunAndReturn(run func(context.Context, *awi.DeleteAppConnectionPolicyRequest) (*awi.DeleteAppConnectionPolicyResponse, error)) *AppConnectionControllerServer_DeleteAppConnectionPolicy_Call {
	_c.Call.Return(run)
	return _c
}

// DisconnectApps provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) DisconnectApps(_a0 context.Context, _a1 *awi.AppDisconnectionRequest) (*awi.AppDisconnectionResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.AppDisconnectionResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.AppDisconnectionRequest) (*awi.AppDisconnectionResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.AppDisconnectionRequest) *awi.AppDisconnectionResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.AppDisconnectionResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.AppDisconnectionRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_DisconnectApps_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'DisconnectApps'
type AppConnectionControllerServer_DisconnectApps_Call struct {
	*mock.Call
}

// DisconnectApps is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.AppDisconnectionRequest
func (_e *AppConnectionControllerServer_Expecter) DisconnectApps(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_DisconnectApps_Call {
	return &AppConnectionControllerServer_DisconnectApps_Call{Call: _e.mock.On("DisconnectApps", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_DisconnectApps_Call) Run(run func(_a0 context.Context, _a1 *awi.AppDisconnectionRequest)) *AppConnectionControllerServer_DisconnectApps_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.AppDisconnectionRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_DisconnectApps_Call) Return(_a0 *awi.AppDisconnectionResponse, _a1 error) *AppConnectionControllerServer_DisconnectApps_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_DisconnectApps_Call) RunAndReturn(run func(context.Context, *awi.AppDisconnectionRequest) (*awi.AppDisconnectionResponse, error)) *AppConnectionControllerServer_DisconnectApps_Call {
	_c.Call.Return(run)
	return _c
}

// GetAppConnection provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) GetAppConnection(_a0 context.Context, _a1 *awi.GetAppConnectionRequest) (*awi.GetAppConnectionResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.GetAppConnectionResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionRequest) (*awi.GetAppConnectionResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionRequest) *awi.GetAppConnectionResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.GetAppConnectionResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.GetAppConnectionRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_GetAppConnection_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetAppConnection'
type AppConnectionControllerServer_GetAppConnection_Call struct {
	*mock.Call
}

// GetAppConnection is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.GetAppConnectionRequest
func (_e *AppConnectionControllerServer_Expecter) GetAppConnection(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_GetAppConnection_Call {
	return &AppConnectionControllerServer_GetAppConnection_Call{Call: _e.mock.On("GetAppConnection", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_GetAppConnection_Call) Run(run func(_a0 context.Context, _a1 *awi.GetAppConnectionRequest)) *AppConnectionControllerServer_GetAppConnection_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.GetAppConnectionRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnection_Call) Return(_a0 *awi.GetAppConnectionResponse, _a1 error) *AppConnectionControllerServer_GetAppConnection_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnection_Call) RunAndReturn(run func(context.Context, *awi.GetAppConnectionRequest) (*awi.GetAppConnectionResponse, error)) *AppConnectionControllerServer_GetAppConnection_Call {
	_c.Call.Return(run)
	return _c
}

// GetAppConnectionEvents provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) GetAppConnectionEvents(_a0 context.Context, _a1 *awi.GetAppConnectionEventsRequest) (*awi.AppConnectionEventsResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.AppConnectionEventsResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionEventsRequest) (*awi.AppConnectionEventsResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionEventsRequest) *awi.AppConnectionEventsResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.AppConnectionEventsResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.GetAppConnectionEventsRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_GetAppConnectionEvents_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetAppConnectionEvents'
type AppConnectionControllerServer_GetAppConnectionEvents_Call struct {
	*mock.Call
}

// GetAppConnectionEvents is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.GetAppConnectionEventsRequest
func (_e *AppConnectionControllerServer_Expecter) GetAppConnectionEvents(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_GetAppConnectionEvents_Call {
	return &AppConnectionControllerServer_GetAppConnectionEvents_Call{Call: _e.mock.On("GetAppConnectionEvents", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_GetAppConnectionEvents_Call) Run(run func(_a0 context.Context, _a1 *awi.GetAppConnectionEventsRequest)) *AppConnectionControllerServer_GetAppConnectionEvents_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.GetAppConnectionEventsRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionEvents_Call) Return(_a0 *awi.AppConnectionEventsResponse, _a1 error) *AppConnectionControllerServer_GetAppConnectionEvents_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionEvents_Call) RunAndReturn(run func(context.Context, *awi.GetAppConnectionEventsRequest) (*awi.AppConnectionEventsResponse, error)) *AppConnectionControllerServer_GetAppConnectionEvents_Call {
	_c.Call.Return(run)
	return _c
}

// GetAppConnectionPolicy provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) GetAppConnectionPolicy(_a0 context.Context, _a1 *awi.GetAppConnectionPolicyRequest) (*awi.GetAppConnectionPolicyResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.GetAppConnectionPolicyResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionPolicyRequest) (*awi.GetAppConnectionPolicyResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionPolicyRequest) *awi.GetAppConnectionPolicyResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.GetAppConnectionPolicyResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.GetAppConnectionPolicyRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_GetAppConnectionPolicy_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetAppConnectionPolicy'
type AppConnectionControllerServer_GetAppConnectionPolicy_Call struct {
	*mock.Call
}

// GetAppConnectionPolicy is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.GetAppConnectionPolicyRequest
func (_e *AppConnectionControllerServer_Expecter) GetAppConnectionPolicy(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_GetAppConnectionPolicy_Call {
	return &AppConnectionControllerServer_GetAppConnectionPolicy_Call{Call: _e.mock.On("GetAppConnectionPolicy", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_GetAppConnectionPolicy_Call) Run(run func(_a0 context.Context, _a1 *awi.GetAppConnectionPolicyRequest)) *AppConnectionControllerServer_GetAppConnectionPolicy_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.GetAppConnectionPolicyRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionPolicy_Call) Return(_a0 *awi.GetAppConnectionPolicyResponse, _a1 error) *AppConnectionControllerServer_GetAppConnectionPolicy_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionPolicy_Call) RunAndReturn(run func(context.Context, *awi.GetAppConnectionPolicyRequest) (*awi.GetAppConnectionPolicyResponse, error)) *AppConnectionControllerServer_GetAppConnectionPolicy_Call {
	_c.Call.Return(run)
	return _c
}

// GetAppConnectionStatistics provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) GetAppConnectionStatistics(_a0 context.Context, _a1 *awi.GetAppConnectionStatisticsRequest) (*awi.AppConnectionStatisticsResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.AppConnectionStatisticsResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionStatisticsRequest) (*awi.AppConnectionStatisticsResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionStatisticsRequest) *awi.AppConnectionStatisticsResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.AppConnectionStatisticsResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.GetAppConnectionStatisticsRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_GetAppConnectionStatistics_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetAppConnectionStatistics'
type AppConnectionControllerServer_GetAppConnectionStatistics_Call struct {
	*mock.Call
}

// GetAppConnectionStatistics is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.GetAppConnectionStatisticsRequest
func (_e *AppConnectionControllerServer_Expecter) GetAppConnectionStatistics(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_GetAppConnectionStatistics_Call {
	return &AppConnectionControllerServer_GetAppConnectionStatistics_Call{Call: _e.mock.On("GetAppConnectionStatistics", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_GetAppConnectionStatistics_Call) Run(run func(_a0 context.Context, _a1 *awi.GetAppConnectionStatisticsRequest)) *AppConnectionControllerServer_GetAppConnectionStatistics_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.GetAppConnectionStatisticsRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionStatistics_Call) Return(_a0 *awi.AppConnectionStatisticsResponse, _a1 error) *AppConnectionControllerServer_GetAppConnectionStatistics_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionStatistics_Call) RunAndReturn(run func(context.Context, *awi.GetAppConnectionStatisticsRequest) (*awi.AppConnectionStatisticsResponse, error)) *AppConnectionControllerServer_GetAppConnectionStatistics_Call {
	_c.Call.Return(run)
	return _c
}

// GetAppConnectionStatus provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) GetAppConnectionStatus(_a0 context.Context, _a1 *awi.GetAppConnectionStatusRequest) (*awi.AppConnectionStatusResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.AppConnectionStatusResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionStatusRequest) (*awi.AppConnectionStatusResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.GetAppConnectionStatusRequest) *awi.AppConnectionStatusResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.AppConnectionStatusResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.GetAppConnectionStatusRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_GetAppConnectionStatus_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetAppConnectionStatus'
type AppConnectionControllerServer_GetAppConnectionStatus_Call struct {
	*mock.Call
}

// GetAppConnectionStatus is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.GetAppConnectionStatusRequest
func (_e *AppConnectionControllerServer_Expecter) GetAppConnectionStatus(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_GetAppConnectionStatus_Call {
	return &AppConnectionControllerServer_GetAppConnectionStatus_Call{Call: _e.mock.On("GetAppConnectionStatus", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_GetAppConnectionStatus_Call) Run(run func(_a0 context.Context, _a1 *awi.GetAppConnectionStatusRequest)) *AppConnectionControllerServer_GetAppConnectionStatus_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.GetAppConnectionStatusRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionStatus_Call) Return(_a0 *awi.AppConnectionStatusResponse, _a1 error) *AppConnectionControllerServer_GetAppConnectionStatus_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_GetAppConnectionStatus_Call) RunAndReturn(run func(context.Context, *awi.GetAppConnectionStatusRequest) (*awi.AppConnectionStatusResponse, error)) *AppConnectionControllerServer_GetAppConnectionStatus_Call {
	_c.Call.Return(run)
	return _c
}

// GetMatchedResources provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) GetMatchedResources(_a0 context.Context, _a1 *awi.AppConnection) (*awi.GetMatchedResourcesResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.GetMatchedResourcesResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.AppConnection) (*awi.GetMatchedResourcesResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.AppConnection) *awi.GetMatchedResourcesResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.GetMatchedResourcesResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.AppConnection) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_GetMatchedResources_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'GetMatchedResources'
type AppConnectionControllerServer_GetMatchedResources_Call struct {
	*mock.Call
}

// GetMatchedResources is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.AppConnection
func (_e *AppConnectionControllerServer_Expecter) GetMatchedResources(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_GetMatchedResources_Call {
	return &AppConnectionControllerServer_GetMatchedResources_Call{Call: _e.mock.On("GetMatchedResources", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_GetMatchedResources_Call) Run(run func(_a0 context.Context, _a1 *awi.AppConnection)) *AppConnectionControllerServer_GetMatchedResources_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.AppConnection))
	})
	return _c
}

func (_c *AppConnectionControllerServer_GetMatchedResources_Call) Return(_a0 *awi.GetMatchedResourcesResponse, _a1 error) *AppConnectionControllerServer_GetMatchedResources_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_GetMatchedResources_Call) RunAndReturn(run func(context.Context, *awi.AppConnection) (*awi.GetMatchedResourcesResponse, error)) *AppConnectionControllerServer_GetMatchedResources_Call {
	_c.Call.Return(run)
	return _c
}

// ListAppConnectionPolicies provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) ListAppConnectionPolicies(_a0 context.Context, _a1 *awi.ListAppConnectionPoliciesRequest) (*awi.ListAppConnectionPoliciesResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListAppConnectionPoliciesResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListAppConnectionPoliciesRequest) (*awi.ListAppConnectionPoliciesResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListAppConnectionPoliciesRequest) *awi.ListAppConnectionPoliciesResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListAppConnectionPoliciesResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListAppConnectionPoliciesRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_ListAppConnectionPolicies_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListAppConnectionPolicies'
type AppConnectionControllerServer_ListAppConnectionPolicies_Call struct {
	*mock.Call
}

// ListAppConnectionPolicies is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListAppConnectionPoliciesRequest
func (_e *AppConnectionControllerServer_Expecter) ListAppConnectionPolicies(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_ListAppConnectionPolicies_Call {
	return &AppConnectionControllerServer_ListAppConnectionPolicies_Call{Call: _e.mock.On("ListAppConnectionPolicies", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_ListAppConnectionPolicies_Call) Run(run func(_a0 context.Context, _a1 *awi.ListAppConnectionPoliciesRequest)) *AppConnectionControllerServer_ListAppConnectionPolicies_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListAppConnectionPoliciesRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_ListAppConnectionPolicies_Call) Return(_a0 *awi.ListAppConnectionPoliciesResponse, _a1 error) *AppConnectionControllerServer_ListAppConnectionPolicies_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_ListAppConnectionPolicies_Call) RunAndReturn(run func(context.Context, *awi.ListAppConnectionPoliciesRequest) (*awi.ListAppConnectionPoliciesResponse, error)) *AppConnectionControllerServer_ListAppConnectionPolicies_Call {
	_c.Call.Return(run)
	return _c
}

// ListConnectedApps provides a mock function with given fields: _a0, _a1
func (_m *AppConnectionControllerServer) ListConnectedApps(_a0 context.Context, _a1 *awi.ListAppConnectionsRequest) (*awi.ListAppConnectionsResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *awi.ListAppConnectionsResponse
	var r1 error
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListAppConnectionsRequest) (*awi.ListAppConnectionsResponse, error)); ok {
		return rf(_a0, _a1)
	}
	if rf, ok := ret.Get(0).(func(context.Context, *awi.ListAppConnectionsRequest) *awi.ListAppConnectionsResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*awi.ListAppConnectionsResponse)
		}
	}

	if rf, ok := ret.Get(1).(func(context.Context, *awi.ListAppConnectionsRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AppConnectionControllerServer_ListConnectedApps_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'ListConnectedApps'
type AppConnectionControllerServer_ListConnectedApps_Call struct {
	*mock.Call
}

// ListConnectedApps is a helper method to define mock.On call
//   - _a0 context.Context
//   - _a1 *awi.ListAppConnectionsRequest
func (_e *AppConnectionControllerServer_Expecter) ListConnectedApps(_a0 interface{}, _a1 interface{}) *AppConnectionControllerServer_ListConnectedApps_Call {
	return &AppConnectionControllerServer_ListConnectedApps_Call{Call: _e.mock.On("ListConnectedApps", _a0, _a1)}
}

func (_c *AppConnectionControllerServer_ListConnectedApps_Call) Run(run func(_a0 context.Context, _a1 *awi.ListAppConnectionsRequest)) *AppConnectionControllerServer_ListConnectedApps_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(*awi.ListAppConnectionsRequest))
	})
	return _c
}

func (_c *AppConnectionControllerServer_ListConnectedApps_Call) Return(_a0 *awi.ListAppConnectionsResponse, _a1 error) *AppConnectionControllerServer_ListConnectedApps_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *AppConnectionControllerServer_ListConnectedApps_Call) RunAndReturn(run func(context.Context, *awi.ListAppConnectionsRequest) (*awi.ListAppConnectionsResponse, error)) *AppConnectionControllerServer_ListConnectedApps_Call {
	_c.Call.Return(run)
	return _c
}

// mustEmbedUnimplementedAppConnectionControllerServer provides a mock function with given fields:
func (_m *AppConnectionControllerServer) mustEmbedUnimplementedAppConnectionControllerServer() {
	_m.Called()
}

// AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'mustEmbedUnimplementedAppConnectionControllerServer'
type AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call struct {
	*mock.Call
}

// mustEmbedUnimplementedAppConnectionControllerServer is a helper method to define mock.On call
func (_e *AppConnectionControllerServer_Expecter) mustEmbedUnimplementedAppConnectionControllerServer() *AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call {
	return &AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call{Call: _e.mock.On("mustEmbedUnimplementedAppConnectionControllerServer")}
}

func (_c *AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call) Run(run func()) *AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call) Return() *AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call {
	_c.Call.Return()
	return _c
}

func (_c *AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call) RunAndReturn(run func()) *AppConnectionControllerServer_mustEmbedUnimplementedAppConnectionControllerServer_Call {
	_c.Call.Return(run)
	return _c
}

// NewAppConnectionControllerServer creates a new instance of AppConnectionControllerServer. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewAppConnectionControllerServer(t interface {
	mock.TestingT
	Cleanup(func())
}) *AppConnectionControllerServer {
	mock := &AppConnectionControllerServer{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
