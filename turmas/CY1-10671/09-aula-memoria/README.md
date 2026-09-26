# Aula #9 — Memória: onde as coisas ficam guardadas · turma #10671 (CY1)

Aula #9 do cronograma, **adaptada**: no lugar de "Módulos", entra memória.
Motivo: `import` e módulo já foram dados na [#8](../08-aula-bibliotecas-turtle/),
com conceito, checagem e erro comum — repetir seria uma aula perdida.

## Formato

Você explica no **board CS50** (Whimsical, blocos da foto do pente de memória e da
grade de células), e depois roda **um script curto** em Python mostrando a mesma
coisa. Board → tela, três vezes. Eles rodam junto na máquina.

O board é em C. Nada de C entra na aula: os números de bytes por tipo, ponteiro e
compilação ficam **fora**. Do board vem só a **imagem** — a peça física e a grade
numerada. O resto é Python.

## Escopo

**Dentro:** caixa · nome como **seta** · `id()` · `is` · `lista2 = lista1` não copia · `list()` copia · `append` muda a caixa, `=` pula a seta (desafio)

**Fora:** `sys.getsizeof` e bytes por tipo · busca linear e binária · ponteiro ·
compilação · `return` · mutável vs imutável como termo (o desafio mostra a ideia sem dar o nome)

Esta aula já foi maior. Tinha busca binária com lacunas e contagem de bytes, e era
demais pra esta turma — que ainda não fechou `def` com parâmetro. O que sobrou é
uma ideia só, mostrada três vezes.

> **Busca binária não é pra esta turma**, nem hoje nem na #10. Foi escrita e
> descartada; se algum dia fizer sentido, está no commit `e0064cd`.

## A armadilha do board

O board é C, e em C **o nome é a caixa**: `int a = 5; int b = 5;` reserva duas, sempre.
Em Python **o nome é uma seta** pra uma caixa que vive em outro lugar, e `id()` mostra a
caixa — nunca onde o nome mora. Nesse ponto o board e a tela **discordam**.

O roteiro tem a tabela de o-que-usar-e-o-que-não do board, mais o desenho da seta pra
copiar na lousa. Desenhe a seta **antes** de rodar o script 1 e deixe lá a aula inteira:
com ela na lousa, o `lista2 = lista1` deixa de ser choque e vira consequência.

## Arquivos

| Arquivo | Pra quê |
|---|---|
| [ROTEIRO-AULA.md](./ROTEIRO-AULA.md) | O painel: board de um lado, tela do outro |
| [CARTAO-DE-MEMORIA.md](./CARTAO-DE-MEMORIA.md) | Consulta do aluno — imprimir 1 por aluno |
| [gabarito/1-onde-mora.py](./gabarito/1-onde-mora.py) | O número da caixa · `is` |
| [gabarito/2-duas-setas.py](./gabarito/2-duas-setas.py) | O bug: mexe numa, muda a outra |
| [gabarito/3-conserto.py](./gabarito/3-conserto.py) | `list()` faz caixa nova |
| [gabarito/4-desafio.py](./gabarito/4-desafio.py) | Desafio: `append` muda a caixa, `=` faz a seta pular. Bônus, depois do marco |

## Marco mínimo

Ele aponta o `e a mesma caixa? True` na tela e diz
**"é uma caixa só, com duas setas"**. Minuto 45. Tudo depois é bônus.

## O momento que carrega a aula

Minuto 30: antes de rodar o `2-duas-setas.py`, todo mundo escreve no papel o
que acha que vai sair no `lista1`. Todos vão escrever `[1, 2, 3]`. Sai `[1, 2, 3, 4]`.
O palpite escrito à mão é o que separa quem entendeu de quem colou da IA.
