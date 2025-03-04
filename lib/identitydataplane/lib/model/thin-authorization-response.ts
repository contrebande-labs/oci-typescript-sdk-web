/**
 * Identity Service
 * API for the Identity Dataplane
 * OpenAPI spec version: v1
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

export interface ThinAuthorizationResponse {
  /**
   * The policy string related to the request.
   */
  "authorizationRequest": model.AuthorizationRequest;
  /**
   * The duration of how long this decision should be cached. Note that the type is of type java.time.Duration, not
   * string.
   *
   */
  "decisionCacheDuration": string;
}

export namespace ThinAuthorizationResponse {
  export function getJsonObj(obj: ThinAuthorizationResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "authorizationRequest": obj.authorizationRequest
          ? model.AuthorizationRequest.getJsonObj(obj.authorizationRequest)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ThinAuthorizationResponse): object {
    const jsonObj = {
      ...obj,
      ...{
        "authorizationRequest": obj.authorizationRequest
          ? model.AuthorizationRequest.getDeserializedJsonObj(obj.authorizationRequest)
          : undefined
      }
    };

    return jsonObj;
  }
}
