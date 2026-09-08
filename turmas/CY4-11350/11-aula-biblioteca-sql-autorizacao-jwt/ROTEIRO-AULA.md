# Roteiro de Aula #11: Autorização e Controle de Acesso com JWT

## Dados
- Turma alvo: #11350 (CY4 / Sábado 14h) — Benício, Caio, Nicolas
- Projeto: continuação da Biblioteca Digital (SQLite + Sequelize)
- Duração: ~1h
- Pré-requisito: login com JWT funcionando (aula #10).

## Objetivo
Ter rotas que exigem login (middleware de autenticação) e pelo menos uma
rota que exige um papel específico (autorização).

## Conceitos da aula
| Conceito | Onde aparece |
|---|---|
| Autenticação vs. autorização (diferença) | Parte 0 |
| Middleware do Express | Parte 0 e Passo 1 |
| Header `Authorization: Bearer <token>` | Passo 1 |
| `jwt.verify` | Passo 1 |
| Papel/role e checagem de permissão | Passo 2 |

---

## 0–10 min — Parte 0: autenticação ≠ autorização

- **Autenticação** = "quem é você?" (login, o que já fizeram na aula #10).
- **Autorização** = "você pode fazer isso?" (mesmo logado, nem todo mundo
  pode tudo).
- Pergunta: *"Na biblioteca da vida real, todo mundo que tem carteirinha pode
  cadastrar um livro novo no sistema, ou só o bibliotecário?"* — isso é
  autorização.
- **Middleware** no Express é uma função que roda **antes** da rota final,
  e decide se deixa passar (`next()`) ou barra (`res.status(401)...`). Vocês
  já usam um middleware sem saber: `express.json()`.

---

## 10–35 min — Passo 1: middleware de autenticação

**Eles fazem**, `middlewares/autenticar.js`:
```js
const jwt = require('jsonwebtoken');

function autenticar(req, res, next) {
  const header = req.headers.authorization; // "Bearer eyJhbGci..."
  if (!header) return res.status(401).json({ erro: 'Token não enviado' });

  const token = header.split(' ')[1];
  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = dados; // disponível pras rotas seguintes
    next();
  } catch {
    res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
}

module.exports = autenticar;
```
(Boilerplate — pode ser dado, mas peça para eles lerem linha a linha e
explicarem o que cada parte faz antes de seguir.)

Aplicar numa rota, ex. `POST /emprestimos`:
```js
router.post('/emprestimos', autenticar, emprestimoController.criar);
```

**Teste agora:**
- `POST /emprestimos` sem header `Authorization` → `401`.
- Com `Authorization: Bearer <token inválido>` → `401`.
- Com `Authorization: Bearer <token do login>` → passa e chega no controller.
  Dentro do controller, `console.log(req.usuario)` deve mostrar o `id`/`email`.

---

## 35–50 min — Passo 2: controle por papel (role)

**Eles fazem:**
1. Adicionar campo `papel` no Model `Usuario` (string, valor padrão
   `'usuario'`; valores possíveis `'usuario'` ou `'bibliotecario'`).
2. Criar `middlewares/exigirPapel.js`:
   ```js
   function exigirPapel(papelNecessario) {
     return (req, res, next) => {
       if (req.usuario.papel !== papelNecessario) {
         return res.status(403).json({ erro: 'Sem permissão para essa ação' });
       }
       next();
     };
   }
   module.exports = exigirPapel;
   ```
3. Incluir o `papel` no token na hora do login (`jwt.sign({ id, email, papel }, ...)`).
4. Proteger `POST /livros` (cadastrar livro) para só `bibliotecario`:
   ```js
   router.post('/livros', autenticar, exigirPapel('bibliotecario'), livroController.criar);
   ```

**Teste agora:** logar com um usuário `papel: 'usuario'` e tentar
`POST /livros` → `403`. Trocar o `papel` desse usuário para
`'bibliotecario'` no Beekeeper Studio direto na tabela → tentar de novo
(com um token novo, pois o token antigo já foi gerado com o papel velho) →
funciona.

> 💡 Sacada: **o token é uma foto do momento do login.** Se o papel do
> usuário mudar depois, o token antigo continua com o papel antigo até
> expirar ou até ele logar de novo.

---

## ✅ MARCO MÍNIMO — a aula já valeu aqui
- [ ] Rota protegida devolve `401` sem token válido.
- [ ] Rota com `exigirPapel` devolve `403` para quem não tem o papel certo.
- [ ] Explicar a diferença entre `401` e `403` com as próprias palavras.

## Se sobrar tempo
1. Proteger `DELETE /livros/:id` também para `bibliotecario`.
2. Criar uma rota `GET /perfil` que devolve os dados do usuário logado a
   partir de `req.usuario` (sem consultar o banco de novo).
3. Pesquisar: o que muda se o middleware `exigirPapel` aceitar uma **lista**
   de papéis em vez de um só.

## Perguntas para conduzir a aula
- "Por que a checagem de papel tem que vir DEPOIS do `autenticar` na lista de
  middlewares, e não antes?"
- "`401` e `403` parecem a mesma coisa. Qual a diferença exata entre eles?"

## Erros comuns (cola rápida)
| Sintoma | Causa provável |
|---|---|
| `req.usuario` chega `undefined` no controller | Middleware `autenticar` não foi colocado antes do controller na rota |
| Token válido dá `401` mesmo assim | `JWT_SECRET` usado no `verify` é diferente do usado no `sign` (ex.: `.env` não recarregado) |
| `exigirPapel` sempre barra | Papel não foi incluído no `jwt.sign` do login, então `req.usuario.papel` vem `undefined` |

## Registro pós-aula
- Chegou até: (marco mínimo? algum bônus?)
- Presença: Benício / Caio / Nicolas
- Dificuldades observadas:
- Ajuste para a próxima aula:
- Próximo tema: aula #12 — Autenticação no Swagger e Cookies Seguros
