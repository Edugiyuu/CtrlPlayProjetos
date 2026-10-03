import express from 'express';
import { cadastrar, login, logout, perfil } from '../controllers/authController.js';
import autenticar from '../middlewares/autenticar.js';

const router = express.Router();

/**
 * @swagger
 * /cadastro:
 *   post:
 *     summary: Cria um usuario (a senha e salva com hash)
 *     tags: [Autenticacao]
 *     security: []
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
 *     summary: Faz login, manda o cookie httpOnly e devolve o token
 *     tags: [Autenticacao]
 *     security: []
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

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Apaga o cookie do token
 *     tags: [Autenticacao]
 *     responses:
 *       200:
 *         description: Logout realizado
 */
router.post('/logout', logout);

/**
 * @swagger
 * /perfil:
 *   get:
 *     summary: Dados do usuario logado (exige token)
 *     tags: [Autenticacao]
 *     responses:
 *       200:
 *         description: Dados que estavam dentro do token
 *       401:
 *         description: Token ausente ou invalido
 */
router.get('/perfil', autenticar, perfil);

export default router;
