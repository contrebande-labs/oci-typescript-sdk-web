/**
 * Usage API
 * Use the Usage API to view your Oracle Cloud usage and costs. The API allows you to request data that meets the specified filter criteria, and to group that data by the dimension of your choosing. The Usage API is used by the Cost Analysis tool in the Console. Also see [Using the Usage API](/Content/Billing/Concepts/costanalysisoverview.htm#cost_analysis_using_the_api) for more information.
 * OpenAPI spec version: 20200107
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
 * Details for the '/usage' query.
 */
export interface RequestSummarizedUsagesDetails {
  /**
   * Tenant ID.
   */
  "tenantId": string;
  /**
   * The usage start time.
   */
  "timeUsageStarted": Date;
  /**
   * The usage end time.
   */
  "timeUsageEnded": Date;
  /**
   * The usage granularity.
   * HOURLY - Hourly data aggregation.
   * DAILY - Daily data aggregation.
   * MONTHLY - Monthly data aggregation.
   * TOTAL - Not yet supported.
   *
   */
  "granularity": RequestSummarizedUsagesDetails.Granularity;
  /**
   * is aggregated by time. true isAggregateByTime will add up all usage/cost over query time period
   */
  "isAggregateByTime"?: boolean;
  "forecast"?: model.Forecast;
  /**
   * The query usage type. COST by default if it is missing
   * Usage - Query the usage data.
   * Cost - Query the cost/billing data.
   *
   */
  "queryType"?: RequestSummarizedUsagesDetails.QueryType;
  /**
   * Aggregate the result by.
   * example:
   *   `[\"tagNamespace\", \"tagKey\", \"tagValue\", \"service\", \"skuName\", \"skuPartNumber\", \"unit\",
   *     \"compartmentName\", \"compartmentPath\", \"compartmentId\", \"platform\", \"region\", \"logicalAd\",
   *     \"resourceId\", \"tenantId\", \"tenantName\"]`
   *
   */
  "groupBy"?: Array<string>;
  /**
   * GroupBy a specific tagKey. Provide tagNamespace and tagKey in tag object. Only support one tag in the list
   * example:
   *   `[{\"namespace\":\"oracle\", \"key\":\"createdBy\"]`
   *
   */
  "groupByTag"?: Array<model.Tag>;
  /**
   * The compartment depth level. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "compartmentDepth"?: number;
  "filter"?: model.Filter;
}

export namespace RequestSummarizedUsagesDetails {
  export enum Granularity {
    Hourly = "HOURLY",
    Daily = "DAILY",
    Monthly = "MONTHLY",
    Total = "TOTAL"
  }

  export enum QueryType {
    Usage = "USAGE",
    Cost = "COST"
  }

  export function getJsonObj(obj: RequestSummarizedUsagesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "forecast": obj.forecast ? model.Forecast.getJsonObj(obj.forecast) : undefined,

        "groupByTag": obj.groupByTag
          ? obj.groupByTag.map(item => {
              return model.Tag.getJsonObj(item);
            })
          : undefined,

        "filter": obj.filter ? model.Filter.getJsonObj(obj.filter) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RequestSummarizedUsagesDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "forecast": obj.forecast ? model.Forecast.getDeserializedJsonObj(obj.forecast) : undefined,

        "groupByTag": obj.groupByTag
          ? obj.groupByTag.map(item => {
              return model.Tag.getDeserializedJsonObj(item);
            })
          : undefined,

        "filter": obj.filter ? model.Filter.getDeserializedJsonObj(obj.filter) : undefined
      }
    };

    return jsonObj;
  }
}
