# Roteiro de Aula #8: Documentando a API (Swagger)

- Turma #11350 (CY4 / Sáb 14h) — Benício, Caio, Nicolas · ~1h
- Sai de: API que só você sabe usar → chega em: tela em `/api-docs` onde outra pessoa testa sem perguntar nada
- Pré-requisito real: CRUD de livros funcionando (aula #7)
- Não entra hoje: funcionalidade nova — só documentação e status HTTP
- Gabarito testado: [gabarito/](gabarito/)

## Conceitos

| Conceito | Definição em 1 linha | Checagem antes de avançar |
|---|---|---|
| OpenAPI/Swagger | formato padrão de descrever uma API, que vira tela interativa | "Como alguém descobre o que mandar no `POST /livros`?" |
| Doc junto do código | a descrição mora no comentário acima da rota | "Por que isso desatualiza menos que um documento à parte?" |
| Status HTTP | o número já diz o que aconteceu, antes de ler o corpo | "`201` e `200` — qual a diferença?" |

## Blocos

| Tempo | Bloco | Eles fazem | Teste agora |
|---:|---|---|---|
| 0–10 | Por que documentar | — (entrego a API de alguém sem doc: como usar?) | eles listam o que falta saber |
| 10–20 | Setup | instalar `swagger-ui-express` + `swagger-jsdoc`, `swagger.js` (dou pronto) | `/api-docs` abre, ainda sem rotas |
| 20–45 | **Documentar as rotas** | dou o bloco do `GET /livros` pronto; eles escrevem os outros | 🏁 **MARCO MÍNIMO**: `GET` e `POST /livros` na tela, "Try it out" funcionando |
| 45–55 | Revisar os status | corrigir no controller onde o status estiver errado | `GET /livros/9999` responde `404`, não `200` vazio |
| 55–60 | Fechamento | — | "quem mais, além de vocês, vai ler isso um dia?" |

## Tabela de status (deixar na tela durante o bloco das 45)

| Situação | Status |
|---|---|
| Listar / buscar ok | `200` |
| Criar ok | `201` |
| Atualizar / remover ok | `200` |
| Não achou o id | `404` |
| Faltou campo obrigatório | `400` |
| Quebrou no servidor | `500` |

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| `/api-docs` abre vazio | o `apis` do `swagger.js` não bate com a pasta de onde o servidor roda |
| Bloco `@swagger` não aparece | faltou fechar `*/`, ou a indentação do YAML dentro do comentário quebrou |
| Aparece a rota, mas sem corpo pra preencher | falta o `requestBody` (é o exemplo do `POST`) |

## Se sobrar tempo

1. Documentar as rotas de autores.
2. `requestBody` do `PUT` também.
3. Agrupar por `tags` e ver a tela se reorganizar.

## Registro pós-aula
_Não preencher aqui. **Despeje cru** o que lembrar — ver [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até:
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #9 — filtros e paginação
