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

/**
 * A network source specifies a list of source IP addresses that are allowed to make authorization requests.
 * Use the network source in policy statements to restrict access to only requests that come from the specified IPs.
 * For more information, see [Managing Network Sources](https://docs.cloud.oracle.com/Content/Identity/Tasks/managingnetworksources.htm).
 *
 */
export interface NetworkSourcesSummary {
  /**
   * The OCID of the network source.
   */
  "id"?: string;
  /**
   * The OCID of the tenancy (root compartment) containing the network source.
   */
  "compartmentId"?: string;
  /**
   * The name you assign to the network source during creation. The name must be unique across
   * the tenancy and cannot be changed.
   *
   */
  "name"?: string;
  /**
   * The description you assign to the network source. Does not have to be unique, and it's changeable.
   */
  "description"?: string;
  /**
   * A list of allowed public IP addresses and CIDR ranges.
   *
   */
  "publicSourceList"?: Array<string>;
  /**
   * A list of allowed VCN OCID and IP range pairs.
   * Example:`\"vcnId\": \"ocid1.vcn.oc1.iad.aaaaaaaaexampleuniqueID\", \"ipRanges\": [ \"129.213.39.0/24\" ]`
   *
   */
  "virtualSourceList"?: Array<model.NetworkSourcesVirtualSourceList>;
  /**
   * -- The services attribute has no effect and is reserved for use by Oracle. --
   *
   */
  "services"?: Array<string>;
  /**
    * Date and time the group was created, in the format defined by RFC3339.
* <p>
Example: `2016-08-25T21:10:29.600Z`
* 
    */
  "timeCreated"?: Date;
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

export namespace NetworkSourcesSummary {
  export function getJsonObj(obj: NetworkSourcesSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "virtualSourceList": obj.virtualSourceList
          ? obj.virtualSourceList.map(item => {
              return model.NetworkSourcesVirtualSourceList.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: NetworkSourcesSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "virtualSourceList": obj.virtualSourceList
          ? obj.virtualSourceList.map(item => {
              return model.NetworkSourcesVirtualSourceList.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
