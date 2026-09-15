# Desafio — O caminho inteiro

**Tempo:** ~20 min · **Dificuldade:** ▓▓▓░░
**Onde você trabalha:** mapas `Floresta` e `Caverna`, projeto
`A Vila e a Caverna`.
**Não** apague os dois portais que já funcionam entre a `Vila` e a `Floresta`.

Vila e floresta já estão ligadas. Falta a parte mais importante: chegar na
**caverna** — e conseguir sair dela vivo.

Você **monta os objetos e os teleportes**. Aqui só tem o alvo, o efeito e o
que testar.

**Lembretes rápidos:**

- O comando de teleporte faz duas perguntas: **quem** vai e **para onde**.
- Quem vai é o `> Hero`.
- **Ida e volta são dois objetos diferentes**, um em cada mapa.
- O herói tem que cair **ao lado** do portal de volta, nunca em cima.

---

## Aquecimento (3 min)

Sem abrir nada, responda pro professor:

- Por que o portal da vila não serve pra voltar da floresta?
- O portal tem gráfico? Como ele funciona sendo invisível?

---

## O que fazer

### 1. Entrar na caverna

- Alvo: quem chega no fim do caminho da floresta entra na caverna.
- Crie um objeto invisível no último square do caminho da floresta.
- Dê a ele o comando de teleporte, mandando o **herói** para a entrada da
  `Caverna`.
- **Teste agora:** você sai da vila, atravessa a floresta e a tela troca pra
  caverna.

### 2. Sair da caverna

- Alvo: dá pra voltar da caverna pra floresta andando até a entrada.
- Crie o objeto de volta **dentro da caverna** e mande o herói de volta pra
  floresta.
- Cuidado com o ponto de chegada: ele não pode cair em cima do portal que leva
  pra caverna, senão você entra e sai sem parar.
- **Teste agora:** você entra na caverna, dá meia-volta, sai, e **fica** na
  floresta.

### 3. Marcar o covil

- Alvo: o fundo da caverna precisa parecer o lugar onde mora alguma coisa
  ruim.
- Deixe um espaço aberto no fundo e decore em volta (ossos, pedras, cristais,
  o que o tileset tiver) — mas **deixe o meio vazio**.
- **Teste agora:** andando até o fundo, dá pra sentir que ali é o lugar do
  chefe. O espaço do meio continua vazio (é da próxima aula).

### 4. A travessia completa

- Alvo: provar que o mundo inteiro funciona nos dois sentidos.
- Rode o jogo do começo e faça o percurso: **Vila → Floresta → Caverna →
  Floresta → Vila**, sem tocar no editor.
- **Teste agora:** você fez o caminho inteiro de ida e volta sem travar,
  sem loop e sem ficar preso em pedra.

---

## CHECK

- [ ] Os 4 teleportes existem e funcionam (2 entre vila e floresta, 2 entre
      floresta e caverna).
- [ ] Você consegue dizer **por que** são 4 e não 2.
- [ ] Nenhum teleporte entra em loop.
- [ ] O fundo da caverna está decorado com o meio vazio.
- [ ] Você consegue dizer **o que** acontece se o ponto de chegada cair em
      cima do portal de volta.
- [ ] Deu pra fazer Vila → Caverna → Vila inteiro sem mexer no editor.

---

## Se travar, revise

- **Piso no portal e não acontece nada** → o comando não está no `Hero action`,
  ou o objeto está num square onde o herói não consegue pisar.
- **Entro e saio da caverna sem parar** → loop: o destino está em cima do
  portal de volta. Mova o destino 1 ou 2 squares adiante.
- **Chego preso dentro de uma pedra** → escolha um square de destino livre.
- **Fui parar no mapa errado** → confira o `Map ID` do destino na janela do
  teleporte.
- **Quem teleportou não fui eu** → o campo de quem vai não está como `> Hero`.
- **Funciona no editor mas não no teste** → faltou `CTRL + S`.

---

## Antes de fechar

1. `File > Export project...` → `.zip` no pendrive/Drive.
2. Escreva uma frase: *por que um teleporte de ida não serve de volta?*

---

## Se sobrar tempo

1. Escureça a caverna com o comando que muda a cor da tela.
2. Coloque uma música diferente em cada mapa.
3. Toque um som no momento de entrar na caverna.
4. Feche a floresta com árvores até só existir **um** caminho possível.
