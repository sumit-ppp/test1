import { HttpStatusCodes } from "../enums/common-enum";

export interface IHttpException {
  message: string;
  type: string;
  statusCode: HttpStatusCodes;
  stackTrace?: any;
  smTraceId?: string;
  level?: string;
  serviceCode?: number;
  errorCode: number;
}

export interface IGeneralHttpExceptions {
  RecordAlreadyExists: IHttpException;
  EntityNotFoundException: IHttpException;
  EntitiesNotFoundException: IHttpException;
  ValidationException: IHttpException;
  InternalServerException: IHttpException;

}
