// Onde a relacao entre as duas tabelas e declarada.
import sequelize from '../database.js';
import Autor from './Autor.js';
import Livro from './Livro.js';

// Um autor tem varios livros; um livro pertence a um autor.
// Quem ganha a coluna autorId (a chave estrangeira) e a tabela livros,
// porque e ela que "pertence a" - igual ao diagrama da aula #6.
Autor.hasMany(Livro, { foreignKey: 'autorId', as: 'livros' });
Livro.belongsTo(Autor, { foreignKey: 'autorId', as: 'autor' });

export { sequelize, Autor, Livro };
