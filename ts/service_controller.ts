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
