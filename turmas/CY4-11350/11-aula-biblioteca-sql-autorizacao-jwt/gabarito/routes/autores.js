import express from 'express';
import { listar, buscarPorId, criar } from '../controllers/autoresController.js';

const router = express.Router();

/**
 * @swagger
 * /autores:
 *   get:
 *     summary: Lista todos os autores
 *     tags: [Autores]
 *     responses:
 *       200:
 *         description: Lista de autores retornada com sucesso
 */
router.get('/', listar);

/**
 * @swagger
 * /autores/{id}:
 *   get:
 *     summary: Busca um autor e os livros dele
 *     tags: [Autores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Autor encontrado
 *       404:
 *         description: Autor nao encontrado
 */
router.get('/:id', buscarPorId);

/**
 * @swagger
 * /autores:
 *   post:
 *     summary: Cadastra um autor novo
 *     tags: [Autores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome]
 *             properties:
 *               nome:
 *                 type: string
 *               nacionalidade:
 *                 type: string
 *     responses:
 *       201:
 *         description: Autor criado
 *       400:
 *         description: Faltou o nome
 */
router.post('/', criar);

export default router;
