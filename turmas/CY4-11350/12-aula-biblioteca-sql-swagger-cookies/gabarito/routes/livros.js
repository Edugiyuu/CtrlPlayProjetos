import express from 'express';
import {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover,
} from '../controllers/livrosController.js';
import autenticar from '../middlewares/autenticar.js';
import exigirPapel from '../middlewares/exigirPapel.js';

const router = express.Router();

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista os livros, com filtros e paginacao
 *     tags: [Livros]
 *     security: []
 *     parameters:
 *       - in: query
 *         name: genero
 *         schema:
 *           type: string
 *         description: filtra por genero exato
 *       - in: query
 *         name: disponivel
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: titulo
 *         schema:
 *           type: string
 *         description: busca parcial no titulo
 *       - in: query
 *         name: pagina
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limite
 *         schema:
 *           type: integer
 *           default: 5
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
 *     security: []
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
 *       401:
 *         description: Sem token
 *       403:
 *         description: Logado, mas nao e bibliotecario
 *       404:
 *         description: Autor nao encontrado
 */
router.post('/', autenticar, exigirPapel('bibliotecario'), criar);

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
 *       401:
 *         description: Sem token
 *       403:
 *         description: Logado, mas nao e bibliotecario
 *       404:
 *         description: Livro nao encontrado
 */
router.put('/:id', autenticar, exigirPapel('bibliotecario'), atualizar);

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
 *       401:
 *         description: Sem token
 *       403:
 *         description: Logado, mas nao e bibliotecario
 *       404:
 *         description: Livro nao encontrado
 */
router.delete('/:id', autenticar, exigirPapel('bibliotecario'), remover);

export default router;
