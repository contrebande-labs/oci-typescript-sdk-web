/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The details about what actions to perform and using what patch to the specified target.
 * This is part of an update request that is applied to a version field on the target such
 * as DB system, Database Home, etc.
 *
 */
export interface PatchDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the patch.
   */
  "patchId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database software image.
   */
  "databaseSoftwareImageId"?: string;
  /**
   * The action to perform on the patch.
   */
  "action"?: PatchDetails.Action;
}

export namespace PatchDetails {
  export enum Action {
    Apply = "APPLY",
    Precheck = "PRECHECK"
  }

  export function getJsonObj(obj: PatchDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PatchDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
