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
 * Types of error modes for steps in a DR Plan.
 * - STOP_ON_ERROR - Stop DR Plan execution if this step fails.
 * - CONTINUE_ON_ERROR - Continue DR Plan execution even if this step fails.
 *
 **/
export enum DrPlanStepErrorMode {
  StopOnError = "STOP_ON_ERROR",
  ContinueOnError = "CONTINUE_ON_ERROR",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace DrPlanStepErrorMode {
  export function getJsonObj(obj: DrPlanStepErrorMode): DrPlanStepErrorMode {
    return obj;
  }
  export function getDeserializedJsonObj(obj: DrPlanStepErrorMode): DrPlanStepErrorMode {
    return obj;
  }
}
