# Desafio — Bateria de funções

**Tempo:** ~55 min · **Dificuldade:** ▓▓▓░░
**Arquivo que você cria:** `funcoes.py`

---

## Combinado de hoje

**Sem IA.** Nem para "só tirar uma dúvida".

O objetivo de hoje não é ter o código pronto no fim. É você conseguir **ficar travado
sem fugir**. Travar não é sinal de que você não sabe — travar é o exercício. Quando
travar de verdade, chame o professor: ele te dá uma dica de cada vez, e a última dica
ainda vai deixar a maior parte do trabalho com você.

Você pode consultar: o `CARTAO-DE-MEMORIA.md`, o seu código das aulas anteriores, e o
colega do lado (**explicando**, não copiando).

---

## Como cada exercício funciona

Cada exercício vem com três coisas prontas — e uma que é sua:

```python
# 3. Preço com desconto
# Recebe: o preço (número) e o desconto em porcentagem (número)
# Devolve: o preço já com o desconto aplicado

def preco_final(preco, desconto):
    ...   # seu código aqui


# testes — não mexa nestas linhas, só rode
print(preco_final(100, 10))   # esperado: 90.0
print(preco_final(50, 50))    # esperado: 25.0
```

- A linha do `def` e o **contrato** (o que entra, o que sai) já vêm prontos: é o
  combinado, não a resposta.
- As linhas de **teste** também já vêm prontas. Elas são o seu juiz: se o que aparece na
  tela for igual ao `# esperado:`, está certo. Você **não precisa perguntar para
  ninguém** se acertou.
- O **corpo da função é 100% seu**. É onde está o trabalho.

⚠️ **Não mexa nas linhas de teste para o resultado bater.** O teste é o combinado; quem
tem que mudar é a sua função.

---

## Aquecimento (3 min)

Crie o arquivo `funcoes.py` e digite **só isto**:

```python
def oi():
    return "oi"
```

Rode. **Não vai aparecer nada** — e está certo. Agora descubra o que falta escrever para
o `oi` aparecer na tela. (Dica: a função foi *ensinada*, mas ninguém *chamou* ela.)

---

## O que fazer

Faça **nesta ordem** e **rode a cada exercício**. Não escreva tudo de uma vez.

Copie para o seu `funcoes.py` o cabeçalho, o `def` e as linhas de teste de cada
exercício. O que você escreve é o corpo, no lugar do `...`.

### 1. Saudação *(essa o professor faz junto com você)*

```python
# Recebe: um nome (texto)
# Devolve: uma saudação com o nome dentro

def saudacao(nome):
    ...   # seu código aqui


print(saudacao("Ana"))     # esperado: Oi, Ana!
print(saudacao("Lucas"))   # esperado: Oi, Lucas!
```

### 2. Dobro *(essa a turma resolve junto)*

```python
# Recebe: um número
# Devolve: esse número multiplicado por 2

def dobro(numero):
    ...   # seu código aqui


print(dobro(7))     # esperado: 14
print(dobro(2.5))   # esperado: 5.0
```

### 3. Preço com desconto ← **a partir daqui é sozinho**

```python
# Recebe: o preço (número) e o desconto em porcentagem (número)
# Devolve: o preço já com o desconto aplicado

def preco_final(preco, desconto):
    ...   # seu código aqui


print(preco_final(100, 10))   # esperado: 90.0
print(preco_final(50, 50))    # esperado: 25.0
```

### 4. Pode dirigir?

```python
# Recebe: uma idade (número)
# Devolve: True se a pessoa pode dirigir, False se não pode

def pode_dirigir(idade):
    ...   # seu código aqui


print(pode_dirigir(20))   # esperado: True
print(pode_dirigir(15))   # esperado: False
print(pode_dirigir(18))   # esperado: True
```

⚠️ Repare no esperado: é `True` e `False`, **não** `"sim"` e `"não"`.

### 5. Total da conta

```python
# Recebe: uma lista de precos (números)
# Devolve: a soma de todos eles

def total_da_conta(precos):
    ...   # seu código aqui


print(total_da_conta([10, 5, 2]))    # esperado: 17
print(total_da_conta([7.5, 2.5]))    # esperado: 10.0
print(total_da_conta([]))            # esperado: 0
```

### 6. Quantos podem dirigir?

A partir daqui o exercício não é mais "escrever uma função": é **usar uma função que
você já escreveu dentro de outra**. Você não precisa decidir de novo quem pode dirigir
— o `pode_dirigir` já sabe fazer isso. Chame ele.

