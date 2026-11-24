// Versão com o desafio (emoji da classe + força + 5º nome).
// Pra usar: no index.html, troque script.js por script-desafio.js.

function gerar() {
  let nomes = ["Kira", "Brann", "Lyra", "Tobi", "Zuri"];   // desafio 3: 5 nomes
  let classes = ["Mago", "Guerreiro", "Arqueiro", "Ninja"];
  let emojis = ["🧙", "⚔️", "🏹", "🥷"];                    // desafio 1: mesma ordem das classes
  let armas = ["Espada de Gelo", "Arco de Fogo", "Cajado do Trovão", "Martelo de Pedra"];

  let nome = nomes[Math.floor(Math.random() * 5)];         // * 5 porque agora são 5
  let n = Math.floor(Math.random() * 4);                   // um sorteio só...
  let classe = classes[n];                                 // ...pra classe
  let emoji = emojis[n];                                   // ...e pro emoji
  let arma = armas[Math.floor(Math.random() * 4)];
  let forca = Math.floor(Math.random() * 100) + 1;         // desafio 2: 1 a 100

  document.getElementById("heroi").innerText =
    nome + " é " + classe + " e usa " + arma + ". Força: " + forca;
  document.getElementById("emoji").innerText = emoji;
}
