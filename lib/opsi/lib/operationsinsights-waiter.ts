/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { OperationsInsightsClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class OperationsInsightsWaiter {
  public constructor(
    private client: OperationsInsightsClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAwrHub till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAwrHubResponse | null (null in case of 404 response)
   */
  public async forAwrHub(
    request: serviceRequests.GetAwrHubRequest,
    ...targetStates: models.AwrHubLifecycleState[]
  ): Promise<serviceResponses.GetAwrHubResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAwrHub(request),
      response => targetStates.includes(response.awrHub.lifecycleState!),
      targetStates.includes(models.AwrHubLifecycleState.Deleted)
    );
  }

  /**
   * Waits forDatabaseInsight till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDatabaseInsightResponse | null (null in case of 404 response)
   */
  public async forDatabaseInsight(
    request: serviceRequests.GetDatabaseInsightRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDatabaseInsightResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDatabaseInsight(request),
      response => targetStates.includes(response.databaseInsight.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forEnterpriseManagerBridge till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetEnterpriseManagerBridgeResponse | null (null in case of 404 response)
   */
  public async forEnterpriseManagerBridge(
    request: serviceRequests.GetEnterpriseManagerBridgeRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetEnterpriseManagerBridgeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getEnterpriseManagerBridge(request),
      response => targetStates.includes(response.enterpriseManagerBridge.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forExadataInsight till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetExadataInsightResponse | null (null in case of 404 response)
   */
  public async forExadataInsight(
    request: serviceRequests.GetExadataInsightRequest,
    ...targetStates: models.ExadataInsightLifecycleState[]
  ): Promise<serviceResponses.GetExadataInsightResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getExadataInsight(request),
      response => targetStates.includes(response.exadataInsight.lifecycleState!),
      targetStates.includes(models.ExadataInsightLifecycleState.Deleted)
    );
  }

  /**
   * Waits forHostInsight till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetHostInsightResponse | null (null in case of 404 response)
   */
  public async forHostInsight(
    request: serviceRequests.GetHostInsightRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetHostInsightResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getHostInsight(request),
      response => targetStates.includes(response.hostInsight.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forOperationsInsightsPrivateEndpoint till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOperationsInsightsPrivateEndpointResponse | null (null in case of 404 response)
   */
  public async forOperationsInsightsPrivateEndpoint(
    request: serviceRequests.GetOperationsInsightsPrivateEndpointRequest,
    ...targetStates: models.OperationsInsightsPrivateEndpointLifecycleState[]
  ): Promise<serviceResponses.GetOperationsInsightsPrivateEndpointResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOperationsInsightsPrivateEndpoint(request),
      response => targetStates.includes(response.operationsInsightsPrivateEndpoint.lifecycleState!),
      targetStates.includes(models.OperationsInsightsPrivateEndpointLifecycleState.Deleted)
    );
  }

  /**
   * Waits forOperationsInsightsWarehouse till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOperationsInsightsWarehouseResponse | null (null in case of 404 response)
   */
  public async forOperationsInsightsWarehouse(
    request: serviceRequests.GetOperationsInsightsWarehouseRequest,
    ...targetStates: models.OperationsInsightsWarehouseLifecycleState[]
  ): Promise<serviceResponses.GetOperationsInsightsWarehouseResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOperationsInsightsWarehouse(request),
      response => targetStates.includes(response.operationsInsightsWarehouse.lifecycleState!),
      targetStates.includes(models.OperationsInsightsWarehouseLifecycleState.Deleted)
    );
  }

  /**
   * Waits forOperationsInsightsWarehouseUser till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetOperationsInsightsWarehouseUserResponse | null (null in case of 404 response)
   */
  public async forOperationsInsightsWarehouseUser(
    request: serviceRequests.GetOperationsInsightsWarehouseUserRequest,
    ...targetStates: models.OperationsInsightsWarehouseUserLifecycleState[]
  ): Promise<serviceResponses.GetOperationsInsightsWarehouseUserResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getOperationsInsightsWarehouseUser(request),
      response => targetStates.includes(response.operationsInsightsWarehouseUser.lifecycleState!),
      targetStates.includes(models.OperationsInsightsWarehouseUserLifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
