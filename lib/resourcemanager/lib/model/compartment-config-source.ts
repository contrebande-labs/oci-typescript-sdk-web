/**
 * Resource Manager API
 * API for the Resource Manager service.
Use this API to install, configure, and manage resources via the "infrastructure-as-code" model.
For more information, see
[Overview of Resource Manager](/iaas/Content/ResourceManager/Concepts/resourcemanager.htm).

 * OpenAPI spec version: 20180917
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
 * Compartment to use for creating the stack.
 * The new stack will include definitions for supported resource types in this compartment.
 *
 */
export interface CompartmentConfigSource extends model.ConfigSource {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment to use
   * for creating the stack. The new stack will include definitions for supported
   * resource types in this compartment.
   *
   */
  "compartmentId": string;
  /**
   * The region to use for creating the stack. The new stack will include definitions for
   * supported resource types in this region.
   *
   */
  "region": string;
  /**
   * Filter for [services to use with Resource Discovery](https://www.terraform.io/docs/providers/oci/guides/resource_discovery.html#services).
   * For example, \"database\" limits resource discovery to resource types within the Database service.
   * The specified services must be in scope of the given compartment OCID (tenancy level for root compartment, compartment level otherwise).
   * If not specified, then all services at the scope of the given compartment OCID are used.
   *
   */
  "servicesToDiscover"?: Array<string>;

  "configSourceType": string;
}

export namespace CompartmentConfigSource {
  export function getJsonObj(obj: CompartmentConfigSource, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.ConfigSource.getJsonObj(obj) as CompartmentConfigSource)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceType = "COMPARTMENT_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: CompartmentConfigSource,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ConfigSource.getDeserializedJsonObj(obj) as CompartmentConfigSource)),
      ...{}
    };

    return jsonObj;
  }
}
