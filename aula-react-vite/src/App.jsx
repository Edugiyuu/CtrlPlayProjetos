import { useState } from 'react'
import CardHeroi from './CardHeroi.jsx'
import { herois } from './herois.js'

export default function App() {
  const [equipe, setEquipe] = useState([])

  function recrutar(nome) {
    if (equipe.includes(nome)) return
    setEquipe([...equipe, nome])
  }

  return (
    <main className="app">
      <h1>Central de Heróis</h1>
      <p className="contador">Heróis na equipe: {equipe.length}</p>

      <section className="galeria">
        {herois.map((heroi) => (
          <CardHeroi
            key={heroi.nome}
            nome={heroi.nome}
            classe={heroi.classe}
            poder={heroi.poder}
            recrutado={equipe.includes(heroi.nome)}
            onRecrutar={recrutar}
          />
        ))}
      </section>
    </main>
  )
}
