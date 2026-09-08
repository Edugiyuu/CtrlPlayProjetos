# Aula #10: Autenticação JWT com usuários em SQL (Benício, Caio, Nicolas)

## Objetivo
Criar uma tabela `Usuario` em SQL, com senha criptografada, e um fluxo de
**cadastro + login** que devolve um **token JWT** — a base de qualquer área
"logada" da Biblioteca Digital.

## O que a turma pratica
- Criar o Model `Usuario` (Sequelize) com um campo de senha.
- Criptografar senha com `bcrypt` — **nunca** guardar senha em texto puro.
- Gerar um token JWT no login com `jsonwebtoken`.
- Testar cadastro e login no Insomnia/Postman.

## Pré-requisito real
CRUD funcionando com Sequelize (aula #7). **Hash de senha e JWT são
novidade hoje.**

## Como rodar
Continuação do mesmo projeto Express.

```bash
npm install bcrypt jsonwebtoken
```

1. Seguir o [ROTEIRO-AULA.md](ROTEIRO-AULA.md).
2. Testar `POST /cadastro` e depois `POST /login`.

## Marco mínimo da aula
Cadastro cria um usuário com senha criptografada no banco; login com a senha
certa devolve um token JWT; login com senha errada devolve erro.
