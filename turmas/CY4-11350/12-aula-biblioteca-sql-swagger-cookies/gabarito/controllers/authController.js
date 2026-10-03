import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Usuario } from '../models/index.js';
import { JWT_SECRET, JWT_EXPIRACAO } from '../config.js';

// POST /cadastro
export async function cadastrar(req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: 'nome, email e senha sao obrigatorios' });
  }

  if (senha.length < 6) {
    return res.status(400).json({ erro: 'a senha precisa de pelo menos 6 caracteres' });
  }

  const jaExiste = await Usuario.findOne({ where: { email } });
  if (jaExiste) {
    return res.status(400).json({ erro: 'esse email ja esta cadastrado' });
  }

  // hash: funcao de mao unica. Nao da pra voltar atras e descobrir a senha.
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const usuario = await Usuario.create({ nome, email, senha: senhaCriptografada });

  // A resposta NAO devolve a senha, nem a criptografada.
  res.status(201).json({ id: usuario.id, nome: usuario.nome, email: usuario.email });
}

// POST /login
export async function login(req, res) {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    // mensagem generica de proposito: nao entrega se o email existe ou nao
    return res.status(401).json({ erro: 'credenciais invalidas' });
  }

  // Nao descriptografa nada: faz o hash da senha digitada e compara.
  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) {
    return res.status(401).json({ erro: 'credenciais invalidas' });
  }

  const token = jwt.sign(
    { id: usuario.id, email: usuario.email, papel: usuario.papel }, // o que vai dentro do cracha
    JWT_SECRET,                               // a assinatura, que so o servidor sabe fazer
    { expiresIn: JWT_EXPIRACAO },
  );

  // O token vai num cookie httpOnly: o navegador guarda e manda sozinho,
  // e o JavaScript da pagina NAO consegue ler (protege contra roubo via XSS).
  res.cookie('token', token, {
    httpOnly: true,
    secure: false,          // true em producao, com HTTPS
    sameSite: 'lax',
    maxAge: 60 * 60 * 1000, // 1h, igual ao expiresIn do token
  });

  // Devolve o token no corpo tambem, pro Insomnia e pro botao Authorize
  // do Swagger continuarem funcionando.
  res.json({ mensagem: 'login realizado com sucesso', token });
}

// POST /logout -> apaga o cookie
export async function logout(req, res) {
  res.clearCookie('token');
  res.json({ mensagem: 'logout realizado' });
}

// GET /perfil -> quem sou eu? Responde com o que veio no token,
// sem consultar o banco de novo.
export async function perfil(req, res) {
  res.json(req.usuario);
}
