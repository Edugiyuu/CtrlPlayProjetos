# Cartão de memória — Variável, condição e publicação

> Folha de consulta desta aula. Deixe aberta numa aba enquanto trabalha.

---

## Variável: a memória do jogo

Uma **variável** é uma caixinha com nome onde o jogo guarda um número
**durante a partida**.

```text
missao = 0   →  ainda não venci o monstro
missao = 1   →  já venci
```

Ela começa em `0`. Alguém **escreve** nela quando algo acontece, e outro
alguém **lê** pra decidir o que fazer.

### Variável × `Datas`

| | Guarda o quê | Muda durante o jogo? |
|---|---|---|
| `Datas` | O que **existe**: monstros, itens, heróis | Não |
| Variável | O que **aconteceu nesta partida** | Sim |

---

## Criar a variável

Ícone **`Variables`** na barra de cima → criar e dar um nome que se entenda
(`missao`, não `var1`).

---

## Escrever: `Change variables...`

Onde fica: objeto → comandos → aba **`Structure`** → **`Change variables...`**

Escolha a variável e o valor. Exemplo: depois de vencer o chefe,
`missao` recebe `1`.

Escrever na variável **não muda nada na tela**. É invisível de propósito — o
efeito só aparece quando alguém lê.

---

## Ler: `Condition...`

Onde fica: objeto → comandos → aba **`Structure`** → **`Condition...`**

É o **se**: *se* `missao = 1`, faz uma coisa; *senão*, faz outra.

```text
Condition (missao = 1)
    Show text: "Você conseguiu! Obrigado!"
    Title screen
Else
    Show text: "Me ajuda, tem um monstro na caverna!"
```

⚠️ **A pegadinha da aula:** os comandos têm que ficar **dentro** da condição
(encaixados), não embaixo dela. Se ficarem embaixo, eles rodam **sempre**, e
as duas falas aparecem juntas.

---

## Terminar o jogo

Objeto → comandos → aba **`Map`**:

| Comando | O que faz |
|---|---|
| `Title screen` | Volta pra tela de título — "fim de jogo" bonito |
| `Game over` | Mostra a tela de fim de jogo |

Sem isso, o jogador continua andando depois do final e não entende que acabou.

---

## Publicar: `File > Deploy...`

| Opção | O que gera |
|---|---|
| Web (navegador) | Uma pasta com `index.html` — abre no navegador |
| Desktop | Um programa pra Windows/Linux/Mac |

Guarde **os dois**:

- o `.zip` do `Export project...` = o **projeto** (dá pra continuar editando)
- a pasta do `Deploy...` = o **jogo** (dá pra jogar, mas não pra editar)

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| O NPC nunca muda de fala | A variável não está sendo escrita, ou a condição compara errado |
| Ele já agradece no começo | Condição invertida |
| As duas falas aparecem juntas | Comandos fora da condição |
| Venci e nada mudou | Ninguém está lendo a variável ainda |
| O jogo não acaba | Falta `Title screen` |
| Jogo publicado abre em branco | Abra o `index.html` de dentro da pasta gerada |
