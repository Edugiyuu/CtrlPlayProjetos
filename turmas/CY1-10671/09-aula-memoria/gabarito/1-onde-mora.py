# Onde o valor fica guardado?

a = 6
b = 5

print("a =", a, "-> caixa", id(a))
print("b =", b, "-> caixa", id(b))
print("e a mesma caixa?", a is b)

print()
print("agora vou trocar o valor de a para 5...")
print()

a = 5

print("a =", a, "-> caixa", id(a))
print("b =", b, "-> caixa", id(b))
print("e a mesma caixa?", a is b)

print()
print("o nome 'a' pulou pra caixa do b.")
print("a caixa do 6 continua la, so ficou sem ninguem apontando pra ela.")
