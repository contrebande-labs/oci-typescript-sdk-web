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
 * Assigned subscription information.
 */
export interface AssignedSubscription {
  /**
   * OCID of the subscription.
   */
  "id": string;
  /**
   * OCID of the compartment. Always a tenancy OCID.
   */
  "compartmentId": string;
  /**
   * Subscription ID.
   */
  "classicSubscriptionId": string;
  /**
   * The type of subscription, such as 'CLOUDCM', 'SAAS', 'ERP', or 'CRM'.
   */
  "serviceName": string;
  /**
   * Denotes if the subscription is legacy or not.
   */
  "isClassicSubscription"?: boolean;
  /**
   * Region for the subscription.
   */
  "regionAssignment"?: string;
  /**
   * Lifecycle state of the subscription.
   */
  "lifecycleState"?: model.SubscriptionLifecycleState;
  /**
   * List of SKUs linked to the subscription.
   */
  "skus"?: Array<model.SubscriptionSku>;
  /**
   * List of subscription order OCIDs that contributed to this subscription.
   */
  "orderIds"?: Array<string>;
  /**
   * Denotes any program that is associated with the subscription.
   */
  "programType"?: string;
  /**
   * The country code for the customer associated with the subscription.
   */
  "customerCountryCode"?: string;
  /**
   * The currency code for the customer associated with the subscription.
   */
  "cloudAmountCurrency"?: string;
  /**
   * Customer service identifier for the customer associated with the subscription.
   */
  "csiNumber"?: string;
  /**
   * Tier for the subscription, such as if it is a free promotion subscription or a paid subscription.
   */
  "subscriptionTier"?: string;
  /**
   * Denotes if the subscription is a government subscription or not.
   */
  "isGovernmentSubscription"?: boolean;
  /**
   * List of promotions related to the subscription.
   */
  "promotion"?: Array<model.Promotion>;
  /**
   * Purchase entitlement id associated with the subscription.
   */
  "purchaseEntitlementId"?: string;
  /**
   * Subscription start time.
   */
  "startDate"?: Date;
  /**
   * Subscription end time.
   */
  "endDate"?: Date;
  /**
   * Date-time when subscription is updated.
   */
  "timeUpdated"?: Date;
  /**
   * Date-time when subscription is created.
   */
  "timeCreated"?: Date;
}

export namespace AssignedSubscription {
  export function getJsonObj(obj: AssignedSubscription): object {
    const jsonObj = {
      ...obj,
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.SubscriptionSku.getJsonObj(item);
            })
          : undefined,

        "promotion": obj.promotion
          ? obj.promotion.map(item => {
              return model.Promotion.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AssignedSubscription): object {
    const jsonObj = {
      ...obj,
      ...{
        "skus": obj.skus
          ? obj.skus.map(item => {
              return model.SubscriptionSku.getDeserializedJsonObj(item);
            })
          : undefined,

        "promotion": obj.promotion
          ? obj.promotion.map(item => {
              return model.Promotion.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
