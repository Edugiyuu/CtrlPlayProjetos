const listaCartas = document.querySelector("#lista-cartas");
const mensagem = document.querySelector("#mensagem");

const formCriar = document.querySelector("#form-criar");
const formEditar = document.querySelector("#form-editar");
const formExcluir = document.querySelector("#form-excluir");
const botaoCarregar = document.querySelector("#botao-carregar");

function mostrarMensagem(texto) {
  mensagem.textContent = texto;
}

async function carregarCartas() {
  const resposta = await fetch("/cartas");
  const cartas = await resposta.json();

  listaCartas.innerHTML = "";

  cartas.forEach((carta) => {
    const item = document.createElement("li");
    item.textContent = `ID ${carta.id} - ${carta.nome} | Tipo: ${carta.tipo} | HP: ${carta.hp}`;
    listaCartas.appendChild(item);
  });
}

formCriar.addEventListener("submit", async (event) => {
  event.preventDefault();

  const novaCarta = {
    nome: document.querySelector("#nome").value,
    tipo: document.querySelector("#tipo").value,
    hp: document.querySelector("#hp").value
  };

  const resposta = await fetch("/cartas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(novaCarta)
  });

  if (!resposta.ok) {
    mostrarMensagem("Nao foi possivel criar a carta.");
    return;
  }

  formCriar.reset();
  mostrarMensagem("Carta criada com sucesso.");
  carregarCartas();
});

formEditar.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = document.querySelector("#editar-id").value;
  const nome = document.querySelector("#editar-nome").value;
  const tipo = document.querySelector("#editar-tipo").value;
  const hp = document.querySelector("#editar-hp").value;

  const dadosAtualizados = {};

  if (nome) {
    dadosAtualizados.nome = nome;
  }

  if (tipo) {
    dadosAtualizados.tipo = tipo;
  }

  if (hp) {
    dadosAtualizados.hp = hp;
  }

  const resposta = await fetch(`/cartas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosAtualizados)
  });

  if (!resposta.ok) {
    mostrarMensagem("Nao foi possivel atualizar a carta.");
    return;
  }

  formEditar.reset();
  mostrarMensagem("Carta atualizada com sucesso.");
  carregarCartas();
});

formExcluir.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = document.querySelector("#excluir-id").value;

  const resposta = await fetch(`/cartas/${id}`, {
    method: "DELETE"
  });

  if (!resposta.ok) {
    mostrarMensagem("Nao foi possivel excluir a carta.");
    return;
  }

  formExcluir.reset();
  mostrarMensagem("Carta excluida com sucesso.");
  carregarCartas();
});

botaoCarregar.addEventListener("click", carregarCartas);

carregarCartas();
