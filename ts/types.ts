/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "infra";

export interface Instance {
  id: string;
  name: string;
  publicIP: string;
  privateIP: string;
  subnetID: string;
  vpcId: string;
  region: string;
  zone: string;
  labels: { [key: string]: string };
  provider: string;
  accountId: string;
  state: string;
  lastSyncTime: string;
}

export interface Instance_LabelsEntry {
  key: string;
  value: string;
}

export interface Subnet {
  subnetId: string;
  cidrBlock: string;
  vpcId: string;
  zone: string;
  region: string;
  labels: { [key: string]: string };
  provider: string;
  accountId: string;
  lastSyncTime: string;
  name: string;
}

export interface Subnet_LabelsEntry {
  key: string;
  value: string;
}

export interface VPC {
  id: string;
  name: string;
  region: string;
  labels: { [key: string]: string };
  ipv4Cidr: string;
  ipv6Cidr: string;
  provider: string;
  accountId: string;
  lastSyncTime: string;
}

export interface VPC_LabelsEntry {
  key: string;
  value: string;
}

export interface Account {
  provider: string;
  id: string;
  name: string;
  lastSyncTime: string;
}

export interface ACL {
  provider: string;
  id: string;
  name: string;
  vpcId: string;
  region: string;
  accountId: string;
  rules: ACL_ACLRule[];
  labels: { [key: string]: string };
  lastSyncTime: string;
}

export interface ACL_ACLRule {
  number: number;
  protocol: string;
  portRange: string;
  sourceRanges: string[];
  destinationRanges: string[];
  action: string;
  direction: string;
}

export interface ACL_LabelsEntry {
  key: string;
  value: string;
}

export interface SecurityGroup {
  provider: string;
  id: string;
  name: string;
  vpcId: string;
  region: string;
  accountId: string;
  rules: SecurityGroup_SecurityGroupRule[];
  labels: { [key: string]: string };
  lastSyncTime: string;
}

export interface SecurityGroup_SecurityGroupRule {
  protocol: string;
  portRange: string;
  source: string[];
  direction: string;
}

export interface SecurityGroup_LabelsEntry {
  key: string;
  value: string;
}

export interface RouteTable {
  provider: string;
  id: string;
  name: string;
  vpcId: string;
  region: string;
  accountId: string;
  routes: RouteTable_Route[];
  labels: { [key: string]: string };
  lastSyncTime: string;
}

export interface RouteTable_Route {
  destination: string;
  target: string;
  status: string;
}

export interface RouteTable_LabelsEntry {
  key: string;
  value: string;
}

export interface Router {
  id: string;
  name: string;
  provider: string;
  region: string;
  vpcId: string;
  state: string;
  asn: number;
  advertisedRange: string;
  advertisedGroup: string;
  vpnType: string;
  subnetId: string;
  labels: { [key: string]: string };
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  accountId: string;
  lastSyncTime: string;
  additionalProperties: { [key: string]: string };
}

export interface Router_LabelsEntry {
  key: string;
  value: string;
}

export interface Router_AdditionalPropertiesEntry {
  key: string;
  value: string;
}

export interface NATGateway {
  id: string;
  name: string;
  provider: string;
  accountId: string;
  vpcId: string;
  region: string;
  state: string;
  publicIp: string;
  privateIp: string;
  subnetId: string;
  labels: { [key: string]: string };
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  lastSyncTime: string;
  additionalProperties: { [key: string]: string };
}

export interface NATGateway_LabelsEntry {
  key: string;
  value: string;
}

export interface NATGateway_AdditionalPropertiesEntry {
  key: string;
  value: string;
}

export interface IGW {
  id: string;
  name: string;
  provider: string;
  accountId: string;
  /**  */
  attachedVpcId: string;
  /** VPC Region */
  region: string;
  state: string;
  labels: { [key: string]: string };
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  lastSyncTime: string;
}

export interface IGW_LabelsEntry {
  key: string;
  value: string;
}

function createBaseInstance(): Instance {
  return {
    id: "",
    name: "",
    publicIP: "",
    privateIP: "",
    subnetID: "",
    vpcId: "",
    region: "",
    zone: "",
    labels: {},
    provider: "",
    accountId: "",
    state: "",
    lastSyncTime: "",
  };
}

