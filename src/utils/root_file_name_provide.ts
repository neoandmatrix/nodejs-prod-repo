import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const rootDirname = path.dirname(__filename);
export default rootDirname;
