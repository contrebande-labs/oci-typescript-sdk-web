/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * List of (Oracle) Data Safe services, the only production service is DataSafe, the other services are used in devtest.
 **/
export enum ServiceList {
  DataSafe = "DataSafe",
  DataSafeDev = "DataSafe-dev",
  DataSafeDev1 = "DataSafe-dev1",
  DataSafeDev2 = "DataSafe-dev2",
  DataSafeDev3 = "DataSafe-dev3",
  DataSafeDev4 = "DataSafe-dev4",
  DataSafeDev5 = "DataSafe-dev5",
  DataSafeDev6 = "DataSafe-dev6",
  DataSafeDev7 = "DataSafe-dev7",
  DataSafeDev8 = "DataSafe-dev8",
  DataSafeLrg1 = "DataSafe-lrg1",
  DataSafeLrg2 = "DataSafe-lrg2",
  DataSafeLrg3 = "DataSafe-lrg3",
  DataSafeLrg4 = "DataSafe-lrg4",
  DataSafePtest = "DataSafe-ptest",
  DataSafeStest = "DataSafe-stest",
  DataSafeStage = "DataSafe-stage"
}

export namespace ServiceList {
  export function getJsonObj(obj: ServiceList): ServiceList {
    return obj;
  }
  export function getDeserializedJsonObj(obj: ServiceList): ServiceList {
    return obj;
  }
}
