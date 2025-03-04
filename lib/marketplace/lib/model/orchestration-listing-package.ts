/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * A listing package for orchestration.
 */
export interface OrchestrationListingPackage extends model.ListingPackage {
  /**
   * Link to the orchestration resource.
   */
  "resourceLink"?: string;
  /**
   * List of variables for the orchestration resource.
   */
  "variables"?: Array<model.OrchestrationVariable>;
  /**
   * The regions where you can deploy this listing package. (Some packages have restrictions that limit their deployment to United States regions only.)
   *
   */
  "regions"?: Array<model.Region>;

  "packageType": string;
}

export namespace OrchestrationListingPackage {
  export function getJsonObj(obj: OrchestrationListingPackage, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingPackage.getJsonObj(obj) as OrchestrationListingPackage)),
      ...{
        "variables": obj.variables
          ? obj.variables.map(item => {
              return model.OrchestrationVariable.getJsonObj(item);
            })
          : undefined,
        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const packageType = "ORCHESTRATION";
  export function getDeserializedJsonObj(
    obj: OrchestrationListingPackage,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ListingPackage.getDeserializedJsonObj(obj) as OrchestrationListingPackage)),
      ...{
        "variables": obj.variables
          ? obj.variables.map(item => {
              return model.OrchestrationVariable.getDeserializedJsonObj(item);
            })
          : undefined,
        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
