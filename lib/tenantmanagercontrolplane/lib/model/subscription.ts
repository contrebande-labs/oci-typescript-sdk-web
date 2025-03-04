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
 * Subscription information for compartmentId. Only root compartments are allowed.
 */
export interface Subscription {
  /**
   * OCID of the subscription details for the particular root compartment or tenancy.
   */
  "id": string;
  /**
   * Classic subscription ID.
   */
  "classicSubscriptionId": string;
  /**
   * OCID of the compartment. Always a tenancy OCID.
   */
  "compartmentId": string;
  /**
   * The type of subscription, such as 'CLOUDCM', 'SAAS', 'ERP', or 'CRM'.
   */
  "serviceName": string;
  /**
   * Denotes if the subscription is from classic systems or not.
   */
  "isClassicSubscription"?: boolean;
  /**
   * The pay model of the subscription, such as 'Pay as you go' or 'Monthly'.
   */
  "paymentModel"?: string;
  /**
   * Region for the subscription.
   */
  "regionAssignment"?: string;
  /**
   * Lifecycle state of the subscription.
   */
  "lifecycleState"?: model.SubscriptionLifecycleState;
  /**
   * List of SKUs linked to this subscription.
   */
  "skus"?: Array<model.SubscriptionSku>;
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

export namespace Subscription {
  export function getJsonObj(obj: Subscription): object {
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
  export function getDeserializedJsonObj(obj: Subscription): object {
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
