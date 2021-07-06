/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * A Data Flow work request error object.
 *
 */
export interface WorkRequestError {
  /**
   * A Machine-usable code for the error that occured.
   *
   */
  "code": string;
  /**
   * The id of a work request error.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "id"?: number;
  /**
   * A human readable description of the issue encountered.
   */
  "message": string;
  /**
   * The time the error occured. An RFC3339 formatted datetime string.
   */
  "timestamp": Date;
  /**
   * The OCID of a work request.
   *
   */
  "workRequestid"?: string;
}

export namespace WorkRequestError {
  export function getJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestError): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
