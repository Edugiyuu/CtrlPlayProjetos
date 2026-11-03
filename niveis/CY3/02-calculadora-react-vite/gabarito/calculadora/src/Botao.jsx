function Botao({ texto, aoClicar, cor }) {
  return (
    <button className={cor} onClick={() => aoClicar(texto)}>
      {texto}
    </button>
  )
}

export default Botao
