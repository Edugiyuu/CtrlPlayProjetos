# Meus 3 personagens favoritos — CY2 · aula 02

`bloco 1h30 · escopo real ~50 min`

**Sai de:** título + 3 personagens sem cor → **chega em:** 3 cards amarelos, pintados por uma regra só, separados um do outro
**Já tem (aula 01):** tag abre/fecha, a regra do CSS, `color`, `background-color`, `padding` · **Novo hoje:** `<div>` como caixa, `class` (o apelido) + `.card` no CSS, `margin-bottom` · **Fora:** dois apelidos na mesma tag, `margin` dos 4 lados, `border`, links, arquivo `.css` separado
**Abre com:** "Quero pintar 3 personagens de amarelo. Preciso escrever 3 regras?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: o `index.html` cru e o pronto, lado a lado | ele aponta os cards e o espaço entre eles |
| 5–12 | Revisão da aula 01: o `h1` azul com padding, sozinho | faixa azul, letra descolada |
| 12–22 | **`div` + `class`:** a caixa e o apelido. Achar o `class="card"` nos 3 (tela 1 do Figma) | ele aponta onde está o apelido |
| 22–30 | **`.card { }`:** uma regra pinta os 3 (tela 2) | os 3 ficam amarelos de uma vez |
| 30–34 | `padding` no card (revisão) | letra descolou, cards **grudados** |
| 34–42 | **`margin-bottom`:** o espaço de fora (tela 3) | aparece o vão entre os cards |
| **✅ 42** | **MARCO MÍNIMO — daqui pra baixo é bônus** | 3 cards amarelos, separados |
| 42–60 | **Desafio:** os personagens dele, cor dele, padding x margin | página com a cara dele |
| 60–90 | Bônus: `border-radius: 16px;` no `.card` (canto redondo, novo) | cards de canto redondo |

**Atrasou?** corta o desafio. Nunca corta o `margin-bottom`: é o par do padding, e sem ele os cards ficam grudados.

**Referência visual:** o board do Figma, bloco "Aula 02" (3 telas de conceito + a página pronta + o desafio). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| `<div>` | uma caixa que guarda outras tags | "O que está dentro da caixa do Mario?" (o `h2` e o `p`) |
| `class` | o apelido da caixa | "Qual é o apelido das 3 caixas?" (`card`) |
| `.card` no CSS | ponto + apelido = todas as caixas com esse apelido | "Por que os 3 ficaram amarelos?" (têm o mesmo apelido) |
| `padding` | espaço dentro, entre a borda e o texto | "O amarelo cresce com o padding?" (sim) |
| `margin-bottom` | espaço fora, embaixo da caixa | "O amarelo cresce com o margin?" (não, é fora) |

| Ele vê | Você checa |
|---|---|
| `.card` não pinta | esqueceu o ponto, ou escreveu `.cards` |
| só 1 card pintou | ele mudou o `class` de um deles |
| margin não separou | escreveu `margin-botton`, ou pôs no `h1` em vez do `.card` |
| tudo parou de funcionar | faltou `;` ou `}` na regra **de cima** |

**Antes:** `inicial/index.html` no PC do aluno, board do Figma aberto no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
