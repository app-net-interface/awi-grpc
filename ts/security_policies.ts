/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface Security {
}

export interface Security_PolicyMetadata {
  name: string;
  description: string;
  labels: { [key: string]: string };
  creationTimestamp: string;
  modificationTimestamp: string;
}

export interface Security_PolicyMetadata_LabelsEntry {
  key: string;
  value: string;
}

export interface Security_AccessPolicy {
  metadata: Security_PolicyMetadata | undefined;
  accessProtocols: Security_AccessPolicy_AccessProtocol[];
  accessType: string;
  priority: number;
}

export interface Security_AccessPolicy_AccessProtocol {
  protocol: string;
  port: string;
}

function createBaseSecurity(): Security {
  return {};
}

export const Security = {
  encode(_: Security, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Security {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurity();
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

  create(base?: DeepPartial<Security>): Security {
    return Security.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<Security>): Security {
    const message = createBaseSecurity();
    return message;
  },
};

function createBaseSecurity_PolicyMetadata(): Security_PolicyMetadata {
  return { name: "", description: "", labels: {}, creationTimestamp: "", modificationTimestamp: "" };
}

export const Security_PolicyMetadata = {
  encode(message: Security_PolicyMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Security_PolicyMetadata_LabelsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.creationTimestamp !== "") {
      writer.uint32(34).string(message.creationTimestamp);
    }
    if (message.modificationTimestamp !== "") {
      writer.uint32(42).string(message.modificationTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Security_PolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurity_PolicyMetadata();
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

          const entry3 = Security_PolicyMetadata_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
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

  create(base?: DeepPartial<Security_PolicyMetadata>): Security_PolicyMetadata {
    return Security_PolicyMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Security_PolicyMetadata>): Security_PolicyMetadata {
    const message = createBaseSecurity_PolicyMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.creationTimestamp = object.creationTimestamp ?? "";
    message.modificationTimestamp = object.modificationTimestamp ?? "";
    return message;
  },
};

function createBaseSecurity_PolicyMetadata_LabelsEntry(): Security_PolicyMetadata_LabelsEntry {
  return { key: "", value: "" };
}

export const Security_PolicyMetadata_LabelsEntry = {
  encode(message: Security_PolicyMetadata_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Security_PolicyMetadata_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurity_PolicyMetadata_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Security_PolicyMetadata_LabelsEntry>): Security_PolicyMetadata_LabelsEntry {
    return Security_PolicyMetadata_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Security_PolicyMetadata_LabelsEntry>): Security_PolicyMetadata_LabelsEntry {
    const message = createBaseSecurity_PolicyMetadata_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSecurity_AccessPolicy(): Security_AccessPolicy {
  return { metadata: undefined, accessProtocols: [], accessType: "", priority: 0 };
}

export const Security_AccessPolicy = {
  encode(message: Security_AccessPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      Security_PolicyMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accessProtocols) {
      Security_AccessPolicy_AccessProtocol.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.accessType !== "") {
      writer.uint32(26).string(message.accessType);
    }
    if (message.priority !== 0) {
      writer.uint32(32).int32(message.priority);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Security_AccessPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurity_AccessPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = Security_PolicyMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accessProtocols.push(Security_AccessPolicy_AccessProtocol.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accessType = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.priority = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Security_AccessPolicy>): Security_AccessPolicy {
    return Security_AccessPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Security_AccessPolicy>): Security_AccessPolicy {
    const message = createBaseSecurity_AccessPolicy();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Security_PolicyMetadata.fromPartial(object.metadata)
      : undefined;
    message.accessProtocols = object.accessProtocols?.map((e) => Security_AccessPolicy_AccessProtocol.fromPartial(e)) ||
      [];
    message.accessType = object.accessType ?? "";
    message.priority = object.priority ?? 0;
    return message;
  },
};

function createBaseSecurity_AccessPolicy_AccessProtocol(): Security_AccessPolicy_AccessProtocol {
  return { protocol: "", port: "" };
}

export const Security_AccessPolicy_AccessProtocol = {
  encode(message: Security_AccessPolicy_AccessProtocol, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== "") {
      writer.uint32(10).string(message.protocol);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Security_AccessPolicy_AccessProtocol {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurity_AccessPolicy_AccessProtocol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.port = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Security_AccessPolicy_AccessProtocol>): Security_AccessPolicy_AccessProtocol {
    return Security_AccessPolicy_AccessProtocol.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Security_AccessPolicy_AccessProtocol>): Security_AccessPolicy_AccessProtocol {
    const message = createBaseSecurity_AccessPolicy_AccessProtocol();
    message.protocol = object.protocol ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
