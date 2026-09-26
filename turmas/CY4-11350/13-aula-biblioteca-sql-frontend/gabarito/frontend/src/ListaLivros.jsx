import { alternarEmprestimo } from './api';

export default function ListaLivros({ livros, aoAtualizar }) {
  if (livros.length === 0) {
    return <p>Nenhum livro cadastrado ainda.</p>;
  }

  async function emprestar(id) {
    const atualizado = await alternarEmprestimo(id);
    aoAtualizar(atualizado);
  }

  return (
    <ul className="livros">
      {livros.map((livro) => (
        <ItemLivro key={livro.id} livro={livro} aoClicar={emprestar} />
      ))}
    </ul>
  );
}

// Um livro da lista. Todo livro tem autor, porque o backend exige o autorId.
function ItemLivro({ livro, aoClicar }) {
  // if normal, antes do return: fica mais facil de ler do que dentro do JSX.
  let texto = 'Emprestado';
  let cor = 'fora';

  if (livro.disponivel) {
    texto = 'Disponivel';
    cor = 'ok';
  }

  return (
    <li>
      <div>
        <strong>{livro.titulo}</strong> <span className="ano">({livro.ano})</span>
        <br />
        <span className="autor">{livro.autor.nome}</span>
        {' · '}
        <span className="genero">{livro.genero}</span>
      </div>
      <button className={cor} onClick={() => aoClicar(livro.id)}>
        {texto}
      </button>
    </li>
  );
}
