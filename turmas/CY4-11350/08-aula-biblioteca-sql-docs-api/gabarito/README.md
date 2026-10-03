# Gabarito da Aula #8 — Swagger

Projeto da aula #7 **mais a documentação**. Nenhuma funcionalidade nova.

```bash
npm install
npm run dev
```

Documentação interativa: <http://localhost:3000/api-docs>

## O que mudou em relação à [#7](../../07-aula-biblioteca-sql-mvc/gabarito/)

| Arquivo | Mudou? |
|---|---|
| [swagger.js](swagger.js) | **novo** — configura o `swagger-jsdoc` |
| [server.js](server.js) | +3 linhas: serve a tela em `/api-docs` |
| [routes/livros.js](routes/livros.js) · [routes/autores.js](routes/autores.js) | comentários `@swagger` acima de cada rota |
| models, controllers, database, seed | **idênticos à #7** |

## Como o Swagger acha a documentação

O `apis: ['./routes/*.js']` do [swagger.js](swagger.js) manda varrer os
arquivos de rota procurando blocos `/** @swagger ... */`. A documentação
mora **junto da rota que ela descreve** — por isso desatualiza menos que um
documento separado.

⚠️ Esse caminho é relativo à pasta de onde o servidor roda. Rodou da pasta
errada, `/api-docs` abre vazio — é o erro comum nº 1 do roteiro.

## O que está documentado

8 operações: `GET/POST /livros`, `GET/PUT/DELETE /livros/{id}`,
`GET/POST /autores`, `GET /autores/{id}` — agrupadas pelas tags
`Livros` e `Autores`.

O `POST /livros` tem o **`requestBody` completo**, com quais campos são
obrigatórios. É o exemplo para pedir que eles escrevam os outros.

## Status HTTP já corretos aqui

| Situação | Status |
|---|---|
| Criar com sucesso | `201` (não `200`) |
| Buscar id que não existe | `404` |
| Corpo sem o campo obrigatório | `400` |

Dá pra provar no "Try it out" da própria tela: `GET /livros/9999` → 404.
