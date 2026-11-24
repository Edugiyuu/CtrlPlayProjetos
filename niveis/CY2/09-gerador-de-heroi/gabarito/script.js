function gerar() {
  // 1. As três listas
  let nomes = ["Kira", "Brann", "Lyra", "Tobi"];
  let classes = ["Mago", "Guerreiro", "Arqueiro", "Ninja"];
  let armas = ["Espada de Gelo", "Arco de Fogo", "Cajado do Trovão", "Martelo de Pedra"];

  // 2. Sorteia um de cada
  let nome = nomes[Math.floor(Math.random() * 4)];
  let classe = classes[Math.floor(Math.random() * 4)];
  let arma = armas[Math.floor(Math.random() * 4)];

  // 3. Cada um no seu card
  document.getElementById("caixaNome").innerText = nome;
  document.getElementById("caixaClasse").innerText = classe;
  document.getElementById("caixaArma").innerText = arma;
}
