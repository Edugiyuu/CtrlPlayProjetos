import express from 'express';

import { sequelize } from './models/index.js';
import semearSeVazio from './seed.js';
import rotasLivros from './routes/livros.js';
import rotasAutores from './routes/autores.js';

const app = express();
const PORTA = 3000;

app.use(express.json());

app.use('/livros', rotasLivros);
app.use('/autores', rotasAutores);

app.get('/', (req, res) => {
  res.json({ api: 'Biblioteca Digital', rotas: ['/livros', '/autores'] });
});

await sequelize.sync(); // cria as tabelas a partir dos models
await semearSeVazio();

app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
});
