// Junta os models e cria a associacao 1-N: um autor tem varios livros.
import sequelize from '../database.js';
import Autor from './Autor.js';
import Livro from './Livro.js';

Autor.hasMany(Livro, { foreignKey: 'autorId', as: 'livros' });
Livro.belongsTo(Autor, { foreignKey: 'autorId', as: 'autor' });

export { sequelize, Autor, Livro };
