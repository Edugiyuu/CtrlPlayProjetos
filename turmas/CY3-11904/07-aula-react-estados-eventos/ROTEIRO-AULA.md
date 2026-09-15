# Roteiro de Aula: Criando Equações Através de Estados e Eventos

## Dados

- **Turma alvo:** #11904 — CY3 (aula #7), aula particular (só o Miguel)
- **Projeto:** Catálogo da Loja (mesmo projeto Vite das aulas #5/#6)
- **Duração:** bloco de ~2h, mas **escopo real ~50 min** + folga. Sobrar é ok.
- **Pré-requisito real:** aula #6 completa e foi bem — ele sabe `.map()`,
  `key` e cálculo de valor derivado no JSX (`frete`). **Não viu** `useState`
  nem nenhum evento ainda; tratar como conceito 100% novo.
- **Tema:** sequência natural do cronograma oficial, mesmo projeto.

## Objetivo

Sair de "a tela é sempre a mesma depois que carrega" para "eu clico e algo na
tela muda". O componente passa a **guardar** um valor (não só receber via
props, nem só calcular) e o React redesenha sozinho quando esse valor muda.

## O que NÃO entra nesta aula

Estado subindo pro `App.jsx` (ex.: um contador geral de itens no topo da
página), inputs controlados, `useEffect`, limite/clamp no contador (pode
ficar negativo, sem problema hoje). Se ele perguntar "e pra somar tudo lá em
cima?", a resposta é "é um passo a mais, guardamos pra uma próxima aula
quando isso aqui estiver redondo".

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| `useState` | Uma "caixinha de memória" dentro do componente. Guarda um valor que pode mudar, e quando muda, o React **redesenha** aquele componente sozinho. Diferente de prop (vem de fora) e de "cálculo no JSX" (não guarda nada, só recalcula). | `const [favorito, setFavorito] = useState(false)` |
| Par `[valor, setValor]` | `useState(inicial)` devolve **dois** itens: o valor atual e uma função pra mudar esse valor. Os nomes são escolha sua. | `favorito` / `setFavorito` |
| `onClick` (evento) | Uma função que o React roda quando o usuário clica no elemento. Tem que ser uma função — não pode "já rodar" ao desenhar. | `<button onClick={() => setFavorito(!favorito)}>` |
| Atualizar estado | Só a função `set` muda o valor de verdade e avisa o React. Mudar a variável direto (`favorito = true`) não faz nada na tela. | `setFavorito(!favorito)` |
| Renderização condicional simples | Usar o valor do estado dentro de `{ }` pra decidir o que mostrar. | `{favorito ? '❤️' : '🤍'}` |

> Regra da turma (memória `feedback-conceitos-explicitos`): cada termo acima
> ganha um momento próprio de explicação com exemplo dos dados reais + uma
> pergunta de "teste de entendimento" antes de seguir.

## Regras do material (memória `aulas-miguel-murilo-feedback`)

- **O Miguel escreve o código.** Você dita o que fazer e o que testar; não
  entrega arquivo pronto. O `gabarito/` é seu.
- Estimar e cortar pela metade. **Marco mínimo** definido abaixo; resto é bônus.
- **Ponto de parada** no meio para medir ritmo.

## Preparação (antes do aluno chegar)

- [ ] Projeto do Catálogo da Loja aberto, `npm run dev` rodando
- [ ] Conferir que o estado é o do fim da aula #6 (array com 5 produtos,
      `CardProduto.jsx` com o cálculo de `frete`)
- [ ] `gabarito/` desta pasta aberto numa aba só sua

---

## Roteiro

### 0–10 min — Recap sem código

Perguntas, ele responde com as próprias palavras (não aceitar "sei lá"):

1. O que o `.map()` faz no `App.jsx`?
2. Por que cada card precisa de um `key`?
3. O "frete" do card é uma prop? (não — é calculado a partir de uma prop)

Rodar o projeto, ver os cards na tela. **Pergunta que abre a aula:** "eu
quero clicar num coração pra favoritar um produto. clica aí." (ele clica,
nada acontece). "por quê não aconteceu nada?" — porque nada nesse código
guarda "esse produto tá favoritado". É isso que resolvemos hoje.

### 10–35 min — `useState` + `onClick`: favoritar um produto

- No `CardProduto.jsx`, importar: `import { useState } from 'react'`.
- Dentro do componente, antes do `return`:
  `const [favorito, setFavorito] = useState(false)`.
- Explicar a caixinha: "esse componente agora **lembra** se tá favoritado ou
  não, e essa memória é só dele".
- Adicionar um `<button>` com `onClick={() => setFavorito(!favorito)}`.
- Mostrar `{favorito ? '❤️' : '🤍'}` dentro do botão.

