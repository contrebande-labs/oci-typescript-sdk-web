/**
 * Data Integration API
 * Use the Data Integration Service APIs to perform common extract, load, and transform (ETL) tasks.
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The information about key range.
 */
export interface KeyRangePartitionConfig extends model.PartitionConfig {
  /**
   * The partition number for the key range. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "partitionNumber"?: number;
  "keyRange"?: model.KeyRange;

  "modelType": string;
}

export namespace KeyRangePartitionConfig {
  export function getJsonObj(obj: KeyRangePartitionConfig, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PartitionConfig.getJsonObj(obj) as KeyRangePartitionConfig)),
      ...{
        "keyRange": obj.keyRange ? model.KeyRange.getJsonObj(obj.keyRange) : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "KEYRANGEPARTITIONCONFIG";
  export function getDeserializedJsonObj(
    obj: KeyRangePartitionConfig,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.PartitionConfig.getDeserializedJsonObj(obj) as KeyRangePartitionConfig)),
      ...{
        "keyRange": obj.keyRange ? model.KeyRange.getDeserializedJsonObj(obj.keyRange) : undefined
      }
    };

    return jsonObj;
  }
}
