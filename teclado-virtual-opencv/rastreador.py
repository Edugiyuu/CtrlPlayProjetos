"""Reconhecimento da mao: este arquivo ja e entregue pronto aos alunos."""

from pathlib import Path

import cv2
import mediapipe as mp


class Rastreador:
    def __init__(self):
        modelo = Path(__file__).with_name("hand_landmarker.task")
        opcoes = mp.tasks.vision.HandLandmarkerOptions(
            base_options=mp.tasks.BaseOptions(model_asset_path=str(modelo)),
            running_mode=mp.tasks.vision.RunningMode.VIDEO,
            num_hands=1,
            min_hand_detection_confidence=0.7,
            min_hand_presence_confidence=0.7,
            min_tracking_confidence=0.7,
        )
        self.detector = mp.tasks.vision.HandLandmarker.create_from_options(opcoes)
        self.tempo = 0

    def indicador(self, imagem):
        rgb = cv2.cvtColor(imagem, cv2.COLOR_BGR2RGB)
        frame = mp.Image(image_format=mp.ImageFormat.SRGB, data=rgb)
        self.tempo += 1
        resultado = self.detector.detect_for_video(frame, self.tempo)

        if not resultado.hand_landmarks:
            return None

        ponto = resultado.hand_landmarks[0][8]
        altura, largura = imagem.shape[:2]
        return int(ponto.x * largura), int(ponto.y * altura)

    def fechar(self):
        self.detector.close()
