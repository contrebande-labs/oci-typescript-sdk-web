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

export interface CreateIPSecTunnelBgpSessionDetails {
  /**
    * The IP address for the Oracle end of the inside tunnel interface.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is required and used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, this IP address is optional. You can set this IP
* address to troubleshoot or monitor the tunnel.
* <p>
The value must be a /30 or /31.
* <p>
Example: `10.0.0.4/31`
* 
    */
  "oracleInterfaceIp"?: string;
  /**
    * The IP address for the CPE end of the inside tunnel interface.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is required and used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, this IP address is optional. You can set this IP
* address to troubleshoot or monitor the tunnel.
* <p>
The value must be a /30 or /31.
* <p>
Example: `10.0.0.5/31`
* 
    */
  "customerInterfaceIp"?: string;
  /**
    * The IPv6 address for the Oracle end of the inside tunnel interface. This IP address is optional.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, you can set this IP
* address to troubleshoot or monitor the tunnel.
* <p>
Only subnet masks from /64 up to /127 are allowed.
* <p>
Example: `2001:db8::1/64`
* 
    */
  "oracleInterfaceIpv6"?: string;
  /**
    * The IPv6 address for the CPE end of the inside tunnel interface. This IP address is optional.
* <p>
If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this IP address
* is used for the tunnel's BGP session.
* <p>
If `routing` is instead set to `STATIC`, you can set this IP
* address to troubleshoot or monitor the tunnel.
* <p>
Only subnet masks from /64 up to /127 are allowed.
* <p>
Example: `2001:db8::1/64`
* 
    */
  "customerInterfaceIpv6"?: string;
  /**
    * If the tunnel's `routing` attribute is set to `BGP`
* (see {@link IPSecConnectionTunnel}), this ASN
* is required and used for the tunnel's BGP session. This is the ASN of the network on the
* CPE end of the BGP session. Can be a 2-byte or 4-byte ASN. Uses \"asplain\" format.
* <p>
If the tunnel's `routing` attribute is set to `STATIC`, the `customerBgpAsn` must be null.
* <p>
Example: `12345` (2-byte) or `1587232876` (4-byte)
* 
    */
  "customerBgpAsn"?: string;
}

export namespace CreateIPSecTunnelBgpSessionDetails {
  export function getJsonObj(obj: CreateIPSecTunnelBgpSessionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateIPSecTunnelBgpSessionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
