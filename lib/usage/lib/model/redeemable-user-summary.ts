/**
 * Usage Proxy API
 * Use the Usage Proxy API to list Oracle Support Rewards, view related detailed usage information, and manage users who redeem rewards. For more information, see [Oracle Support Rewards Overview](/iaas/Content/Billing/Concepts/supportrewardsoverview.htm).
 * OpenAPI spec version: 20190111
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2022, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Email ID information.
 */
export interface RedeemableUserSummary {
  /**
   * The email ID of a user that can redeem rewards.
   */
  "emailId"?: string;
}

export namespace RedeemableUserSummary {
  export function getJsonObj(obj: RedeemableUserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RedeemableUserSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
