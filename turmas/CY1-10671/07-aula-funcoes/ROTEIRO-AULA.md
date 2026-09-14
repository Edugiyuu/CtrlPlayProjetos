# Roteiro de Aula: Funções — bateria de funções curtas

## Dados

- **Turma alvo:** #10671 — CY1 (aula #7 do cronograma oficial, 2026-09-12)
- **Formato:** turma de 4 alunos (Enzo, Eric, Lucas Basso, Lucas Borges), 1 PC cada
- **Duração:** bloco de 1h30, mas **escopo real ~45 min** + folga
- **Pré-requisito real:** aulas 1–6 dadas. Eles **reconhecem** variável, `print`,
  lista, `for`, `while` e condicional — e **travam na hora de produzir sozinhos**,
  recorrendo à IA no primeiro impasse. Não assuma fluência em nada.
- **Nível de vocabulário:** adolescentes; nenhum termo em inglês sem tradução.

## Objetivo

Ao fim da aula o aluno consegue **escrever do zero o corpo de uma função** que recebe
valores por parâmetro e devolve um resultado com `return` — e explicar o que entra e o
que sai dela.

O objetivo **por baixo** do objetivo: aguentar 5 minutos travado sem fugir para a IA.
É por isso que a aula tem escada de dicas e teste automático — os dois substituem o
"pergunta pra alguém".

## Marco mínimo

> O aluno escreveu **sozinho** o corpo do exercício 3 (`preco_final`), os dois testes
> imprimem o valor esperado, e ele explica em voz alta o que entra e o que sai da
> função — **sem ler o código**.

Tudo depois disso é "se sobrar tempo".

## O que NÃO entra nesta aula

