/* GABARITO — placar.js esperado ao FIM do desafio E1.
   Só o botão +10 da Aurora funciona. Brakus e Célia ainda não. */

console.log("placar.js ligado!");

// --- E1: primeiro botao +10 (so a Aurora) ---
const btnAurora = document.querySelector("#btn-aurora");
const pontosAurora = document.querySelector("#pontos-aurora");

btnAurora.addEventListener("click", function () {
  // textContent vem como texto ("980"); Number faz virar 980 para dar pra somar.
  const atual = Number(pontosAurora.textContent);
  pontosAurora.textContent = atual + 10;
});
