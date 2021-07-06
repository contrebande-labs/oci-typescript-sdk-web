/**
 * Application Migration API
 * Application Migration simplifies the migration of applications from Oracle Cloud Infrastructure Classic to Oracle Cloud Infrastructure.
You can use Application Migration API to migrate applications, such as Oracle Java Cloud Service, SOA Cloud Service, and Integration Classic
instances, to Oracle Cloud Infrastructure. For more information, see
[Overview of Application Migration](/iaas/application-migration/appmigrationoverview.htm).

 * OpenAPI spec version: 20191031
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
 * A resource that is created or operated on by an asynchronous operation that is tracked by a work request.
 *
 */
export interface WorkRequestResource {
  /**
   * The way in which this resource was affected by the operation that spawned the work request.
   *
   */
  "actionType": WorkRequestResource.ActionType;
  /**
   * The resource type that the work request affects, source or migration.
   */
  "entityType": string;
  /**
   * An [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) or other unique identifier for the resource.
   *
   */
  "identifier": string;
  /**
   * The URI path that you can use for a GET request to access the resource metadata.
   */
  "entityUri"?: string;
}

export namespace WorkRequestResource {
  export enum ActionType {
    Created = "CREATED",
    Updated = "UPDATED",
    Deleted = "DELETED",
    Related = "RELATED",
    InProgress = "IN_PROGRESS",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestResource): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
