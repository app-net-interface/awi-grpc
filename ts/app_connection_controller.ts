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

/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import {
  AppConnection,
  AppConnectionEventsResponse,
  AppConnectionResponse,
  AppConnectionStatisticsResponse,
  AppConnectionStatusResponse,
  AppDisconnectionRequest,
  AppDisconnectionResponse,
  CreateAppConnectionPolicyRequest,
  CreateAppConnectionPolicyResponse,
  DeleteAppConnectionPolicyRequest,
  DeleteAppConnectionPolicyResponse,
  GetAppConnectionEventsRequest,
  GetAppConnectionPolicyRequest,
  GetAppConnectionPolicyResponse,
  GetAppConnectionRequest,
  GetAppConnectionResponse,
  GetAppConnectionStatisticsRequest,
  GetAppConnectionStatusRequest,
  GetMatchedResourcesResponse,
  ListAppConnectionPoliciesRequest,
  ListAppConnectionPoliciesResponse,
  ListAppConnectionsRequest,
  ListAppConnectionsResponse,
} from "./app_connection";

export const protobufPackage = "";

export type AppConnectionControllerDefinition = typeof AppConnectionControllerDefinition;
export const AppConnectionControllerDefinition = {
  name: "AppConnectionController",
  fullName: "AppConnectionController",
  methods: {
    connectApps: {
      name: "ConnectApps",
      requestType: AppConnection,
      requestStream: false,
      responseType: AppConnectionResponse,
      responseStream: false,
      options: {},
    },
    disconnectApps: {
      name: "DisconnectApps",
      requestType: AppDisconnectionRequest,
      requestStream: false,
      responseType: AppDisconnectionResponse,
      responseStream: false,
      options: {},
    },
    getAppConnection: {
      name: "GetAppConnection",
      requestType: GetAppConnectionRequest,
      requestStream: false,
      responseType: GetAppConnectionResponse,
      responseStream: false,
      options: {},
    },
    /** List all connections that can connect different workloads. */
    listConnectedApps: {
      name: "ListConnectedApps",
      requestType: ListAppConnectionsRequest,
      requestStream: false,
      responseType: ListAppConnectionsResponse,
      responseStream: false,
      options: {},
    },
    getAppConnectionStatus: {
      name: "GetAppConnectionStatus",
      requestType: GetAppConnectionStatusRequest,
      requestStream: false,
      responseType: AppConnectionStatusResponse,
      responseStream: false,
      options: {},
    },
    getAppConnectionStatistics: {
      name: "GetAppConnectionStatistics",
      requestType: GetAppConnectionStatisticsRequest,
      requestStream: false,
      responseType: AppConnectionStatisticsResponse,
      responseStream: false,
      options: {},
    },
    getAppConnectionEvents: {
      name: "GetAppConnectionEvents",
      requestType: GetAppConnectionEventsRequest,
      requestStream: false,
      responseType: AppConnectionEventsResponse,
      responseStream: false,
      options: {},
    },
    getMatchedResources: {
      name: "GetMatchedResources",
      requestType: AppConnection,
      requestStream: false,
      responseType: GetMatchedResourcesResponse,
      responseStream: false,
      options: {},
    },
    createAppConnectionPolicy: {
      name: "CreateAppConnectionPolicy",
      requestType: CreateAppConnectionPolicyRequest,
      requestStream: false,
      responseType: CreateAppConnectionPolicyResponse,
      responseStream: false,
      options: {},
    },
    getAppConnectionPolicy: {
      name: "GetAppConnectionPolicy",
      requestType: GetAppConnectionPolicyRequest,
      requestStream: false,
      responseType: GetAppConnectionPolicyResponse,
      responseStream: false,
      options: {},
    },
    deleteAppConnectionPolicy: {
      name: "DeleteAppConnectionPolicy",
      requestType: DeleteAppConnectionPolicyRequest,
      requestStream: false,
      responseType: DeleteAppConnectionPolicyResponse,
      responseStream: false,
      options: {},
    },
    listAppConnectionPolicies: {
      name: "ListAppConnectionPolicies",
      requestType: ListAppConnectionPoliciesRequest,
      requestStream: false,
      responseType: ListAppConnectionPoliciesResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface AppConnectionControllerServiceImplementation<CallContextExt = {}> {
  connectApps(
    request: AppConnection,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AppConnectionResponse>>;
  disconnectApps(
    request: AppDisconnectionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AppDisconnectionResponse>>;
  getAppConnection(
    request: GetAppConnectionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetAppConnectionResponse>>;
  /** List all connections that can connect different workloads. */
  listConnectedApps(
    request: ListAppConnectionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListAppConnectionsResponse>>;
  getAppConnectionStatus(
    request: GetAppConnectionStatusRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AppConnectionStatusResponse>>;
  getAppConnectionStatistics(
    request: GetAppConnectionStatisticsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AppConnectionStatisticsResponse>>;
  getAppConnectionEvents(
    request: GetAppConnectionEventsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AppConnectionEventsResponse>>;
  getMatchedResources(
    request: AppConnection,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetMatchedResourcesResponse>>;
  createAppConnectionPolicy(
    request: CreateAppConnectionPolicyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateAppConnectionPolicyResponse>>;
  getAppConnectionPolicy(
    request: GetAppConnectionPolicyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetAppConnectionPolicyResponse>>;
  deleteAppConnectionPolicy(
    request: DeleteAppConnectionPolicyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DeleteAppConnectionPolicyResponse>>;
  listAppConnectionPolicies(
    request: ListAppConnectionPoliciesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListAppConnectionPoliciesResponse>>;
}

export interface AppConnectionControllerClient<CallOptionsExt = {}> {
  connectApps(
    request: DeepPartial<AppConnection>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AppConnectionResponse>;
  disconnectApps(
    request: DeepPartial<AppDisconnectionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AppDisconnectionResponse>;
  getAppConnection(
    request: DeepPartial<GetAppConnectionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetAppConnectionResponse>;
  /** List all connections that can connect different workloads. */
  listConnectedApps(
    request: DeepPartial<ListAppConnectionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListAppConnectionsResponse>;
  getAppConnectionStatus(
    request: DeepPartial<GetAppConnectionStatusRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AppConnectionStatusResponse>;
  getAppConnectionStatistics(
    request: DeepPartial<GetAppConnectionStatisticsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AppConnectionStatisticsResponse>;
  getAppConnectionEvents(
    request: DeepPartial<GetAppConnectionEventsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AppConnectionEventsResponse>;
  getMatchedResources(
    request: DeepPartial<AppConnection>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetMatchedResourcesResponse>;
  createAppConnectionPolicy(
    request: DeepPartial<CreateAppConnectionPolicyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateAppConnectionPolicyResponse>;
  getAppConnectionPolicy(
    request: DeepPartial<GetAppConnectionPolicyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetAppConnectionPolicyResponse>;
  deleteAppConnectionPolicy(
    request: DeepPartial<DeleteAppConnectionPolicyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DeleteAppConnectionPolicyResponse>;
  listAppConnectionPolicies(
    request: DeepPartial<ListAppConnectionPoliciesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListAppConnectionPoliciesResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
