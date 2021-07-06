/**
 * OS Management API
 * API for the OS Management service. Use these API operations for working
with Managed instances and Managed instance groups.

 * OpenAPI spec version: 20190801
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
 * A Windows update installed on the Windows managed instance.
 */
export interface InstalledWindowsUpdateSummary {
  /**
   * Windows Update name
   */
  "displayName": string;
  /**
   * Unique identifier for the Windows update. NOTE - This is not an OCID,
   * but is a unique identifier assigned by Microsoft.
   * Example: `6981d463-cd91-4a26-b7c4-ea4ded9183ed`
   *
   */
  "name": string;
  /**
   * The purpose of this update.
   */
  "updateType": model.UpdateTypes;
}

export namespace InstalledWindowsUpdateSummary {
  export function getJsonObj(obj: InstalledWindowsUpdateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstalledWindowsUpdateSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
