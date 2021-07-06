/**
 * Object Storage Service API
 * Common set of Object Storage and Archive Storage APIs for managing buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
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
* The details used to re-encrypt the data encryption keys associated with an object.
* You can only specify either a kmsKeyId or an sseCustomerKey in the request payload, not both.
* If the request payload is empty, the object is encrypted using the encryption key assigned to the
* bucket. The bucket encryption mechanism can either be a master encryption key managed by Oracle or the Vault service.
* <p>
- The sseCustomerKey field specifies the customer-provided encryption key (SSE-C) that will be used to re-encrypt the data encryption keys of the
*   object and its chunks.
* <p>
- The sourceSSECustomerKey field specifies information about the customer-provided encryption key that is currently
*   associated with the object source. Specify a value for the sourceSSECustomerKey only if the object
*   is encrypted with a customer-provided encryption key.
* 
*/
export interface ReencryptObjectDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the master encryption key used to call the Vault
   * service to re-encrypt the data encryption keys associated with the object and its chunks. If the kmsKeyId value is
   * empty, whether null or an empty string, the API will perform re-encryption by using the kmsKeyId associated with the
   * bucket or the master encryption key managed by Oracle, depending on the bucket encryption mechanism.
   *
   */
  "kmsKeyId"?: string;
  "sseCustomerKey"?: model.SSECustomerKeyDetails;
  "sourceSseCustomerKey"?: model.SSECustomerKeyDetails;
}

export namespace ReencryptObjectDetails {
  export function getJsonObj(obj: ReencryptObjectDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sseCustomerKey": obj.sseCustomerKey
          ? model.SSECustomerKeyDetails.getJsonObj(obj.sseCustomerKey)
          : undefined,
        "sourceSseCustomerKey": obj.sourceSseCustomerKey
          ? model.SSECustomerKeyDetails.getJsonObj(obj.sourceSseCustomerKey)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ReencryptObjectDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "sseCustomerKey": obj.sseCustomerKey
          ? model.SSECustomerKeyDetails.getDeserializedJsonObj(obj.sseCustomerKey)
          : undefined,
        "sourceSseCustomerKey": obj.sourceSseCustomerKey
          ? model.SSECustomerKeyDetails.getDeserializedJsonObj(obj.sourceSseCustomerKey)
          : undefined
      }
    };

    return jsonObj;
  }
}
