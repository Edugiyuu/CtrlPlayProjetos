# Guia completo — meu pet no jogo (RPG Paper Maker + Piskel)

Para o **professor**. Faça uma vez antes da aula (~25 min).

- **Piskel** — <https://www.piskelapp.com> → `Create Sprite`. Grátis, no navegador, sem conta.
- **RPG Paper Maker** (não é o RPG Maker) — <https://rpg-paper-maker.com/play> → `OPEN WEB APP`. Testado na versão **3.2.30**.

> ⚠️ Os dois guardam tudo **no navegador daquele PC**. Antes de sair: `Save as .piskel` no Piskel e `CTRL + E` no RPGPM.

---

## A ideia principal

O boneco que anda no mapa é **uma imagem só** com 16 desenhos em grade 4 × 4
(folha de sprites). O jogo recorta um pedaço por vez:

| Linha | Quadros no Piskel | O jogo mostra quando o herói... |
|:---:|:---:|---|
| 1 | 1 – 4 | anda pra baixo (de frente) |
| 2 | 5 – 8 | anda pra esquerda |
| 3 | 9 – 12 | anda pra cima (de costas) |
| 4 | 13 – 16 | anda pra direita |

As 4 colunas são os passos: o jogo troca de coluna enquanto anda → animação.

Exemplo pronto: [pipoca-grande.png](pipoca-grande.png) (ampliado) e
[pipoca.png](pipoca.png) (o arquivo de verdade, 128 × 128).

---

## ⚠️ O tamanho tem que ser 128 × 128

Testado: uma folha **64 × 64** (quadros 16 × 16) importa sem erro, aparece
na lista, mas **o herói some no jogo** (só grama). Com **128 × 128**
(quadros 32 × 32, igual aos personagens que vêm no programa) aparece certo.

Por isso: desenha em **16 × 16** no Piskel (rápido de pintar) e exporta com
**`Scale 2.0x`**. Cada pixel vira 2 × 2 e a folha sai 128 × 128.

O pet fica do tamanho de 2 quadrados do mapa, um pouco maior que os
moradores. Se quiser ele menor, deixa 3–4 linhas vazias em cima do desenho.

---

## Passo 1 — Piskel: desenhar

1. `Create Sprite` → ícone **`Resize`** (2º da coluna da direita) → `Width` 16,
   `Height` 16 → `Resize`. Confere `[16x16]` embaixo à direita.
2. No quadro 1, o pet **de frente**: contorno escuro, pés encostados na
   última linha, centralizado. 2–4 cores bastam.
3. Passa o mouse no quadro 1 → ícone de duplicar (canto de baixo) até ter
   **16 quadros** (`16/16` embaixo à direita).
4. Disquete → **`Save as .piskel`** (desenho editável).

## Passo 2 — Piskel: exportar

1. Ícone **`Export`** (quadrinho com montanha).
2. `Scale` → **2.0x** (a `Resolution` vira 32 x 32).
3. Aba **`PNG`** → `Columns` **4** (o `Rows` vira 4 sozinho).
4. Confere o texto: **128 x 128 px, 16 frames, 4 columns, 4 rows** →
   `Download` do "Spritesheet file export".
5. Renomeia o arquivo pra `pet.png` (sem espaço, sem acento).

## Passo 3 — RPGPM: trocar o herói

| Ação | Caminho |
|---|---|
| Projeto | `New project...` → nome → `Default` → `OK` |
| Boneco do mapa | ícone **`Systems`** → aba **`Models`** → botão **`Hero`** |
| Escolher imagem | **duplo clique** no quadro `Graphics` (embaixo à direita) |
| Trazer do PC | `Import...` (coluna do meio) → `pet.png` → aparece no fim da lista do meio (bolinha roxa) |
| Pôr no projeto | clica nele → **`<<`** → aparece no fim da lista da esquerda (`0070: pet.png`) |
| Usar | clica nele na lista da esquerda → `OK` → **`Save and close`** |
| Testar | **▶ Play** → `New game` → anda com **WASD** |

`Stop animation` e `Climb animation` ficam **desmarcados** (eles pedem
linhas extras na imagem).

> `Data` → `Heroes` → `Character` **não** muda o boneco do mapa (só o do
> menu). O do mapa é sempre `Systems > Models > Hero`.

**✅ Marco mínimo:** o pet dele andando no mapa, mesmo que sempre de frente.

---

## Passo 4 (bônus) — virar pros lados

1. Quadros 5–8: pet de lado **olhando pra esquerda**.
2. Quadros 9–12: de costas.
3. Quadros 13–16: copia o de lado (duplica o quadro 5 e arrasta pro fim) →
   `Transform` → 1º ícone (espelho).
4. Opcional: nos quadros 2 e 4 de cada linha, mexe as patas 1 pixel.
5. Exporta como **`pet2.png`** (nome novo evita confusão com o antigo) →
   importa igual ao passo 3 → troca no `Hero`.

## Passo 5 (bônus) — o dono

Receita das aulas passadas: no mapa, objeto `Dono` com um morador qualquer
(ou outro desenho do Piskel, importado igual) → `Hero action` →
`Show text...` "Você me achou!". Um gato no caminho dá a dica.

---

## O jogo pronto

[../Pet-Perdido.zip](../Pet-Perdido.zip) → `File > Import project...`.

| Objeto | Onde | Fala |
|---|---|---|
| Pipoca (herói) | meio do mapa | — |
| Gato | embaixo à esquerda | "Miau... Procurando seu dono?" / "Vi ele lá em cima, perto das árvores." |
| Dono | fundo à direita | "PIPOCA! Você me achou!" / "Vamos pra casa, tem biscoito te esperando!" |

Testado no navegador: Pipoca aparece, anda, vira pros 4 lados e conversa
com o Dono.
