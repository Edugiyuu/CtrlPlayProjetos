/* GABARITO — placar.js esperado ao FIM do desafio E3.
   E2 + o botão "Somar pontos" (quantidade livre por herói escolhido). */

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
