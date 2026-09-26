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

**Dentro:** caixa · etiqueta · `id()` · `is` · `lista2 = lista1` não copia · `list()` copia

**Fora:** `sys.getsizeof` e bytes por tipo · busca linear e binária · ponteiro ·
compilação · `return` · mutável vs imutável (é o gancho da próxima)

Esta aula já foi maior. Tinha busca binária com lacunas e contagem de bytes, e era
demais pra esta turma — que ainda não fechou `def` com parâmetro. O que sobrou é
uma ideia só, mostrada três vezes.

## Arquivos

| Arquivo | Pra quê |
|---|---|
| [ROTEIRO-AULA.md](./ROTEIRO-AULA.md) | O painel: board de um lado, tela do outro |
| [CARTAO-DE-MEMORIA.md](./CARTAO-DE-MEMORIA.md) | Consulta do aluno — imprimir 1 por aluno |
| [gabarito/1-onde-mora.py](./gabarito/1-onde-mora.py) | O número da caixa · `is` |
| [gabarito/2-duas-etiquetas.py](./gabarito/2-duas-etiquetas.py) | O bug: mexe numa, muda a outra |
| [gabarito/3-conserto.py](./gabarito/3-conserto.py) | `list()` faz caixa nova |
| [guardado-pra-10/](./guardado-pra-10/) | Busca linear e binária, prontas — não usar hoje |

## Marco mínimo

Ele aponta os dois números de caixa iguais na tela e diz
**"é uma caixa só, com dois nomes"**. Minuto 45. Tudo depois é bônus.

## O momento que carrega a aula

Minuto 30: antes de rodar o `2-duas-etiquetas.py`, todo mundo escreve no papel o
que acha que vai sair no `lista1`. Todos vão escrever `[1, 2, 3]`. Sai `[1, 2, 3, 4]`.
O palpite escrito à mão é o que separa quem entendeu de quem colou da IA.
