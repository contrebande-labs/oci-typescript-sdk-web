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
 * Contains the properties of the VNIC for an instance configuration. See {@link CreateVnicDetails}
 * and [Instance Configurations](https://docs.cloud.oracle.com/iaas/Content/Compute/Concepts/instancemanagement.htm#config) for more information.
 *
 */
export interface InstanceConfigurationCreateVnicDetails {
  /**
   * Whether the VNIC should be assigned a public IP address. See the `assignPublicIp` attribute of {@link CreateVnicDetails}
   * for more information.
   *
   */
  "assignPublicIp"?: boolean;
  /**
   * Whether the VNIC should be assigned a private DNS record. See the `assignPrivateDnsRecord` attribute of {@link CreateVnicDetails}
   * for more information.
   *
   */
  "assignPrivateDnsRecord"?: boolean;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
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
  /**
   * The hostname for the VNIC's primary private IP.
   * See the `hostnameLabel` attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "hostnameLabel"?: string;
  /**
   * A list of the OCIDs of the network security groups (NSGs) to add the VNIC to. For more
   * information about NSGs, see
   * {@link NetworkSecurityGroup}.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * A private IP address of your choice to assign to the VNIC.
   * See the `privateIp` attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "privateIp"?: string;
  /**
   * Whether the source/destination check is disabled on the VNIC.
   * See the `skipSourceDestCheck` attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "skipSourceDestCheck"?: boolean;
  /**
   * The OCID of the subnet to create the VNIC in.
   * See the `subnetId` attribute of {@link CreateVnicDetails} for more information.
   *
   */
  "subnetId"?: string;
}

export namespace InstanceConfigurationCreateVnicDetails {
  export function getJsonObj(obj: InstanceConfigurationCreateVnicDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InstanceConfigurationCreateVnicDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
