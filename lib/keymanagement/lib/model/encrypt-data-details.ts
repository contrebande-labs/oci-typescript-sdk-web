/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

export interface EncryptDataDetails {
  /**
   * Information that can be used to provide an encryption context for the
   * encrypted data. The length of the string representation of the associated data
   * must be fewer than 4096 characters.
   *
   */
  "associatedData"?: { [key: string]: string };
  /**
   * The OCID of the key to encrypt with.
   */
  "keyId": string;
  /**
   * Information that provides context for audit logging. You can provide this additional
   * data as key-value pairs to include in the audit logs when audit logging is enabled.
   *
   */
  "loggingContext"?: { [key: string]: string };
  /**
   * The plaintext data to encrypt.
   */
  "plaintext": string;
  /**
   * The OCID of the key version used to encrypt the ciphertext.
   */
  "keyVersionId"?: string;
  /**
   * The encryption algorithm to use to encrypt and decrypt data with a customer-managed key.
   * `AES_256_GCM` indicates that the key is a symmetric key that uses the Advanced Encryption Standard (AES) algorithm and
   * that the mode of encryption is the Galois/Counter Mode (GCM). `RSA_OAEP_SHA_1` indicates that the
   * key is an asymmetric key that uses the RSA encryption algorithm and uses Optimal Asymmetric Encryption Padding (OAEP).
   * `RSA_OAEP_SHA_256` indicates that the key is an asymmetric key that uses the RSA encryption algorithm with a SHA-256 hash
   * and uses OAEP.
   *
   */
  "encryptionAlgorithm"?: EncryptDataDetails.EncryptionAlgorithm;
}

export namespace EncryptDataDetails {
  export enum EncryptionAlgorithm {
    Aes256Gcm = "AES_256_GCM",
    RsaOaepSha1 = "RSA_OAEP_SHA_1",
    RsaOaepSha256 = "RSA_OAEP_SHA_256"
  }

  export function getJsonObj(obj: EncryptDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: EncryptDataDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
