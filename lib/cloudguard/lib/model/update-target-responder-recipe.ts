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
 * The information to be updated in attached Target ResponderRecipe
 */
export interface UpdateTargetResponderRecipe {
  /**
   * Identifier for ResponderRecipe.
   */
  "targetResponderRecipeId": string;
  /**
   * Update responder rules associated with reponder recipe in a target.
   */
  "responderRules": Array<model.UpdateTargetRecipeResponderRuleDetails>;
}

export namespace UpdateTargetResponderRecipe {
  export function getJsonObj(obj: UpdateTargetResponderRecipe): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRules": obj.responderRules
          ? obj.responderRules.map(item => {
              return model.UpdateTargetRecipeResponderRuleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateTargetResponderRecipe): object {
    const jsonObj = {
      ...obj,
      ...{
        "responderRules": obj.responderRules
          ? obj.responderRules.map(item => {
              return model.UpdateTargetRecipeResponderRuleDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
