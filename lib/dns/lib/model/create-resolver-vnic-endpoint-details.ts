/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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
 * The body for defining a new resolver VNIC endpoint. Either isForwarding or isListening must be true but not both.
 * If a listeningAddress is not provided then one will be chosen automatically. If isForwarding is true then a
 * forwardingAddress may be provided. If one is not then one will be chosen automatically. A listeningAddress will
 * be consumed regardless of if the resolver is configured for listening or not.
 * <p>
 **Warning:** Oracle recommends that you avoid using any confidential information when you supply string values using the API.
 *
 */
export interface CreateResolverVnicEndpointDetails extends model.CreateResolverEndpointDetails {
  /**
   * The OCID of a subnet. Must be part of the VCN that the resolver is attached to.
   */
  "subnetId": string;
  /**
   * An array of NSG OCIDs for the resolver endpoint.
   *
   */
  "nsgIds"?: Array<string>;

  "endpointType": string;
}

export namespace CreateResolverVnicEndpointDetails {
  export function getJsonObj(
    obj: CreateResolverVnicEndpointDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateResolverEndpointDetails.getJsonObj(
            obj
          ) as CreateResolverVnicEndpointDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const endpointType = "VNIC";
  export function getDeserializedJsonObj(
    obj: CreateResolverVnicEndpointDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateResolverEndpointDetails.getDeserializedJsonObj(
            obj
          ) as CreateResolverVnicEndpointDetails)),
      ...{}
    };

    return jsonObj;
  }
}
