import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

// Vira a tabela "autores" no banco - as mesmas colunas da aula #6.
const Autor = sequelize.define('Autor', {
  nome: { type: DataTypes.STRING, allowNull: false },
  nacionalidade: { type: DataTypes.STRING },
}, { tableName: 'autores' });

export default Autor;
