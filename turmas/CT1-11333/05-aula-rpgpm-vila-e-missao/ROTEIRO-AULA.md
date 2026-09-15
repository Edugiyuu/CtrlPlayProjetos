# Roteiro de Aula: A Vila e a Caverna #1 — a vila e a missão

## Dados

- **Turma alvo:** #11333 — CT1 (aula #5), aula particular (só o Guilherme)
- **Projeto:** `A Vila e a Caverna` — **projeto novo**, o jogo final
- **Duração:** bloco de 1h30, mas **escopo real ~55 min** + folga
- **Pré-requisito real:** aulas #3 e #4. Ele pinta mapa e faz NPC falar, mas
  provavelmente ainda precisa de dica pra lembrar **onde** ficam as coisas
  (aba `Object`, clique duplo, `Commands...`). Deixe o cartão de memória da #4
  aberto do lado dele e **não dite o caminho** antes de ele tentar.
- **Tema:** "A Vila e a Caverna" — escolhido junto com o professor. Usa só os
  assets que já vêm no projeto `Default`, nenhuma arte extra.

## Objetivo

Sair de "sei fazer as peças soltas" para "tenho o começo de um jogo com
história". No fim da aula o jogador entra na vila, conversa com o chefe e
**sabe o que tem que fazer** — mesmo que ainda não consiga fazer.

## O que NÃO entra nesta aula

`Teleport object...`, batalha, `Datas`, item, variável, condição. A floresta e
a caverna são criadas **vazias**, só pra existirem na lista. Se ele quiser
pintar a floresta hoje e sobrar tempo: pode, é bônus — mas nada de ligar os
mapas.

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| **Planejar antes de pintar** | Decidir no papel quais mapas existem e o que acontece em cada um, antes de abrir o editor. Sem isso, o mapa fica lindo e o jogo não tem o que fazer. | rascunho no caderno, 5 min |
| **Missão (quest)** | Uma tarefa que o jogo dá ao jogador. Pra funcionar precisa de 3 coisas: **quem pede**, **o que quer** e **onde fica**. Se faltar uma, o jogador não sabe o que fazer. | falas do chefe da vila |
| **NPC** | *Non-Player Character*: personagem do jogo que não é você. Todo NPC é um objeto; nem todo objeto é NPC (baú, porta). | objetos da vila |
| **Organização dos mapas** | Cada lugar do jogo é um mapa, com nome que se entende na lista. `Map 3` não diz nada; `Caverna` diz. | painel `Maps` |

> Conceito central de hoje é **missão**. Pergunta de checagem obrigatória
> antes do desafio: "se eu fosse um jogador que nunca viu esse jogo, depois de
> falar com o chefe eu saberia o que fazer e pra onde ir?". Ele tem que
> responder olhando as **falas dele**, não a intenção que estava na cabeça.

## Preparação (antes do aluno chegar)

- [ ] Editor aberto e carregado
- [ ] `.zip` da aula #4 em mãos (caso o `Treino RPG` tenha sumido — mas hoje o
      projeto é novo, o treino só serve de consulta)
- [ ] Papel e caneta na mesa (o rascunho dos 3 mapas é no papel, não na tela)
- [ ] `gabarito/GABARITO.md` aberto numa aba só sua

---

## Roteiro

### 0–10 min — O jogo inteiro, no papel

Sem tocar no computador. Conte a história em 3 frases e desenhe com ele três
quadrados no papel: **Vila → Floresta → Caverna**.

Em cada quadrado ele escreve o que acontece ali:

- Vila: o chefe pede ajuda; tem gente pra conversar.
- Floresta: o caminho até a caverna; tem bicho.
- Caverna: o monstro.

**Diga o plano das 4 aulas em voz alta** (hoje a vila; semana que vem os
caminhos; depois a luta; depois o final e publicar). Saber que tem um fim
combinado muda o empenho dele.

**Pergunta que abre a aula:** "num RPG que você já jogou, como o jogo te conta
o que fazer?" (resposta que interessa: alguém fala com você).

### 10–20 min — Projeto novo e os 3 mapas

- `File > New project...` → `A Vila e a Caverna` → **Default** → `OK`.
- No painel `Maps`, criar os três mapas: `Vila`, `Floresta`, `Caverna`.
  Floresta e caverna ficam **vazias** hoje.
