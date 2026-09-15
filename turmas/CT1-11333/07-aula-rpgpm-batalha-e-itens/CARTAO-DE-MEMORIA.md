# Cartão de memória — Monstro, batalha e item

> Folha de consulta desta aula. Deixe aberta numa aba enquanto faz o desafio.

---

## As 3 coisas pra existir um monstro

```text
Datas > Monsters   →   Datas > Troops   →   objeto no mapa
   (a ficha)            (quem vem junto)     (onde acontece)
```

1. **Ficha** (`Monsters`): nome, vida, ataque. Criar a ficha **não** põe ele
   em lugar nenhum.
2. **Grupo** (`Troops`): quem aparece junto na luta. A batalha chama um
   **grupo**, nunca um monstro solto.
3. **Objeto no mapa**: onde o jogador esbarra nele e a luta começa.

---

## A janela `Datas`

Abre no ícone **`Datas`**, na barra de cima. Vale pro **jogo inteiro**, não
pra um mapa.

| Aba | O que tem lá | Usa hoje? |
|---|---|---|
| `Monsters` | Fichas dos inimigos | ✅ |
| `Troops` | Grupos de inimigos | ✅ |
| `Items` | Poções, chaves, coisas que se usam | ✅ |
| `Heroes` | Os personagens do jogador | não |
| `Classes`, `Skills`, `Weapons`, `Armors` | Dá pra mexer, mas hoje **não** | não |

Para criar algo novo: clicar na linha `>` no fim da lista.
Para sair: **`Save and close`**. Fechar no `X` pode perder o que você fez.

---

## `Start a battle...`

Onde fica: objeto → comandos → aba **`Battle`** → **`Start a battle...`**

| Campo | O que é |
|---|---|
| `Troop ID` | Qual **grupo** vai aparecer na luta |
| `Battle map` | Onde a luta acontece. Deixe `Default` |
| `Allow escape` | Se o jogador pode fugir |
| `Defeat causes Game Over` | Se perder acaba o jogo |

Chefe: fuga **desligada**, game over **ligado**.
Bicho comum: fuga **ligada**, game over **desligado**.

---

## O monstro do mapa, na ordem certa

| Ordem | Comando | Por quê |
|---|---|---|
| 1 | `Show text...` | O monstro provoca |
| 2 | `Start a battle...` | A luta |
| 3 | `Show text...` | A vitória |
| 4 | `Remove object from map...` | Ele some |

Se o "sumir" vier antes, ele some sem lutar. **Ordem é tudo.**

---

## Item e baú

1. `Datas > Items` → criar a `Poção` (e o que ela cura).
2. No mapa, um objeto (baú) com os comandos:
   - `Map > Modify inventory...` → escolher o item e a quantidade
   - `Show text...` → avisar o que o jogador pegou

**Criar o item no `Datas` não dá o item pra ninguém.** Quem dá é o
`Modify inventory...`.

---

## Balancear (virar game designer)

Não existe número certo de primeira. O jeito é:

1. Jogar a luta.
2. Anotar: ganhei fácil? perdi sem chance?
3. Mexer na **vida** ou no **ataque** do monstro no `Datas`.
4. `Save and close` → `CTRL + S` → testar de novo.
5. Repetir até ficar apertado mas ganhável.

Muda **um número por vez**, senão você não sabe o que fez efeito.

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| O monstro não está na caverna | Você criou só a ficha; falta o objeto no mapa |
| Veio o bicho errado na luta | O grupo escolhido tem outro monstro dentro |
| Ele some antes de falar | Ordem dos comandos errada |
| Venci e ele continua lá | Falta `Remove object from map...` |
| Mudei os números e nada mudou | Fechou o `Datas` no `X` em vez de `Save and close` |
| A poção não aparece | Falta `Modify inventory...` |
