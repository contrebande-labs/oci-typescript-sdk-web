/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * This is the size and time range of data to be recalled
 */
export interface EstimateRecallDataSizeResult {
  /**
   * This is the end of the time range of data to be recalled.  timeDataStarted and timeDataEnded delineate
   * the time range of the archived data to be recalled.  They may not be exact the same as the
   * parameters in the request input (EstimateRecallDataSizeDetails).
   *
   */
  "timeDataEnded": Date;
  /**
   * This is the start of the time range of data to be recalled
   */
  "timeDataStarted": Date;
  /**
   * This is the size in bytes Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes": number;
  /**
   * This indicates if the time range of data to be recalled overlaps with existing recalled data
   */
  "isOverlappingWithExistingRecalls"?: boolean;
}

export namespace EstimateRecallDataSizeResult {
  export function getJsonObj(obj: EstimateRecallDataSizeResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EstimateRecallDataSizeResult): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
