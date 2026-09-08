# Roteiro de Aula #14: CRUD com Sequelize (projeto novo — Lista de Tarefas)

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: novo, do zero — API de Lista de Tarefas (SQLite + Sequelize)
- Duração: ~1h30
- Pré-requisito: já fizeram MVC + CRUD com Sequelize guiado na Biblioteca
  (aulas #7–#13). **Hoje é consolidação — o professor guia menos.**

## Objetivo
Cada aluno monta, com o mínimo de ajuda, um CRUD completo de tarefas — prova
de que o conteúdo das últimas aulas "colou" de verdade, não só copiado.

## Modelo de dados sugerido
| Campo | Tipo | Observação |
|---|---|---|
| `id` | inteiro | chave primária, automática |
| `titulo` | string | obrigatório |
| `descricao` | string | opcional |
| `concluida` | boolean | padrão `false` |
| `prioridade` | string | `'baixa'`, `'média'` ou `'alta'` |

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Tudo que já viram (Model, MVC, CRUD) — agora sem roteiro passo a passo | Aula inteira |
| Validação básica de campo obrigatório | Passo 3 |

---

## 0–10 min — Combinado da aula

Deixe claro pra turma **antes de começar**: hoje o roteiro dá menos passo a
passo de propósito. A ideia é eles tomarem as decisões (nome de pastas,
ordem dos passos) sozinhos, usando a Biblioteca Digital como referência
mental, não como cola pra copiar.

**Regra da aula:** só ajude com pergunta ("o que você já usou pra isso na
Biblioteca?"), não com a linha de código pronta — a não ser que travem por
mais de ~5 minutos no mesmo ponto.

---

## 10–20 min — Passo 1: montar o projeto

**Eles fazem, sozinhos:**
1. Criar a pasta do projeto, `npm init -y`.
2. Instalar `express`, `sequelize`, `sqlite3`.
3. Criar a estrutura `models/`, `controllers/`, `routes/` — igual à
   Biblioteca.

**Teste agora:** servidor sobe (`node server.js` ou `npm run dev`) numa rota
de teste (`GET /` devolvendo qualquer coisa).

---

## 20–35 min — Passo 2: Model `Tarefa`

**Eles fazem, sozinhos**, usando a tabela do "Modelo de dados sugerido"
acima. Se travarem no tipo de algum campo, aponte de volta pro Model `Livro`
da Biblioteca como referência ("como vocês definiram o `disponivel` lá?").

**Teste agora:** `sync()` roda sem erro; tabela `Tarefas` aparece no
Beekeeper Studio com as colunas certas.

---

## 35–70 min — Passo 3: CRUD completo

**Eles fazem, sozinhos**, as 5 operações:
- `POST /tarefas` — criar.
- `GET /tarefas` — listar todas.
- `GET /tarefas/:id` — buscar uma.
- `PUT /tarefas/:id` — atualizar (inclusive marcar `concluida: true`).
- `DELETE /tarefas/:id` — remover.

**Validação mínima:** se `titulo` não vier no `POST`, devolver `400` em vez
de deixar o Sequelize quebrar sozinho.

**Teste agora:** o ciclo completo no Insomnia/Postman — criar, listar,
marcar como concluída, remover, listar de novo (confirmando que sumiu).

### 70–75 min — PONTO DE PARADA
Se o CRUD básico está de pé, seguir para os desafios. Se ainda falta alguma
operação, priorizar terminar o CRUD — os desafios ficam de bônus.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] CRUD completo de `Tarefa` funcionando.
- [ ] `POST` sem `titulo` devolve `400`, não quebra o servidor.
- [ ] Feito com o mínimo de ajuda direta — cada aluno tomou as decisões de
      estrutura sozinho.

## Desafios se sobrar tempo
1. Filtrar tarefas por `concluida` (`GET /tarefas?concluida=true`), igual
   fizeram na Biblioteca (aula #9).
2. Adicionar um campo `dataLimite` e ordenar as tarefas por ele.
3. Criar uma rota `PATCH /tarefas/:id/concluir` que só marca `concluida: true`,
   sem precisar mandar o objeto inteiro no `PUT`.

## Perguntas para conduzir a aula
- "O que dessa API é exatamente igual ao que vocês fizeram na Biblioteca, e
  o que é diferente?"
- "Se eu pedisse pra vocês adicionarem autenticação nessa API de tarefas
  agora, vocês saberiam de onde puxar o código de referência?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| Mesma dúvida de sempre ("`sync()` não criou a tabela") | Ordem de import errada — model precisa existir antes do `sync()` rodar |
| `PUT` não atualiza nada | Faltou o `where: { id }` na chamada de `update` |
| Servidor quebra em vez de devolver `400` | Faltou o `try/catch` ou a validação manual antes do `create` |

## Registro pós-aula
- Chegou até: (marco mínimo? quantos desafios sozinhos?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas: (quanto de ajuda direta foi realmente necessário?)
- Ajuste para a próxima aula:
- Próximo tema: aula #15 — Filtros, Ordenação e Paginação (Lista de Tarefas)
