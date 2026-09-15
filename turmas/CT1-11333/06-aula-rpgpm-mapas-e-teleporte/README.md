# A Vila e a Caverna #2 — floresta, caverna e teleporte

Aula **#6** da turma **#11333 (CT1)** — Guilherme.
Os três mapas deixam de ser telas soltas e viram **um mundo**: o herói sai da
vila, atravessa a floresta e entra na caverna — e consegue voltar.

> Substitui "Clones? Projéteis? Inimigos? Parte 1" do cronograma oficial.
> Parte do bloco de 6 aulas de RPG Paper Maker (#3 a #8). Cronograma oficial
> inalterado — adaptação registrada no progresso da turma.

## De onde o aluno está saindo

Aula #5: projeto `A Vila e a Caverna` com `Vila` pintada e 4 NPCs, incluindo o
chefe que dá a missão. `Floresta` e `Caverna` existem mas estão **vazias**.
Ele já cria objeto e diálogo sem passo a passo. **Nunca** usou um comando que
não fosse `Show text...`.

## O que o aluno pratica

- Pintar dois mapas novos com clima diferente do primeiro (floresta fechada,
  caverna escura)
- O comando **`Teleport object...`**: escolher **quem** vai (`> Hero`) e
  **para onde** (mapa + square de destino)
- Teleporte de **ida e volta** — e por que os dois não são o mesmo objeto
- Usar `Change screen tone...` pra escurecer a caverna (bônus)

## O que fica de fora (de propósito)

Batalha, monstro, item, `Datas`, variável. A caverna vai ter um lugar **vazio
reservado** pro monstro — e isso é de propósito: é o gancho da aula #7.

## Formato

Bloco 1: pintar floresta (rápido, cronometrado). Bloco 2: o primeiro teleporte
conduzido. Bloco 3: ele faz os outros três sozinhos. O `DESAFIO.md` ("O
caminho inteiro") é o teste de ponta a ponta.

## Como rodar

<https://rpg-paper-maker.com/play> → `A Vila e a Caverna` em **Recent
projects**, ou `File > Import project...` com o `.zip` da aula #5.

> ⚠️ `CTRL + E` no fim da aula, sempre.

## Arquivos

```text
06-aula-rpgpm-mapas-e-teleporte/
├── README.md              # este arquivo (professor)
├── ROTEIRO-AULA.md        # professor: blocos de tempo, marco mínimo, erros comuns
├── DESAFIO.md             # ALUNO: o que fazer e o que testar
├── CARTAO-DE-MEMORIA.md   # ALUNO: folha de consulta (teleporte)
└── gabarito/
    └── GABARITO.md        # professor: tabela de teleportes + cliques exatos
```

## Registro pós-aula

Despejo cru: até onde chegou, onde travou, o que cortar na #7.
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