Escopo / variável global, valor padrão de parâmetro, `*args`, `return` múltiplo,
recursão, importar função de outro arquivo (isso é a aula #9, Módulos). Função que
chama função aparece **só** como extra, para quem terminar tudo.

## ⚠️ A regra de IA (falar no minuto 1; está no material do aluno também)

**Sem IA durante a aula.** Combinado explícito, com o motivo dito na cara:

> "O objetivo de hoje não é ter o código pronto no fim. É você conseguir ficar 5
> minutos travado sem fugir. Travar faz parte — quem tira você do travamento hoje sou
> eu, com dica, não a IA com a resposta."

No lugar da IA, a **escada de 3 degraus** (mais abaixo, por exercício). Regras da
escada:

1. Antes de qualquer degrau, pergunte: **"o que você já tentou?"** Se ele não tentou
   nada, não tem degrau — volte em 2 minutos.
2. **Um degrau por vez.** Espere ele mexer no código entre um e outro.
3. O degrau 3 é a **primeira linha do corpo**, nunca a função inteira.
4. **Você não toca no teclado deles.** Nem "deixa eu só arrumar isso aqui".

Sinal de que funcionou: ele destrava no degrau 1 ou 2. Se todo mundo está precisando do
degrau 3, o exercício está grande demais — pule para o próximo e volte depois.

## Conceitos da aula

> Cada conceito tem bloco próprio, com pergunta de checagem **antes de avançar**.
> Rodar código não é prova de entendimento.

### Conceito 1 — Função

**Definição em 1 frase, sem jargão:**
> Um pedaço de programa que ganhou um nome, e que só acontece quando você chama esse
> nome.

**Como abrir (pelo problema, não pela definição):** escreva na tela o mesmo cálculo
repetido três vezes, com números diferentes:

```python
print(100 - 100 * 10 / 100)
print(50 - 50 * 50 / 100)
print(80 - 80 * 25 / 100)
```

Pergunte: **"o que incomoda aqui?"** Deixe eles falarem. A resposta que você quer ouvir
é "é a mesma conta três vezes". Aí: *"então vamos dar um nome pra essa conta."*

**O que NÃO é:**
- Não é "um jeito de deixar o código organizado/bonito". É um jeito de **pensar em
  menos coisa por vez** — você resolve um pedaço, dá um nome, e esquece o pedaço.
- Não é só para código grande. A `saudacao` do exercício 1 tem uma linha.

**✋ Checagem — antes de avançar:**
> "Me dá um exemplo de coisa que você faz repetido, no dia a dia, que mereceria um
> nome."

- ✅ Qualquer rotina com nome próprio: "arrumar a mochila", "fazer o café".
- ⚠️ "Uma variável" → redirecione: *"variável guarda um valor; função guarda uma
  ação."*
- ❌ Se não souber: dê o seu ("escovar os dentes" = pega escova, põe pasta, escova,
  enxágua — quatro passos, um nome) e peça outro.

---

### Conceito 2 — Parâmetro

**Definição em 1 frase, sem jargão:**
> É o que a função precisa **receber de fora** para conseguir fazer o trabalho dela.

**Exemplo concreto:** `preco_final` não tem como saber qual preço você quer calcular.
Alguém tem que entregar isso para ela: `preco_final(100, 10)`. Os nomes `preco` e
`desconto` são as caixas onde esses valores caem **dentro** da função.

**O que NÃO é:**
- A função **não adivinha** nada e **não vai buscar** valor de fora. Se ela usa
  `preco`, `preco` tem que ter entrado como parâmetro.
- Parâmetro não é `input()`. Ninguém digita nada nesta aula — os valores vêm de quem
  chama a função.

**✋ Checagem — antes de avançar:**
> "Para calcular o preço final, o que essa função precisa saber?"

- ✅ "O preço e o desconto."
- ⚠️ "O resultado" → *"esse é o que ela devolve, não o que ela recebe."*
- ❌ Se não souber: leia a linha do contrato do exercício em voz alta com ele.

---

### Conceito 3 — `return` vs. `print()` ← **a confusão nº 1 do dia**

**Definição em 1 frase, sem jargão:**
> `print` **mostra** na tela e acabou. `return` **devolve** o valor para quem chamou a
> função, e essa pessoa faz o que quiser com ele.

**Exemplo concreto — faça acontecer na tela, não explique só na fala.** Escreva a
versão errada de propósito:

```python
def preco_final(preco, desconto):
    print(preco - preco * desconto / 100)

print(preco_final(100, 10))
```

Roda e aparece:

```text
90.0
None
```

Pergunte **"por que apareceu esse `None` embaixo?"** e espere. `None` é o que a função
devolveu — ou seja, nada. Ela mostrou o valor, mas não **entregou** o valor.

**O que NÃO é:**
- `return` não mostra nada na tela. Se você só der `return` e não der `print` na
  chamada, não aparece nada — e está certo.
- Uma função pode ter `print` **e** `return`; mas nesta aula, **todas devolvem**.

**✋ Checagem — antes de avançar:**
> "Se a função só mostra na tela, quem chamou ela consegue usar esse resultado para
> fazer outra conta?"

- ✅ "Não, porque ela não devolveu nada."
- ⚠️ "Consegue, porque apareceu na tela" → *"apareceu para você, não para o programa."*
- ❌ Se não souber: mostre `dobro_do_preco = preco_final(100, 10) * 2` explodindo com a
  versão que só mostra na tela.

---

### Conceito 4 — Definir ≠ chamar

**Definição em 1 frase, sem jargão:**
> `def` só **ensina** a função. Nada acontece até alguém **chamar** ela pelo nome com
> parênteses.

**Exemplo concreto:** rode um arquivo que só tem o `def` dentro. Não sai nada na tela.
"Está quebrado?" Não — está esperando ser chamado.

**✋ Checagem:**
> "Eu rodei e não apareceu nada. O que faltou?"

- ✅ "Chamar a função."
- ❌ Se não souber: aponte a linha de teste que já está no arquivo dele.

---

## Preparação (antes do aluno chegar)

- [ ] VS Code aberto com **Python 3.11** selecionado como interpretador, em todos os PCs
- [ ] `DESAFIO.md` acessível para eles (impresso ou no repositório)
- [ ] Um arquivo `exemplo.py` vazio no **seu** PC, projetor ligado, fonte grande
- [ ] `CARTAO-DE-MEMORIA.md` impresso, 1 por aluno (é a folha de consulta que substitui
      a busca na internet)
- [ ] Você já fez o exercício 3 do zero e cronometrou

---

## Roteiro

### 0–10 min — Abertura e o combinado de IA

- Mostrar o código repetido do Conceito 1 no projetor. **"O que incomoda aqui?"**
- **Eles fazem:** falam o que incomoda. Não deixe a aula começar com você discursando.
- Dar a regra de IA com o motivo (texto acima, na íntegra). Combinar em voz alta,
  olhando para cada um: sem IA hoje, dica é comigo.
- Entregar o cartão de memória.

### 10–25 min — Conceitos 1 e 2 + **EU FAÇO** (exercício 1)

Este bloco é o mais importante da aula e é o único em que você fala muito. **O que está
sendo ensinado aqui não é a sintaxe do `def` — é o processo de atacar um problema**,
que é exatamente o que eles terceirizam para a IA.

Resolva `saudacao(nome)` no projetor **narrando em voz alta o que se passa na sua
cabeça**, incluindo as dúvidas:

> "Deixa eu ler o contrato. Recebe um nome, devolve um texto. Então o parâmetro é o
> nome… vou escrever o `def` primeiro e deixar o corpo vazio… agora, o que eu devolvo?
> Um texto com o nome no meio. Vou testar rodando, mesmo achando que está errado."

**Erre de propósito uma vez** — esqueça o `return` e mostre o `None` aparecendo — e
conserte na frente deles. Eles precisam ver que **errar e consertar é o trabalho
normal**, não sinal de que a pessoa não sabe.

- **✋ Checagem do Conceito 1** e **✋ Checagem do Conceito 2** no meio do bloco. Se você
  passar 15 minutos falando sozinho, o bloco falhou — quebre com as perguntas.

### 25–35 min — **NÓS FAZEMOS** (exercício 2)

`dobro(numero)`. **Você digita, a turma dita.** Você é o teclado, eles são o cérebro.

- Comece com o arquivo vazio e pergunte: "primeira linha, o que eu escrevo?"
- Se alguém disser "faz aí" ou "põe o `return`", devolva: *"o `return` de quê?"*
- Digite **exatamente** o que eles ditarem, inclusive errado. Rode, aparece o erro, e
  pergunte o que fazer. É a segunda vez que eles veem erro tratado como normal.
- Ninguém escreve nada no próprio PC ainda.

### 35–45 min — Conceito 3 + **VOCÊ FAZ** (exercício 3)

- Mostrar o `None` acontecendo (Conceito 3, exemplo pronto acima). **✋ Checagem.**
- Soltar o `DESAFIO.md`. A partir daqui você **não toca em teclado de aluno**.
- Circular em silêncio nos primeiros 2 minutos. Deixe travar. O travamento é o
  exercício.

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~45 min)

