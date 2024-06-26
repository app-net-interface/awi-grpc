/**
 * Copyright (c) 2023 Cisco Systems, Inc. and its affiliates
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http:www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// source: app_connection.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
var cloud_request_pb = require('./cloud_request_pb.js');
goog.object.extend(proto, cloud_request_pb);
goog.exportSymbol('proto.AccessPolicySelector', null, global);
goog.exportSymbol('proto.AccessPolicySelector.MatchId', null, global);
goog.exportSymbol('proto.AccessPolicySelector.MatchName', null, global);
goog.exportSymbol('proto.AccessPolicySelector.Selector', null, global);
goog.exportSymbol('proto.AccessType', null, global);
goog.exportSymbol('proto.AppConnection', null, global);
goog.exportSymbol('proto.AppConnectionEvents', null, global);
goog.exportSymbol('proto.AppConnectionEventsResponse', null, global);
goog.exportSymbol('proto.AppConnectionInformation', null, global);
goog.exportSymbol('proto.AppConnectionPolicy', null, global);
goog.exportSymbol('proto.AppConnectionResponse', null, global);
goog.exportSymbol('proto.AppConnectionResponse.meta', null, global);
goog.exportSymbol('proto.AppConnectionStatistics', null, global);
goog.exportSymbol('proto.AppConnectionStatisticsResponse', null, global);
goog.exportSymbol('proto.AppConnectionStatusResponse', null, global);
goog.exportSymbol('proto.AppDisconnectionRequest', null, global);
goog.exportSymbol('proto.AppDisconnectionResponse', null, global);
goog.exportSymbol('proto.AppMetadata', null, global);
goog.exportSymbol('proto.AppSubnet', null, global);
goog.exportSymbol('proto.AppSubnet.Selector', null, global);
goog.exportSymbol('proto.Cluster', null, global);
goog.exportSymbol('proto.Cluster.Selector', null, global);
goog.exportSymbol('proto.Controller', null, global);
goog.exportSymbol('proto.CreateAppConnectionPolicyRequest', null, global);
goog.exportSymbol('proto.CreateAppConnectionPolicyResponse', null, global);
goog.exportSymbol('proto.DeleteAppConnectionPolicyRequest', null, global);
goog.exportSymbol('proto.DeleteAppConnectionPolicyResponse', null, global);
goog.exportSymbol('proto.Endpoint', null, global);
goog.exportSymbol('proto.Endpoint.Selector', null, global);
goog.exportSymbol('proto.From', null, global);
goog.exportSymbol('proto.GetAppConnectionEventsRequest', null, global);
goog.exportSymbol('proto.GetAppConnectionPolicyRequest', null, global);
goog.exportSymbol('proto.GetAppConnectionPolicyResponse', null, global);
goog.exportSymbol('proto.GetAppConnectionRequest', null, global);
goog.exportSymbol('proto.GetAppConnectionResponse', null, global);
goog.exportSymbol('proto.GetAppConnectionStatisticsRequest', null, global);
goog.exportSymbol('proto.GetAppConnectionStatusRequest', null, global);
goog.exportSymbol('proto.GetMatchedResourcesResponse', null, global);
goog.exportSymbol('proto.Kind', null, global);
goog.exportSymbol('proto.ListAppConnectionPoliciesRequest', null, global);
goog.exportSymbol('proto.ListAppConnectionPoliciesResponse', null, global);
goog.exportSymbol('proto.ListAppConnectionsRequest', null, global);
goog.exportSymbol('proto.ListAppConnectionsResponse', null, global);
goog.exportSymbol('proto.MatchCluster', null, global);
goog.exportSymbol('proto.MatchExpression', null, global);
goog.exportSymbol('proto.MatchHost', null, global);
goog.exportSymbol('proto.MatchId', null, global);
goog.exportSymbol('proto.MatchName', null, global);
goog.exportSymbol('proto.MatchNamespace', null, global);
goog.exportSymbol('proto.MatchOwner', null, global);
goog.exportSymbol('proto.MatchedResources', null, global);
goog.exportSymbol('proto.Namespace', null, global);
goog.exportSymbol('proto.Namespace.Selector', null, global);
goog.exportSymbol('proto.NetworkAccessControl', null, global);
goog.exportSymbol('proto.NetworkDomain', null, global);
goog.exportSymbol('proto.NetworkDomain.Selector', null, global);
goog.exportSymbol('proto.NetworkDomainConnection', null, global);
goog.exportSymbol('proto.NetworkDomainConnection.Selector', null, global);
goog.exportSymbol('proto.NetworkPolicy', null, global);
goog.exportSymbol('proto.NetworkPolicy.Selector', null, global);
goog.exportSymbol('proto.NetworkPolicySelector', null, global);
goog.exportSymbol('proto.NetworkPolicySelector.Selector', null, global);
goog.exportSymbol('proto.SGT', null, global);
goog.exportSymbol('proto.Service', null, global);
goog.exportSymbol('proto.Service.Selector', null, global);
goog.exportSymbol('proto.ServiceKind', null, global);
goog.exportSymbol('proto.ServiceKind.K8SService', null, global);
goog.exportSymbol('proto.ServiceKind.VMService', null, global);
goog.exportSymbol('proto.To', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnection.displayName = 'proto.AppConnection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppMetadata.displayName = 'proto.AppMetadata';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.From = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.From, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.From.displayName = 'proto.From';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.To = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.To.repeatedFields_, null);
};
goog.inherits(proto.To, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.To.displayName = 'proto.To';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchName.displayName = 'proto.MatchName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchNamespace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchNamespace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchNamespace.displayName = 'proto.MatchNamespace';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchCluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchCluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchCluster.displayName = 'proto.MatchCluster';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchId.displayName = 'proto.MatchId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchOwner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchOwner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchOwner.displayName = 'proto.MatchOwner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchHost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MatchHost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchHost.displayName = 'proto.MatchHost';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Endpoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Endpoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Endpoint.displayName = 'proto.Endpoint';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Endpoint.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Endpoint.Selector.repeatedFields_, null);
};
goog.inherits(proto.Endpoint.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Endpoint.Selector.displayName = 'proto.Endpoint.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchExpression = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MatchExpression.repeatedFields_, null);
};
goog.inherits(proto.MatchExpression, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchExpression.displayName = 'proto.MatchExpression';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppSubnet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppSubnet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppSubnet.displayName = 'proto.AppSubnet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppSubnet.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.AppSubnet.Selector.repeatedFields_, null);
};
goog.inherits(proto.AppSubnet.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppSubnet.Selector.displayName = 'proto.AppSubnet.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Namespace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Namespace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Namespace.displayName = 'proto.Namespace';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Namespace.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Namespace.Selector.repeatedFields_, null);
};
goog.inherits(proto.Namespace.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Namespace.Selector.displayName = 'proto.Namespace.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SGT = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SGT, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SGT.displayName = 'proto.SGT';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ServiceKind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ServiceKind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ServiceKind.displayName = 'proto.ServiceKind';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ServiceKind.K8SService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ServiceKind.K8SService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ServiceKind.K8SService.displayName = 'proto.ServiceKind.K8SService';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ServiceKind.VMService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ServiceKind.VMService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ServiceKind.VMService.displayName = 'proto.ServiceKind.VMService';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Service = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Service, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Service.displayName = 'proto.Service';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Service.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Service.Selector.repeatedFields_, null);
};
goog.inherits(proto.Service.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Service.Selector.displayName = 'proto.Service.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Cluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Cluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Cluster.displayName = 'proto.Cluster';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Cluster.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Cluster.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Cluster.Selector.displayName = 'proto.Cluster.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkDomain = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkDomain, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkDomain.displayName = 'proto.NetworkDomain';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkDomain.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkDomain.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkDomain.Selector.displayName = 'proto.NetworkDomain.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AccessPolicySelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AccessPolicySelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AccessPolicySelector.displayName = 'proto.AccessPolicySelector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AccessPolicySelector.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AccessPolicySelector.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AccessPolicySelector.Selector.displayName = 'proto.AccessPolicySelector.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AccessPolicySelector.MatchName = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AccessPolicySelector.MatchName, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AccessPolicySelector.MatchName.displayName = 'proto.AccessPolicySelector.MatchName';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AccessPolicySelector.MatchId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AccessPolicySelector.MatchId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AccessPolicySelector.MatchId.displayName = 'proto.AccessPolicySelector.MatchId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkPolicySelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkPolicySelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkPolicySelector.displayName = 'proto.NetworkPolicySelector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkPolicySelector.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkPolicySelector.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkPolicySelector.Selector.displayName = 'proto.NetworkPolicySelector.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkAccessControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkAccessControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkAccessControl.displayName = 'proto.NetworkAccessControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkDomainConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkDomainConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkDomainConnection.displayName = 'proto.NetworkDomainConnection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkDomainConnection.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkDomainConnection.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkDomainConnection.Selector.displayName = 'proto.NetworkDomainConnection.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkPolicy.displayName = 'proto.NetworkPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetworkPolicy.Selector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetworkPolicy.Selector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetworkPolicy.Selector.displayName = 'proto.NetworkPolicy.Selector';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionResponse.displayName = 'proto.AppConnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionResponse.meta = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionResponse.meta, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionResponse.meta.displayName = 'proto.AppConnectionResponse.meta';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAppConnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAppConnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAppConnectionResponse.displayName = 'proto.GetAppConnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppDisconnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppDisconnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppDisconnectionRequest.displayName = 'proto.AppDisconnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppDisconnectionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppDisconnectionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppDisconnectionResponse.displayName = 'proto.AppDisconnectionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionStatusResponse.displayName = 'proto.AppConnectionStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionStatistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionStatistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionStatistics.displayName = 'proto.AppConnectionStatistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionStatisticsResponse.displayName = 'proto.AppConnectionStatisticsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionEvents = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionEvents, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionEvents.displayName = 'proto.AppConnectionEvents';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionEventsResponse.displayName = 'proto.AppConnectionEventsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAppConnectionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAppConnectionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAppConnectionRequest.displayName = 'proto.GetAppConnectionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAppConnectionStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAppConnectionStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAppConnectionStatusRequest.displayName = 'proto.GetAppConnectionStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAppConnectionStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAppConnectionStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAppConnectionStatisticsRequest.displayName = 'proto.GetAppConnectionStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAppConnectionEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAppConnectionEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAppConnectionEventsRequest.displayName = 'proto.GetAppConnectionEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListAppConnectionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListAppConnectionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListAppConnectionsRequest.displayName = 'proto.ListAppConnectionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListAppConnectionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListAppConnectionsResponse.repeatedFields_, null);
};
goog.inherits(proto.ListAppConnectionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListAppConnectionsResponse.displayName = 'proto.ListAppConnectionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MatchedResources = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.MatchedResources.repeatedFields_, null);
};
goog.inherits(proto.MatchedResources, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MatchedResources.displayName = 'proto.MatchedResources';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionInformation.displayName = 'proto.AppConnectionInformation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetMatchedResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetMatchedResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetMatchedResourcesResponse.displayName = 'proto.GetMatchedResourcesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AppConnectionPolicy = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AppConnectionPolicy, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AppConnectionPolicy.displayName = 'proto.AppConnectionPolicy';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateAppConnectionPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateAppConnectionPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreateAppConnectionPolicyRequest.displayName = 'proto.CreateAppConnectionPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateAppConnectionPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateAppConnectionPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreateAppConnectionPolicyResponse.displayName = 'proto.CreateAppConnectionPolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAppConnectionPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAppConnectionPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAppConnectionPolicyRequest.displayName = 'proto.GetAppConnectionPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetAppConnectionPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetAppConnectionPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetAppConnectionPolicyResponse.displayName = 'proto.GetAppConnectionPolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteAppConnectionPolicyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteAppConnectionPolicyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeleteAppConnectionPolicyRequest.displayName = 'proto.DeleteAppConnectionPolicyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteAppConnectionPolicyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteAppConnectionPolicyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeleteAppConnectionPolicyResponse.displayName = 'proto.DeleteAppConnectionPolicyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListAppConnectionPoliciesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ListAppConnectionPoliciesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListAppConnectionPoliciesRequest.displayName = 'proto.ListAppConnectionPoliciesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ListAppConnectionPoliciesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ListAppConnectionPoliciesResponse.repeatedFields_, null);
};
goog.inherits(proto.ListAppConnectionPoliciesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ListAppConnectionPoliciesResponse.displayName = 'proto.ListAppConnectionPoliciesResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
    controller: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metadata: (f = msg.getMetadata()) && proto.AppMetadata.toObject(includeInstance, f),
    from: (f = msg.getFrom()) && proto.From.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.To.toObject(includeInstance, f),
    accesspolicy: (f = msg.getAccesspolicy()) && proto.AccessPolicySelector.toObject(includeInstance, f),
    networkdomainconnection: (f = msg.getNetworkdomainconnection()) && proto.NetworkDomainConnection.toObject(includeInstance, f),
    networkpolicy: (f = msg.getNetworkpolicy()) && proto.NetworkPolicySelector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnection}
 */
proto.AppConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnection;
  return proto.AppConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnection}
 */
proto.AppConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setController(value);
      break;
    case 2:
      var value = new proto.AppMetadata;
      reader.readMessage(value,proto.AppMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 3:
      var value = new proto.From;
      reader.readMessage(value,proto.From.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 4:
      var value = new proto.To;
      reader.readMessage(value,proto.To.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 5:
      var value = new proto.AccessPolicySelector;
      reader.readMessage(value,proto.AccessPolicySelector.deserializeBinaryFromReader);
      msg.setAccesspolicy(value);
      break;
    case 6:
      var value = new proto.NetworkDomainConnection;
      reader.readMessage(value,proto.NetworkDomainConnection.deserializeBinaryFromReader);
      msg.setNetworkdomainconnection(value);
      break;
    case 7:
      var value = new proto.NetworkPolicySelector;
      reader.readMessage(value,proto.NetworkPolicySelector.deserializeBinaryFromReader);
      msg.setNetworkpolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getController();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AppMetadata.serializeBinaryToWriter
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.From.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.To.serializeBinaryToWriter
    );
  }
  f = message.getAccesspolicy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.AccessPolicySelector.serializeBinaryToWriter
    );
  }
  f = message.getNetworkdomainconnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.NetworkDomainConnection.serializeBinaryToWriter
    );
  }
  f = message.getNetworkpolicy();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.NetworkPolicySelector.serializeBinaryToWriter
    );
  }
};


