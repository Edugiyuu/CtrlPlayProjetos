# Mochila do Herói — marco mínimo (passos 1 a 6)

# 1. Nome do herói
nome = input("Qual o nome do seu herói? ")
print("Bem-vindo,", nome)

# 2. Daqui a 1 ano: input devolve texto, int() vira número
idade = int(input("Quantos anos você tem? "))
print("Daqui a 1 ano você terá", idade + 1)

# 3. A mochila: uma lista de dicionários
mochila = [
    {"nome": "Espada", "dano": 10},
    {"nome": "Poção", "dano": 0},
    {"nome": "Arco", "dano": 7},
]

print("Sua mochila:")
for item in mochila:
    print("-", item["nome"], "| dano:", item["dano"])

# 4. Pegar um item
novo_nome = input("Que item você achou? ")
novo_dano = int(input("Qual o dano dele? "))
mochila.append({"nome": novo_nome, "dano": novo_dano})
print("Você tem", len(mochila), "itens")

# 5. Largar um item
# mochila.remove(largar) não funciona: a lista guarda dicionários, não o texto
largar = input("Que item você quer largar? ")
for item in mochila:
    if item["nome"] == largar:
        mochila.remove(item)
        break

# 6. Mostrar de novo
print("Sua mochila agora:")
for item in mochila:
    print("-", item["nome"], "| dano:", item["dano"])
