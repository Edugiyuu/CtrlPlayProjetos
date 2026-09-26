# Desafio — A playlist emprestada

**Tempo:** ~15 min · **Dificuldade:** ▓▓░░░
**Arquivo que você edita:** `playlist.py` (a playlist já está escrita, você continua embaixo)

Você empresta sua playlist pro seu amigo. Ele coloca uma música dele... e ela aparece
na **sua** playlist. Você vai causar esse bug de propósito, entender por que acontece
e consertar.

Você **escreve o código**. Aqui só tem o alvo e o que testar.

**Lembretes rápidos:**

- `amigo = minha` **não copia**: faz uma segunda seta apontar pra mesma caixa.
- `list(minha)` faz uma caixa **nova** com as mesmas músicas.
- `.append(...)` coloca uma coisa no fim da lista — mexe **dentro** da caixa.
- `is` responde "é a mesma caixa?" com `True` ou `False`.
- Música é texto: vai **entre aspas**.

---

## Aquecimento (3 min)

Sem rodar nada, responda pro professor:

- Em `lista2 = lista1`, quantas caixas existem? Quantas setas?
- Qual das duas mexe **dentro** da caixa: `append` ou `=`?

---

## O que fazer

### 1. O bug

- Alvo: sua playlist ganha a música do amigo **sem você ter mexido nela**.
- Embaixo do `# PASSO 1`: faça o nome `amigo` apontar pra `minha`, e coloque uma música
  nova usando o `amigo`. Depois imprima as duas playlists e pergunte com `is` se são a
  mesma caixa.
- **Teste agora:** a música do amigo aparece nas **duas** e o `is` dá `True`.

### 2. O conserto

- Alvo: o amigo tem a playlist dele com a música nova, e a **sua continua com 3 músicas**.
- Embaixo do `# PASSO 2`: escreva a `minha` de novo com as 3 músicas (o passo 1 estragou
  ela), dê pro amigo uma **cópia** com `list(...)` e coloque a música nele.
- **Teste agora:** a `minha` tem 3 músicas, o `amigo` tem 4, e o `is` dá `False`.

### 3. Pula ou muda?

- **Antes de rodar, escreva no papel** o que vai sair na `minha`.
- Embaixo do `# PASSO 3`: faça um nome `irmao` apontar pra `minha`. Na linha de baixo,
  faça `irmao` receber uma lista **nova**, com `=`. Imprima as duas e pergunte com `is`.
- **Teste agora:** a `minha` **não mudou**, e o `is` dá `False`. Seu papel acertou?

---

## CHECK

- [ ] No passo 1, a música do amigo apareceu na sua playlist.
- [ ] No passo 2, sua playlist ficou com 3 músicas.
- [ ] Você consegue apontar **qual linha** fez caixa nova no passo 2.
- [ ] No passo 3, você sabe dizer por que a `minha` não mudou.
- [ ] O terminal não tem nenhuma linha vermelha.

---

## Se travar, revise

- **As duas playlists mudaram no passo 2** → você escreveu `amigo = minha` de novo. Tem
  que ser `amigo = list(minha)`.
- **A música do amigo já aparece no começo do passo 2** → você esqueceu de escrever a
  `minha` de novo; ela ainda está estragada do passo 1.
- **`NameError: name 'minha' is not defined`** → apagou sem querer a primeira linha do
  arquivo. Ela tem que ficar lá.
- **`SyntaxError`** → confira as aspas e as vírgulas entre as músicas.
- **`AttributeError: 'str' object has no attribute 'append'`** → você fez o nome apontar
  pra um texto, não pra uma lista. Lista tem colchetes `[ ]`.

---

## Antes de fechar

Escreva **uma frase** em comentário no fim do `playlist.py`: por que a sua playlist
estragou no passo 1, explicado pra alguém que nunca programou.

---

## Se sobrar tempo

1. **Três nomes, uma caixa:** faça `primo` apontar pra `minha` e `tio` apontar pra
   `primo`. Coloque uma música pelo `tio`. Ela aparece na `minha`? Por quê, se o `tio`
   nunca foi ligado direto na `minha`?
2. **A mochila:** crie `mochila = []` e `mochila_do_irmao = mochila`. Com um `for`,
   coloque `"espada"`, `"escudo"` e `"pocao"` na mochila do irmão. Imprima a `mochila`.
3. **Desenhe:** no papel, com setas e caixas, desenhe o seu passo 2 do jeito que o
   professor desenhou na lousa.
