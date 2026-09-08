// CardProduto recebe os dados de fora via props: { nome, categoria, preco }.
// Ele NÃO conhece o array de produtos — só sabe desenhar um card com o que
// recebe. Quem decide os valores é quem usa o componente (o App).

export default function CardProduto({ nome, categoria, preco }) {
  // "Calculando com componentes": um valor derivado da prop, calculado na
  // hora de desenhar. Não é uma prop e não é estado — é só uma regra.
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>R$ {preco} — {frete}</p>
    </article>
  )
}
