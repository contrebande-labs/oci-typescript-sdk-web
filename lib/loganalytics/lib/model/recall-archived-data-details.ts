/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
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
 * This is the input used to recall archived data
 *
 */
export interface RecallArchivedDataDetails {
  /**
   * This is the compartment OCID for permission checking
   */
  "compartmentId": string;
  /**
   * This is the end of the time interval
   */
  "timeDataEnded": Date;
  /**
   * This is the start of the time interval
   */
  "timeDataStarted": Date;
  /**
   * This is the type of the log data to be recalled
   */
  "dataType"?: model.StorageDataType;
}

export namespace RecallArchivedDataDetails {
  export function getJsonObj(obj: RecallArchivedDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RecallArchivedDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
