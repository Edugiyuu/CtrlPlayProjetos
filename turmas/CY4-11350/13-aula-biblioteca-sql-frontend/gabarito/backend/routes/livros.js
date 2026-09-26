import express from 'express';
import { listar, criar, alternarEmprestimo } from '../controllers/livrosController.js';

const router = express.Router();

router.get('/', listar);
router.post('/', criar);
router.patch('/:id/emprestimo', alternarEmprestimo);

export default router;
