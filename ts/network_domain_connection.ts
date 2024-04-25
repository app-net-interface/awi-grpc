/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Error, Status } from "./common";
import { NetworkDomainObject } from "./network_domain";

export const protobufPackage = "";

export interface ConnectionRequest {
  metadata: ConnectionMetadata | undefined;
  spec: NetworkDomainConnectionConfig | undefined;
}

export interface ConnectionResponse {
  connectionId: string;
  /** Connection provisioning status : IN_PROGRESS, SUCCESS, FAILED */
  status: Status;
}

export interface NetworkDomainConnectionConfig {
  source: NetworkDomainConnectionConfig_Source | undefined;
  destination: NetworkDomainConnectionConfig_Destination | undefined;
  networkPolicy: NetworkDomainConnectionConfig_NetworkPolicySelector | undefined;
  securityPolicy: NetworkDomainConnectionConfig_SecurityPolicySelector | undefined;
  inspectionPolicy: NetworkDomainConnectionConfig_InspectionPolicySelector | undefined;
  appConnectionPolicy: NetworkDomainConnectionConfig_AppConnectionPolicySelector | undefined;
  observabilityPolicy: NetworkDomainConnectionConfig_ObservabilityPolicySelector | undefined;
  costPolicy: NetworkDomainConnectionConfig_CostPolicySelector | undefined;
  accessPolicy: NetworkDomainConnectionConfig_AccessPolicySelector | undefined;
}

export interface NetworkDomainConnectionConfig_Source {
  metadata: NetworkDomainConnectionConfig_Metadata | undefined;
  networkDomain: NetworkDomainConnectionConfig_NetworkDomain | undefined;
}

export interface NetworkDomainConnectionConfig_Destination {
  metadata: NetworkDomainConnectionConfig_Metadata | undefined;
  networkDomain: NetworkDomainConnectionConfig_NetworkDomain | undefined;
}

export interface NetworkDomainConnectionConfig_Metadata {
  name: string;
  description: string;
}

export interface NetworkDomainConnectionConfig_NetworkDomain {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
  accountID: string;
}

export interface NetworkDomainConnectionConfig_NetworkPolicySelector {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
}

export interface NetworkDomainConnectionConfig_SecurityPolicySelector {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
}

export interface NetworkDomainConnectionConfig_ObservabilityPolicySelector {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
}

export interface NetworkDomainConnectionConfig_CostPolicySelector {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
}

export interface NetworkDomainConnectionConfig_InspectionPolicySelector {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
}

export interface NetworkDomainConnectionConfig_AppConnectionPolicySelector {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
}

export interface NetworkDomainConnectionConfig_AccessPolicySelector {
  selector: NetworkDomainConnectionConfig_Selector | undefined;
}

export interface NetworkDomainConnectionConfig_Selector {
  matchName: NetworkDomainConnectionConfig_MatchName | undefined;
  matchId: NetworkDomainConnectionConfig_MatchId | undefined;
  matchLabels: { [key: string]: string };
  matchSite: NetworkDomainConnectionConfig_MatchSite | undefined;
}

export interface NetworkDomainConnectionConfig_Selector_MatchLabelsEntry {
  key: string;
  value: string;
}

export interface NetworkDomainConnectionConfig_MatchName {
  name: string;
}

export interface NetworkDomainConnectionConfig_MatchId {
  id: string;
}

export interface NetworkDomainConnectionConfig_MatchSite {
  id: string;
}

export interface ConnectionMetadata {
  name: string;
  namespace: string;
  labels: { [key: string]: string };
}

export interface ConnectionMetadata_LabelsEntry {
  key: string;
  value: string;
}

export interface DisconnectRequest {
  connectionId: string;
}

export interface DisconnectResponse {
  connectionId: string;
  connectionName: string;
  status: Status;
}

export interface GetConnectionRequest {
  connectionId: string;
}

export interface ListConnectionsRequest {
}

export interface ListConnectionsResponse {
  connections: ConnectionInformation[];
  error: Error | undefined;
}

