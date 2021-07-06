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
 * Contains database details and resource statistics
 */
export interface ResourceStatisticsAggregation {
  "databaseDetails"?: model.DatabaseDetails;
  "currentStatistics"?: model.ResourceStatistics;
}

export namespace ResourceStatisticsAggregation {
  export function getJsonObj(obj: ResourceStatisticsAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getJsonObj(obj.databaseDetails)
          : undefined,
        "currentStatistics": obj.currentStatistics
          ? model.ResourceStatistics.getJsonObj(obj.currentStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceStatisticsAggregation): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseDetails": obj.databaseDetails
          ? model.DatabaseDetails.getDeserializedJsonObj(obj.databaseDetails)
          : undefined,
        "currentStatistics": obj.currentStatistics
          ? model.ResourceStatistics.getDeserializedJsonObj(obj.currentStatistics)
          : undefined
      }
    };

    return jsonObj;
  }
}
