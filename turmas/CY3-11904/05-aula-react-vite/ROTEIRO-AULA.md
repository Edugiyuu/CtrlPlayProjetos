# Roteiro de Aula: Novas Aventuras com React.js (Vite)

## Dados

- **Turma alvo:** #11904 — CY3 (aula #5)
- **Projeto:** Central de Heróis
- **Duração:** ~2 horas
- **Pré-requisito do aluno:** já viu JavaScript (arrays, objetos, funções, eventos)

## Objetivo

Sair de HTML/JS puro e entender por que usamos React: componentes reutilizáveis
e uma tela que se atualiza sozinha quando os dados mudam.

## Conceitos da aula

| Conceito | Onde aparece |
|----------|--------------|
| Projeto com Vite | terminal, `npm run dev` |
| Componente | `App`, `CardHeroi` |
| `props` | `CardHeroi({ nome, classe, poder })` |
| Lista com `.map()` e `key` | `App.jsx` |
| `useState` | `equipe` em `App.jsx` |
| Evento `onClick` | botão Recrutar |
| Renderização condicional | classe/`disabled`/texto do botão |

## Roteiro sugerido para 2 horas

### 0–15 min — Mostrar o resultado e criar o projeto

- Mostrar a Central de Heróis pronta e recrutar um herói.
- Perguntar: "quantos cards existem? o que muda quando clico?"
- Criar o projeto juntos:

  ```bash
  npm create vite@latest central-herois -- --template react
  cd central-herois
  npm install
  npm run dev
  ```

- Explicar `index.html` → `src/main.jsx` → `src/App.jsx`.

### 15–35 min — Limpar e escrever o primeiro componente

- Apagar o conteúdo padrão de `App.jsx`.
- Criar um `App` que retorna só um `<h1>Central de Heróis</h1>`.
- Explicar JSX: parece HTML, mas é JavaScript.

### 35–60 min — Componente `CardHeroi` com props

- Criar `src/CardHeroi.jsx` com um card fixo.
- Passar `props`: `nome`, `classe`, `poder`.
- Usar `<CardHeroi nome="Aurora" classe="Maga do Gelo" poder={78} />` no `App`.
- Repetir com 2 heróis escritos na mão para sentir a repetição.

### 60–80 min — Lista de dados com `.map()`

- Criar `src/herois.js` com o array.
- Trocar os cards escritos na mão por `herois.map(...)`.
- Explicar por que cada item precisa de `key`.

### 80–105 min — Estado com `useState` e evento

- `const [equipe, setEquipe] = useState([])`.
- Função `recrutar(nome)` → `setEquipe([...equipe, nome])`.
- Passar `onRecrutar={recrutar}` como prop e chamar no `onClick`.
- Mostrar o contador `equipe.length` atualizando na hora.

### 105–120 min — Renderização condicional e teste

- Se o herói já está na equipe: mudar a classe do card, desabilitar o botão,
  trocar o texto para "Na equipe ✔".
- Testar: recrutar todos, tentar recrutar de novo, recarregar a página.

## Perguntas para conduzir a aula

1. O que o React faz sozinho quando `equipe` muda?
2. Por que `CardHeroi` não sabe nada sobre o array de heróis?
3. O que aconteceria se dois heróis tivessem o mesmo `key`?
4. Qual a diferença entre escrever a tela em HTML e "descrever" a tela em React?

## Desafios se sobrar tempo

1. Botão "Dispensar" que remove o herói da equipe (`filter`).
2. Mostrar a soma do poder da equipe.
3. Ordenar os heróis por poder.
4. Um `input` para filtrar heróis pelo nome.
5. Limitar a equipe a 3 heróis e avisar quando estiver cheia.

## Erros comuns

- Esquecer de importar o componente / `useState`.
- Alterar o estado direto (`equipe.push(...)`) em vez de `setEquipe`.
- Esquecer a `key` no `.map()`.
- Rodar o comando na pasta errada do terminal.

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._

Depois da aula, atualizar `alunos/progresso/turma-11904.md`:
status da aula #5, presença do Miguel e dificuldades observadas.
Ver o fluxo em [alunos/WORKFLOW-AULAS.md](../alunos/WORKFLOW-AULAS.md).
