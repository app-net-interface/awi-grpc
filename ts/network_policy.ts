/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum Priority {
  BUSINESS_CRITICAL = 0,
  MISSION_CRITICAL = 1,
  ESSENTIAL = 2,
  STRATEGIC = 3,
  COMPLIANCE = 4,
  CUSTOMER_FACING = 5,
  OPERATIONAL = 6,
  SUPPORT = 7,
  UNRECOGNIZED = -1,
}

export enum EnforcementRequestType {
  HARD = 0,
  SOFT = 1,
  UNRECOGNIZED = -1,
}

export interface NetworkSLA {
  metadata: NetworkSLA_Metadata | undefined;
  trafficProfile:
    | TrafficProfile
    | undefined;
  /** Don't use enums for now as they are problematic in CRD spec build */
  priority: string;
  enforcementRequest: EnforcementRequest | undefined;
}

export interface NetworkSLA_Metadata {
  name: string;
  description: string;
  creationTimestamp: string;
  modificationTimestamp: string;
}

export interface TrafficProfile {
  bandwidth: number;
  jitter: number;
  latency: number;
  loss: number;
}

export interface EnforcementRequest {
  /** Don't use enums for now as they are problematic in CRD spec build */
  type: string;
}

export interface Countries {
  include: string[];
  exclude: string[];
}

export interface Regions {
  countries: Countries | undefined;
}

export interface NetworkPath {
  metadata: NetworkPath_Metadata | undefined;
  regions: Regions | undefined;
}

export interface NetworkPath_Metadata {
  name: string;
  description: string;
  creationTimestamp: string;
  modificationTimestamp: string;
}

function createBaseNetworkSLA(): NetworkSLA {
  return { metadata: undefined, trafficProfile: undefined, priority: "", enforcementRequest: undefined };
}

