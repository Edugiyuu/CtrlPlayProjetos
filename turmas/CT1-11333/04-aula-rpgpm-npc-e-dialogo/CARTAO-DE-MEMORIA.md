# Cartão de memória — Objeto, evento e comando

> Folha de consulta desta aula. Deixe aberta numa aba enquanto faz o desafio.
> Só tem o que a gente usa hoje.

---

## A corrente da aula

**Objeto** → **Evento** → **Comando**

- **Objeto** = a *coisa* no mapa que faz algo (pessoa, baú, placa que fala).
- **Evento** = *quando* ela reage (`Hero action` = quando o herói aperta ação
  de frente pra ela).
- **Comando** = *o que* acontece (mostrar texto, tocar som, teleportar...).

Árvore não é objeto: ela é só desenho (`Face sprite`).

---

## Criar um objeto

1. Abra a aba **`Object`** em cima do mapa.
2. **Clique duplo** num square vazio → abre a janela `Edit object...`.

Dentro dessa janela:

| Campo | O que é |
|---|---|
| `Name` | O nome do objeto **pra você**, no editor. Troque `OBJ:0001` por algo que você entenda |
| `Graphics` | A imagem dele no jogo. **Sem gráfico, ele fica invisível** (mas continua funcionando) |
| `Events` | A lista de eventos. O que a gente usa é o `Hero action` |
| `Moving > Type` | `Fix` = parado · `Random` = anda sozinho pra qualquer lado |
| `Moving > Speed` | Velocidade do movimento |
| `Block hero during reaction` | Trava o herói enquanto o evento roda. Deixe marcado |

---

## Colocar um comando no evento

1. Com a janela do objeto aberta, olhe a **lista de comandos** do lado
   esquerdo (a linha que começa com `>`).
2. **Clique duplo** nela → abre a janela `Commands...`.
3. Escolha a aba e o comando. Hoje: aba **`Staging`** → **`Show text...`**.

Os comandos ficam numa lista e rodam **de cima pra baixo**. Dois `Show text...`
= duas caixas de fala, uma depois da outra.

---

## `Show text...` por dentro

| Campo | O que faz |
|---|---|
| `Interlocutor` | O nome de quem está falando (aparece em cima da caixa) |
| `Faceset` | Um retrato do personagem ao lado da fala (opcional) |
| Caixa grande | O texto em si |
| `B` / `I` / cores | Negrito, itálico e cor do texto |

---

## Onde ficam os outros comandos (pra você saber que existem)

| Aba | Serve pra |
|---|---|
| `Staging` | Falas, efeitos de tela, esperar, mover e teleportar objetos |
| `Map` | Menus, loja, músicas e sons, mexer no inventário |
| `Battle` | Começar batalha, mexer em status de herói/inimigo |
| `Structure` | Condições (`se...`), repetições e **variáveis** |

Hoje a gente só usa o `Staging`. `Structure` é a aula #8.

---

## Testar

1. `CTRL + S` (salvar) — **sempre antes de testar**
2. `CTRL + P` (testar)
3. Chegue **de frente** pro NPC e aperte a tecla de ação
4. `ESC` fecha o teste

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| Clique duplo não abre nada | Você não está na aba `Object` |
| O NPC não aparece no jogo | Objeto sem `Graphics` |
| Aperto ação e nada acontece | Comando fora do `Hero action`, ou você não está de frente pra ele |
| A fala dispara sozinha ao entrar no mapa | O comando foi parar num evento de início de mapa |
| O herói atravessa o NPC | Colisão do gráfico — avise o professor (`Collisions` na barra de cima) |
| Nada do que eu fiz apareceu | Faltou `CTRL + S` |

---

## Sempre que algo não funcionar

1. Confira se está na aba `Object`.
2. Abra o objeto e veja se o comando está mesmo dentro do `Hero action`.
3. Confira se o objeto tem `Graphics`.
4. Salve (`CTRL + S`) e teste de novo.
