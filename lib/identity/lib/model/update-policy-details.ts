/**
 * Identity and Access Management Service API
 * APIs for managing users, groups, compartments, policies, and identity domains.
 * OpenAPI spec version: 20160918
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

export interface UpdatePolicyDetails {
  /**
   * The description you assign to the policy. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
  /**
   * An array of policy statements written in the policy language. See
   * [How Policies Work](https://docs.cloud.oracle.com/Content/Identity/policieshow/how-policies-work.htm) and
   * [Common Policies](https://docs.cloud.oracle.com/Content/Identity/policiescommon/commonpolicies.htm).
   *
   */
  "statements"?: Array<string>;
  /**
   * The version of the policy. If null or set to an empty string, when a request comes in for authorization, the
   * policy will be evaluated according to the current behavior of the services at that moment. If set to a particular
   * date (YYYY-MM-DD), the policy will be evaluated according to the behavior of the services on that date.
   *
   */
  "versionDate"?: Date;
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
}

export namespace UpdatePolicyDetails {
  export function getJsonObj(obj: UpdatePolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdatePolicyDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
