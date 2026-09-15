# Cartão de memória — A Vila e a Caverna

> Folha de consulta desta aula. Deixe aberta numa aba enquanto trabalha.

---

## O jogo que você está construindo

**A Vila e a Caverna** — um monstro tomou a caverna e a vila ficou sem água.
O chefe pede ajuda. Você atravessa a floresta, enfrenta o monstro e volta.

| Aula | O que você faz |
|---|---|
| **Hoje** | A vila e os moradores. O chefe te dá a missão |
| Próxima | Floresta e caverna + passar de um mapa pro outro |
| Depois | O monstro, a batalha e as poções |
| Última | O final do jogo e publicar |

---

## As 3 coisas que uma missão precisa dizer

1. **Quem pede** — quem é esse cara e por que ele fala comigo.
2. **O que ele quer** — a tarefa, em palavras simples.
3. **Onde fica** — pra onde eu vou.

Se faltar uma, o jogador anda em círculo. Teste sempre fingindo que nunca viu
o seu jogo.

---

## Criar um mapa

Botão direito numa pasta do painel `Maps` (canto inferior esquerdo) → criar
mapa → preencher:

| Campo | O que é |
|---|---|
| `Name` | Nome do mapa. Use nome de verdade (`Vila`), nunca `Map 2` |
| Tileset | A caixa de peças daquele mapa |
| `Length` / `Width` | Tamanho do chão (X e Z) |
| `Height` / `Depth` | Quanto dá pra subir e descer (Y) |

Clique duplo no nome abre o mapa. **Confira sempre qual mapa está aberto** —
pintar no mapa errado é o erro mais comum.

---

## Relembrando: pintar

| Aba | Serve pra |
|---|---|
| `Floor` | Chão: grama, terra, pedra, água (fica deitado) |
| `Face sprite` | Árvore, arbusto, placa (fica em pé) |
| `Object` | Gente e coisas que reagem |
| `Start position` | Onde o herói começa o jogo |

Botão esquerdo coloca, botão direito apaga.

---

## Relembrando: NPC que fala

1. Aba `Object` → clique duplo num square vazio.
2. `Name`: nome do objeto (pra você achar depois).
3. `Graphics`: a imagem — **sem isso ele fica invisível**.
4. Clique duplo na lista de comandos do `Hero action` → `Commands...` →
   aba `Staging` → `Show text...`.
5. `Interlocutor`: o nome de quem fala.
6. Repetir o `Show text...` pra mais falas (rodam na ordem da lista).
7. `Moving > Type: Random` faz ele andar sozinho.

---

## Salvar, testar, guardar

| Ação | Atalho |
|---|---|
| Salvar | `CTRL + S` |
| Salvar tudo | `CTRL + SHIFT + S` |
| Testar | `CTRL + P` |
| Exportar `.zip` (backup) | `CTRL + E` |
| Trazer de volta um `.zip` | `File > Import project...` |

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| Pintei e não mudou nada no jogo | Mapa errado aberto, ou faltou salvar |
| O herói nasce no lugar errado | `Start position` marcado em outro mapa |
| NPC invisível | Faltou `Graphics` |
| Aperto ação e nada | Comando fora do `Hero action` |
| O projeto sumiu | Outro PC/cache limpo → `Import project...` com o `.zip` |
