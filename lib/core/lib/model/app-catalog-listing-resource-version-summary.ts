/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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
 * Listing Resource Version summary
 */
export interface AppCatalogListingResourceVersionSummary {
  /**
   * The OCID of the listing this resource version belongs to.
   */
  "listingId"?: string;
  /**
   * Date and time the listing resource version was published, in [RFC3339](https://tools.ietf.org/html/rfc3339) format.
   * Example: `2018-03-20T12:32:53.532Z`
   *
   */
  "timePublished"?: Date;
  /**
   * OCID of the listing resource.
   */
  "listingResourceId"?: string;
  /**
   * Resource Version.
   */
  "listingResourceVersion"?: string;
}

export namespace AppCatalogListingResourceVersionSummary {
  export function getJsonObj(obj: AppCatalogListingResourceVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppCatalogListingResourceVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
