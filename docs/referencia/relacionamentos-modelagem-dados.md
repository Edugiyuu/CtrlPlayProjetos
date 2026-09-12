# Relacionamentos em modelagem de dados

Referência de consulta: os tipos de relacionamento entre tabelas, como
descobrir qual é qual, e onde a chave estrangeira mora em cada caso. Serve
para preparar aula e para consultar na hora.

Vale para qualquer banco relacional (SQLite, MySQL, PostgreSQL). Os exemplos
usam SQLite, que é o que as turmas usam.

---

## O teste de 2 perguntas (a única coisa que você precisa decorar)

Pegue as duas entidades e pergunte, **nos dois sentidos**:

1. Um **A** pode estar ligado a vários **B**?
2. Um **B** pode estar ligado a vários **A**?

| Pergunta 1 | Pergunta 2 | Relacionamento | Como se resolve |
|---|---|---|---|
| Não | Não | **1:1** — um-para-um | FK num dos dois lados (+ `UNIQUE`) |
| **Sim** | Não | **1:N** — um-para-muitos | FK no lado do "muitos" |
| **Sim** | **Sim** | **N:N** — muitos-para-muitos | **terceira tabela** (de junção) |

> Se a resposta for "sim" numa pergunta só, **o lado que respondeu "não" é o
> lado do um**, e a chave estrangeira vai no outro. Essa é a regra que mais
> gera erro em prova e em projeto.

