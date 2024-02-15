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
import _m0 from "protobufjs/minimal";
import { Status } from "./common";
import { Security_AccessPolicy } from "./security_policies";

export const protobufPackage = "";

export interface AccessPolicyCreateRequest {
  accessPolicy: Security_AccessPolicy | undefined;
}

export interface AccessPolicyCreateResponse {
  status: Status;
}

export interface AccessPolicyDeleteRequest {
  name: string;
}

export interface AccessPolicyDeleteResponse {
}

export interface AccessPolicyListRequest {
}

export interface AccessPolicyListResponse {
  accessPolicies: Security_AccessPolicy[];
}

function createBaseAccessPolicyCreateRequest(): AccessPolicyCreateRequest {
  return { accessPolicy: undefined };
}

export const AccessPolicyCreateRequest = {
  encode(message: AccessPolicyCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessPolicy !== undefined) {
      Security_AccessPolicy.encode(message.accessPolicy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicyCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessPolicy = Security_AccessPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AccessPolicyCreateRequest>): AccessPolicyCreateRequest {
    return AccessPolicyCreateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicyCreateRequest>): AccessPolicyCreateRequest {
    const message = createBaseAccessPolicyCreateRequest();
    message.accessPolicy = (object.accessPolicy !== undefined && object.accessPolicy !== null)
      ? Security_AccessPolicy.fromPartial(object.accessPolicy)
      : undefined;
    return message;
  },
};

function createBaseAccessPolicyCreateResponse(): AccessPolicyCreateResponse {
  return { status: 0 };
}

export const AccessPolicyCreateResponse = {
  encode(message: AccessPolicyCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicyCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AccessPolicyCreateResponse>): AccessPolicyCreateResponse {
    return AccessPolicyCreateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicyCreateResponse>): AccessPolicyCreateResponse {
    const message = createBaseAccessPolicyCreateResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseAccessPolicyDeleteRequest(): AccessPolicyDeleteRequest {
  return { name: "" };
}

export const AccessPolicyDeleteRequest = {
  encode(message: AccessPolicyDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicyDeleteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AccessPolicyDeleteRequest>): AccessPolicyDeleteRequest {
    return AccessPolicyDeleteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicyDeleteRequest>): AccessPolicyDeleteRequest {
    const message = createBaseAccessPolicyDeleteRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAccessPolicyDeleteResponse(): AccessPolicyDeleteResponse {
  return {};
}

export const AccessPolicyDeleteResponse = {
  encode(_: AccessPolicyDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicyDeleteResponse();
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

  create(base?: DeepPartial<AccessPolicyDeleteResponse>): AccessPolicyDeleteResponse {
    return AccessPolicyDeleteResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AccessPolicyDeleteResponse>): AccessPolicyDeleteResponse {
    const message = createBaseAccessPolicyDeleteResponse();
    return message;
  },
};

function createBaseAccessPolicyListRequest(): AccessPolicyListRequest {
  return {};
}

export const AccessPolicyListRequest = {
  encode(_: AccessPolicyListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicyListRequest();
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

  create(base?: DeepPartial<AccessPolicyListRequest>): AccessPolicyListRequest {
    return AccessPolicyListRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<AccessPolicyListRequest>): AccessPolicyListRequest {
    const message = createBaseAccessPolicyListRequest();
    return message;
  },
};

function createBaseAccessPolicyListResponse(): AccessPolicyListResponse {
  return { accessPolicies: [] };
}

export const AccessPolicyListResponse = {
  encode(message: AccessPolicyListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accessPolicies) {
      Security_AccessPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicyListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicyListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessPolicies.push(Security_AccessPolicy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AccessPolicyListResponse>): AccessPolicyListResponse {
    return AccessPolicyListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicyListResponse>): AccessPolicyListResponse {
    const message = createBaseAccessPolicyListResponse();
    message.accessPolicies = object.accessPolicies?.map((e) => Security_AccessPolicy.fromPartial(e)) || [];
    return message;
  },
};

export type SecurityPolicyServiceDefinition = typeof SecurityPolicyServiceDefinition;
export const SecurityPolicyServiceDefinition = {
  name: "SecurityPolicyService",
  fullName: "SecurityPolicyService",
  methods: {
    createAccessPolicy: {
      name: "CreateAccessPolicy",
      requestType: AccessPolicyCreateRequest,
      requestStream: false,
      responseType: AccessPolicyCreateResponse,
      responseStream: false,
      options: {},
    },
    deleteAccessPolicy: {
      name: "DeleteAccessPolicy",
      requestType: AccessPolicyDeleteRequest,
      requestStream: false,
      responseType: AccessPolicyDeleteResponse,
      responseStream: false,
      options: {},
    },
    listAccessPolicies: {
      name: "ListAccessPolicies",
      requestType: AccessPolicyListRequest,
      requestStream: false,
      responseType: AccessPolicyListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface SecurityPolicyServiceImplementation<CallContextExt = {}> {
  createAccessPolicy(
    request: AccessPolicyCreateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AccessPolicyCreateResponse>>;
  deleteAccessPolicy(
    request: AccessPolicyDeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AccessPolicyDeleteResponse>>;
  listAccessPolicies(
    request: AccessPolicyListRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AccessPolicyListResponse>>;
}

export interface SecurityPolicyServiceClient<CallOptionsExt = {}> {
  createAccessPolicy(
    request: DeepPartial<AccessPolicyCreateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AccessPolicyCreateResponse>;
  deleteAccessPolicy(
    request: DeepPartial<AccessPolicyDeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AccessPolicyDeleteResponse>;
  listAccessPolicies(
    request: DeepPartial<AccessPolicyListRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AccessPolicyListResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
