# Gabarito — Padding: meu jogo favorito

Página pronta em [`index.html`](./index.html). O CSS inteiro:

```css
h1 {
  background-color: #2563EB;   /* etapa 2 */
  color: #FFFFFF;
  padding: 20px;               /* etapa 3 */
}

p {
  background-color: #FEF3C7;   /* etapa 6 */
  padding: 16px;
}

button {
  background-color: #22C55E;   /* etapa 4 */
  color: #FFFFFF;
  padding: 20px;               /* etapa 5 */
}
```

## O que mostrar

**Etapa 2.** Deixe ele ver a letra **grudada** na borda da faixa azul antes de falar de padding. É o problema que o padding resolve.

**Etapa 3.** Faça ele testar `0`, `20` e `60`. A pergunta: "o fundo cresceu ou encolheu?". O padding fica **dentro** da caixa, então o fundo cresce junto.

**Etapa 5.** O botão sem padding e com padding é o antes e depois da aula. Se der, deixe os dois na tela (Ctrl+Z e Ctrl+Y).

**Desafio, item 3.** Não tem número certo: o botão precisa de um padding maior que o do título. Se ele mexer no `h1`, vale também.

## Erros que vão acontecer

- `<h1> { }` com os sinais de tag: no CSS é só `h1`.
- `padding: 20;` sem `px`: não faz nada.
- Regra escrita fora do `<style>` (no `<body>`): aparece como texto na página.
