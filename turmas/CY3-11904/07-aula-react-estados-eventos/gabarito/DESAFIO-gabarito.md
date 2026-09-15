# Gabarito do DESAFIO.md — para o professor

Cada parte abaixo mostra o arquivo **inteiro**, no estado em que deve ficar
ao terminar aquela parte. As partes são cumulativas.

Ponto de partida (fim da aula, marco mínimo): `CardProduto.jsx` já tem o
`favorito` com `useState` + `onClick` (ver [`gabarito/src/CardProduto.jsx`](./src/CardProduto.jsx)).
O contador de quantidade pode já existir (se a aula chegou no bônus) ou não
— a Parte 1 cobre os dois casos.

`App.jsx` e `produtos.js` não mudam em nenhuma parte deste desafio — são os
mesmos de `06-aula-react-lista-e-estado/gabarito/src/`.

---

## Parte 1 — Contador de quantidade (se não veio da aula)

```jsx
import { useState } from 'react'

export default function CardProduto({ nome, categoria, preco }) {
  const [favorito, setFavorito] = useState(false)
  const [quantidade, setQuantidade] = useState(0)
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>R$ {preco} — {frete}</p>
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? '❤️' : '🤍'}
      </button>
      <div>
        <button onClick={() => setQuantidade(quantidade - 1)}>-</button>
        <span> {quantidade} </span>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
      </div>
    </article>
  )
}
```

**Resposta esperada à pergunta do aquecimento:** `useState(false)` devolve
dois itens: o valor atual (`favorito`) e a função pra mudá-lo
(`setFavorito`). Cada card roda sua própria chamada de `useState`, então
cada um tem sua caixinha de memória separada — favoritar um não mexe nos
outros.

---

## Parte 2 — "Favorito!" condicional

**Só o `CardProduto.jsx` muda**, acrescentando a linha com `&&`:

```jsx
import { useState } from 'react'

export default function CardProduto({ nome, categoria, preco }) {
  const [favorito, setFavorito] = useState(false)
  const [quantidade, setQuantidade] = useState(0)
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>R$ {preco} — {frete}</p>
      {favorito && <p>Favorito!</p>}
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? '❤️' : '🤍'}
      </button>
      <div>
        <button onClick={() => setQuantidade(quantidade - 1)}>-</button>
        <span> {quantidade} </span>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
      </div>
    </article>
  )
}
```

**Resposta esperada à pergunta:** `favorito && <p>Favorito!</p>` funciona
porque, em JavaScript, `&&` só "chega" no segundo lado se o primeiro for
verdadeiro. Quando `favorito` é `false`, o React não desenha nada ali (não
existe um `<p>` vazio — simplesmente não aparece).

---

## Parte 3 — Botão "Zerar"

```jsx
import { useState } from 'react'

export default function CardProduto({ nome, categoria, preco }) {
  const [favorito, setFavorito] = useState(false)
  const [quantidade, setQuantidade] = useState(0)
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>R$ {preco} — {frete}</p>
      {favorito && <p>Favorito!</p>}
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? '❤️' : '🤍'}
      </button>
      <div>
        <button onClick={() => setQuantidade(quantidade - 1)}>-</button>
        <span> {quantidade} </span>
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
        <button onClick={() => setQuantidade(0)}>Zerar</button>
      </div>
    </article>
  )
}
```

**Resposta esperada à pergunta final:** `setQuantidade(quantidade + 1)`
calcula o novo valor **a partir do valor atual** (soma 1 ao que já tinha).
`setQuantidade(0)` ignora o valor atual e força um valor fixo — não importa
se `quantidade` era 3 ou 30, depois do "Zerar" vira `0`.

---

## Estado final de todos os arquivos (fim das 3 partes)

### `src/CardProduto.jsx`

Igual ao código da Parte 3 acima.

### `src/App.jsx` e `src/produtos.js`

Sem mudança — os mesmos de `06-aula-react-lista-e-estado/gabarito/src/`.

---

## Gabarito do "Se sobrar tempo"

### 1. Desabilitar "-" quando `quantidade` for `0`

```jsx
<button onClick={() => setQuantidade(quantidade - 1)} disabled={quantidade === 0}>-</button>
```

### 2. Cor de fundo condicional quando favoritado

```jsx
<article className={favorito ? 'card card-favorito' : 'card'}>
```

(Precisa de uma regra `.card-favorito { background: ... }` no CSS do
projeto — se o Miguel perguntar onde fica, é o `App.css` ou `index.css` que
ele já tem do Vite.)