Snippet de referência (professor):

```jsx
import { useState } from 'react'

export default function CardProduto({ nome, categoria, preco }) {
  const [favorito, setFavorito] = useState(false)
  const frete = preco >= 100 ? 'Frete grátis' : 'Frete: R$ 10'

  return (
    <article className="card">
      <h2>{nome}</h2>
      <p>{categoria}</p>
      <p>R$ {preco} — {frete}</p>
      <button onClick={() => setFavorito(!favorito)}>
        {favorito ? '❤️' : '🤍'}
      </button>
    </article>
  )
}
```

**Teste de entendimento:** "o `useState(false)` devolve duas coisas — quais?"
(o valor atual e a função pra mudar). "se eu escrever `favorito = true` direto,
sem usar `setFavorito`, o coração muda na tela?" (não — o React só redesenha
quando a função `set` é chamada).

**Teste agora:** clicar no coração de **um** card muda só aquele card, os
outros continuam 🤍. Importante deixar ele reparar nisso sozinho: cada card
tem seu próprio `useState`, é uma caixinha por componente.

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~35 min)

Se chegou aqui, **a aula valeu**. O Miguel consegue:

- [ ] explicar o que o `useState` guarda e por que o React redesenha quando muda
- [ ] dizer a diferença entre prop (`preco`), cálculo (`frete`) e estado (`favorito`)
- [ ] favoritar/desfavoritar um produto clicando, e só aquele card muda
- [ ] dizer por que não pode mudar a variável direto, tem que usar o `set`

Se o ritmo estiver apertado ou ele meio perdido: **para aqui**, revisa, e o
contador vira a abertura da aula #8. Não empurrar.

---

### 35–50 min — Contador de quantidade (bônus, se o marco veio tranquilo)

Mesma ideia do favorito, com um número em vez de um boolean.

- `const [quantidade, setQuantidade] = useState(0)`.
- Dois botões: `onClick={() => setQuantidade(quantidade + 1)}` e
  `onClick={() => setQuantidade(quantidade - 1)}`.
- Mostrar `{quantidade}` entre os dois botões.

Snippet de referência (professor):

```jsx
<div>
  <button onClick={() => setQuantidade(quantidade - 1)}>-</button>
  <span> {quantidade} </span>
  <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
</div>
```

**Teste agora:** clicar em "+" soma, clicar em "-" desce (pode ficar
negativo — não é o foco hoje, tudo bem).

**Teste de entendimento:** "por que `setQuantidade(quantidade + 1)` e não só
`quantidade + 1`?" (o `+1` sozinho não guarda nada nem avisa o React; precisa
passar o novo valor pro `set`).

### 50 min+ — Desafio

Passar o [DESAFIO.md](./DESAFIO.md). Ele faz sozinho, você só destrava.
Serve pra você ver se `useState` + `onClick` ficaram de pé.

## Perguntas para conduzir a aula

1. Qual a diferença entre uma prop e um estado?
2. Por que cada card tem seu próprio favorito, e não um só pra tela toda?
3. O que a função `set` faz que atribuir direto (`favorito = true`) não faz?
4. Dá pra usar `useState` fora de um componente? (não)

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Trocar o coração por um texto "Favorito!" que só aparece quando
   `favorito` é `true` (`{favorito && <p>Favorito!</p>}`).
2. Um botão "Zerar" no contador que volta `quantidade` pra `0`.
3. Mudar a cor de fundo do card quando favoritado (`className` condicional).

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| Clique não muda nada | esqueceu o `onClick`, ou escreveu `onClick={setFavorito(!favorito)}` sem a seta `() =>` — isso roda **na hora de desenhar**, não no clique |
| `useState is not defined` | faltou `import { useState } from 'react'` |
| Tela branca | erro de JSX; ler o terminal do `npm run dev` |
| Contador não sobe | comparação errada, tipo `setQuantidade(1)` fixo em vez de `quantidade + 1` |
| Clicar num card muda os outros também | não deveria acontecer (estado é por card); se acontecer, provavelmente o estado foi criado no `App.jsx` por engano em vez do `CardProduto.jsx` |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._

Atualizar `alunos/progresso/turma-11904.md`:

- Cronograma: status da aula #7 + Observações com **até onde o Miguel chegou
  de verdade** (só favoritar? chegou no contador? fez o desafio?).
- Progresso por Aluno: presença, dificuldades.
- Resumo Geral: "Aulas concluídas X / 18" e Próximos passos → aula #8
  "Finalizando a Calculadora com Math.js".
- Data em `_Última atualização:_`.
- Atualizar também `turmas/CY3-11904/README.md` (tabela de projetos).
