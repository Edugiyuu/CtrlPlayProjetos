# Calculadora em React + Vite — CY3 · aula 02

`bloco 1h30 · escopo real ~60 min`

**Sai de:** só HTML/JS solto → **chega em:** calculadora de 2 números funcionando, rodando com `npm run dev`
**Já tem:** HTML, CSS, JS básico, Git · **Novo hoje:** componente, JSX, `useState`, `onClick` · **Fora:** props, `useEffect`, rotas, calculadora de teclado
**Abre com:** "Quando você digita um número no campo, onde ele fica guardado?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–10 | Abertura → `npm create vite@latest` (React, JavaScript) → `npm install` → `npm run dev` | página do Vite abre em `localhost:5173` |
| 10–20 | Limpar `App.jsx` → `<h1>` com texto (JSX) | aparece "Calculadora" |
| 20–35 | `useState` para `a` e `b` + dois `<input>` com `onChange` | digitar muda o estado (mostrar `{a}` na tela) |
| 35–50 | `useState` para `resultado` + botão `+` com `onClick` | `7` e `3` → "Resultado: 10" |
| **✅ 50** | **MARCO MÍNIMO — daqui pra baixo é bônus** | |
| 50–60 | Botões `-`, `×`, `÷` (copiar a ideia do `+`) | `9` e `3` com `÷` → 3 |
| 60–70 | CSS básico | fica bonito |
| 70–90 | `÷ 0` → "Erro" · commit + push + logout (CY3 01, etapa 0) | repo no GitHub, PC sem login |

**Atrasou?** corta o CSS. Só o `+` funcionando já é o marco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| componente | função que devolve um pedaço de tela | "O que o `App` devolve?" (o HTML da tela) |
| JSX | HTML dentro do JavaScript | "O que vai dentro de `{ }`?" (JavaScript) |
| estado | valor que a tela lembra; mudou, a tela redesenha | "Por que não `let a`?" (a tela não atualiza) |
| `useState` | cria estado: `[valor, funcaoQueMuda]` | "Como mudo o `a`?" (`setA`, nunca `a = `) |
| `onClick` | roda uma função quando clica | "`onClick={f}` ou `onClick={f()}`?" (sem parênteses, senão roda na hora) |

| Ele vê | Você checa |
|---|---|
| digita no campo e nada aparece | faltou `value` ou `onChange` no `<input>` |
| `7 + 3` dá `73` | faltou `Number()` — o campo devolve texto |
| resultado aparece sozinho ao abrir | `onClick={f()}` → tirar os parênteses ou usar `() => f()` |
| `npm` não é reconhecido | Node não instalado → chame o professor |
| página branca | F12 → Console → erro de sintaxe no JSX |

**Antes:** `node -v` funcionando no PC (22+)
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/calculadora](./gabarito/calculadora/)
