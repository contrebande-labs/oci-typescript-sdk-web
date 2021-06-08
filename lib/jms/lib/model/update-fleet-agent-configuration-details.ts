/**
 * Java Management Service Query API
 * API for the Java Management Service. Use this API to view and manage Fleets.
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
 * Attributes to update a Fleet Agent Configuration.
 */
export interface UpdateFleetAgentConfigurationDetails {
  /**
   * The frequency (in minutes) of JRE scanning. (That is, how often should JMS scan for JRE installations.)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "jreScanFrequencyInMinutes"?: number;
  /**
   * The frequency (in minutes) of Java Usage Tracker processing. (That is, how often should JMS process data from the Java Usage Tracker.)
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "javaUsageTrackerProcessingFrequencyInMinutes"?: number;
  "linuxConfiguration"?: model.FleetAgentOsConfiguration;
  "windowsConfiguration"?: model.FleetAgentOsConfiguration;
}

export namespace UpdateFleetAgentConfigurationDetails {
  export function getJsonObj(obj: UpdateFleetAgentConfigurationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "linuxConfiguration": obj.linuxConfiguration
          ? model.FleetAgentOsConfiguration.getJsonObj(obj.linuxConfiguration)
          : undefined,
        "windowsConfiguration": obj.windowsConfiguration
          ? model.FleetAgentOsConfiguration.getJsonObj(obj.windowsConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
}
