# Bichinho Virtual — CY2 · aula 10

`bloco 1h30 · escopo real ~55 min`

**Sai de:** 🐣 com 3 barras paradas e 3 botões que não fazem nada → **chega em:** bichinho que come, brinca e dorme; as barras crescem e encolhem e o rosto muda (😫 😢 😴)
**Já tem (aulas 08 e 09):** `onclick`, `function`, `id` + `innerText`, variável fora da função (o placar), `if`, juntar com `+` · **Novo hoje:** `.style.width` (o JS mexendo no CSS), `<` (menor que), uma função chamando outra (`atualizar()`) · **Fora:** `||`, `.length`, `setInterval` (só no bônus)
**Abre com:** "Num jogo de bichinho, o que acontece se você só der comida e nunca deixar ele dormir?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: cuidar do bichinho no `gabarito/` até ele ficar 😴 | ele explica por que ficou com sono |
| 5–12 | O que cada botão faz (tela 1 do Figma) | ele diz o que Brincar muda |
| 12–25 | **Números que o jogo lembra:** 3 `let` fora + `alimentar()` (tela 2) | clicar dá `atualizar is not defined` no Console (esperado) |
| 25–37 | **Número vira barra:** `atualizar()` com as 3 linhas de `.style.width` (tela 3) | a barra laranja cresce |
| 37–45 | `brincar()` e `dormir()` sozinho, copiando o `alimentar()` | as 3 barras mexem |
| 45–55 | **O rosto muda:** os 3 `if` com `<` (tela 4) | aparece 😴 depois de brincar 2 vezes |
| **✅ 55** | **MARCO MÍNIMO — daqui pra baixo é desafio** | o bichinho inteiro funciona |
| 55–70 | **Desafio 1:** a barra fugiu (passa de 100%) → limite (tela 6) | a barra para no fim |
| 70–85 | **Desafio 2:** botão 🌙 Passar um dia | tudo cai 20 |

**Atrasou?** corta o desafio 2. O 1 não corta: é a primeira vez que ele **vê** um bug e conserta com `if`.

**Referência visual:** o Figma, "Page 4 — Bichinho Virtual" (6 telas). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| variável fora da função | o número que o jogo não esquece entre um clique e outro | "Se o `let comida = 50` ficar dentro do `alimentar()`, o que acontece?" (volta pra 50 a cada clique) |
| `comida = comida + 20` | pega o que tinha e soma | "Comida era 70, cliquei Alimentar. Quanto fica?" (90) |
| `.style.width` | o JS trocando o CSS da caixa | "Qual CSS a gente está mudando?" (`width`) |
| `comida + "%"` | junta o número com o símbolo: 70 vira `"70%"` | "E sem o `"%"`?" (a barra não muda) |
| `atualizar()` | uma função que redesenha tudo; os botões chamam ela no fim | "Por que não escrever as barras em cada botão?" (ia repetir 3 vezes) |
| `<` | "menor que" | "`energia < 30` com energia 30 é verdade?" (não, 30 não é menor que 30) |

| Ele vê | Você checa |
|---|---|
| o número muda (Console) mas a barra não | esqueceu o `atualizar();` no fim do botão, ou o `+ "%"` |
| `Cannot read properties of null` | o id do `getElementById` está diferente do HTML (`barracomida`, `barraComida `) |
| a barra some | o número ficou negativo |
| o rosto nunca muda | `if (energia < 30)` escrito com `>`, ou faltou o `innerText = rosto` |
| a barra passa do fim | normal! É o desafio 1 |

**Antes:** `inicial/` no PC do aluno, Figma Page 4 no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
