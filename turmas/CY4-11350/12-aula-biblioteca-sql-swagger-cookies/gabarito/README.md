# Gabarito da Aula #12 — Cookie httpOnly e Login no Swagger

Projeto da aula #11 com o login mandando o token num **cookie httpOnly**, e a
tela do Swagger com botão **Authorize**.

```bash
npm install
npm run dev
```

Mesmos usuários (senha `senha123`): `ana@biblioteca.com` (bibliotecário) e
`bruno@email.com` (usuário).

## O que mudou em relação à [#11](../../11-aula-biblioteca-sql-autorizacao-jwt/gabarito/)

| Arquivo | Mudou? |
|---|---|
| [controllers/authController.js](controllers/authController.js) | o login chama `res.cookie(...)`; +`logout` |
| [middlewares/autenticar.js](middlewares/autenticar.js) | lê o token do **cookie** primeiro, do header depois |
| [server.js](server.js) | +`app.use(cookieParser())` |
| [swagger.js](swagger.js) | +`securitySchemes` — é o que faz nascer o botão Authorize |
| [routes/](routes/) | rotas públicas marcadas com `security: []`; +`POST /logout` |
| models, controllers de livros/autores, seed | **idênticos à #11** |

## Onde guardar o token

| | Quem consegue ler | Vai junto sozinho? |
|---|---|---|
| `localStorage` | **qualquer script da página** (XSS lê e rouba) | não, o código tem que anexar |
| cookie `httpOnly` | só o servidor — o JS da página **não enxerga** | sim, o navegador manda |

As opções do `res.cookie`: `httpOnly: true` (JS não lê), `secure: false`
(seria `true` com HTTPS em produção), `maxAge` de 1h (igual ao `expiresIn` do
token — senão o navegador guarda um crachá já vencido).

## Cookie **e** header

O [autenticar.js](middlewares/autenticar.js) procura o token em dois lugares,
nesta ordem: `req.cookies.token`, depois `Authorization: Bearer`. Assim o
navegador funciona sozinho (aula #13) e o Insomnia continua funcionando com o
token na mão. O login devolve o token no corpo **também**, pro botão
Authorize do Swagger.

## Para testar ao vivo

| Ação | Esperado |
|---|---|
| `POST /login` | resposta traz `Set-Cookie: token=...; HttpOnly` |
| `POST /livros` só com o cookie, sem header | `201` — o navegador/Insomnia mandou sozinho |
| mesma chamada sem cookie nenhum | `401` "nao autenticado" |
| `POST /logout` e repetir | `401` de novo — o cookie foi apagado |
| `GET /perfil` com `Authorization: Bearer` | `200` — o header ainda vale |

No navegador: DevTools → Application → Cookies. O cookie `token` aparece com
a marca **HttpOnly**, e `document.cookie` digitado no console **não mostra
ele** — é a demonstração que fecha a aula.

## Gancho para a #13

O front roda em outra porta, então vai precisar de `credentials: 'include'`
no `fetch` **e** de CORS com `credentials: true` no backend. É exatamente o
que a [aula #13](../../13-aula-biblioteca-sql-frontend/gabarito/) faz.
