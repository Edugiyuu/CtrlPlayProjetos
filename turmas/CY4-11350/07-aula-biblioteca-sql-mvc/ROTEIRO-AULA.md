# Roteiro de Aula #7: MVC com SQLite + Sequelize

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação do Express da Biblioteca Digital (antes em Mongo)
- Duração: ~1h30
- Pré-requisito: Express, CRUD, Models com Mongoose (aula #5), SQL básico e
  chave primária/estrangeira (aula #6).

## Objetivo
Sair da aula com o backend da Biblioteca conectado a um arquivo SQLite local
via Sequelize, organizado em MVC, com o CRUD de livros já reimplementado.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| ORM (o que é, por que usar) | Parte 0 |
| Model no Sequelize vs. Model no Mongoose | Parte 0 e Passo 1 |
| Associação `belongsTo` / `hasMany` | Passo 2 |
| MVC: Model, Controller, Router | Passo 3 |
| `sync()` — criar tabelas a partir dos models | Passo 1 |

---

## 0–10 min — Parte 0: o que é um ORM

- **ORM** = *Object-Relational Mapping*. É uma biblioteca que deixa vocês
  escreverem **objetos e funções JS** (`Livro.create({...})`) em vez de SQL
  puro (`INSERT INTO livros...`) — por baixo dos panos, o Sequelize monta o
  SQL para vocês.
- Mongoose também é isso, só que para Mongo. **A ideia de "Model" continua a
  mesma**: um objeto que representa uma tabela/coleção e sabe ler/escrever
  nela. O que muda é a sintaxe e o fato de agora existirem **tabelas com
  colunas fixas e relações via chave estrangeira**, em vez de documentos.
- Pergunta: *"Lembra como a gente criava um Model no Mongoose? O que muda
  agora que é uma tabela com colunas fixas?"*

---

## 10–30 min — Passo 1: configurar Sequelize + SQLite e criar o primeiro Model

**Eles fazem:**
1. `npm install sequelize sqlite3`.
2. Criar `models/index.js` (ou `database.js`) conectando o Sequelize a um
   arquivo local:
   ```js
   const { Sequelize } = require('sequelize');
   const sequelize = new Sequelize({
     dialect: 'sqlite',
     storage: './database.sqlite',
   });
   module.exports = sequelize;
   ```
   (Isso é boilerplate de configuração — pode ser dado pronto.)
3. Criar `models/Autor.js` definindo o Model `Autor` com os campos `nome` e
   `nacionalidade` (tipos `DataTypes.STRING`) — comparem com as colunas da
   tabela `autores` que já conhecem do `biblioteca.sql` da aula #6.
4. Criar `models/Livro.js` com `titulo`, `ano_publicacao`, `genero`,
   `disponivel` — sem o `autor_id` ainda (isso vem da associação, passo 2).
5. No arquivo principal do servidor, chamar `sequelize.sync()` para o
   Sequelize criar as tabelas de verdade no arquivo `.sqlite`.

**Teste agora:** rodar o servidor e abrir `database.sqlite` no **Beekeeper
Studio** — as tabelas `Autors` e `Livros` devem aparecer (vazias).

> 💡 Sacada: `sync()` está fazendo, por baixo, o mesmo que o `CREATE TABLE`
> que vocês colaram manualmente na aula #6. Só que agora é o código que
> descreve o schema, não um `.sql` escrito à mão.

---

## 30–45 min — Passo 2: associação entre Livro e Autor (a chave estrangeira, em código)

**Eles fazem**, no arquivo que junta os models:
```js
Autor.hasMany(Livro, { foreignKey: 'autor_id' });
Livro.belongsTo(Autor, { foreignKey: 'autor_id' });
```

Pergunte **antes** de explicar: *"Qual dessas duas linhas cria a coluna
`autor_id` na tabela `livros`? Qual é a chave primária e qual é a
estrangeira aqui?"* (Resposta: as duas linhas juntas descrevem a mesma
relação dos dois lados; quem ganha a coluna `autor_id` é `Livro`, porque é
ele que "pertence a" um autor — igual no diagrama da aula #6.)

**Teste agora:** rodar de novo com `sync({ alter: true })`, abrir o Beekeeper
e confirmar que a tabela `Livros` agora tem a coluna `autor_id`.

---

## 45–50 min — PONTO DE PARADA
Se a associação já apareceu no banco, seguir para o CRUD (Passo 3).
Se travou na configuração do Sequelize, ficar aqui e levar o CRUD como
exercício de casa / próxima aula.

---

## 50–80 min — Passo 3: organizar em MVC e refazer o CRUD de livros

**Eles fazem** — criar a estrutura de pastas:
```
models/       (já feito: Autor.js, Livro.js, index.js)
controllers/
  livroController.js
routes/
  livroRoutes.js
```

No `livroController.js`, escrever as funções (eles escrevem, guie por
pergunta "qual método do Sequelize faz isso?"):
- `listar` → `Livro.findAll({ include: Autor })` (o `include` é o "JOIN" do
  Sequelize — puxa o autor junto).
- `buscarPorId` → `Livro.findByPk(id, { include: Autor })`.
- `criar` → `Livro.create({...})`.
- `atualizar` → `Livro.update({...}, { where: { id } })`.
- `remover` → `Livro.destroy({ where: { id } })`.

No `livroRoutes.js`, ligar cada função a uma rota (`GET /livros`,
`GET /livros/:id`, `POST /livros`, `PUT /livros/:id`, `DELETE /livros/:id`) —
igual já faziam com Mongo, só trocando o controller por dentro.

**Teste agora:** no Insomnia/Postman, criar um autor, criar um livro com o
`autor_id` desse autor, e listar os livros vendo o autor vindo junto.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Sequelize conectado a um `database.sqlite` local.
- [ ] Models `Autor` e `Livro` com associação `hasMany`/`belongsTo`.
- [ ] `GET /livros` e `POST /livros` funcionando, código organizado em
      `models/`, `controllers/`, `routes/`.

## Se sobrar tempo
1. Implementar `PUT` e `DELETE` de livro, se ainda não fez.
2. Criar o CRUD completo de `Autor` também (mesmo padrão).
3. Adicionar um campo novo em `Livro` (ex.: `editora`) e rodar `sync({ alter: true })`
   para ver o Sequelize alterar a tabela sozinho.

## Perguntas para conduzir a aula
- "No Mongoose vocês usavam `.populate()` para trazer dados relacionados. Qual
  é o equivalente aqui no Sequelize?"
- "O que acontece se vocês tentarem criar um livro com um `autor_id` que não
  existe na tabela `autores`?"
- "Por que a gente separou controller de router, em vez de deixar tudo dentro
  da rota?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| `SQLITE_ERROR: no such table` | Esqueceu de chamar `sequelize.sync()` antes de usar o model |
| `autor_id` não aparece na tabela | Associação (`hasMany`/`belongsTo`) não foi declarada antes do `sync()` |
| `include: Autor` não traz nada | Autor com aquele `id` não existe, ou a FK está errada |
| Servidor não sobe | Falta `npm install sqlite3` (o driver, não só o `sequelize`) |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #8 — Documentando a API com Swagger