/**
 * optional string controller = 1;
 * @return {string}
 */
proto.AppConnection.prototype.getController = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnection} returns this
 */
proto.AppConnection.prototype.setController = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppMetadata metadata = 2;
 * @return {?proto.AppMetadata}
 */
proto.AppConnection.prototype.getMetadata = function() {
  return /** @type{?proto.AppMetadata} */ (
    jspb.Message.getWrapperField(this, proto.AppMetadata, 2));
};


/**
 * @param {?proto.AppMetadata|undefined} value
 * @return {!proto.AppConnection} returns this
*/
proto.AppConnection.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnection} returns this
 */
proto.AppConnection.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnection.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional From from = 3;
 * @return {?proto.From}
 */
proto.AppConnection.prototype.getFrom = function() {
  return /** @type{?proto.From} */ (
    jspb.Message.getWrapperField(this, proto.From, 3));
};


/**
 * @param {?proto.From|undefined} value
 * @return {!proto.AppConnection} returns this
*/
proto.AppConnection.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnection} returns this
 */
proto.AppConnection.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnection.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional To to = 4;
 * @return {?proto.To}
 */
proto.AppConnection.prototype.getTo = function() {
  return /** @type{?proto.To} */ (
    jspb.Message.getWrapperField(this, proto.To, 4));
};


/**
 * @param {?proto.To|undefined} value
 * @return {!proto.AppConnection} returns this
*/
proto.AppConnection.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnection} returns this
 */
proto.AppConnection.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnection.prototype.hasTo = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AccessPolicySelector accessPolicy = 5;
 * @return {?proto.AccessPolicySelector}
 */
proto.AppConnection.prototype.getAccesspolicy = function() {
  return /** @type{?proto.AccessPolicySelector} */ (
    jspb.Message.getWrapperField(this, proto.AccessPolicySelector, 5));
};


/**
 * @param {?proto.AccessPolicySelector|undefined} value
 * @return {!proto.AppConnection} returns this
*/
proto.AppConnection.prototype.setAccesspolicy = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnection} returns this
 */
proto.AppConnection.prototype.clearAccesspolicy = function() {
  return this.setAccesspolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnection.prototype.hasAccesspolicy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NetworkDomainConnection networkDomainConnection = 6;
 * @return {?proto.NetworkDomainConnection}
 */
proto.AppConnection.prototype.getNetworkdomainconnection = function() {
  return /** @type{?proto.NetworkDomainConnection} */ (
    jspb.Message.getWrapperField(this, proto.NetworkDomainConnection, 6));
};


/**
 * @param {?proto.NetworkDomainConnection|undefined} value
 * @return {!proto.AppConnection} returns this
*/
proto.AppConnection.prototype.setNetworkdomainconnection = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnection} returns this
 */
proto.AppConnection.prototype.clearNetworkdomainconnection = function() {
  return this.setNetworkdomainconnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnection.prototype.hasNetworkdomainconnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional NetworkPolicySelector networkPolicy = 7;
 * @return {?proto.NetworkPolicySelector}
 */
proto.AppConnection.prototype.getNetworkpolicy = function() {
  return /** @type{?proto.NetworkPolicySelector} */ (
    jspb.Message.getWrapperField(this, proto.NetworkPolicySelector, 7));
};


/**
 * @param {?proto.NetworkPolicySelector|undefined} value
 * @return {!proto.AppConnection} returns this
*/
proto.AppConnection.prototype.setNetworkpolicy = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnection} returns this
 */
proto.AppConnection.prototype.clearNetworkpolicy = function() {
  return this.setNetworkpolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnection.prototype.hasNetworkpolicy = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.AppMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelMap: (f = msg.getLabelMap()) ? f.toObject(includeInstance, undefined) : [],
    creationtimestamp: jspb.Message.getFieldWithDefault(msg, 4, ""),
    modificationtimestamp: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppMetadata}
 */
proto.AppMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppMetadata;
  return proto.AppMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppMetadata}
 */
proto.AppMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = msg.getLabelMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreationtimestamp(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setModificationtimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCreationtimestamp();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getModificationtimestamp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.AppMetadata.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppMetadata} returns this
 */
proto.AppMetadata.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.AppMetadata.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppMetadata} returns this
 */
proto.AppMetadata.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> label = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.AppMetadata.prototype.getLabelMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.AppMetadata} returns this
 */
proto.AppMetadata.prototype.clearLabelMap = function() {
  this.getLabelMap().clear();
  return this;
};


/**
 * optional string creationTimestamp = 4;
 * @return {string}
 */
proto.AppMetadata.prototype.getCreationtimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppMetadata} returns this
 */
proto.AppMetadata.prototype.setCreationtimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string modificationTimestamp = 5;
 * @return {string}
 */
proto.AppMetadata.prototype.getModificationtimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppMetadata} returns this
 */
proto.AppMetadata.prototype.setModificationtimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.From.prototype.toObject = function(opt_includeInstance) {
  return proto.From.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.From} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.From.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpoint: (f = msg.getEndpoint()) && proto.Endpoint.toObject(includeInstance, f),
    subnet: (f = msg.getSubnet()) && proto.AppSubnet.toObject(includeInstance, f),
    namespace: (f = msg.getNamespace()) && proto.Namespace.toObject(includeInstance, f),
    sgt: (f = msg.getSgt()) && proto.SGT.toObject(includeInstance, f),
    cluster: (f = msg.getCluster()) && proto.Cluster.toObject(includeInstance, f),
    networkdomain: (f = msg.getNetworkdomain()) && proto.NetworkDomain.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.From}
 */
proto.From.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.From;
  return proto.From.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.From} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.From}
 */
proto.From.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Endpoint;
      reader.readMessage(value,proto.Endpoint.deserializeBinaryFromReader);
      msg.setEndpoint(value);
      break;
    case 2:
      var value = new proto.AppSubnet;
      reader.readMessage(value,proto.AppSubnet.deserializeBinaryFromReader);
      msg.setSubnet(value);
      break;
    case 3:
      var value = new proto.Namespace;
      reader.readMessage(value,proto.Namespace.deserializeBinaryFromReader);
      msg.setNamespace(value);
      break;
    case 4:
      var value = new proto.SGT;
      reader.readMessage(value,proto.SGT.deserializeBinaryFromReader);
      msg.setSgt(value);
      break;
    case 5:
      var value = new proto.Cluster;
      reader.readMessage(value,proto.Cluster.deserializeBinaryFromReader);
      msg.setCluster(value);
      break;
    case 6:
      var value = new proto.NetworkDomain;
      reader.readMessage(value,proto.NetworkDomain.deserializeBinaryFromReader);
      msg.setNetworkdomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.From.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.From.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.From} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.From.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getSubnet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AppSubnet.serializeBinaryToWriter
    );
  }
  f = message.getNamespace();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Namespace.serializeBinaryToWriter
    );
  }
  f = message.getSgt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.SGT.serializeBinaryToWriter
    );
  }
  f = message.getCluster();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.Cluster.serializeBinaryToWriter
    );
  }
  f = message.getNetworkdomain();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.NetworkDomain.serializeBinaryToWriter
    );
  }
};


/**
 * optional Endpoint endpoint = 1;
 * @return {?proto.Endpoint}
 */
proto.From.prototype.getEndpoint = function() {
  return /** @type{?proto.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.Endpoint, 1));
};


/**
 * @param {?proto.Endpoint|undefined} value
 * @return {!proto.From} returns this
*/
proto.From.prototype.setEndpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.From} returns this
 */
proto.From.prototype.clearEndpoint = function() {
  return this.setEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.From.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AppSubnet subnet = 2;
 * @return {?proto.AppSubnet}
 */
proto.From.prototype.getSubnet = function() {
  return /** @type{?proto.AppSubnet} */ (
    jspb.Message.getWrapperField(this, proto.AppSubnet, 2));
};


/**
 * @param {?proto.AppSubnet|undefined} value
 * @return {!proto.From} returns this
*/
proto.From.prototype.setSubnet = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.From} returns this
 */
proto.From.prototype.clearSubnet = function() {
  return this.setSubnet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.From.prototype.hasSubnet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Namespace namespace = 3;
 * @return {?proto.Namespace}
 */
proto.From.prototype.getNamespace = function() {
  return /** @type{?proto.Namespace} */ (
    jspb.Message.getWrapperField(this, proto.Namespace, 3));
};


/**
 * @param {?proto.Namespace|undefined} value
 * @return {!proto.From} returns this
*/
proto.From.prototype.setNamespace = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.From} returns this
 */
proto.From.prototype.clearNamespace = function() {
  return this.setNamespace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.From.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SGT SGT = 4;
 * @return {?proto.SGT}
 */
proto.From.prototype.getSgt = function() {
  return /** @type{?proto.SGT} */ (
    jspb.Message.getWrapperField(this, proto.SGT, 4));
};


/**
 * @param {?proto.SGT|undefined} value
 * @return {!proto.From} returns this
*/
proto.From.prototype.setSgt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.From} returns this
 */
proto.From.prototype.clearSgt = function() {
  return this.setSgt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.From.prototype.hasSgt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Cluster cluster = 5;
 * @return {?proto.Cluster}
 */
proto.From.prototype.getCluster = function() {
  return /** @type{?proto.Cluster} */ (
    jspb.Message.getWrapperField(this, proto.Cluster, 5));
};


/**
 * @param {?proto.Cluster|undefined} value
 * @return {!proto.From} returns this
*/
proto.From.prototype.setCluster = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.From} returns this
 */
proto.From.prototype.clearCluster = function() {
  return this.setCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.From.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional NetworkDomain networkDomain = 6;
 * @return {?proto.NetworkDomain}
 */
proto.From.prototype.getNetworkdomain = function() {
  return /** @type{?proto.NetworkDomain} */ (
    jspb.Message.getWrapperField(this, proto.NetworkDomain, 6));
};


/**
 * @param {?proto.NetworkDomain|undefined} value
 * @return {!proto.From} returns this
*/
proto.From.prototype.setNetworkdomain = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.From} returns this
 */
proto.From.prototype.clearNetworkdomain = function() {
  return this.setNetworkdomain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.From.prototype.hasNetworkdomain = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.To.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.To.prototype.toObject = function(opt_includeInstance) {
  return proto.To.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.To} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.To.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpoint: (f = msg.getEndpoint()) && proto.Endpoint.toObject(includeInstance, f),
    subnet: (f = msg.getSubnet()) && proto.AppSubnet.toObject(includeInstance, f),
    namespace: (f = msg.getNamespace()) && proto.Namespace.toObject(includeInstance, f),
    service: (f = msg.getService()) && proto.Service.toObject(includeInstance, f),
    externalentitiesList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    cluster: (f = msg.getCluster()) && proto.Cluster.toObject(includeInstance, f),
    networkdomain: (f = msg.getNetworkdomain()) && proto.NetworkDomain.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.To}
 */
proto.To.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.To;
  return proto.To.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.To} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.To}
 */
proto.To.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Endpoint;
      reader.readMessage(value,proto.Endpoint.deserializeBinaryFromReader);
      msg.setEndpoint(value);
      break;
    case 2:
      var value = new proto.AppSubnet;
      reader.readMessage(value,proto.AppSubnet.deserializeBinaryFromReader);
      msg.setSubnet(value);
      break;
    case 3:
      var value = new proto.Namespace;
      reader.readMessage(value,proto.Namespace.deserializeBinaryFromReader);
      msg.setNamespace(value);
      break;
    case 4:
      var value = new proto.Service;
      reader.readMessage(value,proto.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addExternalentities(value);
      break;
    case 6:
      var value = new proto.Cluster;
      reader.readMessage(value,proto.Cluster.deserializeBinaryFromReader);
      msg.setCluster(value);
      break;
    case 7:
      var value = new proto.NetworkDomain;
      reader.readMessage(value,proto.NetworkDomain.deserializeBinaryFromReader);
      msg.setNetworkdomain(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.To.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.To.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.To} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.To.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndpoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getSubnet();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AppSubnet.serializeBinaryToWriter
    );
  }
  f = message.getNamespace();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.Namespace.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Service.serializeBinaryToWriter
    );
  }
  f = message.getExternalentitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getCluster();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Cluster.serializeBinaryToWriter
    );
  }
  f = message.getNetworkdomain();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.NetworkDomain.serializeBinaryToWriter
    );
  }
};


/**
 * optional Endpoint endpoint = 1;
 * @return {?proto.Endpoint}
 */
proto.To.prototype.getEndpoint = function() {
  return /** @type{?proto.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto.Endpoint, 1));
};


/**
 * @param {?proto.Endpoint|undefined} value
 * @return {!proto.To} returns this
*/
proto.To.prototype.setEndpoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.To} returns this
 */
proto.To.prototype.clearEndpoint = function() {
  return this.setEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.To.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AppSubnet subnet = 2;
 * @return {?proto.AppSubnet}
 */
proto.To.prototype.getSubnet = function() {
  return /** @type{?proto.AppSubnet} */ (
    jspb.Message.getWrapperField(this, proto.AppSubnet, 2));
};


/**
 * @param {?proto.AppSubnet|undefined} value
 * @return {!proto.To} returns this
*/
proto.To.prototype.setSubnet = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.To} returns this
 */
proto.To.prototype.clearSubnet = function() {
  return this.setSubnet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.To.prototype.hasSubnet = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Namespace namespace = 3;
 * @return {?proto.Namespace}
 */
proto.To.prototype.getNamespace = function() {
  return /** @type{?proto.Namespace} */ (
    jspb.Message.getWrapperField(this, proto.Namespace, 3));
};


/**
 * @param {?proto.Namespace|undefined} value
 * @return {!proto.To} returns this
*/
proto.To.prototype.setNamespace = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.To} returns this
 */
proto.To.prototype.clearNamespace = function() {
  return this.setNamespace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.To.prototype.hasNamespace = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Service service = 4;
 * @return {?proto.Service}
 */
proto.To.prototype.getService = function() {
  return /** @type{?proto.Service} */ (
    jspb.Message.getWrapperField(this, proto.Service, 4));
};


/**
 * @param {?proto.Service|undefined} value
 * @return {!proto.To} returns this
*/
proto.To.prototype.setService = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.To} returns this
 */
proto.To.prototype.clearService = function() {
  return this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.To.prototype.hasService = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated string externalEntities = 5;
 * @return {!Array<string>}
 */
proto.To.prototype.getExternalentitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.To} returns this
 */
proto.To.prototype.setExternalentitiesList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.To} returns this
 */
proto.To.prototype.addExternalentities = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.To} returns this
 */
