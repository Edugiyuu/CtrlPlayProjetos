# Desafio D3 — Mural de missões e etiquetas

**Tempo:** ~35 min · **Dificuldade:** ▓▓▓░░
**Arquivo:** `painel/estilo.css` (continua crescendo).

O bloco "Mural de missões" é uma lista (`.missoes`) com itens (`.missao`).
Cada item tem um título (`.titulo-missao`) e uma etiqueta colorida (`.tag`
mais `.tag-facil`, `.tag-media` ou `.tag-dificil`).

---

## Aquecimento (5 min)

Sem olhar: de que cor fica um `<li>` que recebe `li { color: white }` **e**
`.especial { color: red }`, se ele tiver `class="especial"`? Por quê?
(Resposta no cartão de memória, seção "Os 3 seletores".)

---

## O que fazer

### 1. A lista — seção `/* --- mural de missões --- */`

- `.missoes` → `list-style: none;` · `padding: 0;` · `margin: 0;`
- `.missao` → `border: 1px solid #2f4a6b;` · `border-radius: 10px;`
  · `padding: 10px 14px;` · `margin-bottom: 8px;`
- `.titulo-missao` → `font-weight: bold;`
- `.tag` → `border-radius: 8px;` · `padding: 2px 10px;` · `font-size: 13px;`
  · `font-weight: bold;` · `margin-left: 8px;`

### 2. As três etiquetas — **cole exatamente isto** (tem uma pegadinha):

```css
.tag-facil {
  background-color: #16351f;
  color: #9be7ae;
}
tag-media {
  background-color: #3a3413;
  color: #ffe07a;
}
.tag-dificil {
  background-color: #3a1616;
  color: #ff9b9b;
}
```

Recarregue. **Uma das três etiquetas não vai ganhar cor nenhuma.**

### 3. Ache e conserte

- Qual etiqueta ficou sem cor? _______________
- Olhe o seletor dela com atenção. O que está diferente dos outros dois?
- Conserte. Recarregue. As três devem ficar coloridas.

---

## CHECK

- [ ] A lista perdeu as bolinhas e encostou na margem esquerda.
- [ ] Cada missão dentro de uma caixinha com borda.
- [ ] Título da missão em negrito; etiqueta ao lado, arredondada.
- [ ] **Fácil** verde, **Média** amarela, **Difícil** vermelha — dá para
      saber a dificuldade **sem ler** o texto.
- [ ] Cabeçalho, blocos e rodapé dos desafios anteriores intactos.

Confira com `../gabarito/d3-acumulado.css`.

---

## Rubrica — a pegadinha

**Pronto quando você conseguir explicar** (escreva num comentário):

- O seletor errado era `tag-media`, **sem o ponto**.
- Sem o ponto, o navegador procura uma etiqueta HTML `<tag-media>` — que não
  existe. Então a regra não pega em ninguém.
- O certo é `.tag-media` (com ponto = "classe chamada tag-media").

---

## Se travar, revise

- Diferença entre `tag` e `.tag` no CSS → `CARTAO-DE-MEMORIA.md`.
- Se a lista continua com bolinha, confira `list-style: none;` (e não
  `list-style-type` sozinho).

---

## Antes de fechar

Uma frase: por que faltar **um único ponto** apagou a etiqueta inteira?
