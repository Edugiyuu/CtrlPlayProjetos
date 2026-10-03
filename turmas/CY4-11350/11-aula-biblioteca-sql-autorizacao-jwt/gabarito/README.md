# Gabarito da Aula #11 — Autorização por Papel

Projeto da aula #10 com rotas protegidas: ler é público, **escrever exige ser
bibliotecário**.

```bash
npm install
npm run dev
```

Os dois usuários do seed agora têm papel — senha dos dois: `senha123`:

| Email | Papel | Pode cadastrar livro? |
|---|---|---|
| `ana@biblioteca.com` | `bibliotecario` | sim |
| `bruno@email.com` | `usuario` | não (403) |

## O que mudou em relação à [#10](../../10-aula-biblioteca-sql-auth-jwt/gabarito/)

| Arquivo | Mudou? |
|---|---|
| [middlewares/autenticar.js](middlewares/autenticar.js) | **novo** — "quem é você?" |
| [middlewares/exigirPapel.js](middlewares/exigirPapel.js) | **novo** — "você pode?" |
| [models/Usuario.js](models/Usuario.js) | +1 campo: `papel` (padrão `'usuario'`) |
| [controllers/authController.js](controllers/authController.js) | o token passa a levar o `papel`; +`perfil` |
| [routes/livros.js](routes/livros.js) | POST, PUT e DELETE ganham os middlewares |
| [routes/auth.js](routes/auth.js) | +`GET /perfil` |
| livros/autores controllers, server, swagger | **idênticos à #10** |

## Autenticação ≠ autorização

| | Pergunta | Middleware | Status quando falha |
|---|---|---|---|
| Autenticação | quem é você? | `autenticar` | **401** |
| Autorização | você pode isso? | `exigirPapel('bibliotecario')` | **403** |

A ordem importa: `router.post('/', autenticar, exigirPapel('bibliotecario'), criar)`.
O `exigirPapel` lê `req.usuario`, que só existe **depois** do `autenticar`.

Repare que `exigirPapel` tem parênteses na rota e `autenticar` não: ele é uma
função que **devolve** um middleware, pra poder receber qual papel exigir.

## Para testar ao vivo

| Requisição | Esperado |
|---|---|
| `GET /livros` sem token | `200` — leitura continua pública |
| `POST /livros` sem token | `401` "token nao enviado" |
| `POST /livros` com token adulterado | `401` "token invalido ou expirado" |
| `POST /livros` logado como Bruno | `403` "sem permissao" |
| `POST /livros` logado como Ana | `201` |
| `GET /perfil` com token | `200` com os dados que estavam **dentro do token** |

## A sacada que fecha a aula

**O token é uma foto do momento do login.** Trocar o papel do Bruno para
`bibliotecario` direto no Beekeeper e tentar de novo com o token antigo:
continua `403`. Só depois de um login novo o token passa a dizer
`bibliotecario`.
