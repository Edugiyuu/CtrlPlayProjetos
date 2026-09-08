# Gabarito do DESAFIO.md — para o professor

Cada parte abaixo mostra **os arquivos inteiros**, no estado em que devem
ficar ao terminar aquela parte. As partes são cumulativas: a Parte 2 já
inclui o que foi feito na Parte 1, e assim por diante.

Ponto de partida (fim da aula, antes do desafio): os 3 arquivos estão em
[`gabarito/src/`](./src) — `produtos.js` com 5 produtos, `CardProduto.jsx` com
`frete`, `App.jsx` com o `.map()`.

---

## Parte 1 — Produto novo no array

**Só o `produtos.js` muda.** `App.jsx` e `CardProduto.jsx` ficam intactos.

O aluno inventa o produto; o exemplo abaixo usa "Mochila". O que importa é:
mesmo formato das outras linhas, `preco` sem aspas, vírgula no fim.

### `src/produtos.js`

```js
export const produtos = [
  { nome: 'Fone de ouvido', categoria: 'eletrônicos', preco: 120 },
  { nome: 'Caneca', categoria: 'cozinha', preco: 35 },
  { nome: 'Camiseta', categoria: 'roupas', preco: 60 },
  { nome: 'Teclado', categoria: 'eletrônicos', preco: 210 },
  { nome: 'Caderno', categoria: 'papelaria', preco: 25 },
  { nome: 'Mochila', categoria: 'acessórios', preco: 150 },
]
```

### `src/App.jsx` (não mudou — confira que o aluno não mexeu aqui)

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

### `src/CardProduto.jsx` (não mudou)

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

**Resposta esperada à pergunta:** quem desenhou o card foi o `App.jsx`, sem
mudar de código: ele faz `produtos.map(...)`, ou seja, "para cada item do
array `produtos`, crie um `CardProduto`". O aluno mudou o array, então o
`.map()` passou a gerar 6 cards em vez de 5. A tela é uma função dos dados.

---

## Parte 2 — Categoria em maiúscula em todos os cards

**Só o `CardProduto.jsx` muda.** As duas formas aceitas:

### Forma A — variável antes do `return`

```jsx
export default function CardProduto({ nome, categoria, preco }) {
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'
  const categoriaGritando = categoria.toUpperCase()

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria} ({categoriaGritando})</p>
      <p>R$ {preco} — {frete}</p>
    </article>
  )
}
```

### Forma B — direto no JSX

```jsx
export default function CardProduto({ nome, categoria, preco }) {
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria} ({categoria.toUpperCase()})</p>
      <p>R$ {preco} — {frete}</p>
    </article>
  )
}
```

`produtos.js` e `App.jsx` seguem iguais aos da Parte 1.

**Resposta esperada à pergunta:** existe **um** componente `CardProduto`, e o
`App` usa esse mesmo componente 6 vezes (uma por produto, via `.map()`).
Mudar o componente muda como **todo** card é desenhado. É a vantagem do
componente: escreve uma vez, usa em todo lugar.

---

## Parte 3 — "Levando 3" (preco * 3)

**Só o `CardProduto.jsx` muda.** Partindo da Forma A da Parte 2:

### `src/CardProduto.jsx`

```jsx
export default function CardProduto({ nome, categoria, preco }) {
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'
  const categoriaGritando = categoria.toUpperCase()

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria} ({categoriaGritando})</p>
      <p>R$ {preco} — {frete}</p>
      <p>Levando 3: R$ {preco * 3}</p>
    </article>
  )
}
```

`produtos.js` e `App.jsx` seguem iguais aos da Parte 1.

**Resposta esperada à pergunta:** o "Levando 3" muda junto. `preco` chega no
card como prop (vem do objeto no `produtos.js`), e `preco * 3` é recalculado
toda vez que o card é desenhado. Não existe um "105" guardado em lugar
nenhum — é sempre a prop `preco` vezes 3, na hora.

---

## Estado final de todos os arquivos (fim das 3 partes)

### `src/produtos.js`

```js
export const produtos = [
  { nome: 'Fone de ouvido', categoria: 'eletrônicos', preco: 120 },
  { nome: 'Caneca', categoria: 'cozinha', preco: 35 },
  { nome: 'Camiseta', categoria: 'roupas', preco: 60 },
  { nome: 'Teclado', categoria: 'eletrônicos', preco: 210 },
  { nome: 'Caderno', categoria: 'papelaria', preco: 25 },
  { nome: 'Mochila', categoria: 'acessórios', preco: 150 },
]
```

### `src/CardProduto.jsx`

```jsx
export default function CardProduto({ nome, categoria, preco }) {
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'
  const categoriaGritando = categoria.toUpperCase()

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria} ({categoriaGritando})</p>
      <p>R$ {preco} — {frete}</p>
      <p>Levando 3: R$ {preco * 3}</p>
    </article>
  )
}
```

### `src/App.jsx`

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

---

## Gabarito do "Se sobrar tempo"

### 1. Fogo nos com frete grátis — `src/CardProduto.jsx`

```jsx
export default function CardProduto({ nome, categoria, preco }) {
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'
  const categoriaGritando = categoria.toUpperCase()

  return (
    <article className="card">
      <h2>{frete === 'Frete grátis' ? '🔥 ' : ''}{nome}</h2>
      <p>{categoria} ({categoriaGritando})</p>
      <p>R$ {preco} — {frete}</p>
      <p>Levando 3: R$ {preco * 3}</p>
    </article>
  )
}
```

### 2. Contador de produtos — `src/App.jsx`

```jsx
import { produtos } from './produtos.js'
import CardProduto from './CardProduto.jsx'

export default function App() {
  return (
    <main>
      <h1>Catálogo da Loja</h1>
      <p>O catálogo tem {produtos.length} produtos</p>

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

### 3. Seção de ofertas — dois arquivos

`src/produtos.js` ganha um segundo array exportado:

```js
export const produtos = [
  { nome: 'Fone de ouvido', categoria: 'eletrônicos', preco: 120 },
  { nome: 'Caneca', categoria: 'cozinha', preco: 35 },
  { nome: 'Camiseta', categoria: 'roupas', preco: 60 },
  { nome: 'Teclado', categoria: 'eletrônicos', preco: 210 },
  { nome: 'Caderno', categoria: 'papelaria', preco: 25 },
  { nome: 'Mochila', categoria: 'acessórios', preco: 150 },
]

export const ofertas = [
  { nome: 'Mouse', categoria: 'eletrônicos', preco: 40 },
  { nome: 'Garrafa térmica', categoria: 'cozinha', preco: 55 },
]
```

`src/App.jsx` importa e desenha os dois com o mesmo `CardProduto`:

```jsx
import { produtos, ofertas } from './produtos.js'
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

      <h1>Ofertas da semana</h1>
      <section className="lista">
        {ofertas.map((oferta) => (
          <CardProduto
            key={oferta.nome}
            nome={oferta.nome}
            categoria={oferta.categoria}
            preco={oferta.preco}
          />
        ))}
      </section>
    </main>
  )
}
```
