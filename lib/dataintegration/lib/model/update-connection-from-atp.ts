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
 * The details to update an Autonomous Transaction Processing data asset connection.
 */
export interface UpdateConnectionFromAtp extends model.UpdateConnectionDetails {
  /**
   * The user name for the connection.
   */
  "username"?: string;
  /**
   * The password for the connection.
   */
  "password"?: string;
  "passwordSecret"?: model.SensitiveAttribute;

  "modelType": string;
}

export namespace UpdateConnectionFromAtp {
  export function getJsonObj(obj: UpdateConnectionFromAtp, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getJsonObj(obj) as UpdateConnectionFromAtp)),
      ...{
        "passwordSecret": obj.passwordSecret
          ? model.SensitiveAttribute.getJsonObj(obj.passwordSecret)
          : undefined
      }
    };

    return jsonObj;
  }
  export const modelType = "ORACLE_ATP_CONNECTION";
  export function getDeserializedJsonObj(
    obj: UpdateConnectionFromAtp,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.UpdateConnectionDetails.getDeserializedJsonObj(obj) as UpdateConnectionFromAtp)),
      ...{
        "passwordSecret": obj.passwordSecret
          ? model.SensitiveAttribute.getDeserializedJsonObj(obj.passwordSecret)
          : undefined
      }
    };

    return jsonObj;
  }
}
