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
* A *public IP* is a conceptual term that refers to a public IP address and related properties.
* The `publicIp` object is the API representation of a public IP.
* <p>
There are two types of public IPs:
* 1. Ephemeral
* 2. Reserved
* <p>
For more information and comparison of the two types,
* see [Public IP Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingpublicIPs.htm).
* 
*/
export interface PublicIp {
  /**
    * The public IP's availability domain. This property is set only for ephemeral public IPs
* (that is, when the `scope` of the public IP is set to AVAILABILITY_DOMAIN). The value
* is the availability domain of the assigned private IP.
* <p>
Example: `Uocm:PHX-AD-1`
* 
    */
  "availabilityDomain"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the public IP. For an ephemeral public IP, this is
   * the same compartment as the private IP's. For a reserved public IP that is currently assigned,
   * this can be a different compartment than the assigned private IP's.
   *
   */
  "compartmentId"?: string;
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
   * The public IP's Oracle ID ([OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)).
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
* `EPHEMERAL`: The lifetime is tied to the lifetime of its assigned private IP. The
* ephemeral public IP is automatically deleted when its private IP is deleted, when
* the VNIC is terminated, or when the instance is terminated. An ephemeral
* public IP must always be assigned to a private IP.
* <p>
* `RESERVED`: You control the public IP's lifetime. You can delete a reserved public IP
* whenever you like. It does not need to be assigned to a private IP at all times.
* <p>
For more information and comparison of the two types,
* see [Public IP Addresses](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/managingpublicIPs.htm).
* 
    */
  "lifetime"?: PublicIp.Lifetime;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the private IP that the public IP is currently assigned to, or in the
   * process of being assigned to.
   *
   */
  "privateIpId"?: string;
  /**
   * Whether the public IP is regional or specific to a particular availability domain.
   * <p>
   * `REGION`: The public IP exists within a region and can be assigned to a private IP
   * in any availability domain in the region. Reserved public IPs have `scope` = `REGION`.
   * <p>
   * `AVAILABILITY_DOMAIN`: The public IP exists within the availability domain of the private IP
   * it's assigned to, which is specified by the `availabilityDomain` property of the public IP object.
   * Ephemeral public IPs have `scope` = `AVAILABILITY_DOMAIN`.
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
}

export namespace PublicIp {
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
  export function getDeserializedJsonObj(obj: PublicIp): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
