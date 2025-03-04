/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * Represents the metadata of a Azure Synapse Analytics Connection.
 *
 */
export interface AzureSynapseConnection extends model.Connection {
  /**
   * The Azure Synapse Analytics technology type.
   */
  "technologyType": AzureSynapseConnection.TechnologyType;
  /**
   * JDBC connection string.
   * e.g.: 'jdbc:sqlserver://<synapse-workspace>.sql.azuresynapse.net:1433;database=<db-name>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.sql.azuresynapse.net;loginTimeout=300;'
   *
   */
  "connectionString": string;
  /**
   * The username Oracle GoldenGate uses to connect the associated RDBMS.  This username must
   * already exist and be available for use by the database.  It must conform to the security
   * requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "username": string;

  "connectionType": string;
}

export namespace AzureSynapseConnection {
  export enum TechnologyType {
    AzureSynapseAnalytics = "AZURE_SYNAPSE_ANALYTICS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: AzureSynapseConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getJsonObj(obj) as AzureSynapseConnection)),
      ...{}
    };

    return jsonObj;
  }
  export const connectionType = "AZURE_SYNAPSE_ANALYTICS";
  export function getDeserializedJsonObj(
    obj: AzureSynapseConnection,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as AzureSynapseConnection)),
      ...{}
    };

    return jsonObj;
  }
}
