# Gabarito — Boletim da Escola (professor)

Cobre as **etapas da aula** (roteiro) e o **DESAFIO.md**, na mesma ordem. Como
não tem arquivo de projeto, o "arquivo" aqui é a aba de query do aluno no
Beekeeper: cada parte mostra o SQL no estado em que a aba deve estar ao terminar
aquela parte — cumulativo.

O banco inteiro, pronto de uma vez, está em [`escola.sql`](escola.sql) (com
comentários de por que cada coisa está onde está). **Não entregar para a turma.**

> ⚠️ **Sem `JOIN` em lugar nenhum** — a turma não viu. Se um aluno chegar com
> um `JOIN` que funciona (achou na internet ou já sabia), **não invalide**: peça
> pra ele fazer o mesmo caminho na mão e explicar o que o `JOIN` está poupando.
> Isso vira a melhor abertura possível pra ensinar `JOIN` depois.

Os dados são inventados pelo aluno. O que importa na correção não são os nomes,
é: **a PK certa em cada tabela, a FK no lado certo, a ordem de criação, e a
capacidade de seguir a chave de uma tabela até a outra.**

---

## Parte 0 — A primeira linha (etapa de setup)

```sql
PRAGMA foreign_keys = ON;
```

**Resposta esperada à pergunta "o que essa linha faz?":** liga a checagem de
chave estrangeira, que no SQLite vem desligada. Sem ela a FK "existe no papel"
mas o banco aceita um valor que não existe na outra tabela.

**Buraco que isso revela:** se o aluno disser "cria as chaves estrangeiras", ele
confundiu **declarar** (no `CREATE TABLE`) com **validar** (o `PRAGMA`). Vale
corrigir na hora.

---

## Parte 1 — `professores` e `materias` (1:N)

**Ordem importa:** `professores` primeiro, sempre.

```sql
PRAGMA foreign_keys = ON;

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

INSERT INTO professores (id, nome) VALUES
  (1, 'Ana Beatriz Nunes'),
  (2, 'Carlos Menezes'),
  (3, 'Rita Salgado');

INSERT INTO materias (id, nome, professor_id) VALUES
  (1, 'Matemática', 1),
  (2, 'Física', 1),
  (3, 'História', 2),
  (4, 'Português', 3),
  (5, 'Biologia', 3);
```

**Variações que contam como certo:**

- omitir a coluna `id` nos `INSERT` e deixar o SQLite gerar — **está certo**, e
  é até melhor; só avise que os `id` gerados podem não ser os que ele espera na
  hora de preencher a FK (mandar dar um `SELECT` antes);
- `professor_id INTEGER` sem `NOT NULL` — aceitável (permite matéria sem
  professor). Boa deixa pra perguntar: *"você quer permitir matéria sem
  professor?"*.

**O que NÃO conta:**

- `FOREIGN KEY (professor_id) REFERENCES professores(nome)` — FK tem que
  apontar pra chave primária;
- uma coluna `materia_id` dentro de `professores` — FK no lado errado. Voltar ao
  desenho: *"a professora dá 2 matérias; como 2 `id` cabem numa coluna?"*;
- `professor_id TEXT` guardando o nome do professor — é exatamente a repetição
  de dado que a FK existe pra evitar. Pergunta que mata: *"e se a professora
  casar e mudar o sobrenome, quantas linhas você vai ter que corrigir?"*

**Resposta esperada à pergunta "posso criar `materias` antes de
`professores`?":** não, porque a FK referencia uma tabela que ainda não existe —
dá `no such table: professores`.

---

## Parte 2 — Seguir a chave na mão (substitui o JOIN)

**Do filho pro pai** (uma matéria → o professor dela):

```sql
SELECT * FROM materias WHERE id = 1;       -- Matemática, professor_id = 1
SELECT * FROM professores WHERE id = 1;    -- Ana Beatriz Nunes
```

**Do pai pros filhos** (um professor → as matérias dele):

```sql
SELECT * FROM materias WHERE professor_id = 1;   -- Matemática e Física
```

