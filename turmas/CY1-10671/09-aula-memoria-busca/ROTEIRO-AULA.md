# Memória e busca — aula #9 · turma #10671 CY1

`bloco 1h30 · escopo real ~50 min` · 4 alunos (Enzo, Eric, Lucas Basso, Lucas Borges)

**Sai de:** "a memória é uma coisa mágica lá dentro" → **chega em:** aponta o endereço na tela e explica por que mexer numa lista mudou a outra
**Já tem:** `for`, `if`, `while`, variável, lista, `import`, `def` com parâmetro (#8) · **Não tem:** `return`
**Novo:** endereço (`id`) · etiqueta vs caixa · tamanho em bytes (`sys.getsizeof`) · busca linear vs binária · **Fora:** `return`, ponteiro, classes, Big O formal
**Abre com:** "pensei num número de 1 a 1 milhão. Vocês têm 20 chutes." Deixa eles chutarem no braço ~2 min antes de contar a regra do meio.

## Blocos

| Min | O quê | Teste na tela |
|----:|---|---|
| 0–10 | Jogo dos 20 chutes → você roda `busca_linear.py` e `busca_binaria.py` no projetor | **5.000.000 espiadas vs 23** — eles reagem ao número |
| 10–20 | `tamanhos.py` — eles rodam. Conceito 1 (byte) e 2 (memória é prateleira numerada) | cada um lê em voz alta quantos bytes é o `0` |
| 20–30 | `etiquetas.py` **só até a 1ª parte** — Conceito 3 (endereço) | `a is b` dá `True`, endereços iguais na tela |
| 30–45 | **NÓS FAZEMOS:** o bug. Roda a 2ª parte. `l2.append(4)` e a **l1** muda | ele prevê errado, roda, e vê a l1 com o 4 |
| **✅ 45** | **MARCO MÍNIMO — daqui pra baixo é bônus** | ele aponta os 2 `id()` iguais e diz "é uma caixa só, com duas etiquetas" |
| 45–70 | **VOCÊ FAZ:** `busca_binaria_COMECE_AQUI.py`, 3 lacunas | `espiadas: 23` no terminal dele |
| 70–80 | [DESAFIO.md](./DESAFIO.md) — muda o alvo, muda o tamanho da lista, anota as espiadas | tabela de espiadas preenchida à mão |
| 80–90 | **Galeria:** cada um diz quantas espiadas deu o alvo dele e por que quase não muda | os 4 números na lousa, todos entre 1 e 23 |

**Atrasou?** corta `tamanhos.py` (10–20) e vai direto pro endereço. Nunca corta 30–45.
**Perdido no marco?** desenha 2 etiquetas penduradas numa caixa só na lousa, roda de novo junto.
**Adiantou?** pergunta quantas espiadas numa lista de 10 milhões (resposta: 24, não 46).
**IA:** regra da #7 no minuto 1. Hoje dá pra ver quem colou: peça pra ele prever o `l1` **antes** de rodar.

## Conceitos

| Termo | Em 1 frase, sem jargão | ✋ Checagem (resposta boa) |
|---|---|---|
| memória | Uma prateleira gigante de caixas numeradas; o computador só sabe achar coisa por número da caixa | "como o Python acha o seu `a`?" ("pelo número da caixa dele") |
| byte | A menor caixinha da prateleira. Tudo que você guarda ocupa um tanto de caixinhas | "o `0` ocupa 28 o quê?" ("28 bytes, 28 caixinhas") |
| endereço (`id`) | O número da caixa onde o valor mora. `id(x)` mostra esse número | "por que `id(a)` e `id(b)` deram igual?" ("os dois 5 moram na mesma caixa") |
| etiqueta (variável) | O nome é só uma **etiqueta pendurada** na caixa — não é a caixa | "quantas caixas tem no `l2 = l1`?" ("uma só, com duas etiquetas") |
| busca linear | Olhar de um em um, do começo ao fim | "1 milhão de itens, pior caso, quantas espiadas?" ("1 milhão") |
| busca binária | Olhar sempre o do **meio** e jogar metade fora. Só funciona se estiver **em ordem** | "por que 23 e não 1 milhão?" ("cada espiada corta a metade") |

> `return` **não entra hoje**: a busca termina com `print` e `break`, igual à #8. Volta na #10.
> A lista **precisa estar ordenada** pra binária funcionar — diga isso em voz alta, é a pegadinha nº 1.

## Erros comuns

| Ele vê | Você checa |
|---|---|
| `id()` dá números diferentes toda vez que roda | normal — a caixa muda a cada execução. O que importa é serem **iguais entre si** na mesma rodada |
| a l1 **não** mudou | ele escreveu `l2 = list(l1)` ou `l2 = l1.copy()` em vez de `l2 = l1` |
| `busca_linear.py` parece travado | não travou, são 5 milhões de voltas — espera os ~2s |
| `espiadas: 1` na binária | ele pôs o alvo no meio da lista sem querer; troque o alvo |
| loop infinito na binária | lacuna 2 ou 3 sem o `+ 1` / `- 1` — o meio nunca sai do intervalo |
| `MemoryError` ou PC engasgado | baixa o `5000000` pra `1000000` no arquivo dele |
| `TypeError: '<' not supported` | ele trocou a lista de números por lista de textos |

## Antes de começar

- [ ] `python gabarito/busca_linear.py` testado no PC mais fraco da sala (se passar de 5s, baixa pra 1 milhão em **todos** os arquivos)
- [ ] `gabarito/busca_binaria.py` aberto no **seu** PC pra rodar no minuto 5
- [ ] `busca_binaria_COMECE_AQUI.py` copiado pra máquina dos 4 **antes** da aula
- [ ] `CARTAO-DE-MEMORIA.md` impresso, 1 por aluno

---

Código pronto: [`gabarito/`](./gabarito/) · Extras: fim do `DESAFIO.md`
