# Gabarito do DESAFIO.md — para o professor

Aqui não tem código: o "arquivo inteiro" é o **caminho exato de cliques** e o
**estado final do mapa**. As partes são cumulativas.

Versão do editor usada para escrever este gabarito: **RPG Paper Maker 3.2.14
(web)**. Se o layout mudar de versão, os nomes de menu abaixo são o que
procurar.

Ponto de partida (fim da aula, antes do desafio): projeto `Treino RPG` (tipo
`Default`), mapa `Vila de Treino` ~20 × 20 com grama pintada, um caminho e
algumas árvores nas bordas.

---

## Caminhos de clique que você vai repetir

| Ação | Caminho exato |
|---|---|
| Novo projeto | `File > New project...` → Name → tipo `Default` → `OK` |
| Novo mapa | botão direito numa pasta do painel `Maps` (ex.: `Introduction`) → criar mapa → preencher **Name**, **tileset** e tamanho (`Length` = X, `Width` = Z, `Height` = Y acima, `Depth` = Y abaixo) → `OK` |
| Abrir um mapa | clique duplo no nome dele no painel `Maps` |
| Escolher a peça | clicar (ou arrastar pra selecionar várias) no tileset, canto sup. esq. |
| Pintar chão | aba `Floor` + peça selecionada + clique esquerdo no mapa |
| Apagar | clique **direito** no square |
| Colocar árvore | aba `Face sprite` + peça selecionada + clique esquerdo |
| Posição inicial | aba `Start position` → clique no square |
| Salvar | `CTRL + S` · Salvar tudo: `CTRL + SHIFT + S` |
| Testar | `CTRL + P` (ou `Test > Play`) |
| Exportar `.zip` | `CTRL + E` (ou `File > Export project...`) |

---

## Parte 1 — Abrir a praça

**Só o mapa `Vila de Treino` muda.** `Starting map` e `Battle maps > Default`
ficam intactos — confira que ele não pintou no mapa de exemplo (é o erro mais
comum: abre o editor e pinta no `Starting map`, que já estava aberto).

Estado esperado: uma região de ~6 × 6 squares no meio do mapa com um `Floor`
visivelmente diferente (pedra, terra ou areia) do resto.

O tamanho exato não importa; o critério de correção é: **dá pra ver a praça de
cima só pela cor do chão**, e ela é um bloco fechado, não uns squares soltos.

**Resposta esperada à pergunta "o que é o tileset":** "é a caixa/paleta de
peças do mapa — eu escolho uma peça lá e carimbo aqui". Se ele disser "é o
mapa", corrija: o tileset é a **origem** das peças, o mapa é o **destino**.

---

## Parte 2 — Cercar a praça

**Só o mapa `Vila de Treino` muda**, agora na aba `Face sprite`.

Estado esperado: contorno de árvores/arbustos em volta dos 6 × 6, com um vão
de 2 squares virado para o caminho já existente.

Se ele pintou a cerca na aba `Floor` (árvore deitada), esse é o momento de
consertar **junto com ele**: botão direito apaga, troca a aba, refaz. Não
conserte por ele — é justamente o conceito da aula.

**Resposta esperada:** "a árvore é `Face sprite` porque ela fica em pé; se eu
pintar como `Floor` ela vira desenho no chão". Aceite qualquer formulação que
separe *deitado × em pé*.

> ⚠️ Nesta aula a cerca é **visual**: o personagem provavelmente atravessa as
> árvores no teste. **Isso é esperado** e não é erro. Colisão de verdade é
> assunto da aula #4 (objeto) e do `Collisions`. Se ele reclamar, é ótimo
> sinal — anote e use como gancho da próxima aula.

---

## Parte 3 — Mobiliar a praça

**Só o mapa `Vila de Treino` muda.**

Estado esperado: pelo menos 4 elementos diferentes dentro da praça, colocados
em `Face sprite` (flor, pedra, placa, tronco, barril — o que o tileset tiver).

Critério de correção: **4 peças diferentes**, não 4 cópias da mesma árvore.

---

## Parte 4 — Nascer na praça

**Só o mapa `Vila de Treino` muda**, na aba `Start position`.

Estado esperado: o marcador de posição inicial em um square **dentro** da
praça e **em cima de chão pintado**.

Sequência correta de fechamento, nesta ordem:

1. `CTRL + S` (salvar)
2. `CTRL + P` (testar)
3. Andar até sair pela entrada
4. `CTRL + E` (exportar o `.zip`)

**Resposta esperada à pergunta "por que salvar antes de testar":** "porque o
teste roda o que está salvo, não o que está na tela". Se ele disser "pra não
perder", complemente — não é só isso.

---

## Estado final esperado

Projeto `Treino RPG` contendo:

- `Maps > Introduction > Starting map` — intacto, como veio
- `Maps > Introduction > Vila de Treino` — grama + caminho + árvores na borda
  + praça 6 × 6 de chão diferente, cercada, com 1 entrada, 4 elementos dentro
  e `Start position` no meio
- `Maps > Battle maps > Default` — intacto
- Um `.zip` exportado no pendrive/Drive do aluno

---

## Gabarito do "Se sobrar tempo"

### 1. Lago

Aba `Floor`, peça de água do tileset, área de 3 × 3 ou maior; contorno de
pedra em `Face sprite`. No teste o personagem **anda por cima da água** — de
novo, é esperado nesta aula.

### 2. Segundo mapa

Botão direito em `Introduction` → novo mapa → Name `Caverna de Treino` →
`OK` → pintar o chão. **Os dois mapas não se conectam ainda** — deixe assim, o
comando `Teleport object...` é a aula #6. Se ele insistir, mostre por 10
segundos onde fica (`Object` → comando `Teleport object...`) e feche.

### 3. Montanha

Aba `Mountain`, clique e arraste pra levantar. Com `CTRL` + rodinha do mouse
você muda a altura (`Y`) em que está desenhando. No teste, o personagem sobe
se a altura for de 1 square; se subir demais de uma vez, ele não consegue — é
uma boa demonstração de "o jogo tem regras".
