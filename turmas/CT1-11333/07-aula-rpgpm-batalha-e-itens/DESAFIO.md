# Desafio — O covil

**Tempo:** ~20 min · **Dificuldade:** ▓▓▓▓░
**Onde você trabalha:** `Datas` e mapas `Caverna` e `Floresta`, projeto
`A Vila e a Caverna`.
**Não** apague o monstro nem o baú que já funcionam.

O chefe está na caverna e dá pra lutar com ele. Mas uma luta que você ganha
sem pensar não é uma luta. Agora você vira **game designer**: ajusta os
números até o jogo ficar bom.

Você **mexe no jogo e testa**. Aqui só tem o alvo, o efeito e o que testar.

**Lembretes rápidos:**

- `Monsters` = a ficha. `Troops` = quem vem junto na luta. Objeto no mapa =
  onde acontece.
- Criar no `Datas` não coloca nada no mapa.
- Os comandos rodam de cima pra baixo.
- Feche o `Datas` com **`Save and close`**, não com o `X`.

---

## Aquecimento (3 min)

Sem abrir nada, responda pro professor:

- Quantas coisas você teve que criar pra existir um monstro na caverna?
- O que o `Modify inventory...` faz que criar a poção no `Datas` não faz?

---

## O que fazer

### 1. Balancear o chefe

- Alvo: a luta contra o chefe tem que ser **ganhável, mas apertada** — você
  termina com pouca vida.
- Jogue a luta. Anote quantos golpes você levou e quantos deu.
- Se ganhou fácil: aumente a vida ou o ataque do monstro no `Datas`.
- Se perdeu sem chance: diminua.
- Repita até ficar bom. **Teste pelo menos 3 vezes.**
- **Teste agora:** você consegue descrever pro professor o que mudou entre a
  primeira e a última versão da luta, com números.

### 2. Um capanga na floresta

- Alvo: a floresta tem um bicho mais fraco, e dá pra **fugir** dele.
- Crie a ficha de um monstro fraco, o grupo dele, e um objeto na floresta que
  inicia essa batalha.
- Nas opções da batalha, deixe a fuga permitida e **desmarque** o que faz
  perder acabar o jogo.
- **Teste agora:** você luta com o bicho da floresta, tenta fugir e consegue.

### 3. Recompensa de verdade

- Alvo: vencer o chefe tem que dar alguma coisa além de "ele sumiu".
- Depois da batalha do chefe, entregue ao jogador um item ou moedas.
- Escreva uma fala de vitória que diga o que ele ganhou.
- **Teste agora:** ao vencer, aparece a fala e o item está no inventário.

### 4. O covil fechado

- Alvo: o fundo da caverna parece o covil de um chefe, não um canto qualquer.
- Decore em volta do monstro, feche os lados, deixe só um caminho de entrada.
- **Teste agora:** dá pra chegar no chefe por um caminho só, e o lugar parece
  o fim do jogo.

---

## CHECK

- [ ] A luta do chefe é difícil mas ganhável (você testou pelo menos 3 vezes).
- [ ] Você consegue dizer **quais números** você mudou e por quê.
- [ ] Existe um monstro mais fraco na floresta, do qual dá pra fugir.
- [ ] Vencer o chefe entrega alguma recompensa ao jogador.
- [ ] Você consegue dizer **por que** perder pro chefe acaba o jogo e perder
      pro bicho da floresta não.
- [ ] O covil está fechado e tem um caminho só.

---

## Se travar, revise

- **A batalha chama o monstro errado** → o grupo escolhido tem outro bicho
  dentro. Confira no `Datas > Troops`.
- **O monstro some antes de falar** → o comando de remover está antes dos
  outros. Ordem: falar → lutar → falar → sumir.
- **Venci e ele continua lá** → falta o comando de remover do mapa.
- **Perdi e o jogo fechou** → é o certo para o chefe; para o bicho da floresta,
  desmarque a opção de game over.
- **Mudei os números e nada mudou no jogo** → você fechou o `Datas` no `X` em
  vez de `Save and close`, ou faltou `CTRL + S`.
- **A poção não está no inventário** → falta o comando que entrega o item.

---

## Antes de fechar

1. `File > Export project...` → `.zip` no pendrive/Drive.
2. Escreva uma frase: *o que você mudou pra luta ficar boa, e como você
   soube que estava boa?*

---

## Se sobrar tempo

1. Crie uma loja na vila que vende poção (lembre que o jogador precisa ter
   dinheiro antes).
2. Coloque uma música de batalha diferente.
3. Crie um segundo item (chave, bomba, o que você quiser) e esconda num baú.
4. Faça o bicho da floresta aparecer em dois lugares diferentes.