**Resposta esperada à pergunta "por que a tabela `materias` não guarda o nome do
professor direto?":** porque o nome ficaria repetido em toda matéria que ele dá,
e corrigir um erro de digitação viraria corrigir várias linhas. Guardando o
`id`, o nome existe num lugar só.

**Buraco que isso revela:** se o aluno só consegue fazer o primeiro sentido
(filho → pai) e trava no segundo, ele decorou o caminho em vez de entender a
chave. Insistir na segunda query — é a mesma coluna, pergunta invertida.

---

## Parte 3 — O INSERT que o banco recusa (etapa 3)

```sql
INSERT INTO materias (nome, professor_id) VALUES ('Geografia', 99);
```

Resultado esperado no Beekeeper:

```text
FOREIGN KEY constraint failed
```

Depois, a demonstração ao contrário (fazer **uma vez**, na minha tela ou junto
com eles): reconectar sem rodar o `PRAGMA`, rodar o mesmo INSERT e ver
**passar**. Conferir o estrago com `SELECT * FROM materias;` — tem uma Geografia
com `professor_id = 99`, e aí mandar eles seguirem a chave: `SELECT * FROM
professores WHERE id = 99;` volta **vazio**. O dado está órfão. Religar o
`PRAGMA` antes de seguir.

**Resposta esperada à pergunta "quem recusou isso?":** o banco de dados (o
SQLite). O Beekeeper só enviou o comando e mostrou o recado que voltou.

**Buraco que isso revela:** quem responder "o Beekeeper" acha que a validação é
do programa, e na #7 vai achar que é o Sequelize que valida. Corrigir agora: a
regra está **gravada no banco**, e valeria igual pelo Node, pelo terminal ou por
qualquer outro programa.

---

## Parte 4 — `turmas` e `alunos` (desafio, etapas 1 e 2)

```sql
CREATE TABLE turmas (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  ano INTEGER NOT NULL
);

CREATE TABLE alunos (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  turma_id INTEGER NOT NULL,
  FOREIGN KEY (turma_id) REFERENCES turmas(id)
);

INSERT INTO turmas (id, nome, ano) VALUES
  (1, '9º A', 2026),
  (2, '9º B', 2026);

INSERT INTO alunos (id, nome, turma_id) VALUES
  (1, 'Benício', 1),
  (2, 'Caio', 1),
  (3, 'Nicolas', 1),
  (4, 'Larissa', 2);
```

Teste da etapa 2 (os 3 da mesma turma, e só eles):

```sql
SELECT * FROM alunos WHERE turma_id = 1;
```

**Resposta esperada à pergunta "por que `turmas` não tem FK nenhuma?":** porque
nada do que uma turma precisa saber mora em outra tabela. Ela é o lado "um" da
relação — quem aponta é o aluno.

**Resposta esperada à pergunta "se um aluno mudar de turma, quantas linhas eu
mexo?":** uma — o `turma_id` dele. Se o nome da turma estivesse repetido em cada
aluno, seriam várias, e dava pra errar em uma e não perceber.

---

## Parte 5 — `notas`, a tabela de junção (desafio, etapa 3)

```sql
CREATE TABLE notas (
  id INTEGER PRIMARY KEY,
  aluno_id INTEGER NOT NULL,
  materia_id INTEGER NOT NULL,
  valor REAL NOT NULL,
  bimestre INTEGER NOT NULL,
  FOREIGN KEY (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY (materia_id) REFERENCES materias(id)
);

INSERT INTO notas (id, aluno_id, materia_id, valor, bimestre) VALUES
  (1, 1, 1, 8.5, 1),
  (2, 1, 3, 7.0, 1),
  (3, 1, 4, 9.5, 1);
```

**Variação que conta como certo:** usar a dupla `(aluno_id, materia_id)` como
chave primária composta, sem coluna `id`:

```sql
CREATE TABLE notas (
  aluno_id INTEGER NOT NULL,
  materia_id INTEGER NOT NULL,
  valor REAL NOT NULL,
  bimestre INTEGER NOT NULL,
  PRIMARY KEY (aluno_id, materia_id),
  FOREIGN KEY (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY (materia_id) REFERENCES materias(id)
);
```

