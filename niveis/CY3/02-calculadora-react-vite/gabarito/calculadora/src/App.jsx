import { useState } from 'react'

function calcular(a, op, b) {
  if (op === '+') return a + b
  if (op === '-') return a - b
  if (op === '×') return a * b
  if (op === '÷') return b === 0 ? 'Erro' : a / b
}

function App() {
  const [visor, setVisor] = useState('0')
  const [guardado, setGuardado] = useState(null)
  const [op, setOp] = useState(null)
  const [novo, setNovo] = useState(true) // próximo dígito começa número novo?

  function digito(d) {
    if (novo || visor === '0' || visor === 'Erro') {
      setVisor(d)
      setNovo(false)
    } else {
      setVisor(visor + d)
    }
  }

  function ponto() {
    if (novo || visor === 'Erro') {
      setVisor('0.')
      setNovo(false)
    } else if (!visor.includes('.')) {
      setVisor(visor + '.')
    }
  }

  function operacao(o) {
    if (visor === 'Erro') return
    if (op && !novo) {
      const r = calcular(guardado, op, Number(visor))
      setVisor(String(r))
      setGuardado(r === 'Erro' ? null : r)
    } else {
      setGuardado(Number(visor))
    }
    setOp(o)
    setNovo(true)
  }

  function igual() {
    if (!op || novo) return
    setVisor(String(calcular(guardado, op, Number(visor))))
    setGuardado(null)
    setOp(null)
    setNovo(true)
  }

  function limpar() {
    setVisor('0')
    setGuardado(null)
    setOp(null)
    setNovo(true)
  }

  return (
    <div className="calculadora">
      <div className="visor">{visor}</div>
      <div className="teclas">
        <button className="clear" onClick={limpar}>C</button>
        <button className="op" onClick={() => operacao('÷')}>÷</button>
        <button className="op" onClick={() => operacao('×')}>×</button>
        <button className="op" onClick={() => operacao('-')}>-</button>

        {['7', '8', '9'].map((n) => (
          <button key={n} onClick={() => digito(n)}>{n}</button>
        ))}
        <button className="op" onClick={() => operacao('+')}>+</button>

        {['4', '5', '6'].map((n) => (
          <button key={n} onClick={() => digito(n)}>{n}</button>
        ))}
        <button className="igual" onClick={igual}>=</button>

        {['1', '2', '3'].map((n) => (
          <button key={n} onClick={() => digito(n)}>{n}</button>
        ))}

        <button className="zero" onClick={() => digito('0')}>0</button>
        <button onClick={ponto}>.</button>
      </div>
    </div>
  )
}

export default App
