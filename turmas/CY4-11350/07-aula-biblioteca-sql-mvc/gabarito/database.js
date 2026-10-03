// Conexao com o banco. O SQLite e um arquivo: biblioteca.sqlite.
// Ele nasce na pasta de onde voce rodou o "npm run dev".
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'biblioteca.sqlite',
  logging: false, // troque para console.log para ver o SQL que o Sequelize monta
});

export default sequelize;
