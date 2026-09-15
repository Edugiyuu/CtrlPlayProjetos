# Roteiro de Aula: Primeiro mapa no RPG Paper Maker

## Dados

- **Turma alvo:** #11333 — CT1 (aula #3), aula particular (só o Guilherme)
- **Projeto:** projeto de treino `Treino RPG` (descartável — o jogo de verdade
  nasce na aula #5)
- **Duração:** bloco de 1h30, mas **escopo real ~50 min** + folga
- **Pré-requisito real:** nenhum de RPG Paper Maker. Sabe usar mouse/teclado
  bem e já mexeu em Roblox Studio (CK4). **Não** assuma inglês: traduza cada
  botão em voz alta na primeira vez que aparecer.
- **Tema:** primeira de 6 aulas de RPG Paper Maker. Aqui é só ferramenta; o
  jogo "A Vila e a Caverna" começa na #5.

## Objetivo

Sair de "nunca abri isso" para "criei um mapa meu, com chão e árvores, e meu
personagem anda dentro dele". No fim da aula ele tem que conseguir abrir o
editor sozinho, achar o mapa dele e rodar o teste.

## O que NÃO entra nesta aula

Objetos, NPC, diálogo, comando, batalha, Datas, variável. Nada de `Object`.
Montanha (`Mountain`) e `3D object` só se sobrar tempo. Se ele quiser colocar
um personagem que fala: "é a aula que vem, hoje a gente constrói o cenário".

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| **Engine (motor de jogo)** | Programa onde você monta o jogo inteiro — cenário, personagens, regras — sem escrever código. O Scratch também é uma engine; essa aqui é 3D. | a tela toda |
| **Projeto** | A pasta com *tudo* do seu jogo: mapas, imagens, sons. Um projeto = um jogo. | `File > New project...` |
| **Mapa** | Um pedaço do mundo do jogo. Um jogo tem vários (vila, floresta, caverna) e o herói anda de um pro outro. | painel `Maps`, à esquerda embaixo |
| **Tileset** | A "caixa de peças" do mapa: o quadro cheio de grama, terra, árvore e pedra no canto superior esquerdo. Você escolhe uma peça lá e carimba no mapa. | seletor de tiles (canto sup. esq.) |
| **Square (quadrado)** | A menor casa do mapa, como um quadradinho de papel quadriculado. Tudo que você pinta ocupa um ou mais squares. | grade verde na área de desenho |
| **X / Y / Z** | As três direções: `X` e `Z` são o chão (largura e profundidade), `Y` é a **altura**. O número aparece no canto: `[X = 0, Y = 0, Z = 0]`. | canto sup. esq. da área de desenho |
| **Floor × Face sprite** | `Floor` é o que fica **deitado** no chão (grama, pedra, água) — dá pra andar em cima. `Face sprite` fica **em pé**, virado pra câmera (árvore, arbusto, placa). | abas acima do mapa |
| **Start position** | O square onde o herói aparece quando o jogo começa. Sem isso, o teste começa no lugar errado ou em lugar nenhum. | aba `Start position` |
| **Play test** | Rodar o jogo de verdade pra ver se funciona, sem publicar nada. `Test > Play` ou `CTRL + P`. | menu `Test` |

> Regra da turma (memória `feedback-conceitos-explicitos`): cada termo acima
> ganha um momento próprio, com exemplo no mapa dele + pergunta de checagem.
> Clicar certo **não** é prova de entendimento — ele tem que saber dizer o que
> é `Floor` e o que é `Face sprite` com as palavras dele.

## Preparação (antes do aluno chegar)

- [ ] Chrome/Edge aberto em <https://rpg-paper-maker.com/play>, já carregado
      (a primeira carga é lenta — não queime 5 min de aula nisso)
- [ ] Um projeto de exemplo **seu** já pronto com uma vilinha, pra mostrar 20
      segundos de "é isso que dá pra fazer" e fechar
- [ ] Pendrive ou pasta no Drive do aluno combinada pro `.zip` do fim da aula
- [ ] `gabarito/GABARITO.md` aberto numa aba só sua

---

## Roteiro

### 0–8 min — Abertura e o projeto

Mostre 20s do seu mapa de exemplo rodando. Pergunta que abre a aula:
**"quanto código você acha que tem aqui dentro?"** (resposta: zero — hoje é
tudo carimbo e clique; o "código" aparece na aula #4 em forma de comando).

- Ele abre o site e clica em **OPEN WEB APP**.
- `File > New project...` → Name: `Treino RPG` → tipo **Default** → `OK`.
- **Explique os 3 tipos:** `Blank` = folha em branco, sem nada; `Default` =
  já vem com um mapa, um herói e as peças (é o que a gente usa); `Tutorial` =
  projeto de exemplo pronto pra fuçar.
- Enquanto carrega (~30s), avise do ponto crítico: **o projeto mora dentro
  deste navegador, neste PC**. No fim da aula a gente exporta.

**Teste de entendimento:** "se você abrir esse site no celular em casa, o
`Treino RPG` vai estar lá?" (resposta boa: não, ele fica salvo neste
computador/navegador; só o `.zip` exportado viaja).

### 8–18 min — Ler a janela (sem clicar em nada ainda)

Peça pra ele apontar com o mouse enquanto você nomeia. As 4 regiões:

1. **Canto superior esquerdo** — o *tileset*: a caixa de peças.
2. **Canto inferior esquerdo** — `Maps`: a lista de mapas (`Introduction >
   Starting map`, `Battle maps > Default`).
3. **Meio/direita** — a área de desenho, com `[X = 0, Y = 0, Z = 0]` no canto.
4. **Em cima do mapa** — as abas: `Floor · Face sprite · Mountain · 3D object ·
   Object · Start position · View`.

Câmera (ele treina 1 min — é o que mais atrapalha depois):

- **Girar:** segurar `SHIFT` + arrastar o mouse.
- **Mover:** apertar a rodinha do mouse e arrastar.
- **Zoom:** rodinha do mouse.

**Teste de entendimento:** "onde eu escolho a peça que vou carimbar, e onde eu
escolho *em qual mapa* eu estou?" (tem que apontar tileset × painel `Maps`).

### 18–35 min — Pintar o primeiro mapa

Ele cria o mapa dele (não usa o `Starting map` de exemplo): botão direito na
pasta `Introduction` → novo mapa → Name: `Vila de Treino`, tamanho ~20 × 20.

- **`Floor` primeiro.** Escolher grama no tileset e pintar uma área grande com
  o **balde** (paint), depois um caminho de terra/pedra com o **lápis**
  (pencil).
- **Depois `Face sprite`.** Árvores e arbustos nas bordas. Aqui ele vê sozinho
  que a árvore fica *em pé* e a grama fica *deitada* — é o momento de fixar a
  diferença.

**Explique `Floor` × `Face sprite` com o mapa dele na tela**, não antes.

**Teste agora:** o mapa dele tem uma área de grama com um caminho passando no
meio e pelo menos 3 árvores/arbustos na borda.

**Teste de entendimento:** "se eu quiser fazer um lago, isso é `Floor` ou
`Face sprite`? E uma placa de madeira?" (lago = `Floor`; placa = `Face sprite`).

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~40 min)

