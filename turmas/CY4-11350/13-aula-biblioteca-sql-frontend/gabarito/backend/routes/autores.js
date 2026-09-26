import express from 'express';
import { listar } from '../controllers/autoresController.js';

const router = express.Router();

router.get('/', listar);

export default router;
