# Mochila do Herói — desafios 1 (item que não existe) e 2 (menu)

mochila = [
    {"nome": "Espada", "dano": 10},
    {"nome": "Poção", "dano": 0},
    {"nome": "Arco", "dano": 7},
]

while True:
    print()
    print("1 - Ver mochila")
    print("2 - Pegar item")
    print("3 - Largar item")
    print("0 - Sair")
    opcao = input("Escolha: ")

    if opcao == "1":
        for item in mochila:
            print("-", item["nome"], "| dano:", item["dano"])

    elif opcao == "2":
        novo_nome = input("Que item você achou? ")
        novo_dano = int(input("Qual o dano dele? "))
        mochila.append({"nome": novo_nome, "dano": novo_dano})
        print("Você tem", len(mochila), "itens")

    elif opcao == "3":
        largar = input("Que item você quer largar? ")
        achou = False
        for item in mochila:
            if item["nome"] == largar:
                mochila.remove(item)
                achou = True
                break
        if achou:
            print("Você largou", largar)
        else:
            print("Você não tem", largar)

    elif opcao == "0":
        print("Até a próxima aventura!")
        break

    else:
        print("Opção inválida")
