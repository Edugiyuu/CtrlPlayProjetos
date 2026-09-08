import { produtos } from './produtos.js'
import CardProduto from './CardProduto.jsx'

// A tela é estática nesta aula: lê o array uma vez, desenha um card por
// produto, e pronto. Nada muda depois que a página carrega (isso é a aula #7).

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
