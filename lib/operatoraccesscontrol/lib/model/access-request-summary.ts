/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary of access request.
 */
export interface AccessRequestSummary {
  /**
   * The OCID of the access request.
   */
  "id": string;
  /**
   * This is a system-generated identifier.
   */
  "requestId"?: string;
  /**
   * Comment associated with the access request.
   */
  "accessReasonSummary": string;
  /**
   * The OCID of the compartment that contains the access request.
   */
  "compartmentId"?: string;
  /**
   * The OCID of the target resource associated with the access request. The operator raises an access request to get approval to
   * access the target resource.
   *
   */
  "resourceId": string;
  /**
   * The name of the target resource.
   */
  "resourceName"?: string;
  /**
   * The current state of the AccessRequest.
   */
  "lifecycleState"?: model.AccessRequestLifecycleStates;
  /**
   * Time when the access request was created by the operator user in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfCreation"?: Date;
  /**
   * Time when the access request was last modified in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.Example: '2020-05-22T21:10:29.600Z'
   *
   */
  "timeOfModification"?: Date;
  /**
   * Duration in hours for which access is sought on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "duration"?: number;
  /**
   * Duration in hours for which extension access is sought on the target resource. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "extendDuration"?: number;
  /**
   * Priority assigned to the access request by the operator
   */
  "severity"?: model.AccessRequestSeverities;
  /**
   * Whether the access request was automatically approved.
   */
  "isAutoApproved"?: boolean;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace AccessRequestSummary {
  export function getJsonObj(obj: AccessRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AccessRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