export const Instance = {
  encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.publicIP !== "") {
      writer.uint32(26).string(message.publicIP);
    }
    if (message.privateIP !== "") {
      writer.uint32(34).string(message.privateIP);
    }
    if (message.subnetID !== "") {
      writer.uint32(42).string(message.subnetID);
    }
    if (message.vpcId !== "") {
      writer.uint32(50).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(58).string(message.region);
    }
    if (message.zone !== "") {
      writer.uint32(66).string(message.zone);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Instance_LabelsEntry.encode({ key: key as any, value }, writer.uint32(74).fork()).ldelim();
    });
    if (message.provider !== "") {
      writer.uint32(82).string(message.provider);
    }
    if (message.accountId !== "") {
      writer.uint32(90).string(message.accountId);
    }
    if (message.state !== "") {
      writer.uint32(98).string(message.state);
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(106).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.publicIP = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.privateIP = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subnetID = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.region = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.zone = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          const entry9 = Instance_LabelsEntry.decode(reader, reader.uint32());
          if (entry9.value !== undefined) {
            message.labels[entry9.key] = entry9.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.state = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Instance>): Instance {
    return Instance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance>): Instance {
    const message = createBaseInstance();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.publicIP = object.publicIP ?? "";
    message.privateIP = object.privateIP ?? "";
    message.subnetID = object.subnetID ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.zone = object.zone ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.provider = object.provider ?? "";
    message.accountId = object.accountId ?? "";
    message.state = object.state ?? "";
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseInstance_LabelsEntry(): Instance_LabelsEntry {
  return { key: "", value: "" };
}

export const Instance_LabelsEntry = {
  encode(message: Instance_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instance_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstance_LabelsEntry();
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

  create(base?: DeepPartial<Instance_LabelsEntry>): Instance_LabelsEntry {
    return Instance_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance_LabelsEntry>): Instance_LabelsEntry {
    const message = createBaseInstance_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSubnet(): Subnet {
  return {
    subnetId: "",
    cidrBlock: "",
    vpcId: "",
    zone: "",
    region: "",
    labels: {},
    provider: "",
    accountId: "",
    lastSyncTime: "",
    name: "",
  };
}

export const Subnet = {
  encode(message: Subnet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnetId !== "") {
      writer.uint32(10).string(message.subnetId);
    }
    if (message.cidrBlock !== "") {
      writer.uint32(18).string(message.cidrBlock);
    }
    if (message.vpcId !== "") {
      writer.uint32(26).string(message.vpcId);
    }
    if (message.zone !== "") {
      writer.uint32(34).string(message.zone);
    }
    if (message.region !== "") {
      writer.uint32(42).string(message.region);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Subnet_LabelsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.provider !== "") {
      writer.uint32(82).string(message.provider);
    }
    if (message.accountId !== "") {
      writer.uint32(90).string(message.accountId);
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(98).string(message.lastSyncTime);
    }
    if (message.name !== "") {
      writer.uint32(106).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subnet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubnet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cidrBlock = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.zone = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.region = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = Subnet_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
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

  create(base?: DeepPartial<Subnet>): Subnet {
    return Subnet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Subnet>): Subnet {
    const message = createBaseSubnet();
    message.subnetId = object.subnetId ?? "";
    message.cidrBlock = object.cidrBlock ?? "";
    message.vpcId = object.vpcId ?? "";
    message.zone = object.zone ?? "";
    message.region = object.region ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.provider = object.provider ?? "";
    message.accountId = object.accountId ?? "";
    message.lastSyncTime = object.lastSyncTime ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSubnet_LabelsEntry(): Subnet_LabelsEntry {
  return { key: "", value: "" };
}

export const Subnet_LabelsEntry = {
  encode(message: Subnet_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Subnet_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubnet_LabelsEntry();
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

  create(base?: DeepPartial<Subnet_LabelsEntry>): Subnet_LabelsEntry {
    return Subnet_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Subnet_LabelsEntry>): Subnet_LabelsEntry {
    const message = createBaseSubnet_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseVPC(): VPC {
  return {
    id: "",
    name: "",
    region: "",
    labels: {},
    ipv4Cidr: "",
    ipv6Cidr: "",
    provider: "",
    accountId: "",
    lastSyncTime: "",
  };
}

export const VPC = {
  encode(message: VPC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      VPC_LabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.ipv4Cidr !== "") {
      writer.uint32(42).string(message.ipv4Cidr);
    }
    if (message.ipv6Cidr !== "") {
      writer.uint32(50).string(message.ipv6Cidr);
    }
    if (message.provider !== "") {
      writer.uint32(82).string(message.provider);
    }
    if (message.accountId !== "") {
      writer.uint32(90).string(message.accountId);
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(98).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VPC {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVPC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.region = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = VPC_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ipv4Cidr = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ipv6Cidr = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<VPC>): VPC {
    return VPC.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VPC>): VPC {
    const message = createBaseVPC();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.region = object.region ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.ipv4Cidr = object.ipv4Cidr ?? "";
    message.ipv6Cidr = object.ipv6Cidr ?? "";
    message.provider = object.provider ?? "";
    message.accountId = object.accountId ?? "";
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseVPC_LabelsEntry(): VPC_LabelsEntry {
  return { key: "", value: "" };
}

export const VPC_LabelsEntry = {
  encode(message: VPC_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VPC_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVPC_LabelsEntry();
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

  create(base?: DeepPartial<VPC_LabelsEntry>): VPC_LabelsEntry {
    return VPC_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VPC_LabelsEntry>): VPC_LabelsEntry {
    const message = createBaseVPC_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAccount(): Account {
  return { provider: "", id: "", name: "", lastSyncTime: "" };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(34).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Account>): Account {
    return Account.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.provider = object.provider ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseACL(): ACL {
  return {
    provider: "",
    id: "",
    name: "",
    vpcId: "",
    region: "",
    accountId: "",
    rules: [],
    labels: {},
    lastSyncTime: "",
  };
}

export const ACL = {
  encode(message: ACL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.vpcId !== "") {
      writer.uint32(34).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(42).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    for (const v of message.rules) {
      ACL_ACLRule.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ACL_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.lastSyncTime !== "") {
      writer.uint32(74).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseACL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.region = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.rules.push(ACL_ACLRule.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = ACL_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ACL>): ACL {
    return ACL.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ACL>): ACL {
    const message = createBaseACL();
    message.provider = object.provider ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    message.rules = object.rules?.map((e) => ACL_ACLRule.fromPartial(e)) || [];
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseACL_ACLRule(): ACL_ACLRule {
  return { number: 0, protocol: "", portRange: "", sourceRanges: [], destinationRanges: [], action: "", direction: "" };
}

export const ACL_ACLRule = {
  encode(message: ACL_ACLRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.number !== 0) {
      writer.uint32(8).int32(message.number);
    }
    if (message.protocol !== "") {
      writer.uint32(18).string(message.protocol);
    }
    if (message.portRange !== "") {
      writer.uint32(26).string(message.portRange);
    }
    for (const v of message.sourceRanges) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.destinationRanges) {
      writer.uint32(42).string(v!);
    }
    if (message.action !== "") {
      writer.uint32(50).string(message.action);
    }
    if (message.direction !== "") {
      writer.uint32(58).string(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL_ACLRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseACL_ACLRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.protocol = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.portRange = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sourceRanges.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.destinationRanges.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.action = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.direction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ACL_ACLRule>): ACL_ACLRule {
    return ACL_ACLRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ACL_ACLRule>): ACL_ACLRule {
    const message = createBaseACL_ACLRule();
    message.number = object.number ?? 0;
    message.protocol = object.protocol ?? "";
    message.portRange = object.portRange ?? "";
    message.sourceRanges = object.sourceRanges?.map((e) => e) || [];
    message.destinationRanges = object.destinationRanges?.map((e) => e) || [];
    message.action = object.action ?? "";
    message.direction = object.direction ?? "";
    return message;
  },
};

function createBaseACL_LabelsEntry(): ACL_LabelsEntry {
  return { key: "", value: "" };
}

export const ACL_LabelsEntry = {
  encode(message: ACL_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ACL_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseACL_LabelsEntry();
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

  create(base?: DeepPartial<ACL_LabelsEntry>): ACL_LabelsEntry {
    return ACL_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ACL_LabelsEntry>): ACL_LabelsEntry {
    const message = createBaseACL_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSecurityGroup(): SecurityGroup {
  return {
    provider: "",
    id: "",
    name: "",
    vpcId: "",
    region: "",
    accountId: "",
    rules: [],
    labels: {},
    lastSyncTime: "",
  };
}

export const SecurityGroup = {
  encode(message: SecurityGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.vpcId !== "") {
      writer.uint32(34).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(42).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    for (const v of message.rules) {
      SecurityGroup_SecurityGroupRule.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      SecurityGroup_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.lastSyncTime !== "") {
      writer.uint32(74).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroup {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.region = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.rules.push(SecurityGroup_SecurityGroupRule.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = SecurityGroup_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SecurityGroup>): SecurityGroup {
    return SecurityGroup.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SecurityGroup>): SecurityGroup {
    const message = createBaseSecurityGroup();
    message.provider = object.provider ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    message.rules = object.rules?.map((e) => SecurityGroup_SecurityGroupRule.fromPartial(e)) || [];
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseSecurityGroup_SecurityGroupRule(): SecurityGroup_SecurityGroupRule {
  return { protocol: "", portRange: "", source: [], direction: "" };
}

export const SecurityGroup_SecurityGroupRule = {
  encode(message: SecurityGroup_SecurityGroupRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== "") {
      writer.uint32(10).string(message.protocol);
    }
    if (message.portRange !== "") {
      writer.uint32(18).string(message.portRange);
    }
    for (const v of message.source) {
      writer.uint32(26).string(v!);
    }
    if (message.direction !== "") {
      writer.uint32(34).string(message.direction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroup_SecurityGroupRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityGroup_SecurityGroupRule();
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

          message.portRange = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.source.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.direction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SecurityGroup_SecurityGroupRule>): SecurityGroup_SecurityGroupRule {
    return SecurityGroup_SecurityGroupRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SecurityGroup_SecurityGroupRule>): SecurityGroup_SecurityGroupRule {
    const message = createBaseSecurityGroup_SecurityGroupRule();
    message.protocol = object.protocol ?? "";
    message.portRange = object.portRange ?? "";
    message.source = object.source?.map((e) => e) || [];
    message.direction = object.direction ?? "";
    return message;
  },
};

function createBaseSecurityGroup_LabelsEntry(): SecurityGroup_LabelsEntry {
  return { key: "", value: "" };
}

export const SecurityGroup_LabelsEntry = {
  encode(message: SecurityGroup_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityGroup_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityGroup_LabelsEntry();
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

  create(base?: DeepPartial<SecurityGroup_LabelsEntry>): SecurityGroup_LabelsEntry {
    return SecurityGroup_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SecurityGroup_LabelsEntry>): SecurityGroup_LabelsEntry {
    const message = createBaseSecurityGroup_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRouteTable(): RouteTable {
  return {
    provider: "",
    id: "",
    name: "",
    vpcId: "",
    region: "",
    accountId: "",
    routes: [],
    labels: {},
    lastSyncTime: "",
  };
}

export const RouteTable = {
  encode(message: RouteTable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.vpcId !== "") {
      writer.uint32(34).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(42).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    for (const v of message.routes) {
      RouteTable_Route.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      RouteTable_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.lastSyncTime !== "") {
      writer.uint32(74).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteTable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteTable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.region = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.routes.push(RouteTable_Route.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = RouteTable_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RouteTable>): RouteTable {
    return RouteTable.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RouteTable>): RouteTable {
    const message = createBaseRouteTable();
    message.provider = object.provider ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    message.routes = object.routes?.map((e) => RouteTable_Route.fromPartial(e)) || [];
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseRouteTable_Route(): RouteTable_Route {
  return { destination: "", target: "", status: "" };
}

export const RouteTable_Route = {
  encode(message: RouteTable_Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.destination !== "") {
      writer.uint32(10).string(message.destination);
    }
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteTable_Route {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteTable_Route();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.destination = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.target = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<RouteTable_Route>): RouteTable_Route {
    return RouteTable_Route.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RouteTable_Route>): RouteTable_Route {
    const message = createBaseRouteTable_Route();
    message.destination = object.destination ?? "";
    message.target = object.target ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseRouteTable_LabelsEntry(): RouteTable_LabelsEntry {
  return { key: "", value: "" };
}

export const RouteTable_LabelsEntry = {
  encode(message: RouteTable_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RouteTable_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouteTable_LabelsEntry();
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

  create(base?: DeepPartial<RouteTable_LabelsEntry>): RouteTable_LabelsEntry {
    return RouteTable_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RouteTable_LabelsEntry>): RouteTable_LabelsEntry {
    const message = createBaseRouteTable_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRouter(): Router {
  return {
    id: "",
    name: "",
    provider: "",
    region: "",
    vpcId: "",
    state: "",
    asn: 0,
    advertisedRange: "",
    advertisedGroup: "",
    vpnType: "",
    subnetId: "",
    labels: {},
    createdAt: undefined,
    updatedAt: undefined,
    accountId: "",
    lastSyncTime: "",
    additionalProperties: {},
  };
}

export const Router = {
  encode(message: Router, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.region !== "") {
      writer.uint32(34).string(message.region);
    }
    if (message.vpcId !== "") {
      writer.uint32(42).string(message.vpcId);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    if (message.asn !== 0) {
      writer.uint32(56).uint32(message.asn);
    }
    if (message.advertisedRange !== "") {
      writer.uint32(66).string(message.advertisedRange);
    }
    if (message.advertisedGroup !== "") {
      writer.uint32(74).string(message.advertisedGroup);
    }
    if (message.vpnType !== "") {
      writer.uint32(82).string(message.vpnType);
    }
    if (message.subnetId !== "") {
      writer.uint32(90).string(message.subnetId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Router_LabelsEntry.encode({ key: key as any, value }, writer.uint32(98).fork()).ldelim();
    });
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(106).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(114).fork()).ldelim();
    }
    if (message.accountId !== "") {
      writer.uint32(122).string(message.accountId);
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(130).string(message.lastSyncTime);
    }
    Object.entries(message.additionalProperties).forEach(([key, value]) => {
      Router_AdditionalPropertiesEntry.encode({ key: key as any, value }, writer.uint32(138).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Router {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.region = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.state = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.asn = reader.uint32();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.advertisedRange = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.advertisedGroup = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.vpnType = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          const entry12 = Router_LabelsEntry.decode(reader, reader.uint32());
          if (entry12.value !== undefined) {
            message.labels[entry12.key] = entry12.value;
          }
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          const entry17 = Router_AdditionalPropertiesEntry.decode(reader, reader.uint32());
          if (entry17.value !== undefined) {
            message.additionalProperties[entry17.key] = entry17.value;
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

  create(base?: DeepPartial<Router>): Router {
    return Router.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Router>): Router {
    const message = createBaseRouter();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.provider = object.provider ?? "";
    message.region = object.region ?? "";
    message.vpcId = object.vpcId ?? "";
    message.state = object.state ?? "";
    message.asn = object.asn ?? 0;
    message.advertisedRange = object.advertisedRange ?? "";
    message.advertisedGroup = object.advertisedGroup ?? "";
    message.vpnType = object.vpnType ?? "";
    message.subnetId = object.subnetId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.accountId = object.accountId ?? "";
    message.lastSyncTime = object.lastSyncTime ?? "";
    message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseRouter_LabelsEntry(): Router_LabelsEntry {
  return { key: "", value: "" };
}

export const Router_LabelsEntry = {
  encode(message: Router_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Router_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouter_LabelsEntry();
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

  create(base?: DeepPartial<Router_LabelsEntry>): Router_LabelsEntry {
    return Router_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Router_LabelsEntry>): Router_LabelsEntry {
    const message = createBaseRouter_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseRouter_AdditionalPropertiesEntry(): Router_AdditionalPropertiesEntry {
  return { key: "", value: "" };
}

export const Router_AdditionalPropertiesEntry = {
  encode(message: Router_AdditionalPropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Router_AdditionalPropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRouter_AdditionalPropertiesEntry();
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

  create(base?: DeepPartial<Router_AdditionalPropertiesEntry>): Router_AdditionalPropertiesEntry {
    return Router_AdditionalPropertiesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Router_AdditionalPropertiesEntry>): Router_AdditionalPropertiesEntry {
    const message = createBaseRouter_AdditionalPropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseNATGateway(): NATGateway {
  return {
    id: "",
    name: "",
    provider: "",
    accountId: "",
    vpcId: "",
    region: "",
    state: "",
    publicIp: "",
    privateIp: "",
    subnetId: "",
    labels: {},
    createdAt: undefined,
    updatedAt: undefined,
    lastSyncTime: "",
    additionalProperties: {},
  };
}

export const NATGateway = {
  encode(message: NATGateway, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    if (message.vpcId !== "") {
      writer.uint32(42).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(50).string(message.region);
    }
    if (message.state !== "") {
      writer.uint32(58).string(message.state);
    }
    if (message.publicIp !== "") {
      writer.uint32(66).string(message.publicIp);
    }
    if (message.privateIp !== "") {
      writer.uint32(74).string(message.privateIp);
    }
    if (message.subnetId !== "") {
      writer.uint32(82).string(message.subnetId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      NATGateway_LabelsEntry.encode({ key: key as any, value }, writer.uint32(90).fork()).ldelim();
    });
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(114).string(message.lastSyncTime);
    }
    Object.entries(message.additionalProperties).forEach(([key, value]) => {
      NATGateway_AdditionalPropertiesEntry.encode({ key: key as any, value }, writer.uint32(122).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NATGateway {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNATGateway();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.region = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.state = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.publicIp = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.privateIp = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subnetId = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          const entry11 = NATGateway_LabelsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.labels[entry11.key] = entry11.value;
          }
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          const entry15 = NATGateway_AdditionalPropertiesEntry.decode(reader, reader.uint32());
          if (entry15.value !== undefined) {
            message.additionalProperties[entry15.key] = entry15.value;
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

  create(base?: DeepPartial<NATGateway>): NATGateway {
    return NATGateway.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NATGateway>): NATGateway {
    const message = createBaseNATGateway();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.provider = object.provider ?? "";
    message.accountId = object.accountId ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.state = object.state ?? "";
    message.publicIp = object.publicIp ?? "";
    message.privateIp = object.privateIp ?? "";
    message.subnetId = object.subnetId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.lastSyncTime = object.lastSyncTime ?? "";
    message.additionalProperties = Object.entries(object.additionalProperties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseNATGateway_LabelsEntry(): NATGateway_LabelsEntry {
  return { key: "", value: "" };
}

export const NATGateway_LabelsEntry = {
  encode(message: NATGateway_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NATGateway_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNATGateway_LabelsEntry();
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

  create(base?: DeepPartial<NATGateway_LabelsEntry>): NATGateway_LabelsEntry {
    return NATGateway_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NATGateway_LabelsEntry>): NATGateway_LabelsEntry {
    const message = createBaseNATGateway_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseNATGateway_AdditionalPropertiesEntry(): NATGateway_AdditionalPropertiesEntry {
  return { key: "", value: "" };
}

export const NATGateway_AdditionalPropertiesEntry = {
  encode(message: NATGateway_AdditionalPropertiesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NATGateway_AdditionalPropertiesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNATGateway_AdditionalPropertiesEntry();
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

  create(base?: DeepPartial<NATGateway_AdditionalPropertiesEntry>): NATGateway_AdditionalPropertiesEntry {
    return NATGateway_AdditionalPropertiesEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NATGateway_AdditionalPropertiesEntry>): NATGateway_AdditionalPropertiesEntry {
    const message = createBaseNATGateway_AdditionalPropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseIGW(): IGW {
  return {
    id: "",
    name: "",
    provider: "",
    accountId: "",
    attachedVpcId: "",
    region: "",
    state: "",
    labels: {},
    createdAt: undefined,
    updatedAt: undefined,
    lastSyncTime: "",
  };
}

export const IGW = {
  encode(message: IGW, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    if (message.attachedVpcId !== "") {
      writer.uint32(42).string(message.attachedVpcId);
    }
    if (message.region !== "") {
      writer.uint32(50).string(message.region);
    }
    if (message.state !== "") {
      writer.uint32(58).string(message.state);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      IGW_LabelsEntry.encode({ key: key as any, value }, writer.uint32(90).fork()).ldelim();
    });
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(98).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(106).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(114).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IGW {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIGW();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.provider = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.attachedVpcId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.region = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.state = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          const entry11 = IGW_LabelsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.labels[entry11.key] = entry11.value;
          }
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.lastSyncTime = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<IGW>): IGW {
    return IGW.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IGW>): IGW {
    const message = createBaseIGW();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.provider = object.provider ?? "";
    message.accountId = object.accountId ?? "";
    message.attachedVpcId = object.attachedVpcId ?? "";
    message.region = object.region ?? "";
    message.state = object.state ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseIGW_LabelsEntry(): IGW_LabelsEntry {
  return { key: "", value: "" };
}

export const IGW_LabelsEntry = {
  encode(message: IGW_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IGW_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIGW_LabelsEntry();
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

  create(base?: DeepPartial<IGW_LabelsEntry>): IGW_LabelsEntry {
    return IGW_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IGW_LabelsEntry>): IGW_LabelsEntry {
    const message = createBaseIGW_LabelsEntry();
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}
