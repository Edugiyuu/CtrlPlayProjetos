import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Autor = sequelize.define('Autor', {
  nome: { type: DataTypes.STRING, allowNull: false },
  nacionalidade: { type: DataTypes.STRING },
}, { tableName: 'autores' });

export default Autor;
