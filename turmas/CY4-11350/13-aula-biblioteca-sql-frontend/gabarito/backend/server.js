import express from 'express';
import cors from 'cors';

import { sequelize } from './models/index.js';
import semearSeVazio from './seed.js';
import rotasLivros from './routes/livros.js';
import rotasAutores from './routes/autores.js';

const app = express();
const PORTA = 3000;

// CORS: o front roda em http://localhost:5173 (outra origem aos olhos do
// navegador). Sem isso aqui, todo fetch do React e bloqueado.
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, // deixa pronto pra quando tiver cookie de login (aula #12)
}));

app.use(express.json());

app.use('/livros', rotasLivros);
app.use('/autores', rotasAutores);

app.get('/', (req, res) => {
  res.json({ api: 'Biblioteca Digital', rotas: ['/livros', '/autores'] });
});

await sequelize.sync(); // cria as tabelas se ainda nao existirem
await semearSeVazio();

app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
