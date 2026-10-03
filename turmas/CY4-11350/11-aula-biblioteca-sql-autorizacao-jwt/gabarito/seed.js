// Popula o banco na primeira execucao, so pra nao testar com a base vazia.
import bcrypt from 'bcryptjs';
import { Autor, Livro, Usuario } from './models/index.js';

export default async function semearSeVazio() {
  const jaTem = await Autor.count();
  if (jaTem > 0) {
    return;
  }

  const machado = await Autor.create({ nome: 'Machado de Assis', nacionalidade: 'Brasileira' });
  const clarice = await Autor.create({ nome: 'Clarice Lispector', nacionalidade: 'Brasileira' });
  const tolkien = await Autor.create({ nome: 'J.R.R. Tolkien', nacionalidade: 'Britanica' });

  await Livro.bulkCreate([
    { titulo: 'Dom Casmurro', genero: 'Romance', ano: 1899, autorId: machado.id },
    { titulo: 'Memorias Postumas de Bras Cubas', genero: 'Romance', ano: 1881, autorId: machado.id },
    { titulo: 'A Hora da Estrela', genero: 'Romance', ano: 1977, autorId: clarice.id },
    { titulo: 'O Hobbit', genero: 'Fantasia', ano: 1937, autorId: tolkien.id, disponivel: false },
    { titulo: 'O Senhor dos Aneis', genero: 'Fantasia', ano: 1954, autorId: tolkien.id },
    { titulo: 'O Silmarillion', genero: 'Fantasia', ano: 1977, autorId: tolkien.id },
    { titulo: 'Quincas Borba', genero: 'Romance', ano: 1891, autorId: machado.id },
    { titulo: 'Agua Viva', genero: 'Experimental', ano: 1973, autorId: clarice.id, disponivel: false },
    { titulo: 'Laços de Familia', genero: 'Contos', ano: 1960, autorId: clarice.id },
    { titulo: 'Contos Fluminenses', genero: 'Contos', ano: 1870, autorId: machado.id },
  ]);

  // Dois usuarios de teste, com a senha ja criptografada.
  // Senha dos dois: senha123
  const senhaCriptografada = await bcrypt.hash('senha123', 10);
  await Usuario.bulkCreate([
    { nome: 'Bibliotecaria Ana', email: 'ana@biblioteca.com', senha: senhaCriptografada, papel: 'bibliotecario' },
    { nome: 'Leitor Bruno', email: 'bruno@email.com', senha: senhaCriptografada, papel: 'usuario' },
  ]);

  console.log('Banco populado com 3 autores, 10 livros e 2 usuarios (senha: senha123).');
}
