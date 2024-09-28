import { Request, Response } from 'express';
import { httpResponseFormat } from '../utils/http_response.js';
import { RESPONSE_MEESSAGES } from '../constants/response_message.js';

export default {
  self: (req: Request, res: Response) => {
    try {
      httpResponseFormat(req, res, 200, RESPONSE_MEESSAGES.SUCCESS);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.sendStatus(404);
    }
  }
};
