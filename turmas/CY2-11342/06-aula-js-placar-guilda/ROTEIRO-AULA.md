# Roteiro de Aula #6: Placar da Guilda (primeiro JavaScript / DOM)

## Dados

- **Turma alvo:** #11342 — CY2 (aula #6), TER 13:30
- **Aluno em foco:** Murilo Munhoz Correia da Silva (nível #5)
- **Projeto:** Painel da Guilda (continuação da aula #5)
- **Duração:** ~2 horas
- **Pré-requisito:** aula #5 (CSS) + enriquecimento. **JS é novidade total.**

## Por que esta aula não é "Configurações Especiais" de CSS

O cronograma prevê seletores avançados de CSS aqui. Na prática rendiam pouca
mudança na tela e prendiam o aluno em minúcia — e o Murilo pediu para "colocar
um pouco de JS e somar pontos no placar". Trocado por um **primeiro contato com
JS/DOM** em cima do painel que ele já tem. O cronograma oficial **não muda**
(JS formal segue na aula #12); isto é adaptação, anotada no progresso da turma.

## Objetivo

Sair da aula sabendo: **achar** um pedaço da página com `querySelector`,
**trocar** o que está escrito nele (`.textContent`), e **reagir a um clique**
(`addEventListener`). Aplicado no placar do ranking: clicar num botão soma
pontos ao herói.

## Escopo — o que ESTA aula cobre

- `<script src>` no fim do `<body>`; o Console (F12) como ferramenta de erro.
- `document.querySelector` / `querySelectorAll`; `elemento.querySelector`;
  `.closest("tr")`.
- `.textContent` (ler/escrever); `.value` (input/select); `Number(...)`.
- `elemento.addEventListener("click", function () { ... })`.
- `querySelectorAll` + `.forEach` (rodar o mesmo código para uma lista).
- `if (condição) { return; }` como guarda.
- E4 (casa): `createElement`, `innerHTML` com template literal, `.appendChild`,
  `.trim()`.

### Fora do escopo (NÃO passar, nem como adiantamento)

Frameworks/bibliotecas, `fetch`/API/servidor, `localStorage`, `async`/`await`,
`setTimeout`/`setInterval`, classes, módulos. Está na lista do cartão.

## Conceitos da aula

Cada um ganha um momento próprio antes da prática — não só citado de passagem.

| Conceito | Definição curta pro aluno | Onde entra |
|---|---|---|
| DOM | a página vista como uma árvore de objetos que o JS pode ler e mudar | E1 |
| `querySelector` | "me dá o elemento que casa com este seletor CSS" | E1 |
| `.textContent` | o texto dentro de um elemento — dá pra ler e pra trocar | E1 |
| texto vs número | `.textContent`/`.value` são **texto**; `Number(...)` converte pra somar | E1 (`"98010"` vs `990`) |
| evento + listener | "quando acontecer X neste elemento, rode esta função" | E1 |
| `querySelectorAll` + `forEach` | rodar o mesmo código para cada item de uma lista | E2 |
| `.closest("tr")` | subir do elemento clicado até um ancestral | E2 |
| função com nome | escrever a lógica uma vez e reusar (E2 → E4 de graça) | E2, E4 |
| `.value` | o conteúdo atual de um `<input>` / `<select>` | E3 |
| guarda `return` | sair da função cedo quando os dados não servem | E3, E4 |
| `createElement` / `appendChild` | criar um elemento novo e pendurar na página | E4 |

## Roteiro sugerido para 2 horas

### 0–15 min — Recap da aula #5 + o "porquê" de hoje

- Murilo abre o painel dele. "O CSS deixou tudo bonito. Mas clica em qualquer
  coisa: nada acontece. HTML + CSS é uma foto." — 3 min oral.
- Mostre os botões `+10` e os campos embaixo da tabela: já estão na página,
  **não fazem nada**. "Hoje você dá vida a eles."
- Abrir o Console (F12 → Console) lado a lado. Fica aberto a aula toda.
- Abrir o `CARTAO-DE-MEMORIA` novo.

### 15–20 min — Ligar o `placar.js`

- Ele escreve `console.log("placar.js ligado!")`, recarrega, vê no Console.
- Conceito **DOM** em uma frase + por que o `<script>` fica no fim do `<body>`.
  (Início do E1.)

### 20–45 min — E1: o primeiro botão (Aurora)

- Ele faz `desafios/e1-ligar-o-js.md` inteiro.
- Conduza por pergunta: "a célula mostra 980. Se eu fizer `textContent + 10`,
  por que dá `98010`?" — deixe ele ver o bug na tela, depois `Number(...)`.
- Confira com `gabarito/e1-placar.js`.

### 45–50 min — PONTO DE PARADA

- E1 fechou e ele entendeu evento + `textContent` + `Number`? Segue pro E2.
- Travou na sintaxe do `addEventListener`? Fica mais tempo: refaz o E1 do zero
  num arquivo à parte, sem olhar, e leva o E2 pra próxima.

### 50–80 min — E2: todos os botões (fecha o marco mínimo)

- Ele faz `desafios/e2-todos-os-botoes.md`.
- **Deixe ele cair no bug dos dois listeners** (Aurora somando 20 porque o
  bloco do E1 ficou junto). Não avise antes. Quando ele vir, pergunte "quantas
  vezes o botão da Aurora está 'escutando' o clique agora?".
- Ponto-chave: a lógica do clique escrita **uma vez** dentro de
  `ligarBotaoMais`, e `.forEach` liga nos três.

### 80–85 min — ✅ MARCO MÍNIMO

Cheque em voz alta os 3 itens do marco (fim do `e2-*.md`). Se bater, a aula
está cumprida.

### 85–110 min — E3: somar quanto quiser (se sobrar tempo)

- `desafios/e3-somar-quanto-quiser.md`.
- O ponto novo é `.value` + a função de busca `acharLinhaPorNome`. Conduza:
  "o `<select>` me dá o nome 'Brakus'. Como acho a **linha** do Brakus a partir
  disso?"

### 110–120 min — Fechamento

- Ele lê o próprio `placar.js` de cima a baixo e explica, em voz alta, 3
  trechos (o listener, o `forEach`, a guarda).
- E4 (`e4-novo-heroi.md`) vai como tarefa de casa — é o mais difícil e usa
  `createElement`.

## Perguntas para conduzir

1. Por que o `<script>` está no fim do `<body>` e não no `<head>`? (O que
   `querySelector` acharia se rodasse antes da tabela existir?)
2. `.textContent` devolve `980` ou `"980"`? Como isso vira uma soma certa?
3. No E2 você escreveu a lógica do clique uma vez. Como ela atende os 3 botões?
4. `botao.closest("tr")` — a partir do botão clicado, o que ele devolve?
5. (E4) O `+10` do herói novo funciona, e você não escreveu código pro clique
   dele. Por quê?

## Erros comuns (cola rápida)

| Sintoma | Causa provável |
|---|---|
| Clicar não faz nada, Console limpo | `placar.js` não salvo, ou `addEventListener` no elemento errado |
| `Cannot read properties of null` | `querySelector` não achou — seletor errado, ou `<script>` fora do fim do body |
| Placar vira `98010` em vez de `990` | faltou `Number(...)` — somou texto com texto |
| Só o último botão do ranking funciona | usou `document.querySelector(".pontos")` (1ª da página) em vez de `linha.querySelector(".pontos")` |
| Aurora soma 20 por clique | o bloco do E1 não foi removido no E2 (dois listeners) |
| `+10` do herói novo (E4) morto | esqueceu `ligarBotaoMais(...)` na linha criada |
| `#qtd-pontos` sempre 0 | leu `.value` do elemento errado, ou id trocado |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._

Atualizar `alunos/progresso/turma-11342.md`: status da aula #6, presença do
Murilo, até que desafio (E1–E4) ele chegou, e se o bug dos dois listeners (E2)
ajudou ou confundiu. Fluxo em
[alunos/WORKFLOW-AULAS.md](../../alunos/WORKFLOW-AULAS.md).

- **Próximo tema:** aula #7 — "Hierarquias, Expressões e Layout" (CSS:
  `display` / posicionamento). O JS volta com força na aula #12; se o Murilo
  engatar bem aqui, dá pra pingar mais um `placar.js` de vez em quando entre as
  aulas de CSS.
