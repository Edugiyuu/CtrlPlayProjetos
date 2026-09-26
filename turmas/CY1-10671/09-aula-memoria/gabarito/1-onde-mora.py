# Onde o valor fica guardado?

a = 5

print("o valor de a e:", a)
print("a caixa onde ele mora e a numero:", id(a))

print()

b = 5

print("o valor de b e:", b)
print("a caixa onde ele mora e a numero:", id(b))

print()
print("a e b estao na MESMA caixa?", a is b)
