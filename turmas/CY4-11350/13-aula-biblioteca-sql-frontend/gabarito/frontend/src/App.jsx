import { useEffect, useState } from 'react';
import { buscarLivros } from './api';
import ListaLivros from './ListaLivros.jsx';
import FormNovoLivro from './FormNovoLivro.jsx';

export default function App() {
  const [livros, setLivros] = useState([]);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);

  // useEffect com [] : roda uma vez so, quando a tela abre.
  useEffect(() => {
    buscarLivros()
      .then((dados) => setLivros(dados))
      .catch(() => setErro('Nao consegui falar com a API. O backend esta rodando na porta 3000?'))
      .finally(() => setCarregando(false));
  }, []);

  function aoCriar(livroNovo) {
    setLivros([...livros, livroNovo]);
  }

  function aoAtualizar(livroAtualizado) {
    const novaLista = livros.map((livro) => {
      if (livro.id === livroAtualizado.id) {
        return livroAtualizado;
      }
      return livro;
    });

    setLivros(novaLista);
  }

  if (carregando) {
    return <main><p>Carregando...</p></main>;
  }

  return (
    <main>
      <h1>Biblioteca Digital</h1>
      <p className="sub">React (5173) consumindo a API Express + SQLite (3000)</p>

      {erro && <p className="erro">{erro}</p>}

      <ListaLivros livros={livros} aoAtualizar={aoAtualizar} />
      <FormNovoLivro aoCriar={aoCriar} />
    </main>
  );
}
