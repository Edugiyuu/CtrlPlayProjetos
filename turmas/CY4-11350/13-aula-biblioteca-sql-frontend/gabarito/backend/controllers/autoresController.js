import { Autor } from '../models/index.js';

// GET /autores -> usado pelo <select> do formulario no front
export async function listar(req, res) {
  const autores = await Autor.findAll({ order: [['nome', 'ASC']] });
  res.json(autores);
}
