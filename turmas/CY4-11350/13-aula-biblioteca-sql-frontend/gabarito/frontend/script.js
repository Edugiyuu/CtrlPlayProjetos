// Endereco da API. A pagina roda na 5173 e a API na 3000.
const API = 'http://localhost:3000';

// ---------- 1. listar os livros ----------
async function carregarLivros() {
  const resposta = await fetch(`${API}/livros`);
  const livros = await resposta.json();

  const estante = document.getElementById('estante');
  estante.innerHTML = ''; // limpa antes de desenhar de novo

  for (const livro of livros) {
    estante.innerHTML += criarCard(livro);
  }
}

// devolve o HTML de um card, como texto
function criarCard(livro) {
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

  return `
    <div class="card">
      <div class="${capa}">
        <strong>${livro.titulo}</strong>
        <span>${livro.autor.nome}</span>
      </div>
      <div class="info">
        <p>${livro.genero} · ${livro.ano}</p>
        <p class="${selo}">${situacao}</p>
        <button onclick="emprestar(${livro.id})">${botao}</button>
      </div>
    </div>
  `;
}

// ---------- 2. emprestar / devolver ----------
async function emprestar(id) {
  await fetch(`${API}/livros/${id}/emprestimo`, { method: 'PATCH' });
  carregarLivros(); // busca a lista de novo, ja atualizada
}

// ---------- 3. autores no <select> ----------
async function carregarAutores() {
  const resposta = await fetch(`${API}/autores`);
  const autores = await resposta.json();

  const select = document.getElementById('autor');
  for (const autor of autores) {
    select.innerHTML += `<option value="${autor.id}">${autor.nome}</option>`;
  }
}

// ---------- 4. cadastrar ----------
const form = document.getElementById('form');

form.addEventListener('submit', async (evento) => {
  evento.preventDefault(); // sem isso, o formulario recarrega a pagina

  const livro = {
    titulo: document.getElementById('titulo').value,
    genero: document.getElementById('genero').value,
    ano: Number(document.getElementById('ano').value),
    autorId: Number(document.getElementById('autor').value),
  };

  const resposta = await fetch(`${API}/livros`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(livro),
  });

  const corpo = await resposta.json();
  const mensagem = document.getElementById('mensagem');

  if (!resposta.ok) {
    mensagem.textContent = corpo.erro; // a mensagem de erro vem do backend
    return;
  }

  mensagem.textContent = `"${corpo.titulo}" cadastrado!`;
  form.reset(); // limpa os campos
  carregarLivros();
});

// ---------- quando a pagina abre ----------
carregarLivros();
carregarAutores();
