# Desafio — O guarda da entrada

**Tempo:** ~20 min · **Dificuldade:** ▓▓▓░░
**Onde você trabalha:** mapa `Vila de Treino`, projeto `Treino RPG`.
**Não** apague o aldeão que você já fez — ele fica.

A praça tem uma entrada só. Agora ela vai ter um **guarda**: alguém parado na
entrada que te avisa o que tem lá fora antes de você sair.

Você **monta o objeto e os comandos**. Aqui só tem o alvo, o efeito e o que
testar.

**Lembretes rápidos:**

- Objeto = coisa que **faz** algo. Árvore não é objeto; guarda é.
- Evento = **quando** acontece. Comando = **o que** acontece.
- Os comandos rodam de cima pra baixo, na ordem da lista.
- Salvar é `CTRL + S`. Testar é `CTRL + P`.

---

## Aquecimento (3 min)

Sem abrir nada, responda pro professor:

- O que é um objeto, com as suas palavras?
- Seu aldeão tem quantos comandos hoje? Em qual evento eles estão?

---

## O que fazer

### 1. Colocar o guarda na entrada

- Alvo: um personagem parado bem no vão de entrada da praça.
- Crie um objeto nesse square e dê um **gráfico** de personagem pra ele.
- Troque o `Name` do objeto para `Guarda` (o nome `OBJ:0002` não ajuda
  ninguém).
- **Teste agora:** no jogo, tem uma pessoa em pé na entrada da praça.

### 2. Fazer o guarda falar duas coisas

- Alvo: ao apertar ação de frente pra ele, ele fala **duas** caixas seguidas.
- A primeira avisa sobre a floresta. A segunda diz o que ele faria no seu
  lugar.
- Use o comando de mostrar texto, duas vezes, no evento `Hero action`.
- Preencha o `Interlocutor` das duas com `Guarda`.
- **Teste agora:** aperta ação → aparece a fala 1 com o nome `Guarda` em cima
  → aperta de novo → aparece a fala 2 → fecha.

### 3. Deixar o guarda vigiando

- Alvo: o guarda olha em volta em vez de ficar congelado.
- Na parte de movimento do objeto (`Moving`), mude o tipo para o que faz ele
  se mexer sozinho, e deixe a velocidade **lenta**.
- **Teste agora:** ele anda um pouquinho pra lá e pra cá, e continua falando
  quando você aperta ação nele.

### 4. Um segundo morador

- Alvo: mais uma pessoa na praça, com uma fala só, com nome próprio.
- Crie o objeto, dê gráfico, nome e **uma** fala.
- **Teste agora:** existem 3 pessoas na sua praça (aldeão, guarda, morador
  novo) e cada uma fala uma coisa diferente.

---

## CHECK

- [ ] O guarda aparece na entrada e tem nome no `Name` do objeto.
- [ ] Ele fala duas caixas em sequência, na ordem certa.
- [ ] O nome `Guarda` aparece na caixa de fala.
- [ ] Você consegue dizer **por que** a segunda fala só aparece depois da
      primeira.
- [ ] O guarda se move sozinho.
- [ ] Tem um terceiro personagem na praça, com fala própria.
- [ ] Você consegue dizer **qual é a diferença** entre o evento e o comando.

---

## Se travar, revise

- **Clico duplo no mapa e não abre a janela do objeto** → você não está na aba
  `Object`.
- **O guarda não aparece no jogo** → objeto sem gráfico. Ele existe e até
  funciona, mas está invisível.
- **Chego perto, aperto, e não acontece nada** → confira se a fala está no
  evento `Hero action` e se você está **de frente** pra ele.
- **A fala aparece sozinha quando entro no mapa** → o comando foi parar no
  lugar errado; ele tem que estar no `Hero action` do objeto.
- **Só aparece uma fala** → confira se os dois comandos estão um embaixo do
  outro na mesma lista.
- **Testei e continua igual ao de antes** → faltou `CTRL + S`.

---

## Antes de fechar

1. `File > Export project...` e guarde o `.zip` no pendrive/Drive.
2. Escreva uma frase (caderno ou chat da aula): *qual a diferença entre
   objeto, evento e comando?*

---

## Se sobrar tempo

1. Faça uma **placa** que fala (objeto com gráfico de placa, uma fala curta).
2. Faça dois NPCs conversando: um objeto com 3 falas, alternando o
   `Interlocutor` entre dois nomes.
3. Toque um som junto com a fala de alguém.
