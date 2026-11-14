# Gabarito — Minhas cartas de monstro

Página pronta em [`index.html`](./index.html), já com o monstro elétrico do desafio. O CSS inteiro:

```css
h1 {
  background-color: #1E293B;   /* etapa 2 (revisão) */
  color: #FFFFFF;
  padding: 20px;
}

.card {
  padding: 20px;               /* etapa 2 (revisão) */
  margin-bottom: 20px;
  border: 4px solid #1E293B;   /* etapa 3 */
  border-radius: 16px;         /* etapa 4 */
  transition: 0.3s;            /* etapa 7 */
}

.card:hover {
  margin-left: 20px;           /* etapa 7 */
}

.fogo   { background-color: #FECACA; }   /* etapa 5 */
.agua   { background-color: #BFDBFE; }   /* etapa 6 */
.planta { background-color: #BBF7D0; }

.eletrico { background-color: #FEF08A; } /* desafio */
```

O HTML do monstro novo (desafio 1):

```html
<div class="card eletrico">
  <h2>Zapt</h2>
  <p>Tipo elétrico. Deixa o cabelo de todo mundo em pé.</p>
</div>
```

## O que mostrar

**Etapa 2.** Não deixe copiar da aula 02. Se travar, pergunte só "qual era a regra que separava os cards?".

**Etapa 3.** A ordem do `border` é grossura, tipo, cor. Deixe ele errar a ordem uma vez e ver que não aparece.

**Etapa 5.** O momento da aula. Antes de escrever, pergunte: "se eu puser a cor no `.card`, o que acontece?". Teste: as 3 ficam vermelhas. Volte e ponha no `.fogo`.

**Etapa 7 (hover, só um gostinho).** Primeiro sem `transition`: a carta pula. Depois com `transition: 0.3s` no `.card`: ela desliza. Não aprofunde: a aula 04 é toda sobre isso. Basta ele sair sabendo que `:hover` = "só com o mouse em cima".

**Desafio 1.** É a primeira vez que ele escreve um bloco de HTML inteiro. Deixe ele copiar o Broto e trocar, mas confira que o `class` tem os **dois** apelidos. A pergunta do teste: a borda veio sozinha porque a carta tem o apelido `card`.

## Erros que vão acontecer

- `class="eletrico"` sem o `card`: cor certa, sem borda e sem espaço.
- `class="card,fogo"` ou `class="card-fogo"`: vira um apelido só, que não existe no CSS.
- `background-color` no `.card`: todas da mesma cor.
- No HTML novo, `<h2>` sem fechar: o resto da página vira título.
