import express from 'express';
import {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
} from '../controllers/livrosController.js';

const router = express.Router();

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros, com o autor de cada um
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 */
router.get('/', listar);

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Busca um livro pelo id
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro encontrado
 *       404:
 *         description: Livro nao encontrado
 */
router.get('/:id', buscarPorId);

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Cadastra um livro novo
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [titulo, autorId]
 *             properties:
 *               titulo:
 *                 type: string
 *               genero:
 *                 type: string
 *               ano:
 *                 type: integer
 *               autorId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro criado
 *       400:
 *         description: Faltou o titulo
 *       404:
 *         description: Autor nao encontrado
 */
router.post('/', criar);

/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualiza um livro
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               genero:
 *                 type: string
 *               ano:
 *                 type: integer
 *               disponivel:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Livro atualizado
 *       404:
 *         description: Livro nao encontrado
 */
router.put('/:id', atualizar);

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Remove um livro
 *     tags: [Livros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro removido
 *       404:
 *         description: Livro nao encontrado
 */
router.delete('/:id', remover);

export default router;
