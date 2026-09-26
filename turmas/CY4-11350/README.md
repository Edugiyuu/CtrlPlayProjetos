# Turma CY4-11350

Backend Node/Express — turma regular (Benício, Caio, Nicolas) — Sáb 14:00.
Progresso completo: [turma-11350.md](../../alunos/progresso/turma-11350.md).

**Currículo pivotado para SQL local** (SQLite + Sequelize) a partir da aula
#6, no lugar do MongoDB/Mongoose do currículo oficial — pedido do professor
depois da primeira aula de SQL. Ver decisão completa na memória
`turma-11350-pivot-sql`. As outras turmas do módulo `ctrlyoung-4` (ex.:
[CY4-11346](../CY4-11346/)) continuam em Mongo.

## Projetos (ordem do cronograma)

| Aula | Pasta |
|---:|---|
| #6 | [06-aula-sql-relacional-nao-relacional/](06-aula-sql-relacional-nao-relacional/) — SQL vs. NoSQL, Beekeeper Studio |
| extra | [extra-aula-sql-modelagem-5-tabelas/](extra-aula-sql-modelagem-5-tabelas/) — Boletim da Escola: modelar e criar 5 tabelas com PK/FK, sem JOIN (entre a #6 e a #7) |
| #7 | [07-aula-biblioteca-sql-mvc/](07-aula-biblioteca-sql-mvc/) — MVC, SQLite + Sequelize |
| #8 | [08-aula-biblioteca-sql-docs-api/](08-aula-biblioteca-sql-docs-api/) — Swagger |
| #9 | [09-aula-biblioteca-sql-filtros-paginacao/](09-aula-biblioteca-sql-filtros-paginacao/) |
| #10 | [10-aula-biblioteca-sql-auth-jwt/](10-aula-biblioteca-sql-auth-jwt/) |
| #11 | [11-aula-biblioteca-sql-autorizacao-jwt/](11-aula-biblioteca-sql-autorizacao-jwt/) |
| #12 | [12-aula-biblioteca-sql-swagger-cookies/](12-aula-biblioteca-sql-swagger-cookies/) |
| #13 | [13-aula-biblioteca-sql-frontend/](13-aula-biblioteca-sql-frontend/) — CORS + React consumindo a API; **gabarito pronto e testado** em [gabarito/](13-aula-biblioteca-sql-frontend/gabarito/) |
| #14 | [14-aula-tarefas-crud-sequelize/](14-aula-tarefas-crud-sequelize/) — projeto novo: Lista de Tarefas |
| #15 | [15-aula-tarefas-filtros-ordenacao/](15-aula-tarefas-filtros-ordenacao/) |
| #16 | [16-aula-react-pokemons-revisao/](16-aula-react-pokemons-revisao/) — sem banco, revisão de React |
| #17 | [17-aula-biblioteca-react-hook-form/](17-aula-biblioteca-react-hook-form/) |
| #18 | [18-aula-biblioteca-tailwind-ia/](18-aula-biblioteca-tailwind-ia/) |

A aula **extra** entre a #6 e a #7 não está no cronograma oficial (daí o prefixo
`extra-`, sem número): a #6 ficou em consultar um banco que já vinha pronto, e
chave primária/estrangeira não firmou — e a #7 (associações no Sequelize)
depende disso. Ela não renumera nada: a aula seguinte continua sendo a #7.
⚠️ `JOIN` **não foi dado** na #6, então o material da extra não usa `JOIN` em
lugar nenhum; segue-se a chave na mão, com `WHERE`.

Aulas #7–#13 e #17–#18 continuam o **mesmo projeto** (Biblioteca Digital).
Aulas #14–#15 são um projeto novo (Lista de Tarefas), pra turma consolidar
Sequelize com menos ajuda. Aula #16 é só front, sem banco.

> ⚠️ Material escrito de uma vez, antes de dar as aulas — ajustar escopo
> depois de cada uma conforme o ritmo real da turma (ver
> `alunos/WORKFLOW-AULAS.md`).
