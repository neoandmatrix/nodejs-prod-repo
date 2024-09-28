// this file contains the configuration for accessing enviroment variables with type-safety

import dotenvFlow from 'dotenv-flow';
import { Type, Static } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

dotenvFlow.config();

const enviromentVariables = Type.Object({
  ENV: Type.String(),
  PORT: Type.String(),
  SERVER_URL: Type.String(),
  DATABASE_URL: Type.String()
});

export type enviromentVariables = Static<typeof enviromentVariables>;

const parsedEnviromentVariables = Value.Parse(enviromentVariables, process.env);

export const config = {
  env: parsedEnviromentVariables.ENV,
  port: parsedEnviromentVariables.PORT,
  dataBaseUrl: parsedEnviromentVariables.DATABASE_URL,
  serverUrl: parsedEnviromentVariables.SERVER_URL
};
