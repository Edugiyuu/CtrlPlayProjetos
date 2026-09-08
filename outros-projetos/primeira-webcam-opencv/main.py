# Importa o OpenCV, biblioteca usada para acessar e mostrar a webcam.
import cv2

# Importa o MediaPipe, biblioteca que consegue encontrar os pontos das mãos.
import mediapipe as mp

# Abre a webcam principal do computador; o número 0 representa a primeira câmera.
camera = cv2.VideoCapture(0)

# Cria o detector e permite encontrar até duas mãos ao mesmo tempo.
maos = mp.solutions.hands.Hands(max_num_hands=2)

# Guarda a ferramenta do MediaPipe responsável por fazer os desenhos.
desenho = mp.solutions.drawing_utils

# Define que os pontos e as linhas terão cor verde e espessura 3.
verde = desenho.DrawingSpec(thickness=6)

# Repete o código continuamente para formar o vídeo da webcam.
while True:
    # Captura uma nova imagem da webcam e informa se a captura funcionou.
    sucesso, imagem = camera.read()

    # Verifica se ocorreu algum problema ao capturar a imagem.
    if not sucesso:
        # Encerra a repetição caso a câmera não consiga fornecer uma imagem.
        break

    # Espelha a imagem para ela funcionar como um espelho de verdade.
    imagem = cv2.flip(imagem, 1)

    # Converte as cores do formato do OpenCV para o formato usado pelo MediaPipe.
    imagem_rgb = cv2.cvtColor(imagem, cv2.COLOR_BGR2RGB)

    # Envia a imagem ao MediaPipe para procurar as mãos.
    resultado = maos.process(imagem_rgb)

    # Verifica se o MediaPipe encontrou pelo menos uma mão na imagem.
    if resultado.multi_hand_landmarks:
        # Desenha os pontos e as linhas sobre a primeira mão encontrada.
        desenho.draw_landmarks(
            imagem,  # Escolhe a imagem que receberá o desenho.
            resultado.multi_hand_landmarks[0],  # Seleciona a primeira mão encontrada.
            mp.solutions.hands.HAND_CONNECTIONS,  # Informa quais pontos devem ser ligados.
            verde,  # Escolhe a aparência verde dos pontos.
            verde,  # Escolhe a aparência verde das linhas.
        )  # Finaliza o comando que desenha a primeira mão.

        # Verifica se a lista possui uma segunda mão antes de acessar a posição 1.
        if len(resultado.multi_hand_landmarks) > 1:
            # Desenha os pontos e as linhas sobre a segunda mão encontrada.
            desenho.draw_landmarks(
                imagem,  # Escolhe a imagem que receberá o desenho.
                resultado.multi_hand_landmarks[1],  # Seleciona a segunda mão encontrada.
                mp.solutions.hands.HAND_CONNECTIONS,  # Informa quais pontos serão ligados.
                verde,  # Escolhe a aparência verde dos pontos.
                verde,  # Escolhe a aparência verde das linhas.
            )  # Finaliza o comando que desenha a segunda mão.

    # Mostra a imagem pronta em uma janela chamada "Minhas mãos verdes".
    cv2.imshow("Minhas maos verdes", imagem)

    # Verifica se a tecla Q foi pressionada enquanto a janela estava selecionada.
    if cv2.waitKey(1) == ord("q"):
        # Encerra a repetição quando o aluno pressiona Q.
        break

# Encerra o detector de mãos do MediaPipe.
maos.close()

# Libera a webcam para que outros programas possam utilizá-la.
camera.release()

# Fecha todas as janelas criadas pelo OpenCV.
cv2.destroyAllWindows()
