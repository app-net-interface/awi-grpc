/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface HardSLA {
  /** +kubebuilder:validation:Optional */
  bandwidth: number;
  /** +kubebuilder:validation:Optional */
  jitter: number;
  /** +kubebuilder:validation:Optional */
  latency: number;
  /** +kubebuilder:validation:Optional */
  loss: number;
}

export interface SoftSLA {
  trafficProfile: string;
  priority: string;
}

export interface NetworkSLA {
  hard: HardSLA | undefined;
  soft: SoftSLA | undefined;
}

export interface SLAResponse {
  supportsHardNetworkSla: boolean;
  supportsSoftNetworkSla: boolean;
  availableHardNetworkSla: HardSLA | undefined;
  meetsSla: boolean;
}

function createBaseHardSLA(): HardSLA {
  return { bandwidth: 0, jitter: 0, latency: 0, loss: 0 };
}

export const HardSLA = {
  encode(message: HardSLA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bandwidth !== 0) {
      writer.uint32(8).uint32(message.bandwidth);
    }
    if (message.jitter !== 0) {
      writer.uint32(16).uint32(message.jitter);
    }
    if (message.latency !== 0) {
      writer.uint32(24).uint32(message.latency);
    }
    if (message.loss !== 0) {
      writer.uint32(33).double(message.loss);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HardSLA {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHardSLA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.bandwidth = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.jitter = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.latency = reader.uint32();
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.loss = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<HardSLA>): HardSLA {
    return HardSLA.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<HardSLA>): HardSLA {
    const message = createBaseHardSLA();
    message.bandwidth = object.bandwidth ?? 0;
    message.jitter = object.jitter ?? 0;
    message.latency = object.latency ?? 0;
    message.loss = object.loss ?? 0;
    return message;
  },
};

function createBaseSoftSLA(): SoftSLA {
  return { trafficProfile: "", priority: "" };
}

export const SoftSLA = {
  encode(message: SoftSLA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trafficProfile !== "") {
      writer.uint32(10).string(message.trafficProfile);
    }
    if (message.priority !== "") {
      writer.uint32(18).string(message.priority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SoftSLA {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSoftSLA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trafficProfile = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.priority = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SoftSLA>): SoftSLA {
    return SoftSLA.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SoftSLA>): SoftSLA {
    const message = createBaseSoftSLA();
    message.trafficProfile = object.trafficProfile ?? "";
    message.priority = object.priority ?? "";
    return message;
  },
};

function createBaseNetworkSLA(): NetworkSLA {
  return { hard: undefined, soft: undefined };
}

export const NetworkSLA = {
  encode(message: NetworkSLA, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hard !== undefined) {
      HardSLA.encode(message.hard, writer.uint32(10).fork()).ldelim();
    }
    if (message.soft !== undefined) {
      SoftSLA.encode(message.soft, writer.uint32(18).fork()).ldelim();
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

          message.hard = HardSLA.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.soft = SoftSLA.decode(reader, reader.uint32());
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
    message.hard = (object.hard !== undefined && object.hard !== null) ? HardSLA.fromPartial(object.hard) : undefined;
    message.soft = (object.soft !== undefined && object.soft !== null) ? SoftSLA.fromPartial(object.soft) : undefined;
    return message;
  },
};

function createBaseSLAResponse(): SLAResponse {
  return {
    supportsHardNetworkSla: false,
    supportsSoftNetworkSla: false,
    availableHardNetworkSla: undefined,
    meetsSla: false,
  };
}

export const SLAResponse = {
  encode(message: SLAResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supportsHardNetworkSla === true) {
      writer.uint32(8).bool(message.supportsHardNetworkSla);
    }
    if (message.supportsSoftNetworkSla === true) {
      writer.uint32(16).bool(message.supportsSoftNetworkSla);
    }
    if (message.availableHardNetworkSla !== undefined) {
      HardSLA.encode(message.availableHardNetworkSla, writer.uint32(26).fork()).ldelim();
    }
    if (message.meetsSla === true) {
      writer.uint32(32).bool(message.meetsSla);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SLAResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSLAResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.supportsHardNetworkSla = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.supportsSoftNetworkSla = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.availableHardNetworkSla = HardSLA.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.meetsSla = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SLAResponse>): SLAResponse {
    return SLAResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SLAResponse>): SLAResponse {
    const message = createBaseSLAResponse();
    message.supportsHardNetworkSla = object.supportsHardNetworkSla ?? false;
    message.supportsSoftNetworkSla = object.supportsSoftNetworkSla ?? false;
    message.availableHardNetworkSla =
      (object.availableHardNetworkSla !== undefined && object.availableHardNetworkSla !== null)
        ? HardSLA.fromPartial(object.availableHardNetworkSla)
        : undefined;
    message.meetsSla = object.meetsSla ?? false;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
