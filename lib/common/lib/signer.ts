import { AuthenticationDetailsProvider } from "./auth";




export class OracleCloudAPIWebRequestSigner {
  private static readonly headersToSign = ["x-date", "host"];
  private static readonly methodsThatRequireExtraHeaders = ["POST", "PUT", "PATCH"];
  private privateKey: CryptoKey | null = null;
  private pemPrivateKey: string = "";

  /**
   * Construct an instance of [[DefaultRequestSigner]].
   * @param authenticationDetailsProvider the authentication details provider.
   */
  constructor(private authenticationDetailsProvider: AuthenticationDetailsProvider) {

    this.pemPrivateKey = this.authenticationDetailsProvider.getPrivateKey();
  }

  /**
   * Sign the http request.
   * @param request http request.
   * @param forceExcludeBody exclude body or not.
   */
  async signHttpRequest(request: Request, requestBody?: Uint8Array) {

    const url = new URL(request.url);

    request.headers.set("host", url.hostname);

    request.headers.set("x-date", new Date().toUTCString());

    var headersToSign = [...OracleCloudAPIWebRequestSigner.headersToSign];

    if (OracleCloudAPIWebRequestSigner.methodsThatRequireExtraHeaders.indexOf(request.method.toUpperCase()) > 0) {

      if (!request.headers.has(HEADER_CONTENT_TYPE)) {
        request.headers.set(HEADER_CONTENT_TYPE, "application/json");
      }

      if (requestBody && requestBody.length > 0) {
        const hash = await crypto.subtle.digest("SHA-256", requestBody);
        const b64hash = base64(hash);
        request.headers.set(HEADER_CONTENT_SHA, b64hash);
        request.headers.set(HEADER_CONTENT_LEN, `${ requestBody.length }`)
      } else {
        // if buffer is empty, it can only be an empty string payload
        request.headers.set(HEADER_CONTENT_SHA, EMPTY_SHA);
        request.headers.set(HEADER_CONTENT_LEN, `0`);
      }

      headersToSign = headersToSign.concat(
        HEADER_CONTENT_TYPE,
        HEADER_CONTENT_LEN,
        HEADER_CONTENT_SHA
      );
    }

    const keyId = await this.authenticationDetailsProvider.getKeyId();

    // Check if privateKey exists or if the authenticationDetailsProvider's private key have changed.
    let authPrivateKey = this.authenticationDetailsProvider.getPrivateKey();
    if (authPrivateKey && (!this.privateKey || this.pemPrivateKey !== authPrivateKey)) {
      this.pemPrivateKey = authPrivateKey;
      this.privateKey = await parsePrivateKey(authPrivateKey);
    }
/*
    this.sign(request, {
      key: this.privateKey,
      keyId,
      headers: headersToSign
    });
*/

    if(!this.privateKey) throw new Error("Private key is missing.");

    const stringToSign = "";

    const signature = await crypto.subtle.sign("rsa", this.privateKey, new TextEncoder().encode(stringToSign));

    const signatureBase64 = base64(signature);

    const authorizationHeader = `Signature version="1",keyId="${ keyId }",algorithm="rsa",headers="${ headersToSign.join(' ') }",signature="${ signatureBase64 }"`;

    request.headers.set("authorization", authorizationHeader);
  }
}