Se alguém chegar nisso sozinho, **elogiar e parar de explorar** — é modelagem de
quem entendeu. Só registrar que, aqui, isso impediria o mesmo aluno de ter duas
notas na mesma matéria — o que quebra o `bimestre` (a chave teria que incluir o
bimestre também). Boa conversa de 1 minuto com quem chegou lá; não puxar o
assunto com a turma inteira hoje.

**O que NÃO conta:**

- só uma das duas FKs declarada;
- uma coluna `nota` dentro de `alunos` — não cabe mais de uma matéria;
- guardar `nome_materia TEXT` em vez de `materia_id`;
- `valor INTEGER` — perde a nota 8.5. Se acontecer, deixar ele descobrir
  inserindo 8.5 e vendo virar 8.

**Resposta esperada à pergunta "por que essa tabela existe?":** porque um aluno
tem nota em várias matérias **e** uma matéria tem nota de vários alunos —
nenhuma coluna sozinha guarda "vários". Cada linha de `notas` é a nota de um
aluno numa matéria; 3 matérias = 3 linhas.

**Resposta esperada à pergunta "ela tem dado próprio?":** sim, `valor` e
`bimestre`. Não é só uma ligação: o 8.5 não é do aluno nem da matéria — é do
encontro dos dois.

---

## Parte 6 — A corrente de 3 saltos (desafio, etapa 5)

Aqui não tem uma query "certa": tem um **caminho**. O que eu observo é se ele
sabe qual coluna olhar em cada salto, sem eu dizer.

```sql
-- salto 0: escolher uma nota
SELECT * FROM notas WHERE aluno_id = 1;
-- (ex.: a linha com materia_id = 3, valor 7.0)

-- salto 1: a matéria daquela nota
SELECT * FROM materias WHERE id = 3;        -- História, professor_id = 2

-- salto 2: o professor daquela matéria
SELECT * FROM professores WHERE id = 2;     -- Carlos Menezes
```

E o outro lado da mesma nota:

```sql
SELECT * FROM alunos WHERE id = 1;          -- Benício, turma_id = 1
SELECT * FROM turmas WHERE id = 1;          -- 9º A
```

**A frase que ele tem que conseguir falar:** *"esta linha é a nota 7.0 do
Benício, do 9º A, em História, que é dada pelo Carlos Menezes"* — apontando de
qual `SELECT` saiu cada pedaço.

**Erro clássico aqui:** usar o `id` da própria linha de `notas` no lugar do
`materia_id` (`SELECT * FROM materias WHERE id = 2` porque a nota é a de `id`
2). Pergunta que conserta: *"o número 2 que você usou é o número da nota ou o
número da matéria? Olhe o nome da coluna de onde você tirou."*

> Se, ao fim dos 5 saltos, alguém reclamar "isso dá muito trabalho, não tem um
> jeito de fazer de uma vez?" — **é a melhor coisa que pode acontecer nesta
> aula.** Resposta: "tem, e é a primeira coisa que a gente vê na próxima."
> Anotar quem perguntou no registro pós-aula.

---

## Gabarito do "Se sobrar tempo"

Todos sem `JOIN`.

### 1. Notas abaixo de 6, da menor pra maior

```sql
SELECT * FROM notas WHERE valor < 6 ORDER BY valor ASC;
```

Com os dados do [`escola.sql`](escola.sql): a 4.5 (aluno 4, Física) e a 5.5
(aluno 2, Matemática).

### 2. Quantas notas um aluno tem

```sql
SELECT COUNT(*) FROM notas WHERE aluno_id = 1;
```

Ler em voz alta como "quantas linhas batem com isso" → 3. Se ele contar na mão e
conferir com o `COUNT`, melhor ainda.

### 3. A menor nota da escola, e de quem é

```sql
SELECT * FROM notas ORDER BY valor ASC LIMIT 1;   -- aluno_id = 4, valor 4.5
SELECT * FROM alunos WHERE id = 4;                -- Larissa, turma_id = 2
SELECT * FROM turmas WHERE id = 2;                -- 9º B
```

É a corrente de saltos de novo, agora começando por uma pergunta ("quem foi
pior?") em vez de por uma linha escolhida a dedo. `LIMIT` é novo — dar de
passagem, é só "me traz só a primeira".
