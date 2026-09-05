# Aula: SQL na prática com Beekeeper Studio (Benício, Caio, Nicolas — turma #11350)

## Objetivo
Entender a diferença entre banco de dados **relacional** e **não relacional**
usando o mesmo domínio que a turma já conhece (biblioteca digital, que eles
vêm montando com MongoDB) e praticar consultas SQL de verdade com o
[Beekeeper Studio](https://www.beekeeperstudio.io/).

## O que a turma pratica
- Diferença entre modelar dados em **tabelas** (SQL) e em **documentos** (Mongo).
- Conectar o Beekeeper Studio a um banco SQLite.
- Ler e escrever `SELECT`, `WHERE`, `ORDER BY`, `JOIN`, `GROUP BY`.
- Resolver desafios de consulta sozinhos.

## Pré-requisito real
Turma está na aula #6 do módulo de backend: já viu Node, Express, CRUD e
Mongoose (aula #5 — "Criando Modelos e Implementando CRUD"). **SQL e o
modelo relacional são novidade hoje.**

## Como rodar
Não tem projeto de código nesta aula — é só banco de dados + Beekeeper Studio.

1. Baixar e abrir o [Beekeeper Studio](https://www.beekeeperstudio.io/) (grátis).
2. Criar uma nova conexão: **SQLite** → *Create a new database* (ou apontar
   para um `.sqlite` novo, ex.: `biblioteca.sqlite`, em qualquer pasta local).
3. Conectar e abrir uma aba de **Query**.
4. Colar o conteúdo de [`biblioteca.sql`](biblioteca.sql) e rodar tudo
   (não é para os alunos criarem o schema do zero — a modelagem em si não é
   o foco de hoje, é a mesma "biblioteca digital" que já existe em Mongo).
5. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).

## Marco mínimo da aula
Cada aluno consegue, sozinho, escrever um `SELECT` com `WHERE` e explicar com
suas palavras a diferença entre banco relacional e não relacional. Tudo além
disso (JOIN, GROUP BY, desafios) é o resto da aula.
