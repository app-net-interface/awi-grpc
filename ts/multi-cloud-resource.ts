/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Account, ACL, IGW, Instance, NATGateway, Router, RouteTable, SecurityGroup, Subnet, VPC } from "./types";

export const protobufPackage = "infra";

export interface ListAccountsRequest {
  provider: string;
}

export interface ListAccountsResponse {
  accounts: Account[];
}

/** ListVPC */
export interface ListVPCRequest {
  provider: string;
  region: string;
  labels: { [key: string]: string };
  accountId: string;
}

export interface ListVPCRequest_LabelsEntry {
  key: string;
  value: string;
}

export interface ListVPCResponse {
  vpcs: VPC[];
  lastSyncTime: string;
}

/** ListInstances */
export interface ListInstancesRequest {
  provider: string;
  vpcId: string;
  zone: string;
  labels: { [key: string]: string };
  region: string;
  accountId: string;
}

export interface ListInstancesRequest_LabelsEntry {
  key: string;
  value: string;
}

export interface ListInstancesResponse {
  instances: Instance[];
  lastSyncTime: string;
}

export interface ListACLsRequest {
  provider: string;
  vpcId: string;
  region: string;
  accountId: string;
}

export interface ListACLsResponse {
  acls: ACL[];
  lastSyncTime: string;
}

export interface ListSecurityGroupsRequest {
  provider: string;
  vpcId: string;
  region: string;
  accountId: string;
}

export interface ListSecurityGroupsResponse {
  securityGroups: SecurityGroup[];
  lastSyncTime: string;
}

export interface ListRouteTablesRequest {
  provider: string;
  vpcId: string;
  region: string;
  accountId: string;
}

export interface ListRouteTablesResponse {
  routeTables: RouteTable[];
  lastSyncTime: string;
}

export interface ListNATGatewaysRequest {
  provider: string;
  vpcId: string;
  region: string;
  accountId: string;
}

export interface ListNATGatewaysResponse {
  natGateways: NATGateway[];
  lastSyncTime: string;
}

export interface ListRoutersRequest {
  provider: string;
  vpcId: string;
  region: string;
  accountId: string;
}

export interface ListRoutersResponse {
  routers: Router[];
  lastSyncTime: string;
}

export interface ListInternetGatewaysRequest {
  provider: string;
  vpcId: string;
  region: string;
  accountId: string;
}

export interface ListInternetGatewaysResponse {
  igws: IGW[];
  lastSyncTime: string;
}

/** GetSubnet */
export interface GetSubnetRequest {
  provider: string;
  vpcId: string;
  id: string;
  region: string;
  accountId: string;
}

export interface GetSubnetResponse {
  subnet: Subnet | undefined;
}

/** ListSubnets */
export interface ListSubnetsRequest {
  provider: string;
  vpcId: string;
  zone: string;
  cidr: string;
  labels: { [key: string]: string };
  region: string;
  accountId: string;
}

export interface ListSubnetsRequest_LabelsEntry {
  key: string;
  value: string;
}

export interface ListSubnetsResponse {
  subnets: Subnet[];
  lastSyncTime: string;
}

function createBaseListAccountsRequest(): ListAccountsRequest {
  return { provider: "" };
}

export const ListAccountsRequest = {
  encode(message: ListAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.provider = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListAccountsRequest>): ListAccountsRequest {
    return ListAccountsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccountsRequest>): ListAccountsRequest {
    const message = createBaseListAccountsRequest();
    message.provider = object.provider ?? "";
    return message;
  },
};

function createBaseListAccountsResponse(): ListAccountsResponse {
  return { accounts: [] };
}

