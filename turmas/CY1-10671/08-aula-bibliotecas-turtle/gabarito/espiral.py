# Demonstração do professor — roda no minuto 1, no projetor.
# Ninguém precisa entender este código ainda. É a isca.
import turtle
import random

cores = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"]

turtle.bgcolor("black")
turtle.speed(0)

for tamanho in range(5, 300, 5):
    turtle.color(random.choice(cores))
    turtle.forward(tamanho)
    turtle.left(91)

turtle.done()
