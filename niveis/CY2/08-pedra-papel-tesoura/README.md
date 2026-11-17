# Pedra, Papel e Tesoura (primeiro JavaScript) — CY2 · aula 08

`bloco 1h30 · escopo real ~55 min`

**Sai de:** a tela do jogo pronta, mas os botões não fazem nada → **chega em:** jogo que funciona: o Player 1 clica, o bot sorteia sozinho e aparece quem ganhou
**Já tem (aulas 01 a 07):** HTML, `class`, todo o CSS do jogo (`inline-block`, borda, `:hover`) · **Novo hoje:** `script.js` ligado no HTML, `onclick`, `function`, `id` + `getElementById` + `innerText`, `Math.random`/`Math.floor`, lista `[ ]`, `if`/`else if`/`else`, `===` e `&&` · **Fora:** `addEventListener`, `.map`, laço, CSS novo
**Abre com:** "Até hoje o site só ficava parado bonito. Quem decide o que acontece quando você clica?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: jogar o `gabarito/` 3 vezes; abrir o `inicial/` e clicar (nada acontece) | ele vê a diferença |
| 5–12 | A pasta e os nomes: o `<script>` no fim do HTML e as etiquetas `id` (telas 1 e 2 do Figma) | ele aponta no HTML onde está `escolha1` |
| 12–25 | **O clique:** `function jogar(escolha)` + Player 1 (tela 3) | clica nos 3 botões e o Player 1 muda |
| 25–38 | **O bot sorteia:** `Math.random`, `Math.floor`, `opcoes[sorteio]` (tela 4) | o Bot muda sozinho a cada clique |
| 38–52 | **Quem ganha:** a tabela colorida e o `if` (tela 5) | aparece "Empate!", "Você ganhou!" e "O bot ganhou!" |
| **✅ 52** | **MARCO MÍNIMO — daqui pra baixo é desafio** | o jogo inteiro funciona |
| 52–75 | **Desafio 1:** placar `Você 0 x 0 Bot` (tela 7) | o número sobe a cada vitória |
| 75–85 | **Desafio 2:** primeiro a 3 → FIM DE JOGO | aparece a mensagem final |

**Atrasou?** corta o desafio 2. O placar não corta: é onde ele entende por que o `let` fica **fora** da função.

**Referência visual:** o Figma, Page 2 (7 telas: pasta, nomes, clique, sorteio, quem ganha, pronto, desafio). Projeta a tela antes de cada bloco.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| `onclick` | quando clicar, roda isso | "Quem chama a função jogar?" (o botão, pelo onclick) |
| `function jogar(escolha)` | uma receita com nome; `escolha` guarda o que veio do botão | "Cliquei em Papel. Quanto vale escolha?" ("papel") |
| `id` | nome de UMA caixa só (`class` é apelido de grupo) | "Por que não dá pra usar class aqui?" (o JS quer achar uma caixa só) |
| `getElementById(...).innerText =` | acha a caixa pelo nome e troca o texto de dentro | "Se eu errar o id, o que acontece?" (dá erro no Console) |
| `Math.random() * 3` + `Math.floor` | sorteia 0, 1 ou 2 | "Pode sair 3?" (não, vai até 2,99 e corta a vírgula) |
| `opcoes[sorteio]` | pega a palavra daquela posição; a lista começa no 0 | "opcoes[0] é o quê?" ("pedra") |
| `===` | pergunta "é igual?" (um `=` só guarda) | "Qual dos dois compara?" (`===`) |
| `&&` | "e também": as duas coisas têm que ser verdade | "pedra && tesoura: quem é quem?" (você pedra, bot tesoura) |
| `else` | senão: nenhum de cima deu certo | "Por que não precisa escrever as 3 derrotas?" (o else pega o resto) |

| Ele vê | Você checa |
|---|---|
| clica e nada acontece | F12 → Console. Quase sempre falta `}` ou aspa |
| `jogar is not defined` | nome da função diferente do `onclick` (`Jogar`, `joga`), ou o `script.js` está em outra pasta |
| `Cannot set properties of null` | o id do `getElementById` não bate com o HTML (`escolha 1`, `Escolha1`) |
| o Bot sempre igual | esqueceu o `Math.floor` ou escreveu `opcoes[1]` fixo |
| sempre "O bot ganhou!" mesmo ganhando | aspas com maiúscula (`"Pedra"`) ou um `=` só no lugar de `===` |
| o placar volta pra 0 toda vez | o `let vitorias1 = 0;` foi parar dentro da função |

**Antes:** `inicial/` no PC do aluno (os 3 arquivos na mesma pasta), Figma Page 2 no projetor
Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
