# Gabarito — memória e busca

| Arquivo | Pra quê | Quando rodar |
|---|---|---|
| [`busca_linear.py`](./busca_linear.py) | 5.000.000 espiadas, ~2s | minuto 5, no projetor |
| [`busca_binaria.py`](./busca_binaria.py) | 23 espiadas, ~0,00007s | minuto 6, logo depois da linear |
| [`tamanhos.py`](./tamanhos.py) | `sys.getsizeof` em números, textos e listas | 10–20, eles rodam |
| [`etiquetas.py`](./etiquetas.py) | `id()`, `is`, e o bug do `l2 = l1` | 20–45, eles rodam |
| [`../busca_binaria_COMECE_AQUI.py`](../busca_binaria_COMECE_AQUI.py) | o mesmo binária com 3 lacunas | 45–70, na máquina deles |

## As 3 lacunas

```python
meio = (inicio + fim) // 2
inicio = meio + 1
fim = meio - 1
```

## Números que devem aparecer

| Onde | Saída esperada |
|---|---|
| `tamanhos.py` | `0` e `255` dão **28** bytes · `10**30` dá **40** · lista **88** vs bytes **37** |
| `etiquetas.py` 1ª parte | os dois `id()` iguais, `a is b` → `True` |
| `etiquetas.py` 2ª parte | `l1` vira `[1, 2, 3, 4]` sem ninguém mexer nela |
| `etiquetas.py` 3ª parte | `id(l3)` ≠ `id(l4)`, `l3` continua `[1, 2, 3]` |
| `busca_linear.py` | `espiadas: 5000000` · tempo entre 1s e 3s |
| `busca_binaria.py` | `espiadas: 23` · tempo na casa de `e-05` |

> Os valores de `id()` mudam a cada execução — isso é esperado e vale dizer em voz alta
> antes que alguém ache que errou.

## Respostas do desafio

**Tabela de espiadas** — medidos: `4999999` → **23** · `0` → **22** · `2500000` → **22** ·
`777` → **21**. O pior caso da lista inteira é **23**, nenhum alvo passa disso.

> Cuidado com a intuição: `2500000` **não** cai no meio e não dá 1 espiada. O meio de
> `range(5000000)` é a posição `2499999`. Se algum aluno quiser ver o `espiadas: 1`,
> o alvo é `2499999`.

**A pergunta:** porque a binária não anda pela lista, ela **corta a lista pela metade**.
Não importa onde o alvo está: o que conta é quantas vezes dá pra partir 5 milhões
ao meio até sobrar 1 — e isso são 23 vezes, pra qualquer alvo.

**A. Dobre a lista:** 24 espiadas. A lista dobrou, custou **uma** espiada a mais.

**B. Quebre de propósito:** a binária diz "o do meio é menor, então joga a esquerda fora" —
mas numa lista embaralhada isso é mentira, o alvo podia estar exatamente na metade
descartada. Ela joga fora a resposta certa e não acha.

**C. Meça a linear:** alvo `0` é instantâneo (acha na 1ª espiada), alvo `4999999` leva ~2s
(precisa das 5 milhões). A linear depende de **onde** o alvo está; a binária não.

**D. Sua própria prateleira:** qualquer programa que use `id()` e `sys.getsizeof()` numa
lista de strings serve. O nome mais longo ocupa mais bytes — 41 + 1 por letra.
