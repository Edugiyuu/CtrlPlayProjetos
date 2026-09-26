# O nome e so uma SETA apontando pra caixa

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
