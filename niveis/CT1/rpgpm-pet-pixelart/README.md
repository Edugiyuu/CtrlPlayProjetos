# Meu pet no jogo — CT1 · RPG Paper Maker + Piskel

`bloco 1h30 · escopo real ~60 min` · **Piskel** <https://www.piskelapp.com> → `Create Sprite` · **RPG Paper Maker** <https://rpg-paper-maker.com/play> → `OPEN WEB APP`

**Sai de:** herói é sempre o Lucas → **chega em:** o herói é o pet que **ele** desenhou, andando no mapa
**Já tem:** pintar mapa, criar objeto, `Show text...` · **Novo hoje:** pixel art, quadro (frame), folha de sprites, importar imagem, `Systems > Models > Hero` · **Fora:** variável, batalha, faceset
**Abre com:** rodar o [Pet-Perdido.zip](Pet-Perdido.zip) — "Esse cachorro não existia no programa. Como ele foi parar aí?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–10 | Mostra o jogo pronto + [gabarito/pipoca-grande.png](gabarito/pipoca-grande.png): 4 linhas = 4 direções, 4 colunas = passos | ele aponta "essa linha é ele de costas" |
| 10–30 | Piskel: `Resize` 16×16 → desenha o pet **de frente** no quadro 1 | pet reconhecível no quadro |
| 30–40 | Duplica o quadro até ter **16** → `Export > PNG` com `Scale` **×2** e **4 colunas** | arquivo PNG 128×128 baixado |
| 40–50 | RPGPM: projeto `Default` → `Systems > Models > Hero` → duplo clique em `Graphics` → `Import...` → `<<` → OK | ▶ Play: o pet aparece no lugar do Lucas |
| **✅ 50** | **MARCO MÍNIMO — daqui pra baixo é bônus** | pet dele andando com WASD |
| 50–70 | Redesenha os quadros 5–8 (esquerda), 9–12 (costas), 13–16 (direita = `Flip` da esquerda) → exporta `pet2.png` e troca | virar pro lado troca o desenho |
| 70–80 | Dono e um bicho no mapa com `Show text` (receita velha) | falar com o dono funciona |
| 80–90 | `CTRL + E` → `.zip` + o `.piskel` no pendrive/Drive | 2 arquivos existem |

**Atrasou?** corta as direções e o dono. Nunca corta o `.zip`, nem salvar o `.piskel` (é o desenho editável).

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| Pixel art | desenho feito quadradinho por quadradinho, cada um de uma cor só | "Quantos quadradinhos tem o seu pet de largura?" (16) |
| Quadro (frame) | uma "foto" parada; trocar rápido vira animação | "Por que o pet parece andar se é tudo desenho parado?" (troca de quadro) |
| Folha de sprites | uma imagem só com **todos** os quadros em grade | "Onde tá o pet de costas na folha?" (3ª linha) |
| Importar | trazer um arquivo do PC pra dentro do projeto | "Se eu mudar o desenho no Piskel, o jogo muda sozinho?" (não, tem que importar de novo) |

| Ele vê | Você checa |
|---|---|
| Herói sumiu (só grama) | exportou sem `Scale ×2` → imagem 64×64 não aparece no jogo web; tem que ser **128×128** |
| Pet picotado / misturado | `Columns` ≠ 4 ou não tem 16 quadros |
| Pet anda mas a imagem pula de lado | desenhos fora do meio do quadro — centraliza e encosta os pés embaixo |
| Pet "gira" errado (vira de costas indo pra esquerda) | ordem das linhas: **frente, esquerda, costas, direita** |
| Trocou em `Data > Heroes > Character` e nada mudou | isso é só o menu; o do mapa é `Systems > Models > Hero` |
| Imagem nova não aparece na lista | não clicou no `<<` depois do `Import...` |
| Desenho cheio de linhas estranhas | marcou `Stop animation` / `Climb animation` — desmarca |
| Projeto sumiu na outra aula | não exportou (`CTRL + E`) |

**Jogo pronto:** [Pet-Perdido.zip](Pet-Perdido.zip) — `File > Import project...`. Pipoca começa no meio, Gato embaixo à esquerda dá a dica, Dono lá no fundo à direita. Anda com **WASD**, Enter fala.

**Antes:** fazer uma vez seguindo [gabarito/GUIA-COMPLETO.md](gabarito/GUIA-COMPLETO.md) (~25 min, com foto de cada clique) · Aluno: [DESAFIO.md](DESAFIO.md) · Sprite exemplo: [gabarito/pipoca.png](gabarito/pipoca.png)
