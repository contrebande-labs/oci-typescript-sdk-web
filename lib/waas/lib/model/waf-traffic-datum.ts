/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * A time series of traffic data for the  Web Application Firewall configured for a policy.
 */
export interface WafTrafficDatum {
  /**
   * The date and time the traffic was observed, rounded down to the start of the range, and expressed in RFC 3339 timestamp format.
   */
  "timeObserved"?: Date;
  /**
   * The number of seconds this data covers. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeRangeInSeconds"?: number;
  /**
   * The tenancy OCID of the data.
   */
  "tenancyId"?: string;
  /**
   * The compartment OCID of the data.
   */
  "compartmentId"?: string;
  /**
   * The policy OCID of the data.
   */
  "waasPolicyId"?: string;
  /**
   * Traffic in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "trafficInBytes"?: number;
}

export namespace WafTrafficDatum {
  export function getJsonObj(obj: WafTrafficDatum): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WafTrafficDatum): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
