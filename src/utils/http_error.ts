import { NextFunction, Request, Response } from 'express';
import { HttpErrorType } from '../types/types.js';
import httpErrorObject from './error_object.js';

export default (
  next: NextFunction,
  error: HttpErrorType | unknown,
  req: Request,
  res: Response,
  errorStatusCode: number
) => {
  const errorObj = httpErrorObject(error, req, res, errorStatusCode);
  return next(errorObj);
};
