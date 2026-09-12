# GABARITO — aula #7 (Funções), turma #10671. Arquivo do PROFESSOR.
#
# Rode com:  py -3.11 gabarito/funcoes.py
# Toda saida abaixo tem que bater EXATAMENTE com o "# esperado:" do DESAFIO.md.
#
# Lembrete: o aluno recebe apenas o cabecalho, a linha do "def" e os testes.
# O corpo de cada funcao e' o trabalho dele. Nao mostre este arquivo em aula.


# 1. Saudacao  — VOCE faz no projetor, narrando o raciocinio
#    Erre de proposito primeiro: troque o return por print e mostre o None.
def saudacao(nome):
    return "Oi, " + nome + "!"


# 2. Dobro — a turma dita, voce digita
def dobro(numero):
    return numero * 2


# 3. Preco com desconto — MARCO MINIMO (o aluno faz sozinho)
#    Aceite tambem:  return preco * (1 - desconto / 100)
def preco_final(preco, desconto):
    desconto_em_reais = preco * desconto / 100
    return preco - desconto_em_reais


# 4. Pode dirigir?
#    Aceite tambem o direto:  return idade >= 18  (elogie, e' melhor)
def pode_dirigir(idade):
    if idade >= 18:
        return True
    else:
        return False


# 5. Total da conta
#    O erro esperado e' o return dentro do for.
def total_da_conta(precos):
    total = 0
    for preco in precos:
        total = total + preco
    return total


# 6. Quantos podem dirigir? — COMPOSICAO. Primeira vez que uma funcao dele chama
#    outra funcao dele. Se ele reescrever o ">= 18" aqui, funciona, mas peca para
#    trocar pelo pode_dirigir: e' o ponto da questao.
#    Erro esperado: contar fora do if (da' len(idades)).
def quantos_podem_dirigir(idades):
    quantidade = 0
    for idade in idades:
        if pode_dirigir(idade):
            quantidade = quantidade + 1
    return quantidade


# 7. Conta da mesa — soma, decide e desconta. Duas funcoes dele encaixadas.
#    Erros esperados: o if dentro do for (decide antes de somar) e o >= no lugar do >.
#    Aceite tambem a versao de uma linha:
#        if total > 100: return preco_final(total, 10)
#        return total
def conta_da_mesa(precos):
    total = total_da_conta(precos)
    if total > 100:
        return preco_final(total, 10)
    else:
        return total


# --- extras, so' para quem terminar antes -------------------------------------

def contar_letra(texto, letra):
    quantidade = 0
    for caractere in texto:
        if caractere == letra:
            quantidade = quantidade + 1
    return quantidade


def media(notas):
    return total_da_conta(notas) / len(notas)


def mais_caro(precos):
    maior = precos[0]
    for preco in precos:
        if preco > maior:
            maior = preco
    return maior


def troco(pago, precos):
    return pago - total_da_conta(precos)


# --- testes do DESAFIO.md -----------------------------------------------------

print(saudacao("Ana"))              # esperado: Oi, Ana!
print(saudacao("Lucas"))            # esperado: Oi, Lucas!

print(dobro(7))                     # esperado: 14
print(dobro(2.5))                   # esperado: 5.0

print(preco_final(100, 10))         # esperado: 90.0
print(preco_final(50, 50))          # esperado: 25.0

print(pode_dirigir(20))             # esperado: True
print(pode_dirigir(15))             # esperado: False
print(pode_dirigir(18))             # esperado: True

print(total_da_conta([10, 5, 2]))   # esperado: 17
print(total_da_conta([7.5, 2.5]))   # esperado: 10.0
print(total_da_conta([]))           # esperado: 0

print(quantos_podem_dirigir([20, 15, 18]))      # esperado: 2
print(quantos_podem_dirigir([10, 12]))          # esperado: 0
print(quantos_podem_dirigir([30, 40, 50, 17]))  # esperado: 3
print(quantos_podem_dirigir([]))                # esperado: 0

print(conta_da_mesa([10, 5, 2]))    # esperado: 17
print(conta_da_mesa([60, 50]))      # esperado: 99.0
print(conta_da_mesa([50, 50]))      # esperado: 100
print(conta_da_mesa([]))            # esperado: 0

# --- testes dos extras --------------------------------------------------------

print(contar_letra("banana", "a"))  # esperado: 3
print(media([8, 6, 10]))            # esperado: 8.0
print(mais_caro([10, 47, 3]))       # esperado: 47
print(troco(50, [10, 5, 2]))        # esperado: 33