proto.To.prototype.clearExternalentitiesList = function() {
  return this.setExternalentitiesList([]);
};


/**
 * optional Cluster cluster = 6;
 * @return {?proto.Cluster}
 */
proto.To.prototype.getCluster = function() {
  return /** @type{?proto.Cluster} */ (
    jspb.Message.getWrapperField(this, proto.Cluster, 6));
};


/**
 * @param {?proto.Cluster|undefined} value
 * @return {!proto.To} returns this
*/
proto.To.prototype.setCluster = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.To} returns this
 */
proto.To.prototype.clearCluster = function() {
  return this.setCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.To.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional NetworkDomain networkDomain = 7;
 * @return {?proto.NetworkDomain}
 */
proto.To.prototype.getNetworkdomain = function() {
  return /** @type{?proto.NetworkDomain} */ (
    jspb.Message.getWrapperField(this, proto.NetworkDomain, 7));
};


/**
 * @param {?proto.NetworkDomain|undefined} value
 * @return {!proto.To} returns this
*/
proto.To.prototype.setNetworkdomain = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.To} returns this
 */
proto.To.prototype.clearNetworkdomain = function() {
  return this.setNetworkdomain(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.To.prototype.hasNetworkdomain = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchName.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchName.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchName}
 */
proto.MatchName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchName;
  return proto.MatchName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchName}
 */
proto.MatchName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.MatchName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchName} returns this
 */
proto.MatchName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchNamespace.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchNamespace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchNamespace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchNamespace.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchNamespace}
 */
proto.MatchNamespace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchNamespace;
  return proto.MatchNamespace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchNamespace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchNamespace}
 */
proto.MatchNamespace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchNamespace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchNamespace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchNamespace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchNamespace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.MatchNamespace.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchNamespace} returns this
 */
proto.MatchNamespace.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchCluster.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchCluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchCluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchCluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchCluster}
 */
proto.MatchCluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchCluster;
  return proto.MatchCluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchCluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchCluster}
 */
proto.MatchCluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchCluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchCluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchCluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchCluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.MatchCluster.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchCluster} returns this
 */
proto.MatchCluster.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchId.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchId}
 */
proto.MatchId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchId;
  return proto.MatchId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchId}
 */
proto.MatchId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.MatchId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchId} returns this
 */
proto.MatchId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchOwner.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchOwner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchOwner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchOwner.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchOwner}
 */
proto.MatchOwner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchOwner;
  return proto.MatchOwner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchOwner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchOwner}
 */
proto.MatchOwner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchOwner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchOwner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchOwner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchOwner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.MatchOwner.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchOwner} returns this
 */
proto.MatchOwner.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchHost.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchHost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchHost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchHost.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchHost}
 */
proto.MatchHost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchHost;
  return proto.MatchHost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchHost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchHost}
 */
proto.MatchHost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchHost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchHost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchHost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchHost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.MatchHost.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchHost} returns this
 */
proto.MatchHost.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Endpoint.prototype.toObject = function(opt_includeInstance) {
  return proto.Endpoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Endpoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Endpoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selector: (f = msg.getSelector()) && proto.Endpoint.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Endpoint}
 */
proto.Endpoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Endpoint;
  return proto.Endpoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Endpoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Endpoint}
 */
proto.Endpoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = new proto.Endpoint.Selector;
      reader.readMessage(value,proto.Endpoint.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Endpoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Endpoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Endpoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Endpoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Endpoint.Selector.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Endpoint.Selector.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Endpoint.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.Endpoint.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Endpoint.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Endpoint.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    matchexpressionsList: jspb.Message.toObjectList(msg.getMatchexpressionsList(),
    proto.MatchExpression.toObject, includeInstance),
    matchcluster: (f = msg.getMatchcluster()) && proto.MatchCluster.toObject(includeInstance, f),
    matchnamespace: (f = msg.getMatchnamespace()) && proto.MatchNamespace.toObject(includeInstance, f),
    matchname: (f = msg.getMatchname()) && proto.MatchName.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Endpoint.Selector}
 */
proto.Endpoint.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Endpoint.Selector;
  return proto.Endpoint.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Endpoint.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Endpoint.Selector}
 */
proto.Endpoint.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new proto.MatchExpression;
      reader.readMessage(value,proto.MatchExpression.deserializeBinaryFromReader);
      msg.addMatchexpressions(value);
      break;
    case 3:
      var value = new proto.MatchCluster;
      reader.readMessage(value,proto.MatchCluster.deserializeBinaryFromReader);
      msg.setMatchcluster(value);
      break;
    case 4:
      var value = new proto.MatchNamespace;
      reader.readMessage(value,proto.MatchNamespace.deserializeBinaryFromReader);
      msg.setMatchnamespace(value);
      break;
    case 5:
      var value = new proto.MatchName;
      reader.readMessage(value,proto.MatchName.deserializeBinaryFromReader);
      msg.setMatchname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Endpoint.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Endpoint.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Endpoint.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Endpoint.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMatchexpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.MatchExpression.serializeBinaryToWriter
    );
  }
  f = message.getMatchcluster();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MatchCluster.serializeBinaryToWriter
    );
  }
  f = message.getMatchnamespace();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.MatchNamespace.serializeBinaryToWriter
    );
  }
  f = message.getMatchname();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.MatchName.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> matchLabels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.Endpoint.Selector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.Endpoint.Selector} returns this
 */
proto.Endpoint.Selector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};


/**
 * repeated MatchExpression matchExpressions = 2;
 * @return {!Array<!proto.MatchExpression>}
 */
proto.Endpoint.Selector.prototype.getMatchexpressionsList = function() {
  return /** @type{!Array<!proto.MatchExpression>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MatchExpression, 2));
};


/**
 * @param {!Array<!proto.MatchExpression>} value
 * @return {!proto.Endpoint.Selector} returns this
*/
proto.Endpoint.Selector.prototype.setMatchexpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.MatchExpression=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MatchExpression}
 */
proto.Endpoint.Selector.prototype.addMatchexpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.MatchExpression, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Endpoint.Selector} returns this
 */
proto.Endpoint.Selector.prototype.clearMatchexpressionsList = function() {
  return this.setMatchexpressionsList([]);
};


/**
 * optional MatchCluster matchCluster = 3;
 * @return {?proto.MatchCluster}
 */
proto.Endpoint.Selector.prototype.getMatchcluster = function() {
  return /** @type{?proto.MatchCluster} */ (
    jspb.Message.getWrapperField(this, proto.MatchCluster, 3));
};


/**
 * @param {?proto.MatchCluster|undefined} value
 * @return {!proto.Endpoint.Selector} returns this
*/
proto.Endpoint.Selector.prototype.setMatchcluster = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Endpoint.Selector} returns this
 */
proto.Endpoint.Selector.prototype.clearMatchcluster = function() {
  return this.setMatchcluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Endpoint.Selector.prototype.hasMatchcluster = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MatchNamespace matchNamespace = 4;
 * @return {?proto.MatchNamespace}
 */
proto.Endpoint.Selector.prototype.getMatchnamespace = function() {
  return /** @type{?proto.MatchNamespace} */ (
    jspb.Message.getWrapperField(this, proto.MatchNamespace, 4));
};


/**
 * @param {?proto.MatchNamespace|undefined} value
 * @return {!proto.Endpoint.Selector} returns this
*/
proto.Endpoint.Selector.prototype.setMatchnamespace = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Endpoint.Selector} returns this
 */
proto.Endpoint.Selector.prototype.clearMatchnamespace = function() {
  return this.setMatchnamespace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Endpoint.Selector.prototype.hasMatchnamespace = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MatchName matchName = 5;
 * @return {?proto.MatchName}
 */
proto.Endpoint.Selector.prototype.getMatchname = function() {
  return /** @type{?proto.MatchName} */ (
    jspb.Message.getWrapperField(this, proto.MatchName, 5));
};


/**
 * @param {?proto.MatchName|undefined} value
 * @return {!proto.Endpoint.Selector} returns this
*/
proto.Endpoint.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Endpoint.Selector} returns this
 */
proto.Endpoint.Selector.prototype.clearMatchname = function() {
  return this.setMatchname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Endpoint.Selector.prototype.hasMatchname = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string kind = 1;
 * @return {string}
 */
proto.Endpoint.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Endpoint} returns this
 */
proto.Endpoint.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Selector selector = 2;
 * @return {?proto.Endpoint.Selector}
 */
proto.Endpoint.prototype.getSelector = function() {
  return /** @type{?proto.Endpoint.Selector} */ (
    jspb.Message.getWrapperField(this, proto.Endpoint.Selector, 2));
};


/**
 * @param {?proto.Endpoint.Selector|undefined} value
 * @return {!proto.Endpoint} returns this
*/
proto.Endpoint.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Endpoint} returns this
 */
proto.Endpoint.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Endpoint.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MatchExpression.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchExpression.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchExpression.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchExpression} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchExpression.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 2, ""),
    valuesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchExpression}
 */
proto.MatchExpression.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchExpression;
  return proto.MatchExpression.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchExpression} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchExpression}
 */
proto.MatchExpression.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchExpression.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchExpression.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchExpression} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchExpression.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.MatchExpression.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchExpression} returns this
 */
proto.MatchExpression.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operator = 2;
 * @return {string}
 */
proto.MatchExpression.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MatchExpression} returns this
 */
proto.MatchExpression.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string values = 3;
 * @return {!Array<string>}
 */
proto.MatchExpression.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.MatchExpression} returns this
 */
proto.MatchExpression.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.MatchExpression} returns this
 */
proto.MatchExpression.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MatchExpression} returns this
 */
proto.MatchExpression.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppSubnet.prototype.toObject = function(opt_includeInstance) {
  return proto.AppSubnet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppSubnet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppSubnet.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.AppSubnet.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppSubnet}
 */
proto.AppSubnet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppSubnet;
  return proto.AppSubnet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppSubnet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppSubnet}
 */
proto.AppSubnet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AppSubnet.Selector;
      reader.readMessage(value,proto.AppSubnet.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppSubnet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppSubnet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppSubnet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppSubnet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.AppSubnet.Selector.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.AppSubnet.Selector.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppSubnet.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.AppSubnet.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppSubnet.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppSubnet.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    matchprefixList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    matchexpressionsList: jspb.Message.toObjectList(msg.getMatchexpressionsList(),
    proto.MatchExpression.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppSubnet.Selector}
 */
proto.AppSubnet.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppSubnet.Selector;
  return proto.AppSubnet.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppSubnet.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppSubnet.Selector}
 */
proto.AppSubnet.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addMatchprefix(value);
      break;
    case 3:
      var value = new proto.MatchExpression;
      reader.readMessage(value,proto.MatchExpression.deserializeBinaryFromReader);
      msg.addMatchexpressions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppSubnet.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppSubnet.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppSubnet.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppSubnet.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMatchprefixList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getMatchexpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.MatchExpression.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> matchLabels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.AppSubnet.Selector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.AppSubnet.Selector} returns this
 */
proto.AppSubnet.Selector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};


/**
 * repeated string matchPrefix = 2;
 * @return {!Array<string>}
 */
proto.AppSubnet.Selector.prototype.getMatchprefixList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.AppSubnet.Selector} returns this
 */
proto.AppSubnet.Selector.prototype.setMatchprefixList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.AppSubnet.Selector} returns this
 */
proto.AppSubnet.Selector.prototype.addMatchprefix = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AppSubnet.Selector} returns this
 */
proto.AppSubnet.Selector.prototype.clearMatchprefixList = function() {
  return this.setMatchprefixList([]);
};


/**
 * repeated MatchExpression matchExpressions = 3;
 * @return {!Array<!proto.MatchExpression>}
 */
proto.AppSubnet.Selector.prototype.getMatchexpressionsList = function() {
  return /** @type{!Array<!proto.MatchExpression>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MatchExpression, 3));
};


/**
 * @param {!Array<!proto.MatchExpression>} value
 * @return {!proto.AppSubnet.Selector} returns this
*/
proto.AppSubnet.Selector.prototype.setMatchexpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.MatchExpression=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MatchExpression}
 */
proto.AppSubnet.Selector.prototype.addMatchexpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.MatchExpression, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.AppSubnet.Selector} returns this
 */
proto.AppSubnet.Selector.prototype.clearMatchexpressionsList = function() {
  return this.setMatchexpressionsList([]);
};


/**
 * optional Selector selector = 1;
 * @return {?proto.AppSubnet.Selector}
 */
proto.AppSubnet.prototype.getSelector = function() {
  return /** @type{?proto.AppSubnet.Selector} */ (
    jspb.Message.getWrapperField(this, proto.AppSubnet.Selector, 1));
};


/**
 * @param {?proto.AppSubnet.Selector|undefined} value
 * @return {!proto.AppSubnet} returns this
*/
proto.AppSubnet.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppSubnet} returns this
 */
proto.AppSubnet.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppSubnet.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Namespace.prototype.toObject = function(opt_includeInstance) {
  return proto.Namespace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Namespace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Namespace.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.Namespace.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Namespace}
 */
proto.Namespace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Namespace;
  return proto.Namespace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Namespace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Namespace}
 */
proto.Namespace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Namespace.Selector;
      reader.readMessage(value,proto.Namespace.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Namespace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Namespace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Namespace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Namespace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Namespace.Selector.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Namespace.Selector.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Namespace.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.Namespace.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Namespace.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Namespace.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    matchexpressionsList: jspb.Message.toObjectList(msg.getMatchexpressionsList(),
    proto.MatchExpression.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Namespace.Selector}
 */
proto.Namespace.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Namespace.Selector;
  return proto.Namespace.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Namespace.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Namespace.Selector}
 */
proto.Namespace.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchname(value);
      break;
    case 2:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 3:
      var value = new proto.MatchExpression;
      reader.readMessage(value,proto.MatchExpression.deserializeBinaryFromReader);
      msg.addMatchexpressions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Namespace.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Namespace.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Namespace.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Namespace.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMatchexpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.MatchExpression.serializeBinaryToWriter
    );
  }
};


/**
 * optional string matchName = 1;
 * @return {string}
 */
proto.Namespace.Selector.prototype.getMatchname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Namespace.Selector} returns this
 */
proto.Namespace.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> matchLabels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.Namespace.Selector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.Namespace.Selector} returns this
 */
proto.Namespace.Selector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};


/**
 * repeated MatchExpression matchExpressions = 3;
 * @return {!Array<!proto.MatchExpression>}
 */
