/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Possible operation types.
 **/
export enum OperationType {
  EnableDatabaseInsight = "ENABLE_DATABASE_INSIGHT",
  DisableDatabaseInsight = "DISABLE_DATABASE_INSIGHT",
  UpdateDatabaseInsight = "UPDATE_DATABASE_INSIGHT",
  CreateDatabaseInsight = "CREATE_DATABASE_INSIGHT",
  MoveDatabaseInsight = "MOVE_DATABASE_INSIGHT",
  DeleteDatabaseInsight = "DELETE_DATABASE_INSIGHT",
  CreateEnterpriseManagerBridge = "CREATE_ENTERPRISE_MANAGER_BRIDGE",
  UdpateEnterpriseManagerBridge = "UDPATE_ENTERPRISE_MANAGER_BRIDGE",
  MoveEnterpriseManagerBridge = "MOVE_ENTERPRISE_MANAGER_BRIDGE",
  DeleteEnterpriseManagerBridge = "DELETE_ENTERPRISE_MANAGER_BRIDGE",
  EnableHostInsight = "ENABLE_HOST_INSIGHT",
  DisableHostInsight = "DISABLE_HOST_INSIGHT",
  UpdateHostInsight = "UPDATE_HOST_INSIGHT",
  CreateHostInsight = "CREATE_HOST_INSIGHT",
  MoveHostInsight = "MOVE_HOST_INSIGHT",
  DeleteHostInsight = "DELETE_HOST_INSIGHT",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace OperationType {
  export function getJsonObj(obj: OperationType): OperationType {
    return obj;
  }
  export function getDeserializedJsonObj(obj: OperationType): OperationType {
    return obj;
  }
}
