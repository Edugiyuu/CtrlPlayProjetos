import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

// Vira a tabela "livros". A coluna autorId nao aparece aqui:
// ela nasce da associacao, em models/index.js.
const Livro = sequelize.define('Livro', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  genero: { type: DataTypes.STRING },
  ano: { type: DataTypes.INTEGER },
  disponivel: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'livros' });

export default Livro;
