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
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

/** Enums */
export enum State {
  UP = 0,
  DOWN = 1,
  UNRECOGNIZED = -1,
}

export enum Status {
  IN_PROGRESS = 0,
  SUCCESS = 1,
  FAILED = 2,
  WATCHING = 3,
  UNRECOGNIZED = -1,
}

export enum Scope {
  PRIVATE = 0,
  PUBLIC = 1,
  UNRECOGNIZED = -1,
}

export enum Direction {
  EGRESS = 0,
  INGRESS = 1,
  UNRECOGNIZED = -1,
}

/** REST API like error codes, but generic. */
export enum ErrorCode {
  OK = 0,
  INTERNAL_ERROR = 1,
  TOO_MANY_REQUESTS = 2,
  UNRECOGNIZED = -1,
}

/**
 * TBD  : Figure out what's important from an application admin's point of view
 * What information would be required if there is a need to debug a failure.
 */
export interface Statistics {
  packetsSent: number;
  packetsReceived: number;
  timeouts: number;
  retries: number;
  disconnects: number;
}

export interface Event {
  eventId: string;
  eventName: string;
  description: string;
}

export interface Error {
  errorCode: ErrorCode;
  description: string;
}

export interface ControllerGetCapabilitiesRequest {
}

export interface ControllerGetCapabilitiesResponse {
  c: ControllerCapabilities | undefined;
}

export interface ControllerCapabilities {
}

/** Remote Service messages */
export interface ServiceInfo {
  /** FQDN */
  serviceName: string;
  /** Service / clusterIP/nodePort/  Etc.message */
  serviceType: string;
  /** 32 subnet */
  serviceIp: string;
  /** For information purpose */
  clusterName: string;
  /** K8S or VM , or something else */
  clusterType: string;
  /**  */
  clusterId: string;
}

export interface ServiceInfo_Health {
  healthCheckUrl: string;
  errorCode: string;
  preferredQueryInterval: string;
}

function createBaseStatistics(): Statistics {
  return { packetsSent: 0, packetsReceived: 0, timeouts: 0, retries: 0, disconnects: 0 };
}

export const Statistics = {
  encode(message: Statistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packetsSent !== 0) {
      writer.uint32(8).uint64(message.packetsSent);
    }
    if (message.packetsReceived !== 0) {
      writer.uint32(16).uint64(message.packetsReceived);
    }
    if (message.timeouts !== 0) {
      writer.uint32(24).uint32(message.timeouts);
    }
    if (message.retries !== 0) {
      writer.uint32(32).uint32(message.retries);
    }
    if (message.disconnects !== 0) {
      writer.uint32(40).uint32(message.disconnects);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Statistics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.packetsSent = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.packetsReceived = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.timeouts = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.retries = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.disconnects = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Statistics>): Statistics {
    return Statistics.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Statistics>): Statistics {
    const message = createBaseStatistics();
    message.packetsSent = object.packetsSent ?? 0;
    message.packetsReceived = object.packetsReceived ?? 0;
    message.timeouts = object.timeouts ?? 0;
    message.retries = object.retries ?? 0;
    message.disconnects = object.disconnects ?? 0;
    return message;
  },
};

