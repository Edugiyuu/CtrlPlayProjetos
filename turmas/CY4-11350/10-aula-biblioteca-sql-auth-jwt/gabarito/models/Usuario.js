import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Usuario = sequelize.define('Usuario', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  // Guarda o HASH da senha, nunca a senha digitada.
  senha: { type: DataTypes.STRING, allowNull: false },
}, { tableName: 'usuarios' });

export default Usuario;
