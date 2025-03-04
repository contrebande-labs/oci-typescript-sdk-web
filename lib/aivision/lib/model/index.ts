/**
 * Vision API
 * Using Vision, you can upload images to detect and classify objects in them. If you have lots of images, you can process them in batch using asynchronous API endpoints. Vision's features are thematically split between Document AI for document-centric images, and Image Analysis for object and scene-based images. Pretrained models and custom models are supported.
 * OpenAPI spec version: 20220125
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as ActionType from "./action-type";
export import ActionType = ActionType.ActionType;
import * as AnalyzeDocumentDetails from "./analyze-document-details";
export import AnalyzeDocumentDetails = AnalyzeDocumentDetails.AnalyzeDocumentDetails;
import * as AnalyzeDocumentResult from "./analyze-document-result";
export import AnalyzeDocumentResult = AnalyzeDocumentResult.AnalyzeDocumentResult;
import * as AnalyzeImageDetails from "./analyze-image-details";
export import AnalyzeImageDetails = AnalyzeImageDetails.AnalyzeImageDetails;
import * as AnalyzeImageResult from "./analyze-image-result";
export import AnalyzeImageResult = AnalyzeImageResult.AnalyzeImageResult;
import * as BoundingPolygon from "./bounding-polygon";
export import BoundingPolygon = BoundingPolygon.BoundingPolygon;
import * as Cell from "./cell";
export import Cell = Cell.Cell;
import * as ChangeModelCompartmentDetails from "./change-model-compartment-details";
export import ChangeModelCompartmentDetails = ChangeModelCompartmentDetails.ChangeModelCompartmentDetails;
import * as ChangeProjectCompartmentDetails from "./change-project-compartment-details";
export import ChangeProjectCompartmentDetails = ChangeProjectCompartmentDetails.ChangeProjectCompartmentDetails;
import * as CreateDocumentJobDetails from "./create-document-job-details";
export import CreateDocumentJobDetails = CreateDocumentJobDetails.CreateDocumentJobDetails;
import * as CreateImageJobDetails from "./create-image-job-details";
export import CreateImageJobDetails = CreateImageJobDetails.CreateImageJobDetails;
import * as CreateModelDetails from "./create-model-details";
export import CreateModelDetails = CreateModelDetails.CreateModelDetails;
import * as CreateProjectDetails from "./create-project-details";
export import CreateProjectDetails = CreateProjectDetails.CreateProjectDetails;
import * as Dataset from "./dataset";
export import Dataset = Dataset.Dataset;
import * as DetectedDocumentType from "./detected-document-type";
export import DetectedDocumentType = DetectedDocumentType.DetectedDocumentType;
import * as DetectedLanguage from "./detected-language";
export import DetectedLanguage = DetectedLanguage.DetectedLanguage;
import * as Dimensions from "./dimensions";
export import Dimensions = Dimensions.Dimensions;
import * as DocumentDetails from "./document-details";
export import DocumentDetails = DocumentDetails.DocumentDetails;
import * as DocumentFeature from "./document-feature";
export import DocumentFeature = DocumentFeature.DocumentFeature;
import * as DocumentField from "./document-field";
export import DocumentField = DocumentField.DocumentField;
import * as DocumentJob from "./document-job";
export import DocumentJob = DocumentJob.DocumentJob;
import * as DocumentLanguage from "./document-language";
export import DocumentLanguage = DocumentLanguage.DocumentLanguage;
import * as DocumentMetadata from "./document-metadata";
export import DocumentMetadata = DocumentMetadata.DocumentMetadata;
import * as DocumentType from "./document-type";
export import DocumentType = DocumentType.DocumentType;
import * as FieldLabel from "./field-label";
export import FieldLabel = FieldLabel.FieldLabel;
import * as FieldName from "./field-name";
export import FieldName = FieldName.FieldName;
import * as FieldValue from "./field-value";
export import FieldValue = FieldValue.FieldValue;
import * as ImageDetails from "./image-details";
export import ImageDetails = ImageDetails.ImageDetails;
import * as ImageFeature from "./image-feature";
export import ImageFeature = ImageFeature.ImageFeature;
import * as ImageJob from "./image-job";
export import ImageJob = ImageJob.ImageJob;
import * as ImageObject from "./image-object";
export import ImageObject = ImageObject.ImageObject;
import * as ImageText from "./image-text";
export import ImageText = ImageText.ImageText;
import * as InputLocation from "./input-location";
export import InputLocation = InputLocation.InputLocation;
import * as Label from "./label";
export import Label = Label.Label;
import * as Line from "./line";
export import Line = Line.Line;
import * as Model from "./model";
export import Model = Model.Model;
import * as ModelCollection from "./model-collection";
export import ModelCollection = ModelCollection.ModelCollection;
import * as ModelSummary from "./model-summary";
export import ModelSummary = ModelSummary.ModelSummary;
import * as NormalizedVertex from "./normalized-vertex";
export import NormalizedVertex = NormalizedVertex.NormalizedVertex;
import * as ObjectLocation from "./object-location";
export import ObjectLocation = ObjectLocation.ObjectLocation;
import * as OntologyClass from "./ontology-class";
export import OntologyClass = OntologyClass.OntologyClass;
import * as OperationStatus from "./operation-status";
export import OperationStatus = OperationStatus.OperationStatus;
import * as OperationType from "./operation-type";
export import OperationType = OperationType.OperationType;
import * as OutputLocation from "./output-location";
export import OutputLocation = OutputLocation.OutputLocation;
import * as Page from "./page";
export import Page = Page.Page;
import * as ProcessingError from "./processing-error";
export import ProcessingError = ProcessingError.ProcessingError;
import * as Project from "./project";
export import Project = Project.Project;
import * as ProjectCollection from "./project-collection";
export import ProjectCollection = ProjectCollection.ProjectCollection;
import * as ProjectSummary from "./project-summary";
export import ProjectSummary = ProjectSummary.ProjectSummary;
import * as SortOrder from "./sort-order";
export import SortOrder = SortOrder.SortOrder;
import * as Table from "./table";
export import Table = Table.Table;
import * as TableRow from "./table-row";
export import TableRow = TableRow.TableRow;
import * as UpdateModelDetails from "./update-model-details";
export import UpdateModelDetails = UpdateModelDetails.UpdateModelDetails;
import * as UpdateProjectDetails from "./update-project-details";
export import UpdateProjectDetails = UpdateProjectDetails.UpdateProjectDetails;
import * as Word from "./word";
export import Word = Word.Word;
import * as WorkRequest from "./work-request";
export import WorkRequest = WorkRequest.WorkRequest;
import * as WorkRequestError from "./work-request-error";
export import WorkRequestError = WorkRequestError.WorkRequestError;
import * as WorkRequestErrorCollection from "./work-request-error-collection";
export import WorkRequestErrorCollection = WorkRequestErrorCollection.WorkRequestErrorCollection;
import * as WorkRequestLogEntry from "./work-request-log-entry";
export import WorkRequestLogEntry = WorkRequestLogEntry.WorkRequestLogEntry;
import * as WorkRequestLogEntryCollection from "./work-request-log-entry-collection";
export import WorkRequestLogEntryCollection = WorkRequestLogEntryCollection.WorkRequestLogEntryCollection;
import * as WorkRequestResource from "./work-request-resource";
export import WorkRequestResource = WorkRequestResource.WorkRequestResource;
import * as WorkRequestSummary from "./work-request-summary";
export import WorkRequestSummary = WorkRequestSummary.WorkRequestSummary;
import * as WorkRequestSummaryCollection from "./work-request-summary-collection";
export import WorkRequestSummaryCollection = WorkRequestSummaryCollection.WorkRequestSummaryCollection;

import * as DataScienceLabelingDataset from "./data-science-labeling-dataset";
export import DataScienceLabelingDataset = DataScienceLabelingDataset.DataScienceLabelingDataset;
import * as DocumentClassificationFeature from "./document-classification-feature";
export import DocumentClassificationFeature = DocumentClassificationFeature.DocumentClassificationFeature;
import * as DocumentKeyValueDetectionFeature from "./document-key-value-detection-feature";
export import DocumentKeyValueDetectionFeature = DocumentKeyValueDetectionFeature.DocumentKeyValueDetectionFeature;
import * as DocumentLanguageClassificationFeature from "./document-language-classification-feature";
export import DocumentLanguageClassificationFeature = DocumentLanguageClassificationFeature.DocumentLanguageClassificationFeature;
import * as DocumentTableDetectionFeature from "./document-table-detection-feature";
export import DocumentTableDetectionFeature = DocumentTableDetectionFeature.DocumentTableDetectionFeature;
import * as DocumentTextDetectionFeature from "./document-text-detection-feature";
export import DocumentTextDetectionFeature = DocumentTextDetectionFeature.DocumentTextDetectionFeature;
import * as ImageClassificationFeature from "./image-classification-feature";
export import ImageClassificationFeature = ImageClassificationFeature.ImageClassificationFeature;
import * as ImageObjectDetectionFeature from "./image-object-detection-feature";
export import ImageObjectDetectionFeature = ImageObjectDetectionFeature.ImageObjectDetectionFeature;
import * as ImageTextDetectionFeature from "./image-text-detection-feature";
export import ImageTextDetectionFeature = ImageTextDetectionFeature.ImageTextDetectionFeature;
import * as InlineDocumentDetails from "./inline-document-details";
export import InlineDocumentDetails = InlineDocumentDetails.InlineDocumentDetails;
import * as InlineImageDetails from "./inline-image-details";
export import InlineImageDetails = InlineImageDetails.InlineImageDetails;
import * as ObjectListInlineInputLocation from "./object-list-inline-input-location";
export import ObjectListInlineInputLocation = ObjectListInlineInputLocation.ObjectListInlineInputLocation;
import * as ObjectStorageDataset from "./object-storage-dataset";
export import ObjectStorageDataset = ObjectStorageDataset.ObjectStorageDataset;
import * as ObjectStorageDocumentDetails from "./object-storage-document-details";
export import ObjectStorageDocumentDetails = ObjectStorageDocumentDetails.ObjectStorageDocumentDetails;
import * as ObjectStorageImageDetails from "./object-storage-image-details";
export import ObjectStorageImageDetails = ObjectStorageImageDetails.ObjectStorageImageDetails;
import * as ValueArray from "./value-array";
export import ValueArray = ValueArray.ValueArray;
import * as ValueDate from "./value-date";
export import ValueDate = ValueDate.ValueDate;
import * as ValueInteger from "./value-integer";
export import ValueInteger = ValueInteger.ValueInteger;
import * as ValueNumber from "./value-number";
export import ValueNumber = ValueNumber.ValueNumber;
import * as ValuePhoneNumber from "./value-phone-number";
export import ValuePhoneNumber = ValuePhoneNumber.ValuePhoneNumber;
import * as ValueString from "./value-string";
export import ValueString = ValueString.ValueString;
import * as ValueTime from "./value-time";
export import ValueTime = ValueTime.ValueTime;
