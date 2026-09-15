# Gabarito do DESAFIO.md — para o professor

Versão usada: **RPG Paper Maker 3.2.14 (web)**.
Ponto de partida (fim da aula, antes do desafio): projeto `A Vila e a Caverna`
com 3 mapas criados, `Vila` pintada, `Start position` na vila e o objeto
`Chefe da Vila` com 3 falas.

---

## O roteiro do jogo (seu, não do aluno)

Guarde isto: é o mapa mental das 4 aulas. Quando ele propuser coisa nova, você
checa aqui se cabe.

| Elemento | Onde | Entra na aula |
|---|---|---|
| `Chefe da Vila` — dá a missão | Vila | #5 |
| Moradora — dica da poção | Vila | #5 |
| Criança — ambienta | Vila | #5 |
| Placa da saída | Vila | #5 |
| Teleporte Vila ↔ Floresta | borda dos mapas | #6 |
| Teleporte Floresta ↔ Caverna | borda dos mapas | #6 |
| Baú com poção | Floresta | #7 |
| Monstro + batalha | Caverna | #7 |
| Variável `missao` + final | Vila / Caverna | #8 |
| Publicar (`Deploy...`) | — | #8 |

---

## Falas de referência do chefe (modelo, não roteiro obrigatório)

O texto é dele. O que você corrige é a **estrutura**, não o estilo:

1. `Você chegou em boa hora. Eu sou o chefe desta vila.`
   → quem pede
2. `Um monstro tomou conta da caverna e ninguém consegue mais pegar água.
   Preciso que alguém acabe com ele.`
   → o que quer
3. `A caverna fica depois da floresta, seguindo o caminho para o norte.`
   → onde fica

**Teste de correção:** leia só as falas em voz alta, sem explicar nada, e
pergunte "pra onde você vai agora?". Se ele hesitar, falta informação — e o
conserto é dele, não seu.

---

## Parte 1 — A moradora que dá a dica

Estado esperado: objeto com `Name`, `Graphics`, 2 × `Show text...` no
`Hero action`, `Interlocutor` preenchido, e a segunda fala citando **poção**.

Por que isso importa: na aula #7 vai existir uma poção de verdade no baú. A
fala de hoje é o que faz o jogador procurar. Diga isso pra ele — material que
"prepara" uma aula futura motiva.

---

## Parte 2 — A criança

Estado esperado: objeto com `Moving > Type: Random`, `Speed: Slow` e 1 fala.

Pegadinha: com `Random` ela sai andando pra longe. É esperado. Não vá pra
`Edit route...` (escopo demais para 1h30).

---

## Parte 3 — A placa da saída

Estado esperado: objeto perto da borda por onde o caminho sai da vila, com 1
fala curta indicando a floresta.

⚠️ **Importante para a aula #6:** confira que o caminho realmente **chega até a
borda do mapa** e que tem 2 ou 3 squares livres ali. É onde o teleporte vai
ser colocado na próxima aula. Se a vila estiver fechada por árvores em volta
inteira, peça pra abrir a passagem agora.

---

## Parte 4 — Teste de jogador de verdade

Não é enfeite, é a avaliação da aula. Ele roda do começo e responde sozinho
"o que eu tenho que fazer e pra onde eu vou".

**Resposta esperada:** alguma versão de "matar o monstro da caverna, que fica
depois da floresta, e é bom levar poção". Se ele responder usando coisa que
está na **cabeça** dele e não nas falas, mostre a diferença — é o aprendizado
mais valioso da aula.

---

## Estado final esperado

Projeto `A Vila e a Caverna`:

- `Maps` com `Vila`, `Floresta` (vazia), `Caverna` (vazia)
- `Vila` pintada, com caminho chegando até a borda, `Start position` no meio
- 4 objetos na vila: `Chefe da Vila` (3 falas), moradora (2 falas, dica da
  poção), criança (1 fala, `Random`), placa (1 fala)
- `.zip` exportado

---

## Gabarito do "Se sobrar tempo"

1. **Música na vila:** propriedades do mapa (botão direito no nome do mapa) →
   campo de música.
2. **`Faceset` do chefe:** dentro do `Show text...`, campo `Faceset` → escolher
   um retrato.
3. **NPC com dois interlocutores:** 3 × `Show text...` alternando o campo
   `Interlocutor`.
4. **Começar a floresta:** só `Floor`. **Não** colocar teleporte hoje — é a
   abertura da #6 e é o gancho que segura o interesse dele.

---

## Se a vila não ficou pronta

Marco mínimo é `Vila` jogável + chefe com a missão. Se faltou decoração,
**não** volte pra decorar na #6: a #6 abre com teleporte, que é o que
transforma três mapas soltos em um jogo. Decoração vira "se sobrar tempo"
permanente.
