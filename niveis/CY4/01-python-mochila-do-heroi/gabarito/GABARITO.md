# Gabarito do DESAFIO.md — para o professor

Os arquivos são cumulativos e rodam sozinhos (`python mochila.py`):

| Parte do DESAFIO | Arquivo inteiro |
|---|---|
| Faça, passos 1–6 (marco mínimo) | [mochila.py](./mochila.py) |
| Desafio 1 (item que não existe) + Desafio 2 (menu) | [mochila_desafio.py](./mochila_desafio.py) — é também o que roda na abertura |
| Sobrou tempo 1, 2 e 3 | [mochila_extra.py](./mochila_extra.py) |

O aluno pode trocar os itens (Machado, Cajado...). O que importa: cada item é um
**dicionário** com as chaves `"nome"` e `"dano"`, e o `dano` é número (`int`), não texto.

---

## Faça — respostas esperadas às perguntas

**Passo 2 — por que `idade + 1` quebrou?** O `input` sempre devolve texto. `"15" + 1`
é texto mais número, e o Python não adivinha. `int()` transforma `"15"` em `15`.
(Em JS, `"15" + 1` dá `"151"` sem erro; o Python é mais chato e isso é bom.)

**Passo 5 — por que `mochila.remove(largar)` não funcionou?** `largar` é o texto `"Arco"`.
A lista não tem nenhum texto `"Arco"` dentro; ela tem o dicionário `{"nome": "Arco", "dano": 7}`.
O `remove` procura uma coisa **igual** ao que você passou. Por isso o `for` primeiro acha
o dicionário cujo `"nome"` é `"Arco"`, e aí passa **o dicionário** pro `remove`.

**Passo 5 — pra que o `break`?** Já achou; não tem por que continuar. E tirar item da lista
enquanto o `for` ainda está andando nela pode pular o próximo item. Parar na hora evita isso.

Também vale (mas não puxe isso na aula):

```python
for i in range(len(mochila)):
    if mochila[i]["nome"] == largar:
        mochila.pop(i)
        break
```

**Não** aceitar list comprehension copiada da IA (`mochila = [i for i in mochila if ...]`):
funciona, mas pula exatamente o conceito da aula. Peça pra ele explicar linha a linha.

---

## Desafio 1 — item que não existe

Resposta à dica: quem muda `achou` pra `True` é a linha logo depois do `remove`, dentro do `if`.
Depois do `for`, um `if achou:` / `else:` decide a mensagem.

Forma B, também vale (o `else` do `for` roda só se o `for` terminou sem `break`):

```python
for item in mochila:
    if item["nome"] == largar:
        mochila.remove(item)
        print("Você largou", largar)
        break
else:
    print("Você não tem", largar)
```

Não ensine essa; se ele achar sozinho, ótimo.

## Desafio 2 — menu

A armadilha é `opcao == 1` sem aspas: nunca é verdade, porque o `input` deu `"1"`.
Ou compara com `"1"`, ou faz `opcao = int(input(...))` e compara com `1`. As duas contam,
mas a segunda quebra se ele digitar uma letra (`ValueError`).

O `break` do `0` sai do `while`. Se ele usar `exit()`, funciona, mas peça o `break`.

---

## Sobrou tempo

1. **Dano total** — `total = 0` **antes** do `for`; dentro, `total = total + item["dano"]`.
   Se o `total = 0` ficar dentro do `for`, sempre mostra o dano do último item.
2. **Mochila cheia** — `if len(mochila) >= 5:` antes de perguntar o item novo.
3. **Item mais forte** — guarda o primeiro como `mais_forte` e troca quando acha um maior.
   Com a mochila vazia, `mochila[0]` dá `IndexError`; por isso o `if len(mochila) == 0`.
