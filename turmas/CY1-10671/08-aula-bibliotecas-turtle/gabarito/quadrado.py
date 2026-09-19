# O menor programa que desenha alguma coisa.
# É este que você digita no projetor no bloco 10-20, com a turma ditando.
import turtle

turtle.forward(100)  # anda 100 passos riscando
turtle.left(90)      # gira 90 graus, parada

turtle.forward(100)
turtle.left(90)

turtle.forward(100)
turtle.left(90)

turtle.forward(100)
turtle.left(90)

turtle.done()  # segura a janela aberta


# ---------------------------------------------------------------
# PASSO 2 (mesma aula): a turma percebe que sao 4 linhas iguais.
# Troque o bloco de cima por isto e rode de novo - sai identico:
#
# import turtle
#
# for lado in range(4):
#     turtle.forward(100)
#     turtle.left(90)
#
# turtle.done()
#
# ---------------------------------------------------------------
# PASSO 3: rode outra vez trocando os dois 100 por 30.
# Mesmo codigo, quadrado menor. Esse par de execucoes e o que ensina
# parametro - nao a explicacao. Dai vai pro `def` do DESAFIO.md.
