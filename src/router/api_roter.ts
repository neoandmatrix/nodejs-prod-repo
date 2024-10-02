import { Router } from 'express';
import api_controller from '../controller/api_controller.js';

const router = Router();

router.route('/self').get(api_controller.self);
router.route('/health').get(api_controller.health);

export default router;