Nomes que você vai encontrar na internet: 1:1, 1:N (ou 1:M), N:N (ou N:M,
M:N). São a mesma coisa. A notação de "pé de galinha" (*crow's foot*), com
aquele risquinho de três pontas nos diagramas, é só o desenho disso.

---

## 1:N — um-para-muitos (o mais comum de todos)

**Um** registro de um lado se liga a **vários** do outro; cada um desses
vários se liga a um só.

### Exemplos reais

| Um... | tem vários... | e cada um deles tem um só |
|---|---|---|
| Professor | matérias que leciona | a matéria tem um professor responsável |
| Turma | alunos | o aluno está em uma turma |
| Autor | livros | o livro tem um autor |
| Cliente | pedidos | o pedido é de um cliente |
| Categoria | produtos | o produto está em uma categoria |
| Vídeo do YouTube | comentários | o comentário é de um vídeo |
| Time | jogadores do elenco | o jogador está em um time |
| Estado | cidades | a cidade fica em um estado |

### Onde a chave estrangeira mora

**Sempre no lado do "muitos".** O motivo é bobo e definitivo: uma coluna
guarda **um** valor. A matéria tem um professor, então cabe numa coluna. O
professor tem 4 matérias — 4 valores não cabem numa coluna só.

```sql
CREATE TABLE professores (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL
);

CREATE TABLE materias (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  professor_id INTEGER NOT NULL,                          -- a FK mora aqui
  FOREIGN KEY (professor_id) REFERENCES professores(id)
);
```

```text
professores                   materias
┌────┬───────────────┐        ┌────┬─────────────┬──────────────┐
│ id │ nome          │        │ id │ nome        │ professor_id │
├────┼───────────────┤        ├────┼─────────────┼──────────────┤
│ 1  │ Ana           │ <──┬───│ 1  │ Matemática  │      1       │
│ 2  │ Carlos        │ <┐ └───│ 2  │ Física      │      1       │
└────┴───────────────┘  └─────│ 3  │ História    │      2       │
   lado "um" (PK)             └────┴─────────────┴──────────────┘
                                          lado "muitos" (FK)
```

### Obrigatório ou opcional?

Isso é uma segunda decisão, independente da cardinalidade:

- `professor_id INTEGER NOT NULL` → **toda** matéria precisa de professor.
- `professor_id INTEGER` (sem `NOT NULL`) → pode existir matéria sem
  professor definido ainda.

Em diagrama isso aparece como `0..1` (opcional) e `1..1` (obrigatório). Na
prática: é só o `NOT NULL`.

---

## N:N — muitos-para-muitos

Os dois lados são "vários". **Não existe** jeito de resolver com uma coluna:
sempre vira **três tabelas**, sendo a do meio a *tabela de junção* (também
chamada de tabela associativa, tabela de ligação ou *join table*).

### Exemplos reais

| Um... | tem vários... | e vice-versa | A tabela do meio guarda |
|---|---|---|---|
| Aluno | matérias | a matéria tem vários alunos | `notas` — valor, bimestre |
| Pedido | produtos | o produto está em vários pedidos | `itens_pedido` — quantidade |
| Ator | filmes | o filme tem vários atores | `elenco` — nome do personagem |
| Música | playlists | a playlist tem várias músicas | `musicas_playlist` — ordem |
| Aluno | cursos | o curso tem vários alunos | `matriculas` — data, status |
| Post | tags | a tag está em vários posts | `post_tags` — (só as chaves) |
| Usuário | grupos/permissões | o grupo tem vários usuários | `usuario_grupo` — papel |
| Médico | pacientes | o paciente tem vários médicos | `consultas` — data, horário |

### Como fica

```sql
CREATE TABLE alunos   (id INTEGER PRIMARY KEY, nome TEXT NOT NULL);
CREATE TABLE materias (id INTEGER PRIMARY KEY, nome TEXT NOT NULL);

CREATE TABLE notas (                                  -- a tabela de junção
  id INTEGER PRIMARY KEY,
  aluno_id INTEGER NOT NULL,                          -- FK para um lado
  materia_id INTEGER NOT NULL,                        -- FK para o outro
  valor REAL NOT NULL,                                -- dado próprio dela
  bimestre INTEGER NOT NULL,
  FOREIGN KEY (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY (materia_id) REFERENCES materias(id)
);
```

```text
alunos                notas                          materias
┌────┬─────────┐      ┌────┬──────────┬────────────┬───────┐      ┌────┬────────────┐
│ id │ nome    │      │ id │ aluno_id │ materia_id │ valor │      │ id │ nome       │
├────┼─────────┤      ├────┼──────────┼────────────┼───────┤      ├────┼────────────┤
│ 1  │ Benício │<──┬──│ 1  │    1     │     1      │  8.5  │──┬──>│ 1  │ Matemática │
│ 2  │ Caio    │<┐ ├──│ 2  │    1     │     3      │  7.0  │──┼─┐ │ 2  │ Física     │
└────┴─────────┘ │ └──│ 3  │    2     │     1      │  5.5  │──┘ └>│ 3  │ História   │
                 └────┴────┴──────────┴────────────┴───────┘      └────┴────────────┘
```

Repare: o aluno 1 aparece em 2 linhas (tem 2 matérias) **e** a matéria 1
aparece em 2 linhas (tem 2 alunos). É o N:N acontecendo.

### A sacada: um N:N é dois 1:N grudados

A tabela do meio é o lado "muitos" de **duas** relações 1:N ao mesmo tempo.
Por isso ela tem duas FKs. Se você entendeu 1:N, você já entendeu N:N.

### A tabela do meio quase sempre tem dado próprio

E é isso que faz ela ser uma tabela de verdade, não um detalhe técnico:

- a **nota** não é do aluno nem da matéria — é do encontro dos dois;
- a **quantidade** não é do pedido nem do produto — é "3 unidades *deste
  produto* *neste pedido*";
- o **personagem** não é do ator nem do filme — é o papel *daquele ator*
  *naquele filme*.

Pergunta que revela isso na aula: *"essa informação é de quem?"* Se a resposta
for "dos dois juntos", ela mora na tabela do meio.

Quando realmente não há dado próprio (`post_tags`, por exemplo), a tabela
existe do mesmo jeito — só com as duas chaves.

---

## 1:1 — um-para-um (o mais raro)

Cada registro de um lado se liga a **no máximo um** do outro.

### Exemplos reais

| A | B | Por que é 1:1 |
|---|---|---|
| Pessoa | CPF | uma pessoa tem um CPF, um CPF é de uma pessoa |
| Usuário | perfil/configurações | cada conta tem um conjunto de preferências |
| País | capital | um país tem uma capital |
| Pedido | nota fiscal | uma nota fiscal para aquele pedido |
| Funcionário | crachá | um crachá por funcionário |
| Aluno | matrícula (número) | um número de matrícula por aluno |

### Como fica

A FK vai em **um dos dois lados** (você escolhe) e leva um `UNIQUE` — é o
`UNIQUE` que impede o "muitos" e transforma o 1:N em 1:1.

```sql
CREATE TABLE usuarios (id INTEGER PRIMARY KEY, email TEXT NOT NULL);

CREATE TABLE perfis (
  id INTEGER PRIMARY KEY,
  usuario_id INTEGER NOT NULL UNIQUE,        -- UNIQUE = só um perfil por usuário
  tema TEXT,
  idioma TEXT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
```

**Escolha do lado:** ponha a FK no lado **opcional** ou no lado **menos
usado**. Nem todo usuário tem perfil preenchido, então `perfis` aponta para
`usuarios`, e não o contrário.

> ⚠️ Antes de modelar um 1:1, pergunte: *por que não são colunas da mesma
> tabela?* Na maioria das vezes deveriam ser. As razões legítimas para separar
> são: campos que quase nunca são usados (não carregar peso à toa), dados com
> regra de acesso diferente (dado sensível numa tabela à parte), ou coisas com
> ciclo de vida próprio. Fora isso, junte tudo numa tabela só.

---

## Auto-relacionamento (a tabela aponta para ela mesma)

Não é um quarto tipo — é 1:N ou N:N onde os dois lados são a **mesma** tabela.
Vale registrar porque assusta quando aparece.

### 1:N consigo mesma

| Exemplo | Como se lê |
|---|---|
| Funcionário → gerente | o gerente também é um funcionário |
| Categoria → categoria pai | "Celulares" dentro de "Eletrônicos" |
| Comentário → comentário respondido | thread de respostas |

```sql
CREATE TABLE funcionarios (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL,
  gerente_id INTEGER,                                  -- pode ser NULL: o chefão não tem chefe
  FOREIGN KEY (gerente_id) REFERENCES funcionarios(id)
);
```

### N:N consigo mesma

| Exemplo | Tabela do meio |
|---|---|
| Usuário segue usuário (Instagram) | `seguidores` (seguidor_id, seguido_id) |
| Aluno é amigo de aluno | `amizades` (aluno_a_id, aluno_b_id) |
| Produto é similar a produto | `produtos_similares` |

---

## Erros clássicos de modelagem

| O erro | Como ele aparece | Por que está errado |
|---|---|---|
| FK no lado errado | `materia_id` dentro de `professores` | O professor tem várias matérias; não cabem numa coluna |
| Colunas numeradas | `nota1`, `nota2`, `nota3` em `alunos` | E quando forem 8 matérias? Vira 1:N/N:N, não colunas |
| Lista dentro de uma coluna | `materias = '1,4,7'` | O banco não consegue validar nem relacionar isso; é texto, não chave |
| Repetir o nome em vez da chave | `nome_professor TEXT` em `materias` | Se o nome mudar, você corrige N linhas — e erra uma |
| N:N sem tabela do meio | tentar `produto_id` em `pedidos` | Um pedido com 3 itens não cabe |
| 1:1 que deveria ser coluna | tabela `telefones` com 1 linha por pessoa | Se é sempre um só, é coluna na mesma tabela |
| Chave estrangeira apontando para coluna não-única | `REFERENCES professores(nome)` | FK aponta para a chave primária (ou coluna `UNIQUE`). O SQLite deixa criar a tabela e só reclama no `INSERT`: `foreign key mismatch` |

---

## O mesmo modelo em outros lugares

### No MongoDB (não relacional)

Quem vem do Mongo modela por **documento**, e tem duas opções em vez de uma:

| No relacional | No Mongo |
|---|---|
| 1:N com FK na tabela filha | **embutir** um array de subdocumentos no pai, **ou** guardar uma referência (`_id`) |
| N:N com tabela de junção | array de referências dos dois lados, ou uma coleção separada fazendo o papel da tabela de junção |

Regra prática do Mongo: **embuta** o que é sempre lido junto e não cresce sem
limite (endereço dentro do cliente); **referencie** o que é grande, muda
sozinho ou é compartilhado (os pedidos do cliente). No relacional essa escolha
não existe — é sempre tabela separada + chave.

### No Sequelize (ORM que as turmas usam)

As associações são a tradução direta do que está aqui:

| Relacionamento | Sequelize |
|---|---|
| 1:N | `Professor.hasMany(Materia)` + `Materia.belongsTo(Professor)` |
| 1:1 | `Usuario.hasOne(Perfil)` + `Perfil.belongsTo(Usuario)` |
| N:N | `Aluno.belongsToMany(Materia, { through: Nota })` |

Quem declara `belongsTo` é **o lado que ganha a coluna da chave estrangeira** —
ou seja, o lado do "muitos". É a mesma regra desta página, com outro nome.

---

## Onde isso é usado nas aulas

- [CY4-11350 · aula extra: 5 tabelas, PK e FK](../../turmas/CY4-11350/extra-aula-sql-modelagem-5-tabelas/) —
  a turma monta um 1:N, outro 1:N e um N:N do zero (Boletim da Escola).
- [CY4-11350 · aula #6: SQL vs. NoSQL](../../turmas/CY4-11350/06-aula-sql-relacional-nao-relacional/) —
  primeiro contato com PK/FK, comparando com Mongo.
- [CY4-11350 · aula #7: MVC + Sequelize](../../turmas/CY4-11350/07-aula-biblioteca-sql-mvc/) —
  os mesmos relacionamentos, agora declarados em código.

> Para montar uma aula em cima disto, use o template teórico
> ([`docs/class/aula-teorica/`](../class/aula-teorica/)) — cada tipo de
> relacionamento vira um bloco de conceito com pergunta de checagem. Lembrando
> a regra de ouro nº 4: o aluno rodar o SQL **não** é prova de que entendeu a
> modelagem.
