# Gabarito do desafio: a playlist emprestada

minha = ["musica A", "musica B", "musica C"]

# PASSO 1: o bug
amigo = minha
amigo.append("musica do amigo")

print("minha =", minha)
print("amigo =", amigo)
print("mesma caixa?", minha is amigo)
print()

# PASSO 2: o conserto
minha = ["musica A", "musica B", "musica C"]
amigo = list(minha)
amigo.append("musica do amigo")

print("minha =", minha)
print("amigo =", amigo)
print("mesma caixa?", minha is amigo)
print()

# PASSO 3: a seta pula
irmao = minha
irmao = ["outra coisa"]

print("minha =", minha)
print("irmao =", irmao)
print("mesma caixa?", minha is irmao)
print()

# SE SOBRAR TEMPO A: tres nomes, uma caixa
primo = minha
tio = primo
tio.append("musica do tio")

print("minha =", minha)
print("primo is minha?", primo is minha)
print("tio is minha?", tio is minha)
print()

# SE SOBRAR TEMPO B: a mochila
mochila = []
mochila_do_irmao = mochila

for item in ["espada", "escudo", "pocao"]:
    mochila_do_irmao.append(item)

print("mochila =", mochila)
