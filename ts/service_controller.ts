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
  ConnectionRequest,
  ConnectionResponse,
  ConnectionStatusRequest,
  ConnectionStatusResponse,
  DisconnectRequest,
  DisconnectResponse,
  GetConnectionRequest,
  ListConnectionsRequest,
  ListConnectionsResponse,
} from "./network_domain_connection";

export const protobufPackage = "";

export type ConnectionControllerDefinition = typeof ConnectionControllerDefinition;
export const ConnectionControllerDefinition = {
  name: "ConnectionController",
  fullName: "ConnectionController",
  methods: {
    connect: {
      name: "Connect",
      requestType: ConnectionRequest,
      requestStream: false,
      responseType: ConnectionResponse,
      responseStream: false,
      options: {},
    },
    disconnect: {
      name: "Disconnect",
      requestType: DisconnectRequest,
      requestStream: false,
      responseType: DisconnectResponse,
      responseStream: false,
      options: {},
    },
    getConnection: {
      name: "GetConnection",
      requestType: GetConnectionRequest,
      requestStream: false,
      responseType: ConnectionResponse,
      responseStream: false,
      options: {},
    },
    listConnections: {
      name: "ListConnections",
      requestType: ListConnectionsRequest,
      requestStream: false,
      responseType: ListConnectionsResponse,
      responseStream: false,
      options: {},
    },
    getConnectionStatus: {
      name: "GetConnectionStatus",
      requestType: ConnectionStatusRequest,
      requestStream: false,
      responseType: ConnectionStatusResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ConnectionControllerServiceImplementation<CallContextExt = {}> {
  connect(request: ConnectionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ConnectionResponse>>;
  disconnect(
    request: DisconnectRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<DisconnectResponse>>;
  getConnection(
    request: GetConnectionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConnectionResponse>>;
  listConnections(
    request: ListConnectionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListConnectionsResponse>>;
  getConnectionStatus(
    request: ConnectionStatusRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ConnectionStatusResponse>>;
}

export interface ConnectionControllerClient<CallOptionsExt = {}> {
  connect(request: DeepPartial<ConnectionRequest>, options?: CallOptions & CallOptionsExt): Promise<ConnectionResponse>;
  disconnect(
    request: DeepPartial<DisconnectRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<DisconnectResponse>;
  getConnection(
    request: DeepPartial<GetConnectionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConnectionResponse>;
  listConnections(
    request: DeepPartial<ListConnectionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListConnectionsResponse>;
  getConnectionStatus(
    request: DeepPartial<ConnectionStatusRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ConnectionStatusResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
