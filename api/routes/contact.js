import { Router } from 'express';
import { postContact, subscribe } from '../controllers/contactController.js';

const router = Router();
router.post('/contact', postContact);
router.post('/subscribe', subscribe);

export default router;
