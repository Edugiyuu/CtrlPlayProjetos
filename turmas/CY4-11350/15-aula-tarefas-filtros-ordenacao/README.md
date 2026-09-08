# Aula #15: Filtros, Ordenação e Paginação — Lista de Tarefas (Benício, Caio, Nicolas)

## Objetivo
Aplicar filtro, ordenação e paginação na API de Tarefas (aula #14) — mesma
técnica da Biblioteca (aula #9), agora com mais autonomia.

## O que a turma pratica
- Filtro por `concluida` e por `prioridade`.
- Ordenação por qualquer campo, escolhida via query param.
- Paginação com `limit`/`offset`.

## Pré-requisito real
CRUD de tarefas funcionando (aula #14), filtro/paginação já feito guiado na
Biblioteca (aula #9). **Hoje é reforço com menos ajuda.**

## Como rodar
Continuação do projeto `lista-tarefas`.

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Testar com URLs como `GET /tarefas?concluida=false&ordenarPor=prioridade`.

## Marco mínimo da aula
Filtro por `concluida`, ordenação por um campo à escolha via query param, e
paginação — os três juntos numa mesma URL.
