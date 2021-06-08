/**
 * Java Management Service Query API
 * API for the Java Management Service. Use this API to view and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Results of a managed instance search. Contains ManagedInstanceUsage items.
 */
export interface ManagedInstanceUsageCollection {
  /**
   * A list of managed instances.
   */
  "items": Array<model.ManagedInstanceUsage>;
}

export namespace ManagedInstanceUsageCollection {
  export function getJsonObj(obj: ManagedInstanceUsageCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.ManagedInstanceUsage.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
