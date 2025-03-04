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
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Defines the backup frequency and retention period for a volume backup policy. For more information,
 * see [Policy-Based Backups](https://docs.cloud.oracle.com/iaas/Content/Block/Tasks/schedulingvolumebackups.htm).
 *
 */
export interface VolumeBackupSchedule {
  /**
   * The type of volume backup to create.
   */
  "backupType": VolumeBackupSchedule.BackupType;
  /**
   * The number of seconds that the volume backup start
   * time should be shifted from the default interval boundaries specified by
   * the period. The volume backup start time is the frequency start time plus the offset.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "offsetSeconds"?: number;
  /**
   * The volume backup frequency.
   */
  "period": VolumeBackupSchedule.Period;
  /**
    * Indicates how the offset is defined. If value is `STRUCTURED`,
* then `hourOfDay`, `dayOfWeek`, `dayOfMonth`, and `month` fields are used
* and `offsetSeconds` will be ignored in requests and users should ignore its
* value from the responses.
* <p>
`hourOfDay` is applicable for periods `ONE_DAY`,
* `ONE_WEEK`, `ONE_MONTH` and `ONE_YEAR`.
* <p>
`dayOfWeek` is applicable for period
* `ONE_WEEK`.
* <p>
`dayOfMonth` is applicable for periods `ONE_MONTH` and `ONE_YEAR`.
* <p>
'month' is applicable for period 'ONE_YEAR'.
* <p>
They will be ignored in the requests for inapplicable periods.
* <p>
If value is `NUMERIC_SECONDS`, then `offsetSeconds`
* will be used for both requests and responses and the structured fields will be
* ignored in the requests and users should ignore their values from the responses.
* <p>
For clients using older versions of Apis and not sending `offsetType` in their
* requests, the behaviour is just like `NUMERIC_SECONDS`.
* 
    */
  "offsetType"?: VolumeBackupSchedule.OffsetType;
  /**
   * The hour of the day to schedule the volume backup. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "hourOfDay"?: number;
  /**
   * The day of the week to schedule the volume backup.
   */
  "dayOfWeek"?: VolumeBackupSchedule.DayOfWeek;
  /**
   * The day of the month to schedule the volume backup. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "dayOfMonth"?: number;
  /**
   * The month of the year to schedule the volume backup.
   */
  "month"?: VolumeBackupSchedule.Month;
  /**
   * How long, in seconds, to keep the volume backups created by this schedule. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "retentionSeconds": number;
  /**
   * Specifies what time zone is the schedule in
   */
  "timeZone"?: VolumeBackupSchedule.TimeZone;
}

export namespace VolumeBackupSchedule {
  export enum BackupType {
    Full = "FULL",
    Incremental = "INCREMENTAL",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Period {
    OneHour = "ONE_HOUR",
    OneDay = "ONE_DAY",
    OneWeek = "ONE_WEEK",
    OneMonth = "ONE_MONTH",
    OneYear = "ONE_YEAR",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum OffsetType {
    Structured = "STRUCTURED",
    NumericSeconds = "NUMERIC_SECONDS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum DayOfWeek {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Month {
    January = "JANUARY",
    February = "FEBRUARY",
    March = "MARCH",
    April = "APRIL",
    May = "MAY",
    June = "JUNE",
    July = "JULY",
    August = "AUGUST",
    September = "SEPTEMBER",
    October = "OCTOBER",
    November = "NOVEMBER",
    December = "DECEMBER",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum TimeZone {
    Utc = "UTC",
    RegionalDataCenterTime = "REGIONAL_DATA_CENTER_TIME",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: VolumeBackupSchedule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: VolumeBackupSchedule): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
