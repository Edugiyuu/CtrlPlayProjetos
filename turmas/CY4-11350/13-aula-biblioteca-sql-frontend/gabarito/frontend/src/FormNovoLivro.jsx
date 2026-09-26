import { useEffect, useState } from 'react';
import { buscarAutores, criarLivro } from './api';

export default function FormNovoLivro({ aoCriar }) {
  const [autores, setAutores] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');
  const [autorId, setAutorId] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    buscarAutores().then((dados) => setAutores(dados));
  }, []);

  async function enviar(evento) {
    evento.preventDefault(); // sem isso, o formulario recarrega a pagina

    try {
      const livro = await criarLivro({
        titulo: titulo,
        genero: genero,
        ano: Number(ano),
        autorId: Number(autorId),
      });

      aoCriar(livro);
      setMensagem(`"${livro.titulo}" cadastrado!`);

      setTitulo('');
      setGenero('');
      setAno('');
      setAutorId('');
    } catch (problema) {
      setMensagem(problema.message);
    }
  }

  return (
    <form onSubmit={enviar} className="form">
      <h2>Cadastrar livro</h2>

      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Titulo" required />
      <input value={genero} onChange={(e) => setGenero(e.target.value)} placeholder="Genero" required />
      <input value={ano} onChange={(e) => setAno(e.target.value)} placeholder="Ano" type="number" required />

      <select value={autorId} onChange={(e) => setAutorId(e.target.value)} required>
        <option value="">Escolha o autor</option>
        {autores.map((autor) => (
          <option key={autor.id} value={autor.id}>{autor.nome}</option>
        ))}
      </select>

      <button type="submit">Salvar no banco</button>

      {mensagem && <p className="msg">{mensagem}</p>}
    </form>
  );
}
