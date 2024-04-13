/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface ListInstancesRequest {
  Provider: string;
  /** @deprecated */
  Tag: string;
  Vpc: string;
  Zone: string;
  Labels: { [key: string]: string };
  Region: string;
}

export interface ListInstancesRequest_LabelsEntry {
  key: string;
  value: string;
}

export interface ListInstancesResponse {
  instances: Instance[];
}

export interface Instance {
  ID: string;
  Name: string;
  PublicIP: string;
  PrivateIP: string;
  SubnetID: string;
  VPCID: string;
  State: string;
  Labels: { [key: string]: string };
}

export interface Instance_LabelsEntry {
  key: string;
  value: string;
}

export interface ListSubnetRequest {
  CIDR: string;
  Provider: string;
  /** @deprecated */
  Tag: string;
  VPCID: string;
  Zone: string;
  Labels: { [key: string]: string };
  Region: string;
}

export interface ListSubnetRequest_LabelsEntry {
  key: string;
  value: string;
}

export interface ListSubnetResponse {
  subnets: Subnet[];
}

export interface Subnet {
  SubnetId: string;
  CidrBlock: string;
  VpcId: string;
  Zone: string;
  Name: string;
  Labels: { [key: string]: string };
}

export interface Subnet_LabelsEntry {
  key: string;
  value: string;
}

export interface ListSiteRequest {
}

export interface ListSiteResponse {
  sites: SiteDetail[];
}

export interface SiteDetail {
  ID: string;
  Name: string;
  IP: string;
  SiteID: string;
}

export interface ListVPCRequest {
  Provider: string;
  Region: string;
  AccountIDs: string;
}

export interface ListVPCTagRequest {
  Provider: string;
  Region: string;
  Tag: string;
}

export interface ListVPCResponse {
  VPCs: VPC[];
}

export interface VPC {
  ID: string;
  Name: string;
  Tag: string;
  Region: string;
  AccountName: string;
  Provider: string;
  Labels: { [key: string]: string };
}

export interface VPC_LabelsEntry {
  key: string;
  value: string;
}

export interface ListVPNRequest {
  Provider: string;
}

export interface ListVPNResponse {
  VPNs: VPN[];
}

export interface VPN {
  ID: string;
  SegmentName: string;
  SegmentID: string;
}

export interface Pod {
  cluster: string;
  namespace: string;
  name: string;
  ip: string;
  labels: { [key: string]: string };
}

export interface Pod_LabelsEntry {
  key: string;
  value: string;
}

export interface K8sService {
  cluster: string;
  namespace: string;
  name: string;
  ingresses: K8sService_Ingress[];
  labels: { [key: string]: string };
  id: string;
}

export interface K8sService_Ingress {
  hostname: string;
  IP: string;
  ports: string[];
}

export interface K8sService_LabelsEntry {
  key: string;
  value: string;
}

function createBaseListInstancesRequest(): ListInstancesRequest {
  return { Provider: "", Tag: "", Vpc: "", Zone: "", Labels: {}, Region: "" };
}

