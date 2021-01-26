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
* A *public IP* is a conceptual term that refers to a public IP address and related properties.
* The `publicIp` object is the API representation of a public IP.
* <p>
There are two types of public IPs:
* 1. Ephemeral
* 2. Reserved
* <p>
For more information and comparison of the two types,
* see [Public IP Addresses](https://docs.cloud.oracle.com/Content/Network/Tasks/managingpublicIPs.htm).
* <p>
**Warning:** Oracle recommends that you avoid using any confidential information when you
* supply string values using the API.
* 
*/
export interface PublicIp {
  /**
   * The OCID of the entity the public IP is assigned to, or in the process of
   * being assigned to.
   *
   */
  "assignedEntityId"?: string;
  /**
   * The type of entity the public IP is assigned to, or in the process of being
   * assigned to.
   *
   */
  "assignedEntityType"?: PublicIp.AssignedEntityType;
  /**
    * The public IP's availability domain. This property is set only for ephemeral public IPs
* that are assigned to a private IP (that is, when the `scope` of the public IP is set to
* AVAILABILITY_DOMAIN). The value is the availability domain of the assigned private IP.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The OCID of the compartment containing the public IP. For an ephemeral public IP, this is
   * the compartment of its assigned entity (which can be a private IP or a regional entity such
   * as a NAT gateway). For a reserved public IP that is currently assigned,
   * its compartment can be different from the assigned private IP's.
   *
   */
  "compartmentId"?: string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid
   * entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The public IP's Oracle ID (OCID).
   */
  "id"?: string;
  /**
    * The public IP address of the `publicIp` object.
* <p>
Example: `203.0.113.2`
* 
    */
  "ipAddress"?: string;
  /**
   * The public IP's current state.
   */
  "lifecycleState"?: PublicIp.LifecycleState;
  /**
    * Defines when the public IP is deleted and released back to Oracle's public IP pool.
* <p>
* `EPHEMERAL`: The lifetime is tied to the lifetime of its assigned entity. An ephemeral
* public IP must always be assigned to an entity. If the assigned entity is a private IP,
* the ephemeral public IP is automatically deleted when the private IP is deleted, when
* the VNIC is terminated, or when the instance is terminated. If the assigned entity is a
* {@link NatGateway}, the ephemeral public IP is automatically
* deleted when the NAT gateway is terminated.
* <p>
* `RESERVED`: You control the public IP's lifetime. You can delete a reserved public IP
* whenever you like. It does not need to be assigned to a private IP at all times.
* <p>
For more information and comparison of the two types,
* see [Public IP Addresses](https://docs.cloud.oracle.com/Content/Network/Tasks/managingpublicIPs.htm).
* 
    */
  "lifetime"?: PublicIp.Lifetime;
  /**
    * Deprecated. Use `assignedEntityId` instead.
* <p>
The OCID of the private IP that the public IP is currently assigned to, or in the
* process of being assigned to.
* <p>
**Note:** This is `null` if the public IP is not assigned to a private IP, or is
* in the process of being assigned to one.
* 
    */
  "privateIpId"?: string;
  /**
   * Whether the public IP is regional or specific to a particular availability domain.
   * <p>
   * `REGION`: The public IP exists within a region and is assigned to a regional entity
   * (such as a {@link NatGateway}), or can be assigned to a private
   * IP in any availability domain in the region. Reserved public IPs and ephemeral public IPs
   * assigned to a regional entity have `scope` = `REGION`.
   * <p>
   * `AVAILABILITY_DOMAIN`: The public IP exists within the availability domain of the entity
   * it's assigned to, which is specified by the `availabilityDomain` property of the public IP object.
   * Ephemeral public IPs that are assigned to private IPs have `scope` = `AVAILABILITY_DOMAIN`.
   *
   */
  "scope"?: PublicIp.Scope;
  /**
    * The date and time the public IP was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the pool object created in the current tenancy.
   */
  "publicIpPoolId"?: string;
}

export namespace PublicIp {
  export enum AssignedEntityType {
    PrivateIp = "PRIVATE_IP",
    NatGateway = "NAT_GATEWAY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Provisioning = "PROVISIONING",
    Available = "AVAILABLE",
    Assigning = "ASSIGNING",
    Assigned = "ASSIGNED",
    Unassigning = "UNASSIGNING",
    Unassigned = "UNASSIGNED",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Lifetime {
    Ephemeral = "EPHEMERAL",
    Reserved = "RESERVED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Scope {
    Region = "REGION",
    AvailabilityDomain = "AVAILABILITY_DOMAIN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: PublicIp): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
