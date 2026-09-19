# Bibliotecas: turtle + random — aula #8 · turma #10671 CY1

`bloco 1h30 · escopo real ~50 min` · 4 alunos (Enzo, Eric, Lucas Basso, Lucas Borges)

**Sai de:** "função é aquele `return` que eu não entendi" → **chega em:** chama função de biblioteca com parâmetro e cria o carimbo dele
**Já tem:** `for`, `if`, variável, lista · **Não tem:** `return`, parâmetro (a #7 não colou)
**Novo:** `import` · `turtle` · `random` · parâmetro **visível na tela** · **Fora:** `return` (volta na #10), escopo, classes, arquivos (só bônus)
**Abre com:** você roda a espiral colorida no projetor, em silêncio. Depois: **"isso aqui tem 11 linhas. Adivinha quantas eu escrevi do zero?"**

## Blocos

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–10 | Espiral no projetor → Conceito 1 (biblioteca) e 2 (`import`) | eles dizem o que `import turtle` traz |
| 10–20 | **NÓS FAZEMOS:** quadrado à mão, sem função. Você digita, eles ditam | quadrado fechado na janela branca |
| 20–30 | Conceito 3 (parâmetro) — trocar `forward(100)` por `forward(30)` e rodar. O número **é** o parâmetro | mesmo código, desenho menor |
| 30–45 | **VOCÊ FAZ:** `def quadrado(tamanho)` + 3 chamadas com tamanhos diferentes | 3 quadrados de tamanhos diferentes, 1 `def` só |
| **✅ 45** | **MARCO MÍNIMO — daqui pra baixo é bônus** | ele aponta o número na chamada e diz o que ele faz |
| 45–65 | `random.choice` nas cores + `random.randint` no tamanho, dentro de um `for` | desenho diferente a cada vez que roda |
| 65–80 | [DESAFIO.md](./DESAFIO.md) livre — ele inventa o desenho, você só destrava | cada um com uma janela diferente |
| 80–90 | **Galeria:** cada um roda o desenho do vizinho e explica o que o número muda | 4 desenhos rodados por outra pessoa |

**Atrasou?** corta o `random`, vai pra galeria com os 3 quadrados. Nunca corta 30–45.
**Perdido no marco?** faz o `def quadrado` junto no projetor e fecha na galeria.
**IA:** regra da #7 no minuto 1. Hoje dá pra ver quem colou: pergunte o que cada número faz.

## Conceitos

| Termo | Em 1 frase, sem jargão | ✋ Checagem (resposta boa) |
|---|---|---|
| biblioteca | Código que outra pessoa já escreveu e te deixou usar de graça | "quem escreveu o `forward`?" ("outra pessoa, veio pronto") |
| `turtle` | Uma janela com uma tartaruga que tem caneta na cauda: você manda ela andar e virar, o risco fica pra trás | "quem desenha a linha, você ou ela?" ("ela, eu só mando andar") |
| `random` | A caixa de sorteio: tira um item de uma lista ou um número entre dois | "rodei de novo sem mudar nada e saiu outra cor — por quê?" ("foi sorteada na hora") |
| `import` | A linha que traz essa caixa de ferramentas pro seu arquivo | "tirei o import, o que acontece?" ("dá erro, o Python não conhece `turtle`") |
| parâmetro | O número entre parênteses: é o que **você** manda pra função fazer o trabalho | "o que muda se eu trocar 100 por 30?" ("desenha menor") |
| função (carimbo) | Um desenho que ganhou nome; você chama o nome quantas vezes quiser, com números diferentes | "3 quadrados, quantos `def`?" ("um só") |

> `return` **não entra hoje**: "hoje a função *faz*; devolver valor fica pra próxima."

## Erros comuns

| Ele vê | Você checa |
|---|---|
| a janela abre e fecha na hora | falta `turtle.done()` na última linha |
| `AttributeError: module 'turtle' has no attribute...` | ele salvou o arquivo como `turtle.py` — renomeia pra `desenho.py` |
| `NameError: name 'forward' is not defined` | faltou o `turtle.` na frente |
| nada aparece | definiu o `def` e nunca chamou (mesma da #7 — aqui dá pra ver) |
| quadrado não fecha | `left(90)` fora do `for`, ou `for` com 3 voltas |
| `TypeError: quadrado() missing 1 required positional argument` | chamou `quadrado()` sem o número |
| `turtle.TurtleGraphicsError: bad color string` | cor em português ou escrita errada — só nome em inglês entre aspas |

## Antes de começar

- [ ] `python -c "import turtle"` testado em **todos** os PCs · nenhum arquivo `turtle.py` nas pastas
- [ ] `gabarito/espiral.py` aberto no **seu** PC pra rodar no minuto 1
- [ ] `CARTAO-DE-MEMORIA.md` impresso, 1 por aluno

---

Código pronto: [`gabarito/`](./gabarito/) · Extras: fim do `DESAFIO.md`
Pós-aula: **despejo cru** (quem chegou no `def`, quem só copiou, engajou ou não, e se `return` vale voltar) → [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)
