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
 * A template that contains the settings to use when defining the instance capacity configuration.
 *
 */
export interface InstanceReservationConfigDetails {
  /**
   * The shape requested when launching instances using reserved capacity.
   * The shape determines the number of CPUs, amount of memory,
   * and other resources allocated to the instance.
   * You can list all available shapes by calling {@link ListComputeCapacityReservationInstanceShapes}.
   *
   */
  "instanceShape": string;
  "instanceShapeConfig"?: model.InstanceReservationShapeConfigDetails;
  /**
    * The fault domain to use for instances created using this capacity configuration.
* For more information, see [Fault Domains](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/regions.htm#fault).
* If you do not specify the fault domain, the capacity is available for an instance
* that does not specify a fault domain. To change the fault domain for a reservation,
* delete the reservation and create a new one in the preferred fault domain.
* <p>
To retrieve a list of fault domains, use the `ListFaultDomains` operation in
* the [Identity and Access Management Service API](https://docs.cloud.oracle.com/iaas/api/#/en/identity/20160918/).
* <p>
Example: `FAULT-DOMAIN-1`
* 
    */
  "faultDomain"?: string;
  /**
   * The total number of instances that can be launched from the capacity configuration. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedCount": number;
}

export namespace InstanceReservationConfigDetails {
  export function getJsonObj(obj: InstanceReservationConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceShapeConfig": obj.instanceShapeConfig
          ? model.InstanceReservationShapeConfigDetails.getJsonObj(obj.instanceShapeConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceReservationConfigDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "instanceShapeConfig": obj.instanceShapeConfig
          ? model.InstanceReservationShapeConfigDetails.getDeserializedJsonObj(
              obj.instanceShapeConfig
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
