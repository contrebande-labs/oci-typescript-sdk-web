/**
 * NetworkLoadBalancer API
 * A description of the network load balancer API
 * OpenAPI spec version: 20200501
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
 * Information about a single backend server health check result reported by a network load balancer.
 *
 */
export interface HealthCheckResult {
  /**
    * The date and time the data was retrieved, in the format defined by RFC3339.
* <p>
Example: `2020-05-01T18:28:11+00:00`
* 
    */
  "timestamp": Date;
  /**
   * The result of the most recent health check.
   *
   */
  "healthCheckStatus": HealthCheckResult.HealthCheckStatus;
}

export namespace HealthCheckResult {
  export enum HealthCheckStatus {
    Ok = "OK",
    InvalidStatusCode = "INVALID_STATUS_CODE",
    TimedOut = "TIMED_OUT",
    HealthPayloadMismatch = "HEALTH_PAYLOAD_MISMATCH",
    ConnectFailed = "CONNECT_FAILED",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: HealthCheckResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: HealthCheckResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
