import os from 'os';
import { config } from '../config/config.js';

export default {
  getSystemHealth: () => {
    return {
      cpu_usage: os.loadavg(),
      totalmem: `${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`,
      freemem: `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`
    };
  },

  getApplicationHealth: () => {
    return {
      enviromnet: config.env,
      uptime: `${process.uptime().toFixed(2)} second`,
      memoryUsage: {
        heapTotal: `${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB`,
        heapUsed: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`
      }
    };
  }
};