export interface ConnectionStatusRequest {
  connectionId: string;
}

export interface ConnectionStatusResponse {
  connectionStatus: Status;
  error: Error | undefined;
}

export interface ConnectionInformation {
  id: string;
  metadata: ConnectionMetadata | undefined;
  source: NetworkDomainObject | undefined;
  destination: NetworkDomainObject | undefined;
  config: NetworkDomainConnectionConfig | undefined;
  status: Status;
  creationTimestamp: string;
  modificationTimestamp: string;
}

function createBaseConnectionRequest(): ConnectionRequest {
  return { metadata: undefined, spec: undefined };
}

export const ConnectionRequest = {
  encode(message: ConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      ConnectionMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.spec !== undefined) {
      NetworkDomainConnectionConfig.encode(message.spec, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = ConnectionMetadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.spec = NetworkDomainConnectionConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<ConnectionRequest>): ConnectionRequest {
    return ConnectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionRequest>): ConnectionRequest {
    const message = createBaseConnectionRequest();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? ConnectionMetadata.fromPartial(object.metadata)
      : undefined;
    message.spec = (object.spec !== undefined && object.spec !== null)
      ? NetworkDomainConnectionConfig.fromPartial(object.spec)
      : undefined;
    return message;
  },
};

function createBaseConnectionResponse(): ConnectionResponse {
  return { connectionId: "", status: 0 };
}

export const ConnectionResponse = {
  encode(message: ConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
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

  create(base?: DeepPartial<ConnectionResponse>): ConnectionResponse {
    return ConnectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionResponse>): ConnectionResponse {
    const message = createBaseConnectionResponse();
    message.connectionId = object.connectionId ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig(): NetworkDomainConnectionConfig {
  return {
    source: undefined,
    destination: undefined,
    networkPolicy: undefined,
    securityPolicy: undefined,
    inspectionPolicy: undefined,
    appConnectionPolicy: undefined,
    observabilityPolicy: undefined,
    costPolicy: undefined,
    accessPolicy: undefined,
  };
}

export const NetworkDomainConnectionConfig = {
  encode(message: NetworkDomainConnectionConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source !== undefined) {
      NetworkDomainConnectionConfig_Source.encode(message.source, writer.uint32(10).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      NetworkDomainConnectionConfig_Destination.encode(message.destination, writer.uint32(18).fork()).ldelim();
    }
    if (message.networkPolicy !== undefined) {
      NetworkDomainConnectionConfig_NetworkPolicySelector.encode(message.networkPolicy, writer.uint32(26).fork())
        .ldelim();
    }
    if (message.securityPolicy !== undefined) {
      NetworkDomainConnectionConfig_SecurityPolicySelector.encode(message.securityPolicy, writer.uint32(34).fork())
        .ldelim();
    }
    if (message.inspectionPolicy !== undefined) {
      NetworkDomainConnectionConfig_InspectionPolicySelector.encode(message.inspectionPolicy, writer.uint32(42).fork())
        .ldelim();
    }
    if (message.appConnectionPolicy !== undefined) {
      NetworkDomainConnectionConfig_AppConnectionPolicySelector.encode(
        message.appConnectionPolicy,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.observabilityPolicy !== undefined) {
      NetworkDomainConnectionConfig_ObservabilityPolicySelector.encode(
        message.observabilityPolicy,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.costPolicy !== undefined) {
      NetworkDomainConnectionConfig_CostPolicySelector.encode(message.costPolicy, writer.uint32(66).fork()).ldelim();
    }
    if (message.accessPolicy !== undefined) {
      NetworkDomainConnectionConfig_AccessPolicySelector.encode(message.accessPolicy, writer.uint32(74).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.source = NetworkDomainConnectionConfig_Source.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.destination = NetworkDomainConnectionConfig_Destination.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.networkPolicy = NetworkDomainConnectionConfig_NetworkPolicySelector.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.securityPolicy = NetworkDomainConnectionConfig_SecurityPolicySelector.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.inspectionPolicy = NetworkDomainConnectionConfig_InspectionPolicySelector.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.appConnectionPolicy = NetworkDomainConnectionConfig_AppConnectionPolicySelector.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.observabilityPolicy = NetworkDomainConnectionConfig_ObservabilityPolicySelector.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.costPolicy = NetworkDomainConnectionConfig_CostPolicySelector.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.accessPolicy = NetworkDomainConnectionConfig_AccessPolicySelector.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnectionConfig>): NetworkDomainConnectionConfig {
    return NetworkDomainConnectionConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnectionConfig>): NetworkDomainConnectionConfig {
    const message = createBaseNetworkDomainConnectionConfig();
    message.source = (object.source !== undefined && object.source !== null)
      ? NetworkDomainConnectionConfig_Source.fromPartial(object.source)
      : undefined;
    message.destination = (object.destination !== undefined && object.destination !== null)
      ? NetworkDomainConnectionConfig_Destination.fromPartial(object.destination)
      : undefined;
    message.networkPolicy = (object.networkPolicy !== undefined && object.networkPolicy !== null)
      ? NetworkDomainConnectionConfig_NetworkPolicySelector.fromPartial(object.networkPolicy)
      : undefined;
    message.securityPolicy = (object.securityPolicy !== undefined && object.securityPolicy !== null)
      ? NetworkDomainConnectionConfig_SecurityPolicySelector.fromPartial(object.securityPolicy)
      : undefined;
    message.inspectionPolicy = (object.inspectionPolicy !== undefined && object.inspectionPolicy !== null)
      ? NetworkDomainConnectionConfig_InspectionPolicySelector.fromPartial(object.inspectionPolicy)
      : undefined;
    message.appConnectionPolicy = (object.appConnectionPolicy !== undefined && object.appConnectionPolicy !== null)
      ? NetworkDomainConnectionConfig_AppConnectionPolicySelector.fromPartial(object.appConnectionPolicy)
      : undefined;
    message.observabilityPolicy = (object.observabilityPolicy !== undefined && object.observabilityPolicy !== null)
      ? NetworkDomainConnectionConfig_ObservabilityPolicySelector.fromPartial(object.observabilityPolicy)
      : undefined;
    message.costPolicy = (object.costPolicy !== undefined && object.costPolicy !== null)
      ? NetworkDomainConnectionConfig_CostPolicySelector.fromPartial(object.costPolicy)
      : undefined;
    message.accessPolicy = (object.accessPolicy !== undefined && object.accessPolicy !== null)
      ? NetworkDomainConnectionConfig_AccessPolicySelector.fromPartial(object.accessPolicy)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_Source(): NetworkDomainConnectionConfig_Source {
  return { metadata: undefined, networkDomain: undefined };
}

export const NetworkDomainConnectionConfig_Source = {
  encode(message: NetworkDomainConnectionConfig_Source, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      NetworkDomainConnectionConfig_Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.networkDomain !== undefined) {
      NetworkDomainConnectionConfig_NetworkDomain.encode(message.networkDomain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_Source {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_Source();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = NetworkDomainConnectionConfig_Metadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.networkDomain = NetworkDomainConnectionConfig_NetworkDomain.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnectionConfig_Source>): NetworkDomainConnectionConfig_Source {
    return NetworkDomainConnectionConfig_Source.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnectionConfig_Source>): NetworkDomainConnectionConfig_Source {
    const message = createBaseNetworkDomainConnectionConfig_Source();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? NetworkDomainConnectionConfig_Metadata.fromPartial(object.metadata)
      : undefined;
    message.networkDomain = (object.networkDomain !== undefined && object.networkDomain !== null)
      ? NetworkDomainConnectionConfig_NetworkDomain.fromPartial(object.networkDomain)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_Destination(): NetworkDomainConnectionConfig_Destination {
  return { metadata: undefined, networkDomain: undefined };
}

export const NetworkDomainConnectionConfig_Destination = {
  encode(message: NetworkDomainConnectionConfig_Destination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      NetworkDomainConnectionConfig_Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    if (message.networkDomain !== undefined) {
      NetworkDomainConnectionConfig_NetworkDomain.encode(message.networkDomain, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_Destination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_Destination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.metadata = NetworkDomainConnectionConfig_Metadata.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.networkDomain = NetworkDomainConnectionConfig_NetworkDomain.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnectionConfig_Destination>): NetworkDomainConnectionConfig_Destination {
    return NetworkDomainConnectionConfig_Destination.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_Destination>,
  ): NetworkDomainConnectionConfig_Destination {
    const message = createBaseNetworkDomainConnectionConfig_Destination();
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? NetworkDomainConnectionConfig_Metadata.fromPartial(object.metadata)
      : undefined;
    message.networkDomain = (object.networkDomain !== undefined && object.networkDomain !== null)
      ? NetworkDomainConnectionConfig_NetworkDomain.fromPartial(object.networkDomain)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_Metadata(): NetworkDomainConnectionConfig_Metadata {
  return { name: "", description: "" };
}

export const NetworkDomainConnectionConfig_Metadata = {
  encode(message: NetworkDomainConnectionConfig_Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_Metadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_Metadata();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnectionConfig_Metadata>): NetworkDomainConnectionConfig_Metadata {
    return NetworkDomainConnectionConfig_Metadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnectionConfig_Metadata>): NetworkDomainConnectionConfig_Metadata {
    const message = createBaseNetworkDomainConnectionConfig_Metadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_NetworkDomain(): NetworkDomainConnectionConfig_NetworkDomain {
  return { selector: undefined, accountID: "" };
}

export const NetworkDomainConnectionConfig_NetworkDomain = {
  encode(message: NetworkDomainConnectionConfig_NetworkDomain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    if (message.accountID !== "") {
      writer.uint32(18).string(message.accountID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_NetworkDomain {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_NetworkDomain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.accountID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnectionConfig_NetworkDomain>): NetworkDomainConnectionConfig_NetworkDomain {
    return NetworkDomainConnectionConfig_NetworkDomain.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_NetworkDomain>,
  ): NetworkDomainConnectionConfig_NetworkDomain {
    const message = createBaseNetworkDomainConnectionConfig_NetworkDomain();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    message.accountID = object.accountID ?? "";
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_NetworkPolicySelector(): NetworkDomainConnectionConfig_NetworkPolicySelector {
  return { selector: undefined };
}

export const NetworkDomainConnectionConfig_NetworkPolicySelector = {
  encode(
    message: NetworkDomainConnectionConfig_NetworkPolicySelector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_NetworkPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_NetworkPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
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
    base?: DeepPartial<NetworkDomainConnectionConfig_NetworkPolicySelector>,
  ): NetworkDomainConnectionConfig_NetworkPolicySelector {
    return NetworkDomainConnectionConfig_NetworkPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_NetworkPolicySelector>,
  ): NetworkDomainConnectionConfig_NetworkPolicySelector {
    const message = createBaseNetworkDomainConnectionConfig_NetworkPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_SecurityPolicySelector(): NetworkDomainConnectionConfig_SecurityPolicySelector {
  return { selector: undefined };
}

export const NetworkDomainConnectionConfig_SecurityPolicySelector = {
  encode(
    message: NetworkDomainConnectionConfig_SecurityPolicySelector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_SecurityPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_SecurityPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
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
    base?: DeepPartial<NetworkDomainConnectionConfig_SecurityPolicySelector>,
  ): NetworkDomainConnectionConfig_SecurityPolicySelector {
    return NetworkDomainConnectionConfig_SecurityPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_SecurityPolicySelector>,
  ): NetworkDomainConnectionConfig_SecurityPolicySelector {
    const message = createBaseNetworkDomainConnectionConfig_SecurityPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_ObservabilityPolicySelector(): NetworkDomainConnectionConfig_ObservabilityPolicySelector {
  return { selector: undefined };
}

export const NetworkDomainConnectionConfig_ObservabilityPolicySelector = {
  encode(
    message: NetworkDomainConnectionConfig_ObservabilityPolicySelector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_ObservabilityPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_ObservabilityPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
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
    base?: DeepPartial<NetworkDomainConnectionConfig_ObservabilityPolicySelector>,
  ): NetworkDomainConnectionConfig_ObservabilityPolicySelector {
    return NetworkDomainConnectionConfig_ObservabilityPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_ObservabilityPolicySelector>,
  ): NetworkDomainConnectionConfig_ObservabilityPolicySelector {
    const message = createBaseNetworkDomainConnectionConfig_ObservabilityPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_CostPolicySelector(): NetworkDomainConnectionConfig_CostPolicySelector {
  return { selector: undefined };
}

export const NetworkDomainConnectionConfig_CostPolicySelector = {
  encode(
    message: NetworkDomainConnectionConfig_CostPolicySelector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_CostPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_CostPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
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
    base?: DeepPartial<NetworkDomainConnectionConfig_CostPolicySelector>,
  ): NetworkDomainConnectionConfig_CostPolicySelector {
    return NetworkDomainConnectionConfig_CostPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_CostPolicySelector>,
  ): NetworkDomainConnectionConfig_CostPolicySelector {
    const message = createBaseNetworkDomainConnectionConfig_CostPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_InspectionPolicySelector(): NetworkDomainConnectionConfig_InspectionPolicySelector {
  return { selector: undefined };
}

export const NetworkDomainConnectionConfig_InspectionPolicySelector = {
  encode(
    message: NetworkDomainConnectionConfig_InspectionPolicySelector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_InspectionPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_InspectionPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
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
    base?: DeepPartial<NetworkDomainConnectionConfig_InspectionPolicySelector>,
  ): NetworkDomainConnectionConfig_InspectionPolicySelector {
    return NetworkDomainConnectionConfig_InspectionPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_InspectionPolicySelector>,
  ): NetworkDomainConnectionConfig_InspectionPolicySelector {
    const message = createBaseNetworkDomainConnectionConfig_InspectionPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_AppConnectionPolicySelector(): NetworkDomainConnectionConfig_AppConnectionPolicySelector {
  return { selector: undefined };
}

export const NetworkDomainConnectionConfig_AppConnectionPolicySelector = {
  encode(
    message: NetworkDomainConnectionConfig_AppConnectionPolicySelector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_AppConnectionPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_AppConnectionPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
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
    base?: DeepPartial<NetworkDomainConnectionConfig_AppConnectionPolicySelector>,
  ): NetworkDomainConnectionConfig_AppConnectionPolicySelector {
    return NetworkDomainConnectionConfig_AppConnectionPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_AppConnectionPolicySelector>,
  ): NetworkDomainConnectionConfig_AppConnectionPolicySelector {
    const message = createBaseNetworkDomainConnectionConfig_AppConnectionPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_AccessPolicySelector(): NetworkDomainConnectionConfig_AccessPolicySelector {
  return { selector: undefined };
}

export const NetworkDomainConnectionConfig_AccessPolicySelector = {
  encode(
    message: NetworkDomainConnectionConfig_AccessPolicySelector,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selector !== undefined) {
      NetworkDomainConnectionConfig_Selector.encode(message.selector, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_AccessPolicySelector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_AccessPolicySelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = NetworkDomainConnectionConfig_Selector.decode(reader, reader.uint32());
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
    base?: DeepPartial<NetworkDomainConnectionConfig_AccessPolicySelector>,
  ): NetworkDomainConnectionConfig_AccessPolicySelector {
    return NetworkDomainConnectionConfig_AccessPolicySelector.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_AccessPolicySelector>,
  ): NetworkDomainConnectionConfig_AccessPolicySelector {
    const message = createBaseNetworkDomainConnectionConfig_AccessPolicySelector();
    message.selector = (object.selector !== undefined && object.selector !== null)
      ? NetworkDomainConnectionConfig_Selector.fromPartial(object.selector)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_Selector(): NetworkDomainConnectionConfig_Selector {
  return { matchName: undefined, matchId: undefined, matchLabels: {}, matchSite: undefined };
}

export const NetworkDomainConnectionConfig_Selector = {
  encode(message: NetworkDomainConnectionConfig_Selector, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.matchName !== undefined) {
      NetworkDomainConnectionConfig_MatchName.encode(message.matchName, writer.uint32(10).fork()).ldelim();
    }
    if (message.matchId !== undefined) {
      NetworkDomainConnectionConfig_MatchId.encode(message.matchId, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.matchLabels).forEach(([key, value]) => {
      NetworkDomainConnectionConfig_Selector_MatchLabelsEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    if (message.matchSite !== undefined) {
      NetworkDomainConnectionConfig_MatchSite.encode(message.matchSite, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_Selector {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_Selector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.matchName = NetworkDomainConnectionConfig_MatchName.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.matchId = NetworkDomainConnectionConfig_MatchId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = NetworkDomainConnectionConfig_Selector_MatchLabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.matchLabels[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.matchSite = NetworkDomainConnectionConfig_MatchSite.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  create(base?: DeepPartial<NetworkDomainConnectionConfig_Selector>): NetworkDomainConnectionConfig_Selector {
    return NetworkDomainConnectionConfig_Selector.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnectionConfig_Selector>): NetworkDomainConnectionConfig_Selector {
    const message = createBaseNetworkDomainConnectionConfig_Selector();
    message.matchName = (object.matchName !== undefined && object.matchName !== null)
      ? NetworkDomainConnectionConfig_MatchName.fromPartial(object.matchName)
      : undefined;
    message.matchId = (object.matchId !== undefined && object.matchId !== null)
      ? NetworkDomainConnectionConfig_MatchId.fromPartial(object.matchId)
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
    message.matchSite = (object.matchSite !== undefined && object.matchSite !== null)
      ? NetworkDomainConnectionConfig_MatchSite.fromPartial(object.matchSite)
      : undefined;
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_Selector_MatchLabelsEntry(): NetworkDomainConnectionConfig_Selector_MatchLabelsEntry {
  return { key: "", value: "" };
}

export const NetworkDomainConnectionConfig_Selector_MatchLabelsEntry = {
  encode(
    message: NetworkDomainConnectionConfig_Selector_MatchLabelsEntry,
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

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_Selector_MatchLabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_Selector_MatchLabelsEntry();
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
    base?: DeepPartial<NetworkDomainConnectionConfig_Selector_MatchLabelsEntry>,
  ): NetworkDomainConnectionConfig_Selector_MatchLabelsEntry {
    return NetworkDomainConnectionConfig_Selector_MatchLabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<NetworkDomainConnectionConfig_Selector_MatchLabelsEntry>,
  ): NetworkDomainConnectionConfig_Selector_MatchLabelsEntry {
    const message = createBaseNetworkDomainConnectionConfig_Selector_MatchLabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_MatchName(): NetworkDomainConnectionConfig_MatchName {
  return { name: "" };
}

export const NetworkDomainConnectionConfig_MatchName = {
  encode(message: NetworkDomainConnectionConfig_MatchName, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_MatchName {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_MatchName();
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

  create(base?: DeepPartial<NetworkDomainConnectionConfig_MatchName>): NetworkDomainConnectionConfig_MatchName {
    return NetworkDomainConnectionConfig_MatchName.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnectionConfig_MatchName>): NetworkDomainConnectionConfig_MatchName {
    const message = createBaseNetworkDomainConnectionConfig_MatchName();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_MatchId(): NetworkDomainConnectionConfig_MatchId {
  return { id: "" };
}

export const NetworkDomainConnectionConfig_MatchId = {
  encode(message: NetworkDomainConnectionConfig_MatchId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_MatchId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_MatchId();
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

  create(base?: DeepPartial<NetworkDomainConnectionConfig_MatchId>): NetworkDomainConnectionConfig_MatchId {
    return NetworkDomainConnectionConfig_MatchId.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnectionConfig_MatchId>): NetworkDomainConnectionConfig_MatchId {
    const message = createBaseNetworkDomainConnectionConfig_MatchId();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseNetworkDomainConnectionConfig_MatchSite(): NetworkDomainConnectionConfig_MatchSite {
  return { id: "" };
}

export const NetworkDomainConnectionConfig_MatchSite = {
  encode(message: NetworkDomainConnectionConfig_MatchSite, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NetworkDomainConnectionConfig_MatchSite {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkDomainConnectionConfig_MatchSite();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
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

  create(base?: DeepPartial<NetworkDomainConnectionConfig_MatchSite>): NetworkDomainConnectionConfig_MatchSite {
    return NetworkDomainConnectionConfig_MatchSite.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<NetworkDomainConnectionConfig_MatchSite>): NetworkDomainConnectionConfig_MatchSite {
    const message = createBaseNetworkDomainConnectionConfig_MatchSite();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseConnectionMetadata(): ConnectionMetadata {
  return { name: "", namespace: "", labels: {} };
}

export const ConnectionMetadata = {
  encode(message: ConnectionMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.namespace !== "") {
      writer.uint32(18).string(message.namespace);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      ConnectionMetadata_LabelsEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionMetadata();
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

          message.namespace = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = ConnectionMetadata_LabelsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.labels[entry3.key] = entry3.value;
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

  create(base?: DeepPartial<ConnectionMetadata>): ConnectionMetadata {
    return ConnectionMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionMetadata>): ConnectionMetadata {
    const message = createBaseConnectionMetadata();
    message.name = object.name ?? "";
    message.namespace = object.namespace ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseConnectionMetadata_LabelsEntry(): ConnectionMetadata_LabelsEntry {
  return { key: "", value: "" };
}

export const ConnectionMetadata_LabelsEntry = {
  encode(message: ConnectionMetadata_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionMetadata_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionMetadata_LabelsEntry();
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

  create(base?: DeepPartial<ConnectionMetadata_LabelsEntry>): ConnectionMetadata_LabelsEntry {
    return ConnectionMetadata_LabelsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionMetadata_LabelsEntry>): ConnectionMetadata_LabelsEntry {
    const message = createBaseConnectionMetadata_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDisconnectRequest(): DisconnectRequest {
  return { connectionId: "" };
}

export const DisconnectRequest = {
  encode(message: DisconnectRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisconnectRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnectRequest();
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

  create(base?: DeepPartial<DisconnectRequest>): DisconnectRequest {
    return DisconnectRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DisconnectRequest>): DisconnectRequest {
    const message = createBaseDisconnectRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseDisconnectResponse(): DisconnectResponse {
  return { connectionId: "", connectionName: "", status: 0 };
}

export const DisconnectResponse = {
  encode(message: DisconnectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.connectionName !== "") {
      writer.uint32(18).string(message.connectionName);
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisconnectResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisconnectResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.connectionName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
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

  create(base?: DeepPartial<DisconnectResponse>): DisconnectResponse {
    return DisconnectResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DisconnectResponse>): DisconnectResponse {
    const message = createBaseDisconnectResponse();
    message.connectionId = object.connectionId ?? "";
    message.connectionName = object.connectionName ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseGetConnectionRequest(): GetConnectionRequest {
  return { connectionId: "" };
}

export const GetConnectionRequest = {
  encode(message: GetConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConnectionRequest();
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

  create(base?: DeepPartial<GetConnectionRequest>): GetConnectionRequest {
    return GetConnectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetConnectionRequest>): GetConnectionRequest {
    const message = createBaseGetConnectionRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseListConnectionsRequest(): ListConnectionsRequest {
  return {};
}

export const ListConnectionsRequest = {
  encode(_: ListConnectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConnectionsRequest();
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

  create(base?: DeepPartial<ListConnectionsRequest>): ListConnectionsRequest {
    return ListConnectionsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ListConnectionsRequest>): ListConnectionsRequest {
    const message = createBaseListConnectionsRequest();
    return message;
  },
};

function createBaseListConnectionsResponse(): ListConnectionsResponse {
  return { connections: [], error: undefined };
}

export const ListConnectionsResponse = {
  encode(message: ListConnectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connections) {
      ConnectionInformation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.connections.push(ConnectionInformation.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ListConnectionsResponse>): ListConnectionsResponse {
    return ListConnectionsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListConnectionsResponse>): ListConnectionsResponse {
    const message = createBaseListConnectionsResponse();
    message.connections = object.connections?.map((e) => ConnectionInformation.fromPartial(e)) || [];
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseConnectionStatusRequest(): ConnectionStatusRequest {
  return { connectionId: "" };
}

export const ConnectionStatusRequest = {
  encode(message: ConnectionStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionId !== "") {
      writer.uint32(10).string(message.connectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStatusRequest();
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

  create(base?: DeepPartial<ConnectionStatusRequest>): ConnectionStatusRequest {
    return ConnectionStatusRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionStatusRequest>): ConnectionStatusRequest {
    const message = createBaseConnectionStatusRequest();
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};

function createBaseConnectionStatusResponse(): ConnectionStatusResponse {
  return { connectionStatus: 0, error: undefined };
}

export const ConnectionStatusResponse = {
  encode(message: ConnectionStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connectionStatus !== 0) {
      writer.uint32(8).int32(message.connectionStatus);
    }
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.connectionStatus = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
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

  create(base?: DeepPartial<ConnectionStatusResponse>): ConnectionStatusResponse {
    return ConnectionStatusResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionStatusResponse>): ConnectionStatusResponse {
    const message = createBaseConnectionStatusResponse();
    message.connectionStatus = object.connectionStatus ?? 0;
    message.error = (object.error !== undefined && object.error !== null) ? Error.fromPartial(object.error) : undefined;
    return message;
  },
};

function createBaseConnectionInformation(): ConnectionInformation {
  return {
    id: "",
    metadata: undefined,
    source: undefined,
    destination: undefined,
    config: undefined,
    status: 0,
    creationTimestamp: "",
    modificationTimestamp: "",
  };
}

export const ConnectionInformation = {
  encode(message: ConnectionInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.metadata !== undefined) {
      ConnectionMetadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.source !== undefined) {
      NetworkDomainObject.encode(message.source, writer.uint32(26).fork()).ldelim();
    }
    if (message.destination !== undefined) {
      NetworkDomainObject.encode(message.destination, writer.uint32(34).fork()).ldelim();
    }
    if (message.config !== undefined) {
      NetworkDomainConnectionConfig.encode(message.config, writer.uint32(42).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.creationTimestamp !== "") {
      writer.uint32(58).string(message.creationTimestamp);
    }
    if (message.modificationTimestamp !== "") {
      writer.uint32(66).string(message.modificationTimestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionInformation();
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

          message.metadata = ConnectionMetadata.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.source = NetworkDomainObject.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.destination = NetworkDomainObject.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.config = NetworkDomainConnectionConfig.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.creationTimestamp = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
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

  create(base?: DeepPartial<ConnectionInformation>): ConnectionInformation {
    return ConnectionInformation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConnectionInformation>): ConnectionInformation {
    const message = createBaseConnectionInformation();
    message.id = object.id ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? ConnectionMetadata.fromPartial(object.metadata)
      : undefined;
    message.source = (object.source !== undefined && object.source !== null)
      ? NetworkDomainObject.fromPartial(object.source)
      : undefined;
    message.destination = (object.destination !== undefined && object.destination !== null)
      ? NetworkDomainObject.fromPartial(object.destination)
      : undefined;
    message.config = (object.config !== undefined && object.config !== null)
      ? NetworkDomainConnectionConfig.fromPartial(object.config)
      : undefined;
    message.status = object.status ?? 0;
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
