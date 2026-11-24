# Gabarito — Gerador de Herói

Jogo pronto em [`index.html`](./index.html) + [`style.css`](./style.css) + [`script.js`](./script.js).
Com o desafio inteiro: [`script-desafio.js`](./script-desafio.js).

O `script.js` inteiro:

```js
function gerar() {
  let nomes = ["Kira", "Brann", "Lyra", "Tobi"];
  let classes = ["Mago", "Guerreiro", "Arqueiro", "Ninja"];
  let armas = ["Espada de Gelo", "Arco de Fogo", "Cajado do Trovão", "Martelo de Pedra"];

  let nome = nomes[Math.floor(Math.random() * 4)];
  let classe = classes[Math.floor(Math.random() * 4)];
  let arma = armas[Math.floor(Math.random() * 4)];

  document.getElementById("heroi").innerText = nome + " é " + classe + " e usa " + arma;
  document.getElementById("emoji").innerText = "🦸";
}
```

Desafio 1, a lacuna: `let emoji = emojis[n];`

## O que mostrar

**Passo 2.** Antes de juntar a frase, peça `console.log(nome, classe, arma);` e mostre no Console. Ele vê o sorteio funcionando antes de mexer na tela.

**Passo 3.** Deixe ele escrever `nome + "é" + classe` sem espaço de propósito. Ver `KiraéNinja` na tela ensina mais que explicar.

**Desafio 1.** A resposta do "por quê": com dois `Math.random`, a classe e o emoji são sorteados separados e quase nunca combinam. Com um `n` só, a posição é a mesma nas duas listas.

**Desafio 3.** Com 5 nomes e `* 4`, o 5º nunca sai: o sorteio vai só até 3. Com `* 5` e uma lista de 4, às vezes aparece `undefined`.

## Erros que vão acontecer

- Vírgula faltando entre os itens da lista: nada funciona, erro no Console.
- `"nome"` com aspas: aparece a palavra **nome** na tela.
- `nome[...]` em vez de `nomes[...]`: erro no Console.
- Espaço esquecido nas aspas: `KiraéNinjae usaArco de Fogo`.
