# Roteiro de Aula #9: Filtros e Paginação

- Turma #11350 (CY4 / Sáb 14h) — Benício, Caio, Nicolas · ~1h
- Sai de: `GET /livros` sempre devolvendo tudo → chega em: quem chama escolhe o que e quanto vem
- Pré-requisito real: CRUD (aula #7), `WHERE`/`ORDER BY` (aula #6)
- Não entra hoje: login, front
- Gabarito testado: [gabarito/](gabarito/) — o seed vai a 10 livros, senão a paginação não aparece

## Conceitos

| Conceito | Definição em 1 linha | Checagem antes de avançar |
|---|---|---|
| Query param | o que vem depois do `?` na URL, lido em `req.query` | "De onde o servidor lê o `?genero=X`?" |
| `where` dinâmico | objeto montado só com os filtros que vieram | "Com duas chaves no `where`, é E ou OU?" |
| `limit`/`offset` | o `LIMIT`/`OFFSET` da #6, agora escolhido pela URL | "Qual a fórmula do `offset`?" |
| Metadados | a resposta leva o total, não só a fatia | "Por que devolver `totalPaginas` junto?" |

## Blocos

| Tempo | Bloco | Eles fazem | Teste agora |
|---:|---|---|---|
| 0–10 | Por que no servidor | — ("e se a biblioteca tivesse 10 mil livros?") | eles explicam o custo de filtrar no front |
| 10–30 | **Filtro** | ler `req.query`, montar o `where` só com o que veio | 🏁 `?genero=Fantasia` filtra; `/livros` sem nada continua trazendo tudo |
| 30–50 | **Paginação** | `pagina`/`limite` com padrão, `findAndCountAll`, devolver os metadados | 🏁 **MARCO MÍNIMO**: `?limite=3&pagina=2` traz os 3 seguintes, sem repetir |
| 50–55 | PONTO DE PARADA | — | filtro + paginação juntos na mesma URL? senão, paginação fica de casa |
| 55–60 | Fechamento | — | "o front vai receber um array ou um objeto agora?" |

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| `?disponivel=false` traz tudo | query param é **texto**: `'false'` é verdadeiro em JS — comparar com `=== 'true'` |
| Página 2 repete a página 1 | `offset` sem multiplicar pelo `limite` |
| Página 1 pula itens | esqueceu o `- 1` no `(pagina - 1) * limite` |
| `totalPaginas` errado | usou `rows.length` em vez de `count` |
| O front quebrou depois | a resposta virou objeto; quem consome precisa ler `.dados` |

## Se sobrar tempo

1. Busca parcial por título (`Op.like`) — está no gabarito.
2. `?ordenarPor=ano`, reaproveitando o `ORDER BY` da #6.
3. Mesmo filtro/paginação na rota de autores.

## Registro pós-aula
_Não preencher aqui. **Despeje cru** o que lembrar — ver [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até:
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #10 — autenticação JWT
