/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

 * OpenAPI spec version: 20160918
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

export interface InstanceSourceDetails {
  "sourceType": string;
}

export namespace InstanceSourceDetails {
  export function getJsonObj(obj: InstanceSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "image":
          return model.InstanceSourceViaImageDetails.getJsonObj(
            <model.InstanceSourceViaImageDetails>(<object>jsonObj),
            true
          );
        case "bootVolume":
          return model.InstanceSourceViaBootVolumeDetails.getJsonObj(
            <model.InstanceSourceViaBootVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceSourceDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("sourceType" in obj && obj.sourceType) {
      switch (obj.sourceType) {
        case "image":
          return model.InstanceSourceViaImageDetails.getDeserializedJsonObj(
            <model.InstanceSourceViaImageDetails>(<object>jsonObj),
            true
          );
        case "bootVolume":
          return model.InstanceSourceViaBootVolumeDetails.getDeserializedJsonObj(
            <model.InstanceSourceViaBootVolumeDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.sourceType);
      }
    }
    return jsonObj;
  }
}
