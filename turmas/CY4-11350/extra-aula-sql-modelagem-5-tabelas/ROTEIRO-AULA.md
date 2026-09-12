# Roteiro de Aula: Modelando do zero — 5 tabelas, PK e FK (Boletim da Escola)

## Dados

- **Turma alvo:** #11350 — CY4 (aula **extra**, entre a #6 e a #7)
- **Formato:** turma de 3 alunos (Benício, Caio, Nicolas) — Sáb 14:00
- **Projeto:** banco novo em SQLite pelo Beekeeper Studio — "Boletim da Escola"
- **Duração:** bloco de ~1h, **escopo real ~45 min** + folga
- **Pré-requisito real:** aula #6 — eles rodaram `SELECT`, `WHERE` e `ORDER BY`
  num banco que **já vinha pronto** (`biblioteca.sql`). Nunca escreveram um
  `CREATE TABLE`, nunca decidiram onde uma chave estrangeira vai, nunca viram o
  banco recusar um dado.
  ⚠️ **`JOIN` NÃO foi dado.** O roteiro da #6 previa, mas na prática não deu
  tempo/não foi explicado. **Nenhuma query desta aula usa `JOIN`** — nem como
  "só pra mostrar". Se escapar um, a aula deixa de ser sobre modelagem e vira
  sobre sintaxe de consulta.
- **Tema:** escola/boletim. Domínio que eles vivem todo dia, então a discussão
  é sobre *modelagem* e não sobre entender o assunto. Eles se cadastram como
  alunos do banco — engaja e deixa o dado concreto.

## Por que esta aula existe

A #6 provou que **rodar SQL não é entender modelagem**. Eles consultaram um
banco que alguém já tinha modelado. Na #7 eles vão declarar Models e
associações no Sequelize (`Livro.belongsTo(Autor)`) — se não souberem apontar
qual coluna guarda qual chave, o Sequelize vira mágica e a #7 desanda.

Esta aula é a ponte: **eles criam o banco**, erram de propósito e vêem o banco
recusar um dado inválido.

## Objetivo

Sair de "eu consulto um banco que já existe" para "eu desenhei e criei um banco
de 5 tabelas, escolhi cada chave primária, decidi onde cada chave estrangeira
ia, e provei que a relação está de pé — com um `INSERT` que o banco **recusou**
e seguindo uma chave na mão de uma tabela até a outra".

## O que NÃO entra nesta aula

- **`JOIN`.** Eles não viram. Hoje a relação é percorrida **na mão**: pega o
  valor da FK numa tabela, faz outro `SELECT ... WHERE id = <aquele valor>` na
  outra. É de propósito (ver bloco "Por que sem JOIN" abaixo).
- `GROUP BY` e funções de agregação, com uma exceção: `COUNT(*)` com `WHERE`
  nos extras, que é lido sem esforço ("quantas linhas batem com isso").
- **Sequelize, Node, Express, qualquer linha de JavaScript.** É a aula #7. Se
  perguntarem "e no código?", a resposta é: "é exatamente a próxima aula".
- `UPDATE`, `DELETE` e `ON DELETE CASCADE`.
- Normalização formal (1FN/2FN/3FN), índices, migrations, relacionamento 1:1.

### Por que sem JOIN (e por que isso é bom)

Percorrer a chave na mão **é** o que o `JOIN` faz — só que devagar e com eles
no comando. Duas vantagens:

1. O aluno sente na pele o trabalho repetitivo. Quando você ensinar `JOIN`
   (na #7, ou numa aula própria), ele já sabe exatamente o que está sendo
   automatizado — em vez de decorar uma sintaxe que "junta tabelas".
2. Erro de FK fica visível. No `JOIN` uma FK errada só devolve zero linha e
   ninguém sabe por quê; na mão, ele procura o `id = 99`, não acha, e a ficha
   cai sozinha.

**Se alguém já souber `JOIN` e perguntar:** "existe um jeito de o banco fazer
isso de uma vez — é a próxima coisa que a gente vê. Hoje eu quero que **você**
siga a chave, porque é assim que você descobre se ela está certa."

## Conceitos da aula

| Conceito | Definição curta (dar explícita, não de passagem) | Onde aparece |
|---|---|---|
| Chave primária (PK) | A coluna que identifica uma linha e só uma, nunca repete, nunca fica vazia | Etapa 1, toda tabela |
| Chave estrangeira (FK) | Coluna que guarda a PK de **outra** tabela, criando o link | Etapa 1 (`materias.professor_id`) |
| "O lado que aponta" | Num 1:N a FK mora **sempre** no lado do "muitos" | Etapas 1 e 4 |
| Relação 1:N (um-para-muitos) | Um professor dá várias matérias; uma matéria tem um professor | `professores` → `materias` |
| Relação N:N (muitos-para-muitos) | Um aluno tem nota em várias matérias **e** uma matéria tem nota de vários alunos | `notas` |
| Tabela de junção | A tabela do meio que resolve um N:N, com duas FKs | Etapa 5 (`notas`) |
| Integridade referencial | O banco recusa uma FK que aponta pra uma linha que não existe | Etapa 3 (o INSERT que falha) |
| Seguir a chave na mão | Ler o valor da FK e buscar esse `id` na outra tabela, com `WHERE` | Etapas 2, 4 e 5 |
| `PRAGMA foreign_keys = ON` | No SQLite a checagem de FK vem **desligada** por padrão | Setup + Etapa 3 |

> 📖 Referência dos tipos de relacionamento, com mais exemplos reais, os erros
> clássicos de modelagem e o equivalente em Mongo/Sequelize:
> [`docs/referencia/relacionamentos-modelagem-dados.md`](../../../docs/referencia/relacionamentos-modelagem-dados.md).

> ⚠️ O item mais importante da tabela é o **`PRAGMA`**. Sem ele o SQLite aceita
> `professor_id = 99` sem reclamar — e a promessa que eu fiz na aula #6 ("o
> banco recusa") sai como mentira na frente deles. Tem que estar ligado antes
> da Etapa 3.

## Preparação (antes deles chegarem)

- [ ] Beekeeper Studio aberto, conexão SQLite nova testada (`escola.sqlite`)
- [ ] Eu mesmo rodei o `gabarito/escola.sql` inteiro, do zero, uma vez
- [ ] Diagrama PK/FK da aula #6 (`autores`/`livros`) aberto numa aba
- [ ] `gabarito/GABARITO.md` aberto numa aba **só minha**
- [ ] Quadro/tela livre pra desenhar as 5 caixas

---

## Roteiro

### 0–8 min — Recap da #6 (com o diagrama, não com a definição)

Abrir o diagrama `autores`/`livros` da aula #6 na tela e perguntar — eles
respondem, eu não explico:

1. "Qual coluna aqui é chave primária? E por que ela, e não o `titulo`?"
2. "Qual é a chave estrangeira? Ela mora na tabela `livros` ou na `autores`?
   Por que nessa e não na outra?"
3. "Se eu cadastrar um livro com `autor_id = 99` e não existe autor 99, o que
   acontece?"

Se a 2 ou a 3 travar, **não seguir em frente** — redesenhar as duas caixas no
quadro com eles ditando as colunas, e só então abrir a aula.

**Pergunta que abre a aula:** *"Hoje vocês não vão consultar banco nenhum. Vão
criar um. Pensem no sistema da escola de vocês: aluno, turma, matéria,
professor, nota. Quantas tabelas isso precisa, e quem aponta pra quem?"*

Deixar eles chutarem. Anotar os chutes no quadro **sem corrigir ainda** — a
aula vai mostrar quem acertou.

### 8–18 min — Desenhar as 5 tabelas no quadro (antes de digitar nada)

Eu conduzo, eles ditam as colunas. Chegar nas 5 caixas:

```text
professores                      turmas
┌────┬──────┐                    ┌────┬──────┬─────┐
│ id │ nome │                    │ id │ nome │ ano │
└────┴──────┘                    └────┴──────┴─────┘
   ▲                                ▲
   │ 1:N                            │ 1:N
   │                                │
materias                         alunos
┌────┬──────┬──────────────┐     ┌────┬──────┬──────────┐
│ id │ nome │ professor_id │     │ id │ nome │ turma_id │
└────┴──────┴──────────────┘     └────┴──────┴──────────┘
   ▲                                ▲
   │                                │
   └──────────── notas ─────────────┘
     ┌────┬───────────┬────────────┬───────┬──────────┐
     │ id │ aluno_id  │ materia_id │ valor │ bimestre │
     └────┴───────────┴────────────┴───────┴──────────┘
                (tabela de junção — duas FKs)
```

**Duas perguntas que fazem a aula toda (devagar, uma por vez):**

1. *"A FK `professor_id` vai na tabela `materias` ou na `professores`?"*
   → Vai em `materias`. A regra que eles têm que sair falando: **num 1:N a
   chave estrangeira mora sempre no lado do "muitos"**. Por quê? Porque uma
   coluna guarda **um** valor: a matéria tem um professor, então cabe. O
   professor dá 4 matérias — não cabe numa coluna só.

2. *"Um aluno tem nota em várias matérias. Uma matéria tem nota de vários
   alunos. Dá pra resolver isso com uma coluna `nota` dentro de `alunos`?"*
   → **Não.** Eles vão responder que sim. Deixar tentar, e então pedir: "então
   guarda aí a nota de Matemática **e** a de História do mesmo aluno". Trava. É
   aí que entra a **tabela de junção**: cada linha de `notas` é *a nota de um
   aluno em uma matéria*. Três matérias = três linhas.

**Teste de entendimento (antes de abrir o Beekeeper):** *"Na tabela `notas`,
quantas chaves estrangeiras existem e pra onde cada uma aponta?"*
Resposta boa: duas — `aluno_id` → `alunos.id` e `materia_id` → `materias.id`.

> Se só esta parte couber na aula, **ela já valeu mais do que a #6 inteira.**
> Não acelerar aqui pra sobrar tempo de digitar.

### 18–25 min — Setup e Etapa 1: a ordem importa

Conexão SQLite nova (`escola.sqlite`), aba de Query, e **a primeira linha do
arquivo**:

```sql
PRAGMA foreign_keys = ON;
```

Explicar com honestidade: o SQLite vem com a checagem de FK **desligada**. Sem
essa linha ele aceita `professor_id = 99` caladinho. *"Ou seja: a chave
estrangeira existe no papel e não vale nada. Essa linha é o que faz ela
valer."*

Depois eles escrevem as duas primeiras tabelas. Snippet de referência —
**meu**, não mostrar pronto:

```sql
CREATE TABLE professores (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL
);

CREATE TABLE materias (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  professor_id INTEGER NOT NULL,
  FOREIGN KEY (professor_id) REFERENCES professores(id)
);
```

**Pergunta obrigatória:** *"Eu consigo criar a tabela `materias` antes da
`professores`?"* → Não: a FK referencia uma tabela que ainda não existe. **A
ordem de criação segue a direção das setas do desenho.** É o erro nº 1 que vai
aparecer hoje.

**Teste agora:** as duas tabelas aparecem na barra lateral; um `INSERT` de 3
professores e 5 matérias (com pelo menos um professor dando duas) entra sem erro.

### 25–35 min — Etapas 2 e 3: seguir a chave, e provar que a FK vale

**Etapa 2 — seguir a chave na mão (o substituto do JOIN):**

```sql
SELECT * FROM materias;
-- olhar o professor_id da linha de Matemática (ex.: 1)
SELECT * FROM professores WHERE id = 1;
```

Falar o que está acontecendo em voz alta: *"a tabela `materias` não guarda o
nome do professor. Ela guarda o número dele. Eu peguei esse número e fui
buscar na outra tabela — **isso** é a relação funcionando."*

E a volta, que é a que abre a cabeça:

```sql
SELECT * FROM materias WHERE professor_id = 1;
```

*"Mesma chave, pergunta invertida: agora são todas as matérias daquele
professor. É o lado 'muitos' aparecendo."*

**Etapa 3 — o erro de propósito:**

```sql
INSERT INTO materias (nome, professor_id) VALUES ('Geografia', 99);
```

Resultado esperado: `FOREIGN KEY constraint failed`.

> 💡 **Momento mais importante da aula.** Na #6 eu *disse* que o banco recusa.
> Hoje eles **vêem** recusar, no banco que eles mesmos criaram. Parar, ler a
> mensagem em voz alta e perguntar: *"quem recusou isso — o Beekeeper ou o
> banco?"* (O banco. O Beekeeper só mostrou o recado.)

Depois: comentar o `PRAGMA`, recriar o banco, rodar o mesmo INSERT e ver
**passar**. Conferir o estrago com `SELECT * FROM materias;` — tem uma
Geografia com `professor_id = 99`, e ninguém com `id = 99` existe. Aí a ficha
cai sobre o que o `PRAGMA` faz. Religar antes de seguir.

---

### ✅ PONTO DE PARADA / MARCO MÍNIMO (~35 min)

Se chegou aqui, **a aula valeu**. Cada aluno consegue:

- [ ] criar duas tabelas relacionadas com `CREATE TABLE`, escolhendo a PK;
- [ ] dizer em qual das duas a FK mora, e **por quê** (lado do "muitos");
- [ ] explicar por que a ordem de criação das tabelas não é livre;
- [ ] partir de uma matéria e chegar no nome do professor, na mão, com dois
      `SELECT`;
- [ ] mostrar o `FOREIGN KEY constraint failed` e explicar quem recusou;
- [ ] explicar o que o `PRAGMA foreign_keys = ON` muda.

Se o ritmo estiver apertado, ou se alguém ainda estiver chutando onde a FK
mora: **parar aqui.** `turmas`, `alunos` e `notas` viram o
[DESAFIO.md](./DESAFIO.md) de casa e a abertura da #7. Não empurrar as 5
tabelas goela abaixo.

---

### 35–50 min — Etapas 4 e 5: as outras 3 tabelas (só se o marco veio tranquilo)

Agora com menos condução — eles escrevem, eu só destravo:

- `turmas` (PK, sem FK nenhuma — perguntar por quê) e `alunos` (FK `turma_id`).
- **Eles se cadastram como alunos.** Benício, Caio e Nicolas entram no banco,
  na mesma turma. Bobo, mas prende.
- `notas` — **a tabela de junção, com duas FKs**. Perguntar antes de deixarem
  digitar: *"essa tabela tem algum dado próprio dela, ou só as duas chaves?"*
  → tem: `valor` e `bimestre`. É o argumento de por que ela é uma tabela de
  verdade, e não só uma "ligação". A nota não é do aluno nem da matéria — é do
  encontro dos dois.
- Cadastrar 3 notas de um mesmo aluno, em matérias diferentes.

**Teste agora — a corrente de 3 saltos, na mão:** pegar uma linha de `notas` e
chegar até o **nome do professor** daquela matéria, usando só `WHERE`:

```sql
SELECT * FROM notas WHERE aluno_id = 1;   -- anota o materia_id
SELECT * FROM materias WHERE id = <aquele materia_id>;  -- anota o professor_id
SELECT * FROM professores WHERE id = <aquele professor_id>;
```

Se eles fazem os 3 saltos sem eu dizer o próximo, as 5 tabelas estão ligadas na
cabeça deles — não só no banco.

### 50 min+ — Desafio

Passar o [DESAFIO.md](./DESAFIO.md). Eles fazem sozinhos, eu só destravo com
pergunta — nunca com a query pronta. Serve pra eu ver se **"onde a FK mora"** e
**"por que existe tabela de junção"** ficaram de pé, que é exatamente o que a
aula #7 vai exigir deles em Sequelize.

---

## Perguntas para conduzir a aula

1. "Por que `id` e não `nome` como chave primária de `professores`? Pode haver
   dois professores com o mesmo nome?"
2. "Se eu apagar o professor 1 e existirem 4 matérias apontando pra ele, o que
   vocês acham que o banco deveria fazer?" (não resolver hoje — só plantar a
   semente de `ON DELETE`)
