# Busca binaria - complete as 3 lacunas marcadas com ____
# Regra: olhe SEMPRE o do meio. Se o do meio for menor que o alvo,
# o alvo esta na metade da DIREITA. Se for maior, esta na ESQUERDA.

import time

dados = list(range(5000000))
alvo = 4999999

espiadas = 0
inicio = 0
fim = len(dados) - 1
relogio = time.perf_counter()

while inicio <= fim:
    espiadas = espiadas + 1

    # LACUNA 1: qual e a posicao do meio entre 'inicio' e 'fim'?
    meio = ____

    if dados[meio] == alvo:
        print("achei na posicao", meio)
        break
    elif dados[meio] < alvo:
        # o alvo esta na direita: jogue o 'inicio' pra depois do meio
        # LACUNA 2:
        inicio = ____
    else:
        # o alvo esta na esquerda: jogue o 'fim' pra antes do meio
        # LACUNA 3:
        fim = ____

tempo = time.perf_counter() - relogio

print("espiadas:", espiadas)
print("tempo:", round(tempo, 6), "segundos")
