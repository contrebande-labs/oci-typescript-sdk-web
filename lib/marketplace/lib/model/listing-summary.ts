/**
 * Marketplace Service API
 * Manage applications in Oracle Cloud Infrastructure Marketplace.
 * OpenAPI spec version: 20181001
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
 * The model for a summary of an Oracle Cloud Infrastructure Marketplace listing.
 */
export interface ListingSummary {
  /**
   * The unique identifier for the listing in Marketplace.
   */
  "id"?: string;
  /**
   * The name of the listing.
   */
  "name"?: string;
  /**
   * A short description of the listing.
   */
  "shortDescription"?: string;
  /**
   * The tagline of the listing.
   */
  "tagline"?: string;
  "icon"?: model.UploadData;
  /**
   * The listing's package type.
   */
  "packageType"?: model.PackageTypeEnum;
  /**
   * Summary of the pricing types available across all packages in the listing.
   */
  "pricingTypes"?: Array<ListingSummary.PricingTypes>;
  /**
   * The regions where you can deploy the listing. (Some listings have restrictions that limit their deployment to United States regions only.)
   *
   */
  "regions"?: Array<model.Region>;
  /**
   * Indicates whether the listing is featured.
   */
  "isFeatured"?: boolean;
  /**
   * Product categories that the listing belongs to.
   */
  "categories"?: Array<string>;
  "publisher"?: model.PublisherSummary;
  /**
   * List of operating systems supported.
   */
  "supportedOperatingSystems"?: Array<model.OperatingSystem>;
  /**
   * In which catalog the listing should exist.
   */
  "listingType"?: model.ListingType;
}

export namespace ListingSummary {
  export enum PricingTypes {
    Free = "FREE",
    Byol = "BYOL",
    Paygo = "PAYGO",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ListingSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "icon": obj.icon ? model.UploadData.getJsonObj(obj.icon) : undefined,

        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getJsonObj(item);
            })
          : undefined,

        "publisher": obj.publisher ? model.PublisherSummary.getJsonObj(obj.publisher) : undefined,
        "supportedOperatingSystems": obj.supportedOperatingSystems
          ? obj.supportedOperatingSystems.map(item => {
              return model.OperatingSystem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ListingSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "icon": obj.icon ? model.UploadData.getDeserializedJsonObj(obj.icon) : undefined,

        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getDeserializedJsonObj(item);
            })
          : undefined,

        "publisher": obj.publisher
          ? model.PublisherSummary.getDeserializedJsonObj(obj.publisher)
          : undefined,
        "supportedOperatingSystems": obj.supportedOperatingSystems
          ? obj.supportedOperatingSystems.map(item => {
              return model.OperatingSystem.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
