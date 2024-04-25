/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Status } from "./common";
import { NetworkSLA } from "./network_policy";

export const protobufPackage = "";

export interface NetworkSLACreateResponse {
  status: Status;
}

export interface NetworkSLADeleteRequest {
  name: string;
}

export interface NetworkSLADeleteResponse {
}

/** could be filled with filters in the future */
export interface NetworkSLAListReqest {
}

export interface NetworkSLAListResponse {
  networkSLAs: NetworkSLA[];
}

function createBaseNetworkSLACreateResponse(): NetworkSLACreateResponse {
  return { status: 0 };
}

export const NetworkSLACreateResponse = {
  encode(message: NetworkSLACreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSLACreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSLACreateResponse();
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

  create(base?: DeepPartial<NetworkSLACreateResponse>): NetworkSLACreateResponse {
    return NetworkSLACreateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkSLACreateResponse>): NetworkSLACreateResponse {
    const message = createBaseNetworkSLACreateResponse();
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseNetworkSLADeleteRequest(): NetworkSLADeleteRequest {
  return { name: "" };
}

export const NetworkSLADeleteRequest = {
  encode(message: NetworkSLADeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSLADeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSLADeleteRequest();
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

  create(base?: DeepPartial<NetworkSLADeleteRequest>): NetworkSLADeleteRequest {
    return NetworkSLADeleteRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkSLADeleteRequest>): NetworkSLADeleteRequest {
    const message = createBaseNetworkSLADeleteRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseNetworkSLADeleteResponse(): NetworkSLADeleteResponse {
  return {};
}

export const NetworkSLADeleteResponse = {
  encode(_: NetworkSLADeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSLADeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSLADeleteResponse();
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

  create(base?: DeepPartial<NetworkSLADeleteResponse>): NetworkSLADeleteResponse {
    return NetworkSLADeleteResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<NetworkSLADeleteResponse>): NetworkSLADeleteResponse {
    const message = createBaseNetworkSLADeleteResponse();
    return message;
  },
};

function createBaseNetworkSLAListReqest(): NetworkSLAListReqest {
  return {};
}

export const NetworkSLAListReqest = {
  encode(_: NetworkSLAListReqest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSLAListReqest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSLAListReqest();
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

  create(base?: DeepPartial<NetworkSLAListReqest>): NetworkSLAListReqest {
    return NetworkSLAListReqest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<NetworkSLAListReqest>): NetworkSLAListReqest {
    const message = createBaseNetworkSLAListReqest();
    return message;
  },
};

function createBaseNetworkSLAListResponse(): NetworkSLAListResponse {
  return { networkSLAs: [] };
}

export const NetworkSLAListResponse = {
  encode(message: NetworkSLAListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.networkSLAs) {
      NetworkSLA.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSLAListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSLAListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.networkSLAs.push(NetworkSLA.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkSLAListResponse>): NetworkSLAListResponse {
    return NetworkSLAListResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkSLAListResponse>): NetworkSLAListResponse {
    const message = createBaseNetworkSLAListResponse();
    message.networkSLAs = object.networkSLAs?.map((e) => NetworkSLA.fromPartial(e)) || [];
    return message;
  },
};

export type NetworkSLAServiceDefinition = typeof NetworkSLAServiceDefinition;
export const NetworkSLAServiceDefinition = {
  name: "NetworkSLAService",
  fullName: "NetworkSLAService",
  methods: {
    createNetworkSLA: {
      name: "CreateNetworkSLA",
      requestType: NetworkSLA,
      requestStream: false,
      responseType: NetworkSLACreateResponse,
      responseStream: false,
      options: {},
    },
    deleteNetworkSLA: {
      name: "DeleteNetworkSLA",
      requestType: NetworkSLADeleteRequest,
      requestStream: false,
      responseType: NetworkSLADeleteResponse,
      responseStream: false,
      options: {},
    },
    listNetworkSLAs: {
      name: "ListNetworkSLAs",
      requestType: NetworkSLAListReqest,
      requestStream: false,
      responseType: NetworkSLAListResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface NetworkSLAServiceImplementation<CallContextExt = {}> {
  createNetworkSLA(
    request: NetworkSLA,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<NetworkSLACreateResponse>>;
  deleteNetworkSLA(
    request: NetworkSLADeleteRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<NetworkSLADeleteResponse>>;
  listNetworkSLAs(
    request: NetworkSLAListReqest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<NetworkSLAListResponse>>;
}

export interface NetworkSLAServiceClient<CallOptionsExt = {}> {
  createNetworkSLA(
    request: DeepPartial<NetworkSLA>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<NetworkSLACreateResponse>;
  deleteNetworkSLA(
    request: DeepPartial<NetworkSLADeleteRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<NetworkSLADeleteResponse>;
  listNetworkSLAs(
    request: DeepPartial<NetworkSLAListReqest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<NetworkSLAListResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
