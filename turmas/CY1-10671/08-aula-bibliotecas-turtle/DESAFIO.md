# Desafio — Sua galeria de desenhos

**Tempo:** ~30 min · **Dificuldade:** ▓▓░░░
**Arquivo que você edita:** `desenho.py`
**Nunca** salve seu arquivo com o nome `turtle.py` — isso quebra tudo.

Você já tem um quadrado desenhando na tela. Agora ele vira um **carimbo**: um
desenho com nome, que você usa várias vezes, em tamanhos e cores diferentes,
sem copiar e colar o código.

Você **escreve o código**. Aqui só tem o alvo e o que testar.

**Lembretes rápidos:**

- Tudo do turtle começa com `turtle.` na frente.
- A última linha do arquivo é sempre `turtle.done()`, senão a janela some.
- Quadrado = 4 voltas de "anda e vira 90 graus".
- Nome de cor só em inglês e entre aspas: `"red"`, `"blue"`, `"purple"`.

---

## Aquecimento (3 min)

Sem olhar o código, responda pro professor:

- Se eu apagar a linha `import turtle`, o que acontece?
- O `100` de `turtle.forward(100)` — o que ele muda no desenho?

---

## O que fazer

### 1. O carimbo

- Alvo: um `def` chamado `quadrado` que recebe `tamanho` e desenha um quadrado desse tamanho.
- Pegue o quadrado que já está funcionando e coloque **dentro** do `def`. Onde estava o número, agora vai o nome `tamanho`.
- **Teste agora:** rode. Não aparece **nada** na tela — e está certo. Você ensinou o desenho, mas não pediu nenhum.

### 2. Usar o carimbo três vezes

- Alvo: três quadrados de tamanhos diferentes na tela.
- Chame `quadrado` três vezes, cada uma com um número diferente entre parênteses.
- **Teste agora:** três quadrados, um dentro do outro. Conte quantos `def` você escreveu: tem que ser **1**.

### 3. Cor sorteada

- Alvo: a cor muda sozinha cada vez que você roda o programa.
- Importe o `random`, crie uma lista com 4 nomes de cor e use `random.choice` pra sortear um. A cor da caneta se troca com `turtle.color(...)`.
- **Teste agora:** rode 3 vezes seguidas. As cores mudaram nas 3.

### 4. Um monte de carimbos

- Alvo: 10 quadrados, tamanhos e cores sorteados, com a tartaruga girando um pouco entre um e outro.
- Use um `for` que repete 10 vezes. Dentro dele: sorteia cor, sorteia tamanho com `random.randint`, chama seu `quadrado`, gira com `turtle.left(...)`.
- **Teste agora:** um desenho em leque/flor, diferente a cada vez que roda.

---

## CHECK

- [ ] Três quadrados de tamanhos diferentes e **um** `def` só.
- [ ] Você consegue apontar no código **onde** você diz o tamanho de cada um.
- [ ] Rodou duas vezes e saiu diferente.
- [ ] Você consegue dizer **por que** saiu diferente sem você ter mudado nada.
- [ ] O terminal não tem nenhuma linha vermelha.

Confira com `gabarito/GABARITO.md`.

---

## Se travar, revise

- **A janela pisca e fecha** → faltou `turtle.done()` na última linha.
- **`AttributeError: module 'turtle' has no attribute 'forward'`** → seu arquivo se chama `turtle.py`. Renomeie pra `desenho.py` e apague a pasta `__pycache__`.
- **`NameError: name 'forward' is not defined`** → faltou `turtle.` na frente.
- **Não aparece nada** → você só ensinou a função e nunca chamou ela.
- **`TypeError: quadrado() missing 1 required positional argument`** → você chamou `quadrado()` sem o número dentro.
- **O quadrado não fecha** → o `turtle.left(90)` tem que estar **dentro** do `for`, e o `for` repete 4 vezes.
- **`bad color string`** → cor em português ou sem aspas.

---

## Antes de fechar

Escreva **uma frase** em comentário no fim do `desenho.py`: o que o número
entre parênteses do `quadrado(...)` faz, explicado pra alguém que nunca
programou.

---

## Se sobrar tempo

1. Faça um `def triangulo(tamanho)` — muda o número de voltas e o ângulo.
2. Faça o desenho começar em lugares diferentes da tela (procure `penup`, `goto` e `pendown` no cartão).
3. Faça `def poligono(lados, tamanho)` — **dois** parâmetros: com 4 sai quadrado, com 3 sai triângulo, com 20 sai quase um círculo.
4. Deixe o fundo preto (`turtle.bgcolor`) e sorteie cores claras.
5. Acelere tudo com `turtle.speed(0)` e faça 50 carimbos.
