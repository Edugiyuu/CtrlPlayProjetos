# CtrlPlay Alunos

Material de aula organizado **por nível** (CK1–CK4, CT1–CT4, CY1–CY4) em
[`niveis/`](niveis/). As aulas de cada nível são minhas — uma pasta por aula:

```text
CtrlPlayAlunos/
├── niveis/
│   ├── CK1/<NN-nome-da-aula>
│   ├── CK2/...
│   └── ...            # CK1–4, CT1–4, CY1–4
├── turmas/            # material antigo, por turma — mantido como estava
├── docs/class/        # templates de aula (prática e teórica) — copiar e preencher
└── outros-projetos/   # material avulso
```

Na hora de dar aula: abra [`niveis/`](niveis/README.md), entre no nível da
turma do dia e pegue a aula. O material antigo por turma continua em
[`turmas/`](turmas/README.md).

## Para os alunos

Os computadores já devem estar preparados pelo professor. O aluno apenas:

1. Cria ou abre a pasta da atividade no VS Code.
2. Cria o arquivo `main.py`.
3. Digita o código da aula.
4. Clica no botão de executar do VS Code.

Não é necessário criar ambiente virtual, ativar `.venv`, usar `pip` ou criar
`requirements.txt` durante a aula.

## Preparação do professor

Execute uma única vez em cada computador, antes da aula:

```powershell
winget install --id Python.Python.3.11 --exact
py -3.11 -m pip install --user mediapipe==0.10.21 PyAutoGUI
```

No VS Code, selecione **Python 3.11** como interpretador. Depois disso, os
alunos podem usar apenas o botão de executar.

## Projetos avulsos (sem turma fixa)

- [Mão verde com OpenCV](./outros-projetos/primeira-webcam-opencv/README.md)
- [Teclado virtual com OpenCV](./outros-projetos/teclado-virtual-opencv/README.md)
- [Quiz interativo com DOM](./outros-projetos/projeto-quiz-dom/ROTEIRO-AULA.md)
- [CRUD de Cartas Pokémon](./outros-projetos/crud-cartas-pokemon/README.md)
- [Scripts de Minigolfe (Unity)](./outros-projetos/aula-unity-minigolf/SCRIPTS-VERSAO-ANTIGA.md)

## Aulas

Para **criar uma aula nova**, copie o esqueleto pronto de
[`docs/class/`](./docs/class/README.md) — tem um para aula **prática** (o aluno
programa) e outro para aula **teórica** (o aluno entende e explica):

```bash
cp -r docs/class/aula-pratica niveis/<NÍVEL>/<NN>-nome-da-aula
```

O fluxo completo para planejar, dar e registrar aulas está em
[alunos/WORKFLOW-AULAS.md](./alunos/WORKFLOW-AULAS.md). O progresso de cada turma
fica em `alunos/progresso/turma-<id>.md`.

## Referência de conteúdo

Material de consulta sobre os conceitos, independente de turma — para preparar
aula e para consultar na hora:

- [Relacionamentos em modelagem de dados](./docs/referencia/relacionamentos-modelagem-dados.md)
  — 1:1, 1:N, N:N, tabela de junção e auto-relacionamento, com exemplos reais
  e o equivalente em Mongo e Sequelize.
