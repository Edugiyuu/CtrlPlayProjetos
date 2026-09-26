# Procurando de um em um
import time

dados = list(range(5000000))
alvo = 4999999

espiadas = 0
inicio = time.perf_counter()

for i in range(len(dados)):
    espiadas = espiadas + 1
    if dados[i] == alvo:
        print("achei na posicao", i)
        break

tempo = time.perf_counter() - inicio

print("espiadas:", espiadas)
print("tempo:", round(tempo, 6), "segundos")
