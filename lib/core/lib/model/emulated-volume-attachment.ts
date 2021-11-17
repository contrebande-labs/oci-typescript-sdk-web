/**
 * Core Services API
 * Use the Core Services API to manage resources such as virtual cloud networks (VCNs),
compute instances, and block storage volumes. For more information, see the console
documentation for the [Networking](/iaas/Content/Network/Concepts/overview.htm),
[Compute](/iaas/Content/Compute/Concepts/computeoverview.htm), and
[Block Volume](/iaas/Content/Block/Concepts/overview.htm) services.

 * OpenAPI spec version: 20160918
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
 * An Emulated volume attachment.
 */
export interface EmulatedVolumeAttachment extends model.VolumeAttachment {
  "attachmentType": string;
}

export namespace EmulatedVolumeAttachment {
  export function getJsonObj(obj: EmulatedVolumeAttachment, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VolumeAttachment.getJsonObj(obj) as EmulatedVolumeAttachment)),
      ...{}
    };

    return jsonObj;
  }
  export const attachmentType = "emulated";
  export function getDeserializedJsonObj(
    obj: EmulatedVolumeAttachment,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.VolumeAttachment.getDeserializedJsonObj(obj) as EmulatedVolumeAttachment)),
      ...{}
    };

    return jsonObj;
  }
}
