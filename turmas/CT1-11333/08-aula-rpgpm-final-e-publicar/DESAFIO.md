# Desafio — O jogo que lembra

**Tempo:** ~20 min · **Dificuldade:** ▓▓▓▓░
**Onde você trabalha:** o projeto `A Vila e a Caverna` inteiro.
**Regra de hoje:** nada de ideia nova. Hoje é **terminar**.

Seu jogo tem vila, floresta, caverna, chefe e agora memória. Falta a parte que
todo jogo de verdade tem e que ninguém vê: alguém jogar do começo ao fim
procurando o que está quebrado — e consertar.

Hoje você é **testador** e depois **publicador**.

**Lembretes rápidos:**

- Variável = caixinha onde o jogo guarda um número durante a partida.
- `Change variables...` **escreve** na caixinha. `Condition...` **lê**.
- Os comandos da condição ficam **dentro** dela, não embaixo.
- `CTRL + E` salva o `.zip`. `File > Deploy...` publica o jogo.

---

## Aquecimento (3 min)

Sem abrir nada, responda pro professor:

- O que a variável `missao` guarda, e quem muda o valor dela?
- Se eu apagar o comando que escreve na variável, o que quebra na vila?

---

## O que fazer

### 1. Jogar como jogador, não como criador

- Alvo: descobrir o que está errado **antes** de outra pessoa descobrir.
- Jogue do zero, do início ao fim, **sem tocar no editor**, fingindo que é a
  primeira vez.
- Vá anotando numa lista **tudo** que estiver estranho: fala com erro de
  português, NPC no lugar errado, luta fácil demais, lugar onde dá pra ficar
  preso, portal que não funciona.
- **Teste agora:** você tem uma lista escrita com pelo menos 3 problemas.

### 2. Consertar o que dá em 10 minutos

- Alvo: os problemas mais chatos resolvidos.
- Escolha da sua lista os 3 mais importantes e conserte **só esses**.
- O resto vai pra uma lista chamada "versão 2" — ela não é fracasso, é
  planejamento.
- **Teste agora:** jogue de novo o trecho que você consertou e confirme.

### 3. Dois finais possíveis?

- Alvo: provar pra você mesmo que a memória do jogo funciona.
- Fale com o chefe da vila **antes** de ir na caverna: ele pede ajuda.
- Vá, vença o monstro, volte e fale de novo: ele agradece e o jogo termina.
- **Teste agora:** as duas conversas são diferentes, e você não mexeu em nada
  entre elas.

### 4. Publicar

- Alvo: o jogo sai do editor e vira um jogo de verdade.
- Use `File > Deploy...` e gere a versão que roda no navegador (web).
- Guarde a pasta gerada **e** o `.zip` do projeto no seu pendrive/Drive.
- **Teste agora:** abra o `index.html` da pasta gerada e jogue o seu jogo fora
  do editor.

---

## CHECK

- [ ] Você jogou do início ao fim sem tocar no editor.
- [ ] Você tem uma lista escrita de problemas e consertou pelo menos 3.
- [ ] O chefe da vila fala coisas diferentes antes e depois da vitória.
- [ ] Você consegue dizer **onde** o jogo guarda que você já venceu.
- [ ] O jogo tem um fim (ele termina, não fica solto).
- [ ] O jogo publicado abre e roda fora do editor.
- [ ] O `.zip` e a pasta publicada estão no seu pendrive/Drive.

---

## Se travar, revise

- **O chefe nunca agradece** → confira se o comando que escreve na variável
  está mesmo no monstro da caverna, e se a condição compara com o mesmo valor.
- **Ele agradece desde o começo** → a condição está invertida, ou a variável
  não começa em zero.
- **As duas falas aparecem na mesma conversa** → os comandos estão embaixo da
  condição, não dentro dela.
- **O jogo não termina** → falta o comando de voltar pro título no fim.
- **O `Deploy` não gerou nada** → espere terminar e procure na pasta de
  downloads do navegador.
- **O jogo publicado abre em branco** → abra o `index.html` de dentro da pasta
  gerada, sem tirar os arquivos do lugar.

---

## Antes de fechar

1. `CTRL + E` (o `.zip`) **e** a pasta do `Deploy`, os dois guardados.
2. Escreva **3 frases** contando o seu jogo pra alguém que nunca viu: o que
   é, o que o jogador faz, como termina. Guarde — é isso que você vai falar
   se apresentar o jogo.

---

## Se sobrar tempo

1. Outro NPC da vila que também muda de fala depois da vitória.
2. Uma segunda variável que conte quantas poções você pegou, e um NPC que
   comenta sobre isso.
3. Coloque o nome do seu jogo na tela de título.
4. Música de vitória no final.
