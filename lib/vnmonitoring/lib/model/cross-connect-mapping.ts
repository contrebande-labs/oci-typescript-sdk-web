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
* For use with Oracle Cloud Infrastructure FastConnect. Each
* {@link VirtualCircuit} runs on one or
* more cross-connects or cross-connect groups. A `CrossConnectMapping`
* contains the properties for an individual cross-connect or cross-connect group
* associated with a given virtual circuit.
* <p>
The mapping includes information about the cross-connect or
* cross-connect group, the VLAN, and the BGP peering session.
* <p>
If you're a customer who is colocated with Oracle, that means you own both
* the virtual circuit and the physical connection it runs on (cross-connect or
* cross-connect group), so you specify all the information in the mapping. There's
* one exception: for a public virtual circuit, Oracle specifies the BGP IPv4
* addresses.
* <p>
If you're a provider, then you own the physical connection that the customer's
* virtual circuit runs on, so you contribute information about the cross-connect
* or cross-connect group and VLAN.
* <p>
Who specifies the BGP peering information in the case of customer connection via
* provider? If the BGP session goes from Oracle to the provider's edge router, then
* the provider also specifies the BGP peering information. If the BGP session instead
* goes from Oracle to the customer's edge router, then the customer specifies the BGP
* peering information. There's one exception: for a public virtual circuit, Oracle
* specifies the BGP IPv4 addresses.
* 
*/
export interface CrossConnectMapping {
  /**
   * The key for BGP MD5 authentication. Only applicable if your system
   * requires MD5 authentication. If empty or not set (null), that
   * means you don't use BGP MD5 authentication.
   *
   */
  "bgpMd5AuthKey"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the cross-connect or cross-connect group for this mapping.
   * Specified by the owner of the cross-connect or cross-connect group (the
   * customer if the customer is colocated with Oracle, or the provider if the
   * customer is connecting via provider).
   *
   */
  "crossConnectOrCrossConnectGroupId"?: string;
  /**
    * The BGP IPv4 address for the router on the other end of the BGP session from
* Oracle. Specified by the owner of that router. If the session goes from Oracle
* to a customer, this is the BGP IPv4 address of the customer's edge router. If the
* session goes from Oracle to a provider, this is the BGP IPv4 address of the
* provider's edge router. Must use a /30 or /31 subnet mask.
* <p>
There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses.
* <p>
Example: `10.0.0.18/31`
* 
    */
  "customerBgpPeeringIp"?: string;
  /**
    * The IPv4 address for Oracle's end of the BGP session. Must use a /30 or /31
* subnet mask. If the session goes from Oracle to a customer's edge router,
* the customer specifies this information. If the session goes from Oracle to
* a provider's edge router, the provider specifies this.
* <p>
There's one exception: for a public virtual circuit, Oracle specifies the BGP IPv4 addresses.
* <p>
Example: `10.0.0.19/31`
* 
    */
  "oracleBgpPeeringIp"?: string;
  /**
    * The number of the specific VLAN (on the cross-connect or cross-connect group)
* that is assigned to this virtual circuit. Specified by the owner of the cross-connect
* or cross-connect group (the customer if the customer is colocated with Oracle, or
* the provider if the customer is connecting via provider).
* <p>
Example: `200`
*  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "vlan"?: number;
}

export namespace CrossConnectMapping {
  export function getJsonObj(obj: CrossConnectMapping): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CrossConnectMapping): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
