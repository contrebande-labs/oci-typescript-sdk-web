/**
 * Copyright (c) 2020, 2021 Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */


import { RequestSigner } from "./signer";
import { HttpRequest } from "./http-request";
import { getSignerAndReqBody } from "./helper";


export interface HttpClient {
  send(
    req: HttpRequest,
    forceExcludeBody?: boolean,
    targetService?: string,
    operationName?: string,
    timestamp?: string,
    endpoint?: string,
    apiReferenceLink?: string
  ): Promise<Response>;
}

export class FetchHttpClient implements HttpClient {
  private httpOptions: { [key: string]: any } | undefined = undefined;

  constructor(
    private readonly signer: RequestSigner | null,
    httpOptions?: { [key: string]: any } | undefined
  ) {

    if (httpOptions) this.httpOptions = httpOptions;
  }

  public async send(
    req: HttpRequest,
    forceExcludeBody: boolean = false,
    targetService: string = "",
    operationName: string = "",
    timestamp: string = new Date().toISOString(),
    endpoint: string = "",
    apiReferenceLink: string = ""
  ): Promise<Response> {
    // Get Request body
    const body = getSignerAndReqBody(req.body, forceExcludeBody);
    // Sign Request
    if (this.signer) {
      await this.signer.signHttpRequest(
        {
          method: req.method,
          headers: req.headers,
          uri: req.uri,
          body: body.signerBody
        },
        forceExcludeBody
      );
    }
    const request = new Request(req.uri, {
      method: req.method,
      headers: req.headers,
      body: body.requestBody
    });

    // Need to convert to type RequestInit for Fetch() type compatibility
    let options: RequestInit = (this.httpOptions as unknown) as RequestInit;

    return options ? fetch(request, options) : fetch(request);
  }
}
