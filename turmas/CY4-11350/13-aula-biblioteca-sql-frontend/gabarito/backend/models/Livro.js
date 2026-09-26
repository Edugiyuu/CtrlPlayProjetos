import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Livro = sequelize.define('Livro', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  genero: { type: DataTypes.STRING },
  ano: { type: DataTypes.INTEGER },
  disponivel: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'livros' });

export default Livro;
