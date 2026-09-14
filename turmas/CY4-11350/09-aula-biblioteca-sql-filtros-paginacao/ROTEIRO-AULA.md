# Roteiro de Aula #9: Filtros e Paginação na API

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação da Biblioteca Digital (SQLite + Sequelize)
- Duração: ~1h
- Pré-requisito: CRUD de livros (aula #7), `WHERE`/`ORDER BY` em SQL (aula #6).

## Objetivo
`GET /livros` passa a aceitar filtros por query param e devolver os
resultados paginados, em vez de sempre a lista inteira.

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Query params (`req.query`) | Passo 1 |
| `where` dinâmico no Sequelize | Passo 1 |
| `LIMIT`/`OFFSET` → `limit`/`offset` no Sequelize | Passo 2 |
| Metadados de paginação na resposta | Passo 2 |

---

## 0–10 min — Parte 0: por que filtrar e paginar no servidor, não no front

Pergunta: *"Se a biblioteca tivesse 10 mil livros, o que aconteceria se a
gente sempre mandasse a lista inteira pro navegador e filtrasse lá?"*
(Resposta: lento, gasta banda à toa. O ideal é o banco já devolver só o que
interessa — é pra isso que serve `WHERE` e `LIMIT`.)

Relembre a query 2 e a query 3 da aula #6 (`WHERE genero = 'Fantasia'` e
`ORDER BY`) — hoje isso vira parâmetro da URL, escolhido por quem está usando
a API.

---

## 10–30 min — Passo 1: filtro por query param

**Eles fazem**, no controller de livros, função `listar`:
1. Ler o parâmetro da URL: `const { genero, disponivel } = req.query;`
2. Montar um objeto `where` **só com os filtros que vieram**:
   ```js
   const where = {};
   if (genero) where.genero = genero;
   if (disponivel !== undefined) where.disponivel = disponivel === 'true';
   ```
3. Passar esse `where` para `Livro.findAll({ where, include: Autor })`.

**Teste agora:**
- `GET /livros` → todos os livros (where vazio).
- `GET /livros?genero=Fantasia` → só fantasia.
- `GET /livros?genero=Fantasia&disponivel=true` → fantasia **e** disponível.

Pergunta: *"O que o Sequelize faz quando o `where` tem duas chaves ao mesmo
tempo — ele usa E ou OU entre elas?"* (Resposta: E/`AND`, por padrão.)

---

## 30–50 min — Passo 2: paginação

**Eles fazem:**
1. Ler `pagina` e `limite` da query string, com valores padrão:
   ```js
   const pagina = Number(req.query.pagina) || 1;
   const limite = Number(req.query.limite) || 5;
   const offset = (pagina - 1) * limite;
   ```
2. Trocar `findAll` por `findAndCountAll` (traz os resultados **e** o total):
   ```js
   const { rows, count } = await Livro.findAndCountAll({
     where, include: Autor, limit: limite, offset,
   });
   ```
3. Devolver metadados junto com os dados:
   ```js
   res.json({
     dados: rows,
     paginaAtual: pagina,
     totalPaginas: Math.ceil(count / limite),
     totalItens: count,
   });
   ```

**Teste agora:** `GET /livros?limite=3&pagina=1` traz 3 livros;
`?limite=3&pagina=2` traz os 3 seguintes; `totalPaginas` bate com a conta
manual (10 livros ÷ 3 por página = 4 páginas).

### 50–55 min — PONTO DE PARADA
Se filtro + paginação já funcionam juntos numa mesma URL
(`?genero=Fantasia&pagina=1&limite=2`), seguir pros desafios. Se travou na
paginação, deixar filtro como o marco mínimo e paginação de casa.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] `GET /livros?genero=X` filtra certo.
- [ ] `GET /livros?pagina=N&limite=M` devolve a fatia certa de resultados.

## Se sobrar tempo
1. Adicionar filtro por título com **busca parcial** (dica: operador `Op.like`
   do Sequelize, ex. `{ [Op.like]: '%harry%' }`).
2. Adicionar `ordenarPor` como query param (`?ordenarPor=ano_publicacao`),
   reaproveitando a ideia do `ORDER BY` da aula #6.
3. Aplicar o mesmo filtro/paginação na rota de `autores`.

## Perguntas para conduzir a aula
- "Por que colocamos um valor padrão pra `pagina` e `limite` em vez de exigir
  que quem chama sempre mande os dois?"
- "O `offset` de que fórmula ele depende?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| Filtro não funciona (`disponivel`) | Query param sempre chega como texto (`'true'`), precisa comparar com string ou converter |
| Página 2 repete os mesmos itens da página 1 | Fórmula do `offset` errada (não multiplicou por `limite`) |
| `totalPaginas` errado | Usou `rows.length` em vez de `count` pra calcular |

## Registro pós-aula
_Não preencher aqui. **Despeje cru** (chat, voz, notas) o que lembrar destes
pontos — o registro estruturado sai daí. Ver
[WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #10 — Autenticação JWT
