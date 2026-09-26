// Conexao com o banco. O SQLite e um arquivo: biblioteca.sqlite.
// Ele nasce na pasta de onde voce rodou o "npm run dev" (ou seja: backend/).
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'biblioteca.sqlite',
  logging: false, // troque para console.log se quiser ver o SQL gerado
});

export default sequelize;
