/**
 * Autoscaling API
 * APIs for dynamically scaling Compute resources to meet application requirements. For more information about
autoscaling, see [Autoscaling](/Content/Compute/Tasks/autoscalinginstancepools.htm). For information about the
Compute service, see [Overview of the Compute Service](/Content/Compute/Concepts/computeoverview.htm).

**Note:** Autoscaling is not available in US Government Cloud tenancies. For more information, see
[Oracle Cloud Infrastructure US Government Cloud](/Content/General/Concepts/govoverview.htm).

 * OpenAPI spec version: 20181001
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
 * A power action against a resource.
 */
export interface ResourcePowerAction extends model.ResourceAction {
  "action": ResourcePowerAction.Action;

  "actionType": string;
}

export namespace ResourcePowerAction {
  export enum Action {
    Stop = "STOP",
    Start = "START",
    Softreset = "SOFTRESET",
    Reset = "RESET",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResourcePowerAction, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ResourceAction.getJsonObj(obj) as ResourcePowerAction)),
      ...{}
    };

    return jsonObj;
  }
  export const actionType = "power";
  export function getDeserializedJsonObj(
    obj: ResourcePowerAction,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ResourceAction.getDeserializedJsonObj(obj) as ResourcePowerAction)),
      ...{}
    };

    return jsonObj;
  }
}
