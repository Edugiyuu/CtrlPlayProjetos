# Roteiro de Aula #7: MVC com SQLite + Sequelize

- Turma #11350 (CY4 / Sáb 14h) — Benício, Caio, Nicolas · ~1h30
- Sai de: banco consultado à mão no Beekeeper → chega em: API Express lendo e gravando nesse banco
- Pré-requisito real: Express + CRUD (aulas #3–#5), SQL e PK/FK (aula #6)
- Não entra hoje: filtros, paginação, login
- Gabarito testado: [gabarito/](gabarito/)

## Conceitos

| Conceito | Definição em 1 linha | Checagem antes de avançar |
|---|---|---|
| ORM | biblioteca que escreve o SQL por você, a partir de objetos JS | "Quem monta o `INSERT`: você ou o Sequelize?" |
| Model | o objeto JS que representa uma tabela | "O que muda do Model do Mongoose pra cá?" |
| `sync()` | cria as tabelas a partir dos models | "Isso substitui qual comando da aula #6?" |
| Chave estrangeira em código | `belongsTo` cria a coluna `autorId` em `livros` | "Qual das duas tabelas ganha a coluna nova? Por quê?" |

## Blocos

| Tempo | Bloco | Eles fazem | Teste agora |
|---:|---|---|---|
| 0–10 | O que é um ORM | — (conversa, com o `biblioteca.sql` da #6 aberto) | eles explicam o que o ORM evita escrever |
| 10–30 | Conectar e criar os models | instalar `sequelize` + `sqlite3`, `database.js` (dou pronto), `Autor` e `Livro` | abrir o `.sqlite` no Beekeeper: as duas tabelas existem, vazias |
| 30–45 | A associação | `hasMany` / `belongsTo` no `models/index.js` | a coluna `autorId` apareceu em `livros` sem ninguém digitar `ALTER TABLE` |
| 45–50 | PONTO DE PARADA | — | travou aqui? o CRUD fica pra próxima |
| 50–80 | **CRUD em MVC** | `controllers/` e `routes/`, uma função por rota | 🏁 **MARCO MÍNIMO**: criar autor, criar livro com `autorId`, listar vendo o autor junto |
| 80–90 | Fechamento | — | "por que separar controller de rota, em vez de tudo na rota?" |

## Erros comuns

| Sintoma | Causa provável |
|---|---|
| `SQLITE_ERROR: no such table` | faltou o `sequelize.sync()` antes de usar o model |
| `autorId` não aparece na tabela | associação declarada depois do `sync()`, ou nem declarada |
| `include` vem `null` | o livro foi criado com um `autorId` que não existe |
| Servidor não sobe | faltou `npm install sqlite3` — o driver, não só o `sequelize` |
| `require is not defined` | o projeto é ESM: usar `import`, com `.js` no fim do caminho |

## Se sobrar tempo

1. `PUT` e `DELETE` de livro (estão no gabarito).
2. CRUD de autor completo, mesmo padrão.
3. Campo novo em `Livro` (ex.: `editora`) + `sync({ alter: true })` e ver a tabela mudar sozinha.

## Registro pós-aula
_Não preencher aqui. **Despeje cru** o que lembrar — ver [WORKFLOW-AULAS.md](../../../alunos/WORKFLOW-AULAS.md)._
- Chegou até: (marco mínimo? bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #8 — Swagger
