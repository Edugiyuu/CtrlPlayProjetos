# Desafio — Jogo da Forca

**Tempo:** ~40 min · **Dificuldade:** ▓▓▓░░
**Arquivo que você cria:** `forca.py` (no mesmo local deste desafio).

---

## Aquecimento (5 min)

Sem olhar nada: escreva um `while` que fica pedindo um número ao jogador
(`input()`) até ele digitar `"0"`. Só isso — nenhuma lista, nenhuma forca
ainda. É só para lembrar a sintaxe de um loop que para por condição.

---

## O que fazer

Construa o jogo **nesta ordem**, testando a cada passo (não escreva tudo de
uma vez):

### 1. Palavra secreta e placar visual

- Crie uma variável com a palavra secreta, fixa por enquanto (ex.:
  `"python"`).
- Crie uma lista chamada `revelado` com o mesmo tamanho da palavra, em que
  cada posição começa como `"_"`.

### 2. Loop principal

- Crie um `while` que continua rodando enquanto o jogador ainda não tiver
  acertado a palavra toda (pense: que condição representa "ainda tem `_`
  sobrando em `revelado`"?). Sem limite de tentativas — o jogo só acaba
  quando acerta.

### 3. Pedir uma letra

- Dentro do loop, peça uma letra ao jogador com `input()`.

### 4. Comparar a letra com a palavra

- Percorra a palavra posição por posição (uma ferramenta que serve pra isso:
  `for i in range(len(palavra))`).
- Para cada posição, compare o caractere da palavra com a letra digitada.

### 5. Atualizar o que foi revelado

- Quando a letra bater numa posição, atualize **aquela posição** da lista
  `revelado` (lembra como se altera um item de uma lista pelo índice?).

### 6. Mostrar o progresso

- A cada rodada, mostre a lista `revelado` de um jeito legível (dica: dá pra
  juntar os itens de uma lista numa string só com `" ".join(lista)`).

### 7. Contar os erros e comemorar a vitória

- Crie um contador de erros, que aumenta quando a letra digitada não existe
  em nenhuma posição da palavra. Ele é só um placar — **não termina o
  jogo**, o jogador pode errar quantas vezes precisar até acertar.
- O jogo termina quando não sobrar nenhum `"_"` em `revelado`.
- Ao terminar, mostre uma mensagem de vitória junto com o total de erros
  cometidos (ex.: "Você venceu! Errou 4 vezes.").

---

## CHECK

Teste você mesmo, jogando contra o seu próprio jogo:

- [ ] Digitar uma letra que está na palavra revela **todas** as ocorrências
      dela (ex.: `python` tem um "o" só, mas teste com uma palavra que
      repete letra).
- [ ] Digitar uma letra que não está na palavra conta como erro, mas o jogo
      continua normalmente (não acaba).
- [ ] Errar várias vezes seguidas não trava nem termina o jogo — só aumenta
      o contador.
- [ ] Revelando todas as letras, o jogo termina e mostra a mensagem de
      vitória com o total de erros.
- [ ] Digitar a mesma letra duas vezes não trava nem quebra o jogo.

---

## Se travar, revise

- **Não sei nem por onde começar** → volta pro Aquecimento: o loop da forca
  é o mesmo tipo de `while`, só que a condição de parar é "ainda tem `_`
  em `revelado`" em vez de "digitou 0".
- **Não sei revelar só a posição certa** → é o mesmo tipo de coisa que
  alterar um item de uma lista pelo índice (`lista[indice] = valor`).
- **A palavra revelada não atualiza** → confira se você está alterando a
  lista `revelado` de verdade, ou só criando uma variável nova que se perde
  a cada volta do loop.
- **O jogo não para nunca** → releia a condição do seu `while`: ela depende
  de algo que muda dentro do loop (a lista `revelado` ou o contador de
  erros)?
- **Errei uma letra repetida e contou como 2 erros** → pensa em como saber
  se aquela letra específica já foi tentada antes.

---

## Se sobrar tempo

- Trocar a palavra fixa por um banco de várias palavras (lista) e sortear
  uma com `random.choice`.
- Mostrar um "boneco" da forca em ASCII que vai ganhando partes conforme o
  contador de erros sobe (mesmo sem o jogo acabar por causa disso).
- Separar palavras por categoria (animais, frutas, etc.) e deixar o jogador
  escolher a categoria.
- Jogar em grupo: um aluno escolhe a palavra secreta (sem os outros verem)
  e os outros dois tentam adivinhar, revezando a letra.

---

## Antes de fechar

No fim do `forca.py`, escreva **uma frase** em comentário: qual foi a parte
mais difícil de resolver e por quê.
