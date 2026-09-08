# Roteiro de Aula #15: Filtros, Ordenação e Paginação (Lista de Tarefas)

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação da Lista de Tarefas (aula #14)
- Duração: ~1h
- Pré-requisito: CRUD de tarefas (aula #14), filtro/paginação guiado na
  Biblioteca (aula #9). **Hoje: mesma técnica, com mais autonomia.**

## Objetivo
`GET /tarefas` aceita filtro por `concluida`/`prioridade`, ordenação por
campo escolhido via query param, e paginação — tudo isso combinável na mesma
URL.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Revisão: `where` dinâmico (já visto na aula #9) | Passo 1 |
| Novidade: `order` dinâmico a partir de query param | Passo 2 |
| Revisão: `limit`/`offset` (já visto na aula #9) | Passo 3 |

---

## 0–10 min — Combinado da aula

Igual à aula #14: hoje o roteiro dá menos passo a passo. Filtro e paginação
já foram feitos guiado na Biblioteca — a expectativa é que a turma refaça
sozinha, olhando o próprio código da Biblioteca como referência se precisar.

---

## 10–30 min — Passo 1: filtro (revisão)

**Eles fazem, com pouca ajuda:** `GET /tarefas` aceitando `?concluida=true`
e `?prioridade=alta`, do mesmo jeito que fizeram com `genero`/`disponivel`
na Biblioteca (aula #9).

**Teste agora:** `GET /tarefas?concluida=false&prioridade=alta` traz só o
que bate com os dois filtros.

---

## 30–45 min — Passo 2: ordenação dinâmica (novidade)

Na Biblioteca vocês só ordenaram fixo. Hoje, quem chama a API escolhe o
campo:

**Eles fazem:**
```js
const ordenarPor = req.query.ordenarPor || 'id';
const direcao = req.query.direcao === 'desc' ? 'DESC' : 'ASC';

const tarefas = await Tarefa.findAll({
  where,
  order: [[ordenarPor, direcao]],
});
```

**Teste agora:** `GET /tarefas?ordenarPor=prioridade`,
`GET /tarefas?ordenarPor=titulo&direcao=desc` — a ordem muda de acordo.

> ⚠️ Pergunta pra turma pensar (não precisa resolver hoje, só perceber o
> risco): *"O que aconteceria se alguém mandasse `ordenarPor=coisaQueNaoExiste`?"*
> (O Sequelize vai dar erro — é um lembrete de que query params vindos do
> usuário nunca são 100% confiáveis.)

---

## 45–55 min — Passo 3: paginação (revisão)

**Eles fazem, com pouca ajuda:** `pagina`/`limite` → `limit`/`offset`, igual
fizeram na aula #9, devolvendo os metadados (`totalPaginas`, `totalItens`).

**Teste agora:** URL combinando os três:
`GET /tarefas?concluida=false&ordenarPor=prioridade&pagina=1&limite=5`.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Filtro, ordenação e paginação funcionam juntos numa mesma URL.
- [ ] Feito com pouca ajuda direta — a turma reconheceu o padrão da aula #9
      e reaplicou sozinha.

## Se sobrar tempo
1. Proteger `ordenarPor` contra valores inválidos: validar contra uma lista
   fixa de campos permitidos (`['id', 'titulo', 'prioridade']`) antes de
   passar pro Sequelize.
2. Adicionar um segundo critério de ordenação (ex.: por prioridade e, em
   caso de empate, por título).
3. Levar filtro/ordenação/paginação também pro front, se a turma já tiver
   feito a aula #13/#17 e quiser reaproveitar a UI da Biblioteca.

## Perguntas para conduzir a aula
- "O que exatamente essa aula tem de igual e de diferente da aula #9?"
- "Por que validar `ordenarPor` contra uma lista fixa é mais seguro do que
  aceitar qualquer texto?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| `order` dá erro do Sequelize | Campo pedido em `ordenarPor` não existe no Model |
| Direção não muda nunca | Comparação `=== 'desc'` sensível a maiúsculas (`DESC` no query param não bate) |
| Filtro e ordenação juntos falham | Um dos dois foi escrito sobrescrevendo o objeto de opções do `findAll` em vez de combinar |

## Registro pós-aula
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #16 — Revisando React com Pokemons
