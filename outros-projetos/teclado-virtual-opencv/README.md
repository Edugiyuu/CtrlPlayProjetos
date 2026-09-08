# Teclado virtual com OpenCV

A webcam mostra três teclas: **A**, **B** e **C**. Quando o indicador toca em
uma delas, a letra é digitada no programa selecionado, como Google, Word ou
Bloco de Notas.

## Arquivos da aula

- `main.py`: código principal.
- `rastreador.py`: reconhecimento da mão, entregue pronto pelo professor.
- `hand_landmarker.task`: modelo usado pelo MediaPipe.

Não existe `.venv` ou `requirements.txt` no projeto.

## Preparação do professor — uma única vez

```powershell
winget install --id Python.Python.3.11 --exact
py -3.11 -m pip install --user mediapipe==0.10.21 PyAutoGUI
```

No VS Code:

1. Pressione `Ctrl + Shift + P`.
2. Procure por **Python: Select Interpreter**.
3. Selecione **Python 3.11.9**.

## Executar

Pelo VS Code, abra `main.py` e clique no botão triangular de executar.

Para testar pelo terminal:

```powershell
cd D:\GitHub\CtrlPlayAlunos\teclado-virtual-opencv
py -3.11 main.py
```

Prepare a tela com o navegador e a janela da webcam lado a lado. Depois que a
câmera abrir, clique na caixa de pesquisa do Google. As letras tocadas serão
enviadas para o campo selecionado.

Para encerrar, feche a janela da câmera pelo `X`. A tecla `Q` também encerra
quando a janela da câmera estiver selecionada.

> Atenção: o programa escreve no aplicativo que estiver em foco. Durante a
> atividade, mantenha selecionado apenas um campo de texto de teste.

## Roteiro — 50 minutos

### 1. Webcam — 10 minutos

Os alunos digitam a abertura da câmera, o `while`, `camera.read()`, `imshow()` e
`waitKey()`.

### 2. Teclas virtuais — 15 minutos

```python
TECLAS = [("A", 60), ("B", 250), ("C", 440)]
```

### 3. Indicador e colisão — 15 minutos

```python
dedo = rastreador.indicador(imagem)
tocou = dedo and x < dedo[0] < x + 140 and 70 < dedo[1] < 180
```

### 4. Digitação real — 10 minutos

```python
pyautogui.write(tecla_atual.lower())
```
