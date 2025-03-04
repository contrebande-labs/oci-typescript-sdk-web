/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Details for the Lakehouse data asset type.
 */
export interface UpdateDataAssetFromLakehouse extends model.UpdateDataAssetDetails {
  /**
   * The Lakehouse Ocid.
   */
  "lakehouseOcid": string;
  /**
   * The metastoreId for the specified Lakehouse Resource.
   */
  "metastoreId"?: string;
  /**
   * The rangerEndpoint for the specified Lakehouse Resource.
   */
  "rangerEndpoint"?: string;
  "defaultConnection": model.UpdateConnectionFromLakehouse;

  "modelType": string;
}

export namespace UpdateDataAssetFromLakehouse {
  export function getJsonObj(obj: UpdateDataAssetFromLakehouse, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getJsonObj(obj) as UpdateDataAssetFromLakehouse)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromLakehouse.getJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "LAKE_HOUSE_DATA_ASSET";
  export function getDeserializedJsonObj(
    obj: UpdateDataAssetFromLakehouse,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateDataAssetDetails.getDeserializedJsonObj(
            obj
          ) as UpdateDataAssetFromLakehouse)),
      ...{
        "defaultConnection": obj.defaultConnection
          ? model.UpdateConnectionFromLakehouse.getDeserializedJsonObj(obj.defaultConnection)
          : undefined
      }
    };

    return jsonObj;
  }
}
