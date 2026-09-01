# Central de Heróis — React + Vite

Primeiro projeto de React da turma. O aluno monta uma "Central de Heróis"
onde é possível recrutar personagens para uma equipe.

## O que o aluno pratica

- Criar um projeto React com **Vite**
- Componentes e `props`
- Renderizar listas com `.map()` e `key`
- Estado com `useState`
- Eventos com `onClick`
- Renderização condicional (`className`, `disabled`, texto do botão)

## Preparação do professor (uma vez por computador)

```powershell
winget install --id OpenJS.NodeJS.LTS --exact
```

## Como criar o projeto na aula

```bash
npm create vite@latest central-herois -- --template react
cd central-herois
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente <http://localhost:5173>).

## Como rodar esta versão pronta

```bash
cd aula-react-vite
npm install
npm run dev
```

## Estrutura

```text
aula-react-vite/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx        # ponto de entrada
    ├── App.jsx         # estado da equipe + lista de heróis
    ├── CardHeroi.jsx   # componente de card (recebe props)
    ├── herois.js       # dados
    └── styles.css
```

- [ROTEIRO-AULA.md](./ROTEIRO-AULA.md) — visão do professor (blocos de tempo).
- [AULA-PASSO-A-PASSO.md](./AULA-PASSO-A-PASSO.md) — a aula em si, código por código,
  para o aluno que nunca viu React.
