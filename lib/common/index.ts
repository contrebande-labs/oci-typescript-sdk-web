import { AuthenticationDetailsProvider } from "./lib/auth";

const HEADER_CONTENT_SHA = "x-content-sha256";
const HEADER_CONTENT_LEN = "Content-Length";
const HEADER_CONTENT_TYPE = "Content-Type";
const EMPTY_SHA = "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=";



/*
Convert a string into an ArrayBuffer
from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
*/
function str2ab(str: string) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

function base64(buf: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
async function parsePrivateKey(pem: String) {
  // fetch the part of the PEM string between header and footer
  const pemContents = pem
  .replaceAll("-----BEGIN PRIVATE KEY-----", "")
  .replaceAll("-----END PRIVATE KEY-----", "")
  .trim().replaceAll(" ", "").replaceAll("\n", "").trim();
 
  // base64 decode the string to get the binary data
  const binaryDerString = window.atob(pemContents);
 
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return await window.crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    {
      name: "RSA-PSS",
      hash: "SHA-256",
    },
    true,
    ["sign"]
  );
}


class OracleCloudAPIRequestSigner {
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

    var headersToSign = [...OracleCloudAPIRequestSigner.headersToSign];

    if (OracleCloudAPIRequestSigner.methodsThatRequireExtraHeaders.indexOf(request.method.toUpperCase()) > 0) {

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

export { AuthenticationDetailsProvider, OracleCloudAPIRequestSigner };