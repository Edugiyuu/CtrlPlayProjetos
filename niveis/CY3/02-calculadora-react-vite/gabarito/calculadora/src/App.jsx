import { useState } from 'react'

function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [resultado, setResultado] = useState('')

  function calcular(operacao) {
    const x = Number(a)
    const y = Number(b)

    if (operacao === '+') setResultado(x + y)
    if (operacao === '-') setResultado(x - y)
    if (operacao === '×') setResultado(x * y)
    if (operacao === '÷') setResultado(y === 0 ? 'Erro' : x / y)
  }

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>

      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />

      <div className="botoes">
        <button onClick={() => calcular('+')}>+</button>
        <button onClick={() => calcular('-')}>-</button>
        <button onClick={() => calcular('×')}>×</button>
        <button onClick={() => calcular('÷')}>÷</button>
      </div>

      <h2>Resultado: {resultado}</h2>
    </div>
  )
}

export default App
