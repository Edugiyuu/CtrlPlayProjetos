# Cartão de memória — onde as coisas ficam guardadas

> Folha de consulta desta aula. Deixe do lado enquanto mexe no código.
> Só tem o que a gente usa hoje.

---

## A ideia da aula, em 3 frases

1. A memória do computador é uma prateleira gigante de **caixas numeradas**.
2. O computador não acha nada por nome — ele só sabe ir até o **número** da caixa.
3. O nome que você inventa (`idade`, `lista1`) é só uma **etiqueta amarrada** na caixa.
   A etiqueta não é a caixa.

---

## Ver o número da caixa

### `id(coisa)`

Mostra o número da caixa onde a coisa está guardada.

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

Só amarra uma **segunda etiqueta na mesma caixa**.

```python
lista1 = [1, 2, 3]
lista2 = lista1          # NÃO copiou

lista2.append(4)         # mexi só na lista2...
print(lista1)            # [1, 2, 3, 4]  ← a lista1 mudou também!
```

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
| `True` | uma caixa só, duas etiquetas. Mexer numa mexe na outra |
| `False` | duas caixas de verdade. Uma não afeta a outra |
