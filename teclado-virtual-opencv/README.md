# Teclado virtual com OpenCV

A webcam mostra três teclas: **A**, **B** e **C**. Quando o indicador toca em
uma delas, a letra é digitada no programa selecionado, como Google, Word ou
Bloco de Notas.

## Arquivos da aula

- `main.py`: código principal.
- `rastreador.py`: reconhecimento da mão, entregue pronto pelo professor.
- `hand_landmarker.task`: modelo do MediaPipe.
- `requirements.txt`: bibliotecas usadas.

## Preparar e executar

Use somente o ambiente virtual localizado na raiz:

```powershell
cd D:\GitHub\CtrlPlayAlunos
.\.venv\Scripts\Activate.ps1
python -m pip install -r .\teclado-virtual-opencv\requirements.txt
python .\teclado-virtual-opencv\main.py
```

Prepare a tela com o navegador e a janela da webcam lado a lado. Depois que a
câmera abrir, clique na caixa de pesquisa do Google. As letras tocadas serão
enviadas para o campo selecionado.

Para encerrar, feche a janela da câmera pelo `X`. A tecla `Q` também encerra
quando a janela da câmera estiver selecionada. Depois, execute:

```powershell
deactivate
```

> Atenção: o programa escreve no aplicativo que estiver em foco. Durante a
> atividade, mantenha selecionado apenas um campo de texto de teste.

## Roteiro — 50 minutos

### 1. Webcam — 10 minutos

Os alunos digitam a abertura da câmera, o `while`, `camera.read()`, `imshow()` e
`waitKey()`. Explique que cada repetição lê uma nova imagem.

### 2. Teclas virtuais — 15 minutos

```python
TECLAS = [("A", 60), ("B", 250), ("C", 440)]
```

Desenhe os três retângulos com `cv2.rectangle()` e as letras com
`cv2.putText()`. Explique somente as coordenadas `x` e `y`.

### 3. Indicador e colisão — 15 minutos

```python
dedo = rastreador.indicador(imagem)
tocou = dedo and x < dedo[0] < x + 140 and 70 < dedo[1] < 180
```

Mude a tecla para verde quando `tocou` for verdadeiro.

### 4. Digitação real — 10 minutos

```python
pyautogui.write(tecla_atual.lower())
```

Abra o Google, selecione a pesquisa e forme `abc`, `cab` ou `bac`.

## Desafio opcional

Trocar as letras, adicionar uma quarta tecla ou criar espaço com:

```python
pyautogui.press("space")
```
