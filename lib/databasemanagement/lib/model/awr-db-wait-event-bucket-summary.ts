/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * A summary of the AWR wait event bucket and waits percentage.
 */
export interface AwrDbWaitEventBucketSummary {
  /**
   * The name of the wait event frequency category. Normally, it is the upper range of the waits within the AWR wait event bucket.
   */
  "category": string;
  /**
   * The percentage of waits in a wait event bucket over the total waits of the database. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentage": number;
}

export namespace AwrDbWaitEventBucketSummary {
  export function getJsonObj(obj: AwrDbWaitEventBucketSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AwrDbWaitEventBucketSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
