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
 * The information to be updated.
 */
export interface UpdateDatabaseInsightDetails {
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "entitySource": string;
}

export namespace UpdateDatabaseInsightDetails {
  export function getJsonObj(obj: UpdateDatabaseInsightDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_DATABASE":
          return model.UpdateMacsManagedExternalDatabaseInsightDetails.getJsonObj(
            <model.UpdateMacsManagedExternalDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.UpdateEmManagedExternalDatabaseInsightDetails.getJsonObj(
            <model.UpdateEmManagedExternalDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.UpdateAutonomousDatabaseInsightDetails.getJsonObj(
            <model.UpdateAutonomousDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entitySource);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateDatabaseInsightDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("entitySource" in obj && obj.entitySource) {
      switch (obj.entitySource) {
        case "MACS_MANAGED_EXTERNAL_DATABASE":
          return model.UpdateMacsManagedExternalDatabaseInsightDetails.getDeserializedJsonObj(
            <model.UpdateMacsManagedExternalDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        case "EM_MANAGED_EXTERNAL_DATABASE":
          return model.UpdateEmManagedExternalDatabaseInsightDetails.getDeserializedJsonObj(
            <model.UpdateEmManagedExternalDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        case "AUTONOMOUS_DATABASE":
          return model.UpdateAutonomousDatabaseInsightDetails.getDeserializedJsonObj(
            <model.UpdateAutonomousDatabaseInsightDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.entitySource);
      }
    }
    return jsonObj;
  }
}
