# Gabarito — Gerador de Herói

Jogo pronto em [`index.html`](./index.html) + [`style.css`](./style.css) + [`script.js`](./script.js).
Com o desafio inteiro: [`script-desafio.js`](./script-desafio.js) (precisa do card de Força e do `<h2 id="frase">` no HTML; está escrito no topo do arquivo).

O `script.js` inteiro:

```js
function gerar() {
  let nomes = ["Kira", "Brann", "Lyra", "Tobi"];
  let classes = ["Mago", "Guerreiro", "Arqueiro", "Ninja"];
  let armas = ["Espada de Gelo", "Arco de Fogo", "Cajado do Trovão", "Martelo de Pedra"];

  let nome = nomes[Math.floor(Math.random() * 4)];
  let classe = classes[Math.floor(Math.random() * 4)];
  let arma = armas[Math.floor(Math.random() * 4)];

  document.getElementById("caixaNome").innerText = nome;
  document.getElementById("caixaClasse").innerText = classe;
  document.getElementById("caixaArma").innerText = arma;
}
```

Desafio 1, a lacuna: `let emoji = emojis[n];` e depois `document.getElementById("emoji").innerText = emoji;`

## O que mostrar

**Passo 2.** Antes de mexer nos cards, peça `console.log(nome, classe, arma);` e mostre no Console. Ele vê o sorteio funcionando antes de mexer na tela.

**Passo 3.** Escreva uma linha com ele e deixe as outras duas sozinho. É a mesma linha 3 vezes, só trocando o id e a variável.

**Desafio 1.** A resposta do "por quê": com dois `Math.random`, a classe e o emoji são sorteados separados e quase nunca combinam. Com um `n` só, a posição é a mesma nas duas listas.

**Desafio 2.** Copiar um card inteiro no HTML e trocar só o título e o id. O CSS já serve, porque o card novo tem o apelido `card`.

**Desafio 3.** Com 5 nomes e `* 4`, o 5º nunca sai: o sorteio vai só até 3. Com `* 5` e uma lista de 4, às vezes aparece `undefined`.

## Erros que vão acontecer

- Vírgula faltando entre os itens da lista: nada funciona, erro no Console.
- `"nome"` com aspas: aparece a palavra **nome** no card.
- `getElementById("caixanome")`: N minúsculo, erro de `null` no Console.
- `nome[...]` em vez de `nomes[...]`: erro no Console.
