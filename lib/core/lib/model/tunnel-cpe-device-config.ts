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
* The set of CPE configuration answers for the tunnel, which the customer provides in
* {@link #updateTunnelCpeDeviceConfig(UpdateTunnelCpeDeviceConfigRequest) updateTunnelCpeDeviceConfig}.
* The answers correlate to the questions that are specific to the CPE device type (see the
* `parameters` attribute of {@link CpeDeviceShapeDetail}).
* <p>
See these related operations:
* <p>
  * {@link #getTunnelCpeDeviceConfig(GetTunnelCpeDeviceConfigRequest) getTunnelCpeDeviceConfig}
*   * {@link #getTunnelCpeDeviceConfigContent(GetTunnelCpeDeviceConfigContentRequest) getTunnelCpeDeviceConfigContent}
*   * {@link #getIpsecCpeDeviceConfigContent(GetIpsecCpeDeviceConfigContentRequest) getIpsecCpeDeviceConfigContent}
*   * {@link #getCpeDeviceConfigContent(GetCpeDeviceConfigContentRequest) getCpeDeviceConfigContent}
* 
*/
export interface TunnelCpeDeviceConfig {
  "tunnelCpeDeviceConfigParameter"?: Array<model.CpeDeviceConfigAnswer>;
}

export namespace TunnelCpeDeviceConfig {
  export function getJsonObj(obj: TunnelCpeDeviceConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "tunnelCpeDeviceConfigParameter": obj.tunnelCpeDeviceConfigParameter
          ? obj.tunnelCpeDeviceConfigParameter.map(item => {
              return model.CpeDeviceConfigAnswer.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: TunnelCpeDeviceConfig): object {
    const jsonObj = {
      ...obj,
      ...{
        "tunnelCpeDeviceConfigParameter": obj.tunnelCpeDeviceConfigParameter
          ? obj.tunnelCpeDeviceConfigParameter.map(item => {
              return model.CpeDeviceConfigAnswer.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
