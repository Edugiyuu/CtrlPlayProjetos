# Roteiro de Aula: Calculando com Componentes no React

## Dados

- **Turma alvo:** #11904 — CY3 (aula #6), aula particular (só o Miguel)
- **Projeto:** Catálogo da Loja (segue no mesmo projeto Vite da aula #5)
- **Duração:** bloco de ~2h, mas **escopo real ~50 min** + folga. Sobrar é ok.
- **Pré-requisito real:** aula #5 até props. Ele criou um componente e passou
  props escrevendo cada card na mão. Assumir que props ainda está fresco,
  não dominado.
- **Tema:** trocado de "heróis" para "catálogo de loja" a pedido do aluno.
  Conteúdo idêntico.

## Objetivo

Sair de "escrevi 3 cards na mão" para "tenho um array de produtos e o React
desenha um card para cada um". E, de quebra, mostrar que o componente pode
**calcular** um valor na hora de desenhar (o "Calculando com Componentes" do
nome oficial da aula), sem precisar de estado.

## O que NÃO entra nesta aula

`useState`, `onClick`, eventos, `[...lista]`, imutabilidade, `lista.includes`.
Isso é a aula #7. Aqui a tela é estática: dados entram do array, a tela
desenha, acabou. Se ele perguntar "e pra adicionar um produto clicando num
botão?", a resposta é "é exatamente a próxima aula".

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| Componente | Função que devolve um pedaço de tela (JSX). Nome com maiúscula. | `App`, `CardProduto` |
| Props | Os dados que um componente **recebe de fora**, como argumentos de função. Quem usa o componente decide os valores. | `<CardProduto nome="..." preco={120} />` |
| Array de dados | Uma lista de objetos, cada objeto = um produto. Fica separado da tela, num `.js` só de dados. | `produtos.js` |
| `.map()` | Transforma **cada item** de um array em outra coisa. Aqui: cada objeto produto → um `<CardProduto>`. Devolve um array de elementos que o React desenha. | `App.jsx` |
| `key` | Um identificador único que você dá a cada item da lista pro React saber quem é quem. Sem ele, aviso amarelo no console. | `key={produto.nome}` |
| Cálculo no JSX | Dentro de `{ }` você pode escrever qualquer expressão JavaScript: conta, comparação, texto montado. O React mostra o resultado. | `{preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'}` |

> Regra da turma (memória `feedback-conceitos-explicitos`): cada termo acima
> ganha um momento próprio de explicação com exemplo dos dados reais + uma
> pergunta de "teste de entendimento" antes de seguir. Não deixar `.map()` e
> `key` só citados dentro do código.

## Regras do material (memória `aulas-miguel-murilo-feedback`)

- **O Miguel escreve o código.** Você dita o que fazer e o que testar; não
  entrega arquivo pronto. O `gabarito/` é seu.
- Estimar e cortar pela metade. **Marco mínimo** definido abaixo; resto é bônus.
- **Ponto de parada** no meio para medir ritmo.

## Roteiro

### 0–10 min — Recap sem código

Perguntas, ele responde com as próprias palavras (não aceitar "sei lá"):

1. O que é um componente? (resposta boa: "uma função que devolve tela")
2. O que são props? (resposta boa: "os dados que passo pro componente")
3. Se eu escrevo `<CardProduto nome="Caneca" />`, quem decidiu que o nome é
   "Caneca"? (quem usa o componente — o `App`)

Abrir o projeto da aula #5, rodar `npm run dev`, ver os cards que ele fez na
mão. **Pergunta que abre a aula:** "e se a loja tivesse 50 produtos? você
escreveria 50 `<CardProduto>` na mão?"

### 10–25 min — O array de dados (`produtos.js`)

- Criar `src/produtos.js`.
- `export const produtos = [ ... ]` com 4-5 objetos:
  `{ nome, categoria, preco }`.
- Explicar: **os dados moram aqui, separados da tela**. A tela só lê.

Snippet de referência (professor):

```js
export const produtos = [
  { nome: 'Fone de ouvido', categoria: 'eletrônicos', preco: 120 },
  { nome: 'Caneca', categoria: 'cozinha', preco: 35 },
  { nome: 'Camiseta', categoria: 'roupas', preco: 60 },
  { nome: 'Teclado', categoria: 'eletrônicos', preco: 210 },
]
```

**Teste de entendimento:** "cada `{ }` dentro do array é o quê?" (um produto /
um objeto). "Se eu quiser o preço da Camiseta, escrevo o quê?"
(`produtos[2].preco`).

### 25–45 min — `.map()`: um card para cada produto

- No `App.jsx`: `import { produtos } from './produtos.js'`.
- Apagar os `<CardProduto>` escritos na mão.
- Dentro do JSX, `{produtos.map((produto) => ( <CardProduto ... /> ))}`.
- Passar `nome={produto.nome}`, `categoria={produto.categoria}`,
  `preco={produto.preco}`.
- Adicionar `key={produto.nome}`.

Explicar `.map()` com uma frase: **"para cada produto do array, me devolve um
CardProduto"**. É a mesma ideia de escrever na mão, só que automático.

Explicar `key`: o React precisa de um "nome" pra cada card da lista. Sem
`key`, abre o console (F12) e mostra o aviso — mostrar o aviso de verdade,
tirando o `key` de propósito, depois recolocando.

Snippet de referência (professor):

```jsx
import { produtos } from './produtos.js'
import CardProduto from './CardProduto.jsx'

export default function App() {
  return (
    <main>
      <h1>Catálogo da Loja</h1>
      <section className="lista">
        {produtos.map((produto) => (
          <CardProduto
            key={produto.nome}
            nome={produto.nome}
            categoria={produto.categoria}
            preco={produto.preco}
          />
        ))}
      </section>
    </main>
  )
}
```

**Teste agora:** os 4 cards aparecem. Ele adiciona um 5º objeto no
`produtos.js`, salva, e o card aparece sozinho — **sem tocar no `App.jsx`**.
Esse é o momento "aha" da aula.

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~45 min)

