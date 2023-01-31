/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * Artifacts are deployment manifests that are referenced in a pipeline stage for automated deployment to the target environment.  DevOps artifacts can be an OCI Container image repository, Kubernetes manifest, an Artifact Registry artifact, or defined inline.
 */
export interface DeployArtifact {
  /**
   * Unique identifier that is immutable on creation.
   */
  "id": string;
  /**
   * Optional description about the artifact to be deployed.
   */
  "description"?: string;
  /**
   * Deployment artifact identifier, which can be renamed and is not necessarily unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The OCID of a project.
   */
  "projectId": string;
  /**
   * The OCID of a compartment.
   */
  "compartmentId": string;
  /**
   * Type of the deployment artifact.
   */
  "deployArtifactType": DeployArtifact.DeployArtifactType;
  /**
   * Mode for artifact parameter substitution.
   */
  "argumentSubstitutionMode": DeployArtifact.ArgumentSubstitutionMode;
  "deployArtifactSource":
    | model.GenericDeployArtifactSource
    | model.HelmRepositoryDeployArtifactSource
    | model.OcirDeployArtifactSource
    | model.InlineDeployArtifactSource;
  /**
   * Time the deployment artifact was created. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeCreated"?: Date;
  /**
   * Time the deployment artifact was updated. Format defined by [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339).
   */
  "timeUpdated"?: Date;
  /**
   * Current state of the deployment artifact.
   */
  "lifecycleState"?: DeployArtifact.LifecycleState;
  /**
   * A detailed message describing the current state. For example, can be used to provide actionable information for a resource in Failed state.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"bar-key\": \"value\"}`
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * Usage of system tag keys. These predefined keys are scoped to namespaces. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: `{\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}`
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace DeployArtifact {
  export enum DeployArtifactType {
    DeploymentSpec = "DEPLOYMENT_SPEC",
    JobSpec = "JOB_SPEC",
    KubernetesManifest = "KUBERNETES_MANIFEST",
    GenericFile = "GENERIC_FILE",
    DockerImage = "DOCKER_IMAGE",
    HelmChart = "HELM_CHART",
    CommandSpec = "COMMAND_SPEC",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ArgumentSubstitutionMode {
    None = "NONE",
    SubstitutePlaceholders = "SUBSTITUTE_PLACEHOLDERS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum LifecycleState {
    Creating = "CREATING",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: DeployArtifact): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployArtifactSource": obj.deployArtifactSource
          ? model.DeployArtifactSource.getJsonObj(obj.deployArtifactSource)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DeployArtifact): object {
    const jsonObj = {
      ...obj,
      ...{
        "deployArtifactSource": obj.deployArtifactSource
          ? model.DeployArtifactSource.getDeserializedJsonObj(obj.deployArtifactSource)
          : undefined
      }
    };

    return jsonObj;
  }
}
