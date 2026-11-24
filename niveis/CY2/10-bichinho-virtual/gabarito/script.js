// Os números que o jogo lembra: ficam FORA das funções
let comida = 50;
let alegria = 50;
let energia = 50;

function alimentar() {
  comida = comida + 20;
  atualizar();
}

function brincar() {
  alegria = alegria + 20;
  energia = energia - 15;
  atualizar();
}

function dormir() {
  energia = energia + 30;
  comida = comida - 10;
  atualizar();
}

function atualizar() {
  // Cada número vira o tamanho de uma barra
  document.getElementById("barraComida").style.width = comida + "%";
  document.getElementById("barraAlegria").style.width = alegria + "%";
  document.getElementById("barraEnergia").style.width = energia + "%";

  // O rosto muda conforme os números
  let rosto = "🙂";
  if (comida < 30) { rosto = "😫"; }
  if (alegria < 30) { rosto = "😢"; }
  if (energia < 30) { rosto = "😴"; }
  document.getElementById("bicho").innerText = rosto;
}
