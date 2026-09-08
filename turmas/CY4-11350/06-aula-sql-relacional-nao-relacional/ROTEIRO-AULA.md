# Roteiro de Aula: SQL Relacional vs. Não Relacional (Beekeeper Studio)

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: sem código; SQLite + Beekeeper Studio
- Duração: ~1h
- Pré-requisito da turma: já viram Node, Express, CRUD e Mongoose (dados em
  documentos). **Modelo relacional e SQL são novidade hoje.**

## Objetivo
Sair da aula sabendo explicar, com as próprias palavras, a diferença entre
banco relacional e não relacional — e escrever sozinhos um `SELECT` com
`WHERE`, `ORDER BY` e pelo menos um `JOIN`.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Tabela, linha, coluna | Parte 0 |
| Schema fixo vs. schema flexível | Parte 0 |
| Chave primária / chave estrangeira | Parte 0 e queries em grupo |
| `SELECT`, `WHERE`, `ORDER BY` | Queries 1–3 |
| `JOIN` (relacionar tabelas) | Query 4 |
| `GROUP BY` + `COUNT` | Query 5 |
| Desafios sozinhos | Parte final |

---

## 0–20 min — Parte 0: SQL vs. NoSQL, e as duas chaves (conceito, sem código)

Conduza com perguntas, usando o que eles já sabem de Mongo como ponto de partida.
**Pare em cada bloco e peça para alguém repetir com as próprias palavras antes
de seguir** — foi o ponto que passou rápido demais na primeira turma.

### O que é "SQL" e o que é "NoSQL"
- **SQL** (*Structured Query Language*) é, ao mesmo tempo, (a) a linguagem que
  usamos para conversar com um banco de dados relacional e (b) o apelido que
  se dá para "banco relacional" (ex.: "esse projeto usa SQL" = usa um banco
  relacional). Hoje escrevemos SQL de verdade no Beekeeper.
- **NoSQL** literalmente significa "not only SQL" — é o nome genérico para
  **qualquer** banco que não organiza os dados em tabelas com schema fixo.
  MongoDB (documentos) é o mais comum, mas também existem NoSQL de
  chave-valor (Redis), de coluna (Cassandra) etc. **A turma já usa um NoSQL
  todo dia sem saber: o MongoDB do projeto da biblioteca.**

### Banco relacional (SQL) — tabelas
- Dados ficam em **tabelas**: linhas (registros) e colunas (campos fixos).
- Toda linha da tabela `livros` tem exatamente as mesmas colunas.
- Schema é definido antes (`CREATE TABLE`) e é rígido: não dá para inserir
  uma linha faltando uma coluna obrigatória.
- Exemplos: PostgreSQL, MySQL, SQLite, SQL Server.

### Banco não relacional (NoSQL / documentos, ex. MongoDB)
- Dados ficam em **documentos** (parecido com um objeto JS/JSON), agrupados
  em **coleções**.
- Cada documento pode ter campos diferentes — schema flexível.
- Dá para **embutir** dados relacionados dentro do próprio documento (ex.: um
  livro já vem com o autor dentro, sem precisar de uma segunda tabela) em vez
  de referenciar.
- Exemplos: MongoDB, Redis, Cassandra, Firebase.

**Pergunta para a turma:** *"No projeto de vocês em Mongo, como está guardado
o autor de um livro — dentro do próprio documento do livro, ou seria uma
coleção separada?"* Deixe eles pensarem antes de responder — não tem resposta
única, é uma decisão de modelagem.

| | Relacional (SQL) | Não relacional (Mongo) |
|---|---|---|
| Unidade de dado | Linha numa tabela | Documento numa coleção |
| Schema | Fixo, definido antes | Flexível, pode variar por documento |
| Relacionamento | Chave estrangeira + `JOIN` | Referência ou dado embutido |
| Onde usamos | Hoje, com SQLite | Já usam, com Mongoose |

> 💡 Sacada da aula: **não existe "melhor"**, existe "mais adequado pro
> problema". Dado muito estruturado e com muitas relações → relacional tende
> a ganhar. Dado que muda de formato ou precisa escalar rápido e horizontal →
> não relacional tende a ganhar. Muita empresa usa os dois ao mesmo tempo.

