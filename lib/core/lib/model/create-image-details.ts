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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Either instanceId or imageSourceDetails must be provided in addition to other required parameters.
 *
 */
export interface CreateImageDetails {
  /**
   * The OCID of the compartment you want the image to be created in.
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
    * A user-friendly name for the image. It does not have to be unique, and it's changeable.
* Avoid entering confidential information.
* <p>
You cannot use a platform image name as a custom image name.
* <p>
Example: `My Oracle Linux image`
* 
    */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  "imageSourceDetails"?:
    | model.ImageSourceViaObjectStorageTupleDetails
    | model.ImageSourceViaObjectStorageUriDetails;
  /**
   * The OCID of the instance you want to use as the basis for the image.
   *
   */
  "instanceId"?: string;
  /**
   * Specifies the configuration mode for launching virtual machine (VM) instances. The configuration modes are:
   * * `NATIVE` - VM instances launch with paravirtualized boot and VFIO devices. The default value for platform images.
   * * `EMULATED` - VM instances launch with emulated devices, such as the E1000 network driver and emulated SCSI disk controller.
   * * `PARAVIRTUALIZED` - VM instances launch with paravirtualized devices using VirtIO drivers.
   * * `CUSTOM` - VM instances launch with custom configuration settings specified in the `LaunchOptions` parameter.
   *
   */
  "launchMode"?: CreateImageDetails.LaunchMode;
}

export namespace CreateImageDetails {
  export enum LaunchMode {
    Native = "NATIVE",
    Emulated = "EMULATED",
    Paravirtualized = "PARAVIRTUALIZED",
    Custom = "CUSTOM"
  }

  export function getJsonObj(obj: CreateImageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "imageSourceDetails": obj.imageSourceDetails
          ? model.ImageSourceDetails.getJsonObj(obj.imageSourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateImageDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "imageSourceDetails": obj.imageSourceDetails
          ? model.ImageSourceDetails.getDeserializedJsonObj(obj.imageSourceDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
