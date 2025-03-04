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
 * The information to update a Connection.
 *
 */
export interface UpdateConnectionDetails {
  /**
   * An object's Display Name.
   *
   */
  "displayName"?: string;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
    * A simple key-value pair that is applied without any predefined name, type, or scope. Exists
* for cross-compatibility only.
* <p>
Example: `{\"bar-key\": \"value\"}`
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Tags defined for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the customer vault being
   * referenced.
   * If provided, this will reference a vault which the customer will be required to ensure
   * the policies are established to permit the GoldenGate Service to manage secrets contained
   * within this vault.
   *
   */
  "vaultId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the customer \"Master\" key being
   * referenced.
   * If provided, this will reference a key which the customer will be required to ensure
   * the policies are established to permit the GoldenGate Service to utilize this key to
   * manage secrets.
   *
   */
  "keyId"?: string;
  /**
   * An array of Network Security Group OCIDs used to define network access for either Deployments or Connections.
   *
   */
  "nsgIds"?: Array<string>;

  "connectionType": string;
}

export namespace UpdateConnectionDetails {
  export function getJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "POSTGRESQL":
          return model.UpdatePostgresqlConnectionDetails.getJsonObj(
            <model.UpdatePostgresqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.UpdateOracleConnectionDetails.getJsonObj(
            <model.UpdateOracleConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA_SCHEMA_REGISTRY":
          return model.UpdateKafkaSchemaRegistryConnectionDetails.getJsonObj(
            <model.UpdateKafkaSchemaRegistryConnectionDetails>(<object>jsonObj),
            true
          );
        case "OCI_OBJECT_STORAGE":
          return model.UpdateOciObjectStorageConnectionDetails.getJsonObj(
            <model.UpdateOciObjectStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "MYSQL":
          return model.UpdateMysqlConnectionDetails.getJsonObj(
            <model.UpdateMysqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA":
          return model.UpdateKafkaConnectionDetails.getJsonObj(
            <model.UpdateKafkaConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_DATA_LAKE_STORAGE":
          return model.UpdateAzureDataLakeStorageConnectionDetails.getJsonObj(
            <model.UpdateAzureDataLakeStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOLDENGATE":
          return model.UpdateGoldenGateConnectionDetails.getJsonObj(
            <model.UpdateGoldenGateConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_SYNAPSE_ANALYTICS":
          return model.UpdateAzureSynapseConnectionDetails.getJsonObj(
            <model.UpdateAzureSynapseConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "POSTGRESQL":
          return model.UpdatePostgresqlConnectionDetails.getDeserializedJsonObj(
            <model.UpdatePostgresqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "ORACLE":
          return model.UpdateOracleConnectionDetails.getDeserializedJsonObj(
            <model.UpdateOracleConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA_SCHEMA_REGISTRY":
          return model.UpdateKafkaSchemaRegistryConnectionDetails.getDeserializedJsonObj(
            <model.UpdateKafkaSchemaRegistryConnectionDetails>(<object>jsonObj),
            true
          );
        case "OCI_OBJECT_STORAGE":
          return model.UpdateOciObjectStorageConnectionDetails.getDeserializedJsonObj(
            <model.UpdateOciObjectStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "MYSQL":
          return model.UpdateMysqlConnectionDetails.getDeserializedJsonObj(
            <model.UpdateMysqlConnectionDetails>(<object>jsonObj),
            true
          );
        case "KAFKA":
          return model.UpdateKafkaConnectionDetails.getDeserializedJsonObj(
            <model.UpdateKafkaConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_DATA_LAKE_STORAGE":
          return model.UpdateAzureDataLakeStorageConnectionDetails.getDeserializedJsonObj(
            <model.UpdateAzureDataLakeStorageConnectionDetails>(<object>jsonObj),
            true
          );
        case "GOLDENGATE":
          return model.UpdateGoldenGateConnectionDetails.getDeserializedJsonObj(
            <model.UpdateGoldenGateConnectionDetails>(<object>jsonObj),
            true
          );
        case "AZURE_SYNAPSE_ANALYTICS":
          return model.UpdateAzureSynapseConnectionDetails.getDeserializedJsonObj(
            <model.UpdateAzureSynapseConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}
