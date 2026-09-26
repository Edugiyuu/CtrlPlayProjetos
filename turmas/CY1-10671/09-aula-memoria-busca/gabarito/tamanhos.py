# Quanto espaco cada coisa ocupa na memoria?
import sys

print("--- numeros ---")
print("o numero 0      ocupa", sys.getsizeof(0), "bytes")
print("o numero 255    ocupa", sys.getsizeof(255), "bytes")
print("um numero GIGANTE ocupa", sys.getsizeof(10 ** 30), "bytes")

print()
print("--- textos ---")
print("texto vazio ''  ocupa", sys.getsizeof(""), "bytes")
print("a letra 'a'     ocupa", sys.getsizeof("a"), "bytes")
print("'ola mundo'     ocupa", sys.getsizeof("ola mundo"), "bytes")

print()
print("--- a mesma informacao, guardada de 2 jeitos ---")
lista = [72, 73, 33, 0]
caixa = bytes(lista)
print("como lista:", sys.getsizeof(lista), "bytes")
print("como bytes:", sys.getsizeof(caixa), "bytes")
