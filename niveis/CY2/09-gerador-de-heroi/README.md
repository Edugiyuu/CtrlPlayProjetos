# Gerador de Herói — CY2 · aula 09

`bloco 1h30 · escopo real ~40 min`

**Sai de:** 3 cards vazios (🧑 Nome, 🛡️ Classe, ⚔️ Arma) com `?` e um botão que não faz nada → **chega em:** cada clique sorteia um nome, uma classe e uma arma, cada um no seu card
**Já tem (aula 08):** `onclick`, `function`, `id` + `innerText`, lista `[ ]`, `Math.random` + `Math.floor` · **Novo hoje:** sortear em 3 listas de uma vez, 3 caixas com 3 `id`, o tamanho da lista no `* 4` · **Fora:** `.length`, laço, CSS novo · **Bônus:** juntar texto com `+`
**Abre com:** "Se a gente tivesse 4 nomes, 4 classes e 4 armas, quantos heróis diferentes dá pra criar?" (64)

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: clicar no `gabarito/` umas 5 vezes; abrir o `inicial/` | o botão do inicial não faz nada |
| 5–15 | **Três listas:** `nomes`, `classes`, `armas` dentro de `gerar()` (tela 1 do Figma) | sem erro no Console (F12) |
| 15–25 | **Sorteia um de cada:** as 3 linhas com `Math.floor(Math.random() * 4)` (tela 2) | `console.log(nome)` muda a cada clique |
| 25–35 | **Um card pra cada:** os 3 `getElementById` (tela 3) | os 3 cards mudam juntos |
| **✅ 35** | **MARCO MÍNIMO — daqui pra baixo é desafio** | herói novo a cada clique |
| 35–55 | **Desafio 1:** emoji da classe com o mesmo `n` (tela 5) | Ninja sempre com 🥷 |
| 55–70 | **Desafio 2:** 4º card, 💪 Força de 1 a 100 | o card novo muda a cada clique |
| 70–80 | **Desafio 3:** 5º nome, e o `* 4` vira `* 5` | o nome novo aparece |
| 80–85 | **Bônus:** a frase com `+` embaixo dos cards | "Kira é Ninja e usa Cajado do Trovão!" |

**Atrasou?** corta o desafio 3 e o bônus. O desafio 1 não corta: é onde ele vê por que um sorteio só serve pra duas listas.

**Referência visual:** o Figma, "Page 3 — Gerador de Herói" (5 telas). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| lista `[ ]` | uma fileira de opções, entre aspas, separadas por vírgula | "Qual é o `classes[0]`?" ("Mago") |
| `* 4` | o tamanho da lista: sai 0, 1, 2 ou 3 | "E se a lista tiver 5?" (vira `* 5`) |
| 3 cards, 3 `id` | cada card tem o seu nome: `caixaNome`, `caixaClasse`, `caixaArma` | "Por que não dá pra usar o mesmo id nos 3?" (o JS só acharia um) |
| `"caixaNome"` × `nome` | com aspas é o nome da caixa no HTML; sem aspas é o que foi sorteado | "O que aparece se eu escrever `innerText = "nome"`?" (a palavra nome) |
| o mesmo `n` em 2 listas | sorteia uma vez e usa nas duas, pra combinar | "Por que o Ninja apareceu com 🧙?" (sorteou duas vezes) |

| Ele vê | Você checa |
|---|---|
| clica e nada acontece | F12 → Console: vírgula faltando na lista ou aspa sem fechar |
| `Cannot set properties of null` | o id está igual ao HTML? `caixaNome`, com N maiúsculo |
| `undefined` num card | `* 5` com lista de 4, ou nome da lista errado (`nome[...]` em vez de `nomes[...]`) |
| aparece a palavra `nome` no card | colocou a variável entre aspas: `"nome"` |
| só um card muda | faltou o `getElementById` dos outros dois |

**Antes:** `inicial/` no PC do aluno, Figma Page 3 no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
