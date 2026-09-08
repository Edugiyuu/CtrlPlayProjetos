# Desafio E2 — Todos os botões +10, sem repetir código

**Tempo:** ~25 min · **Dificuldade:** ▓▓▓░░
**Arquivo:** `painel/placar.js` (continua o do E1).

Seu código do E1 só conhece a Aurora. Fazer um bloco igual para o Brakus e
outro para a Célia funcionaria — mas seriam três cópias quase idênticas, e o
herói que você vai recrutar no E4 ficaria de fora. Neste desafio você escreve a
regra do clique **uma vez só** e ela serve todos os botões.

---

## Aquecimento (5 min)

Sem olhar: qual a diferença entre `querySelector` e `querySelectorAll`? O que o
`forEach` faz com uma lista? Confira no cartão, seções "Achar um pedaço da
página" e "Fazer o mesmo para vários".

---

## O que fazer

Numa seção nova do `placar.js`:

```js
// --- E2: todos os botoes +10 ---
```

### 1. Uma função que liga UM botão

- Crie `function ligarBotaoMais(botao) { ... }`.
- Dentro dela, `addEventListener("click", ...)` no `botao` que veio por
  parâmetro. Na função do clique:
  - `const linha = botao.closest("tr");` — sobe do botão até a linha dele.
  - pega a célula de pontos **dentro dessa linha**:
    `linha.querySelector(".pontos")`.
  - lê o `textContent`, `Number(...)`, `+ 10`, escreve de volta.

### 2. Ligar a função em todos os botões

- `document.querySelectorAll(".btn-mais")` pega os três botões.
- Passe cada um para `ligarBotaoMais` usando `.forEach`.

### 3. Aposentar o código do E1

- Agora a Aurora é atendida pela regra nova. **Apague** (ou comente) o bloco
  do E1 que falava só dela — senão o `+10` da Aurora soma **20** por clique
  (dois listeners no mesmo botão).
- Deixe o `console.log` do E1, esse pode ficar.

- **Teste agora:** clique no `+10` de cada um dos três heróis. Todos sobem de
  10 em 10, e a Aurora sobe **10** por clique (não 20).

---

## CHECK

- [ ] Os três botões `+10` funcionam.
- [ ] A Aurora sobe 10 por clique (você tirou o bloco do E1).
- [ ] A lógica do clique está escrita **uma vez só**, dentro de `ligarBotaoMais`.
- [ ] Console sem erro vermelho.

Confira com `../gabarito/e2-placar.js`.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui

Se você chegou até aqui, o objetivo do dia está cumprido. Você consegue,
sozinho:

- [ ] achar um elemento com `querySelector` e trocar o `textContent` dele;
- [ ] fazer um botão reagir a `click` com `addEventListener`;
- [ ] rodar o mesmo código para uma lista de elementos com `querySelectorAll`
      + `forEach`.

**Pare, releia o `placar.js` e me chame.** E3 e E4 são bônus.

---

## Se travar, revise

- `closest`, `querySelectorAll`, `forEach` → `CARTAO-DE-MEMORIA.md`.
- Só o último botão funciona? Você provavelmente pegou a célula de pontos com
  `document.querySelector(".pontos")` (sempre a 1ª da página) em vez de
  `linha.querySelector(".pontos")` (a da linha do botão clicado).
- Aurora soma 20? O bloco do E1 ainda está lá.

---

## Antes de fechar

Uma frase em comentário: o `+10` do Brakus funciona, mas você não escreveu
nada específico para o Brakus. Por quê?
