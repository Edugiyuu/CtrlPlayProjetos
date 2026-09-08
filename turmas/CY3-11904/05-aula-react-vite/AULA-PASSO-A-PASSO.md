# Aula passo a passo: React com Vite — Central de Heróis

> Para o aluno **Miguel**, que nunca viu React.
> Siga na ordem. Cada passo tem um código para digitar e um "Teste agora".
> Não pule os testes: é assim que a gente descobre erro cedo.

---

## Parte 0 — O que é React (5 min de conversa, sem código)

- Até agora você fez páginas com **HTML** (a estrutura) e **JavaScript** que
  mexia no HTML com `document.getElementById`, `createElement`, etc.
- Quando a página tem muitas partes que mudam, esse jeito vira uma bagunça.
- **React** inverte a lógica: em vez de "pega o elemento e muda", você
  **descreve como a tela deve ser** para cada situação, e o React se vira para
  atualizar a página.
- Você monta a tela com **componentes**: pedaços de tela reutilizáveis
  (tipo uma função que devolve HTML).
- **Vite** é só a ferramenta que cria o projeto e liga o servidor de
  desenvolvimento (aquele que atualiza sozinho quando você salva).

---

## Parte 1 — Criar o projeto (0–15 min)

Abra o terminal na pasta onde ficam seus projetos e digite:

```bash
npm create vite@latest central-herois -- --template react
```

Se perguntar algo, aceite (`y`). Depois:

```bash
cd central-herois
npm install
npm run dev
```

O terminal vai mostrar um endereço, tipo `http://localhost:5173/`.
Abra no navegador.

**Teste agora:** você deve ver a página padrão do Vite + React com um contador.

### Olhando os arquivos

- `index.html` — tem uma linha só importante: `<div id="root"></div>`.
- `src/main.jsx` — pega essa `div` e "planta" o React nela.
- `src/App.jsx` — **o componente principal**. É aqui que a gente trabalha.

Deixe o `npm run dev` rodando o tempo todo. Nunca feche esse terminal.

---

## Parte 2 — Limpar e escrever o primeiro componente (15–35 min)

Apague **tudo** de `src/App.jsx` e digite:

```jsx
export default function App() {
  return (
    <main>
      <h1>Central de Heróis</h1>
      <p>Aqui vamos recrutar heróis.</p>
    </main>
  )
}
```

Apague também o conteúdo de `src/App.css` e de `src/index.css` (deixe vazios
por enquanto).

**Teste agora:** salve. A página deve mostrar só o título e o parágrafo.

### O que você acabou de fazer

- `function App()` é um **componente**. O nome começa com letra maiúscula
  (regra do React).
- O que está dentro do `return` **parece HTML**, mas é **JSX**: HTML escrito
  dentro do JavaScript.
- `export default` deixa o `main.jsx` importar esse componente.

Regras de JSX que vão te pegar:

1. O `return` só pode devolver **um** elemento "pai". Por isso o `<main>`
   envolve tudo.
2. Atributo de classe é `className`, não `class`.
3. Toda tag precisa fechar: `<img />`, `<br />`.

---

## Parte 3 — Componente `CardHeroi` com props (35–60 min)

Crie o arquivo `src/CardHeroi.jsx`:

```jsx
export default function CardHeroi(props) {
  return (
    <article>
      <h2>{props.nome}</h2>
      <p>{props.classe}</p>
      <p>Poder: {props.poder}</p>
    </article>
  )
}
```

- `props` é um objeto com os dados que o componente **recebe de fora**.
- As `{ }` dentro do JSX querem dizer "aqui entra JavaScript".

Agora use esse componente no `App.jsx`:

```jsx
import CardHeroi from './CardHeroi.jsx'

export default function App() {
  return (
    <main>
      <h1>Central de Heróis</h1>
      <CardHeroi nome="Aurora" classe="Maga do Gelo" poder={78} />
      <CardHeroi nome="Brakus" classe="Guerreiro" poder={92} />
    </main>
  )
}
```

**Teste agora:** devem aparecer dois cards diferentes, usando o **mesmo**
componente.

### Melhorando: desestruturar as props

Escrever `props.nome` toda hora cansa. Troque a primeira linha do
`CardHeroi.jsx` por:

```jsx
export default function CardHeroi({ nome, classe, poder }) {
```

E dentro use `{nome}`, `{classe}`, `{poder}` direto. Teste de novo: igual.

---

## Parte 4 — Lista de heróis com `.map()` (60–80 min)

Ter um `<CardHeroi>` escrito na mão para cada herói não escala. Vamos guardar
os dados num array.

Crie `src/herois.js`:

```js
export const herois = [
  { nome: 'Aurora', classe: 'Maga do Gelo', poder: 78 },
  { nome: 'Brakus', classe: 'Guerreiro', poder: 92 },
  { nome: 'Célia', classe: 'Arqueira', poder: 84 },
  { nome: 'Dínamo', classe: 'Mestre Raio', poder: 88 },
]
```

No `App.jsx`, importe e transforme cada herói num card com `.map()`:

```jsx
import CardHeroi from './CardHeroi.jsx'
import { herois } from './herois.js'

export default function App() {
  return (
    <main>
      <h1>Central de Heróis</h1>
      <section>
        {herois.map((heroi) => (
          <CardHeroi
            key={heroi.nome}
            nome={heroi.nome}
            classe={heroi.classe}
            poder={heroi.poder}
          />
        ))}
      </section>
    </main>
  )
}
```

**Teste agora:** os 4 heróis aparecem. Adicione um 5º no `herois.js` e salve:
ele aparece sozinho, sem mexer no `App`.

### O `key`

