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
 * Represents the metadata of a Kafka Connection.
 *
 */
export interface KafkaConnection extends model.Connection {
  /**
   * The Kafka technology type.
   *
   */
  "technologyType": KafkaConnection.TechnologyType;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the stream pool being referenced.
   *
   */
  "streamPoolId"?: string;
  /**
   * Kafka bootstrap. Equivalent of bootstrap.servers configuration property in Kafka:
   * list of KafkaBootstrapServer objects specified by host/port.
   * Used for establishing the initial connection to the Kafka cluster.
   * Example: `\"server1.example.com:9092,server2.example.com:9092\"`
   *
   */
  "bootstrapServers"?: Array<model.KafkaBootstrapServer>;
  /**
   * Kafka security protocol.
   *
   */
  "securityProtocol"?: KafkaConnection.SecurityProtocol;
  /**
   * The username Oracle GoldenGate uses to connect the associated RDBMS.  This username must
   * already exist and be available for use by the database.  It must conform to the security
   * requirements implemented by the database including length, case sensitivity, and so on.
   *
   */
  "username"?: string;

  "connectionType": string;
}

export namespace KafkaConnection {
  export enum TechnologyType {
    ApacheKafka = "APACHE_KAFKA",
    AzureEventHubs = "AZURE_EVENT_HUBS",
    ConfluentKafka = "CONFLUENT_KAFKA",
    OciStreaming = "OCI_STREAMING",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum SecurityProtocol {
    Ssl = "SSL",
    SaslSsl = "SASL_SSL",
    Plaintext = "PLAINTEXT",
    SaslPlaintext = "SASL_PLAINTEXT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: KafkaConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj ? obj : (model.Connection.getJsonObj(obj) as KafkaConnection)),
      ...{
        "bootstrapServers": obj.bootstrapServers
          ? obj.bootstrapServers.map(item => {
              return model.KafkaBootstrapServer.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const connectionType = "KAFKA";
  export function getDeserializedJsonObj(obj: KafkaConnection, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.Connection.getDeserializedJsonObj(obj) as KafkaConnection)),
      ...{
        "bootstrapServers": obj.bootstrapServers
          ? obj.bootstrapServers.map(item => {
              return model.KafkaBootstrapServer.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
