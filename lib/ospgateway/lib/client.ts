/**
 * OSP Gateway API
 * This site describes all the Rest endpoints of OSP Gateway.
 * OpenAPI spec version: 20191001
 * Contact: osp_team_oci_cam_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import common = require("oci-common");
import * as requests from "./request";
import * as model from "./model";
import * as responses from "./response";
import { composeResponse, composeRequest, GenericRetrier } from "oci-common";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum InvoiceServiceApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class InvoiceServiceClient {
  protected static serviceEndpointTemplate = "https://ospap.oracle.com";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "InvoiceService";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20191001";
    if (this.logger) this.logger.info(`InvoiceServiceClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      InvoiceServiceClient.serviceEndpointTemplate,
      region,
      InvoiceServiceClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      InvoiceServiceClient.serviceEndpointTemplate,
      regionId,
      InvoiceServiceClient.endpointServiceName
    );
  }

  /**
   * Returns an invoice in pdf format
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param DownloadPdfContentRequest
   * @return DownloadPdfContentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/DownloadPdfContent.ts.html |here} to see how to use DownloadPdfContent API.
   */
  public async downloadPdfContent(
    downloadPdfContentRequest: requests.DownloadPdfContentRequest
  ): Promise<responses.DownloadPdfContentResponse> {
    if (this.logger)
      this.logger.debug("Calling operation InvoiceServiceClient#downloadPdfContent.");
    const operationName = "downloadPdfContent";
    const apiReferenceLink = "";
    const pathParams = {
      "{internalInvoiceId}": downloadPdfContentRequest.internalInvoiceId
    };

    const queryParams = {
      "ospHomeRegion": downloadPdfContentRequest.ospHomeRegion,
      "compartmentId": downloadPdfContentRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": downloadPdfContentRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      downloadPdfContentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/invoices/{internalInvoiceId}/actions/downloadPdfContent",
      method: "POST",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.DownloadPdfContentResponse>{},

        body: response.body!,
        bodyKey: "value",
        bodyModel: "string",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("Content-Disposition"),
            key: "contentDisposition",
            dataType: "string"
          },
          {
            value: response.headers.get("Content-Type"),
            key: "contentType",
            dataType: "string"
          },
          {
            value: response.headers.get("Content-Length"),
            key: "contentLength",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns an invoice by invoice id
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetInvoiceRequest
   * @return GetInvoiceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/GetInvoice.ts.html |here} to see how to use GetInvoice API.
   */
  public async getInvoice(
    getInvoiceRequest: requests.GetInvoiceRequest
  ): Promise<responses.GetInvoiceResponse> {
    if (this.logger) this.logger.debug("Calling operation InvoiceServiceClient#getInvoice.");
    const operationName = "getInvoice";
    const apiReferenceLink = "";
    const pathParams = {
      "{internalInvoiceId}": getInvoiceRequest.internalInvoiceId
    };

    const queryParams = {
      "ospHomeRegion": getInvoiceRequest.ospHomeRegion,
      "compartmentId": getInvoiceRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getInvoiceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getInvoiceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/invoices/{internalInvoiceId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetInvoiceResponse>{},
        body: await response.json(),
        bodyKey: "invoice",
        bodyModel: model.Invoice,
        type: "model.Invoice",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns the invoice product list by invoice id
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListInvoiceLinesRequest
   * @return ListInvoiceLinesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/ListInvoiceLines.ts.html |here} to see how to use ListInvoiceLines API.
   */
  public async listInvoiceLines(
    listInvoiceLinesRequest: requests.ListInvoiceLinesRequest
  ): Promise<responses.ListInvoiceLinesResponse> {
    if (this.logger) this.logger.debug("Calling operation InvoiceServiceClient#listInvoiceLines.");
    const operationName = "listInvoiceLines";
    const apiReferenceLink = "";
    const pathParams = {
      "{internalInvoiceId}": listInvoiceLinesRequest.internalInvoiceId
    };

    const queryParams = {
      "ospHomeRegion": listInvoiceLinesRequest.ospHomeRegion,
      "compartmentId": listInvoiceLinesRequest.compartmentId,
      "page": listInvoiceLinesRequest.page,
      "limit": listInvoiceLinesRequest.limit
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listInvoiceLinesRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listInvoiceLinesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/invoices/{internalInvoiceId}/invoiceLines",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListInvoiceLinesResponse>{},
        body: await response.json(),
        bodyKey: "invoiceLineCollection",
        bodyModel: model.InvoiceLineCollection,
        type: "model.InvoiceLineCollection",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-total-items"),
            key: "opcTotalItems",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Returns a list of invoices
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListInvoicesRequest
   * @return ListInvoicesResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/ListInvoices.ts.html |here} to see how to use ListInvoices API.
   */
  public async listInvoices(
    listInvoicesRequest: requests.ListInvoicesRequest
  ): Promise<responses.ListInvoicesResponse> {
    if (this.logger) this.logger.debug("Calling operation InvoiceServiceClient#listInvoices.");
    const operationName = "listInvoices";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "ospHomeRegion": listInvoicesRequest.ospHomeRegion,
      "compartmentId": listInvoicesRequest.compartmentId,
      "invoiceId": listInvoicesRequest.invoiceId,
      "type": listInvoicesRequest.type,
      "searchText": listInvoicesRequest.searchText,
      "timeInvoiceStart": listInvoicesRequest.timeInvoiceStart,
      "timeInvoiceEnd": listInvoicesRequest.timeInvoiceEnd,
      "timePaymentStart": listInvoicesRequest.timePaymentStart,
      "timePaymentEnd": listInvoicesRequest.timePaymentEnd,
      "status": listInvoicesRequest.status,
      "page": listInvoicesRequest.page,
      "limit": listInvoicesRequest.limit,
      "sortBy": listInvoicesRequest.sortBy,
      "sortOrder": listInvoicesRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listInvoicesRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listInvoicesRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/invoices",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListInvoicesResponse>{},
        body: await response.json(),
        bodyKey: "invoiceCollection",
        bodyModel: model.InvoiceCollection,
        type: "model.InvoiceCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-total-items"),
            key: "opcTotalItems",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Pay an invoice
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param PayInvoiceRequest
   * @return PayInvoiceResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/PayInvoice.ts.html |here} to see how to use PayInvoice API.
   */
  public async payInvoice(
    payInvoiceRequest: requests.PayInvoiceRequest
  ): Promise<responses.PayInvoiceResponse> {
    if (this.logger) this.logger.debug("Calling operation InvoiceServiceClient#payInvoice.");
    const operationName = "payInvoice";
    const apiReferenceLink = "";
    const pathParams = {
      "{internalInvoiceId}": payInvoiceRequest.internalInvoiceId
    };

    const queryParams = {
      "ospHomeRegion": payInvoiceRequest.ospHomeRegion,
      "compartmentId": payInvoiceRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": payInvoiceRequest.ifMatch,
      "opc-retry-token": payInvoiceRequest.opcRetryToken,
      "opc-request-id": payInvoiceRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      payInvoiceRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/invoices/{internalInvoiceId}/actions/pay",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        payInvoiceRequest.payInvoiceDetails,
        "PayInvoiceDetails",
        model.PayInvoiceDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.PayInvoiceResponse>{},
        body: await response.json(),
        bodyKey: "payInvoiceReceipt",
        bodyModel: model.PayInvoiceReceipt,
        type: "model.PayInvoiceReceipt",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
export enum SubscriptionServiceApiKeys {}
/**
 * This service client uses {@link common.CircuitBreaker.DefaultConfiguration} for all the operations by default if no circuit breaker configuration is defined by the user.
 */
export class SubscriptionServiceClient {
  protected static serviceEndpointTemplate = "https://ospap.oracle.com";
  protected static endpointServiceName = "";
  protected "_endpoint": string = "";
  protected "_defaultHeaders": any = {};
  protected "_clientConfiguration": common.ClientConfiguration;
  protected _circuitBreaker = null;
  protected _httpOptions: any = undefined;
  public targetService = "SubscriptionService";

  protected _httpClient: common.HttpClient;

  constructor(params: common.AuthParams, clientConfiguration?: common.ClientConfiguration) {
    const requestSigner = params.authenticationDetailsProvider
      ? new common.DefaultRequestSigner(params.authenticationDetailsProvider)
      : null;
    if (clientConfiguration) {
      this._clientConfiguration = clientConfiguration;
      this._circuitBreaker = clientConfiguration.circuitBreaker
        ? clientConfiguration.circuitBreaker!.circuit
        : null;
      this._httpOptions = clientConfiguration.httpOptions
        ? clientConfiguration.httpOptions
        : undefined;
    }
    // if circuit breaker is not created, check if circuit breaker system is enabled to use default circuit breaker
    const specCircuitBreakerEnabled = true;
    if (
      !this._circuitBreaker &&
      common.utils.isCircuitBreakerSystemEnabled(clientConfiguration!) &&
      (specCircuitBreakerEnabled || common.CircuitBreaker.DefaultCircuitBreakerOverriden)
    ) {
      this._circuitBreaker = new common.CircuitBreaker().circuit;
    }
    this._httpClient =
      params.httpClient ||
      new common.FetchHttpClient(requestSigner, this._circuitBreaker, this._httpOptions);

    if (
      params.authenticationDetailsProvider &&
      common.isRegionProvider(params.authenticationDetailsProvider)
    ) {
      const provider: common.RegionProvider = params.authenticationDetailsProvider;
      if (provider.getRegion()) {
        this.region = provider.getRegion();
      }
    }
  }

  /**
   * Get the endpoint that is being used to call (ex, https://www.example.com).
   */
  public get endpoint() {
    return this._endpoint;
  }

  /**
   * Sets the endpoint to call (ex, https://www.example.com).
   * @param endpoint The endpoint of the service.
   */
  public set endpoint(endpoint: string) {
    this._endpoint = endpoint;
    this._endpoint = this._endpoint + "/20191001";
    if (this.logger)
      this.logger.info(`SubscriptionServiceClient endpoint set to ${this._endpoint}`);
  }

  public get logger() {
    return common.LOG.logger;
  }

  /**
   * Sets the region to call (ex, Region.US_PHOENIX_1).
   * Note, this will call {@link #endpoint(String) endpoint} after resolving the endpoint.
   * @param region The region of the service.
   */
  public set region(region: common.Region) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegion(
      SubscriptionServiceClient.serviceEndpointTemplate,
      region,
      SubscriptionServiceClient.endpointServiceName
    );
  }

  /**
   * Sets the regionId to call (ex, 'us-phoenix-1').
   *
   * Note, this will first try to map the region ID to a known Region and call {@link #region(Region) region}.
   * If no known Region could be determined, it will create an endpoint assuming its in default Realm OC1
   * and then call {@link #endpoint(String) endpoint}.
   * @param regionId The public region ID.
   */
  public set regionId(regionId: string) {
    this.endpoint = common.EndpointBuilder.createEndpointFromRegionId(
      SubscriptionServiceClient.serviceEndpointTemplate,
      regionId,
      SubscriptionServiceClient.endpointServiceName
    );
  }

  /**
   * PSD2 authorization for subscription payment
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param AuthorizeSubscriptionPaymentRequest
   * @return AuthorizeSubscriptionPaymentResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/AuthorizeSubscriptionPayment.ts.html |here} to see how to use AuthorizeSubscriptionPayment API.
   */
  public async authorizeSubscriptionPayment(
    authorizeSubscriptionPaymentRequest: requests.AuthorizeSubscriptionPaymentRequest
  ): Promise<responses.AuthorizeSubscriptionPaymentResponse> {
    if (this.logger)
      this.logger.debug(
        "Calling operation SubscriptionServiceClient#authorizeSubscriptionPayment."
      );
    const operationName = "authorizeSubscriptionPayment";
    const apiReferenceLink = "";
    const pathParams = {
      "{subscriptionId}": authorizeSubscriptionPaymentRequest.subscriptionId
    };

    const queryParams = {
      "ospHomeRegion": authorizeSubscriptionPaymentRequest.ospHomeRegion,
      "compartmentId": authorizeSubscriptionPaymentRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": authorizeSubscriptionPaymentRequest.ifMatch,
      "opc-retry-token": authorizeSubscriptionPaymentRequest.opcRetryToken,
      "opc-request-id": authorizeSubscriptionPaymentRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      authorizeSubscriptionPaymentRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/actions/psd2auth",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        authorizeSubscriptionPaymentRequest.authorizeSubscriptionPaymentDetails,
        "AuthorizeSubscriptionPaymentDetails",
        model.AuthorizeSubscriptionPaymentDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.AuthorizeSubscriptionPaymentResponse>{},
        body: await response.json(),
        bodyKey: "authorizeSubscriptionPaymentReceipt",
        bodyModel: model.AuthorizeSubscriptionPaymentReceipt,
        type: "model.AuthorizeSubscriptionPaymentReceipt",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get the subscription plan.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param GetSubscriptionRequest
   * @return GetSubscriptionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/GetSubscription.ts.html |here} to see how to use GetSubscription API.
   */
  public async getSubscription(
    getSubscriptionRequest: requests.GetSubscriptionRequest
  ): Promise<responses.GetSubscriptionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation SubscriptionServiceClient#getSubscription.");
    const operationName = "getSubscription";
    const apiReferenceLink = "";
    const pathParams = {
      "{subscriptionId}": getSubscriptionRequest.subscriptionId
    };

    const queryParams = {
      "ospHomeRegion": getSubscriptionRequest.ospHomeRegion,
      "compartmentId": getSubscriptionRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": getSubscriptionRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      getSubscriptionRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.GetSubscriptionResponse>{},
        body: await response.json(),
        bodyKey: "subscription",
        bodyModel: model.Subscription,
        type: "model.Subscription",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Get the subscription data for the compartment
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param ListSubscriptionsRequest
   * @return ListSubscriptionsResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/ListSubscriptions.ts.html |here} to see how to use ListSubscriptions API.
   */
  public async listSubscriptions(
    listSubscriptionsRequest: requests.ListSubscriptionsRequest
  ): Promise<responses.ListSubscriptionsResponse> {
    if (this.logger)
      this.logger.debug("Calling operation SubscriptionServiceClient#listSubscriptions.");
    const operationName = "listSubscriptions";
    const apiReferenceLink = "";
    const pathParams = {};

    const queryParams = {
      "ospHomeRegion": listSubscriptionsRequest.ospHomeRegion,
      "compartmentId": listSubscriptionsRequest.compartmentId,
      "page": listSubscriptionsRequest.page,
      "limit": listSubscriptionsRequest.limit,
      "sortBy": listSubscriptionsRequest.sortBy,
      "sortOrder": listSubscriptionsRequest.sortOrder
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": listSubscriptionsRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      listSubscriptionsRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions",
      method: "GET",
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.ListSubscriptionsResponse>{},
        body: await response.json(),
        bodyKey: "subscriptionCollection",
        bodyModel: model.SubscriptionCollection,
        type: "model.SubscriptionCollection",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-next-page"),
            key: "opcNextPage",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-total-items"),
            key: "opcTotalItems",
            dataType: "number"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Pay a subscription
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param PaySubscriptionRequest
   * @return PaySubscriptionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/PaySubscription.ts.html |here} to see how to use PaySubscription API.
   */
  public async paySubscription(
    paySubscriptionRequest: requests.PaySubscriptionRequest
  ): Promise<responses.PaySubscriptionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation SubscriptionServiceClient#paySubscription.");
    const operationName = "paySubscription";
    const apiReferenceLink = "";
    const pathParams = {
      "{subscriptionId}": paySubscriptionRequest.subscriptionId
    };

    const queryParams = {
      "ospHomeRegion": paySubscriptionRequest.ospHomeRegion,
      "compartmentId": paySubscriptionRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "if-match": paySubscriptionRequest.ifMatch,
      "opc-retry-token": paySubscriptionRequest.opcRetryToken,
      "opc-request-id": paySubscriptionRequest.opcRequestId
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      paySubscriptionRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}/actions/pay",
      method: "POST",
      bodyContent: common.ObjectSerializer.serialize(
        paySubscriptionRequest.paySubscriptionDetails,
        "PaySubscriptionDetails",
        model.PaySubscriptionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.PaySubscriptionResponse>{},
        body: await response.json(),
        bodyKey: "paySubscriptionReceipt",
        bodyModel: model.PaySubscriptionReceipt,
        type: "model.PaySubscriptionReceipt",
        responseHeaders: [
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          },
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Update plan of the subscription.
   * This operation does not retry by default if the user has not defined a retry configuration.
   * @param UpdateSubscriptionRequest
   * @return UpdateSubscriptionResponse
   * @throws OciError when an error occurs
   * @example Click {@link https://docs.cloud.oracle.com/en-us/iaas/tools/typescript-sdk-examples/latest/ospgateway/UpdateSubscription.ts.html |here} to see how to use UpdateSubscription API.
   */
  public async updateSubscription(
    updateSubscriptionRequest: requests.UpdateSubscriptionRequest
  ): Promise<responses.UpdateSubscriptionResponse> {
    if (this.logger)
      this.logger.debug("Calling operation SubscriptionServiceClient#updateSubscription.");
    const operationName = "updateSubscription";
    const apiReferenceLink = "";
    const pathParams = {
      "{subscriptionId}": updateSubscriptionRequest.subscriptionId
    };

    const queryParams = {
      "ospHomeRegion": updateSubscriptionRequest.ospHomeRegion,
      "compartmentId": updateSubscriptionRequest.compartmentId
    };

    let headerParams = {
      "Content-Type": common.Constants.APPLICATION_JSON,
      "opc-request-id": updateSubscriptionRequest.opcRequestId,
      "if-match": updateSubscriptionRequest.ifMatch
    };

    const specRetryConfiguration = common.NoRetryConfigurationDetails;
    const retrier = GenericRetrier.createPreferredRetrier(
      this._clientConfiguration ? this._clientConfiguration.retryConfiguration : undefined,
      updateSubscriptionRequest.retryConfiguration,
      specRetryConfiguration
    );
    if (this.logger) retrier.logger = this.logger;
    const request = await composeRequest({
      baseEndpoint: this._endpoint,
      defaultHeaders: this._defaultHeaders,
      path: "/subscriptions/{subscriptionId}",
      method: "PUT",
      bodyContent: common.ObjectSerializer.serialize(
        updateSubscriptionRequest.updateSubscriptionDetails,
        "UpdateSubscriptionDetails",
        model.UpdateSubscriptionDetails.getJsonObj
      ),
      pathParams: pathParams,
      headerParams: headerParams,
      queryParams: queryParams
    });
    try {
      const response = await retrier.makeServiceCall(
        this._httpClient,
        request,
        this.targetService,
        operationName,
        apiReferenceLink
      );
      const sdkResponse = composeResponse({
        responseObject: <responses.UpdateSubscriptionResponse>{},
        body: await response.json(),
        bodyKey: "subscription",
        bodyModel: model.Subscription,
        type: "model.Subscription",
        responseHeaders: [
          {
            value: response.headers.get("etag"),
            key: "etag",
            dataType: "string"
          },
          {
            value: response.headers.get("opc-request-id"),
            key: "opcRequestId",
            dataType: "string"
          }
        ]
      });

      return sdkResponse;
    } catch (err) {
      throw err;
    }
  }
}
