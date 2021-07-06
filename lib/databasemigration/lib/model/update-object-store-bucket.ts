/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * OCI Object Storage bucket details.
 *
 */
export interface UpdateObjectStoreBucket {
  /**
   * Namespace name of the object store bucket.
   *
   */
  "namespaceName"?: string;
  /**
   * Bucket name.
   *
   */
  "bucketName"?: string;
}

export namespace UpdateObjectStoreBucket {
  export function getJsonObj(obj: UpdateObjectStoreBucket): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateObjectStoreBucket): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
