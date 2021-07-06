/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

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
 * Memory Configuration metric for the host
 *
 */
export interface HostMemoryConfiguration extends model.HostConfigurationMetricGroup {
  /**
   * Page size in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pageSizeInKB"?: number;
  /**
   * Amount of memory used for page tables in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "pageTablesInKB"?: number;
  /**
   * Amount of total swap space in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "swapTotalInKB"?: number;
  /**
   * Size of huge pages in kilobytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePageSizeInKB"?: number;
  /**
   * Total number of huge pages Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hugePagesTotal"?: number;

  "metricName": string;
}

export namespace HostMemoryConfiguration {
  export function getJsonObj(obj: HostMemoryConfiguration, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getJsonObj(obj) as HostMemoryConfiguration)),
      ...{}
    };

    return jsonObj;
  }
  export const metricName = "HOST_MEMORY_CONFIGURATION";
  export function getDeserializedJsonObj(
    obj: HostMemoryConfiguration,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.HostConfigurationMetricGroup.getDeserializedJsonObj(
            obj
          ) as HostMemoryConfiguration)),
      ...{}
    };

    return jsonObj;
  }
}
