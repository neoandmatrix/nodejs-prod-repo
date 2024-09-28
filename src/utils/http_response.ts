import { Request, Response } from 'express';
import { HttpResponseType } from '../types/types.js';
import { config } from '../config/config.js';
import { ApplicationEnviromentEnum } from '../constants/application.js';
import loggger from './loggger.js';

export function httpResponseFormat(
  req: Request,
  res: Response,
  responseStatusCode: number,
  responseMessage: string,
  data: unknown = null
): void {
  const response: HttpResponseType = {
    success: true,
    statusCode: responseStatusCode,
    request: {
      ip: req.ip || undefined,
      method: req.method,
      url: req.originalUrl
    },
    message: responseMessage,
    data: data
  };

  loggger.info('CONTROLLER RESPONSE', { metadata: response });

  if (config.env === ApplicationEnviromentEnum.PRODUCTION) {
    delete response.request.ip;
  }
  res.status(responseStatusCode).json(response);
}
