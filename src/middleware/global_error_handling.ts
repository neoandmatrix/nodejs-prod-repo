import { NextFunction, Request, Response } from 'express';
import { HttpErrorType } from '../types/types.js';

export default (
  error: HttpErrorType,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  __: NextFunction
) => {
  res.status(error.statusCode).json(error);
};
