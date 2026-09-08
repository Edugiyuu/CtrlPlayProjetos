# Roteiro de Aula #8: Documentando e Refinando a API (Swagger)

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação da Biblioteca Digital (SQLite + Sequelize)
- Duração: ~1h
- Pré-requisito: CRUD de livros funcionando (aula #7).

## Objetivo
Documentar a API existente com Swagger e revisar os status HTTP das
respostas, sem adicionar funcionalidade nova.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| OpenAPI/Swagger — o que é e para que serve | Parte 0 |
| Anotação JSDoc de rota (`@swagger`) | Passo 1 |
| Status HTTP corretos por operação | Passo 2 |

---

## 0–10 min — Parte 0: por que documentar uma API

- Pergunta: *"Se vocês entregassem essa API pra outra pessoa usar sem
  documentação nenhuma, como ela ia saber o que mandar no corpo do
  `POST /livros`?"*
- **Swagger/OpenAPI** é um formato padrão de documentação de API que também
  vira uma **tela interativa** — dá pra testar a API direto pelo navegador,
  sem precisar do Insomnia.
- A documentação vive **no próprio código**, em comentários especiais acima
  de cada rota — assim ela não desatualiza tão fácil quanto um documento
  separado.

---

## 10–20 min — Setup do Swagger

**Eles fazem:**
1. `npm install swagger-ui-express swagger-jsdoc`.
2. Criar `swagger.js` configurando o `swagger-jsdoc` (isso é boilerplate,
   pode ser dado pronto):
   ```js
   const swaggerJsdoc = require('swagger-jsdoc');

   const options = {
     definition: {
       openapi: '3.0.0',
       info: { title: 'API Biblioteca Digital', version: '1.0.0' },
     },
     apis: ['./routes/*.js'],
   };

   module.exports = swaggerJsdoc(options);
   ```
3. No arquivo principal do servidor:
   ```js
   const swaggerUi = require('swagger-ui-express');
   const swaggerSpec = require('./swagger');
   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
   ```

**Teste agora:** abrir `/api-docs` — deve aparecer a tela do Swagger, vazia
(sem rotas documentadas ainda).

---

## 20–45 min — Passo 1: documentar as rotas de livros

**Eles fazem**, em `routes/livroRoutes.js`, acima de cada rota, um comentário
no formato JSDoc + `@swagger`. Dê o primeiro pronto como exemplo (é sintaxe
nova, não conceito):
```js
/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     responses:
 *       200:
 *         description: Lista de livros retornada com sucesso
 */
router.get('/livros', livroController.listar);
```

Peça para eles escreverem o mesmo formato para `POST /livros`,
`GET /livros/:id`, `PUT /livros/:id` e `DELETE /livros/:id`, mudando `summary`
e o `responses` de cada uma.

**Teste agora:** recarregar `/api-docs` — as rotas documentadas aparecem, e
dá pra clicar em "Try it out" e mandar uma requisição de verdade.

---

## 45–55 min — Passo 2: revisar os status HTTP

Passe rota por rota do controller de livros e pergunte: *"Esse status está
certo pro que aconteceu?"*

| Situação | Status certo |
|---|---|
| Listar/buscar com sucesso | `200` |
| Criar com sucesso | `201` (não `200`!) |
| Atualizar/remover com sucesso | `200` (ou `204` sem corpo) |
| Livro não encontrado (`findByPk` retornou `null`) | `404` |
| Corpo da requisição inválido (ex.: sem `titulo`) | `400` |
| Erro inesperado do servidor | `500` |

**Eles fazem:** corrigir o controller onde o status estiver errado (ex.:
muita gente devolve `200` pra tudo, inclusive erro).

**Teste agora:** tentar buscar `GET /livros/9999` (id que não existe) e
confirmar que agora vem `404`, não `200` com corpo vazio.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] `/api-docs` mostra pelo menos `GET` e `POST` de `/livros` documentados.
- [ ] `POST /livros` responde `201`; buscar um id inexistente responde `404`.

## Se sobrar tempo
1. Documentar também as rotas de `autores`.
2. Documentar o **corpo esperado** do `POST`/`PUT` (schema de `requestBody`
   no Swagger), não só a resposta.
3. Adicionar uma tag (`tags: [Livros]`) para agrupar as rotas na tela do
   Swagger.

## Perguntas para conduzir a aula
- "Quem além de vocês vai usar essa documentação um dia?"
- "Por que `POST` de sucesso deveria ser `201` e não `200`?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| `/api-docs` fica em branco | `apis` no `swagger.js` não aponta pro caminho certo das rotas |
| Comentário `@swagger` não aparece | Faltou fechar o bloco `*/` ou a indentação do YAML dentro do comentário está quebrada |
| Try it out dá erro de CORS | Normal se estiver testando de outra origem — nesta aula, testar sempre em `localhost` |

## Registro pós-aula
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #9 — Filtros e Paginação na API
