# Cartão de memória — memória e busca

> Folha de consulta desta aula. Deixe do lado enquanto faz o desafio.
> Só tem o que a gente usa hoje.

---

## A ideia da aula

A memória do computador é uma **prateleira gigante de caixas numeradas**.
O computador não sabe procurar por nome — ele só sabe ir até o **número** da caixa.
Todo nome que você cria (`idade`, `lista`, `nome`) é só uma **etiqueta pendurada**
numa dessas caixas.

---

## Tamanho: quanto ocupa

### `byte`

A menor caixinha da prateleira. Tudo que você guarda ocupa um tanto de bytes.

### `sys.getsizeof(coisa)`

Diz quantos bytes aquela coisa está ocupando agora.

```python
import sys
print(sys.getsizeof(0))       # 28
print(sys.getsizeof("ola"))   # 44
```

> **Por que o número `0` ocupa 28 bytes e não 1?**
> Porque o Python guarda junto do valor mais três coisas: que **tipo** ele é,
> quantos **bytes** ele tem e **quantas etiquetas** estão penduradas nele.
> O Python gasta memória a mais pra te poupar trabalho.

---

## Endereço: onde mora

### `id(coisa)`

Mostra o **número da caixa** onde aquela coisa está guardada.

```python
a = 5
print(id(a))     # um número gigante, tipo 140732764877864
```

O número muda toda vez que você roda o programa. Isso é normal.
O que importa é comparar **dois `id()` na mesma rodada**.

### `is` — "é a mesma caixa?"

```python
a = 5
b = 5
print(a is b)    # True — os dois 5 moram na mesma caixa
```

> `is` pergunta **"é a mesma caixa?"**
> `==` pergunta **"tem o mesmo valor dentro?"**
> Não são a mesma pergunta.

---

## A pegadinha mais importante de hoje

### `l2 = l1` **não** faz uma cópia

Pendura uma **segunda etiqueta na mesma caixa**.

```python
l1 = [1, 2, 3]
l2 = l1          # NÃO copiou
l2.append(4)
print(l1)        # [1, 2, 3, 4]  ← a l1 mudou sozinha!
```

### Pra copiar de verdade: `list()`

```python
l3 = [1, 2, 3]
l4 = list(l3)    # agora sim, caixa nova
l4.append(4)
print(l3)        # [1, 2, 3]  ← intacta
```

Confere sempre com `id()`: se os dois derem o mesmo número, é uma caixa só.

---

## Procurar: os dois jeitos

### Busca linear — de um em um

Olha a posição 0, depois a 1, depois a 2... até achar.

- Funciona **sempre**, com lista em ordem ou bagunçada.
- Numa lista de 1 milhão, o pior caso é 1 milhão de espiadas.

### Busca binária — sempre pelo meio

Olha o do **meio**. Se o do meio for menor que o alvo, joga a metade da esquerda
fora. Se for maior, joga a da direita fora. Repete no que sobrou.

- **Só funciona se a lista estiver em ordem.** Essa é a regra que todo mundo esquece.
- Numa lista de 1 milhão, dá no máximo **20 espiadas**.
- Cada espiada corta a metade do que sobrou.

```python
inicio = 0
fim = len(dados) - 1

while inicio <= fim:
    meio = (inicio + fim) // 2

    if dados[meio] == alvo:
        print("achei na posicao", meio)
        break
    elif dados[meio] < alvo:
        inicio = meio + 1     # o alvo está na direita
    else:
        fim = meio - 1        # o alvo está na esquerda
```

---

## Medir o tempo

```python
import time

relogio = time.perf_counter()
# ... o código que você quer medir ...
tempo = time.perf_counter() - relogio

print(round(tempo, 6), "segundos")
```

---

## Dobrar a lista não dobra o trabalho

| Tamanho da lista | Linear (pior caso) | Binária (pior caso) |
|---:|---:|---:|
| 1.000 | 1.000 espiadas | 10 espiadas |
| 1.000.000 | 1.000.000 espiadas | 20 espiadas |
| 5.000.000 | 5.000.000 espiadas | 23 espiadas |
| 10.000.000 | 10.000.000 espiadas | 24 espiadas |

A lista ficou **10.000 vezes maior** e a binária precisou de **4 espiadas a mais**.
