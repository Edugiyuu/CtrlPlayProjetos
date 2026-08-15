# Teclado virtual com OpenCV

A webcam mostra três teclas: **A**, **B** e **C**. Quando o indicador toca em
uma delas, a letra é digitada de verdade no programa que estiver selecionado,
como Google, Word ou Bloco de Notas.

## Arquivos da aula

- `main.py`: código curto que os alunos digitam.
- `rastreador.py`: reconhecimento da mão, entregue pronto pelo professor.
- `hand_landmarker.task`: modelo do MediaPipe, também entregue pronto.
- `requirements.txt`: bibliotecas usadas.

Os alunos não precisam digitar nem entender `rastreador.py`. Na aula, basta
explicar que `rastreador.indicador(imagem)` devolve a posição `(x, y)` da ponta
do dedo.

## Preparação do professor

Com o ambiente virtual ativado:

```powershell
python -m pip install -r requirements.txt
python main.py
```

Prepare a tela com o navegador e a janela da webcam lado a lado. Depois que a
câmera abrir, clique na caixa de pesquisa do Google. As letras tocadas serão
enviadas para o campo que estiver selecionado.

Para encerrar, feche a janela da câmera pelo `X`. A tecla `Q` também encerra
quando a janela da câmera estiver selecionada.

> Atenção: o programa escreve no aplicativo que estiver em foco. Durante a
> atividade, mantenha selecionado apenas um campo de texto de teste.

## Roteiro — 50 minutos

### 1. Webcam — 10 minutos

Os alunos digitam a abertura da câmera, o `while`, `camera.read()`, `imshow()` e
`waitKey()`. Explique que cada repetição lê uma nova imagem.

### 2. Teclas virtuais — 15 minutos

Digite a lista:

```python
TECLAS = [("A", 60), ("B", 250), ("C", 440)]
```

Depois desenhe os três retângulos com `cv2.rectangle()` e as letras com
`cv2.putText()`. Explique somente as coordenadas `x` e `y`.

### 3. Indicador e colisão — 15 minutos

Use a linha pronta:

```python
dedo = rastreador.indicador(imagem)
```

O toque acontece quando a coordenada do dedo está dentro do bloco:

```python
tocou = dedo and x < dedo[0] < x + 140 and 70 < dedo[1] < 180
```

Mude a tecla para verde quando `tocou` for verdadeiro.

### 4. Digitação real — 10 minutos

Mostre que esta linha envia a letra ao aplicativo selecionado:

```python
pyautogui.write(tecla_atual.lower())
```

Abra o Google, selecione a pesquisa e forme `abc`, `cab` ou `bac`. A comparação
com `ultima_tecla` impede a repetição enquanto o dedo permanece no bloco.

## Desafio opcional

Trocar as letras, adicionar uma quarta tecla ou criar um bloco para espaço com:

```python
pyautogui.press("space")
```
