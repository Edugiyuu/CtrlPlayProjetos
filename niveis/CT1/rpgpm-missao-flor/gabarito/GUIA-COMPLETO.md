# Guia completo — missão da flor no RPG Paper Maker

Para o **professor**. Monta a missão inteira, na ordem. Faça uma vez antes
da aula (~30 min).

Ferramenta: **RPG Paper Maker** (não é o RPG Maker) — <https://rpg-paper-maker.com/play>
→ `OPEN WEB APP`. Interface em inglês.

> ⚠️ O projeto fica salvo **no navegador daquele PC**. Termine sempre com
> `CTRL + E` (`File > Export project...`) e guarde o `.zip`.

---

## A ideia principal

O RPG Paper Maker **não tem sistema de missão pronto**. Missão = **uma
variável** que guarda em que ponto da história o jogador está, e objetos que
olham essa variável antes de agir.

| Valor de `missao` | Momento | Quem muda pra esse valor |
|:---:|---|---|
| 0 | nunca falou com a Vovó | (começa assim) |
| 1 | aceitou, procurando a flor | Vovó |
| 2 | pegou a flor | Flor |
| 3 | entregou, missão acabou | Vovó |

É esse o conceito que o aluno precisa sair entendendo: **a Vovó não lembra
nada sozinha — a variável é a memória dela.**

---

## Caminhos de clique

| Ação | Caminho |
|---|---|
| Variáveis | ícone **`Variables`** na barra de cima |
| Itens | ícone **`Datas`** → aba `Items` → fechar com **`Save and close`** |
| Comandos do objeto | duplo clique no objeto → evento `Hero action` → duplo clique na linha `>` |
| Mudar variável | aba `Structure` → `Change variables...` |
| Se / senão | aba `Structure` → `Condition...` (marcar **`Else`**) |
| Dar/tirar item | aba `Map` → `Modify inventory...` |
| Dar/tirar dinheiro | aba `Map` → `Modify currency...` |
| Sumir com objeto | aba `Staging` → `Remove object from map...` |
| Testar | **▶ Play** (`F5`) — anda com **WASD**, Enter fala, `Esc` abre o menu |

---

## Passo 0 — Projeto e mapa

1. `File > New project...` → nome `Missao da Flor` → modelo `Default`.
2. No `MAP0001`, pinte grama e um caminho. A flor vai ficar **longe** da Vovó
   (canto oposto do mapa) — andar até ela é parte da missão.

---

## Passo 1 — Item e variável

1. `Datas` → `Items` → linha `>` → item `Flor` (ícone qualquer, sem efeito,
   preço 0). `Save and close`.
2. Ícone `Variables` → numa linha livre, nome `missao`. Começa em 0 sozinha.

---

## Passo 2 — A Vovó

Objeto `Vovó` perto do início. Evento `Hero action`:

```text
Condition (variável missao = 0)
    Show text: "Oi, querido! Minha flor do vaso murchou..."
    Show text: "Me traz uma flor nova? Tem umas lá perto do lago."
    Change variables: missao = 1
Else
    Condition (variável missao = 1)
        Show text: "Ainda não achou? Fica lá perto do lago."
    Else
        Condition (variável missao = 2)
            Show text: "Que flor linda! Muito obrigada!"
            Modify inventory: - 1 Flor
            Modify currency: + 50
            Show text: "Toma, uma moedinha pra você."
            Change variables: missao = 3
        Else
            Show text: "Minha flor tá linda no vaso!"
```

Detalhes de clique:

- No `Condition...`: aba de **variável**, escolhe `missao`, operação `=`,
  número. Marque a caixa **`Else`** — é ela que cria o ramo "senão".
- Para chegar no marco mínimo (min 50), basta o **primeiro** nível
  (`missao = 0` / `Else` "Ainda não achou?"). Os outros ramos entram depois.

---

## Passo 3 — A flor

Objeto `Flor` (gráfico de planta/flor do Default) longe da Vovó. Evento
`Hero action`:

```text
Condition (variável missao = 1)
    Show text: "Você pegou a flor!"
    Modify inventory: + 1 Flor
    Change variables: missao = 2
    Remove object from map
Else
    Show text: "Que flor bonita."
```

**Teste obrigatório (é a avaliação da aula):**

1. ▶ Play → vai direto na flor → só "Que flor bonita.", ela **fica**.
2. Fala com a Vovó → volta na flor → ela some → `Esc` → `Items` → `Flor ×1`.
3. Volta na Vovó → agradece → `Items` sem flor, dinheiro +50.
4. Fala com a Vovó de novo → "Minha flor tá linda no vaso!".

Se o passo 1 falhar, o aluno ainda não entendeu o `Condition` — pare e
explique antes de seguir.

---

## Pergunta pra fazer no fim

"Por que a Vovó precisa da `missao`?"
**Resposta boa:** porque cada vez que fala com ela os comandos rodam do zero;
sem a variável ela não sabe o que já aconteceu.

---

## Parte 2 do DESAFIO (missão própria)

O que você corrige é a **receita**, não a história:

- [ ] Variável **nova** (ex.: `missao_gato`). Se ele reusar `missao`, as
      duas missões se misturam — deixe acontecer e pergunte por quê.
- [ ] NPC que dá (0 → 1), objeto que se pega (1 → 2), NPC que recebe (2 → 3).
- [ ] O objeto tem `Else` e `Remove object from map`.

---

## Gabarito do "Sobrou tempo"

1. **`Faceset` só no agradecimento:** no `Show text...` do ramo `missao = 2`,
   campo `Faceset` → escolher um retrato. Os outros ficam sem.
2. **3 flores:** 3 objetos `Flor`, cada um com
   `Condition missao = 1` → `+1 Flor` → `Remove object`. A Vovó no ramo
   `missao = 1` checa **item**: `Condition...` aba de item, `Flor >= 3`.
   (Ou outra variável `flores` que soma 1 por flor.) Aqui a `missao` pula de
   1 direto pra 3 na entrega — o valor 2 deixa de existir.
3. **NPC guarda:** `Condition missao = 3` → "Pode passar" + `Remove object from map`;
   `Else` → "Só passa quem ajudou a Vovó."

---

## Erros que vão acontecer

| Sintoma | Causa |
|---|---|
| Vovó pede a flor toda vez | `Change variables: missao = 1` ficou fora do ramo ou faltou |
| Vovó fala o pedido **e** "ainda não achou?" juntos | dois `Condition` soltos em vez de `Else` — o primeiro muda pra 1 e o segundo já vê 1 |
| Flor some antes da missão | `Remove object` fora do `Condition missao = 1` |
| Flor continua no menu depois de entregar | faltou `Modify inventory: - 1 Flor` |
| Item `Flor` não aparece na lista do `Modify inventory` | criou no `Datas` e fechou no `X` |
| Projeto sumiu | não exportou o `.zip` |
