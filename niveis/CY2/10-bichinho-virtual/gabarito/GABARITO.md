# Gabarito — Bichinho Virtual

Jogo pronto em [`index.html`](./index.html) + [`style.css`](./style.css) + [`script.js`](./script.js).
Com o desafio inteiro: [`script-desafio.js`](./script-desafio.js) (precisa do botão 🌙 no HTML).

O `script.js` inteiro:

```js
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
  document.getElementById("barraComida").style.width = comida + "%";
  document.getElementById("barraAlegria").style.width = alegria + "%";
  document.getElementById("barraEnergia").style.width = energia + "%";

  let rosto = "🙂";
  if (comida < 30) { rosto = "😫"; }
  if (alegria < 30) { rosto = "😢"; }
  if (energia < 30) { rosto = "😴"; }
  document.getElementById("bicho").innerText = rosto;
}
```

Desafio 1, a lacuna: `if (energia > 100) { energia = 100; }`. O mesmo pra comida e alegria, e `< 0` vira `= 0`.

## O que mostrar

**Passo 2.** Deixe ele clicar antes de escrever o passo 3: o Console mostra `atualizar is not defined`. O botão está chamando uma função que ainda não existe, e o passo 3 é escrever ela.

**Passo 3.** O momento da aula: no Console (F12), digite `document.getElementById("barraComida").style.width = "100%"` e veja a barra encher. É o JS mexendo no CSS, ao vivo.

**Passo 5.** Se mais de uma barra estiver baixa, o **último** `if` que der certo ganha (energia). Se ele perguntar, é a resposta.

**Desafio 1.** Com energia 140, `width: 140%` passa do fundo. O `if` vem **antes** das linhas de `width`, senão a barra desenha errado uma vez.

**Desafio 3.** `setInterval(passarDia, 5000)` vai **sem** parênteses no `passarDia`: é o nome da função, não a chamada.

## Erros que vão acontecer

- `let comida = 50;` dentro do `alimentar()`: a comida fica sempre 70.
- `style.width = comida;` sem `+ "%"`: a barra não muda (o CSS precisa da unidade).
- `atualizar();` esquecido no `brincar()`: o número muda e a tela não.
- `getElementById("barracomida")`: maiúscula errada, erro de `null` no Console.
