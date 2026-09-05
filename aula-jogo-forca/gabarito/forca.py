palavra = "python"
revelado = ["_" for _ in palavra]

erros = 0

while "_" in revelado:
    print(" ".join(revelado))
    letra = input("Digite uma letra: ").lower()

    acertou = False
    for i in range(len(palavra)):
        if palavra[i] == letra:
            revelado[i] = letra
            acertou = True

    if not acertou:
        erros += 1
        print(f"Letra errada! Erros até agora: {erros}")

print(" ".join(revelado))
print(f"Você venceu! Errou {erros} vezes.")

# A parte mais difícil foi lembrar de só contar erro quando a letra não
# aparece em nenhuma posição da palavra, e não a cada posição comparada.
