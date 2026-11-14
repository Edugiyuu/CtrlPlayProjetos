# Padding: meu jogo favorito — CY2 · aula 01

`bloco 1h30 · escopo real ~50 min`

**Sai de:** página com título, texto e botão sem cor → **chega em:** cada um numa caixa colorida com o texto descolado da borda
**Já tem:** abrir `.html` no navegador · **Novo hoje:** tag abre/fecha, a regra do CSS (quem `{` o que `:` valor `;` `}`), `color`, `background-color`, `padding` · **Fora:** `class`, arquivo `.css` separado, `margin`, `width`, `border`, centralizar
**Abre com:** "Olha esse botão de jogo e esse botãozinho cinza. O que o de jogo tem a mais?" (espaço dentro)

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: o `index.html` cru e o pronto, lado a lado | ele aponta o botão "apertado" |
| 5–12 | **HTML:** a tag abre, tem conteúdo, fecha com `/`. Achar o `h1`, o `p` e o `button` (tela 1 do Figma) | ele aponta onde abre e onde fecha cada um |
| 12–20 | **A regra do CSS:** quem / o que / valor (tela 2). Pintar o `h1` | faixa azul, letra branca **grudada** na borda |
| 20–32 | **Padding no título:** 20px, depois 60, depois 0 (tela 3) | a faixa cresce e encolhe junto |
| 32–42 | **Padding no botão:** pintar, depois `padding: 20px` (tela 4) | o botão fica grande |
| **✅ 42** | **MARCO MÍNIMO — daqui pra baixo é bônus** | título e botão pintados e com padding |
| 42–50 | O `p` numa caixa amarela, sozinho | caixa amarela, texto descolado |
| 50–70 | **Desafio:** o jogo dele, cores dele, botão maior que o título | página com a cara dele |
| 70–90 | Bônus: `border-radius: 12px;` no botão (novo, só se sobrar tempo) | botão de canto redondo |

**Atrasou?** corta o `p` e o desafio. Nunca corta o padding no botão: é o "antes e depois" mais claro da aula.

**Referência visual:** o board do Figma, bloco "Padding: meu jogo favorito" (4 telas de conceito + a página pronta). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| tag | abre `<h1>`, conteúdo, fecha `</h1>` | "Onde termina o título?" (no `</h1>`) |
| regra do CSS | quem `{` o que `:` valor `;` `}` | "Nessa regra, quem é o 'quem'?" (`h1`) |
| `color` | pinta a letra | "Quero o fundo azul, uso qual?" (`background-color`) |
| `background-color` | pinta o fundo | "Por que a faixa do título vai até a ponta da tela?" (o título ocupa a linha toda) |
| `padding` | espaço dentro, entre a borda e o texto | "Aumentei o padding. O fundo cresceu ou encolheu?" (cresceu) |

| Ele vê | Você checa |
|---|---|
| nada mudou | salvou (Ctrl+S)? deu F5? |
| a regra não pinta | escreveu `<h1> {` em vez de `h1 {`, ou errou o nome |
| tudo parou de funcionar | faltou `;` ou `}` na regra **de cima** |
| padding não fez nada | escreveu `padding: 20;` sem o `px` |

**Antes:** `inicial/index.html` no PC do aluno, board do Figma aberto no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
