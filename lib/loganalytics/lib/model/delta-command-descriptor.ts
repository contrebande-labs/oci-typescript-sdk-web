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
 * Command descriptor for querylanguage DELTA command.
 *
 */
export interface DeltaCommandDescriptor extends model.AbstractCommandDescriptor {
  /**
   * Value specified in DELTA command in queryString if set controlling whether delta is calculating difference between consecutive result rows or skipping N rows for each calculation.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "step"?: number;

  "name": string;
}

export namespace DeltaCommandDescriptor {
  export function getJsonObj(obj: DeltaCommandDescriptor, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getJsonObj(obj) as DeltaCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
  export const name = "DELTA";
  export function getDeserializedJsonObj(
    obj: DeltaCommandDescriptor,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AbstractCommandDescriptor.getDeserializedJsonObj(obj) as DeltaCommandDescriptor)),
      ...{}
    };

    return jsonObj;
  }
}
