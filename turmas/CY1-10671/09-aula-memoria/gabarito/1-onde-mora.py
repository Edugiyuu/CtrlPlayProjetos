# Onde o valor fica guardado?
#
# O nome 'a' pula pra caixa do b quando vira 5.
# A caixa do 6 continua la, so fica sem ninguem apontando pra ela.

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
