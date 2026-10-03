import express from 'express';
import { listar, buscarPorId, criar } from '../controllers/autoresController.js';

const router = express.Router();

router.get('/', listar);
router.get('/:id', buscarPorId);
router.post('/', criar);

export default router;
