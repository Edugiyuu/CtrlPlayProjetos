# Mochila do Herói — "Sobrou tempo" 1, 2 e 3 em cima do menu

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
    print("4 - Dano total")
    print("5 - Item mais forte")
    print("0 - Sair")
    opcao = input("Escolha: ")

    if opcao == "1":
        for item in mochila:
            print("-", item["nome"], "| dano:", item["dano"])

    elif opcao == "2":
        # extra 2: no máximo 5 itens
        if len(mochila) >= 5:
            print("Mochila cheia!")
        else:
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

    elif opcao == "4":
        # extra 1: soma começa em 0 e cresce a cada item
        total = 0
        for item in mochila:
            total = total + item["dano"]
        print("Dano total:", total)

    elif opcao == "5":
        # extra 3: começa achando que o primeiro é o mais forte
        if len(mochila) == 0:
            print("Mochila vazia")
        else:
            mais_forte = mochila[0]
            for item in mochila:
                if item["dano"] > mais_forte["dano"]:
                    mais_forte = item
            print("Mais forte:", mais_forte["nome"], "| dano:", mais_forte["dano"])

    elif opcao == "0":
        print("Até a próxima aventura!")
        break

    else:
        print("Opção inválida")
