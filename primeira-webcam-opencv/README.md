# Minha mão verde com OpenCV

Projeto introdutório que abre a webcam e desenha os pontos e as linhas verdes
de até duas mãos. Todo o código está em `main.py`; não existe `rastreador.py`
nem modelo separado.

## Antes de começar

Este repositório usa somente um ambiente virtual:

```text
D:\GitHub\CtrlPlayAlunos\.venv
```

Não crie `.venv` dentro das pastas das aulas.

Quando `(.venv)` aparece no início do terminal, o ambiente está ativo:

```text
(.venv) PS D:\GitHub\CtrlPlayAlunos>
```

Para sair do ambiente virtual:

```powershell
deactivate
```

Fechar o PowerShell também encerra a ativação. Isso não apaga o ambiente.

## Primeira configuração

Estes comandos são executados apenas uma vez em cada computador.

### 1. Confirmar o Python 3.11

```powershell
py -3.11 --version
```

Se a versão não estiver instalada:

```powershell
winget install --id Python.Python.3.11 --exact
```

Depois, feche e abra o PowerShell.

### 2. Criar o único ambiente virtual

```powershell
cd D:\GitHub\CtrlPlayAlunos
py -3.11 -m venv .venv
```

Se a pasta `.venv` já existir, não execute o segundo comando novamente.

### 3. Ativar e instalar

```powershell
cd D:\GitHub\CtrlPlayAlunos
.\.venv\Scripts\Activate.ps1
python -m pip install -r .\primeira-webcam-opencv\requirements.txt
```

## Rodar o projeto

```powershell
cd D:\GitHub\CtrlPlayAlunos
.\.venv\Scripts\Activate.ps1
python .\primeira-webcam-opencv\main.py
```

Mostre as mãos abertas para a câmera. Pressione `Q` com a janela selecionada
para encerrar. Depois, use `deactivate` para sair do ambiente virtual.

## Uso nas próximas aulas

Depois da primeira configuração, use somente:

```powershell
cd D:\GitHub\CtrlPlayAlunos
.\.venv\Scripts\Activate.ps1
python .\primeira-webcam-opencv\main.py
```

## Problemas comuns

### O terminal mostra outro ambiente virtual

```powershell
deactivate
cd D:\GitHub\CtrlPlayAlunos
.\.venv\Scripts\Activate.ps1
```

### `No module named 'cv2'` ou `No module named 'mediapipe'`

```powershell
cd D:\GitHub\CtrlPlayAlunos
.\.venv\Scripts\Activate.ps1
python -m pip install -r .\primeira-webcam-opencv\requirements.txt
```

### A webcam não abre

- Feche Meet, Teams, Discord e outros programas que utilizam a câmera.
- Confira as permissões de câmera do Windows.
- Se houver outra câmera, troque `VideoCapture(0)` por `VideoCapture(1)`.

### `Q` não encerra

Clique na janela da câmera e pressione `Q` novamente.

## O que explicar na aula

- `VideoCapture(0)` abre a câmera.
- `camera.read()` captura uma imagem.
- `cv2.flip()` espelha a imagem.
- `maos.process()` procura as mãos.
- `draw_landmarks()` desenha os pontos e as linhas.
- `[0]` seleciona a primeira mão e `[1]` seleciona a segunda.
- `imshow()` mostra o resultado.

As linhas do MediaPipe podem ser apresentadas como uma ferramenta pronta. O
foco da aula continua sendo abrir, modificar e mostrar imagens com OpenCV.