proto.Namespace.Selector.prototype.getMatchexpressionsList = function() {
  return /** @type{!Array<!proto.MatchExpression>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MatchExpression, 3));
};


/**
 * @param {!Array<!proto.MatchExpression>} value
 * @return {!proto.Namespace.Selector} returns this
*/
proto.Namespace.Selector.prototype.setMatchexpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.MatchExpression=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MatchExpression}
 */
proto.Namespace.Selector.prototype.addMatchexpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.MatchExpression, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Namespace.Selector} returns this
 */
proto.Namespace.Selector.prototype.clearMatchexpressionsList = function() {
  return this.setMatchexpressionsList([]);
};


/**
 * optional Selector selector = 1;
 * @return {?proto.Namespace.Selector}
 */
proto.Namespace.prototype.getSelector = function() {
  return /** @type{?proto.Namespace.Selector} */ (
    jspb.Message.getWrapperField(this, proto.Namespace.Selector, 1));
};


/**
 * @param {?proto.Namespace.Selector|undefined} value
 * @return {!proto.Namespace} returns this
*/
proto.Namespace.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Namespace} returns this
 */
proto.Namespace.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Namespace.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SGT.prototype.toObject = function(opt_includeInstance) {
  return proto.SGT.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SGT} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SGT.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SGT}
 */
proto.SGT.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SGT;
  return proto.SGT.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SGT} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SGT}
 */
proto.SGT.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SGT.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SGT.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SGT} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SGT.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.SGT.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SGT} returns this
 */
proto.SGT.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ServiceKind.prototype.toObject = function(opt_includeInstance) {
  return proto.ServiceKind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ServiceKind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceKind.toObject = function(includeInstance, msg) {
  var f, obj = {
    k8sservice: (f = msg.getK8sservice()) && proto.ServiceKind.K8SService.toObject(includeInstance, f),
    vmservice: (f = msg.getVmservice()) && proto.ServiceKind.VMService.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ServiceKind}
 */
proto.ServiceKind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ServiceKind;
  return proto.ServiceKind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ServiceKind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ServiceKind}
 */
proto.ServiceKind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ServiceKind.K8SService;
      reader.readMessage(value,proto.ServiceKind.K8SService.deserializeBinaryFromReader);
      msg.setK8sservice(value);
      break;
    case 2:
      var value = new proto.ServiceKind.VMService;
      reader.readMessage(value,proto.ServiceKind.VMService.deserializeBinaryFromReader);
      msg.setVmservice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ServiceKind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ServiceKind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ServiceKind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceKind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getK8sservice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ServiceKind.K8SService.serializeBinaryToWriter
    );
  }
  f = message.getVmservice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ServiceKind.VMService.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ServiceKind.K8SService.prototype.toObject = function(opt_includeInstance) {
  return proto.ServiceKind.K8SService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ServiceKind.K8SService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceKind.K8SService.toObject = function(includeInstance, msg) {
  var f, obj = {
    servicetype: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ServiceKind.K8SService}
 */
proto.ServiceKind.K8SService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ServiceKind.K8SService;
  return proto.ServiceKind.K8SService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ServiceKind.K8SService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ServiceKind.K8SService}
 */
proto.ServiceKind.K8SService.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ServiceKind.K8SService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ServiceKind.K8SService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ServiceKind.K8SService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceKind.K8SService.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicetype();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string serviceType = 2;
 * @return {string}
 */
proto.ServiceKind.K8SService.prototype.getServicetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ServiceKind.K8SService} returns this
 */
proto.ServiceKind.K8SService.prototype.setServicetype = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ServiceKind.VMService.prototype.toObject = function(opt_includeInstance) {
  return proto.ServiceKind.VMService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ServiceKind.VMService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceKind.VMService.toObject = function(includeInstance, msg) {
  var f, obj = {
    servicetype: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ServiceKind.VMService}
 */
proto.ServiceKind.VMService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ServiceKind.VMService;
  return proto.ServiceKind.VMService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ServiceKind.VMService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ServiceKind.VMService}
 */
proto.ServiceKind.VMService.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServicetype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ServiceKind.VMService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ServiceKind.VMService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ServiceKind.VMService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServiceKind.VMService.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServicetype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string serviceType = 1;
 * @return {string}
 */
proto.ServiceKind.VMService.prototype.getServicetype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ServiceKind.VMService} returns this
 */
proto.ServiceKind.VMService.prototype.setServicetype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional K8SService k8sService = 1;
 * @return {?proto.ServiceKind.K8SService}
 */
proto.ServiceKind.prototype.getK8sservice = function() {
  return /** @type{?proto.ServiceKind.K8SService} */ (
    jspb.Message.getWrapperField(this, proto.ServiceKind.K8SService, 1));
};


/**
 * @param {?proto.ServiceKind.K8SService|undefined} value
 * @return {!proto.ServiceKind} returns this
*/
proto.ServiceKind.prototype.setK8sservice = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServiceKind} returns this
 */
proto.ServiceKind.prototype.clearK8sservice = function() {
  return this.setK8sservice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServiceKind.prototype.hasK8sservice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VMService vmService = 2;
 * @return {?proto.ServiceKind.VMService}
 */
proto.ServiceKind.prototype.getVmservice = function() {
  return /** @type{?proto.ServiceKind.VMService} */ (
    jspb.Message.getWrapperField(this, proto.ServiceKind.VMService, 2));
};


/**
 * @param {?proto.ServiceKind.VMService|undefined} value
 * @return {!proto.ServiceKind} returns this
*/
proto.ServiceKind.prototype.setVmservice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServiceKind} returns this
 */
proto.ServiceKind.prototype.clearVmservice = function() {
  return this.setVmservice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServiceKind.prototype.hasVmservice = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Service.prototype.toObject = function(opt_includeInstance) {
  return proto.Service.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Service} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Service.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: (f = msg.getKind()) && proto.ServiceKind.toObject(includeInstance, f),
    selector: (f = msg.getSelector()) && proto.Service.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Service}
 */
proto.Service.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Service;
  return proto.Service.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Service} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Service}
 */
proto.Service.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ServiceKind;
      reader.readMessage(value,proto.ServiceKind.deserializeBinaryFromReader);
      msg.setKind(value);
      break;
    case 2:
      var value = new proto.Service.Selector;
      reader.readMessage(value,proto.Service.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Service.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Service.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Service} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Service.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ServiceKind.serializeBinaryToWriter
    );
  }
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Service.Selector.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Service.Selector.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Service.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.Service.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Service.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Service.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchname: (f = msg.getMatchname()) && proto.MatchName.toObject(includeInstance, f),
    matchnamespace: (f = msg.getMatchnamespace()) && proto.MatchNamespace.toObject(includeInstance, f),
    matchcluster: (f = msg.getMatchcluster()) && proto.MatchCluster.toObject(includeInstance, f),
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    matchhost: (f = msg.getMatchhost()) && proto.MatchHost.toObject(includeInstance, f),
    matchexpressionsList: jspb.Message.toObjectList(msg.getMatchexpressionsList(),
    proto.MatchExpression.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Service.Selector}
 */
proto.Service.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Service.Selector;
  return proto.Service.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Service.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Service.Selector}
 */
proto.Service.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MatchName;
      reader.readMessage(value,proto.MatchName.deserializeBinaryFromReader);
      msg.setMatchname(value);
      break;
    case 2:
      var value = new proto.MatchNamespace;
      reader.readMessage(value,proto.MatchNamespace.deserializeBinaryFromReader);
      msg.setMatchnamespace(value);
      break;
    case 3:
      var value = new proto.MatchCluster;
      reader.readMessage(value,proto.MatchCluster.deserializeBinaryFromReader);
      msg.setMatchcluster(value);
      break;
    case 4:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 5:
      var value = new proto.MatchHost;
      reader.readMessage(value,proto.MatchHost.deserializeBinaryFromReader);
      msg.setMatchhost(value);
      break;
    case 6:
      var value = new proto.MatchExpression;
      reader.readMessage(value,proto.MatchExpression.deserializeBinaryFromReader);
      msg.addMatchexpressions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Service.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Service.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Service.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Service.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchname();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MatchName.serializeBinaryToWriter
    );
  }
  f = message.getMatchnamespace();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MatchNamespace.serializeBinaryToWriter
    );
  }
  f = message.getMatchcluster();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MatchCluster.serializeBinaryToWriter
    );
  }
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMatchhost();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.MatchHost.serializeBinaryToWriter
    );
  }
  f = message.getMatchexpressionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.MatchExpression.serializeBinaryToWriter
    );
  }
};


/**
 * optional MatchName matchName = 1;
 * @return {?proto.MatchName}
 */
proto.Service.Selector.prototype.getMatchname = function() {
  return /** @type{?proto.MatchName} */ (
    jspb.Message.getWrapperField(this, proto.MatchName, 1));
};


/**
 * @param {?proto.MatchName|undefined} value
 * @return {!proto.Service.Selector} returns this
*/
proto.Service.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Service.Selector} returns this
 */
proto.Service.Selector.prototype.clearMatchname = function() {
  return this.setMatchname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Service.Selector.prototype.hasMatchname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MatchNamespace matchNamespace = 2;
 * @return {?proto.MatchNamespace}
 */
proto.Service.Selector.prototype.getMatchnamespace = function() {
  return /** @type{?proto.MatchNamespace} */ (
    jspb.Message.getWrapperField(this, proto.MatchNamespace, 2));
};


/**
 * @param {?proto.MatchNamespace|undefined} value
 * @return {!proto.Service.Selector} returns this
*/
proto.Service.Selector.prototype.setMatchnamespace = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Service.Selector} returns this
 */
proto.Service.Selector.prototype.clearMatchnamespace = function() {
  return this.setMatchnamespace(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Service.Selector.prototype.hasMatchnamespace = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MatchCluster matchCluster = 3;
 * @return {?proto.MatchCluster}
 */
proto.Service.Selector.prototype.getMatchcluster = function() {
  return /** @type{?proto.MatchCluster} */ (
    jspb.Message.getWrapperField(this, proto.MatchCluster, 3));
};


/**
 * @param {?proto.MatchCluster|undefined} value
 * @return {!proto.Service.Selector} returns this
*/
proto.Service.Selector.prototype.setMatchcluster = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Service.Selector} returns this
 */
proto.Service.Selector.prototype.clearMatchcluster = function() {
  return this.setMatchcluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Service.Selector.prototype.hasMatchcluster = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, string> matchLabels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.Service.Selector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.Service.Selector} returns this
 */
proto.Service.Selector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};


/**
 * optional MatchHost matchHost = 5;
 * @return {?proto.MatchHost}
 */
proto.Service.Selector.prototype.getMatchhost = function() {
  return /** @type{?proto.MatchHost} */ (
    jspb.Message.getWrapperField(this, proto.MatchHost, 5));
};


/**
 * @param {?proto.MatchHost|undefined} value
 * @return {!proto.Service.Selector} returns this
*/
proto.Service.Selector.prototype.setMatchhost = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Service.Selector} returns this
 */
proto.Service.Selector.prototype.clearMatchhost = function() {
  return this.setMatchhost(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Service.Selector.prototype.hasMatchhost = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated MatchExpression matchExpressions = 6;
 * @return {!Array<!proto.MatchExpression>}
 */
proto.Service.Selector.prototype.getMatchexpressionsList = function() {
  return /** @type{!Array<!proto.MatchExpression>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MatchExpression, 6));
};


/**
 * @param {!Array<!proto.MatchExpression>} value
 * @return {!proto.Service.Selector} returns this
*/
proto.Service.Selector.prototype.setMatchexpressionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.MatchExpression=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MatchExpression}
 */
proto.Service.Selector.prototype.addMatchexpressions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.MatchExpression, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Service.Selector} returns this
 */
proto.Service.Selector.prototype.clearMatchexpressionsList = function() {
  return this.setMatchexpressionsList([]);
};


/**
 * optional ServiceKind kind = 1;
 * @return {?proto.ServiceKind}
 */
proto.Service.prototype.getKind = function() {
  return /** @type{?proto.ServiceKind} */ (
    jspb.Message.getWrapperField(this, proto.ServiceKind, 1));
};


/**
 * @param {?proto.ServiceKind|undefined} value
 * @return {!proto.Service} returns this
*/
proto.Service.prototype.setKind = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Service} returns this
 */
proto.Service.prototype.clearKind = function() {
  return this.setKind(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Service.prototype.hasKind = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Selector selector = 2;
 * @return {?proto.Service.Selector}
 */
proto.Service.prototype.getSelector = function() {
  return /** @type{?proto.Service.Selector} */ (
    jspb.Message.getWrapperField(this, proto.Service.Selector, 2));
};


/**
 * @param {?proto.Service.Selector|undefined} value
 * @return {!proto.Service} returns this
*/
proto.Service.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Service} returns this
 */
proto.Service.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Service.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Cluster.prototype.toObject = function(opt_includeInstance) {
  return proto.Cluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Cluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Cluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.Cluster.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Cluster}
 */
proto.Cluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Cluster;
  return proto.Cluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Cluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Cluster}
 */
proto.Cluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Cluster.Selector;
      reader.readMessage(value,proto.Cluster.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Cluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Cluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Cluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Cluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.Cluster.Selector.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Cluster.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.Cluster.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Cluster.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Cluster.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchname: (f = msg.getMatchname()) && proto.MatchName.toObject(includeInstance, f),
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Cluster.Selector}
 */
proto.Cluster.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Cluster.Selector;
  return proto.Cluster.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Cluster.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Cluster.Selector}
 */
proto.Cluster.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MatchName;
      reader.readMessage(value,proto.MatchName.deserializeBinaryFromReader);
      msg.setMatchname(value);
      break;
    case 2:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Cluster.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Cluster.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Cluster.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Cluster.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchname();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MatchName.serializeBinaryToWriter
    );
  }
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional MatchName matchName = 1;
 * @return {?proto.MatchName}
 */
proto.Cluster.Selector.prototype.getMatchname = function() {
  return /** @type{?proto.MatchName} */ (
    jspb.Message.getWrapperField(this, proto.MatchName, 1));
};


/**
 * @param {?proto.MatchName|undefined} value
 * @return {!proto.Cluster.Selector} returns this
*/
proto.Cluster.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Cluster.Selector} returns this
 */
proto.Cluster.Selector.prototype.clearMatchname = function() {
  return this.setMatchname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Cluster.Selector.prototype.hasMatchname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, string> matchLabels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.Cluster.Selector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.Cluster.Selector} returns this
 */
proto.Cluster.Selector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};


/**
 * optional Selector selector = 1;
 * @return {?proto.Cluster.Selector}
 */
