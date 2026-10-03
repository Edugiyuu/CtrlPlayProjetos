import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { sequelize } from './models/index.js';
import semearSeVazio from './seed.js';
import documentacao from './swagger.js';
import rotasLivros from './routes/livros.js';
import rotasAutores from './routes/autores.js';

const app = express();
const PORTA = 3000;

app.use(express.json());

// A tela interativa da documentacao fica em /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentacao));

app.use('/livros', rotasLivros);
app.use('/autores', rotasAutores);

app.get('/', (req, res) => {
  res.json({ api: 'Biblioteca Digital', docs: '/api-docs' });
});

await sequelize.sync();
await semearSeVazio();

app.listen(PORTA, () => {
  console.log(`API rodando em http://localhost:${PORTA}`);
  console.log(`Documentacao em http://localhost:${PORTA}/api-docs`);
});
