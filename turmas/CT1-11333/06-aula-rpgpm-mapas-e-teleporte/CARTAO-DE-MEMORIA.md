# Cartão de memória — Teleporte entre mapas

> Folha de consulta desta aula. Deixe aberta numa aba enquanto faz o desafio.

---

## A ideia do dia

Cada lugar do jogo é um **mapa separado**. O jogador não "anda" de um mapa pro
outro: ele é **teleportado**. Todo RPG funciona assim — entrar numa casa,
descer numa caverna, viajar pra outra cidade.

---

## O portal invisível

Um portal é um **objeto** igual ao NPC, com duas diferenças:

1. Ele **não tem gráfico** — fica invisível, mas funciona.
2. O comando dele não é falar, é teleportar.

---

## `Teleport object...`

Onde fica: janela do objeto → lista de comandos do `Hero action` →
`Commands...` → aba **`Staging`** → **`Teleport object...`**

Ele faz **duas** perguntas:

| Campo | O que responder |
|---|---|
| `Object ID` | **Quem** vai ser teleportado. Quase sempre `> Hero` (o herói) |
| `Position` | **Para onde**. Clique em `Select...`, escolha o mapa e clique no square de destino |

Depois de escolher, aparece escrito assim:

```text
Map ID: 2 [Introduction/Floresta]
X: 12    Z: 3
Y: 0     Y+: 0
```

É o endereço do destino: qual mapa e qual square.

`Transition` (embaixo) é enfeite: efeito de escurecer ao trocar de mapa.
Pode deixar em `None`.

---

## As duas regras que quebram tudo

### 1. Ida não é volta

Um teleporte leva pra **um lado só**. Para voltar, você precisa de **outro
objeto, no outro mapa**, com outro teleporte.

Vila → Floresta → Caverna e a volta = **4 teleportes**, 4 objetos.

### 2. Não caia em cima do portal de volta

Se o herói chega exatamente no square do portal de volta, ele é teleportado de
novo na hora — e você entra e sai sem parar (*loop*).

Regra prática: o ponto de chegada fica **1 ou 2 squares adiante** do portal.

---

## Quadro dos teleportes deste jogo

Preencha conforme for fazendo:

| Objeto (onde está) | Quem | Vai para o mapa | Chega perto de |
|---|---|---|---|
| Saída da Vila (mapa `Vila`) | `> Hero` | `Floresta` | entrada da floresta |
| Volta pra Vila (mapa `Floresta`) | `> Hero` | `Vila` | ao lado da saída |
| Entrada da Caverna (mapa `Floresta`) | `> Hero` | `Caverna` | entrada da caverna |
| Saída da Caverna (mapa `Caverna`) | `> Hero` | `Floresta` | ao lado da entrada |

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| Piso e não acontece nada | Comando fora do `Hero action`, ou square onde não dá pra pisar |
| Entro e saio sem parar | Loop — destino em cima do portal de volta |
| Fiquei preso numa pedra | Square de destino ocupado; escolha um livre |
| Fui pro mapa errado | `Map ID` do destino errado |
| Teleportou outra coisa, não eu | `Object ID` não está como `> Hero` |
| Nada mudou no teste | Faltou `CTRL + S` |

---

## Sempre que algo não funcionar

1. Abra o objeto e confira se o comando está no `Hero action`.
2. Confira `Object ID` = `> Hero`.
3. Olhe o endereço do destino (`Map ID`, `X`, `Z`) e veja se é o mapa certo.
4. Salve (`CTRL + S`) e teste de novo.