export const NetworkSLA = {
  encode(message: NetworkSLA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      NetworkSLA_Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.trafficProfile !== undefined) {
      TrafficProfile.encode(message.trafficProfile, writer.uint32(18).fork()).ldelim();
    }
    if (message.priority !== "") {
      writer.uint32(26).string(message.priority);
    }
    if (message.enforcementRequest !== undefined) {
      EnforcementRequest.encode(message.enforcementRequest, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSLA {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSLA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = NetworkSLA_Metadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trafficProfile = TrafficProfile.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.priority = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enforcementRequest = EnforcementRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkSLA>): NetworkSLA {
    return NetworkSLA.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkSLA>): NetworkSLA {
    const message = createBaseNetworkSLA();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? NetworkSLA_Metadata.fromPartial(object.metadata)
      : undefined;
    message.trafficProfile = (object.trafficProfile !== undefined && object.trafficProfile !== null)
      ? TrafficProfile.fromPartial(object.trafficProfile)
      : undefined;
    message.priority = object.priority ?? "";
    message.enforcementRequest = (object.enforcementRequest !== undefined && object.enforcementRequest !== null)
      ? EnforcementRequest.fromPartial(object.enforcementRequest)
      : undefined;
    return message;
  },
};

function createBaseNetworkSLA_Metadata(): NetworkSLA_Metadata {
  return { name: "", description: "", creationTimestamp: "", modificationTimestamp: "" };
}

export const NetworkSLA_Metadata = {
  encode(message: NetworkSLA_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(26).string(message.creationTimestamp);
    }
    if (message.modificationTimestamp !== "") {
      writer.uint32(34).string(message.modificationTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkSLA_Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkSLA_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creationTimestamp = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.modificationTimestamp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkSLA_Metadata>): NetworkSLA_Metadata {
    return NetworkSLA_Metadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkSLA_Metadata>): NetworkSLA_Metadata {
    const message = createBaseNetworkSLA_Metadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.creationTimestamp = object.creationTimestamp ?? "";
    message.modificationTimestamp = object.modificationTimestamp ?? "";
    return message;
  },
};

function createBaseTrafficProfile(): TrafficProfile {
  return { bandwidth: 0, jitter: 0, latency: 0, loss: 0 };
}

export const TrafficProfile = {
  encode(message: TrafficProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bandwidth !== 0) {
      writer.uint32(13).float(message.bandwidth);
    }
    if (message.jitter !== 0) {
      writer.uint32(21).float(message.jitter);
    }
    if (message.latency !== 0) {
      writer.uint32(29).float(message.latency);
    }
    if (message.loss !== 0) {
      writer.uint32(37).float(message.loss);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TrafficProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrafficProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 13) {
            break;
          }

          message.bandwidth = reader.float();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.jitter = reader.float();
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.latency = reader.float();
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.loss = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<TrafficProfile>): TrafficProfile {
    return TrafficProfile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TrafficProfile>): TrafficProfile {
    const message = createBaseTrafficProfile();
    message.bandwidth = object.bandwidth ?? 0;
    message.jitter = object.jitter ?? 0;
    message.latency = object.latency ?? 0;
    message.loss = object.loss ?? 0;
    return message;
  },
};

function createBaseEnforcementRequest(): EnforcementRequest {
  return { type: "" };
}

export const EnforcementRequest = {
  encode(message: EnforcementRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnforcementRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnforcementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<EnforcementRequest>): EnforcementRequest {
    return EnforcementRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<EnforcementRequest>): EnforcementRequest {
    const message = createBaseEnforcementRequest();
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseCountries(): Countries {
  return { include: [], exclude: [] };
}

export const Countries = {
  encode(message: Countries, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.include) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.exclude) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Countries {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCountries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.include.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.exclude.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Countries>): Countries {
    return Countries.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Countries>): Countries {
    const message = createBaseCountries();
    message.include = object.include?.map((e) => e) || [];
    message.exclude = object.exclude?.map((e) => e) || [];
    return message;
  },
};

function createBaseRegions(): Regions {
  return { countries: undefined };
}

export const Regions = {
  encode(message: Regions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.countries !== undefined) {
      Countries.encode(message.countries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Regions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.countries = Countries.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Regions>): Regions {
    return Regions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Regions>): Regions {
    const message = createBaseRegions();
    message.countries = (object.countries !== undefined && object.countries !== null)
      ? Countries.fromPartial(object.countries)
      : undefined;
    return message;
  },
};

function createBaseNetworkPath(): NetworkPath {
  return { metadata: undefined, regions: undefined };
}

export const NetworkPath = {
  encode(message: NetworkPath, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      NetworkPath_Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.regions !== undefined) {
      Regions.encode(message.regions, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPath {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkPath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = NetworkPath_Metadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.regions = Regions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkPath>): NetworkPath {
    return NetworkPath.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkPath>): NetworkPath {
    const message = createBaseNetworkPath();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? NetworkPath_Metadata.fromPartial(object.metadata)
      : undefined;
    message.regions = (object.regions !== undefined && object.regions !== null)
      ? Regions.fromPartial(object.regions)
      : undefined;
    return message;
  },
};

function createBaseNetworkPath_Metadata(): NetworkPath_Metadata {
  return { name: "", description: "", creationTimestamp: "", modificationTimestamp: "" };
}

export const NetworkPath_Metadata = {
  encode(message: NetworkPath_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(34).string(message.creationTimestamp);
    }
    if (message.modificationTimestamp !== "") {
      writer.uint32(42).string(message.modificationTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPath_Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkPath_Metadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.creationTimestamp = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.modificationTimestamp = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkPath_Metadata>): NetworkPath_Metadata {
    return NetworkPath_Metadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkPath_Metadata>): NetworkPath_Metadata {
    const message = createBaseNetworkPath_Metadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.creationTimestamp = object.creationTimestamp ?? "";
    message.modificationTimestamp = object.modificationTimestamp ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
