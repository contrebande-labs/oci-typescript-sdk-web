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
 * Details to create and download an Oracle Autonomous Database wallet.
 *
 */
export interface GenerateAutonomousDatabaseWalletDetails {
  /**
   * The type of wallet to generate.
   * <p>
   **Shared Exadata infrastructure usage:**
   * * `SINGLE` - used to generate a wallet for a single database
   * * `ALL` - used to generate wallet for all databases in the region
   * <p>
   **Dedicated Exadata infrastructure usage:** Value must be `NULL` if attribute is used.
   *
   */
  "generateType"?: GenerateAutonomousDatabaseWalletDetails.GenerateType;
  /**
   * The password to encrypt the keys inside the wallet. The password must be at least 8 characters long and must include at least 1 letter and either 1 numeric character or 1 special character.
   */
  "password": string;
}

export namespace GenerateAutonomousDatabaseWalletDetails {
  export enum GenerateType {
    All = "ALL",
    Single = "SINGLE"
  }

  export function getJsonObj(obj: GenerateAutonomousDatabaseWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenerateAutonomousDatabaseWalletDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
