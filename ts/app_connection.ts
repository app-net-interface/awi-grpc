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
import _m0 from "protobufjs/minimal";
import { Instance, K8sService, Pod, Subnet } from "./cloud_request";
import { Error, Status } from "./common";

export const protobufPackage = "";

export enum Controller {
  Cisco_vManage = 0,
  Cisco_Meraki_Dashboard = 1,
  Versa = 2,
  Juniper = 3,
  Palo_Alto = 4,
  Turnium = 5,
  Tufin = 6,
  AWS_CloudWAN = 7,
  UNRECOGNIZED = -1,
}

export enum AccessType {
  ALLOW = 0,
  DENY = 1,
  UNRECOGNIZED = -1,
}

export enum Kind {
  VM = 0,
  CONTAINER = 1,
  POD = 2,
  UNRECOGNIZED = -1,
}

export interface AppConnection {
  /** Don't use enums for now as they are problematic in CRD spec build */
  controller: string;
  metadata: AppMetadata | undefined;
  from: From | undefined;
  to: To | undefined;
  accessPolicy: AccessPolicySelector | undefined;
  networkDomainConnection: NetworkDomainConnection | undefined;
  networkPolicy: NetworkPolicySelector | undefined;
}

export interface AppMetadata {
  name: string;
  description: string;
  label: { [key: string]: string };
  creationTimestamp: string;
  modificationTimestamp: string;
}

export interface AppMetadata_LabelEntry {
  key: string;
  value: string;
}

export interface From {
  endpoint: Endpoint | undefined;
  subnet: AppSubnet | undefined;
  namespace: Namespace | undefined;
  SGT: SGT | undefined;
  cluster: Cluster | undefined;
  networkDomain: NetworkDomain | undefined;
}

export interface To {
  endpoint: Endpoint | undefined;
  subnet: AppSubnet | undefined;
  namespace: Namespace | undefined;
  service: Service | undefined;
  externalEntities: string[];
  cluster: Cluster | undefined;
  networkDomain: NetworkDomain | undefined;
}

export interface MatchName {
  name: string;
}

export interface MatchNamespace {
  name: string;
}

export interface MatchCluster {
  name: string;
}

export interface MatchId {
  id: string;
}

export interface MatchOwner {
  owner: string;
}

export interface MatchHost {
  ip: string;
}

export interface Endpoint {
  kind: string;
  selector: Endpoint_Selector | undefined;
}

export interface Endpoint_Selector {
  matchLabels: { [key: string]: string };
  matchExpressions: MatchExpression[];
  matchCluster: MatchCluster | undefined;
  matchNamespace: MatchNamespace | undefined;
  matchName: MatchName | undefined;
}

export interface Endpoint_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface MatchExpression {
  key: string;
  operator: string;
  values: string[];
}

export interface AppSubnet {
  selector: AppSubnet_Selector | undefined;
}

export interface AppSubnet_Selector {
  matchLabels: { [key: string]: string };
  matchPrefix: string[];
  matchExpressions: MatchExpression[];
}

export interface AppSubnet_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface Namespace {
  selector: Namespace_Selector | undefined;
}

export interface Namespace_Selector {
  matchName: string;
  matchLabels: { [key: string]: string };
  matchExpressions: MatchExpression[];
}

export interface Namespace_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface SGT {
  name: string;
}

export interface ServiceKind {
  k8sService: ServiceKind_K8SService | undefined;
  vmService: ServiceKind_VMService | undefined;
}

export interface ServiceKind_K8SService {
  serviceType: string;
}

export interface ServiceKind_VMService {
  serviceType: string;
}

export interface Service {
  kind: ServiceKind | undefined;
  selector: Service_Selector | undefined;
}

export interface Service_Selector {
  matchName: MatchName | undefined;
  matchNamespace: MatchNamespace | undefined;
  matchCluster: MatchCluster | undefined;
  matchLabels: { [key: string]: string };
  matchHost: MatchHost | undefined;
  matchExpressions: MatchExpression[];
}

export interface Service_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface Cluster {
  selector: Cluster_Selector | undefined;
}

export interface Cluster_Selector {
  matchName: MatchName | undefined;
  matchLabels: { [key: string]: string };
}

export interface Cluster_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface NetworkDomain {
  /** VPC or VRF */
  Kind: string;
  selector: NetworkDomain_Selector | undefined;
}

export interface NetworkDomain_Selector {
  matchLabels: { [key: string]: string };
  matchID: MatchId | undefined;
  matchName: MatchName | undefined;
  matchOwner: MatchOwner | undefined;
}

export interface NetworkDomain_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface AccessPolicySelector {
  selector: AccessPolicySelector_Selector | undefined;
}

export interface AccessPolicySelector_Selector {
  matchName: AccessPolicySelector_MatchName | undefined;
  matchId: AccessPolicySelector_MatchId | undefined;
  matchLabels: { [key: string]: string };
}

export interface AccessPolicySelector_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface AccessPolicySelector_MatchName {
  name: string;
}

export interface AccessPolicySelector_MatchId {
  id: string;
}

export interface NetworkPolicySelector {
  selector: NetworkPolicySelector_Selector | undefined;
}

export interface NetworkPolicySelector_Selector {
  matchName: string;
}

export interface NetworkAccessControl {
  protocol: string;
  port: string;
}

export interface NetworkDomainConnection {
  selector: NetworkDomainConnection_Selector | undefined;
}

export interface NetworkDomainConnection_Selector {
  matchName: string;
}

export interface NetworkPolicy {
  selector: NetworkPolicy_Selector | undefined;
}

export interface NetworkPolicy_Selector {
  matchName: string;
}

export interface AppConnectionResponse {
  /** request response code */
  error: Error | undefined;
  appConnId: string;
  appConnName: string;
  /** Connection provisioning status : IN_PROGRESS, SUCCESS, FAILED */
  status: Status;
  connectionMeta: AppConnectionResponse_meta | undefined;
}

export interface AppConnectionResponse_meta {
  /** Egres, ingress, bi-directional */
  appConnDirection: string;
  /** Source IP of the connection */
  connectionSourceIp: string;
  /** Destination IP of the connection */
  connectionDestIp: string;
  /** Source IP of the connection */
  connectionSourceTag: string;
  /** Destination IP of the connection */
  connectionDestTag: string;
  /** URL to get connection status */
  connectionStatusUrl: string;
  /** URL to get connection statistics */
  connectionStatisticsUrl: string;
  /** URL to get connection events */
  connectionEventsUrl: string;
}

export interface GetAppConnectionResponse {
  /** request response code */
  error: Error | undefined;
  appConnection: AppConnectionInformation | undefined;
}

/** disconnect */
export interface AppDisconnectionRequest {
  connectionId: string;
}

export interface AppDisconnectionResponse {
  error: Error | undefined;
  connectionId: string;
  connectionName: string;
  /** AccessControl response code */
  status: Status;
}

export interface AppConnectionStatusResponse {
  /** request response code */
  error: Error | undefined;
  appConnId: string;
  appConnName: string;
  status: Status;
}

export interface AppConnectionStatistics {
  /** request response code */
  error: Error | undefined;
}

export interface AppConnectionStatisticsResponse {
  /** request response code */
  error: Error | undefined;
  appConnId: string;
  appConnName: string;
  stats: AppConnectionStatistics | undefined;
}

export interface AppConnectionEvents {
  /** request response code */
  error: Error | undefined;
}

export interface AppConnectionEventsResponse {
  /** request response code */
  error: Error | undefined;
  appConnId: string;
  appConnName: string;
  events: AppConnectionEvents | undefined;
}

/** GetConnection() - need a service registry integration */
export interface GetAppConnectionRequest {
  connectionId: string;
}

export interface GetAppConnectionStatusRequest {
  connectionId: string;
}

export interface GetAppConnectionStatisticsRequest {
  connectionId: string;
}

export interface GetAppConnectionEventsRequest {
  connectionId: string;
}

export interface ListAppConnectionsRequest {
}

export interface ListAppConnectionsResponse {
  error: Error | undefined;
  appConnections: AppConnectionInformation[];
}

export interface MatchedResources {
  matchedInstances: Instance[];
  matchedPods: Pod[];
  matchedSubnets: Subnet[];
  matchedServices: K8sService[];
}

