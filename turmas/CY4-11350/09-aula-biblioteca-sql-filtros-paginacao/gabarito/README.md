# Gabarito da Aula #9 — Filtros e Paginação

Projeto da aula #8 com `GET /livros` aceitando query params.

```bash
npm install
npm run dev
```

## O que mudou em relação à [#8](../../08-aula-biblioteca-sql-docs-api/gabarito/)

| Arquivo | Mudou? |
|---|---|
| [controllers/livrosController.js](controllers/livrosController.js) | só a função `listar` — o resto do arquivo é igual |
| [routes/livros.js](routes/livros.js) | o `@swagger` do `GET /livros` ganhou os `parameters` |
| [seed.js](seed.js) | 5 → **10 livros**, senão a paginação não tem o que mostrar |
| models, database, server, swagger | **idênticos à #8** |

## A resposta mudou de formato

Antes era um array. Agora é um objeto com os dados **e** os metadados:

```text
{ dados: [...], paginaAtual: 1, totalPaginas: 2, totalItens: 10 }
```

Vale avisar a turma: quem consome a API (o front da #13) precisa saber disso.

## URLs para testar ao vivo

| URL | Resultado |
|---|---|
| `/livros` | 5 primeiros, `totalPaginas: 2` |
| `/livros?pagina=2` | os 5 seguintes |
| `/livros?genero=Fantasia` | 3 livros |
| `/livros?disponivel=false` | 2 livros |
| `/livros?titulo=hobbit` | busca parcial (`Op.like`), acha "O Hobbit" |
| `/livros?genero=Fantasia&limite=2&pagina=2` | filtro **e** paginação juntos |

## Os dois detalhes que derrubam a turma

1. **Query param é sempre texto.** `?disponivel=false` chega como a string
   `'false'`, que em JS é *verdadeira*. Por isso o código compara:
   `disponivel === 'true'`.
2. **`offset = (pagina - 1) * limite`.** Esquecer o `- 1` faz a página 1
   pular os primeiros itens; esquecer o `* limite` faz a página 2 repetir a 1.

`findAndCountAll` devolve `rows` (a fatia) e `count` (o total **sem** o
limite) — o `totalPaginas` sai do `count`, nunca de `rows.length`.
