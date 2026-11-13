# Missão da flor

No fim, a Vovó pede uma flor, você pega, entrega e ganha moedas. E ela **lembra** o que já aconteceu.

## Comandos de hoje

| Comando | O que faz |
|---|---|
| ícone `Variables` | cria a caixinha que guarda um número (`missao`) |
| `Change variables...` | muda o número da variável |
| `Condition...` | se for verdade faz uma coisa; com `Else`, senão faz outra |
| `Modify inventory...` | dá ou tira item do jogador |
| `Modify currency...` | dá ou tira dinheiro |
| `Remove object from map...` | o objeto some do mapa |
| `CTRL + E` | exporta o projeto (`.zip`) |

## As etapas da `missao`

| Valor | Quer dizer |
|:---:|---|
| 0 | ainda não falei com a Vovó |
| 1 | aceitei, tô procurando a flor |
| 2 | peguei a flor |
| 3 | entreguei, acabou |

## Faça

1. **Mapa e Vovó** — mapa com grama, um objeto `Vovó` que diz "Me traz uma flor?".
   **Teste:** fala 2 vezes. Ela repete igual (é esse o problema de hoje).
2. **Variável** — crie `missao` no ícone `Variables`.
   **Teste:** ela aparece na lista.
3. **Vovó lembra** — `Condition` com `missao = 0`: pede a flor e muda pra `1`. No `Else`: "Ainda não achou?".
   **Teste:** 1ª conversa pede, 2ª conversa muda.
4. **A flor** — objeto `Flor` longe da Vovó. `Condition` com `missao = 1`: ganha item `Flor`, muda pra `2`, some do mapa. No `Else`: "Que flor bonita."
   **Teste:** aperta Enter na flor **antes** de falar com a Vovó → ela não some. Depois → some e aparece em `Items` no menu (`Esc`).
5. **Entregar** — Vovó: se `missao = 2`, agradece, tira a `Flor`, dá 50 moedas e muda pra `3`. Se `3`: "Minha flor tá linda no vaso!".
   **Teste:** a flor some do menu e o dinheiro sobe.

## Check

- [ ] Joguei do começo e passei pelas 4 etapas
- [ ] Tentei pegar a flor antes da hora e não deu
- [ ] Você sabe dizer **por que** a Vovó precisa da `missao` pra mudar de fala

## Parte 2 — sua missão

Mesma receita, outra história (ex.: achar o gato perdido, levar pão pro vizinho). Crie uma variável **nova** pra ela.

- [ ] Funciona do começo ao fim
- [ ] Uma missão não estraga a outra

## Travou?

| Você vê | Faça |
|---|---|
| Vovó pede a flor toda vez | o `Change variables` tá dentro do `Condition`? |
| Ela fala as duas coisas de uma vez | use `Else`, não dois `Condition` separados |
| Flor some antes da missão | o `Remove object` tem que ficar dentro do `Condition missao = 1` |
| Sumiu o que fiz no `Datas` | feche sempre com `Save and close` |

## Sobrou tempo

1. A Vovó só aparece com rosto (`Faceset`) quando agradece.
2. Missão que precisa de **3** flores.
3. Um NPC que só deixa passar depois que a missão acabou.

## Antes de sair

- [ ] `CTRL + E` e guardei o `.zip`
