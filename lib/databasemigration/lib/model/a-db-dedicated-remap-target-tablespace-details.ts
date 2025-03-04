/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20210929
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Migration tablespace settings valid for ADB-D target type using remap feature
 *
 */
export interface ADBDedicatedRemapTargetTablespaceDetails
  extends model.TargetTypeTablespaceDetails {
  /**
   * Name of tablespace at target to which the source database tablespace need to be remapped.
   *
   */
  "remapTarget"?: string;

  "targetType": string;
}

export namespace ADBDedicatedRemapTargetTablespaceDetails {
  export function getJsonObj(
    obj: ADBDedicatedRemapTargetTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetTypeTablespaceDetails.getJsonObj(
            obj
          ) as ADBDedicatedRemapTargetTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const targetType = "ADB_D_REMAP";
  export function getDeserializedJsonObj(
    obj: ADBDedicatedRemapTargetTablespaceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.TargetTypeTablespaceDetails.getDeserializedJsonObj(
            obj
          ) as ADBDedicatedRemapTargetTablespaceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
