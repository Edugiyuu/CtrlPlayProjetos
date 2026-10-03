import { Livro, Autor } from '../models/index.js';

// GET /livros -> lista todos, com o autor de cada um.
// O include e o "JOIN" do Sequelize: puxa o autor junto.
export async function listar(req, res) {
  const livros = await Livro.findAll({
    include: { model: Autor, as: 'autor' },
    order: [['titulo', 'ASC']],
  });

  res.json(livros);
}

// GET /livros/:id -> busca um livro pela chave primaria
export async function buscarPorId(req, res) {
  const livro = await Livro.findByPk(req.params.id, {
    include: { model: Autor, as: 'autor' },
  });

  if (!livro) {
    return res.status(404).json({ erro: 'livro nao encontrado' });
  }

  res.json(livro);
}

// POST /livros -> cria
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

  const criado = await Livro.findByPk(livro.id, {
    include: { model: Autor, as: 'autor' },
  });

  res.status(201).json(criado);
}

// PUT /livros/:id -> atualiza
export async function atualizar(req, res) {
  const livro = await Livro.findByPk(req.params.id);

  if (!livro) {
    return res.status(404).json({ erro: 'livro nao encontrado' });
  }

  const { titulo, genero, ano, disponivel } = req.body;
  await livro.update({ titulo, genero, ano, disponivel });

  const atualizado = await Livro.findByPk(livro.id, {
    include: { model: Autor, as: 'autor' },
  });

  res.json(atualizado);
}

// DELETE /livros/:id -> remove
export async function remover(req, res) {
  const livro = await Livro.findByPk(req.params.id);

  if (!livro) {
    return res.status(404).json({ erro: 'livro nao encontrado' });
  }

  await livro.destroy();

  res.json({ mensagem: 'livro removido' });
}