export const ListAccountsResponse = {
  encode(message: ListAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(Account.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListAccountsResponse>): ListAccountsResponse {
    return ListAccountsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAccountsResponse>): ListAccountsResponse {
    const message = createBaseListAccountsResponse();
    message.accounts = object.accounts?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseListVPCRequest(): ListVPCRequest {
  return { provider: "", region: "", labels: {}, accountId: "" };
}

export const ListVPCRequest = {
  encode(message: ListVPCRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.region !== "") {
      writer.uint32(18).string(message.region);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ListVPCRequest_LabelsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
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

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.region = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ListVPCRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.accountId = reader.string();
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
    message.provider = object.provider ?? "";
    message.region = object.region ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListVPCRequest_LabelsEntry(): ListVPCRequest_LabelsEntry {
  return { key: "", value: "" };
}

export const ListVPCRequest_LabelsEntry = {
  encode(message: ListVPCRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListVPCRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListVPCRequest_LabelsEntry();
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

  create(base?: DeepPartial<ListVPCRequest_LabelsEntry>): ListVPCRequest_LabelsEntry {
    return ListVPCRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVPCRequest_LabelsEntry>): ListVPCRequest_LabelsEntry {
    const message = createBaseListVPCRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseListVPCResponse(): ListVPCResponse {
  return { vpcs: [], lastSyncTime: "" };
}

export const ListVPCResponse = {
  encode(message: ListVPCResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.vpcs) {
      VPC.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
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

          message.vpcs.push(VPC.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListVPCResponse>): ListVPCResponse {
    return ListVPCResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListVPCResponse>): ListVPCResponse {
    const message = createBaseListVPCResponse();
    message.vpcs = object.vpcs?.map((e) => VPC.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseListInstancesRequest(): ListInstancesRequest {
  return { provider: "", vpcId: "", zone: "", labels: {}, region: "", accountId: "" };
}

export const ListInstancesRequest = {
  encode(message: ListInstancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.zone !== "") {
      writer.uint32(26).string(message.zone);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ListInstancesRequest_LabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.region !== "") {
      writer.uint32(42).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
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

          message.provider = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vpcId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zone = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = ListInstancesRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }
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
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.zone = object.zone ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
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
  return { instances: [], lastSyncTime: "" };
}

export const ListInstancesResponse = {
  encode(message: ListInstancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
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
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    return ListInstancesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInstancesResponse>): ListInstancesResponse {
    const message = createBaseListInstancesResponse();
    message.instances = object.instances?.map((e) => Instance.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseListACLsRequest(): ListACLsRequest {
  return { provider: "", vpcId: "", region: "", accountId: "" };
}

export const ListACLsRequest = {
  encode(message: ListACLsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListACLsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListACLsRequest();
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

          message.vpcId = reader.string();
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

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListACLsRequest>): ListACLsRequest {
    return ListACLsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListACLsRequest>): ListACLsRequest {
    const message = createBaseListACLsRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListACLsResponse(): ListACLsResponse {
  return { acls: [], lastSyncTime: "" };
}

export const ListACLsResponse = {
  encode(message: ListACLsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.acls) {
      ACL.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListACLsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListACLsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.acls.push(ACL.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListACLsResponse>): ListACLsResponse {
    return ListACLsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListACLsResponse>): ListACLsResponse {
    const message = createBaseListACLsResponse();
    message.acls = object.acls?.map((e) => ACL.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseListSecurityGroupsRequest(): ListSecurityGroupsRequest {
  return { provider: "", vpcId: "", region: "", accountId: "" };
}

export const ListSecurityGroupsRequest = {
  encode(message: ListSecurityGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecurityGroupsRequest();
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

          message.vpcId = reader.string();
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

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListSecurityGroupsRequest>): ListSecurityGroupsRequest {
    return ListSecurityGroupsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSecurityGroupsRequest>): ListSecurityGroupsRequest {
    const message = createBaseListSecurityGroupsRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListSecurityGroupsResponse(): ListSecurityGroupsResponse {
  return { securityGroups: [], lastSyncTime: "" };
}

export const ListSecurityGroupsResponse = {
  encode(message: ListSecurityGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.securityGroups) {
      SecurityGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSecurityGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSecurityGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.securityGroups.push(SecurityGroup.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListSecurityGroupsResponse>): ListSecurityGroupsResponse {
    return ListSecurityGroupsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSecurityGroupsResponse>): ListSecurityGroupsResponse {
    const message = createBaseListSecurityGroupsResponse();
    message.securityGroups = object.securityGroups?.map((e) => SecurityGroup.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseListRouteTablesRequest(): ListRouteTablesRequest {
  return { provider: "", vpcId: "", region: "", accountId: "" };
}

export const ListRouteTablesRequest = {
  encode(message: ListRouteTablesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRouteTablesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRouteTablesRequest();
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

          message.vpcId = reader.string();
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

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListRouteTablesRequest>): ListRouteTablesRequest {
    return ListRouteTablesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRouteTablesRequest>): ListRouteTablesRequest {
    const message = createBaseListRouteTablesRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListRouteTablesResponse(): ListRouteTablesResponse {
  return { routeTables: [], lastSyncTime: "" };
}

export const ListRouteTablesResponse = {
  encode(message: ListRouteTablesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.routeTables) {
      RouteTable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRouteTablesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRouteTablesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routeTables.push(RouteTable.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListRouteTablesResponse>): ListRouteTablesResponse {
    return ListRouteTablesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRouteTablesResponse>): ListRouteTablesResponse {
    const message = createBaseListRouteTablesResponse();
    message.routeTables = object.routeTables?.map((e) => RouteTable.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseListNATGatewaysRequest(): ListNATGatewaysRequest {
  return { provider: "", vpcId: "", region: "", accountId: "" };
}

export const ListNATGatewaysRequest = {
  encode(message: ListNATGatewaysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNATGatewaysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNATGatewaysRequest();
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

          message.vpcId = reader.string();
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

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListNATGatewaysRequest>): ListNATGatewaysRequest {
    return ListNATGatewaysRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListNATGatewaysRequest>): ListNATGatewaysRequest {
    const message = createBaseListNATGatewaysRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListNATGatewaysResponse(): ListNATGatewaysResponse {
  return { natGateways: [], lastSyncTime: "" };
}

export const ListNATGatewaysResponse = {
  encode(message: ListNATGatewaysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.natGateways) {
      NATGateway.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListNATGatewaysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListNATGatewaysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.natGateways.push(NATGateway.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListNATGatewaysResponse>): ListNATGatewaysResponse {
    return ListNATGatewaysResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListNATGatewaysResponse>): ListNATGatewaysResponse {
    const message = createBaseListNATGatewaysResponse();
    message.natGateways = object.natGateways?.map((e) => NATGateway.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseListRoutersRequest(): ListRoutersRequest {
  return { provider: "", vpcId: "", region: "", accountId: "" };
}

export const ListRoutersRequest = {
  encode(message: ListRoutersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRoutersRequest();
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

          message.vpcId = reader.string();
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

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListRoutersRequest>): ListRoutersRequest {
    return ListRoutersRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRoutersRequest>): ListRoutersRequest {
    const message = createBaseListRoutersRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListRoutersResponse(): ListRoutersResponse {
  return { routers: [], lastSyncTime: "" };
}

export const ListRoutersResponse = {
  encode(message: ListRoutersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.routers) {
      Router.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRoutersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRoutersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routers.push(Router.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListRoutersResponse>): ListRoutersResponse {
    return ListRoutersResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRoutersResponse>): ListRoutersResponse {
    const message = createBaseListRoutersResponse();
    message.routers = object.routers?.map((e) => Router.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseListInternetGatewaysRequest(): ListInternetGatewaysRequest {
  return { provider: "", vpcId: "", region: "", accountId: "" };
}

export const ListInternetGatewaysRequest = {
  encode(message: ListInternetGatewaysRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.region !== "") {
      writer.uint32(26).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(34).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInternetGatewaysRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInternetGatewaysRequest();
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

          message.vpcId = reader.string();
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

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListInternetGatewaysRequest>): ListInternetGatewaysRequest {
    return ListInternetGatewaysRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInternetGatewaysRequest>): ListInternetGatewaysRequest {
    const message = createBaseListInternetGatewaysRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListInternetGatewaysResponse(): ListInternetGatewaysResponse {
  return { igws: [], lastSyncTime: "" };
}

export const ListInternetGatewaysResponse = {
  encode(message: ListInternetGatewaysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.igws) {
      IGW.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListInternetGatewaysResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListInternetGatewaysResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.igws.push(IGW.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListInternetGatewaysResponse>): ListInternetGatewaysResponse {
    return ListInternetGatewaysResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListInternetGatewaysResponse>): ListInternetGatewaysResponse {
    const message = createBaseListInternetGatewaysResponse();
    message.igws = object.igws?.map((e) => IGW.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

function createBaseGetSubnetRequest(): GetSubnetRequest {
  return { provider: "", vpcId: "", id: "", region: "", accountId: "" };
}

export const GetSubnetRequest = {
  encode(message: GetSubnetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.region !== "") {
      writer.uint32(34).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(42).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubnetRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubnetRequest();
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

          message.vpcId = reader.string();
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

          message.region = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetSubnetRequest>): GetSubnetRequest {
    return GetSubnetRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSubnetRequest>): GetSubnetRequest {
    const message = createBaseGetSubnetRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.id = object.id ?? "";
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseGetSubnetResponse(): GetSubnetResponse {
  return { subnet: undefined };
}

export const GetSubnetResponse = {
  encode(message: GetSubnetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subnet !== undefined) {
      Subnet.encode(message.subnet, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetSubnetResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSubnetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnet = Subnet.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetSubnetResponse>): GetSubnetResponse {
    return GetSubnetResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSubnetResponse>): GetSubnetResponse {
    const message = createBaseGetSubnetResponse();
    message.subnet = (object.subnet !== undefined && object.subnet !== null)
      ? Subnet.fromPartial(object.subnet)
      : undefined;
    return message;
  },
};

function createBaseListSubnetsRequest(): ListSubnetsRequest {
  return { provider: "", vpcId: "", zone: "", cidr: "", labels: {}, region: "", accountId: "" };
}

export const ListSubnetsRequest = {
  encode(message: ListSubnetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.provider !== "") {
      writer.uint32(10).string(message.provider);
    }
    if (message.vpcId !== "") {
      writer.uint32(18).string(message.vpcId);
    }
    if (message.zone !== "") {
      writer.uint32(26).string(message.zone);
    }
    if (message.cidr !== "") {
      writer.uint32(34).string(message.cidr);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ListSubnetsRequest_LabelsEntry.encode({ key: key as any, value }, writer.uint32(42).fork()).ldelim();
    });
    if (message.region !== "") {
      writer.uint32(50).string(message.region);
    }
    if (message.accountId !== "") {
      writer.uint32(58).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetsRequest();
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

          message.vpcId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.zone = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cidr = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          const entry5 = ListSubnetsRequest_LabelsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.labels[entry5.key] = entry5.value;
          }
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

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListSubnetsRequest>): ListSubnetsRequest {
    return ListSubnetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSubnetsRequest>): ListSubnetsRequest {
    const message = createBaseListSubnetsRequest();
    message.provider = object.provider ?? "";
    message.vpcId = object.vpcId ?? "";
    message.zone = object.zone ?? "";
    message.cidr = object.cidr ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    message.region = object.region ?? "";
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseListSubnetsRequest_LabelsEntry(): ListSubnetsRequest_LabelsEntry {
  return { key: "", value: "" };
}

export const ListSubnetsRequest_LabelsEntry = {
  encode(message: ListSubnetsRequest_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetsRequest_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetsRequest_LabelsEntry();
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

  create(base?: DeepPartial<ListSubnetsRequest_LabelsEntry>): ListSubnetsRequest_LabelsEntry {
    return ListSubnetsRequest_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSubnetsRequest_LabelsEntry>): ListSubnetsRequest_LabelsEntry {
    const message = createBaseListSubnetsRequest_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseListSubnetsResponse(): ListSubnetsResponse {
  return { subnets: [], lastSyncTime: "" };
}

export const ListSubnetsResponse = {
  encode(message: ListSubnetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.subnets) {
      Subnet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastSyncTime !== "") {
      writer.uint32(18).string(message.lastSyncTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListSubnetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListSubnetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subnets.push(Subnet.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListSubnetsResponse>): ListSubnetsResponse {
    return ListSubnetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListSubnetsResponse>): ListSubnetsResponse {
    const message = createBaseListSubnetsResponse();
    message.subnets = object.subnets?.map((e) => Subnet.fromPartial(e)) || [];
    message.lastSyncTime = object.lastSyncTime ?? "";
    return message;
  },
};

/** CloudProvider service definition */
export type CloudProviderServiceDefinition = typeof CloudProviderServiceDefinition;
export const CloudProviderServiceDefinition = {
  name: "CloudProviderService",
  fullName: "infra.CloudProviderService",
  methods: {
    listAccounts: {
      name: "ListAccounts",
      requestType: ListAccountsRequest,
      requestStream: false,
      responseType: ListAccountsResponse,
      responseStream: false,
      options: {},
    },
    listVPC: {
      name: "ListVPC",
      requestType: ListVPCRequest,
      requestStream: false,
      responseType: ListVPCResponse,
      responseStream: false,
      options: {},
    },
    listInstances: {
      name: "ListInstances",
      requestType: ListInstancesRequest,
      requestStream: false,
      responseType: ListInstancesResponse,
      responseStream: false,
      options: {},
    },
    getSubnet: {
      name: "GetSubnet",
      requestType: GetSubnetRequest,
      requestStream: false,
      responseType: GetSubnetResponse,
      responseStream: false,
      options: {},
    },
    listSubnets: {
      name: "ListSubnets",
      requestType: ListSubnetsRequest,
      requestStream: false,
      responseType: ListSubnetsResponse,
      responseStream: false,
      options: {},
    },
    listACLs: {
      name: "ListACLs",
      requestType: ListACLsRequest,
      requestStream: false,
      responseType: ListACLsResponse,
      responseStream: false,
      options: {},
    },
    listSecurityGroups: {
      name: "ListSecurityGroups",
      requestType: ListSecurityGroupsRequest,
      requestStream: false,
      responseType: ListSecurityGroupsResponse,
      responseStream: false,
      options: {},
    },
    listRouteTables: {
      name: "ListRouteTables",
      requestType: ListRouteTablesRequest,
      requestStream: false,
      responseType: ListRouteTablesResponse,
      responseStream: false,
      options: {},
    },
    listNATGateways: {
      name: "ListNATGateways",
      requestType: ListNATGatewaysRequest,
      requestStream: false,
      responseType: ListNATGatewaysResponse,
      responseStream: false,
      options: {},
    },
    listRouters: {
      name: "ListRouters",
      requestType: ListRoutersRequest,
      requestStream: false,
      responseType: ListRoutersResponse,
      responseStream: false,
      options: {},
    },
    listInternetGateways: {
      name: "ListInternetGateways",
      requestType: ListInternetGatewaysRequest,
      requestStream: false,
      responseType: ListInternetGatewaysResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface CloudProviderServiceImplementation<CallContextExt = {}> {
  listAccounts(
    request: ListAccountsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListAccountsResponse>>;
  listVPC(request: ListVPCRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListVPCResponse>>;
  listInstances(
    request: ListInstancesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListInstancesResponse>>;
  getSubnet(request: GetSubnetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSubnetResponse>>;
  listSubnets(
    request: ListSubnetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListSubnetsResponse>>;
  listACLs(request: ListACLsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListACLsResponse>>;
  listSecurityGroups(
    request: ListSecurityGroupsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListSecurityGroupsResponse>>;
  listRouteTables(
    request: ListRouteTablesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListRouteTablesResponse>>;
  listNATGateways(
    request: ListNATGatewaysRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListNATGatewaysResponse>>;
  listRouters(
    request: ListRoutersRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListRoutersResponse>>;
  listInternetGateways(
    request: ListInternetGatewaysRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListInternetGatewaysResponse>>;
}

export interface CloudProviderServiceClient<CallOptionsExt = {}> {
  listAccounts(
    request: DeepPartial<ListAccountsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListAccountsResponse>;
  listVPC(request: DeepPartial<ListVPCRequest>, options?: CallOptions & CallOptionsExt): Promise<ListVPCResponse>;
  listInstances(
    request: DeepPartial<ListInstancesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListInstancesResponse>;
  getSubnet(request: DeepPartial<GetSubnetRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSubnetResponse>;
  listSubnets(
    request: DeepPartial<ListSubnetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListSubnetsResponse>;
  listACLs(request: DeepPartial<ListACLsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListACLsResponse>;
  listSecurityGroups(
    request: DeepPartial<ListSecurityGroupsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListSecurityGroupsResponse>;
  listRouteTables(
    request: DeepPartial<ListRouteTablesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListRouteTablesResponse>;
  listNATGateways(
    request: DeepPartial<ListNATGatewaysRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListNATGatewaysResponse>;
  listRouters(
    request: DeepPartial<ListRoutersRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListRoutersResponse>;
  listInternetGateways(
    request: DeepPartial<ListInternetGatewaysRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListInternetGatewaysResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