### Chave primária (Primary Key) — explicar ANTES de abrir o Beekeeper
- É a coluna que identifica **uma linha, e só uma**, dentro da tabela — nunca
  se repete, nunca fica vazia.
- No nosso banco: `autores.id`, `livros.id`, `alunos.id`. Cada `id` só existe
  uma vez na tabela dele.
- Analogia: é como o CPF de uma pessoa — identifica ela sem ambiguidade,
  mesmo que duas pessoas tenham o mesmo nome.

### Chave estrangeira (Foreign Key) — explicar ANTES de abrir o Beekeeper
- É uma coluna numa tabela que **guarda o valor da chave primária de outra
  tabela**, criando o link entre as duas.
- No nosso banco: `livros.autor_id` guarda o `id` de um autor que existe na
  tabela `autores`. Por isso dá para achar o autor de um livro sem repetir o
  nome dele em toda linha da tabela `livros`.
- **Desenhe isso no quadro/tela antes de sair digitando SQL:**
  ```
  autores                      livros
  ┌────┬───────────────┐       ┌────┬──────────────┬──────────┐
  │ id │ nome          │       │ id │ titulo       │ autor_id │
  ├────┼───────────────┤       ├────┼──────────────┼──────────┤
  │ 1  │ J.K. Rowling  │ <───┐ │ 1  │ Harry Potter │    1     │
  │ 2  │ Tolkien       │ <─┐ └─│ 2  │ H.P. e a...  │    1     │
  └────┴───────────────┘   └───│ 3  │ O Hobbit     │    2     │
     chave primária             └────┴──────────────┴──────────┘
                                        chave estrangeira
  ```
  A seta é o que o `JOIN` faz na hora da consulta: ele segue o `autor_id` até
  achar a linha certa em `autores`.

**Teste de entendimento antes de seguir (pergunte, não explique de novo):**
*"Se eu tentasse cadastrar um livro com `autor_id = 99`, e não existe autor
com `id = 99`, o que vocês acham que acontece?"* (Resposta: o banco recusa —
é exatamente para isso que a chave estrangeira serve, garantir que a relação
sempre aponte para algo que existe de verdade.)

---

## 20–25 min — Setup: abrir a biblioteca no Beekeeper Studio

Siga o [README.md](README.md) da pasta: cada aluno cria sua própria conexão
SQLite no Beekeeper Studio e roda o [`biblioteca.sql`](biblioteca.sql) para
ter as tabelas `autores`, `livros`, `alunos` e `emprestimos` populadas.

**Teste agora:** clicar na tabela `livros` na barra lateral do Beekeeper e ver
os 10 livros aparecerem.

---

## 25–45 min — Queries para fazer junto (guie, não entregue pronto no chat)

Peça para cada um digitar e rodar — não é para colar. Depois de cada query,
pergunte "o que essa linha faz?" antes de rodar.

**1. Ver tudo de uma tabela**
```sql
SELECT * FROM livros;
```

**2. Filtrar com WHERE**
```sql
SELECT titulo, ano_publicacao
FROM livros
WHERE genero = 'Fantasia';
```
Pergunta: *"Como eu mudaria para achar só os livros disponíveis
(`disponivel = 1`)?"*

**3. Ordenar com ORDER BY**
```sql
SELECT titulo, ano_publicacao
FROM livros
ORDER BY ano_publicacao ASC;
```
Peça para eles trocarem `ASC` por `DESC` e observarem a diferença.

**4. JOIN — juntar livros com seus autores**
```sql
SELECT livros.titulo, autores.nome AS autor
FROM livros
JOIN autores ON livros.autor_id = autores.id;
```
> 💡 Esse é o momento-chave da aula: no Mongo, o autor podia estar embutido
> no documento do livro. Aqui, ele está numa tabela separada e o `JOIN` é
> quem "junta" as duas de novo na hora da consulta.

**5. Agrupar e contar (GROUP BY + COUNT)**
```sql
SELECT genero, COUNT(*) AS total_livros
FROM livros
GROUP BY genero;
```
Pergunta: *"Qual gênero tem mais livros na nossa biblioteca?"*

