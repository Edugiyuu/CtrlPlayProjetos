function gerar() {
  // 1. As três listas
  let nomes = ["Kira", "Brann", "Lyra", "Tobi"];
  let classes = ["Mago", "Guerreiro", "Arqueiro", "Ninja"];
  let armas = ["Espada de Gelo", "Arco de Fogo", "Cajado do Trovão", "Martelo de Pedra"];

  // 2. Sorteia um de cada
  let nome = nomes[Math.floor(Math.random() * 4)];
  let classe = classes[Math.floor(Math.random() * 4)];
  let arma = armas[Math.floor(Math.random() * 4)];

  // 3. Junta tudo numa frase com +
  document.getElementById("heroi").innerText = nome + " é " + classe + " e usa " + arma;
  document.getElementById("emoji").innerText = "🦸";
}
