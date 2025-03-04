/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
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
 * DEPRECATED -- please use HeatWave API instead.
 * Analytics Cluster memory estimate
 * that can be used to determine a suitable Analytics Cluster size. For each MySQL user table the estimated memory
 * footprint when the table is loaded to the Analytics Cluster memory is returned.
 *
 */
export interface AnalyticsClusterMemoryEstimate {
  /**
   * The OCID of the DB System the Analytics Cluster memory estimate is associated with.
   *
   */
  "dbSystemId": string;
  /**
   * Current status of the Work Request generating the Analytics Cluster memory estimate.
   */
  "status": model.AnalyticsClusterMemoryEstimateStatus;
  /**
   * The date and time that the Work Request to generate the Analytics Cluster memory estimate was issued, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc333).
   */
  "timeCreated": Date;
  /**
   * The date and time that the Analytics Cluster memory estimate was generated, as described by [RFC 3339](https://tools.ietf.org/rfc/rfc333).
   */
  "timeUpdated": Date;
  /**
   * Collection of schemas with estimated memory footprints for MySQL user tables of each schema
   * when loaded to Analytics Cluster memory.
   *
   */
  "tableSchemas": Array<model.AnalyticsClusterSchemaMemoryEstimate>;
}

export namespace AnalyticsClusterMemoryEstimate {
  export function getJsonObj(obj: AnalyticsClusterMemoryEstimate): object {
    const jsonObj = {
      ...obj,
      ...{
        "tableSchemas": obj.tableSchemas
          ? obj.tableSchemas.map(item => {
              return model.AnalyticsClusterSchemaMemoryEstimate.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AnalyticsClusterMemoryEstimate): object {
    const jsonObj = {
      ...obj,
      ...{
        "tableSchemas": obj.tableSchemas
          ? obj.tableSchemas.map(item => {
              return model.AnalyticsClusterSchemaMemoryEstimate.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
