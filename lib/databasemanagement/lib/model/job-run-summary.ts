/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * A summary of a specific job run.
 */
export interface JobRunSummary {
  /**
   * The identifier of the job run.
   */
  "id": string;
  /**
   * The name of the job run.
   */
  "name": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment in which the parent job resides.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the parent job.
   */
  "jobId": string;
  /**
   * The name of the parent job.
   */
  "jobName": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database Group where the parent job has to be executed.
   */
  "managedDatabaseGroupId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the Managed Database where the parent job has to be executed.
   */
  "managedDatabaseId"?: string;
  /**
   * The status of the job run.
   */
  "runStatus": string;
  /**
   * The date and time when the job run was submitted.
   */
  "timeSubmitted": Date;
  /**
   * The date and time when the job run was last updated.
   */
  "timeUpdated": Date;
}

export namespace JobRunSummary {
  export function getJsonObj(obj: JobRunSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: JobRunSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
