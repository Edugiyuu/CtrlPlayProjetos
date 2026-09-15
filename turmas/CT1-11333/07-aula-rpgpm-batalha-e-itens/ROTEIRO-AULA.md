# Roteiro de Aula: A Vila e a Caverna #3 — batalha e itens

## Dados

- **Turma alvo:** #11333 — CT1 (aula #7), aula particular (só o Guilherme)
- **Projeto:** `A Vila e a Caverna` (continuação direta da #6)
- **Duração:** bloco de 1h30, mas **escopo real ~55 min** + folga
- **Pré-requisito real:** aula #6 fechada (4 teleportes funcionando). Se a
  travessia até a caverna não está pronta, **termine isso primeiro** — sem
  caminho, a batalha não é testável. Ele conhece 2 comandos e nunca abriu
  `Datas`.
- **Tema:** "A Vila e a Caverna", aula 3 de 4. É a aula que ele mais espera.

## Objetivo

Sair de "meu mundo é seguro e vazio" para "tem um chefe no fim do caminho e
dá pra perder". No fim da aula o jogo tem começo (missão), meio (travessia) e
clímax (batalha) — falta só o final, que é a #8.

## O que NÃO entra nesta aula

Variável, condição, final, publicação (#8). Dentro do `Datas`, **não abrir**
`Classes`, `Skills`, `Weapons`, `Armors`, `Status`, `Animations` — é onde a
aula morre afogada. Se ele perguntar de skill nova: "dá, e é fácil, mas hoje a
gente fecha a luta primeiro".

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| **`Datas` (banco de dados)** | A "ficha técnica" do jogo: todas as listas de monstros, itens, heróis. Não fica em mapa nenhum — vale pro jogo inteiro. Mapa é *onde*; `Datas` é *o que existe*. | ícone `Datas` na barra de cima |
| **Monstro (`Monsters`)** | A **ficha** de um inimigo: nome, vida, ataque, quanto dá de XP. Criar a ficha **não** coloca ele em lugar nenhum. | `Datas > Monsters` |
| **Grupo (`Troops`)** | Quem aparece **junto** numa luta: "1 Slime", "2 Slimes e 1 Morcego". A batalha chama um **grupo**, nunca um monstro solto. | `Datas > Troops` |
| **`Start a battle...`** | O comando que troca o mapa pela tela de luta. Pergunta qual **grupo** enfrentar. | `Commands... > Battle > Start a battle...` |
| **`Defeat causes Game Over`** | Opção da batalha: se marcada, perder acaba o jogo. Desmarcada, o jogo continua mesmo perdendo. É a diferença entre luta obrigatória e luta opcional. | dentro do `Start a battle...` |
| **Item (`Items`)** | Uma coisa que o jogador carrega e usa (poção, chave). Criar o item no `Datas` **não** dá o item a ninguém. | `Datas > Items` |
| **`Modify inventory...`** | O comando que **entrega** (ou tira) item do jogador. É o que transforma um baú em baú. | `Commands... > Map > Modify inventory...` |
| **Balanceamento** | Ajustar os números (vida, ataque) até a luta ser difícil mas possível. Não existe número certo na primeira tentativa — testa, ajusta, testa. | `Datas > Monsters` |

> Conceito central: **ficha × grupo × comando** — três coisas diferentes que
> ele vai querer misturar. Pergunta de checagem obrigatória antes do desafio:
> "criei o monstro no `Datas`. Ele já está na caverna?" (resposta: não —
> criar a ficha não põe ninguém no mapa).

## Preparação (antes do aluno chegar)

- [ ] Projeto carregado e a travessia até a caverna testada por você
- [ ] `.zip` da #6 em mãos
- [ ] `gabarito/GABARITO.md` aberto na tabela de números (balanceamento)
- [ ] Saber onde está o espaço vazio do fundo da caverna (da #6)

---

## Roteiro

### 0–8 min — Recap e a pergunta que abre

Ele faz a travessia até o fundo da caverna. Não tem nada lá.

**Pergunta que abre a aula:** "o chefe da vila te mandou matar o monstro. Cadê
o monstro?" E a segunda, mais importante: "pra existir um monstro no jogo,
quantas coisas eu preciso criar?" (deixe ele chutar; a resposta de hoje é
**três**: a ficha, o grupo e o objeto no mapa).

Desenhe no papel:

```text
Datas > Monsters   →   Datas > Troops   →   objeto no mapa
   (a ficha)            (quem vem junto)     (onde acontece)
```

Esse desenho fica na mesa a aula inteira.

### 8–25 min — `Datas`: a ficha e o grupo

- Abrir o ícone **`Datas`** na barra de cima. Mostrar as abas de longe e dizer
  em voz alta: **"hoje a gente usa três: `Monsters`, `Troops` e `Items`"**.
- `Monsters`: criar um monstro novo (linha `>` no fim da lista), `Name`:
  `Guardião da Caverna` (ou o nome que ele quiser). Ajustar vida e ataque —
  use a tabela do gabarito como ponto de partida.
- `Troops`: criar um grupo novo com **esse** monstro dentro.
- `Save` / `Save and close`.

**Teste de entendimento (obrigatório):** "agora que eu criei o monstro, se eu
der Play e for na caverna, ele está lá?" (resposta: **não**). Se ele disser que
sim, volte no desenho dos 3 quadrados.

### 25–40 min — O monstro na caverna

No espaço vazio do fundo da caverna:

- Objeto novo, **com** gráfico (dessa vez ele aparece), `Name`: `Monstro`.
- Comandos, nesta ordem — ele escreve, você só pergunta "e depois?":
  1. `Show text...` — o monstro provoca
  2. `Battle > Start a battle...` → grupo criado no bloco anterior
  3. `Show text...` — a vitória
  4. `Staging > Remove object from map...` — ele some
- `CTRL + S` → `CTRL + P` → travessia → lutar.

**Teste agora:** o monstro fala, a tela vira batalha, você luta, volta pro mapa
e o monstro sumiu.

**Teste de entendimento:** "por que o `Remove object from map...` tem que ser o
**último**?" (se vier antes, o monstro some antes de falar/lutar — ordem de
comandos, o conceito da aula #4 voltando).

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~45 min)

Se chegou aqui, **a aula valeu**. O aluno consegue:

- [ ] Dizer o que é o `Datas` e para que servem `Monsters` e `Troops`
- [ ] Explicar por que criar a ficha não coloca o monstro no mapa
- [ ] Montar um objeto que fala, inicia a batalha e some depois de vencer
- [ ] Jogar da vila até a caverna e vencer a luta

Se o ritmo estiver apertado: **para aqui**. O item vira abertura da #8 (e a #8
corta a loja). Não empurrar.