- Vila com ~25 × 25; as outras podem ficar no padrão.

**Teste de entendimento:** "por que eu criei os três agora se dois estão
vazios?" (resposta boa: pra já ter a estrutura do jogo montada / pra não
esquecer; aceite também "pra saber quantos lugares o jogo tem").

### 20–40 min — Pintar a vila (ele sozinho, você calado)

Ele repete o que fez na #3, **sem** você ditando. Só cobre o resultado:

- Chão de grama/terra, um caminho que sai pela borda (é por ali que vai ser o
  teleporte pra floresta na aula #6 — avise, pra ele deixar o espaço).
- Duas ou três "casas" (pode ser só um quadrado de chão diferente com sprites).
- Árvores fechando as bordas.
- `Start position` no meio da vila.

**Teste agora:** `CTRL + S`, `CTRL + P`, o herói nasce na vila e consegue andar
até o fim do caminho.

⚠️ **Controle de tempo:** se em 20 min a vila não estiver pintada, **pare de
pintar** e vá pro chefe da vila. Mapa bonito sem NPC não é jogo; NPC sem mapa
bonito é. Dá pra voltar a decorar depois.

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~50 min)

Criar o objeto `Chefe da Vila` no meio da vila, com gráfico e **três falas**
no `Hero action`, com `Interlocutor` preenchido:

1. Quem é ele e qual é o problema.
2. O que ele quer que o herói faça.
3. Onde fica o lugar.

Se chegou aqui, **a aula valeu**. O aluno consegue:

- [ ] Criar um projeto e organizar 3 mapas com nome
- [ ] Pintar um mapa sozinho, sem o professor ditar o caminho
- [ ] Criar um NPC com gráfico e várias falas sem consultar o passo a passo
- [ ] Explicar por que a fala precisa dizer **o que fazer e onde**

Se o ritmo estiver apertado: **para aqui**, exporta o `.zip`, e o desafio vira
abertura da #6. Não empurrar.

---

### 50–70 min — Desafio

Passar o [DESAFIO.md](./DESAFIO.md) ("A vila viva"): mais dois moradores, um
deles com a **dica** de como enfrentar o monstro.

### 70–80 min — Fechar e exportar

- Testar o jogo do começo: nasce na vila → fala com o chefe → fala com os
  moradores.
- `CTRL + E` → `.zip` no pendrive/Drive.
- Perguntar: "o que falta pra isso virar jogo?" (a resposta dele é a pauta da
  #6).

---

## Perguntas para conduzir a aula

1. Quais são as 3 coisas que a fala do chefe tem que dizer?
2. Por que a gente criou a floresta e a caverna vazias hoje?
3. Se o jogador não falar com o chefe, ele descobre o que fazer? Isso é bom?
4. Qual a diferença entre um NPC e uma árvore, pro jogo?

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Colocar música na vila (propriedades do mapa).
2. Fazer uma placa na saída da vila escrito "Floresta →".
3. Pintar o começo da `Floresta` (só o chão — sem ligar nada).
4. Dar um `Faceset` (retrato) ao chefe da vila dentro do `Show text...`.

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| Ele pintou tudo no `Starting map` em vez do mapa `Vila` | Mapa errado aberto — conferir o nome na aba acima da área de desenho |
| `Start position` não funciona | Foi marcado em outro mapa (o `Starting map` de exemplo) |
| O chefe fala, mas o jogador não entende o que fazer | Falta "o que" ou "onde" nas falas — é o erro que mais importa hoje, não deixe passar |
| Vila enorme e vazia, sem tempo pro NPC | Escopo: cortar o mapa, 25 × 25 já é grande |
| Sumiu o projeto entre uma aula e outra | `File > Import project...` com o `.zip` |

## Registro pós-aula

Despejo cru:

- **Até onde chegou de verdade** (vila pintada? chefe com as 3 falas? desafio?).
- **Ele conseguiu montar o NPC sozinho** ou teve que ser ditado de novo?
- **Onde travou.**
- **O que cortar ou adiantar** na #6 (se a vila ficou pela metade, a #6 abre
  terminando ela — teleporte sem mapa pronto não rende).