Se chegou aqui, **a aula valeu**. O Miguel consegue:

- [ ] explicar o que é um array de dados e por que ele fica separado da tela
- [ ] explicar, com as próprias palavras, o que `.map()` faz nesse código
- [ ] adicionar um produto novo mexendo **só no array**
- [ ] dizer para que serve o `key`

Se o ritmo estiver apertado ou ele meio perdido: **para aqui**, revisa, e o
"calcular no componente" vira a abertura da aula #7. Não empurrar.

---

### 45–60 min — Calcular dentro do componente (bônus, se o marco veio tranquilo)

Agora o "Calculando com Componentes" do nome da aula. Sem estado: o componente
só faz uma regra na hora de desenhar.

- No `CardProduto.jsx`, antes do `return`, criar uma variável:
  `const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'`.
- Mostrar `{frete}` no card.
- Explicar: dentro de `{ }` cabe **qualquer expressão JavaScript** — conta,
  comparação, `? :`. O React mostra o resultado, recalculado toda vez que
  desenha.

Snippet de referência (professor):

```jsx
export default function CardProduto({ nome, categoria, preco }) {
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'
  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>R$ {preco} — {frete}</p>
    </article>
  )
}
```

**Teste agora:** produtos de R$ 100 ou mais mostram "Frete grátis", os outros
"Frete: R$ 10". Ele muda o preço de um produto no array e vê o frete mudar.

**Teste de entendimento:** "esse 'Frete grátis' some se eu recarregar a
página?" (não — ele é recalculado do `preco`, que vem do array). "Eu consigo
clicar pra mudar o frete?" (não ainda — isso é estado, próxima aula).

### 60 min+ — Desafio

Passar o [DESAFIO.md](./DESAFIO.md). Ele faz sozinho, você só destrava.
Serve pra você ver se props + `.map()` + cálculo no JSX ficaram de pé.

## Perguntas para conduzir a aula

1. Qual a diferença entre os dados (`produtos.js`) e a tela (`App.jsx`)?
2. O que o `.map()` recebe e o que ele devolve?
3. Por que cada card precisa de um `key` diferente?
4. O "frete" do card é uma prop? (não — é calculado a partir de uma prop)
5. O que nesta tela muda depois que a página carrega? (nada ainda — de propósito)

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Mostrar o **preço total** do catálogo no topo (somar `preco` de todos).
2. Ordenar os cards por preço, mais barato primeiro.
3. Um segundo array `ofertas` e uma segunda `<section>` reusando o **mesmo**
   `CardProduto`.
4. Mostrar `preco * 3` como "Preço de 3 unidades".

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| Tela branca | erro de JSX; ler o terminal do `npm run dev` |
| `produtos is not defined` | faltou o `import { produtos }` no `App.jsx` |
| Aviso amarelo no console | faltou `key` no `.map()`, ou `key` repetido |
| Cards não aparecem | esqueceu o `return` / os parênteses do `.map()` |
| `Cannot read properties of undefined` | nome de campo errado (`produto.nomee`) |
| Frete sempre "R$ 10" | `preco` veio como texto (com aspas no array) |

## Registro pós-aula

Atualizar `alunos/progresso/turma-11904.md`:

- Cronograma: status da aula #6 + Observações com **até onde o Miguel chegou
  de verdade** (só o `.map()`? chegou no cálculo? fez o desafio?).
- Progresso por Aluno: presença, dificuldades.
- Resumo Geral: "Aulas concluídas X / 18" e Próximos passos → aula #7
  "Criando Equações Através de Estados e Eventos".
- Data em `_Última atualização:_`.
- Atualizar também `turmas/CY3-11904/README.md` (tabela de projetos + lição
  da aula).
