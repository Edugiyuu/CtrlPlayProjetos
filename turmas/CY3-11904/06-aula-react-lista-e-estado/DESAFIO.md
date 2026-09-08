# Desafio — Catálogo da Loja: mais produtos, mais informação

**Tempo:** ~30 min · **Dificuldade:** ▓▓░░░
**Arquivos que você edita:** `src/produtos.js` e `src/CardProduto.jsx`
**Nunca** edite `src/App.jsx`.

Você tem o Catálogo da Loja na tela: um card por produto, cada um com nome,
categoria, preço e a regra de frete. Neste desafio você adiciona um produto,
uma informação nova em todos os cards e uma conta — e prova que sabe de onde
cada coisa vem.

Você **escreve o código**. Aqui só tem o alvo, o efeito e o que testar.

**Lembretes rápidos:**

- O `App.jsx` faz `produtos.map(...)` → um `<CardProduto>` para cada item do array.
- O `CardProduto` recebe os dados por **props**: `nome`, `categoria`, `preco`.
- Dentro de `{ }` no JSX cabe JavaScript: texto, conta, comparação.

---

## Aquecimento (3 min)

Sem olhar o código, responda pro professor:

- O que o `.map()` no `App.jsx` faz, com suas palavras?
- De onde o card tira o `preco` que ele mostra na tela?

---

## O que fazer

### 1. Um produto novo no catálogo

- No `produtos.js`, adicione **mais um objeto** na lista, no mesmo formato dos
  outros: `nome`, `categoria`, `preco`. O `preco` é número (sem aspas).
  Vírgula no fim da linha.
- Não abra o `App.jsx` nem o `CardProduto.jsx`.
- **Teste agora:** salve. Um card novo com o seu produto aparece no fim da
  lista, já com "Frete grátis" ou "Frete: R$ 10" conforme o preço que você deu.

### 2. Categoria em MAIÚSCULA

- Alvo: cada card mostra a categoria **também** em caixa alta (ex.: além de
  "eletrônicos", mostra "ELETRÔNICOS").
- No `CardProduto.jsx`, use o método `.toUpperCase()` na `categoria` e mostre
  o resultado dentro de um `{ }`, num `<p>`.
- **Teste agora:** todos os cards passam a mostrar a categoria em maiúscula —
  inclusive o produto da etapa 1. Você mexeu em um arquivo, todos os cards
  mudaram.

### 3. Preço de 3 unidades

- Alvo: cada card mostra uma linha `Levando 3: R$ N`, onde N é o `preco` do
  produto **vezes 3**.
- No `CardProduto.jsx`, faça a conta `preco * 3` dentro de um `{ }`, num `<p>`
  novo, com um rótulo.
- **Teste agora:** produto de R$ 35 mostra `Levando 3: R$ 105`. Mude o preço
  desse produto no `produtos.js`, salve, e veja o "Levando 3" mudar junto.

---

## CHECK

- [ ] O card do produto novo apareceu mexendo **só** no `produtos.js`.
- [ ] Você consegue dizer por que não precisou abrir o `App.jsx`.
- [ ] Todos os cards mostram a categoria em maiúscula.
- [ ] Você consegue dizer por que mexer no `CardProduto.jsx` mudou todos os cards.
- [ ] Cada card mostra "Levando 3" = preço x 3.
- [ ] O Console (F12) não tem nenhuma linha vermelha de erro.

Confira com `gabarito/DESAFIO-gabarito.md`.

---

## Se travar, revise

- **Tela branca** → erro de JSX; abra o terminal do `npm run dev` e leia a
  linha do erro.
- **`categoria.toUpperCase is not a function`** → você aplicou em algo que não
  é texto; confira que está usando `categoria`, não `preco`.
- **"Levando 3" mostrou algo tipo `353535`** → juntou texto com número; o
  `preco` no `produtos.js` tem que estar **sem aspas**.
- **O card novo não apareceu** → confira a vírgula entre os objetos e as
  chaves `{ }` / `[ ]` no `produtos.js`.
- **Mudou o `App.jsx` sem querer?** → volte ele pro estado da aula: só
  `import` + `produtos.map(...)`.

---

## Antes de fechar

Escreva **uma frase** em comentário no `CardProduto.jsx`: qual a diferença
entre `preco` (que o card **recebe**) e `preco * 3` (que o card **mostra** em
"Levando 3")?

---

## Se sobrar tempo

1. `🔥` na frente do nome, só dos produtos com "Frete grátis".
2. No `App.jsx`, uma frase "O catálogo tem N produtos" — o N vem sozinho do
   array (`.length`), não digitado na mão.
3. Um segundo array `ofertas` no `produtos.js` e uma segunda seção no
   `App.jsx` que mostra as ofertas **reusando o mesmo `CardProduto`**.
