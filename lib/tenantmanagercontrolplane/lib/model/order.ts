/**
 * Organizations API
 * The Organizations API allows you to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and its resources.
 * OpenAPI spec version: 20200801
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
 * Order details.
 */
export interface Order {
  /**
   * Immutable and unique order number holding customer subscription information.
   */
  "orderNumber": string;
  /**
   * Order's data center region.
   */
  "dataCenterRegion"?: string;
  /**
   * Administrator email owning the subscription.
   */
  "adminEmail": string;
  /**
   * State of the order.
   */
  "orderState": string;
  /**
   * Array of subscriptions associated with the order.
   */
  "subscriptions": Array<model.SubscriptionInfo>;
}

export namespace Order {
  export function getJsonObj(obj: Order): object {
    const jsonObj = {
      ...obj,
      ...{
        "subscriptions": obj.subscriptions
          ? obj.subscriptions.map(item => {
              return model.SubscriptionInfo.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Order): object {
    const jsonObj = {
      ...obj,
      ...{
        "subscriptions": obj.subscriptions
          ? obj.subscriptions.map(item => {
              return model.SubscriptionInfo.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