proto.Cluster.prototype.getSelector = function() {
  return /** @type{?proto.Cluster.Selector} */ (
    jspb.Message.getWrapperField(this, proto.Cluster.Selector, 1));
};


/**
 * @param {?proto.Cluster.Selector|undefined} value
 * @return {!proto.Cluster} returns this
*/
proto.Cluster.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.Cluster} returns this
 */
proto.Cluster.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.Cluster.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkDomain.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkDomain.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkDomain} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomain.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, ""),
    selector: (f = msg.getSelector()) && proto.NetworkDomain.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkDomain}
 */
proto.NetworkDomain.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkDomain;
  return proto.NetworkDomain.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkDomain} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkDomain}
 */
proto.NetworkDomain.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKind(value);
      break;
    case 2:
      var value = new proto.NetworkDomain.Selector;
      reader.readMessage(value,proto.NetworkDomain.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkDomain.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkDomain.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkDomain} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomain.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.NetworkDomain.Selector.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkDomain.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkDomain.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkDomain.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomain.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    matchid: (f = msg.getMatchid()) && proto.MatchId.toObject(includeInstance, f),
    matchname: (f = msg.getMatchname()) && proto.MatchName.toObject(includeInstance, f),
    matchowner: (f = msg.getMatchowner()) && proto.MatchOwner.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkDomain.Selector}
 */
proto.NetworkDomain.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkDomain.Selector;
  return proto.NetworkDomain.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkDomain.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkDomain.Selector}
 */
proto.NetworkDomain.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new proto.MatchId;
      reader.readMessage(value,proto.MatchId.deserializeBinaryFromReader);
      msg.setMatchid(value);
      break;
    case 3:
      var value = new proto.MatchName;
      reader.readMessage(value,proto.MatchName.deserializeBinaryFromReader);
      msg.setMatchname(value);
      break;
    case 4:
      var value = new proto.MatchOwner;
      reader.readMessage(value,proto.MatchOwner.deserializeBinaryFromReader);
      msg.setMatchowner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkDomain.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkDomain.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkDomain.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomain.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMatchid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MatchId.serializeBinaryToWriter
    );
  }
  f = message.getMatchname();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.MatchName.serializeBinaryToWriter
    );
  }
  f = message.getMatchowner();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.MatchOwner.serializeBinaryToWriter
    );
  }
};


/**
 * map<string, string> matchLabels = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.NetworkDomain.Selector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.NetworkDomain.Selector} returns this
 */
proto.NetworkDomain.Selector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};


/**
 * optional MatchId matchID = 2;
 * @return {?proto.MatchId}
 */
proto.NetworkDomain.Selector.prototype.getMatchid = function() {
  return /** @type{?proto.MatchId} */ (
    jspb.Message.getWrapperField(this, proto.MatchId, 2));
};


/**
 * @param {?proto.MatchId|undefined} value
 * @return {!proto.NetworkDomain.Selector} returns this
*/
proto.NetworkDomain.Selector.prototype.setMatchid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NetworkDomain.Selector} returns this
 */
proto.NetworkDomain.Selector.prototype.clearMatchid = function() {
  return this.setMatchid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetworkDomain.Selector.prototype.hasMatchid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MatchName matchName = 3;
 * @return {?proto.MatchName}
 */
proto.NetworkDomain.Selector.prototype.getMatchname = function() {
  return /** @type{?proto.MatchName} */ (
    jspb.Message.getWrapperField(this, proto.MatchName, 3));
};


/**
 * @param {?proto.MatchName|undefined} value
 * @return {!proto.NetworkDomain.Selector} returns this
*/
proto.NetworkDomain.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NetworkDomain.Selector} returns this
 */
proto.NetworkDomain.Selector.prototype.clearMatchname = function() {
  return this.setMatchname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetworkDomain.Selector.prototype.hasMatchname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional MatchOwner matchOwner = 4;
 * @return {?proto.MatchOwner}
 */
proto.NetworkDomain.Selector.prototype.getMatchowner = function() {
  return /** @type{?proto.MatchOwner} */ (
    jspb.Message.getWrapperField(this, proto.MatchOwner, 4));
};


/**
 * @param {?proto.MatchOwner|undefined} value
 * @return {!proto.NetworkDomain.Selector} returns this
*/
proto.NetworkDomain.Selector.prototype.setMatchowner = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NetworkDomain.Selector} returns this
 */
proto.NetworkDomain.Selector.prototype.clearMatchowner = function() {
  return this.setMatchowner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetworkDomain.Selector.prototype.hasMatchowner = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string Kind = 1;
 * @return {string}
 */
proto.NetworkDomain.prototype.getKind = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetworkDomain} returns this
 */
proto.NetworkDomain.prototype.setKind = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Selector selector = 2;
 * @return {?proto.NetworkDomain.Selector}
 */
proto.NetworkDomain.prototype.getSelector = function() {
  return /** @type{?proto.NetworkDomain.Selector} */ (
    jspb.Message.getWrapperField(this, proto.NetworkDomain.Selector, 2));
};


/**
 * @param {?proto.NetworkDomain.Selector|undefined} value
 * @return {!proto.NetworkDomain} returns this
*/
proto.NetworkDomain.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NetworkDomain} returns this
 */
proto.NetworkDomain.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetworkDomain.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AccessPolicySelector.prototype.toObject = function(opt_includeInstance) {
  return proto.AccessPolicySelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AccessPolicySelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.AccessPolicySelector.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AccessPolicySelector}
 */
proto.AccessPolicySelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AccessPolicySelector;
  return proto.AccessPolicySelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AccessPolicySelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AccessPolicySelector}
 */
proto.AccessPolicySelector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AccessPolicySelector.Selector;
      reader.readMessage(value,proto.AccessPolicySelector.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AccessPolicySelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AccessPolicySelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AccessPolicySelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.AccessPolicySelector.Selector.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AccessPolicySelector.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.AccessPolicySelector.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AccessPolicySelector.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchname: (f = msg.getMatchname()) && proto.AccessPolicySelector.MatchName.toObject(includeInstance, f),
    matchid: (f = msg.getMatchid()) && proto.AccessPolicySelector.MatchId.toObject(includeInstance, f),
    matchlabelsMap: (f = msg.getMatchlabelsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AccessPolicySelector.Selector}
 */
proto.AccessPolicySelector.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AccessPolicySelector.Selector;
  return proto.AccessPolicySelector.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AccessPolicySelector.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AccessPolicySelector.Selector}
 */
proto.AccessPolicySelector.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AccessPolicySelector.MatchName;
      reader.readMessage(value,proto.AccessPolicySelector.MatchName.deserializeBinaryFromReader);
      msg.setMatchname(value);
      break;
    case 2:
      var value = new proto.AccessPolicySelector.MatchId;
      reader.readMessage(value,proto.AccessPolicySelector.MatchId.deserializeBinaryFromReader);
      msg.setMatchid(value);
      break;
    case 3:
      var value = msg.getMatchlabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AccessPolicySelector.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AccessPolicySelector.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AccessPolicySelector.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchname();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.AccessPolicySelector.MatchName.serializeBinaryToWriter
    );
  }
  f = message.getMatchid();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AccessPolicySelector.MatchId.serializeBinaryToWriter
    );
  }
  f = message.getMatchlabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional MatchName matchName = 1;
 * @return {?proto.AccessPolicySelector.MatchName}
 */
proto.AccessPolicySelector.Selector.prototype.getMatchname = function() {
  return /** @type{?proto.AccessPolicySelector.MatchName} */ (
    jspb.Message.getWrapperField(this, proto.AccessPolicySelector.MatchName, 1));
};


/**
 * @param {?proto.AccessPolicySelector.MatchName|undefined} value
 * @return {!proto.AccessPolicySelector.Selector} returns this
*/
proto.AccessPolicySelector.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AccessPolicySelector.Selector} returns this
 */
proto.AccessPolicySelector.Selector.prototype.clearMatchname = function() {
  return this.setMatchname(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AccessPolicySelector.Selector.prototype.hasMatchname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MatchId matchId = 2;
 * @return {?proto.AccessPolicySelector.MatchId}
 */
proto.AccessPolicySelector.Selector.prototype.getMatchid = function() {
  return /** @type{?proto.AccessPolicySelector.MatchId} */ (
    jspb.Message.getWrapperField(this, proto.AccessPolicySelector.MatchId, 2));
};


/**
 * @param {?proto.AccessPolicySelector.MatchId|undefined} value
 * @return {!proto.AccessPolicySelector.Selector} returns this
*/
proto.AccessPolicySelector.Selector.prototype.setMatchid = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AccessPolicySelector.Selector} returns this
 */
proto.AccessPolicySelector.Selector.prototype.clearMatchid = function() {
  return this.setMatchid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AccessPolicySelector.Selector.prototype.hasMatchid = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, string> matchLabels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.AccessPolicySelector.Selector.prototype.getMatchlabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.AccessPolicySelector.Selector} returns this
 */
proto.AccessPolicySelector.Selector.prototype.clearMatchlabelsMap = function() {
  this.getMatchlabelsMap().clear();
  return this;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AccessPolicySelector.MatchName.prototype.toObject = function(opt_includeInstance) {
  return proto.AccessPolicySelector.MatchName.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AccessPolicySelector.MatchName} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.MatchName.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AccessPolicySelector.MatchName}
 */
proto.AccessPolicySelector.MatchName.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AccessPolicySelector.MatchName;
  return proto.AccessPolicySelector.MatchName.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AccessPolicySelector.MatchName} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AccessPolicySelector.MatchName}
 */
proto.AccessPolicySelector.MatchName.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AccessPolicySelector.MatchName.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AccessPolicySelector.MatchName.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AccessPolicySelector.MatchName} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.MatchName.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.AccessPolicySelector.MatchName.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AccessPolicySelector.MatchName} returns this
 */
proto.AccessPolicySelector.MatchName.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AccessPolicySelector.MatchId.prototype.toObject = function(opt_includeInstance) {
  return proto.AccessPolicySelector.MatchId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AccessPolicySelector.MatchId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.MatchId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AccessPolicySelector.MatchId}
 */
proto.AccessPolicySelector.MatchId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AccessPolicySelector.MatchId;
  return proto.AccessPolicySelector.MatchId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AccessPolicySelector.MatchId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AccessPolicySelector.MatchId}
 */
proto.AccessPolicySelector.MatchId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AccessPolicySelector.MatchId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AccessPolicySelector.MatchId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AccessPolicySelector.MatchId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AccessPolicySelector.MatchId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.AccessPolicySelector.MatchId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AccessPolicySelector.MatchId} returns this
 */
proto.AccessPolicySelector.MatchId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Selector selector = 1;
 * @return {?proto.AccessPolicySelector.Selector}
 */
proto.AccessPolicySelector.prototype.getSelector = function() {
  return /** @type{?proto.AccessPolicySelector.Selector} */ (
    jspb.Message.getWrapperField(this, proto.AccessPolicySelector.Selector, 1));
};


/**
 * @param {?proto.AccessPolicySelector.Selector|undefined} value
 * @return {!proto.AccessPolicySelector} returns this
*/
proto.AccessPolicySelector.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AccessPolicySelector} returns this
 */
proto.AccessPolicySelector.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AccessPolicySelector.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkPolicySelector.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkPolicySelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkPolicySelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicySelector.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.NetworkPolicySelector.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkPolicySelector}
 */
proto.NetworkPolicySelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkPolicySelector;
  return proto.NetworkPolicySelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkPolicySelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkPolicySelector}
 */
proto.NetworkPolicySelector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.NetworkPolicySelector.Selector;
      reader.readMessage(value,proto.NetworkPolicySelector.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkPolicySelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkPolicySelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkPolicySelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicySelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.NetworkPolicySelector.Selector.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkPolicySelector.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkPolicySelector.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkPolicySelector.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicySelector.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchname: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkPolicySelector.Selector}
 */
proto.NetworkPolicySelector.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkPolicySelector.Selector;
  return proto.NetworkPolicySelector.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkPolicySelector.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkPolicySelector.Selector}
 */
proto.NetworkPolicySelector.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkPolicySelector.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkPolicySelector.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkPolicySelector.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicySelector.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string matchName = 1;
 * @return {string}
 */
proto.NetworkPolicySelector.Selector.prototype.getMatchname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetworkPolicySelector.Selector} returns this
 */
proto.NetworkPolicySelector.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Selector selector = 1;
 * @return {?proto.NetworkPolicySelector.Selector}
 */
proto.NetworkPolicySelector.prototype.getSelector = function() {
  return /** @type{?proto.NetworkPolicySelector.Selector} */ (
    jspb.Message.getWrapperField(this, proto.NetworkPolicySelector.Selector, 1));
};


/**
 * @param {?proto.NetworkPolicySelector.Selector|undefined} value
 * @return {!proto.NetworkPolicySelector} returns this
*/
proto.NetworkPolicySelector.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NetworkPolicySelector} returns this
 */
proto.NetworkPolicySelector.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetworkPolicySelector.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkAccessControl.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkAccessControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkAccessControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkAccessControl.toObject = function(includeInstance, msg) {
  var f, obj = {
    protocol: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkAccessControl}
 */
proto.NetworkAccessControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkAccessControl;
  return proto.NetworkAccessControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkAccessControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkAccessControl}
 */
proto.NetworkAccessControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkAccessControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkAccessControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkAccessControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkAccessControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string protocol = 1;
 * @return {string}
 */
proto.NetworkAccessControl.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetworkAccessControl} returns this
 */
proto.NetworkAccessControl.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string port = 2;
 * @return {string}
 */
proto.NetworkAccessControl.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetworkAccessControl} returns this
 */
proto.NetworkAccessControl.prototype.setPort = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkDomainConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkDomainConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkDomainConnection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomainConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.NetworkDomainConnection.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkDomainConnection}
 */
proto.NetworkDomainConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkDomainConnection;
  return proto.NetworkDomainConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkDomainConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkDomainConnection}
 */
proto.NetworkDomainConnection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.NetworkDomainConnection.Selector;
      reader.readMessage(value,proto.NetworkDomainConnection.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkDomainConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkDomainConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkDomainConnection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomainConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.NetworkDomainConnection.Selector.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkDomainConnection.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkDomainConnection.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkDomainConnection.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomainConnection.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchname: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkDomainConnection.Selector}
 */
proto.NetworkDomainConnection.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkDomainConnection.Selector;
  return proto.NetworkDomainConnection.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkDomainConnection.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkDomainConnection.Selector}
 */
