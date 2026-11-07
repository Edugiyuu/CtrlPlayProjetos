# Ficha de personagem (Time de Heróis) — CY2 · aula 02

`bloco 1h30 · escopo real ~80 min`

**Sai de:** um cartão sem estilo (foto gigante + texto solto) → **chega em:** título + **3 cartões** de personagem lado a lado, cada um com foto redonda, nome, nível e barra de HP
**Já tem:** o cartão da aula 01, `color`, `background-color`, `padding`, `margin`, `border`, `border-radius`, `<style>` dentro do `<head>` (aula 01) · **Novo hoje:** CSS num **arquivo `.css` separado** (o `<link>` já vem escrito), `class` como "apelido da caixa" (só o ponto + nome), `width`/`height`, `margin: 0 auto`, `text-align`, `font-size` (+ `font-weight` de brinde), `display: inline-block` pros cartões lado a lado · **Bônus:** `:hover` + `transition` · **Fora:** `id`, seletores combinados, flexbox, grid, `position`, porcentagem, responsivo, criar `<img>` do zero
**Abre com:** "Todo jogo tem uma tela de personagem. O que faz ela parecer de jogo e não uma lista do Word?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: abrir o `ficha.html` cru e o Time de Heróis pronto (gabarito), um ao lado do outro. "É o cartão da aula passada, mas de jogo" | ele aponta 3 diferenças sem saber o nome delas |
| 5–11 | **Arquivo `.css` + apelido (`class`):** mostrar o `<link>` que liga os dois arquivos, `class="ficha"` no HTML e `.ficha { }` no CSS, com a tabela de apelidos (tela 0 do Figma) | ele aponta qual regra pinta qual caixa |
| 11–19 | Revisão com o cartão: fundo escuro, `.ficha` com `background-color`, `padding`, `border`, `border-radius` | o cartão aparece, mas esticado e colado na esquerda |
| 19–28 | **Novo:** `width` + `margin: 0 auto` + `text-align: center` | o cartão fica **no meio** e o conteúdo centraliza |
| 28–36 | **Novo:** `width`/`height` na foto + `border-radius` metade do lado | a foto encolhe e vira **círculo** |
| 36–43 | **Novo:** `font-size` no nome; nível vira pílula ciano; textos pequenos legíveis | nome grande, "Nível 12" em pílula |
| 43–53 | **Novo:** barra de HP — uma caixa **dentro** de outra, a de dentro mais curta | a barra vermelha cobre 70% da cinza |
| **✅ 53** | **Primeiro cartão pronto** | foto, nome, nível e HP pintados |
| 53–58 | O título (`.titulo`): revisão de `text-align` e `font-size` | "Time de Heróis" no meio, grande |
| 58–72 | **Ctrl+C / Ctrl+V** do cartão 2 vezes; trocar foto, nome, nível, HP e o 2º apelido da barra (`hp-30`, `hp-100`) | **3 cartões prontos, um embaixo do outro; só 1 regra nova por cartão (a largura da barra)** |
| 72–80 | **Novo:** lado a lado — `.ficha` com `display: inline-block`, `vertical-align: top`, `margin: 20px 10px`; `body` com `text-align: center` (tela 8 do Figma) | os 3 cartões em fileira |
| **✅ 80** | **MARCO MÍNIMO — daqui pra baixo é bônus** | título + 3 heróis lado a lado |
| 80–90 | **Bônus:** `:hover` + `transition` na pílula e na foto (tela 6 do Figma), ou barra de MP | passa o mouse e a pílula fica rosa devagar |

**Atrasou?** corta o hover e a barra de MP. Faça só **2** cartões, mas nunca corte o copiar/colar: é nele que o aluno vê que **a mesma classe pinta todo mundo** — o que faz um `.css` só pintar todas as páginas na aula 03.

**Referência visual:** o board do Figma (tela 0 do apelido + 4 telas de conceito + o Time de Heróis pronto (5) + lado a lado (8) + hover (6)). Projeta a tela do conceito antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| `<link>` + `.css` | o CSS mora noutro arquivo; o `<link>` no `<head>` liga os dois | "Mudei o `.css` e a página não mudou. O que checo?" (salvei o `.css`? mesma pasta? nome igual no `href`?) |
| `class` (apelido da caixa) | no HTML `class="ficha"`; no CSS vira `.ficha` (ponto + apelido) | "Escrevi `ficha { }` e nada pintou. Por quê?" (faltou o ponto) |
| `width` / `height` | largura e altura da caixa, em `px` | "A foto veio enorme. O que muda o tamanho dela?" (`width` e `height`) |
| `margin: 0 auto` | centraliza **a caixa** na tela (precisa ter `width`) | "Pus `margin: 0 auto` e nada mexeu. O que falta?" (um `width`) |
| `text-align: center` | centraliza o que está **dentro** da caixa | "Qual centraliza a caixa e qual centraliza o texto?" (`margin` = caixa, `text-align` = conteúdo) |
| `font-size` | tamanho da letra | "Quero o nome maior que o resto. Qual?" (`font-size`) |
| `border-radius` na foto | metade do lado vira círculo | "A foto tem 160px. Qual radius faz círculo?" (80px) |
| `:hover` | regra que só vale com o mouse em cima | "Por que a cor volta sozinha quando tiro o mouse?" (a regra do hover só existe enquanto ele está lá) |
| `transition` | faz a mudança acontecer devagar | "Ponho o `transition` na regra do hover ou na normal?" (na **normal**, senão só anima na ida) |
| copiar/colar o cartão | o apelido vai junto na cópia, então o CSS já vale pros três | "Por que a Kira já nasceu pintada?" (ela tem os mesmos apelidos que a Lyra) |
| barra de HP | caixa de dentro **menor** que a de fora | "O personagem está com 30% de vida. O que eu mudo?" (o `width` da barra vermelha) |
| `display: inline-block` | a caixa ocupa só a largura dela, então cabem várias na fileira | "Pus `inline-block` e a fileira foi pra esquerda. Quem centraliza agora?" (o `text-align` do `body`) |

| Ele vê | Você checa |
|---|---|
| a foto não aparece (ícone quebrado) | `personagem.svg` está na **mesma pasta** que o HTML da aula? nome igual, maiúscula inclusive? |
| `margin: 0 auto` não centralizou | falta o `width` na caixa — sem largura, ela já ocupa a linha toda |
| o texto não centralizou | ele usou `margin` em vez de `text-align: center` |
| o nível não vira pílula | `padding` num `<span>` solto; aqui é um `<div>`, mas confira se ele não trocou a tag |
| a barra de HP não aparece | faltou `height` na barra de dentro (sem altura, caixa vazia some) |
| a barra vermelha passa da cinza | `width` da vermelha é maior que o da cinza |
| cartão 2 ou 3 sem cor | ele mudou o nome da `class` na cópia, ou colou fora do `<body>` |
| o CSS inteiro parou de funcionar | faltou `;` ou `}` na regra **de cima** |
| os cartões não ficam lado a lado | faltou `inline-block` na `.ficha`, ou a janela é estreita (precisa de uns 1140px pros 3) |

**Antes:** a pasta `inicial/` (`ficha.html`, o `estilos.css` vazio e as 3 imagens `.svg`) no PC do aluno, board do Figma aberto no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
