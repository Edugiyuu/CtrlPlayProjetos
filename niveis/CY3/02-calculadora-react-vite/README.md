# Calculadora em React + Vite — CY3 · aula 02

`bloco 1h30 · escopo real ~60 min`

**Sai de:** só HTML/JS solto → **chega em:** calculadora com teclado 0–9, rodando com `npm run dev`
**Já tem:** HTML, CSS, JS básico, Git · **Novo hoje:** componente, props, `useState`, `onClick` · **Fora:** `.map`, `useEffect`, rotas, ponto decimal
**Abre com:** "Essa calculadora tem 16 botões. Vamos escrever 16 vezes o mesmo HTML?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–10 | Abertura → `npm create vite@latest` (React, JavaScript) → `npm install` → `npm run dev` | página do Vite abre em `localhost:5173` |
| 10–20 | Limpar `App.jsx` → componente `Visor` com prop `valor` | aparece o visor com o texto passado |
| 20–30 | Componente `Botao` com props `texto` e `aoClicar` → 3 botões | 3 botões na tela |
| 30–45 | `useState` do visor + `digito` → teclado 0–9 | clica 1, 2 → visor "12" |
| 45–60 | `numero1` e `operacao` → `+` e `=` | `12 + 3 =` → 15 |
| **✅ 60** | **MARCO MÍNIMO — daqui pra baixo é bônus** | |
| 60–70 | `-`, `×`, `÷` e `C` | `9 ÷ 3 =` → 3 |
| 70–80 | CSS: grid 4 colunas + prop `cor` | parece calculadora |
| 80–90 | Commit + push + logout (CY3 01, etapa 0) | repo no GitHub, PC sem login |

**Atrasou?** corta o CSS. Só `+` e `=` já é o marco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| componente | função que devolve um pedaço de tela, usada como tag | "Quantas vezes escrevemos o `<button>`?" (1, no `Botao`) |
| props | o que você passa pro componente, tipo atributo | "Como o `Botao` sabe que é o 7?" (`texto="7"`) |
| estado | valor que a tela lembra; mudou, a tela redesenha | "Por que não `let visor`?" (a tela não atualiza) |
| `useState` | cria estado: `[valor, funcaoQueMuda]` | "Como mudo o visor?" (`setVisor`, nunca `visor =`) |
| função como prop | o `Botao` recebe *qual* função chamar | "Por que o 7 e o + chamam coisas diferentes?" (`aoClicar` diferente) |

| Ele vê | Você checa |
|---|---|
| `Botao is not defined` | faltou `import Botao from './Botao.jsx'` |
| botão sem texto | escreveu `{texto}` no `Botao`? recebeu `{ texto }` entre chaves? |
| visor não muda ao clicar | `visor = ...` em vez de `setVisor(...)` |
| `12 + 3 =` dá `123` ou `3` | não guardou o `numero1` / esqueceu `Number()` |
| depois do `=` aparece `12 + 15` | `igual` não zerou `numero1` e `operacao` |
| página branca | F12 → Console → erro no JSX ou no import |

**Antes:** `node -v` funcionando no PC (22+)
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/calculadora](./gabarito/calculadora/)
