# Gabarito da Aula #7 — MVC com SQLite + Sequelize

Estado do projeto **ao fim desta aula**. Rodar antes da aula para ter o
resultado na mão enquanto conduz.

```bash
npm install
npm run dev
```

`http://localhost:3000` — o banco `biblioteca.sqlite` nasce sozinho na
primeira execução, já com 3 autores e 5 livros (ver [seed.js](seed.js)).

## O que esta aula acrescenta

É o ponto de partida do projeto em SQL: antes disso não havia nada em
Sequelize. Tudo aqui é novo.

| Arquivo | Papel |
|---|---|
| [database.js](database.js) | conecta o Sequelize ao arquivo SQLite |
| [models/Autor.js](models/Autor.js) · [models/Livro.js](models/Livro.js) | uma tabela cada |
| [models/index.js](models/index.js) | a associação — é aqui que nasce a chave estrangeira |
| [controllers/](controllers/) | o que cada rota faz |
| [routes/](routes/) | qual caminho chama qual função |
| [server.js](server.js) | liga tudo e chama `sequelize.sync()` |

## O caminho de uma requisição

```text
Insomnia → server.js → routes/livros.js → controllers/livrosController.js → models/Livro.js → SQLite
```

## A associação (o ponto conceitual da aula)

| Linha de `models/index.js` | O que faz |
|---|---|
| `Autor.hasMany(Livro)` | o lado "um autor tem vários livros" |
| `Livro.belongsTo(Autor)` | cria a coluna `autorId` na tabela `livros` — a **chave estrangeira** |
| `as: 'autor'` | o apelido usado no `include` e o nome que aparece na resposta |

`sync()` faz, por baixo, o mesmo `CREATE TABLE` que eles colaram à mão na
aula #6 — agora é o código que descreve o schema.

## Rotas

| Método | Rota | Resposta |
|---|---|---|
| GET | `/livros` | 200, cada livro com o autor dentro |
| GET | `/livros/:id` | 200 ou 404 |
| POST | `/livros` | 201 · 400 sem título · 404 se o `autorId` não existe |
| PUT | `/livros/:id` | 200 ou 404 |
| DELETE | `/livros/:id` | 200 ou 404 |
| GET | `/autores` | 200 |
| GET | `/autores/:id` | 200 com os livros do autor (o outro lado da associação) |
| POST | `/autores` | 201 · 400 sem nome |

## Para conferir no Beekeeper Studio

Abrir `biblioteca.sqlite` e mostrar as tabelas `autores` e `livros` — e a
coluna `autorId`, que **ninguém escreveu à mão**: veio do `belongsTo`.

## Diferenças em relação ao roteiro original

| Roteiro antigo | Aqui | Por quê |
|---|---|---|
| `require` | `import`/`export` | padrão do projeto todo, inclusive o front da #13 |
| `autor_id` | `autorId` | o Sequelize usa camelCase por padrão; evita erro bobo |
| `ano_publicacao` | `ano` | nome mais curto pra digitar em aula |
| tabelas `Autors`/`Livros` | `autores`/`livros` | `tableName` explícito, igual à aula #6 |
