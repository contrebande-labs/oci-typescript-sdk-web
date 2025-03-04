/**
 * Java Management Service API
 * API for the Java Management Service. Use this API to view, create, and manage Fleets.
 * OpenAPI spec version: 20210610
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
 * Details of the request to start JFR recordings.
 * When the targets aren't specified, then all managed instances currently in the fleet are selected.
 *
 */
export interface RequestJfrRecordingsDetails {
  /**
   * The attachment targets to start JFR.
   */
  "targets"?: Array<model.JfrAttachmentTarget>;
  /**
   * The profile used for JFR events selection. If the name isn't recognized, the settings from jfcV1 or jfcV2
   * will be used depending on the JVM version.
   * Both jfcV2 and jfcV1 should be provided to ensure JFR collection on different JVM versions.
   *
   */
  "jfcProfileName": string;
  /**
   * The BASE64 encoded string of JFR settings XML with schema used by JDK 8.
   */
  "jfcV1"?: string;
  /**
   * The BASE64 encoded string of JFR settings XML with [schema used by JDK 9 and after](https://raw.githubusercontent.com/openjdk/jdk/master/src/jdk.jfr/share/classes/jdk/jfr/internal/jfc/jfc.xsd).
   *
   */
  "jfcV2"?: string;
  /**
   * Duration of the JFR recording in minutes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recordingDurationInMinutes"?: number;
  /**
   * The maximum size limit for the JFR file collected. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "recordingSizeInMb"?: number;
}

export namespace RequestJfrRecordingsDetails {
  export function getJsonObj(obj: RequestJfrRecordingsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.JfrAttachmentTarget.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: RequestJfrRecordingsDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "targets": obj.targets
          ? obj.targets.map(item => {
              return model.JfrAttachmentTarget.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
