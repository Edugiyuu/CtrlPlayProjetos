# CSS básico num mini-site — CY2 · aula 01

`bloco 1h30 · escopo real ~65 min`

**Sai de:** página branca de texto preto → **chega em:** 2 páginas pintadas que linkam uma na outra
**Já tem:** HTML de tags (`h1`, `p`, `div`), abrir arquivo no navegador · **Novo hoje:** `color`/`background-color`, `padding`, `margin`, `border`/`border-radius`, `<a href>` entre arquivos · **Fora:** flexbox, grid, `position`, CSS externo (`.css` separado), responsivo
**Abre com:** "Essa página tem o mesmo conteúdo de um site de verdade. Por que ela parece um trabalho de escola?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–8 | Abertura: abrir o `index.html` cru (só texto preto) e o mesmo pronto, lado a lado | ele aponta 3 diferenças sem saber o nome delas |
| 8–18 | `color` e `background-color` no `<style>` — header escuro + título | a barra de cima fica escura na tela **dele** |
| 18–30 | `padding` — o texto descola da borda | ele vê o fundo crescer junto |
| 30–40 | `margin` — os dois cards param de grudar | o vão entre os cards |
| 40–50 | `border` + `border-radius` — cards com canto redondo | canto redondo no card dele |
| 50–62 | `sobre.html`: copia o arquivo, troca o miolo, liga os dois com `<a href>` | clica no menu e **troca de página** |
| **✅ 62** | **MARCO MÍNIMO — daqui pra baixo é bônus** | ida e volta entre index e sobre, pintadas |
| 62–75 | `contato.html` + botão "Voltar" | 3 páginas no ar |
| 75–90 | Trocar a paleta inteira pra cor dele | o site com a cara dele |

**Atrasou?** corta o `contato.html` e a paleta. Nunca corta o `<a href>` — sem ele não é site, é página solta.

**Referência visual:** o board do Figma (5 telas de conceito + as 3 páginas + o mapa dos links). Projeta a tela do conceito antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| `color` | pinta a **letra** | "Quero o fundo amarelo, uso qual?" (`background-color`) |
| `background-color` | pinta o **fundo** da caixa | "Pintei o `<p>`. Por que a faixa foi até a ponta?" (`div`/`p` ocupa a linha inteira) |
| `padding` | espaço **dentro**, entre a borda e o texto | "O fundo colorido cresce junto?" (sim, é por dentro) |
| `margin` | espaço **fora**, empurra os vizinhos | "Quero afastar dois cards. Qual dos dois?" (`margin`) |
| `border` | o contorno: grossura, tipo, cor | "`border: solid 2px red` funciona?" (a ordem certa é `2px solid red`) |
| `border-radius` | arredonda o canto | "Como faço a foto virar círculo?" (radius = metade do lado) |
| `<a href="sobre.html">` | link pra **outro arquivo da mesma pasta** | "Por que não precisa do caminho inteiro?" (mesma pasta) |

| Ele vê | Você checa |
|---|---|
| nada mudou depois de salvar | salvou o arquivo? deu F5? |
| o CSS inteiro parou de funcionar | faltou `;` ou `}` na regra **de cima** — olha a anterior, não a que ele está escrevendo |
| a cor não pega | escreveu `colour`, ou esqueceu o `#` do hex |
| `padding` não fez nada | aplicou num `<span>`/`<a>` solto, não na caixa |
| clicou no menu e deu "arquivo não encontrado" | nome do arquivo diferente do `href` (maiúscula conta) ou salvou em outra pasta |
| as 3 páginas ficaram com visual diferente | ele reescreveu o `<style>` em vez de copiar — é o gancho pro CSS externo da aula 02 |

**Antes:** a pasta `site/` com os 3 HTML sem CSS no PC do aluno, board do Figma aberto no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