Pare a turma. Cada aluno:

- roda o arquivo e mostra os dois testes do exercício 3 imprimindo o esperado;
- **explica, sem olhar o código,** o que entra e o que sai da `preco_final`.

Leitura de ritmo:

- **Todos passaram** → segue para 4 e 5.
- **Metade passou** → quem passou vai para o 4; com os outros, refaça o exercício 3 no
  quadro em 3 minutos, no formato "nós fazemos".
- **Quase ninguém passou** → **pare os exercícios novos**. Faça o 3 junto, todo mundo, e
  encerre a aula no 4. Cinco exercícios não é meta; o marco mínimo é.

### 45–75 min — Exercícios 4 e 5

- Exercício 4 (`pode_dirigir`) traz o `if` para dentro da função e o retorno
  `True`/`False`.
- Exercício 5 (`total_da_conta`) traz o `for` numa lista para dentro da função — é o
  mais difícil e o mais importante, porque junta o que eles já sabem com o que
  aprenderam hoje.
- Circular com a escada de dicas. **Nunca a função inteira.**
- **Exercícios 6 e 7 são teto, não meta.** Só aponte para eles quem terminou o 5 com
  folga. Os dois pedem a mesma coisa nova: **chamar uma função que ele mesmo escreveu
  dentro de outra**. Se ninguém chegar lá, tudo bem — o marco mínimo continua sendo o 3.
