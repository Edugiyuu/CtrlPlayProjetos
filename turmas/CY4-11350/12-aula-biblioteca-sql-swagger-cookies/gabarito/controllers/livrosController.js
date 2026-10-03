import { Op } from 'sequelize';
import { Livro, Autor } from '../models/index.js';

// GET /livros -> lista com filtros e paginacao.
//   /livros?genero=Fantasia        filtra por genero
//   /livros?disponivel=true        so os disponiveis
//   /livros?titulo=hobbit          busca parcial no titulo
//   /livros?pagina=2&limite=3      a segunda fatia de 3 em 3
export async function listar(req, res) {
  const { genero, disponivel, titulo } = req.query;

  // o where comeca vazio e so ganha o que veio na URL
  const where = {};

  if (genero) {
    where.genero = genero;
  }

  if (disponivel !== undefined) {
    // query param sempre chega como texto: 'true' (string), nunca true (boolean)
    where.disponivel = disponivel === 'true';
  }

  if (titulo) {
    where.titulo = { [Op.like]: `%${titulo}%` }; // busca parcial
  }

  const pagina = Number(req.query.pagina) || 1;
  const limite = Number(req.query.limite) || 5;
  const offset = (pagina - 1) * limite;

  // findAndCountAll traz a fatia (rows) E o total de registros (count)
  const { rows, count } = await Livro.findAndCountAll({
    where,
    include: { model: Autor, as: 'autor' },
    order: [['titulo', 'ASC']],
    limit: limite,
    offset: offset,
  });

  res.json({
    dados: rows,
    paginaAtual: pagina,
    totalPaginas: Math.ceil(count / limite),
    totalItens: count,
  });
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
