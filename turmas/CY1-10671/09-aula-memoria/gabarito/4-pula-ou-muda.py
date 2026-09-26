# A seta PULA ou a caixa MUDA?
#
# Antes de rodar, escreva no papel o que sai nos DOIS print da lista1.

lista1 = [1, 2, 3]
lista2 = lista1

lista2.append(4)

print("depois do append:")
print("lista1 =", lista1)
print("lista2 =", lista2)
print("e a mesma caixa?", lista1 is lista2)
print()

lista2 = [9, 9, 9]

print("depois do lista2 = [9, 9, 9]:")
print("lista1 =", lista1)
print("lista2 =", lista2)
print("e a mesma caixa?", lista1 is lista2)
