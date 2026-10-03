import { Autor, Livro } from '../models/index.js';

// GET /autores -> lista todos
export async function listar(req, res) {
  const autores = await Autor.findAll({ order: [['nome', 'ASC']] });
  res.json(autores);
}

// GET /autores/:id -> o autor com os livros dele (o outro lado da associacao)
export async function buscarPorId(req, res) {
  const autor = await Autor.findByPk(req.params.id, {
    include: { model: Livro, as: 'livros' },
  });

  if (!autor) {
    return res.status(404).json({ erro: 'autor nao encontrado' });
  }

  res.json(autor);
}

// POST /autores -> cria
export async function criar(req, res) {
  const { nome, nacionalidade } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: 'o autor precisa de um nome' });
  }

  const autor = await Autor.create({ nome, nacionalidade });

  res.status(201).json(autor);
}
