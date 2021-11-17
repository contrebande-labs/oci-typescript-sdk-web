/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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
 * An individual port speed level for cross-connects.
 *
 */
export interface CrossConnectPortSpeedShape {
  /**
    * The name of the port speed shape.
* <p>
Example: `10 Gbps`
* 
    */
  "name": string;
  /**
    * The port speed in Gbps.
* <p>
Example: `10`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "portSpeedInGbps": number;
}

export namespace CrossConnectPortSpeedShape {
  export function getJsonObj(obj: CrossConnectPortSpeedShape): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CrossConnectPortSpeedShape): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
