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
 * Details for the Object Storage bucket that contains Terraform configuration files.
 *
 */
export interface CreateObjectStorageConfigSourceDetails extends model.CreateConfigSourceDetails {
  /**
   * The name of the bucket's region.
   * Example: `PHX`
   *
   */
  "region": string;
  /**
   * The Object Storage namespace that contains the bucket.
   */
  "namespace": string;
  /**
   * The name of the bucket that contains the Terraform configuration files.
   */
  "bucketName": string;

  "configSourceType": string;
}

export namespace CreateObjectStorageConfigSourceDetails {
  export function getJsonObj(
    obj: CreateObjectStorageConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getJsonObj(
            obj
          ) as CreateObjectStorageConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const configSourceType = "OBJECT_STORAGE_CONFIG_SOURCE";
  export function getDeserializedJsonObj(
    obj: CreateObjectStorageConfigSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateConfigSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateObjectStorageConfigSourceDetails)),
      ...{}
    };

    return jsonObj;
  }
}
