/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

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

/**
 * A capture filter contains a set of rules governing what traffic a VTAP mirrors.
 *
 */
export interface CreateCaptureFilterDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing the capture filter.
   *
   */
  "compartmentId": string;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * A user-friendly name. Does not have to be unique, and it's changeable.
   * Avoid entering confidential information.
   *
   */
  "displayName"?: string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * Indicates which service will use this capture filter
   */
  "filterType": CreateCaptureFilterDetails.FilterType;
  /**
   * The set of rules governing what traffic a VTAP mirrors.
   *
   */
  "vtapCaptureFilterRules"?: Array<model.VtapCaptureFilterRuleDetails>;
}

export namespace CreateCaptureFilterDetails {
  export enum FilterType {
    Vtap = "VTAP"
  }

  export function getJsonObj(obj: CreateCaptureFilterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vtapCaptureFilterRules": obj.vtapCaptureFilterRules
          ? obj.vtapCaptureFilterRules.map(item => {
              return model.VtapCaptureFilterRuleDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateCaptureFilterDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "vtapCaptureFilterRules": obj.vtapCaptureFilterRules
          ? obj.vtapCaptureFilterRules.map(item => {
              return model.VtapCaptureFilterRuleDetails.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
