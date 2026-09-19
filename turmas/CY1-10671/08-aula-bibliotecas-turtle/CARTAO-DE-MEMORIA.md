# Cartão de memória — turtle e random

> Folha de consulta desta aula. Deixe do lado enquanto faz o desafio.
> Só tem o que a gente usa hoje.

---

## As duas bibliotecas de hoje

### `turtle` — a tartaruga que desenha

Abre uma janela branca com uma tartaruga no meio, e ela tem uma caneta presa na
cauda. Você **não desenha**: você manda ela andar e virar, e o risco fica pra trás.
Já vem com o Python, não precisa instalar nada.

### `random` — o sorteio

Tira coisa no sorteio: um item de uma lista, ou um número entre dois valores.
Serve pro programa sair diferente a cada vez que roda, sem você mudar o código.
Também já vem com o Python.

---

## Ligar e desligar

### `import`

Traz uma caixa de ferramentas pronta pro seu arquivo. Vai sempre na **primeira** linha.

```python
import biblioteca
```

Depois disso, todo comando daquela caixa começa com o nome dela e um ponto.

### `turtle.done()`

Segura a janela aberta no fim. **Última linha do arquivo, sempre.**

---

## Mover a tartaruga

### `turtle.forward(passos)` / `turtle.backward(passos)`

Anda pra frente / pra trás. O número é a distância.

```python
turtle.forward(100)
```

### `turtle.left(graus)` / `turtle.right(graus)`

Gira sem andar. Quadrado vira de 90 em 90.

```python
turtle.left(90)
```

### `turtle.penup()` / `turtle.pendown()` / `turtle.goto(x, y)`

Levanta a caneta, vai pra outro lugar sem riscar, abaixa de novo.

---

## Mudar a aparência

### `turtle.color("nome")`

Cor da linha. Nome **em inglês** e entre aspas: `"red"`, `"blue"`, `"green"`, `"purple"`, `"orange"`.

### `turtle.bgcolor("nome")` · `turtle.speed(0)` · `turtle.pensize(n)`

Fundo · velocidade (0 = mais rápido) · grossura da linha.

---

## Seu próprio carimbo

### `def`

Dá nome a um desenho. O nome entre parênteses é o valor que **quem chama** manda.

```python
def nome_do_desenho(valor):
    # o que desenhar, usando `valor` no lugar do número
```

Escrever o `def` não desenha nada. Só desenha quando você **chama**:

```python
nome_do_desenho(80)
```

---

## Sorteio

### `random.choice(lista)`

Sorteia **um item** de uma lista.

```python
import random
lista = ["red", "blue", "green"]
escolhido = random.choice(lista)
```

### `random.randint(menor, maior)`

Sorteia um número inteiro entre os dois (os dois entram no sorteio).

```python
numero = random.randint(20, 120)
```

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| a janela abre e fecha na hora | faltou `turtle.done()` |
| `AttributeError: module 'turtle' has no attribute 'forward'` | seu arquivo se chama `turtle.py` — renomeie |
| `NameError: name 'forward' is not defined` | faltou `turtle.` na frente |
| `TypeError: quadrado() missing 1 required positional argument` | chamou sem o número dentro dos parênteses |
| `IndentationError` | o corpo do `def` ou do `for` não está deslocado pra dentro |
| `turtle.TurtleGraphicsError: bad color string` | cor em português, sem aspas ou escrita errada |
| não aparece nada, sem erro | você escreveu o `def` e nunca chamou |

---

## Sempre que algo não funcionar

1. Leia a **última** linha vermelha do terminal — é ela que diz o quê.
2. Confira se salvou o arquivo.
3. Confira se o `turtle.done()` é a última linha.
4. Confira se o seu arquivo **não** se chama `turtle.py`.
