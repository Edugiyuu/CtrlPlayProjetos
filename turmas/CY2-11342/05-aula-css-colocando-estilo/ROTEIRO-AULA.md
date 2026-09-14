# Roteiro de Aula: Colocando estilo (introdução ao CSS)

## Dados

- **Turma alvo:** #11342 — CY2 (aula #5), TER 13:30
- **Aluno em foco:** Murilo Munhoz Correia da Silva (nível #5)
- **Projeto:** Ficha de Herói
- **Duração:** ~2 horas
- **Pré-requisito:** aulas 1–4 (HTML: tags, listas, HTML5)

## Escopo — o que ESTA aula cobre

Somente introdução ao CSS:

- O que é CSS e para que serve
- As 3 formas de aplicar (inline, `<style>` interno, arquivo externo com `<link>`)
- Sintaxe: `seletor { propriedade: valor; }`
- Seletores de **tag**, **classe** (`.`) e **id** (`#`)
- Cores: nome, hexadecimal, `rgb()`
- Texto: `font-family`, `font-size`, `color`, `text-align`, `font-weight`,
  `font-style`, `line-height`
- Fundo: `background-color`
- Noções de caixa para deixar apresentável: `padding`, `margin`, `border`,
  `border-radius`

### Fora do escopo (NÃO passar nesta aula)

Fica para aulas futuras da grade: `display`, `flex`, `grid`, `position`,
seletores combinados avançados, pseudo-classes (`:hover`), variáveis CSS,
media queries, `transition`/`animation`, Tailwind. **Nem como "adiantamento".**

## Roteiro sugerido para 2 horas

### 0–15 min — Abrir o projeto e ver o "antes"

- Abrir `index.html` (já pronto em HTML) no navegador: página sem estilo.
- Perguntar ao Murilo o que ele mudaria visualmente.
- Explicar: o HTML é a estrutura; o CSS diz **como aparece**.

### 15–30 min — As 3 formas de aplicar CSS

- Mostrar `style="color: red"` (inline), `<style>` no `<head>` (interno),
  e `<link rel="stylesheet">` (externo).
- Concluir que usaremos o **arquivo externo** `style.css` (já linkado).
- Escrever a primeira regra em `style.css` e ver a página mudar.

### 30–55 min — Seletores: tag, classe, id

- Estilizar por tag: `body`, `h1`, `h3`.
- Estilizar por classe: `.subtitulo`, `.classe`, `.aviso`.
- Estilizar por id: `#nome`.
- Discutir quando usar cada um (tag = todos iguais; classe = um grupo;
  id = um só).

### 55–80 min — Cores e tipografia

- Cores por nome, hex (`#7cc4ff`) e `rgb(124, 196, 255)`.
- `font-family` com lista de fallback.
- `font-size`, `font-weight`, `font-style`, `text-align`, `line-height`.
- `background-color` no `body` e no cartão.

### 80–105 min — A "caixa": padding, margin, border

- Mostrar que todo elemento é uma caixa.
- `border` + `border-radius` no `.cartao`.
- `padding` (espaço por dentro) x `margin` (espaço por fora).
- `max-width` + `margin: 0 auto` para centralizar o cartão.

### 105–120 min — Acabamento e teste

- Ajustar cores do aviso e das listas.
- Comparar "antes e depois".
- Validar: recarregar, conferir se todos os seletores pegaram.

## Perguntas para conduzir

1. Se eu mudar a cor em `h3`, quantos elementos mudam? E em `#nome`?
2. Qual a diferença entre `padding` e `margin`?
3. Por que a `font-family` tem vários nomes separados por vírgula?
4. O CSS externo é melhor que o inline por quê?

## Murilo já domina este conteúdo — trilha de enriquecimento

O Murilo já viu HTML/CSS introdutório, mas esquece bastante. Ele segue os
**5 desafios de médio porte** em [enriquecimento/](./enriquecimento/README.md),
que constroem **um projeto único** (o Painel da Guilda) num só `estilo.css`
que cresce a cada etapa. As tarefas dão os valores prontos — a dificuldade
vem do tamanho e de não quebrar o que já foi feito. Mesmo assunto da aula.

- **D1 + D2** (fundação + blocos) nesta aula.
- **D3 + D4** (mural/etiquetas + tabela/aviso) na aula seguinte.
- **D5** (refatorar + 2º tema) na terceira; 3º tema de casa.
- Cada desafio começa com um "aquecimento de 5 min" de memória e tem um
  "se travar, revise".
- Se ele travar de verdade, **refaça o desafio anterior**.
- Cartão de consulta: `enriquecimento/CARTAO-DE-MEMORIA.md` (aba sempre aberta).

Gabaritos (`dN-acumulado.css`) em `enriquecimento/gabarito/`. A turma segue o
passo a passo normal.

## Erros comuns

- Esquecer o `;` no fim da linha.
- Esquecer o `.` na classe ou o `#` no id dentro do CSS.
- Salvar o HTML mas não o CSS (ou o contrário).
- `background` vs `background-color` — usar o específico nesta aula.
- Cor escrita errada (`gray` ok, `grey` ok, `#77` incompleto não).

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._

Atualizar `alunos/progresso/turma-11342.md`: status da aula #5, presença do
Murilo, e anotar na coluna Observações que ele está adiantado. Fluxo em
[alunos/WORKFLOW-AULAS.md](../alunos/WORKFLOW-AULAS.md).
