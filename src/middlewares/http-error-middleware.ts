// Module imports
import { NextFunction, Request, Response } from 'express';
import { ExpressJoiError } from 'express-joi-validation';
import { MongoError } from 'mongodb';
// File imports

import { HttpStatusCodes } from '../enums/common-enum';
import logger from '../shared/logger';

import MessageConstants from '../constants/response.constants';
import { HttpService } from '../shared/http.service';
import { GeneralHttpExceptions } from '../custom-exceptions/custom-exceptions';
import { ExceptionsTerminology } from '../constants/common.constants';
const httpService = new HttpService();

/**
 * will handle the Global Http Errors
 * @param error error of error class Type
 * @param request request of Express Request Type
 * @param response response of Express Response Type
 * @param next next function of Express response Type
 
const HttpErrorMiddleware = async (error:  Error | ExpressJoiError | any, request: Request, response: Response, next: NextFunction) => {
 
    if (error instanceof MongoError) {
        HandleException(error, request, response);
    }
    else if (error && error.error && error.error.isJoi) {
        const validationError = new SmanshaAIException(GeneralHttpExceptions.ValidationException, error.error.message);
        HandleException(validationError, request, response);
    }
    else {
      
        HandleException(newError, request, response);
    }
};

 * will handle the Global Http Errors and send to client and store to db
 * @param error error of error class Type
 * @param request request of Express Request Type
 * @param response response of Express Response Type
 * @param next next function of Express response Type
 *
const HandleException = (error: any, request: Request, response: Response) => {
    const errorDetails: SmanshaAIException =
    {
        message: error.message || MessageConstants.general.somethingWrong,
        type: error.type || ExceptionsTerminology.internalServerException,
        stack: error.stack,
        name: error.name,
        smTraceId: error.smTraceId,
        detailedMessage: error.detailedMessage,
        level: 'error',
        errorCode: error.errorCode,
        serviceCode: error.serviceCode || Number(process.env.SERVICE_CODE),
        statusCode: error.statusCode || HttpStatusCodes.internalServerError
    };

    if (errorDetails.statusCode === HttpStatusCodes.internalServerError) {
        errorDetails.requestObject = GetRequestObjectDetails(request);
      //  errorDetails.smTraceId = PostExceptionsToSentry(errorDetails);
        logger.error(errorDetails);
        const errorResponse = {
            status: false,
            message: errorDetails.message,
            error: {
                type: errorDetails.type,
                smTraceId: errorDetails.smTraceId,
                message: errorDetails.detailedMessage,
                errorCode: errorDetails.errorCode,
                serviceCode: errorDetails.serviceCode
            }
        };

        // Sending Error Response back to User
        response.status(errorDetails.statusCode).json(errorResponse);
    }
    else {
        // console.log('Inside else block');
        const errorResponse = {
            status: false,
            message: errorDetails.message,
            error: {
                type: errorDetails.type,
                message: errorDetails.detailedMessage,
                errorCode: errorDetails.errorCode,
                serviceCode: errorDetails.serviceCode
            }
        };
       // PostExceptionsToSentry(errorDetails);
        response.status(errorDetails.statusCode).json(errorResponse);
    }
};*/

/**
 * this method will pass the error to error logging service
 * @param error pass the error
 */
/*const PostExceptionsToSentry = (error: SmanshaAIException) => {
    const id = commonFunctions.getMongoObjectId();
    error.smTraceId = id;

    // sending errors to sentry in asynchronious way
    httpService.post(`${process.env.SMAI_ERROR_LOG_SERVICE}/api/errors/`, error).catch(err => {
        console.log(err.message);
    });

    return id;
};*/

/**
 *  will fetch the important information from request object
 * @param request pass the request Object
 *
const GetRequestObjectDetails = (request: Request) => {
    return {
        headers: request.headers,
        url: request.url,
        originalUrl: request.originalUrl,
        params: request.params,
        queryParams: request.query,
        body: request.body,
        ip: request.ip,
        method: request.method
    };
}
export default HttpErrorMiddleware;*/