/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
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
 * A Volume represents a directory with data that is accessible across multiple containers in a
 * ContainerInstance.
 *
 */
export interface ContainerVolume {
  /**
   * The name of the volume. This has be unique cross single ContainerInstance.
   *
   */
  "name": string;

  "volumeType": string;
}

export namespace ContainerVolume {
  export function getJsonObj(obj: ContainerVolume): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "volumeType" in obj && obj.volumeType) {
      switch (obj.volumeType) {
        case "EMPTYDIR":
          return model.ContainerEmptyDirVolume.getJsonObj(
            <model.ContainerEmptyDirVolume>(<object>jsonObj),
            true
          );
        case "CONFIGFILE":
          return model.ContainerConfigFileVolume.getJsonObj(
            <model.ContainerConfigFileVolume>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.volumeType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerVolume): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "volumeType" in obj && obj.volumeType) {
      switch (obj.volumeType) {
        case "EMPTYDIR":
          return model.ContainerEmptyDirVolume.getDeserializedJsonObj(
            <model.ContainerEmptyDirVolume>(<object>jsonObj),
            true
          );
        case "CONFIGFILE":
          return model.ContainerConfigFileVolume.getDeserializedJsonObj(
            <model.ContainerConfigFileVolume>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.volumeType}`);
      }
    }
    return jsonObj;
  }
}
