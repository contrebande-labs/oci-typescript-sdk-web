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
 * The model for a summary of an Oracle Cloud Infrastructure publication.
 */
export interface PublicationSummary {
  /**
   * The lifecycle state of the publication.
   */
  "lifecycleState": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment where the publication exists.
   */
  "compartmentId": string;
  /**
   * The unique identifier for the publication in Marketplace.
   */
  "id": string;
  /**
   * The name of the publication, which is also used in the listing.
   */
  "name": string;
  /**
   * A short description of the publication to use in the listing.
   */
  "shortDescription"?: string;
  "icon"?: model.UploadData;
  /**
   * The listing's package type.
   */
  "packageType"?: model.PackageTypeEnum;
  /**
   * The list of operating systems supported by the listing.
   */
  "supportedOperatingSystems"?: Array<model.OperatingSystem>;
  /**
   * The publisher category to which the publication belongs. The publisher category informs where the listing appears for use.
   */
  "listingType": model.ListingType;
  /**
    * The date and time the publication was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
}

export namespace PublicationSummary {
  export function getJsonObj(obj: PublicationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "icon": obj.icon ? model.UploadData.getJsonObj(obj.icon) : undefined,

        "supportedOperatingSystems": obj.supportedOperatingSystems
          ? obj.supportedOperatingSystems.map(item => {
              return model.OperatingSystem.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PublicationSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "icon": obj.icon ? model.UploadData.getDeserializedJsonObj(obj.icon) : undefined,

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
