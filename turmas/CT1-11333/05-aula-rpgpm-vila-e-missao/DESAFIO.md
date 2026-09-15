# Desafio — A vila viva

**Tempo:** ~20 min · **Dificuldade:** ▓▓▓░░
**Onde você trabalha:** mapa `Vila`, projeto `A Vila e a Caverna`.
**Não** mexa nos mapas `Floresta` e `Caverna` — eles são da próxima aula.

O chefe já te deu a missão. Mas uma vila com uma pessoa só é uma vila
abandonada. Agora você põe **mais gente** — e um deles vai te dar uma dica que
salva sua vida na caverna.

Você **monta os objetos e os comandos**. Aqui só tem o alvo, o efeito e o que
testar.

**Lembretes rápidos:**

- NPC é objeto: aba `Object`, clique duplo num square vazio.
- Objeto sem `Graphics` fica invisível no jogo.
- A fala vai no evento `Hero action`, com o comando de mostrar texto.
- Os comandos rodam de cima pra baixo.

---

## Aquecimento (3 min)

Sem abrir nada, responda pro professor:

- Quais são as 3 coisas que a fala do chefe precisava dizer?
- Se o jogador pular a conversa com o chefe, ele descobre o que fazer?

---

## O que fazer

### 1. A moradora que dá a dica

- Alvo: um NPC que avisa que o monstro é forte e que é bom levar uma poção.
- Crie o objeto, dê gráfico e coloque `Name` no objeto.
- Duas falas: a primeira reclama do monstro, a segunda dá a **dica prática**.
- Preencha o `Interlocutor`.
- **Teste agora:** ao falar com ela, você aprende algo que o chefe não disse.

### 2. A criança da vila

- Alvo: um NPC pequeno que anda sozinho pela vila e fala uma coisa curta.
- Use a parte de movimento do objeto pra ele andar sozinho, devagar.
- **Teste agora:** ele se move sem você fazer nada e fala quando você aperta
  ação nele.

### 3. A placa da saída

- Alvo: quem chega na vila entende por onde se sai.
- Crie um objeto na beira do caminho que sai da vila, com uma fala curta
  dizendo o que tem pra lá.
- **Teste agora:** você anda até a saída, aperta ação na placa e ela te diz
  pra onde aquele caminho vai.

### 4. Teste de jogador de verdade

- Alvo: descobrir se o **seu jogo** se explica sozinho.
- Feche o editor, rode o jogo do começo e finja que nunca viu isso antes.
- Fale com os 4 NPCs na ordem que quiser.
- **Teste agora:** responda em voz alta pro professor: *o que o jogo está me
  mandando fazer, e pra onde eu tenho que ir?* Se você não conseguir responder
  só com as falas, **volte e conserte as falas**.

---

## CHECK

- [ ] A vila tem pelo menos 4 NPCs, cada um com nome no objeto e fala própria.
- [ ] A moradora dá uma dica que o chefe não deu.
- [ ] A criança anda sozinha.
- [ ] A placa da saída diz pra onde vai o caminho.
- [ ] Você consegue dizer **por que** um jogo precisa dizer "o quê" **e**
      "onde", não só "me ajuda".
- [ ] Jogando do começo, dá pra entender a missão só conversando.

---

## Se travar, revise

- **Clique duplo não abre a janela do objeto** → você não está na aba `Object`.
- **O NPC não aparece no jogo** → faltou `Graphics`.
- **Aperto ação e não acontece nada** → o comando não está no `Hero action`,
  ou você não está de frente pro NPC.
- **A criança some da vila** → movimento aleatório: ela anda pra qualquer lado.
  Ou aceite, ou volte o movimento pra parado.
- **Pintei/criei e não apareceu no teste** → faltou `CTRL + S`.
- **Estou editando e nada bate com o jogo** → confira se o mapa aberto é o
  `Vila` e não o `Starting map` de exemplo.

---

## Antes de fechar

1. `File > Export project...` → `.zip` no pendrive/Drive. **Este projeto é o
   seu jogo final** — sem o `.zip`, quatro aulas moram só neste PC.
2. Escreva uma frase: *o que ainda falta pro seu jogo ser jogável do começo ao
   fim?*

---

## Se sobrar tempo

1. Coloque música na vila.
2. Dê um retrato (`Faceset`) ao chefe da vila.
3. Faça um NPC que fala como se fosse duas pessoas conversando (alternando o
   `Interlocutor`).
4. Comece a pintar o chão do mapa `Floresta` — **sem** ligar ele na vila.
