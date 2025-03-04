/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
 * UpdateNamespaceMetadataDetails is used to update the NamespaceMetadata. To update NamespaceMetadata, a user
 * must have OBJECTSTORAGE_NAMESPACE_UPDATE permission.
 *
 */
export interface UpdateNamespaceMetadataDetails {
  /**
   * The updated compartment id for use by an S3 client, if this field is set.
   */
  "defaultS3CompartmentId"?: string;
  /**
   * The updated compartment id for use by a Swift client, if this field is set.
   */
  "defaultSwiftCompartmentId"?: string;
}

export namespace UpdateNamespaceMetadataDetails {
  export function getJsonObj(obj: UpdateNamespaceMetadataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateNamespaceMetadataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
