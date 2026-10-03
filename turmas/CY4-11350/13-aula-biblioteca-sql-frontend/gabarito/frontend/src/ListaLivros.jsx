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
    <div className="estante">
      {livros.map((livro) => (
        <CardLivro key={livro.id} livro={livro} aoClicar={emprestar} />
      ))}
    </div>
  );
}

// Um card por livro. Todo livro tem autor, porque o backend exige o autorId.
function CardLivro({ livro, aoClicar }) {
  // if normal, antes do return: fica mais facil de ler do que dentro do JSX.
  let situacao = 'Emprestado';
  let selo = 'selo fora';
  let botao = 'Devolver';

  if (livro.disponivel) {
    situacao = 'Disponivel';
    selo = 'selo ok';
    botao = 'Emprestar';
  }

  // a cor da capa depende do genero
  let capa = 'capa outro';
  if (livro.genero === 'Romance') {
    capa = 'capa romance';
  }
  if (livro.genero === 'Fantasia') {
    capa = 'capa fantasia';
  }

  return (
    <article className="card">
      <div className={capa}>
        <strong>{livro.titulo}</strong>
        <span>{livro.autor.nome}</span>
      </div>

      <div className="info">
        <p className="detalhe">{livro.genero} · {livro.ano}</p>
        <p className={selo}>{situacao}</p>
        <button onClick={() => aoClicar(livro.id)}>{botao}</button>
      </div>
    </article>
  );
}
