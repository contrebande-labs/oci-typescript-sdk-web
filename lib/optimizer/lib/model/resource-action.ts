/**
 * Cloud Advisor API
 * APIs for managing Cloud Advisor. Cloud Advisor provides recommendations that help you maximize cost savings and improve the security posture of your tenancy.
 * OpenAPI spec version: 20200606
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
 * The metadata associated with the resource action.
 *
 */
export interface ResourceAction {
  /**
   * The unique OCID associated with the resource action.
   */
  "id": string;
  /**
   * The unique OCID associated with the category.
   */
  "categoryId": string;
  /**
   * The unique OCID associated with the recommendation.
   */
  "recommendationId": string;
  /**
   * The unique OCID associated with the resource.
   */
  "resourceId": string;
  /**
   * The name assigned to the resource.
   */
  "name": string;
  /**
   * The kind of resource.
   */
  "resourceType": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The name associated with the compartment.
   */
  "compartmentName": string;
  "action": model.Action;
  /**
   * The resource action's current state.
   */
  "lifecycleState": model.LifecycleState;
  /**
   * The estimated cost savings, in dollars, for the resource action. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "estimatedCostSaving": number;
  /**
   * The current status of the resource action.
   */
  "status": model.Status;
  /**
    * The date and time that the resource action entered its current status. The format is defined by RFC3339.
* <p>
For example, \"The status of the resource action changed from `pending` to `current(ignored)` on this date and time.\"
* 
    */
  "timeStatusBegin": Date;
  /**
    * The date and time the current status will change. The format is defined by RFC3339.
* <p>
For example, \"The current `postponed` status of the resource action will end and change to `pending` on this
* date and time.\"
* 
    */
  "timeStatusEnd"?: Date;
  /**
    * Custom metadata key/value pairs for the resource action.
* <p>
 **Metadata Example**
* <p>
      \"metadata\" : {
*          \"cpuRecommendedShape\": \"VM.Standard1.1\",
*          \"computeMemoryUtilization\": \"26.05734124418388\",
*          \"currentShape\": \"VM.Standard1.2\",
*          \"instanceRecommendedShape\": \"VM.Standard1.1\",
*          \"computeCpuUtilization\": \"7.930035319720132\",
*          \"memoryRecommendedShape\": \"None\"
*       }
* 
    */
  "metadata"?: { [key: string]: string };
  /**
    * Additional metadata key/value pairs that you provide.
* They serve the same purpose and functionality as fields in the `metadata` object.
* <p>
They are distinguished from `metadata` fields in that these can be nested JSON objects (whereas `metadata` fields are string/string maps only).
* <p>
For example:
* <p>
`{\"CurrentShape\": {\"name\":\"VM.Standard2.16\"}, \"RecommendedShape\": {\"name\":\"VM.Standard2.8\"}}`
* 
    */
  "extendedMetadata"?: { [key: string]: any };
  /**
   * The date and time the resource action details were created, in the format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the resource action details were last updated, in the format defined by RFC3339.
   */
  "timeUpdated"?: Date;
}

export namespace ResourceAction {
  export function getJsonObj(obj: ResourceAction): object {
    const jsonObj = {
      ...obj,
      ...{
        "action": obj.action ? model.Action.getJsonObj(obj.action) : undefined
      }
    };

    return jsonObj;
  }
}
