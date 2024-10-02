import { NextFunction, Request, Response } from 'express';
import httpErrorObject from './error_object.js';
import loggger from './loggger.js';

export default (
  next: NextFunction,
  error: Error | unknown,
  req: Request,
  res: Response,
  errorStatusCode: number
) => {
  const errorObj = httpErrorObject(error, req, res, errorStatusCode);
  loggger.error(`${error}`, { metadata: errorObj });
  return next(errorObj);
};
