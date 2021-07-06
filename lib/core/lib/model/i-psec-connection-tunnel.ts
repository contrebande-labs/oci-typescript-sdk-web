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
 * Information about a single tunnel in an IPSec connection. This object does not include the tunnel's
 * shared secret (pre-shared key). That is in the
 * {@link IPSecConnectionTunnelSharedSecret} object.
 *
 */
export interface IPSecConnectionTunnel {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the tunnel.
   *
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the tunnel.
   */
  "id": string;
  /**
    * The IP address of Oracle's VPN headend.
* <p>
Example: `203.0.113.21`
* 
    */
  "vpnIp"?: string;
  /**
    * The IP address of the CPE's VPN headend.
* <p>
Example: `203.0.113.22`
* 
    */
  "cpeIp"?: string;
  /**
   * The status of the tunnel based on IPSec protocol characteristics.
   */
  "status"?: IPSecConnectionTunnel.Status;
  /**
   * Internet Key Exchange protocol version.
   *
   */
  "ikeVersion"?: IPSecConnectionTunnel.IkeVersion;
  /**
   * The tunnel's lifecycle state.
   */
  "lifecycleState": IPSecConnectionTunnel.LifecycleState;
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable. Avoid
   * entering confidential information.
   *
   */
  "displayName"?: string;
  "bgpSessionInfo"?: model.BgpSessionInfo;
  "encryptionDomainConfig"?: model.EncryptionDomainConfig;
  /**
   * The type of routing used for this tunnel (either BGP dynamic routing or static routing).
   *
   */
  "routing"?: IPSecConnectionTunnel.Routing;
  /**
    * The date and time the IPSec connection tunnel was created, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * When the status of the tunnel last changed, in the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339).
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeStatusUpdated"?: Date;
}

export namespace IPSecConnectionTunnel {
  export enum Status {
    Up = "UP",
    Down = "DOWN",
    DownForMaintenance = "DOWN_FOR_MAINTENANCE",
    PartialUp = "PARTIAL_UP",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum IkeVersion {
    V1 = "V1",
    V2 = "V2",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

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

  export enum Routing {
    Bgp = "BGP",
    Static = "STATIC",
    Policy = "POLICY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: IPSecConnectionTunnel): object {
    const jsonObj = {
      ...obj,
      ...{
        "bgpSessionInfo": obj.bgpSessionInfo
          ? model.BgpSessionInfo.getJsonObj(obj.bgpSessionInfo)
          : undefined,
        "encryptionDomainConfig": obj.encryptionDomainConfig
          ? model.EncryptionDomainConfig.getJsonObj(obj.encryptionDomainConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: IPSecConnectionTunnel): object {
    const jsonObj = {
      ...obj,
      ...{
        "bgpSessionInfo": obj.bgpSessionInfo
          ? model.BgpSessionInfo.getDeserializedJsonObj(obj.bgpSessionInfo)
          : undefined,
        "encryptionDomainConfig": obj.encryptionDomainConfig
          ? model.EncryptionDomainConfig.getDeserializedJsonObj(obj.encryptionDomainConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
