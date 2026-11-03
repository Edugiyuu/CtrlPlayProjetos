# Guia completo — jogo de captura de monstrinhos no RPG Paper Maker

Para o **professor**. Monta o jogo inteiro do zero, na ordem, clique por
clique. Faça uma vez sozinho antes da aula (~1h30) e você vai saber
responder qualquer pergunta do aluno.

Ferramenta: **RPG Paper Maker** (não é o RPG Maker) — <https://rpg-paper-maker.com/play>
→ `OPEN WEB APP`. Versão de referência: **3.2.14 (web)**, interface em inglês.

> ⚠️ O projeto fica salvo **no navegador daquele PC**. Sempre termine com
> `CTRL + E` (`File > Export project...`) e guarde o `.zip`.

---

## A ideia principal (leia isto primeiro)

O RPG Paper Maker **não tem captura de monstro pronta**. A gente monta com
peças que ele já tem:

| No "Pokémon" | No RPG Paper Maker |
|---|---|
| Pokémon na party | **Herói** (`Datas > Heroes`) adicionado ao time com `Modify team...` |
| Pokémon selvagem | **Monstro** (`Datas > Monsters`) + **grupo** (`Datas > Troops`) |
| Pokébola | **Item** (`Datas > Items`) |
| Pokémart | NPC com `Start shop menu...` |
| Chance de capturar | **Variável** com número aleatório + `Condition...` |
| Centro Pokémon | NPC que cura o time |

Ou seja: **cada bicho existe duas vezes** — uma ficha de *monstro* (pra lutar
contra) e uma ficha de *herói* (pra entrar no seu time). Capturar = vencer o
monstro, gastar a bola e adicionar o herói igual.

Esse é o conceito que o aluno precisa sair entendendo.

> Sugestão: use nomes inventados pros bichos (o aluno cria). É o jogo dele.

---

## Caminhos de clique usados

| Ação | Caminho |
|---|---|
| Banco de dados | ícone **`Datas`** na barra de cima |
| Fechar o `Datas` | **`Save and close`** (nunca o `X`) |
| Variáveis | ícone **`Variables`** na barra de cima |
| Comandos de um objeto | duplo clique no objeto → lista de comandos → duplo clique na linha vazia `>` |
| Batalha | aba `Battle` → `Start a battle...` |
| Item / dinheiro | aba `Map` → `Modify inventory...` / `Modify currency...` |
| Loja | aba `Map` → `Start shop menu...` |
| Time | `Modify team...` (procure nas abas `Map`/`Battle`) |
| Escolhas | `Show choices...` (aba `Message`) |
| Variável | aba `Structure` → `Change variables...` |
| Se/senão | aba `Structure` → `Condition...` |
| Sumir com objeto | aba `Staging` → `Remove object from map...` |
| Testar | botão **▶ Play** (ou `F5`) |

> Nomes que eu **não consegui confirmar 100%** na 3.2.14 estão marcados com
> 🔎 abaixo. Se não achar, passe o mouse pelas abas de comando — o nome é
> parecido.

---

## Passo 0 — Projeto novo

1. `File > New project...` → nome `Monstrinhos` → modelo `Default`.
2. Dê `▶ Play` uma vez: anda o herói, abre o menu (`Esc`/`X`). Esse menu já
   mostra **o time (party)** — é aqui que os capturados vão aparecer. Sem
   programar nada.

---

## Passo 1 — Os bichos no banco de dados

Abra **`Datas`**. Vamos fazer **3 bichos**: 2 iniciais + 1 selvagem. Pode
ser mais depois; 3 já é jogo.

### 1a. Ficha de herói (o bicho do seu time)

Aba **`Heroes`** → linha `>` no fim → crie, por exemplo:

| ID | Nome | Classe |
|---|---|---|
| (novo) | `Brasinha` (fogo) | qualquer uma do Default |
| (novo) | `Gotinha` (água) | qualquer uma |
| (novo) | `Folhinha` (planta, o selvagem) | qualquer uma |

Escolha um gráfico de batalha (`Battler`) e de rosto diferentes pra cada,
pra dar pra ver no menu quem é quem.

> O herói que já vem no Default (o "treinador") pode ficar no time ou não. Se
> quiser que só bichos lutem, mais tarde remova ele com `Modify team...`.

### 1b. Ficha de monstro (o bicho selvagem que você enfrenta)

Aba **`Monsters`** → `>` → `Folhinha` selvagem. Mesmo gráfico do herói
`Folhinha`, vida baixa (~15), ataque baixo. Em `Rewards`, um pouco de XP e
umas moedas.

### 1c. Grupo

Aba **`Troops`** → `>` → grupo `Folhinha selvagem` com 1 `Folhinha` dentro.

### 1d. Itens

Aba **`Items`** → `>`:

| Item | Efeito | Preço |
|---|---|---|
| `Bola de captura` | nenhum (não "usa" pelo menu) | 20 |
| `Poção` | recupera HP | 10 |

`Save and close`.

---

## Passo 2 — A variável da chance

Ícone **`Variables`** → crie:

| Variável | Pra quê |
|---|---|
| `sorte` | guarda o número aleatório da captura |
| `inicial` | 0 = ainda não escolheu, 1 = já escolheu |

---

## Passo 3 — O professor dá o inicial

No mapa inicial, um objeto NPC `Professor`. Comandos:

```text
Condition (inicial = 0)
    Show text: "Bem-vindo! Escolha seu primeiro monstrinho."
    Show choices: "Brasinha" / "Gotinha"
        [Brasinha]
            Modify team: adicionar herói Brasinha, nível 5, no time
        [Gotinha]
            Modify team: adicionar herói Gotinha, nível 5, no time
    Change variables: inicial = 1
    Modify inventory: + 5 Bola de captura
    Modify currency: + 100
    Show text: "Tome 5 bolas e 100 moedas. Boa sorte!"
Else
    Show text: "Já capturou muitos?"
```

