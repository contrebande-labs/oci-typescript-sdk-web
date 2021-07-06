/**
 * Service Catalog API
 * Manage solutions in Oracle Cloud Infrastructure Service Catalog.
 * OpenAPI spec version: 20210527
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
 * Possible types of actions.
 **/
export enum ActionType {
  Created = "CREATED",
  Updated = "UPDATED",
  Deleted = "DELETED",
  Failed = "FAILED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace ActionType {
  export function getJsonObj(obj: ActionType): ActionType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ActionType): ActionType {
    return obj;
  }
}
