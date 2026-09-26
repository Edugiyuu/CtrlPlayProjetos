# Cartão de memória — onde as coisas ficam guardadas

> Folha de consulta desta aula. Deixe do lado enquanto mexe no código.
> Só tem o que a gente usa hoje.

---

## A ideia da aula, em 3 frases

1. A memória do computador é uma prateleira gigante de **caixas numeradas**.
2. O computador não acha nada por nome — ele só sabe ir até o **número** da caixa.
3. O nome que você inventa (`idade`, `lista1`) **não é a caixa**. É uma **seta**
   apontando pra ela. A caixa mora em outro lugar.

```
   a ──────┐
           ├──→ ┌───────┐     o nome e uma SETA.
   b ──────┘    │   5   │     a caixa e outra coisa.
                └───────┘
```

Duas setas podem apontar pra mesma caixa. É disso que trata a aula toda.

---

## A caixa é do valor, não do nome

| Situação | Quantas caixas |
|---|---|
| `a = 6` e `b = 5` | **duas** — valores diferentes, sempre caixas diferentes |
| `a = 5` e `b = 5` | pode ser **uma só** — o Python reaproveita quando o valor não muda |
| você troca o valor de `a` | a caixa não muda: **a seta é que pula** pra outra caixa |

---

## Ver o número da caixa

### `id(coisa)`

Mostra o número da caixa **pra onde a seta aponta** — não onde o nome mora.

```python
a = 5
print(id(a))     # 140732764877864
```

O número é enorme e feio. Não tem problema: você **não precisa ler** ele.
Ele só existe pra provar que o valor mora em algum lugar de verdade.

> O número **muda toda vez que você roda o programa**. Isso é normal e não é erro.

---

## "É a mesma caixa?"

### `is`

```python
lista1 = [1, 2, 3]
lista2 = lista1
print(lista1 is lista2)    # True — é uma caixa só, com dois nomes
```

| Você escreve | A pergunta que isso faz |
|---|---|
| `a == b` | tem o mesmo **valor** dentro? |
| `a is b` | é a **mesma caixa**? |

Não são a mesma pergunta:

```python
x = [1, 2]
y = [1, 2]
print(x == y)    # True   — mesmo conteúdo
print(x is y)    # False  — duas caixas diferentes
```

---

## A pegadinha de hoje

### `lista2 = lista1` **não** faz uma cópia

Só faz uma **segunda seta apontar pra mesma caixa**.

```python
lista1 = [1, 2, 3]
lista2 = lista1          # NÃO copiou

lista2.append(4)         # mexi só na lista2...
print(lista1)            # [1, 2, 3, 4]  ← a lista1 mudou também!
```

**Por que?** Porque a `lista1` não copiou nada. **Nunca existiram duas listas** — existe
uma lista só, com dois nomes. Não dá pra mexer "só na `lista2`": ela não é uma lista
própria, é um segundo nome pra mesma caixa.

> Pense em **Eduardo** e **Edu**. Se o Edu corta o cabelo, o Eduardo está de cabelo curto
> também. Não é cópia — é a mesma pessoa com dois nomes.

### Pra copiar de verdade: `list()`

```python
lista3 = [1, 2, 3]
lista4 = list(lista3)    # agora sim, caixa nova

lista4.append(4)
print(lista3)            # [1, 2, 3]  ← intacta
```

---

## Na dúvida, confira

Não fique comparando os números gigantes com o olho. Pergunte com `is`:

```python
print(lista1 is lista2)
```

| Resposta | O que significa |
|---|---|
| `True` | uma caixa só, duas setas. Mexer por um nome mexe no outro |
| `False` | duas caixas de verdade. Uma não afeta a outra |
