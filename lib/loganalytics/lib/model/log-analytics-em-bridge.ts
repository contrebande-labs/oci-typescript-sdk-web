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
 * Configuration details for enterprise manager bridge.
 *
 */
export interface LogAnalyticsEmBridge {
  /**
   * The enterprise manager bridge OCID.
   *
   */
  "id": string;
  /**
   * Log analytics enterprise manager bridge display name.
   *
   */
  "displayName": string;
  /**
   * A description for log analytics enterprise manager bridge.
   *
   */
  "description"?: string;
  /**
   * Compartment Identifier [OCID] (https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm).
   */
  "compartmentId": string;
  /**
   * Compartment for entities created from enterprise manager.
   *
   */
  "emEntitiesCompartmentId": string;
  /**
   * Object store bucket name where enterprise manager harvested entities will be uploaded.
   */
  "bucketName": string;
  /**
   * The date and time the resource was created, in the format defined by RFC3339.
   *
   */
  "timeCreated": Date;
  /**
   * The date and time the resource was last updated, in the format defined by RFC3339.
   *
   */
  "timeUpdated": Date;
  /**
   * The current state of the enterprise manager bridge.
   *
   */
  "lifecycleState": model.EmBridgeLifecycleStates;
  /**
   * lifecycleDetails has additional information regarding substeps such as verifying connection to object store.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The status from last processing status of enterprise manager upload.
   *
   */
  "lastImportProcessingStatus": model.EmBridgeLatestImportProcessingStatus;
  /**
   * Processing status details of enterprise manager upload. This provides additional details
   * for failed status
   *
   */
  "lastImportProcessingDetails"?: string;
  /**
   * The last time of enterprise manager upload was processed. This is in the format defined by RFC3339
   *
   */
  "timeImportLastProcessed"?: Date;
  /**
   * The timestamp of last enterprise manager upload to OCI Object Store. This is in the format defined by RFC3339
   *
   */
  "timeEmDataLastExtracted"?: Date;
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
}

export namespace LogAnalyticsEmBridge {
  export function getJsonObj(obj: LogAnalyticsEmBridge): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: LogAnalyticsEmBridge): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
