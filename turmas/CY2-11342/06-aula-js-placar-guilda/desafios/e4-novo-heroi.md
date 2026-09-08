# Desafio E4 — Recrutar um herói novo (se sobrar tempo, ou em casa)

**Tempo:** ~30 min · **Dificuldade:** ▓▓▓▓░
**Arquivo:** `painel/placar.js` (continua o do E3).

Até agora você **mudou** coisas que já existiam na página. Agora você vai
**criar** uma linha nova na tabela — um herói que não estava no HTML.

---

## Aquecimento (5 min)

Sem olhar: o que `document.createElement("tr")` devolve? O que faz `.appendChild`?
Para que serve o texto entre crases ` `` ` com `${ ... }` dentro? Confira no
cartão, seção "Criar um elemento novo".

---

## O que fazer

Numa seção nova:

```js
// --- E4: recrutar heroi novo ---
```

Os campos no HTML: `#novo-nome` (input de texto) e `#btn-recrutar` (botão).

### 1. O botão "Novo herói"

- `addEventListener("click", ...)` no `#btn-recrutar`. Dentro:
  - leia `#novo-nome` → `.value` → `.trim()` numa constante `nome`.
  - **guarda:** se `nome === ""`, `return;` (não recruta herói sem nome).
  - descubra a posição do novo herói: quantas linhas o `#corpo-ranking` já tem
    (`querySelectorAll("tr").length`) **+ 1**.
  - `const linha = document.createElement("tr");`
  - preencha `linha.innerHTML` com quatro `<td>`: a posição, o `${nome}`,
    `0` pontos, e **um botão igual aos outros**
    (`<td><button class="btn-mais" type="button">+10</button></td>`).
  - `#corpo-ranking` recebe a linha com `.appendChild(linha)`.

### 2. O botão +10 do herói novo TEM que funcionar

- A linha nova tem um `<button class="btn-mais">`, mas ninguém chamou
  `ligarBotaoMais` para ele ainda — então clicar não faz nada.
- Depois do `appendChild`, chame `ligarBotaoMais` passando o botão da linha
  nova: `ligarBotaoMais(linha.querySelector(".btn-mais"));`
- (Repare: a função do E2 está sendo reaproveitada de graça. É pra isso que ela
  virou função.)

### 3. Arremate

- Depois de recrutar, limpe o campo: `#novo-nome` → `.value = "";`
- **Teste agora:** digite "Draven", clique em "Novo herói". Aparece a linha
  `4 · Draven · 0 · [+10]`. Clique no `+10` dele: vai para 10, 20... Recrute
  outro: entra como posição 5.

---

## CHECK

- [ ] "Novo herói" com um nome cria a linha na tabela, com posição certa e 0
      pontos.
- [ ] Campo vazio + "Novo herói": nada acontece (guarda).
- [ ] O `+10` do herói recém-criado **funciona**.
- [ ] O campo de nome fica limpo depois de recrutar.
- [ ] E1–E3 continuam de pé (os `+10` antigos, o "Somar pontos").
- [ ] Console sem erro.

Confira com `../gabarito/e4-placar.js`.

---

## Bônus (só se quiser) — ranking que se reorganiza

Hoje o herói novo entra sempre por último, mesmo com muitos pontos. Faça uma
função `reordenarRanking()` que:

- pega as linhas numa lista de verdade: `Array.from(corpo.querySelectorAll("tr"))`;
- ordena por pontos (maior primeiro) com `.sort(...)`;
- percorre a lista já ordenada e, para cada linha, atualiza o número da coluna
  "Posição" e faz `corpo.appendChild(linha)` de novo (reanexar move a linha
  para o fim, então na ordem certa elas se acomodam).

Chame `reordenarRanking()` no fim de cada um dos seus botões (o `+10`, o
"Somar pontos" e o "Novo herói"). O gabarito `e4-placar.js` traz essa parte
comentada no fim.

---

## Se travar, revise

- `createElement`, `innerHTML`, template com crases, `.trim()` →
  `CARTAO-DE-MEMORIA.md`.
- O herói novo aparece mas o `+10` dele não faz nada? Você esqueceu de chamar
  `ligarBotaoMais` para o botão da linha nova.
- A linha nova aparece sem estilo/bagunçada? Confira se são mesmo quatro `<td>`
  e se as classes (`posicao`, `nome`, `pontos`, `btn-mais`) estão escritas
  certas dentro do `innerHTML`.

---

## Antes de fechar

Uma frase em comentário: no E2 você fez `ligarBotaoMais` virar uma função com
nome. Que trabalho isso te poupou aqui no E4?
