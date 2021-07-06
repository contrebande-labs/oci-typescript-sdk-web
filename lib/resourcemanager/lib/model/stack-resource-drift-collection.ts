/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
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
 * Drift status details for resources in the stack.
 *
 */
export interface StackResourceDriftCollection {
  /**
   * Collection of drift status details for all resources defined in the stack.
   */
  "items": Array<model.StackResourceDriftSummary>;
}

export namespace StackResourceDriftCollection {
  export function getJsonObj(obj: StackResourceDriftCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.StackResourceDriftSummary.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StackResourceDriftCollection): object {
    const jsonObj = {
      ...obj,
      ...{
        "items": obj.items
          ? obj.items.map(item => {
              return model.StackResourceDriftSummary.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
