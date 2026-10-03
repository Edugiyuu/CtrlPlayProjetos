import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

// Middleware: roda ANTES do controller e decide se deixa passar (next())
// ou barra a requisicao.
export default function autenticar(req, res, next) {
  // 1o lugar: o cookie httpOnly, que o navegador manda sozinho (aula #12).
  let token = req.cookies.token;

  // 2o lugar: o header Authorization, pro Insomnia e pro Swagger.
  if (!token && req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1]; // joga fora o "Bearer"
  }

  if (!token) {
    return res.status(401).json({ erro: 'nao autenticado' });
  }

  try {
    // verify confere a assinatura. Se alguem mexeu no token, cai no catch.
    const dados = jwt.verify(token, JWT_SECRET);
    req.usuario = dados; // fica disponivel pro controller
    next();
  } catch {
    return res.status(401).json({ erro: 'token invalido ou expirado' });
  }
}
