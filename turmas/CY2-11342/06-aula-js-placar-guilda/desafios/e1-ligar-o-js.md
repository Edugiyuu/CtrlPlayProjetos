# Desafio E1 — Ligar o JS e mexer no primeiro número

**Tempo:** ~25 min · **Dificuldade:** ▓▓░░░
**Arquivo que você edita:** `painel/placar.js` · **Nunca** edite `painel.html`
nem `estilo.css`.

O painel é o mesmo da aula #5 — só que agora tem botões `+10` e uns campos no
bloco do ranking. Todos estão **mortos**: clicar não faz nada. Neste desafio
você faz o **primeiro** botão funcionar — o da Aurora.

Você **escreve o código**. Aqui só tem o alvo, o efeito e o que testar.

---

## Aquecimento (5 min)

Abra `painel/painel.html` no navegador e aperte **F12** → aba **Console**.
Sem olhar o cartão: para que serve o Console? O que `console.log("oi")` faz?
Confira no [CARTAO-DE-MEMORIA.md](../CARTAO-DE-MEMORIA.md), seção "O Console".

---

## O que fazer

### 1. Provar que o `placar.js` está ligado

- Escreva no `placar.js` uma linha que mande `placar.js ligado!` para o Console
  (`console.log`).
- **Teste agora:** recarregue a página (F5) e olhe o Console. A mensagem tem que
  aparecer. Se não aparecer, o `placar.js` não está sendo lido — chame o
  professor.

### 2. Pegar os dois pedaços da Aurora

No `painel.html`, a célula de pontos da Aurora é
`<td class="pontos" id="pontos-aurora">980</td>` e o botão dela é
`<button class="btn-mais" id="btn-aurora">`.

- Crie uma constante com o **botão** da Aurora (`document.querySelector` +
  o `id` dele).
- Crie outra constante com a **célula de pontos** da Aurora (mesmo jeito).

### 3. Somar 10 ao clicar

- Use `addEventListener("click", ...)` no botão da Aurora.
- Dentro da função: leia o texto da célula de pontos, transforme em **número**
  com `Number(...)`, some `10`, e escreva o resultado de volta no `textContent`
  da célula.
- **Teste agora:** clique no `+10` da Aurora várias vezes. O número dela sobe de
  10 em 10 (980 → 990 → 1000...). Os botões do Brakus e da Célia continuam sem
  fazer nada — **é o esperado**, eles são o próximo desafio.

---

## CHECK

- [ ] O Console mostra `placar.js ligado!` ao carregar a página.
- [ ] Clicar no `+10` da Aurora aumenta os pontos dela em 10.
- [ ] O número sobe certo (990, 1000...) e **não** vira algo como `98010`.
- [ ] Os botões do Brakus e da Célia ainda não fazem nada.
- [ ] O Console **não** tem nenhuma linha vermelha de erro.

Confira com `../gabarito/e1-placar.js`.

---

## Se travar, revise

- `querySelector`, `addEventListener`, `textContent`, `Number` →
  `CARTAO-DE-MEMORIA.md`.
- Erro `Cannot read properties of null`: seu `querySelector` não achou o
  elemento — confira se o `id` entre aspas está igualzinho ao do HTML (com o `#`
  na frente).
- O número virou `98010`? Faltou o `Number(...)` — você somou texto com texto.
- Nada acontece e o Console não tem erro? Confira se o `addEventListener` está
  no **botão** e se você salvou o arquivo.

---

## Antes de fechar

Escreva **uma frase** em comentário no `placar.js`: por que foi preciso usar
`Number(...)` antes de somar, se na tela já aparecia um número?
