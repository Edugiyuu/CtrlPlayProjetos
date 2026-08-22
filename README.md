# CtrlPlay Alunos

Cada pasta representa um projeto independente para as aulas:

```text
CtrlPlayAlunos/
├── primeira-webcam-opencv/
├── projeto-quiz-dom/
└── teclado-virtual-opencv/
```

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

## Projetos

- [Mão verde com OpenCV](./primeira-webcam-opencv/README.md)
- [Teclado virtual com OpenCV](./teclado-virtual-opencv/README.md)
