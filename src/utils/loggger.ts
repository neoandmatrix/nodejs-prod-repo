import { createLogger, format, transports } from 'winston';
import util from 'util';
import {
  ConsoleTransportInstance,
  FileTransportInstance
} from 'winston/lib/winston/transports/index.js';
import { config } from '../config/config.js';
import { ApplicationEnviromentEnum } from '../constants/application.js';
import path from 'path';
import rootDirname from './root_file_name_provide.js';
import {
  blueBright,
  cyanBright,
  greenBright,
  magentaBright,
  redBright,
  yellowBright
} from 'colorette';

const colorizeLevel = (level: string) => {
  switch (level) {
    case 'ERROR':
      return redBright(level);
    case 'INFO':
      return blueBright(level);
    case 'WARN':
      return yellowBright(level);
    default:
      return level;
  }
};

const consoleLoggerFormat = format.printf((info) => {
  const { level, message, timestamp, metadata = {} } = info;

  const customLevel = colorizeLevel(level.toUpperCase());

  const customTimeStamp = greenBright(timestamp);

  const customMessage = magentaBright(message);

  const customMetaData = util.inspect(metadata, {
    showHidden: false,
    depth: null,
    colors: true
  });

  const enviroment = config.env;

  const customLog = ` ${customLevel} [${customTimeStamp}] ${customMessage}\n ${cyanBright('Meta Data')} ${customMetaData} \n ${enviroment}\n`;

  return customLog;
});

const fileLoggerFormat = format.printf((info) => {
  const { level, message, timestamp, metadata = {} } = info;

  const logMeta: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(metadata)) {
    if (value instanceof Error) {
      logMeta[key] = {
        name: value.name,
        message: value.message,
        trace: value.stack || ''
      };
    } else {
      logMeta[key] = value;
    }
  }

  const enviroment = config.env;
  const logData = {
    level: level.toUpperCase(),
    message,
    timestamp,
    meta_Data: logMeta,
    enviroment
  };

  return JSON.stringify(logData, null, 4);
});

const consoleTransport = (): Array<ConsoleTransportInstance> => {
  if (config.env === ApplicationEnviromentEnum.DEVELOPMENT) {
    return [
      new transports.Console({
        level: 'info',
        forceConsole: true,
        format: format.combine(format.timestamp(), consoleLoggerFormat)
      })
    ];
  } else return [];
};

const fileTransport = (): Array<FileTransportInstance> => {
  return [
    new transports.File({
      handleExceptions: true,
      filename: path.join(
        rootDirname,
        '../',
        '../',
        'logs',
        `${config.env}.log`
      ),
      level: 'info',
      format: format.combine(format.timestamp(), fileLoggerFormat)
    })
  ];
};

export default createLogger({
  defaultMeta: {
    metadata: {}
  },
  transports: [...fileTransport(), ...consoleTransport()]
});
