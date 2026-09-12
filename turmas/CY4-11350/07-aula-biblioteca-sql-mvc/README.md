# Aula #7: Backend em MVC com SQLite + Sequelize (Benício, Caio, Nicolas)

## Objetivo
Trocar o "banco" estático que vocês exploraram no Beekeeper (aula #6) por um
banco de verdade **dentro do projeto Express** da Biblioteca Digital, e
organizar o código em **MVC** (Model / Controller / Router) em vez de tudo
misturado num arquivo só.

## O que a turma pratica
- Instalar e configurar **Sequelize** (ORM) com **SQLite** local.
- Definir **Models** (`Autor`, `Livro`) — o equivalente Sequelize do que era
  Mongoose antes.
- Criar a **associação** entre as tabelas (`Livro` pertence a um `Autor`).
- Separar o projeto em pastas `models/`, `controllers/`, `routes/`.
- Reimplementar o CRUD de livros que já existia, agora em SQL.

## Pré-requisito real
Turma já sabe Express, rotas, CRUD, e já criou Models e CRUD com Mongoose
(aula #5). Já viu SQL na prática (aula #6 — SELECT, WHERE, JOIN, chave
primária/estrangeira). **Sequelize e a organização MVC são novidade hoje.**

> ⚠️ **`JOIN` não foi dado na #6** — verificar antes de planejar esta aula.
>
> Se a [aula extra de modelagem](../extra-aula-sql-modelagem-5-tabelas/) já foi
> dada, eles criaram um banco de 5 tabelas do zero e sabem onde uma chave
> estrangeira mora — a associação `Livro.belongsTo(Autor)` daqui é só o nome
> Sequelize disso. Lá eles percorreram as relações **na mão**, com dois
> `SELECT`, justamente pra sentir falta do `JOIN`: abrir esta aula mostrando o
> `JOIN` que faz aquilo de uma vez é a deixa pronta. Se a extra **não** foi
> dada, assumir que PK/FK ainda é decoreba e gastar os primeiros 10 min no
> diagrama da aula #6.

## Como rodar
Este projeto continua o Express da Biblioteca Digital que vocês já têm.

```bash
npm install sequelize sqlite3
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Rodar o servidor como sempre: `npm run dev` (ou `node server.js`).
3. Testar as rotas no Insomnia/Postman/Thunder Client, como já faziam com o Mongo.

> ⚠️ Não tem projeto pronto nesta pasta de propósito — vocês vão **modificar
> o projeto que já existe**, trocando a camada de banco de dados.

## Marco mínimo da aula
`GET /livros` e `POST /livros` funcionando contra o SQLite, com o código
organizado em `models/`, `controllers/` e `routes/`.
