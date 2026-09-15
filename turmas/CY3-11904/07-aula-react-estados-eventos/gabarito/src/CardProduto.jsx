import { useState } from 'react'

// CardProduto agora tem estado PRÓPRIO: cada card lembra se está
// favoritado, independente dos outros. useState(false) devolve o valor
// atual (favorito) e a função pra mudá-lo (setFavorito) — só ela avisa o
// React que precisa redesenhar.

export default function CardProduto({ nome, categoria, preco }) {
  const [favorito, setFavorito] = useState(false)
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>R$ {preco} — {frete}</p>
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? '❤️' : '🤍'}
      </button>
    </article>
  )
}
