"""Codigo que os alunos digitam na aula."""

import cv2
import pyautogui

from rastreador import Rastreador


TECLAS = [("A", 60), ("B", 250), ("C", 440)]
LARGURA, ALTURA = 640, 480
JANELA = "Teclado virtual"

camera = cv2.VideoCapture(0)
if not camera.isOpened():
    raise RuntimeError("Nao foi possivel abrir a webcam.")

rastreador = Rastreador()
ultima_tecla = None
pyautogui.PAUSE = 0.15

# Mantem a camera visivel mesmo quando o aluno clica no Google.
cv2.namedWindow(JANELA, cv2.WINDOW_NORMAL)
cv2.resizeWindow(JANELA, LARGURA, ALTURA)
cv2.moveWindow(JANELA, 20, 40)
cv2.setWindowProperty(JANELA, cv2.WND_PROP_TOPMOST, 1)

try:
    while True:
        sucesso, imagem = camera.read()
        if not sucesso:
            break

        imagem = cv2.flip(imagem, 1)
        imagem = cv2.resize(imagem, (LARGURA, ALTURA))
        dedo = rastreador.indicador(imagem)
        tecla_atual = None

        for letra, x in TECLAS:
            tocou = dedo and x < dedo[0] < x + 140 and 70 < dedo[1] < 180
            cor = (0, 200, 0) if tocou else (255, 100, 0)

            cv2.rectangle(imagem, (x, 70), (x + 140, 180), cor, cv2.FILLED)
            cv2.putText(imagem, letra, (x + 45, 150),
                        cv2.FONT_HERSHEY_SIMPLEX, 2, (255, 255, 255), 4)

            if tocou:
                tecla_atual = letra

        if dedo:
            cv2.circle(imagem, dedo, 12, (0, 255, 255), cv2.FILLED)

        # Envia a letra para o Google, Bloco de Notas ou outro campo selecionado.
        if tecla_atual and tecla_atual != ultima_tecla:
            pyautogui.write(tecla_atual.lower())

        ultima_tecla = tecla_atual
        cv2.putText(imagem, "Clique em um campo de texto para digitar",
                    (70, 440), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
        cv2.imshow(JANELA, imagem)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break
        if cv2.getWindowProperty(JANELA, cv2.WND_PROP_VISIBLE) < 1:
            break
finally:
    camera.release()
    rastreador.fechar()
    cv2.destroyAllWindows()
