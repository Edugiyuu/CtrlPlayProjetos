# Meu pet no jogo

No fim, o herói do jogo não é mais o Lucas: é o **seu pet**, desenhado por você, andando pelo mapa.

## Comandos de hoje

| Onde | O que faz |
|---|---|
| Piskel → ícone `Resize` (2º da direita) | muda o tamanho da tela de desenho (vamos usar 16×16) |
| Piskel → ícone de duplicar (canto do quadro) | copia o quadro igualzinho |
| Piskel → `Transform` → 1º ícone (espelho) | vira o desenho pro outro lado |
| Piskel → ícone `Export` (quadrinho com montanha) | baixa a folha de sprites em PNG |
| Piskel → ícone do disquete → `Save as .piskel` | baixa o desenho que dá pra editar depois |
| RPGPM → `Systems > Models > Hero` | o boneco que anda no mapa |
| RPGPM → `Import...` e depois `<<` | traz a imagem do PC pro projeto |
| `CTRL + E` | exporta o projeto (`.zip`) |

## A folha de sprites

Uma imagem só, em grade **4 × 4**. Cada linha é uma direção, cada coluna é um passo.

| Linha | Quadros | Direção |
|:---:|:---:|---|
| 1 | 1 – 4 | de frente (andando pra baixo) |
| 2 | 5 – 8 | virado pra esquerda |
| 3 | 9 – 12 | de costas (andando pra cima) |
| 4 | 13 – 16 | virado pra direita |

## Faça

1. **Tela** — no Piskel, ícone `Resize` → `Width` 16, `Height` 16 → botão `Resize`.
   **Teste:** embaixo à direita aparece `[16x16]`.
2. **Desenhe** — seu pet **de frente** no quadro 1. Pés encostados embaixo, no meio. Use contorno escuro.
   **Teste:** alguém olha e sabe que bicho é.
3. **16 quadros** — passe o mouse no quadro e clique no ícone de duplicar até ter 16 (todos iguais por enquanto).
   **Teste:** embaixo à direita aparece `16/16`.
4. **Exportar** — ícone `Export` → `Scale` em **2.0x** → aba `PNG` → `Columns` **4** → `Download` (do "Spritesheet file export"). Renomeie pra `pet.png` (sem espaço, sem acento).
   **Teste:** do lado do Download está escrito **128 x 128 px, 16 frames**.
5. **Pro jogo** — RPGPM, projeto novo `Default`. Ícone `Systems` → aba `Models` → `Hero` → duplo clique no quadro `Graphics` → `Import...` → escolhe `pet.png` → clica nele na lista do meio → `<<` → clica nele na lista da esquerda → `OK` → `Save and close`.
   **Teste:** ▶ Play → seu pet está no lugar do Lucas e anda com WASD.

## Check

- [ ] Meu pet aparece e anda no mapa
- [ ] Você sabe dizer por que a imagem tem 16 desenhos e não 1
- [ ] Salvei o `.piskel` (pra poder mudar o desenho depois)

## Parte 2 — ele vira pros lados

1. Quadros 5–8: desenhe o pet **de lado, olhando pra esquerda**.
2. Quadros 9–12: o pet **de costas**.
3. Quadros 13–16: copie o de lado e use o espelho do `Transform` → olha pra direita.
4. Exporte de novo como `pet2.png`, importe e troque no `Hero`.

- [ ] Andando pra cada lado aparece o desenho certo

## Travou?

| Você vê | Faça |
|---|---|
| O herói sumiu, só grama | exportou sem `Scale` 2. A imagem tem que ter 128 × 128 |
| O pet aparece cortado ou misturado | confere: 16 quadros e 4 colunas |
| Vai pra esquerda e aparece de costas | a ordem das linhas é frente, esquerda, costas, direita |
| A imagem não aparece na lista | faltou clicar no `<<` |
| Desenho cheio de riscos | desmarque `Stop animation` e `Climb animation` |

## Sobrou tempo

1. **Passinho:** nos quadros 2 e 4 de cada linha, mexa as patas 1 pixel.
2. **O dono:** desenhe uma pessoa no Piskel e use num objeto do mapa com `Show text`: "Você me achou!".
3. **Mais um bicho:** um gato ou passarinho que dá a dica de onde o dono está.

## Antes de sair

- [ ] `.piskel` guardado
- [ ] `CTRL + E` e guardei o `.zip`
