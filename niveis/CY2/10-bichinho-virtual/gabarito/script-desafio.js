// Versão com o desafio (limite 0–100 + passar um dia + tempo sozinho).
// Pra usar: no index.html, troque script.js por script-desafio.js
// e acrescente <button onclick="passarDia()">🌙 Passar um dia</button> junto dos outros botões.

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

// Desafio 2: o dia passa
function passarDia() {
  comida = comida - 20;
  alegria = alegria - 20;
  energia = energia - 20;
  atualizar();
}

function atualizar() {
  // Desafio 1: nenhum número passa de 100 nem fica abaixo de 0
  if (comida > 100) { comida = 100; }
  if (alegria > 100) { alegria = 100; }
  if (energia > 100) { energia = 100; }
  if (comida < 0) { comida = 0; }
  if (alegria < 0) { alegria = 0; }
  if (energia < 0) { energia = 0; }

  document.getElementById("barraComida").style.width = comida + "%";
  document.getElementById("barraAlegria").style.width = alegria + "%";
  document.getElementById("barraEnergia").style.width = energia + "%";

  let rosto = "🙂";
  if (comida < 30) { rosto = "😫"; }
  if (alegria < 30) { rosto = "😢"; }
  if (energia < 30) { rosto = "😴"; }
  document.getElementById("bicho").innerText = rosto;
}

// Bônus: o dia passa sozinho a cada 5 segundos
setInterval(passarDia, 5000);
