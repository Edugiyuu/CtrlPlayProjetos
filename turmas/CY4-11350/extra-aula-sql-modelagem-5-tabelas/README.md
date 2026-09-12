# Boletim da Escola — modelar, criar, relacionar

Aula **extra** da turma **#11350 (CY4)** — Benício, Caio, Nicolas.
Encaixa **entre a aula #6 (SQL no Beekeeper) e a #7 (MVC + Sequelize)**: eles
saem de *consultar* um banco que já vinha pronto para *criar* um banco de 5
tabelas do zero, decidindo onde cada chave primária e cada chave estrangeira
vai.

> Aula fora da numeração oficial (daí o prefixo `extra-`): **não renumerar** as
> pastas `07-` a `18-`. Ela existe porque a #6 ficou em consulta a um banco
> pronto e os conceitos de chave primária/estrangeira não firmaram. A #7 depende
> disso (`Livro.belongsTo(Autor)` é chave estrangeira com outro nome), então
> vale 1h a mais antes de entrar em Sequelize. Cronograma oficial inalterado —
> registrar no progresso da turma como aula extra.

## De onde o aluno está saindo

Aula #6: rodou `SELECT`, `WHERE` e `ORDER BY` num banco **que já existia**
(`biblioteca.sql` colado no Beekeeper). **Nunca escreveu um `CREATE TABLE`**,
nunca decidiu em qual tabela uma chave estrangeira mora, nunca viu o banco
recusar um dado.

> ⚠️ **`JOIN` não foi dado.** Estava no roteiro da #6, mas não foi explicado.
> **Nenhuma query desta aula usa `JOIN`** — a relação é percorrida na mão, com
> `SELECT ... WHERE id = <valor da chave>`. Não é limitação: é o aluno fazendo
> o trabalho que o `JOIN` automatiza, pra quando o `JOIN` aparecer ele saber o
> que está sendo poupado. Ver "Por que sem JOIN" no [ROTEIRO-AULA.md](ROTEIRO-AULA.md).

## O que o aluno pratica

- Desenhar o modelo (5 tabelas) **antes** de escrever qualquer SQL.
- `CREATE TABLE` escolhendo a **chave primária** de cada tabela.
- Declarar **chaves estrangeiras** e descobrir a regra: num 1:N, a FK mora no
  lado do "muitos".
- Resolver um **muitos-para-muitos** com uma **tabela de junção** (`notas`).
- Ver a **integridade referencial** funcionando: um `INSERT` que o banco recusa.
- **Seguir a chave na mão**: de uma nota até o nome do professor, em 3 saltos,
  só com `WHERE`.

## O que fica de fora (de propósito)

- **`JOIN`** — eles não viram; ver o aviso acima.
- `GROUP BY` e agregação, com a exceção de `COUNT(*)` + `WHERE` num extra.
- **Sequelize / Node / Express** — é a aula #7. Hoje é SQL puro no Beekeeper.
- `UPDATE`, `DELETE` e `ON DELETE CASCADE` — a pergunta vai aparecer ("e se eu
  apagar o professor?"); plantar a dúvida e seguir.
- Normalização formal (1FN/2FN/3FN), índices, migrations, relacionamento 1:1.

## O modelo

```text
professores 1──N materias          (FK materias.professor_id)
turmas      1──N alunos            (FK alunos.turma_id)
alunos      N──N materias          resolvido pela tabela de junção notas
                                   (FKs notas.aluno_id e notas.materia_id,
                                    mais dado próprio: valor e bimestre)
```

## Formato

Aula mista de ~1h, **escopo real ~45 min**: 18 min de modelagem no quadro (sem
computador), depois 5 etapas acumulativas no Beekeeper. O **marco mínimo fecha
na etapa 3** (duas tabelas relacionadas + seguir a chave na mão + o erro de FK
acontecendo). Etapas 4 e 5 (as outras 3 tabelas) só se o marco veio tranquilo —
se não, viram o desafio de casa e a abertura da #7.

Minuto a minuto, perguntas prontas e o que cortar: [ROTEIRO-AULA.md](ROTEIRO-AULA.md).

## Como rodar

Não tem projeto de código — é banco de dados e Beekeeper Studio, como na #6.

1. Abrir o [Beekeeper Studio](https://www.beekeeperstudio.io/).
2. Nova conexão: **SQLite** → *Create a new database* → `escola.sqlite`
   (pasta local com permissão de escrita).
3. Conectar e abrir uma aba de **Query**.
4. Primeira linha que eles digitam, sempre:

   ```sql
   PRAGMA foreign_keys = ON;
   ```

   Sem isso o SQLite **não** valida chave estrangeira, e a aula inteira perde a
   graça (o INSERT inválido passa). É por conexão: se reconectarem, rodar de novo.

5. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md). O banco pronto, só meu, está em
   [`gabarito/escola.sql`](gabarito/escola.sql) — **não** entregar pra turma: o
   ponto da aula é eles escreverem isso.

## Marco mínimo da aula

Cada aluno criou `professores` e `materias` com PK e FK funcionando, consegue
explicar **por que** a FK mora em `materias` e não em `professores`, chega do
nome da matéria até o nome do professor com dois `SELECT`, e fez o banco
recusar um `INSERT` com `professor_id` inexistente — entendendo que foi o banco
que recusou, não o Beekeeper.

## Arquivos

```text
extra-aula-sql-modelagem-5-tabelas/
├── README.md              # este arquivo (professor)
├── ROTEIRO-AULA.md        # professor: blocos de tempo, marco mínimo, erros comuns
├── DESAFIO.md             # ALUNO: o que fazer e o que testar
├── CARTAO-DE-MEMORIA.md   # ALUNO: folha de consulta da aula
└── gabarito/
    ├── GABARITO.md        # professor: resposta completa, etapa por etapa
    └── escola.sql         # professor: o banco inteiro pronto (referência)
```

## Registro pós-aula

Atualizar `alunos/progresso/turma-11350.md`: registrar como **aula extra entre
#6 e #7** (sem renumerar as seguintes), presença, **até onde chegaram de
verdade** (marco mínimo nas 2 tabelas? as 5? a corrente de 3 saltos saiu?) e
nominalmente quem ainda chuta onde a FK mora — é o que decide se a #7 começa
com recap. Anotar também **se eles sentiram falta de "juntar as tabelas de uma
vez"**: é a melhor deixa pra ensinar `JOIN` na abertura da #7.
Fluxo em [alunos/WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md).
