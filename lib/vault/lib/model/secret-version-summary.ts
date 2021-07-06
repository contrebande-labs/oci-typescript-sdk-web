/**
 * Secrets Management API
 * API for managing secrets.
 * OpenAPI spec version: 20180608
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
 * The secret version summary object, which doesn't include the contents of the secret.
 */
export interface SecretVersionSummary {
  /**
   * The content type of the secret version's secret contents.
   */
  "contentType"?: SecretVersionSummary.ContentType;
  /**
   * The name of the secret version. A name is unique across versions of a secret.
   *
   */
  "name"?: string;
  /**
   * The OCID of the secret.
   */
  "secretId": string;
  /**
   * A list of possible rotation states for the secret version. A secret version marked `CURRENT` is currently in use. A secret version
   * marked `PENDING` is staged and available for use, but has not been applied on the target system and, therefore, has not been rotated
   * into current, active use. The secret most recently uploaded to a vault is always marked `LATEST`. (The first version of a secret is
   * always marked as both `CURRENT` and `LATEST`.) A secret version marked `PREVIOUS` is the secret version that was most recently marked
   * `CURRENT`, before the last secret version rotation. A secret version marked `DEPRECATED` is neither current, pending, nor the previous
   * one in use. Only secret versions marked `DEPRECATED` can be scheduled for deletion.
   *
   */
  "stages"?: Array<SecretVersionSummary.Stages>;
  /**
   * A optional property indicating when the secret version was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeCreated": Date;
  /**
   * An optional property indicating when to delete the secret version, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfDeletion"?: Date;
  /**
   * An optional property indicating when the secret version will expire, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   * Example: `2019-04-03T21:10:29.600Z`
   *
   */
  "timeOfExpiry"?: Date;
  /**
   * The version number of the secret. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "versionNumber": number;
}

export namespace SecretVersionSummary {
  export enum ContentType {
    Base64 = "BASE64",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum Stages {
    Current = "CURRENT",
    Pending = "PENDING",
    Latest = "LATEST",
    Previous = "PREVIOUS",
    Deprecated = "DEPRECATED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SecretVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SecretVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
