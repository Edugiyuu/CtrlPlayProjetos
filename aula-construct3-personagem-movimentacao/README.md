# Aula: Personagem e movimentação — Construct 3 (Livia)

## Objetivo
A partir do projeto que a Livia já começou (sprites + cenário da aula passada),
criar o **personagem jogável** e fazer ele **andar pela tela** com o teclado, sem
atravessar o cenário.

## O que a aluna pratica
- Criar um objeto **Sprite** e desenhar/importar o personagem.
- Adicionar **comportamento** (behavior) a um objeto — `8 Direction` (ou `Platform`).
- Usar o comportamento **Solid** no cenário para criar colisão.
- Testar o jogo com **Preview** e ajustar propriedades (velocidade, aceleração).
- (Bônus) Animações `Idle`/`Walk` e câmera seguindo o player (`Scroll To`).

## Pré-requisito real
Aula passada: a Livia já sabe criar Sprite, pintar no editor de imagem do C3 e
posicionar objetos numa Layout. **Comportamentos são novidade hoje.**

## Como "rodar"
Não tem build. É no navegador:

1. Abrir <https://editor.construct.net>.
2. A Livia abre **o projeto dela** da aula passada (menu ☰ → *Open* → *Local file*
   ou *From Google Drive*, onde ela salvou).
3. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
4. Botão **Preview** (▶, canto superior) para testar.

> ⚠️ Não existe um `.c3p` pronto nesta pasta de propósito: o personagem tem que
> nascer **dentro do projeto que a Livia já tem**, com os sprites e o cenário
> dela. Um arquivo pronto meu não teria o trabalho da aula passada.

## Marco mínimo da aula
Player aparece na Layout e anda nas 4 direções com as setas, **barrado pelo
cenário**. Tudo além disso é bônus.
