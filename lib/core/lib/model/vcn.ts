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
* A virtual cloud network (VCN). For more information, see
* [Overview of the Networking Service](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/overview.htm).
* <p>
To use any of the API operations, you must be authorized in an IAM policy. If you're not authorized,
* talk to an administrator. If you're an administrator who needs to write policies to give users access, see
* [Getting Started with Policies](https://docs.cloud.oracle.com/iaas/Content/Identity/Concepts/policygetstarted.htm).
* 
*/
export interface Vcn {
  /**
    * Deprecated. The first CIDR IP address from cidrBlocks.
* <p>
Example: `172.16.0.0/16`
* 
    */
  "cidrBlock": string;
  /**
   * The list of IPv4 CIDR blocks the VCN will use.
   *
   */
  "cidrBlocks": Array<string>;
  /**
   * The OCID of the compartment containing the VCN.
   */
  "compartmentId": string;
  /**
   * The OCID for the VCN's default set of DHCP options.
   *
   */
  "defaultDhcpOptionsId"?: string;
  /**
   * The OCID for the VCN's default route table.
   */
  "defaultRouteTableId"?: string;
  /**
   * The OCID for the VCN's default security list.
   */
  "defaultSecurityListId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
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
    * A DNS label for the VCN, used in conjunction with the VNIC's hostname and
* subnet's DNS label to form a fully qualified domain name (FQDN) for each VNIC
* within this subnet (for example, `bminstance-1.subnet123.vcn1.oraclevcn.com`).
* Must be an alphanumeric string that begins with a letter.
* The value cannot be changed.
* <p>
The absence of this parameter means the Internet and VCN Resolver will
* not work for this VCN.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* <p>
Example: `vcn1`
* 
    */
  "dnsLabel"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The VCN's Oracle ID (OCID).
   */
  "id": string;
  /**
   * For an IPv6-enabled VCN, this is the IPv6 CIDR block for the VCN's private IP address space.
   * The VCN size is always /48. If you don't provide a value when creating the VCN, Oracle
   * provides one and uses that *same* CIDR for the `ipv6PublicCidrBlock`. If you do provide a
   * value, Oracle provides a *different* CIDR for the `ipv6PublicCidrBlock`. Note that IPv6
   * addressing is currently supported only in certain regions. See
   * [IPv6 Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/ipv6.htm).
   * Example: `2001:0db8:0123::/48`
   *
   */
  "ipv6CidrBlock"?: string;
  /**
    * For an IPv6-enabled VCN, this is the IPv6 CIDR block for the VCN's public IP address space.
* The VCN size is always /48. This CIDR is always provided by Oracle. If you don't provide a
* custom CIDR for the `ipv6CidrBlock` when creating the VCN, Oracle assigns that value and also
* uses it for `ipv6PublicCidrBlock`. Oracle uses addresses from this block for the `publicIpAddress`
* attribute of an {@link Ipv6} that has internet access allowed.
* <p>
Example: `2001:0db8:0123::/48`
* 
    */
  "ipv6PublicCidrBlock"?: string;
  /**
   * The VCN's current state.
   */
  "lifecycleState": Vcn.LifecycleState;
  /**
    * The date and time the VCN was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * The VCN's domain name, which consists of the VCN's DNS label, and the
* `oraclevcn.com` domain.
* <p>
For more information, see
* [DNS in Your Virtual Cloud Network](https://docs.cloud.oracle.com/iaas/Content/Network/Concepts/dns.htm).
* <p>
Example: `vcn1.oraclevcn.com`
* 
    */
  "vcnDomainName"?: string;
}

export namespace Vcn {
  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    Updating = "UPDATING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Vcn): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
