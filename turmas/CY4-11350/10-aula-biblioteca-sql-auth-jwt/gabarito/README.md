# Gabarito da Aula #10 — Cadastro e Login com JWT

Projeto da aula #9 com usuários, senha com hash e login devolvendo token.

```bash
npm install
npm run dev
```

Usuários já criados pelo seed — **senha dos dois: `senha123`**:

| Email | Quem é |
|---|---|
| `ana@biblioteca.com` | Ana |
| `bruno@email.com` | Bruno |

## O que mudou em relação à [#9](../../09-aula-biblioteca-sql-filtros-paginacao/gabarito/)

| Arquivo | Mudou? |
|---|---|
| [models/Usuario.js](models/Usuario.js) | **novo** — `nome`, `email` (único), `senha` |
| [models/index.js](models/index.js) | +1 import e +1 export |
| [config.js](config.js) | **novo** — a chave que assina o token |
| [controllers/authController.js](controllers/authController.js) | **novo** — `cadastrar` e `login` |
| [routes/auth.js](routes/auth.js) | **novo** — `POST /cadastro`, `POST /login` |
| [server.js](server.js) | +2 linhas, pra montar as rotas novas |
| [seed.js](seed.js) | cria os 2 usuários de teste |
| livros, autores, swagger | **idênticos à #9** |

## As duas ideias da aula, no código

**Hash (`bcrypt`)** — [authController.js](controllers/authController.js):

| Momento | Linha | O que acontece |
|---|---|---|
| Cadastro | `bcrypt.hash(senha, 10)` | guarda o embaralhado, nunca a senha |
| Login | `bcrypt.compare(senha, usuario.senha)` | **não descriptografa**: refaz o hash e compara |

A resposta do cadastro devolve `id`, `nome` e `email` — **nunca** a senha,
nem a com hash.

**JWT** — `jwt.sign({ id, email }, JWT_SECRET, { expiresIn: '1h' })`. O token
não fica guardado no servidor: quem chama a API guarda e devolve depois.

## Para testar ao vivo

| Ação | Resultado |
|---|---|
| `POST /cadastro` com nome/email/senha | `201` com os dados, sem a senha |
| mesmo email de novo | `400` "esse email ja esta cadastrado" |
| senha com menos de 6 caracteres | `400` |
| `POST /login` certo | `200` com o token |
| `POST /login` com senha errada | `401` "credenciais invalidas" |
| `POST /login` com email que não existe | `401` — **a mesma mensagem**, de propósito: não entrega quais emails existem |

Dois momentos que valem a aula inteira:

1. Abrir `biblioteca.sqlite` no Beekeeper e mostrar a coluna `senha`:
   `$2b$10$aEZqAcln...` em vez de `senha123`.
2. Colar o token em <https://jwt.io> e mostrar que o conteúdo é **legível por
   qualquer um** — o que ninguém consegue é forjar a assinatura. Daí a
   pergunta: *pode guardar a senha dentro do token?* (Não.)

## Duas escolhas deste gabarito

- **`bcryptjs`, não `bcrypt`.** Mesma API, JavaScript puro: não precisa
  compilar nada. O `bcrypt` original exige build nativo e trava a aula na
  máquina de alguém.
- **A chave vive em [config.js](config.js)**, com um valor padrão, pra rodar
  sem `.env`. Vale dizer em voz alta que em projeto de verdade ela vem do
  `.env` (que não vai pro git) — e o código já lê `process.env.JWT_SECRET`
  quando existe.
