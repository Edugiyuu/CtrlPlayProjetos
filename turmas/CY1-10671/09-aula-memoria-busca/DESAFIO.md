# Desafio — Quantas espiadas?

**Tempo:** ~25 min · **Dificuldade:** ▓▓▓░░
**Arquivo que você edita:** `busca_binaria_COMECE_AQUI.py`

Você vai completar uma busca binária e depois descobrir uma coisa estranha:
**quase não importa qual número você procura.** A resposta é sempre parecida.

Você **completa o código**. Aqui só tem o alvo e o que testar.

**Lembretes rápidos:**

- A lista precisa estar **em ordem**. A nossa já está.
- `meio` é a posição do meio entre `inicio` e `fim`.
- `//` é a divisão que joga fora a vírgula: `7 // 2` dá `3`.
- Se o do meio for **menor** que o alvo, o alvo está na **direita**.
- Toda vez que você joga metade fora, mexe no `inicio` **ou** no `fim`, nunca nos dois.

---

## Aquecimento (3 min)

Sem rodar nada, responda pro professor:

- Eu escrevi `l2 = l1` e mexi só no `l2`. Por que o `l1` mudou também?
- `id(a)` e `id(b)` deram o mesmo número. O que isso quer dizer?

---

## O que fazer

### 1. As três lacunas

- Alvo: o arquivo roda e imprime `espiadas: 23`.
- Teste: se aparecer `espiadas: 23`, está certo. Se travar e não parar nunca,
  uma das lacunas está sem o `+ 1` ou o `- 1`.

### 2. A tabela

Troque o valor do `alvo` e rode de novo. Anote à mão:

| Alvo | Espiadas |
|---|---|
| 4999999 | |
| 0 | |
| 2500000 | |
| 777 | |
| um número que você inventar | |

- Alvo: a tabela preenchida com os 5 números.
- Teste: nenhum passou de 23.

### 3. A pergunta

Olhando a sua tabela, responda por escrito, em uma frase:

> Por que procurar o `0` e procurar o `4999999` dá quase o mesmo número de espiadas,
> se um está no comecinho e o outro no fim?

---

## Se sobrar tempo

### A. Dobre a lista

Troque `5000000` por `10000000` e rode de novo.
A lista dobrou. Quantas espiadas a mais? (Chute antes de rodar.)

### B. Quebre de propósito

Embaralhe a lista antes de procurar:

```python
import random
random.shuffle(dados)
```

Rode. O que acontece? Por que a busca binária para de achar?

### C. Meça a linear

Abra `gabarito/busca_linear.py`, troque o alvo pra `0` e rode.
Agora troque pra `4999999` e rode. Por que **essa** mudou tanto de tempo,
se a binária quase não muda?

### D. Sua própria prateleira

Escreva um programa que cria uma lista com os nomes dos 4 alunos da turma,
mostra o `id()` de cada nome e diz qual ocupa mais bytes.
