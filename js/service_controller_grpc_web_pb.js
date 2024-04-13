/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: service_controller.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var network_domain_connection_pb = require('./network_domain_connection_pb.js')
const proto = require('./service_controller_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ConnectionControllerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ConnectionControllerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ConnectionRequest,
 *   !proto.ConnectionResponse>}
 */
const methodDescriptor_ConnectionController_Connect = new grpc.web.MethodDescriptor(
  '/ConnectionController/Connect',
  grpc.web.MethodType.UNARY,
  network_domain_connection_pb.ConnectionRequest,
  network_domain_connection_pb.ConnectionResponse,
  /**
   * @param {!proto.ConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  network_domain_connection_pb.ConnectionResponse.deserializeBinary
);


/**
 * @param {!proto.ConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ConnectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ConnectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ConnectionControllerClient.prototype.connect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ConnectionController/Connect',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_Connect,
      callback);
};


/**
 * @param {!proto.ConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ConnectionResponse>}
 *     Promise that resolves to the response
 */
proto.ConnectionControllerPromiseClient.prototype.connect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ConnectionController/Connect',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_Connect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DisconnectRequest,
 *   !proto.DisconnectResponse>}
 */
const methodDescriptor_ConnectionController_Disconnect = new grpc.web.MethodDescriptor(
  '/ConnectionController/Disconnect',
  grpc.web.MethodType.UNARY,
  network_domain_connection_pb.DisconnectRequest,
  network_domain_connection_pb.DisconnectResponse,
  /**
   * @param {!proto.DisconnectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  network_domain_connection_pb.DisconnectResponse.deserializeBinary
);


/**
 * @param {!proto.DisconnectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.DisconnectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DisconnectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ConnectionControllerClient.prototype.disconnect =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ConnectionController/Disconnect',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_Disconnect,
      callback);
};


/**
 * @param {!proto.DisconnectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DisconnectResponse>}
 *     Promise that resolves to the response
 */
proto.ConnectionControllerPromiseClient.prototype.disconnect =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ConnectionController/Disconnect',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_Disconnect);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetConnectionRequest,
 *   !proto.ConnectionResponse>}
 */
const methodDescriptor_ConnectionController_GetConnection = new grpc.web.MethodDescriptor(
  '/ConnectionController/GetConnection',
  grpc.web.MethodType.UNARY,
  network_domain_connection_pb.GetConnectionRequest,
  network_domain_connection_pb.ConnectionResponse,
  /**
   * @param {!proto.GetConnectionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  network_domain_connection_pb.ConnectionResponse.deserializeBinary
);


/**
 * @param {!proto.GetConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ConnectionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ConnectionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ConnectionControllerClient.prototype.getConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ConnectionController/GetConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_GetConnection,
      callback);
};


/**
 * @param {!proto.GetConnectionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ConnectionResponse>}
 *     Promise that resolves to the response
 */
proto.ConnectionControllerPromiseClient.prototype.getConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ConnectionController/GetConnection',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_GetConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListConnectionsRequest,
 *   !proto.ListConnectionsResponse>}
 */
const methodDescriptor_ConnectionController_ListConnections = new grpc.web.MethodDescriptor(
  '/ConnectionController/ListConnections',
  grpc.web.MethodType.UNARY,
  network_domain_connection_pb.ListConnectionsRequest,
  network_domain_connection_pb.ListConnectionsResponse,
  /**
   * @param {!proto.ListConnectionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  network_domain_connection_pb.ListConnectionsResponse.deserializeBinary
);


/**
 * @param {!proto.ListConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ListConnectionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListConnectionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ConnectionControllerClient.prototype.listConnections =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ConnectionController/ListConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_ListConnections,
      callback);
};


/**
 * @param {!proto.ListConnectionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListConnectionsResponse>}
 *     Promise that resolves to the response
 */
proto.ConnectionControllerPromiseClient.prototype.listConnections =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ConnectionController/ListConnections',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_ListConnections);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ConnectionStatusRequest,
 *   !proto.ConnectionStatusResponse>}
 */
const methodDescriptor_ConnectionController_GetConnectionStatus = new grpc.web.MethodDescriptor(
  '/ConnectionController/GetConnectionStatus',
  grpc.web.MethodType.UNARY,
  network_domain_connection_pb.ConnectionStatusRequest,
  network_domain_connection_pb.ConnectionStatusResponse,
  /**
   * @param {!proto.ConnectionStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  network_domain_connection_pb.ConnectionStatusResponse.deserializeBinary
);


/**
 * @param {!proto.ConnectionStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ConnectionStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ConnectionStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ConnectionControllerClient.prototype.getConnectionStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ConnectionController/GetConnectionStatus',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_GetConnectionStatus,
      callback);
};


/**
 * @param {!proto.ConnectionStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ConnectionStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ConnectionControllerPromiseClient.prototype.getConnectionStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ConnectionController/GetConnectionStatus',
      request,
      metadata || {},
      methodDescriptor_ConnectionController_GetConnectionStatus);
};


module.exports = proto;

