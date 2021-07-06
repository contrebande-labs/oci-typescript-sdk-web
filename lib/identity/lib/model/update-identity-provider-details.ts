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

export interface UpdateIdentityProviderDetails {
  /**
   * The description you assign to the `IdentityProvider`. Does not have to
   * be unique, and it's changeable.
   *
   */
  "description"?: string;
  /**
   * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Department\": \"Finance\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
   * Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "protocol": string;
}

export namespace UpdateIdentityProviderDetails {
  export function getJsonObj(obj: UpdateIdentityProviderDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("protocol" in obj && obj.protocol) {
      switch (obj.protocol) {
        case "SAML2":
          return model.UpdateSaml2IdentityProviderDetails.getJsonObj(
            <model.UpdateSaml2IdentityProviderDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.protocol);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateIdentityProviderDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("protocol" in obj && obj.protocol) {
      switch (obj.protocol) {
        case "SAML2":
          return model.UpdateSaml2IdentityProviderDetails.getDeserializedJsonObj(
            <model.UpdateSaml2IdentityProviderDetails>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.protocol);
      }
    }
    return jsonObj;
  }
}
