# Desafio E3 — Somar quantos pontos você quiser

**Tempo:** ~25 min · **Dificuldade:** ▓▓▓░░
**Arquivo:** `painel/placar.js` (continua o do E2).

O `+10` é fixo. Agora o mestre da guilda quer premiar um herói com **50, 100,
qualquer quantidade** — usando o campo de número e a lista de heróis que já
estão no painel, embaixo da tabela.

---

## Aquecimento (5 min)

Sem olhar: como você lê o que está digitado num `<input>`? E o que está
escolhido num `<select>`? Esse valor vem como texto ou número? Confira no
cartão, seção "Ler e trocar o conteúdo".

---

## O que fazer

Numa seção nova:

```js
// --- E3: somar quantos pontos quiser ---
```

Os campos no HTML são: `#qtd-pontos` (input de número), `#heroi-alvo` (select
com os nomes) e `#btn-somar` (botão).

### 1. Achar a linha de um herói pelo nome

Cada linha tem `<td class="nome">Aurora</td>`. Você precisa, dado o nome
`"Brakus"`, achar a `<tr>` do Brakus.

- Crie `function acharLinhaPorNome(nome) { ... }`.
- Dentro: pegue todas as linhas (`document.querySelectorAll("#corpo-ranking tr")`),
  percorra com um laço, e para cada uma compare
  `linha.querySelector(".nome").textContent` com o `nome` recebido.
- Quando bater, `return linha;`. Se nenhuma bater, `return null;` no fim.

### 2. O botão "Somar pontos"

- `addEventListener("click", ...)` no `#btn-somar`. Dentro:
  - leia `#qtd-pontos` → `.value` → `Number(...)` numa constante `quantidade`.
  - leia `#heroi-alvo` → `.value` (já é o nome) numa constante `nomeAlvo`.
  - `const linha = acharLinhaPorNome(nomeAlvo);`
  - **guarda:** se `linha` for `null` **ou** `quantidade` for `0`, `return;`.
  - pegue `linha.querySelector(".pontos")`, leia com `Number(...)`, some
    `quantidade`, escreva de volta.
- **Teste agora:** digite `50`, escolha "Brakus", clique em "Somar pontos" — o
  Brakus ganha 50. Troque para "Célia" e `100` — a Célia ganha 100. O `+10`
  do E2 continua funcionando.

---

## CHECK

- [ ] Digitar um número + escolher um herói + "Somar pontos" soma direitinho.
- [ ] Funciona para os três heróis da lista.
- [ ] Apagar o campo de número (fica vazio) e clicar: **nada quebra** (a guarda
      segura — campo vazio vira `0`).
- [ ] Os botões `+10` do E2 continuam funcionando.
- [ ] Console sem erro.

Confira com `../gabarito/e3-placar.js`.

---

## Se travar, revise

- `.value`, `Number`, `if (...) return;` → `CARTAO-DE-MEMORIA.md`.
- Somou "50" como texto e o placar virou `91550`? Faltou `Number(...)` no
  `.value`.
- `acharLinhaPorNome` sempre devolve `null`? Confira se está comparando
  `.textContent` (e não o elemento inteiro) e se os acentos batem
  ("Célia" com acento nos dois lados).

---

## Antes de fechar

Uma frase em comentário: por que o `.value` do campo de pontos precisa passar
por `Number(...)`, mas o `.value` do `<select>` de heróis pode ser usado
direto?
