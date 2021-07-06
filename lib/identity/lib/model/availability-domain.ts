/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
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
 * One or more isolated, fault-tolerant Oracle data centers that host cloud resources such as instances, volumes,
 * and subnets. A region contains several Availability Domains. For more information, see
 * [Regions and Availability Domains](https://docs.cloud.oracle.com/Content/General/Concepts/regions.htm).
 *
 */
export interface AvailabilityDomain {
  /**
   * The name of the Availability Domain.
   */
  "name"?: string;
  /**
   * The OCID of the Availability Domain.
   */
  "id"?: string;
  /**
   * The OCID of the tenancy.
   */
  "compartmentId"?: string;
}

export namespace AvailabilityDomain {
  export function getJsonObj(obj: AvailabilityDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AvailabilityDomain): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