### 45–50 min — PONTO DE PARADA
Se todos escreveram e entenderam a query 4 (JOIN), siga para os desafios.
Se a turma está travando no WHERE/ORDER BY, fique mais tempo nas queries 1–3
e leve o JOIN como desafio guiado, cortando os desafios sozinhos pela metade.

---

## 50–55 min — ✅ MARCO MÍNIMO: a aula já valeu aqui

Cada aluno consegue, sozinho:
- [ ] dizer a diferença entre SQL e NoSQL com um exemplo do próprio projeto;
- [ ] apontar, na tabela `livros`, qual coluna é a chave primária e qual é a
      chave estrangeira, e explicar para que cada uma serve;
- [ ] escrever um `SELECT ... WHERE ...` sem ajuda;
- [ ] ler um `JOIN` pronto e dizer o que ele faz.

---

## Desafios para fazerem sozinhos (não dê a resposta — só o enunciado)

Cada aluno resolve na própria máquina, no Beekeeper Studio. Circule e ajude
com perguntas, não com a query pronta.

1. **Fácil:** liste o título de todos os livros que **não** estão disponíveis
   no momento (`disponivel = 0`).
2. **Fácil:** liste o nome de todos os autores que são de nacionalidade
   `'Britânica'`.
3. **Médio:** liste o título de cada livro junto com o nome do autor,
   mas mostre só os livros do gênero `'Mistério'` (dica: é o JOIN da query 4
   com um `WHERE` a mais).
4. **Médio:** conte quantos livros cada autor tem na tabela (dica: `JOIN` +
   `GROUP BY` + `COUNT`, parecido com a query 5, mas agrupando por autor em
   vez de gênero).
5. **Difícil:** liste o nome de cada aluno junto com o título dos livros que
   ele pegou emprestado e **ainda não devolveu** (`data_devolucao` é nula).
   Isso exige juntar três tabelas: `alunos`, `emprestimos` e `livros`.
6. **Bônus (se sobrar tempo):** ordene o resultado do desafio 4 do autor com
   mais livros para o com menos (dica: `ORDER BY` numa coluna calculada com
   `COUNT`).

## Perguntas para conduzir a aula
- "Se a gente quisesse adicionar um livro sem autor cadastrado, o que
  aconteceria aqui no SQL? E no Mongo?"
- "Por que a tabela `livros` guarda só o `autor_id` e não o nome do autor
  direto?"
- "Qual das duas abordagens vocês acham mais parecida com um Excel?"
- "Em que situação vocês acham que embutir os dados (como no Mongo) seria
  mais rápido do que fazer um JOIN?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| `no such table: livros` | Esqueceu de rodar o `biblioteca.sql` na conexão certa |
| JOIN não traz nenhuma linha | Comparou coluna errada (ex.: `livros.id` em vez de `livros.autor_id`) |
| `WHERE genero = Fantasia` dá erro | Texto precisa de aspas simples: `'Fantasia'` |
| GROUP BY reclama de coluna | Toda coluna no SELECT que não está numa função (`COUNT`, etc.) precisa estar no GROUP BY |
| Beekeeper não salva o arquivo `.sqlite` | Ao criar a conexão, escolher "Create a new database" e apontar para uma pasta com permissão de escrita |

## Registro pós-aula
- Chegou até: (marco mínimo? quantos desafios sozinhos?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas: 1ª aplicação desta aula passou rápido demais pelos
  conceitos de SQL vs. NoSQL e por chave primária/chave estrangeira — a turma
  saiu sem esses conceitos consolidados, mesmo executando as queries. Parte 0
  foi reescrita (2026-09-07) com definições explícitas + diagrama de PK/FK e
  um teste de entendimento antes de abrir o Beekeeper.
- Ajuste para a próxima aula: abrir a próxima sessão com uma recapitulação
  rápida (5 min) de SQL/NoSQL e PK/FK antes de qualquer coisa nova, usando o
  diagrama da Parte 0 e a pergunta "o que acontece se eu inventar um autor_id
  que não existe?".
- Próximo tema sugerido: retomar o cronograma oficial (aula #6 — Avançando com
  a Biblioteca Digital em Mongo)