- Se um aluno chegar no 6, pare a turma por 30 segundos e mostre no projetor **só a
  ideia**: "o `pode_dirigir` já sabe responder; você não vai reescrever a regra dele."

### 75–90 min — Fechamento

- Cada aluno **explica uma função sua sem ler o código** (1 min cada).
- Pergunta final, um por um: *"em que momento você quase pediu ajuda e resolveu
  sozinho?"* — é o dado que interessa hoje. Anote a resposta.
- A frase única do dia para levar para casa:

> **Função é você resolver um pedaço, dar um nome para ele, e não precisar pensar nele
> de novo.**

---

## Escada de dicas — por exercício

> Um degrau por vez, sempre depois de "o que você já tentou?".

### Exercício 3 — `preco_final(preco, desconto)`

1. **Pergunta:** "10% de 100 dá quanto? E como você escreveria essa conta com os nomes
   `preco` e `desconto` no lugar dos números?"
2. **Pista:** "É a mesma conta de porcentagem que você já fez, só que agora os números
   têm nome. Escreve a conta primeiro numa variável, e só depois pensa em devolver."
3. **Meia-resposta:** `    desconto_em_reais = preco * desconto / 100` — e só isso.

### Exercício 4 — `pode_dirigir(idade)`

1. **Pergunta:** "Que pergunta você faz sobre a idade para saber a resposta?"
2. **Pista:** "É um `if` igual aos da aula #4. O que muda é que, em vez de mostrar na
   tela, cada caminho vai ter um `return`."
3. **Meia-resposta:** `    if idade >= 18:` — e só isso.

> Erro esperado aqui: `return "sim"` / `return "não"` em vez de `True`/`False`. Não
> corrija de cara — deixe o teste falhar (`esperado: True`, saiu `sim`) e pergunte o que
> o teste está pedindo. O teste é que educa, não você.

### Exercício 5 — `total_da_conta(precos)`

1. **Pergunta:** "Você já somou os itens de uma lista antes? Como você fez?"
2. **Pista:** "Precisa de uma variável que começa em zero **antes** do `for` e vai
   crescendo dentro dele."
3. **Meia-resposta:** `    total = 0` — e só isso.

> Erro esperado: `return` **dentro** do `for`, que encerra na primeira volta e devolve o
> preço do primeiro item. Pergunta que resolve: *"em que momento a soma está pronta?
> Antes de terminar o `for` ou depois?"*

### Exercício 6 — `quantos_podem_dirigir(idades)`

1. **Pergunta:** "Você já tem uma função que responde se **uma** pessoa pode dirigir.
   O que falta para responder sobre a lista inteira?"
2. **Pista:** "É o mesmo esqueleto do 5: uma variável que começa em zero antes do `for`.
   Só que agora ela não soma o item — ela só cresce **quando** a resposta for `True`."
3. **Meia-resposta:** `        if pode_dirigir(idade):` — e só isso.

> Erros esperados: (a) reescrever o `idade >= 18` aqui dentro — funciona, aceite o
> resultado, mas peça para trocar pela chamada e pergunte *"e se amanhã mudar para 17?
> quantos lugares você vai ter que arrumar?"*; (b) somar fora do `if`, que devolve o
> tamanho da lista; (c) devolver `True`/`False` em vez do contador.