🔎 `Modify team...`: escolha **Add a new member** (ou "create new"), herói =
o bicho, nível, e destino **team** (não *reserve* nem *hidden*).

**Teste:** `▶ Play` → fala com o professor → escolhe → abre o menu → o bicho
aparece na party. ✅ Esse é o primeiro "uau" da aula.

---

## Passo 4 — A loja (Pokémart)

Objeto NPC `Vendedor`:

```text
Show text: "Quer comprar alguma coisa?"
Start shop menu
    Bola de captura — Price 20 — Stock infinito
    Poção           — Price 10 — Stock infinito
```

**Teste:** compre uma bola, abra o menu → `Items` → a quantidade subiu e o
dinheiro desceu.

---

## Passo 5 — O bicho selvagem e a captura (o coração do jogo)

Pinte um pedaço de grama alta no mapa. Coloque um objeto `Folhinha selvagem`
com gráfico do bicho. Comandos:

```text
Show text: "Um Folhinha selvagem apareceu!"
Start a battle: grupo "Folhinha selvagem"
    (Allow escape ✅, Defeat causes Game Over ❌)

Condition (tem item Bola de captura >= 1)
    Show choices: "Jogar bola" / "Deixar ir"
        [Jogar bola]
            Modify inventory: - 1 Bola de captura
            Change variables: sorte = número aleatório entre 1 e 100
            Condition (sorte <= 60)
                Show text: "Pegou! Folhinha entrou no time!"
                Modify team: adicionar herói Folhinha, nível 3, no time
                Remove object from map
            Else
                Show text: "Ah não, escapou da bola!"
                Remove object from map
        [Deixar ir]
            Show text: "O Folhinha foi embora."
            Remove object from map
Else
    Show text: "Você não tem bola de captura!"
    Remove object from map
```

Detalhes de clique:

- **Número aleatório:** em `Change variables...`, operação `=`, valor do
  tipo 🔎 **`Random number`** (entre `1` e `100`).
- **"Tem o item":** em `Condition...`, procure a aba/opção 🔎 de
  **item / inventário** (`Item ID` + quantidade `>= 1`). Se não achar, use
  esta saída simples: tire o `Condition` de fora e deixe só o `Show choices`
  (o jogador só não deveria jogar bola sem ter).
- **Por que vence primeiro e captura depois:** no Pokémon real você captura
  *durante* a luta. Aqui a batalha é uma caixa fechada — não dá pra jogar
  item personalizado dentro dela sem programar plugin. **Vencer → depois
  tentar capturar** é a versão que funciona sem código, e o aluno entende.

**Teste 5 vezes.** Tem que ter vez que pega e vez que escapa. Se pegou 5 de 5,
a conta do `sorte` está errada (provavelmente o `<=` virou `>=`).

---

## Passo 6 — Bichos que voltam (opcional, mas deixa com cara de jogo)

`Remove object from map` faz o bicho sumir **pra sempre** naquele mapa. Pra
ter vários encontros:

- **Jeito fácil:** copie e cole o objeto selvagem 3–4 vezes pela grama.
- **Jeito Pokémon:** 🔎 nas propriedades do mapa (`Map properties`) existe a
  parte de **batalhas aleatórias** (`Random battles`), com grupo e
  frequência. Ela inicia lutas sozinho ao andar — **mas não roda os
  comandos de captura**. Serve pra treinar/subir de nível, não pra capturar.

---

## Passo 7 — O Centro (curar o time)

Objeto NPC `Enfermeira`:

```text
Show text: "Vou cuidar dos seus monstrinhos!"
🔎 Change a statistic... (ou "Change HP/MP") → todo o time → HP = máximo
Show text: "Prontinho, todos curados!"
```

Se não achar o comando de cura, troque por: `Modify inventory: + 2 Poção` e
a fala "Leve estas poções". Funciona igual pra aula.

---

## Passo 8 — Rival / ginásio (fechamento)

Um NPC `Rival` com:

```text
Show text: "Duvido que seu time me vence!"
Start a battle: grupo forte (crie monstro + troop novos)
    (Allow escape ❌, Defeat causes Game Over ✅)
Modify currency: + 200
Show text: "Tá bom... você é bom mesmo."
Remove object from map
```

Balanceie testando: com **1 bicho** deve ser difícil, com **2–3 capturados**
deve dar pra vencer. Isso dá um *motivo* pra capturar.

---

## Ordem pra fazer com o aluno (sugestão de 3 aulas)

| Aula | Entrega |
|---|---|
| 1 | Passos 0–3: bichos no `Datas` + professor dá inicial → aparece no menu |
| 2 | Passos 4–5: loja + captura com chance |
| 3 | Passos 6–8: mais encontros, cura, rival, exportar |

Uma aula só? Faça **3 + 5** (inicial e captura). Loja é bônus.

---

## Erros que vão acontecer

| Sintoma | Causa |
|---|---|
| Capturou mas não aparece no menu | `Modify team` mandou pra *reserve*/*hidden*, ou adicionou o **monstro** em vez do **herói** |
| Bicho selvagem luta de novo toda vez | faltou `Remove object from map` em algum ramo |
| Professor dá inicial infinito | faltou `Change variables: inicial = 1` |
| Loja não compra nada | jogador sem dinheiro — faltou `Modify currency` |
| Mudou o `Datas` e não salvou | fechou no `X` em vez de `Save and close` |
| Sumiu o projeto | não exportou o `.zip` |
