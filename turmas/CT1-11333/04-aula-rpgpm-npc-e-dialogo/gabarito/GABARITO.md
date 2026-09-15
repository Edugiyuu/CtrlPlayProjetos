# Gabarito do DESAFIO.md — para o professor

Sem código: o gabarito é o **caminho exato de cliques** e o **estado esperado**
do projeto. As partes são cumulativas.

Versão usada: **RPG Paper Maker 3.2.14 (web)**.

Ponto de partida (fim da aula, antes do desafio): mapa `Vila de Treino` com a
praça da aula #3 e **um** objeto `Aldeão` com duas falas no `Hero action`.

---

## Caminhos de clique desta aula

| Ação | Caminho exato |
|---|---|
| Criar objeto | aba `Object` → **clique duplo** num square vazio → janela `Edit object...` |
| Renomear | campo `Name` no topo da janela (troca o `OBJ:0001`) |
| Dar gráfico | caixa `Graphics` (canto inf. esq. da janela) → escolher o personagem → `OK` |
| Abrir a lista de comandos | clique duplo na linha `>` da lista do evento `Hero action` |
| Adicionar fala | janela `Commands...` → aba `Staging` → `Show text...` → digitar → `OK` |
| Nome de quem fala | dentro do `Show text...`, campo `Interlocutor` |
| Fazer andar | na janela do objeto, `Moving > Type: Random`, `Speed: Slow` |
| Editar objeto existente | aba `Object` → clique duplo **em cima do objeto** |
| Apagar objeto | aba `Object` → clique **direito** em cima dele |
| Salvar / testar | `CTRL + S` / `CTRL + P` |
| Exportar | `CTRL + E` |

> A ordem que funciona melhor com ele: **primeiro gráfico, testa, depois
> fala, testa de novo**. Ver o boneco aparecer no mapa antes de mexer em
> comando dá um ganho de motivação e separa bem os dois conceitos.

---

## Parte 1 — O guarda na entrada

**Só o mapa `Vila de Treino` muda.**

Estado esperado: objeto novo no square do vão da praça, `Name` = `Guarda`,
com `Graphics` preenchido.

Critério de correção: ele **renomeou** o objeto. Se ficou `OBJ:0002`, peça pra
trocar e explique por quê (na aula #6 vão existir uns 8 objetos; sem nome,
nenhum deles é achável).

**Resposta esperada a "o que é um objeto":** "é uma coisa do mapa que faz
alguma coisa / que reage". Se ele disser "é um personagem", amplie: baú, porta
e placa também são objetos.

---

## Parte 2 — Duas falas

**Só o objeto `Guarda` muda.**

Estado esperado: no evento `Hero action`, dois comandos `Show text...` na
lista, um embaixo do outro, os dois com `Interlocutor` = `Guarda`.

Conteúdo das falas é dele. Exemplo aceitável:

1. `Cuidado lá fora. A floresta tá cheia de bicho.`
2. `Se eu fosse você, levava uma poção antes de sair.`

Critério de correção: **duas caixas em sequência**, não uma caixa com as duas
frases dentro. Se ele juntou tudo numa caixa só, funciona no jogo, mas ele não
exercitou "ordem de comandos" — peça pra separar.

**Resposta esperada a "por que a segunda só aparece depois":** "porque os
comandos rodam em ordem, de cima pra baixo, e o jogo espera eu fechar a
primeira". Se ele disser "porque é assim", insista na ideia de **lista/receita**.

---

## Parte 3 — O guarda vigiando

**Só o objeto `Guarda` muda:** `Moving > Type` de `Fix` para `Random`,
`Speed: Slow`.

⚠️ Pegadinha comum: com `Random` o guarda sai de cima da entrada e o aluno acha
que "quebrou". Está certo — `Random` anda pra qualquer lado. Se incomodar,
duas saídas válidas: voltar pra `Fix`, ou aceitar e virar piada ("guarda
folgado"). **Não** vá pra `Edit route...` nesta aula; é escopo demais.

---

## Parte 4 — Segundo morador

**Só o mapa `Vila de Treino` muda.**

Estado esperado: terceiro objeto com `Name` próprio, `Graphics` e **um**
`Show text...` no `Hero action`.

---

## Estado final esperado

Projeto `Treino RPG`, mapa `Vila de Treino`:

| Objeto | Gráfico | Evento | Comandos |
|---|---|---|---|
| `Aldeão` | sim | `Hero action` | 2 × `Show text...` |
| `Guarda` | sim | `Hero action` | 2 × `Show text...`, `Interlocutor` preenchido, `Moving: Random` |
| `<morador>` | sim | `Hero action` | 1 × `Show text...` |

Mais: praça e mapa da aula #3 intactos, `Start position` ainda dentro da praça,
`.zip` exportado.

---

## Gabarito do "Se sobrar tempo"

### 1. Placa que fala

Objeto com gráfico de placa (está no tileset como sprite; se não achar um
gráfico de placa na lista de personagens, use qualquer gráfico e chame de
placa — o conceito é o mesmo) + um `Show text...` sem `Interlocutor`.

### 2. Dois NPCs conversando

Um único objeto com 3 × `Show text...`, alternando o `Interlocutor` entre dois
nomes. É a primeira vez que ele vai sentir que a **ordem** cria uma cena.

### 3. Som junto com a fala

`Commands... > Map > Play a sound...` **antes** do `Show text...`. Se colocar
depois, o som só toca quando a fala fechar — ótimo momento pra reforçar ordem
de comandos: peça pra ele prever o resultado antes de testar.

---

## Se a aula #3 não fechou o desafio da praça

Comece a aula refazendo a praça em 10 min (o desafio da #3) e **corte a Parte 4
deste desafio**. O marco mínimo de hoje (objeto + fala) é inegociável; o
terceiro morador, não.
