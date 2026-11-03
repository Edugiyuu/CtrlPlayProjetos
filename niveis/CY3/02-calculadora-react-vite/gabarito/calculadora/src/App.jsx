import { useState } from 'react'
import Visor from './Visor.jsx'
import Botao from './Botao.jsx'

function App() {
  const [visor, setVisor] = useState('')
  const [numero1, setNumero1] = useState('')
  const [operacao, setOperacao] = useState('')

  function digito(d) {
    setVisor(visor + d)
  }

  function escolherOperacao(op) {
    setNumero1(visor)
    setOperacao(op)
    setVisor('')
  }

  function igual() {
    const a = Number(numero1)
    const b = Number(visor)

    if (operacao === '+') setVisor(String(a + b))
    if (operacao === '-') setVisor(String(a - b))
    if (operacao === '×') setVisor(String(a * b))
    if (operacao === '÷') setVisor(String(a / b))

    setNumero1('')
    setOperacao('')
  }

  function limpar() {
    setVisor('')
    setNumero1('')
    setOperacao('')
  }

  return (
    <div className="calculadora">
      <Visor valor={numero1 + ' ' + operacao + ' ' + visor} />

      <div className="teclas">
        <Botao texto="7" aoClicar={digito} />
        <Botao texto="8" aoClicar={digito} />
        <Botao texto="9" aoClicar={digito} />
        <Botao texto="÷" aoClicar={escolherOperacao} cor="op" />

        <Botao texto="4" aoClicar={digito} />
        <Botao texto="5" aoClicar={digito} />
        <Botao texto="6" aoClicar={digito} />
        <Botao texto="×" aoClicar={escolherOperacao} cor="op" />

        <Botao texto="1" aoClicar={digito} />
        <Botao texto="2" aoClicar={digito} />
        <Botao texto="3" aoClicar={digito} />
        <Botao texto="-" aoClicar={escolherOperacao} cor="op" />

        <Botao texto="C" aoClicar={limpar} cor="limpar" />
        <Botao texto="0" aoClicar={digito} />
        <Botao texto="=" aoClicar={igual} cor="igual" />
        <Botao texto="+" aoClicar={escolherOperacao} cor="op" />
      </div>
    </div>
  )
}

export default App
