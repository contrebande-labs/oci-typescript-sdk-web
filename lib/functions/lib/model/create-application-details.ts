/**
 * Functions Service API
 * API for the Functions service.

 * OpenAPI spec version: 20181201
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
 * Properties for a new application.
 *
 */
export interface CreateApplicationDetails {
  /**
   * The OCID of the compartment to create the application within.
   *
   */
  "compartmentId": string;
  /**
   * The display name of the application. The display name must be unique within the compartment containing the application. Avoid entering confidential information.
   *
   */
  "displayName": string;
  /**
    * Application configuration. These values are passed on to the function as environment variables, functions may override application configuration.
* Keys must be ASCII strings consisting solely of letters, digits, and the '_' (underscore) character, and must not begin with a digit. Values should be limited to printable unicode characters.
* <p>
Example: `{\"MY_FUNCTION_CONFIG\": \"ConfVal\"}`
* <p>
The maximum size for all configuration keys and values is limited to 4KB. This is measured as the sum of octets necessary to represent each key and value in UTF-8.
* 
    */
  "config"?: { [key: string]: string };
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm)s of the subnets in which to run functions in the application.
   *
   */
  "subnetIds": Array<string>;
  /**
    * A syslog URL to which to send all function logs. Supports tcp, udp, and tcp+tls.
* The syslog URL must be reachable from all of the subnets configured for the application.
* Note: If you enable the OCI Logging service for this application, the syslogUrl value is ignored. Function logs are sent to the OCI Logging service, and not to the syslog URL.
* <p>
Example: `tcp://logserver.myserver:1234`
* 
    */
  "syslogUrl"?: string;
  "traceConfig"?: model.ApplicationTraceConfig;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace.
* For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Department\": \"Finance\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: `{\"Operations\": {\"CostCenter\": \"42\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateApplicationDetails {
  export function getJsonObj(obj: CreateApplicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceConfig": obj.traceConfig
          ? model.ApplicationTraceConfig.getJsonObj(obj.traceConfig)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateApplicationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "traceConfig": obj.traceConfig
          ? model.ApplicationTraceConfig.getDeserializedJsonObj(obj.traceConfig)
          : undefined
      }
    };

    return jsonObj;
  }
}