Aba `Start position` → clicar no square onde o herói começa. `File > Save`
(`CTRL + S`). `Test > Play` (`CTRL + P`).

Se chegou aqui, **a aula valeu**. O aluno consegue:

- [ ] Criar um projeto e achar o mapa dele no painel `Maps`
- [ ] Pintar chão com `Floor` e colocar árvore com `Face sprite`, e **explicar
      a diferença** com as palavras dele
- [ ] Definir o `Start position` e rodar o jogo com `Test > Play`
- [ ] Andar com o personagem dentro do mapa que ele mesmo fez

Se o ritmo estiver apertado ou ele meio perdido: **para aqui**, exporta o
`.zip` (bloco final) e o `DESAFIO.md` vira abertura da aula #4. Não empurrar.

---

### 40–60 min — Desafio

Passar o [DESAFIO.md](./DESAFIO.md) ("A praça da vila"). Ele faz sozinho, você
só destrava. Serve pra você ver se `Floor` × `Face sprite` e o ciclo
*pintar → salvar → testar* ficaram de pé.

### 60–70 min — Backup (não pular, nunca)

`File > Export project...` (`CTRL + E`) → salva o `.zip` → ele copia pro
pendrive/Drive dele. Fale em voz alta: **"isso aqui é o teu jogo; se esse PC
for formatado, é só isso que sobra"**.

### Se sobrar tempo

Ver "Desafios se sobrar tempo" abaixo. **Não** comece NPC/diálogo — é a
próxima aula inteira, e começar pela metade estraga a abertura dela.

---

## Perguntas para conduzir a aula

1. O que é um *tileset*, com as suas palavras?
2. Por que a árvore não pode ser pintada como `Floor`?
3. Se eu apagar o `Start position`, o que acontece quando eu der Play?
4. O `Treino RPG` está salvo onde, exatamente?
5. Qual a diferença entre `Save` e `Export project...`?

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Fazer um lago (`Floor` de água) e cercar de pedras.
2. Usar a aba `Mountain` pra criar um morrinho e subir nele no teste.
3. Colocar música no mapa (propriedades do mapa → campo de música).
4. Criar um **segundo** mapa (`Caverna de Treino`) e pintar o chão dele — sem
   ligar os dois ainda (o teleporte é a aula #6).

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| Clica no mapa e não pinta nada | Nenhuma peça selecionada no tileset, ou está na aba errada (`Object` em vez de `Floor`) |
| A árvore aparece deitada no chão | Pintou na aba `Floor`; árvore é `Face sprite` |
| A câmera "fugiu" e o mapa sumiu | Girou com `SHIFT` sem querer — dar zoom out com a rodinha e girar de volta |
| O `Play` abre mas o personagem não aparece / cai no vazio | `Start position` não foi definido, ou foi definido fora do chão pintado |
| O `Play` abre o mapa errado | O `Start position` é que manda — conferir em qual mapa ele foi marcado |
| Editou, deu Play, e nada mudou | Não salvou (`CTRL + S`) antes de testar |
| Tela preta / travou ao carregar | Aba antiga presa: fechar a aba e reabrir `rpg-paper-maker.com/play`. Se persistir, `File > Clear all cache` |

## Registro pós-aula

Despejo cru — o que lembrar, na ordem que lembrar:

- **Até onde chegou de verdade** (marco mínimo? desafio? exportou o `.zip`?).
- **Onde travou** (inglês? câmera? diferença `Floor`/`Face sprite`?).
- Ele **gostou** do RPG Paper Maker? (isso decide se as #5–#8 continuam nesse
  plano ou se a gente volta pro cronograma oficial.)
- **O que cortar ou adiantar** na aula #4.
