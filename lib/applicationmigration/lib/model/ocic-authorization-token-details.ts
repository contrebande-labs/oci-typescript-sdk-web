/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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

/**
 * Auth Token and endpoint to access Oracle Cloud Infrastructure - Classic, which is the source environment from which you want to migrate the application.
 *
 */
export interface OcicAuthorizationTokenDetails extends model.AuthorizationDetails {
  /**
   * AuthClient app url resource that the accesstoken is for.
   */
  "clientAppUrl": string;
  /**
   * AccessToken to access the app endpoint.
   */
  "accessToken": string;

  "type": string;
}

export namespace OcicAuthorizationTokenDetails {
  export function getJsonObj(
    obj: OcicAuthorizationTokenDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AuthorizationDetails.getJsonObj(obj) as OcicAuthorizationTokenDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const type = "OCIC_IDCS";
  export function getDeserializedJsonObj(
    obj: OcicAuthorizationTokenDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.AuthorizationDetails.getDeserializedJsonObj(
            obj
          ) as OcicAuthorizationTokenDetails)),
      ...{}
    };

    return jsonObj;
  }
}