proto.NetworkDomainConnection.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkDomainConnection.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkDomainConnection.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkDomainConnection.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkDomainConnection.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string matchName = 1;
 * @return {string}
 */
proto.NetworkDomainConnection.Selector.prototype.getMatchname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetworkDomainConnection.Selector} returns this
 */
proto.NetworkDomainConnection.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Selector selector = 1;
 * @return {?proto.NetworkDomainConnection.Selector}
 */
proto.NetworkDomainConnection.prototype.getSelector = function() {
  return /** @type{?proto.NetworkDomainConnection.Selector} */ (
    jspb.Message.getWrapperField(this, proto.NetworkDomainConnection.Selector, 1));
};


/**
 * @param {?proto.NetworkDomainConnection.Selector|undefined} value
 * @return {!proto.NetworkDomainConnection} returns this
*/
proto.NetworkDomainConnection.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NetworkDomainConnection} returns this
 */
proto.NetworkDomainConnection.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetworkDomainConnection.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: (f = msg.getSelector()) && proto.NetworkPolicy.Selector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkPolicy}
 */
proto.NetworkPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkPolicy;
  return proto.NetworkPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkPolicy}
 */
proto.NetworkPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.NetworkPolicy.Selector;
      reader.readMessage(value,proto.NetworkPolicy.Selector.deserializeBinaryFromReader);
      msg.setSelector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.NetworkPolicy.Selector.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetworkPolicy.Selector.prototype.toObject = function(opt_includeInstance) {
  return proto.NetworkPolicy.Selector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetworkPolicy.Selector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicy.Selector.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchname: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetworkPolicy.Selector}
 */
proto.NetworkPolicy.Selector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetworkPolicy.Selector;
  return proto.NetworkPolicy.Selector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetworkPolicy.Selector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetworkPolicy.Selector}
 */
proto.NetworkPolicy.Selector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatchname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetworkPolicy.Selector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetworkPolicy.Selector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetworkPolicy.Selector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetworkPolicy.Selector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string matchName = 1;
 * @return {string}
 */
proto.NetworkPolicy.Selector.prototype.getMatchname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetworkPolicy.Selector} returns this
 */
proto.NetworkPolicy.Selector.prototype.setMatchname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Selector selector = 1;
 * @return {?proto.NetworkPolicy.Selector}
 */
proto.NetworkPolicy.prototype.getSelector = function() {
  return /** @type{?proto.NetworkPolicy.Selector} */ (
    jspb.Message.getWrapperField(this, proto.NetworkPolicy.Selector, 1));
};


/**
 * @param {?proto.NetworkPolicy.Selector|undefined} value
 * @return {!proto.NetworkPolicy} returns this
*/
proto.NetworkPolicy.prototype.setSelector = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.NetworkPolicy} returns this
 */
proto.NetworkPolicy.prototype.clearSelector = function() {
  return this.setSelector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetworkPolicy.prototype.hasSelector = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    appConnId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appConnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0),
    connectionMeta: (f = msg.getConnectionMeta()) && proto.AppConnectionResponse.meta.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionResponse}
 */
proto.AppConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionResponse;
  return proto.AppConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionResponse}
 */
proto.AppConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnName(value);
      break;
    case 4:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = new proto.AppConnectionResponse.meta;
      reader.readMessage(value,proto.AppConnectionResponse.meta.deserializeBinaryFromReader);
      msg.setConnectionMeta(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getAppConnId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppConnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getConnectionMeta();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.AppConnectionResponse.meta.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionResponse.meta.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionResponse.meta.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionResponse.meta} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionResponse.meta.toObject = function(includeInstance, msg) {
  var f, obj = {
    appConnDirection: jspb.Message.getFieldWithDefault(msg, 1, ""),
    connectionSourceIp: jspb.Message.getFieldWithDefault(msg, 2, ""),
    connectionDestIp: jspb.Message.getFieldWithDefault(msg, 3, ""),
    connectionSourceTag: jspb.Message.getFieldWithDefault(msg, 4, ""),
    connectionDestTag: jspb.Message.getFieldWithDefault(msg, 5, ""),
    connectionStatusUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    connectionStatisticsUrl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    connectionEventsUrl: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionResponse.meta}
 */
proto.AppConnectionResponse.meta.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionResponse.meta;
  return proto.AppConnectionResponse.meta.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionResponse.meta} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionResponse.meta}
 */
proto.AppConnectionResponse.meta.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnDirection(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionSourceIp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionDestIp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionSourceTag(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionDestTag(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionStatusUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionStatisticsUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionEventsUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionResponse.meta.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionResponse.meta.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionResponse.meta} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionResponse.meta.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppConnDirection();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConnectionSourceIp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConnectionDestIp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConnectionSourceTag();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getConnectionDestTag();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getConnectionStatusUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getConnectionStatisticsUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getConnectionEventsUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string app_conn_direction = 1;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getAppConnDirection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setAppConnDirection = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string connection_source_ip = 2;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getConnectionSourceIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setConnectionSourceIp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string connection_dest_ip = 3;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getConnectionDestIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setConnectionDestIp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string connection_source_tag = 4;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getConnectionSourceTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setConnectionSourceTag = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string connection_dest_tag = 5;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getConnectionDestTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setConnectionDestTag = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string connection_status_url = 6;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getConnectionStatusUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setConnectionStatusUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string connection_statistics_url = 7;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getConnectionStatisticsUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setConnectionStatisticsUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string connection_events_url = 8;
 * @return {string}
 */
proto.AppConnectionResponse.meta.prototype.getConnectionEventsUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse.meta} returns this
 */
proto.AppConnectionResponse.meta.prototype.setConnectionEventsUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.AppConnectionResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.AppConnectionResponse} returns this
*/
proto.AppConnectionResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionResponse} returns this
 */
proto.AppConnectionResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string app_conn_id = 2;
 * @return {string}
 */
proto.AppConnectionResponse.prototype.getAppConnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse} returns this
 */
proto.AppConnectionResponse.prototype.setAppConnId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string app_conn_name = 3;
 * @return {string}
 */
proto.AppConnectionResponse.prototype.getAppConnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionResponse} returns this
 */
proto.AppConnectionResponse.prototype.setAppConnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Status status = 4;
 * @return {!proto.Status}
 */
proto.AppConnectionResponse.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.Status} value
 * @return {!proto.AppConnectionResponse} returns this
 */
proto.AppConnectionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional meta connection_meta = 6;
 * @return {?proto.AppConnectionResponse.meta}
 */
proto.AppConnectionResponse.prototype.getConnectionMeta = function() {
  return /** @type{?proto.AppConnectionResponse.meta} */ (
    jspb.Message.getWrapperField(this, proto.AppConnectionResponse.meta, 6));
};


/**
 * @param {?proto.AppConnectionResponse.meta|undefined} value
 * @return {!proto.AppConnectionResponse} returns this
*/
proto.AppConnectionResponse.prototype.setConnectionMeta = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionResponse} returns this
 */
proto.AppConnectionResponse.prototype.clearConnectionMeta = function() {
  return this.setConnectionMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionResponse.prototype.hasConnectionMeta = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAppConnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAppConnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAppConnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    appConnection: (f = msg.getAppConnection()) && proto.AppConnectionInformation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAppConnectionResponse}
 */
proto.GetAppConnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAppConnectionResponse;
  return proto.GetAppConnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAppConnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAppConnectionResponse}
 */
proto.GetAppConnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = new proto.AppConnectionInformation;
      reader.readMessage(value,proto.AppConnectionInformation.deserializeBinaryFromReader);
      msg.setAppConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAppConnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAppConnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAppConnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getAppConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AppConnectionInformation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.GetAppConnectionResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.GetAppConnectionResponse} returns this
*/
proto.GetAppConnectionResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetAppConnectionResponse} returns this
 */
proto.GetAppConnectionResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetAppConnectionResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AppConnectionInformation app_connection = 2;
 * @return {?proto.AppConnectionInformation}
 */
proto.GetAppConnectionResponse.prototype.getAppConnection = function() {
  return /** @type{?proto.AppConnectionInformation} */ (
    jspb.Message.getWrapperField(this, proto.AppConnectionInformation, 2));
};


/**
 * @param {?proto.AppConnectionInformation|undefined} value
 * @return {!proto.GetAppConnectionResponse} returns this
*/
proto.GetAppConnectionResponse.prototype.setAppConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetAppConnectionResponse} returns this
 */
proto.GetAppConnectionResponse.prototype.clearAppConnection = function() {
  return this.setAppConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetAppConnectionResponse.prototype.hasAppConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppDisconnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.AppDisconnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppDisconnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppDisconnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppDisconnectionRequest}
 */
proto.AppDisconnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppDisconnectionRequest;
  return proto.AppDisconnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppDisconnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppDisconnectionRequest}
 */
proto.AppDisconnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppDisconnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppDisconnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppDisconnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppDisconnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connection_id = 1;
 * @return {string}
 */
proto.AppDisconnectionRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppDisconnectionRequest} returns this
 */
proto.AppDisconnectionRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppDisconnectionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.AppDisconnectionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppDisconnectionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppDisconnectionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    connectionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    connectionName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppDisconnectionResponse}
 */
proto.AppDisconnectionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppDisconnectionResponse;
  return proto.AppDisconnectionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppDisconnectionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppDisconnectionResponse}
 */
proto.AppDisconnectionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionName(value);
      break;
    case 4:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppDisconnectionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppDisconnectionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppDisconnectionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppDisconnectionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConnectionName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.AppDisconnectionResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.AppDisconnectionResponse} returns this
*/
proto.AppDisconnectionResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppDisconnectionResponse} returns this
 */
proto.AppDisconnectionResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppDisconnectionResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string connection_id = 2;
 * @return {string}
 */
proto.AppDisconnectionResponse.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppDisconnectionResponse} returns this
 */
proto.AppDisconnectionResponse.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string connection_name = 3;
 * @return {string}
 */
proto.AppDisconnectionResponse.prototype.getConnectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppDisconnectionResponse} returns this
 */
proto.AppDisconnectionResponse.prototype.setConnectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Status status = 4;
 * @return {!proto.Status}
 */
proto.AppDisconnectionResponse.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.Status} value
 * @return {!proto.AppDisconnectionResponse} returns this
 */
proto.AppDisconnectionResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    appConnId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appConnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionStatusResponse}
 */
proto.AppConnectionStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionStatusResponse;
  return proto.AppConnectionStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionStatusResponse}
 */
proto.AppConnectionStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnName(value);
      break;
    case 4:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getAppConnId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppConnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.AppConnectionStatusResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.AppConnectionStatusResponse} returns this
*/
proto.AppConnectionStatusResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionStatusResponse} returns this
 */
proto.AppConnectionStatusResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionStatusResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string app_conn_id = 2;
 * @return {string}
 */
proto.AppConnectionStatusResponse.prototype.getAppConnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionStatusResponse} returns this
 */
proto.AppConnectionStatusResponse.prototype.setAppConnId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string app_conn_name = 3;
 * @return {string}
 */
proto.AppConnectionStatusResponse.prototype.getAppConnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionStatusResponse} returns this
 */
proto.AppConnectionStatusResponse.prototype.setAppConnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Status status = 4;
 * @return {!proto.Status}
 */
proto.AppConnectionStatusResponse.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.Status} value
 * @return {!proto.AppConnectionStatusResponse} returns this
 */
proto.AppConnectionStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionStatistics.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionStatistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionStatistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionStatistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionStatistics}
 */
proto.AppConnectionStatistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionStatistics;
  return proto.AppConnectionStatistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionStatistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionStatistics}
 */
proto.AppConnectionStatistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionStatistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionStatistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionStatistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionStatistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.AppConnectionStatistics.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.AppConnectionStatistics} returns this
*/
proto.AppConnectionStatistics.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionStatistics} returns this
 */
proto.AppConnectionStatistics.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionStatistics.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    appConnId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appConnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    stats: (f = msg.getStats()) && proto.AppConnectionStatistics.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionStatisticsResponse}
 */
proto.AppConnectionStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionStatisticsResponse;
  return proto.AppConnectionStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionStatisticsResponse}
 */
proto.AppConnectionStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnName(value);
      break;
    case 4:
      var value = new proto.AppConnectionStatistics;
      reader.readMessage(value,proto.AppConnectionStatistics.deserializeBinaryFromReader);
      msg.setStats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getAppConnId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppConnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.AppConnectionStatistics.serializeBinaryToWriter
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.AppConnectionStatisticsResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.AppConnectionStatisticsResponse} returns this
*/
proto.AppConnectionStatisticsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionStatisticsResponse} returns this
 */
proto.AppConnectionStatisticsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionStatisticsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string app_conn_id = 2;
 * @return {string}
 */
proto.AppConnectionStatisticsResponse.prototype.getAppConnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionStatisticsResponse} returns this
 */
proto.AppConnectionStatisticsResponse.prototype.setAppConnId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string app_conn_name = 3;
 * @return {string}
 */
proto.AppConnectionStatisticsResponse.prototype.getAppConnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionStatisticsResponse} returns this
 */
proto.AppConnectionStatisticsResponse.prototype.setAppConnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AppConnectionStatistics stats = 4;
 * @return {?proto.AppConnectionStatistics}
 */
proto.AppConnectionStatisticsResponse.prototype.getStats = function() {
  return /** @type{?proto.AppConnectionStatistics} */ (
    jspb.Message.getWrapperField(this, proto.AppConnectionStatistics, 4));
};


/**
 * @param {?proto.AppConnectionStatistics|undefined} value
 * @return {!proto.AppConnectionStatisticsResponse} returns this
*/
proto.AppConnectionStatisticsResponse.prototype.setStats = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionStatisticsResponse} returns this
 */
proto.AppConnectionStatisticsResponse.prototype.clearStats = function() {
  return this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionStatisticsResponse.prototype.hasStats = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionEvents.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionEvents.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionEvents} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionEvents.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionEvents}
 */
proto.AppConnectionEvents.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionEvents;
  return proto.AppConnectionEvents.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionEvents} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionEvents}
 */
proto.AppConnectionEvents.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionEvents.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionEvents.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionEvents} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionEvents.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.AppConnectionEvents.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.AppConnectionEvents} returns this
*/
proto.AppConnectionEvents.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionEvents} returns this
 */
