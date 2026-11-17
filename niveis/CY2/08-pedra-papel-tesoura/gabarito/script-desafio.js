// Versão com o desafio (placar + primeiro a 3 + cor).
// Pra usar: no index.html, troque script.js por script-desafio.js
// e acrescente <p id="placar">Você 0 x 0 Bot</p> embaixo do resultado.

let vitorias1 = 0;   // fora da função: assim o número não volta pra 0 a cada clique
let vitorias2 = 0;

function jogar(escolha) {
  document.getElementById("escolha1").innerText = escolha;

  let opcoes = ["pedra", "papel", "tesoura"];
  let sorteio = Math.floor(Math.random() * 3);
  let bot = opcoes[sorteio];
  document.getElementById("escolha2").innerText = bot;

  let texto;
  if (escolha === bot) {
    texto = "Empate!";
  } else if (escolha === "pedra" && bot === "tesoura") {
    texto = "Você ganhou!";
  } else if (escolha === "papel" && bot === "pedra") {
    texto = "Você ganhou!";
  } else if (escolha === "tesoura" && bot === "papel") {
    texto = "Você ganhou!";
  } else {
    texto = "O bot ganhou!";
  }

  // Desafio 1: placar
  if (texto === "Você ganhou!") { vitorias1 = vitorias1 + 1; }
  if (texto === "O bot ganhou!") { vitorias2 = vitorias2 + 1; }
  document.getElementById("placar").innerText = "Você " + vitorias1 + " x " + vitorias2 + " Bot";

  // Desafio 2: primeiro a 3 vence
  if (vitorias1 === 3) { texto = "FIM DE JOGO: você venceu!"; }
  if (vitorias2 === 3) { texto = "FIM DE JOGO: o bot venceu!"; }

  document.getElementById("resultado").innerText = texto;

  // Bônus: cor
  if (texto === "Você ganhou!") { document.getElementById("resultado").style.color = "#22C55E"; }
  if (texto === "O bot ganhou!") { document.getElementById("resultado").style.color = "#EF4444"; }
  if (texto === "Empate!") { document.getElementById("resultado").style.color = "white"; }
}
