# Desafio D2 — Blocos e centralização

**Tempo:** ~35 min · **Dificuldade:** ▓▓▓░░
**Arquivo:** `painel/estilo.css` (continua o do D1 — não recomece).

O painel tem 3 seções (`Mural`, `Ranking`, `Aviso`), todas com a classe
`.bloco`. Agora elas viram cartões centralizados.

---

## Aquecimento (5 min)

Sem olhar: escreva de memória a regra que centraliza uma caixa na horizontal
(dica: são **duas** propriedades juntas). Depois confira no cartão de memória.

---

## O que fazer

Adicione ao `estilo.css`, numa seção nova `/* --- blocos --- */`:

### 1. `.bloco`

| Propriedade | Valor | Para quê |
|-------------|-------|----------|
| `max-width` | `700px` | não deixa o cartão ficar largo demais |
| `margin` | `0 auto 20px auto` | centraliza (auto nos lados) + espaço embaixo |
| `background-color` | `#14263b` | fundo do cartão |
| `border` | `1px solid #2f4a6b` | moldura fina |
| `border-radius` | `14px` | cantos arredondados |
| `padding` | `20px 24px` | respiro interno (20 em cima/baixo, 24 nos lados) |

### 2. `h2` (os títulos de cada bloco)

- `color: #7cc4ff;`
- `font-size: 20px;`
- `border-bottom: 1px solid #2f4a6b;` (risquinho embaixo do título)
- `padding-bottom: 6px;`
- `margin-top: 0;` (cola no topo do cartão)

---

## CHECK

- [ ] Três cartões azul-escuros, centralizados, com a mesma largura.
- [ ] Espaço visível **entre** um cartão e o outro.
- [ ] Texto dentro do cartão afastado da borda (não encostado).
- [ ] Cada título com uma linha fina embaixo.
- [ ] O cabeçalho e o rodapé do D1 **continuam iguais** — você não quebrou nada.

Confira com `../gabarito/d2-acumulado.css`.

---

## Rubrica (a parte de julgamento)

Aumente e diminua a janela do navegador. **Pronto quando:**

1. os cartões continuam centralizados, com margens laterais iguais;
2. em tela larga eles param de crescer aos 700px;
3. nada do D1 mudou de lugar ou de cor.

---

## Se travar, revise

- Centralizar caixa → `CARTAO-DE-MEMORIA.md`, seção "A caixa"
  (`max-width` + `margin: 0 auto`).
- `padding` x `margin`: um é por dentro, o outro por fora.
- Se um cartão "sumiu" ou ficou torto, procure uma chave `}` faltando na
  regra logo acima.

---

## Antes de fechar

Uma frase em comentário: qual a diferença entre o `padding` e o `margin` que
você usou no `.bloco`?
