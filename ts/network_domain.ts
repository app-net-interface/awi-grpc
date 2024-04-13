/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface NetworkDomainObject {
  type: string;
  provider: string;
  id: string;
  name: string;
  accountId: string;
  sideId: string;
  labels: { [key: string]: string };
}

export interface NetworkDomainObject_LabelsEntry {
  key: string;
  value: string;
}

function createBaseNetworkDomainObject(): NetworkDomainObject {
  return { type: "", provider: "", id: "", name: "", accountId: "", sideId: "", labels: {} };
}

export const NetworkDomainObject = {
  encode(message: NetworkDomainObject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.accountId !== "") {
      writer.uint32(42).string(message.accountId);
    }
    if (message.sideId !== "") {
      writer.uint32(50).string(message.sideId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      NetworkDomainObject_LabelsEntry.encode({ key: key as any, value }, writer.uint32(58).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainObject {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainObject();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.sideId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          const entry7 = NetworkDomainObject_LabelsEntry.decode(reader, reader.uint32());
          if (entry7.value !== undefined) {
            message.labels[entry7.key] = entry7.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainObject>): NetworkDomainObject {
    return NetworkDomainObject.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainObject>): NetworkDomainObject {
    const message = createBaseNetworkDomainObject();
    message.type = object.type ?? "";
    message.provider = object.provider ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.accountId = object.accountId ?? "";
    message.sideId = object.sideId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseNetworkDomainObject_LabelsEntry(): NetworkDomainObject_LabelsEntry {
  return { key: "", value: "" };
}

export const NetworkDomainObject_LabelsEntry = {
  encode(message: NetworkDomainObject_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainObject_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainObject_LabelsEntry();
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

  create(base?: DeepPartial<NetworkDomainObject_LabelsEntry>): NetworkDomainObject_LabelsEntry {
    return NetworkDomainObject_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainObject_LabelsEntry>): NetworkDomainObject_LabelsEntry {
    const message = createBaseNetworkDomainObject_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
