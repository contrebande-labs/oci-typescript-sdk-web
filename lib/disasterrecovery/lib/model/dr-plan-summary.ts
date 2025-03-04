/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (FSDR) API to manage disaster recovery for business applications.
FSDR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster recovery
capabilities for all layers of an application stack, including infrastructure, middleware, database, and application.

 * OpenAPI spec version: 20220125
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Summary information about a DR Plan Execution.
 */
export interface DrPlanSummary {
  /**
    * The OCID of this DR Plan.
* <p>
Example: `ocid1.drplan.oc1.iad.exampleocid2`
* 
    */
  "id": string;
  /**
    * The OCID of the compartment containing the DR Plan.
* <p>
Example: `ocid1.compartment.oc1..exampleocid1`
* 
    */
  "compartmentId": string;
  /**
    * The display name of this DR Plan.
* <p>
Example: `EBS Switchover PHX to IAD`
* 
    */
  "displayName": string;
  /**
   * The type of this DR Plan.
   *
   */
  "type": model.DrPlanType;
  /**
    * The OCID of the DR Protection Group with which this DR Plan is associated.
* <p>
Example: `ocid1.drprotectiongroup.oc1.iad.exampleocid2`
* 
    */
  "drProtectionGroupId": string;
  /**
    * The OCID of peer (remote) DR Protection Group associated with this plan execution's
* DR Protection Group.
* <p>
Example: `ocid1.drprotectiongroup.oc1.phx.exampleocid1`
* 
    */
  "peerDrProtectionGroupId": string;
  /**
    * The region of the peer (remote) DR Protection Group.
* <p>
Example: `us-phoenix-1`
* 
    */
  "peerRegion": string;
  /**
    * The date and time the DR Plan was created. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeCreated": Date;
  /**
    * The date and time the DR Plan was updated. An RFC3339 formatted datetime string.
* <p>
Example: `2019-03-29T09:36:42Z`
* 
    */
  "timeUpdated": Date;
  /**
   * The current state of the DR Plan.
   *
   */
  "lifecycleState": model.DrPlanLifecycleState;
  /**
   * A message describing the DR Plan's current state in more detail.
   *
   */
  "lifeCycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DrPlanSummary {
  export function getJsonObj(obj: DrPlanSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrPlanSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
