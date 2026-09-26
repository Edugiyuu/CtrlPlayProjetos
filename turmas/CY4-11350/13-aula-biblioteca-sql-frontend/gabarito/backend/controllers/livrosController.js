import { Livro, Autor } from '../models/index.js';

// GET /livros -> lista todos, com o autor de cada um
export async function listar(req, res) {
  const livros = await Livro.findAll({
    include: { model: Autor, as: 'autor' }, // traz o autor junto
    order: [['titulo', 'ASC']],
  });

  res.json(livros);
}

// POST /livros -> cria um livro novo
export async function criar(req, res) {
  const { titulo, genero, ano, autorId } = req.body;

  if (!titulo) {
    return res.status(400).json({ erro: 'o livro precisa de um titulo' });
  }

  const autor = await Autor.findByPk(autorId);
  if (!autor) {
    return res.status(404).json({ erro: 'autor nao encontrado' });
  }

  const livro = await Livro.create({ titulo, genero, ano, autorId });

  // busca de novo, agora com o autor junto, pra devolver igual ao GET
  const criado = await Livro.findByPk(livro.id, {
    include: { model: Autor, as: 'autor' },
  });

  res.status(201).json(criado);
}

// PATCH /livros/:id/emprestimo -> troca disponivel (true vira false, e vice-versa)
export async function alternarEmprestimo(req, res) {
  const livro = await Livro.findByPk(req.params.id, {
    include: { model: Autor, as: 'autor' },
  });

  if (!livro) {
    return res.status(404).json({ erro: 'livro nao encontrado' });
  }

  livro.disponivel = !livro.disponivel;
  await livro.save();

  res.json(livro);
}
