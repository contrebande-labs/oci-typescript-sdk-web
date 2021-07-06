/**
 * OperatorAccessControl API
 * Operator Access Control enables you to control the time duration and the actions an Oracle operator can perform on your Exadata Cloud@Customer infrastructure.
Using logging service, you can view a near real-time audit report of all actions performed by an Oracle operator. 

Use the table of contents and search tool to explore the OperatorAccessControl API.

 * OpenAPI spec version: 20200630
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
 * Details of the operator action. Operator actions are pre-defined set of commands available to the operator on different layers of the infrastructure.
 */
export interface OperatorActionSummary {
  /**
   * Unique identifier assigned by Oracle to an operator action.
   */
  "id": string;
  /**
   * Name of the operator action.
   */
  "name": string;
  /**
   * Name of the component for which the operator action is applicable.
   */
  "component"?: string;
  /**
   * compartmentId for which the OperatorAction is applicable
   */
  "compartmentId"?: string;
  /**
   * The current lifecycle state of the operator action.
   */
  "lifecycleState"?: model.OperatorActionLifecycleStates;
  /**
   * Description of the operator action in terms of associated risk profile, and characteristics of the operating system commands made
   * available to the operator under this operator action.
   *
   */
  "description"?: string;
}

export namespace OperatorActionSummary {
  export function getJsonObj(obj: OperatorActionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OperatorActionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
