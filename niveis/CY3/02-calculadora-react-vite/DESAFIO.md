# Sua calculadora

No fim, você aperta `7 + 3 =` numa página sua e aparece **10**.

## Comandos de hoje

| Comando | O que faz |
|---|---|
| `npm create vite@latest calculadora` | cria o projeto (escolha **React** e **JavaScript**) |
| `npm install` | baixa as peças que o projeto usa |
| `npm run dev` | liga o site local (`localhost:5173`); **Ctrl+C** desliga |

## Faça

1. **Criar** — `npm create vite@latest calculadora` → React → JavaScript. Depois `cd calculadora`, `npm install`, `npm run dev`.
   **Teste:** o navegador mostra a página do Vite.
2. **Limpar** — em `src/App.jsx`, apague tudo e deixe só uma função `App` que devolve `<h1>0</h1>` (e `export default App`).
   **Teste:** a página mostra só o `0`.
3. **Lembrar** — no topo de `App`: `const [visor, setVisor] = useState('0')` (importe `useState` de `'react'`). Troque o `0` do `<h1>` por `{visor}`.
   **Teste:** mude `'0'` para `'99'` no código: a página mostra 99.
4. **Dígitos** — faça uma função `digito(d)` que coloca `d` no fim do visor (se o visor for `'0'`, troca). Crie botões 0–9 com `onClick={() => digito('7')}`.
   **Teste:** clicar 7, 3 mostra `73`.
5. **Operação** — crie mais três estados: `guardado`, `op` e `novo` (próximo dígito começa número novo?). Botão `+`: guarda `Number(visor)`, anota `'+'` e marca `novo`.
   **Teste:** `7`, `+`, `3` mostra `3` (o 7 ficou guardado).
6. **Igual e C** — `=` calcula `guardado + Number(visor)` e mostra no visor. `C` volta tudo ao começo.
   **Teste:** `7 + 3 =` mostra **10**; `C` volta a `0`.
7. **Outras contas** — `-`, `×`, `÷` usando a mesma ideia.
   **Teste:** `9 ÷ 3 =` mostra 3.

## Check

- [ ] `7 + 3 =` dá 10 e `C` limpa.
- [ ] Você sabe dizer **por que** `let visor` não funcionaria.
- [ ] Você sabe dizer a diferença entre `onClick={f}` e `onClick={f()}`.

## Travou?

| Você vê | Faça |
|---|---|
| visor não muda ao clicar | você usou `visor = ...`? use `setVisor(...)` |
| visor muda sozinho ao abrir | tire os `()` do `onClick={f()}` |
| `7 + 3` mostra `73` | clicou `+` antes de guardar? veja a etapa 5 |
| página branca | F12 → Console → leia a primeira linha vermelha |
| `npm` não existe | chame o professor |

## Sobrou tempo

1. CSS: botões em grade de 4 colunas, visor escuro (`display: grid`).
2. Botão `.` (ponto decimal) sem deixar digitar dois pontos.
3. `1 ÷ 0` mostra **Erro** em vez de `Infinity`.
4. Commit + push do projeto no GitHub (e logout do PC, como na aula 01).
