# Cartão de memória — RPG Paper Maker: o editor

> Folha de consulta desta aula. Deixe aberta numa aba enquanto faz o desafio.
> A interface é em inglês — aqui está a tradução do que a gente usa hoje.

---

## Abrir o editor

1. <https://rpg-paper-maker.com> → botão **OPEN WEB APP**
2. Espere o `Loading textures...` terminar (é normal demorar).

Seu projeto fica salvo **dentro deste navegador, neste computador**. Ele não
vai pra nuvem sozinho.

---

## As 4 regiões da tela

| Região | Nome | Pra que serve |
|---|---|---|
| Canto sup. esquerdo | *tileset* | A caixa de peças: você clica na peça que quer carimbar |
| Canto inf. esquerdo | `Maps` | A lista dos seus mapas — clique duplo pra abrir um |
| Meio / direita | área de desenho | O mapa em si, onde você pinta |
| Acima do mapa | abas | `Floor`, `Face sprite`, `Start position`... |

No canto da área de desenho aparece `[X = 0, Y = 0, Z = 0]`: é onde o mouse
está. `X` e `Z` andam pelo chão, `Y` é altura.

---

## As abas do mapa

### `Floor` (chão)

Tudo que fica **deitado**: grama, terra, pedra, areia, água.
É onde o personagem pisa.

### `Face sprite` (em pé)

Tudo que fica **de pé, virado pra você**: árvore, arbusto, flor, placa, barril.

### `Mountain` (montanha)

Levanta o terreno pra fazer morro e desnível.

### `Object` (objeto)

Personagens e coisas com que dá pra interagir. **Só na aula #4.**

### `Start position` (posição inicial)

O square onde seu personagem aparece quando o jogo começa. Clique no square
escolhido. Se estiver errado, você nasce no lugar errado.

### `View` (visualizar)

Só olhar o mapa, sem risco de pintar sem querer.

---

## Ferramentas de pintura

| Ferramenta | O que faz |
|---|---|
| Lápis (*pencil*) | Carimba um square por clique |
| Quadrado (*square*) | Preenche uma área retangular |
| Balde (*paint*) | Preenche tudo que for igual em volta |

**Botão esquerdo** coloca. **Botão direito** apaga.

---

## Mexer a câmera

| O que fazer | Como |
|---|---|
| Girar em volta | `SHIFT` + arrastar o mouse |
| Mover de lado | Apertar a **rodinha** e arrastar |
| Zoom | Girar a rodinha |
| Desfazer | `CTRL + Z` |

---

## Salvar, testar e guardar

| Ação | Como | O que faz |
|---|---|---|
| Salvar | `CTRL + S` (`File > Save`) | Grava o mapa aberto **dentro do navegador** |
| Salvar tudo | `CTRL + SHIFT + S` (`Save all`) | Grava todos os mapas alterados |
| Testar | `CTRL + P` (`Test > Play`) | Roda o jogo de verdade |
| Exportar | `CTRL + E` (`File > Export project...`) | Baixa seu projeto num `.zip` — **é o seu backup** |

Salve **antes** de testar, sempre.

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| Clico e não pinta nada | Nenhuma peça selecionada no tileset, ou aba errada |
| A árvore ficou deitada | Você pintou na aba `Floor`; árvore é `Face sprite` |
| O mapa sumiu da tela | A câmera girou — zoom out e gire de volta |
| Dei Play e caí no vazio | `Start position` fora do chão pintado |
| Dei Play e nada mudou | Faltou `CTRL + S` |
| Tela preta ao carregar | Feche a aba e abra de novo `rpg-paper-maker.com/play` |

---

## Sempre que algo não funcionar

1. Confira **em qual aba** você está (`Floor`? `Face sprite`?).
2. Confira se tem uma peça selecionada no tileset.
3. Salve (`CTRL + S`) e teste de novo.
4. Confira se você está no **mapa certo** no painel `Maps`.
