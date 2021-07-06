/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Connect Descriptor details. If a Private Endpoint was specified in the Connection, the host entry should be a valid IP address.
 *
 */
export interface UpdateConnectDescriptor {
  /**
   * Host or IP address of the connect descriptor.
   *
   */
  "host"?: string;
  /**
   * Port of the connect descriptor.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "port"?: number;
  /**
   * Database service name.
   *
   */
  "databaseServiceName"?: string;
  /**
   * Connect String. If specified, this will override the stored connect descriptor details.
   * If a Private Endpoint was specified in the Connection, the host entry should be a valid IP address.
   * Supported formats:
   * Easy connect: <host>:<port>/<db_service_name>
   * Long format: (description= (address=(port=<port>)(host=<host>))(connect_data=(service_name=<db_service_name>)))
   *
   */
  "connectString"?: string;
}

export namespace UpdateConnectDescriptor {
  export function getJsonObj(obj: UpdateConnectDescriptor): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConnectDescriptor): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
