# Cartão de memória — Funções

Sua folha de consulta de hoje. É para isso que ela existe: quando bater a dúvida de
sintaxe, olhe aqui — não na internet, não na IA.

---

## As 4 palavras de hoje

| Palavra | O que é |
|---|---|
| **função** | um pedaço de programa que ganhou um nome |
| **parâmetro** | o que a função precisa receber de fora para trabalhar |
| **`return`** | o valor que a função **devolve** para quem chamou |
| **chamar** | mandar a função acontecer, escrevendo o nome dela com `()` |

---

## Definir uma função

```python
def nome_da_funcao(parametro):
    return alguma_coisa
```

- `def` = "eu vou **ensinar** uma função"
- `:` no fim da linha, sempre
- o corpo fica **deslocado para a direita** (indentado)

## Chamar uma função

```python
resultado = nome_da_funcao(10)
print(resultado)
```

ou direto:

```python
print(nome_da_funcao(10))
```

Sem chamar, **nada acontece**. `def` sozinho não faz nada aparecer na tela.

---

## `return` não é `print`

```python
def dobro(n):
    print(n * 2)      # MOSTRA na tela. Quem chamou não recebe nada.

def dobro(n):
    return n * 2      # DEVOLVE o valor. Quem chamou pode usar.
```

Regrinha: **`print` é para você ver. `return` é para o programa usar.**

Se aparecer `None` na tela, sua função mostrou mas não devolveu.

---

## Mais de um parâmetro

```python
def soma(a, b):
    return a + b

print(soma(3, 4))   # 7
```

A ordem importa: o primeiro valor cai no primeiro parâmetro.

---

## `if` dentro de função

O formato é o mesmo `if` de sempre. A diferença é que, dentro de uma função, **cada
caminho tem o seu próprio `return`**:

```python
def nome_da_funcao(valor):
    if <sua condição aqui>:
        return <um resultado>
    else:
        return <outro resultado>
```

`True` e `False` são valores do Python — com letra **maiúscula** e **sem aspas**.
`"True"` com aspas é texto, é outra coisa.

---

## Ir juntando um resultado dentro de um `for`

Quando você precisa percorrer uma lista e ir acumulando algo (uma soma, uma contagem):

- crie a variável que acumula **antes** do `for`, começando em zero;
- dentro do `for`, atualize essa variável;
- o `return` vem **depois** do `for`, alinhado com ele.

⚠️ Se o `return` ficar **dentro** do `for`, a função para na primeira volta e devolve
só o primeiro item. Pergunte a si mesmo: *em que momento o resultado está pronto?*

---

## Uma função pode chamar outra função sua

Depois que uma função está pronta e testada, ela vira uma **peça**. Você usa o nome
dela lá dentro de outra função e não pensa mais em como ela funciona:

```python
def dobro(n):
    return n * 2

def dobro_mais_um(n):
    return dobro(n) + 1     # usa a peça pronta em vez de escrever n * 2 de novo
```

- A função usada precisa estar **definida antes** no arquivo.
- Ela devolve um valor — trate esse valor como qualquer outro: guarde numa variável,
  compare num `if`, some, devolva.
- Se a função devolve `True`/`False`, ela já é a condição: `if pode_dirigir(idade):`
  (não precisa de `== True`).

Regrinha: **se você está reescrevendo uma regra que já tem nome, chame o nome.**

---

## Erros que aparecem direto

| O que aparece | O que é |
|---|---|
| não aparece nada | você definiu a função e não chamou |
| `None` embaixo do valor | usou `print` onde precisava de `return` |
| `IndentationError` | o corpo não está deslocado para a direita |
| `SyntaxError` perto do `def` | faltou o `:` no fim da linha |
| `NameError: name 'x' is not defined` | usou um nome que a função não recebeu |
| `TypeError: takes 1 positional argument but 2 were given` | chamou com mais valores do que a função pede |

---

## Sempre que algo não funcionar

1. **Rode.** Não adivinhe o que vai aparecer — descubra.
2. **Leia a última linha do erro.** É ela que diz o que aconteceu.
3. **Veja o número da linha** que o Python apontou e olhe essa linha.
4. Compare o que apareceu com o `# esperado:` do teste. A diferença é a pista.
5. Ainda travado depois de tentar? **Chame o professor** e conte o que você já tentou.
