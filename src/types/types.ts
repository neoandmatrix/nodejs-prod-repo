export type HttpResponseType = {
  success: boolean;
  statusCode: number;
  request: {
    ip?: string;
    method: string;
    url: string;
  };
  message: string;
  data: unknown;
};

export type HttpErrorType = {
  success: boolean;
  statusCode: number;
  request: {
    ip?: string;
    method: string;
    url: string;
  };
  message: string;
  data: unknown;
  trace?: object | null;
};