export interface AppConnectionInformation {
  id: string;
  appConnectionConfig: AppConnection | undefined;
  status: Status;
  NetworkDomainConnectionName: string;
  sourceMatched: MatchedResources | undefined;
  destinationMatched: MatchedResources | undefined;
}

export interface GetMatchedResourcesResponse {
  sourceMatched: MatchedResources | undefined;
  destinationMatched: MatchedResources | undefined;
}

export interface AppConnectionPolicy {
  id: string;
  appConnection: AppConnection | undefined;
}

export interface CreateAppConnectionPolicyRequest {
  appConnection: AppConnection | undefined;
}

export interface CreateAppConnectionPolicyResponse {
  status: string;
  id: string;
}

export interface GetAppConnectionPolicyRequest {
  id: string;
}

export interface GetAppConnectionPolicyResponse {
  appConnectionPolicy: AppConnectionPolicy | undefined;
}

export interface DeleteAppConnectionPolicyRequest {
  id: string;
}

export interface DeleteAppConnectionPolicyResponse {
  status: string;
}

export interface ListAppConnectionPoliciesRequest {
}

export interface ListAppConnectionPoliciesResponse {
  appConnectionPolicies: AppConnectionPolicy[];
}

function createBaseAppConnection(): AppConnection {
  return {
    controller: "",
    metadata: undefined,
    from: undefined,
    to: undefined,
    accessPolicy: undefined,
    networkDomainConnection: undefined,
    networkPolicy: undefined,
  };
}

