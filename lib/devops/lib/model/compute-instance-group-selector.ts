/**
 * DevOps API
 * Use the DevOps APIs to create a DevOps project to group the pipelines,  add reference to target deployment environments, add artifacts to deploy,  and create deployment pipelines needed to deploy your software.
 * OpenAPI spec version: 20210630
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
 * Defines how the instances in a instance group environment is selected.
 */
export interface ComputeInstanceGroupSelector {
  "selectorType": string;
}

export namespace ComputeInstanceGroupSelector {
  export function getJsonObj(obj: ComputeInstanceGroupSelector): object {
    const jsonObj = { ...obj, ...{} };

    if ("selectorType" in obj && obj.selectorType) {
      switch (obj.selectorType) {
        case "INSTANCE_IDS":
          return model.ComputeInstanceGroupByIdsSelector.getJsonObj(
            <model.ComputeInstanceGroupByIdsSelector>(<object>jsonObj),
            true
          );
        case "INSTANCE_QUERY":
          return model.ComputeInstanceGroupByQuerySelector.getJsonObj(
            <model.ComputeInstanceGroupByQuerySelector>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.selectorType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeInstanceGroupSelector): object {
    const jsonObj = { ...obj, ...{} };

    if ("selectorType" in obj && obj.selectorType) {
      switch (obj.selectorType) {
        case "INSTANCE_IDS":
          return model.ComputeInstanceGroupByIdsSelector.getDeserializedJsonObj(
            <model.ComputeInstanceGroupByIdsSelector>(<object>jsonObj),
            true
          );
        case "INSTANCE_QUERY":
          return model.ComputeInstanceGroupByQuerySelector.getDeserializedJsonObj(
            <model.ComputeInstanceGroupByQuerySelector>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.selectorType);
      }
    }
    return jsonObj;
  }
}
