export class AuthenticationDetailsProvider {
  /**
   * Construct an instance of [[AuthenticationDetailsProvider]].
   * @param tenancy   tenancy id.
   * @param user  user id.
   * @param fingerprint   user's fingerprint.
   * @param privateKey    private key to sign the request.
   */
  constructor(
    private tenancy: string,
    private user: string,
    private fingerprint: string,
    private privateKey: string,
  ) {}

  /**
   * Get the key id to sign the http request.
   */
  public getKeyId(): string {
    return this.tenancy + "/" + this.user + "/" + this.fingerprint;
  }

  /**
   * Get the private key to sign the http request.
   */
  public getPrivateKey(): string {
    return this.privateKey;
  }


  /**
   * Get the Tenancy
   */
  public getTenantId(): string {
    return this.tenancy;
  }

  /**
   * Get the user
   */
  public getUser(): string {
    return this.user;
  }

  /**
   * Get the fingerprint
   */
  public getFingerprint(): string {
    return this.fingerprint;
  }

}
