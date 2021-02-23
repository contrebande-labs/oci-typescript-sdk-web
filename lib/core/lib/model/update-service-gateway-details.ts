/**
 * Core Services API
 * API covering the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services. Use this API
to manage resources such as virtual cloud networks (VCNs), compute instances, and
block storage volumes.

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

export interface UpdateServiceGatewayDetails {
  /**
    * Whether the service gateway blocks all traffic through it. The default is `false`. When
* this is `true`, traffic is not routed to any services, regardless of route rules.
* <p>
Example: `true`
* 
    */
  "blockTraffic"?: boolean;
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
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
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
   * The OCID of the route table the service gateway will use.
   * For information about why you would associate a route table with a service gateway, see
   * [Transit Routing: Private Access to Oracle Services](https://docs.cloud.oracle.com/iaas/Content/Network/Tasks/transitroutingoracleservices.htm).
   *
   */
  "routeTableId"?: string;
  /**
    * List of all the `Service` objects you want enabled on this service gateway. Sending an empty list
* means you want to disable all services. Omitting this parameter entirely keeps the
* existing list of services intact.
* <p>
You can also enable or disable a particular `Service` by using
* {@link #attachServiceId(AttachServiceIdRequest) attachServiceId} or
* {@link #detachServiceId(DetachServiceIdRequest) detachServiceId}.
* <p>
For each enabled `Service`, make sure there's a route rule with the `Service` object's `cidrBlock`
* as the rule's destination and the service gateway as the rule's target. See
* {@link RouteTable}.
* 
    */
  "services"?: Array<model.ServiceIdRequestDetails>;
}

export namespace UpdateServiceGatewayDetails {
  export function getJsonObj(obj: UpdateServiceGatewayDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "services": obj.services
          ? obj.services.map(item => {
              return model.ServiceIdRequestDetails.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
