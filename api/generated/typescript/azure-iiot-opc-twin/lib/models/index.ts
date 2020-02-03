/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing BrowseViewApiModel.
 * Browse view model
 *
 */
export interface BrowseViewApiModel {
  /**
   * @member {string} viewId Node of the view to browse
   */
  viewId: string;
  /**
   * @member {number} [version] Browses specific version of the view.
   */
  version?: number;
  /**
   * @member {Date} [timestamp] Browses at or before this timestamp.
   */
  timestamp?: Date;
}

/**
 * @interface
 * An interface representing CredentialApiModel.
 * Credential model
 *
 */
export interface CredentialApiModel {
  /**
   * @member {CredentialType} [type] Possible values include: 'None',
   * 'UserName', 'X509Certificate', 'JwtToken'
   */
  type?: CredentialType;
  /**
   * @member {any} [value] Value to pass to server
   */
  value?: any;
}

/**
 * @interface
 * An interface representing DiagnosticsApiModel.
 * Diagnostics configuration
 *
 */
export interface DiagnosticsApiModel {
  /**
   * @member {DiagnosticsLevel} [level] Possible values include: 'None',
   * 'Status', 'Operations', 'Diagnostics', 'Verbose'
   */
  level?: DiagnosticsLevel;
  /**
   * @member {string} [auditId] Client audit log entry.
   * (default: client generated)
   */
  auditId?: string;
  /**
   * @member {Date} [timeStamp] Timestamp of request.
   * (default: client generated)
   */
  timeStamp?: Date;
}

/**
 * @interface
 * An interface representing RequestHeaderApiModel.
 * Request header model
 *
 */
export interface RequestHeaderApiModel {
  /**
   * @member {CredentialApiModel} [elevation]
   */
  elevation?: CredentialApiModel;
  /**
   * @member {string[]} [locales] Optional list of locales in preference order.
   */
  locales?: string[];
  /**
   * @member {DiagnosticsApiModel} [diagnostics]
   */
  diagnostics?: DiagnosticsApiModel;
}

/**
 * @interface
 * An interface representing BrowseRequestApiModel.
 * Browse request model
 *
 */
