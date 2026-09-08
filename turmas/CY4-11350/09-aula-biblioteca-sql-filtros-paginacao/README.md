# Aula #9: Filtros e Paginação na API (Benício, Caio, Nicolas)

## Objetivo
Deixar a rota `GET /livros` aceitar **filtros** (por gênero, por
disponibilidade) e **paginação**, usando `WHERE`/`LIMIT`/`OFFSET` por baixo
via Sequelize — a versão em código do que já fizeram na mão no Beekeeper
(aula #6, queries 2 e 3).

## O que a turma pratica
- Ler **query params** da URL (`?genero=Fantasia&pagina=2`).
- Montar um `where` dinâmico no Sequelize a partir dos filtros recebidos.
- Implementar paginação com `limit` e `offset`.
- Devolver metadados de paginação na resposta (total de itens, página atual).

## Pré-requisito real
CRUD de livros funcionando (aula #7), já sabem `WHERE` e `ORDER BY` em SQL
puro (aula #6). **Query params e paginação no Sequelize são novidade hoje.**

## Como rodar
Continuação do mesmo projeto Express — sem instalar nada novo.

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Testar com URLs como `GET /livros?genero=Fantasia`,
   `GET /livros?pagina=2&limite=3`.

## Marco mínimo da aula
`GET /livros?genero=X` filtra corretamente, e `GET /livros?pagina=N` devolve
uma página diferente de resultados.
