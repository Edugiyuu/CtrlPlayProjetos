# Mochila do Herói (Python básico) — CY4 · aula 01

`bloco 1h30 · escopo real ~55 min`

**Sai de:** sabe array de objetos, `for` e `if` em JS, nunca escreveu Python → **chega em:** `mochila.py` que pergunta o nome do herói, mostra a mochila, pega um item novo e larga um item pelo nome
**Já tem:** variável, array, objeto, `for`, `if` (em JS) · **Novo hoje:** `print`/`input`/`int()`, lista e dicionário em Python, indentação no lugar de `{}`, tirar um dicionário da lista · **Fora:** `def`, f-string, classe, arquivo
**Abre com:** "Em JS, como vocês guardariam os itens de uma mochila de RPG, cada um com nome e dano?" (array de objetos)

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–5 | Abertura: rodar `gabarito/mochila_desafio.py` e brincar no menu | ele larga a Espada e ela some |
| 5–15 | **Python ≠ JS:** `print`, variável sem `let`, `input` (tabela do DESAFIO) | `Bem-vindo, Ana` |
| 15–20 | **`input` devolve texto:** `idade + 1` quebra → `int()` | `TypeError` primeiro, depois o número certo |
| 20–30 | **Lista de dicionários:** a mochila com 3 itens + `for` mostrando | 3 linhas `- Espada \| dano: 10` |
| 30–38 | **Pegar item:** 2 `input` + `append` + `len` | `Você tem 4 itens` |
| 38–50 | **Largar item:** tentar `mochila.remove(largar)` primeiro → erro → `for` + `if` + `remove` + `break` | o Arco some da lista |
| 50–55 | Mostrar a mochila de novo no fim | lista final sem o item largado |
| **✅ 55** | **MARCO MÍNIMO — daqui pra baixo é desafio** | o script inteiro roda de cima a baixo |
| 55–65 | **Desafio 1:** largar item que não existe → `achou` | `Você não tem Escudo` |
| 65–85 | **Desafio 2:** menu com `while True` (1 ver, 2 pegar, 3 largar, 0 sair) | o menu volta até digitar 0 |

**Atrasou?** corta o `len` e o desafio 2. Nunca corta o erro do `mochila.remove(largar)`: é ele que mostra que a lista guarda **dicionários**, não texto.

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| indentação | em Python o recuo **é** o `{}`; o que está recuado pertence ao `for`/`if` | "Como o Python sabe onde o `for` acaba?" (quando o recuo volta) |
| `input()` | pergunta no terminal e devolve **sempre texto** | "`input` com 15 digitado: é `15` ou `"15"`?" (`"15"`) |
| `int()` | transforma texto em número | "Por que `idade + 1` quebrou?" (texto + número não soma) |
| lista `[]` | o array do JS | "Como coloca um item no fim?" (`append`; no JS era `push`) |
| dicionário `{}` | o **objeto do JS** em Python: pares `chave: valor`, chave entre aspas | "Como pego o nome do item?" (`item["nome"]`, não `item.nome`) |
| lista de dicionários | cada item da mochila é um dicionário; a lista guarda os dicionários | "O que tem dentro de `mochila[0]`?" (o dicionário inteiro da Espada) |
| tirar da lista | `remove` precisa do **dicionário**, então antes um `for` acha qual é | "Por que `mochila.remove("Arco")` não funciona?" (a lista não tem o texto `"Arco"`, tem um dicionário) |
| `break` | para o `for` na hora | "Achou o Arco: por que continuar procurando?" (não precisa) |

| Ele vê | Você checa |
|---|---|
| `IndentationError` | misturou recuo, ou faltou recuar depois do `:` |
| `SyntaxError` no `for`/`if` | faltou o `:` no fim da linha |
| `TypeError: can only concatenate str` | número que veio do `input` sem `int()` |
| `ValueError: invalid literal for int()` | digitou texto onde pedia número (normal, é o que o `int` faz) |
| `KeyError: 'Nome'` | chave com maiúscula diferente: `"nome"` ≠ `"Nome"` |
| `ValueError: list.remove(x): x not in list` | fez `mochila.remove(largar)` com o texto; é o erro planejado do bloco 38 |
| largou e o item continua lá | digitou `arco` e o item é `Arco`, ou tem espaço sobrando |
| menu nunca entra na opção | `opcao == 1` sem aspas: o `input` deu `"1"` |

**Antes:** VS Code com Python 3 em todos os PCs, `python --version` testado · Aluno: [DESAFIO.md](./DESAFIO.md) · Respostas: [gabarito/](./gabarito/)
