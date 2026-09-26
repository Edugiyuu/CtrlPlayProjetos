# Memória: onde as coisas ficam guardadas — aula #9 · turma #10671 CY1

`bloco 1h30 · escopo real ~50 min` · 4 alunos (Enzo, Eric, Lucas Basso, Lucas Borges)

**Sai de:** "memória é uma coisa mágica lá dentro" → **chega em:** aponta na tela o número da caixa e diz que o nome é só uma etiqueta
**Já tem:** `for`, `if`, variável, lista, `import`, `def` com parâmetro (#8) · **Não tem:** `return`
**Formato:** você explica no **board CS50** (projetor), depois roda **um script curto** que mostra a mesma coisa em Python. Eles rodam junto na máquina.
**Fora:** bytes por tipo, ponteiro, busca binária, `sys.getsizeof`, compilação, `return`
**Abre com:** a foto do pente de memória no board. "Alguém sabe o que é isso? Já viu por dentro do PC?"

## Blocos

| Min | No board (você explica) | Na tela (eles rodam) |
|----:|---|---|
| 0–10 | Foto do pente de memória. É uma peça física, cheia de casinhas. Cada casinha guarda **uma** coisa e tem um **número** | — |
| 10–20 | A grade amarela de células numeradas. O computador **não** procura por nome, só sabe ir até o número da casinha | [`1-onde-mora.py`](./gabarito/1-onde-mora.py) → um número gigante na tela |
| 20–30 | Volta na grade: duas setas apontando pra **mesma** célula. Pergunta: "isso pode?" | ainda o `1-onde-mora.py` → `a is b` dá `True` |
| 30–45 | **Pare o board.** Escreva na lousa: `lista2 = lista1`. Pergunte o que sai no `lista1` depois do `append`. **Todos escrevem o palpite no papel** antes de rodar | [`2-duas-etiquetas.py`](./gabarito/2-duas-etiquetas.py) → `lista1 = [1, 2, 3, 4]` |
| **✅ 45** | **MARCO MÍNIMO — daqui pra baixo é bônus** | ele aponta o `e a mesma caixa? True` e diz "é uma caixa só, com dois nomes" |
| 45–60 | Na lousa: como faz uma caixa **nova**? | [`3-conserto.py`](./gabarito/3-conserto.py) → `e a mesma caixa? False`, `lista3` intacta |
| 60–75 | Cada um escreve 4 linhas: cria uma lista, faz outro nome apontar pra ela, muda por um nome e imprime os dois | os dois `print` saindo iguais |
| 75–90 | **Galeria:** cada um mostra a tela e responde "quantas caixas tem aí?" | 4 telas, resposta "uma só" nas 3 primeiras |

**Atrasou?** corta 20–30 e vai do `1-onde-mora.py` direto pro palpite. Nunca corta 30–45.
**Perdido no marco?** desenhe na lousa uma caixa com dois barbantes saindo dela, cada um com um nome. Rode o script de novo junto.
**Adiantou?** pergunte o que acontece se em vez de lista for número: `a = 5 / b = a / b = b + 1`. (O `a` **não** muda — e isso é a próxima aula, não abra hoje.)
**IA:** regra da #7 no minuto 1. Hoje dá pra ver quem colou: **o palpite no papel vem antes de rodar.**

## Conceitos

| Termo | Em 1 frase, sem jargão | ✋ Checagem (resposta boa) |
|---|---|---|
| memória | A peça física da foto. Uma prateleira gigante de casinhas numeradas | "cabe quanta coisa numa casinha?" ("uma só") |
| caixa | Uma casinha da prateleira. É onde o valor fica de verdade | "onde mora o `5`?" ("numa caixa, a de número tal") |
| etiqueta (variável) | O nome que você inventa é um barbante amarrado na caixa. **Não** é a caixa | "quantas caixas em `lista2 = lista1`?" ("uma só, com dois barbantes") |
| `id(coisa)` | Mostra o número da caixa onde a coisa está | "por que `id(a)` e `id(b)` deram igual?" ("os dois 5 moram na mesma caixa") |
| `is` | Pergunta "é a mesma caixa?" — diferente de `==`, que pergunta "tem o mesmo valor?" | "`[1,2] == [1,2]` é True. E `is`?" ("False, são duas caixas") |
| `list(outra)` | Faz uma caixa **nova** com o mesmo conteúdo | "e se eu só escrever `l2 = l1`?" ("não copia, só pendura outro nome") |

> **O número do `id()` é gigante e ninguém precisa ler.** Diga isso em voz alta antes de
> rodar: ele está ali só pra provar que o valor mora em algum lugar de verdade. Quem
> responde "é a mesma caixa?" é o `is`, com `True` ou `False`.

## Erros comuns

| Ele vê | Você checa |
|---|---|
| o número da caixa muda toda vez que roda | normal — diga isso **antes** de rodar. Ninguém precisa decorar nem ler o número |
| ele tenta comparar os dois números gigantes com o olho | não precisa: o `is` já responde `True` ou `False` na linha de baixo |
| a `lista1` **não** mudou | ele escreveu `lista2 = list(lista1)` — olhou o script 3 antes do 2 |
| `NameError: name 'lista1' is not defined` | ele rodou o script no arquivo errado, ou não salvou |
| "então lista é tudo igual?" | não — `lista3` e `lista4` do script 3 têm números diferentes. Rode os dois lado a lado |
| "o número dele é diferente do meu" | cada máquina guarda onde quiser. Só vale comparar **dentro** da mesma tela |

## Antes de começar

- [ ] Board **CS50** aberto no projetor, já na parte da foto do pente e da grade amarela
- [ ] Os 3 scripts do [`gabarito/`](./gabarito/) copiados pra máquina dos 4 **antes** da aula
- [ ] Papel e caneta na mesa de cada um — o palpite do minuto 30 é escrito à mão
- [ ] [`CARTAO-DE-MEMORIA.md`](./CARTAO-DE-MEMORIA.md) impresso, 1 por aluno

---

Código pronto: [`gabarito/`](./gabarito/) · Busca linear/binária ficou em [`guardado-pra-10/`](./guardado-pra-10/)
