# Mochila do Herói 🎒

No fim você tem um `mochila.py` que mostra os itens do seu herói, pega um item novo e larga um item pelo nome.
Crie o arquivo `mochila.py` e rode com o ▶ do VS Code (ou `python mochila.py` no terminal).

## Comandos de hoje

| Python | No JS era | O que faz |
|---|---|---|
| `print("Oi", nome)` | `console.log("Oi", nome)` | mostra na tela; a vírgula põe espaço |
| `nome = "Ana"` | `let nome = "Ana"` | variável, sem `let` e sem `;` |
| `x = input("Pergunta? ")` | `prompt(...)` | pergunta no terminal e devolve **texto** |
| `int(x)` | `Number(x)` | texto vira número |
| `lista = [1, 2, 3]` | igual | lista (o array do JS) |
| `lista.append(x)` | `push(x)` | coloca no fim |
| `len(lista)` | `lista.length` | quantos itens tem |
| `lista.remove(x)` | `splice(...)` | tira o `x` da lista |
| `{"nome": "Espada", "dano": 10}` | `{nome: "Espada", dano: 10}` | dicionário (o objeto do JS); chave **com aspas** |
| `item["nome"]` | `item.nome` | pega um valor do dicionário |
| `for item in lista:` | `for (const item of lista) {` | repete pra cada item |
| `if a == b:` | `if (a === b) {` | condição |

⚠️ Python não usa `{}` pra bloco: **o recuo é o bloco**. Tudo que vem depois do `:` vai recuado (Tab).

## Faça

1. **Nome do herói.** Pergunte o nome com `input` e mostre `Bem-vindo, <nome>`.
   **Teste:** digitando Ana, aparece `Bem-vindo, Ana`.
2. **Daqui a 1 ano.** Pergunte a idade e mostre a idade + 1. Vai dar erro. Leia o erro e conserte com `int()`.
   **Teste:** digitando 15, aparece `16`.
3. **A mochila.** Crie a lista `mochila` com 3 dicionários: Espada (dano 10), Poção (dano 0), Arco (dano 7).
   Com um `for`, mostre cada item assim: `- Espada | dano: 10`.
   **Teste:** aparecem as 3 linhas.
4. **Pegar um item.** Pergunte o nome e o dano do item novo, monte o dicionário e coloque na mochila com `append`.
   Mostre `Você tem 4 itens` usando `len`.
   **Teste:** achou um Machado de dano 8? Ele aparece quando você mostrar a mochila.
5. **Largar um item.** Pergunte o nome do item pra largar. Primeiro tente `mochila.remove(largar)`. Leia o erro: **por que** não deu?
   Agora faça certo: um `for` passa por cada item; `if` o `item["nome"]` for igual ao que ele digitou, `mochila.remove(item)` e `break`.
   **Teste:** largando `Arco`, ele some da lista.
6. **Mostrar de novo.** No fim do arquivo, mostre a mochila outra vez.
   **Teste:** a lista final tem o item novo e não tem o que você largou.

   ✅ **Pronto o principal.**

## Desafio

1. **Item que não existe.** Tente largar `Escudo`. Nada acontece, sem aviso nenhum. Faça aparecer `Você não tem Escudo`.
   Dica: uma variável `achou = False` antes do `for`. Quem muda ela pra `True`?
2. **Menu.** Coloque tudo num `while True:` com as opções `1 - Ver mochila`, `2 - Pegar item`, `3 - Largar item`, `0 - Sair`.
   O `0` usa `break` pra sair. Cuidado: o `input` devolve `"1"`, não `1`.

## Check

- [ ] O script pergunta, mostra, pega e larga sem erro.
- [ ] O item largado some, o item novo aparece.
- [ ] Você sabe dizer **por que** `mochila.remove("Arco")` não funciona.

## Travou?

| Você vê | Faça |
|---|---|
| `IndentationError` | o que está dentro do `for`/`if` está recuado? Tudo com o mesmo recuo? |
| `SyntaxError` | faltou `:` no fim do `for` ou do `if`? |
| `TypeError: can only concatenate str` | o número veio do `input`: passou no `int()`? |
| `KeyError: 'Nome'` | a chave é `"nome"`, minúsculo, igual ao dicionário |
| `x not in list` | é o erro do passo 5! A lista guarda dicionários |
| largou e o item continua lá | `arco` ≠ `Arco`: digite igual |
| o menu ignora o que digito | compare com `"1"`, com aspas |

## Sobrou tempo

1. Opção `4 - Dano total`: some o dano de todos os itens.
2. A mochila só aguenta 5 itens: se estiver cheia, `Mochila cheia!` e não pega.
3. Opção `5 - Item mais forte`: mostre o item com maior dano.
