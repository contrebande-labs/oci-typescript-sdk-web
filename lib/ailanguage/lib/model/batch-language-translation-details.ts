/**
 * Language API
 * OCI Language Service solutions can help enterprise customers integrate AI into their products immediately using our proven,
pre-trained and custom models or containers, without a need to set up an house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI and ML operations, which shortens the time to market.

 * OpenAPI spec version: 20221001
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
 * The documents details for translation call.
 */
export interface BatchLanguageTranslationDetails {
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment that calls the API, inference will be served from pre trained model
   */
  "compartmentId"?: string;
  /**
   * Language code per the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) standard.
   */
  "targetLanguageCode"?: string;
  /**
   * List of documents for translation.
   */
  "documents": Array<model.TextDocument>;
}

export namespace BatchLanguageTranslationDetails {
  export function getJsonObj(obj: BatchLanguageTranslationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "documents": obj.documents
          ? obj.documents.map(item => {
              return model.TextDocument.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: BatchLanguageTranslationDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "documents": obj.documents
          ? obj.documents.map(item => {
              return model.TextDocument.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