proto.AppConnectionEvents.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionEvents.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    appConnId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    appConnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    events: (f = msg.getEvents()) && proto.AppConnectionEvents.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionEventsResponse}
 */
proto.AppConnectionEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionEventsResponse;
  return proto.AppConnectionEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionEventsResponse}
 */
proto.AppConnectionEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppConnName(value);
      break;
    case 4:
      var value = new proto.AppConnectionEvents;
      reader.readMessage(value,proto.AppConnectionEvents.deserializeBinaryFromReader);
      msg.setEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getAppConnId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAppConnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEvents();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.AppConnectionEvents.serializeBinaryToWriter
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.AppConnectionEventsResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.AppConnectionEventsResponse} returns this
*/
proto.AppConnectionEventsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionEventsResponse} returns this
 */
proto.AppConnectionEventsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionEventsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string app_conn_id = 2;
 * @return {string}
 */
proto.AppConnectionEventsResponse.prototype.getAppConnId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionEventsResponse} returns this
 */
proto.AppConnectionEventsResponse.prototype.setAppConnId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string app_conn_name = 3;
 * @return {string}
 */
proto.AppConnectionEventsResponse.prototype.getAppConnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionEventsResponse} returns this
 */
proto.AppConnectionEventsResponse.prototype.setAppConnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AppConnectionEvents events = 4;
 * @return {?proto.AppConnectionEvents}
 */
proto.AppConnectionEventsResponse.prototype.getEvents = function() {
  return /** @type{?proto.AppConnectionEvents} */ (
    jspb.Message.getWrapperField(this, proto.AppConnectionEvents, 4));
};


/**
 * @param {?proto.AppConnectionEvents|undefined} value
 * @return {!proto.AppConnectionEventsResponse} returns this
*/
proto.AppConnectionEventsResponse.prototype.setEvents = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionEventsResponse} returns this
 */
proto.AppConnectionEventsResponse.prototype.clearEvents = function() {
  return this.setEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionEventsResponse.prototype.hasEvents = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAppConnectionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAppConnectionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAppConnectionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAppConnectionRequest}
 */
proto.GetAppConnectionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAppConnectionRequest;
  return proto.GetAppConnectionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAppConnectionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAppConnectionRequest}
 */
proto.GetAppConnectionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAppConnectionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAppConnectionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAppConnectionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connection_id = 1;
 * @return {string}
 */
proto.GetAppConnectionRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetAppConnectionRequest} returns this
 */
proto.GetAppConnectionRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAppConnectionStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAppConnectionStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAppConnectionStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAppConnectionStatusRequest}
 */
proto.GetAppConnectionStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAppConnectionStatusRequest;
  return proto.GetAppConnectionStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAppConnectionStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAppConnectionStatusRequest}
 */
proto.GetAppConnectionStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAppConnectionStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAppConnectionStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAppConnectionStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connection_id = 1;
 * @return {string}
 */
proto.GetAppConnectionStatusRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetAppConnectionStatusRequest} returns this
 */
proto.GetAppConnectionStatusRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAppConnectionStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAppConnectionStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAppConnectionStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAppConnectionStatisticsRequest}
 */
proto.GetAppConnectionStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAppConnectionStatisticsRequest;
  return proto.GetAppConnectionStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAppConnectionStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAppConnectionStatisticsRequest}
 */
proto.GetAppConnectionStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAppConnectionStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAppConnectionStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAppConnectionStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connection_id = 1;
 * @return {string}
 */
proto.GetAppConnectionStatisticsRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetAppConnectionStatisticsRequest} returns this
 */
proto.GetAppConnectionStatisticsRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAppConnectionEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAppConnectionEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAppConnectionEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectionId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAppConnectionEventsRequest}
 */
proto.GetAppConnectionEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAppConnectionEventsRequest;
  return proto.GetAppConnectionEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAppConnectionEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAppConnectionEventsRequest}
 */
proto.GetAppConnectionEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAppConnectionEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAppConnectionEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAppConnectionEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string connection_id = 1;
 * @return {string}
 */
proto.GetAppConnectionEventsRequest.prototype.getConnectionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetAppConnectionEventsRequest} returns this
 */
proto.GetAppConnectionEventsRequest.prototype.setConnectionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListAppConnectionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListAppConnectionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListAppConnectionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListAppConnectionsRequest}
 */
proto.ListAppConnectionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListAppConnectionsRequest;
  return proto.ListAppConnectionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListAppConnectionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListAppConnectionsRequest}
 */
proto.ListAppConnectionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListAppConnectionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListAppConnectionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListAppConnectionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListAppConnectionsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListAppConnectionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListAppConnectionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListAppConnectionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = msg.getError()) && common_pb.Error.toObject(includeInstance, f),
    appConnectionsList: jspb.Message.toObjectList(msg.getAppConnectionsList(),
    proto.AppConnectionInformation.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListAppConnectionsResponse}
 */
proto.ListAppConnectionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListAppConnectionsResponse;
  return proto.ListAppConnectionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListAppConnectionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListAppConnectionsResponse}
 */
proto.ListAppConnectionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Error;
      reader.readMessage(value,common_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 2:
      var value = new proto.AppConnectionInformation;
      reader.readMessage(value,proto.AppConnectionInformation.deserializeBinaryFromReader);
      msg.addAppConnections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListAppConnectionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListAppConnectionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListAppConnectionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getAppConnectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.AppConnectionInformation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Error error = 1;
 * @return {?proto.Error}
 */
proto.ListAppConnectionsResponse.prototype.getError = function() {
  return /** @type{?proto.Error} */ (
    jspb.Message.getWrapperField(this, common_pb.Error, 1));
};


/**
 * @param {?proto.Error|undefined} value
 * @return {!proto.ListAppConnectionsResponse} returns this
*/
proto.ListAppConnectionsResponse.prototype.setError = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ListAppConnectionsResponse} returns this
 */
proto.ListAppConnectionsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ListAppConnectionsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated AppConnectionInformation app_connections = 2;
 * @return {!Array<!proto.AppConnectionInformation>}
 */
proto.ListAppConnectionsResponse.prototype.getAppConnectionsList = function() {
  return /** @type{!Array<!proto.AppConnectionInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AppConnectionInformation, 2));
};


/**
 * @param {!Array<!proto.AppConnectionInformation>} value
 * @return {!proto.ListAppConnectionsResponse} returns this
*/
proto.ListAppConnectionsResponse.prototype.setAppConnectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.AppConnectionInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AppConnectionInformation}
 */
proto.ListAppConnectionsResponse.prototype.addAppConnections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.AppConnectionInformation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListAppConnectionsResponse} returns this
 */
proto.ListAppConnectionsResponse.prototype.clearAppConnectionsList = function() {
  return this.setAppConnectionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.MatchedResources.repeatedFields_ = [1,2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MatchedResources.prototype.toObject = function(opt_includeInstance) {
  return proto.MatchedResources.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MatchedResources} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchedResources.toObject = function(includeInstance, msg) {
  var f, obj = {
    matchedinstancesList: jspb.Message.toObjectList(msg.getMatchedinstancesList(),
    cloud_request_pb.Instance.toObject, includeInstance),
    matchedpodsList: jspb.Message.toObjectList(msg.getMatchedpodsList(),
    cloud_request_pb.Pod.toObject, includeInstance),
    matchedsubnetsList: jspb.Message.toObjectList(msg.getMatchedsubnetsList(),
    cloud_request_pb.Subnet.toObject, includeInstance),
    matchedservicesList: jspb.Message.toObjectList(msg.getMatchedservicesList(),
    cloud_request_pb.K8sService.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MatchedResources}
 */
proto.MatchedResources.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MatchedResources;
  return proto.MatchedResources.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MatchedResources} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MatchedResources}
 */
proto.MatchedResources.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cloud_request_pb.Instance;
      reader.readMessage(value,cloud_request_pb.Instance.deserializeBinaryFromReader);
      msg.addMatchedinstances(value);
      break;
    case 2:
      var value = new cloud_request_pb.Pod;
      reader.readMessage(value,cloud_request_pb.Pod.deserializeBinaryFromReader);
      msg.addMatchedpods(value);
      break;
    case 3:
      var value = new cloud_request_pb.Subnet;
      reader.readMessage(value,cloud_request_pb.Subnet.deserializeBinaryFromReader);
      msg.addMatchedsubnets(value);
      break;
    case 4:
      var value = new cloud_request_pb.K8sService;
      reader.readMessage(value,cloud_request_pb.K8sService.deserializeBinaryFromReader);
      msg.addMatchedservices(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MatchedResources.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MatchedResources.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MatchedResources} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MatchedResources.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchedinstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cloud_request_pb.Instance.serializeBinaryToWriter
    );
  }
  f = message.getMatchedpodsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      cloud_request_pb.Pod.serializeBinaryToWriter
    );
  }
  f = message.getMatchedsubnetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cloud_request_pb.Subnet.serializeBinaryToWriter
    );
  }
  f = message.getMatchedservicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cloud_request_pb.K8sService.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Instance matchedInstances = 1;
 * @return {!Array<!proto.Instance>}
 */
proto.MatchedResources.prototype.getMatchedinstancesList = function() {
  return /** @type{!Array<!proto.Instance>} */ (
    jspb.Message.getRepeatedWrapperField(this, cloud_request_pb.Instance, 1));
};


/**
 * @param {!Array<!proto.Instance>} value
 * @return {!proto.MatchedResources} returns this
*/
proto.MatchedResources.prototype.setMatchedinstancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Instance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Instance}
 */
proto.MatchedResources.prototype.addMatchedinstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Instance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MatchedResources} returns this
 */
proto.MatchedResources.prototype.clearMatchedinstancesList = function() {
  return this.setMatchedinstancesList([]);
};


/**
 * repeated Pod matchedPods = 2;
 * @return {!Array<!proto.Pod>}
 */
proto.MatchedResources.prototype.getMatchedpodsList = function() {
  return /** @type{!Array<!proto.Pod>} */ (
    jspb.Message.getRepeatedWrapperField(this, cloud_request_pb.Pod, 2));
};


/**
 * @param {!Array<!proto.Pod>} value
 * @return {!proto.MatchedResources} returns this
*/
proto.MatchedResources.prototype.setMatchedpodsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Pod=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Pod}
 */
proto.MatchedResources.prototype.addMatchedpods = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Pod, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MatchedResources} returns this
 */
proto.MatchedResources.prototype.clearMatchedpodsList = function() {
  return this.setMatchedpodsList([]);
};


/**
 * repeated Subnet matchedSubnets = 3;
 * @return {!Array<!proto.Subnet>}
 */
proto.MatchedResources.prototype.getMatchedsubnetsList = function() {
  return /** @type{!Array<!proto.Subnet>} */ (
    jspb.Message.getRepeatedWrapperField(this, cloud_request_pb.Subnet, 3));
};


/**
 * @param {!Array<!proto.Subnet>} value
 * @return {!proto.MatchedResources} returns this
*/
proto.MatchedResources.prototype.setMatchedsubnetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.Subnet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Subnet}
 */
proto.MatchedResources.prototype.addMatchedsubnets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.Subnet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MatchedResources} returns this
 */
proto.MatchedResources.prototype.clearMatchedsubnetsList = function() {
  return this.setMatchedsubnetsList([]);
};


/**
 * repeated K8sService matchedServices = 4;
 * @return {!Array<!proto.K8sService>}
 */
proto.MatchedResources.prototype.getMatchedservicesList = function() {
  return /** @type{!Array<!proto.K8sService>} */ (
    jspb.Message.getRepeatedWrapperField(this, cloud_request_pb.K8sService, 4));
};


/**
 * @param {!Array<!proto.K8sService>} value
 * @return {!proto.MatchedResources} returns this
*/
proto.MatchedResources.prototype.setMatchedservicesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.K8sService=} opt_value
 * @param {number=} opt_index
 * @return {!proto.K8sService}
 */
proto.MatchedResources.prototype.addMatchedservices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.K8sService, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.MatchedResources} returns this
 */
proto.MatchedResources.prototype.clearMatchedservicesList = function() {
  return this.setMatchedservicesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appconnectionconfig: (f = msg.getAppconnectionconfig()) && proto.AppConnection.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    networkdomainconnectionname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sourcematched: (f = msg.getSourcematched()) && proto.MatchedResources.toObject(includeInstance, f),
    destinationmatched: (f = msg.getDestinationmatched()) && proto.MatchedResources.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionInformation}
 */
proto.AppConnectionInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionInformation;
  return proto.AppConnectionInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionInformation}
 */
proto.AppConnectionInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.AppConnection;
      reader.readMessage(value,proto.AppConnection.deserializeBinaryFromReader);
      msg.setAppconnectionconfig(value);
      break;
    case 3:
      var value = /** @type {!proto.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkdomainconnectionname(value);
      break;
    case 5:
      var value = new proto.MatchedResources;
      reader.readMessage(value,proto.MatchedResources.deserializeBinaryFromReader);
      msg.setSourcematched(value);
      break;
    case 6:
      var value = new proto.MatchedResources;
      reader.readMessage(value,proto.MatchedResources.deserializeBinaryFromReader);
      msg.setDestinationmatched(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppconnectionconfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AppConnection.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getNetworkdomainconnectionname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSourcematched();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.MatchedResources.serializeBinaryToWriter
    );
  }
  f = message.getDestinationmatched();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.MatchedResources.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.AppConnectionInformation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionInformation} returns this
 */
proto.AppConnectionInformation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppConnection appConnectionConfig = 2;
 * @return {?proto.AppConnection}
 */
proto.AppConnectionInformation.prototype.getAppconnectionconfig = function() {
  return /** @type{?proto.AppConnection} */ (
    jspb.Message.getWrapperField(this, proto.AppConnection, 2));
};


/**
 * @param {?proto.AppConnection|undefined} value
 * @return {!proto.AppConnectionInformation} returns this
*/
proto.AppConnectionInformation.prototype.setAppconnectionconfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionInformation} returns this
 */
