# Missão da flor — CT1 · RPG Paper Maker

`bloco 1h30 · escopo real ~60 min` · **RPG Paper Maker** (não é o RPG Maker) — <https://rpg-paper-maker.com/play> → `OPEN WEB APP`

**Sai de:** NPC que só fala → **chega em:** NPC pede flor → jogador pega → NPC agradece e paga
**Já tem:** pintar mapa, criar objeto, `Show text...` · **Novo hoje:** variável `missao`, `Condition...` com `Else`, `Remove object from map...` · **Fora:** batalha, várias missões, item no `Condition`
**Abre com:** "Fala com o NPC 2 vezes. Por que ele repete a mesma coisa? Como ele ia saber que você já falou com ele?"

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–10 | Projeto novo (`Default`) + mapa pequeno com grama, 1 NPC `Vovó` falando "Me traz uma flor?" | ▶ Play: fala e repete igual sempre |
| 10–20 | Ícone `Variables` → criar `missao` · explicar as etapas 0 → 1 → 2 → 3 no quadro | variável aparece na lista |
| 20–35 | Vovó: `Condition missao = 0` → pede e põe `missao = 1` · `Else` → "Ainda não achou?" | 1ª fala pede, 2ª fala muda |
| 35–50 | Objeto `Flor`: `Condition missao = 1` → `+1 Flor`, `missao = 2`, `Remove object from map` · `Else` → "Que flor bonita." | flor some e aparece no menu `Items` |
| **✅ 50** | **MARCO MÍNIMO — daqui pra baixo é bônus** | flor some só **depois** de falar com a Vovó |
| 50–60 | Vovó ganha o ramo `missao = 2`: agradece, `-1 Flor`, `+50` moedas, `missao = 3` · ramo `3`: "Minha flor tá linda!" | menu: flor sumiu, dinheiro subiu |
| 60–75 | `DESAFIO.md` parte 2: segunda missão sozinho (mesma receita) | missão 2 funciona sem ajuda |
| 75–90 | `CTRL + E` → `.zip` no pendrive/Drive | arquivo existe |

**Atrasou?** corta a recompensa (moedas) e a 2ª missão. Nunca corta o `.zip` nem o teste "pegar a flor antes de falar com a Vovó".

| Conceito | Em 1 frase | ✋ Checagem (resposta boa) |
|---|---|---|
| Variável | caixinha com número que o jogo **lembra** enquanto roda | "Onde o jogo guarda que você já falou com a Vovó?" (na `missao`) |
| Etapa da missão | cada número da `missao` é um momento da história | "O que quer dizer `missao = 2`?" (tô com a flor, não entreguei) |
| `Condition` + `Else` | se for verdade faz isso, senão faz aquilo | "Se eu pegar a flor antes da missão, o que acontece?" (só a fala, ela não some) |
| `Remove object from map` | tira o objeto do mapa pra sempre | "Por que a flor precisa sumir?" (senão pega infinitas) |

| Ele vê | Você checa |
|---|---|
| Vovó pede a flor de novo toda vez | faltou `Change variables: missao = 1` dentro do `Condition` |
| Fala as duas coisas seguidas | `Change variables` fora do `Condition` ou dois `Condition` soltos em vez de `Else` |
| Flor some antes da missão | `Remove object` fora do `Condition missao = 1` |
| Vovó agradece mas flor continua no menu | faltou `Modify inventory: -1 Flor` |
| Mudou `Datas` e sumiu | fechou no `X`, não em `Save and close` |
| Projeto sumiu na outra aula | não exportou (`CTRL + E`) |

**Jogo pronto:** [Missao-da-Flor.zip](Missao-da-Flor.zip) — `File > Import project...`. Vovó 3 passos acima do herói, flor no canto de baixo à direita. Anda com **WASD**, Enter fala, `Esc` abre o menu.

**Antes:** fazer o jogo uma vez seguindo [gabarito/GUIA-COMPLETO.md](gabarito/GUIA-COMPLETO.md) (~30 min) · Aluno: [DESAFIO.md](DESAFIO.md) · Respostas: [gabarito/](gabarito/)