Cada item de uma lista precisa de um `key` **único**. É como o React
identifica cada card para atualizar só o que mudou. Sem `key`, aparece um
aviso amarelo no console (F12).

---

## Parte 5 — Estado com `useState`: recrutar heróis (80–105 min)

Agora a parte que só o React faz bem: a tela mudar quando os dados mudam.

Queremos uma **equipe**. Começa vazia e cresce quando clicamos em "Recrutar".

No `App.jsx`, no topo:

```jsx
import { useState } from 'react'
```

Dentro da função `App`, antes do `return`:

```jsx
const [equipe, setEquipe] = useState([])

function recrutar(nome) {
  setEquipe([...equipe, nome])
}
```

- `useState([])` cria um "estado" que começa como array vazio.
- `equipe` é o valor atual. `setEquipe` é a **única** forma de trocar esse
  valor. Nunca faça `equipe.push(...)`.
- `[...equipe, nome]` é um array novo com tudo que tinha + o nome novo.

Mostre o contador e passe a função para os cards:

```jsx
return (
  <main>
    <h1>Central de Heróis</h1>
    <p>Heróis na equipe: {equipe.length}</p>
    <section>
      {herois.map((heroi) => (
        <CardHeroi
          key={heroi.nome}
          nome={heroi.nome}
          classe={heroi.classe}
          poder={heroi.poder}
          onRecrutar={recrutar}
        />
      ))}
    </section>
  </main>
)
```

No `CardHeroi.jsx`, receba `onRecrutar` e chame no clique:

```jsx
export default function CardHeroi({ nome, classe, poder, onRecrutar }) {
  return (
    <article>
      <h2>{nome}</h2>
      <p>{classe}</p>
      <p>Poder: {poder}</p>
      <button onClick={() => onRecrutar(nome)}>Recrutar</button>
    </article>
  )
}
```

**Teste agora:** clique em "Recrutar" em alguns cards. O contador
"Heróis na equipe" sobe **na hora**. Ninguém escreveu `getElementById` —
o React redesenhou sozinho porque o estado mudou.

> Por que `onClick={() => onRecrutar(nome)}` e não `onClick={onRecrutar(nome)}`?
> Sem a seta, o código roda **na hora de desenhar**, não no clique.

---

## Parte 6 — Renderização condicional: não recrutar duas vezes (105–120 min)

Se o herói já está na equipe, o botão deveria travar.

No `App.jsx`, evite duplicados:

```jsx
function recrutar(nome) {
  if (equipe.includes(nome)) return
  setEquipe([...equipe, nome])
}
```

Passe para o card se ele já foi recrutado:

```jsx
<CardHeroi
  key={heroi.nome}
  nome={heroi.nome}
  classe={heroi.classe}
  poder={heroi.poder}
  recrutado={equipe.includes(heroi.nome)}
  onRecrutar={recrutar}
/>
```

No `CardHeroi.jsx`, use esse `recrutado` para mudar a tela:

```jsx
export default function CardHeroi({ nome, classe, poder, recrutado, onRecrutar }) {
  return (
    <article className={recrutado ? 'card card--recrutado' : 'card'}>
      <h2>{nome}</h2>
      <p>{classe}</p>
      <p>Poder: {poder}</p>
      <button onClick={() => onRecrutar(nome)} disabled={recrutado}>
        {recrutado ? 'Na equipe ✔' : 'Recrutar'}
      </button>
    </article>
  )
}
```

**Teste agora:** ao recrutar, o botão desativa e troca o texto. Clicar de
novo não faz nada.

### CSS (rápido)

Cole isto em `src/index.css` para os cards ficarem apresentáveis:

```css
body {
  font-family: system-ui, Arial, sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  margin: 0;
  padding: 24px;
}
h1, p { text-align: center; }
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  max-width: 900px;
  margin: 0 auto;
}
.card {
  background: #1e293b;
  border: 2px solid #334155;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}
.card--recrutado { border-color: #22c55e; }
button {
  border: 0;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: bold;
  background: #38bdf8;
  cursor: pointer;
}
button:disabled { background: #22c55e; cursor: default; }
```

---

## Fechamento — o que você aprendeu

| Ideia | Onde usou |
|------|-----------|
| Criar projeto com Vite | `npm create vite` |
| Componente | `App`, `CardHeroi` |
| `props` | dados que o card recebe |
| Lista com `.map()` + `key` | os 4 heróis |
| `useState` | `equipe` |
| Evento `onClick` | botão Recrutar |
| Renderização condicional | `disabled`, `className`, texto do botão |

**A grande sacada:** você nunca disse "mude esse pedaço da tela". Você mudou
o **estado** (`setEquipe`) e o React cuidou da tela.

---

## Desafios (se sobrar tempo, ou em casa)

1. Botão **"Dispensar"** que tira o herói da equipe
   (dica: `setEquipe(equipe.filter((n) => n !== nome))`).
2. Mostrar a **soma do poder** da equipe.
3. Travar a equipe em **3 heróis** e avisar quando estiver cheia.
4. Um `<input>` para **filtrar** heróis pelo nome.
5. Ordenar os cards por poder (maior primeiro).

---

## Se algo der errado

| Sintoma | Causa provável |
|--------|----------------|
| Tela branca | erro de JSX; abra o terminal do `npm run dev` e leia a mensagem |
| `X is not defined` | faltou `import` (do `useState`, do componente...) |
| Contador não muda | usou `equipe.push` em vez de `setEquipe` |
| Aviso amarelo no console | faltou `key` no `.map()` |
| `npm` "não encontrado" | terminal na pasta errada, ou Node não instalado |
| Botão dispara ao carregar | `onClick={fn()}` em vez de `onClick={() => fn()}` |

Código de referência pronto: pasta [`src/`](./src) deste projeto.