function createBaseEvent(): Event {
  return { eventId: "", eventName: "", description: "" };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventId !== "") {
      writer.uint32(10).string(message.eventId);
    }
    if (message.eventName !== "") {
      writer.uint32(18).string(message.eventName);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eventId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.eventName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Event>): Event {
    return Event.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Event>): Event {
    const message = createBaseEvent();
    message.eventId = object.eventId ?? "";
    message.eventName = object.eventName ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseError(): Error {
  return { errorCode: 0, description: "" };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.errorCode !== 0) {
      writer.uint32(8).int32(message.errorCode);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.errorCode = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Error>): Error {
    return Error.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Error>): Error {
    const message = createBaseError();
    message.errorCode = object.errorCode ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseControllerGetCapabilitiesRequest(): ControllerGetCapabilitiesRequest {
  return {};
}

export const ControllerGetCapabilitiesRequest = {
  encode(_: ControllerGetCapabilitiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGetCapabilitiesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerGetCapabilitiesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ControllerGetCapabilitiesRequest>): ControllerGetCapabilitiesRequest {
    return ControllerGetCapabilitiesRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ControllerGetCapabilitiesRequest>): ControllerGetCapabilitiesRequest {
    const message = createBaseControllerGetCapabilitiesRequest();
    return message;
  },
};

function createBaseControllerGetCapabilitiesResponse(): ControllerGetCapabilitiesResponse {
  return { c: undefined };
}

export const ControllerGetCapabilitiesResponse = {
  encode(message: ControllerGetCapabilitiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.c !== undefined) {
      ControllerCapabilities.encode(message.c, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerGetCapabilitiesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerGetCapabilitiesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.c = ControllerCapabilities.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ControllerGetCapabilitiesResponse>): ControllerGetCapabilitiesResponse {
    return ControllerGetCapabilitiesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ControllerGetCapabilitiesResponse>): ControllerGetCapabilitiesResponse {
    const message = createBaseControllerGetCapabilitiesResponse();
    message.c = (object.c !== undefined && object.c !== null)
      ? ControllerCapabilities.fromPartial(object.c)
      : undefined;
    return message;
  },
};

function createBaseControllerCapabilities(): ControllerCapabilities {
  return {};
}

export const ControllerCapabilities = {
  encode(_: ControllerCapabilities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControllerCapabilities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerCapabilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ControllerCapabilities>): ControllerCapabilities {
    return ControllerCapabilities.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ControllerCapabilities>): ControllerCapabilities {
    const message = createBaseControllerCapabilities();
    return message;
  },
};

function createBaseServiceInfo(): ServiceInfo {
  return { serviceName: "", serviceType: "", serviceIp: "", clusterName: "", clusterType: "", clusterId: "" };
}

export const ServiceInfo = {
  encode(message: ServiceInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceName !== "") {
      writer.uint32(10).string(message.serviceName);
    }
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    if (message.serviceIp !== "") {
      writer.uint32(26).string(message.serviceIp);
    }
    if (message.clusterName !== "") {
      writer.uint32(34).string(message.clusterName);
    }
    if (message.clusterType !== "") {
      writer.uint32(42).string(message.clusterType);
    }
    if (message.clusterId !== "") {
      writer.uint32(50).string(message.clusterId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serviceIp = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.clusterName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.clusterType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.clusterId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ServiceInfo>): ServiceInfo {
    return ServiceInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceInfo>): ServiceInfo {
    const message = createBaseServiceInfo();
    message.serviceName = object.serviceName ?? "";
    message.serviceType = object.serviceType ?? "";
    message.serviceIp = object.serviceIp ?? "";
    message.clusterName = object.clusterName ?? "";
    message.clusterType = object.clusterType ?? "";
    message.clusterId = object.clusterId ?? "";
    return message;
  },
};

function createBaseServiceInfo_Health(): ServiceInfo_Health {
  return { healthCheckUrl: "", errorCode: "", preferredQueryInterval: "" };
}

export const ServiceInfo_Health = {
  encode(message: ServiceInfo_Health, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.healthCheckUrl !== "") {
      writer.uint32(10).string(message.healthCheckUrl);
    }
    if (message.errorCode !== "") {
      writer.uint32(18).string(message.errorCode);
    }
    if (message.preferredQueryInterval !== "") {
      writer.uint32(26).string(message.preferredQueryInterval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceInfo_Health {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceInfo_Health();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.healthCheckUrl = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errorCode = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.preferredQueryInterval = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ServiceInfo_Health>): ServiceInfo_Health {
    return ServiceInfo_Health.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceInfo_Health>): ServiceInfo_Health {
    const message = createBaseServiceInfo_Health();
    message.healthCheckUrl = object.healthCheckUrl ?? "";
    message.errorCode = object.errorCode ?? "";
    message.preferredQueryInterval = object.preferredQueryInterval ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
