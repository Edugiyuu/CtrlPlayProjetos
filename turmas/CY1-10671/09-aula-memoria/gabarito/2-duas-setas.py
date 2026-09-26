# O nome e so uma SETA apontando pra caixa
#
# A lista1 muda junto, mas ela nao "copiou" nada:
# nunca existiram DUAS listas. Existe UMA lista, com dois nomes.
# A linha lista2 = lista1 nao criou lista nenhuma -- ela so fez uma
# segunda seta apontar pra caixa que ja existia.

lista1 = [1, 2, 3]
lista2 = lista1

print("caixa da lista1:", id(lista1))
print("caixa da lista2:", id(lista2))
print("e a mesma caixa?", lista1 is lista2)
print()

print("vou mexer SO na lista2...")
lista2.append(4)

print()
print("lista2 =", lista2)
print("lista1 =", lista1)
