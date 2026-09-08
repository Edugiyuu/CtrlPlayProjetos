# Aula #8: Documentando a API com Swagger (Benício, Caio, Nicolas)

## Objetivo
Documentar a API da Biblioteca Digital (SQLite + Sequelize, da aula #7) com
**Swagger/OpenAPI**, para que qualquer pessoa (ou vocês mesmos, daqui a um
mês) saiba quais rotas existem, o que cada uma espera e o que devolve — e dar
uma revisada nas respostas de erro da API.

## O que a turma pratica
- Instalar e configurar `swagger-ui-express` + `swagger-jsdoc`.
- Escrever anotações de documentação (JSDoc) em cima das rotas existentes.
- Testar a API direto pela tela do Swagger (sem precisar do Insomnia).
- Revisar e padronizar os **códigos de status HTTP** das respostas (200,
  201, 400, 404, 500).

## Pré-requisito real
Turma já tem o CRUD de livros funcionando com Sequelize/SQLite (aula #7).
**Swagger é novidade hoje.**

## Como rodar
Continuação do mesmo projeto Express.

```bash
npm install swagger-ui-express swagger-jsdoc
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Rodar o servidor e abrir `http://localhost:<porta>/api-docs` no navegador.

## Marco mínimo da aula
As rotas de `livros` (pelo menos `GET` e `POST`) aparecem documentadas em
`/api-docs` e dá para testá-las direto por lá.