### Exercício 7 — `conta_da_mesa(precos)`

1. **Pergunta:** "Fala em português, sem código, o que a casa faz com essa conta."
   (A frase dele já tem as três etapas: somar, decidir, descontar.)
2. **Pista:** "Cada pedaço dessa frase já é uma função que você escreveu hoje. Começa
   guardando o total numa variável — sem `for` nenhum aqui."
3. **Meia-resposta:** `    total = total_da_conta(precos)` — e só isso.

> Erros esperados: (a) recomeçar a soma com um `for` próprio em vez de chamar a
> `total_da_conta`; (b) `>=` no lugar de `>`, que faz o teste do `[50, 50]` sair `90.0`
> — deixe o teste falhar e mande reler a regra; (c) o `if` dentro do `for`, decidindo o
> desconto antes de a soma terminar.

---

## Perguntas para conduzir a aula

- "O que essa função precisa receber para funcionar?"
- "O que ela tem que devolver?"
- "Você rodou? O que apareceu?" (eles adivinham em vez de rodar)
- "Esse `None` veio de onde?"
- "Se eu chamar essa função duas vezes com números diferentes, funciona?"
- "Me explica essa linha como se eu não soubesse programar."

## Desafios se sobrar tempo (além do DESAFIO.md)

1. `contar_letra(texto, letra)` → quantas vezes a letra aparece no texto.
2. `media(notas)` → recebe uma lista de notas, devolve a média.
3. `mais_caro(precos)` → devolve o maior preço da lista, **sem usar `max`**.
4. `troco(pago, precos)` → devolve o troco, **chamando a `total_da_conta`** que ele já
   escreveu. (Mesma ideia dos exercícios 6 e 7, mas mais curta — serve como aquecimento
   para quem travou lá.)

## Erros comuns

| Erro | Como aparece | O que perguntar |
|---|---|---|
| Função definida e nunca chamada | não sai nada na tela | "o que faltou depois do `def`?" |
| Mostrar na tela no lugar de `return` | `None` embaixo do valor | "esse `None` veio de onde?" |
| Faltou o `:` ou o corpo não indentado | `SyntaxError` / `IndentationError` | "o Python está reclamando de qual linha?" |
| Usou uma variável de fora em vez do parâmetro | passa no 1º teste, falha no 2º | "de onde veio esse valor?" |
| `return` dentro do `for` (ex. 5) | devolve só o primeiro item | "em que momento a soma fica pronta?" |
| contador fora do `if` (ex. 6) | dá o tamanho da lista | "em que caso essa pessoa deve entrar na conta?" |
| reescreve a regra em vez de chamar (ex. 6 e 7) | funciona, mas duplicado | "e se amanhã a regra mudar, quantos lugares você arruma?" |
| `>=` no lugar de `>` (ex. 7) | `[50, 50]` sai `90.0` | "100 passa de 100?" |
| Mexeu nas linhas de teste para "passar" | o esperado mudou | "o teste é o combinado; quem tem que mudar é a função" |
| Devolveu texto onde o teste pede `True` | saiu `sim`, esperado `True` | "o que o teste está pedindo exatamente?" |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._

Atualizar `alunos/progresso/turma-10671.md`:

- Cronograma: status da aula #7 + Observações com **até que exercício cada um chegou**
  e, principalmente, **quem destravou sozinho e quem precisou do degrau 3**. Esse é o
  indicador que importa nesta turma, mais do que quantos exercícios saíram.
- Progresso por Aluno: presença e onde cada um travou.
- Resumo Geral: "Aulas concluídas 7 / 18" e Próximos passos → aula #8 (Arquivos).
- Data em `_Última atualização:_`.
- Anotar também: **a regra de sem-IA funcionou?** Se eles burlaram, isso muda o desenho
  da #8.