export const AppConnection = {
  encode(message: AppConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.controller !== "") {
      writer.uint32(10).string(message.controller);
    }
    if (message.metadata !== undefined) {
      AppMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.from !== undefined) {
      From.encode(message.from, writer.uint32(26).fork()).ldelim();
    }
    if (message.to !== undefined) {
      To.encode(message.to, writer.uint32(34).fork()).ldelim();
    }
    if (message.accessPolicy !== undefined) {
      AccessPolicySelector.encode(message.accessPolicy, writer.uint32(42).fork()).ldelim();
    }
    if (message.networkDomainConnection !== undefined) {
      NetworkDomainConnection.encode(message.networkDomainConnection, writer.uint32(50).fork()).ldelim();
    }
    if (message.networkPolicy !== undefined) {
      NetworkPolicySelector.encode(message.networkPolicy, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.controller = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = AppMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.from = From.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.to = To.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accessPolicy = AccessPolicySelector.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.networkDomainConnection = NetworkDomainConnection.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.networkPolicy = NetworkPolicySelector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnection>): AppConnection {
    return AppConnection.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnection>): AppConnection {
    const message = createBaseAppConnection();
    message.controller = object.controller ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? AppMetadata.fromPartial(object.metadata)
      : undefined;
    message.from = (object.from !== undefined && object.from !== null) ? From.fromPartial(object.from) : undefined;
    message.to = (object.to !== undefined && object.to !== null) ? To.fromPartial(object.to) : undefined;
    message.accessPolicy = (object.accessPolicy !== undefined && object.accessPolicy !== null)
      ? AccessPolicySelector.fromPartial(object.accessPolicy)
      : undefined;
    message.networkDomainConnection =
      (object.networkDomainConnection !== undefined && object.networkDomainConnection !== null)
        ? NetworkDomainConnection.fromPartial(object.networkDomainConnection)
        : undefined;
    message.networkPolicy = (object.networkPolicy !== undefined && object.networkPolicy !== null)
      ? NetworkPolicySelector.fromPartial(object.networkPolicy)
      : undefined;
    return message;
  },
};

function createBaseAppMetadata(): AppMetadata {
  return { name: "", description: "", label: {}, creationTimestamp: "", modificationTimestamp: "" };
}

export const AppMetadata = {
  encode(message: AppMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    Object.entries(message.label).forEach(([key, value]) => {
      AppMetadata_LabelEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.creationTimestamp !== "") {
      writer.uint32(34).string(message.creationTimestamp);
    }
    if (message.modificationTimestamp !== "") {
      writer.uint32(42).string(message.modificationTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMetadata();
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

          const entry3 = AppMetadata_LabelEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.label[entry3.key] = entry3.value;
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

  create(base?: DeepPartial<AppMetadata>): AppMetadata {
    return AppMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppMetadata>): AppMetadata {
    const message = createBaseAppMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.label = Object.entries(object.label ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
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

function createBaseAppMetadata_LabelEntry(): AppMetadata_LabelEntry {
  return { key: "", value: "" };
}

export const AppMetadata_LabelEntry = {
  encode(message: AppMetadata_LabelEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppMetadata_LabelEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppMetadata_LabelEntry();
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

  create(base?: DeepPartial<AppMetadata_LabelEntry>): AppMetadata_LabelEntry {
    return AppMetadata_LabelEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppMetadata_LabelEntry>): AppMetadata_LabelEntry {
    const message = createBaseAppMetadata_LabelEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseFrom(): From {
  return {
    endpoint: undefined,
    subnet: undefined,
    namespace: undefined,
    SGT: undefined,
    cluster: undefined,
    networkDomain: undefined,
  };
}

export const From = {
  encode(message: From, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpoint !== undefined) {
      Endpoint.encode(message.endpoint, writer.uint32(10).fork()).ldelim();
    }
    if (message.subnet !== undefined) {
      AppSubnet.encode(message.subnet, writer.uint32(18).fork()).ldelim();
    }
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(26).fork()).ldelim();
    }
    if (message.SGT !== undefined) {
      SGT.encode(message.SGT, writer.uint32(34).fork()).ldelim();
    }
    if (message.cluster !== undefined) {
      Cluster.encode(message.cluster, writer.uint32(42).fork()).ldelim();
    }
    if (message.networkDomain !== undefined) {
      NetworkDomain.encode(message.networkDomain, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): From {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFrom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpoint = Endpoint.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnet = AppSubnet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.namespace = Namespace.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.SGT = SGT.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cluster = Cluster.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.networkDomain = NetworkDomain.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<From>): From {
    return From.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<From>): From {
    const message = createBaseFrom();
    message.endpoint = (object.endpoint !== undefined && object.endpoint !== null)
      ? Endpoint.fromPartial(object.endpoint)
      : undefined;
    message.subnet = (object.subnet !== undefined && object.subnet !== null)
      ? AppSubnet.fromPartial(object.subnet)
      : undefined;
    message.namespace = (object.namespace !== undefined && object.namespace !== null)
      ? Namespace.fromPartial(object.namespace)
      : undefined;
    message.SGT = (object.SGT !== undefined && object.SGT !== null) ? SGT.fromPartial(object.SGT) : undefined;
    message.cluster = (object.cluster !== undefined && object.cluster !== null)
      ? Cluster.fromPartial(object.cluster)
      : undefined;
    message.networkDomain = (object.networkDomain !== undefined && object.networkDomain !== null)
      ? NetworkDomain.fromPartial(object.networkDomain)
      : undefined;
    return message;
  },
};

function createBaseTo(): To {
  return {
    endpoint: undefined,
    subnet: undefined,
    namespace: undefined,
    service: undefined,
    externalEntities: [],
    cluster: undefined,
    networkDomain: undefined,
  };
}

export const To = {
  encode(message: To, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpoint !== undefined) {
      Endpoint.encode(message.endpoint, writer.uint32(10).fork()).ldelim();
    }
    if (message.subnet !== undefined) {
      AppSubnet.encode(message.subnet, writer.uint32(18).fork()).ldelim();
    }
    if (message.namespace !== undefined) {
      Namespace.encode(message.namespace, writer.uint32(26).fork()).ldelim();
    }
    if (message.service !== undefined) {
      Service.encode(message.service, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.externalEntities) {
      writer.uint32(42).string(v!);
    }
    if (message.cluster !== undefined) {
      Cluster.encode(message.cluster, writer.uint32(50).fork()).ldelim();
    }
    if (message.networkDomain !== undefined) {
      NetworkDomain.encode(message.networkDomain, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): To {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpoint = Endpoint.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subnet = AppSubnet.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.namespace = Namespace.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.service = Service.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.externalEntities.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.cluster = Cluster.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.networkDomain = NetworkDomain.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<To>): To {
    return To.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<To>): To {
    const message = createBaseTo();
    message.endpoint = (object.endpoint !== undefined && object.endpoint !== null)
      ? Endpoint.fromPartial(object.endpoint)
      : undefined;
    message.subnet = (object.subnet !== undefined && object.subnet !== null)
      ? AppSubnet.fromPartial(object.subnet)
      : undefined;
    message.namespace = (object.namespace !== undefined && object.namespace !== null)
      ? Namespace.fromPartial(object.namespace)
      : undefined;
    message.service = (object.service !== undefined && object.service !== null)
      ? Service.fromPartial(object.service)
      : undefined;
    message.externalEntities = object.externalEntities?.map((e) => e) || [];
    message.cluster = (object.cluster !== undefined && object.cluster !== null)
      ? Cluster.fromPartial(object.cluster)
      : undefined;
    message.networkDomain = (object.networkDomain !== undefined && object.networkDomain !== null)
      ? NetworkDomain.fromPartial(object.networkDomain)
      : undefined;
    return message;
  },
};

function createBaseMatchName(): MatchName {
  return { name: "" };
}

export const MatchName = {
  encode(message: MatchName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchName();
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

  create(base?: DeepPartial<MatchName>): MatchName {
    return MatchName.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchName>): MatchName {
    const message = createBaseMatchName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMatchNamespace(): MatchNamespace {
  return { name: "" };
}

export const MatchNamespace = {
  encode(message: MatchNamespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchNamespace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchNamespace();
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

  create(base?: DeepPartial<MatchNamespace>): MatchNamespace {
    return MatchNamespace.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchNamespace>): MatchNamespace {
    const message = createBaseMatchNamespace();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMatchCluster(): MatchCluster {
  return { name: "" };
}

export const MatchCluster = {
  encode(message: MatchCluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchCluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchCluster();
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

  create(base?: DeepPartial<MatchCluster>): MatchCluster {
    return MatchCluster.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchCluster>): MatchCluster {
    const message = createBaseMatchCluster();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMatchId(): MatchId {
  return { id: "" };
}

export const MatchId = {
  encode(message: MatchId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  create(base?: DeepPartial<MatchId>): MatchId {
    return MatchId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchId>): MatchId {
    const message = createBaseMatchId();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMatchOwner(): MatchOwner {
  return { owner: "" };
}

export const MatchOwner = {
  encode(message: MatchOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchOwner {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MatchOwner>): MatchOwner {
    return MatchOwner.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchOwner>): MatchOwner {
    const message = createBaseMatchOwner();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseMatchHost(): MatchHost {
  return { ip: "" };
}

export const MatchHost = {
  encode(message: MatchHost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchHost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchHost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ip = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MatchHost>): MatchHost {
    return MatchHost.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchHost>): MatchHost {
    const message = createBaseMatchHost();
    message.ip = object.ip ?? "";
    return message;
  },
};

function createBaseEndpoint(): Endpoint {
  return { kind: "", selector: undefined };
}

export const Endpoint = {
  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }
    if (message.selector !== undefined) {
      Endpoint_Selector.encode(message.selector, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selector = Endpoint_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Endpoint>): Endpoint {
    return Endpoint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.kind = object.kind ?? "";
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? Endpoint_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseEndpoint_Selector(): Endpoint_Selector {
  return {
    matchLabels: {},
    matchExpressions: [],
    matchCluster: undefined,
    matchNamespace: undefined,
    matchName: undefined,
  };
}

export const Endpoint_Selector = {
  encode(message: Endpoint_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      Endpoint_Selector_MatchLabelsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.matchExpressions) {
      MatchExpression.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.matchCluster !== undefined) {
      MatchCluster.encode(message.matchCluster, writer.uint32(26).fork()).ldelim();
    }
    if (message.matchNamespace !== undefined) {
      MatchNamespace.encode(message.matchNamespace, writer.uint32(34).fork()).ldelim();
    }
    if (message.matchName !== undefined) {
      MatchName.encode(message.matchName, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Endpoint_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.matchLabels[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchExpressions.push(MatchExpression.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matchCluster = MatchCluster.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.matchNamespace = MatchNamespace.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.matchName = MatchName.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Endpoint_Selector>): Endpoint_Selector {
    return Endpoint_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Endpoint_Selector>): Endpoint_Selector {
    const message = createBaseEndpoint_Selector();
    message.matchLabels = Object.entries(object.matchLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.matchExpressions = object.matchExpressions?.map((e) => MatchExpression.fromPartial(e)) || [];
    message.matchCluster = (object.matchCluster !== undefined && object.matchCluster !== null)
      ? MatchCluster.fromPartial(object.matchCluster)
      : undefined;
    message.matchNamespace = (object.matchNamespace !== undefined && object.matchNamespace !== null)
      ? MatchNamespace.fromPartial(object.matchNamespace)
      : undefined;
    message.matchName = (object.matchName !== undefined && object.matchName !== null)
      ? MatchName.fromPartial(object.matchName)
      : undefined;
    return message;
  },
};

function createBaseEndpoint_Selector_MatchLabelsEntry(): Endpoint_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const Endpoint_Selector_MatchLabelsEntry = {
  encode(message: Endpoint_Selector_MatchLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint_Selector_MatchLabelsEntry();
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

  create(base?: DeepPartial<Endpoint_Selector_MatchLabelsEntry>): Endpoint_Selector_MatchLabelsEntry {
    return Endpoint_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Endpoint_Selector_MatchLabelsEntry>): Endpoint_Selector_MatchLabelsEntry {
    const message = createBaseEndpoint_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseMatchExpression(): MatchExpression {
  return { key: "", operator: "", values: [] };
}

export const MatchExpression = {
  encode(message: MatchExpression, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.operator !== "") {
      writer.uint32(18).string(message.operator);
    }
    for (const v of message.values) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchExpression {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchExpression();
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

          message.operator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MatchExpression>): MatchExpression {
    return MatchExpression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchExpression>): MatchExpression {
    const message = createBaseMatchExpression();
    message.key = object.key ?? "";
    message.operator = object.operator ?? "";
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseAppSubnet(): AppSubnet {
  return { selector: undefined };
}

export const AppSubnet = {
  encode(message: AppSubnet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      AppSubnet_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppSubnet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppSubnet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = AppSubnet_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppSubnet>): AppSubnet {
    return AppSubnet.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppSubnet>): AppSubnet {
    const message = createBaseAppSubnet();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? AppSubnet_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseAppSubnet_Selector(): AppSubnet_Selector {
  return { matchLabels: {}, matchPrefix: [], matchExpressions: [] };
}

export const AppSubnet_Selector = {
  encode(message: AppSubnet_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      AppSubnet_Selector_MatchLabelsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.matchPrefix) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.matchExpressions) {
      MatchExpression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppSubnet_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppSubnet_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = AppSubnet_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.matchLabels[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchPrefix.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matchExpressions.push(MatchExpression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppSubnet_Selector>): AppSubnet_Selector {
    return AppSubnet_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppSubnet_Selector>): AppSubnet_Selector {
    const message = createBaseAppSubnet_Selector();
    message.matchLabels = Object.entries(object.matchLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.matchPrefix = object.matchPrefix?.map((e) => e) || [];
    message.matchExpressions = object.matchExpressions?.map((e) => MatchExpression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppSubnet_Selector_MatchLabelsEntry(): AppSubnet_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const AppSubnet_Selector_MatchLabelsEntry = {
  encode(message: AppSubnet_Selector_MatchLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppSubnet_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppSubnet_Selector_MatchLabelsEntry();
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

  create(base?: DeepPartial<AppSubnet_Selector_MatchLabelsEntry>): AppSubnet_Selector_MatchLabelsEntry {
    return AppSubnet_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppSubnet_Selector_MatchLabelsEntry>): AppSubnet_Selector_MatchLabelsEntry {
    const message = createBaseAppSubnet_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseNamespace(): Namespace {
  return { selector: undefined };
}

export const Namespace = {
  encode(message: Namespace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      Namespace_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Namespace {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = Namespace_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Namespace>): Namespace {
    return Namespace.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Namespace>): Namespace {
    const message = createBaseNamespace();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? Namespace_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNamespace_Selector(): Namespace_Selector {
  return { matchName: "", matchLabels: {}, matchExpressions: [] };
}

export const Namespace_Selector = {
  encode(message: Namespace_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== "") {
      writer.uint32(10).string(message.matchName);
    }
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      Namespace_Selector_MatchLabelsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    for (const v of message.matchExpressions) {
      MatchExpression.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Namespace_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespace_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Namespace_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.matchLabels[entry2.key] = entry2.value;
          }
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matchExpressions.push(MatchExpression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Namespace_Selector>): Namespace_Selector {
    return Namespace_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Namespace_Selector>): Namespace_Selector {
    const message = createBaseNamespace_Selector();
    message.matchName = object.matchName ?? "";
    message.matchLabels = Object.entries(object.matchLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.matchExpressions = object.matchExpressions?.map((e) => MatchExpression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNamespace_Selector_MatchLabelsEntry(): Namespace_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const Namespace_Selector_MatchLabelsEntry = {
  encode(message: Namespace_Selector_MatchLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Namespace_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNamespace_Selector_MatchLabelsEntry();
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

  create(base?: DeepPartial<Namespace_Selector_MatchLabelsEntry>): Namespace_Selector_MatchLabelsEntry {
    return Namespace_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Namespace_Selector_MatchLabelsEntry>): Namespace_Selector_MatchLabelsEntry {
    const message = createBaseNamespace_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSGT(): SGT {
  return { name: "" };
}

export const SGT = {
  encode(message: SGT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SGT {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSGT();
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

  create(base?: DeepPartial<SGT>): SGT {
    return SGT.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SGT>): SGT {
    const message = createBaseSGT();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseServiceKind(): ServiceKind {
  return { k8sService: undefined, vmService: undefined };
}

export const ServiceKind = {
  encode(message: ServiceKind, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.k8sService !== undefined) {
      ServiceKind_K8SService.encode(message.k8sService, writer.uint32(10).fork()).ldelim();
    }
    if (message.vmService !== undefined) {
      ServiceKind_VMService.encode(message.vmService, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceKind {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceKind();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.k8sService = ServiceKind_K8SService.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vmService = ServiceKind_VMService.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ServiceKind>): ServiceKind {
    return ServiceKind.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceKind>): ServiceKind {
    const message = createBaseServiceKind();
    message.k8sService = (object.k8sService !== undefined && object.k8sService !== null)
      ? ServiceKind_K8SService.fromPartial(object.k8sService)
      : undefined;
    message.vmService = (object.vmService !== undefined && object.vmService !== null)
      ? ServiceKind_VMService.fromPartial(object.vmService)
      : undefined;
    return message;
  },
};

function createBaseServiceKind_K8SService(): ServiceKind_K8SService {
  return { serviceType: "" };
}

export const ServiceKind_K8SService = {
  encode(message: ServiceKind_K8SService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceType !== "") {
      writer.uint32(18).string(message.serviceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceKind_K8SService {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceKind_K8SService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ServiceKind_K8SService>): ServiceKind_K8SService {
    return ServiceKind_K8SService.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceKind_K8SService>): ServiceKind_K8SService {
    const message = createBaseServiceKind_K8SService();
    message.serviceType = object.serviceType ?? "";
    return message;
  },
};

function createBaseServiceKind_VMService(): ServiceKind_VMService {
  return { serviceType: "" };
}

export const ServiceKind_VMService = {
  encode(message: ServiceKind_VMService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serviceType !== "") {
      writer.uint32(10).string(message.serviceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceKind_VMService {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceKind_VMService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serviceType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ServiceKind_VMService>): ServiceKind_VMService {
    return ServiceKind_VMService.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ServiceKind_VMService>): ServiceKind_VMService {
    const message = createBaseServiceKind_VMService();
    message.serviceType = object.serviceType ?? "";
    return message;
  },
};

function createBaseService(): Service {
  return { kind: undefined, selector: undefined };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== undefined) {
      ServiceKind.encode(message.kind, writer.uint32(10).fork()).ldelim();
    }
    if (message.selector !== undefined) {
      Service_Selector.encode(message.selector, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.kind = ServiceKind.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selector = Service_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Service>): Service {
    return Service.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.kind = (object.kind !== undefined && object.kind !== null)
      ? ServiceKind.fromPartial(object.kind)
      : undefined;
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? Service_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseService_Selector(): Service_Selector {
  return {
    matchName: undefined,
    matchNamespace: undefined,
    matchCluster: undefined,
    matchLabels: {},
    matchHost: undefined,
    matchExpressions: [],
  };
}

export const Service_Selector = {
  encode(message: Service_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== undefined) {
      MatchName.encode(message.matchName, writer.uint32(10).fork()).ldelim();
    }
    if (message.matchNamespace !== undefined) {
      MatchNamespace.encode(message.matchNamespace, writer.uint32(18).fork()).ldelim();
    }
    if (message.matchCluster !== undefined) {
      MatchCluster.encode(message.matchCluster, writer.uint32(26).fork()).ldelim();
    }
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      Service_Selector_MatchLabelsEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.matchHost !== undefined) {
      MatchHost.encode(message.matchHost, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.matchExpressions) {
      MatchExpression.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = MatchName.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchNamespace = MatchNamespace.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matchCluster = MatchCluster.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          const entry4 = Service_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.matchLabels[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.matchHost = MatchHost.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.matchExpressions.push(MatchExpression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Service_Selector>): Service_Selector {
    return Service_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Service_Selector>): Service_Selector {
    const message = createBaseService_Selector();
    message.matchName = (object.matchName !== undefined && object.matchName !== null)
      ? MatchName.fromPartial(object.matchName)
      : undefined;
    message.matchNamespace = (object.matchNamespace !== undefined && object.matchNamespace !== null)
      ? MatchNamespace.fromPartial(object.matchNamespace)
      : undefined;
    message.matchCluster = (object.matchCluster !== undefined && object.matchCluster !== null)
      ? MatchCluster.fromPartial(object.matchCluster)
      : undefined;
    message.matchLabels = Object.entries(object.matchLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.matchHost = (object.matchHost !== undefined && object.matchHost !== null)
      ? MatchHost.fromPartial(object.matchHost)
      : undefined;
    message.matchExpressions = object.matchExpressions?.map((e) => MatchExpression.fromPartial(e)) || [];
    return message;
  },
};

function createBaseService_Selector_MatchLabelsEntry(): Service_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const Service_Selector_MatchLabelsEntry = {
  encode(message: Service_Selector_MatchLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService_Selector_MatchLabelsEntry();
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

  create(base?: DeepPartial<Service_Selector_MatchLabelsEntry>): Service_Selector_MatchLabelsEntry {
    return Service_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Service_Selector_MatchLabelsEntry>): Service_Selector_MatchLabelsEntry {
    const message = createBaseService_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCluster(): Cluster {
  return { selector: undefined };
}

export const Cluster = {
  encode(message: Cluster, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      Cluster_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cluster {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCluster();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = Cluster_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<Cluster>): Cluster {
    return Cluster.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Cluster>): Cluster {
    const message = createBaseCluster();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? Cluster_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseCluster_Selector(): Cluster_Selector {
  return { matchName: undefined, matchLabels: {} };
}

export const Cluster_Selector = {
  encode(message: Cluster_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== undefined) {
      MatchName.encode(message.matchName, writer.uint32(10).fork()).ldelim();
    }
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      Cluster_Selector_MatchLabelsEntry.encode({ key: key as any, value }, writer.uint32(18).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCluster_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = MatchName.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          const entry2 = Cluster_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry2.value !== undefined) {
            message.matchLabels[entry2.key] = entry2.value;
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

  create(base?: DeepPartial<Cluster_Selector>): Cluster_Selector {
    return Cluster_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Cluster_Selector>): Cluster_Selector {
    const message = createBaseCluster_Selector();
    message.matchName = (object.matchName !== undefined && object.matchName !== null)
      ? MatchName.fromPartial(object.matchName)
      : undefined;
    message.matchLabels = Object.entries(object.matchLabels ?? {}).reduce<{ [key: string]: string }>(
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

function createBaseCluster_Selector_MatchLabelsEntry(): Cluster_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const Cluster_Selector_MatchLabelsEntry = {
  encode(message: Cluster_Selector_MatchLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Cluster_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCluster_Selector_MatchLabelsEntry();
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

  create(base?: DeepPartial<Cluster_Selector_MatchLabelsEntry>): Cluster_Selector_MatchLabelsEntry {
    return Cluster_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Cluster_Selector_MatchLabelsEntry>): Cluster_Selector_MatchLabelsEntry {
    const message = createBaseCluster_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseNetworkDomain(): NetworkDomain {
  return { Kind: "", selector: undefined };
}

export const NetworkDomain = {
  encode(message: NetworkDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Kind !== "") {
      writer.uint32(10).string(message.Kind);
    }
    if (message.selector !== undefined) {
      NetworkDomain_Selector.encode(message.selector, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Kind = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.selector = NetworkDomain_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomain>): NetworkDomain {
    return NetworkDomain.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomain>): NetworkDomain {
    const message = createBaseNetworkDomain();
    message.Kind = object.Kind ?? "";
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomain_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomain_Selector(): NetworkDomain_Selector {
  return { matchLabels: {}, matchID: undefined, matchName: undefined, matchOwner: undefined };
}

export const NetworkDomain_Selector = {
  encode(message: NetworkDomain_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      NetworkDomain_Selector_MatchLabelsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    if (message.matchID !== undefined) {
      MatchId.encode(message.matchID, writer.uint32(18).fork()).ldelim();
    }
    if (message.matchName !== undefined) {
      MatchName.encode(message.matchName, writer.uint32(26).fork()).ldelim();
    }
    if (message.matchOwner !== undefined) {
      MatchOwner.encode(message.matchOwner, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomain_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomain_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = NetworkDomain_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.matchLabels[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchID = MatchId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matchName = MatchName.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.matchOwner = MatchOwner.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomain_Selector>): NetworkDomain_Selector {
    return NetworkDomain_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomain_Selector>): NetworkDomain_Selector {
    const message = createBaseNetworkDomain_Selector();
    message.matchLabels = Object.entries(object.matchLabels ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    message.matchID = (object.matchID !== undefined && object.matchID !== null)
      ? MatchId.fromPartial(object.matchID)
      : undefined;
    message.matchName = (object.matchName !== undefined && object.matchName !== null)
      ? MatchName.fromPartial(object.matchName)
      : undefined;
    message.matchOwner = (object.matchOwner !== undefined && object.matchOwner !== null)
      ? MatchOwner.fromPartial(object.matchOwner)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomain_Selector_MatchLabelsEntry(): NetworkDomain_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const NetworkDomain_Selector_MatchLabelsEntry = {
  encode(message: NetworkDomain_Selector_MatchLabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomain_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomain_Selector_MatchLabelsEntry();
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

  create(base?: DeepPartial<NetworkDomain_Selector_MatchLabelsEntry>): NetworkDomain_Selector_MatchLabelsEntry {
    return NetworkDomain_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomain_Selector_MatchLabelsEntry>): NetworkDomain_Selector_MatchLabelsEntry {
    const message = createBaseNetworkDomain_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAccessPolicySelector(): AccessPolicySelector {
  return { selector: undefined };
}

export const AccessPolicySelector = {
  encode(message: AccessPolicySelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      AccessPolicySelector_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = AccessPolicySelector_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AccessPolicySelector>): AccessPolicySelector {
    return AccessPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicySelector>): AccessPolicySelector {
    const message = createBaseAccessPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? AccessPolicySelector_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseAccessPolicySelector_Selector(): AccessPolicySelector_Selector {
  return { matchName: undefined, matchId: undefined, matchLabels: {} };
}

export const AccessPolicySelector_Selector = {
  encode(message: AccessPolicySelector_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== undefined) {
      AccessPolicySelector_MatchName.encode(message.matchName, writer.uint32(10).fork()).ldelim();
    }
    if (message.matchId !== undefined) {
      AccessPolicySelector_MatchId.encode(message.matchId, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      AccessPolicySelector_Selector_MatchLabelsEntry.encode({ key: key as any, value }, writer.uint32(26).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicySelector_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicySelector_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = AccessPolicySelector_MatchName.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchId = AccessPolicySelector_MatchId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = AccessPolicySelector_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.matchLabels[entry3.key] = entry3.value;
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

  create(base?: DeepPartial<AccessPolicySelector_Selector>): AccessPolicySelector_Selector {
    return AccessPolicySelector_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicySelector_Selector>): AccessPolicySelector_Selector {
    const message = createBaseAccessPolicySelector_Selector();
    message.matchName = (object.matchName !== undefined && object.matchName !== null)
      ? AccessPolicySelector_MatchName.fromPartial(object.matchName)
      : undefined;
    message.matchId = (object.matchId !== undefined && object.matchId !== null)
      ? AccessPolicySelector_MatchId.fromPartial(object.matchId)
      : undefined;
    message.matchLabels = Object.entries(object.matchLabels ?? {}).reduce<{ [key: string]: string }>(
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

function createBaseAccessPolicySelector_Selector_MatchLabelsEntry(): AccessPolicySelector_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const AccessPolicySelector_Selector_MatchLabelsEntry = {
  encode(
    message: AccessPolicySelector_Selector_MatchLabelsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicySelector_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicySelector_Selector_MatchLabelsEntry();
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

  create(
    base?: DeepPartial<AccessPolicySelector_Selector_MatchLabelsEntry>,
  ): AccessPolicySelector_Selector_MatchLabelsEntry {
    return AccessPolicySelector_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<AccessPolicySelector_Selector_MatchLabelsEntry>,
  ): AccessPolicySelector_Selector_MatchLabelsEntry {
    const message = createBaseAccessPolicySelector_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseAccessPolicySelector_MatchName(): AccessPolicySelector_MatchName {
  return { name: "" };
}

export const AccessPolicySelector_MatchName = {
  encode(message: AccessPolicySelector_MatchName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicySelector_MatchName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicySelector_MatchName();
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

  create(base?: DeepPartial<AccessPolicySelector_MatchName>): AccessPolicySelector_MatchName {
    return AccessPolicySelector_MatchName.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicySelector_MatchName>): AccessPolicySelector_MatchName {
    const message = createBaseAccessPolicySelector_MatchName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseAccessPolicySelector_MatchId(): AccessPolicySelector_MatchId {
  return { id: "" };
}

export const AccessPolicySelector_MatchId = {
  encode(message: AccessPolicySelector_MatchId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessPolicySelector_MatchId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessPolicySelector_MatchId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  create(base?: DeepPartial<AccessPolicySelector_MatchId>): AccessPolicySelector_MatchId {
    return AccessPolicySelector_MatchId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AccessPolicySelector_MatchId>): AccessPolicySelector_MatchId {
    const message = createBaseAccessPolicySelector_MatchId();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseNetworkPolicySelector(): NetworkPolicySelector {
  return { selector: undefined };
}

export const NetworkPolicySelector = {
  encode(message: NetworkPolicySelector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkPolicySelector_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkPolicySelector_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkPolicySelector>): NetworkPolicySelector {
    return NetworkPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkPolicySelector>): NetworkPolicySelector {
    const message = createBaseNetworkPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkPolicySelector_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkPolicySelector_Selector(): NetworkPolicySelector_Selector {
  return { matchName: "" };
}

export const NetworkPolicySelector_Selector = {
  encode(message: NetworkPolicySelector_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== "") {
      writer.uint32(10).string(message.matchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPolicySelector_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkPolicySelector_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkPolicySelector_Selector>): NetworkPolicySelector_Selector {
    return NetworkPolicySelector_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkPolicySelector_Selector>): NetworkPolicySelector_Selector {
    const message = createBaseNetworkPolicySelector_Selector();
    message.matchName = object.matchName ?? "";
    return message;
  },
};

function createBaseNetworkAccessControl(): NetworkAccessControl {
  return { protocol: "", port: "" };
}

export const NetworkAccessControl = {
  encode(message: NetworkAccessControl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.protocol !== "") {
      writer.uint32(10).string(message.protocol);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkAccessControl {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkAccessControl();
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

  create(base?: DeepPartial<NetworkAccessControl>): NetworkAccessControl {
    return NetworkAccessControl.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkAccessControl>): NetworkAccessControl {
    const message = createBaseNetworkAccessControl();
    message.protocol = object.protocol ?? "";
    message.port = object.port ?? "";
    return message;
  },
};

function createBaseNetworkDomainConnection(): NetworkDomainConnection {
  return { selector: undefined };
}

export const NetworkDomainConnection = {
  encode(message: NetworkDomainConnection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnection_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnection {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnection_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnection>): NetworkDomainConnection {
    return NetworkDomainConnection.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnection>): NetworkDomainConnection {
    const message = createBaseNetworkDomainConnection();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnection_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnection_Selector(): NetworkDomainConnection_Selector {
  return { matchName: "" };
}

export const NetworkDomainConnection_Selector = {
  encode(message: NetworkDomainConnection_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== "") {
      writer.uint32(10).string(message.matchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnection_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnection_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnection_Selector>): NetworkDomainConnection_Selector {
    return NetworkDomainConnection_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnection_Selector>): NetworkDomainConnection_Selector {
    const message = createBaseNetworkDomainConnection_Selector();
    message.matchName = object.matchName ?? "";
    return message;
  },
};

function createBaseNetworkPolicy(): NetworkPolicy {
  return { selector: undefined };
}

export const NetworkPolicy = {
  encode(message: NetworkPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkPolicy_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkPolicy_Selector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkPolicy>): NetworkPolicy {
    return NetworkPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkPolicy>): NetworkPolicy {
    const message = createBaseNetworkPolicy();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkPolicy_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkPolicy_Selector(): NetworkPolicy_Selector {
  return { matchName: "" };
}

export const NetworkPolicy_Selector = {
  encode(message: NetworkPolicy_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== "") {
      writer.uint32(10).string(message.matchName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkPolicy_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkPolicy_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkPolicy_Selector>): NetworkPolicy_Selector {
    return NetworkPolicy_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkPolicy_Selector>): NetworkPolicy_Selector {
    const message = createBaseNetworkPolicy_Selector();
    message.matchName = object.matchName ?? "";
    return message;
  },
};

function createBaseAppConnectionResponse(): AppConnectionResponse {
  return { error: undefined, appConnId: "", appConnName: "", status: 0, connectionMeta: undefined };
}

export const AppConnectionResponse = {
  encode(message: AppConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.appConnId !== "") {
      writer.uint32(18).string(message.appConnId);
    }
    if (message.appConnName !== "") {
      writer.uint32(26).string(message.appConnName);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.connectionMeta !== undefined) {
      AppConnectionResponse_meta.encode(message.connectionMeta, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appConnId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.appConnName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.connectionMeta = AppConnectionResponse_meta.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionResponse>): AppConnectionResponse {
    return AppConnectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionResponse>): AppConnectionResponse {
    const message = createBaseAppConnectionResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.appConnId = object.appConnId ?? "";
    message.appConnName = object.appConnName ?? "";
    message.status = object.status ?? 0;
    message.connectionMeta = (object.connectionMeta !== undefined && object.connectionMeta !== null)
      ? AppConnectionResponse_meta.fromPartial(object.connectionMeta)
      : undefined;
    return message;
  },
};

function createBaseAppConnectionResponse_meta(): AppConnectionResponse_meta {
  return {
    appConnDirection: "",
    connectionSourceIp: "",
    connectionDestIp: "",
    connectionSourceTag: "",
    connectionDestTag: "",
    connectionStatusUrl: "",
    connectionStatisticsUrl: "",
    connectionEventsUrl: "",
  };
}

export const AppConnectionResponse_meta = {
  encode(message: AppConnectionResponse_meta, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appConnDirection !== "") {
      writer.uint32(10).string(message.appConnDirection);
    }
    if (message.connectionSourceIp !== "") {
      writer.uint32(18).string(message.connectionSourceIp);
    }
    if (message.connectionDestIp !== "") {
      writer.uint32(26).string(message.connectionDestIp);
    }
    if (message.connectionSourceTag !== "") {
      writer.uint32(34).string(message.connectionSourceTag);
    }
    if (message.connectionDestTag !== "") {
      writer.uint32(42).string(message.connectionDestTag);
    }
    if (message.connectionStatusUrl !== "") {
      writer.uint32(50).string(message.connectionStatusUrl);
    }
    if (message.connectionStatisticsUrl !== "") {
      writer.uint32(58).string(message.connectionStatisticsUrl);
    }
    if (message.connectionEventsUrl !== "") {
      writer.uint32(66).string(message.connectionEventsUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionResponse_meta {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionResponse_meta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appConnDirection = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connectionSourceIp = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.connectionDestIp = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.connectionSourceTag = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.connectionDestTag = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.connectionStatusUrl = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.connectionStatisticsUrl = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.connectionEventsUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionResponse_meta>): AppConnectionResponse_meta {
    return AppConnectionResponse_meta.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionResponse_meta>): AppConnectionResponse_meta {
    const message = createBaseAppConnectionResponse_meta();
    message.appConnDirection = object.appConnDirection ?? "";
    message.connectionSourceIp = object.connectionSourceIp ?? "";
    message.connectionDestIp = object.connectionDestIp ?? "";
    message.connectionSourceTag = object.connectionSourceTag ?? "";
    message.connectionDestTag = object.connectionDestTag ?? "";
    message.connectionStatusUrl = object.connectionStatusUrl ?? "";
    message.connectionStatisticsUrl = object.connectionStatisticsUrl ?? "";
    message.connectionEventsUrl = object.connectionEventsUrl ?? "";
    return message;
  },
};

function createBaseGetAppConnectionResponse(): GetAppConnectionResponse {
  return { error: undefined, appConnection: undefined };
}

export const GetAppConnectionResponse = {
  encode(message: GetAppConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.appConnection !== undefined) {
      AppConnectionInformation.encode(message.appConnection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAppConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAppConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appConnection = AppConnectionInformation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetAppConnectionResponse>): GetAppConnectionResponse {
    return GetAppConnectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAppConnectionResponse>): GetAppConnectionResponse {
    const message = createBaseGetAppConnectionResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.appConnection = (object.appConnection !== undefined && object.appConnection !== null)
      ? AppConnectionInformation.fromPartial(object.appConnection)
      : undefined;
    return message;
  },
};

function createBaseAppDisconnectionRequest(): AppDisconnectionRequest {
  return { connectionId: "" };
}

export const AppDisconnectionRequest = {
  encode(message: AppDisconnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppDisconnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDisconnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppDisconnectionRequest>): AppDisconnectionRequest {
    return AppDisconnectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppDisconnectionRequest>): AppDisconnectionRequest {
    const message = createBaseAppDisconnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseAppDisconnectionResponse(): AppDisconnectionResponse {
  return { error: undefined, connectionId: "", connectionName: "", status: 0 };
}

export const AppDisconnectionResponse = {
  encode(message: AppDisconnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    if (message.connectionName !== "") {
      writer.uint32(26).string(message.connectionName);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppDisconnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDisconnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.connectionName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  create(base?: DeepPartial<AppDisconnectionResponse>): AppDisconnectionResponse {
    return AppDisconnectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppDisconnectionResponse>): AppDisconnectionResponse {
    const message = createBaseAppDisconnectionResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.connectionId = object.connectionId ?? "";
    message.connectionName = object.connectionName ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseAppConnectionStatusResponse(): AppConnectionStatusResponse {
  return { error: undefined, appConnId: "", appConnName: "", status: 0 };
}

export const AppConnectionStatusResponse = {
  encode(message: AppConnectionStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.appConnId !== "") {
      writer.uint32(18).string(message.appConnId);
    }
    if (message.appConnName !== "") {
      writer.uint32(26).string(message.appConnName);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appConnId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.appConnName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
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

  create(base?: DeepPartial<AppConnectionStatusResponse>): AppConnectionStatusResponse {
    return AppConnectionStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionStatusResponse>): AppConnectionStatusResponse {
    const message = createBaseAppConnectionStatusResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.appConnId = object.appConnId ?? "";
    message.appConnName = object.appConnName ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseAppConnectionStatistics(): AppConnectionStatistics {
  return { error: undefined };
}

export const AppConnectionStatistics = {
  encode(message: AppConnectionStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionStatistics {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionStatistics>): AppConnectionStatistics {
    return AppConnectionStatistics.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionStatistics>): AppConnectionStatistics {
    const message = createBaseAppConnectionStatistics();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseAppConnectionStatisticsResponse(): AppConnectionStatisticsResponse {
  return { error: undefined, appConnId: "", appConnName: "", stats: undefined };
}

export const AppConnectionStatisticsResponse = {
  encode(message: AppConnectionStatisticsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.appConnId !== "") {
      writer.uint32(18).string(message.appConnId);
    }
    if (message.appConnName !== "") {
      writer.uint32(26).string(message.appConnName);
    }
    if (message.stats !== undefined) {
      AppConnectionStatistics.encode(message.stats, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionStatisticsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionStatisticsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appConnId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.appConnName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stats = AppConnectionStatistics.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionStatisticsResponse>): AppConnectionStatisticsResponse {
    return AppConnectionStatisticsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionStatisticsResponse>): AppConnectionStatisticsResponse {
    const message = createBaseAppConnectionStatisticsResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.appConnId = object.appConnId ?? "";
    message.appConnName = object.appConnName ?? "";
    message.stats = (object.stats !== undefined && object.stats !== null)
      ? AppConnectionStatistics.fromPartial(object.stats)
      : undefined;
    return message;
  },
};

function createBaseAppConnectionEvents(): AppConnectionEvents {
  return { error: undefined };
}

export const AppConnectionEvents = {
  encode(message: AppConnectionEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionEvents {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionEvents>): AppConnectionEvents {
    return AppConnectionEvents.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionEvents>): AppConnectionEvents {
    const message = createBaseAppConnectionEvents();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseAppConnectionEventsResponse(): AppConnectionEventsResponse {
  return { error: undefined, appConnId: "", appConnName: "", events: undefined };
}

export const AppConnectionEventsResponse = {
  encode(message: AppConnectionEventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.appConnId !== "") {
      writer.uint32(18).string(message.appConnId);
    }
    if (message.appConnName !== "") {
      writer.uint32(26).string(message.appConnName);
    }
    if (message.events !== undefined) {
      AppConnectionEvents.encode(message.events, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionEventsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appConnId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.appConnName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.events = AppConnectionEvents.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionEventsResponse>): AppConnectionEventsResponse {
    return AppConnectionEventsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionEventsResponse>): AppConnectionEventsResponse {
    const message = createBaseAppConnectionEventsResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.appConnId = object.appConnId ?? "";
    message.appConnName = object.appConnName ?? "";
    message.events = (object.events !== undefined && object.events !== null)
      ? AppConnectionEvents.fromPartial(object.events)
      : undefined;
    return message;
  },
};

function createBaseGetAppConnectionRequest(): GetAppConnectionRequest {
  return { connectionId: "" };
}

export const GetAppConnectionRequest = {
  encode(message: GetAppConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAppConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAppConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetAppConnectionRequest>): GetAppConnectionRequest {
    return GetAppConnectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAppConnectionRequest>): GetAppConnectionRequest {
    const message = createBaseGetAppConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseGetAppConnectionStatusRequest(): GetAppConnectionStatusRequest {
  return { connectionId: "" };
}

export const GetAppConnectionStatusRequest = {
  encode(message: GetAppConnectionStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAppConnectionStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAppConnectionStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetAppConnectionStatusRequest>): GetAppConnectionStatusRequest {
    return GetAppConnectionStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAppConnectionStatusRequest>): GetAppConnectionStatusRequest {
    const message = createBaseGetAppConnectionStatusRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseGetAppConnectionStatisticsRequest(): GetAppConnectionStatisticsRequest {
  return { connectionId: "" };
}

export const GetAppConnectionStatisticsRequest = {
  encode(message: GetAppConnectionStatisticsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAppConnectionStatisticsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAppConnectionStatisticsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetAppConnectionStatisticsRequest>): GetAppConnectionStatisticsRequest {
    return GetAppConnectionStatisticsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAppConnectionStatisticsRequest>): GetAppConnectionStatisticsRequest {
    const message = createBaseGetAppConnectionStatisticsRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseGetAppConnectionEventsRequest(): GetAppConnectionEventsRequest {
  return { connectionId: "" };
}

export const GetAppConnectionEventsRequest = {
  encode(message: GetAppConnectionEventsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAppConnectionEventsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAppConnectionEventsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetAppConnectionEventsRequest>): GetAppConnectionEventsRequest {
    return GetAppConnectionEventsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAppConnectionEventsRequest>): GetAppConnectionEventsRequest {
    const message = createBaseGetAppConnectionEventsRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseListAppConnectionsRequest(): ListAppConnectionsRequest {
  return {};
}

export const ListAppConnectionsRequest = {
  encode(_: ListAppConnectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAppConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAppConnectionsRequest();
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

  create(base?: DeepPartial<ListAppConnectionsRequest>): ListAppConnectionsRequest {
    return ListAppConnectionsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ListAppConnectionsRequest>): ListAppConnectionsRequest {
    const message = createBaseListAppConnectionsRequest();
    return message;
  },
};

function createBaseListAppConnectionsResponse(): ListAppConnectionsResponse {
  return { error: undefined, appConnections: [] };
}

export const ListAppConnectionsResponse = {
  encode(message: ListAppConnectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.appConnections) {
      AppConnectionInformation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAppConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAppConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = Error.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appConnections.push(AppConnectionInformation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListAppConnectionsResponse>): ListAppConnectionsResponse {
    return ListAppConnectionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAppConnectionsResponse>): ListAppConnectionsResponse {
    const message = createBaseListAppConnectionsResponse();
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    message.appConnections = object.appConnections?.map((e) => AppConnectionInformation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMatchedResources(): MatchedResources {
  return { matchedInstances: [], matchedPods: [], matchedSubnets: [], matchedServices: [] };
}

export const MatchedResources = {
  encode(message: MatchedResources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.matchedInstances) {
      Instance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.matchedPods) {
      Pod.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.matchedSubnets) {
      Subnet.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.matchedServices) {
      K8sService.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MatchedResources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchedResources();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchedInstances.push(Instance.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchedPods.push(Pod.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matchedSubnets.push(Subnet.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.matchedServices.push(K8sService.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<MatchedResources>): MatchedResources {
    return MatchedResources.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MatchedResources>): MatchedResources {
    const message = createBaseMatchedResources();
    message.matchedInstances = object.matchedInstances?.map((e) => Instance.fromPartial(e)) || [];
    message.matchedPods = object.matchedPods?.map((e) => Pod.fromPartial(e)) || [];
    message.matchedSubnets = object.matchedSubnets?.map((e) => Subnet.fromPartial(e)) || [];
    message.matchedServices = object.matchedServices?.map((e) => K8sService.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAppConnectionInformation(): AppConnectionInformation {
  return {
    id: "",
    appConnectionConfig: undefined,
    status: 0,
    NetworkDomainConnectionName: "",
    sourceMatched: undefined,
    destinationMatched: undefined,
  };
}

export const AppConnectionInformation = {
  encode(message: AppConnectionInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.appConnectionConfig !== undefined) {
      AppConnection.encode(message.appConnectionConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.NetworkDomainConnectionName !== "") {
      writer.uint32(34).string(message.NetworkDomainConnectionName);
    }
    if (message.sourceMatched !== undefined) {
      MatchedResources.encode(message.sourceMatched, writer.uint32(42).fork()).ldelim();
    }
    if (message.destinationMatched !== undefined) {
      MatchedResources.encode(message.destinationMatched, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionInformation();
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

          message.appConnectionConfig = AppConnection.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.NetworkDomainConnectionName = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sourceMatched = MatchedResources.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.destinationMatched = MatchedResources.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionInformation>): AppConnectionInformation {
    return AppConnectionInformation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionInformation>): AppConnectionInformation {
    const message = createBaseAppConnectionInformation();
    message.id = object.id ?? "";
    message.appConnectionConfig = (object.appConnectionConfig !== undefined && object.appConnectionConfig !== null)
      ? AppConnection.fromPartial(object.appConnectionConfig)
      : undefined;
    message.status = object.status ?? 0;
    message.NetworkDomainConnectionName = object.NetworkDomainConnectionName ?? "";
    message.sourceMatched = (object.sourceMatched !== undefined && object.sourceMatched !== null)
      ? MatchedResources.fromPartial(object.sourceMatched)
      : undefined;
    message.destinationMatched = (object.destinationMatched !== undefined && object.destinationMatched !== null)
      ? MatchedResources.fromPartial(object.destinationMatched)
      : undefined;
    return message;
  },
};

function createBaseGetMatchedResourcesResponse(): GetMatchedResourcesResponse {
  return { sourceMatched: undefined, destinationMatched: undefined };
}

export const GetMatchedResourcesResponse = {
  encode(message: GetMatchedResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceMatched !== undefined) {
      MatchedResources.encode(message.sourceMatched, writer.uint32(10).fork()).ldelim();
    }
    if (message.destinationMatched !== undefined) {
      MatchedResources.encode(message.destinationMatched, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMatchedResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMatchedResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sourceMatched = MatchedResources.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destinationMatched = MatchedResources.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetMatchedResourcesResponse>): GetMatchedResourcesResponse {
    return GetMatchedResourcesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetMatchedResourcesResponse>): GetMatchedResourcesResponse {
    const message = createBaseGetMatchedResourcesResponse();
    message.sourceMatched = (object.sourceMatched !== undefined && object.sourceMatched !== null)
      ? MatchedResources.fromPartial(object.sourceMatched)
      : undefined;
    message.destinationMatched = (object.destinationMatched !== undefined && object.destinationMatched !== null)
      ? MatchedResources.fromPartial(object.destinationMatched)
      : undefined;
    return message;
  },
};

function createBaseAppConnectionPolicy(): AppConnectionPolicy {
  return { id: "", appConnection: undefined };
}

export const AppConnectionPolicy = {
  encode(message: AppConnectionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.appConnection !== undefined) {
      AppConnection.encode(message.appConnection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AppConnectionPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppConnectionPolicy();
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

          message.appConnection = AppConnection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<AppConnectionPolicy>): AppConnectionPolicy {
    return AppConnectionPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AppConnectionPolicy>): AppConnectionPolicy {
    const message = createBaseAppConnectionPolicy();
    message.id = object.id ?? "";
    message.appConnection = (object.appConnection !== undefined && object.appConnection !== null)
      ? AppConnection.fromPartial(object.appConnection)
      : undefined;
    return message;
  },
};

function createBaseCreateAppConnectionPolicyRequest(): CreateAppConnectionPolicyRequest {
  return { appConnection: undefined };
}

export const CreateAppConnectionPolicyRequest = {
  encode(message: CreateAppConnectionPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appConnection !== undefined) {
      AppConnection.encode(message.appConnection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAppConnectionPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAppConnectionPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appConnection = AppConnection.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<CreateAppConnectionPolicyRequest>): CreateAppConnectionPolicyRequest {
    return CreateAppConnectionPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateAppConnectionPolicyRequest>): CreateAppConnectionPolicyRequest {
    const message = createBaseCreateAppConnectionPolicyRequest();
    message.appConnection = (object.appConnection !== undefined && object.appConnection !== null)
      ? AppConnection.fromPartial(object.appConnection)
      : undefined;
    return message;
  },
};

function createBaseCreateAppConnectionPolicyResponse(): CreateAppConnectionPolicyResponse {
  return { status: "", id: "" };
}

export const CreateAppConnectionPolicyResponse = {
  encode(message: CreateAppConnectionPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAppConnectionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAppConnectionPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<CreateAppConnectionPolicyResponse>): CreateAppConnectionPolicyResponse {
    return CreateAppConnectionPolicyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateAppConnectionPolicyResponse>): CreateAppConnectionPolicyResponse {
    const message = createBaseCreateAppConnectionPolicyResponse();
    message.status = object.status ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetAppConnectionPolicyRequest(): GetAppConnectionPolicyRequest {
  return { id: "" };
}

export const GetAppConnectionPolicyRequest = {
  encode(message: GetAppConnectionPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAppConnectionPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAppConnectionPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  create(base?: DeepPartial<GetAppConnectionPolicyRequest>): GetAppConnectionPolicyRequest {
    return GetAppConnectionPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAppConnectionPolicyRequest>): GetAppConnectionPolicyRequest {
    const message = createBaseGetAppConnectionPolicyRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetAppConnectionPolicyResponse(): GetAppConnectionPolicyResponse {
  return { appConnectionPolicy: undefined };
}

export const GetAppConnectionPolicyResponse = {
  encode(message: GetAppConnectionPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.appConnectionPolicy !== undefined) {
      AppConnectionPolicy.encode(message.appConnectionPolicy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAppConnectionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAppConnectionPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appConnectionPolicy = AppConnectionPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<GetAppConnectionPolicyResponse>): GetAppConnectionPolicyResponse {
    return GetAppConnectionPolicyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAppConnectionPolicyResponse>): GetAppConnectionPolicyResponse {
    const message = createBaseGetAppConnectionPolicyResponse();
    message.appConnectionPolicy = (object.appConnectionPolicy !== undefined && object.appConnectionPolicy !== null)
      ? AppConnectionPolicy.fromPartial(object.appConnectionPolicy)
      : undefined;
    return message;
  },
};

function createBaseDeleteAppConnectionPolicyRequest(): DeleteAppConnectionPolicyRequest {
  return { id: "" };
}

export const DeleteAppConnectionPolicyRequest = {
  encode(message: DeleteAppConnectionPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAppConnectionPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAppConnectionPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  create(base?: DeepPartial<DeleteAppConnectionPolicyRequest>): DeleteAppConnectionPolicyRequest {
    return DeleteAppConnectionPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteAppConnectionPolicyRequest>): DeleteAppConnectionPolicyRequest {
    const message = createBaseDeleteAppConnectionPolicyRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteAppConnectionPolicyResponse(): DeleteAppConnectionPolicyResponse {
  return { status: "" };
}

export const DeleteAppConnectionPolicyResponse = {
  encode(message: DeleteAppConnectionPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteAppConnectionPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAppConnectionPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  create(base?: DeepPartial<DeleteAppConnectionPolicyResponse>): DeleteAppConnectionPolicyResponse {
    return DeleteAppConnectionPolicyResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteAppConnectionPolicyResponse>): DeleteAppConnectionPolicyResponse {
    const message = createBaseDeleteAppConnectionPolicyResponse();
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseListAppConnectionPoliciesRequest(): ListAppConnectionPoliciesRequest {
  return {};
}

export const ListAppConnectionPoliciesRequest = {
  encode(_: ListAppConnectionPoliciesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAppConnectionPoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAppConnectionPoliciesRequest();
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

  create(base?: DeepPartial<ListAppConnectionPoliciesRequest>): ListAppConnectionPoliciesRequest {
    return ListAppConnectionPoliciesRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ListAppConnectionPoliciesRequest>): ListAppConnectionPoliciesRequest {
    const message = createBaseListAppConnectionPoliciesRequest();
    return message;
  },
};

function createBaseListAppConnectionPoliciesResponse(): ListAppConnectionPoliciesResponse {
  return { appConnectionPolicies: [] };
}

export const ListAppConnectionPoliciesResponse = {
  encode(message: ListAppConnectionPoliciesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.appConnectionPolicies) {
      AppConnectionPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAppConnectionPoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAppConnectionPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.appConnectionPolicies.push(AppConnectionPolicy.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ListAppConnectionPoliciesResponse>): ListAppConnectionPoliciesResponse {
    return ListAppConnectionPoliciesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListAppConnectionPoliciesResponse>): ListAppConnectionPoliciesResponse {
    const message = createBaseListAppConnectionPoliciesResponse();
    message.appConnectionPolicies = object.appConnectionPolicies?.map((e) => AppConnectionPolicy.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
