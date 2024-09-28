import express, { Application } from 'express';
import path from 'path';
import router from './router/api_roter.js';
import global_error_handling from './middleware/global_error_handling.js';
import rootDirname from './utils/root_file_name_provide.js';

const app: Application = express();

app.use(express.json());
app.use(express.static(path.join(rootDirname, '../', 'public')));
app.use('/v1/api', router);
app.use(global_error_handling);

export default app;
