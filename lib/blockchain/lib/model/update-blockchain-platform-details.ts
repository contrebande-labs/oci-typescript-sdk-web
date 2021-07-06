/**
 * Blockchain Platform Control Plane API
 * Blockchain Platform Control Plane API
 * OpenAPI spec version: 20191010
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
 * Blockchain Platform details for updating a service.
 */
export interface UpdateBlockchainPlatformDetails {
  /**
   * Platform Description
   */
  "description"?: string;
  /**
   * Storage size in TBs Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "storageSizeInTBs"?: number;
  "replicas"?: model.ReplicaDetails;
  /**
   * Number of total OCPUs to allocate Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "totalOcpuCapacity"?: number;
  /**
   * Type of Load Balancer shape - LB_100_MBPS or LB_400_MBPS. Default is LB_100_MBPS.
   */
  "loadBalancerShape"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateBlockchainPlatformDetails {
  export function getJsonObj(obj: UpdateBlockchainPlatformDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "replicas": obj.replicas ? model.ReplicaDetails.getJsonObj(obj.replicas) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateBlockchainPlatformDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "replicas": obj.replicas
          ? model.ReplicaDetails.getDeserializedJsonObj(obj.replicas)
          : undefined
      }
    };

    return jsonObj;
  }
}
