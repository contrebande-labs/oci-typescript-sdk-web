/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
* The URLs for accessing Oracle Application Express (APEX) and SQL Developer Web with a browser from a Compute instance within your VCN or that has a direct connection to your VCN. Note that these URLs are provided by the console only for databases on [dedicated Exadata infrastructure](https://docs.cloud.oracle.com/Content/Database/Concepts/adbddoverview.htm).
* <p>
Example: `{\"sqlDevWebUrl\": \"https://<hostname>/ords...\", \"apexUrl\", \"https://<hostname>/ords...\"}`
* 
*/
export interface AutonomousDatabaseConnectionUrls {
  /**
   * Oracle SQL Developer Web URL.
   */
  "sqlDevWebUrl"?: string;
  /**
   * Oracle Application Express (APEX) URL.
   */
  "apexUrl"?: string;
  /**
   * Oracle Machine Learning user management URL.
   */
  "machineLearningUserManagementUrl"?: string;
  /**
   * The URL of the Graph Studio for the Autonomous Database.
   */
  "graphStudioUrl"?: string;
}

export namespace AutonomousDatabaseConnectionUrls {
  export function getJsonObj(obj: AutonomousDatabaseConnectionUrls): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AutonomousDatabaseConnectionUrls): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
