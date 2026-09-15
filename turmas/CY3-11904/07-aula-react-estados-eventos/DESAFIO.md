# Desafio — Catálogo da Loja: favorito e contador em ação

**Tempo:** ~25 min · **Dificuldade:** ▓▓░░░
**Arquivo que você edita:** `src/CardProduto.jsx`
**Nunca** edite `src/App.jsx` nem `src/produtos.js`.

Você já tem o coração de favoritar funcionando (e talvez o contador
+/-, se deu tempo na aula). Neste desafio você reforça o mesmo `useState`
em mais dois lugares — sem conceito novo, só mais prática.

Você **escreve o código**. Aqui só tem o alvo, o efeito e o que testar.

**Lembretes rápidos:**

- `useState(inicial)` devolve `[valor, setValor]`.
- `onClick` recebe uma **função**: `onClick={() => algumaCoisa}`, nunca
  `onClick={algumaCoisa()}` (isso roda na hora de desenhar, não no clique).
- Só a função `set` muda o estado de verdade.

---

## Aquecimento (3 min)

Sem olhar o código, responda pro professor:

- O `useState(false)` devolve o quê, exatamente?
- Por que cada card favorita e desfavorita **sozinho**, sem mexer nos outros?

---

## O que fazer

### 1. Contador de quantidade (se ainda não fez na aula)

- Alvo: cada card tem um número de quantidade, com botões `-` e `+`.
- `const [quantidade, setQuantidade] = useState(0)`.
- **Teste agora:** clicar em "+" soma 1, clicar em "-" desce 1.

Se você já fez isso na aula, pule pra etapa 2.

### 2. "Favorito!" só quando for favorito

- Alvo: abaixo do nome do produto, aparece o texto **"Favorito!"** — mas só
  quando aquele card estiver favoritado. Quando não estiver, o texto some.
- Use `{favorito && <p>Favorito!</p>}` dentro do JSX.
- **Teste agora:** clique no coração — o texto "Favorito!" aparece. Clique de
  novo — ele some.

### 3. Botão "Zerar" no contador

- Alvo: um botão novo, "Zerar", que volta a `quantidade` pra `0` de uma vez
  (não importa o valor atual).
- `onClick={() => setQuantidade(0)}`.
- **Teste agora:** suba o contador pra qualquer número, clique em "Zerar",
  volta pra `0`.

---

## CHECK

- [ ] O contador de quantidade sobe e desce clicando nos botões.
- [ ] "Favorito!" aparece só quando o card está favoritado.
- [ ] Você consegue dizer por que `favorito && <p>...</p>` some o texto
      quando `favorito` é `false`.
- [ ] O botão "Zerar" sempre volta o contador pra `0`, não importa de onde partiu.
- [ ] O Console (F12) não tem nenhuma linha vermelha de erro.

Confira com `gabarito/DESAFIO-gabarito.md`.

---

## Se travar, revise

- **Tela branca** → erro de JSX; abra o terminal do `npm run dev` e leia a
  linha do erro.
- **"Favorito!" nunca aparece** → confira o nome da variável no `&&`; tem
  que ser exatamente a mesma do `useState` (`favorito`, não `Favorito`).
- **Botão "Zerar" não funciona** → confira se você chamou `setQuantidade(0)`
  dentro de uma seta `() => ...` e não `setQuantidade(0)()` ou parecido.
- **Clicar em "+" não muda o número** → confira se está usando
  `setQuantidade(quantidade + 1)`, com o `set`, não só `quantidade + 1`.

---

## Antes de fechar

Escreva **uma frase** em comentário no `CardProduto.jsx`: qual a diferença
entre `setQuantidade(quantidade + 1)` (usado no "+") e `setQuantidade(0)`
(usado no "Zerar")?

---

## Se sobrar tempo

1. Desabilitar o botão "-" quando `quantidade` já for `0`
   (`disabled={quantidade === 0}`).
2. Trocar a cor de fundo do card (`className` condicional) quando o produto
   estiver favoritado.
