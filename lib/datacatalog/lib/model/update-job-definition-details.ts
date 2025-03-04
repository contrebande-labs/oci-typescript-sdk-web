/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
For more information, see [Data Catalog](https://docs.oracle.com/iaas/data-catalog/home.htm).

 * OpenAPI spec version: 20190325
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
 * Update information for a job definition resource.
 */
export interface UpdateJobDefinitionDetails {
  /**
   * A user-friendly display name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
   * Specifies if the job definition is incremental or full.
   */
  "isIncremental"?: boolean;
  /**
   * The key of the data asset for which the job is defined.
   */
  "dataAssetKey"?: string;
  /**
   * Detailed description of the job definition.
   */
  "description"?: string;
  /**
   * The key of the connection resource to be used for harvest, sampling, profiling jobs.
   */
  "connectionKey"?: string;
  /**
   * Specify if sample data to be extracted as part of this harvest.
   */
  "isSampleDataExtracted"?: boolean;
  /**
   * Specify the sample data size in MB, specified as number of rows, for this metadata harvest. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sampleDataSizeInMBs"?: number;
  /**
   * A map of maps that contains the properties which are specific to the job type. Each job type
   * definition may define it's set of required and optional properties. The map keys are category names and the
   * values are maps of property name to property value. Every property is contained inside of a category. Most
   * job definitions have required properties within the \"default\" category.
   * Example: `{\"properties\": { \"default\": { \"host\": \"host1\", \"port\": \"1521\", \"database\": \"orcl\"}}}`
   *
   */
  "properties"?: { [key: string]: { [key: string]: string } };
}

export namespace UpdateJobDefinitionDetails {
  export function getJsonObj(obj: UpdateJobDefinitionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateJobDefinitionDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
