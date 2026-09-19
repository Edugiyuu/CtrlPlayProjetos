# Gabarito completo do DESAFIO.md (etapas 1 a 4).
# ATENÇÃO: este arquivo NÃO pode se chamar turtle.py.
import turtle
import random


# Etapa 1 — o carimbo.
# Onde antes estava o número 100, agora está o nome `tamanho`:
# quem chama a função é que decide o valor.
def quadrado(tamanho):
    for lado in range(4):
        turtle.forward(tamanho)
        turtle.left(90)


turtle.speed(0)

# Etapa 2 — o mesmo carimbo, três tamanhos. Um `def` só.
quadrado(50)
quadrado(100)
quadrado(150)

# Etapa 3 — cor sorteada a cada execução.
cores = ["red", "blue", "green", "purple"]
turtle.color(random.choice(cores))

# Etapa 4 — 10 carimbos, cor e tamanho sorteados, girando entre um e outro.
for volta in range(10):
    turtle.color(random.choice(cores))
    quadrado(random.randint(20, 120))
    turtle.left(36)

# O que o número entre parênteses faz: é o tamanho que eu mando pro desenho
# na hora de usar ele — mesmo desenho, medidas diferentes.

turtle.done()
