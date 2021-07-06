/**
 * Cloud Guard APIs
 * A description of the Cloud Guard APIs
 * OpenAPI spec version: 20200131
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
 * Details of ResponderRule.
 */
export interface ResponderRecipeResponderRuleSummary {
  /**
   * Identifier for ResponderRule.
   */
  "id": string;
  /**
   * ResponderRule Display Name
   */
  "displayName"?: string;
  /**
   * ResponderRule Description
   */
  "description"?: string;
  /**
   * Type of Responder
   */
  "type"?: model.ResponderType;
  /**
   * List of Policy
   */
  "policies"?: Array<string>;
  /**
   * Supported Execution Modes
   */
  "supportedModes"?: Array<ResponderRecipeResponderRuleSummary.SupportedModes>;
  "details"?: model.ResponderRuleDetails;
  /**
   * Compartment Identifier
   */
  "compartmentId": string;
  /**
   * The date and time the responder recipe rule was created. Format defined by RFC3339.
   */
  "timeCreated"?: Date;
  /**
   * The date and time the responder recipe rule was updated. Format defined by RFC3339.
   */
  "timeUpdated"?: Date;
  /**
   * The current state of the ResponderRule.
   */
  "lifecycleState"?: model.LifecycleState;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
}

export namespace ResponderRecipeResponderRuleSummary {
  export enum SupportedModes {
    Autoaction = "AUTOACTION",
    Useraction = "USERACTION",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResponderRecipeResponderRuleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details ? model.ResponderRuleDetails.getJsonObj(obj.details) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResponderRecipeResponderRuleSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "details": obj.details
          ? model.ResponderRuleDetails.getDeserializedJsonObj(obj.details)
          : undefined
      }
    };

    return jsonObj;
  }
}
