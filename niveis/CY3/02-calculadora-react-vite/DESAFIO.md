# Sua calculadora

No fim, você digita **7** e **3**, clica **+** e aparece **Resultado: 10**.

## Comandos de hoje

| Comando | O que faz |
|---|---|
| `npm create vite@latest calculadora` | cria o projeto (escolha **React** e **JavaScript**) |
| `npm install` | baixa as peças que o projeto usa |
| `npm run dev` | liga o site local (`localhost:5173`); **Ctrl+C** desliga |

## Faça

1. **Criar** — `npm create vite@latest calculadora` → React → JavaScript. Depois `cd calculadora`, `npm install`, `npm run dev`.
   **Teste:** o navegador mostra a página do Vite.
2. **Limpar** — em `src/App.jsx`, apague tudo e deixe só isto:
   ```jsx
   function App() {
     return <h1>Calculadora</h1>
   }
   export default App
   ```
   **Teste:** a página mostra só "Calculadora".
3. **Os dois números** — importe o `useState` (`import { useState } from 'react'`). Dentro de `App`, antes do `return`:
   ```jsx
   const [a, setA] = useState('')
   const [b, setB] = useState('')
   ```
   No `return`, coloque dois campos (o `return` precisa de **uma** `<div>` por fora):
   ```jsx
   <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
   <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
   ```
   **Teste:** digite nos campos e os números aparecem. (Ponha `<p>{a}</p>` embaixo pra ver o estado mudando.)
4. **Resultado** — crie `const [resultado, setResultado] = useState('')` e mostre `<h2>Resultado: {resultado}</h2>`.
   **Teste:** mude `''` para `'oi'` no código: a tela mostra "Resultado: oi". Volte pra `''`.
5. **Botão +** — um botão que calcula:
   ```jsx
   <button onClick={() => setResultado(Number(a) + Number(b))}>+</button>
   ```
   **Teste:** `7` e `3`, clica `+` → **Resultado: 10**.
6. **Outras contas** — botões `-`, `×` (`*`) e `÷` (`/`), iguais ao `+`.
   **Teste:** `9` e `3` com `÷` → 3.

## Check

- [ ] `7` e `3` com `+` dá 10.
- [ ] Você sabe dizer **por que** não usamos `let a = ...`.
- [ ] Você sabe dizer a diferença entre `onClick={f}` e `onClick={f()}`.

## Travou?

| Você vê | Faça |
|---|---|
| digito e nada aparece | o `<input>` tem `value` e `onChange`? |
| `7 + 3` dá `73` | use `Number(a) + Number(b)` |
| resultado aparece sozinho ao abrir | `onClick={() => ...}`, com a setinha |
| página branca | F12 → Console → leia a primeira linha vermelha |
| `npm` não existe | chame o professor |

## Sobrou tempo

1. CSS: dois campos e quatro botões bonitos (`display: grid`).
2. `÷` por 0 mostra **Erro**.
3. Commit + push do projeto no GitHub (e logout do PC, como na aula 01).
