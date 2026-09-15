# Roteiro de Aula: A Vila e a Caverna #4 — variável, final e publicação

## Dados

- **Turma alvo:** #11333 — CT1 (aula #8), aula particular (só o Guilherme)
- **Projeto:** `A Vila e a Caverna` (fechamento)
- **Duração:** bloco de 1h30, mas **escopo real ~55 min** + folga
- **Pré-requisito real:** aula #7 com a batalha do chefe rodando. Se a batalha
  não fecha, **conserte isso primeiro** (15 min) — variável sem batalha não
  tem o que registrar.
- **Tema:** "A Vila e a Caverna", aula 4 de 4. Fim do bloco.

## Objetivo

Sair de "meu jogo tem uma luta" para "meu jogo tem **memória** e um final".
É aqui que aparece o conceito de programação de verdade do bloco: uma
**variável** guarda o que aconteceu, e uma **condição** faz o jogo decidir.
Fim da aula: jogo publicado, na mão dele.

## O que NÃO entra nesta aula

Nada de conteúdo novo além de variável, condição e publicação. Resista a
qualquer ideia nova de mapa/monstro — hoje é **fechar**. Ideia boa que
aparecer: anote numa lista "versão 2" e mostre pra ele que ela existe.

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|----------|--------------------------------------------------|--------------|
| **Variável** | Uma caixinha com nome onde o jogo guarda um número **durante a partida**. Ela começa em `0` e alguém muda pra `1` quando algo acontece. É a **memória** do jogo. | ícone `Variables` na barra de cima |
| **Diferença pro `Datas`** | `Datas` é o que **existe** no jogo (monstros, itens) e não muda enquanto joga. Variável é o que **aconteceu nesta partida** e muda o tempo todo. | `Datas` × `Variables` |
| **`Change variables...`** | O comando que **escreve** na caixinha. Ex.: depois de vencer o chefe, `missao = 1`. | `Commands... > Structure > Change variables...` |
| **`Condition...`** | O comando que **lê** a caixinha e escolhe o caminho: *se* `missao = 1`, faz isso; *senão*, faz aquilo. Os comandos ficam **dentro** da condição. | `Commands... > Structure > Condition...` |
| **Antes × depois** | O mesmo NPC com duas falas diferentes conforme o estado do jogo. É o que faz o mundo parecer vivo — e é só variável + condição. | chefe da vila |
| **Fim de jogo** | Um comando que sai do mapa e mostra a tela de título ou de fim. Sem isso, o jogo "acaba" e o jogador continua andando sem saber. | `Commands... > Map > Title screen` |
| **Publicar (`Deploy`)** | Gerar o jogo pra rodar **fora do editor**, como programa ou como página web. Deixa de ser projeto e vira jogo. | `File > Deploy...` |

> Conceito central do bloco inteiro: **variável**. Ela é a ponte pro que ele
> vai ver em Scratch/JS depois. Dê tempo, use o quadro/papel, e **não avance**
> sem a pergunta de checagem: "onde o jogo guarda que eu já matei o monstro?".

## Preparação (antes do aluno chegar)

- [ ] Projeto carregado, batalha do chefe testada por você
- [ ] `.zip` da #7 em mãos
- [ ] Papel e caneta (o desenho da variável é no papel primeiro)
- [ ] Pendrive/Drive com espaço pra pasta do `Deploy` (é maior que o `.zip`)
- [ ] `gabarito/GABARITO.md` aberto numa aba só sua

---

## Roteiro

### 0–10 min — Recap e a pergunta que abre

Ele joga: vila → floresta → caverna → mata o chefe → **volta pra vila e fala
com o chefe da vila**, que continua pedindo ajuda como se nada tivesse
acontecido.

**Pergunta que abre a aula:** "você já matou o monstro. Por que ele continua
pedindo?" A resposta que você quer construir: **o jogo não guardou** que isso
aconteceu.

No papel, desenhe:

```text
missao = 0      →  chefe fala: "me ajuda, tem um monstro"
(mata o chefe)  →  missao = 1
missao = 1      →  chefe fala: "você conseguiu! obrigado!"
```

**Teste de entendimento:** "quantos valores essa caixinha precisa ter?" (dois:
antes e depois — `0` e `1`).

### 10–25 min — Criar a variável e escrever nela

- Ícone **`Variables`** na barra de cima → criar variável `missao`.
- No objeto `Monstro` da caverna, **depois** do `Start a battle...` e antes do
  `Remove object from map...`, adicionar
  `Structure > Change variables...` → `missao` = `1`.
