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
 * Details of a step in a DR Plan.
 */
export interface DrPlanStep {
  /**
    * The unique id of this step. Must not be modified by the user.
* <p>
Example: `sgid1.step..examplestepsgid`
* 
    */
  "id": string;
  /**
    * The unique id of the group to which this step belongs. Must not be modified by user.
* <p>
Example: `sgid1.group..examplegroupsgid`
* 
    */
  "groupId": string;
  /**
    * The OCID of the member associated with this step.
* <p>
Example: `ocid1.database.oc1.phx.exampleocid1`
* 
    */
  "memberId"?: string;
  /**
   * The plan step type.
   *
   */
  "type": model.DrPlanStepType;
  /**
    * The display name of this DR Plan Group.
* <p>
Example: `DATABASE_SWITCHOVER`
* 
    */
  "displayName": string;
  /**
   * The error mode for this step.
   *
   */
  "errorMode": model.DrPlanStepErrorMode;
  /**
    * The timeout in seconds for executing this step.
* <p>
Example: `600`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "timeout": number;
  /**
    * A flag indicating whether this step should be enabled for execution.
* <p>
Example: `true`
* 
    */
  "isEnabled": boolean;
  "userDefinedStep"?:
    | model.InvokeFunctionStep
    | model.InvokeFunctionPrecheckStep
    | model.RunLocalScriptUserDefinedStep
    | model.LocalScriptPrecheckStep
    | model.ObjectStoreScriptPrecheckStep
    | model.RunObjectStoreScriptUserDefinedStep;
}

export namespace DrPlanStep {
  export function getJsonObj(obj: DrPlanStep): object {
    const jsonObj = {
      ...obj,
      ...{
        "userDefinedStep": obj.userDefinedStep
          ? model.DrPlanUserDefinedStep.getJsonObj(obj.userDefinedStep)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DrPlanStep): object {
    const jsonObj = {
      ...obj,
      ...{
        "userDefinedStep": obj.userDefinedStep
          ? model.DrPlanUserDefinedStep.getDeserializedJsonObj(obj.userDefinedStep)
          : undefined
      }
    };

    return jsonObj;
  }
}
