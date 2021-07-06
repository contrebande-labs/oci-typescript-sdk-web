/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, and policies.
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
* **Deprecated. Use {@link AuthToken} instead.**
* <p>
Swift is the OpenStack object storage service. A `SwiftPassword` is an Oracle-provided password for using a
* Swift client with the Object Storage Service. This password is associated with
* the user's Console login. Swift passwords never expire. A user can have up to two Swift passwords at a time.
* <p>
**Note:** The password is always an Oracle-generated string; you can't change it to a string of your choice.
* <p>
For more information, see [Managing User Credentials](https://docs.cloud.oracle.com/Content/Identity/Tasks/managingcredentials.htm).
* 
*/
export interface SwiftPassword {
  /**
   * The Swift password. The value is available only in the response for `CreateSwiftPassword`, and not
   * for `ListSwiftPasswords` or `UpdateSwiftPassword`.
   *
   */
  "password"?: string;
  /**
   * The OCID of the Swift password.
   */
  "id"?: string;
  /**
   * The OCID of the user the password belongs to.
   */
  "userId"?: string;
  /**
   * The description you assign to the Swift password. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
  /**
    * Date and time the `SwiftPassword` object was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
  /**
    * Date and time when this password will expire, in the format defined by RFC3339.
* Null if it never expires.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "expiresOn"?: Date;
  /**
   * The password's current state. After creating a password, make sure its `lifecycleState` changes from
   * CREATING to ACTIVE before using it.
   *
   */
  "lifecycleState"?: SwiftPassword.LifecycleState;
  /**
   * The detailed status of INACTIVE lifecycleState. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveStatus"?: number;
}

export namespace SwiftPassword {
  export enum LifecycleState {
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SwiftPassword): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SwiftPassword): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
