# Desafio D4 — Ranking (tabela) e caixa de aviso

**Tempo:** ~30 min · **Dificuldade:** ▓▓▓░░
**Arquivo:** `painel/estilo.css`. Depois deste, o painel está **completo**.

Faltam dois blocos: a tabela do "Ranking de heróis" e a caixa de aviso da
mestra da guilda (`.destaque`).

---

## Aquecimento (5 min)

Sem olhar: escreva de memória uma regra que dê borda só do lado esquerdo de
um elemento, com 5px, cor `#ffd76a`. (Dica: `border-left`.)

---

## O que fazer

### 1. Tabela — seção `/* --- ranking (tabela) --- */`

- `.tabela` → `border: 1px solid #2f4a6b;` · `border-radius: 10px;`
  · `max-width: 100%;`
- `th, td` (as duas juntas, separadas por vírgula) →
  `border: 1px solid #2f4a6b;` · `padding: 8px 14px;` · `text-align: left;`
- `th` (só o cabeçalho) → `color: #7cc4ff;`

### 2. Aviso — seção `/* --- aviso --- */`

- `.destaque` → `background-color: #12324a;`
  · `border-left: 4px solid #7cc4ff;` · `padding: 10px 14px;`
  · `border-radius: 6px;`

---

## CHECK

- [ ] A tabela tem linhas de grade e as células com espaço interno.
- [ ] O cabeçalho (Posição / Herói / Pontos) está azul.
- [ ] O aviso "A reunião mensal foi adiada..." virou uma faixa com fundo
      diferente e uma barra azul grossa à esquerda.
- [ ] O segundo parágrafo do aviso (sobre a escriba Lía) **não** ganhou a
      faixa — só o `.destaque` mudou.
- [ ] Tudo dos desafios D1–D3 continua igual.

Confira com `../gabarito/d4-acumulado.css`.

---

## Rubrica — hierarquia visual

**Pronto quando:** ao bater o olho no bloco "Aviso", o texto da faixa
`.destaque` **salta primeiro** — antes de você começar a ler. Se os dois
parágrafos parecem iguais, aumente o contraste do fundo ou a espessura da
barra (dentro dos valores dados, teste `border-left: 4px` vs `6px`).

---

## Se travar, revise

- `th, td` com vírgula = "aplique nos dois". Sem a vírgula, `th td` seria
  "td dentro de th" (não é o que você quer).
- `border-left` é um atalho: `espessura estilo cor`, os três de uma vez.

---

## Antes de fechar

Uma frase: por que `.destaque` pegou só um parágrafo do bloco de aviso, e não
os dois?
