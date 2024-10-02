import { Request, Response, NextFunction } from 'express';
import { httpResponseFormat } from '../utils/http_response.js';
import { RESPONSE_MEESSAGES } from '../constants/response_message.js';
import http_error from '../utils/http_error.js';
import getSystemHealth from '../utils/health_check.js';

export default {
  self: (req: Request, res: Response, next: NextFunction) => {
    try {
      //throw Error('some error');
      httpResponseFormat(req, res, 200, RESPONSE_MEESSAGES.SUCCESS);
    } catch (error) {
      http_error(next, error, req, res, 404);
    }
  },

  health: (req: Request, res: Response, next: NextFunction) => {
    try {
      const system_health = getSystemHealth.getSystemHealth();
      httpResponseFormat(req, res, 200, RESPONSE_MEESSAGES.SUCCESS, {
        data: system_health
      });
    } catch (error) {
      http_error(next, error, req, res, 404);
    }
  }
};
