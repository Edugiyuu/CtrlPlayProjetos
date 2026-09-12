# Cartão de memória — criar tabelas, PK e FK (SQLite)

> Folha de consulta desta aula. Deixe aberta numa aba enquanto faz o desafio.
> Só tem o que a gente usa hoje. Onde aparece `tabela`, `coluna`, `outra_tabela`,
> é pra você trocar pelo nome de verdade.

---

## Antes de tudo

### `PRAGMA foreign_keys = ON;`

Liga a checagem de chave estrangeira. No SQLite ela vem **desligada**: sem essa
linha o banco aceita uma chave estrangeira apontando pro vazio e não reclama.

```sql
PRAGMA foreign_keys = ON;
```

Vale **por conexão**, não fica salvo no arquivo. Reconectou o Beekeeper? Rode
de novo.

---

## Criar tabela

### `CREATE TABLE`

Cria uma tabela nova, dizendo o nome e o tipo de cada coluna.

```sql
CREATE TABLE tabela (
  coluna TIPO REGRAS,
  coluna TIPO REGRAS
);
```

Roda **uma vez**. Rodar de novo dá `table already exists`.

### Tipos que a gente usa hoje

| Tipo | Pra quê | Exemplo de valor |
|---|---|---|
| `INTEGER` | número inteiro, e todo `id` | `7` |
| `REAL` | número com vírgula (nota) | `8.5` |
| `TEXT` | texto | `'História'` |

Texto **sempre** entre aspas simples: `'História'`, não `"História"` nem
`História`.

### Regras de coluna

| Regra | O que faz |
|---|---|
| `PRIMARY KEY` | marca a coluna como chave primária |
| `NOT NULL` | a coluna não pode ficar vazia |
| `DEFAULT valor` | valor usado quando você não manda nenhum |

---

## As duas chaves

### Chave primária (PK)

A coluna que identifica **uma linha, e só uma**, dentro da tabela. Nunca
repete, nunca fica vazia. É o "CPF" da linha.

```sql
id INTEGER PRIMARY KEY
```

Com `INTEGER PRIMARY KEY` o SQLite preenche o `id` sozinho se você não mandar
valor no `INSERT`.

### Chave estrangeira (FK)

Uma coluna que guarda **a chave primária de outra tabela** — é o que liga as
duas. Guarda o `id`, nunca o nome.

```sql
FOREIGN KEY (coluna) REFERENCES outra_tabela(id)
```

Vai **dentro** do `CREATE TABLE`, depois das colunas. A coluna citada precisa
existir na lista de colunas acima.

> **Onde a FK mora:** num um-para-muitos, **sempre no lado do "muitos"**. Uma
> matéria tem um professor → `professor_id` fica em `materias`. Um professor dá
> 4 matérias → não cabe numa coluna só.

> **Ordem de criação:** a tabela referenciada tem que existir **antes**. Crie
> `professores` e só depois `materias`.

### Tabela de junção (muitos-para-muitos)

Quando os dois lados são "muitos" (um aluno tem nota em várias matérias **e**
uma matéria tem nota de vários alunos), nenhuma coluna resolve. Entra uma
**terceira tabela**, com uma FK pra cada lado — e cada linha dela é *um* dos
dois encontrando *o outro*.

```sql
CREATE TABLE tabela_do_meio (
  id INTEGER PRIMARY KEY,
  a_id INTEGER NOT NULL,
  b_id INTEGER NOT NULL,
  FOREIGN KEY (a_id) REFERENCES tabela_a(id),
  FOREIGN KEY (b_id) REFERENCES tabela_b(id)
);
```

Ela pode ter dado próprio (a nota tem `valor` e `bimestre`) — e normalmente tem.

---

## Colocar dados

### `INSERT INTO`

```sql
INSERT INTO tabela (coluna, coluna) VALUES (valor, valor);
```

Várias linhas de uma vez: separe os parênteses por vírgula.

```sql
INSERT INTO tabela (coluna, coluna) VALUES
  (valor, valor),
  (valor, valor);
```

Insira sempre **o pai antes do filho**: professor antes da matéria, aluno antes
da nota. Senão a chave estrangeira aponta pro vazio e o banco recusa.

⚠️ Duas colunas de `id` seguidas (`aluno_id`, `materia_id`) são as duas número.
Se você trocar a ordem, o banco **aceita** — quem percebe o erro é você.

---

## Seguir a chave (ir de uma tabela à outra)

Não existe comando mágico hoje: você lê o valor da chave estrangeira numa
tabela e vai buscar esse `id` na outra.

### Do filho pro pai (uma linha)

```sql
SELECT * FROM tabela_filha WHERE id = 1;      -- anote a coluna _id
SELECT * FROM tabela_pai WHERE id = <valor anotado>;
```

### Do pai pros filhos (várias linhas)

```sql
SELECT * FROM tabela_filha WHERE coluna_fk = <id do pai>;
```

Mesma chave, pergunta invertida: aqui vêm **todos** os filhos daquele pai.

### `ORDER BY` (recap da aula passada)

```sql
SELECT * FROM tabela ORDER BY coluna ASC;   -- ASC = crescente, DESC = decrescente
```

---

## Erros que aparecem direto

| O que você vê | O que significa |
|---|---|
| `no such table: x` | A tabela `x` não existe ainda — ou você está na conexão errada |
| `table x already exists` | Você rodou o `CREATE TABLE` duas vezes |
| `FOREIGN KEY constraint failed` | O `id` que você pôs na chave estrangeira não existe na outra tabela |
| `NOT NULL constraint failed: x.y` | A coluna `y` é obrigatória e você não mandou valor |
| `UNIQUE constraint failed: x.id` | Você repetiu um `id` que já existe |
| `no such column: História` | Faltou aspas simples no texto: `'História'` |
| INSERT errado **passou** sem reclamar | Faltou `PRAGMA foreign_keys = ON;` nesta conexão |

---

## Sempre que algo não funcionar

1. Leia a mensagem de erro **inteira** — ela diz a tabela e a coluna.
2. Confira se você está na conexão certa (o nome do arquivo aparece no topo).
3. Dê um `SELECT * FROM tabela;` na tabela que você está referenciando e veja
   os `id` que **existem de verdade**.
4. Se tudo parece certo e o banco aceitou algo inválido: rode o `PRAGMA` de novo.
