# Extra 3 do DESAFIO.md — dois parâmetros.
# 4 lados = quadrado, 3 = triângulo, 20 = quase um círculo.
import turtle


def poligono(lados, tamanho):
    angulo = 360 / lados
    for lado in range(lados):
        turtle.forward(tamanho)
        turtle.left(angulo)


turtle.speed(0)

poligono(3, 100)
poligono(4, 100)
poligono(20, 20)

turtle.done()