```python
# Recebe: uma lista de idades (números)
# Devolve: quantas pessoas dessa lista podem dirigir (número)
# Regra: use a sua função pode_dirigir aqui dentro. Não repita o >= 18.

def quantos_podem_dirigir(idades):
    ...   # seu código aqui


print(quantos_podem_dirigir([20, 15, 18]))       # esperado: 2
print(quantos_podem_dirigir([10, 12]))           # esperado: 0
print(quantos_podem_dirigir([30, 40, 50, 17]))   # esperado: 3
print(quantos_podem_dirigir([]))                 # esperado: 0
```

⚠️ O `pode_dirigir` devolve `True`/`False`, não um número. Quem conta é você.

### 7. Conta da mesa

Este junta **três coisas** que você já fez: somar, decidir e descontar. E ele usa
**duas** funções suas.

```python
# Recebe: uma lista de precos (números)
# Devolve: o valor final da conta
# Regra da casa: se o total passar de 100, a casa dá 10% de desconto.
#                Se for 100 ou menos, paga o total cheio.
# Use a sua total_da_conta e a sua preco_final aqui dentro.

def conta_da_mesa(precos):
    ...   # seu código aqui


print(conta_da_mesa([10, 5, 2]))    # esperado: 17
print(conta_da_mesa([60, 50]))      # esperado: 99.0
print(conta_da_mesa([50, 50]))      # esperado: 100
print(conta_da_mesa([]))            # esperado: 0
```

⚠️ Repare no terceiro teste: 100 **não** passa de 100. Leia a regra de novo antes de
escolher entre `>` e `>=`.

---

## CHECK

- [ ] O aquecimento fez o `oi` aparecer na tela.
- [ ] Todos os `print` de teste que você copiou aparecem na tela quando você roda.
- [ ] Cada linha impressa é **igual** ao `# esperado:` do lado — inclusive o `.0` quando
      tem, e o `True`/`False` com letra maiúscula.
- [ ] Nenhuma linha de teste foi alterada.
- [ ] O `total_da_conta([])` devolve `0` e não quebra.
- [ ] No 6 e no 7 você **chamou** as suas funções antigas em vez de reescrever a regra
      delas.
- [ ] O `conta_da_mesa([50, 50])` devolve `100`, e não `90.0`.
- [ ] Você consegue explicar, **sem olhar o código**, o que entra e o que sai de cada
      função que escreveu.

---

## Se travar, revise

- **Rodei e não apareceu nada** → você ensinou a função (`def`) mas ninguém chamou ela.
  Confira se as linhas de teste estão no arquivo, **sem indentação**, fora do corpo da
  função.
- **Apareceu `None` embaixo do resultado** → sua função está *mostrando* o valor em vez
  de *devolver* ele. Mostrar na tela é para você; devolver é para o programa.
- **`IndentationError` / `SyntaxError`** → confira o `:` no fim da linha do `def` e se o
  corpo está deslocado para a direita.
- **Passa no primeiro teste e falha no segundo** → provavelmente sua função está usando
  um valor fixo, ou uma variável de fora, em vez do parâmetro que ela recebeu.
- **No 6, deu `4` em vez de `2`** → você está contando toda vez que o `for` dá uma
  volta. Só pode contar **quando** o `pode_dirigir` daquela idade der `True`.
- **No 6, deu `True` ou `False` em vez de um número** → você devolveu a resposta do
  `pode_dirigir` direto. O que você tem que devolver é o seu contador.
- **No 7, o `[10, 5, 2]` veio com desconto** → seu `if` está olhando para um preço da
  lista em vez de olhar para o total. Some primeiro, decida depois.
- **No 7, não sei onde encaixar as duas funções** → escreva em português primeiro:
  "pego o total, se ele passar de 100 aplico 10% nele, senão devolvo ele mesmo".
  Cada pedaço dessa frase já tem uma função sua pronta.
- **No 5, só devolve o primeiro preço** → pense em que momento a soma fica pronta:
  antes de o `for` terminar, ou depois?
- **Não sei nem por onde começar** → releia o contrato em voz alta. "Recebe X, devolve
  Y" já te dá a primeira e a última linha.

---

## Antes de fechar

No fim do `funcoes.py`, escreva **uma frase** em comentário:

> em que momento você quase pediu ajuda (ou quase abriu a IA) e resolveu sozinho?

---

## Se sobrar tempo

1. `contar_letra(texto, letra)` — quantas vezes a letra aparece no texto.
   `contar_letra("banana", "a")` → `3`
2. `media(notas)` — recebe uma lista de notas e devolve a média.
   `media([8, 6, 10])` → `8.0`
3. `mais_caro(precos)` — devolve o maior preço da lista, **sem usar `max`**.
   `mais_caro([10, 47, 3])` → `47`
4. `troco(pago, precos)` — devolve quanto sobra de troco, **chamando a
   `total_da_conta`** que você já escreveu. `troco(50, [10, 5, 2])` → `33`
