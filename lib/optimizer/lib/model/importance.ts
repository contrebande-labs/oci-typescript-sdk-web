/**
 * Cloud Advisor API
 * Use the Cloud Advisor API to find potential inefficiencies in your tenancy and address them.
Cloud Advisor can help you save money, improve performance, strengthen system resilience, and improve security.
For more information, see [Cloud Advisor](/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm).

 * OpenAPI spec version: 20200606
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
 * Possible importance types.
 **/
export enum Importance {
  Critical = "CRITICAL",
  High = "HIGH",
  Moderate = "MODERATE",
  Low = "LOW",
  Minor = "MINOR",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace Importance {
  export function getJsonObj(obj: Importance): Importance {
    return obj;
  }
  export function getDeserializedJsonObj(obj: Importance): Importance {
    return obj;
  }
}