export const ListInstancesRequest = {
  encode(message: ListInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Provider !== "") {
      writer.uint32(10).string(message.Provider);
    }
    if (message.Tag !== "") {
      writer.uint32(18).string(message.Tag);
    }
    if (message.Vpc !== "") {
      writer.uint32(26).string(message.Vpc);
    }
    if (message.Zone !== "") {
      writer.uint32(34).string(message.Zone);
    }
    Object.entries(message.Labels).forEach(([key, value]) => {
      ListInstancesRequest_LabelsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    if (message.Region !== "") {
      writer.uint32(50).string(message.Region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Tag = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Vpc = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.Zone = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = ListInstancesRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.Labels[entry5.key] = entry5.value;
          }
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.Region = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListInstancesRequest>): ListInstancesRequest {
    return ListInstancesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesRequest>): ListInstancesRequest {
    const message = createBaseListInstancesRequest();
    message.Provider = object.Provider ?? "";
    message.Tag = object.Tag ?? "";
    message.Vpc = object.Vpc ?? "";
    message.Zone = object.Zone ?? "";
    message.Labels = Object.entries(object.Labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.Region = object.Region ?? "";
    return message;
  },
};

function createBaseListInstancesRequest_LabelsEntry(): ListInstancesRequest_LabelsEntry {
  return { key: "", value: "" };
}

export const ListInstancesRequest_LabelsEntry = {
  encode(message: ListInstancesRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesRequest_LabelsEntry();
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

  create(base?: DeepPartial<ListInstancesRequest_LabelsEntry>): ListInstancesRequest_LabelsEntry {
    return ListInstancesRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesRequest_LabelsEntry>): ListInstancesRequest_LabelsEntry {
    const message = createBaseListInstancesRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseListInstancesResponse(): ListInstancesResponse {
  return { instances: [] };
}

export const ListInstancesResponse = {
  encode(message: ListInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInstancesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInstancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instances.push(Instance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    return ListInstancesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    const message = createBaseListInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInstance(): Instance {
  return { ID: "", Name: "", PublicIP: "", PrivateIP: "", SubnetID: "", VPCID: "", State: "", Labels: {} };
}

export const Instance = {
  encode(message: Instance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.PublicIP !== "") {
      writer.uint32(26).string(message.PublicIP);
    }
    if (message.PrivateIP !== "") {
      writer.uint32(34).string(message.PrivateIP);
    }
    if (message.SubnetID !== "") {
      writer.uint32(42).string(message.SubnetID);
    }
    if (message.VPCID !== "") {
      writer.uint32(50).string(message.VPCID);
    }
    if (message.State !== "") {
      writer.uint32(58).string(message.State);
    }
    Object.entries(message.Labels).forEach(([key, value]) => {
      Instance_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
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

          message.ID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.PublicIP = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.PrivateIP = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.SubnetID = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.VPCID = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.State = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = Instance_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.Labels[entry8.key] = entry8.value;
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

  create(base?: DeepPartial<Instance>): Instance {
    return Instance.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Instance>): Instance {
    const message = createBaseInstance();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.PublicIP = object.PublicIP ?? "";
    message.PrivateIP = object.PrivateIP ?? "";
    message.SubnetID = object.SubnetID ?? "";
    message.VPCID = object.VPCID ?? "";
    message.State = object.State ?? "";
    message.Labels = Object.entries(object.Labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
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

function createBaseListSubnetRequest(): ListSubnetRequest {
  return { CIDR: "", Provider: "", Tag: "", VPCID: "", Zone: "", Labels: {}, Region: "" };
}

export const ListSubnetRequest = {
  encode(message: ListSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.CIDR !== "") {
      writer.uint32(10).string(message.CIDR);
    }
    if (message.Provider !== "") {
      writer.uint32(18).string(message.Provider);
    }
    if (message.Tag !== "") {
      writer.uint32(26).string(message.Tag);
    }
    if (message.VPCID !== "") {
      writer.uint32(34).string(message.VPCID);
    }
    if (message.Zone !== "") {
      writer.uint32(42).string(message.Zone);
    }
    Object.entries(message.Labels).forEach(([key, value]) => {
      ListSubnetRequest_LabelsEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    if (message.Region !== "") {
      writer.uint32(58).string(message.Region);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.CIDR = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Provider = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Tag = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.VPCID = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.Zone = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = ListSubnetRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.Labels[entry6.key] = entry6.value;
          }
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.Region = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListSubnetRequest>): ListSubnetRequest {
    return ListSubnetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSubnetRequest>): ListSubnetRequest {
    const message = createBaseListSubnetRequest();
    message.CIDR = object.CIDR ?? "";
    message.Provider = object.Provider ?? "";
    message.Tag = object.Tag ?? "";
    message.VPCID = object.VPCID ?? "";
    message.Zone = object.Zone ?? "";
    message.Labels = Object.entries(object.Labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.Region = object.Region ?? "";
    return message;
  },
};

function createBaseListSubnetRequest_LabelsEntry(): ListSubnetRequest_LabelsEntry {
  return { key: "", value: "" };
}

export const ListSubnetRequest_LabelsEntry = {
  encode(message: ListSubnetRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetRequest_LabelsEntry();
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

  create(base?: DeepPartial<ListSubnetRequest_LabelsEntry>): ListSubnetRequest_LabelsEntry {
    return ListSubnetRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSubnetRequest_LabelsEntry>): ListSubnetRequest_LabelsEntry {
    const message = createBaseListSubnetRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseListSubnetResponse(): ListSubnetResponse {
  return { subnets: [] };
}

export const ListSubnetResponse = {
  encode(message: ListSubnetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subnets) {
      Subnet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnets.push(Subnet.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListSubnetResponse>): ListSubnetResponse {
    return ListSubnetResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSubnetResponse>): ListSubnetResponse {
    const message = createBaseListSubnetResponse();
    message.subnets = object.subnets?.map((e) => Subnet.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSubnet(): Subnet {
  return { SubnetId: "", CidrBlock: "", VpcId: "", Zone: "", Name: "", Labels: {} };
}

export const Subnet = {
  encode(message: Subnet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.SubnetId !== "") {
      writer.uint32(10).string(message.SubnetId);
    }
    if (message.CidrBlock !== "") {
      writer.uint32(18).string(message.CidrBlock);
    }
    if (message.VpcId !== "") {
      writer.uint32(26).string(message.VpcId);
    }
    if (message.Zone !== "") {
      writer.uint32(34).string(message.Zone);
    }
    if (message.Name !== "") {
      writer.uint32(42).string(message.Name);
    }
    Object.entries(message.Labels).forEach(([key, value]) => {
      Subnet_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
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

          message.SubnetId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.CidrBlock = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.VpcId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.Zone = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.Name = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = Subnet_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.Labels[entry8.key] = entry8.value;
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

  create(base?: DeepPartial<Subnet>): Subnet {
    return Subnet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Subnet>): Subnet {
    const message = createBaseSubnet();
    message.SubnetId = object.SubnetId ?? "";
    message.CidrBlock = object.CidrBlock ?? "";
    message.VpcId = object.VpcId ?? "";
    message.Zone = object.Zone ?? "";
    message.Name = object.Name ?? "";
    message.Labels = Object.entries(object.Labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
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

function createBaseListSiteRequest(): ListSiteRequest {
  return {};
}

export const ListSiteRequest = {
  encode(_: ListSiteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSiteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSiteRequest();
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

  create(base?: DeepPartial<ListSiteRequest>): ListSiteRequest {
    return ListSiteRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ListSiteRequest>): ListSiteRequest {
    const message = createBaseListSiteRequest();
    return message;
  },
};

function createBaseListSiteResponse(): ListSiteResponse {
  return { sites: [] };
}

export const ListSiteResponse = {
  encode(message: ListSiteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sites) {
      SiteDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSiteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSiteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sites.push(SiteDetail.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListSiteResponse>): ListSiteResponse {
    return ListSiteResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSiteResponse>): ListSiteResponse {
    const message = createBaseListSiteResponse();
    message.sites = object.sites?.map((e) => SiteDetail.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSiteDetail(): SiteDetail {
  return { ID: "", Name: "", IP: "", SiteID: "" };
}

export const SiteDetail = {
  encode(message: SiteDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.IP !== "") {
      writer.uint32(26).string(message.IP);
    }
    if (message.SiteID !== "") {
      writer.uint32(34).string(message.SiteID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SiteDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSiteDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.IP = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.SiteID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<SiteDetail>): SiteDetail {
    return SiteDetail.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SiteDetail>): SiteDetail {
    const message = createBaseSiteDetail();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.IP = object.IP ?? "";
    message.SiteID = object.SiteID ?? "";
    return message;
  },
};

function createBaseListVPCRequest(): ListVPCRequest {
  return { Provider: "", Region: "", AccountIDs: "" };
}

export const ListVPCRequest = {
  encode(message: ListVPCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Provider !== "") {
      writer.uint32(10).string(message.Provider);
    }
    if (message.Region !== "") {
      writer.uint32(18).string(message.Region);
    }
    if (message.AccountIDs !== "") {
      writer.uint32(26).string(message.AccountIDs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVPCRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVPCRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Region = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.AccountIDs = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListVPCRequest>): ListVPCRequest {
    return ListVPCRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVPCRequest>): ListVPCRequest {
    const message = createBaseListVPCRequest();
    message.Provider = object.Provider ?? "";
    message.Region = object.Region ?? "";
    message.AccountIDs = object.AccountIDs ?? "";
    return message;
  },
};

function createBaseListVPCTagRequest(): ListVPCTagRequest {
  return { Provider: "", Region: "", Tag: "" };
}

export const ListVPCTagRequest = {
  encode(message: ListVPCTagRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Provider !== "") {
      writer.uint32(10).string(message.Provider);
    }
    if (message.Region !== "") {
      writer.uint32(18).string(message.Region);
    }
    if (message.Tag !== "") {
      writer.uint32(26).string(message.Tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVPCTagRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVPCTagRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Region = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Tag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListVPCTagRequest>): ListVPCTagRequest {
    return ListVPCTagRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVPCTagRequest>): ListVPCTagRequest {
    const message = createBaseListVPCTagRequest();
    message.Provider = object.Provider ?? "";
    message.Region = object.Region ?? "";
    message.Tag = object.Tag ?? "";
    return message;
  },
};

function createBaseListVPCResponse(): ListVPCResponse {
  return { VPCs: [] };
}

export const ListVPCResponse = {
  encode(message: ListVPCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.VPCs) {
      VPC.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVPCResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVPCResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.VPCs.push(VPC.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListVPCResponse>): ListVPCResponse {
    return ListVPCResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVPCResponse>): ListVPCResponse {
    const message = createBaseListVPCResponse();
    message.VPCs = object.VPCs?.map((e) => VPC.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVPC(): VPC {
  return { ID: "", Name: "", Tag: "", Region: "", AccountName: "", Provider: "", Labels: {} };
}

export const VPC = {
  encode(message: VPC, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.Name !== "") {
      writer.uint32(18).string(message.Name);
    }
    if (message.Tag !== "") {
      writer.uint32(26).string(message.Tag);
    }
    if (message.Region !== "") {
      writer.uint32(34).string(message.Region);
    }
    if (message.AccountName !== "") {
      writer.uint32(42).string(message.AccountName);
    }
    if (message.Provider !== "") {
      writer.uint32(50).string(message.Provider);
    }
    Object.entries(message.Labels).forEach(([key, value]) => {
      VPC_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
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

          message.ID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Tag = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.Region = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.AccountName = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.Provider = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = VPC_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.Labels[entry8.key] = entry8.value;
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

  create(base?: DeepPartial<VPC>): VPC {
    return VPC.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VPC>): VPC {
    const message = createBaseVPC();
    message.ID = object.ID ?? "";
    message.Name = object.Name ?? "";
    message.Tag = object.Tag ?? "";
    message.Region = object.Region ?? "";
    message.AccountName = object.AccountName ?? "";
    message.Provider = object.Provider ?? "";
    message.Labels = Object.entries(object.Labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
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

function createBaseListVPNRequest(): ListVPNRequest {
  return { Provider: "" };
}

export const ListVPNRequest = {
  encode(message: ListVPNRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Provider !== "") {
      writer.uint32(10).string(message.Provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVPNRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVPNRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Provider = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListVPNRequest>): ListVPNRequest {
    return ListVPNRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVPNRequest>): ListVPNRequest {
    const message = createBaseListVPNRequest();
    message.Provider = object.Provider ?? "";
    return message;
  },
};

function createBaseListVPNResponse(): ListVPNResponse {
  return { VPNs: [] };
}

export const ListVPNResponse = {
  encode(message: ListVPNResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.VPNs) {
      VPN.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVPNResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVPNResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.VPNs.push(VPN.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListVPNResponse>): ListVPNResponse {
    return ListVPNResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVPNResponse>): ListVPNResponse {
    const message = createBaseListVPNResponse();
    message.VPNs = object.VPNs?.map((e) => VPN.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVPN(): VPN {
  return { ID: "", SegmentName: "", SegmentID: "" };
}

export const VPN = {
  encode(message: VPN, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    if (message.SegmentName !== "") {
      writer.uint32(18).string(message.SegmentName);
    }
    if (message.SegmentID !== "") {
      writer.uint32(26).string(message.SegmentID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VPN {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVPN();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.SegmentName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.SegmentID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<VPN>): VPN {
    return VPN.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<VPN>): VPN {
    const message = createBaseVPN();
    message.ID = object.ID ?? "";
    message.SegmentName = object.SegmentName ?? "";
    message.SegmentID = object.SegmentID ?? "";
    return message;
  },
};

function createBasePod(): Pod {
  return { cluster: "", namespace: "", name: "", ip: "", labels: {} };
}

export const Pod = {
  encode(message: Pod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cluster !== "") {
      writer.uint32(10).string(message.cluster);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Pod_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pod {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cluster = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.namespace = reader.string();
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

          message.ip = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = Pod_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
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

  create(base?: DeepPartial<Pod>): Pod {
    return Pod.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Pod>): Pod {
    const message = createBasePod();
    message.cluster = object.cluster ?? "";
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    message.ip = object.ip ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBasePod_LabelsEntry(): Pod_LabelsEntry {
  return { key: "", value: "" };
}

export const Pod_LabelsEntry = {
  encode(message: Pod_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pod_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePod_LabelsEntry();
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

  create(base?: DeepPartial<Pod_LabelsEntry>): Pod_LabelsEntry {
    return Pod_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Pod_LabelsEntry>): Pod_LabelsEntry {
    const message = createBasePod_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseK8sService(): K8sService {
  return { cluster: "", namespace: "", name: "", ingresses: [], labels: {}, id: "" };
}

export const K8sService = {
  encode(message: K8sService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cluster !== "") {
      writer.uint32(10).string(message.cluster);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.ingresses) {
      K8sService_Ingress.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      K8sService_LabelsEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    if (message.id !== "") {
      writer.uint32(74).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): K8sService {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseK8sService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cluster = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.namespace = reader.string();
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

          message.ingresses.push(K8sService_Ingress.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = K8sService_LabelsEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.labels[entry8.key] = entry8.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<K8sService>): K8sService {
    return K8sService.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<K8sService>): K8sService {
    const message = createBaseK8sService();
    message.cluster = object.cluster ?? "";
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    message.ingresses = object.ingresses?.map((e) => K8sService_Ingress.fromPartial(e)) || [];
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseK8sService_Ingress(): K8sService_Ingress {
  return { hostname: "", IP: "", ports: [] };
}

export const K8sService_Ingress = {
  encode(message: K8sService_Ingress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostname !== "") {
      writer.uint32(10).string(message.hostname);
    }
    if (message.IP !== "") {
      writer.uint32(18).string(message.IP);
    }
    for (const v of message.ports) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): K8sService_Ingress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseK8sService_Ingress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostname = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.IP = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ports.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<K8sService_Ingress>): K8sService_Ingress {
    return K8sService_Ingress.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<K8sService_Ingress>): K8sService_Ingress {
    const message = createBaseK8sService_Ingress();
    message.hostname = object.hostname ?? "";
    message.IP = object.IP ?? "";
    message.ports = object.ports?.map((e) => e) || [];
    return message;
  },
};

function createBaseK8sService_LabelsEntry(): K8sService_LabelsEntry {
  return { key: "", value: "" };
}

export const K8sService_LabelsEntry = {
  encode(message: K8sService_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): K8sService_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseK8sService_LabelsEntry();
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

  create(base?: DeepPartial<K8sService_LabelsEntry>): K8sService_LabelsEntry {
    return K8sService_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<K8sService_LabelsEntry>): K8sService_LabelsEntry {
    const message = createBaseK8sService_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

export type CloudDefinition = typeof CloudDefinition;
export const CloudDefinition = {
  name: "Cloud",
  fullName: "Cloud",
  methods: {
    listInstances: {
      name: "ListInstances",
      requestType: ListInstancesRequest,
      requestStream: false,
      responseType: ListInstancesResponse,
      responseStream: false,
      options: {},
    },
    listSubnets: {
      name: "ListSubnets",
      requestType: ListSubnetRequest,
      requestStream: false,
      responseType: ListSubnetResponse,
      responseStream: false,
      options: {},
    },
    listSites: {
      name: "ListSites",
      requestType: ListSiteRequest,
      requestStream: false,
      responseType: ListSiteResponse,
      responseStream: false,
      options: {},
    },
    listVPCs: {
      name: "ListVPCs",
      requestType: ListVPCRequest,
      requestStream: false,
      responseType: ListVPCResponse,
      responseStream: false,
      options: {},
    },
    listVPCTags: {
      name: "ListVPCTags",
      requestType: ListVPCTagRequest,
      requestStream: false,
      responseType: ListVPCResponse,
      responseStream: false,
      options: {},
    },
    listVPNs: {
      name: "ListVPNs",
      requestType: ListVPNRequest,
      requestStream: false,
      responseType: ListVPNResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CloudServiceImplementation<CallContextExt = {}> {
  listInstances(
    request: ListInstancesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListInstancesResponse>>;
  listSubnets(
    request: ListSubnetRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListSubnetResponse>>;
  listSites(request: ListSiteRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSiteResponse>>;
  listVPCs(request: ListVPCRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListVPCResponse>>;
  listVPCTags(request: ListVPCTagRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListVPCResponse>>;
  listVPNs(request: ListVPNRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListVPNResponse>>;
}

export interface CloudClient<CallOptionsExt = {}> {
  listInstances(
    request: DeepPartial<ListInstancesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListInstancesResponse>;
  listSubnets(
    request: DeepPartial<ListSubnetRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListSubnetResponse>;
  listSites(request: DeepPartial<ListSiteRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSiteResponse>;
  listVPCs(request: DeepPartial<ListVPCRequest>, options?: CallOptions & CallOptionsExt): Promise<ListVPCResponse>;
  listVPCTags(
    request: DeepPartial<ListVPCTagRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListVPCResponse>;
  listVPNs(request: DeepPartial<ListVPNRequest>, options?: CallOptions & CallOptionsExt): Promise<ListVPNResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
