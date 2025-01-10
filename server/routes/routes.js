// routes.js
import express from 'express';
import controller from '../controllers/controller.js';

const router = express.Router();


router.get('/stats', controller.getStats);
router.get('/deviation', controller.getDeviation);

export default router;
