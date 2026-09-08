/* GABARITO — placar.js esperado ao FIM do desafio E4.
   E3 + recrutar herói novo. No fim, comentado, o BÔNUS de reordenar. */

console.log("placar.js ligado!");

// --- E2: todos os botoes +10 ---
function ligarBotaoMais(botao) {
  botao.addEventListener("click", function () {
    const linha = botao.closest("tr");
    const celPontos = linha.querySelector(".pontos");
    celPontos.textContent = Number(celPontos.textContent) + 10;
  });
}

const botoes = document.querySelectorAll(".btn-mais");
botoes.forEach(function (botao) {
  ligarBotaoMais(botao);
});

// --- E3: somar quantos pontos quiser ---
function acharLinhaPorNome(nome) {
  const linhas = document.querySelectorAll("#corpo-ranking tr");
  for (const linha of linhas) {
    if (linha.querySelector(".nome").textContent === nome) {
      return linha;
    }
  }
  return null;
}

const btnSomar = document.querySelector("#btn-somar");
btnSomar.addEventListener("click", function () {
  const quantidade = Number(document.querySelector("#qtd-pontos").value);
  const nomeAlvo = document.querySelector("#heroi-alvo").value;
  const linha = acharLinhaPorNome(nomeAlvo);

  if (linha === null || quantidade === 0) {
    return;
  }

  const celPontos = linha.querySelector(".pontos");
  celPontos.textContent = Number(celPontos.textContent) + quantidade;
});

// --- E4: recrutar heroi novo ---
const btnRecrutar = document.querySelector("#btn-recrutar");
btnRecrutar.addEventListener("click", function () {
  const nome = document.querySelector("#novo-nome").value.trim();
  if (nome === "") {
    return;
  }

  const corpo = document.querySelector("#corpo-ranking");
  const posicao = corpo.querySelectorAll("tr").length + 1;

  const linha = document.createElement("tr");
  linha.innerHTML = `
    <td class="posicao">${posicao}</td>
    <td class="nome">${nome}</td>
    <td class="pontos">0</td>
    <td><button class="btn-mais" type="button">+10</button></td>
  `;
  corpo.appendChild(linha);

  // o +10 da linha nova tambem precisa funcionar (reaproveita a funcao do E2)
  ligarBotaoMais(linha.querySelector(".btn-mais"));

  // limpa o campo e coloca o novo heroi tambem na lista do "Somar pontos"
  document.querySelector("#novo-nome").value = "";
  const opcao = document.createElement("option");
  opcao.value = nome;
  opcao.textContent = nome;
  document.querySelector("#heroi-alvo").appendChild(opcao);
});

/* ----------------------------------------------------------------------
   BONUS E4 — ranking que se reorganiza (maior pontuacao em cima).
   Para ligar: descomente a funcao abaixo E as chamadas reordenarRanking()
   no fim de cada um dos tres handlers (o +10, o "Somar pontos", o "Novo heroi").

function reordenarRanking() {
  const corpo = document.querySelector("#corpo-ranking");
  const linhas = Array.from(corpo.querySelectorAll("tr"));

  linhas.sort(function (a, b) {
    const pa = Number(a.querySelector(".pontos").textContent);
    const pb = Number(b.querySelector(".pontos").textContent);
    return pb - pa;
  });

  linhas.forEach(function (linha, indice) {
    linha.querySelector(".posicao").textContent = indice + 1;
    corpo.appendChild(linha);
  });
}
---------------------------------------------------------------------- */
