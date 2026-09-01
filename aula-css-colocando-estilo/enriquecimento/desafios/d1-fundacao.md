# Desafio D1 — Fundação do Painel

**Tempo:** ~30 min · **Dificuldade:** ▓▓░░░
**Arquivo que você edita:** `painel/estilo.css` · **Nunca** edite `painel.html`.

Você vai construir o *Painel da Guilda* inteiro ao longo de 5 desafios, sempre
no **mesmo** `estilo.css`. Neste primeiro, a base: cores da página,
cabeçalho e rodapé.

---

## Aquecimento (5 min)

Sem olhar nada: no `estilo.css`, escreva de memória uma regra que deixe o
`body` com fundo escuro e texto claro. Depois confira no
[CARTAO-DE-MEMORIA.md](../CARTAO-DE-MEMORIA.md) se acertou a sintaxe.

---

## O que fazer

Abra `painel/painel.html` no navegador (está sem estilo). Vá adicionando ao
`estilo.css`, **nesta ordem**, e recarregando a cada bloco:

### 1. Base da página — seletor `body`

| Propriedade | Valor |
|-------------|-------|
| `font-family` | `Verdana, Geneva, sans-serif` |
| `background-color` | `#0d1b2a` |
| `color` | `#e6f0fa` |
| `line-height` | `1.6` |
| `margin` | `0` |
| `padding` | `24px` |

### 2. Cabeçalho

- `.topo` → `text-align: center;` e `margin-bottom: 24px;`
- `h1` → `color: #7cc4ff;` · `font-size: 38px;` · `margin-bottom: 4px;`
- `.lema` → `color: #9fb8d0;` · `font-style: italic;` · `margin-top: 0;`

### 3. Rodapé

- `.rodape` → `text-align: center;` · `color: #9fb8d0;` · `font-size: 13px;`
  · `margin-top: 24px;`

Organize com comentários de seção, ex.:

```css
/* --- base da página --- */
...
/* --- cabeçalho --- */
...
/* --- rodapé --- */
...
```

---

## CHECK

- [ ] Fundo azul-escuro, texto quase branco, letra Verdana.
- [ ] "Guilda dos Aventureiros" centralizado, azul, grande.
- [ ] "Coragem, código e cooperação" logo abaixo, cinza e em itálico.
- [ ] A linha do rodapé centralizada, pequena e cinza.
- [ ] Nada de erro: se uma regra "não pega", confira `;` e `}`.

Confira com `../gabarito/d1-acumulado.css`.

---

## Se travar, revise

- Sintaxe da regra e como ligar o CSS → `CARTAO-DE-MEMORIA.md`, seções
  "A regra" e "Ligar o CSS".
- `.topo` não centraliza? Você usou `.topo` (classe, com ponto) e não `topo`?

---

## Antes de fechar

No fim do `estilo.css`, escreva **uma frase** em comentário: o que a regra do
`body` faz pelo resto da página?
