# Gabarito do DESAFIO.md — para o professor

Versão usada: **RPG Paper Maker 3.2.14 (web)**.
Ponto de partida (fim da aula, antes do desafio): monstro na caverna com as 4
etapas de comando funcionando, `Poção` criada e baú na floresta entregando 2.

---

## Caminhos de clique desta aula

| Ação | Caminho exato |
|---|---|
| Abrir o banco de dados | ícone **`Datas`** na barra de cima (`Data manager...`) |
| Criar monstro | aba `Monsters` → clicar na linha `>` no fim da lista → preencher `Name` e as estatísticas |
| Criar grupo | aba `Troops` → linha `>` → adicionar o monstro ao grupo |
| Criar item | aba `Items` → linha `>` → `Name` + efeito |
| Fechar o `Datas` | **`Save and close`** (nunca o `X`) |
| Comando de batalha | objeto → comandos → aba `Battle` → `Start a battle...` |
| Escolher o grupo | dentro do `Start a battle...`, `Troop ID` → `Selection` → o grupo |
| Entregar item | aba `Map` → `Modify inventory...` |
| Dar dinheiro | aba `Map` → `Modify currency...` |
| Loja | aba `Map` → `Start shop menu...` (tabela `Item / Price / Stock`) |
| Sumir com o objeto | aba `Staging` → `Remove object from map...` |

> O projeto `Default` já vem com um grupo `0001: Wooly[1]`. Se o tempo
> apertar, **use ele** para a primeira batalha e crie o chefe só depois — ter
> a luta rodando cedo vale mais do que ter o monstro "certo".

---

## Tabela de balanceamento (ponto de partida)

O herói do projeto `Default` começa nível 1 com HP na casa dos 20–30. Use
estes valores como **chute inicial** e ajuste testando:

| Inimigo | Vida | Ataque | Fuga | Game Over | Resultado esperado |
|---|---|---|---|---|---|
| Bicho da floresta | ~15 | baixo | ✅ permitida | ❌ desmarcado | Ganha em 2–3 golpes |
| Chefe da caverna | ~50–70 | médio | ❌ negada | ✅ marcado | Ganha por pouco, usando 1 poção |

Se em 3 testes ele nunca precisou da poção, o chefe está fraco.
Se ele perde 3 vezes seguidas sem chegar perto, está forte demais.

**Regra que ele tem que sair sabendo:** mexer **um número por vez**.

---

## Parte 1 — Balancear o chefe

Não tem estado "certo": o critério é o **processo**. Ele tem que conseguir
dizer "estava com 30 de vida, eu ganhava em dois golpes, subi pra 60 e ficou
bom". Se ele mudou 4 coisas ao mesmo tempo, peça pra refazer mudando uma.

Esta é a parte da aula que mais vale: é a primeira vez no CT1 que ele testa,
mede e ajusta em vez de só montar.

---

## Parte 2 — Capanga na floresta

Estado esperado: ficha nova (ou o `Wooly` padrão), grupo próprio, objeto na
floresta com `Start a battle...`, `Allow escape` **marcado** e
`Defeat causes Game Over` **desmarcado**.

**Resposta esperada a "por que a diferença":** "porque o chefe é o objetivo do
jogo, perder pra ele é perder o jogo; o bicho da floresta é só obstáculo".

⚠️ Se ele esquecer o `Remove object from map...` nesse, o bicho fica lutando
toda vez que passa por cima. Bom momento pra ele descobrir sozinho no teste.

---

## Parte 3 — Recompensa

Estado esperado: depois do `Start a battle...` do chefe, um
`Modify inventory...` (item) ou `Modify currency...` (moedas) e um
`Show text...` avisando.

Ordem final do monstro, com a recompensa:

1. `Show text...` (provocação)
2. `Start a battle...`
3. `Modify inventory...` ou `Modify currency...`
4. `Show text...` (vitória + o que ganhou)
5. `Remove object from map...`

---

## Parte 4 — O covil fechado

Só decoração do mapa `Caverna`: paredes/sprites fechando os lados, um caminho
de entrada. Sem comando novo.

---

## Estado final esperado

Projeto `A Vila e a Caverna`:

- `Datas > Monsters`: chefe + bicho fraco
- `Datas > Troops`: um grupo para cada
- `Datas > Items`: `Poção`
- `Caverna`: objeto `Monstro` com 5 comandos, covil fechado
- `Floresta`: baú com poções + bicho fraco
- Luta do chefe testada pelo menos 3 vezes e ajustada
- `.zip` exportado

---

## Gabarito do "Se sobrar tempo"

1. **Loja na vila:** objeto NPC com `Map > Start shop menu...`; adicionar
   `Poção` na tabela com `Price` e `Stock`. ⚠️ Antes, dar dinheiro ao jogador
   (`Map > Modify currency...`) ou a loja é inútil — ele vai descobrir isso
   testando, e é uma ótima descoberta.
2. **Música de batalha:** `Battle > Change battle music...`.
3. **Segundo item:** `Datas > Items` + baú com `Modify inventory...`.
4. **Bicho em dois lugares:** dois objetos diferentes chamando o **mesmo**
   grupo — boa demonstração de que o grupo é reutilizável.

---

## Se a batalha não fechou

Marco mínimo é **a batalha do chefe rodando**. Se faltou item/baú, a #8 abre
com isso em 10 min e corta a loja e a tela de título. O que **não** pode faltar
na #8 é: variável da missão, jogar do início ao fim, e exportar.
