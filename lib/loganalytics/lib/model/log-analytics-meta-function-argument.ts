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
 * LogAnalyticsMetaFunctionArgument
 */
export interface LogAnalyticsMetaFunctionArgument {
  /**
   * The override output fields.
   */
  "isOverrideOutputFields"?: boolean;
  /**
   * The argument display name.
   */
  "argumentDisplayName"?: string;
  /**
   * The argument example.
   */
  "argumentExample"?: string;
  /**
   * The argument service.
   */
  "argumentService"?: string;
  /**
   * The argument data type.
   */
  "argumentDataType"?: string;
  /**
   * The argument description.
   */
  "argumentDescription"?: string;
  /**
   * The argument name.
   */
  "argumentName"?: string;
  /**
   * The argument order. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "argumentOrder"?: number;
  /**
   * The argument type. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "argumentType"?: number;
  /**
   * The argument unique identifier. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "argumentId"?: number;
  /**
   * The lookup column.
   */
  "argumentLookupColumn"?: string;
  /**
   * The lookup column position. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "argumentLookupColumnPosition"?: number;
  /**
   * The argument value.
   */
  "argumentValue"?: string;
  /**
   * The argument unique identifier as a string.
   */
  "argumentReference"?: string;
}

export namespace LogAnalyticsMetaFunctionArgument {
  export function getJsonObj(obj: LogAnalyticsMetaFunctionArgument): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsMetaFunctionArgument): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
