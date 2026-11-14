# Minhas cartas de monstro — CY2 · aula 03

`bloco 1h30 · escopo real ~55 min`

**Sai de:** 3 cartas de monstro sem cor → **chega em:** 3 cartas com borda, canto redondo e a cor do tipo, + 1 monstro escrito por ele do zero
**Já tem (aulas 01 e 02):** a regra do CSS, `color`, `background-color`, `padding`, `<div>`, `class` + `.card`, `margin-bottom` · **Novo hoje:** `border`, `border-radius`, **dois apelidos** na mesma tag (`class="card fogo"`), e um primeiro gostinho de `:hover` + `transition` (a aula 04 é toda sobre isso) · **Fora:** links, mais de uma página, `width`, arquivo `.css` separado
**Abre com:** "As 3 cartas têm a mesma borda, mas cada uma tem uma cor. Como eu faço isso sem escrever 3 vezes a borda?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: o `index.html` cru e o pronto, lado a lado | ele aponta o que é igual e o que é diferente nas cartas |
| 5–15 | **Revisão sozinho:** `h1` e `.card` com padding e margin-bottom, sem copiar | título escuro, cartas separadas |
| 15–25 | **`border`:** grossura, tipo, cor (tela 1 do Figma) | contorno nas 3 cartas |
| 25–30 | **`border-radius`** (tela 1) | canto redondo |
| 30–42 | **Dois apelidos:** `card` = igual em todas, `fogo` = só uma. Regra `.fogo` (tela 2) | **só** o Brasa fica vermelho |
| 42–48 | `.agua` e `.planta` sozinho | cada um com a sua cor |
| **✅ 48** | **MARCO MÍNIMO — daqui pra baixo é bônus e desafio** | 3 cartas com borda e cor do tipo |
| 48–55 | **`:hover` + `transition`, só um pouquinho:** `.card:hover { margin-left: 20px; }`, depois `transition: 0.3s` no `.card` (tela 4) | a carta desliza pra direita com o mouse |
| 55–75 | **Desafio:** monstro elétrico com o HTML escrito do zero + `.eletrico` (tela 5) | a carta nova nasce com borda **e** desliza |
| 75–90 | Desafio 2: um tipo inventado por ele | 5 cartas |

**Atrasou?** corta o desafio 2 e, se precisar, o hover (ele volta inteiro na aula 04). O desafio 1 não corta: é a primeira vez que ele **escreve HTML do zero**, e é nele que entende por que a borda veio sozinha.

**Referência visual:** o board do Figma, bloco "Aula 03" (2 telas de conceito + a página pronta + o hover + o desafio). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| `border` | o contorno: grossura, tipo, cor | "`border: solid 4px red` funciona?" (a ordem certa é `4px solid red`) |
| `border-radius` | arredonda o canto | "Qual número deixa o canto mais redondo, 4 ou 30?" (30) |
| dois apelidos | `class="card fogo"`: dois nomes separados por espaço | "Quantos apelidos o Brasa tem?" (2) |
| apelido igual x diferente | `.card` = o que todas têm; `.fogo` = só a dele | "Quero mudar a borda de todas. Mexo no `.card` ou no `.fogo`?" (`.card`) |
| `:hover` + `transition` | regra que só vale com o mouse em cima; `transition` faz ir devagar | "Tirei o mouse. Por que a carta voltou?" (o hover só vale com o mouse em cima) |

| Ele vê | Você checa |
|---|---|
| a carta nova sem borda | esqueceu o `card` no `class`, só pôs `eletrico` |
| todas da mesma cor | `background-color` foi no `.card` |
| a borda não aparece | ordem errada, ou faltou o `solid` |
| escreveu `class="card, fogo"` | sem vírgula: só espaço |
| o HTML novo apareceu quebrado | faltou fechar o `</div>` ou o `</h2>` |

**Antes:** `inicial/index.html` no PC do aluno, board do Figma aberto no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
