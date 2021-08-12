import { HttpStatusCodes } from '../enums/common-enum';
import { IGeneralHttpExceptions } from '../interface-and-types';
import MessageConstants from '../constants/response.constants';
import { ExceptionsTerminology } from '../constants/common.constants';


export const GeneralHttpExceptions: IGeneralHttpExceptions = {
    RecordAlreadyExists: {
        errorCode: 1001,
     message: MessageConstants.general.recordAlreadyExists,
        type: ExceptionsTerminology.recordAlreadyExists,
        statusCode: HttpStatusCodes.badRequest
    },
    EntityNotFoundException: {
        errorCode: 1002,
        message: MessageConstants.general.entityNotFound,
        type: ExceptionsTerminology.entityNotFound,
        statusCode: HttpStatusCodes.badRequest
    },
    EntitiesNotFoundException: {
        errorCode: 1003,
        message: MessageConstants.general.notFound,
        type: ExceptionsTerminology.entitiesNotFound,
        statusCode: HttpStatusCodes.notFound
    },
    ValidationException: {
        errorCode: 1003,
        message: MessageConstants.general.invalidRequestParameters,
        type: ExceptionsTerminology.validationException,
        statusCode: HttpStatusCodes.badRequest
    },
    InternalServerException: {
        errorCode: 1004,
        message: MessageConstants.general.somethingWrong,
        type: ExceptionsTerminology.internalServerException,
        statusCode: HttpStatusCodes.internalServerError
    },
    
 
};
