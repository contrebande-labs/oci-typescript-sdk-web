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
 * An organization tenancy summary entity.
 */
export interface OrganizationTenancySummary {
  /**
   * OCID of the tenancy.
   */
  "tenancyId": string;
  /**
   * Name of the tenancy.
   */
  "name"?: string;
  /**
   * Lifecycle state of the OrganizationTenancy.
   */
  "lifecycleState"?: model.OrganizationTenancyLifecycleState;
  /**
   * Role of the OrganizationTenancy.
   */
  "role"?: model.OrganizationTenancyRole;
  /**
   * Date-time when this tenancy joined the organization.
   */
  "timeJoined"?: Date;
  /**
   * Date-time when this tenancy left the organization.
   */
  "timeLeft"?: Date;
  /**
   * Flag to indicate the tenancy is approved for transfer to another organization.
   */
  "isApprovedForTransfer"?: boolean;
}

export namespace OrganizationTenancySummary {
  export function getJsonObj(obj: OrganizationTenancySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OrganizationTenancySummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
