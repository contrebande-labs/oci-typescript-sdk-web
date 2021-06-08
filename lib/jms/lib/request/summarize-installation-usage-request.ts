/**
 *
 *
 * OpenAPI spec version: 20210610
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
 * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/jms/SummarizeInstallationUsage.ts.html |here} to see how to use SummarizeInstallationUsageRequest.
 */
export interface SummarizeInstallationUsageRequest extends common.BaseRequest {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Fleet.
   */
  "fleetId": string;
  /**
   * The vendor of the related Java Runtime.
   */
  "jreVendor"?: string;
  /**
   * The distribution of the related Java Runtime.
   */
  "jreDistribution"?: string;
  /**
   * The version of the related Java Runtime.
   */
  "jreVersion"?: string;
  /**
   * The file system path of the installation.
   */
  "installationPath"?: string;
  /**
   * The Fleet-unique identifier of the related application.
   */
  "applicationId"?: string;
  /**
   * The Fleet-unique identifier of the related managed instance.
   */
  "managedInstanceId"?: string;
  /**
   * Additional fields to include into the returned model on top of the required ones.
   * This parameter can also include 'approximateApplicationCount' and 'approximateManagedInstanceCount'.
   * For example 'approximateApplicationCount,approximateManagedInstanceCount'.
   *
   */
  "fields"?: Array<model.SummarizeInstallationUsageFields>;
  /**
   * The start of the time period during which resources are searched (formatted according to RFC3339).
   */
  "timeStart"?: Date;
  /**
   * The end of the time period during which resources are searched (formatted according to RFC3339).
   */
  "timeEnd"?: Date;
  /**
   * The maximum number of items to return.
   */
  "limit"?: number;
  /**
   * The page token representing the page at which to start retrieving results. The token is usually retrieved from a previous list call.
   */
  "page"?: string;
  /**
   * The sort order, either 'asc' or 'desc'.
   */
  "sortOrder"?: model.SortOrder;
  /**
   * The field to sort installation views. Only one sort order may be provided.
   * Default order for _timeFirstSeen_, _timeLastSeen_, and _jreVersion_, _approximateApplicationCount_
   * and _approximateManagedInstanceCount_  is **descending**.
   * Default order for _jreDistribution_ and _jreVendor_ is **ascending**. If no value is specified _timeLastSeen_ is default.
   *
   */
  "sortBy"?: model.InstallationSortBy;
  /**
   * The client request ID for tracing.
   */
  "opcRequestId"?: string;
}
