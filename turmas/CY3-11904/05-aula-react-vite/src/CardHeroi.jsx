export default function CardHeroi({ nome, classe, poder, recrutado, onRecrutar }) {
  return (
    <article className={recrutado ? 'card card--recrutado' : 'card'}>
      <h2>{nome}</h2>
      <p className="classe">{classe}</p>
      <p className="poder">Poder: {poder}</p>
      <button onClick={() => onRecrutar(nome)} disabled={recrutado}>
        {recrutado ? 'Na equipe ✔' : 'Recrutar'}
      </button>
    </article>
  )
}
