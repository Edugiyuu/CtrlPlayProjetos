# Onde as coisas moram na memoria

print("--- o mesmo numero mora no mesmo lugar ---")
a = 5
b = 5
print("endereco do a:", id(a))
print("endereco do b:", id(b))
print("estao na mesma caixa?", a is b)

print()
print("--- DUAS ETIQUETAS, UMA CAIXA SO ---")
l1 = [1, 2, 3]
l2 = l1

print("endereco da l1:", id(l1))
print("endereco da l2:", id(l2))

l2.append(4)
print("mexi so na l2... e a l1 virou:", l1)

print()
print("--- agora copiando de verdade ---")
l3 = [1, 2, 3]
l4 = list(l3)

print("endereco da l3:", id(l3))
print("endereco da l4:", id(l4))

l4.append(4)
print("mexi so na l4. a l3 continua:", l3)
