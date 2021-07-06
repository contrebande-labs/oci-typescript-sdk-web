/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface Backup {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup.
   */
  "id"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment.
   */
  "compartmentId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the database.
   */
  "databaseId"?: string;
  /**
   * The user-friendly name for the backup. The name does not have to be unique.
   */
  "displayName"?: string;
  /**
   * The type of backup.
   */
  "type"?: Backup.Type;
  /**
   * The date and time the backup started.
   */
  "timeStarted"?: Date;
  /**
   * The date and time the backup was completed.
   */
  "timeEnded"?: Date;
  /**
   * Additional information about the current lifecycle state.
   */
  "lifecycleDetails"?: string;
  /**
   * The name of the availability domain where the database backup is stored.
   */
  "availabilityDomain"?: string;
  /**
   * The current state of the backup.
   */
  "lifecycleState"?: Backup.LifecycleState;
  /**
   * The Oracle Database edition of the DB system from which the database backup was taken.
   *
   */
  "databaseEdition"?: Backup.DatabaseEdition;
  /**
   * The size of the database in gigabytes at the time the backup was taken.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "databaseSizeInGBs"?: number;
  /**
   * Shape of the backup's source database.
   */
  "shape"?: string;
  /**
   * Version of the backup's source database
   */
  "version"?: string;
  /**
   * The OCID of the key container that is used as the master encryption key in database transparent data encryption (TDE) operations.
   */
  "kmsKeyId"?: string;
}

export namespace Backup {
  export enum Type {
    Incremental = "INCREMENTAL",
    Full = "FULL",
    VirtualFull = "VIRTUAL_FULL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    Restoring = "RESTORING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DatabaseEdition {
    StandardEdition = "STANDARD_EDITION",
    EnterpriseEdition = "ENTERPRISE_EDITION",
    EnterpriseEditionHighPerformance = "ENTERPRISE_EDITION_HIGH_PERFORMANCE",
    EnterpriseEditionExtremePerformance = "ENTERPRISE_EDITION_EXTREME_PERFORMANCE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Backup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Backup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
