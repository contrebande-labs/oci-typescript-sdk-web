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

/**
 * A summary of information about a particular CPE device type. Compare with
 * {@link CpeDeviceShapeDetail}.
 *
 */
export interface CpeDeviceShapeSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the CPE device shape.
   * This value uniquely identifies the type of CPE device.
   *
   */
  "id"?: string;
  "cpeDeviceInfo"?: model.CpeDeviceInfo;
}

export namespace CpeDeviceShapeSummary {
  export function getJsonObj(obj: CpeDeviceShapeSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "cpeDeviceInfo": obj.cpeDeviceInfo
          ? model.CpeDeviceInfo.getJsonObj(obj.cpeDeviceInfo)
          : undefined
      }
    };

    return jsonObj;
  }
}
