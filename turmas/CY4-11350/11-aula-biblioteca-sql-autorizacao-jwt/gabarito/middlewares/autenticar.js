import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config.js';

// Middleware: roda ANTES do controller e decide se deixa passar (next())
// ou barra a requisicao.
export default function autenticar(req, res, next) {
  const header = req.headers.authorization; // "Bearer eyJhbGciOi..."

  if (!header) {
    return res.status(401).json({ erro: 'token nao enviado' });
  }

  const token = header.split(' ')[1]; // joga fora a palavra "Bearer"

  try {
    // verify confere a assinatura. Se alguem mexeu no token, cai no catch.
    const dados = jwt.verify(token, JWT_SECRET);
    req.usuario = dados; // fica disponivel pro controller
    next();
  } catch {
    return res.status(401).json({ erro: 'token invalido ou expirado' });
  }
}
