import { NextFunction, Request, Response } from 'express';
import { HttpErrorType } from '../types/types.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (
  error: HttpErrorType,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  res.status(error.statusCode).json(error);
};
