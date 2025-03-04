/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The information about monitored resource.
 */
export interface AssociatedResourcesSummary {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of monitored resource.
   */
  "id": string;
  /**
   * Name of the monitored resource
   */
  "name"?: string;
  /**
   * Monitored resource display name.
   */
  "displayName"?: string;
  /**
   * Type of the monitored resource
   */
  "type"?: string;
  /**
   * Resource Host Name
   */
  "hostName"?: string;
  /**
   * External resource is any OCI resource identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm)
   * which is not a Stack Monitoring service resource.
   * Currently supports only following resource type identifiers - externalcontainerdatabase,
   * externalnoncontainerdatabase, externalpluggabledatabase and OCI compute instance.
   *
   */
  "externalId"?: string;
  /**
   * Management Agent Identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   */
  "managementAgentId"?: string;
  /**
   * The current state of the monitored resource.
   */
  "lifecycleState"?: model.ResourceLifecycleState;
  /**
   * List of associated monitored resources
   */
  "associatedResources"?: Array<model.AssociatedMonitoredResource>;
}

export namespace AssociatedResourcesSummary {
  export function getJsonObj(obj: AssociatedResourcesSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedResources": obj.associatedResources
          ? obj.associatedResources.map(item => {
              return model.AssociatedMonitoredResource.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssociatedResourcesSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "associatedResources": obj.associatedResources
          ? obj.associatedResources.map(item => {
              return model.AssociatedMonitoredResource.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