export interface BrowseRequestApiModel {
  /**
   * @member {string} [nodeId] Node to browse.
   * (default: RootFolder).
   */
  nodeId?: string;
  /**
   * @member {BrowseDirection} [direction] Possible values include: 'Forward',
   * 'Backward', 'Both'
   */
  direction?: BrowseDirection;
  /**
   * @member {BrowseViewApiModel} [view]
   */
  view?: BrowseViewApiModel;
  /**
   * @member {string} [referenceTypeId] Reference types to browse.
   * (default: hierarchical).
   */
  referenceTypeId?: string;
  /**
   * @member {boolean} [noSubtypes] Whether to include subtypes of the
   * reference type.
   * (default is false). Default value: false .
   */
  noSubtypes?: boolean;
  /**
   * @member {number} [maxReferencesToReturn] Max number of references to
   * return. There might
   * be less returned as this is up to the client
   * restrictions.  Set to 0 to return no references
   * or target nodes.
   * (default is decided by client e.g. 60)
   */
  maxReferencesToReturn?: number;
  /**
   * @member {boolean} [targetNodesOnly] Whether to collapse all references
   * into a set of
   * unique target nodes and not show reference
   * information.
   * (default is false). Default value: false .
   */
  targetNodesOnly?: boolean;
  /**
   * @member {boolean} [readVariableValues] Whether to read variable values on
   * target nodes.
   * (default is false). Default value: false .
   */
  readVariableValues?: boolean;
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing RolePermissionApiModel.
 * Role permission model
 *
 */
export interface RolePermissionApiModel {
  /**
   * @member {string} roleId Identifier of the role object.
   */
  roleId: string;
  /**
   * @member {RolePermissions} [permissions] Possible values include: 'Browse',
   * 'ReadRolePermissions', 'WriteAttribute', 'WriteRolePermissions',
   * 'WriteHistorizing', 'Read', 'Write', 'ReadHistory', 'InsertHistory',
   * 'ModifyHistory', 'DeleteHistory', 'ReceiveEvents', 'Call', 'AddReference',
   * 'RemoveReference', 'DeleteNode', 'AddNode'
   */
  permissions?: RolePermissions;
}

/**
 * @interface
 * An interface representing NodeApiModel.
 * Node model
 *
 */
export interface NodeApiModel {
  /**
   * @member {NodeClass} [nodeClass] Possible values include: 'Object',
   * 'Variable', 'Method', 'ObjectType', 'VariableType', 'ReferenceType',
   * 'DataType', 'View'
   */
  nodeClass?: NodeClass;
  /**
   * @member {string} [displayName] Display name
   */
  displayName?: string;
  /**
   * @member {string} nodeId Id of node.
   * (Mandatory).
   */
  nodeId: string;
  /**
   * @member {string} [description] Description if any
   */
  description?: string;
  /**
   * @member {string} [browseName] Browse name
   */
  browseName?: string;
  /**
   * @member {NodeAccessRestrictions} [accessRestrictions] Possible values
   * include: 'SigningRequired', 'EncryptionRequired', 'SessionRequired'
   */
  accessRestrictions?: NodeAccessRestrictions;
  /**
   * @member {number} [writeMask] Default write mask for the node
   * (default: 0)
   */
  writeMask?: number;
  /**
   * @member {number} [userWriteMask] User write mask for the node
   * (default: 0)
   */
  userWriteMask?: number;
  /**
   * @member {boolean} [isAbstract] Whether type is abstract, if type can
   * be abstract.  Null if not type node.
   * (default: false)
   */
  isAbstract?: boolean;
  /**
   * @member {boolean} [containsNoLoops] Whether a view contains loops. Null if
   * not a view.
   */
  containsNoLoops?: boolean;
  /**
   * @member {NodeEventNotifier} [eventNotifier] Possible values include:
   * 'SubscribeToEvents', 'HistoryRead', 'HistoryWrite'
   */
  eventNotifier?: NodeEventNotifier;
  /**
   * @member {boolean} [executable] If method node class, whether method can
   * be called.
   */
  executable?: boolean;
  /**
   * @member {boolean} [userExecutable] If method node class, whether method
   * can
   * be called by current user.
   * (default: false if not executable)
   */
  userExecutable?: boolean;
  /**
   * @member {any} [dataTypeDefinition] Data type definition in case node is a
   * data type node and definition is available,
   * otherwise null.
   */
  dataTypeDefinition?: any;
  /**
   * @member {NodeAccessLevel} [accessLevel] Possible values include:
   * 'CurrentRead', 'CurrentWrite', 'HistoryRead', 'HistoryWrite',
   * 'SemanticChange', 'StatusWrite', 'TimestampWrite', 'NonatomicRead',
   * 'NonatomicWrite', 'WriteFullArrayOnly'
   */
  accessLevel?: NodeAccessLevel;
  /**
   * @member {NodeAccessLevel} [userAccessLevel] Possible values include:
   * 'CurrentRead', 'CurrentWrite', 'HistoryRead', 'HistoryWrite',
   * 'SemanticChange', 'StatusWrite', 'TimestampWrite', 'NonatomicRead',
   * 'NonatomicWrite', 'WriteFullArrayOnly'
   */
  userAccessLevel?: NodeAccessLevel;
  /**
   * @member {string} [dataType] If variable the datatype of the variable.
   * (default: null)
   */
  dataType?: string;
  /**
   * @member {NodeValueRank} [valueRank] Possible values include:
   * 'OneOrMoreDimensions', 'OneDimension', 'TwoDimensions',
   * 'ScalarOrOneDimension', 'Any', 'Scalar'
   */
  valueRank?: NodeValueRank;
  /**
   * @member {number[]} [arrayDimensions] Array dimensions of variable or
   * variable type.
   * (default: empty array)
   */
  arrayDimensions?: number[];
  /**
   * @member {boolean} [historizing] Whether the value of a variable is
   * historizing.
   * (default: false)
   */
  historizing?: boolean;
  /**
   * @member {number} [minimumSamplingInterval] Minimum sampling interval for
   * the variable
   * value, otherwise null if not a variable node.
   * (default: null)
   */
  minimumSamplingInterval?: number;
  /**
   * @member {any} [value] Value of variable or default value of the
   * subtyped variable in case node is a variable
   * type, otherwise null.
   */
  value?: any;
  /**
   * @member {string} [inverseName] Inverse name of the reference if the node
   * is
   * a reference type, otherwise null.
   */
  inverseName?: string;
  /**
   * @member {boolean} [symmetric] Whether the reference is symmetric in case
   * the node is a reference type, otherwise
   * null.
   */
  symmetric?: boolean;
  /**
   * @member {RolePermissionApiModel[]} [rolePermissions] Role permissions
   */
  rolePermissions?: RolePermissionApiModel[];
  /**
   * @member {RolePermissionApiModel[]} [userRolePermissions] User Role
   * permissions
   */
  userRolePermissions?: RolePermissionApiModel[];
  /**
   * @member {string} [typeDefinitionId] Optional type definition of the node
   */
  typeDefinitionId?: string;
  /**
   * @member {boolean} [children] Whether node has children which are defined
   * as
   * any forward hierarchical references.
   * (default: unknown)
   */
  children?: boolean;
}

/**
 * @interface
 * An interface representing NodeReferenceApiModel.
 * reference model
 *
 */
export interface NodeReferenceApiModel {
  /**
   * @member {string} [referenceTypeId] Reference Type id
   */
  referenceTypeId?: string;
  /**
   * @member {BrowseDirection} [direction] Possible values include: 'Forward',
   * 'Backward', 'Both'
   */
  direction?: BrowseDirection;
  /**
   * @member {NodeApiModel} target
   */
  target: NodeApiModel;
}

/**
 * @interface
 * An interface representing ServiceResultApiModel.
 * Service result
 *
 */
export interface ServiceResultApiModel {
  /**
   * @member {number} [statusCode] Error code - if null operation succeeded.
   */
  statusCode?: number;
  /**
   * @member {string} [errorMessage] Error message in case of error or null.
   */
  errorMessage?: string;
  /**
   * @member {any} [diagnostics] Additional diagnostics information
   */
  diagnostics?: any;
}

/**
 * @interface
 * An interface representing BrowseResponseApiModel.
 * browse response model
 *
 */
export interface BrowseResponseApiModel {
  /**
   * @member {NodeApiModel} [node]
   */
  node?: NodeApiModel;
  /**
   * @member {NodeReferenceApiModel[]} [references] References, if included,
   * otherwise null.
   */
  references?: NodeReferenceApiModel[];
  /**
   * @member {string} [continuationToken] Continuation token if more results
   * pending.
   */
  continuationToken?: string;
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing BrowseNextRequestApiModel.
 * Request node browsing continuation
 *
 */
export interface BrowseNextRequestApiModel {
  /**
   * @member {string} continuationToken Continuation token from previews browse
   * request.
   * (mandatory)
   */
  continuationToken: string;
  /**
   * @member {boolean} [abort] Whether to abort browse and release.
   * (default: false). Default value: false .
   */
  abort?: boolean;
  /**
   * @member {boolean} [targetNodesOnly] Whether to collapse all references
   * into a set of
   * unique target nodes and not show reference
   * information.
   * (default is false). Default value: false .
   */
  targetNodesOnly?: boolean;
  /**
   * @member {boolean} [readVariableValues] Whether to read variable values on
   * target nodes.
   * (default is false). Default value: false .
   */
  readVariableValues?: boolean;
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing BrowseNextResponseApiModel.
 * Result of node browse continuation
 *
 */
export interface BrowseNextResponseApiModel {
  /**
   * @member {NodeReferenceApiModel[]} [references] References, if included,
   * otherwise null.
   */
  references?: NodeReferenceApiModel[];
  /**
   * @member {string} [continuationToken] Continuation token if more results
   * pending.
   */
  continuationToken?: string;
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing BrowsePathRequestApiModel.
 * Browse nodes by path
 *
 */
export interface BrowsePathRequestApiModel {
  /**
   * @member {string} [nodeId] Node to browse from.
   * (default: RootFolder).
   */
  nodeId?: string;
  /**
   * @member {string[][]} browsePaths The paths to browse from node.
   * (mandatory)
   */
  browsePaths: string[][];
  /**
   * @member {boolean} [readVariableValues] Whether to read variable values on
   * target nodes.
   * (default is false). Default value: false .
   */
  readVariableValues?: boolean;
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing NodePathTargetApiModel.
 * Node path target
 *
 */
export interface NodePathTargetApiModel {
  /**
   * @member {string[]} [browsePath] The target browse path
   */
  browsePath?: string[];
  /**
   * @member {NodeApiModel} [target]
   */
  target?: NodeApiModel;
  /**
   * @member {number} [remainingPathIndex] Remaining index in path
   */
  remainingPathIndex?: number;
}

/**
 * @interface
 * An interface representing BrowsePathResponseApiModel.
 * Result of node browse continuation
 *
 */
export interface BrowsePathResponseApiModel {
  /**
   * @member {NodePathTargetApiModel[]} [targets] Targets
   */
  targets?: NodePathTargetApiModel[];
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing MethodMetadataRequestApiModel.
 * Method metadata request model
 *
 */
export interface MethodMetadataRequestApiModel {
  /**
   * @member {string} [methodId] Method id of method to call.
   * (Required)
   */
  methodId?: string;
  /**
   * @member {string[]} [methodBrowsePath] An optional component path from the
   * node identified by
   * MethodId to the actual method node.
   */
  methodBrowsePath?: string[];
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing MethodMetadataArgumentApiModel.
 * Method argument metadata model
 *
 */
export interface MethodMetadataArgumentApiModel {
  /**
   * @member {string} [name] Argument name
   */
  name?: string;
  /**
   * @member {string} [description] Optional description
   */
  description?: string;
  /**
   * @member {NodeApiModel} [type]
   */
  type?: NodeApiModel;
  /**
   * @member {any} [defaultValue] Default value
   */
  defaultValue?: any;
  /**
   * @member {NodeValueRank} [valueRank] Possible values include:
   * 'OneOrMoreDimensions', 'OneDimension', 'TwoDimensions',
   * 'ScalarOrOneDimension', 'Any', 'Scalar'
   */
  valueRank?: NodeValueRank;
  /**
   * @member {number[]} [arrayDimensions] Optional, array dimension
   */
  arrayDimensions?: number[];
}

/**
 * @interface
 * An interface representing MethodMetadataResponseApiModel.
 * Method metadata query model
 *
 */
export interface MethodMetadataResponseApiModel {
  /**
   * @member {string} [objectId] Id of object that the method is a component of
   */
  objectId?: string;
  /**
   * @member {MethodMetadataArgumentApiModel[]} [inputArguments] Input argument
   * meta data
   */
  inputArguments?: MethodMetadataArgumentApiModel[];
  /**
   * @member {MethodMetadataArgumentApiModel[]} [outputArguments] output
   * argument meta data
   */
  outputArguments?: MethodMetadataArgumentApiModel[];
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing MethodCallArgumentApiModel.
 * method arg model
 *
 */
export interface MethodCallArgumentApiModel {
  /**
   * @member {any} [value] Initial value or value to use
   */
  value?: any;
  /**
   * @member {string} [dataType] Data type Id of the value (from meta data)
   */
  dataType?: string;
}

/**
 * @interface
 * An interface representing MethodCallRequestApiModel.
 * Call request model
 *
 */
export interface MethodCallRequestApiModel {
  /**
   * @member {string} [methodId] Method id of method to call.
   */
  methodId?: string;
  /**
   * @member {string} [objectId] Context of the method, i.e. an object or
   * object type
   * node.
   */
  objectId?: string;
  /**
   * @member {MethodCallArgumentApiModel[]} [argumentsProperty] Arguments for
   * the method - null means no args
   */
  argumentsProperty?: MethodCallArgumentApiModel[];
  /**
   * @member {string[]} [methodBrowsePath] An optional component path from the
   * node identified by
   * MethodId or from a resolved objectId to the actual
   * method node.
   */
  methodBrowsePath?: string[];
  /**
   * @member {string[]} [objectBrowsePath] An optional component path from the
   * node identified by
   * ObjectId to the actual object or objectType node.
   * If ObjectId is null, the root node (i=84) is used.
   */
  objectBrowsePath?: string[];
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing MethodCallResponseApiModel.
 * Method call response model
 *
 */
export interface MethodCallResponseApiModel {
  /**
   * @member {MethodCallArgumentApiModel[]} [results] Output results
   */
  results?: MethodCallArgumentApiModel[];
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing ValueReadRequestApiModel.
 * Node value read request webservice api model
 *
 */
export interface ValueReadRequestApiModel {
  /**
   * @member {string} [nodeId] Node to read from (mandatory)
   */
  nodeId?: string;
  /**
   * @member {string[]} [browsePath] An optional path from NodeId instance to
   * the actual node.
   */
  browsePath?: string[];
  /**
   * @member {string} [indexRange] Index range to read, e.g. 1:2,0:1 for 2
   * slices
   * out of a matrix or 0:1 for the first item in
   * an array, string or bytestring.
   * See 7.22 of part 4: NumericRange.
   */
  indexRange?: string;
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing ValueReadResponseApiModel.
 * Value read response model
 *
 */
export interface ValueReadResponseApiModel {
  /**
   * @member {any} [value] Value read
   */
  value?: any;
  /**
   * @member {string} [dataType] Built in data type of the value read.
   */
  dataType?: string;
  /**
   * @member {number} [sourcePicoseconds] Pico seconds part of when value was
   * read at source.
   */
  sourcePicoseconds?: number;
  /**
   * @member {Date} [sourceTimestamp] Timestamp of when value was read at
   * source.
   */
  sourceTimestamp?: Date;
  /**
   * @member {number} [serverPicoseconds] Pico seconds part of when value was
   * read at server.
   */
  serverPicoseconds?: number;
  /**
   * @member {Date} [serverTimestamp] Timestamp of when value was read at
   * server.
   */
  serverTimestamp?: Date;
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing AttributeReadRequestApiModel.
 * Attribute to read
 *
 */
export interface AttributeReadRequestApiModel {
  /**
   * @member {string} nodeId Node to read from or write to (mandatory)
   */
  nodeId: string;
  /**
   * @member {NodeAttribute} attribute Possible values include: 'NodeClass',
   * 'BrowseName', 'DisplayName', 'Description', 'WriteMask', 'UserWriteMask',
   * 'IsAbstract', 'Symmetric', 'InverseName', 'ContainsNoLoops',
   * 'EventNotifier', 'Value', 'DataType', 'ValueRank', 'ArrayDimensions',
   * 'AccessLevel', 'UserAccessLevel', 'MinimumSamplingInterval',
   * 'Historizing', 'Executable', 'UserExecutable', 'DataTypeDefinition',
   * 'RolePermissions', 'UserRolePermissions', 'AccessRestrictions'
   */
  attribute: NodeAttribute;
}

/**
 * @interface
 * An interface representing ReadRequestApiModel.
 * Request node attribute read
 *
 */
export interface ReadRequestApiModel {
  /**
   * @member {AttributeReadRequestApiModel[]} attributes Attributes to read
   */
  attributes: AttributeReadRequestApiModel[];
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing AttributeReadResponseApiModel.
 * Attribute value read
 *
 */
export interface AttributeReadResponseApiModel {
  /**
   * @member {any} [value] Attribute value
   */
  value?: any;
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing ReadResponseApiModel.
 * Result of attribute reads
 *
 */
export interface ReadResponseApiModel {
  /**
   * @member {AttributeReadResponseApiModel[]} [results] All results of
   * attribute reads
   */
  results?: AttributeReadResponseApiModel[];
}

/**
 * @interface
 * An interface representing ValueWriteRequestApiModel.
 * Value write request model
 *
 */
export interface ValueWriteRequestApiModel {
  /**
   * @member {string} [nodeId] Node id to to write value to.
   */
  nodeId?: string;
  /**
   * @member {string[]} [browsePath] An optional path from NodeId instance to
   * the actual node.
   */
  browsePath?: string[];
  /**
   * @member {any} value Value to write. The system tries to convert
   * the value according to the data type value,
   * e.g. convert comma seperated value strings
   * into arrays.  (Mandatory)
   */
  value: any;
  /**
   * @member {string} [dataType] A built in datatype for the value. This can
   * be a data type from browse, or a built in
   * type.
   * (default: best effort)
   */
  dataType?: string;
  /**
   * @member {string} [indexRange] Index range to write
   */
  indexRange?: string;
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing ValueWriteResponseApiModel.
 * Value write response model
 *
 */
export interface ValueWriteResponseApiModel {
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing AttributeWriteRequestApiModel.
 * Attribute and value to write to it
 *
 */
export interface AttributeWriteRequestApiModel {
  /**
   * @member {string} nodeId Node to write to (mandatory)
   */
  nodeId: string;
  /**
   * @member {NodeAttribute} attribute Possible values include: 'NodeClass',
   * 'BrowseName', 'DisplayName', 'Description', 'WriteMask', 'UserWriteMask',
   * 'IsAbstract', 'Symmetric', 'InverseName', 'ContainsNoLoops',
   * 'EventNotifier', 'Value', 'DataType', 'ValueRank', 'ArrayDimensions',
   * 'AccessLevel', 'UserAccessLevel', 'MinimumSamplingInterval',
   * 'Historizing', 'Executable', 'UserExecutable', 'DataTypeDefinition',
   * 'RolePermissions', 'UserRolePermissions', 'AccessRestrictions'
   */
  attribute: NodeAttribute;
  /**
   * @member {any} value Value to write (mandatory)
   */
  value: any;
}

/**
 * @interface
 * An interface representing WriteRequestApiModel.
 * Request node attribute write
 *
 */
export interface WriteRequestApiModel {
  /**
   * @member {AttributeWriteRequestApiModel[]} attributes Attributes to update
   */
  attributes: AttributeWriteRequestApiModel[];
  /**
   * @member {RequestHeaderApiModel} [header]
   */
  header?: RequestHeaderApiModel;
}

/**
 * @interface
 * An interface representing AttributeWriteResponseApiModel.
 * Attribute write result
 *
 */
export interface AttributeWriteResponseApiModel {
  /**
   * @member {ServiceResultApiModel} [errorInfo]
   */
  errorInfo?: ServiceResultApiModel;
}

/**
 * @interface
 * An interface representing WriteResponseApiModel.
 * Result of attribute write
 *
 */
export interface WriteResponseApiModel {
  /**
   * @member {AttributeWriteResponseApiModel[]} [results] All results of
   * attribute writes
   */
  results?: AttributeWriteResponseApiModel[];
}

/**
 * @interface
 * An interface representing AzureOpcTwinClientOptions.
 * @extends ServiceClientOptions
 */
export interface AzureOpcTwinClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing AzureOpcTwinClientGetSetOfUniqueNodesOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AzureOpcTwinClientGetSetOfUniqueNodesOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [nodeId] The node to browse or omit to browse the root
   * node (i=84)
   */
  nodeId?: string;
}

/**
 * Defines values for BrowseDirection.
 * Possible values include: 'Forward', 'Backward', 'Both'
 * @readonly
 * @enum {string}
 */
export type BrowseDirection = 'Forward' | 'Backward' | 'Both';

/**
 * Defines values for CredentialType.
 * Possible values include: 'None', 'UserName', 'X509Certificate', 'JwtToken'
 * @readonly
 * @enum {string}
 */
export type CredentialType = 'None' | 'UserName' | 'X509Certificate' | 'JwtToken';

/**
 * Defines values for DiagnosticsLevel.
 * Possible values include: 'None', 'Status', 'Operations', 'Diagnostics', 'Verbose'
 * @readonly
 * @enum {string}
 */
export type DiagnosticsLevel = 'None' | 'Status' | 'Operations' | 'Diagnostics' | 'Verbose';

/**
 * Defines values for NodeClass.
 * Possible values include: 'Object', 'Variable', 'Method', 'ObjectType', 'VariableType',
 * 'ReferenceType', 'DataType', 'View'
 * @readonly
 * @enum {string}
 */
export type NodeClass = 'Object' | 'Variable' | 'Method' | 'ObjectType' | 'VariableType' | 'ReferenceType' | 'DataType' | 'View';

/**
 * Defines values for NodeAccessRestrictions.
 * Possible values include: 'SigningRequired', 'EncryptionRequired', 'SessionRequired'
 * @readonly
 * @enum {string}
 */
export type NodeAccessRestrictions = 'SigningRequired' | 'EncryptionRequired' | 'SessionRequired';

/**
 * Defines values for NodeEventNotifier.
 * Possible values include: 'SubscribeToEvents', 'HistoryRead', 'HistoryWrite'
 * @readonly
 * @enum {string}
 */
export type NodeEventNotifier = 'SubscribeToEvents' | 'HistoryRead' | 'HistoryWrite';

/**
 * Defines values for NodeAccessLevel.
 * Possible values include: 'CurrentRead', 'CurrentWrite', 'HistoryRead', 'HistoryWrite',
 * 'SemanticChange', 'StatusWrite', 'TimestampWrite', 'NonatomicRead', 'NonatomicWrite',
 * 'WriteFullArrayOnly'
 * @readonly
 * @enum {string}
 */
export type NodeAccessLevel = 'CurrentRead' | 'CurrentWrite' | 'HistoryRead' | 'HistoryWrite' | 'SemanticChange' | 'StatusWrite' | 'TimestampWrite' | 'NonatomicRead' | 'NonatomicWrite' | 'WriteFullArrayOnly';

/**
 * Defines values for NodeValueRank.
 * Possible values include: 'OneOrMoreDimensions', 'OneDimension', 'TwoDimensions',
 * 'ScalarOrOneDimension', 'Any', 'Scalar'
 * @readonly
 * @enum {string}
 */
export type NodeValueRank = 'OneOrMoreDimensions' | 'OneDimension' | 'TwoDimensions' | 'ScalarOrOneDimension' | 'Any' | 'Scalar';

/**
 * Defines values for RolePermissions.
 * Possible values include: 'Browse', 'ReadRolePermissions', 'WriteAttribute',
 * 'WriteRolePermissions', 'WriteHistorizing', 'Read', 'Write', 'ReadHistory', 'InsertHistory',
 * 'ModifyHistory', 'DeleteHistory', 'ReceiveEvents', 'Call', 'AddReference', 'RemoveReference',
 * 'DeleteNode', 'AddNode'
 * @readonly
 * @enum {string}
 */
export type RolePermissions = 'Browse' | 'ReadRolePermissions' | 'WriteAttribute' | 'WriteRolePermissions' | 'WriteHistorizing' | 'Read' | 'Write' | 'ReadHistory' | 'InsertHistory' | 'ModifyHistory' | 'DeleteHistory' | 'ReceiveEvents' | 'Call' | 'AddReference' | 'RemoveReference' | 'DeleteNode' | 'AddNode';

/**
 * Defines values for NodeAttribute.
 * Possible values include: 'NodeClass', 'BrowseName', 'DisplayName', 'Description', 'WriteMask',
 * 'UserWriteMask', 'IsAbstract', 'Symmetric', 'InverseName', 'ContainsNoLoops', 'EventNotifier',
 * 'Value', 'DataType', 'ValueRank', 'ArrayDimensions', 'AccessLevel', 'UserAccessLevel',
 * 'MinimumSamplingInterval', 'Historizing', 'Executable', 'UserExecutable', 'DataTypeDefinition',
 * 'RolePermissions', 'UserRolePermissions', 'AccessRestrictions'
 * @readonly
 * @enum {string}
 */
export type NodeAttribute = 'NodeClass' | 'BrowseName' | 'DisplayName' | 'Description' | 'WriteMask' | 'UserWriteMask' | 'IsAbstract' | 'Symmetric' | 'InverseName' | 'ContainsNoLoops' | 'EventNotifier' | 'Value' | 'DataType' | 'ValueRank' | 'ArrayDimensions' | 'AccessLevel' | 'UserAccessLevel' | 'MinimumSamplingInterval' | 'Historizing' | 'Executable' | 'UserExecutable' | 'DataTypeDefinition' | 'RolePermissions' | 'UserRolePermissions' | 'AccessRestrictions';

/**
 * Contains response data for the browse operation.
 */
export type BrowseResponse = BrowseResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BrowseResponseApiModel;
    };
};

/**
 * Contains response data for the getSetOfUniqueNodes operation.
 */
export type GetSetOfUniqueNodesResponse = BrowseResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BrowseResponseApiModel;
    };
};

/**
 * Contains response data for the browseNext operation.
 */
export type BrowseNextResponse = BrowseNextResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BrowseNextResponseApiModel;
    };
};

/**
 * Contains response data for the getNextSetOfUniqueNodes operation.
 */
export type GetNextSetOfUniqueNodesResponse = BrowseNextResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BrowseNextResponseApiModel;
    };
};

/**
 * Contains response data for the browseUsingPath operation.
 */
export type BrowseUsingPathResponse = BrowsePathResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BrowsePathResponseApiModel;
    };
};

/**
 * Contains response data for the getCallMetadata operation.
 */
export type GetCallMetadataResponse = MethodMetadataResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MethodMetadataResponseApiModel;
    };
};

/**
 * Contains response data for the callMethod operation.
 */
export type CallMethodResponse = MethodCallResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MethodCallResponseApiModel;
    };
};

/**
 * Contains response data for the readValue operation.
 */
export type ReadValueResponse = ValueReadResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ValueReadResponseApiModel;
    };
};

/**
 * Contains response data for the getValue operation.
 */
export type GetValueResponse = ValueReadResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ValueReadResponseApiModel;
    };
};

/**
 * Contains response data for the readAttributes operation.
 */
export type ReadAttributesResponse = ReadResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReadResponseApiModel;
    };
};

/**
 * Contains response data for the writeValue operation.
 */
export type WriteValueResponse = ValueWriteResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ValueWriteResponseApiModel;
    };
};

/**
 * Contains response data for the writeAttributes operation.
 */
export type WriteAttributesResponse = WriteResponseApiModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WriteResponseApiModel;
    };
};