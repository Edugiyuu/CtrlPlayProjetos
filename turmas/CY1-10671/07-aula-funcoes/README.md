# Funções — escrever, receber, devolver

Aula **#7** da turma **#10671 (CY1)** — Enzo, Eric, Lucas Basso, Lucas Borges.
Aula **prática**: cinco funções curtas e independentes, escritas do zero, tema
lanchonete/mercado.

Esta aula existe do jeito que está por causa do que aconteceu na #6: eles **reconhecem**
os conceitos (variável, `print`, lista, `for`) e travam na hora de **produzir sozinhos**
— e, ao travar, vão para a IA, que resolve o exercício e deixa o travamento intacto.
Então o conteúdo é Funções, como no cronograma, mas o desenho ataca o travamento.

## De onde o aluno está saindo

Aulas 1–6 dadas. Sabe reconhecer variável, `print`, lista, `for`, `while` e condicional.
**Nunca escreveu uma função.** Não tem fluência em nada disso — tem reconhecimento. Na
tela em branco, trava.

## O que o aluno pratica

- Escrever o corpo de uma função a partir de uma assinatura e de um contrato.
- Receber valores por **parâmetro** (não por `input()`).
- **Devolver** resultado com `return` — e a diferença disso para mostrar na tela.
- Usar `if` e `for` dentro de uma função (o que ele já sabia, agora num lugar novo).
- **Conferir sozinho se acertou**, pelo teste, sem perguntar para ninguém.

**Marco mínimo:** o aluno escreveu sozinho o corpo do exercício 3 (`preco_final`), os
dois testes imprimem o esperado, e ele explica o que entra e o que sai **sem ler o
código**.

## O que fica de fora (de propósito)

Escopo/variável global, parâmetro com valor padrão, `*args`, `return` múltiplo, recursão
e importar função de outro arquivo (aula #9, Módulos). Função que chama função aparece só
como extra.

## Formato

Três blocos, na escada **EU FAÇO → NÓS FAZEMOS → VOCÊ FAZ**:

1. **Eu faço** (ex. 1): você resolve no projetor **narrando o raciocínio em voz alta**,
   errando de propósito uma vez. O que está sendo ensinado aqui é o processo, não a
   sintaxe.
2. **Nós fazemos** (ex. 2): a turma dita, você digita.
3. **Você faz** (ex. 3 a 5): cada um no seu PC. Ponto de parada e marco mínimo aos
   45 min.

Cada exercício chega ao aluno com **a assinatura, o contrato e os testes já escritos** —
o corpo é 100% dele. É exceção deliberada à regra de ouro nº 1 (`docs/class/README.md`):
a assinatura é o combinado, não a resposta, e serve para o travamento ser "como faço
isso funcionar" em vez de "por onde eu começo".

### ⚠️ Regra de IA

**Sem IA durante a aula**, combinado no minuto 1 com o motivo dito na cara. No lugar
dela, a **escada de 3 degraus** do `ROTEIRO-AULA.md` — pergunta → pista → primeira linha
do corpo — entregue um degrau por vez, sempre depois de "o que você já tentou?".
**Você não toca no teclado deles.**

## Como rodar

O aluno cria o próprio `funcoes.py` e roda pelo botão de executar do VS Code
(interpretador **Python 3.11**). Sem ambiente virtual, sem `pip`.

Para conferir o gabarito:

```bash
py -3.11 gabarito/funcoes.py
```

Toda linha impressa tem que bater **exatamente** com o `# esperado:` ao lado — inclusive
o `.0` e o `True`/`False` com maiúscula.

## Arquivos

```text
07-aula-funcoes/
├── README.md              # este arquivo (professor)
├── ROTEIRO-AULA.md        # professor: conceitos, minuto a minuto, escada de dicas
├── DESAFIO.md             # ALUNO: os exercícios com assinatura + contrato + testes
├── CARTAO-DE-MEMORIA.md   # ALUNO: folha de consulta (imprimir 1 por aluno)
└── gabarito/
    └── funcoes.py         # professor: corpo de todas as funções, testado
```

## Registro pós-aula

Atualizar `alunos/progresso/turma-10671.md`: status da aula #7, presença, até que
exercício cada um chegou e — o dado que mais importa nesta turma — **quem destravou
sozinho e quem precisou do último degrau da dica**. Anotar também se a regra de sem-IA
se sustentou; se não, isso muda o desenho da aula #8.
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
