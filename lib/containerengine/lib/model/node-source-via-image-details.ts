/**
 * Container Engine for Kubernetes API
 * API for the Container Engine for Kubernetes service. Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Container Engine for Kubernetes](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * Details of the image running on the node.
 */
export interface NodeSourceViaImageDetails extends model.NodeSourceDetails {
  /**
   * The OCID of the image used to boot the node.
   */
  "imageId": string;
  /**
   * The size of the boot volume in GBs. Minimum value is 50 GB. See [here](https://docs.cloud.oracle.com/en-us/iaas/Content/Block/Concepts/bootvolumes.htm) for max custom boot volume sizing and OS-specific requirements. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "bootVolumeSizeInGBs"?: number;

  "sourceType": string;
}

export namespace NodeSourceViaImageDetails {
  export function getJsonObj(obj: NodeSourceViaImageDetails, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.NodeSourceDetails.getJsonObj(obj) as NodeSourceViaImageDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const sourceType = "IMAGE";
  export function getDeserializedJsonObj(
    obj: NodeSourceViaImageDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.NodeSourceDetails.getDeserializedJsonObj(obj) as NodeSourceViaImageDetails)),
      ...{}
    };

    return jsonObj;
  }
}
