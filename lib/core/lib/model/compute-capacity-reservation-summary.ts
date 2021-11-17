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
 * Summary information for a compute capacity reservation.
 *
 */
export interface ComputeCapacityReservationSummary {
  /**
   * The OCID of the instance reservation configuration.
   */
  "id": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId"?: string;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The current state of the capacity reservation.
   */
  "lifecycleState"?: string;
  /**
   * The availability domain of the capacity reservation.
   */
  "availabilityDomain": string;
  /**
   * The number of instances for which capacity will be held in this
   * compute capacity reservation. This number is the sum of the values of the `reservedCount` fields
   * for all of the instance capacity configurations under this reservation.
   * The purpose of this field is to calculate the percentage usage of the reservation.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "reservedInstanceCount"?: number;
  /**
   * The total number of instances currently consuming space in
   * this compute capacity reservation. This number is the sum of the values of the `usedCount` fields
   * for all of the instance capacity configurations under this reservation.
   * The purpose of this field is to calculate the percentage usage of the reservation.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "usedInstanceCount"?: number;
  /**
   * Whether this capacity reservation is the default.
   * For more information, see [Capacity Reservations](https://docs.cloud.oracle.com/iaas/Content/Compute/Tasks/reserve-capacity.htm#default).
   *
   */
  "isDefaultReservation"?: boolean;
  /**
   * The date and time the capacity reservation was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
   * Example: `2016-08-25T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
}

export namespace ComputeCapacityReservationSummary {
  export function getJsonObj(obj: ComputeCapacityReservationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ComputeCapacityReservationSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
