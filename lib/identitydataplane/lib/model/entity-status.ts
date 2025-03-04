/**
 * Identity Service
 * API for the Identity Dataplane
 * OpenAPI spec version: v1
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

export interface EntityStatus {
  /**
   * The entity status.
   */
  "status": string;
  /**
   * A bit mask showing the reason why the entity is inactive:
   * - bit 0: ACTIVE
   * - bit 1: SUSPENDED
   * - bit 2: DISABLED
   * - bit 3: BLOCKED
   * - bit 4: LOCKED
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "inactiveBitMask": number;
}

export namespace EntityStatus {
  export function getJsonObj(obj: EntityStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EntityStatus): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
