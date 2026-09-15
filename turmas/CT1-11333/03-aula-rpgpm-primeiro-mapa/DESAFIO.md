# Desafio — A praça da vila

**Tempo:** ~20 min · **Dificuldade:** ▓▓░░░
**Onde você trabalha:** no seu mapa `Vila de Treino`, dentro do projeto
`Treino RPG`.
**Não** mexa no mapa `Starting map` nem no `Battle maps > Default` — eles são
os mapas de exemplo que já vieram prontos.

Seu mapa já tem grama, um caminho e algumas árvores. Agora você vai construir
uma **praça**: um espaço aberto no meio, cercado, com uma entrada só.

Você **monta o mapa**. Aqui só tem o alvo, o efeito e o que testar.

**Lembretes rápidos:**

- `Floor` é o que fica deitado no chão; `Face sprite` é o que fica em pé.
- Salvar é `CTRL + S`. Testar é `CTRL + P`. Salve **antes** de testar.
- Girar a câmera: `SHIFT` + arrastar. Mover: apertar a rodinha e arrastar.

---

## Aquecimento (3 min)

Sem clicar em nada, responda pro professor:

- O que é o *tileset*?
- Uma poça de água é `Floor` ou `Face sprite`? E um barril?

---

## O que fazer

### 1. Abrir a praça

- Alvo: um quadrado vazio de chão diferente no meio do mapa, mais ou menos
  6 × 6 squares.
- Escolha no tileset um chão diferente do que já está lá (pedra, terra, areia)
  e pinte essa área na aba `Floor`.
- **Teste agora:** olhando de cima, dá pra ver claramente onde a praça começa
  e onde acaba, só pela cor do chão.

### 2. Cercar a praça

- Alvo: a praça fica fechada por árvores ou arbustos, **menos** em um lugar.
- Use a aba `Face sprite` pra contornar a praça inteira.
- Deixe **uma abertura de 2 squares** virada pro caminho — é a entrada.
- **Teste agora:** dá pra dar a volta na praça pela parte de fora e só existe
  um jeito de entrar.

### 3. Mobiliar a praça

- Alvo: a praça não pode ser um quadrado vazio — ela precisa parecer um lugar.
- Coloque pelo menos **4 coisas diferentes** do tileset dentro dela (flores,
  pedra, placa, banco, tronco, o que existir).
- **Teste agora:** você consegue contar 4 elementos diferentes lá dentro.

### 4. Nascer na praça

- Alvo: quando o jogo começa, seu personagem já está dentro da praça.
- Use a aba `Start position` e marque o square do meio da praça.
- Salve e rode o teste.
- **Teste agora:** ao apertar `CTRL + P`, o personagem aparece **dentro** da
  praça e consegue andar até sair pela entrada.

---

## CHECK

- [ ] A praça tem um chão diferente do resto do mapa.
- [ ] Você consegue dizer **por que** a cerca teve que ser feita na aba
      `Face sprite` e não na `Floor`.
- [ ] A praça está cercada e tem exatamente uma entrada.
- [ ] Tem pelo menos 4 elementos diferentes dentro dela.
- [ ] No teste, o personagem nasce dentro da praça e consegue sair andando.
- [ ] Você consegue dizer **por que** salvar antes de testar faz diferença.

---

## Se travar, revise

- **Cliquei no mapa e não pintou nada** → nenhuma peça do tileset está
  selecionada, ou você está em outra aba (confira se está no `Floor`).
- **A árvore ficou deitada no chão** → foi pintada como `Floor`. Apague com o
  botão direito e refaça na aba `Face sprite`.
- **O mapa sumiu da tela** → você girou a câmera sem querer. Dê zoom out com a
  rodinha e gire de volta com `SHIFT` + arrastar.
- **Dei Play e o personagem apareceu no lugar errado** → o `Start position`
  está marcado em outro square (ou em outro mapa).
- **Dei Play e nada do que eu fiz apareceu** → faltou salvar (`CTRL + S`).

---

## Antes de fechar

1. Exporte seu projeto: `File > Export project...` e guarde o `.zip` no seu
   pendrive ou Drive. **Sem isso, seu jogo só existe neste computador.**
2. Escreva uma frase (no caderno ou no chat da aula): *o que o `Start position`
   faz, e o que acontece com o jogo sem ele?*

---

## Se sobrar tempo

1. Faça um lago de água em algum canto do mapa e cerque de pedras.
2. Crie um segundo mapa chamado `Caverna de Treino` e pinte o chão dele.
3. Use a aba `Mountain` pra levantar um morrinho e teste se o personagem
   consegue subir.