- Testar: vencer o chefe (nada visível muda — avise **antes**, senão ele acha
  que quebrou).

**Teste de entendimento (obrigatório):** "eu venci e não mudou nada na tela.
O que mudou então?" (o valor guardado na variável; ninguém está **lendo** ela
ainda).

### 25–45 min — Ler a variável: o chefe da vila muda de fala

No objeto `Chefe da Vila`:

- `Structure > Condition...` → variável `missao` **igual a** `1`.
- **Dentro** da condição: as falas de vitória.
- No **senão** (`Else`): as falas antigas da missão.
- Testar as duas pontas: falar com ele **antes** de matar o monstro e
  **depois**.

⚠️ É aqui que trava: os comandos precisam ficar **dentro** da condição, não
embaixo dela. Deixe ele errar uma vez, mostre no editor a diferença de
indentação/encaixe, e conserte junto.

**Teste agora:** o chefe fala a missão antes e agradece depois. Sem tocar em
nada entre um teste e outro.

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~50 min)

Se chegou aqui, **a aula valeu** — e o bloco de 6 aulas valeu. O aluno
consegue:

- [ ] Explicar o que é uma variável com as palavras dele
- [ ] Dizer a diferença entre `Datas` (o que existe) e variável (o que
      aconteceu)
- [ ] Escrever numa variável quando algo acontece
- [ ] Ler a variável numa condição e fazer o jogo responder diferente
- [ ] Mostrar o antes e o depois funcionando no jogo

Se o ritmo estiver apertado: **para aqui**, exporta o `.zip` e publica. Final
de jogo e desafio podem cair — o que **não** pode faltar é a publicação.

---

### 50–65 min — O final do jogo

Ainda dentro da condição de vitória, no fim das falas do chefe:

- `Map > Title screen` (ou `Game over`, se ele preferir "FIM").
- Testar: depois de agradecer, o jogo volta pro título. **Acabou.**

### 65–80 min — Playtest completo e publicação

Passar o [DESAFIO.md](./DESAFIO.md) ("O jogo que lembra"): ele joga do zero
como jogador, anota tudo que está errado, conserta o que dá em 10 min e
publica com `File > Deploy...`.

Fechar com:

- `.zip` (`CTRL + E`) **e** a pasta do `Deploy` no pendrive/Drive dele
- A pergunta final: **"conta o teu jogo em 3 frases"** (é o ensaio do ShowCase)

---

## Perguntas para conduzir a aula

1. O que é uma variável? Dá um exemplo que não seja deste jogo.
2. Qual a diferença entre o `Datas` e uma variável?
3. Quem **escreve** na variável `missao`? Quem **lê**?
4. Se eu apagar o `Change variables...` da caverna, o que acontece na vila?
5. Por que os comandos precisam ficar **dentro** da condição?
6. O que muda entre exportar o `.zip` e publicar com `Deploy`?

## Desafios se sobrar tempo (além do DESAFIO.md)

1. Mais um NPC da vila que também muda de fala depois da vitória.
2. Uma segunda variável (`pocoes_pegas`) e um NPC que comenta se o jogador
   pegou o baú.
3. Editar a tela de título com o nome do jogo (`Systems`).
4. Colocar uma música de vitória no final.

## Erros comuns

| Sintoma | Causa provável |
|---------|----------------|
| O chefe da vila nunca muda de fala | A variável não está sendo escrita (comando na caverna) ou a condição compara com o valor errado |
| Ele agradece desde o começo | A condição está invertida, ou a variável já começa em `1` |
| As duas falas aparecem juntas | Os comandos ficaram **fora** da condição, embaixo dela |
| Venci e nada mudou (esperado no meio da aula) | Normal até existir a condição que lê a variável |
| O jogo não termina | Falta `Title screen` / `Game over` no fim da condição |
| `Deploy` não gera nada | Esperar terminar (demora); conferir a pasta de download do navegador |
| O jogo publicado abre em branco | Abrir o `index.html` **de dentro da pasta gerada**, sem mover os arquivos de lugar |

## Registro pós-aula (último do bloco — caprichar)

Despejo cru, com quatro coisas a mais que o normal:

- **O jogo ficou jogável do início ao fim?** (dá pra usar no ShowCase?)
- **Ele entendeu variável?** Sabe explicar sem o jogo na frente?
- **Ele publicou** e levou o arquivo?
- **Vale continuar com RPG Paper Maker** em aulas futuras, ou volta 100% pro
  cronograma oficial na #9?
