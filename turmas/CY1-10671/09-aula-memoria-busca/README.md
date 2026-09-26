# Aula #9 — Memória e busca · turma #10671 (CY1)

Aula #9 do cronograma, **adaptada**: no lugar de "Módulos", entra memória do
computador e busca. Motivo: `import` e módulo já foram dados na [#8](../08-aula-bibliotecas-turtle/),
com conceito, checagem e erro comum — repetir seria uma aula perdida.

Adaptado do board **CS50** (Whimsical, bloco "Arrays" + "AULA 4"), que é em C.
Dos 4 blocos do board, 3 viram Python e ficam **mais** concretos: `id()` e
`sys.getsizeof()` são uma linha e imprimem na tela, enquanto em C custam ponteiro
e `sizeof`. O bloco **Compiling** foi cortado — não tem equivalente honesto em
Python e é abstrato demais pra esta turma.

## Por que este formato

A #6 e a #7 mostraram o padrão: a turma reconhece conceito quando perguntada,
mas trava ao produzir e recorre à IA no primeiro impasse. A #8 resolveu isso
colocando resultado na tela no minuto 10. Aqui é o mesmo: o número **5.000.000
espiadas vs 23** aparece no projetor antes de qualquer explicação, e o bug do
`l2 = l1` é um erro que eles já cometeram sem entender.

`return` continua **fora** — a busca termina com `print` e `break`, igual à #8.

## Arquivos

| Arquivo | Pra quê |
|---|---|
| [ROTEIRO-AULA.md](./ROTEIRO-AULA.md) | O painel da aula: blocos, conceitos, erros, checklist |
| [CARTAO-DE-MEMORIA.md](./CARTAO-DE-MEMORIA.md) | Folha de consulta do aluno — imprimir 1 por aluno |
| [DESAFIO.md](./DESAFIO.md) | O desafio das 3 lacunas + tabela de espiadas |
| [busca_binaria_COMECE_AQUI.py](./busca_binaria_COMECE_AQUI.py) | Arquivo do aluno, com as 3 lacunas |
| [gabarito/](./gabarito/) | Os 4 scripts prontos + respostas |

## Marco mínimo

Ele aponta os dois `id()` iguais na tela e diz **"é uma caixa só, com duas etiquetas"**.
Tudo depois do minuto 45 é bônus.

## Antes da aula

Rode `python gabarito/busca_linear.py` no PC mais fraco da sala. Se passar de 5
segundos, troque `5000000` por `1000000` em **todos** os arquivos.
