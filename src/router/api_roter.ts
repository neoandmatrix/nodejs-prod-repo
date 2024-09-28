import { Router } from 'express';
import api_controller from '../controller/api_controller.js';

const router = Router();

router.route('/self').get(api_controller.self);

export default router;
