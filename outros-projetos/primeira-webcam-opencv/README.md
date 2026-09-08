# Minha mão verde com OpenCV

O programa abre a webcam e desenha pontos e linhas verdes sobre até duas mãos.
Todo o código da atividade fica em um único arquivo chamado `main.py`.

## O que o aluno faz

O computador deve estar preparado antes da aula. Durante a atividade, o aluno
faz somente isto:

1. Abre o VS Code.
2. Cria uma pasta para o projeto.
3. Cria um arquivo chamado `main.py`.
4. Digita o código com o professor.
5. Clica no botão triangular **Executar arquivo Python**.

Não é necessário criar `.venv`, usar `pip`, instalar bibliotecas ou criar
`requirements.txt` durante a aula.

Para encerrar, clique na janela da webcam e pressione `Q`.

## Preparação do professor — uma única vez

Esta etapa deve ser feita antes da aula, sem a participação dos alunos.

### 1. Instalar o Python 3.11

```powershell
winget install --id Python.Python.3.11 --exact
```

Feche e abra o PowerShell depois da instalação.

### 2. Instalar o MediaPipe

```powershell
py -3.11 -m pip install --user mediapipe==0.10.21
```

O MediaPipe instala também o OpenCV usado pelo projeto.

### 3. Configurar o VS Code

1. Pressione `Ctrl + Shift + P`.
2. Procure por **Python: Select Interpreter**.
3. Selecione **Python 3.11.9**.

Essa escolha fica salva no computador. Os alunos não precisam repeti-la.

## Teste do professor

Antes da aula, abra o terminal na pasta do projeto e execute:

```powershell
py -3.11 main.py
```

Se a webcam abrir e as linhas verdes aparecerem, o computador está pronto.

## O que explicar na aula

- `VideoCapture(0)` abre a câmera.
- `camera.read()` captura uma imagem.
- `cv2.flip()` espelha a imagem.
- `maos.process()` procura as mãos.
- `draw_landmarks()` desenha os pontos e as linhas.
- `[0]` seleciona a primeira mão e `[1]` seleciona a segunda.
- `imshow()` mostra o resultado.

As linhas do MediaPipe podem ser apresentadas como uma ferramenta pronta. O
foco da aula é abrir, modificar e mostrar imagens com OpenCV.

## Problemas comuns

### O VS Code mostra que `cv2` ou `mediapipe` não existe

Confira se o interpretador selecionado no VS Code é o **Python 3.11.9**.

### A webcam não abre

- Feche Meet, Teams, Discord e outros programas que estejam usando a câmera.
- Confira as permissões de câmera do Windows.
- Se houver outra câmera, troque `VideoCapture(0)` por `VideoCapture(1)`.

### A tecla `Q` não encerra

Clique primeiro na janela da webcam e pressione `Q` novamente.
