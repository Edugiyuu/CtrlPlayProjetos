# NPC e Diálogo — o mapa começa a responder

Aula **#4** da turma **#11333 (CT1)** — Guilherme.
Segunda e última aula de "básico": o mapa da aula #3 ganha gente dentro.
O aluno cria um **objeto**, dá um gráfico pra ele e faz o primeiro **evento**
acontecer — o NPC fala quando você aperta ação.

> Substitui "Apresentando seu projeto com Pitch Document" do cronograma
> oficial. Parte do bloco de 6 aulas de RPG Paper Maker (#3 a #8).
> Cronograma oficial inalterado — adaptação registrada no progresso da turma.

## De onde o aluno está saindo

Aula #3: criou o projeto `Treino RPG`, pintou o mapa `Vila de Treino`,
entendeu `Floor` × `Face sprite`, marcou `Start position` e rodou o teste.
**Nunca** abriu a aba `Object`, nunca viu um comando. Se a aula #3 parou no
marco mínimo (sem o desafio da praça), comece refazendo a praça — 10 min.

## O que o aluno pratica

- Criar um **objeto** no mapa (aba `Object`, clique duplo no square)
- Dar um gráfico ao objeto (`Graphics`) e nomear (`Name`)
- Entender **evento** (`Hero action`) e **comando** (`Show text...`)
- Escrever diálogo com nome de quem fala (`Interlocutor`)
- Encadear **dois** comandos em sequência
- Fazer o NPC andar sozinho (`Moving > Type: Random`)

## O que fica de fora (de propósito)

Variável, condição, batalha, item, loja, teleporte, `Display choices...`
(escolhas). Tudo isso entra das aulas #6 a #8. Se ele quiser fazer o NPC
"lembrar" que já falou com ele: **é a aula #8**, e é uma ótima pergunta — anote.

## Formato

3 blocos curtos: primeiro NPC conduzido por você → segundo NPC por conta dele
→ desafio. O `DESAFIO.md` ("O guarda da entrada") fecha a aula.

## Como rodar

<https://rpg-paper-maker.com/play> → o projeto `Treino RPG` aparece em
**Recent projects**. Se não aparecer (PC diferente, cache limpo):
`File > Import project...` e escolher o `.zip` exportado na aula #3.

> ⚠️ Fim de toda aula: `File > Export project...` (`CTRL + E`) e o `.zip` vai
> pro pendrive/Drive do aluno.

## Arquivos

```text
04-aula-rpgpm-npc-e-dialogo/
├── README.md              # este arquivo (professor)
├── ROTEIRO-AULA.md        # professor: blocos de tempo, marco mínimo, erros comuns
├── DESAFIO.md             # ALUNO: o que fazer e o que testar
├── CARTAO-DE-MEMORIA.md   # ALUNO: folha de consulta (objeto, evento, comando)
└── gabarito/
    └── GABARITO.md        # professor: caminho exato de cliques + respostas esperadas
```

## Registro pós-aula

Despejo cru: até onde chegou, onde travou, o que cortar na #5.
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
