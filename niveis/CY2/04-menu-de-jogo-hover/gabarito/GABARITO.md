# Gabarito — O menu do jogo

Página pronta em [`index.html`](./index.html), já com o botão Loja do desafio. O CSS inteiro:

```css
body {
  background-color: #0F172A;   /* etapa 2 (revisão) */
}

h1 {
  color: #FFFFFF;
  padding: 20px;
}

.botao {
  background-color: #334155;
  color: #FFFFFF;
  padding: 20px;
  margin-bottom: 16px;
  border: 4px solid #FFFFFF;
  border-radius: 12px;
  transition: 0.3s;            /* etapa 4 */
}

.jogar:hover {
  background-color: #22C55E;   /* etapa 3 */
}

.opcoes:hover {
  margin-left: 40px;           /* etapa 5 */
}

.sair:hover {
  background-color: #EF4444;   /* etapa 6 */
  border-radius: 40px;
}

.loja:hover {                  /* desafio: a escolha é dele */
  background-color: #EAB308;
  padding: 30px;
}
```

O HTML do botão novo (desafio 1):

```html
<div class="botao loja">Loja</div>
```

## O que mostrar

**Etapa 3.** Deixe sem `transition` de propósito. Ele tem que ver o verde **pular** antes de ver ele **deslizar**.

**Etapa 4.** Faça ele testar `2s`: fica exagerado e é aí que ele entende o que o número faz. O momento da aula é a pergunta "por que no `.botao` e não no `.jogar:hover`?". Não responda: o desafio 2 responde.

**Etapa 6.** Duas linhas no mesmo hover, e as duas animam juntas sem `transition` extra.

**Desafio 1.** A resposta: a Loja tem o apelido `botao`, e o `transition` mora no `.botao`. Então ela já anima.

**Desafio 2.** Com o `transition` só no `:hover`, a ida é devagar e a volta **pula**. Quando o mouse sai, a regra do hover para de valer, e o `transition` dela também.

## Erros que vão acontecer

- `.jogar :hover` com espaço: não funciona.
- `.botao:hover` no lugar de `.jogar:hover`: todos os botões mudam igual.
- `transition: 0.3;` sem o `s`: não anima.
- Botão Loja com `class="loja"` só: aparece sem visual nenhum.
