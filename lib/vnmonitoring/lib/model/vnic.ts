/**
 * Network Monitoring API
 * Use the Network Monitoring API to troubleshoot routing and security issues for resources such as virtual cloud networks (VCNs) and compute instances. For more information, see the console
documentation for the [Network Path Analyzer](/iaas/Content/Network/Concepts/path_analyzer.htm) tool.

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
* A virtual network interface card. Each VNIC resides in a subnet in a VCN.
* An instance attaches to a VNIC to obtain a network connection into the VCN
* through that subnet. Each instance has a *primary VNIC* that is automatically
* created and attached during launch. You can add *secondary VNICs* to an
* instance after it's launched. For more information, see
* [Virtual Network Interface Cards (VNICs)](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingVNICs.htm).
* <p>
Each VNIC has a *primary private IP* that is automatically assigned during launch.
* You can add *secondary private IPs* to a VNIC after it's created. For more
* information, see {@link #createPrivateIp(CreatePrivateIpRequest) createPrivateIp} and
* [IP Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingIPaddresses.htm).
* <p>

* To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Vnic {
  /**
    * The VNIC's availability domain.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the VNIC.
   */
  "compartmentId": string;
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
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
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
    * The hostname for the VNIC's primary private IP. Used for DNS. The value is the hostname
* portion of the primary private IP's fully qualified domain name (FQDN)
* (for example, `bminstance-1` in FQDN `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Must be unique across all VNICs in the subnet and comply with
* [RFC 952](https://tools.ietf.org/html/rfc952) and
* [RFC 1123](https://tools.ietf.org/html/rfc1123).
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* <p>
Example: `bminstance-1`
* 
    */
  "hostnameLabel"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the VNIC.
   */
  "id": string;
  /**
   * Whether the VNIC is the primary VNIC (the VNIC that is automatically created
   * and attached during instance launch).
   *
   */
  "isPrimary"?: boolean;
  /**
   * The current state of the VNIC.
   */
  "lifecycleState": Vnic.LifecycleState;
  /**
    * The MAC address of the VNIC.
* <p>
Example: `00:00:00:00:00:01`
* 
    */
  "macAddress"?: string;
  /**
    * A list of the OCIDs of the network security groups that the VNIC belongs to.
* <p>
For more information about NSGs, see
* {@link NetworkSecurityGroup}.
* 
    */
  "nsgIds"?: Array<string>;
  /**
    * The private IP address of the primary `privateIp` object on the VNIC.
* The address is within the CIDR of the VNIC's subnet.
* <p>
Example: `10.0.3.3`
* 
    */
  "privateIp"?: string;
  /**
   * The public IP address of the VNIC, if one is assigned.
   *
   */
  "publicIp"?: string;
  /**
    * Whether the source/destination check is disabled on the VNIC.
* Defaults to `false`, which means the check is performed. For information
* about why you would skip the source/destination check, see
* [Using a Private IP as a Route Target](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingroutetables.htm#privateip).
* <p>

* Example: `true`
* 
    */
  "skipSourceDestCheck"?: boolean;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the subnet the VNIC is in.
   */
  "subnetId": string;
  /**
    * The date and time the VNIC was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated": Date;
}

export namespace Vnic {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Vnic): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Vnic): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
