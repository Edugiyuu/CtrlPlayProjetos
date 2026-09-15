# Gabarito do DESAFIO.md — para o professor

Versão usada: **RPG Paper Maker 3.2.14 (web)**.
Ponto de partida (fim da aula, antes do desafio): variável `missao` criada e
escrita na caverna, condição no chefe da vila funcionando nos dois casos,
`Title screen` no final.

---

## Caminhos de clique desta aula

| Ação | Caminho exato |
|---|---|
| Criar variável | ícone **`Variables`** na barra de cima → criar → nomear `missao` |
| Escrever na variável | objeto → comandos → aba `Structure` → `Change variables...` |
| Ler a variável | objeto → comandos → aba `Structure` → `Condition...` |
| Terminar o jogo | aba `Map` → `Title screen` (ou `Game over`) |
| Publicar | `File > Deploy...` → escolher web e/ou desktop |
| Exportar projeto | `CTRL + E` (`File > Export project...`) |

---

## A montagem exata da memória do jogo

### 1. No objeto `Monstro` (mapa `Caverna`)

Ordem final dos comandos:

1. `Show text...` — provocação
2. `Battle > Start a battle...` — a luta
3. **`Structure > Change variables...` → `missao` = `1`** ← novo hoje
4. `Map > Modify inventory...` ou `Modify currency...` (recompensa, se existe)
5. `Show text...` — vitória
6. `Staging > Remove object from map...`

O passo 3 pode ficar em qualquer ponto **depois** da batalha. Antes dela é
errado: o jogo passaria a achar que ele venceu só por chegar perto — e isso é
um ótimo "e se?" pra perguntar a ele.

### 2. No objeto `Chefe da Vila` (mapa `Vila`)

```text
Condition (missao = 1)
    Show text: "Você conseguiu! A vila tem água de novo!"
    Show text: "Obrigado, herói."
    Title screen
Else
    Show text: "Você chegou em boa hora. Eu sou o chefe desta vila."
    Show text: "Um monstro tomou a caverna..."
    Show text: "A caverna fica depois da floresta."
```

As falas do `Else` são exatamente as três da aula #5 — **mova** as existentes
pra dentro do `Else` em vez de reescrever.

⚠️ **O erro que vai acontecer:** ele adiciona a condição e deixa as falas
antigas embaixo dela, fora dos dois ramos. Resultado: o chefe fala a vitória
**e** a missão na mesma conversa. Deixe acontecer no teste — mostrar o bug é
melhor do que evitá-lo — e conserte junto mostrando o encaixe dos comandos.

### Alternativa (só se ele travar feio na condição)

O RPG Paper Maker também resolve isso com **estados** do objeto (`States` na
janela do objeto + `Map > Change state...`): um estado "antes" e um "depois".
Funciona e é mais visual. **Mas é específico da ferramenta** — variável e
condição são o que ele vai reencontrar em Scratch, Python e JS. Só troque se
a alternativa for ele sair sem nada funcionando.

---

## Parte 1 — Jogar como jogador

Não ajude e não conserte nada durante o playtest. **Anote junto com ele.**
Uma lista com 3+ itens é o resultado esperado; se ele disser "está tudo
perfeito", jogue você e aponte duas coisas — sempre tem.

---

## Parte 2 — Consertar 3 e listar o resto

O aprendizado aqui é **escopo**: escolher o que cabe no tempo e escrever o
resto em vez de tentar tudo. A lista "versão 2" é entrega da aula, não
consolo.

---

## Parte 3 — Antes × depois

**Resposta esperada a "onde o jogo guarda que você venceu":** "numa variável
chamada `missao`, que o monstro muda pra 1 quando morre". Se ele responder "no
monstro que sumiu", corrija: sumir é efeito, não memória.

Teste completo: falar com o chefe **antes**, ir, vencer, voltar, falar
**depois** — sem tocar no editor entre as duas.

---

## Parte 4 — Publicar

`File > Deploy...` → versão web. Demora; avise. Gera uma pasta com
`index.html` e os arquivos ao lado — **não mover nada de lugar**, ou abre em
branco.

Ele leva **duas** coisas:

| O quê | Para quê |
|---|---|
| `.zip` do `Export project...` | Continuar editando depois (é o projeto) |
| Pasta do `Deploy...` | Jogar e mostrar pra alguém (é o jogo) |

---

## Checklist final do bloco de 6 aulas

Marque com ele, em voz alta. É o fechamento do bloco:

- [ ] O jogo abre e o herói nasce na vila
- [ ] O chefe da vila explica a missão (o quê + onde)
- [ ] Dá pra ir Vila → Floresta → Caverna e voltar
- [ ] Tem um baú com poção
- [ ] Tem um chefe, a luta é apertada e ganhável
- [ ] Vencer registra na variável
- [ ] O chefe da vila reage diferente depois
- [ ] O jogo termina
- [ ] O jogo roda fora do editor
- [ ] Ele consegue contar o jogo em 3 frases

---

## Gabarito do "Se sobrar tempo"

1. **Outro NPC que muda:** mesma `Condition (missao = 1)` no outro objeto. Boa
   demonstração de que **uma** variável serve pro jogo inteiro.
2. **Segunda variável:** `pocoes_pegas`; `Change variables...` no baú;
   condição num NPC. Aqui dá pra mostrar que variável guarda **contagem**, não
   só sim/não.
3. **Nome na tela de título:** ícone `Systems` → título do jogo.
4. **Música de vitória:** `Map > Play a music...` dentro do ramo da vitória,
   antes do `Title screen`.

---

## Se a variável não fechou

Marco mínimo é **variável escrita + condição lida + antes e depois
funcionando**. Se não deu, publique mesmo assim (`Deploy`) — ele **precisa**
sair com o jogo na mão. Anote no despejo que a variável ficou pela metade: se
o RPG Paper Maker voltar mais pra frente, é por aí que se recomeça.
