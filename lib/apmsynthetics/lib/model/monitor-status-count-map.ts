/**
 * Application Performance Monitoring Synthetic Monitoring API
 * Use the Application Performance Monitoring Synthetic Monitoring API to query synthetic scripts and monitors.
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
 * Details of the monitor count per state.
 * Example: `{ \"total\" : 5, \"enabled\" : 3 , \"disabled\" : 2, \"invalid\" : 0 }`
 *
 */
export interface MonitorStatusCountMap {
  /**
   * Total number of monitors using the script. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "total": number;
  /**
   * Number of enabled monitors using the script. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "enabled": number;
  /**
   * Number of disabled monitors using the script. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "disabled": number;
  /**
   * Number of invalid monitors using the script. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "invalid": number;
}

export namespace MonitorStatusCountMap {
  export function getJsonObj(obj: MonitorStatusCountMap): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: MonitorStatusCountMap): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
