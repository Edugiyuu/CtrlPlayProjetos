# Roteiro de Aula: A Vila e a Caverna #2 — teleporte entre mapas

## Dados

- **Turma alvo:** #11333 — CT1 (aula #6), aula particular (só o Guilherme)
- **Projeto:** `A Vila e a Caverna` (continuação direta da #5)
- **Duração:** bloco de 1h30, mas **escopo real ~55 min** + folga
- **Pré-requisito real:** aula #5. Cria objeto e diálogo sem ajuda. **Só
  conhece um comando** (`Show text...`) — hoje ele conhece o segundo, e é o
  mais importante do jogo inteiro.
- **Tema:** "A Vila e a Caverna", aula 2 de 4.

## Objetivo

Sair de "tenho três mapas soltos" para "tenho um mundo": o jogador anda da
vila até a caverna e volta, sem o professor mexer em nada. É a aula que faz o
projeto virar jogo de verdade.

## O que NÃO entra nesta aula

Monstro, batalha, `Datas`, item, variável, condição. O ponto do monstro na
caverna fica **vazio e marcado** — deixe ele com vontade. Se perguntar "e o
monstro?": "semana que vem, e é a aula mais legal".

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| **Teleporte** | Comando que **pega alguém e joga em outro lugar** — outro square do mesmo mapa ou outro mapa inteiro. É assim que todo RPG te faz "entrar" numa casa ou numa caverna. | `Commands... > Staging > Teleport object...` |
| **Quem × para onde** | O comando pergunta duas coisas separadas: `Object ID` = **quem** vai (quase sempre `> Hero`, o herói) e `Position` = **para onde**. Confundir os dois é o erro nº 1. | janela `Teleport object...` |
| **Destino (`Select...`)** | O botão `Select...` abre a lista de mapas: você escolhe o mapa e clica no **square exato** onde a pessoa vai cair. O destino aparece escrito como `Map ID: N [pasta/mapa]` com `X`, `Y`, `Z`. | dentro do `Teleport object...` |
| **Ida ≠ volta** | Um teleporte leva pra um lado **só**. Pra voltar, precisa de **outro objeto, no outro mapa**, com outro teleporte. São dois objetos, não um. | saída da vila × entrada da floresta |
| **Ponto de chegada** | Onde o herói cai. Se cair **em cima** do objeto de volta, ele é teleportado de novo na hora — o famoso "loop de teleporte". Chegada fica **um square adiante** do portal. | escolha do square no `Select...` |

> Conceito central: **ida ≠ volta** e **ponto de chegada**. Pergunta de
> checagem obrigatória antes do desafio: "por que o objeto que leva da vila
> pra floresta não serve pra voltar?". Se ele não souber responder, os três
> teleportes seguintes vão dar errado do mesmo jeito.

## Preparação (antes do aluno chegar)

- [ ] Projeto `A Vila e a Caverna` carregado e conferido (a `Vila` tem que ter
      caminho chegando **até a borda** — se não tiver, abrir a passagem antes)
- [ ] `.zip` da #5 em mãos
- [ ] `gabarito/GABARITO.md` aberto numa aba só sua, na tabela de teleportes
- [ ] Papel com os 3 quadrados da #5 (Vila / Floresta / Caverna) na mesa

---

## Roteiro

### 0–8 min — Recap e a pergunta que abre

Ele roda o jogo e conversa com o chefe. Depois anda até a saída da vila e...
não acontece nada.

**Pergunta que abre a aula:** "o chefe mandou você ir pra caverna. Como é que
o jogo te leva pra lá?" Deixe ele tentar responder. Hoje a resposta tem nome:
**teleporte**.

Desenhe as setas no papel dos 3 quadrados: Vila → Floresta → Caverna, e as
setas de volta. **Quatro setas = quatro teleportes.** Isso fica na mesa a aula
inteira.

### 8–25 min — Pintar floresta e caverna (cronometrado)

**15 minutos, relógio na mesa.** O objetivo não é mapa bonito, é mapa
atravessável.

- `Floresta`: chão de grama/terra, muitas árvores, um caminho claro entrando de
  um lado e saindo do outro.
- `Caverna`: chão de pedra, paredes de pedra nas bordas, um espaço aberto no
  fundo — **deixe esse espaço vazio, é onde o monstro entra na #7**.

**Teste agora:** os dois mapas têm um caminho que vai de uma borda até a outra
sem beco sem saída.

### 25–40 min — O primeiro teleporte (conduzido)

Na `Vila`, no square da saída (onde tem a placa da #5):

- Aba `Object` → clique duplo → `Name`: `Saida para a Floresta`.
- **Sem gráfico** — é um portal invisível. Explique: objeto sem `Graphics`
  continua funcionando, só não aparece. (Isso responde a dúvida da aula #4.)
- Comando: `Commands... > Staging > Teleport object...`.
- `Object ID`: `> Hero`. **Pergunte antes de clicar:** "quem a gente quer
  teleportar?"
- `Position` → `Select...` → escolher o mapa `Floresta` → clicar no square da
  entrada → `OK` → `OK`.
- `CTRL + S` → `CTRL + P` → andar até a saída.

**Teste agora:** ao pisar na saída da vila, o jogo troca pro mapa `Floresta`.

**Teste de entendimento (obrigatório):** "agora tenta voltar pra vila." Ele vai
tentar andar de volta e não vai conseguir. **Deixe acontecer** — é a
demonstração do conceito. Aí pergunte: "por quê?".

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~45 min)

Fazer o teleporte de **volta**: na `Floresta`, um objeto invisível na entrada
com `Teleport object...` → `> Hero` → destino `Vila`, um square **ao lado** da
saída (não em cima dela).

Se chegou aqui, **a aula valeu**. O aluno consegue:

- [ ] Explicar o que o `Teleport object...` faz e quais as duas perguntas dele
- [ ] Criar um portal invisível e mandar o herói pra outro mapa
- [ ] Explicar **por que** ida e volta são dois objetos diferentes
- [ ] Ir da vila pra floresta e voltar, sem travar em loop

Se o ritmo estiver apertado: **para aqui**. Dois mapas ligados já é um mundo;
a caverna vira abertura da #7. Não empurrar.

---

### 45–65 min — Desafio

Passar o [DESAFIO.md](./DESAFIO.md) ("O caminho inteiro"): os dois teleportes
que faltam (Floresta ↔ Caverna) e o teste de ponta a ponta.

### 65–80 min — Bônus e fechamento

Se sobrou tempo: escurecer a caverna com
`Commands... > Staging > Change screen tone...` num objeto na entrada.

Fechar com `CTRL + E` e a pergunta: "o que falta pro jogo ter graça?" (resposta
esperada: o monstro — que é a #7).

---

## Perguntas para conduzir a aula

1. Quais são as **duas** perguntas que o comando de teleporte faz?
2. Por que a gente escolheu `> Hero` e não outra coisa no `Object ID`?
3. Por que o portal não tem gráfico? Ele funciona mesmo assim?
4. Se eu fizer o herói cair **em cima** do portal de volta, o que acontece?
5. Quantos teleportes esse jogo tem no total? Por quê?

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Escurecer a caverna (`Change screen tone...`).
2. Música diferente em cada mapa (propriedades do mapa).
3. Um som ao entrar na caverna (`Map > Play a sound...` antes do teleporte).
4. Fechar a floresta com árvores de forma que só exista **um** caminho.

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| Piso no portal e nada acontece | Comando fora do `Hero action`, ou o objeto está num square onde o herói não passa |
| Teleportou, mas quem foi não foi o herói | `Object ID` diferente de `> Hero` |
| Cheguei no outro mapa e voltei na hora, sem parar | Loop: o ponto de chegada está **em cima** do portal de volta. Mover a chegada 1–2 squares adiante |
| Cheguei "dentro" de uma pedra/parede e não consigo andar | Square de destino em cima de sprite com colisão — escolher um square livre |
| Caí no vazio / caí de uma altura | `Y` do destino errado; escolher o square clicando no mapa em vez de digitar número |
| Vou pra floresta mas não consigo voltar | Falta o objeto de volta **no mapa da floresta** — ida e volta são dois objetos |
| O teleporte leva pro mapa errado | `Map ID` do destino; conferir o texto `Map ID: N [pasta/mapa]` na janela |
| Tudo certo e mesmo assim não funciona | Faltou `CTRL + S` antes do `CTRL + P` |

## Registro pós-aula

Despejo cru:

- **Até onde chegou de verdade** (Vila↔Floresta? Floresta↔Caverna? bônus?).
- **Ele entendeu "ida ≠ volta"** ou copiou o caminho sem entender?
- **Onde travou** (loop de teleporte? destino errado?).
- **O que cortar ou adiantar** na #7. Se os 4 teleportes não fecharam, a #7
  abre terminando isso — sem caminho até a caverna, não tem batalha.
