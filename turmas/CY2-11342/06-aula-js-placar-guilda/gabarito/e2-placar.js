/* GABARITO — placar.js esperado ao FIM do desafio E2.
   O bloco do E1 (só Aurora) foi removido: agora uma regra só serve os 3
   botões +10, e vai servir também os heróis criados no E4. */

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
