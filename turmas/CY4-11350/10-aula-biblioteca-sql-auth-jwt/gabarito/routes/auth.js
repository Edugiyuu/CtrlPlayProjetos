import express from 'express';
import { cadastrar, login } from '../controllers/authController.js';

const router = express.Router();

/**
 * @swagger
 * /cadastro:
 *   post:
 *     summary: Cria um usuario (a senha e salva com hash)
 *     tags: [Autenticacao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, email, senha]
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario criado
 *       400:
 *         description: Falta campo, senha curta ou email repetido
 */
router.post('/cadastro', cadastrar);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Faz login e devolve um token JWT
 *     tags: [Autenticacao]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, senha]
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token gerado
 *       401:
 *         description: Credenciais invalidas
 */
router.post('/login', login);

export default router;
