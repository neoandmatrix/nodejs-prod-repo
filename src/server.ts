import { config } from './config/config.js';
import app from './app.js';
import loggger from './utils/loggger.js';

app.listen(config.port, () => {
  loggger.info(`server started on ${config.port}`, {
    metadata: { start: 'server start info log' }
  });
});
