# Gabarito — Meus 3 personagens favoritos

Página pronta em [`index.html`](./index.html). O CSS inteiro:

```css
h1 {
  background-color: #2563EB;   /* etapa 2 (revisão da aula 01) */
  color: #FFFFFF;
  padding: 20px;
}

.card {
  background-color: #FEF3C7;   /* etapa 3 */
  padding: 20px;               /* etapa 4 */
  margin-bottom: 20px;         /* etapa 5 */
}
```

## O que mostrar

**Etapa 3.** Antes de escrever, pergunte: "quantas regras eu preciso pra pintar os 3?". Escreva uma só e deixe ele ver os 3 ficarem amarelos. É o momento da aula.

**Etapa 4.** Com o padding, os cards ficam **grudados**. Não conserte: é o problema que o margin resolve.

**Etapa 5.** Faça ele trocar `20px` por `60px` e perguntar: "o amarelo cresceu?". Não cresceu: o margin é fora. Compare com a etapa 4, em que o amarelo cresceu.

**Desafio, item 3.** Texto mais longe da borda = `padding`. Cards mais longe um do outro = `margin-bottom`.

## Erros que vão acontecer

- `card { }` sem o ponto: não pinta nada.
- Mudou o `class` de um card ao trocar o personagem (`class="mario"`): aquele card fica sem cor.
- `margin-bottom` no `h1` em vez do `.card`: afasta o título, não os cards.
