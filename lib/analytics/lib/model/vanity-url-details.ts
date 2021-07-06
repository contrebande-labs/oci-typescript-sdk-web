/**
 * Analytics API
 * Analytics API.

 * OpenAPI spec version: 20190331
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
 * Vanity url configuration details.
 *
 */
export interface VanityUrlDetails {
  /**
   * The vanity url unique identifier key.
   *
   */
  "key"?: string;
  /**
   * Description of the vanity url.
   *
   */
  "description"?: string;
  /**
   * List of urls supported by this vanity URL definition (max of 3).
   *
   */
  "urls"?: Array<string>;
  /**
   * List of fully qualified hostnames supported by this vanity URL definition (max of 3).
   *
   */
  "hosts"?: Array<string>;
  /**
   * PEM certificate for HTTPS connections.
   *
   */
  "publicCertificate"?: string;
}

export namespace VanityUrlDetails {
  export function getJsonObj(obj: VanityUrlDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VanityUrlDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
