// Onde a relacao entre as tabelas e declarada.
import sequelize from '../database.js';
import Autor from './Autor.js';
import Livro from './Livro.js';
import Usuario from './Usuario.js';

// Um autor tem varios livros; um livro pertence a um autor.
// Quem ganha a coluna autorId (a chave estrangeira) e a tabela livros.
Autor.hasMany(Livro, { foreignKey: 'autorId', as: 'livros' });
Livro.belongsTo(Autor, { foreignKey: 'autorId', as: 'autor' });

export { sequelize, Autor, Livro, Usuario };
