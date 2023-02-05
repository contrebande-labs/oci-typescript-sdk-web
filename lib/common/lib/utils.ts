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

export function base64(buf: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
export async function parsePrivateKey(pem: String) {
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