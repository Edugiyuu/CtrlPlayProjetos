# Gabarito — Pedra, Papel e Tesoura

Jogo pronto em [`index.html`](./index.html) + [`style.css`](./style.css) + [`script.js`](./script.js) (passos 3 a 5).
Com o desafio inteiro: [`script-desafio.js`](./script-desafio.js) (troque o nome no `<script>` e acrescente o `<p id="placar">`).

O `script.js` inteiro:

```js
function jogar(escolha) {
  document.getElementById("escolha1").innerText = escolha;      // passo 3

  let opcoes = ["pedra", "papel", "tesoura"];                    // passo 4
  let sorteio = Math.floor(Math.random() * 3);
  let bot = opcoes[sorteio];
  document.getElementById("escolha2").innerText = bot;

  let texto;                                                     // passo 5
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
```

Desafio 1, as lacunas:

```js
if (texto === "O bot ganhou!") { vitorias2 = vitorias2 + 1; }
document.getElementById("placar").innerText = "Você " + vitorias1 + " x " + vitorias2 + " Bot";
```

## O que mostrar

**Passo 3.** Antes de escrever, pergunte: "cliquei em Papel, quanto vale `escolha`?". Se ele responde "papel", entendeu a função.

**Passo 4.** Faça ele rodar `Math.random() * 3` no Console (F12) umas 5 vezes. Ver os números quebrados aparecendo explica o `Math.floor` sozinho.

**Passo 5.** Use a tabela colorida da tela 5. Os 3 `else if` verdes são as 3 casas verdes. O `else` vermelho pega as 3 casas vermelhas de uma vez: não precisa escrever as derrotas.

**Desafio 1.** A pergunta da aula: com o `let vitorias1 = 0;` dentro da função, o placar fica sempre em 0 ou 1. Cada clique roda a função do começo e zera o número. Fora, ele só é criado uma vez.

**Desafio 2.** O `if (vitorias1 === 3)` vem depois do placar, senão a terceira vitória não conta a tempo.

## Erros que vão acontecer

- `"Pedra"` com maiúscula no `if`: o botão manda `pedra` minúsculo, nunca bate e ele sempre perde.
- `if (escolha = bot)` com um `=`: vira "guardar", sempre dá empate.
- `getElementById("escolha 1")` com espaço: `Cannot set properties of null` no Console.
- Linhas do passo 4 coladas **depois** da `}` da função: o Bot não muda.
- `script.js` salvo em outra pasta, ou com outro nome (`Script.js`): `jogar is not defined`.
