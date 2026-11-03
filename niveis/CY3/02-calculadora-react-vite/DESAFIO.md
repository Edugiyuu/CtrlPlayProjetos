# Sua calculadora

No fim, você clica **1 2 + 3 =** e o visor mostra **15**.

## Comandos de hoje

| Comando | O que faz |
|---|---|
| `npm create vite@latest calculadora` | cria o projeto (escolha **React** e **JavaScript**) |
| `npm install` | baixa as peças que o projeto usa |
| `npm run dev` | liga o site local (`localhost:5173`); **Ctrl+C** desliga |

## Faça

1. **Criar** — `npm create vite@latest calculadora` → React → JavaScript. Depois `cd calculadora`, `npm install`, `npm run dev`.
   **Teste:** o navegador mostra a página do Vite.
2. **Visor** — crie `src/Visor.jsx`:
   ```jsx
   function Visor({ valor }) {
     return <div className="visor">{valor}</div>
   }
   export default Visor
   ```
   Em `App.jsx`, apague tudo, importe o `Visor` e use `<Visor valor="oi" />`.
   **Teste:** a tela mostra "oi".
3. **Botão** — crie `src/Botao.jsx`:
   ```jsx
   function Botao({ texto, aoClicar }) {
     return <button onClick={() => aoClicar(texto)}>{texto}</button>
   }
   export default Botao
   ```
   **Teste:** `<Botao texto="7" aoClicar={alert} />` → clicar mostra um alerta "7".
4. **Dígitos** — no `App`: `const [visor, setVisor] = useState('')` e
   ```jsx
   function digito(d) {
     setVisor(visor + d)
   }
   ```
   Troque `valor="oi"` por `valor={visor}` e crie os botões 0–9: `<Botao texto="7" aoClicar={digito} />`.
   **Teste:** clicar 1, 2 mostra `12`.
5. **Guardar o 1º número** — mais dois estados: `numero1` e `operacao`. Uma função `escolherOperacao(op)` que guarda o visor em `numero1`, guarda `op` e limpa o visor. Botão `+` chama ela.
   Troque o visor por `<Visor valor={numero1 + ' ' + operacao + ' ' + visor} />` pra conta toda aparecer.
   **Teste:** `12`, `+` → visor mostra `12 +`; clica `3` → `12 + 3`.
6. **Igual** — função `igual()`: se `operacao` for `'+'`, mostra `Number(numero1) + Number(visor)`. Depois zere `numero1` e `operacao` (senão o `12 +` continua na tela).
   **Teste:** `12 + 3 =` → **15**.
7. **Resto** — `-`, `×`, `÷` no `igual`, e um botão `C` que zera os três estados.
   **Teste:** `9 ÷ 3 =` → 3; `C` limpa.

## Check

- [ ] `12 + 3 =` dá 15 e `C` limpa.
- [ ] Você sabe dizer **o que é uma prop** (ex.: `texto="7"`).
- [ ] Você sabe dizer **por que** só escreveu `<button>` uma vez.

## Travou?

| Você vê | Faça |
|---|---|
| `Botao is not defined` | faltou o `import Botao from './Botao.jsx'` |
| botão sem número | no `Botao`: `{ texto }` com chaves e `{texto}` no meio do botão |
| visor não muda | use `setVisor(...)`, nunca `visor = ...` |
| `12 + 3` dá `123` | o `+` chamou `digito`? tem que ser `escolherOperacao` |
| página branca | F12 → Console → leia a primeira linha vermelha |

## Sobrou tempo

1. CSS: `.teclas { display: grid; grid-template-columns: repeat(4, 1fr); }`.
2. Prop `cor` no `Botao` (vira `className`) pra operações ficarem laranja.
3. Commit + push do projeto no GitHub (e logout do PC, como na aula 01).
