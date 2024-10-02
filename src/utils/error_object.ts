import { Request, Response } from 'express';
import { HttpErrorType } from '../types/types.js';
import { RESPONSE_MEESSAGES } from '../constants/response_message.js';
import { config } from '../config/config.js';
import { ApplicationEnviromentEnum } from '../constants/application.js';

export default function httpErrorObject(
  error: Error | unknown,
  req: Request,
  res: Response,
  errorStatusCode: number = 500
): HttpErrorType {
  const errorObject: HttpErrorType = {
    success: false,
    statusCode: errorStatusCode,
    request: {
      ip: req.ip,
      method: req.method,
      url: req.originalUrl
    },
    message:
      error instanceof Error
        ? error.message || RESPONSE_MEESSAGES.GENERIC_ERROR
        : RESPONSE_MEESSAGES.GENERIC_ERROR,
    data: null,
    trace: error instanceof Error ? { error: `${error.stack}` } : null
  };

  if (config.env === ApplicationEnviromentEnum.PRODUCTION) {
    delete errorObject.trace;
    delete errorObject.request.ip;
  }

  return errorObject;
}
