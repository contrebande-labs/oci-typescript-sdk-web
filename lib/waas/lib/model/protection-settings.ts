/**
 * Web Application Acceleration and Security Services API
 * OCI Web Application Acceleration and Security Services
 * OpenAPI spec version: 20181116
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
 * The settings used for protection rules.
 */
export interface ProtectionSettings {
  /**
   * If `action` is set to `BLOCK`, this specifies how the traffic is blocked when detected as malicious by a protection rule. If unspecified, defaults to `SET_RESPONSE_CODE`.
   */
  "blockAction"?: ProtectionSettings.BlockAction;
  /**
   * The response code returned when `action` is set to `BLOCK`, `blockAction` is set to `SET_RESPONSE_CODE`, and the traffic is detected as malicious by a protection rule. If unspecified, defaults to `403`. The list of available response codes: `400`, `401`, `403`, `405`, `409`, `411`, `412`, `413`, `414`, `415`, `416`, `500`, `501`, `502`, `503`, `504`, `507`. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "blockResponseCode"?: number;
  /**
   * The message to show on the error page when `action` is set to `BLOCK`, `blockAction` is set to `SHOW_ERROR_PAGE`, and the traffic is detected as malicious by a protection rule. If unspecified, defaults to 'Access to the website is blocked.'
   */
  "blockErrorPageMessage"?: string;
  /**
   * The error code to show on the error page when `action` is set to `BLOCK`, `blockAction` is set to `SHOW_ERROR_PAGE`, and the traffic is detected as malicious by a protection rule. If unspecified, defaults to `403`.
   */
  "blockErrorPageCode"?: string;
  /**
   * The description text to show on the error page when `action` is set to `BLOCK`, `blockAction` is set to `SHOW_ERROR_PAGE`, and the traffic is detected as malicious by a protection rule. If unspecified, defaults to `Access blocked by website owner. Please contact support.`
   */
  "blockErrorPageDescription"?: string;
  /**
    * The maximum number of arguments allowed to be passed to your application before an action is taken. Arguements are query parameters or body parameters in a PUT or POST request. If unspecified, defaults to `255`. This setting only applies if a corresponding protection rule is enabled, such as the \"Number of Arguments Limits\" rule (key: 960335).
* <p>
Example: If `maxArgumentCount` to `2` for the Max Number of Arguments protection rule (key: 960335), the following requests would be blocked:
* `GET /myapp/path?query=one&query=two&query=three`
* `POST /myapp/path` with Body `{\"argument1\":\"one\",\"argument2\":\"two\",\"argument3\":\"three\"}` Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "maxArgumentCount"?: number;
  /**
   * The maximum length allowed for each argument name, in characters. Arguements are query parameters or body parameters in a PUT or POST request. If unspecified, defaults to `400`. This setting only applies if a corresponding protection rule is enabled, such as the \"Values Limits\" rule (key: 960208). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxNameLengthPerArgument"?: number;
  /**
   * The maximum length allowed for the sum of the argument name and value, in characters. Arguements are query parameters or body parameters in a PUT or POST request. If unspecified, defaults to `64000`. This setting only applies if a corresponding protection rule is enabled, such as the \"Total Arguments Limits\" rule (key: 960341). Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxTotalNameLengthOfArguments"?: number;
  /**
    * The length of time to analyze traffic traffic, in days. After the analysis period, `WafRecommendations` will be populated. If unspecified, defaults to `10`.
* <p>
Use `GET /waasPolicies/{waasPolicyId}/wafRecommendations` to view WAF recommendations. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
    */
  "recommendationsPeriodInDays"?: number;
  /**
   * Inspects the response body of origin responses. Can be used to detect leakage of sensitive data. If unspecified, defaults to `false`.
   * <p>
   **Note:** Only origin responses with a Content-Type matching a value in `mediaTypes` will be inspected.
   */
  "isResponseInspected"?: boolean;
  /**
   * The maximum response size to be fully inspected, in binary kilobytes (KiB). Anything over this limit will be partially inspected. If unspecified, defaults to `1024`. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "maxResponseSizeInKiB"?: number;
  /**
   * The list of allowed HTTP methods. If unspecified, default to `[OPTIONS, GET, HEAD, POST]`. This setting only applies if a corresponding protection rule is enabled, such as the \"Restrict HTTP Request Methods\" rule (key: 911100).
   */
  "allowedHttpMethods"?: Array<ProtectionSettings.AllowedHttpMethods>;
  /**
    * The list of media types to allow for inspection, if `isResponseInspected` is enabled. Only responses with MIME types in this list will be inspected. If unspecified, defaults to `[\"text/html\", \"text/plain\", \"text/xml\"]`.
* <p>
    Supported MIME types include:
* <p>
    - text/html
*     - text/plain
*     - text/asp
*     - text/css
*     - text/x-script
*     - application/json
*     - text/webviewhtml
*     - text/x-java-source
*     - application/x-javascript
*     - application/javascript
*     - application/ecmascript
*     - text/javascript
*     - text/ecmascript
*     - text/x-script.perl
*     - text/x-script.phyton
*     - application/plain
*     - application/xml
*     - text/xml
    */
  "mediaTypes"?: Array<string>;
}

export namespace ProtectionSettings {
  export enum BlockAction {
    ShowErrorPage = "SHOW_ERROR_PAGE",
    SetResponseCode = "SET_RESPONSE_CODE",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum AllowedHttpMethods {
    Options = "OPTIONS",
    Get = "GET",
    Head = "HEAD",
    Post = "POST",
    Put = "PUT",
    Delete = "DELETE",
    Trace = "TRACE",
    Connect = "CONNECT",
    Patch = "PATCH",
    Propfind = "PROPFIND",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ProtectionSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ProtectionSettings): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