3. "A nota é do aluno ou da matéria?" (de nenhum dos dois sozinho — é do
   encontro. É a definição de tabela de junção, na boca deles)
4. "Se um aluno mudar de turma, quantas linhas eu tenho que mexer?" (uma: o
   `turma_id` dele. Comparar com o cenário de repetir o nome da turma em toda
   linha)
5. "No Mongo, como vocês guardariam as notas de um aluno?" (embutir um array no
   documento do aluno — conecta com a #6)

## Desafios se sobrar tempo (além do DESAFIO.md)

Todos sem `JOIN`, de propósito:

1. Listar as notas abaixo de 6 (`WHERE valor < 6`), da menor pra maior
   (`ORDER BY`).
2. Contar quantas notas um aluno tem: `SELECT COUNT(*) FROM notas WHERE
   aluno_id = 1;` — ler em voz alta como "quantas linhas batem com isso".
3. Descobrir, na mão, o nome da turma do aluno que tirou a menor nota da
   escola (é a corrente de 3 saltos de novo, começando pelo `ORDER BY`).

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| `no such table: professores` no `CREATE TABLE materias` | Criou na ordem errada — a tabela referenciada pela FK tem que existir antes |
| `INSERT` com `professor_id = 99` **passa** sem erro | `PRAGMA foreign_keys = ON` não foi rodado nesta conexão (é por conexão, não fica salvo no arquivo) |
| `FOREIGN KEY constraint failed` num INSERT que deveria funcionar | Inseriu o filho antes do pai (matéria antes do professor, nota antes do aluno) |
| `NOT NULL constraint failed: materias.professor_id` | Esqueceu a coluna da FK no `INSERT` |
| "Segui a chave e não achei ninguém" | Está buscando na tabela errada, ou o `id` não existe mesmo — os `id` podem não começar em 1 |
| Colocou uma coluna `nota` dentro de `alunos` | Não entendeu o N:N — voltar ao desenho e pedir a nota de duas matérias do mesmo aluno |
| Colocou `nome_materia TEXT` em `notas` | Repetiu dado em vez de referenciar; é o problema que a FK existe pra resolver |
| `UNIQUE constraint failed: materias.id` | Repetiu um `id` no `INSERT`; ou deixar o SQLite gerar (omitir a coluna `id`) |

## Registro pós-aula

Atualizar `alunos/progresso/turma-11350.md`:

- Cronograma: registrar como **aula extra entre a #6 e a #7** (não renumerar as
  aulas seguintes) + Observações com até onde foram de verdade: marco mínimo
  (2 tabelas) ou as 5? A corrente de 3 saltos saiu sem eu ditar?
- Progresso por Aluno: presença e, **nominalmente, quem ainda chuta onde a FK
  mora** — é esse dado que decide se a #7 começa com recap ou direto no código.
- Resumo Geral: Próximos passos → aula #7 (MVC + Sequelize).
- **Anotar se `JOIN` chegou a ser pedido por eles.** Se eles sentiram falta de
  "juntar as duas de uma vez", é a melhor deixa possível pra ensinar `JOIN`
  logo no começo da #7.
- Data em `_Última atualização:_`.
- Atualizar também o `README.md` da pasta da turma.
