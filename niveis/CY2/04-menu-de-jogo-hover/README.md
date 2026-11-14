# O menu do jogo (hover e transition) — CY2 · aula 04

`bloco 1h30 · escopo real ~55 min`

**Sai de:** título + 3 palavras soltas → **chega em:** menu de jogo escuro em que cada botão reage ao mouse de um jeito, devagar, + 1 botão escrito por ele do zero
**Já tem (aulas 01 a 03):** a regra do CSS, `color`, `background-color`, `padding`, `margin-bottom`, `border`, `border-radius`, dois apelidos, e um gostinho de `:hover` + `transition` · **Novo hoje (a fundo):** `:hover` em vários botões, `transition` (onde mora e o tempo), `margin-left`, mudar duas coisas no mesmo hover · **Fora:** `transform`, `cursor`, `@keyframes`, links
**Abre com:** "Num jogo, o que acontece com o botão quando o mouse passa em cima? E num site feito por iniciante?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: o menu cru e o pronto; passar o mouse nos botões do pronto | ele descreve o que cada botão faz |
| 5–17 | **Revisão sozinho:** `body`, `h1` e `.botao` com o que já sabe | menu escuro, 3 botões com borda |
| 17–25 | **`:hover`:** `.jogar:hover` verde, sem transition (tela 1 do Figma) | verde de uma vez, volta ao tirar o mouse |
| 25–33 | **`transition`:** no `.botao`; testar 2s, 0.1s, 0.3s (tela 2) | o verde vem aos poucos |
| 33–40 | `.opcoes:hover` com `margin-left` (tela 3) | o botão desliza |
| 40–47 | `.sair:hover` com duas mudanças (tela 3) | vermelho **e** pílula juntos |
| **✅ 47** | **MARCO MÍNIMO — daqui pra baixo é desafio** | 3 botões animados |
| 47–70 | **Desafio 1:** botão Loja do zero + hover inventado (tela 5) | a Loja anima sem `transition` novo |
| 70–85 | **Desafio 2:** `transition` no lugar errado | ele vê a volta pular |

**Atrasou?** corta o desafio 2 e mostra você, na tela, em 1 minuto. O desafio 1 não corta: é o "porquê" da aula.

**Referência visual:** o board do Figma, bloco "Aula 04" (3 telas de conceito + a página pronta + o desafio). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| `:hover` | regra que só vale com o mouse em cima | "Tirei o mouse e voltou. Por quê?" (a regra do hover parou de valer) |
| `.jogar:hover` | o hover só desse botão, porque só ele tem o apelido `jogar` | "Por que o Sair não ficou verde?" (ele não tem o apelido `jogar`) |
| `transition` | a mudança acontece devagar | "Quero mais lento. Aumento ou diminuo o número?" (aumento) |
| onde mora o `transition` | na regra **normal**, pra valer na ida e na volta | "Pus no `:hover` e a volta pulou. Por quê?" (sem mouse, o hover não vale, nem o transition dele) |
| duas mudanças no hover | várias linhas na mesma regra, todas animam juntas | "Quantas coisas mudam no Sair?" (2) |

| Ele vê | Você checa |
|---|---|
| o hover não faz nada | espaço entre apelido e `:hover`, ou `.jogar :hover` |
| sem animação | `transition: 0.3` sem o `s`, ou foi parar no `h1` |
| a volta pula | `transition` dentro do `:hover` |
| todos os botões ficam verdes | escreveu `.botao:hover` em vez de `.jogar:hover` |
| a Loja sem visual | esqueceu o `botao` no `class` |

**Antes:** `inicial/index.html` no PC do aluno, board do Figma aberto no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
