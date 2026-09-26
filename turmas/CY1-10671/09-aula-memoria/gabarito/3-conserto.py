# Como fazer uma caixa NOVA de verdade
#
# list(lista3) copia o conteudo pra uma caixa nova.
# Agora sao duas listas de verdade: mexer numa nao mexe na outra.

lista3 = [1, 2, 3]
lista4 = list(lista3)

print("caixa da lista3:", id(lista3))
print("caixa da lista4:", id(lista4))
print("e a mesma caixa?", lista3 is lista4)
print()

print("vou mexer SO na lista4...")
lista4.append(4)

print()
print("lista4 =", lista4)
print("lista3 =", lista3)
