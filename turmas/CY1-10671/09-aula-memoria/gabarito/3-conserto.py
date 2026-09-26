# Como fazer uma caixa NOVA de verdade

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
