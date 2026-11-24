# Gerador de Herói — CY2 · aula 09

`bloco 1h30 · escopo real ~45 min`

**Sai de:** a carta do herói pronta, mas o botão não faz nada → **chega em:** cada clique sorteia um nome, uma classe e uma arma e monta a frase "Kira é Ninja e usa Cajado do Trovão"
**Já tem (aula 08):** `onclick`, `function`, `id` + `innerText`, lista `[ ]`, `Math.random` + `Math.floor` · **Novo hoje:** juntar texto com `+` (e o espaço dentro das aspas), sortear em 3 listas de uma vez · **Fora:** `.length`, laço, CSS novo
**Abre com:** "Se a gente tivesse 4 nomes, 4 classes e 4 armas, quantos heróis diferentes dá pra criar?" (64)

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: clicar no `gabarito/` umas 5 vezes; abrir o `inicial/` | o botão do inicial não faz nada |
| 5–15 | **Três listas:** `nomes`, `classes`, `armas` dentro de `gerar()` (tela 1 do Figma) | sem erro no Console (F12) |
| 15–25 | **Sorteia um de cada:** as 3 linhas com `Math.floor(Math.random() * 4)` (tela 2) | `console.log(nome)` mostra um nome diferente a cada clique |
| 25–40 | **Juntar com `+`:** a frase no `heroi` (tela 3) | aparece a frase com espaços certos |
| **✅ 40** | **MARCO MÍNIMO — daqui pra baixo é desafio** | herói novo a cada clique |
| 40–60 | **Desafio 1:** emoji da classe com o mesmo `n` (tela 5) | Ninja sempre com 🥷 |
| 60–70 | **Desafio 2:** força de 1 a 100 | número muda a cada clique |
| 70–85 | **Desafio 3:** 5º nome, e o `* 4` vira `* 5` | o nome novo aparece |

**Atrasou?** corta o desafio 2. O desafio 1 não corta: é onde ele vê por que um sorteio só serve pra duas listas.

**Referência visual:** o Figma, "Page 3 — Gerador de Herói" (5 telas). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| lista `[ ]` | uma fileira de opções, entre aspas, separadas por vírgula | "Qual é o `classes[0]`?" ("Mago") |
| `* 4` | o tamanho da lista: sai 0, 1, 2 ou 3 | "E se a lista tiver 5?" (vira `* 5`) |
| `+` com texto | cola um pedaço no outro, do jeito que está | "Por que saiu `KiraéNinja`?" (faltou espaço dentro das aspas) |
| texto fixo × sorteado | o que está entre aspas não muda; o resto vem da lista | "Qual pedaço muda a cada clique?" (nome, classe, arma) |
| o mesmo `n` em 2 listas | sorteia uma vez e usa nas duas, pra combinar | "Por que o Ninja apareceu com 🧙?" (sorteou duas vezes) |

| Ele vê | Você checa |
|---|---|
| clica e nada acontece | F12 → Console: vírgula faltando na lista ou aspa sem fechar |
| `undefined` na frase | `* 5` com lista de 4, ou nome da lista errado (`nome[...]` em vez de `nomes[...]`) |
| `KiraéNinja` | espaço dentro das aspas: `" é "` |
| aparece `nome` escrito na tela | colocou a variável entre aspas: `"nome"` |
| sempre o mesmo herói | esqueceu o `Math.random` ou escreveu `nomes[0]` fixo |

**Antes:** `inicial/` no PC do aluno, Figma Page 3 no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
