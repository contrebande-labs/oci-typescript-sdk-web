/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

/* This utility adds extra headers to each request before being sent over wire*/

import { version } from "../package.json";
import { v1 } from "uuid";

const OPC_REQUEST_ID_HEADER: string = "opc-request-id";
const BROWSER_USER_AGENT_HEADER: string = "X-Orcl-User-Agent";

export function addOpcRequestId(headers: Headers) {
  // if user has not passed opc-request-id
  if (!hasOpcRequestId(headers)) {
    headers.append(OPC_REQUEST_ID_HEADER, generateRequestId());
  }
}

function hasOpcRequestId(headers: Headers) {
  if (headers.has(OPC_REQUEST_ID_HEADER)) {
    return true;
  }
  return false;
}

function generateRequestId() {
  return v1()
    .replace("-", "")
    .toLocaleUpperCase("en-US");
}

export function addUserAgent(headers: Headers) {
  const clientInfo = `Oracle-TypeScriptSDK/${version}`;
  headers.append(BROWSER_USER_AGENT_HEADER, clientInfo);
}

