# Procurando sempre pelo meio
import time

dados = list(range(5000000))
alvo = 4999999

espiadas = 0
inicio = 0
fim = len(dados) - 1
relogio = time.perf_counter()

while inicio <= fim:
    espiadas = espiadas + 1
    meio = (inicio + fim) // 2

    if dados[meio] == alvo:
        print("achei na posicao", meio)
        break
    elif dados[meio] < alvo:
        inicio = meio + 1
    else:
        fim = meio - 1

tempo = time.perf_counter() - relogio

print("espiadas:", espiadas)
print("tempo:", round(tempo, 6), "segundos")
