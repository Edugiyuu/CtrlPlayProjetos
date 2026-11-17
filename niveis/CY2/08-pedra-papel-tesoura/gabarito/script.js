function jogar(escolha) {
  // 1. Player 1: mostra o que você clicou
  document.getElementById("escolha1").innerText = escolha;

  // 2. Bot: sorteia 0, 1 ou 2 e pega a opção daquela posição
  let opcoes = ["pedra", "papel", "tesoura"];
  let sorteio = Math.floor(Math.random() * 3);
  let bot = opcoes[sorteio];
  document.getElementById("escolha2").innerText = bot;

  // 3. Quem ganhou?
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
  document.getElementById("resultado").innerText = texto;
}
