<!--
  TEMPLATE — README da aula teórica. Arquivo do PROFESSOR.
  É o que você abre primeiro na hora da aula. Apague este comentário depois.
-->

# <TEMA DA AULA> — <o que eles vão entender, em 3 palavras>

Aula **#<N>** da turma **#<id> (<CÓDIGO>)** — <aluno(s)>.
Aula **teórica**: o resultado não é código rodando, é o aluno conseguindo
**explicar** <o conceito central> com as próprias palavras.

<1–2 frases: por que esta aula existe agora, e o que ela destrava adiante.
Ex.: "Primeira aula do módulo. Eles nunca programaram. Sem esta base, 'variável'
e 'condicional' nas próximas aulas viram decoreba.">

## De onde o aluno está saindo

<O ponto REAL. Numa turma de entrada: "nunca programou, nunca ouviu a palavra
algoritmo". Sem otimismo.>

## O que o aluno vai entender

- <conceito 1 — em linguagem de aluno, não de ementa>
- <conceito 2>
- <conceito 3>

**Marco mínimo:** <a menor coisa que já conta como aula cumprida>

## O que fica de fora (de propósito)

<O que você corta e em que aula entra. Aula teórica desanda quando você
começa a puxar assunto correlato.>

## Formato

<Como a aula corre. Ex.: "3 blocos de conceito, cada um com pergunta de
checagem, intercalados com uma dinâmica desplugada. Última meia hora é a
atividade no Excalidraw, com apresentação no fim.">

> A cada bloco: **EXPLICO → MOSTRO → ELES FAZEM**. Nunca mais de ~10 min de
> professor falando.

## Materiais

- <quadro / papel / Excalidraw / projetor>
- <objeto da dinâmica desplugada>
- <o que precisa estar aberto antes de eles chegarem>

## Arquivos

```text
<NN>-<nome-da-aula>/
├── README.md                      # este arquivo (professor)
├── ROTEIRO-AULA.md                # professor: conceitos + minuto a minuto + perguntas prontas
├── ATIVIDADE.md                   # ALUNO: a tarefa que produz o artefato
├── CARTAO-DE-MEMORIA.md           # ALUNO: as definições numa folha só
└── gabarito/
    └── GABARITO-ATIVIDADE.md      # professor: exemplo bom, critérios, o que aceitar
```

## Registro pós-aula

Atualizar `alunos/progresso/turma-<id>.md`: status da aula #<N>, presença, e
**o que eles realmente entenderam** — não "vimos o conteúdo X", e sim "o
Fulano ainda confunde A com B". Guardar os artefatos (print/link) se forem
servir de referência depois.
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
