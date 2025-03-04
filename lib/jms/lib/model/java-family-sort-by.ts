/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * The field to sort the Java release family.
 **/
export enum JavaFamilySortBy {
  FamilyVersion = "familyVersion",
  EndOfSupportLifeDate = "endOfSupportLifeDate",
  SupportType = "supportType"
}

export namespace JavaFamilySortBy {
  export function getJsonObj(obj: JavaFamilySortBy): JavaFamilySortBy {
    return obj;
  }
  export function getDeserializedJsonObj(obj: JavaFamilySortBy): JavaFamilySortBy {
    return obj;
  }
}
