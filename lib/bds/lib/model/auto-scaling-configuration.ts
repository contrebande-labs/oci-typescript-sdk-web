/**
 * Big Data Service API
 * API for the Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service
build on Hadoop, Spark and Data Science distribution, which can be fully integrated with existing enterprise
data in Oracle Database and Oracle Applications..

 * OpenAPI spec version: 20190531
 * Contact: rahul.ra.arora@oracle.com
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
 * The information about auto scale configuration.
 */
export interface AutoScalingConfiguration {
  /**
   * The unique identifier for autoscaling configuration.
   */
  "id": string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * A node type that is managed by an autoscaling configuration. The only supported type is WORKER.
   */
  "nodeType": string;
  /**
   * The state of the autoscaling configuration
   */
  "lifecycleState": AutoScalingConfiguration.LifecycleState;
  /**
   * The time the BDS instance was created. An RFC3339 formatted datetime string
   */
  "timeCreated": Date;
  /**
   * The time the autoscale configuration was updated.
   * An RFC3339 formatted datetime string
   *
   */
  "timeUpdated": Date;
  "policy": model.AutoScalePolicy;
}

export namespace AutoScalingConfiguration {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AutoScalingConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "policy": obj.policy ? model.AutoScalePolicy.getJsonObj(obj.policy) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutoScalingConfiguration): object {
    const jsonObj = {
      ...obj,
      ...{
        "policy": obj.policy ? model.AutoScalePolicy.getDeserializedJsonObj(obj.policy) : undefined
      }
    };

    return jsonObj;
  }
}
