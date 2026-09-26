// Popula o banco na primeira vez, so pra tela do front nao abrir vazia.
import { Autor, Livro } from './models/index.js';

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
  ]);

  console.log('Banco populado com 3 autores e 5 livros.');
}
