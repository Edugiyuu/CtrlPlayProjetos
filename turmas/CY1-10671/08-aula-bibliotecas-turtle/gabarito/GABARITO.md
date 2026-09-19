# Gabarito — Bibliotecas: turtle + random

Arquivos, na ordem em que aparecem na aula:
[`espiral.py`](./espiral.py) (isca do professor, minuto 1),
[`quadrado.py`](./quadrado.py) (o exemplo mais simples, bloco 10–20),
[`desenho.py`](./desenho.py) (etapas 1–4 do desafio),
[`poligono.py`](./poligono.py) (extra 3).

Todos testados com Python 3.13. `turtle` e `random` são da biblioteca padrão —
**nada pra instalar**.

## Bloco 10–20 (nós fazemos) — o quadrado, antes do `def`

Arquivo pronto: [`quadrado.py`](./quadrado.py). São **três execuções**, nesta
ordem — não pule pro `for` direto.

**1. Na unha, uma linha de cada vez.** Comece pelas duas primeiras linhas só, e
rode: aparece um L. *"O que falta pra fechar o quadrado?"* Eles ditam o resto.

```python
import turtle

turtle.forward(100)
turtle.left(90)

turtle.forward(100)
turtle.left(90)

turtle.forward(100)
turtle.left(90)

turtle.forward(100)
turtle.left(90)

turtle.done()
```

**2. O `for`.** Pergunte *"o que incomoda aí?"* até alguém dizer "é tudo igual".
Aí troque as 8 linhas por isto e rode — o desenho sai idêntico:

```python
import turtle

for lado in range(4):
    turtle.forward(100)
    turtle.left(90)

turtle.done()
```

**3. Troque os dois `100` por `30` e rode.** Mesmo código, quadrado menor. É
esse par de execuções que ensina parâmetro — não a explicação. Daqui vai pro
`def` da etapa 1.

## Etapa 1 — o carimbo

O que muda em relação ao de cima: o `for` entra no corpo do `def`, e o número
`100` vira o nome `tamanho`. Nada mais muda.

Ao rodar só isso, **não aparece nada**. Se o aluno achar que quebrou, essa é a
hora de perguntar: *"o que faltou depois do `def`?"* — é o mesmo erro da aula
#7, mas aqui ele vê a consequência.

## Etapa 2 — três chamadas

`quadrado(50)`, `quadrado(100)`, `quadrado(150)`. Um `def`, três desenhos.
**Marco mínimo:** ele aponta o número na chamada e diz o que ele faz.

## Etapas 3 e 4 — random

`random.choice(cores)` sorteia um nome da lista; `random.randint(20, 120)`
sorteia o tamanho. O `turtle.left(36)` dentro do `for` é o que abre o leque
(10 × 36 = 360).

Se sair tudo colado num canto: o `left` ficou fora do `for`.

## Diferenças aceitáveis

| O aluno fez | Aceitar? |
|---|---|
| `while` no lugar do `for` | sim |
| `turtle.right` no lugar do `left` | sim, o desenho espelha |
| outras cores, outros tamanhos, outro ângulo | sim, é o objetivo |
| `for i in range(4)` com `i` sem uso | sim, não vire aula de nome de variável |
| copiou o quadrado 3 vezes em vez de chamar a função | **não** — é exatamente o que a aula ataca. Pergunta: "e se você quiser mudar pra pentágono, quantos lugares você arruma?" |

## Bônus de arquivo (só se sobrar tempo, fecha o "Arquivos" do cronograma)

Duas linhas no fim do `desenho.py`, com o nome dele:

```python
with open("galeria.txt", "a", encoding="utf-8") as arquivo:
    arquivo.write("desenho do Enzo\n")
```

Rode 3 vezes, abra o `galeria.txt` e mostre as 3 linhas. A pergunta que fecha:
*"por que o texto continuou lá depois que o programa fechou?"* O `"a"` é de
adicionar; com `"w"` ele apaga tudo e escreve de novo — mostre os dois.