---

### 45–60 min — A poção e o baú

- `Datas > Items`: criar `Poção`, efeito de curar vida.
- Na floresta: objeto com gráfico de baú, com os comandos:
  1. `Map > Modify inventory...` → `Poção`, quantidade 2
  2. `Show text...` — "você encontrou 2 poções!"
- Testar: pegar o baú, abrir o menu no jogo e ver a poção no inventário.

**Teste agora:** a poção aparece no inventário e dá pra usar na batalha.

### 60–80 min — Desafio + fechamento

Passar o [DESAFIO.md](./DESAFIO.md) ("O covil") — balancear a luta e fechar o
covil. Fechar com `CTRL + E`.

Pergunta de saída: "o jogo tem começo, meio e luta. O que falta?" (o final —
que é a última aula).

---

## Perguntas para conduzir a aula

1. Qual a diferença entre `Monsters` e `Troops`?
2. Criar um item no `Datas` dá o item pro jogador? Quem dá?
3. O que muda no jogo se eu desmarcar `Defeat causes Game Over`?
4. Por que a ordem dos comandos do monstro importa?
5. Se a luta estiver fácil demais, onde eu mexo?

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Um monstro **fraco** na floresta, com `Allow escape` marcado (dá pra fugir).
2. Uma loja na vila (`Map > Start shop menu...`) vendendo poção — precisa dar
   dinheiro ao jogador antes (`Map > Modify currency...`).
3. Música de batalha diferente (`Battle > Change battle music...`).
4. Um segundo item: chave, bomba, o que ele inventar.

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| Criei o monstro e ele não está na caverna | Esperado: falta o **objeto no mapa** com o comando de batalha |
| A batalha começa mas vem o monstro errado | O grupo (`Troop`) escolhido no `Start a battle...` tem outro monstro dentro |
| O monstro some antes de falar | `Remove object from map...` colocado antes dos outros comandos |
| Venci e o monstro continua lá | Falta o `Remove object from map...`, ou ele está fora da lista de comandos |
| Perdi e o jogo fechou | `Defeat causes Game Over` marcado — é o comportamento certo pra luta de chefe |
| A luta acaba em 2 golpes | Balanceamento: subir vida/ataque do monstro (ver tabela do gabarito) |
| Impossível ganhar | Baixar os números, ou garantir que ele pegou as poções antes |
| A poção não aparece no inventário | Faltou o `Modify inventory...`, ou o baú foi criado sem comando |
| `Datas` aberto e nada salva | Fechar com `Save and close`, não com o `X` |

## Registro pós-aula

Despejo cru:

- **Até onde chegou de verdade** (monstro? batalha? poção? balanceou?).
- **Ele separou ficha × grupo × objeto** ou misturou?
- **Onde travou.**
- **O que cortar na #8** — é a última aula do bloco e tem que sobrar tempo
  pra jogar do início ao fim e publicar.
