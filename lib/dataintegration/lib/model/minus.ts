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
 * The information about a minus object.
 */
export interface Minus extends model.Operator {
  /**
   * minusType
   */
  "minusType"?: Minus.MinusType;
  /**
   * The information about the minus all.
   */
  "isAll"?: boolean;

  "modelType": string;
}

export namespace Minus {
  export enum MinusType {
    Name = "NAME",
    Position = "POSITION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Minus, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getJsonObj(obj) as Minus)),
      ...{}
    };

    return jsonObj;
  }
  export const modelType = "MINUS_OPERATOR";
  export function getDeserializedJsonObj(obj: Minus, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Operator.getDeserializedJsonObj(obj) as Minus)),
      ...{}
    };

    return jsonObj;
  }
}
