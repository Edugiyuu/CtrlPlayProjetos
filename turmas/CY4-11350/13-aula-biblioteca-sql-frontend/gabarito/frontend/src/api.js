// Um lugar so pra guardar o endereco da API e as chamadas fetch.
const API = 'http://localhost:3000';

// credentials: 'include' faz o navegador mandar/receber cookies entre origens
// diferentes. Ainda nao ha login aqui, mas ja deixa pronto pra aula #12.
const opcoes = { credentials: 'include' };

export async function buscarLivros() {
  const resposta = await fetch(`${API}/livros`, opcoes);

  if (!resposta.ok) {
    throw new Error('Falha ao buscar os livros');
  }

  return resposta.json();
}

export async function buscarAutores() {
  const resposta = await fetch(`${API}/autores`, opcoes);

  if (!resposta.ok) {
    throw new Error('Falha ao buscar os autores');
  }

  return resposta.json();
}

export async function criarLivro(dados) {
  const resposta = await fetch(`${API}/livros`, {
    ...opcoes,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });

  const corpo = await resposta.json();

  if (!resposta.ok) {
    throw new Error(corpo.erro); // a mensagem de erro vem do backend
  }

  return corpo;
}

export async function alternarEmprestimo(id) {
  const resposta = await fetch(`${API}/livros/${id}/emprestimo`, {
    ...opcoes,
    method: 'PATCH',
  });

  if (!resposta.ok) {
    throw new Error('Falha ao atualizar o livro');
  }

  return resposta.json();
}
