/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * A backup of the current state of the GoldenGate deployment. Can be used to restore a deployment, or create a new deployment with that state as the starting deployment state.
 *
 */
export interface DeploymentBackup {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup being referenced.
   *
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the deployment being referenced.
   *
   */
  "deploymentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId": string;
  /**
   * An object's Display Name.
   *
   */
  "displayName"?: string;
  /**
   * True if this object is automatically created
   *
   */
  "isAutomatic"?: boolean;
  /**
   * Possible lifecycle states.
   *
   */
  "lifecycleState": model.LifecycleState;
  /**
   * Describes the object's current state in detail. For example, it can be used to provide actionable information for a resource in a Failed state.
   *
   */
  "lifecycleDetails"?: string;
  /**
   * The time of the resource backup. The format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeOfBackup"?: Date;
  /**
   * Possible Deployment backup types.
   *
   */
  "backupType"?: model.DeploymentBackupType;
  /**
   * Version of OGG
   *
   */
  "oggVersion": string;
  /**
   * Name of namespace that serves as a container for all of your buckets
   */
  "namespaceName"?: string;
  /**
   * Name of the bucket where the object is to be uploaded in the object storage
   */
  "bucketName"?: string;
  /**
   * Name of the object to be uploaded to object storage
   */
  "objectName"?: string;
  /**
   * The time the resource was created. The format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeCreated"?: Date;
  /**
   * The time the resource was last updated. The format is defined by [RFC3339](https://tools.ietf.org/html/rfc3339), such as `2016-08-25T21:10:29.600Z`.
   *
   */
  "timeUpdated"?: Date;
  /**
   * A simple key-value pair that is applied without any predefined name, type, or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Tags defined for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The system tags associated with this resource, if any. The system tags are set by Oracle Cloud Infrastructure services. Each key is predefined and scoped to namespaces.  For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
   * Example: `{orcl-cloud: {free-tier-retain: true}}`
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DeploymentBackup {
  export function getJsonObj(obj: DeploymentBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeploymentBackup): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