proto.AppConnectionInformation.prototype.clearAppconnectionconfig = function() {
  return this.setAppconnectionconfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionInformation.prototype.hasAppconnectionconfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Status status = 3;
 * @return {!proto.Status}
 */
proto.AppConnectionInformation.prototype.getStatus = function() {
  return /** @type {!proto.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.Status} value
 * @return {!proto.AppConnectionInformation} returns this
 */
proto.AppConnectionInformation.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string NetworkDomainConnectionName = 4;
 * @return {string}
 */
proto.AppConnectionInformation.prototype.getNetworkdomainconnectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionInformation} returns this
 */
proto.AppConnectionInformation.prototype.setNetworkdomainconnectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional MatchedResources sourceMatched = 5;
 * @return {?proto.MatchedResources}
 */
proto.AppConnectionInformation.prototype.getSourcematched = function() {
  return /** @type{?proto.MatchedResources} */ (
    jspb.Message.getWrapperField(this, proto.MatchedResources, 5));
};


/**
 * @param {?proto.MatchedResources|undefined} value
 * @return {!proto.AppConnectionInformation} returns this
*/
proto.AppConnectionInformation.prototype.setSourcematched = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionInformation} returns this
 */
proto.AppConnectionInformation.prototype.clearSourcematched = function() {
  return this.setSourcematched(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionInformation.prototype.hasSourcematched = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional MatchedResources destinationMatched = 6;
 * @return {?proto.MatchedResources}
 */
proto.AppConnectionInformation.prototype.getDestinationmatched = function() {
  return /** @type{?proto.MatchedResources} */ (
    jspb.Message.getWrapperField(this, proto.MatchedResources, 6));
};


/**
 * @param {?proto.MatchedResources|undefined} value
 * @return {!proto.AppConnectionInformation} returns this
*/
proto.AppConnectionInformation.prototype.setDestinationmatched = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionInformation} returns this
 */
proto.AppConnectionInformation.prototype.clearDestinationmatched = function() {
  return this.setDestinationmatched(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionInformation.prototype.hasDestinationmatched = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetMatchedResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetMatchedResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetMatchedResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMatchedResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcematched: (f = msg.getSourcematched()) && proto.MatchedResources.toObject(includeInstance, f),
    destinationmatched: (f = msg.getDestinationmatched()) && proto.MatchedResources.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetMatchedResourcesResponse}
 */
proto.GetMatchedResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetMatchedResourcesResponse;
  return proto.GetMatchedResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetMatchedResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetMatchedResourcesResponse}
 */
proto.GetMatchedResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MatchedResources;
      reader.readMessage(value,proto.MatchedResources.deserializeBinaryFromReader);
      msg.setSourcematched(value);
      break;
    case 2:
      var value = new proto.MatchedResources;
      reader.readMessage(value,proto.MatchedResources.deserializeBinaryFromReader);
      msg.setDestinationmatched(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetMatchedResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetMatchedResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetMatchedResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetMatchedResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcematched();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MatchedResources.serializeBinaryToWriter
    );
  }
  f = message.getDestinationmatched();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.MatchedResources.serializeBinaryToWriter
    );
  }
};


/**
 * optional MatchedResources sourceMatched = 1;
 * @return {?proto.MatchedResources}
 */
proto.GetMatchedResourcesResponse.prototype.getSourcematched = function() {
  return /** @type{?proto.MatchedResources} */ (
    jspb.Message.getWrapperField(this, proto.MatchedResources, 1));
};


/**
 * @param {?proto.MatchedResources|undefined} value
 * @return {!proto.GetMatchedResourcesResponse} returns this
*/
proto.GetMatchedResourcesResponse.prototype.setSourcematched = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMatchedResourcesResponse} returns this
 */
proto.GetMatchedResourcesResponse.prototype.clearSourcematched = function() {
  return this.setSourcematched(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMatchedResourcesResponse.prototype.hasSourcematched = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MatchedResources destinationMatched = 2;
 * @return {?proto.MatchedResources}
 */
proto.GetMatchedResourcesResponse.prototype.getDestinationmatched = function() {
  return /** @type{?proto.MatchedResources} */ (
    jspb.Message.getWrapperField(this, proto.MatchedResources, 2));
};


/**
 * @param {?proto.MatchedResources|undefined} value
 * @return {!proto.GetMatchedResourcesResponse} returns this
*/
proto.GetMatchedResourcesResponse.prototype.setDestinationmatched = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetMatchedResourcesResponse} returns this
 */
proto.GetMatchedResourcesResponse.prototype.clearDestinationmatched = function() {
  return this.setDestinationmatched(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetMatchedResourcesResponse.prototype.hasDestinationmatched = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AppConnectionPolicy.prototype.toObject = function(opt_includeInstance) {
  return proto.AppConnectionPolicy.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AppConnectionPolicy} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionPolicy.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appConnection: (f = msg.getAppConnection()) && proto.AppConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AppConnectionPolicy}
 */
proto.AppConnectionPolicy.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AppConnectionPolicy;
  return proto.AppConnectionPolicy.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AppConnectionPolicy} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AppConnectionPolicy}
 */
proto.AppConnectionPolicy.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.AppConnection;
      reader.readMessage(value,proto.AppConnection.deserializeBinaryFromReader);
      msg.setAppConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AppConnectionPolicy.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AppConnectionPolicy.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AppConnectionPolicy} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AppConnectionPolicy.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.AppConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.AppConnectionPolicy.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AppConnectionPolicy} returns this
 */
proto.AppConnectionPolicy.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AppConnection app_connection = 2;
 * @return {?proto.AppConnection}
 */
proto.AppConnectionPolicy.prototype.getAppConnection = function() {
  return /** @type{?proto.AppConnection} */ (
    jspb.Message.getWrapperField(this, proto.AppConnection, 2));
};


/**
 * @param {?proto.AppConnection|undefined} value
 * @return {!proto.AppConnectionPolicy} returns this
*/
proto.AppConnectionPolicy.prototype.setAppConnection = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AppConnectionPolicy} returns this
 */
proto.AppConnectionPolicy.prototype.clearAppConnection = function() {
  return this.setAppConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AppConnectionPolicy.prototype.hasAppConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateAppConnectionPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateAppConnectionPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateAppConnectionPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateAppConnectionPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    appConnection: (f = msg.getAppConnection()) && proto.AppConnection.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateAppConnectionPolicyRequest}
 */
proto.CreateAppConnectionPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateAppConnectionPolicyRequest;
  return proto.CreateAppConnectionPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateAppConnectionPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateAppConnectionPolicyRequest}
 */
proto.CreateAppConnectionPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AppConnection;
      reader.readMessage(value,proto.AppConnection.deserializeBinaryFromReader);
      msg.setAppConnection(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateAppConnectionPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreateAppConnectionPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreateAppConnectionPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateAppConnectionPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppConnection();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.AppConnection.serializeBinaryToWriter
    );
  }
};


/**
 * optional AppConnection app_connection = 1;
 * @return {?proto.AppConnection}
 */
proto.CreateAppConnectionPolicyRequest.prototype.getAppConnection = function() {
  return /** @type{?proto.AppConnection} */ (
    jspb.Message.getWrapperField(this, proto.AppConnection, 1));
};


/**
 * @param {?proto.AppConnection|undefined} value
 * @return {!proto.CreateAppConnectionPolicyRequest} returns this
*/
proto.CreateAppConnectionPolicyRequest.prototype.setAppConnection = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CreateAppConnectionPolicyRequest} returns this
 */
proto.CreateAppConnectionPolicyRequest.prototype.clearAppConnection = function() {
  return this.setAppConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CreateAppConnectionPolicyRequest.prototype.hasAppConnection = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateAppConnectionPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateAppConnectionPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateAppConnectionPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateAppConnectionPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateAppConnectionPolicyResponse}
 */
proto.CreateAppConnectionPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateAppConnectionPolicyResponse;
  return proto.CreateAppConnectionPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateAppConnectionPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateAppConnectionPolicyResponse}
 */
proto.CreateAppConnectionPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateAppConnectionPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreateAppConnectionPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreateAppConnectionPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateAppConnectionPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.CreateAppConnectionPolicyResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateAppConnectionPolicyResponse} returns this
 */
proto.CreateAppConnectionPolicyResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.CreateAppConnectionPolicyResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateAppConnectionPolicyResponse} returns this
 */
proto.CreateAppConnectionPolicyResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAppConnectionPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAppConnectionPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAppConnectionPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAppConnectionPolicyRequest}
 */
proto.GetAppConnectionPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAppConnectionPolicyRequest;
  return proto.GetAppConnectionPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAppConnectionPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAppConnectionPolicyRequest}
 */
proto.GetAppConnectionPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAppConnectionPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAppConnectionPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAppConnectionPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.GetAppConnectionPolicyRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetAppConnectionPolicyRequest} returns this
 */
proto.GetAppConnectionPolicyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetAppConnectionPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetAppConnectionPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetAppConnectionPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appConnectionPolicy: (f = msg.getAppConnectionPolicy()) && proto.AppConnectionPolicy.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetAppConnectionPolicyResponse}
 */
proto.GetAppConnectionPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetAppConnectionPolicyResponse;
  return proto.GetAppConnectionPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetAppConnectionPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetAppConnectionPolicyResponse}
 */
proto.GetAppConnectionPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AppConnectionPolicy;
      reader.readMessage(value,proto.AppConnectionPolicy.deserializeBinaryFromReader);
      msg.setAppConnectionPolicy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetAppConnectionPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetAppConnectionPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetAppConnectionPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetAppConnectionPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppConnectionPolicy();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.AppConnectionPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * optional AppConnectionPolicy app_connection_policy = 1;
 * @return {?proto.AppConnectionPolicy}
 */
proto.GetAppConnectionPolicyResponse.prototype.getAppConnectionPolicy = function() {
  return /** @type{?proto.AppConnectionPolicy} */ (
    jspb.Message.getWrapperField(this, proto.AppConnectionPolicy, 1));
};


/**
 * @param {?proto.AppConnectionPolicy|undefined} value
 * @return {!proto.GetAppConnectionPolicyResponse} returns this
*/
proto.GetAppConnectionPolicyResponse.prototype.setAppConnectionPolicy = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GetAppConnectionPolicyResponse} returns this
 */
proto.GetAppConnectionPolicyResponse.prototype.clearAppConnectionPolicy = function() {
  return this.setAppConnectionPolicy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetAppConnectionPolicyResponse.prototype.hasAppConnectionPolicy = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteAppConnectionPolicyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteAppConnectionPolicyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteAppConnectionPolicyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteAppConnectionPolicyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteAppConnectionPolicyRequest}
 */
proto.DeleteAppConnectionPolicyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteAppConnectionPolicyRequest;
  return proto.DeleteAppConnectionPolicyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteAppConnectionPolicyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteAppConnectionPolicyRequest}
 */
proto.DeleteAppConnectionPolicyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteAppConnectionPolicyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeleteAppConnectionPolicyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeleteAppConnectionPolicyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteAppConnectionPolicyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.DeleteAppConnectionPolicyRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeleteAppConnectionPolicyRequest} returns this
 */
proto.DeleteAppConnectionPolicyRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteAppConnectionPolicyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteAppConnectionPolicyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteAppConnectionPolicyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteAppConnectionPolicyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteAppConnectionPolicyResponse}
 */
proto.DeleteAppConnectionPolicyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteAppConnectionPolicyResponse;
  return proto.DeleteAppConnectionPolicyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteAppConnectionPolicyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteAppConnectionPolicyResponse}
 */
proto.DeleteAppConnectionPolicyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteAppConnectionPolicyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeleteAppConnectionPolicyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeleteAppConnectionPolicyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteAppConnectionPolicyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.DeleteAppConnectionPolicyResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeleteAppConnectionPolicyResponse} returns this
 */
proto.DeleteAppConnectionPolicyResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListAppConnectionPoliciesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ListAppConnectionPoliciesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListAppConnectionPoliciesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionPoliciesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListAppConnectionPoliciesRequest}
 */
proto.ListAppConnectionPoliciesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListAppConnectionPoliciesRequest;
  return proto.ListAppConnectionPoliciesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListAppConnectionPoliciesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListAppConnectionPoliciesRequest}
 */
proto.ListAppConnectionPoliciesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListAppConnectionPoliciesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListAppConnectionPoliciesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListAppConnectionPoliciesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionPoliciesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ListAppConnectionPoliciesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ListAppConnectionPoliciesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ListAppConnectionPoliciesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ListAppConnectionPoliciesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionPoliciesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appConnectionPoliciesList: jspb.Message.toObjectList(msg.getAppConnectionPoliciesList(),
    proto.AppConnectionPolicy.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ListAppConnectionPoliciesResponse}
 */
proto.ListAppConnectionPoliciesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ListAppConnectionPoliciesResponse;
  return proto.ListAppConnectionPoliciesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ListAppConnectionPoliciesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ListAppConnectionPoliciesResponse}
 */
proto.ListAppConnectionPoliciesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.AppConnectionPolicy;
      reader.readMessage(value,proto.AppConnectionPolicy.deserializeBinaryFromReader);
      msg.addAppConnectionPolicies(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ListAppConnectionPoliciesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ListAppConnectionPoliciesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ListAppConnectionPoliciesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ListAppConnectionPoliciesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppConnectionPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.AppConnectionPolicy.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AppConnectionPolicy app_connection_policies = 1;
 * @return {!Array<!proto.AppConnectionPolicy>}
 */
proto.ListAppConnectionPoliciesResponse.prototype.getAppConnectionPoliciesList = function() {
  return /** @type{!Array<!proto.AppConnectionPolicy>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.AppConnectionPolicy, 1));
};


/**
 * @param {!Array<!proto.AppConnectionPolicy>} value
 * @return {!proto.ListAppConnectionPoliciesResponse} returns this
*/
proto.ListAppConnectionPoliciesResponse.prototype.setAppConnectionPoliciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.AppConnectionPolicy=} opt_value
 * @param {number=} opt_index
 * @return {!proto.AppConnectionPolicy}
 */
proto.ListAppConnectionPoliciesResponse.prototype.addAppConnectionPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.AppConnectionPolicy, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ListAppConnectionPoliciesResponse} returns this
 */
proto.ListAppConnectionPoliciesResponse.prototype.clearAppConnectionPoliciesList = function() {
  return this.setAppConnectionPoliciesList([]);
};


/**
 * @enum {number}
 */
proto.Controller = {
  CISCO_VMANAGE: 0,
  CISCO_MERAKI_DASHBOARD: 1,
  VERSA: 2,
  JUNIPER: 3,
  PALO_ALTO: 4,
  TURNIUM: 5,
  TUFIN: 6,
  AWS_CLOUDWAN: 7
};

/**
 * @enum {number}
 */
proto.AccessType = {
  ALLOW: 0,
  DENY: 1
};

/**
 * @enum {number}
 */
proto.Kind = {
  VM: 0,
  CONTAINER: 1,
  POD: 2
};

goog.object.extend(exports, proto);
