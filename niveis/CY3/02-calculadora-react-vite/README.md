# Calculadora em React + Vite — CY3 · aula 02

`bloco 1h30 · escopo real ~60 min`

**Sai de:** só HTML/JS solto → **chega em:** calculadora funcionando no navegador, rodando com `npm run dev`
**Já tem:** HTML, CSS, JS básico, Git · **Novo hoje:** componente, JSX, `useState`, `onClick` · **Fora:** props, `useEffect`, rotas
**Abre com:** "Quando você aperta 7 e depois 3, o que a calculadora precisa lembrar?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–10 | Abertura → `npm create vite@latest` (React, JavaScript) → `npm install` → `npm run dev` | página do Vite abre em `localhost:5173` |
| 10–20 | Limpar `App.jsx` → visor + 1 botão (JSX) | aparece "0" e um botão |
| 20–35 | `useState` para o visor → botões 0–9 mudam o visor | clica 7, 3 → visor "73" |
| 35–55 | Operações + `=` + `C` (guardar número, operação, calcular) | `7 + 3 =` → 10 |
| **✅ 55** | **MARCO MÍNIMO — daqui pra baixo é bônus** | |
| 55–65 | CSS: grid 4 colunas, visor escuro | parece calculadora |
| 65–75 | Ponto decimal e erro na divisão por 0 | `1 ÷ 0` → "Erro" |
| 75–90 | Commit + push do projeto + logout (CY3 01, etapa 0) | repo no GitHub, PC sem login |

**Atrasou?** corta o CSS e o ponto. Se só ficou `+`, tudo bem: o marco é a lógica de guardar-e-calcular.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| componente | função que devolve um pedaço de tela | "O que o `App` devolve?" (o HTML da tela) |
| JSX | HTML dentro do JavaScript | "O que vai dentro de `{ }`?" (JavaScript) |
| estado | valor que a tela lembra; mudou, a tela redesenha | "Por que não `let visor`?" (a tela não atualiza) |
| `useState` | cria estado: `[valor, funcaoQueMuda]` | "Como mudo o visor?" (`setVisor`, nunca `visor =`) |
| `onClick` | roda uma função quando clica | "`onClick={f}` ou `onClick={f()}`?" (sem parênteses, senão roda na hora) |

| Ele vê | Você checa |
|---|---|
| visor não muda ao clicar | usou `visor = ...` em vez de `setVisor(...)` |
| visor muda sozinho ao abrir a página | `onClick={f()}` → tirar os parênteses ou usar `() => f()` |
| `73` vira `7` + `3` somados (`10`) | `Number()` só na hora de calcular; visor é texto |
| `npm` não é reconhecido | Node não instalado → chame o professor |
| página branca | olhar o console (F12) → erro de sintaxe no JSX |
| `7 + 3 =` dá `73` ou `7` | não guardou o 7 antes de limpar o visor |

**Antes:** `node -v` funcionando no PC (22+)
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/calculadora](./gabarito/calculadora/)
